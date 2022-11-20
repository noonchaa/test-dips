import { Col, Container, Row } from "react-bootstrap"

const Portfolio = () => {
    return (
        <div className="bg-white mt-5" id='portfolio'>
            <Container className="pt-5">
                <Row>
                    <Col xs={12} lg={6}>
                        <h1 className="display-2">PORTFOLIO</h1>
                    </Col>
                    <Col xs={12} lg={5}>
                        <p>Take a look at our most successful projects and see for yourself our skills and the results that speak for themselves.</p>
                    </Col>
                    <Col xs={12} lg={1} className='text-nowrap'>
                        <img src="/images/left.png" width={25} height='auto' alt='' className="me-3"/>
                        <img src="/images/right.png" width={25} height='auto' alt=''/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio