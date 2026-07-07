import { useState } from "react";

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { name: "Exterior Wash", price: "£20", color: "#D0E8FF" },
    { name: "Interior Deep Clean", price: "£40", color: "#D7F5DD" },
    { name: "Full Polish", price: "£70", color: "#FFE8C2" },
    { name: "Ceramic Coating", price: "£150", color: "#E8D7FF" },
    { name: "Machine Polish Correction", price: "£90", color: "#D7F0F5" },
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: 20, background: "#f5f7fb", minHeight: "100vh" }}>
      
      <h1 style={{ textAlign: "center", fontSize: 40 }}>
        Car Detailing Services
      </h1>

      <p style={{ textAlign: "center", color: "#666" }}>
        Book your service in seconds
      </p>

      {/* SERVICES */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 20,
        marginTop: 30
      }}>
        {services.map((s, i) => (
          <div
            key={i}
            onClick={() => setSelectedService(s.name)}
            style={{
              background: s.color,
              padding: 20,
              borderRadius: 18,
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              transition: "0.3s"
            }}
          >
            <h3>{s.name}</h3>
            <p style={{ fontSize: 20, fontWeight: "bold" }}>{s.price}</p>

            <button
              onClick={() => setSelectedService(s.name)}
              style={{
                marginTop: 10,
                padding: "8px 15px",
                border: "none",
                borderRadius: 10,
                background: "#111",
                color: "white"
              }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* FORM */}
      {selectedService && (
        <div style={{
          marginTop: 40,
          padding: 20,
          background: "white",
          borderRadius: 15,
          maxWidth: 400,
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}>
          <h2>Book: {selectedService}</h2>

          <input placeholder="Name" style={inputStyle} />
          <input placeholder="Phone" style={inputStyle} />
          <input type="date" style={inputStyle} />

          <button style={{
            marginTop: 10,
            width: "100%",
            padding: 10,
            border: "none",
            borderRadius: 10,
            background: "green",
            color: "white"
          }}>
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 10,
  marginTop: 10,
  borderRadius: 8,
  border: "1px solid #ddd"
};