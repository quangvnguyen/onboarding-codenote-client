export interface ILoginState {
  email: string;
  password: string;
  isLoading: boolean;
}

export interface ILoginProps {
  userHasAuthenticated(isUserAuthenticated: boolean): Function;
}