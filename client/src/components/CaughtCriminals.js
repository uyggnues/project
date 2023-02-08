import React from 'react';

const CaughtCriminals = ({criminal, width}) => {
    return (
        <div>
            {width > 0 && criminal.in_jail ?
                <div className='folder'>
                    <div className='leftFolder'>
                        <img className="image" src={criminal.image} alt="post"/>
                    </div>
                    <div className='rightFolder'>
                        <div>{criminal.name}</div>
                        <div>{criminal.age}</div>
                        <div>{criminal.birthday}</div>
                        <div>{criminal.height}</div>
                        <div>{criminal.weight}</div>
                        <div>{criminal.sentenced}</div>
                    </div>
                </div>
                :
                null
            }
        </div>
    );
}

export default CaughtCriminals;
