import React from 'react'
import { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { data } from 'react-router-dom'
import styled from 'styled-components'
import { Airplanes, locations,source } from '../utils/Index'
import AirplanesList from './AirplanesList'

const Container=styled.div`
 back-ground-color:white;
 padding:1rem;
 border-radius:6px;
 box-shadow:0px 4px 8px rgba(0,0,0,0.2);
 text-align:center;
 `
export default function Search({searchState ,setSearchState}) {
  const [filteredAirplane,setFilteredAirplane]=useState(null)

  const handleSearch=()=>{
    setFilteredAirplane(Airplanes.filter((data)=> data.source===searchState.from &&
     data.destination === searchState.to && data.availableDates.includes(searchState.date))
    )
  };
  return (
    <Container>
      search
      <div className='d-flex flex-column align-items-center'>
      <Form.Select className='mb-3 width-300'
        value={searchState.from}
        onChange={(e)=>setSearchState((prevState)=>({
          ...prevState,
          from:e.target.value

        }))}
        >
          {locations.map((data)=>(
            <option key={`${data}-source`} value={data}>
              {data}
            </option>
          ))}
        </Form.Select>
        <Form.Select className='mb-3 width-300'
        value={searchState.to}
        onChange={(e)=>setSearchState((prevState)=>({
          ...prevState,
          to:e.target.value

        }))}
        >
          {locations.map((data)=>(
            <option key={`${data}-destination`} value={data}>
              {data}
            </option>
          ))}
        </Form.Select>
        <input className='form-control mb-3 width-300' type='date' 
        value={searchState.date}
        onChange={(e)=>setSearchState((prevState)=>({...prevState,date:e.target.value}))} 
        />
      </div>
      <Button variant="primary" className='mb-3' onClick={handleSearch}>Search</Button>
      {filteredAirplane && filteredAirplane?.length >0 &&<AirplanesList flights={filteredAirplane}/> }
      {filteredAirplane && filteredAirplane?.length <1 &&<h2>No Flights Found</h2>}

      
    </Container>
  )
}
