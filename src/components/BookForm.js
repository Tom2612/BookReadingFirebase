import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useBook } from '../contexts/BookContext';

export default function BookForm() {

    const { currentUser } = useAuth();
    const { createBook } = useBook();
    
    const [title, setTitle] = useState('');
    const [pages, setPages] = useState('');
    const [rating, setRating] = useState(5);
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!currentUser) {
            setError('You must be logged in to do that.')
            return
        }

        const book = { title, pages, rating };

        try {
            createBook(book);
            setTitle('');
            setRating('');
            setPages('');
            setError(null)
        } catch (e) {
            setError(e);
            console.log(e);
        }
    }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a new book</h3>

        <label>Book Title:</label>
        <input 
            type="text" 
            name="title" 
            onChange={(e) => setTitle(e.target.value)} 
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}
            required
        />
        <label>Number of Pages:</label>
        <input 
            type="number" 
            name="pages" 
            onChange={(e) => setPages(e.target.value)} 
            value={pages}
            className={emptyFields.includes('pages') ? 'error' : ''}
            required
        />
        <label>Your Rating: {rating}</label>
        <input 
            type="range" 
            min="0" 
            max="10" 
            name="rating" 
            onChange={(e) => setRating(e.target.value)} 
            value={rating} 
            className={emptyFields.includes('rating') ? 'error' : ''}
            required
        />

        <button>Add book</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}