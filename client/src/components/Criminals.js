import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Criminal from './Criminal';

const Criminals = () => {
    const [criminals, setCriminals] = useState([])
    const params = useParams()
    const navigate = useNavigate()
    const cityId = parseInt(params.city_id)
    
    useEffect(() => {
        // debugger
        fetch(`http://localhost:4000/cities/${cityId}/criminals`)
        .then(resp => resp.json())
        .then(data => setCriminals(data))//setPost(data))
        // debugger
    }, [cityId]);

    const mappedCriminals = criminals.map(criminal => {
        return <Criminal key={criminal.id} criminal={criminal}/>
    })

    return (
        <>
            <button onClick={() => navigate('/')}>Back to Cities</button>
            <div className='criminalCard'>
                {mappedCriminals}
            </div>
        </>
    );
}

export default Criminals;
