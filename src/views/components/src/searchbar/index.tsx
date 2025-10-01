import React from "react";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="sac_searchbar">
      <Search className="sac_searchbar__icon" />
      <input
        placeholder="Recherche"
        type="search"
        className="sac_searchbar__input"
      />
    </div>
  );
}

export default SearchBar;
