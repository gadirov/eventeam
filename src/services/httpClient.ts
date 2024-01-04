import type { AxiosInstance } from 'axios';

export interface IHttpClient {
  get: <T>(url: string) => Promise<T>;
  post: <T>(url: string, data?: any, config?: any) => Promise<T>;
  put: <T>(url: string, data?: any, config?: any) => Promise<T>;
  delete: <T>(url: string, config?: any) => Promise<T>;
  blobFetcher: <T>(url: string) => Promise<T>;
  getWithLang: <T>(url: string, lang: string) => Promise<T>;
  getAll: <T>(...urls: string[]) => Promise<T[]>;
}

export class HttpClient implements IHttpClient {
  public constructor(private readonly axiosInstance: AxiosInstance) {}

  public get = (url: string) =>
    this.axiosInstance.get(url).then((res) => {
      return res.data;
    });

  public getAll = <T>(...urls: string[]): Promise<T[]> => Promise.all<T>(urls.map(this.get));

  public getWithLang = (url, locale) =>
    this.axiosInstance.get(url, { headers: { 'Accept-Language': locale } }).then((res) => {
      return res.data;
    });

  public blobFetcher = (url) =>
    this.axiosInstance.get(url, { responseType: 'blob' }).then((res) => res.data);

  public post = (url: string, data?: any, config?: any) =>
    this.axiosInstance.post(url, data, config).then((res) => res.data);

  public put = (url: string, data?: any, config?: any) =>
    this.axiosInstance.put(url, data, config).then((res) => res.data);

  public delete = (url: string) => this.axiosInstance.delete(url).then((res) => res.data);
}
