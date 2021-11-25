import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import NavDropdown from "react-bootstrap/esm/NavDropdown";

function Header() {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Typing Class</Navbar.Brand>
            <Nav className="me-auto">
                <NavDropdown title="Lessons" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#lesson1">Lesson 1</NavDropdown.Item>
                    <NavDropdown.Item href="#lesson2">Lesson 2</NavDropdown.Item>
                    <NavDropdown.Item href="#lesson3">Lesson 3</NavDropdown.Item>
                    <NavDropdown.Item href="#lesson4">Lesson 4</NavDropdown.Item>
                    <NavDropdown.Item href="#lesson5">Lesson 5</NavDropdown.Item>
                    <NavDropdown.Item href="#lesson6">Lesson 6</NavDropdown.Item>
                    <NavDropdown.Item href="#lesson7">Lesson 7</NavDropdown.Item>
                    <NavDropdown.Item href="#lesson8">Lesson 8</NavDropdown.Item>
                    <NavDropdown.Item href="#lesson9">Lesson 9</NavDropdown.Item>
                    <NavDropdown.Item href="#lesson10">Lesson 10</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link href="">Go to Github</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}

export default Header;