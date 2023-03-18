import { responsiveFontSizes } from '@mui/material';
import { height } from '@mui/system';
import React from 'react';
import './White.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import img from './images/1.jpg';
import img1 from './images/2.webp';
import img2 from './images/3.jpg';
import img3 from './images/4.webp';
import img4 from './images/5.jpg';
import img5 from './images/6.jpg';

const White = () => {
  return (
    <div style={{backgroundColor:'white', height:'1400px'}} >
       <div className='fitem'>
        <br/>
        <h1 align= "center" style={{color:'white'}} id='tv'>VIDEO</h1>
        </div>
        <h4>Details:</h4>
        <h4><b>EVENT Date</b></h4>
        <h5>2023-02-22</h5>
        <h1 align="center">SINGERS</h1>
        <div align="center">Select an artist that matches your vibe</div><br/><br/>
      <div className="fcontainer">
     <div>
     <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>SELECT</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
     </div>
    &nbsp;&nbsp; &nbsp;&nbsp;
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>SELECT</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    &nbsp;&nbsp; &nbsp;&nbsp;
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>SELECT</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
      </div>
      <div className="fcontainer">
      <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>SELECT</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    &nbsp;&nbsp; &nbsp;&nbsp;
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>SELECT</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
    &nbsp;&nbsp; &nbsp;&nbsp;
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>SELECT</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
      </div>
    </div>
  );
};

export default White;