import React from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <div className="search__item">
      <h2>Search Item here</h2>
      <form action="" onSubmit={(e) => e.preventDefault(e)}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="card__error">
        <p className="error__show">{isError.show && isError.msg}</p>
      </div>
    </div>
  );
};

export default Search;
