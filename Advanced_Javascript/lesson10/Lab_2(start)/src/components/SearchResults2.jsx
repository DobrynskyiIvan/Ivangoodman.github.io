import React, { useState, useEffect, useCallback } from "react";

const SearchResults2 = () => {
  const [items, setItems] = useState([]);
  const [val, setVal] = useState("");
  const [query, setQuery] = useState("planets");

  const getFetchUrl = useCallback(() => {
    return "https://swapi.dev/api/" + query;
  }, [query]);

  useEffect(() => {
    const url = getFetchUrl();
    fetch(url)
      .then((r) => r.json())
      .then(({ results }) => {
        setItems(results);
        setVal("");
      });
  }, [getFetchUrl]);

  const handleChange = (e) => setVal(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(val);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col">
            <input
              value={val}
              onChange={handleChange}
              type="text"
              name="query"
              id="query"
              className="form-control"
            />
          </div>
          <div className="col">
            <button className="btn btn-primary">Send request</button>
          </div>
        </div>
      </form>
      <h2>Count items: {items.length}</h2>
    </>
  );
};

export default SearchResults2;
