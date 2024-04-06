import React from "react";
import { IBook } from "./Book";

interface IBookForm {
  addBook: (book: IBook) => void;
}
export const BookForm = (props: IBookForm): JSX.Element => {
  // set state for each input field
  const [title, setTitle] = React.useState<string>("For");
  const [firstName, setFirstName] = React.useState<string>("First");
  const [lastName, setLastName] = React.useState<string>("Second");
  const [year, setYear] = React.useState<number | string>(2020);

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const book: IBook = {
      id: Math.floor(Math.random() * 10000),
      title,
      author: {
        firstName,
        lastName,
      },
      year,
    };
    console.log("Book:", book);
    props.addBook(book);
    clearForm();
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setTitle("");
    setYear("");
  };
  return (
    <section className="book-form">
      <h2>Add a book</h2>
      <form style={{ padding: 20 }}>
        <input
          type="text"
          placeholder="Title"
          onChange={(prev) => setTitle(prev.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="First name"
          onChange={(prev) => setFirstName(prev.target.value)}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={(prev) => setLastName(prev.target.value)}
          value={lastName}
        />
        <input
          type="number"
          placeholder="Year"
          onChange={(prev) => setYear(prev.target.value)}
          value={year}
        />
        <button type="submit" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </section>
  );
};
