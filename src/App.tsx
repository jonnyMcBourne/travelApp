import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';

//components
import NavBar from './components/NavBar'

function App() {

  const[ancho,setAncho]=useState(0)
  const[alto,setAlto]=useState(0)

  console.log(ancho)
  useEffect(()=>{
    setAncho(window.innerWidth)

  },[window.innerWidth])

  return (
    <>
    <Router>
    <NavBar/>
    <p>{ancho}</p>
    </Router>

 </>
  );
}

export default App;
