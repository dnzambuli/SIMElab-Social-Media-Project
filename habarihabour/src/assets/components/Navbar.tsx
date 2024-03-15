import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { PersonFill, PersonCheckFill } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

function CustomNavbar() {
  const [isLoggedIn, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogOut = () => {
    setLogin(false);
  };

  return (
    <Nav className="navbar bg-lblue">
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Habari Habour</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#keyFeatures">Features</Nav.Link>
              <Nav.Link href="#data"> Data</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <NavDropdown
                title={isLoggedIn ? <PersonCheckFill /> : <PersonFill />}
                id="basic-nav-dropdown"
              >
                {isLoggedIn ? (
                  <>
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Content Performance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Audience Reaction
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Content Reach
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      <Button
                        className="custom-button"
                        size="sm"
                        href="/"
                        onClick={handleLogOut}
                      >
                        Log Out
                      </Button>
                    </NavDropdown.Item>{" "}
                  </>
                ) : (
                  <NavDropdown.Item href="#action/3.4">
                    <div>
                      <Button
                        className="btn custom-button sign-up"
                        size="sm"
                        href="/signup"
                      >
                        Sign Up
                      </Button>
                      <Button
                        className="btn custom-button log-in"
                        size="sm"
                        href="/login"
                        onClick={handleLogin}
                      >
                        Log In
                      </Button>
                    </div>
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Nav>
  );
}

export default CustomNavbar;
