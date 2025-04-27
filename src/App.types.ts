import { JSX } from "react";

export type AppState = {
  currentPage: JSX.Element;
};

export const enum Pages {
  BOOK = "book",
  LESSON = "lesson",
}

export const enum Actions {
  BOOK = "root to book",
  LESSON = "root to lesson",
}

export type PageChangeAction = {
  type: string;
  payload: Pages;
};