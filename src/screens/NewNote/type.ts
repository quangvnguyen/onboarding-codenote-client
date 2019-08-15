export interface INewNoteProps {
  history: {
    push: (url: string) => void;
  };
}

export interface INewNoteStates {
  isLoading: boolean;
  content: string;
}