
import "./Blog.css";

const articles = [
  {
    category: "LINK BUILDING",
    title: "How to build a stronger backlink strategy",
    description: "A practical guide to evaluating publishers and planning quality outreach.",
    date: "8 min read",
    visual: "blog-visual-blue",
    icon: "↗",
  },
  {
    category: "SEO STRATEGY",
    title: "What to look for when choosing a publisher",
    description: "Understand authority, relevance, traffic and editorial quality.",
    date: "6 min read",
    visual: "blog-visual-green",
    icon: "◎",
  },
  {
    category: "CONTENT MARKETING",
    title: "Turn great content into lasting visibility",
    description: "Create a repeatable content process around your business goals.",
    date: "5 min read",
    visual: "blog-visual-orange",
    icon: "✦",
  },
];

export default function Blog() {
  return (
    <section className="section blog-section" id="blog">
      <div className="container">
        <div className="section-heading heading-row">
          <div>
            <span className="section-kicker">INSIGHTS & RESOURCES</span>
            <h2>Ideas that move <span>you forward.</span></h2>
            <p>Actionable thinking for better link-building campaigns.</p>
          </div>
          <a className="button button-outline" href="/blog">
            Explore all articles ↗
          </a>
        </div>

        <div className="blog-grid">
          {articles.map((article, index) => (
            <article
              className="blog-card"
              key={article.title}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <a className={`blog-visual ${article.visual}`} href="/blog">
                <span className="blog-orb" />
                <span className="blog-art-icon">{article.icon}</span>
                <span className="blog-visual-label">VEFTOR INSIGHTS</span>
                <span className="blog-visual-arrow">↗</span>
              </a>

              <div className="blog-content">
                <span className="blog-category">{article.category}</span>
                <h3><a href="/blog">{article.title}</a></h3>
                <p>{article.description}</p>
                <div className="blog-meta">
                  <span>{article.date}</span>
                  <a href="/blog">Read article ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="blog-demo-note">
          Demo article content. Replace these cards with articles managed through your CMS or admin dashboard.
        </p>
      </div>
    </section>
  );
}
