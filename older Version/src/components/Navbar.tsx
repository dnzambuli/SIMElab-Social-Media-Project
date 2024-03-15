import { useState, useEffect } from "react";
import navIcon from "../assets/images/habari_habour_no_bg.png";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function CustomNavbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      bg="body-tertiary"
      expand="lg"
      className={scrolled ? "scrolled" : ""}
    >
      <Container>
        <Navbar.Brand href="#">
          <img src={navIcon} alt="Habari Habour" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#trending"
              className={
                activeLink === "trending" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("trending")}
            >
              Trending
            </Nav.Link>
            <Nav.Link
              href="#music"
              className={
                activeLink === "music" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("music")}
            >
              Music
            </Nav.Link>
            <Nav.Link
              href="#celebrities"
              className={
                activeLink === "celebrities"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("celebrities")}
            >
              Celebrities
            </Nav.Link>
            <Nav.Link
              href="#politics"
              className={
                activeLink === "politics" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("politics")}
            >
              Politics
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Topic of Interest"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">
              recommend
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
