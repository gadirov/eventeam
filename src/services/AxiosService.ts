import axios, { AxiosInstance } from "axios";
import createAuthRefreshInterceptor, {
  AxiosAuthRefreshRequestConfig,
} from "axios-auth-refresh";
import Cookies from "js-cookie";

export interface IAxiosService {
  axiosInstance: AxiosInstance;
  refreshTokenUrl: string;
}

export class AxiosService implements IAxiosService {
  private readonly _axiosInstance;
  private readonly _refreshTokenUrl;

  constructor() {
    this._axiosInstance = axios.create({ baseURL: "/" });
    this._axiosInstance.interceptors.request.use(
      async (config) => {
        config.baseURL = "http://173.212.221.237:38765";
        if (config.url !== this._refreshTokenUrl) {
          config.headers.authorization = `Bearer ${Cookies.get("access")}`;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    this._refreshTokenUrl = `auth/v1/auth/admin/refresh-token`;

    const refreshAuthLogic = () => {
      return this.axiosInstance
        .post(this._refreshTokenUrl, {}, {
          headers: {
            Authorization: `Bearer ${Cookies.get("refresh")}`,
          },
          skipAuthRefresh: true,
        } as AxiosAuthRefreshRequestConfig)
        .then((response) => {
          Cookies.set("access", response.data.accessToken);
          Cookies.set("refresh", response.data.refreshToken);
          return Promise.resolve();
        })
        .catch((err) => {
          Cookies.remove("access");
          Cookies.remove("refresh");

          return Promise.reject(err);
        });
    };

    createAuthRefreshInterceptor(this._axiosInstance, refreshAuthLogic, {
      retryInstance: this._axiosInstance,
    });
  }

  public get axiosInstance(): AxiosInstance {
    return this._axiosInstance;
  }

  public get refreshTokenUrl(): string {
    return this._refreshTokenUrl;
  }
}
