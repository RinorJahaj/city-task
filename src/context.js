import React, { useState, useContext, useEffect, useCallback } from "react";

const url =
  "http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=5";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState([]);
  const [sort, setSort] = useState("");

  //we use callback here to only call fetchCities
  // when search term changes
  const fetchCities = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}${sort}`);
      console.log(response);
      const mydata = await response.json();
      const { data } = mydata;

      if (data) {
        const newCities = data.map((item) => {
          const { id, type, city, name } = item;
          return {
            id,
            type,
            city,
            name,
          };
        });
        setCities(newCities);
      } else {
        setCities([]);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm, sort]);

  useEffect(() => {
    fetchCities();
  }, [searchTerm, sort, fetchCities]);

  return (
    <AppContext.Provider
      value={{
        loading,
        cities,
        setSearchTerm,
        setSort,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
