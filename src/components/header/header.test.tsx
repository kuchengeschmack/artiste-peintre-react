/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./header";

const handleClickMock = jest.fn(() => {});

describe("Header component", () => {
  it("should render correctly", async () => {
    render(<Header handlePageChange={handleClickMock} />);

    await userEvent.click(screen.getByText('Book'));
    await userEvent.click(screen.getByText('Cours de piano'));

    expect(handleClickMock).toHaveBeenCalledTimes(2);
  });
});
