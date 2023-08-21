import { useState } from "react";
import useBooksContext from "hooks/useBooksContext";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { handleCreateBook } = useBooksContext();

  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleCreateBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleOnSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={handleOnChange}
          className="input"
        />
        <button className="button" type="submit">
          Create!
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
