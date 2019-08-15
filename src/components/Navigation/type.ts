export interface INavigationProps {
  userHasAuthenticated: (isAuthenticated: boolean) => void;
  isAuthenticated: boolean;
  history: {
    push: (url: string) => void;
  };
}

export interface INavigationStates {

}
