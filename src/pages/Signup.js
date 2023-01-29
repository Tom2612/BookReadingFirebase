import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        signup(email, password);
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <form className='signup' onSubmit={handleSubmit}>
                <h3>Sign up</h3>

                <label>Email</label>
                <input 
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <label>Password</label>
                <input 
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button>Sign up</button>
                {/* {error && <div className='error'>{error}</div>} */}
            </form>
            <div className='help-text'>Already have an account? <Link to='/login'>Login here</Link></div>
        </>
    )
}