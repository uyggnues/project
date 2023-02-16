import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import validator from 'validator'

const NewCriminal = ({setCities}) => {
    const params = useParams()
    const navigate = useNavigate()
    const cityId = parseInt(params.city_id)
    
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
    
    const [errors, setErrors] = useState([])
    // debugger

    const handleChange = (e) => {
        setNewCriminal({...newCriminal, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
        fetch(`http://localhost:4000/cities/${cityId}/criminals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCriminal) 
        })
        .then(res => {
            if(res.status === 201){
              res.json().then()
                  navigate(`/cities/${cityId}/criminals`)
            } else {
              res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            window.scrollTo({
              top: 0,
              behavior: 'smooth' // for smoothly scrolling
            });
            }
        })
    }

    const removeError = (event) => {
        // debugger
        const error = event.target.parentElement.textContent.slice(0,-1)
        setErrors(current => current.filter(eString => eString !== error))
    }
    return (
        <>
        {errors ? errors.map((er, index) => <div key={index} className='errorNot' >{er}<button onClick={removeError} className='errButton'>X</button></div>):null}
        <div className='formCard'>
            <button className='formX' onClick={() => navigate(`/cities/${cityId}/criminals`)}>X</button>
            <div className="newCriminalImage">
                {validator.isURL(newCriminal.image) ? <img className="displayImage" src={newCriminal.image} alt="Invalid"/> : <p className="imgText">
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
                    <button className='submitButton'>Add!</button>
            </form>
        </div>
    </>
    );
}

export default NewCriminal;
