import React, { useState, useEffect } from 'react';
import Civilian from './Civilian';
import { useParams, useNavigate } from 'react-router-dom';
import GameCriminal from './GameCriminal';
import GameTopCriminal from './GameTopCriminal';

const Game = () => {
    const navigate = useNavigate()
    const [civilians, setCivilians] = useState([])
    const [criminals, setCriminals] = useState([])
    const [mixed, setMixed] = useState([])
    const [wrong, setWrong] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [index, setIndex] = useState(0)
    const [barIndex, setBarIndex] = useState(0)
    const params = useParams()
    const cityId = parseInt(params.city_id)

    // const mix = [...civilians, ...criminals]
    // setMixed(mix)
    // setMixed([...civilians, ...criminals])
    // console.log(mixed)
    const shuffleArray = (array) => {
        // console.log(mixed)
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setMixed(array)
        return array
    }
    
    useEffect(() => {
        fetch(`http://localhost:4000/cities/${cityId}/civilians`)
        .then(resp => resp.json())
        .then(data => {
            setCivilians(data.civilians)
            setCriminals(data.criminals)
            shuffleArray([...data.civilians, ...data.criminals])
        })
    }, [cityId]);
    
    
    const mappedMix = mixed.map( m => (m.sentenced ? 
        <GameCriminal key={`gameCriminal-${m.id}`} m={m} cityId={cityId} setCivilians={setCivilians} setCorrect={setCorrect} setMixed={setMixed} setCriminals={setCriminals}/>
        :
        <Civilian key={`civilian-${m.id}`} m={m} setWrong={setWrong}/>
    ))
    
    const displayOne = mappedMix[index]
    const displayCriminals = criminals.map( c =>
        <GameTopCriminal key={c.id} c={c}/>
    )
    const displayUno = displayCriminals[barIndex]
    
    const displayNext = () => {
        if(index === mappedMix.length - 1) {
            setIndex(0)
        } else {
            setIndex(current => current + 1)
        }
    }
    const displayPrevious = () => {
        if(index <= 0) {
            setIndex(mappedMix.length -1)
        } else {
            setIndex(current => current - 1)
        }
    }
    const barNext = () => {
        if(barIndex === displayCriminals.length - 1) {
            setBarIndex(0)
        } else {
            setBarIndex(current => current + 1)
        }
    }
    const barPrevious = () => {
        if (barIndex <= 0){
            setBarIndex(displayCriminals.length - 1)
        } else {
            setBarIndex(current => current - 1)
        }
    }

    return (
        <div className='car'>
            {correct ? <div className='correct' >
                            <p className='corrText'>CORRECT!
                            <br/>
                            <button onClick={() => setCorrect(current => !current)} className='corrBut'>X</button>
                            </p>
                       </div> : null}
            {wrong ? <div className='wrong' >
                        <p className='wroText'>WRONG!
                        <br/>
                        <button onClick={() => setWrong(current => !current)} className='wroBut'>X</button>
                        </p>
                     </div> : null}
            <div className='infoBar'>
            <button className='barPrevious' onClick={() => barPrevious()} >{'<'}</button>
                {displayUno}
                <button className='barNext' onClick={() => barNext()} >{'>'}</button>
            </div>
            <div className='boot'>
                <button className='backButton' onClick={() => navigate(`/cities/${cityId}/criminals`)} >BACK</button>
                <div className='computer'>
                    <button className='previous' onClick={() => displayPrevious()} >{'<'}</button>
                    {displayOne}
                    <button className='next' onClick={() => displayNext()} >{'>'}</button>
                </div>
            </div>
        </div>
    );
}

export default Game;
