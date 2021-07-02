import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, setSort } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCity = () => {
    setSearchTerm("&namePrefix=" + searchValue.current.value);
    console.log(searchValue);
  };

  const handleSort = () => {
    setSort("&sort=name");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search City</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCity}
          ></input>
        </div>
        <div className="mt-min form-control">
          <label htmlFor="sort">Sort City</label>
          <button onClick={handleSort} className="btn btn-primary">
            A-Z
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
