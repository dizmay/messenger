import { RootState } from "../../reducers";

export const selectIsLogged = (state: RootState) => state.auth.isLogged;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectIsError = (state: RootState) => state.auth.isError;

export const selectMessage = (state: RootState) => state.auth.message;