import React, { useState, useEffect } from "react";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [val, setVal] = useState("");

  async function fetchData() {
    const res = await fetch("https://swapi.dev/api/films");
    const { results } = await res.json();
    setResults(results);
  }

  useEffect(() => {
    fetchData();
  }, []); // Нормально ли это?

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(val);
    setVal("");
  };

  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="form-inline mr-5">
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="form-control mr-2"
        />
        <button className="btn btn-success">Click me</button>
      </form>
      <h1>Total: {results.length} items</h1>
    </div>
  );
};

export default SearchResults;
