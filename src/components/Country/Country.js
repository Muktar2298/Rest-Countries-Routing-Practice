import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Country.css";

const Country = (props) => {
  // console.log(props.country);
  const { name, flag } = props.country;
  return (
    <Card className="card-container" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={flag} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={"/country/" + name}>
          <Button variant="primary">Show Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Country;
