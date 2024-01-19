import { Routes, Route } from 'react-router-dom'

import NavbarComp from './components/NavbarComp'

import Home from './pages/home'
import CountDuration from './pages/CountDuration'
import CurrencyConvert from './pages/CurrencyConvert'
import MobileLegend from './pages/MobileLegend'
import Tictactoe from './pages/Tictactoe'
import MatchingCard from './pages/MatchingCard'
import SalaryCalculating from './pages/SalaryCalculating'
import WordScramb from './pages/WordScramb'
 
function App() {
 
  return ( 
    <>
    {/* <NavbarComp/> */}
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/count' element={<CountDuration/>}/>
      <Route path='/currency' element={<CurrencyConvert/>}/>
      <Route path='/mobile-legend' element={<MobileLegend/>}/>
      <Route path='/tictactoe' element={<Tictactoe/>}/>
      <Route path='/matching-card' element={<MatchingCard/>}/>
      <Route path='/salary' element={<SalaryCalculating/>}/>
      <Route path='/word-scramb' element={<WordScramb/>}/>
    </Routes>
      
    </>
  )
}

export default App
