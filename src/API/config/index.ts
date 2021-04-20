import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getErrorMessage } from "../../utils/getErrorMessage";
import { IHttpClient, IHttpClientReqParamsWithoutPayload, IHttpClientReqParamsWithPayload } from "./interfaces";

export class HttpClient implements IHttpClient {

  token: string | null = localStorage.getItem('token');
  config: AxiosRequestConfig = {
    headers: {},
    baseURL: 'http://localhost:8080/api/',
  }

  get<T>(params: IHttpClientReqParamsWithoutPayload): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { requiresToken, url } = params;
      const requestUrl = this.config.baseURL + url;

      if (requiresToken) {
        this.config.headers.Authorization = `Bearer ${this.token}`;
      }

      axios.get(requestUrl, this.config)
        .then((response: AxiosResponse) => {
          resolve(response.data)
        })
        .catch((err: AxiosError) => {
          reject(getErrorMessage(err))
        })
    })
  }

  post<T, P>(params: IHttpClientReqParamsWithPayload<P>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { payload, url, requiresToken } = params;
      const requestUrl = this.config.baseURL + url;

      if (requiresToken) {
        this.config.headers.Authorization = `Bearer ${this.token}`;
      }

      axios.post(requestUrl, payload, this.config)
        .then((response: AxiosResponse) => {
          resolve(response.data)
        })
        .catch((err: AxiosError) => {
          reject(getErrorMessage(err))
        })
    })
  }
}

export const httpClient = new HttpClient();