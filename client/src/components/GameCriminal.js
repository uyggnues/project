import React from 'react';

const GameCriminal = ({m, cityId, setCivilians}) => {

    const civilianHeight = Math.round(m.height * 10)/10

    const handleClick = () => {
        fetch(`http://localhost:4000/cities/${cityId}/civilians`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(post =>             
            setCivilians(current => {
                const civId = current.findIndex(ele => ele.id === post.id)
                return [...current.slice(0, civId), ...current.slice(civId + 1)]
            },
            alert('CORRECT')
        ))
    }

    return (
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
                <button className='gameCatch' onClick={() => handleClick()}>CATCH!</button>
            </div>
        </div>
    );
}

export default GameCriminal;
