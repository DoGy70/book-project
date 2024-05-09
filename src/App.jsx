import Footer from "./components/Footer";
import FormSection from "./components/DetailsSection";
import ListSection from "./components/ListSection";
import Navbar from "./components/Navbar";
import { useState } from "react";

const links = [
  {
    href: "#list-section",
    name: "books",
  },
  {
    href: "#details-section",
    name: "details",
  },
  {
    href: "#footer-section",
    name: "footer",
  },
];

function App() {
  const [detailsBook, setDetailsBook] = useState({
    id: "",
    title: "",
    author: "",
    ISBN: "",
    price: "",
    publicationDate: "",
  });

  const [books, setBooks] = useState([
    {
      id: 1,
      ISBN: "978-3-16-148410-0",
      title: "the book thief",
      price: 19.99,
      author: "markus zusak",
      publicationDate: new Date("2021-01-01"),
    },
    {
      id: 2,
      ISBN: "978-1-4028-9462-6",
      title: "the dark tower 1",
      price: 30,
      author: "steven king",
      publicationDate: new Date("2021-01-01"),
    },
    {
      id: 3,
      ISBN: "978-0-387-98584-2",
      title: "the dark tower 2",
      price: 22.99,
      author: "steven king",
      publicationDate: new Date("2021-01-01"),
    },
    {
      id: 4,
      ISBN: "978-0-14-310598-5",
      title: "the dark tower 3",
      price: 25.99,
      author: "steven king",
      publicationDate: new Date("2021-01-01"),
    },
    {
      id: 5,
      ISBN: "978-0-06-202464-4",
      title: "the dark tower 4",
      price: 20.99,
      author: "steven king",
      publicationDate: new Date("2021-01-01"),
    },
  ]);

  function setDetails(book) {
    console.log(book);
    setDetailsBook(book);
  }

  function submitForm(e, book, resetForm) {
    e.preventDefault();

    const isBook = books.find((b) => book.id === b.id);
    console.log(book);

    if (!isBook) {
      setBooks((prevBooks) => {
        book.id = prevBooks[prevBooks.length - 1].id + 1;
        book.price = Number(book.price);

        return [...prevBooks, book];
      });

      resetForm();
      setDetailsBook({
        id: "",
        title: "",
        author: "",
        ISBN: "",
        price: "",
        publicationDate: "",
      });
      return;
    }

    let newBooks = books.filter((b) => b.id !== book.id);
    book.price = Number(book.price);
    newBooks.push(book);
    newBooks = newBooks.sort((b1, b2) => b1.id - b2.id);

    setBooks(newBooks);
    setDetailsBook({
      id: "",
      title: "",
      author: "",
      ISBN: "",
      price: "",
      publicationDate: "",
    });
    resetForm();
  }

  return (
    <>
      <Navbar links={links} />
      <ListSection setDetails={setDetails} books={books} setBooks={setBooks} />
      <FormSection {...detailsBook} submitForm={submitForm} />
      <Footer links={links} />
    </>
  );
}

export default App;
