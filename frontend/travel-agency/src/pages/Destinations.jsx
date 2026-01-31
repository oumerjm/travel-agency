import React from 'react';
import './Destination.css';

const destinations = [
  {
    id: 1,
    city: "Dubai",
    description: "The world's biggest trade hub",
    flight: "Addis Ababa (ADD) to Dubai (DXB)",
    date: "Nov 30, 2025 - Dec 7, 2025",
    image: "./images/dubai2.jpg"
  },
  {
    id: 2,
    city: "Dire Dawa",
    description: "Explore ancient history and heritage",
    flight: "Addis Ababa (ADD) to Dire Dawa (DIR)",
    date: "Dec 1, 2025 - Dec 2, 2025",
    image: "./images/Diredawa.jpg"
  },
  {
    id: 3,
    city: "Washington",
    description: "One of the diplomatic centers in the US",
    flight: "Addis Ababa (ADD) to Washington, D.C. (IAD)",
    date: "Dec 25, 2025 - Jan 5, 2026",
    image: "./images/Washington.jpg"
  },
  {
    id: 4,
    city: "Johannesburg",
    description: "Fly to Africa's city of Gold",
    flight: "Addis Ababa (ADD) to Johannesburg (JNB)",
    date: "Dec 9, 2025 - Dec 12, 2025",
    image: "./images/Johannesaburg.jpg"
  },
  {
    id: 5,
    city: "Mekelle",
    description: "Explore the city of love",
    flight: "Addis Ababa (ADD) to Mekelle (MQX)",
    date: "Dec 2, 2025 - Dec 4, 2025",
    image: "./images/Mekelle.jpg"
  },
  {
    id: 6,
    city: "Rome",
    description: "The capital of Italy and a city steeped in history",
    flight: "Addis Ababa (ADD) to Rome (FCO)",
    date: "Jan 25, 2026 - Feb 2, 2026",
    image: "./images/Roma.jpg"
  },
  {
    id: 7,
    city: "Jeddah",
    description: "Bride of the Sea",
    flight: "Addis Ababa (ADD) to Jeddah (JED)",
    date: "Dec 5, 2025 - Feb 2, 2026",
    image: "./images/Jeddah.jpg"
  },

  {
    id: 9,
    city: "Paris",
    description: "Explore the city of love",
    flight: "Addis Ababa (ADD) to Paris (PAR)",
    date: "Feb 16, 2026 - Mar 20, 2026",
    image: "./images/paris1.jpg"
  }
];

const DestinationPage = () => {
  return (
    <div className="destinations-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Upgrade You traveling expereince with us</h1>
          <p>Discover breathtaking destinations and create memories that last a lifetime.</p>
          <button className="hero-btn">Book Your Trip Now</button>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="grid-container">
        <h2 className="section-title">Popular Destinations</h2>
        <div className="destinations-grid">
          {destinations.map((item) => (
            <div key={item.id} className="dest-card">
              <img src={item.image} alt={item.city} />
              <div className="card-body">
                <h3>{item.city}</h3>
                <p className="desc">{item.description}</p>
                <div className="flight-info">
                  <span className="route">{item.flight}</span>
                  <span className="date">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Class Selection Section (Inspired by your image) */}
      <section className="class-selection">
        <div className="selection-container">
          <div className="class-card economy">
            <div className="class-overlay">
              <h3>Economy Class</h3>
              <p>Search Flights & Places Hire to our most popular destinations</p>
              <button className="select-btn">✈ Show Flights</button>
            </div>
          </div>
          <div className="class-card business">
            <div className="class-overlay">
              <h3>Business Class</h3>
              <p>Search hotels & Places Hire to our most popular destinations</p>
              <button className="select-btn">✈ Show Hotels</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;