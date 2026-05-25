const STORAGE_KEY = "railwayBookings";

export function getBookings() {
  const savedBookings = localStorage.getItem(STORAGE_KEY);

  if (!savedBookings) {
    return [];
  }

  return JSON.parse(savedBookings);
}

export function saveBooking(booking) {
  const bookings = getBookings();

  const updatedBookings = [...bookings, booking];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookings));
}

export function getBookedSeats(trainId, wagonId) {
  const bookings = getBookings();

  return bookings
    .filter(
      (booking) =>
        booking.trainId === Number(trainId) &&
        booking.wagonId === Number(wagonId)
    )
    .flatMap((booking) => booking.seats);
}