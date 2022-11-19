import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Topbar() {
  const [active, setActive] = useState('/')
  const [open, setOpen] = useState(false)

  const link = [
    {
      text: 'home',
      link: '/'
    },
    {
      text: 'services',
      link: '#services'
    },
    {
      text: 'work flow',
      link: '#flow'
    },
    {
      text: 'portfolio',
      link: '#portfolio'
    },
    {
      text: 'about us',
      link: '#about'
    },
    {
      text: 'our value',
      link: '#value'
    }]

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className={open ? 'bg-dark bg-opacity-10' : 'bg-transparent'}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/images/logo.png"
            width="224"
            height="75"
            className="d-inline-block align-top"
            alt="Dips"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setOpen(!open)}/>
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav onClick={() => setOpen(false)}>
            {link.map((item, index) => (
              <Nav.Link onClick={() => setActive(item.link)} href={item.link} key={index} className={`text-uppercase gujarati ${active === item.link ? 'text-warning fw-bold':'text-white fw-normal'}`}>{item.text}</Nav.Link>
            ))}
          </Nav>
          <Nav onClick={() => setOpen(false)}>
            <Nav.Link className='lg:ms-4 text-black' href='#contact'>+62 21 858 3944</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;