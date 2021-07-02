import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "http://geodb-free-service.wirefreethought.com/v1/geo/cities/";

const SingleCity = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getCity = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data);

        if (data.data) {
          const { name, city, country, countryCode, type, population } =
            data.data;

          const newCity = {
            name,
            countryCode,
            type,
            city,
            population,
            country,
          };

          setCity(newCity);
        } else {
          setCity(null);
        }

        setLoading(false);

        console.log(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getCity();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!city) {
    return <h2 className="section-title">No city to display</h2>;
  }

  const { name, type, population, country, countryCode } = city;

  return (
    <section className="section city-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>

      <h2 className="section-title">{name}</h2>
      <div className="details">
        <div className="details-info">
          <p>
            <span className="details-data">name:</span>
            {name}
          </p>
          <p>
            <span className="details-data">type:</span>
            {type}
          </p>
          <p>
            <span className="details-data">population:</span>
            {population}
          </p>
          <p>
            <span className="details-data">country:</span>
            {country}
          </p>
          <p>
            <span className="details-data">country Code:</span>
            {countryCode}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCity;
