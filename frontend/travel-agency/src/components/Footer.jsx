import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      
      <div className="footer-wrap">

        {/* LEFT — QUICK LINKS */}
        <div className="footer-left">
          <div className="footer-cols">

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="/destinations#popular">Popular</a></li>
                <li><a href="/destinations#packages">Packages</a></li>
                <li><a href="/destinations#offers">Offers</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="/blog">Travel Blogs</a></li>
                <li><a href="/terms">Terms</a></li>
                <li><a href="/privacy">Privacy</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* RIGHT — LOGO + SOCIALS */}
        <div className="footer-right">

          <div className="footer-logo">
            <span className="logo-mark">at</span>
            <span className="logo-text">go</span>
          </div>

          <div className="footer-socials" aria-hidden="true">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social"><i className="fab fa-tiktok"></i></a>
          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} ATGO Travel Agency</small>
      </div>

    </footer>
  );
}
