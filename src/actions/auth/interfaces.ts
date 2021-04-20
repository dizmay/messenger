export interface ResponseUserData {
  id: string
  email: string
  username: string
  iat: number
  exp: number
}

export interface UserData {
  email: string
  username: string
  password: string
}

export interface LoginData {
  email: string
  password: string
}

export type JwtDecodeType = null | { [key: string]: any } | string