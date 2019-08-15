import * as H from 'history';
import { INote } from '../../type';

export interface INoteDetailProps {
  userHasAuthenticated: (isAuthenticated: boolean) => void;
  isAuthenticated: boolean;
  history: H.History;
  match: {
    params: {
      id: string;
    }
  }
}

export interface INoteDetailStates {
  isLoading: boolean;
  isDeleting: boolean;
  note: INote;
  content: string;
  attachmentURL: string;
}