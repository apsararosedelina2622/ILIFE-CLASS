import React, { useState } from "react";
import { Button, Container,Dropdown,Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";

const Modals = () => {
    
    const [show,setShow] = useState(false)

    const handleshow = () => setShow(true);
    const closeshow = () => setShow(false);

    const [shows,setShows] = useState(false)

    const handleshows = () => setShows(true);
    const closeshows = () => setShows(false);

    return(
        <Container className="mt-5">
            <Button onClick={handleshow}>Sign up</Button>
            <Button onClick={handleshows} className="btn-success ml-5">Login</Button>

            <Modal show={show}>

                <ModalHeader>
                    <h3>Sign Up</h3>
                    <h3 onClick={closeshow}>&times;</h3>
                </ModalHeader>
                <ModalBody>
                    <input type="text" placeholder="Enter User Name" className="w-100 rounded border-light p-2 mt-3" />
                    <input type="password" placeholder="Enter Password" className="w-100 rounded border-light p-2 mt-3" />
                    <input type="password" placeholder="Enter Confirm Password" className="w-100 rounded border-light p-2 mt-3" />
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-danger" onClick={closeshow}>Close</Button>
                    <Button onClick={closeshow}>Save</Button>
                </ModalFooter>

            </Modal>

            <Modal show={shows}>

                <ModalHeader>
                    <h3>Login</h3>
                    <h3 onClick={closeshows}>&times;</h3>
                </ModalHeader>
                <ModalBody>
                    <input type="text" placeholder="Enter User Name" className="w-100 rounded border-light p-2 mt-3" />
                    <input type="password" placeholder="Enter Password" className="w-100 rounded border-light p-2 mt-3" />
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-danger" onClick={closeshows}>Close</Button>
                    <Button onClick={closeshows}>Save</Button>
                </ModalFooter>

            </Modal>

            <Dropdown>
                <Dropdown.Toggle className="bg-secondary mt-5 border-light">
                    Dropdown
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Link1</Dropdown.Item>
                    <Dropdown.Item>Link2</Dropdown.Item>
                    <Dropdown.Item>Link3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </Container>
    )
}

export default Modals