import { useState } from "react";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav>
      <i 
        className="fas fa-bars" 
        id="menu-icon"
        onClick={() => setOpen(!open)}
      ></i>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/destinations">Destinations</a>
        <a href="/contact">Contact us</a>
      </div>
    </nav>
  );
}

export default Navbar;
