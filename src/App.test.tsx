import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders header and phrases", () => {
    render(<App />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();

    const phrases = screen.getByRole("list");
    expect(phrases).toBeInTheDocument();
  });
});
