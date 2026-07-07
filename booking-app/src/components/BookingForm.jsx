import { useState, useEffect } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

export default function BookingForm({ bookingData }) {
  const [form, setForm] = useState({
    registration: "",
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    details: "",
  });

  useEffect(() => {
    if (bookingData.registration) {
      setForm((prev) => ({
        ...prev,
        registration: bookingData.registration,
      }));
    }
  }, [bookingData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveBooking = async () => {
    if (
      !form.registration ||
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.date ||
      !form.time
    ) {
      alert("Please complete all required fields.");
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        registration: form.registration,

        vehicleSize: bookingData.vehicleSize,

        service: bookingData.service,

        price: bookingData.price,

        duration: bookingData.duration,

        address: bookingData.address,

        city: bookingData.city,

        postcode: bookingData.postcode,

        travelMiles: bookingData.travelMiles,

        travelMinutes: bookingData.travelMinutes,

        travelFee: bookingData.travelFee,

        total: bookingData.total,

        finishTime: bookingData.finishTime,

        companyPostcode: bookingData.companyPostcode,

        name: form.name,

        phone: form.phone,

        email: form.email,

        date: form.date,

        time: form.time,

        details: form.details,

        status: "Pending",

        createdAt: new Date(),
      });

      alert("Booking saved successfully!");

      setForm({
        registration: "",
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        details: "",
      });

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const input = {
    width: "100%",
    marginTop: 15,
    padding: 12,
    borderRadius: 10,
    border: "1px solid #ddd",
    boxSizing: "border-box",
  };

 return (
  <section
    style={{
      marginTop: 50,
      background: "#fff",
      padding: 30,
      borderRadius: 20,
      boxShadow: "0 8px 20px rgba(0,0,0,.08)",
    }}
  >
    <h2 style={{ textAlign:"center", marginBottom:25 }}>Book Your Appointment</h2>

    <input name="registration" placeholder="Vehicle Registration" value={form.registration} onChange={handleChange} style={input} />

    {bookingData.service && (
      <div style={{marginTop:20,background:"#f3f4f6",padding:20,borderRadius:12}}>
        <p><strong>Service:</strong> {bookingData.service}</p>
        <p><strong>Vehicle Size:</strong> {bookingData.vehicleSize}</p>
        <p><strong>Price:</strong> £{bookingData.price}</p>
      </div>
    )}

    <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} style={input}/>
    <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} style={input}/>
    <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} style={input}/>
    <input type="date" name="date" value={form.date} onChange={handleChange} style={input}/>
    <select name="time" value={form.time} onChange={handleChange} style={input}>
      <option value="">Choose Time</option>
      <option>09:00</option><option>10:00</option><option>11:00</option>
      <option>12:00</option><option>13:00</option><option>14:00</option>
      <option>15:00</option><option>16:00</option><option>17:00</option>
    </select>

    <textarea
      name="details"
      placeholder="Extra notes..."
      value={form.details}
      onChange={handleChange}
      style={{...input,minHeight:120,resize:"vertical"}}
    />

    <button
      onClick={saveBooking}
      style={{
        width:"100%",
        marginTop:25,
        padding:16,
        background:"#111827",
        color:"#fff",
        border:"none",
        borderRadius:10,
        fontWeight:"bold",
        fontSize:17,
        cursor:"pointer",
      }}
    >
      🚗 Confirm Booking
    </button>
  </section>
);
}
