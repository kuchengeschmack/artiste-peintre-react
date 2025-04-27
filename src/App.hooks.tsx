import { useReducer } from "react";
import { changePageReducer } from "./App.reducers";
import { AppState } from "./App.types";
import { Book } from "./pages/book";

export const useApp = () => {
  const initialState: AppState = { currentPage: <Book /> };
  const [state, dispatch] = useReducer(changePageReducer, initialState);

  /**
   * Dispatches an action to the state to change page
   * @param page - page name
   */
  const handleClick = (page: string) =>
    dispatch({ type: `change page to ${page}`, payload: page });

  return { state, handleClick };
};
