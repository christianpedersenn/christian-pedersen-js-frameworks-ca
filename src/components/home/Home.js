import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import Search from "./Search";
import HomeContent from "./HomeContent";
import Title from "../../constants/title";
import CardDeck from "react-bootstrap/CardDeck";
import Spinner from "react-bootstrap/Spinner";

function Home() {
  const [games, setGames] = useState([]);
  const [filterGames, setFilterGames] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => {
        setGames(data.results);
        setFilterGames(data.results);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleInput = e => {
    const inputValue = e.target.value.toLowerCase();
    const filterArr = games.filter(function(game) {
      if (game.name.toLowerCase().indexOf(inputValue) !== -1) {
        return true;
      } else {
        return false;
      }
    });

    setFilterGames(filterArr);
  };

  if (loading) {
    return (
      <>
        <Spinner animation="border" variant="primary" role="status" className="spinner"/>
      </>
    );
  }
  function searchResult() {
    if (filterGames.length === 0 || filterGames.length === null) {
      setTimeout(() => {
        return (
          <div>
            <br></br>
            <h3>Sorry, we couldn't find the game you searched for.. Please try to search for another game. </h3>
          </div>
        );
      }, 1500);
    }
    
    return filterGames.map(game => {
      const { id, name, background_image, rating, released } = game;
      return (
        <HomeContent key={id} id={id} name={name} image={background_image} rating={rating} releaseDate={released}/>
      );
    });
  }

  return (
    <>
      <Title title="Games" role="heading" />
      <Search handleSearch={handleInput} role="search" />
      <CardDeck as="main" role="main">
        {searchResult()}
      </CardDeck>
    </>
  );
}

export default Home;
