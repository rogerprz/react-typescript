import React, { useEffect, useState } from "react";
import "./App.css";
import { Book, IBook } from "./Book";

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

  const DisplayBooks = () => {
    if (!books) return null;
    return (
      <>
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
      </>
    );
  };
  return (
    <div className="App">
      <DisplayBooks />
    </div>
  );
}

export default App;
