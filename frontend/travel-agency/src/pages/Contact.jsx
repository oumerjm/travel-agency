import "./contact.css"
export default function Contact() {
  return (
    <main className="contact-page">

      {/* HERO SECTION */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We are here to help you plan your perfect trip</p>
      </section>

      {/* FORM SECTION */}
      <section className="contact-container">

        <div className="contact-card">

          <h2>Send us a message</h2>

          <form className="contact-form">

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Type your message"></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}
