import { useState } from "react";
import "./Destination.css"
const data = [
  {
    id: 1,
    name: "Dubai",
    desc: "World's biggest trade hub",
    image: "/images/dubai1.jpg"
  },
  {
    id: 2,
    name: "Rome",
    desc: "Historic capital of Italy",
    image: "/images/rome.jpg"
  },
  {
    id: 3,
    name: "Mekelle",
    desc: "Beautiful Ethiopian city",
    image: "/images/mekelle.jpg"
  },
  {
    id: 4,
    name: "Washington",
    desc: "US diplomatic center",
    image: "/images/washington.jpg"
  },
  {
    id: 5,
    name: "Johannesburg",
    desc: "City of gold",
    image: "/images/johannesburg.jpg"
  }
];

export default function Destinations() {

  const [flightClass, setFlightClass] = useState("Economy");

  return (
    <main className="destination-page">

      {/* HERO */}
      <section className="destination-hero">
        <h1>Choose Your Destination</h1>
        <p>Find the best trips worldwide</p>
      </section>

      {/* CLASS SELECTOR */}
      <section className="class-selector">

        <button
          className={flightClass === "Economy" ? "active" : ""}
          onClick={() => setFlightClass("Economy")}
        >
          Economy
        </button>

        <button
          className={flightClass === "Business" ? "active" : ""}
          onClick={() => setFlightClass("Business")}
        >
          Business
        </button>

        <button
          className={flightClass === "First" ? "active" : ""}
          onClick={() => setFlightClass("First")}
        >
          First Class
        </button>

      </section>

      {/* DESTINATION CARDS */}
      <section className="destination-grid">

        {data.map(place => (

          <div className="destination-card" key={place.id}>

            <img src={place.image} alt={place.name} />

            <h3>{place.name}</h3>

            <p>{place.desc}</p>

            <span className="badge">
              {flightClass}
            </span>

            <button className="destination-button">
              See Details
            </button>

          </div>

        ))}

      </section>

    </main>
  );
}
