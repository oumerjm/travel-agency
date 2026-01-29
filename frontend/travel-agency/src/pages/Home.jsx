import heroImage from "/images/landing2.jpg";
import { useEffect, useState } from "react";


function Home() {

  const [destinations, setDestinations] = useState([]);
    const [search, setSearch] = useState("");

  useEffect(() => {

    fetch("http://localhost:5000/api/destinations")
      .then(res => res.json())
      .then(data => setDestinations(data))
      .catch(err => console.error(err));

  }, []);

  return (
    <main className="home-container">

      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1>Explore the World with us</h1>
        <button className="hero-button">
          Book now!
        </button>
      </section>

      <h1 className="destination-head">
        Our Popular Destinations
      </h1>
        <input
        type="text"
        placeholder="Search destinations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
        />

      <section className="home-cards">

        {destinations
        .filter(city =>
            city.name.toLowerCase().includes(search.toLowerCase())
        )
        .map(city => (


          <div className="city-card" key={city.id}>

            <img
            src={`/images/${city.image}`}
            alt={city.name}
            />


            <h3>{city.name}</h3>
            <p>{city.description}</p>

          </div>

        ))}

      </section>

    </main>
  );
}

export default Home;
