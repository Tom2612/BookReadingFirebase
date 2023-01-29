import React from 'react';
import { db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { useBook } from '../contexts/BookContext';

export default function BookDetails({ book }) {
  const { currentUser } = useAuth();
  const { dispatch } = useBook();

  const handleClick = async (book) => {
    console.log(book)
    try {
      await deleteDoc(doc(db, `user ${currentUser.uid}`, book.id));
      dispatch({type: 'DELETE_BOOK', payload: book});
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div className='book-details'>
      <h4>{book.title}</h4>
      <p><strong>Pages: </strong>{book.pages}</p>
      <p><strong>Rating: </strong>{book.rating}</p>
      {/* <p>{formatDistanceToNow(new Date(book.createdAt), {addSuffix: true})}</p> */}
      { <span className='material-symbols-outlined' onClick={() => handleClick(book)}>delete</span>}
    </div>
  )
}