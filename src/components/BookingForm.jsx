import { Button,Form } from 'react-bootstrap'
import React from 'react'
import {useNavigate } from 'react-router-dom'
import { locations} from '../utils/Index';
import { Navigate } from 'react-router-dom';

function BookingForm({searchState,selectedSeats,setSelectedSeats,setSearchState}) {
   const navigate=useNavigate()

  return (
    <div className='text-center '>
      <h2>{searchState.from} To {searchState.to}</h2>
      <h5>Date:{searchState.date}</h5>
      <br/>
      <h5>Please Fill below Details</h5>
      {selectedSeats.map((data)=>(
        <div>
          <div className='my-3'>Seat No:{data}</div>
          <Form.Group className='d-flex justify-content-center'>
            <Form.Label>Name:</Form.Label>
            <Form.Control className='ms-3 mb-2 width-300' 
            placeholder='Name'
            type='text'>
            </Form.Control>
          </Form.Group>
          <Form.Group className='d-flex justify-content-center'>
            <Form.Label>Age:</Form.Label>
            <Form.Control className='ms-3 mb-2 width-300' 
            placeholder='Name'
            type='number'>
            </Form.Control>
          </Form.Group>
          </div>
      ))}
      <Button onClick={()=>{
        alert("your ticket booked succesfully");
        setSearchState({
          from:locations[0],
          to:locations[2],
          date:''
        })
        setSelectedSeats([])
        navigate('/')
      }}
      variant="success" >Pay Now</Button>
    </div>
  )
}

export default BookingForm
