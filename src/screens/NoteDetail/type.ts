import { INote } from '../../type';

export interface INoteDetailProps {
  userHasAuthenticated: (isAuthenticated: boolean) => void;
  isAuthenticated: boolean;
  history: {
    push: (url: string) => void;
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