import { TiHome } from "react-icons/ti";

import {Navbar, Container, Nav} from 'react-bootstrap';


const NavbarComp = () => {
  return (
    <div>
        <Navbar expand="lg" className="nav">
            <Container>
                {/* <Navbar.Brand href="/"><TiHome/></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="/">Dashboard</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarComp