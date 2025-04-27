import { ACTIONS, AppState, PageChangeAction } from "./App.types";
import { Book } from "./pages/book";
import { Lesson } from "./pages/lesson";

const STORE = {
  BOOK: <Book />,
  LESSON: <Lesson />,
} as const;

export const changePageReducer = (
  state: AppState,
  action: PageChangeAction
) => {
  console.log("Dispatch action to state", action);

  switch (action.type) {
    case ACTIONS.BOOK: {
      return { ...state, currentPage: STORE.BOOK };
    }
    case ACTIONS.LESSON: {
      return { ...state, currentPage: STORE.LESSON };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
