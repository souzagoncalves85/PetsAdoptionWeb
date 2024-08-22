
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'; // Importe o arquivo CSS

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
   
        <Container>
       
          <Navbar.Brand href="#home">
          Petshop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Sobre</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
