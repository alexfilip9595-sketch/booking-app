export default function Header() {
  return (
    <header
      style={{
        background: "#111827",
        color: "white",
        padding: "20px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "15px",
        marginBottom: "30px",
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          DETAILLY
        </h1>

        <p
          style={{
            margin: "5px 0 0",
            color: "#cbd5e1",
          }}
        >
          Premium Car Detailing Booking
        </p>
      </div>

      <button
        style={{
          background: "#fbbf24",
          color: "#111827",
          border: "none",
          padding: "12px 22px",
          borderRadius: "10px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        BOOK NOW
      </button>
    </header>
  );
}