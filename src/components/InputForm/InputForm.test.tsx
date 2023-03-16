import { render, screen, fireEvent } from "@testing-library/react";
import InputForm from "./InputForm";

describe("InputForm", () => {
  const addNewPhraseMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render a form with two inputs and a button", () => {
    render(<InputForm addNewPhrase={addNewPhraseMock} />);
    expect(screen.getByRole("form")).toBeInTheDocument();

    const newPhraseInput = screen.getByLabelText("New Phrase");
    expect(newPhraseInput).toBeInTheDocument();
    expect(newPhraseInput).toHaveAttribute("required");

    const authorInput = screen.getByLabelText("Author");
    expect(authorInput).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: "Crear" });
    expect(submitButton).toBeInTheDocument();
  });

  it("should call addNewPhraseMock when form is submitted with valid inputs", () => {
    render(<InputForm addNewPhrase={addNewPhraseMock} />);
    const newPhraseInput = screen.getByLabelText("New Phrase");
    const authorInput = screen.getByLabelText("Author");
    const submitButton = screen.getByRole("button", { name: "Crear" });

    fireEvent.change(newPhraseInput, {
      target: { value: "This is a new test!" },
    });
    fireEvent.change(authorInput, { target: { value: "Martin" } });
    fireEvent.click(submitButton);

    expect(addNewPhraseMock).toHaveBeenCalledTimes(1);
    expect(addNewPhraseMock).toHaveBeenCalledWith({
      text: "This is a new test!",
      author: "Martin",
      pid: expect.any(String),
    });
    expect(newPhraseInput).toHaveValue("");
    expect(authorInput).toHaveValue("");
  });
});
