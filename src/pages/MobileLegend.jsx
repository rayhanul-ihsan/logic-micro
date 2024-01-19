import { useEffect, useState } from 'react';
import NavbarComp from '../components/NavbarComp';

import { Card } from 'react-bootstrap';
import axios from 'axios';

const MobileLegend = () => {
  const [heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState('');
  const [reasult, setResult] = useState([]);

  useEffect(() => {
    axios.get('https://api.dazelpro.com/mobile-legends/hero')
    .then((res) =>{
      setHeroes(res.data)
      // console.log(res)
    });
  },[]);

  // useEffect(() =>{
  //   const results = heroes.filter((hero))
  //   // setSearch(results)
  //   console.log(results)
  // })

  const cari = () => {
    
    setHeroes(res.data)
  }

  return (
    <div>
      <NavbarComp/>
        <a href="/">
        <button className='btn btn-outline-secondary rounded-3 my-3 mx-3' >Beranda</button>
        </a>
      <div className='container'>
        <h1 className='text-[25px]'>Daftar Hero</h1>
        <input type="text" value={search} className='input-ml'/>
        <button onClick={cari}  className='btn border border-black'>cari</button>
        <button className='btn border border-black'>reset</button>
      </div>
      <div className='container'>
        <Card className='my-2'>
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text className='mb-0'>Peran:</Card.Text>
            <Card.Text>Kemampuan:</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default MobileLegend