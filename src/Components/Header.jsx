import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logotipo from "../assets/logoStarbucks.svg";
import "../css/Header.css";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-header">
        <Container className="header" fluid>
          <Navbar.Brand>
            <a href="/">
            <img className="logo" src={logotipo} alt="logotipo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to={"/menu"} className="text-header me-4">
                  MENÚ
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/cafe"} className="text-header me-4">
                  CAFÉ
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={'/experiencia'} className="text-header me-4">EXPERIENCIA STARBUCKS</Link>
              </Nav.Link>
              <Nav.Link className="location-header">
                <Link className="text-location me-4">
                  <i className="fa-solid fa-location-dot fa-lg"> </i> Localizar
                  Tienda
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
