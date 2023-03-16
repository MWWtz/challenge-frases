import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar, { SearchBarProps } from "./SearchBar";

describe("SearchBar", () => {
  const handleSearch = jest.fn();
  const wordsToMatch = "test";

  const defaultProps: SearchBarProps = {
    handleSearch,
    wordsToMatch,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(<SearchBar {...defaultProps} />);
    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeInTheDocument();
  });

  test("displays the correct wordsToMatch value", () => {
    render(<SearchBar {...defaultProps} />);
    const input = screen.getByPlaceholderText("Search");
    expect(input).toHaveValue("test");
  });

  test("calls handleSearch function when input value changes", () => {
    render(<SearchBar {...defaultProps} />);
    const input = screen.getByPlaceholderText("Search");
    fireEvent.change(input, { target: { value: "new test" } });
    expect(handleSearch).toHaveBeenCalledWith("new test");
  });
});
