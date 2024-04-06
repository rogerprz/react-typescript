import React, { useEffect, useState } from "react";
import "./App.css";
import { Book, IBook } from "./Book";
import { BookForm } from "./BookForm";

interface IBookList {
  [key: string]: IBook[];
}

function App() {
  const [books, setBooks] = useState<IBookList>();

  useEffect(() => {
    fetch("./book.json")
      .then((response) => response.json())
      .then((json) => {
        setBooks(json);
      });
  }, []);

  const addBook = (book: IBook) => {
    setBooks((prev) => {
      if (prev) {
        const { author } = book;
        const firstLetter = author.lastName[0].toUpperCase();
        if (prev && prev[firstLetter]) {
          return {
            ...prev,
            [firstLetter]: [...prev[firstLetter], book],
          };
        } else {
          return {
            ...prev,
            [firstLetter]: [book],
          };
        }
      }
    });
  };

  const DisplayBooks = () => {
    if (!books) return null;
    return (
      <section className="books-container">
        {Object.entries(books).map((bookData: any) => {
          const [letter, bookArr] = bookData;
          return (
            <section key={letter} className="section-container">
              <h2>{letter}</h2>
              <div>
                {bookArr.map((data: IBook) => {
                  return <Book key={data.id} {...data} />;
                })}
              </div>
            </section>
          );
        })}
      </section>
    );
  };
  console.log("Books:", books);
  return (
    <div className="App">
      <BookForm addBook={addBook} />
      <DisplayBooks />
    </div>
  );
}

export default App;
