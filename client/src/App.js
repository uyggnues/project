import './App.css';
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Cities from './components/Cities'
import Login from './components/Login';
import Signup from './components/Signup';
import Criminals from './components/Criminals';
import Welcome from './components/Welcome'
import NewCriminal from './components/NewCriminal';
import UpdateCriminal from './components/UpdateCriminal';
import Jail from './components/Jail';
import Game from './components/Game';
import Logout from './components/Logout';

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
  const [height, width] = useWindowSize();
  
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [toggleAuth, setToggleAuth] = useState(false)
  
  useEffect(() => {
    fetch("http://localhost:4000/cities")
    .then(resp => resp.json())
    .then(data => setCities(data))//setPost(data))
  }, []);


  return (
    <div>
      {/* {user ? */}
        <Routes>
          <Route path='/cities/:city_id/UpdateCriminal/:criminal_id' element={<UpdateCriminal cities={cities} setCities={setCities} />} />
          <Route path='/cities/:city_id/NewCriminal' element={<NewCriminal setCities={setCities}/>} />
          <Route path='/cities/:city_id/criminals' element={<Criminals/>} />
          <Route path='/cities/:city_id/catch' element={<Game/>} />
          <Route path='/cities/:city_id/jail' element={<Jail />} />
          <Route path='/Welcome' element={<Welcome setWelcome={setWelcome} width={width}/>} />
          <Route exact path='/' element={<Cities cities={cities} width={width} welcome={welcome} setWelcome={setWelcome}/>} />
          <Route path='*' element={<Welcome />} />
          <Route path='/Logout' element={<Logout setUser={setUser} setMessage={setMessage} setToggleAuth={setToggleAuth}/>} />
        </Routes>
      {/* : */}
        <Routes>
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login setUser={setUser} setMessage={setMessage} setToggleAuth={setToggleAuth}/>} />
        </Routes>
      {/* } */}
     
    </div>
  );
}

export default App;