import React from 'react';
import City from './City'
import { useState } from 'react'
import Welcome from './Welcome';

const Cities = ({cities, width}) => {
    const [welcome, setWelcome] = useState(true)

    const mappedCities = cities.map((city) => {
        return <City city={city} key={city.id} width={width}/>
    })
    return (
        <div>
            <>
                {welcome ?
                    <Welcome setWelcome={setWelcome} width={width}/>
                    :
                    <div className='button'>
                        <button className='instruction' onClick={() => setWelcome(current => !current)}>How to Play</button>
                    </div>
                }
                <div className='city'>{mappedCities}</div>
            </>
        </div>
    );
}

export default Cities;
