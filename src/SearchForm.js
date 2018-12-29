import React from "react";

const SearchForm = props => {
  const onSubmit = event => {
    event.preventDefault();
    props.onFormSubmit();
  };
  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter dad joke search term..."
        onChange={event => props.onSearchValueChange(event.target.value)}
      />
      <div>
        <button disabled={props.isSearching}>Search</button>
        <button
          onClick={props.onSingleSearchClick}
          disabled={props.isSearching}
        >
          I'm feeling funny
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
