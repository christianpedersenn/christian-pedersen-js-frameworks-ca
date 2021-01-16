import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";

const cardStyle = {
  height: '450px',
  'position': 'relative',
  'boxShadow': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
}  

const imageStyle = {
  height: '200px',
  'objectFit': 'cover'
} 

const titleStyle = {
  'fontSize': '1rem'
} 

const ListGroupStyle = {
  'position': 'absolute',
  'bottom': 0,
  'left': 0,
  'width': '100%',
} 

const ListGroupItemStyle = {
  'borderTopLeftRadius': '0px',
  'borderTopRightRadius': '0px'
} 

const ButtonStyle = {
  'borderRadius': '0px',
  'borderColor': '#007bff',
} 
const FavouriteButtonStyle = {
  'backgroundColor': '#F4B400',
  'borderColor': '#F4B400',
  'borderRadius': '0px'
} 

function HomeContent({ id, name, image, rating, releaseDate }) {
  return (
    <Col sm={12} md={4} lg={3} as="div">
      <Card style={cardStyle}>
        <Card.Img style={imageStyle} variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title style={titleStyle}>{name}</Card.Title>
          <ListGroup style={ListGroupStyle} role="list">
            <ListGroupItem style={ListGroupItemStyle} role="listitem"><b>Rating:</b> {rating}</ListGroupItem>
            <ListGroupItem style={ListGroupItemStyle} role="listitem"><b>Release date:</b><br></br>{releaseDate}</ListGroupItem>
            
            <ButtonGroup>
              <Link to={"games/" + id} role="link">  
                <Button style={ButtonStyle} variant="primary">
                  Learn more
                </Button>
              </Link>              
              <Button style={FavouriteButtonStyle}>&#9734;</Button>               
            </ButtonGroup>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
}

HomeContent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired
};
export default HomeContent;
