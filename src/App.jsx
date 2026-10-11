
import { Link, Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <Link to="/" className="logo">
          <span className="logo-icon">✳</span>
          <span>Книжная библиотека</span>
        </Link>

        <nav className="navigation">
          <Link to="/">Главная</Link>
          <Link to="/about">О сайте</Link>
          <Link to="/books">Каталог</Link>
          <Link to="/subscribe">Подписка</Link>
        </nav>
      </header>

      <main className="page-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        Маленький мир больших историй 
      </footer>
    </div>
  );
}
