function TrainCard({ train }) {
  return (
    <div className="train-card">
      <div className="train-card-header">
        <h3>Потяг № {train.number}</h3>
        <span className="train-badge">Рейс</span>
      </div>

      <p className="route">
        {train.from} → {train.to}
      </p>

      <div className="train-info">
        <p>
          <strong>Дата:</strong> {train.departureDate}
        </p>
        <p>
          <strong>Час відправлення:</strong> {train.departureTime}
        </p>
        <p>
          <strong>Тривалість:</strong> {train.duration}
        </p>
      </div>

      <button className="book-button">Переглянути рейс</button>
    </div>
  );
}

export default TrainCard;