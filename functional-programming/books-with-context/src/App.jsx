import { useEffect, useState } from "react";

import BookCreate from "components/BookCreate/BookCreate";
import BookList from "components/BookList/BookList";

import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  // fetch data from the server when the component mounts
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
