import React from "react";
import Books from "./books";
import SearchForm from "./SearchForm";

function Home() {
  return (
    <main>
      <div className="bookfinder">
        <h1>Book Finder</h1>
      </div>
      <SearchForm />
      <Books />
    </main>
  );
}

export default Home;
