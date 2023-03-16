import { render, screen } from "@testing-library/react";
import Cards from "./Cards";
import { Phrase } from "../../interfaces";

describe("Cards component", () => {
  const phrase: Phrase = {
    text: "Example phrase",
    author: "Martin",
    pid: "1299",
  };

  test("renders correctly", () => {
    render(<Cards phrase={phrase} />);
    expect(screen.getByText(`"${phrase.text}"`)).toBeInTheDocument();
    expect(screen.getByText(`- ${phrase.author}`)).toBeInTheDocument();
  });

  test("renders phrase text and author name correctly", () => {
    render(<Cards phrase={phrase} />);
    const phraseText = screen.getByText(`"${phrase.text}"`);
    const authorName = screen.getByText(`- ${phrase.author}`);
    expect(phraseText).toBeInTheDocument();
    expect(authorName).toBeInTheDocument();
  });

  test("renders 'Unknown' for author name if not provided", () => {
    const phraseWithoutAuthor: Phrase = {
      text: "Example phrase without author",
      pid: "1299",
    };
    render(<Cards phrase={phraseWithoutAuthor} />);
    const authorName = screen.getByText("- Unknown");
    expect(authorName).toBeInTheDocument();
  });
});
