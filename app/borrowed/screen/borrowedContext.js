
import React, { createContext, useState } from 'react';

export const BorrowedContext = createContext();

export const BorrowedProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const borrowBook = (book) => {
    setBorrowedBooks([...borrowedBooks, book]);
  };

  const returnBook = (book) => {
    setBorrowedBooks(borrowedBooks.filter((b) => b.id !== book.id));
  };

  return (
    <BorrowedContext.Provider value={{ borrowedBooks, borrowBook, returnBook }}>
      {children}
    </BorrowedContext.Provider>
  );
};
