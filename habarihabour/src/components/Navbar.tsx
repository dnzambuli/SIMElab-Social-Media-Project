import { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function CustomNavbar() {
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">Habari Harbour</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#keyFeatures">Key Features</Nav.Link>
            <Nav.Link href="#data">Data</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <NavDropdown
              title={
                isLoggedIn ? (
                  <i className="bi bi-person">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                  </i>
                ) : (
                  <i className="bi bi-person-check-fill">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
                      />
                      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </i>
                )
              }
              id="basic-nav-dropdown"
            >
              {isLoggedIn ? (
                <>
                  <NavDropdown.Item href="#contentPerformance">
                    Content Performance
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#audienceBehaviour">
                    Audience Behaviour
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#contentReach">
                    Content Reach
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => setLogin(false)}>
                    <a
                      className="btn rounded-5 btn-sm custom-button"
                      href="#logOut"
                    >
                      Log Out
                    </a>
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item onClick={() => setLogin(true)}>
                    <a
                      className="btn rounded-5 btn-outline-warning btn-sm custom-button"
                      href="#logIn"
                    >
                      Log in
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setLogin(true)}>
                    <a
                      className="btn rounder-5 btn-sm custom-button"
                      href="#signUp"
                    >
                      Sign Up
                    </a>
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
