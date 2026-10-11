
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-icon">📖</div>

      <p className="eyebrow">ПОХОЖЕ, МЫ ЗАБЛУДИЛИСЬ</p>

      <h2 className="not-found-number">404</h2>

      <h3>Этой страницы не существует.</h3>

      <p className="not-found-description">
        Кажется, такой страницы нет в нашей библиотеке.
      </p>

      <div className="not-found-actions">
        <Link to="/" className="primary-link">
          На главную
        </Link>

        <Link to="/books" className="secondary-link">
          Открыть каталог →
        </Link>
      </div>
    </div>
  );
}
