import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import validator from 'validator'

const NewCriminal = ({setCities}) => {
    const params = useParams()
    const cityId = parseInt(params.city_id)
    // debugger

    const [newCriminal, setNewCriminal] = useState({
        name: "",
        age: 0,
        address: "",
        birthday: "",
        height: "",
        weight: 0,
        image: "",
        sentenced: 0,
        in_jail: false,
        city: cityId
    })

    const handleChange = (e) => {
        setNewCriminal({...newCriminal, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:3000/cities/${cityId}/criminals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCriminal)
        })
        .then(res => res.json())
        .then(data => {
            setCities(current => {
                debugger
                // return[data, ...current]
            })
        })
    }

    return (
        <div className='formCard'>
            <div className="newCriminalImage">
                {validator.isURL(newCriminal.image) ? <img className="image2" src={newCriminal.image} alt="Invalid"/> : <p className="imgText">
                Place Image_url here
                </p>}
            </div>
            <form onSubmit={handleSubmit}>
                <label className='formLabel'>Name:</label>
                <input className='formTextBox' type='text' name='name' placeholder='criminal name' value={newCriminal.name} onChange={handleChange}/>
                <br/>
                <input
                    className='formRange'
                    type="range"
                    name="age"
                    min="10"
                    max="80"
                    value={newCriminal.price}
                    onChange={handleChange}
                />
                <br/>
                <label className='formLabelRange'>Age: {newCriminal.age}</label>
                <br/>
                <label className='formLabel'>Address:</label>
                <input className='formTextBox' type='text' name='address' placeholder='criminal address' value={newCriminal.address} onChange={handleChange}/>
                <br/>
                <label className='formLabel'>Birthday:</label>
                <input className='formCalendar' type='date' name='birthday' placeholder='criminal birthday' value={newCriminal.birthday} onChange={handleChange}/>
                <br/>
                <label className='formLabel'>Height:</label>
                <input className='formTextBox' type='text' name='height' placeholder='criminal height in ft' value={newCriminal.height} onChange={handleChange}/>
                <br/>
                <input
                    className='formRange'
                    type="range"
                    name="weight"
                    min="100"
                    max="350"
                    value={newCriminal.weight}
                    onChange={handleChange}
                />
                <br/>
                <label className='formLabelRange'>weight: {newCriminal.weight}</label>
                <br/>
                <label className='formLabel'>Image_url:</label>
                <input className='formTextBox' type='text' name='image' placeholder='criminal image' value={newCriminal.image} onChange={handleChange}/>
                <br/>
                <input
                    className='formRange'
                    type="range"
                    name="sentenced"
                    min="1"
                    max="100"
                    value={newCriminal.sentenced}
                    onChange={handleChange}
                />
                <br/>
                <label className='formLabelRange'>sentenced amount: {newCriminal.sentenced}</label>
                <br/>
                <label className='formLabel'>caught?</label>
                <input className='formCheckBox' type='checkbox' name='in_jail' value={newCriminal.in_jail} onChange={handleChange}/>
                <br/>
                <input className='submitButton' type="submit"/>
            </form>
        </div>
    );
}

export default NewCriminal;
