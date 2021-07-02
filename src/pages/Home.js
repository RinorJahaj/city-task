import React from "react";
import CityList from "../components/CityList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CityList />
    </main>
  );
};

export default Home;
