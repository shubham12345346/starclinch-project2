import { height } from '@mui/system';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './images/download.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconName } from "react-icons/si";


const Footer = () => {
  return (
    <div style={{background:'white',height:'900px'}}>
  <h4 style={{paddingLeft:'50px'}}><img src={img} alt ='logo' width='150px' height='50px'/><br/>
 &nbsp;&nbsp;&nbsp;&nbsp; <i><FacebookRoundedIcon/></i>
 &nbsp; <i><TwitterIcon/></i>
  &nbsp;<i><YouTubeIcon /></i>
  &nbsp;<i><InstagramIcon/></i>
  &nbsp;</h4><br/><br/><br/>

 <Container style={{backgroundColor:'white',height:'400px'}}>
<Row>
  <Col><b>FOR BUYERS</b></Col>
  <Col><b>FOR ARTISTS</b></Col>
  <Col><b>REGISTERED OFFICE <br/> ADDRESS:</b></Col>
</Row>
<Row>
  <Col style={{color:'green'}}>Our Buyers</Col>
  <Col style={{color:'green'}}>Login</Col>
  <Col>VINSM Globe Private Limited</Col>
</Row>
<Row>
  <Col style={{color:'green'}}>Browse</Col>
  <Col style={{color:'green'}}>Artist SignUP</Col>
  <Col>Percet House,Ground Floor</Col>
</Row>
<Row>
  <Col style={{color:'green'}}>Post Your Requirement</Col>
  <Col style={{color:'green'}}>Artist Subscriptions</Col>
  <Col>East of Kailash,New Delhi</Col>
</Row>
<Row>
  <Col style={{color:'green'}}>Entertainment on EMI</Col>
  <Col></Col>
  <Col>CIN:U52605DL2012PTC236944</Col>
</Row>
<Row>
  <Col></Col>
  <Col></Col>
  <Col>Phone:+91 11 498 498 01</Col>
</Row>
<Row>
  <Col><b>ABOUT US</b></Col>
  <Col><b>POLICY</b></Col>
  <Col></Col>
</Row>
<br/>
<Row>
  <Col style={{color:'green'}}>Our Story</Col>
  <Col style={{color:'green'}}>Privacy Policy</Col>
  <Col style={{color:'green'}}>Contact Us</Col>
</Row>
<Row>
  <Col style={{color:'green'}}>Careers</Col>
  <Col style={{color:'green'}}>Terms of use</Col>
  <Col></Col>
</Row>
<Row>
  <Col></Col>
  <Col style={{color:'green'}}>Disclaimer</Col>
  <Col></Col>
</Row>
<Row>
  <Col></Col>
  <Col style={{color:'green'}}>FAQs</Col>
  <Col></Col>
</Row>
  </Container>
  <div align="center">
    &copy;Copyright 2015-2023|
    <i style={{color:'green'}}>VINSM Globe Pvt. Ltd.</i>|
    All Rights Reserved
  </div>
    </div>
    
  );
}

export default Footer;