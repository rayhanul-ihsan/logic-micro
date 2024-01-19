import React, { useEffect, useState } from 'react'
import NavbarComp from '../components/NavbarComp'
import { Button } from 'react-bootstrap'



const WordScramb = () => {
  const [textOri, setTextOri] = useState('react');
  const [acak, setAcak] = useState('');
  const [input, setInput] = useState('');
  const [skor, setSkor] = useState('');

    // var dummyText = ['React', 'javascript', 'typescript']

  useEffect(() => {
    scrambleWord();
  },[textOri]);

  const scrambleWord = () =>{
    const wordArray = textOri.split('');
      for (let i = wordArray.length - 1; i>0; i--){
        const cek = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[cek]] = [wordArray[cek], wordArray[i]];
      }
      setAcak(wordArray.join(''));
  };

  const btnCek = () =>{
    if(input === textOri){
        setSkor('Benar')
    }else if(input === ''){
    setSkor('Jawaban Kosong');
  }else{
      setSkor('Salah')
    }
    console.log(input);
  }

  const rstBtn = () => {
    scrambleWord();
    setInput('');
    setSkor('');
  }
  return (
    <div>
      <NavbarComp/>
      <a href="/">
        <button className='btn btn-outline-secondary rounded-3 my-3 mx-3' >Beranda</button>
        </a>
      <div className='container'>
        <h1 className='text-[30px] text-center '>Word Scramble</h1>
        <p className='mb-0'>Skor: {skor}</p>
        <h2 className='mb-0'>Kata yang diacak:</h2>
        <p className='mb-0'>{acak}</p>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='input-word'/><br/>
        <Button onClick={btnCek}  className='btn border border-black mr-2'>Cek Jawaban</Button>
        <Button onClick={rstBtn}   className='btn border border-black'>Acak Kata</Button>
      </div>

    </div>
  )
}

export default WordScramb