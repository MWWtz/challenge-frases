import { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import Phrases from "./components/Phrases/Phrases";
import { Phrase } from "./interfaces";
import SearchBar from "./components/SearchBar/SearchBar";
import { EXAMPLE } from "./constants";
import "./App.css";

function App() {
  const [phrases, setPhrases] = useState<Phrase[]>(EXAMPLE);
  const [search, setSearch] = useState<string>("");

  const addNewPhrase = (newPhrase: Phrase) => {
    setPhrases([...phrases, newPhrase]);
  };

  const filteredPhrases =
    search.length >= 3
      ? phrases.filter((phrase) => {
          const regex = new RegExp(search, "gi");
          return phrase.text.match(regex);
        })
      : phrases;

  return (
    <div className="app-container">
      <header
        role="banner"
        className="d-flex flex-column flex-sm-row justify-content-between px-5 py-3 header"
      >
        <InputForm addNewPhrase={addNewPhrase} />
        <SearchBar handleSearch={setSearch} wordsToMatch={search} />
      </header>
      <Phrases phrases={filteredPhrases} />
    </div>
  );
}

export default App;
