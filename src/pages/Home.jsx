import React, {useEffect} from 'react';
import Aos from 'aos';

import { Button, Row, Col } from 'react-bootstrap';
import NavbarComp from '../components/NavbarComp';

const Home = () => {
  useEffect(()=>{
    Aos.init();
    Aos.refresh();
  },[])

  return (
    <div className='body-home'>
        <NavbarComp/>

        <Row className="justify-content-md-center my-5">
            <Col  md="auto"><Button data-aos="fade-right" variant="dark" href='/count'>Count Duration</Button></Col>
        </Row>
        <Row className="justify-content-md-center my-5">
            <Col md="auto"><Button variant="dark" href='/currency'>Currency Convert</Button></Col>
        </Row>
        <Row className="justify-content-md-center my-5">
            <Col md="auto"><Button variant="dark" href='/mobile-legend'>Mobile Legend</Button></Col>
        </Row>
        <Row className="justify-content-md-center my-5">
            <Col md="auto"><Button variant="dark" href='/tictactoe'>Tic Tac Toe</Button></Col>
        </Row>
        <Row className="justify-content-md-center my-5">
            <Col md="auto"><Button variant="dark" href='/matching-card'>Matching Card</Button></Col>
        </Row>
        <Row className="justify-content-md-center my-5">
            <Col md="auto"><Button variant="dark" href='/salary'>Salary Calculating</Button></Col>
        </Row>
        <Row className="justify-content-md-center my-5">
            <Col md="auto"><Button variant="dark" href='/word-scramb'>Word Scramb</Button></Col>
        </Row>
    </div>
  )
}

export default Home