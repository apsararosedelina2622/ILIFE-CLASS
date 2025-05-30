// import React from 'react'

//     const New = () => {
//       return (
//         <>
//           <h1 style={{'color':'red', 'background-color' : 'black'}}>Hello</h1>
//           <h1 style={{color:'purple', backgroundColor : 'plum'}}>Hello</h1>
//         </>
//       )
//     }

// export default New




// import React from 'react'

//     const New = () => {

//       var obj1 = {
//         color : 'red',
//         backgroundColor : 'blue'
//       }

//       var obj2 = {
//         'color' : 'darkgreen',
//         'background-color' : 'lightgreen'
//       }

//       return (
//         <>
//           <h1 style={obj1}>Hello</h1>
//           <h1 style={obj2}>Hello</h1>
//         </>
//       )
//     }

// export default New



// import React from 'react'
// import './index.css'

//     const Day3 = () => {
//       return (
//         <>
//           <h1>Hello</h1>
//         </>
//       )
//     }

// export default Day3


// import React from 'react'
// import img from "./assets/img/image.png"
// import img1 from "./assets/img/image1.png"

// const New = () => {
//   return (
//     <div>
//         <img src={img} alt="" height={300} />
//         <img src={img1} alt="" height={300} />
//     </div>  
//   )
// }

// export default New


// import React from 'react'
// import { my_asset } from './assets/assets'

// const New = () => {
//   return (
//     <>
//         <img src={my_asset.Img1} alt="" height={200} />
//         <img src={my_asset.Img2} alt="" height={200} />
//     </>
//   )
// }

// export default New


// import React from 'react'
// import { data } from './assets/assets'

// const Day4 = () => {
//   return (
//     <>
//       {data.map((value , index)=> {
//         return(
//             <div key={index}>
//                 <img src={value.profile} height={200} width={300} alt="" />
//                 <h1>{value.name}</h1>
//                 <h1>{value.age}</h1>
//             </div>
//         )
//       })}  
//     </>
//   )
// }

// export default Day4


// import React from 'react'
// import { my_asset } from './assets/assets'
// import {Button, Card, CardBody, Col, Container, Row} from "react-bootstrap"

// const New = () => {
//   return (
//     <div>
//         <h1 className='bg-success text-light text-center'>Hello</h1>

//         <div className="container">
//           <div className="row">
//             <div className="col-lg-3 col-md-6">
//               <div className="card">
//                 <img src={my_asset.Img1} alt="" />
//                 <div className="card-body">
//                   <h4>Hello</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sequi!</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <div className="card">
//                 <img src={my_asset.Img2} alt="" />
//                 <div className="card-body">
//                   <h4>Hello</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sequi!</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <div className="card">
//                 <img src={my_asset.Img1} alt="" />
//                 <div className="card-body">
//                   <h4>Hello</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sequi!</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <div className="card">
//                 <img src={my_asset.Img2} alt="" />
//                 <div className="card-body">
//                   <h4>Hello</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sequi!</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Container fluid>
//           <Row>
//             <Col lg="3" md="6" sm="12">
//               <Card>
//                 <img src={my_asset.Img1} alt="" />
//                 <CardBody>
//                   <h4>Card Title</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perferendis!</p>
//                   <Button className='btn-primary'>Click</Button>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col lg="3" md="6" sm="12">
//               <Card>
//                 <img src={my_asset.Img2} alt="" />
//                 <CardBody>
//                   <h4>Card Title</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perferendis!</p>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col lg="3" md="6" sm="12">
//               <Card>
//                 <img src={my_asset.Img1} alt="" />
//                 <CardBody>
//                   <h4>Card Title</h4>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, perferendis!</p>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col lg="3" md="6" sm="12">
//               <Card>
//                 <img src={my_asset.Img2} alt="" />
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

// export default New



// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function New() {
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

// export default New;



import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function New() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  }

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

export default New;