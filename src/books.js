import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

function Books() {
  const { loading, data } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>loading....</h1>
      </div>
    );
  }
  return (
    <section className="books">
      {data?.map((book) => {
        const { id: id, volumeInfo: vol, selfLink: link, title: title } = book;
        return (
          <Link to={link} key={id} className="book">
            <article>
              <img
                src={
                  undefined !== vol.imageLinks ? vol.imageLinks.thumbnail : ""
                }
              />
              <div className="title">
                <h2>{vol.title}</h2>
              </div>
              <h3>{vol.categories}</h3>
            </article>
          </Link>
        );
      })}
    </section>
  );
}

export default Books;
