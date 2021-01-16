import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Platform from "./Platform";
import Genre from "./Genre";
import { BASE_URL } from "../../constants/api";
import Title from "../../constants/title";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

function GameDetail() {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const gameUrl = BASE_URL + "/" + id;

  useEffect(() => {
    fetch(gameUrl)
      .then(response => response.json())
      .then(json => setDetail(json))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [gameUrl]);

  if (loading) {
    return (
      <>
        <Spinner animation="border" variant="primary" role="status" className="spinner"/>
      </>
    );
  }

  if (detail.website === undefined || detail.website === '') {
    return (
      <>
      <section className="errorMessage">
        <h3 className="errorMessage">Sorry, we weren't able to find any information about this game..</h3>
      </section> 
      </>
    );
  } else {
    const cardStyle = {
      'boxShadow': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    } 
    return (
      <>
        <Title title={detail.name} role="heading" />
        <img src={detail.background_image} alt={detail.name} className="image col-lg-10"/>
          <Card style={cardStyle}>
            <Card.Body>
              <p>{detail.description_raw}</p>
              <b>Official website: </b><a href={detail.website} target="_blank" rel="noopener noreferrer">{detail.website}</a>
            </Card.Body>
          </Card>
          <br></br>
        <Genre genres={detail.genres} />
        <br></br>
        <Platform platforms={detail.platforms} />
      </>
    );    
  } 
}

export default GameDetail;
