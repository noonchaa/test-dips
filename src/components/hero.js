import Carousel from 'react-bootstrap/Carousel';
import Topbar from './topbar';

function Hero() {
    const data = [
        {
            src: '/images/hero1.png',
            alt: 'first',
            text: "we assist you in",
            text2: "solving tomorrow's",
            text3: 'problems today'
        },
        {
            src: '/images/hero2.png',
            alt: 'second',
            text: "Creating High",
            text2: 'performance',
            text3: 'digital asset'
        }
    ]

    return (
        <div>
            <div className='position-absolute top-0 w-100' style={{ zIndex: 10 }}>
                <Topbar />
            </div>
            <Carousel controls={false} pause={false}>
                {data.map((item) => (
                    <Carousel.Item key={item.alt}>
                        <img className='d-block w-100' width='auto' height={932} style={{ objectFit: 'cover' }} src={item.src} alt={item.alt} />
                        <img src='/images/d.png' alt='' className='position-absolute end-0' style={{ top: '110px' }} />
                        {item.alt === 'first' && <img src='/images/w.png' alt='' className='position-absolute end-0' style={{ top: '110px' }} />}
                        <div className='d-none d-lg-block position-absolute w-100 text-black bottom-0 text-end' style={{ paddingBottom: '100px', zIndex:10 }}>
                            <div className='container'>
                                <a href='#about' className='text-black text-decoration-none fs-5 fw-normal'>ABOUT US <sup><img src='/images/ru.png' width={36} height={36} alt='' className='mb-5 ms-1'/></sup></a>
                            </div>
                        </div>
                        <Carousel.Caption className='w-100'>
                            <div className='container'>
                                <h1 className='text-uppercase display-1 m-0 fw-normal'>{item.text}</h1>
                                <h1 className='text-uppercase display-1 m-0 fw-normal'>{item.text2}</h1>
                            </div>
                            <div style={{ background: '#000' }}>
                                <h1 className='text-uppercase display-1 text-white m-0 container mx-auto fw-normal'>{item.text3}</h1>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Hero;