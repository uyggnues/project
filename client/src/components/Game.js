import React, { useState, useEffect } from 'react';
import Civilian from './Civilian';

const Game = () => {
    const [civilians, setCivilians] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/civilians")
        .then(resp => resp.json())
        .then(data => setCivilians(data))//setPost(data))
    }, []);
    
    const mappedCivilians = civilians.map( civilian => {
        return <Civilian key={civilian.id} civilian={civilian}/>
    })

    const displayOne = mappedCivilians.slice(0, 1)


    return (
        <div className='car'>
            <div className='infoBar'>

            </div>
            <div className='computer'>
                <button className='previous'>{'<'}</button>
                {displayOne}
                <button className='next'>{'>'}</button>
            </div>
        </div>
    );
}

export default Game;
