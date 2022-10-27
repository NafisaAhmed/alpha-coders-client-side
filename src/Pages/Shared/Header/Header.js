import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../images/alpha.png';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <Link className='text-decoration-none fw-bold text-danger' to='/'><img src={logo} width='30' height='30' alt="" />
                        Alpha<span className='text-dark'>Coders</span></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <Button onClick={handleLogout} variant='outline-dark' className='fw-bold me-3' >Log Out</Button>
                                        <Image style={{ height: '40px', width: '40px' }} roundedCircle src={user?.photoURL
                                        } title={user.displayName}></Image>
                                    </>
                                    :
                                    <>
                                        <Link to="/login" className='text-decoration-none me-2'>
                                            <Button className='fw-bold' variant="outline-secondary">Login</Button>
                                        </Link>
                                        <Link to="/register" className='text-decoration-none'>
                                            <Button className='fw-bold' variant="outline-secondary">Register</Button>
                                        </Link>
                                    </>
                            }
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;