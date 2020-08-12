import React, { useState, useEffect } from "react";

const SearchResults1 = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);

  function getFetchUrl(query) {
    return "https://swapi.dev/api/" + query;
  }

  useEffect(() => {
    const url = getFetchUrl("films");
    fetch(url)
      .then((r) => r.json())
      .then(({ results }) => setFilms(results));
  }, []);

  useEffect(() => {
    const url = getFetchUrl("people");
    fetch(url)
      .then((r) => r.json())
      .then(({ results }) => setPeople(results));
  }, []);

  return (
    <div className="row">
      <ul className="col-md-5">
        {films.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
      <ul className="col-md-5">
        {people.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults1;
