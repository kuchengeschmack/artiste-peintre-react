import { AppState, PageChangeAction } from "./App.types";
import { Book } from "./pages/book";
import { Lesson } from "./pages/lesson";

export const changePageReducer = (
  state: AppState,
  action: PageChangeAction
) => {
  console.log("Dispatch action to state", action);

  switch (action.type) {
    case "change page to book": {
      return { ...state, currentPage: <Book /> };
    }
    case "change page to lesson": {
      return { ...state, currentPage: <Lesson /> };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
