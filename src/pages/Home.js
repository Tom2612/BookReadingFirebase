import React, { useState, useEffect } from 'react';
import BookForm from '../components/BookForm';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import BookDetails from '../components/BookDetails';

export default function Home() {
  const { currentUser } = useAuth();
  const [books, setBooks] = useState([]);

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
      setBooks(arr);
    }
    
    getBooks();

  }, [currentUser])

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
