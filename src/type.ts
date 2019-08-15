import * as H from 'history';

export interface IAppProps {
  history: H.History;
  userHasAuthenticated: (isAuthenticated: boolean) => void;
}

export interface IAppStates {
  isAuthenticating: boolean;
}

export interface INote {
  noteId: string;
  createdAt: number;
  attachment: string;
  content: string;
}