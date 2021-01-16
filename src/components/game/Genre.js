import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function Genre({ genres }) {
  return (
    <ListGroup as="ul">
      <b>Genre</b>
      {
        genres.map((genre, i) => (
          <ListGroupItem key={i} as="li">
            {genre.name}
          </ListGroupItem>
        ))
      }
    </ListGroup>
  );
}

Genre.propTypes = {
  genres: PropTypes.array.isRequired
};
export default Genre;
