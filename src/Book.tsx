import React from "react";

interface IAuthor {
  firstName: string;
  lastName: string;
}

export interface IBook {
  id: string;
  title: string;
  author: IAuthor;
  year: number | string;
}
export const Book = (props: IBook) => {
  const { id, title, author, year } = props;
  return (
    <div style={{ padding: 20 }}>
      <div>Title: {title}</div>
      <div>First name: {author.firstName}</div>
      <div>year:{year}</div>
    </div>
  );
};
