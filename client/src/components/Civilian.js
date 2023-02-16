import React, { useState } from 'react';

const Civilian = ({m, setWrong}) => {
    const civilianHeight = Math.round(m.height * 10)/10


    return (
        <>
        <div className='comp'>
            <div className='left'>
                <img className="gameImage" src={m.image} alt="post"/>
            </div>
            <div className='right'>
                <div className='text'>Name: {m.name}</div>
                <div className='text'>Age: {m.age} years old</div>
                <div className='text'>Address: {m.address}</div>
                <div className='text'>Birthday: {m.birthday}</div>
                <div className='text'>Height: {civilianHeight} ft</div>
                <div className='text'>Weight: {m.weight} Ib</div>
                <button className='gameCatch' onClick={() => setWrong(current => !current)}>CATCH!</button>
            </div>
        </div>
        </>
    );
}

export default Civilian;
