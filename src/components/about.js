import { Col, Container, Row } from "react-bootstrap"

const About = () => {
    return (
        <div className="mt-5" id='about'>
            <Container>
                <h1 className="display-2">ABOUT US</h1>
            </Container>
            <div style={{ background: '#000', paddingTop: '36px', paddingBottom:'36px', backgroundImage:'url(/images/serviceBg.png)', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'left', position:'relative', zIndex:'2' }}>
                <Container className="text-white">
                    <Row>
                        <Col xs={12} lg={6} className='mb-5 pb-5'>
                            <p className="fw-normal" style={{ fontSize: '20px' }}>Hardianto is a name of person work in digital agency based in Jakarta. Founder Novi Hardianto decided to go into business for himself, using his vast experience in software engineering and numerous ancillary fields to help people perfect their web presence and get seen.</p>
                            <p className="fw-normal" style={{ fontSize: '20px' }}>In setting up the company, he was able to rely on his vast experience from previous entrepreneurial activities and therefore knows what matters</p>
                            <button className="bg-warning border-0 py-3 px-4 text-nowrap mb-5">SEE MORE <img src="/images/ru.png" alt="" width={18} height={19} className='ms-4' /></button>
                        </Col>
                        <Col xs={12} lg={6} className='mb-5 pb-5 position-relative'>
                            <img src="/images/video.png" alt="" className="w-100" style={{marginTop:'-8rem', marginBottom:'3rem'}}/>
                            <img src="/images/play.png" alt="" className="position-absolute start-50" style={{top:'15%'}} width={56}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About