import React from 'react';

const Civilian = ({civilian}) => {

    const civilianHeight = Math.round(civilian.height * 10)/10
    return (
        <div className='comp'>
            <div className='left'>
                <img className="gameImage" src={civilian.image} alt="post"/>
            </div>
            <div className='right'>
                <div className='text'>Name: {civilian.name}</div>
                <div className='text'>Age: {civilian.age} years old</div>
                <div className='text'>Address: {civilian.address}</div>
                <div className='text'>Birthday: {civilian.birthday}</div>
                <div className='text'>Height: {civilianHeight} ft</div>
                <div className='text'>Weight: {civilian.weight} Ib</div>
                <button className='gameCatch'>CATCH!</button>
            </div>
        </div>
    );
}

export default Civilian;
