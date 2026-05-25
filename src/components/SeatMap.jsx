function SeatMap({
  wagonType,
  bookedSeats,
  selectedSeats,
  onToggleSeat,
}) {
  function renderSeat(seat) {
    const isBooked = bookedSeats.includes(seat);

    const isSelected =
      selectedSeats.includes(seat);

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
  }

  // ===== КУПЕ =====

  if (wagonType === "Купе") {
    const coupeRows = [];

    let seat = 1;

    while (seat <= 36) {
      coupeRows.push([
        seat,
        seat + 1,
        seat + 2,
        seat + 3,
      ]);

      seat += 4;
    }

    return (
      <div className="seat-section">
        <h2>Схема купе вагона</h2>

        <div className="coupe-wagon">
          {coupeRows.map((coupe, index) => (
            <div className="coupe-block" key={index}>
              <div className="coupe-top">
                {renderSeat(coupe[0])}
                {renderSeat(coupe[1])}
              </div>

              <div className="coupe-bottom">
                {renderSeat(coupe[2])}
                {renderSeat(coupe[3])}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ===== ПЛАЦКАРТ =====

if (wagonType === "Плацкарт") {
  const topMainSeats = [
    2, 4, 6, 8, 10, 12, 14, 16, 18,
    20, 22, 24, 26, 28, 30, 32, 34, 36,
  ];

  const bottomMainSeats = [
    1, 3, 5, 7, 9, 11, 13, 15, 17,
    19, 21, 23, 25, 27, 29, 31, 33, 35,
  ];

  const topSideSeats = [
    54, 52, 50, 48, 46, 44, 42, 40, 38,
  ];

  const bottomSideSeats = [
    53, 51, 49, 47, 45, 43, 41, 39, 37,
  ];

  return (
    <div className="seat-section">
      <h2>Схема плацкартного вагона</h2>

      <div className="platzkart-horizontal">
        <div className="platzkart-main-horizontal">
          <div className="platzkart-row">
            {topMainSeats.map((seat) => renderSeat(seat))}
          </div>

          <div className="platzkart-row">
            {bottomMainSeats.map((seat) => renderSeat(seat))}
          </div>
        </div>

        <div className="platzkart-corridor"></div>

        <div className="platzkart-side-horizontal">
          <div className="platzkart-row">
            {topSideSeats.map((seat) => renderSeat(seat))}
          </div>

          <div className="platzkart-row">
            {bottomSideSeats.map((seat) => renderSeat(seat))}
          </div>
        </div>
      </div>
    </div>
  );
}

  // ===== ЛЮКС =====

  if (wagonType === "Люкс") {
    const luxRows = [];

    let seat = 1;

    while (seat <= 18) {
      luxRows.push([
        seat,
        seat + 1,
      ]);

      seat += 2;
    }

    return (
      <div className="seat-section">
        <h2>Схема люкс вагона</h2>

        <div className="lux-wagon">
          {luxRows.map((block, index) => (
            <div className="lux-block" key={index}>
              {renderSeat(block[0])}
              {renderSeat(block[1])}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SeatMap;