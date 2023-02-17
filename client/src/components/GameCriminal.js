import React, { useState } from 'react';

const GameCriminal = ({m, cityId, setCivilians, setCorrect,setMixed, setCriminals}) => {
    const civilianHeight = Math.round(m.height * 10)/10
    const [crimJail, setCrimJail] = useState({
        in_jail: true
    })

    const handleClick = () => {
        // setCrimJail(current => !current)

        fetch(`http://localhost:4000/criminals/${m.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(crimJail)
            })
            .then(res => {
                if (res.status === 202) {
                    res.json().then(data => {
                        setCorrect(current => !current)
                        setMixed(current => {
                            const updated_criminals = current.filter(ele => ele.id !== m.id)
                            return updated_criminals
                        })
                        setCriminals(current => {
                            const updated_criminals = current.filter(ele => ele.id !== m.id)
                            return updated_criminals
                        })
                    })
                }
            })
    }
            
            // console.log(crimJail)
    return (
        <div className='comp'>
            <div className='left'>
                <img className="gameImage" src={m.image} alt="post"/>
            </div>
            <div className='right'>
                <div className='barText'><strong>Name: </strong> {m.name}</div>
                    <div className='Text'><strong>Age: </strong> {m.age} years old</div>
                    <div className='Text'><strong>Address: </strong> {m.address}</div>
                    <div className='Text'><strong>Birthday: </strong> {m.birthday}</div>
                    <div className='Text'><strong>Height: </strong> {civilianHeight} ft</div>
                    <div className='Text'><strong>Weight: </strong> {m.weight} Ib</div>
                    <button className='gameCatch' onClick={() => handleClick()}>CATCH!</button>
                </div>
        </div>
    );
}

export default GameCriminal;
