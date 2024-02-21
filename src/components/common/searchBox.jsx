import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        name="query"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder="search..."
        className="form-control my-3"
      />
    </div>
  );
};

export default SearchBox;
