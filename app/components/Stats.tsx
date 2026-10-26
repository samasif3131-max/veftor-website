
import "./Stats.css";

const stats = [
  { value: "120k+", label: "Websites Inventory", color: "blue" },
  { value: "10k+", label: "Regular Advertisers", color: "green" },
  { value: "22k+", label: "Active Publishers", color: "orange" },
  { value: "60k+", label: "Orders Completed", color: "blue" },
  { value: "47+", label: "Countries Worldwide", color: "green" },
];

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Veftor marketplace statistics">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <article
            className={`stat-item stat-${stat.color}`}
            key={stat.label}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="stat-dot" />
            <strong>{stat.value}</strong>
            <span className="stat-label">{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
