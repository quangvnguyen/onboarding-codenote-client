export interface IAppProps {
  history: {
    push: (url: string) => void;
  };
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