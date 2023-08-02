import { useState,useEffect } from 'react'
import './App.css'
import Carousel from './carousel';

function App() {
  const [books,setBooks]=useState([]);
  
  useEffect(()=>{
    fetch('https://picsum.photos/v2/list?page=2&limit=40')
    .then((test)=>{return test.json()})
    .then((finished)=>{console.log(finished);setBooks(finished)})
  },[])
  return (
    <>
      <Carousel books={books}></Carousel>
    </>
  )
}

export default App
