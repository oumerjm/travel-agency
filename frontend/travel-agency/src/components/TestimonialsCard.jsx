import { useRef } from "react";
import "./testimonials.css"
const defaultTestimonials = [
  {
    id: 1,
    name: "Ayisha Ahmed",
    country: "Ethiopia",
    avatar: "/images/Ayisha.jpg",
    rating: 5,
    excerpt: "The service of ATGO agency was beyond my expectation.",
    text: "The service of ATGO agency was beyond my expectation. The hospitality and support I got without any trouble was a great experience. I would definitely recommend."
  },
  {
    id: 2,
    name: "Mohammed Kedir",
    country: "Ethiopia",
    avatar: "/images/Moahmmed.jpg",
    rating: 4.5,
    excerpt: "ATGO agency was a relief to me.",
    text: "ATGO agency was a relief to me. They finished all my paperwork without my involvement and I would like to thank them for that. Recommended!!"
  },
  {
    id: 3,
    name: "Chris Jason",
    country: "UK",
    avatar: "/images/chris.jpg",
    rating: 4.5,
    excerpt: "A very seamless experience.",
    text: "A very seamless experience. I highly recommend them. They handled every detail and communication was clear."
  }
];

export default function Testimonials({ items = defaultTestimonials }) {
  const containerRef = useRef(null);

  const scrollByAmount = (direction = "right") => {
    const el = containerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7; // scroll by ~70% of visible width
    el.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
  };

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const arr = [];
    for (let i = 0; i < full; i++) arr.push(<i key={`s${i}`} className="fa-solid fa-star" />);
    if (half) arr.push(<i key="half" className="fa-solid fa-star-half-stroke" />);
    while (arr.length < 5) arr.push(<i key={`e${arr.length}`} className="fa-regular fa-star" />);
    return <div className="testimonial-stars">{arr}</div>;
  };

  return (
    <section className="testimonials-side-list" aria-label="Customer testimonials">
      <h2 className="testimonials-title">What our customers say</h2>

      <div className="testimonials-controls">
        <button className="testimonials-arrow left" onClick={() => scrollByAmount("left")} aria-label="Scroll left">‹</button>

        <div className="testimonials-list" ref={containerRef}>
          {items.map((t) => (
            <article className="testimonial-card" key={t.id}>
              <div className="testimonial-left">
                <img
                  src={t.avatar || "/images/placeholder.jpg"}
                  alt={`${t.name} avatar`}
                  onError={(e) => (e.currentTarget.src = "/images/placeholder.jpg")}
                  className="testimonial-avatar"
                />
                <blockquote className="testimonial-excerpt">“{t.excerpt}”</blockquote>
              </div>

              <div className="testimonial-right">
                <p className="testimonial-full">{t.text}</p>
                <div className="testimonial-meta">
                  {renderStars(t.rating)}
                  <div className="testimonial-author">
                    <strong>{t.name}</strong>
                    <span className="testimonial-country">{t.country}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button className="testimonials-arrow right" onClick={() => scrollByAmount("right")} aria-label="Scroll right">›</button>
      </div>
    </section>
  );
}
