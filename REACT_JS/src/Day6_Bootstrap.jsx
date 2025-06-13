import React, { useState } from 'react'
import { data, my_asset } from './assets/asset'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Card, CardBody, Col, Container, Modal, ModalBody, ModalHeader, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "react-bootstrap"

const Day6_Bootstrap = () => {

    const [ modalShow , setModalShow ] = useState(false)
    const [ canvasShow , setCanvasShow ] = useState(false)

    const ModalOpen = () => {
        setModalShow(true)
    }

    const ModalClose = () => {
        setModalShow(false)
    }

    const CanvasOpen = () => {
        setCanvasShow(true)
    }

    const CanvasClose = () => {
        setCanvasShow(false)
    }

  return (
    <>
        <h1>Hello</h1>

        {/* <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <img src={my_asset.Img3} alt="" />
                        <div className="card-body">
                            <h4>Card</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quos?</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <img src={my_asset.Img3} alt="" />
                        <div className="card-body">
                            <h4>Card</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quos?</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <img src={my_asset.Img3} alt="" />
                        <div className="card-body">
                            <h4>Card</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quos?</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <img src={my_asset.Img3} alt="" />
                        <div className="card-body">
                            <h4>Card</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quos?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <Container>
            <Row>
                <Col lg={3} md={6}>
                    <Card>
                        <img src={my_asset.Img3} alt="" />
                        <CardBody>
                            <h4>Card</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <Button className='btn-success w-100'>Click</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <img src={my_asset.Img3} alt="" />
                        <CardBody>
                            <h4>Card</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <Button className='btn-success w-100'>Click</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <img src={my_asset.Img3} alt="" />
                        <CardBody>
                            <h4>Card</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <Button className='btn-success w-100'>Click</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>
                        <img src={my_asset.Img3} alt="" />
                        <CardBody>
                            <h4>Card</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <Button className='btn-success w-100'>Click</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>

        {/* <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#mymodal">Click</button>

        <div className="modal" id='mymodal'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Modal</h3>
                    </div>
                </div>
            </div>
        </div> */}

        {/* <Button onClick={ModalOpen}>Modal</Button>

        <Modal show={modalShow} size='fullscreen'>
            <ModalHeader closeButton onHide={ModalClose}>
                <h3>Modal</h3>
            </ModalHeader>
            <ModalBody>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima repellat perferendis dicta omnis quisquam natus id, nostrum, fuga repudiandae quam similique vero quaerat nesciunt inventore? Laborum dolorem quis unde odio.</p>
            </ModalBody>
        </Modal>

        <Button onClick={CanvasOpen}>Off canvas</Button>

        <Offcanvas show={canvasShow} placement='top' className="w-100 h-100">
            <OffcanvasHeader closeButton onHide={CanvasClose}>
                <h3>Canvas</h3>
            </OffcanvasHeader>
            <OffcanvasBody>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dicta non beatae. At facilis delectus reprehenderit! Est distinctio delectus illo quod? Reiciendis cum ad dolorem impedit at, quibusdam corporis perspiciatis.</p>
            </OffcanvasBody>
        </Offcanvas>

        <Accordion defaultActiveKey='0'>
            <AccordionItem eventKey='0'>
                <AccordionHeader>
                    Click
                </AccordionHeader>
                <AccordionBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores numquam delectus sapiente sit ab praesentium officia quidem iusto incidunt. Praesentium eveniet vel rerum voluptate sapiente, quaerat id perferendis hic impedit?</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey='1'>
                <AccordionHeader>
                    Click
                </AccordionHeader>
                <AccordionBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores numquam delectus sapiente sit ab praesentium officia quidem iusto incidunt. Praesentium eveniet vel rerum voluptate sapiente, quaerat id perferendis hic impedit?</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey='2'>
                <AccordionHeader>
                    Click
                </AccordionHeader>
                <AccordionBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores numquam delectus sapiente sit ab praesentium officia quidem iusto incidunt. Praesentium eveniet vel rerum voluptate sapiente, quaerat id perferendis hic impedit?</p>
                </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey='3'>
                <AccordionHeader>
                    Click
                </AccordionHeader>
                <AccordionBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores numquam delectus sapiente sit ab praesentium officia quidem iusto incidunt. Praesentium eveniet vel rerum voluptate sapiente, quaerat id perferendis hic impedit?</p>
                </AccordionBody>
            </AccordionItem>
        </Accordion> */}

        {/* <Container fluid>
            <Row>
                {
                    data.map((value , index) => {
                        return(
                            <Col lg={4} key={index}>
                                <Card className='border-0'>
                                    <img src={value.img} alt="" height={300} />
                                    <CardBody>
                                        <h4>{value.title}</h4>
                                        <p>{value.desc}</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container> */}

        <div className="container my-3">
            <div className="row">
                <div className="col-3">
                    <div className="row">
                        <div className="col-6 bg-dark p-5"></div>
                        <div className="col-6 bg-primary p-5"></div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-4 bg-warning p-5"></div>
                        <div className="col-4 bg-success p-5"></div>
                        <div className="col-4 bg-primary p-5"></div>
                        <div className="col-4 bg-secondary p-5"></div>
                        <div className="col-4 bg-primary p-5"></div>
                        <div className="col-4 bg-warning p-5"></div>
                        <div className="col-4 bg-success p-5"></div>
                        <div className="col-4 bg-warning p-5"></div>
                        <div className="col-4 bg-success p-5"></div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Day6_Bootstrap