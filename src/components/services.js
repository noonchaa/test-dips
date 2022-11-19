import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

const Services = () => {
    const [openedService, setOpenedService] = useState(0)

    const data = [
        {
            title: 'E-Commerce Development',
            snip: "You want to get the best out of your business and turn mere visitors into paying customers? Sell your products on a secure platform and not worry about the technical details? We will help you implement your E-Commerce platform.",
            img1: '/images/service1.png',
            img2: '/images/service2.png',
            img3: '/images/service3.png',
            content: "In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital experience. They always put the clients first no matter how complicated the tasks are."
        },
        {
            title: 'Custom App Development',
            snip: "It's time to turn your vision into a high-performing and responsive app. This is how your customers will interact with your business, which is why we pay attention to every detail.",
            img1: '/images/service1.png',
            img2: '/images/service2.png',
            img3: '/images/service3.png',
            content: "In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital experience. They always put the clients first no matter how complicated the tasks are."
        },
        {
            title: 'Integration With 3rd Party Web Services',
            snip: "We use all opportunities to solve business problems. Our intelligent digital strategy and a pragmatic and thoughtful approach to solving business calls deliver a successful framework for both you and your audience.",
            img1: '/images/service1.png',
            img2: '/images/service2.png',
            img3: '/images/service3.png',
            content: "In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital experience. They always put the clients first no matter how complicated the tasks are."
        },
        {
            title: 'Hosting/Maintenance',
            snip: "Our hosting services are designed to give you the highest level of security with respect to your website’s performance. We exclusively use safe and modern servers, which minimizes the risk of any single point of failure. This includes a minimized risk of hacks or other malicious activities.",
            img1: '/images/service1.png',
            img2: '/images/service2.png',
            img3: '/images/service3.png',
            content: "In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital experience. They always put the clients first no matter how complicated the tasks are."
        },
        {
            title: 'Design UX/UI',
            snip: "Although it might seem merely superficial, the user experience might be the most crucial part of your online presence. When viewers are confronted with long loading times, cramped landing pages or an otherwise infuriating design, they will leave quicker than they came.",
            img1: '/images/service1.png',
            img2: '/images/service2.png',
            img3: '/images/service3.png',
            content: "In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital experience. They always put the clients first no matter how complicated the tasks are."
        },
        {
            title: 'SEO Services',
            snip: "A well-thought-out SEO strategy can boost your growth, and in turn sales, without an expensive PPC-campaign. There are multiple ways we can help you with this.",
            img1: '/images/service1.png',
            img2: '/images/service2.png',
            img3: '/images/service3.png',
            content: "In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital experience. They always put the clients first no matter how complicated the tasks are."
        }
    ]
    return (
        <div className="pt-5" style={{ background: '#000', backgroundImage:'url(/images/serviceBg.png)', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'bottom' }} id='services'>
            <Container className="mt-5 pt-5 text-white">
                <Row className="align-items-center mb-5 pb-5">
                    <Col xs={12} lg={4}>
                        <h1 className="display-2">OUR SERVICES</h1>
                    </Col>
                    <Col xs={12} lg={6}>
                        <h2 className="fw-normal">We've worked with a wide array of clients across the globe to apply design fundamentals of elegance, simplicity</h2>
                    </Col>
                    <Col xs={12} lg={2} className='text-end'>
                        <a href='#services' className='text-decoration-none fs-5 fw-normal text-white'>VIEW ALL <sup><img src='/images/ruw.png' width={36} height={36} alt='' className='mb-5 ms-1' /></sup></a>
                    </Col>
                </Row>
                {data.map((item, index) => (
                    <div key={index}>
                        <Row className="border-top border-secondary border-1 pt-5 align-items-start">
                            <Col xs={12} lg={5}>
                                <h3 className="fw-normal text-uppercase">{item.title}</h3>
                            </Col>
                            <Col xs={12} lg={7}>
                                <div className="d-block d-lg-flex align-items-start">
                                    <p className="fw-normal" style={{ fontSize: '18px' }}>{item.snip}</p>
                                    <div className="text-end mb-4 text-nowrap">
                                        {openedService !== index + 1 &&
                                            <button className="bg-warning border-0 py-3 px-4 text-nowrap ms-lg-3">
                                                LEARN MORE
                                                <img src="/images/ru.png" alt="" width={18} height={19} className='ms-4' />
                                            </button>}
                                        {openedService === index + 1 ?
                                            <span onClick={() => setOpenedService(0)} style={{ padding: '16px 0px' }}>
                                                <img src="/images/min.png" alt='' width={25} height={2} className='ms-4' />
                                            </span>
                                            :
                                            <img onClick={() => setOpenedService(index + 1)} src="/images/plus.png" alt='' width={25} height={25} className='ms-4' />
                                        }
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        {openedService === index + 1 &&
                            <Row className="align-items-start">
                                <Col xs={12} lg={5}>
                                    <img src={item.img1} alt='' className="w-100 mb-3" />
                                </Col>
                                <Col xs={12} lg={7}>
                                    <div className="row mb-3">
                                        <img src={item.img2} alt='' className="w-50 col" />
                                        <img src={item.img3} alt='' className="w-50 col" />
                                    </div>
                                    <div className="d-block d-lg-flex align-items-end">
                                        <p className="fw-normal" style={{ fontSize: '18px' }}>{item.content}</p>
                                        <div className="text-end">
                                            <button className="bg-warning border-0 py-3 px-4 text-nowrap ms-3 mb-3">LEARN MORE <img src="/images/ru.png" alt="" width={18} height={19} className='ms-4' /></button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>}
                    </div>
                ))}
            </Container>
        </div>
    )
}

export default Services