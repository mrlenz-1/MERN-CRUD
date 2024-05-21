import { Container,Navbar,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css"



const Header = () => {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Book Store</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Library</Nav.Link>
            <Nav.Link as={Link} to="/book" className="nav-link">Add Book</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
     </>
    );
};

export default Header;