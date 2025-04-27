import { useApp } from "./App.hook";
import { AppSlot } from "./App.slot";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

const App = () => {
  const { state, handlePageChange } = useApp();

  return (
    <AppSlot
      sx={{
        height: "100vh",
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        textAlign: "center",
      }}
      data-testid="App"
    >
      <Header handlePageChange={handlePageChange} />
      {state.currentPage}
      <Footer />
    </AppSlot>
  );
};

export default App;
