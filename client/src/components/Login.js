import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = ({setUser, setMessage, updateUser, setSeeLogin}) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState()
    const [user, setUserObj] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        setUserObj({...user, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:4000/login', {
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
                resp.json().then(data => {
                    setErrors(data.error)
                })
            }
        })
        .catch(err => alert(err))
    }

    const removeError = (event) => {
        // debugger
        const error = event.target.parentElement.textContent.slice(0,-1)
        setErrors(current => current.filter(eString => eString !== error))
    }

    return (
        <>
            {errors ? <div className='errorNot' >{errors}<button onClick={removeError} className='errButton'>X</button></div> : null}
            <div className='badge'>
                <div className='formDiv'>
                    <form className='login' onSubmit={handleSubmit}>
                        <label className='loginLabel'>Username:</label>
                        <input className='loginText' type="text" name="username" value={user.username} onChange={handleChange} placeholder='username'/>
                        <br/>
                        <label className='loginLabel'>Password:</label>
                        <input className='loginText' type="password" name="password" value={user.password} onChange={handleChange} placeholder='password'/>
                        <br/>
                        <button className='loginButton' type='submit'>Login</button>
                    </form>
                </div>
                <p className='link'>Don't have an account? Signup <button onClick={() => setSeeLogin(current => !current)} className='here'>Here</button></p>
            </div>
        </>
    );
}

export default Login;
