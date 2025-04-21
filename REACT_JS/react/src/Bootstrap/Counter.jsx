import React from "react";
import { Container, Row,Col } from "react-bootstrap";

const Counter = () => {

    const desc = [ 'STUDENTS','STAFFS','DEPARTMENTS','PROGRAMMES' ]
    const num = [ '1,100','200','11','15' ]

    return(
        <Container fluid className='bg-success p-5 mt-5 text-light text-center'>
            <Container>
                <Row>
                    <Col lg={3} md={6}>
                        <h1><i class="fa-solid fa-users fa-2x"></i></h1>
                        <h1>{num[0]}</h1>
                        <p>{desc[0]}</p>
                    </Col>
                    <Col lg={3} md={6} className="border-left border-light">
                        <h1><i class="fa-solid fa-chalkboard-user fa-2x"></i></h1>
                        <h1>{num[1]}</h1>
                        <p>{desc[1]}</p>
                    </Col>
                    <Col lg={3} md={6} className="border-left border-light">
                        <h1><i class="fa-solid fa-laptop fa-2x"></i></h1>
                        <h1>{num[2]}</h1>
                        <p>{desc[2]}</p>
                    </Col>
                    <Col lg={3} md={6} className="border-left border-light">
                        <h1><i class="fa-solid fa-gear fa-2x"></i></h1>
                        <h1>{num[3]}</h1>
                        <p>{desc[3]}</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Counter