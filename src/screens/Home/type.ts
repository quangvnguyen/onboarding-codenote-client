import * as H from 'history';
import { INote } from '../../type';

export interface IHomeProps {
  userHasAuthenticated: (isAuthenticated: boolean) => void;
  isAuthenticated: boolean;
  history: H.History;
}

export interface IHomeStates {
  isLoading: boolean;
  notes: Array<INote>;
}