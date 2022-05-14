/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/Search.svg";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQuery = (e) => {
    setQuery(e.target.value);
  };

  const onSearch = () => {
    navigate(`/explore/search?query=${query}`);
    setQuery("");
  };

  return (
    <div className='input-field search-bar'>
      <input
        placeholder='Search videos'
        value={query}
        onChange={searchQuery}
        onKeyUp={(e) => {
          if (e.key === "Enter" && query.length > 2) {
            return onSearch();
          }
        }}
        required
        type='search'
      />
      {query.length > 2 && (
        <SearchIcon
          width='20px'
          height='20px'
          className='search-bar-icon'
          onClick={onSearch}
        />
      )}
    </div>
  );
};

export default SearchBar;
