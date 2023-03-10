import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Signup = ({setSeeLogin, setUser}) => {
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const [user, setUserObj] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword:""
    })

    const handleChange = (e) => {
        setUserObj({...user, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.password === user.confirmPassword) {
            fetch('http://localhost:4000/signup', {
                method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(resp => {
            if (resp.status === 201) {
                resp.json().then(userObj => { 
                    setUser(userObj)
                    navigate('/Welcome')
                })
            } else {
                resp.json().then(data => setErrors(Object.entries(data.message).map(e => `${e[0]} ${e[1]}`)))
            }
        })
    }
    }

    const removeError = (event) => {
        // debugger
        const error = event.target.parentElement.textContent.slice(0,-1)
        setErrors(current => current.filter(eString => eString !== error))
    }
    return (
        <>
        {errors ? errors.map((er, index) => <div key={index} className='errorNot' >{er}<button onClick={removeError} className='errButton'>X</button></div>):null}
        <div className='badge'>
            <div className='formDiv'>
                <form className='signup' onSubmit={handleSubmit}>
                    <label className='loginLabel'>First_name:</label>
                    <input className='signupText' type="text" name="first_name" value={user.first_name} onChange={handleChange} placeholder='first_name'/>
                    <br/>
                    <label className='loginLabel'>Last_name:</label>
                    <input className='signupText' type="text" name="last_name" value={user.last_name} onChange={handleChange} placeholder='last_name'/>
                    <br/>
                    <label className='loginLabel'>Email:</label>
                    <input className='signupText' type="text" name="email" value={user.email} onChange={handleChange} placeholder='email'/>
                    <br/>
                    <label className='loginLabel'>Username:</label>
                    <input className='signupText' type="text" name="username" value={user.username} onChange={handleChange} placeholder='username'/>
                    <br/>
                    <label className='loginLabel'>Password:</label>
                    <input className='signupText' type="password" name="password" value={user.password} onChange={handleChange} placeholder='password'/>
                    <br/>
                    <label className='loginLabel'>Password Confirmation:</label>
                    <input className='signupText' type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder='confirm password'/>
                    <br/>
                    <button className='loginButton' type='submit'>Signup</button>
                </form>
            </div>
            <p className='link'>Already have an account? Login <button onClick={() => setSeeLogin(current => !current)} className='here'>Here</button></p>
        </div>
        </>
    );
}

export default Signup;
