import { useEffect, useState } from "react";

import BookCreate from "components/BookCreate/BookCreate";
import BookList from "components/BookList/BookList";

import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.get("http://localhost:3001/books");

      setBooks(response.data);
    };

    getBooks();
  }, []);

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const newBooks = [...books, response.data];

    setBooks(newBooks);
  };

  const handleDeleteBookById = (id) => {
    const newBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(newBooks);
  };

  const handleEditBookById = (id, title) => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          title,
        };
      }

      return book;
    });

    setBooks(newBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        handleDeleteBookById={handleDeleteBookById}
        handleEditBookById={handleEditBookById}
      />
      <BookCreate handleCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
