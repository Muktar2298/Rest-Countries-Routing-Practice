import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Details from "../Details/Details";

const CountryDetails = () => {
  let { countryName } = useParams();

  const [country, setCountry] = useState([]);
  // console.log(countryName);

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  });
  return (
    <div>
      {/* <h1>Country Details Comming!!</h1>
            <p>Name:{country.length}</p> */}
      {country.map((information) => (
        <Details information={information}></Details>
      ))}
    </div>
  );
};

export default CountryDetails;
