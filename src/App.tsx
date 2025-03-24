import { useState } from "react";
import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Book } from "./pages/book";
import { JSX } from "@emotion/react/jsx-runtime";
import { styled } from "@mui/system";

const AppSlot = styled("div")(() => ({
  minHeight: "100%",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
}));

const App = () => {
  const [page, setPage] = useState(<Book />);

  const handlePageChange = (page: JSX.Element) => () => {
    setPage(page);
  };

  return (
    <AppSlot>
      <Header pageChange={handlePageChange} />
      {page}
      <Footer />
    </AppSlot>
  );
};

export default App;
