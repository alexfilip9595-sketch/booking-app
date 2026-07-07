import { useState } from "react";

export default function Payment() {
  const [customTip, setCustomTip] = useState("");

  return (
    <div
      style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "15px",
        marginTop: "30px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Secure Payment
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "25px",
        }}
      >
        Choose how you would like to pay.
      </p>

      <button
        style={buttonStyle}
        onClick={() => alert("50% Deposit Checkout")}
      >
        💳 Pay 50% Deposit
      </button>

      <button
        style={buttonStyle}
        onClick={() => alert("Full Payment Checkout")}
      >
        💳 Pay in Full
      </button>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          background: "#f5f5f5",
          borderRadius: "10px",
        }}
      >
        <h3>Leave a Tip ❤️</h3>

        <button style={tipStyle}>£5</button>

        <button style={tipStyle}>£10</button>

        <button style={tipStyle}>£20</button>

        <input
          type="number"
          placeholder="Custom Tip (£)"
          value={customTip}
          onChange={(e) => setCustomTip(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            boxSizing: "border-box",
          }}
        />
      </div>

      <button
        style={{
          width: "100%",
          marginTop: "30px",
          padding: "15px",
          background: "#16a34a",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "17px",
          cursor: "pointer",
        }}
        onClick={() => alert("Stripe Checkout")}
      >
        Continue to Secure Checkout
      </button>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "15px",
  border: "none",
  borderRadius: "10px",
  background: "#111",
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold",
};

const tipStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  border: "none",
  borderRadius: "8px",
  background: "#ececec",
  cursor: "pointer",
  fontSize: "15px",
};