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
  return (
    <div className="App">
      {books &&
        Object.entries(books).map((bookData: any) => {
          console.log("BOOL:", bookData);
          const [letter, bookArr] = bookData;
          console.log("L:", letter, bookArr);
          return (
            <div>
              <div>{letter}</div>
              {bookArr.map((data: IBook) => {
                return <Book key={data.id} {...data} />;
              })}
            </div>
          );
        })}
    </div>
  );
}

export default App;
