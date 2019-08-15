export interface ILoginProps {
  userHasAuthenticated(isAuthenticated: boolean): Function;
}

export interface ILoginStates {
  email: string;
  password: string;
  isLoading: boolean;
}
