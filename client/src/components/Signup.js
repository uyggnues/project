import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'


const Signup = ({setSeeLogin, setUser}) => {
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
            if (resp.status === 200) {
                resp.json().then(userObj => { 
                    setUser(userObj)
                    navigate('/Welcome')
                })
            } else {
                resp.json().then(messageObj => alert(messageObj.error))
            }
        })
        .catch(err => alert(err))
    } else {
        alert('Password does not match Password Confirmation')
    }
    }
    return (
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
            <p className='link'>Already have an account? Login <button onClick={() => setSeeLogin(current => !current)}>Here</button></p>
        </div>
    );
}

export default Signup;
