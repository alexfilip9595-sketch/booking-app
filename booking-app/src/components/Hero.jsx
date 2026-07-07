export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #111827, #1f2937)",
        color: "white",
        padding: "60px 30px",
        borderRadius: "20px",
        textAlign: "center",
        marginBottom: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "15px",
          fontWeight: "bold",
        }}
      >
        Your Car Deserves Perfection
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#d1d5db",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        Book your premium detailing service in less than one minute.
        Fast, secure and professional.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "16px 35px",
          background: "#fbbf24",
          border: "none",
          borderRadius: "12px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Book Now
      </button>
    </section>
  );
}