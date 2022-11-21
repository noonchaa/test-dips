import { Col, Container, Row } from "react-bootstrap"

const Portfolio = () => {
    const data = [
        {
            category: 'Custom WEB Development',
            title: 'HANA BANK Website',
            keys: ['2017 Webby Award Winner for Best Shopping App', 'DSC was reportedly acquired by Unilever for $1 billion', '4.8 Google Play Reviews', '97% of app users would recommend the DSC app to a friend'],
            link: '#portfolio',
            imgMobile: '/images/mobile1.png',
            imgWeb: '/images/laptop1.png'
        },
        {
            category: 'Custom App Development',
            title: 'UTVI PWA',
            keys: ['2021 App Award Winner for Best Maid App', 'DSC was reportedly acquired by Unilever for $1 billion', '4.8 Google Play Reviews', '4.8 App Store Reviews', '97% of app users would recommend the DSC app to a friend'],
            link: '#portfolio',
            imgMobile: '/images/mobile2.png',
            imgWeb: '/images/laptop2.png'
        },
        {
            category: 'DESIGN UI/UX',
            title: 'BASF WEB DESIGN',
            keys: ['2017 Webby Award Winner for Best Shopping App', 'DSC was reportedly acquired by Unilever for $1 billion', '4.8 Google Play Reviews', '97% of app users would recommend the DSC app to a friend'],
            link: '#portfolio',
            imgMobile: '/images/mobile3.png',
            imgWeb: '/images/laptop3.png'
        },
        {
            category: 'E-Commerce Development',
            title: 'Open Fashion Mobile App',
            keys: ['2021 App Award Winner for Best Maid App', 'DSC was reportedly acquired by Unilever for $1 billion', '4.8 Google Play Reviews', '4.8 App Store Reviews', '97% of app users would recommend the DSC app to a friend'],
            link: '#portfolio',
            imgMobile: '/images/mobile4.png',
            imgWeb: '/images/laptop4.png'
        }
    ]
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
                        <img src="/images/left.png" width={25} height='auto' alt='' className="me-3" />
                        <img src="/images/right.png" width={25} height='auto' alt='' />
                    </Col>
                </Row>
                {data.map((item, index) => (
                    <Row className="align-items-center mt-5" key={index}>
                        <Col xs={{order:'last'}} lg={index === 1 ? {order: 'last', span:'4'} : index === 3 ? {order:'last', span:'4'} : {order:'first', span:'4'}}>
                            <h4 className="text-secondary text-uppercase">{item.category}</h4>
                            <h1 className="display-5 fw-normal">{item.title}</h1>
                            <ol className="fw-normal" style={{ fontSize: '21px' }}>
                                {item.keys.map((key, indexKey) => (
                                    <li key={indexKey}>{key}</li>
                                ))}
                            </ol>
                            <button href={item.link} className="bg-warning border-0 py-3 px-4 text-nowrap">LEARN MORE <img src="/images/ru.png" alt="" width={18} height={19} className='ms-4' /></button>
                        </Col>
                        <Col xs={12} lg={8} className='position-relative overflow-hidden mb-3'>
                            <img src={item.imgWeb} alt="" className={index === 3 ? 'position-absolute top-0' : 'w-100 position-absolute top-0 end-0'} style={{width:'35%', right: '25%'}} />
                            <img src={item.imgMobile} alt="" className="position-relative" style={index === 3 ? {zIndex: '5', width: '50%'} : {zIndex: '5', width: '35%'}} />
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    )
}

export default Portfolio