function SeatMap({ seats, bookedSeats, selectedSeats, onToggleSeat }) {
  return (
    <div className="seat-section">
      <h2>Оберіть місця</h2>

      <div className="seat-legend">
        <span><b className="legend free"></b> Вільне</span>
        <span><b className="legend selected"></b> Обране</span>
        <span><b className="legend booked"></b> Заброньоване</span>
      </div>

      <div className="seat-map">
        {seats.map((seat) => {
          const isBooked = bookedSeats.includes(seat);
          const isSelected = selectedSeats.includes(seat);

          let className = "seat free-seat";

          if (isBooked) {
            className = "seat booked-seat";
          }

          if (isSelected) {
            className = "seat selected-seat";
          }

          return (
            <button
              key={seat}
              className={className}
              disabled={isBooked}
              onClick={() => onToggleSeat(seat)}
            >
              {seat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SeatMap;