import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { db } from "../Firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function BookingCalendar() {
  const [date, setDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "bookings"),
      (snapshot) => {
        const dates = snapshot.docs
          .map((doc) => doc.data().date)
          .filter(Boolean);

        setBookedDates(dates);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div
      style={{
        marginTop: 40,
        marginBottom: 40,
        background: "#fff",
        padding: 30,
        borderRadius: 20,
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Booking Calendar
      </h2>

      <Calendar
        onChange={setDate}
        value={date}
        tileContent={({ date, view }) => {
          if (view !== "month") return null;

          const formatted = date.toISOString().split("T")[0];

          if (bookedDates.includes(formatted)) {
            return (
              <div
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  marginTop: 4,
                }}
              >
                🚗
              </div>
            );
          }

          return null;
        }}
      />

      <p
        style={{
          marginTop: 20,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Selected Date: {date.toDateString()}
      </p>

      <h3
        style={{
          marginTop: 30,
          textAlign: "center",
        }}
      >
        Available Time Slots
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 10,
          marginTop: 20,
        }}
      >
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            style={{
              padding: 15,
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              background:
                selectedTime === time ? "#16a34a" : "#111827",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {time}
          </button>
        ))}
      </div>

      {selectedTime && (
        <p
          style={{
            textAlign: "center",
            marginTop: 20,
            fontWeight: "bold",
            color: "#16a34a",
            fontSize: 18,
          }}
        >
          Selected Time: {selectedTime}
        </p>
      )}
    </div>
  );
}