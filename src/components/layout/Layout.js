import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import Detail from "../game/Detail";
// import Favourites from "../favourites/Favourites";
import Container from "react-bootstrap/Container";

function NavMenu() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" role="navigation" expand="md">
        <Navbar.Brand>
          <NavLink to="/" className="nav-link">JS Frameworks - CA </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link" role="link">
              Home
            </NavLink>
            <NavLink to="/contact" className="nav-link" role="link">
              Contact
            </NavLink>
            {/* <NavLink to="/favourites" className="nav-link" role="link">
              Favourites
            </NavLink>             */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/games/:id" component={Detail} />
          {/* <Route path="/favourites" component={Favourites} /> */}
        </Switch>
      </Container>
    </Router>
  );
}

export default NavMenu;
