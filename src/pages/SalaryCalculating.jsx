import React, { useState } from 'react';

import {Button, Card, Row, Col} from 'react-bootstrap';
import NavbarComp from '../components/NavbarComp';

const SalaryCalculating = () => {
  const [pokok, setPokok] = useState('');
  const [tunjangan, setTunjangan] = useState('');
  const [kewajiban, setKewajiban] = useState('');
  const [Kotor, setKotor] = useState ('');
  const [result, setResult] = useState('');

  const kalkulasi =()=>{
    const in1 = parseFloat(pokok);
    const in2 = parseFloat(tunjangan);
    const in3 = parseFloat(kewajiban);

    
    if (isNaN(in1) || isNaN(in2) || isNaN(in3)){
      setResult('salah input');
    }else {
      setKotor(in1+in2)
      setResult((in1+in2)-in3)
    }

  }

  const reset = () =>{
    setPokok('');
    setTunjangan('');
    setKewajiban('');
    setResult('');
    setKotor('');
  }



  return (
    <div>
      <NavbarComp/>
        <div>
          <a href="/">
            <button className='btn btn-outline-secondary rounded-3 my-3 mx-3' >Beranda</button>
          </a>
        </div>
        <Card className="container">
          <Card.Header className='text-center'>Kalkulator Gaji</Card.Header>
          <Card.Body>
            <Row>
              <Col xs={6}>
                <form>
                  <div>
                    <label htmlFor="user" className='label'>Gaji Pokok</label>
                    <input type="number" value={pokok} onChange={(e) => setPokok(e.target.value)} id='user' className='input'/>
                  </div>
                  <div>
                    <label htmlFor="pass" className='label'>Tunjangan</label>
                    <input type="number" value={tunjangan} onChange={(e) => setTunjangan(e.target.value)} id='pass' className='input'/>
                  </div>
                  <div className='mb-6'>
                    <label htmlFor="pass" className='label'>Kewajiban Pokok</label>
                    <input type="number" value={kewajiban} onChange={(e) => setKewajiban(e.target.value)} id='pass' className='input'/>
                  </div>
                </form>
              </Col>
              <Col xs={6}>
                <h2 className='font-bold'>Hasil</h2>
                <p>Gaji Kotor : Rp.{Kotor}</p>
                <p>Gaji Pokok : Rp.{pokok}</p>
                <p>Gaji Bersih : Rp.{result}</p>
              </Col>
            </Row>
            <div>
            <Button variant="primary" onClick={kalkulasi} className='mr-4'>Hitung Gaji</Button>
            <Button variant="danger" onClick={reset} >reset</Button>
            </div>
          </Card.Body>
        </Card>
    </div>
  )
}

export default SalaryCalculating