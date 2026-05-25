import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { trains } from "../data/trains";
import WagonSelector from "../components/WagonSelector";
import SeatMap from "../components/SeatMap";
import BookingForm from "../components/BookingForm";
import { getBookedSeats, saveBooking } from "../services/BookingService";

const wagons = [
  {
    id: 1,
    type: "Купе",
    seats: 36,
  },
  {
    id: 2,
    type: "Плацкарт",
    seats: 54,
  },
  {
    id: 3,
    type: "Люкс",
    seats: 18,
  },
];

function Booking() {
  const { trainId } = useParams();

  const train = trains.find((item) => item.id === Number(trainId));

  const [selectedWagon, setSelectedWagon] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const currentWagon = wagons.find(
    (wagon) => wagon.id === selectedWagon
  );

  if (!train) {
    return (
      <main className="page">
        <h1>Рейс не знайдено</h1>
        <Link to="/">Повернутися назад</Link>
      </main>
    );
  }

  const bookedSeats = getBookedSeats(train.id, selectedWagon);

  function handleSelectWagon(wagonId) {
    setSelectedWagon(wagonId);
    setSelectedSeats([]);
  }

  function handleToggleSeat(seat) {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  }

  function handleBooking(passenger) {
    if (selectedSeats.length === 0) {
      toast.error("Оберіть хоча б одне місце");
      return;
    }

    const newBooking = {
      id: Date.now(),
      trainId: train.id,
      wagonId: selectedWagon,
      seats: selectedSeats,
      passenger,
    };

    saveBooking(newBooking);

    toast.success("Квиток успішно заброньовано");

    setSelectedSeats([]);
  }

  return (
    <main className="page">
      <Link to="/" className="back-link">
        ← Назад до списку потягів
      </Link>

     <section className="booking-header">
        <h1>Бронювання квитка</h1>

        <p>
            <strong>Потяг № {train.number}:</strong> {train.from} → {train.to}
        </p>

        <div className="booking-details">
            <p>
            <strong>Дата відправлення:</strong> {train.departureDate}
            </p>

            <p>
            <strong>Час відправлення:</strong> {train.departureTime}
            </p>

    <p>
      <strong>Тривалість поїздки:</strong> {train.duration}
    </p>
  </div>
</section>

      <WagonSelector
        wagons={wagons}
        selectedWagon={selectedWagon}
        onSelectWagon={handleSelectWagon}
      />

      <SeatMap
        wagonType={currentWagon.type}
        bookedSeats={bookedSeats}
        selectedSeats={selectedSeats}
        onToggleSeat={handleToggleSeat}
      />

      <BookingForm
        selectedSeats={selectedSeats}
        onSubmit={handleBooking}
      />
    </main>
  );
}

export default Booking;