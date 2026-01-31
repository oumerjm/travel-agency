import heroImage from "/images/landing2.jpg";
import { useEffect, useState } from "react";
import Testimonials from "../components/TestimonialsCard";
function Home() {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("");
  const [bookingData, setBookingData] = useState({ name: "", email: "", date: "" });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookingLoading, setBookingLoading] = useState(false);
 
  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("http://localhost:5000/api/destinations");
        console.log("fetch /api/destinations status:", res.status);

        if (!res.ok) {
          const txt = await res.text();
          throw new Error(`Server returned ${res.status}: ${txt}`);
        }

        const data = await res.json();
        console.log("destinations received:", data);
        setDestinations(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load destinations:", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleBooking = async () => {
    if (!selectedPlace) {
      alert("Please select a destination before booking.");
      return;
    }
    if (!bookingData.name.trim() || !bookingData.email.trim() || !bookingData.date) {
      alert("Please fill name, email and date.");
      return;
    }
    if (!validateEmail(bookingData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const booking = { ...bookingData, destination: selectedPlace };

    try {
      setBookingLoading(true);

      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      const txt = await res.text();
      let json;
      try {
        json = txt ? JSON.parse(txt) : {};
      } catch (e) {
        console.warn("Non-JSON booking response:", txt);
      }

      if (!res.ok) {
        throw new Error(`Booking failed: ${res.status} ${txt}`);
      }

      console.log("Booking response:", res.status, json || txt);
      alert("Booking Successful!");
      setShowModal(false);
      setBookingData({ name: "", email: "", date: "" });
      setSelectedPlace("");
    } catch (err) {
      console.error(err);
      alert("Booking failed: " + (err.message || "unknown error"));
    } finally {
      setBookingLoading(false);
    }
  };

  // Normalize image paths or return full URL
  const resolveImageSrc = (img) => {
    if (!img || typeof img !== "string") return "/images/placeholder.jpg";

    const trimmed = img.trim();

    if (trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("//")) {
      return trimmed;
    }

    // remove leading "./" if present
    if (trimmed.startsWith("./")) {
      const withoutDot = trimmed.slice(2);
      // if now starts with images/, ensure leading slash
      return withoutDot.startsWith("images/") ? `/${withoutDot}` : `/${withoutDot}`;
    }

    // if already starts with "/images/" or "images/"
    if (trimmed.startsWith("/images/")) return trimmed;
    if (trimmed.startsWith("images/")) return `/${trimmed}`;

    // fallback: treat as filename inside /images/
    return `/images/${trimmed}`;
  };

  return (
    <main className="home-container">
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>Explore the World with us</h1>
        <button
          className="hero-button"
          onClick={() => {
            // open modal without selecting a place (user can pick inside modal)
            setShowModal(true);
          }}
        >
          Book Now
        </button>
      </section>

      <h1 className="destination-head">Our Popular Destinations</h1>

      <input
        type="text"
        placeholder="Search destinations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Loading / Error UI */}
      {loading && <p style={{ textAlign: "center" }}>Loading destinations…</p>}
      {error && <p style={{ textAlign: "center", color: "crimson" }}>Error: {error}</p>}

      <section className="home-cards">
        {(!loading && !error && destinations.length === 0) && (
          <p style={{ textAlign: "center", width: "100%" }}>No destinations found.</p>
        )}

        {destinations
          .filter((city) => city.name && city.name.toLowerCase().includes(search.toLowerCase()))
          .map((city) => (
            <div className="city-card" key={city._id || city.id || city.name}>
              <img
                src={resolveImageSrc(city.image)}
                alt={city.name}
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder.jpg";
                }}
              />
              <h3>{city.name}</h3>
              <p>{city.description}</p>
              <button
                className="destination-button"
                onClick={() => {
                  setSelectedPlace(city.name);
                  setShowModal(true);
                }}
              >
                Book
              </button>
            </div>
          ))}
      </section>
          <section className="why-choose-us">
  <h2>Why Choose Us</h2>

  <div className="why-grid">

    <div className="why-card">
      <h3>🌍 Best Destinations</h3>
      <p>We offer handpicked destinations with unforgettable experiences.</p>
    </div>

    <div className="why-card">
      <h3>💰 Affordable Prices</h3>
      <p>Enjoy premium travel services at budget-friendly prices.</p>
    </div>

    <div className="why-card">
      <h3>⭐ Trusted Service</h3>
      <p>Thousands of happy travelers trust our booking platform.</p>
    </div>

    <div className="why-card">
      <h3>📞 24/7 Support</h3>
      <p>Our team is always ready to help you anytime.</p>
    </div>

  </div>
</section>
<Testimonials />
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Book Trip</h2>

            <input
              type="text"
              placeholder="Your Name"
              value={bookingData.name}
              onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={bookingData.email}
              onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
            />
            <input
              type="date"
              value={bookingData.date}
              onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
            />

            <select value={selectedPlace} onChange={(e) => setSelectedPlace(e.target.value)}>
              <option value="">Select Destination</option>
              {destinations.map((dest) => (
                <option key={dest._id || dest.id || dest.name} value={dest.name}>
                  {dest.name}
                </option>
              ))}
            </select>

            <div className="modal-buttons">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={handleBooking} disabled={bookingLoading}>
                {bookingLoading ? "Booking..." : "Confirm Booking"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
