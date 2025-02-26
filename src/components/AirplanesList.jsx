import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
const FlightsContainer=styled.div`
background-color:#f0f0f0;
padding:1rem;
border-radius:5px;
box-shadow:0px 4px 8px rgba(0,0,0,0.2)`
const FlightItem=styled.div`
background-color:white;
padding:1rem;
margin:0.5rem 0;
border-radius:5px;
box-shadow:0px 2px 4px rgba(0,0,0,0.1)
`
function AirplanesList({flights}) {
const navigate=useNavigate()
  return (
    <FlightsContainer>
      <h3>Available Flights</h3>
      {flights.map((f)=><FlightItem
      className='d-flex align-items-center justify-content-between'
      key={f.id}>
      <div>
        <h3>{f.name}</h3>
        <p>
          <strong>Source:</strong>{f.source}
        </p>
        <p>
          <strong>Departure Time:</strong>{f.departureTime}
        </p>
        <p>
          <strong>Arrival Time:</strong>{f.arrivalTime}
        </p>
        <p>
          <strong>Price:</strong>{f.price}
        </p>
        <p>
          <strong>Type:</strong>{f.Type}
        </p>
        
      </div>
      <div>
      <Button className='mb-3' variant='success' onClick={()=>navigate(`f/${f.id}`)} >
          Book Now
        </Button>
        <h5>Available Seats:{f.availableSeats}</h5>
        </div>
      </FlightItem>
      
      )}
    </FlightsContainer>
   
  )
}

export default AirplanesList
