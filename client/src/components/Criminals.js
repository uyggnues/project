import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import HorizontalScroll from 'react-scroll-horizontal';
import Criminal from './Criminal';

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

const Criminals = () => {
    const [criminals, setCriminals] = useState([])
    const [height, width] = useWindowSize();
    const params = useParams()
    const navigate = useNavigate()
    const cityId = parseInt(params.city_id)

    // console.log(criminals)
    
    useEffect(() => {
        fetch(`http://localhost:4000/cities/${cityId}/criminals`)
        .then(resp => resp.json())
        .then(data => setCriminals(data))
    }, [cityId]);

    const mappedCriminals = criminals.map(criminal => {
        return <Criminal key={criminal.id} criminal={criminal} width={width} setCriminals={setCriminals}/>
    })

    return (
        <div>
            {width > 1500 ?
                <div>
                    <div className='signButton'>
                        <button className='toCities' onClick={() => navigate('/')}>Back to Cities</button>
                        <button className='jail' onClick={() => navigate(`/cities/${cityId}/jail`, {state: {criminals: criminals, width: width}})}>Visit Jail</button>
                        <div className='catchButton'>
                            <button className='catch' onClick={() => navigate(`/cities/${cityId}/catch`, {state: {criminals: criminals}})}>CATCH!</button>
                        </div>
                        <button onClick={() => navigate(`/cities/${cityId}/NewCriminal`)} className='addButton' >Add a Criminal</button>
                    </div>
                    <div className='criminalCard'>
                        <HorizontalScroll 
                            pageLock={true}
                            reverseScroll={true}
                            >
                            {mappedCriminals}
                        </HorizontalScroll>
                    </div>
                </div>
                :
                <div>
            {width >= 800 ?
                <div>
                    <div className='signButton2'>
                        <button className='toCities2' onClick={() => navigate('/')}>Back to Cities</button>
                        <button className='jail2' onClick={() => navigate(`/cities/${cityId}/jail`, {state: {criminals: criminals, width: width}})}>Visit Jail</button>
                        <div className='catchButton2'>
                            <button className='catch2' onClick={() => navigate(`/cities/${cityId}/catch`, {state: {criminals: criminals}})}>CATCH!</button>
                        </div>
                        <button onClick={() => navigate(`/cities/${cityId}/NewCriminal`)} className='addButton2' >Add a Criminal</button>
                    </div>
                    <div className='criminalCard2'>
                        <HorizontalScroll 
                            pageLock={true}
                            reverseScroll={true}
                            >
                            {mappedCriminals}
                        </HorizontalScroll>
                    </div>
                </div>
                :
                <div>
            {width < 800 ?
                <div>
                    <div className='signButton3'>
                        <button className='toCities3' onClick={() => navigate('/')}>Back to Cities</button>
                        <button className='jail3' onClick={() => navigate(`/cities/${cityId}/jail`, {state: {criminals: criminals, width: width}})}>Visit Jail</button>
                        <div className='catchButton3'>
                            <button className='catch3' onClick={() => navigate(`/cities/${cityId}/catch`, {state: {criminals: criminals}})}>CATCH!</button>
                        </div>
                        <button onClick={() => navigate(`/cities/${cityId}/NewCriminal`)} className='addButton3' >Add a Criminal</button>
                    </div>
                    <div className='criminalCard3'>
                        <HorizontalScroll 
                            pageLock={true}
                            reverseScroll={true}
                            >
                            {mappedCriminals}
                        </HorizontalScroll>
                    </div>
                </div>
                :
                null
            }
        </div>
            }
        </div>
            }
        </div>
    );
}

export default Criminals;
