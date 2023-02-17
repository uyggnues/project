import React from 'react';
import City from './City'
import { useEffect } from 'react'
// import Welcome from './Welcome';
import { useNavigate } from 'react-router-dom';

 
const Cities = ({cities, width, welcome, setUser}) => {
    const navigate = useNavigate()

    const mappedCities = cities.map((city) => {
        return <City city={city} key={city.id} width={width}/>
    })
    useEffect(() => {
        if (welcome) navigate('/Welcome')
    }, [welcome, navigate])

    const logout = () => {
  

        fetch('http://localhost:4000/logout', {
            method: 'DELETE',
        })
        .then(resp => {
            if (resp.ok) {
                    setUser(null)
            } else {
                resp.json().then(messageObj => alert(messageObj.error))
            }
        })
    }
    return (
        <div>
            <>
                <div className='button'>
                    {width < 800 ?
                        <>
                        <button className='instruction3' onClick={() => navigate('/Welcome')} >How to Play</button>
                        <button className='logout' >Logout</button>
                        </>
                        :
                        <>
                        <button className='instruction3' onClick={() => navigate('/Welcome')} >How to Play</button>
                        <button className='logout' onClick={logout} >Logout</button>
                        </>
                    }
                </div>
                {width < 800 ?
                    <div className='title3'>Choose a City</div>
                    :
                    <div className='title'>Choose a City</div>
                }
                <div className='city'>{mappedCities}</div>
            </>
        </div>
    );
}

export default Cities;
