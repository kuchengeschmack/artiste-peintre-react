import { useApp } from "./App.hooks";
import { AppSlot } from "./App.slots";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

const App = () => {
  const { state, handleClick } = useApp();

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
      <Header handleClick={handleClick} />
      {state.currentPage}
      <Footer />
    </AppSlot>
  );
};

export default App;
