import { INote } from '../../type';

export interface IHomeProps {
  userHasAuthenticated: Function;
  isAuthenticated: boolean;
  history: {
    push: Function;
  };
}

export interface IHomeStates {
  isLoading: boolean;
  notes: Array<INote>;
}