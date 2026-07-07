import { useState, useEffect } from "react";

import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SmartBooking from "./components/SmartBooking";
import BookingForm from "./components/BookingForm";
import BookingCalendar from "./components/Calendar";
import Payment from "./components/Payment";
import Admin from "./components/Admin";
import AdminLogin from "./components/AdminLogin";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [bookingData, setBookingData] = useState({
    registration: "",
    vehicleSize: "",
    service: "",
    price: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div
      style={{
        background: "#f4f6f9",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      {!showAdmin ? (
        <>
          <Header />
          <Hero />
          <Services />

          <SmartBooking
            bookingData={bookingData}
            setBookingData={setBookingData}
          />

          <BookingForm bookingData={bookingData} />

          <BookingCalendar />

          <Payment />

          <button
            onClick={() => setShowAdmin(true)}
            style={{
              display: "block",
              margin: "40px auto",
              padding: "12px 25px",
              border: "none",
              borderRadius: "10px",
              background: "#111827",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Admin Login
          </button>

          <Footer />
        </>
      ) : (
        <>
          {!loggedIn ? (
            <AdminLogin onLogin={() => setLoggedIn(true)} />
          ) : (
            <Admin />
          )}

          <button
            onClick={() => {
              setShowAdmin(false);
              setLoggedIn(false);
            }}
            style={{
              display: "block",
              margin: "30px auto",
              padding: "12px 25px",
              border: "none",
              borderRadius: "10px",
              background: "#dc2626",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Back to Website
          </button>
        </>
      )}
    </div>
  );
}