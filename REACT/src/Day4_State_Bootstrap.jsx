// import React, { useState } from 'react'

// const Day4_State_Bootstrap = () => {

//     var [ input , setInput ] = useState("")
//     var [ qr , setQr ] = useState("")

//     const Fun = () => {
//         setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`)
//     }

//   return (
//     <>
//         <input type="text" onChange={e => setInput(e.target.value)} />
//         <button onClick={Fun}>Generate</button>
//         {
//             input.length === 0
//             ?
//                 ""
//             :
//                 qr && <img src={qr} alt="" />
//         }
//     </>
//   )
// }

// export default Day4_State_Bootstrap


import React, { useState } from 'react'
import { data, my_asset } from './assets/asset'

import { Button, Card, CardBody, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "react-bootstrap"

const Day4_State_Bootstrap = () => {

    var [ modal , setModal ] = useState(false)
    var [ canvas , setCanvas ] = useState(false)

    const ModalOpen = () => {
        setModal(true)
    }

    const ModalClose = () => {
        setModal(false)
    }

    const CanvasOpen = () => {
        setCanvas(true)
    }

    const CanvasClose = () => {
        setCanvas(false)
    }

  return (
    <>

        {/* <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <img src={my_asset.Img1} alt="" />
                        <div className="card-body">
                            <h3>Card</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src={my_asset.Img1} alt="" />
                        <div className="card-body">
                            <h3>Card</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src={my_asset.Img1} alt="" />
                        <div className="card-body">
                            <h3>Card</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src={my_asset.Img1} alt="" />
                        <div className="card-body">
                            <h3>Card</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        {/* <Container fluid>
            <Row>
                <Col lg={3} md={6}>
                    <Card>
                        <img src={my_asset.Img1} alt="" />
                        <CardBody>
                            <h3>Card</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <img src={my_asset.Img2} alt="" />
                        <CardBody>
                            <h3>Card</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <img src={my_asset.Img1} alt="" />
                        <CardBody>
                            <h3>Card</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <img src={my_asset.Img2} alt="" />
                        <CardBody>
                            <h3>Card</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container> */}

        {/* <button>Modal</button>

        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    
                </div>
            </div>
        </div> */}

        {/* <Button variant='danger'>Modal</Button> */}
        <Button className='btn-success' onClick={ModalOpen}>Modal</Button>

        <Modal show={modal} size='fullscreen'>
            <ModalHeader closeButton onHide={ModalClose}>
                <h3>Modal</h3>
            </ModalHeader>
            <ModalBody>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ipsam, excepturi nostrum quisquam fugit odio praesentium commodi dolore veniam temporibus ullam error consequuntur harum officia, numquam consectetur animi nam, id itaque. Dolor voluptate, modi ipsa, libero ea sint quae culpa illo, repellat aliquid aliquam dolorum eaque quos magnam ab quo?</p>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-danger' onClick={ModalClose}>Close</button>
            </ModalFooter>
        </Modal>

        <Button onClick={CanvasOpen}>Offcanvas</Button>

        <Offcanvas show={canvas} placement='start'>
            <OffcanvasHeader closeButton onHide={CanvasClose}>
                <h3>Canvas</h3>
            </OffcanvasHeader>
            <OffcanvasBody>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi fugiat eaque eum molestiae quae possimus totam distinctio at similique necessitatibus modi corrupti officia molestias exercitationem alias asperiores laborum, neque unde. Atque laudantium animi voluptatum unde tenetur odio rem, labore magnam modi provident delectus numquam doloribus fuga placeat, dolorum perspiciatis in.</p>
            </OffcanvasBody>
        </Offcanvas>

        <Container>
            <Row>
                {
                    data.map((value , index) => {
                        return(
                            <Col lg={3} key={index}>
                                <Card>
                                    <img src={value.img} alt="" />
                                    <CardBody>
                                        <h3>{value.name}</h3>
                                        <p>{value.desc}</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>

    </>
  )
}

export default Day4_State_Bootstrap