import React, { useState, useEffect, createContext, useContext } from 'react';
import { db } from '../firebase';
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const BookContext = createContext();

export function useBook() {
    return useContext(BookContext);
}

export const BookReducer = (state, action) => {
    
}

export const BookContextProvider = ({ children }) => {
    const { currentUser } = useAuth();
    
    
    
    // book functions
    const setBooks = async () => {
        try {
            const arr = [];
            const books = await getDocs(collection(db, 'user ' + currentUser.uid));
            books.forEach(book => arr.push(book));
            return arr;
        } catch(error) {
            console.log('error: Failed to get books: ', error)
        }
    }

    const createBook = async (book) => {
        try {
            await addDoc(collection(db, 'user ' + currentUser.uid), book);
        } catch(error) {
            console.log('error: Failed to create book: ', error);
        }
    }

    const deleteBook= () => {

    }

    const value={
        setBooks,
        createBook
    }

    return (
        <BookContext.Provider value={value}>
            { children }
        </BookContext.Provider>
    )
}