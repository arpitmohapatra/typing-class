import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";

function Footer() {
    return <Navbar bg="light" variant="light" fixed="bottom">
        <Container className="d-flex justify-content-center">
            <Nav>
                Developed by Arpit Mohapatra with ❤️ and ☕️
            </Nav>
        </Container>
    </Navbar>
}

export default Footer;