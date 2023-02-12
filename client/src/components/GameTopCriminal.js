import React from 'react';

const GameTopCriminal = ({c}) => {
    const civilianHeight = Math.round(c.height * 10)/10
    return (
        <div className='bar'>
            <div className='barImage'>
                <img className="gameBarImage" src={c.image} alt="post"/>
            </div>
            <div className='barRight'>
                <div className='barText'>Name: {c.name}</div>
                <div className='barText'>Age: {c.age} years old</div>
                <div className='barText'>Address: {c.address}</div>
                <div className='barText'>Birthday: {c.birthday}</div>
                <div className='barText'>Height: {civilianHeight} ft</div>
                <div className='barText'>Weight: {c.weight} Ib</div>
            </div>
        </div>
    );
}

export default GameTopCriminal;
