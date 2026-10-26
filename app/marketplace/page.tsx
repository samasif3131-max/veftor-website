"use client";

import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Marketplace.css";

const publishers = [
  {
    name: "Digital Growth Hub",
    category: "Business",
    da: 72,
    traffic: "85K",
    price: 180,
    tag: "Premium",
    initials: "DG",
  },
  {
    name: "Tech Horizon",
    category: "Technology",
    da: 68,
    traffic: "62K",
    price: 145,
    tag: "Trending",
    initials: "TH",
  },
  {
    name: "The Finance Daily",
    category: "Finance",
    da: 81,
    traffic: "120K",
    price: 250,
    tag: "Top Rated",
    initials: "FD",
  },
  {
    name: "Lifestyle Avenue",
    category: "Lifestyle",
    da: 59,
    traffic: "48K",
    price: 95,
    tag: "Popular",
    initials: "LA",
  },
  {
    name: "Health & Wellness",
    category: "Health",
    da: 64,
    traffic: "71K",
    price: 130,
    tag: "Verified",
    initials: "HW",
  },
  {
    name: "Startup Insider",
    category: "Business",
    da: 75,
    traffic: "93K",
    price: 210,
    tag: "Premium",
    initials: "SI",
  },
];

const categories = [
  "All Categories",
  "Technology",
  "Business",
  "Finance",
  "Lifestyle",
  "Health",
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [maxPrice, setMaxPrice] = useState("500");
  const [sort, setSort] = useState("recommended");

  const filteredPublishers = useMemo(() => {
    const result = publishers.filter((publisher) => {
      const matchesSearch =
        publisher.name.toLowerCase().includes(search.toLowerCase()) ||
        publisher.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All Categories" || publisher.category === category;

      const matchesPrice = publisher.price <= Number(maxPrice);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "authority") {
      result.sort((a, b) => b.da - a.da);
    }

    return result;
  }, [search, category, maxPrice, sort]);

  return (
    <>
      <Navbar />

      <main className="marketplace-page">
        {/* HERO */}
        <section className="market-hero">
          <div className="market-orb market-orb-one" />
          <div className="market-orb market-orb-two" />

          <div className="market-hero-content">
            <div className="market-eyebrow">
              <span className="live-dot" />
              THE VEFTOR MARKETPLACE
            </div>

            <h1>
              Find the Right
              <br />
              Publishers. <span>Grow Faster.</span>
            </h1>

            <p>
              Discover quality publishers, build powerful backlinks, and
              connect your brand with websites that move your business forward.
            </p>

            <div className="market-hero-actions">
              <a href="#publisher-list" className="market-btn market-btn-green">
                Explore Publishers <span>↗</span>
              </a>

              <a href="#how-it-works" className="market-btn market-btn-outline">
                How It Works
              </a>
            </div>

            <div className="market-trust-row">
              <div className="trust-avatars">
                <span>V</span>
                <span>G</span>
                <span>S</span>
                <span>+</span>
              </div>

              <div>
                <strong>Built for ambitious brands</strong>
                <small>Quality connections. Meaningful growth.</small>
              </div>
            </div>
          </div>

          <div className="market-hero-visual">
            <div className="visual-glow" />

            <div className="floating-chip chip-top">
              <span className="chip-icon green-icon">↗</span>
              <div>
                <strong>Authority matters</strong>
                <small>Find relevant websites</small>
              </div>
            </div>

            <div className="market-preview-card">
              <div className="preview-top">
                <div>
                  <span className="preview-label">PUBLISHER OVERVIEW</span>
                  <h3>Your next opportunity</h3>
                </div>
                <span className="preview-status">
                  <i /> Live
                </span>
              </div>

              <div className="preview-site">
                <div className="preview-logo">DG</div>
                <div className="preview-site-name">
                  <strong>Digital Growth Hub</strong>
                  <span>Business · Marketing</span>
                </div>
                <span className="verified-badge">✓</span>
              </div>

              <div className="preview-stats">
                <div>
                  <span>Domain Authority</span>
                  <strong>72<span>/100</span></strong>
                </div>
                <div>
                  <span>Monthly Traffic</span>
                  <strong>85K</strong>
                </div>
              </div>

              <div className="preview-progress">
                <span />
              </div>

              <div className="preview-bottom">
                <div>
                  <small>Starting from</small>
                  <strong>$180</strong>
                </div>
                <a href="#publisher-list">View Listing ↗</a>
              </div>
            </div>

            <div className="floating-chip chip-bottom">
              <span className="chip-icon orange-icon">✦</span>
              <div>
                <strong>Smarter link building</strong>
                <small>Quality over quantity</small>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFIT STRIP */}
        <section className="market-benefits">
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <strong>Quality-Focused</strong>
              <small>Explore relevant websites</small>
            </div>
          </div>

          <div className="benefit-item">
            <span className="benefit-icon orange-benefit">⌕</span>
            <div>
              <strong>Easy Discovery</strong>
              <small>Find your ideal publisher</small>
            </div>
          </div>

          <div className="benefit-item">
            <span className="benefit-icon">↗</span>
            <div>
              <strong>Growth Oriented</strong>
              <small>Build your digital presence</small>
            </div>
          </div>

          <div className="benefit-item">
            <span className="benefit-icon orange-benefit">◇</span>
            <div>
              <strong>One Marketplace</strong>
              <small>Manage opportunities simply</small>
            </div>
          </div>
        </section>

        {/* LISTINGS */}
        <section className="publisher-section" id="publisher-list">
          <div className="market-section-heading">
            <div>
              <span className="section-kicker">DISCOVER OPPORTUNITIES</span>
              <h2>
                Explore the <span>Marketplace</span>
              </h2>
              <p>
                Find publishers that align with your niche, audience, and
                growth goals.
              </p>
            </div>

            <div className="listing-count">
              <span className="live-dot" />
              {filteredPublishers.length} listings found
            </div>
          </div>

          <div className="market-filter-panel">
            <div className="market-search">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search publishers or niches..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search publishers"
              />
            </div>

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              aria-label="Filter by category"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <select
              value={maxPrice}
              onChange={(event) => setMaxPrice(event.target.value)}
              aria-label="Maximum price"
            >
              <option value="500">Any Budget</option>
              <option value="100">Under $100</option>
              <option value="150">Under $150</option>
              <option value="200">Under $200</option>
              <option value="250">Under $250</option>
            </select>

            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              aria-label="Sort listings"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="authority">Highest Authority</option>
            </select>
          </div>

          <div className="publisher-grid">
            {filteredPublishers.map((publisher, index) => (
              <article
                className="publisher-card"
                key={publisher.name}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="publisher-card-top">
                  <div className="publisher-brand">
                    <div className="publisher-logo">{publisher.initials}</div>
                    <div>
                      <h3>{publisher.name}</h3>
                      <span className="publisher-category">
                        {publisher.category}
                      </span>
                    </div>
                  </div>

                  <span className="publisher-tag">{publisher.tag}</span>
                </div>

                <div className="publisher-description">
                  A niche-relevant publishing opportunity to help expand your
                  brand's reach and online visibility.
                </div>

                <div className="publisher-metrics">
                  <div>
                    <span>Domain Authority</span>
                    <strong>
                      {publisher.da}
                      <small>/100</small>
                    </strong>
                  </div>

                  <div>
                    <span>Monthly Traffic</span>
                    <strong>{publisher.traffic}</strong>
                  </div>
                </div>

                <div className="publisher-card-footer">
                  <div>
                    <small>Starting price</small>
                    <strong>${publisher.price}</strong>
                  </div>

                  <a
                    href={`mailto:hello@veftor.com?subject=${encodeURIComponent(
                      `Marketplace inquiry: ${publisher.name}`
                    )}`}
                    className="publisher-view-btn"
                  >
                    Inquire Now <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredPublishers.length === 0 && (
            <div className="market-empty-state">
              <span>⌕</span>
              <h3>No publishers found</h3>
              <p>Try changing your search, category, or budget.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All Categories");
                  setMaxPrice("500");
                  setSort("recommended");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}

          <p className="market-demo-note">
            * Sample listings for design preview. Replace with verified,
            real publisher inventory before launch.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section className="market-how" id="how-it-works">
          <div className="market-section-heading centered-heading">
            <span className="section-kicker">SIMPLE BY DESIGN</span>
            <h2>
              Your Growth, <span>Three Steps Away</span>
            </h2>
            <p>
              A straightforward way to discover opportunities and get started.
            </p>
          </div>

          <div className="market-steps">
            <article className="market-step">
              <span className="step-number">01</span>
              <div className="step-icon">⌕</div>
              <h3>Discover</h3>
              <p>
                Search publishers by niche, authority, traffic, and budget.
              </p>
            </article>

            <article className="market-step">
              <span className="step-number">02</span>
              <div className="step-icon orange-step-icon">◇</div>
              <h3>Compare</h3>
              <p>
                Explore available options and shortlist relevant opportunities.
              </p>
            </article>

            <article className="market-step">
              <span className="step-number">03</span>
              <div className="step-icon">↗</div>
              <h3>Get Growing</h3>
              <p>
                Contact the team to discuss your requirements and next steps.
              </p>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="market-cta">
          <div className="cta-glow" />
          <div className="market-cta-content">
            <span className="section-kicker">READY TO MOVE FORWARD?</span>
            <h2>
              Let's Build Something
              <br />
              <span>Worth Ranking For.</span>
            </h2>
            <p>
              Tell us about your goals and discover the right opportunities for
              your brand.
            </p>
            <a
              href="mailto:hello@veftor.com?subject=Marketplace%20Inquiry"
              className="market-btn market-btn-green"
            >
              Talk to Our Team <span>↗</span>
            </a>
          </div>
          <div className="cta-decoration">V.</div>
        </section>
      </main>

      <Footer />
    </>
  );
}