import React from 'react'
import styled from 'styled-components'
import {useParams,useNavigate} from 'react-router-dom'
import { Airplanes } from '../utils/Index'
import { Button } from "react-bootstrap";


const Container=styled.div`
background-color:#f0f0f0;
padding:1rem;
border-radius:7px;
box-shadow:0px 4px 8px rgba(0,0,0,0.2)
`
const TicketContainer=styled.div`
padding:0.5rem`
const TicketItem=styled.div`
list-style-type:none;
margin:0.5rem;
padding:1px;
background-color:white;
border-radius:5px;
box-shadow:0px 4px 8px rgba(0,0,0,0.2)
display:flex;
justify-content:space-between;
align-items:center;
text-align:center;

`
function FlightLayout({selectedSeats,setSelectedSeats}) {
const {id} = useParams();
 const navigate=useNavigate()
const Selected=Airplanes.find((data)=>data.id === parseInt(id))
const isSleeper=Selected.Type === 'Sleeper'
const seatWidth=isSleeper ? '80px' : '25px'
const selectSeat=(seat,key)=>{
  if(selectedSeats?.includes(seat)){
    const seats=selectedSeats.filter((selectedSeat) =>selectedSeat!== seat)
    setSelectedSeats(seats);
    return;
  }
  setSelectedSeats((prevState)=>([...prevState,seat]))
  
}
const isSeatSelected=(seat)=>selectedSeats.includes(seat)
const isSeatAvailable=(seat)=>Selected.availableSeats.includes(seat)
const generateSeats=(array,key="")=>
array.map((seats)=>Array.isArray(seats) ? (
<div className='d-flex'>
{seats.map((seat)=>(
  <TicketItem 
  style={{width:seatWidth,
  background:isSeatSelected (`${key}${seat}`)?'#318beb':isSeatAvailable(`${key}${seat}`)? '#fff':'#b6b4b4',
  cursor:isSeatAvailable(`${key}${seat}`)?"pointer" : "",}} key={seat}
  onClick={()=>selectSeat(`${key}${seat}`)} >
    {key}{seat}</TicketItem>
))}
</div>
):(
<TicketItem style={{width:seatWidth,
  background:isSeatSelected (`${key}${seats}`)?
  '#318beb': isSeatAvailable(`${key}${seats}`)? '#fff':'#b6b4b4',
  cursor:isSeatAvailable(`${key}${seats}`)?"pointer" : "",}}
  onClick={()=>selectedSeats(`${key}${seats}`)} 
  >{key}{seats}
  </TicketItem>
  ));
  return (
   <Container>
    <h2>{Selected.name}</h2>
    <h4>Tickets</h4>
    <h5>{Selected.Type}</h5>
    <div className='d-flex'>
      <div className='d-flex mb-2 align-items-center'>
        <h5>Available:</h5>
        <TicketItem style={{width:seatWidth}}>
         {1}
        </TicketItem>
      </div>
      <div className='d-flex mb-2 align-items-center'>
        <h5>Booked:</h5>
        <TicketItem style={{width:seatWidth,background:'#b6b4b4'}}>
         {1}
        </TicketItem>
      </div>
      <div className='d-flex mb-2 align-items-center'>
        <h5>Selected:</h5>
        <TicketItem style={{width:seatWidth,background:'#318b4b'}}>
         {1}
        </TicketItem>
      </div>
    </div>
    <ul className='d-flex flex-wrap'>{isSleeper ? (
    <>
    <TicketContainer className='d-flex align-items-center'>
      <h6 className='p-3'>Upper</h6>
      <div className='d-flex flex-wrap'>
        {generateSeats(Selected.seatLayout.upper.first,'U')}
      </div>
      <div className='d-flex mt-4'>
        {generateSeats(Selected.seatLayout.upper.second,'U')}
      </div>
      </TicketContainer>
      <TicketContainer className='d-flex align-items-center'>
      <h6 className='p-3'>Lower</h6>
      <div className='d-flex flex-wrap'>
        {generateSeats(Selected.seatLayout.upper.first,'L')}
      </div>
      <div className='d-flex mt-4'>
        {generateSeats(Selected.seatLayout.upper.second,'L')}
      </div>
      </TicketContainer>
      </>
      ):(
      <>
      <TicketContainer className='d-flex align-items-center'>
        <div>Seater</div>
      <div >
        {generateSeats(Selected.seatLayout.first)}
      <div className='mt-4' >
        {generateSeats(Selected.seatLayout.second)}
      </div>
      </div>
      </TicketContainer></>
      )}
      </ul>
      <div className='d-flex justify-content-center'>
        {selectedSeats?.length>0 && (
          <h4>Selected Seats:{selectedSeats.join(',')}</h4>
        )}
      </div>
      <div>
        <Button variant='success'
        onClick={()=>navigate("/flight/book")}
        disabled={!(selectedSeats && selectedSeats.length>0)}>Book Now</Button>
      </div>
   </Container>
  )
}

export default FlightLayout
