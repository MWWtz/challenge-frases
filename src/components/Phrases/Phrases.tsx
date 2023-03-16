import { Phrase } from "../../interfaces";
import Cards from "../Cards/Cards";

type PhrasesProps = {
  phrases: Phrase[];
};

const Phrases = ({ phrases }: PhrasesProps) => {
  return (
    <div
      role="list"
      className="d-flex align-items-center justify-content-center flex-wrap pt-5"
    >
      {phrases.map((phrase) => (
        <Cards key={phrase.pid} phrase={phrase} />
      ))}
    </div>
  );
};

export default Phrases;
