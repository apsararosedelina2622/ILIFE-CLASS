import React, { useState } from 'react'
import { data, my_asset } from './assets/asset'
import { Button, Card, CardBody, Col, Container, Modal, ModalBody, ModalHeader, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "react-bootstrap"

const Day1_Bootstrap = () => {

    const [ showModal , setShowModal ] = useState(false)
    const [ showCanvas , setShowCanvas ] = useState(false)

    const ModalOpen = () => {
        setShowModal(true)
    }

    const ModalClose = () => {
        setShowModal(false)
    }

    const CanvasOpen = () => {
        setShowCanvas(true)
    }

    const CanvasClose = () => {
        setShowCanvas(false)
    }

  return (
    <>
        <h1>Hello</h1>

        {/* <div className="container">
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
                            <h4>Card</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <img src={my_asset.Img2} alt="" />
                        <CardBody>
                            <h4>Card</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <img src={my_asset.Img1} alt="" />
                        <CardBody>
                            <h4>Card</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <img src={my_asset.Img2} alt="" />
                        <CardBody>
                            <h4>Card</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container> */}

        {/* <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#mymodal">Modal</button>

        <div className="modal" id="mymodal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4>Modal</h4>
                    </div>
                </div>
            </div>
        </div> */}

        {/* <Button variant='success'>Modal</Button> */}

        <Button className='btn-success' onClick={ModalOpen}>Modal</Button>

        <Modal show={showModal} size='fullscreen'>
            <ModalHeader closeButton onHide={ModalClose}>
                <h3>Modal</h3>
            </ModalHeader>
            <ModalBody>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum rerum architecto. Libero sed suscipit fugit repudiandae, debitis recusandae rem culpa officia tempora pariatur eius autem facere velit, sequi praesentium.</p>
            </ModalBody>
        </Modal>

        <Button onClick={CanvasOpen}>Offcanvas</Button>

        <Offcanvas placement='bottom' className="w-100 h-100" show={showCanvas}>
            <OffcanvasHeader closeButton onHide={CanvasClose}>
                <h3>My canvas</h3>
            </OffcanvasHeader>
            <OffcanvasBody>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque recusandae corrupti dolorem animi eius, quis placeat id voluptas suscipit? Sapiente, eveniet at. Nostrum nam consequatur eligendi ex? Esse, perspiciatis quaerat?</p>
            </OffcanvasBody>
        </Offcanvas>

        <Container>
            <Row>
                {
                    data.map((value , index) => {
                        return(
                            <Col lg={3} md={6} key={index}>
                                <Card>
                                    <img src={value.img} alt="" />
                                    <CardBody>
                                        <h4>{value.title}</h4>
                                        <p>{value.decs}</p>
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

export default Day1_Bootstrap