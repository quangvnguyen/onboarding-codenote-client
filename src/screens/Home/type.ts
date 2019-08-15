import { INote } from '../../type';

export interface IHomeProps {
  userHasAuthenticated: (isAuthenticated: boolean) => void;
  isAuthenticated: boolean;
  history: {
    push: (url: string) => void;
  };
}

export interface IHomeStates {
  isLoading: boolean;
  notes: Array<INote>;
}