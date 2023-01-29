import React, { createContext, useContext, useReducer } from 'react';

const BookContext = createContext();

export function useBook() {
    return useContext(BookContext);
}

export const bookReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                books: action.payload
            }
        case 'CREATE_BOOK':
            return {
                books: [action.payload, ...state.books]
            }
        case 'DELETE_BOOK':
            return {
                books: state.books.filtern((book) => book.id !== action.payload.id)
            }
        default:
            return state
    }
}

export const BookContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(bookReducer, {
        books: null
    })

    return (
        <BookContext.Provider value={{...state, dispatch}}>
            { children }
        </BookContext.Provider>
    )
}