import { toast } from "react-toastify";

function BookingForm({ selectedSeats, onSubmit }) {
  function handleNameChange(event) {
    const value = event.target.value;

    if (/^[А-Яа-яІіЇїЄєҐґA-Za-z\s'-]*$/.test(value)) {
      event.target.value = value;
    } else {
      event.target.value = value.replace(
        /[^А-Яа-яІіЇїЄєҐґA-Za-z\s'-]/g,
        ""
      );

      toast.warning("Ім’я може містити тільки букви");
    }
  }

  function handlePhoneChange(event) {
    const value = event.target.value;

    if (/^[0-9+]*$/.test(value)) {
      event.target.value = value;
    } else {
      event.target.value = value.replace(/[^0-9+]/g, "");

      toast.warning("Телефон може містити тільки цифри та знак +");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const passenger = {
      name: formData.get("name").trim(),
      phone: formData.get("phone").trim(),
      email: formData.get("email").trim(),
    };

    if (passenger.name.length < 2) {
      toast.error("Введіть коректне ім’я пасажира");
      return;
    }

    if (passenger.phone.length < 10) {
      toast.error("Введіть коректний номер телефону");
      return;
    }

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
        onChange={handleNameChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Телефон"
        required
        onChange={handlePhoneChange}
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