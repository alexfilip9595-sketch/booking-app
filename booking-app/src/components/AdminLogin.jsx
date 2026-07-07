import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      onLogin();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div
      style={{
        maxWidth: 450,
        margin: "50px auto",
        background: "#fff",
        padding: 30,
        borderRadius: 20,
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Detailly Admin Login
      </h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={input}
      />

      <button
        onClick={login}
        style={{
          width: "100%",
          marginTop: 20,
          padding: 15,
          background: "#111827",
          color: "white",
          border: "none",
          borderRadius: 10,
          cursor: "pointer",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        Login
      </button>
    </div>
  );
}

const input = {
  width: "100%",
  marginTop: 15,
  padding: 12,
  borderRadius: 10,
  border: "1px solid #ddd",
  boxSizing: "border-box",
};