import { useState } from "react";
import BookCreate from "components/BookCreate/BookCreate";
import BookList from "components/BookList/BookList";

function App() {
  const [books, setBooks] = useState([]);
  console.log(books);

  const handleCreateBook = (title) => {
    const newBook = {
      id: Math.round(Math.random() * 9999),
      title,
    };

    const newBooks = [...books, newBook];

    setBooks(newBooks);
  };

  const handleDeleteBookById = (id) => {
    const newBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(newBooks);
  };

  return (
    <div className="app">
      <BookList books={books} handleDeleteBookById={handleDeleteBookById} />
      <BookCreate handleCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
