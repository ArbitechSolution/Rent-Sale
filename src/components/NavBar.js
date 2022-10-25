
import React, { useState } from 'react'
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from 'react-bootstrap/Modal';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';


function NavBar() {
    const [show, setShow] = useState(false);
    const [loginModal, setLoginModal] = useState(true)
    const [registerModal, setRegisterModal] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showw, setShoww] = useState(false);
    const handleClosee = () => setShoww(false);
    const handleShoww = () => setShoww(true);


    const LoginClick = () => {

        setLoginModal(true)
        setRegisterModal(false)
    }

    const RegisterClick = () => {

        setRegisterModal(true)
        setLoginModal(false)

    }
    return (

        <Container className='Navbar' fluid >
            <Row className="Nav-row align-items-center "  >

                <Col className="toggle col-2 " >
                    <Navbar collapseOnSelect expand="lg">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShoww} />
                        {/* <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav >
                                <Nav.Link className="ToggleLinks" href="#features">Buy</Nav.Link>
                                <Nav.Link className="ToggleLinks" href="#pricing">Rent</Nav.Link>
                            </Nav>
                        </Navbar.Collapse> */}

                        <Offcanvas show={showw} onHide={handleClosee} >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul className='ul-list'>
                                    <li><a href="/">Buy</a></li>
                                    <li><a href ="/">Rent</a></li>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Navbar>
                </Col>
                <Col className=" logo col-lg-2  d-flex ">
                    <a className='mt-2' href="/">
                        <img
                            style={{ width: "70px" }}
                            src="assets\marhaba estate-01.png"
                            className='img-fluid '
                        />
                    </a>
                </Col>
                <Col className=" col-lg-5 d-none d-lg-block   " >
                    <Navbar>
                        <Nav>
                            <Nav.Link className="NavbarLinks" href="#features">Buy</Nav.Link>
                            <Nav.Link className="NavbarLinks" href="#pricing">Rent</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
                <Col className="Modal col-lg-5 icon-identity  " >

                    <Button onClick={handleShow} >
                        <PermIdentityIcon />Login / Register
                        {/* <span className='ModalIconText' onClick={handleShow}>Login / Register</span> */}
                    </Button>


                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                    >
                        <Modal.Header closeButton>

                        </Modal.Header>

                        <Modal.Body>
                            <Stack direction='horizontal' gap={3} >
                                <Nav.Link className="login-logout-link" onClick={LoginClick} >Login</Nav.Link>
                                <Nav.Link className="login-logout-link" onClick={RegisterClick}>Register</Nav.Link>
                            </Stack>
                            <br />
                            {loginModal ?
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email </Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>password</Form.Label>
                                        <Form.Control type="tel" />
                                    </Form.Group>
                                    <Form.Check
                                        type="checkbox"
                                        label="Remember me"
                                    />
                                    <Button > Login Here</Button>
                                </Form>
                                :
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>password</Form.Label>
                                        <Form.Control type="password" />
                                    </Form.Group>

                                    <Form.Check
                                        type="checkbox"
                                        label="Remember me"
                                    />

                                    <Button width="100%" > Register Here</Button>

                                </Form>}

                        </Modal.Body>

                    </Modal>



                </Col>
            </Row>

        </Container>

    )
}

export default NavBar;


