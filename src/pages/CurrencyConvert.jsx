
import { useState } from 'react';
import NavbarComp from '../components/NavbarComp';
import {Button, Card} from 'react-bootstrap';

const CurrencyConvert = () => {
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [convertResult, setConvertResult] = useState(0);
  const mataUang = ['Pilih','USD', 'EUR', 'GBP', 'IDR'];
  
  const convert = () =>{
    const moneyRate = {
      Pilih  : {USD: 0,EUR: 0,GBP: 0,IDR: 0},
      USD : {USD: 1,EUR: 1.09,GBP: 0.79,IDR: 15000},
      EUR : {USD: 1.09,EUR: 1,GBP: 0.86,IDR: 17000},
      GBP : {USD: 1.27,EUR: 1.17,GBP: 1,IDR: 20000},
      IDR : {USD: 0.000064,EUR: 0.000059,GBP: 0.000050,IDR: 1},
    };

    const hitung = moneyRate[from][to];
    const result = input * hitung;
    setConvertResult(result);
  };

  const reset = () => {
    setInput(0);
    setFrom('');
    setTo('');
    setConvertResult(0);
  };

  return (
    <div>
      <NavbarComp/>
        <a href="/">
        <button className='btn btn-outline-secondary rounded-3 my-3 mx-3' >Beranda</button>
        </a>
        <h1 className="text-center text-[30px]">Currency Converter</h1>
        <Card className="container">
          <Card.Body>
            <div className='flex'>
              <input type="number" value={input} onChange={(e) => setInput(e.target.value)} className='input-money mr-4' />
              <select value={from} onChange={(e) => setFrom(e.target.value)} className="input-select mr-4">
                {mataUang.map((currency) => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
              <Card.Text className='mr-4 font-normal text-[20px]'>TO</Card.Text>
              <select value={to} onChange={(e) => setTo(e.target.value)} className="input-select mr-4">
                {mataUang.map((currency) => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
              <Button variant="primary" className="mr-4" onClick={convert} >Convert</Button>
              <Button variant="danger" onClick={reset} >RESET</Button>
            </div>
            <Card.Text className='mb-1'>Try output :</Card.Text>
            <input type="number" value={convertResult} className='input-money'/>
          </Card.Body>
        </Card>
    </div>
  )
}

export default CurrencyConvert