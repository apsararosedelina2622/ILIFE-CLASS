import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionButton, AccordionHeader, AccordionItem, Button, Card, CardBody, Col, Container, Modal, ModalBody, ModalHeader, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "react-bootstrap"
import { my_asset } from './assets/assets'

const New = () => {

  const [ show , setShow ] = useState(false)
  const [ canvasShow , setCanvasShow ] = useState(false)

  const ModalOpen = () => {
    setShow(true)
  }

  const ModalClose = () => {
    setShow(false)
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
      
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <Card>
              <img src={my_asset.Img1} alt="" />
              <CardBody>
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <Button className='w-100'>Click</Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card>
              <img src={my_asset.Img1} alt="" />
              <CardBody>
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <Button className='w-100'>Click</Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card>
              <img src={my_asset.Img1} alt="" />
              <CardBody>
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <Button className='w-100'>Click</Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card>
              <img src={my_asset.Img1} alt="" />
              <CardBody>
                <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <Button className='w-100'>Click</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <Button onClick={ModalOpen}>Click</Button>

      <Modal size='fullscreen' show={show}>
          <ModalHeader closeButton onHide={ModalClose}><h4>Modal</h4></ModalHeader>
          <ModalBody>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quidem blanditiis iste atque. Corrupti rem eligendi voluptates error animi neque, esse saepe. Impedit quaerat, autem in architecto repellat veniam eos!</p>
          </ModalBody>
      </Modal>

      <Button className='btn-success' onClick={CanvasOpen}>Click</Button>

      <Offcanvas show={canvasShow} placement='bottom' className='w-100' backdrop='static'>
        <OffcanvasHeader closeButton onHide={CanvasClose}>
          <h4>Offcanvas</h4>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati inventore quae ipsum aut laborum libero fuga dolor eaque eveniet? Optio nemo placeat molestiae, libero asperiores id odit necessitatibus sequi vitae!</p>
        </OffcanvasBody>
      </Offcanvas>

      <Accordion defaultActiveKey='0'>
        <AccordionItem eventKey='0'>
          <AccordionHeader>Hello</AccordionHeader>
          <AccordionBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, eos, libero temporibus consectetur saepe culpa quasi vel, impedit maiores ex eius architecto totam nesciunt delectus amet! Perferendis dignissimos labore facilis.</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey='1'>
          <AccordionHeader>Hello</AccordionHeader>
          <AccordionBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, eos, libero temporibus consectetur saepe culpa quasi vel, impedit maiores ex eius architecto totam nesciunt delectus amet! Perferendis dignissimos labore facilis.</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey='2'>
          <AccordionHeader>Hello</AccordionHeader>
          <AccordionBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, eos, libero temporibus consectetur saepe culpa quasi vel, impedit maiores ex eius architecto totam nesciunt delectus amet! Perferendis dignissimos labore facilis.</p>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

    </>
  )
}

export default New