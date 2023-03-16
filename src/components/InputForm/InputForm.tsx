import { useState } from "react";
import { Phrase } from "../../interfaces";

export type FormProps = {
  addNewPhrase: (arg: Phrase) => void;
};

const InputForm = ({ addNewPhrase }: FormProps) => {
  const [text, setText] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPhrase: Phrase = {
      text,
      author,
      pid: Date.now().toString(),
    };
    addNewPhrase(newPhrase);
    setText("");
    setAuthor("");
  };

  return (
    <form name="form" className="form form-container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="newPhrase">
          New Phrase
        </label>
        <textarea
          id="newPhrase"
          className="form-control mr-sm-2"
          placeholder="Write a phrase here"
          maxLength={70}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="author">
          Author
        </label>
        <input
          type="text"
          name="author"
          id="author"
          className="form-control mr-sm-2"
          value={author}
          maxLength={20}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Crear
      </button>
    </form>
  );
};

export default InputForm;
