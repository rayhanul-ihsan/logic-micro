
import {Button, Card} from 'react-bootstrap';
import CountdownTimer from "../elements/count";
import NavbarComp from "../components/NavbarComp";


const CountDuration = () => {
  // const targetDate = '2024-12-31T23:59:59';
  return (
    <div>
      <NavbarComp/>
        <div>
          <a href="/">
            <button className='btn btn-outline-secondary rounded-3 my-3 mx-3' >Beranda</button>
          </a>
        </div>
        <h1 className="text-center text-[30px]">Countdown Time</h1>
        <Card className="container">
          <Card.Body>
            <Card.Title >Enter the Target Date and Time:</Card.Title>
            <div>
            <input type="date" className='input-count mr-4'/>
            <Button variant="primary" className="mr-4" >START</Button>
            <Button variant="danger">RESET</Button>
            </div>
            <Card.Text>Countdown:</Card.Text>
            <p>Mulai menghitung...</p>
          </Card.Body>
        </Card>

        {/* <div>
          <h1>Countdown Timer</h1>
          <CountdownTimer targetDate={targetDate} />
        </div> */}
    </div>
  )
}

export default CountDuration