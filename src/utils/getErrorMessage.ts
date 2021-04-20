import { AxiosError } from "axios";

export const getErrorMessage = (error: AxiosError) => {
  const data = error.response?.data;
  if (data.message) return data.message;
  const firstError = data[Object.keys(data)[0]];
  if(typeof firstError === 'string') return firstError;
  return firstError[0];
}
