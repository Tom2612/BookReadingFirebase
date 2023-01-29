import React, { useEffect } from 'react';
import BookForm from '../components/BookForm';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import BookDetails from '../components/BookDetails';
import { useBook } from '../contexts/BookContext';

export default function Home() {
  const { currentUser } = useAuth();
  const { books, dispatch } = useBook();

  useEffect(() => {
    const getBooks = async () => {
      let arr = [];
      const bookSnap = await getDocs(collection(db, 'user ' + currentUser.uid));
      bookSnap.forEach((doc) => {
        let book = {
          id: doc.id,
          ...doc.data()
        }
        arr.push(book);
      })
      dispatch({type: 'SET_BOOKS', payload: arr});
    }
    
    if (currentUser) {
      getBooks();
    }
    

  }, [currentUser, dispatch])

  return (
    <div className='home'>
        <div className='books'>
            {books && books.map(book => (
                <BookDetails key={book.id} book={book} />
            ))}
        </div>
        <BookForm />
    </div>
  )
}
