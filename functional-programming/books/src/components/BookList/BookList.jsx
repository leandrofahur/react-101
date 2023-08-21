import BookShow from "components/BookShow/BookShow";
import useBooksContext from "hooks/useBooksContext";

function BookList() {
  const { books } = useBooksContext();
  const renderedBooks = books?.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  if (!books) {
    return <div className="book-list">There are no books</div>;
  }

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
