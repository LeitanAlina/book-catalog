import { useState } from "react";

export default function Subscribe() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <div className="subscribe-card">
      <p className="eyebrow">КНИЖНЫЕ НОВОСТИ</p>

      <h2>Оставайся на связи</h2>

      <p>
        Новые книги, интересные истории и идеи для чтения —
        прямо в твоей почте.
      </p>

      {subscribed ? (
        <p className="success-message">
          Спасибо за подписку!
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Твоё имя
            <input
              type="text"
              placeholder="Анна"
              required
            />
          </label>
          <label>
            Твой email
            <input
              type="email"
              placeholder="name@example.com"
              required
            />
          </label>

          <button type="submit">Подписаться →</button>
        </form>
      )}
    </div>
  );
}
