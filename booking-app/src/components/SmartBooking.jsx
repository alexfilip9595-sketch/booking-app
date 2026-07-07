import { useState } from "react";
import { prices } from "../data/prices";

export default function SmartBooking({ bookingData, setBookingData }) {
  const [registration, setRegistration] = useState("");
  const [service, setService] = useState("");
  const [vehicleSize, setVehicleSize] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [startTime, setStartTime] = useState("");

  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [travelMiles, setTravelMiles] = useState(0);
  const [travelMinutes, setTravelMinutes] = useState(0);
  const [travelFee, setTravelFee] = useState(0);
  const [total, setTotal] = useState(0);
  const [finishTime, setFinishTime] = useState("");

  const COMPANY_POSTCODE = "PE7 8GT";
  const COST_PER_MILE = 0.5;

  function calculateFinish(start, hours) {
    if (!start) return "";

    const [h, m] = start.split(":").map(Number);

    const date = new Date();

    date.setHours(h);
    date.setMinutes(m);

    date.setMinutes(date.getMinutes() + hours * 60);

    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function fakeDistanceCalculation(postcode) {
    if (!postcode) {
      return {
        miles: 0,
        minutes: 0,
      };
    }

    const randomMiles =
      Math.floor(Math.random() * 90) + 5;

    return {
      miles: randomMiles,
      minutes: Math.round(randomMiles * 1.2),
    };
  }

  const checkVehicle = () => {
    if (!registration) {
      alert("Enter registration");
      return;
    }

    if (!service) {
      alert("Choose service");
      return;
    }

    const detectedSize = "medium";

    const servicePrice =
      prices[service][detectedSize];

    const serviceDuration =
      prices[service].duration;

    const travel =
      fakeDistanceCalculation(postcode);

    const travelCost =
      Number(
        (travel.miles * COST_PER_MILE).toFixed(2)
      );

    const grandTotal =
      servicePrice + travelCost;

    const finish =
      calculateFinish(
        startTime,
        serviceDuration
      );

    setVehicleSize(detectedSize);

    setPrice(servicePrice);

    setDuration(serviceDuration);

    setTravelMiles(travel.miles);

    setTravelMinutes(travel.minutes);

    setTravelFee(travelCost);

    setTotal(grandTotal);

    setFinishTime(finish);

    setBookingData({
      registration,
      vehicleSize: detectedSize,
      service,
      price: servicePrice,
      duration: serviceDuration,
      postcode,
      address,
      city,
      travelMiles: travel.miles,
      travelMinutes: travel.minutes,
      travelFee: travelCost,
      total: grandTotal,
      finishTime: finish,
      companyPostcode: COMPANY_POSTCODE,
    });
  };
 return (
    <section
      style={{
        background: "#fff",
        padding: 30,
        borderRadius: 20,
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        marginTop: 40,
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        🚗 Smart Booking
      </h2>

      <input
        type="text"
        placeholder="Vehicle Registration"
        value={registration}
        onChange={(e) =>
          setRegistration(e.target.value.toUpperCase())
        }
        style={input}
      />

      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        style={input}
      >
        <option value="">Choose Service</option>

        {Object.keys(prices).map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>

      <input
        placeholder="Client Address"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
        style={input}
      />

      <input
        placeholder="City"
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
        style={input}
      />

      <input
        placeholder="Postcode"
        value={postcode}
        onChange={(e) =>
          setPostcode(
            e.target.value.toUpperCase()
          )
        }
        style={input}
      />

      <input
        type="time"
        value={startTime}
        onChange={(e) =>
          setStartTime(e.target.value)
        }
        style={input}
      />

      <button
        onClick={checkVehicle}
        style={button}
      >
        Calculate Booking
      </button>

      {vehicleSize && (
        <div
          style={{
            marginTop: 30,
            background: "#f3f4f6",
            borderRadius: 15,
            padding: 25,
          }}
        >
          <h2>
            🚗 Booking Summary
          </h2>

          <p>
            <strong>Registration:</strong>{" "}
            {registration}
          </p>

          <p>
            <strong>Vehicle Size:</strong>{" "}
            {vehicleSize}
          </p>

          <p>
            <strong>Service:</strong>{" "}
            {service}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {address}
          </p>

          <p>
            <strong>City:</strong>{" "}
            {city}
          </p>

          <p>
            <strong>Postcode:</strong>{" "}
            {postcode}
          </p>

          <p>
            <strong>Travel Distance:</strong>{" "}
            {travelMiles} miles
          </p>

          <p>
            <strong>Travel Time:</strong>{" "}
            {travelMinutes} min
          </p>

          <p>
            <strong>Travel Fee:</strong>{" "}
            £{travelFee}
          </p>

          <p>
            <strong>Service Duration:</strong>{" "}
            {duration} Hours
          </p>

          <p>
            <strong>Estimated Finish:</strong>{" "}
            {finishTime}
          </p>

          <h2
            style={{
              color: "#16a34a",
              marginTop: 20,
            }}
          >
            Service £{price}
          </h2>

          <h1
            style={{
              color: "#111827",
            }}
          >
            TOTAL £{total}
          </h1>
        </div>
      )}
    </section>
  );
}

const input = {
  width: "100%",
  padding: 15,
  marginTop: 15,
  borderRadius: 10,
  border: "1px solid #ddd",
  boxSizing: "border-box",
};

const button = {
  width: "100%",
  marginTop: 20,
  padding: 15,
  background: "#111827",
  color: "white",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  fontSize: 17,
  fontWeight: "bold",
}; 