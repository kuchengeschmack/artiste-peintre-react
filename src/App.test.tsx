/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./App.hook", () => ({
  useApp: jest.fn(() => ({
    state: { currentPage: <></> },
    handlePageChange: jest.fn(() => {}),
  })),
}));

describe("App component", () => {
  it("should render correctly", () => {
    render(<App />);

    expect(screen.getByTestId("App")).toBeDefined();
  });
});
