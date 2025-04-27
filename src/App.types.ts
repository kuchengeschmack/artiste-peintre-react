import { JSX } from "@emotion/react/jsx-runtime";

export type PageChangeAction = {
  type: string;
  payload: string;
};

export type AppState = {
  currentPage: JSX.Element;
};