export interface IHttpClientReqParamsWithPayload<P> {
  url: string
  requiresToken: boolean
  payload: P
}

export interface IHttpClientReqParamsWithoutPayload {
  url: string
  requiresToken: boolean
}

export interface IHttpClient {
  get<T>(params: IHttpClientReqParamsWithoutPayload): Promise<T>
  getOne<T, P>(params: IHttpClientReqParamsWithPayload<P>): Promise<T>
  post<T, P>(params: IHttpClientReqParamsWithPayload<P>): Promise<T>
  put<T, P>(params: IHttpClientReqParamsWithPayload<P>): Promise<T>
  delete<T, P>(params: IHttpClientReqParamsWithPayload<P>): Promise<T>
}