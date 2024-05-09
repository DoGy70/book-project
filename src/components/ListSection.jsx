function ListSection({ setDetails, books, setBooks }) {
  function deleteBook(id) {
    let newBooks = books.filter((book) => book.id !== id);
    newBooks = newBooks.map((book) => {
      if (book.id > id) {
        book.id = book.id - 1;
      }

      return book;
    });

    setBooks(newBooks);
    setDetails({
      id: "",
      ISBN: "",
      title: "",
      price: "",
      author: "",
      publicationDate: "",
    });
  }

  return (
    <ul className="content-list" id="list-section">
      {books.map((book) => {
        const { id, ISBN, title, price, author, publicationDate } = book;

        return (
          <li className="detail" key={id}>
            <div
              onClick={() =>
                setDetails({
                  id,
                  ISBN,
                  title,
                  price,
                  author,
                  publicationDate,
                })
              }
            >
              <p className="id">ID: {id}</p>
              <p className="field1">{title}</p>
              <p className="field2">{author}</p>
              <p className="field3">{ISBN}</p>
              <p className="field4">{price}</p>
              <p className="field5">
                {publicationDate.toString() +
                  "|" +
                  publicationDate.toDateString() +
                  "|" +
                  publicationDate.toISOString()}
              </p>
            </div>
            <button
              type="button"
              className="deleteButton"
              onClick={() => deleteBook(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default ListSection;
