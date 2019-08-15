export interface ILoginProps {
  userHasAuthenticated: (isAuthenticated: boolean) => void;
}

export interface ILoginStates {
  email: string;
  password: string;
  isLoading: boolean;
}
