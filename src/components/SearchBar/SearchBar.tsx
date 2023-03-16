export type SearchBarProps = {
  handleSearch: (arg: string) => void;
  wordsToMatch: string;
};

const SearchBar = ({ handleSearch, wordsToMatch }: SearchBarProps) => {
  return (
    <div>
      <input
        className="form-control my-3 mr-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="phrase"
        value={wordsToMatch}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
