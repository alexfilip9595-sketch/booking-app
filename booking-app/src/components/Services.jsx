const services = [
  {
    title: "Mini Detail",
    price: "£40",
    description: "Quick refresh inside & outside."
  },
  {
    title: "Interior Detail",
    price: "£80",
    description: "Deep interior cleaning."
  },
  {
    title: "Exterior Detail",
    price: "£90",
    description: "Premium exterior wash & protection."
  },
  {
    title: "Full Detail",
    price: "£150",
    description: "Complete inside & outside package."
  },
  {
    title: "Ceramic Coating",
    price: "From £250",
    description: "Long-lasting ceramic protection."
  }
];

export default function Services() {
  return (
    <section style={{ marginTop: 40 }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: 30,
          fontSize: "34px",
        }}
      >
        Our Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: 20,
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: 25,
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
              textAlign: "center",
            }}
          >
            <h3>{service.title}</h3>

            <h2 style={{ color: "#0f9d58" }}>
              {service.price}
            </h2>

            <p>{service.description}</p>

            <button
              style={{
                marginTop: 15,
                background: "#111827",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}