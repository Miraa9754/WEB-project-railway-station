function BookingForm({ selectedSeats, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const passenger = {
      name: formData.get("name").trim(),
      phone: formData.get("phone").trim(),
      email: formData.get("email").trim(),
    };

    onSubmit(passenger);

    event.target.reset();
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Дані пасажира</h2>

      <input
        type="text"
        name="name"
        placeholder="Ім’я пасажира"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Телефон"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
      />

      <button type="submit" disabled={selectedSeats.length === 0}>
        Забронювати {selectedSeats.length > 0 ? selectedSeats.length : ""} місць
      </button>
    </form>
  );
}

export default BookingForm;