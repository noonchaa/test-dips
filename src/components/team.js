import { Col, Container, Row } from "react-bootstrap"

const Team = () => {
    const data = [
        {
            name: 'Sam flex',
            pos: 'Director',
            photo: '/images/team1.png'
        },
        {
            name: 'Kate larson',
            pos: 'Manager',
            photo: '/images/team2.png'
        },
        {
            name: 'Bobby fish',
            pos: 'Designer',
            photo: '/images/team3.png'
        },
        {
            name: 'Amanda james',
            pos: 'Programer',
            photo: '/images/team4.png'
        }
    ]
    return (
        <div className="position-relative" style={{ marginTop: '-8rem', zIndex: '5' }}>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} lg={6}>
                        <h1 className="display-2 text-white">OUR MAGIC TEAM</h1>
                    </Col>
                    <Col xs={12} lg={6} className='text-end'>
                        <button className="bg-warning border-0 py-3 px-4 text-nowrap">SEE MORE <img src="/images/ru.png" alt="" width={18} height={19} className='ms-4' /></button>
                    </Col>
                </Row>
                <Row className="mt-5 pt-lg-3">
                    <Col xs={12} lg={8}>
                        <p className="fw-normal" style={{ fontSize: '20px' }}>Wolven D.O.O. is a small digital agency based in Serbia. Founder Dave McGowan decided to go into business for himself, using his vast experience in software engineering and numerous ancillary fields to help people perfect their web presence and get seen. </p>
                        <p className="fw-normal" style={{ fontSize: '20px' }}>In setting up the company, he was able to rely on his vast experience from previous entrepreneurial activities and therefore knows what matters</p>
                    </Col>
                </Row>
                <Row>
                    {data.map((item, index) => (
                        <Col xs={12} lg={3} key={index}>
                            <img src={item.photo} alt='' className="w-100 mt-3" />
                            <div className="p-4 bg-warning">
                                <h4>{item.name}</h4>
                                <p className="fw-normal" style={{ fontSize: '20px' }}>{item.pos}</p>
                                <div>
                                    <img src='/images/Linked.png' alt=''className="me-3"/>
                                    <img src='/images/Facebook.png' alt='' className="me-3"/>
                                    <img src='/images/Twitter.png' alt=''/>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Team