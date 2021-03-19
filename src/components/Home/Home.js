import React, { useState } from "react";
import "./Home.css";

import { useEffect } from "react";
import Country from "../Country/Country";

const Home = () => {
  const [countries, setCountries] = useState([]);

  // --data load --//
  useEffect(() => {
    let url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="country-container">
      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
};

export default Home;
