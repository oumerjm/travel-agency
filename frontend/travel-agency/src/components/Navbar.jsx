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
        <Link href="/">Home</Link>
        <Link href="/destinations">Destinations</Link>
        <Link href="/contact">Contact us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
