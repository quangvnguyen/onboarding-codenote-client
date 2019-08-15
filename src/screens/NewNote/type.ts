import * as H from 'history';

export interface INewNoteProps {
  history: H.History;
}

export interface INewNoteStates {
  isLoading: boolean;
  content: string;
}