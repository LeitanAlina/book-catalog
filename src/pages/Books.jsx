
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { getBooks } from "../api";

export async function loader() {
  return getBooks();
}

export default function Books() {
  const books = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  function handleSearch(event) {
    const value = event.target.value;
    setSearch(value);

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    const query = params.toString();
    window.history.replaceState(
      null,
      "",
      query ? `?${query}` : "/books"
    );
  }

  function clearSearch() {
    setSearch("");
    setSearchParams({});
  }

  return (
    <div>
      <h2 className="page-heading">Каталог книг</h2>

      <p className="page-intro">
        Выбирай историю по душе — возможно, следующая любимая книга уже здесь.
      </p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Найти книгу по названию..."
          value={search}
          onChange={handleSearch}
        />

        <button onClick={clearSearch}>Очистить</button>
      </div>

      {filteredBooks.length === 0 ? (
        <p>Книги не найдены. Попробуй другой запрос.</p>
      ) : (
        <div className="book-list">
          {filteredBooks.map((book) => (
            <article className="book-card" key={book.id}>
              <h3>
                <Link to={`/books/${book.id}`}>
                  {book.title}
                </Link>
              </h3>

              <p className="book-author">{book.author}</p>
              <p>{book.year}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
