import React from 'react';

const CaughtCriminals = ({criminal, width}) => {

    const criminalHeight = Math.round(criminal.height * 10)/10
    return (
        <div>
            <div className='folder'>
                    <div className='leftFolder'>
                        <img className="jailImage" src={criminal.image} alt="post"/>
                        <p className='classified'>CLASSIFIED</p>
                    </div>
                <div className='rightFolder'>
                    <div className='jailText'>name: {criminal.name}</div>
                    <div className='jailText'>age: {criminal.age}</div>
                    <div className='jailText'>birthday: {criminal.birthday}</div>
                    <div className='jailText'>height: {criminalHeight}</div>
                    <div className='jailText'>weight: {criminal.weight}</div>
                    <div className='jailText'>sentenced: {criminal.sentenced}</div>
                </div>
            </div>
        </div>
    );
}

export default CaughtCriminals;
