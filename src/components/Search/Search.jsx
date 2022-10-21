import React from 'react';

const Search = ({value, onChange}) => {
  return (
    <div className="mb-3">
      <input
        onChange={(event) => onChange(event.target.value)}
        value={value}
        type="search"
        className="form-control"
        id="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
