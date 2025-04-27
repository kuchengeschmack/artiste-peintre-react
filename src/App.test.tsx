/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./App.hooks", () => ({
  useApp: jest.fn(() => ({
    state: { currentPage: <></> },
    handleClick: () => {},
  })),
}));

describe("App component", () => {
  it("should render correctly", async () => {
    await render(<App />);
    
    expect(screen.getByTestId("App")).toBeDefined();
  });
});
