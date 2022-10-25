import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Form from 'react-bootstrap/Form';




function NavigationBar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        < >

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" >
                        <img
                            src="assets\rp-whit-n-green-logo.png"
                            width="50%"
                            height="50%"

                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav >
                            <Nav.Link href="#features">Buy</Nav.Link>
                            <Nav.Link href="#pricing">Rent</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        <Nav.Link>
                            <PermIdentityIcon onClick={handleShow} />
                        </Nav.Link>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>

                            </Modal.Header>
                            <Modal.Body>

                                <Stack direction='horizontal' gap={3} >
                                    <Nav.Link>Login</Nav.Link>
                                </Stack>
                                
                                <br />
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

                                    <Button width="100%" > Login Here</Button>
                                </Form>



                            </Modal.Body>

                        </Modal>


                    </Nav>

                </Container>
            </Navbar>


        </>
    )
}

export default NavigationBar;


