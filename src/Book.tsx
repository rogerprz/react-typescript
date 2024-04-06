import React from "react";

interface IAuthor {
  firstName: string;
  lastName: string;
}

export interface IBook {
  id: string | number;
  title: string;
  author: IAuthor;
  year: number | string;
}
export const Book = (props: IBook) => {
  const { id, title, author, year } = props;
  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h3>Title: {title}</h3>
      <div>
        Name: {author.firstName} {author.lastName}
      </div>
      <div>SKU: {id}</div>
      <div>year:{year}</div>
    </div>
  );
};
