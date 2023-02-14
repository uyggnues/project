import React from 'react';

const GameTopCriminal = ({c}) => {
    const civilianHeight = Math.round(c.height * 10)/10
    return (
        <div className='bar'>
            <div className='barImage'>
                <img className="gameBarImage" src={c.image} alt="post"/>
            </div>
            <div className='barRight'>
                <div className='barText'><strong>Name: </strong>{c.name}</div>
                <div className='barText'><strong>Age: </strong>{c.age} years old</div>
                <div className='barText'><strong>Address: </strong>{c.address}</div>
                <div className='barText'><strong>Birthday: </strong>{c.birthday}</div>
                <div className='barText'><strong>Height: </strong>{civilianHeight} ft</div>
                <div className='barText'><strong>Weight: </strong>{c.weight} Ib</div>
            </div>
        </div>
    );
}

export default GameTopCriminal;
