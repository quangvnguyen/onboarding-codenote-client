export interface INewNoteProps {
  history: {
    push: Function;
  };
}

export interface INewNoteStates {
  isLoading: boolean;
  content: string;
}