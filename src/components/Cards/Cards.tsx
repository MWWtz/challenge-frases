import { Phrase } from "../../interfaces";
import "./styles.css";

type Props = {
  phrase: Phrase;
};

const Cards = ({ phrase }: Props) => {
  return (
    <div className="d-flex flex-column justify-content-center m-2 p-3 container">
      <p className="text-center fw-bold">"{phrase.text}"</p>
      <p className="text-center fst-italic">
        - {phrase.author ? phrase.author : "Unknown"}
      </p>
    </div>
  );
};

export default Cards;
