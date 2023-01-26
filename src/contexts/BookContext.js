import React, { useState, useEffect, createContext, useContext } from 'react';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const BookContext = createContext();

export function useBook() {
    return useContext(BookContext);
}

export const BookReducer = (state, action) => {
    
}

export const BookContextProvider = ({ children }) => {
    return (
        <BookContext.Provider>
            { children }
        </BookContext.Provider>
    )
}