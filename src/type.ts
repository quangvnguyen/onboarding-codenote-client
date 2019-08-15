export interface IAppProps {
  history: {
    push: Function;
  };
  userHasAuthenticated: Function;
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