import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    const [login, setLogin] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        setLogin({...login, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.prevent.default()

    }
    return (
        <div className='badge'>
            <div className='formDiv'>
                <form className='login' onSubmit={handleSubmit}>
                    <label className='loginLabel'>Username:</label>
                    <input className='loginText' type="text" name="username" value={login.username} onChange={handleChange} placeholder='username'/>
                    <br/>
                    <label className='loginLabel'>Password:</label>
                    <input className='loginText' type="text" name="password" value={login.password} onChange={handleChange} placeholder='password'/>
                    <br/>
                    <button className='loginButton' type='submit'>Login</button>
                </form>
            </div>
            <p className='link'>Don't have an account? Signup <Link to='/Signup'>Here</Link></p>
        </div>
    );
}

export default Login;
