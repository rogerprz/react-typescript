import React from "react";

export const BookForm = (): JSX.Element => {
  // set state for each input field
  const [title, setTitle] = React.useState<string>("");
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [year, setYear] = React.useState<string>("");

  console.log("T:", title, firstName);
  return (
    <section className="book-form">
      <h2>Add a book</h2>
      <form style={{ padding: 20 }}>
        <input
          type="text"
          placeholder="Title"
          onChange={(prev) => setTitle(prev.target.value)}
        />
        <input
          type="text"
          placeholder="First name"
          onChange={(prev) => setFirstName(prev.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={(prev) => setLastName(prev.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          onChange={(prev) => setYear(prev.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
};
