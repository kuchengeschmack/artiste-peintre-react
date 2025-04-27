import { JSX } from "react";

export type AppState = {
  currentPage: JSX.Element;
};

export const enum PAGES {
  BOOK = "book",
  LESSON = "lesson",
}

export const enum ACTIONS {
  BOOK = "root to book",
  LESSON = "root to lesson",
}

export type PageChangeAction = {
  type: string;
  payload: PAGES;
};