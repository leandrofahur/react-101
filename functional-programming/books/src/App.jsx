import BookCreate from "components/BookCreate/BookCreate";
import BookEdit from "components/BookEdit/BookEdit";
import BookList from "components/BookList/BookList";

function App() {
  return (
    <div>
      <BookCreate />
      <BookEdit />
      <BookList />
    </div>
  );
}

export default App;
