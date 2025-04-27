import { useReducer } from "react";
import { changePageReducer } from "./App.reducer";
import { AppState, Pages } from "./App.types";
import { Book } from "./pages/book";

export const useApp = () => {
  const initialState: AppState = { currentPage: <Book /> };
  const [state, dispatch] = useReducer(changePageReducer, initialState);

  /**
   * Dispatches an action to the state to change page
   * @param page - page name
   */
  const handlePageChange = (page: Pages) =>
    dispatch({ type: `root to ${page}`, payload: page });

  return { state, handlePageChange };
};
