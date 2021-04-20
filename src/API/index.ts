import { httpClient } from './config';

interface RegistrationData {
  email: string
  username: string
  password: string
}

interface LoginData {
  email: string
  password: string
}

export const authAPI = {
  createUser(userData: RegistrationData): Promise<string> {
    const getParams = {
      url: 'auth/registration',
      payload: userData,
      requiresToken: false,
    }
    return httpClient.post<string, RegistrationData>(getParams);
  },

  loginUser(userData: LoginData): Promise<string> {
    const getParams = {
      url: 'auth/login',
      payload: userData,
      requiresToken: false,
    }
    return httpClient.post<string, LoginData>(getParams);
  }
}
