import { render, screen } from "@testing-library/react";
import Phrases from "./Phrases";
import { Phrase } from "../../interfaces";

describe("Phrases", () => {
  const phrases: Phrase[] = [
    { pid: "1", text: "Hello", author: "tester1" },
    { pid: "2", text: "Goodbye", author: "tester1" },
  ];

  test("renders all phrases correctly", () => {
    render(<Phrases phrases={phrases} />);
    phrases.forEach((phrase) => {
      expect(screen.getByText(`"${phrase.text}"`)).toBeInTheDocument();
    });
  });
});
