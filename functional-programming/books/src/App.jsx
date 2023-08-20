import { useEffect, useContext } from "react";

import BookCreate from "components/BookCreate/BookCreate";
import BookList from "components/BookList/BookList";

import { BooksContext } from "./context/books";

function App() {
  const { getBooks } = useContext(BooksContext);

  // fetch data from the server when the component mounts
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
