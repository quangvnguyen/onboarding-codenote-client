import { INote } from '../../type';

export interface INoteDetailProps {
  userHasAuthenticated: Function;
  isAuthenticated: boolean;
  history: {
    push: Function;
  };
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