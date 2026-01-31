import { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/contact">Contact us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
