type SearchBarPropTypes = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};
const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarPropTypes) => {
  return (
    <div className="text-center py-14 bg-[#dadbf0]">
      <h1 className="text-5xl mb-8">How can we help?</h1>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border rounded-sm px-4 py-2 w-[40%]"
      />
    </div>
  );
};

export default SearchBar;
