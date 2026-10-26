
"use client";

import Link from "next/link";
import "./Hero.css";

const publishers = [
  {
    letter: "g",
    name: "growthjournal.com",
    category: "Business · United States",
    rating: "DR 78",
    price: "$85",
    color: "blue",
  },
  {
    letter: "W",
    name: "wellnesspath.net",
    category: "Health · United Kingdom",
    rating: "DR 66",
    price: "$62",
    color: "green",
  },
];

export default function Hero() {
  return (
    <section className="vf-hero">
      <div className="vf-hero-glow" />
      <div className="vf-orbit vf-orbit-one" />
      <div className="vf-orbit vf-orbit-two" />

      <div className="vf-hero-inner">
        <div className="vf-hero-copy">
          <div className="vf-hero-badge">
            <span>✦</span> THE LINK-BUILDING MARKETPLACE
          </div>

          <h1>
            Build authority.
            <span>Grow your reach.</span>
          </h1>

          <p className="vf-hero-description">
            Find trusted publishers, compare placement options, and grow
            your search visibility with a simpler way to manage link building.
          </p>

          <div className="vf-hero-buttons">
            <Link href="#marketplace" className="vf-primary-button">
              Browse Publishers <span>→</span>
            </Link>
            <Link href="#contact" className="vf-secondary-button">
              <span className="vf-play-icon">▶</span> Book a Demo
            </Link>
          </div>

          <div className="vf-hero-trust">
            <div className="vf-avatar-stack">
              <span>A</span>
              <span>M</span>
              <span>S</span>
              <span>+</span>
            </div>
            <div className="vf-trust-copy">
              <div className="vf-trust-title">
                <span className="vf-stars">★★★★★</span>
                Built for smarter link building
              </div>
              <p>Compare publishers and make informed choices.</p>
            </div>
          </div>
        </div>

        <div className="vf-hero-visual">
          <div className="vf-floating-card vf-quality-card">
            <span className="vf-quality-icon">↗</span>
            <div>
              <strong>Quality first</strong>
              <small>Compare before you order</small>
            </div>
          </div>

          <div className="vf-dashboard">
            <div className="vf-dashboard-top">
              <div className="vf-mini-brand">
                <span>V</span> veftor.
              </div>
              <div className="vf-search-box">⌕ &nbsp; Search publishers, niches...</div>
              <div className="vf-profile">V</div>
            </div>

            <div className="vf-dashboard-body">
              <aside className="vf-dashboard-sidebar">
                <div className="vf-side-active">▦ &nbsp; Dashboard</div>
                <div>♟ &nbsp; Publishers</div>
                <div>▤ &nbsp; Orders</div>
                <div>➤ &nbsp; Campaigns</div>
                <div>▥ &nbsp; Analytics</div>
                <div>⚙ &nbsp; Settings</div>
              </aside>

              <div className="vf-dashboard-main">
                <div className="vf-workspace-label">
                  YOUR CAMPAIGN WORKSPACE <span>● Live</span>
                </div>
                <h2>Find your next<br />great placement.</h2>

                <div className="vf-dashboard-search">
                  Search by niche, domain or keyword...
                  <span>⌕</span>
                </div>

                <div className="vf-metrics">
                  <div className="vf-metric-card">
                    <small>Domain rating</small>
                    <strong>72 <em>+8.4%</em></strong>
                    <div className="vf-bars">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <i key={n} />
                      ))}
                    </div>
                  </div>
                  <div className="vf-metric-card">
                    <small>Monthly traffic</small>
                    <strong>48.2K</strong>
                    <svg viewBox="0 0 150 35" aria-label="Traffic growth chart">
                      <polyline
                        points="0,28 20,27 35,28 52,24 65,26 80,14 94,19 109,9 122,13 139,3 150,0"
                        fill="none"
                        stroke="#ff6a25"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="vf-recommended-heading">
                  Recommended publishers
                  <Link href="#marketplace">View all →</Link>
                </div>

                <div className="vf-publisher-list">
                  {publishers.map((publisher) => (
                    <div className="vf-publisher" key={publisher.name}>
                      <div className={`vf-publisher-icon ${publisher.color}`}>
                        {publisher.letter}
                      </div>
                      <div className="vf-publisher-info">
                        <strong>{publisher.name}</strong>
                        <small>{publisher.category}</small>
                      </div>
                      <span className="vf-rating">{publisher.rating}</span>
                      <strong className="vf-publisher-price">
                        {publisher.price}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="vf-floating-card vf-growth-card">
            <span className="vf-growth-icon">✓</span>
            <div>
              <strong>Campaign growth</strong>
              <small>Make every placement count</small>
            </div>
          </div>

          <span className="vf-sparkle vf-sparkle-one">✦</span>
          <span className="vf-sparkle vf-sparkle-two">✧</span>
        </div>
      </div>

      <div className="vf-hero-footer">
        <strong>✦ &nbsp; MADE FOR MODERN SEO TEAMS</strong>
        <span />
        <p>Discover <i>•</i> Compare <i>•</i> Grow</p>
      </div>
    </section>
  );
}
