import React, { useState } from 'react';
import { useParams, useNavigate, useLocation} from 'react-router-dom'
import validator from 'validator'

const UpdateCriminal = ({cities, setCities}) => {
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const cityId = parseInt(params.city_id)
    const criminalId = parseInt(params.criminal_id)
    const criminal = location.state.criminal
    const [errors, setErrors] = useState([])
    const [updateCriminal, setUpdateCriminal] = useState({
        name: criminal.name,
        age: criminal.age,
        address: criminal.address,
        birthday: criminal.birthday,
        height: criminal.height,
        weight: criminal.weight,
        image: criminal.image,
        sentenced: criminal.sentenced,
        in_jail: criminal.in_jail,
        city: cityId
    })

    const handleChange = (e) => {
        setUpdateCriminal({...updateCriminal, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('clicked')
        // const copyCriminal = {...UpdateCriminal}
        // delete copyCriminal.city
        fetch(`http://localhost:4000/criminals/${criminalId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateCriminal)
        })
        .then(resp => {
            if (resp.ok) {
                navigate(`/cities/${cityId}/criminals`)
            } else {
                resp.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
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
                {validator.isURL(updateCriminal.image) ? <img className="displayImage" src={updateCriminal.image} alt="Invalid"/> : <p className="imgText">
                Place Image_url here
                </p>}
            </div>
            <form onSubmit={handleSubmit}>
                <label className='formLabel'>Name:</label>
                <input className='formTextBox' type='text' name='name' placeholder='criminal name' value={updateCriminal.name} onChange={handleChange}/>
                <br/>
                <input
                    className='formRange'
                    type="range"
                    name="age"
                    min="10"
                    max="80"
                    value={updateCriminal.age}
                    onChange={handleChange}
                />
                <br/>
                <label className='formLabelRange'>Age: {updateCriminal.age}</label>
                <br/>
                <label className='formLabel'>Address:</label>
                <input className='formTextBox' type='text' name='address' placeholder='criminal address' value={updateCriminal.address} onChange={handleChange}/>
                <br/>
                <label className='formLabel'>Birthday:</label>
                <input className='formCalendar' type='date' name='birthday' placeholder='criminal birthday' value={updateCriminal.birthday} onChange={handleChange}/>
                <br/>
                <label className='formLabel'>Height:</label>
                <input className='formTextBox' type='text' name='height' placeholder='criminal height in ft' value={updateCriminal.height} onChange={handleChange}/>
                <br/>
                <input
                    className='formRange'
                    type="range"
                    name="weight"
                    min="100"
                    max="350"
                    value={updateCriminal.weight}
                    onChange={handleChange}
                />
                <br/>
                <label className='formLabelRange'>weight: {updateCriminal.weight}</label>
                <br/>
                <label className='formLabel'>Image_url:</label>
                <input className='formTextBox' type='text' name='image' placeholder='criminal image' value={updateCriminal.image} onChange={handleChange}/>
                <br/>
                <input
                    className='formRange'
                    type="range"
                    name="sentenced"
                    min="1"
                    max="100"
                    value={updateCriminal.sentenced}
                    onChange={handleChange}
                />
                <br/>
                <label className='formLabelRange'>sentenced amount: {updateCriminal.sentenced}</label>
                <br/>
                <label className='formLabel'>caught?</label>
                <input className='formCheckBox' type='checkbox' name='in_jail' value={updateCriminal.in_jail} onChange={handleChange}/>
                <br/>
                <button className='submitButton'>UPDATE!</button>
            </form>
        </div>
        </>
    );
}

export default UpdateCriminal;
