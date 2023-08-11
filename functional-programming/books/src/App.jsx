import { useState } from "react";
import BookCreate from "./components/BookCreate/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  console.log(books);

  const handleCreateBook = (title) => {
    const newBook = {
      id: Math.random(),
      title,
    };

    const newBooks = [...books, newBook];

    setBooks(newBooks);
  };

  return (
    <div>
      <BookCreate handleCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
