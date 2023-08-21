import { createContext, useState } from "react";
import PropsTypes from "prop-types";

import axios from "axios";

export const BooksContext = createContext();

export function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const newBooks = [...books, response.data];

    setBooks(newBooks);
  };

  const handleDeleteBookById = (id) => {
    axios.delete(`http://localhost:3001/books/${id}`);

    const newBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(newBooks);
  };

  const handleEditBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const updatedBook = response.data;
    const newBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          ...updatedBook, // garantee that ALL THE PROPERTIES of the book are updated
        };
      }

      return book;
    });

    setBooks(newBooks);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        getBooks,
        handleCreateBook,
        handleDeleteBookById,
        handleEditBookById,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

Provider.propTypes = {
  children: PropsTypes.node.isRequired,
};
