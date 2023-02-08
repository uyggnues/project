import React from 'react';

const Civilian = ({civilian}) => {
    return (
        <div className='comp'>
            <div className='left'>
                <img className="gameImage" src={civilian.image} alt="post"/>
            </div>
            <div className='right'>
                <div>{civilian.name}</div>
                <div>{civilian.age}</div>
                <div>{civilian.address}</div>
                <div>{civilian.birthday}</div>
                <div>{civilian.height}</div>
                <div>{civilian.weight}</div>
            </div>
        </div>
    );
}

export default Civilian;
