
import "./Reviews.css";

const reviews = [
  {
    quote:
      "The organized publisher information makes it much easier to compare opportunities and plan outreach.",
    name: "Marketing Team",
    role: "Digital marketing",
    initials: "MT",
    color: "review-blue",
  },
  {
    quote:
      "Having publisher discovery and campaign planning in one place gives our team a clearer workflow.",
    name: "SEO Specialist",
    role: "Search optimization",
    initials: "SS",
    color: "review-green",
  },
  {
    quote:
      "The ability to review niches, traffic and authority metrics is exactly the kind of overview we need.",
    name: "Growth Manager",
    role: "Growth marketing",
    initials: "GM",
    color: "review-orange",
  },
];

export default function Reviews() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">BUILT FOR GROWING TEAMS</span>
          <h2>A better way to plan <span>your outreach.</span></h2>
          <p>
            A clear view of publisher opportunities can make campaign planning
            more organized.
          </p>
        </div>

        <div className="testimonial-grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={review.initials}>
              <div className="review-stars" aria-label="Sample rating">
                ★★★★★
              </div>
              <span className="review-quote-mark" aria-hidden="true">“</span>
              <blockquote>{review.quote}</blockquote>

              <div className="review-person">
                <span className={`review-avatar ${review.color}`}>
                  {review.initials}
                </span>
                <span>
                  <strong>{review.name}</strong>
                  <small>{review.role}</small>
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="review-disclaimer">
          Illustrative placeholder testimonials, not verified customer endorsements.
        </p>
      </div>
    </section>
  );
}
