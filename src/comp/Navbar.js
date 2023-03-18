import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import img from '../comp/images/download.png';

const Header = () => {
  return (
    <div>
         <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={img}
              width="150"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Container>
          <Navbar.Brand href="#home" style={{paddingLeft:'600px'}}>HELLO,NAME</Navbar.Brand>
        </Container>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;