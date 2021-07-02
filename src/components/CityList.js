import React from "react";
import City from "./City";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CityList = () => {
  const { cities, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cities.length < 1) {
    return <h2 className="section-title">No city matched you search term</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">Cities</h2>
      <div className="cities-center">
        {cities.map((item) => {
          return <City key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CityList;
