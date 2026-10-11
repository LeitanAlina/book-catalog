
import { Link, useLoaderData } from "react-router-dom";
import { getBook } from "../api";

export async function loader({ params }) {
  return getBook(params.id);
}

export default function BookDetails() {
  const book = useLoaderData();

  if (!book) {
    return (
      <div>
        <h2>Книга не найдена</h2>
        <Link to="/books">Вернуться в каталог</Link>
      </div>
    );
  }


 return (
  <div className="book-details">
    <p className="eyebrow">КНИГА ИЗ НАШЕЙ КОЛЛЕКЦИИ</p>

    <h2>{book.title}</h2>

    <p>Автор: {book.author}</p>

    <p>
      <span className="book-year">
        Год издания: {book.year}
      </span>
    </p>

    <p>{book.description}</p>

    <Link to="/books">← Вернуться в каталог</Link>
  </div>
 );
 
}
