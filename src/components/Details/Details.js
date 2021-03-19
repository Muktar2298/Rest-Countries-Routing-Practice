import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Details.css";

const Details = (props) => {
  let history = useHistory();

  // --handleBackToHome --//
  const handleBackToHome = () => {
    // console.log('Clicked');
    history.push("/");
  };
  console.log(props.information);
  const { name, flag, population, area, capital, region } = props.information;
  return (
    <div className="details-container">
      <img src={flag} alt="" />
      <h5>Name : {name}</h5>
      <h6>Capital : {capital}</h6>
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>Region : {region}</p>
      {/* <Link to='/'><button>Back To Home</button></Link> */}
      <button onClick={handleBackToHome}>Back To Home</button>
    </div>
  );
};

export default Details;
