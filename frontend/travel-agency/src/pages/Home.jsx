import heroImage from "/images/landing2.jpg";
import { useEffect, useState } from "react";
import Testimonials from "../components/TestimonialsCard";
import WhyChooseUs from "../components/WhyChooseUs";
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

 const handleBooking = async (e) => {
  e.preventDefault(); 

  if (!selectedPlace) {
    alert("Please select a destination.");
    return;
  }

  if (!bookingData.name || !bookingData.email || !bookingData.date) {
    alert("Fill all fields");
    return;
  }

  if (!validateEmail(bookingData.email)) {
    alert("Invalid email");
    return;
  }

  const booking = {
    ...bookingData,
    destination: selectedPlace
  };

  try {
    setBookingLoading(true);

    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(booking)
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(txt);
    }

    alert("Booking Successful ✅");

    setShowModal(false);
    setBookingData({ name: "", email: "", date: "" });
    setSelectedPlace("");

  } catch (err) {
    console.error(err);
    alert("Booking failed");
  } finally {
    setBookingLoading(false);
  }
};

  
  const resolveImageSrc = (img) => {
    if (!img || typeof img !== "string") return "/images/placeholder.jpg";

    const trimmed = img.trim();

    if (trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("//")) {
      return trimmed;
    }

    
    if (trimmed.startsWith("./")) {
      const withoutDot = trimmed.slice(2);
      
      return withoutDot.startsWith("images/") ? `/${withoutDot}` : `/${withoutDot}`;
    }

    
    if (trimmed.startsWith("/images/")) return trimmed;
    if (trimmed.startsWith("images/")) return `/${trimmed}`;

   
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
<WhyChooseUs />
<Testimonials />
 {showModal && (
  <div className="modal-overlay">
    <div className="modal-box">

      <h2>Book Trip</h2>

      <form onSubmit={handleBooking}>

        <input
          type="text"
          placeholder="Your Name"
          value={bookingData.name}
          onChange={(e) =>
            setBookingData({ ...bookingData, name: e.target.value })
          }
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={bookingData.email}
          onChange={(e) =>
            setBookingData({ ...bookingData, email: e.target.value })
          }
          required
        />

        <input
          type="date"
          value={bookingData.date}
          onChange={(e) =>
            setBookingData({ ...bookingData, date: e.target.value })
          }
          required
        />

        <select
          value={selectedPlace}
          onChange={(e) => setSelectedPlace(e.target.value)}
          required
        >
          <option value="">Select Destination</option>

          {destinations.map((dest) => (
            <option key={dest._id} value={dest.name}>
              {dest.name}
            </option>
          ))}
        </select>

        <div className="modal-buttons">

          <button
            type="button"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>

          <button type="submit" disabled={bookingLoading}>
            {bookingLoading ? "Booking..." : "Confirm Booking"}
          </button>

        </div>
      </form>
    </div>
  </div>
)}

    </main>
  );
}

export default Home;
