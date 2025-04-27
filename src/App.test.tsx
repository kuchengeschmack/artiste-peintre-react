import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render correctly", () => {
    render(App());

    expect(screen.getByTestId("App")).toBeDefined()
  });
});
