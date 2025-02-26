import { useState } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import FlightLayout from './components/FlightLayout';

import 'bootstrap/dist/css/bootstrap.min.css'
import { locations } from './utils/Index';
import BookingForm from './components/BookingForm';
function App() {
  const [searchState,setSearchState]=useState({
    from:locations[0],
    to:locations[2],
    date:''
  })
  const [selectedSeats,setSelectedSeats]=useState([])
 return(
 <>
 <Header/>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Search searchState={searchState} setSearchState={setSearchState}/> } />
  <Route path='/f/:id' element={<FlightLayout selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/> } />
  <Route path='/flight/book' element={<BookingForm 
  setSearchState={setSearchState}
  selectedSeats={selectedSeats} searchState={searchState}
  setSelectedSeats={setSelectedSeats}/> } />

 </Routes>
 </BrowserRouter>
 </>
   )
  };
export default App;
