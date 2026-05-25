import { Link } from "react-router-dom";

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
        <p><strong>Дата:</strong> {train.departureDate}</p>
        <p><strong>Час:</strong> {train.departureTime}</p>
        <p><strong>Тривалість:</strong> {train.duration}</p>
      </div>

      <Link to={`/booking/${train.id}`} className="book-button">
        Забронювати квиток
      </Link>
    </div>
  );
}

export default TrainCard;