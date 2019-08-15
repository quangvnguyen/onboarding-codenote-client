import * as H from 'history';

export interface INavigationProps {
  userHasAuthenticated: (isAuthenticated: boolean) => void;
  isAuthenticated: boolean;
  history: H.History;
}

export interface INavigationStates {

}
