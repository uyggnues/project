import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Signup = () => {
    const [signup, setSignup] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        setSignup({...signup, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.prevent.default()

    }
    return (
        <div className='badge'>
            <div className='formDiv'>
                <form className='signup' onSubmit={handleSubmit}>
                    <label className='loginLabel'>First_name:</label>
                    <input className='loginText' type="text" name="first_name" value={signup.first_name} onChange={handleChange} placeholder='first_name'/>
                    <br/>
                    <label className='loginLabel'>Last_name:</label>
                    <input className='loginText' type="text" name="last_name" value={signup.last_name} onChange={handleChange} placeholder='last_name'/>
                    <br/>
                    <label className='loginLabel'>Email:</label>
                    <input className='loginText' type="text" name="email" value={signup.email} onChange={handleChange} placeholder='email'/>
                    <br/>
                    <label className='loginLabel'>Username:</label>
                    <input className='loginText' type="text" name="username" value={signup.username} onChange={handleChange} placeholder='username'/>
                    <br/>
                    <label className='loginLabel'>Password:</label>
                    <input className='loginText' type="text" name="password" value={signup.password} onChange={handleChange} placeholder='password'/>
                    <br/>
                    <button className='loginButton' type='submit'>Signup</button>
                </form>
            </div>
            <p className='link'>Have an account? Login in <Link to='/Login'>Here</Link></p>
        </div>
    );
}

export default Signup;
