export interface INoteNewProps {
  history: Object;
}

export interface INoteNewState {
  note: {
    attachment: string;
  };
  content: string;
  attachmentURL: string;
  isLoading: boolean;
}
