
import "./Categories.css";

const categories = [
  { icon: "💻", name: "Technology", count: "Software, SaaS & IT", color: "cat-blue" },
  { icon: "💰", name: "Finance", count: "Business & investing", color: "cat-green" },
  { icon: "🌿", name: "Health", count: "Wellness & lifestyle", color: "cat-orange" },
  { icon: "✈️", name: "Travel", count: "Hotels & destinations", color: "cat-purple" },
  { icon: "🛍️", name: "E-commerce", count: "Retail & online stores", color: "cat-pink" },
  { icon: "🎓", name: "Education", count: "Learning & training", color: "cat-blue" },
  { icon: "🏡", name: "Home & Living", count: "Property & interiors", color: "cat-green" },
  { icon: "⚡", name: "Digital Marketing", count: "SEO & advertising", color: "cat-orange" },
];

export default function Categories() {
  return (
    <section className="section categories-section" id="categories">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">EXPLORE THE NETWORK</span>
          <h2>Find your niche. <span>Find your audience.</span></h2>
          <p>
            Discover publisher opportunities across the industries that matter
            to your business.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <a
              className={`category-card ${category.color}`}
              href={`/marketplace?category=${encodeURIComponent(category.name)}`}
              key={category.name}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-info">
                <strong>{category.name}</strong>
                <small>{category.count}</small>
              </span>
              <span className="category-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
