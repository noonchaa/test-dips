import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
    return (
        <div className="bg-warning mt-lg-5">
            <Container>
                <Row className="pt-5">
                    <Col xs={12} lg={2} className='text-center mb-3'>
                        <img src='/images/logo2.png' alt="" className="w-75"/>
                    </Col>
                    <Col xs={12} lg={10}>
                        <Row className="mb-3">
                            <Col className="fw-semibold d-none d-lg-block" style={{ fontSize: '20px' }} xs={12} lg={1}>
                                <p style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}>P. +62 21 858 3944</p>
                            </Col>
                            <Col xs={6} lg={3}>
                                <p className="fw-semibold" style={{ fontSize: '18px' }}>Quick Links</p>
                                <p className="text-uppercase">Services</p>
                                <p className="text-uppercase">Work Flow</p>
                                <p className="text-uppercase">Portfolio</p>
                                <p className="text-uppercase">About Us</p>
                                <p className="text-uppercase">Our Value</p>
                            </Col>
                            <Col xs={6} lg={3}>
                                <p className="fw-semibold" style={{ fontSize: '18px' }}>Follow</p>
                                <p>facebook</p>
                                <p>instagram</p>
                                <p>twitter</p>
                                <p>linkedin</p>
                            </Col>
                            <Col xs={12} lg={5}>
                                <p className="fw-semibold" style={{ fontSize: '18px' }}>Sign up to our newsletter</p>
                                <div className="d-flex">
                                    <input type='email' placeholder='E-MAIL' className="border-0 border-bottom border-dark mb-5 me-3 py-3 px-1 bg-transparent w-100" />
                                    <img src='/images/ru.png' alt='' height={58} width='auto' />
                                </div>
                                <p>This site is protected by reCAPTHCHA and the Google Privacy Policy and Terms of Service apply.</p>
                            </Col>
                        </Row>
                        <Row className="border-top border-dark mt-5 pt-3">
                            <Col className="d-lg-flex justify-content-between">
                                <p>Copyright 2022 Digital Presence Strategy - Dipstrategy - Digital Agency Jakarta</p>
                                <p>Privacy Policy</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer