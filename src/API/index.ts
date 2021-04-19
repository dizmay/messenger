import axios from 'axios';

const baseURL = 'http://localhost:8080/api/';

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
  createUser(userData: RegistrationData) {
    return axios.post(`${baseURL}auth/registration`, userData)
  },

  loginUser(userData: LoginData) {
    return axios.post(`${baseURL}auth/login`, userData)
  }
}
