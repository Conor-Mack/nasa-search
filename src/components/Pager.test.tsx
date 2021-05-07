import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Pager from "./Pager";

test("it renders the pager component", () => {
  const pager = <Pager activePage={1} onChange={() => {}} />;
  const { container } = render(pager);
  expect(container).toBeInTheDocument();
});

test("onChange function is called when button is clicked", async () => {
  const mockOnChange = jest.fn();
  const pager = <Pager activePage={1} onChange={mockOnChange} />;
  render(pager);
  const nextButton = screen.getByText("Next") as HTMLButtonElement;
  fireEvent.click(nextButton);
  fireEvent.click(nextButton);
  await waitFor(() => expect(mockOnChange).toHaveBeenCalledTimes(2));
});

test("Pager has correct page count", async () => {
  const pager = <Pager activePage={3} onChange={() => {}} />;
  render(pager);
  expect(screen.getByText("Page 3")).toBeDefined();
});
