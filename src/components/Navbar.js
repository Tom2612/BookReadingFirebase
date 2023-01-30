import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useBook } from '../contexts/BookContext';

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const { dispatch } = useBook();

  const handleClick = () => {
    logout();
    dispatch({type: 'SET_BOOKS', payload: null});
  }
  return (
    <header>
        <div className='container'>
            <Link to='/'><h1>Book Reading App</h1></Link>
            <nav>
              {currentUser && (
                <div>
                <span>{currentUser.email}</span>
                <button onClick={handleClick}>Log out</button>
              </div>
              )}
              
              {!currentUser && (
                <div>
                  <Link to='/login'>Log in</Link>
                  <Link to='/signup'>Sign up</Link>
                </div>
              )}
            </nav>
        </div>
    </header>
  )
}
