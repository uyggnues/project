import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
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
    const[height, width] = useWindowSize();
    const params = useParams()
    const navigate = useNavigate()
    const cityId = parseInt(params.city_id)
    
    useEffect(() => {
        fetch(`http://localhost:4000/cities/${cityId}/criminals`)
        .then(resp => resp.json())
        .then(data => setCriminals(data))
    }, [cityId]);

    const mappedCriminals = criminals.map(criminal => {
        return <Criminal key={criminal.id} criminal={criminal} width={width}/>
    })

    return (
        <div>
            {width > 1500 ?
                <div className='padding'>
                    <div className='signButton'>
                        <button className='toCities' onClick={() => navigate('/')}>Back to Cities</button>
                        <div className='catchButton'>
                            <button className='catch'>CATCH!</button>
                        </div>
                        <button onClick={() => navigate(`/cities/${cityId}/NewCriminal`)} className='addButton' >Add a Criminal</button>
                    </div>
                    <div className='criminalCard'>
                        {mappedCriminals}
                    </div>
                </div>
                :
                <div>
            {width >= 800 ?
                <div className='padding2'>
                    <div className='signButton2'>
                        <button className='toCities2' onClick={() => navigate('/')}>Back to Cities</button>
                        <div className='catchButton2'>
                            <button className='catch2'>CATCH!</button>
                        </div>
                        <button onClick={() => navigate(`/cities/${cityId}/NewCriminal`)} className='addButton2' >Add a Criminal</button>
                    </div>
                    <div className='criminalCard2'>
                        {mappedCriminals}
                    </div>
                </div>
                :
                <div>
            {width < 800 ?
                <div className='padding3'>
                    <div className='signButton3'>
                        <button className='toCities3' onClick={() => navigate('/')}>Back to Cities</button>
                        <div className='catchButton3'>
                            <button className='catch3'>CATCH!</button>
                        </div>
                        <button onClick={() => navigate(`/cities/${cityId}/NewCriminal`)} className='addButton3' >Add a Criminal</button>
                    </div>
                    <div className='criminalCard3'>
                        {mappedCriminals}
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
