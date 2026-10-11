import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <p className="eyebrow">ТВОЁ СЛЕДУЮЩЕЕ ПРИКЛЮЧЕНИЕ НАЧИНАЕТСЯ ЗДЕСЬ</p>

      <h2 className="home-title">
        Каждая книга —
        <br />
        <span>новый мир.</span>
      </h2>

      <p className="home-description">
        Истории, которые остаются с нами.
        Найди свою следующую любимую книгу
        в нашей небольшой коллекции.
      </p>

      <Link to="/books" className="primary-link">
        Исследовать каталог →
      </Link>
    </div>
  );
}
