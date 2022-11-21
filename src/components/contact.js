import { Col, Container, Row } from "react-bootstrap"

const Contact = () => {
    return (
        <div className="mt-5" id='contact'>
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <h1 className="display-2">GET IN TOUCH</h1>
                        <p className="fw-normal" style={{fontSize:'24px'}}>Looking to talk to us directly, or planning an office visit? As Digital Agency, Dipstrategy start by understanding your business need to comes up with any solutions. That's why it is important for us to hear your story. When it come to listening to your story, we are all ears.</p>
                        <p className="fw-normal mt-5" style={{fontSize:'24px'}}>Gd. Titan lt.3, Jl. Slamet Riyadi no.7, Jakarta 13150 - Indonesia </p>
                        <h3>P. +62 21 858 3944</h3>
                        <h3>info@dipstrategy.co.id</h3>
                        <p className="mt-5">FACEBOOK&nbsp;&nbsp;&nbsp;&nbsp;TWITTER&nbsp;&nbsp;&nbsp;&nbsp;INSTAGRAM&nbsp;&nbsp;&nbsp;&nbsp;LINKEDIN</p>
                    </Col>
                    <Col xs={12} lg={6} className='p-5' style={{background:'#000', color:'#fff'}}>
                        <input type='text' className="w-100 border-0 border-bottom mb-5 py-3 px-1" placeholder="NAME" style={{background:'#000', color:'#fff'}}/>
                        <input type='email' className="w-100 border-0 border-bottom mb-5 py-3 px-1" placeholder="E-MAIL" style={{background:'#000', color:'#fff'}}/>
                        <textarea className="w-100 border-0 border-bottom mb-5 py-3 px-1" rows={5} placeholder="MESSAGE*" style={{background:'#000', color:'#fff'}}/>
                        <button className="bg-warning border-0 py-3 px-4 text-nowrap">SUBMIT <img src="/images/ru.png" alt="" width={18} height={19} className='ms-4' /></button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Contact