import './App.css';
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Cities from './components/Cities'
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import Criminals from './components/Criminals';
import Welcome from './components/Welcome'
import NewCriminal from './components/NewCriminal';

function useWindowSize () {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth])
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth])
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return size
}


function App() {
  const [welcome, setWelcome] = useState(true)
  const [cities, setCities] = useState([])
  const[height, width] = useWindowSize();

  
  useEffect(() => {
    fetch("http://localhost:4000/cities")
    .then(resp => resp.json())
    .then(data => setCities(data))//setPost(data))
  }, []);



  return (
    <div>
      <Routes>
        <Route path='/cities/:city_id/NewCriminal' element={<NewCriminal setCities={setCities}/>} />
        <Route path='/cities/:city_id/criminals' element={<Criminals />} />
        <Route path='/Welcome' element={<Welcome setWelcome={setWelcome} width={width}/>} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<Cities cities={cities} width={width} welcome={welcome} setWelcome={setWelcome}/>} />
        <Route path='*' element={<Error />} />
      </Routes>
     
    </div>
  );
}

export default App;