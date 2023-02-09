import React, { useState, useEffect } from 'react';
import Civilian from './Civilian';
import { useParams } from 'react-router-dom';
import GameCriminal from './GameCriminal';

const Game = () => {
    const [civilians, setCivilians] = useState([])
    const [criminals, setCriminals] = useState([])
    const params = useParams()
    const cityId = parseInt(params.city_id)

    const mix = [...civilians, ...criminals]
    // console.log(mix)

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffleArray(mix)

    
    useEffect(() => {
        fetch(`http://localhost:4000/cities/${cityId}/civilians`)
        .then(resp => resp.json())
        .then(data => {
            setCivilians(data.civilians)
            setCriminals(data.criminals)
        })
    }, [cityId]);
    
    const mappedMix = mix.map( m => (m.sentenced ? 
        <GameCriminal key={`gameCriminal-${m.id}`} m={m}/>
        :
        <Civilian key={`civilian-${m.id}`} m={m}/>
    ))
    
    const displayOne = mappedMix[0]


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
