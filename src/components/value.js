import { Col, Container, Row } from "react-bootstrap"

const Value = () => {
    const data = [
        {
            title: 'Transparency',
            img: '/images/img1.png',
            text: "The goal of Wolven D.O.O. is to get as close as possible to the ideal of a ''glass company''.",
            text2: "Our key to this is clear communication with our customers as well as the disclosure of our workflows and the permanent involvement of the customer in the creative processes."
        },
        {
            title: 'Accountability',
            img: '/images/img2.png',
            text: "We are your competent partner for web development and everything that goes with it.",
            text2: "That means we don't just make empty promises, but deliver measurable results as well as real added value."
        },
        {
            title: 'Dedication',
            img: '/images/img2.png',
            text: "Just being good at something is one side.",
            text2: "But for truly perfect results and content that converts, it takes people who put their heart and soul into every project until you as our client and partner, are 100% satisfied."
        }
    ]
    return (
        <div className="mt-5" id='value' style={{ background: '#000' }}>
            <Container className="mt-5 py-5 text-secondary">
                <h1 className="display-2 text-white mb-5">OUR VALUE</h1>
                <Row>
                    {data.map((item, index) => (
                        <Col xs={12} lg={4} key={index}>
                            <p className="fw-normal" style={{ fontSize: '32px' }}>{item.title}</p>
                            <div className="w-100 p-5 border border-secondary d-flex justify-content-center mb-3" style={{height:'220px'}}>
                                <img src={item.img} alt='' />
                            </div>
                            <p className="fw-normal" style={{ fontSize: '26px' }}>{item.text}</p>
                            <p className="fw-normal" style={{ fontSize: '26px' }}>{item.text2}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Value