import axios, { AxiosInstance } from "axios";

import Cookies from "js-cookie";
import { BaseUrl } from "../const.ts";

export interface IAxiosService {
  axiosInstance: AxiosInstance;
}

export class AxiosService implements IAxiosService {
  private readonly _axiosInstance;

  constructor() {
    this._axiosInstance = axios.create({ baseURL: "/" });
    this._axiosInstance.interceptors.request.use(
      async (config) => {
        config.baseURL = `${BaseUrl}:38765`;
        config.headers.authorization = `Bearer ${Cookies.get("access")}`;
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }

  public get axiosInstance(): AxiosInstance {
    return this._axiosInstance;
  }
}
