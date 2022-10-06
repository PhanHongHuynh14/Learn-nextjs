import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

const NavbarMenu = () => (
    <Navbar bg='dark' variant='dark'  >
        <Navbar.Brand>My next app</Navbar.Brand>
        <Nav>
            <Link href='/' passHref>
                <Nav.Link>Home</Nav.Link>
            </Link> 
            <Link href='/posts' passHref>
                <Nav.Link>Post</Nav.Link>
            </Link> 
            <Link href='/about' passHref>
                <Nav.Link>About</Nav.Link>
            </Link> 
        </Nav>
    </Navbar>
)
export default NavbarMenu