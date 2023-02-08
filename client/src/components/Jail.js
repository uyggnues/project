import React from 'react';
import { useLocation,useParams } from 'react-router-dom'
import CaughtCriminals from './CaughtCriminals';
import HorizontalScroll from 'react-scroll-horizontal';

const Jail = (props) => {
    const params = useParams()
    const location = useLocation()
    const criminals = location.state.criminals
    const width = location.state.width
    // console.log(width)

    const mappedCriminals = criminals.map(criminal =>{
        return <CaughtCriminals key={criminal.id} criminal={criminal} width={width}/>
    })
    return (
        <div className='jailBackground'>
            <HorizontalScroll 
                pageLock={true}
                reverseScroll={true}>
                {mappedCriminals}
            </HorizontalScroll>
        </div>
    );
}

export default Jail;
