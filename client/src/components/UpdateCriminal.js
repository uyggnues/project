import React, { useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom'
import validator from 'validator'

const UpdateCriminal = ({cities, setCities}) => {
    const params = useParams()
    const navigate = useNavigate()
    const cityId = parseInt(params.city_id)
    const [UpdateCriminal, setUpdateCriminal] = useState({
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
// debugger
    const handleChange = (e) => {
        setUpdateCriminal({...UpdateCriminal, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
        fetch(`http://localhost:4000/cities/${cityId}/criminals`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UpdateCriminal)
        })
        .then(res => res.json())
        .then(data => {
            setCities(current => {
                
            })
        })
        navigate(`/cities/${cityId}/criminals`)
    }

    return (
        <div className='formCard'>
            <button className='formX' onClick={() => navigate(`/cities/${cityId}/criminals`)}>X</button>
            <div className="newCriminalImage">
                {validator.isURL(UpdateCriminal.image) ? <img className="displayImage" src={UpdateCriminal.image} alt="Invalid"/> : <p className="imgText">
                Place Image_url here
                </p>}
            </div>
            <form onSubmit={handleSubmit}>
                <label className='formLabel'>Name:</label>
                <input className='formTextBox' type='text' name='name' placeholder='criminal name' value={UpdateCriminal.name} onChange={handleChange}/>
                <br/>
                <input
                    className='formRange'
                    type="range"
                    name="age"
                    min="10"
                    max="80"
                    value={UpdateCriminal.price}
                    onChange={handleChange}
                />
                <br/>
                <label className='formLabelRange'>Age: {UpdateCriminal.age}</label>
                <br/>
                <label className='formLabel'>Address:</label>
                <input className='formTextBox' type='text' name='address' placeholder='criminal address' value={UpdateCriminal.address} onChange={handleChange}/>
                <br/>
                <label className='formLabel'>Birthday:</label>
                <input className='formCalendar' type='date' name='birthday' placeholder='criminal birthday' value={UpdateCriminal.birthday} onChange={handleChange}/>
                <br/>
                <label className='formLabel'>Height:</label>
                <input className='formTextBox' type='text' name='height' placeholder='criminal height in ft' value={UpdateCriminal.height} onChange={handleChange}/>
                <br/>
                <input
                    className='formRange'
                    type="range"
                    name="weight"
                    min="100"
                    max="350"
                    value={UpdateCriminal.weight}
                    onChange={handleChange}
                />
                <br/>
                <label className='formLabelRange'>weight: {UpdateCriminal.weight}</label>
                <br/>
                <label className='formLabel'>Image_url:</label>
                <input className='formTextBox' type='text' name='image' placeholder='criminal image' value={UpdateCriminal.image} onChange={handleChange}/>
                <br/>
                <input
                    className='formRange'
                    type="range"
                    name="sentenced"
                    min="1"
                    max="100"
                    value={UpdateCriminal.sentenced}
                    onChange={handleChange}
                />
                <br/>
                <label className='formLabelRange'>sentenced amount: {UpdateCriminal.sentenced}</label>
                <br/>
                <label className='formLabel'>caught?</label>
                <input className='formCheckBox' type='checkbox' name='in_jail' value={UpdateCriminal.in_jail} onChange={handleChange}/>
                <br/>
                <button className='submitButton'>UPDATE!</button>
            </form>
        </div>
    );
}

export default UpdateCriminal;
