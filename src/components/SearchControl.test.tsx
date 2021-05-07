import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchControl from "./SearchControl";

test("The search input on change fires", () => {
  const mockOnChange = jest.fn();
  render(
    <SearchControl
      value={""}
      placeholder="test"
      onChange={mockOnChange}
      onSearch={() => {}}
    />
  );
  userEvent.type(screen.getByTestId("search-input"), "mars");
  expect(mockOnChange).toBeCalledTimes(4);
});

test("The search input is searchable by the enter key", () => {
  const mockOnSearch = jest.fn();
  render(
    <SearchControl
      value={""}
      placeholder="test"
      onChange={() => {}}
      onSearch={mockOnSearch}
    />
  );
  fireEvent.keyDown(screen.getByTestId("search-input"), {
    key: "Enter",
    code: "Enter",
  });
  expect(mockOnSearch).toBeCalled();
});
