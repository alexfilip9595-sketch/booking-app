import { useEffect, useState } from "react";
import { db } from "../Firebase";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "bookings"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBookings(data);
      }
    );

    return () => unsubscribe();
  }, []);

  const deleteBooking = async (id) => {
    if (!window.confirm("Delete this booking?")) return;

    await deleteDoc(doc(db, "bookings", id));
    alert("Booking deleted!");
  };

  const updateStatus = async (id, status) => {
    try {
      await updateDoc(doc(db, "bookings", id), {
        status,
      });
    } catch (error) {
      console.error(error);
      alert("Error updating status.");
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const text = search.toLowerCase();

    return (
      booking.name?.toLowerCase().includes(text) ||
      booking.email?.toLowerCase().includes(text) ||
      booking.phone?.toLowerCase().includes(text) ||
      booking.registration?.toLowerCase().includes(text)
    );
  });

  return (
    <div style={{ padding: 30 }}>
      <h1>🚗 Detailly Admin Dashboard</h1>

      <p
        style={{
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Total Bookings: {filteredBookings.length}
      </p>

      <input
        placeholder="Search by name, registration, phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: 15,
          borderRadius: 10,
          border: "1px solid #ddd",
          marginBottom: 25,
          boxSizing: "border-box",
        }}
      />

      {filteredBookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        filteredBookings.map((booking) => (
          <div
            key={booking.id}
            style={{
              background: "#fff",
              padding: 20,
              marginBottom: 20,
              borderRadius: 15,
              boxShadow: "0 5px 15px rgba(0,0,0,.1)",
            }}
          >
            <h2>🚗 {booking.registration}</h2>

            <p>
              <strong>👤 Name:</strong> {booking.name}
            </p>

            <p>
              <strong>📞 Phone:</strong> {booking.phone}
            </p>

            <p>
              <strong>📧 Email:</strong> {booking.email}
            </p>

            <p>
              <strong>📅 Date:</strong> {booking.date}
            </p>

            <p>
              <strong>🕒 Time:</strong> {booking.time}
            </p>

            <p>
              <strong>🧽 Service:</strong> {booking.service}
            </p>

            <p>
              <strong>🚘 Vehicle:</strong> {booking.vehicleSize}
            </p>

            <p>
              <strong>💷 Price:</strong> £{booking.price}
            </p>

            <p>
              <strong>📝 Details:</strong> {booking.details}
            </p>

            <p>
              <strong>Status:</strong> {booking.status}
            </p>

            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: 20,
              }}
            >
              <button
                onClick={() => updateStatus(booking.id, "Accepted")}
                style={{
                  padding: "10px 20px",
                  background: "#16a34a",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                ✅ Accept
              </button>

              <button
                onClick={() => updateStatus(booking.id, "Rejected")}
                style={{
                  padding: "10px 20px",
                  background: "#f59e0b",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                ❌ Reject
              </button>

              <button
                onClick={() => deleteBooking(booking.id)}
                style={{
                  padding: "10px 20px",
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}