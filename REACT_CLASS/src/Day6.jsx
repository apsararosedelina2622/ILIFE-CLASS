// Card

// import React from 'react'
// import { asset } from './assets/assets'
// import {Button, Card, CardBody, Col, Container, Row} from "react-bootstrap"

// const Day6 = () => {
//   return (
//     <div>
//         <h1 className='bg-success text-light text-center'>Hello</h1>

//         {/* <div className="container">
//           <div className="row">
//             <div className="col-3">
//               <div className="card">
//                 <img src={asset.img} alt="" />
//                 <div className="card-body">
//                   <h4>Hello</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sequi!</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-3">
//               <div className="card">
//                 <img src={asset.img} alt="" />
//                 <div className="card-body">
//                   <h4>Hello</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sequi!</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-3">
//               <div className="card">
//                 <img src={asset.img} alt="" />
//                 <div className="card-body">
//                   <h4>Hello</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sequi!</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-3">
//               <div className="card">
//                 <img src={asset.img} alt="" />
//                 <div className="card-body">
//                   <h4>Hello</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sequi!</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         <Container fluid>
//           <Row>
//             <Col lg="3" md="6" sm="12">
//               <Card>
//                 <img src={asset.img} alt="" />
//                 <CardBody>
//                   <h4>Card Title</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perferendis!</p>
//                   <Button className='btn-success'>Click</Button>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col lg="3" md="6" sm="12">
//               <Card>
//                 <img src={asset.img} alt="" />
//                 <CardBody>
//                   <h4>Card Title</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perferendis!</p>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col lg="3" md="6" sm="12">
//               <Card>
//                 <img src={asset.img} alt="" />
//                 <CardBody>
//                   <h4>Card Title</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perferendis!</p>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col lg="3" md="6" sm="12">
//               <Card>
//                 <img src={asset.img} alt="" />
//                 <CardBody>
//                   <h4>Card Title</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perferendis!</p>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>

//     </div>
//   )
// }

// export default Day6


// Accordion

// import Accordion from 'react-bootstrap/Accordion';

// function BasicExample() {
//   return (
//     <Accordion defaultActiveKey="1">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Accordion Item #1</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>Accordion Item #2</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="2">
//         <Accordion.Header>Accordion Item #3</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   );
// }

// export default BasicExample;


// Modal

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="danger" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Example;


// Offcanvas

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  }
  // const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;