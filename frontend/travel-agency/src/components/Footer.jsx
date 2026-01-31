import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="sky-footer">
      <div className="footer-container">
        {/* Column 1: Brand Info */}
        <div className="footer-column brand-col">
          <div className="footer-logo">
            <span className="logo-mark">at</span>
            <span className="logo-text">go</span>
          </div>
          <p className="brand-tagline">Making your travel dreams take flight.</p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Explore */}
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li><a href="/destinations#popular">Popular Places</a></li>
            <li><a href="/destinations#packages">Travel Packages</a></li>
            <li><a href="/destinations#offers">Special Offers</a></li>
            <li><a href="/flights">Flight Status</a></li>
          </ul>
        </div>

        {/* Column 4: Legal & Support */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="/blog">Travel Blogs</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ATGO Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}