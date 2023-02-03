import React from 'react';
import City from './City'
// import { useState } from 'react'
// import Welcome from './Welcome';
import { useNavigate } from 'react-router-dom';

 
const Cities = ({cities, width, welcome}) => {
    const navigate = useNavigate()

    const mappedCities = cities.map((city) => {
        return <City city={city} key={city.id} width={width}/>
    })
    
    return (
        <div>
            <>
                {welcome ?
                    navigate('/Welcome')
                    :
                    <>
                        <div className='button'>
                            {width < 800 ?
                                <button className='instruction3' onClick={() => navigate('/Welcome')} >How to Play</button>
                                :
                                <button className='instruction' onClick={() => navigate('/Welcome')} >How to Play</button>
                            }
                        </div>
                        {width < 800 ?
                            <div className='title3'>Choose a City</div>
                            :
                            <div className='title'>Choose a City</div>
                        }
                        <div className='city'>{mappedCities}</div>
                    </>
                }
            </>
        </div>
    );
}

export default Cities;
