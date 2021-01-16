import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function Platform({ platforms }) {
  return (
    <ListGroup as="ul">
      <b>Platform</b>
      {
        platforms.map((platform, i) => (
          <ListGroupItem key={i} as="li">
            {platform.platform.name}
          </ListGroupItem>
        ))
      }
    </ListGroup>
  );
}

Platform.propTypes = {
  platforms: PropTypes.array.isRequired
};
export default Platform;
