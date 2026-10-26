"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useMemo, useState } from "react";
import "./PublisherMarketplace.css";

type Publisher = {
  id: number;
  domain: string;
  name: string;
  category: string;
  country: string;
  price: number;
  dr: number;
  da: number;
  traffic: number;
  backlinks: string;
  verified: boolean;
  description: string;
  featured?: boolean;
};

const PUBLISHERS: Publisher[] = [
  {
    id: 1,
    domain: "growthjournal.com",
    name: "Growth Journal",
    category: "Business",
    country: "United States",
    price: 85,
    dr: 78,
    da: 72,
    traffic: 48200,
    backlinks: "18.4K",
    verified: true,
    featured: true,
    description:
      "Business growth, entrepreneurship, marketing and startup insights.",
  },
  {
    id: 2,
    domain: "wellnesspath.net",
    name: "Wellness Path",
    category: "Health",
    country: "United Kingdom",
    price: 62,
    dr: 66,
    da: 61,
    traffic: 31600,
    backlinks: "9.2K",
    verified: true,
    description:
      "Health, wellness, fitness and balanced lifestyle content.",
  },
  {
    id: 3,
    domain: "techscope.io",
    name: "TechScope",
    category: "Technology",
    country: "United States",
    price: 120,
    dr: 84,
    da: 79,
    traffic: 79500,
    backlinks: "32.8K",
    verified: true,
    featured: true,
    description:
      "Technology, software, artificial intelligence and digital innovation.",
  },
  {
    id: 4,
    domain: "traveldiaries.co",
    name: "Travel Diaries",
    category: "Travel",
    country: "Australia",
    price: 55,
    dr: 59,
    da: 56,
    traffic: 24800,
    backlinks: "7.6K",
    verified: false,
    description:
      "Travel guides, destination features and practical travel advice.",
  },
  {
    id: 5,
    domain: "dailyhomeideas.com",
    name: "Daily Home Ideas",
    category: "Lifestyle",
    country: "Canada",
    price: 48,
    dr: 57,
    da: 53,
    traffic: 19200,
    backlinks: "6.1K",
    verified: true,
    description:
      "Home improvement, interior design and everyday lifestyle inspiration.",
  },
  {
    id: 6,
    domain: "financeledger.net",
    name: "Finance Ledger",
    category: "Finance",
    country: "United States",
    price: 145,
    dr: 81,
    da: 77,
    traffic: 63200,
    backlinks: "26.3K",
    verified: true,
    featured: true,
    description:
      "Personal finance, business finance and financial education.",
  },
  {
    id: 7,
    domain: "learnsmart.org",
    name: "Learn Smart",
    category: "Education",
    country: "United Kingdom",
    price: 42,
    dr: 54,
    da: 51,
    traffic: 16500,
    backlinks: "4.8K",
    verified: false,
    description:
      "Learning resources, career development and educational content.",
  },
  {
    id: 8,
    domain: "styleandliving.com",
    name: "Style & Living",
    category: "Lifestyle",
    country: "United States",
    price: 73,
    dr: 69,
    da: 64,
    traffic: 35400,
    backlinks: "11.7K",
    verified: true,
    description:
      "Style, beauty, home living and contemporary lifestyle articles.",
  },
  {
    id: 9,
    domain: "digitalcommerce.io",
    name: "Digital Commerce",
    category: "Business",
    country: "Germany",
    price: 98,
    dr: 74,
    da: 70,
    traffic: 41800,
    backlinks: "15.5K",
    verified: true,
    description:
      "E-commerce, digital business, online retail and marketing.",
  },
];

const CATEGORIES = [
  "All categories",
  "Business",
  "Technology",
  "Health",
  "Finance",
  "Lifestyle",
  "Travel",
  "Education",
];

const money = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

const compactNumber = (number: number) =>
  new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(number);

function getInitials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function PublisherMarketplacePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(200);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const [selectedPublisher, setSelectedPublisher] =
    useState<Publisher | null>(null);

  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Browser-only initialization prevents unstable values during prerender.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(
        "veftor-marketplace-saved"
      );

      if (stored) {
        const parsed: unknown = JSON.parse(stored);

        if (
          Array.isArray(parsed) &&
          parsed.every((item) => typeof item === "number")
        ) {
          setSavedIds(parsed);
        }
      }
    } catch {
      // Continue normally if local storage is unavailable.
    }
  }, []);

  useEffect(() => {
    if (!toast) return;

    const timeout = window.setTimeout(() => {
      setToast("");
    }, 3000);

    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    if (!selectedPublisher) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedPublisher(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPublisher]);

  const filteredPublishers = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = PUBLISHERS.filter((publisher) => {
      const matchesSearch =
        !query ||
        publisher.domain.toLowerCase().includes(query) ||
        publisher.name.toLowerCase().includes(query) ||
        publisher.category.toLowerCase().includes(query) ||
        publisher.country.toLowerCase().includes(query) ||
        publisher.description.toLowerCase().includes(query);

      const matchesCategory =
        category === "All categories" ||
        publisher.category === category;

      const matchesPrice = publisher.price <= maxPrice;

      const matchesVerified =
        !verifiedOnly || publisher.verified;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesVerified
      );
    });

    switch (sort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "traffic":
        filtered.sort((a, b) => b.traffic - a.traffic);
        break;

      case "dr":
        filtered.sort((a, b) => b.dr - a.dr);
        break;

      case "da":
        filtered.sort((a, b) => b.da - a.da);
        break;

      case "featured":
      default:
        filtered.sort(
          (a, b) =>
            Number(Boolean(b.featured)) -
            Number(Boolean(a.featured))
        );
        break;
    }

    return filtered;
  }, [search, category, maxPrice, verifiedOnly, sort]);

  function toggleSaved(id: number) {
    const nextSaved = savedIds.includes(id)
      ? savedIds.filter((savedId) => savedId !== id)
      : [...savedIds, id];

    setSavedIds(nextSaved);

    try {
      window.localStorage.setItem(
        "veftor-marketplace-saved",
        JSON.stringify(nextSaved)
      );
    } catch {
      // Saving is still reflected in the current session.
    }

    setToast(
      nextSaved.includes(id)
        ? "Publisher added to your shortlist."
        : "Publisher removed from your shortlist."
    );
  }

  function resetFilters() {
    setSearch("");
    setCategory("All categories");
    setSort("featured");
    setMaxPrice(200);
    setVerifiedOnly(false);
  }

  function openInquiry(publisher: Publisher) {
    setSelectedPublisher(publisher);
    setFormSubmitted(false);
    setInquiryMessage(
      `Hello, I would like to enquire about a placement on ${publisher.domain}.`
    );
  }

  function submitInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedPublisher) return;

    /*
     * Demo-only behavior:
     * This validates the form but does not send an email.
     * Connect an API route or backend to submit real inquiries.
     */
    setFormSubmitted(true);
    setToast("Demo inquiry validated successfully.");
  }

  return (
    <>
      <Navbar />

      <main className="publisher-marketplace">
        <section className="pm-hero">
          <div className="pm-hero-orb pm-hero-orb-one" />
          <div className="pm-hero-orb pm-hero-orb-two" />

          <div className="pm-container pm-hero-layout">
            <div className="pm-hero-copy">
              <div className="pm-eyebrow">
                <span className="pm-eyebrow-dot" />
                THE VEFTOR PUBLISHER MARKETPLACE
              </div>

              <h1>
                Find the right
                <br />
                <span>publisher.</span>
                <br />
                Grow with purpose.
              </h1>

              <p className="pm-hero-description">
                Discover publisher opportunities, compare domain
                metrics and build a smarter shortlist for your next
                SEO campaign.
              </p>

              <div className="pm-hero-actions">
                <a
                  href="#pm-directory"
                  className="pm-button pm-button-primary"
                >
                  Explore publishers <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="#pm-how-it-works"
                  className="pm-button pm-button-outline"
                >
                  How it works
                </a>
              </div>

              <div className="pm-hero-trust">
                <span className="pm-trust-check">✓</span>
                Compare metrics
                <span className="pm-trust-divider">·</span>
                Discover relevant sites
                <span className="pm-trust-divider">·</span>
                Shortlist opportunities
              </div>
            </div>

            <div className="pm-preview">
              <div className="pm-preview-top">
                <div>
                  <span className="pm-preview-kicker">
                    YOUR CAMPAIGN WORKSPACE
                  </span>
                  <h2>Publisher overview</h2>
                </div>

                <span className="pm-live-pill">
                  <span />
                  Demo
                </span>
              </div>

              <div className="pm-preview-search">
                <span aria-hidden="true">⌕</span>
                <span>Search publishers, niches...</span>
                <kbd>⌘ K</kbd>
              </div>

              <div className="pm-preview-metrics">
                <div className="pm-preview-metric">
                  <span>Listed websites</span>
                  <strong>09</strong>
                  <small>Sample directory</small>
                </div>

                <div className="pm-preview-metric pm-preview-metric-peach">
                  <span>Price range</span>
                  <strong>$42–$145</strong>
                  <small>Illustrative pricing</small>
                </div>
              </div>

              <div className="pm-preview-heading">
                <strong>Recommended publishers</strong>
                <span>Sample data</span>
              </div>

              {PUBLISHERS.slice(0, 3).map((publisher) => (
                <div className="pm-preview-row" key={publisher.id}>
                  <div className="pm-avatar">
                    {getInitials(publisher.name)}
                  </div>

                  <div className="pm-preview-row-info">
                    <strong>{publisher.domain}</strong>
                    <span>{publisher.category}</span>
                  </div>

                  <div className="pm-preview-row-price">
                    <strong>{money(publisher.price)}</strong>
                    <span>DR {publisher.dr}</span>
                  </div>
                </div>
              ))}

              <div className="pm-preview-footer">
                <span className="pm-footer-check">✓</span>
                Compare before you order
              </div>

              <div className="pm-float-note pm-float-note-top">
                <span className="pm-float-icon">↗</span>
                <span>
                  <strong>Quality first</strong>
                  <small>Compare publisher metrics</small>
                </span>
              </div>

              <div className="pm-float-note pm-float-note-bottom">
                <span className="pm-float-icon pm-float-icon-green">
                  ✓
                </span>
                <span>
                  <strong>Smarter decisions</strong>
                  <small>Build your shortlist</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="pm-stat-strip">
          <div className="pm-container pm-stat-grid">
            <div className="pm-stat-item">
              <span className="pm-stat-icon">⌕</span>
              <div>
                <strong>Discover</strong>
                <span>Search by niche and domain</span>
              </div>
            </div>

            <div className="pm-stat-item">
              <span className="pm-stat-icon pm-stat-icon-green">
                ↗
              </span>
              <div>
                <strong>Compare</strong>
                <span>Review sample SEO metrics</span>
              </div>
            </div>

            <div className="pm-stat-item">
              <span className="pm-stat-icon pm-stat-icon-peach">
                ♡
              </span>
              <div>
                <strong>Shortlist</strong>
                <span>Save your preferred websites</span>
              </div>
            </div>
          </div>
        </section>

        <section className="pm-directory" id="pm-directory">
          <div className="pm-container">
            <div className="pm-section-heading">
              <div>
                <span className="pm-section-kicker">
                  <span>✳</span> FIND YOUR NEXT OPPORTUNITY
                </span>

                <h2>Explore the marketplace.</h2>

                <p>
                  Browse publisher profiles and compare the details
                  that matter to your campaign.
                </p>
              </div>

              <div className="pm-results-summary">
                <strong>
                  {filteredPublishers.length.toString().padStart(2, "0")}
                </strong>
                <span>matching publishers</span>
              </div>
            </div>

            <div className="pm-toolbar">
              <label className="pm-search-box">
                <span aria-hidden="true">⌕</span>

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search domains, niches or countries..."
                  aria-label="Search publishers"
                />

                {search && (
                  <button
                    type="button"
                    className="pm-clear-search"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </label>

              <button
                type="button"
                className="pm-filter-toggle"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                aria-expanded={mobileFiltersOpen}
              >
                <span aria-hidden="true">☷</span>
                Filters
              </button>

              <label className="pm-sort-control">
                <span>Sort by</span>

                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  aria-label="Sort publishers"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: low to high</option>
                  <option value="price-high">Price: high to low</option>
                  <option value="traffic">Highest traffic</option>
                  <option value="dr">Highest domain rating</option>
                  <option value="da">Highest domain authority</option>
                </select>
              </label>
            </div>

            <div className="pm-directory-layout">
              <aside
                className={`pm-filters ${
                  mobileFiltersOpen ? "pm-filters-open" : ""
                }`}
              >
                <div className="pm-filter-heading">
                  <h3>Refine results</h3>

                  <button type="button" onClick={resetFilters}>
                    Reset
                  </button>
                </div>

                <div className="pm-filter-group">
                  <h4>Category</h4>

                  <div className="pm-category-list">
                    {CATEGORIES.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className={
                          category === item
                            ? "pm-category-option pm-category-active"
                            : "pm-category-option"
                        }
                        onClick={() => setCategory(item)}
                      >
                        <span>{item}</span>

                        {category === item && (
                          <span className="pm-category-check">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pm-filter-group">
                  <div className="pm-filter-label-row">
                    <h4>Maximum price</h4>
                    <strong>{money(maxPrice)}</strong>
                  </div>

                  <input
                    className="pm-price-range"
                    type="range"
                    min="40"
                    max="200"
                    step="5"
                    value={maxPrice}
                    onChange={(event) =>
                      setMaxPrice(Number(event.target.value))
                    }
                    aria-label="Maximum publisher price"
                  />

                  <div className="pm-range-labels">
                    <span>$40</span>
                    <span>$200+</span>
                  </div>
                </div>

                <div className="pm-filter-group">
                  <h4>Publisher status</h4>

                  <label className="pm-checkbox-label">
                    <input
                      type="checkbox"
                      checked={verifiedOnly}
                      onChange={(event) =>
                        setVerifiedOnly(event.target.checked)
                      }
                    />

                    <span className="pm-custom-checkbox" />

                    <span>Verified publishers only</span>
                  </label>
                </div>

                <div className="pm-filter-note">
                  <span>ⓘ</span>
                  <p>
                    Publisher prices and metrics on this page are
                    illustrative demo data, not verified live results.
                  </p>
                </div>
              </aside>

              <div className="pm-results">
                <div className="pm-results-topline">
                  <div>
                    <strong>
                      {category === "All categories"
                        ? "All publishers"
                        : category}
                    </strong>

                    <span>{filteredPublishers.length} results</span>
                  </div>

                  {savedIds.length > 0 && (
                    <span className="pm-saved-count">
                      ♡ {savedIds.length} saved
                    </span>
                  )}
                </div>

                {filteredPublishers.length > 0 ? (
                  <div className="pm-publisher-grid">
                    {filteredPublishers.map((publisher, index) => {
                      const isSaved = savedIds.includes(publisher.id);

                      return (
                        <article
                          className="pm-publisher-card"
                          key={publisher.id}
                          style={
                            {
                              "--pm-card-index": index,
                            } as React.CSSProperties
                          }
                        >
                          <div className="pm-card-topline">
                            <div className="pm-publisher-identity">
                              <div className="pm-domain-avatar">
                                {getInitials(publisher.name)}
                              </div>

                              <div className="pm-domain-info">
                                <h3>{publisher.domain}</h3>
                                <span>{publisher.name}</span>
                              </div>
                            </div>

                            <button
                              type="button"
                              className={
                                isSaved
                                  ? "pm-save-button pm-save-active"
                                  : "pm-save-button"
                              }
                              onClick={() => toggleSaved(publisher.id)}
                              aria-label={
                                isSaved
                                  ? "Remove from shortlist"
                                  : "Save to shortlist"
                              }
                              title={
                                isSaved
                                  ? "Remove from shortlist"
                                  : "Save to shortlist"
                              }
                            >
                              {isSaved ? "♥" : "♡"}
                            </button>
                          </div>

                          <div className="pm-card-badges">
                            <span className="pm-category-badge">
                              {publisher.category}
                            </span>

                            {publisher.verified && (
                              <span className="pm-verified-badge">
                                <span>✓</span> Verified
                              </span>
                            )}

                            {publisher.featured && (
                              <span className="pm-featured-badge">
                                Featured
                              </span>
                            )}
                          </div>

                          <p className="pm-card-description">
                            {publisher.description}
                          </p>

                          <div className="pm-metrics-grid">
                            <div className="pm-metric">
                              <span>Domain rating</span>
                              <strong>{publisher.dr}</strong>
                              <div className="pm-metric-track">
                                <span
                                  style={{ width: `${publisher.dr}%` }}
                                />
                              </div>
                            </div>

                            <div className="pm-metric">
                              <span>Domain authority</span>
                              <strong>{publisher.da}</strong>
                              <div className="pm-metric-track pm-metric-track-peach">
                                <span
                                  style={{ width: `${publisher.da}%` }}
                                />
                              </div>
                            </div>

                            <div className="pm-metric">
                              <span>Monthly traffic</span>
                              <strong>
                                {compactNumber(publisher.traffic)}
                              </strong>
                            </div>

                            <div className="pm-metric">
                              <span>Backlinks</span>
                              <strong>{publisher.backlinks}</strong>
                            </div>
                          </div>

                          <div className="pm-card-bottom">
                            <div className="pm-price">
                              <strong>{money(publisher.price)}</strong>
                              <span>per placement · demo</span>
                            </div>

                            <button
                              type="button"
                              className="pm-card-action"
                              onClick={() => openInquiry(publisher)}
                            >
                              View details <span>↗</span>
                            </button>
                          </div>

                          <div className="pm-country-line">
                            <span aria-hidden="true">◎</span>
                            {publisher.country}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                ) : (
                  <div className="pm-empty-state">
                    <div className="pm-empty-icon">⌕</div>
                    <h3>No publishers found</h3>
                    <p>
                      Try another search, select a different category,
                      or increase your maximum price.
                    </p>

                    <button
                      type="button"
                      className="pm-button pm-button-primary"
                      onClick={resetFilters}
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="pm-how" id="pm-how-it-works">
          <div className="pm-container">
            <div className="pm-how-heading">
              <span className="pm-section-kicker">
                <span>✳</span> A SIMPLER WORKFLOW
              </span>

              <h2>From discovery to a smarter decision.</h2>

              <p>
                Keep your publisher research organized and your
                campaign planning clear.
              </p>
            </div>

            <div className="pm-steps">
              <article className="pm-step">
                <div className="pm-step-number">01</div>
                <div className="pm-step-icon">⌕</div>
                <h3>Discover</h3>
                <p>
                  Search by domain, niche or country to find publishers
                  that match your campaign.
                </p>
              </article>

              <article className="pm-step">
                <div className="pm-step-number">02</div>
                <div className="pm-step-icon pm-step-icon-peach">↗</div>
                <h3>Compare</h3>
                <p>
                  Review pricing, domain metrics and estimated traffic
                  before deciding.
                </p>
              </article>

              <article className="pm-step">
                <div className="pm-step-number">03</div>
                <div className="pm-step-icon pm-step-icon-green">♡</div>
                <h3>Shortlist</h3>
                <p>
                  Save interesting opportunities locally and return
                  to them during your session or later.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="pm-final-cta">
          <div className="pm-container pm-cta-inner">
            <div>
              <span className="pm-section-kicker">
                MADE FOR MODERN SEO TEAMS
              </span>

              <h2>Ready to find your next opportunity?</h2>

              <p>
                Explore publishers, compare sample metrics and build
                your shortlist with Veftor.
              </p>
            </div>

            <a
              href="#pm-directory"
              className="pm-button pm-button-dark"
            >
              Explore marketplace <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {selectedPublisher && (
          <div
            className="pm-modal-backdrop"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedPublisher(null);
              }
            }}
          >
            <section
              className="pm-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="pm-modal-title"
            >
              <div className="pm-modal-header">
                <div>
                  <span className="pm-section-kicker">
                    PUBLISHER DETAILS
                  </span>

                  <h2 id="pm-modal-title">
                    {selectedPublisher.domain}
                  </h2>
                </div>

                <button
                  type="button"
                  className="pm-modal-close"
                  onClick={() => setSelectedPublisher(null)}
                  aria-label="Close publisher details"
                >
                  ×
                </button>
              </div>

              <div className="pm-modal-summary">
                <div className="pm-domain-avatar pm-domain-avatar-large">
                  {getInitials(selectedPublisher.name)}
                </div>

                <div>
                  <strong>{selectedPublisher.name}</strong>

                  <span>
                    {selectedPublisher.category} · {selectedPublisher.country}
                  </span>

                  <div className="pm-card-badges">
                    {selectedPublisher.verified && (
                      <span className="pm-verified-badge">
                        <span>✓</span> Verified
                      </span>
                    )}

                    <span className="pm-category-badge">
                      Demo listing
                    </span>
                  </div>
                </div>
              </div>

              <p className="pm-modal-description">
                {selectedPublisher.description}
              </p>

              <div className="pm-modal-stats">
                <div>
                  <span>Domain rating</span>
                  <strong>{selectedPublisher.dr}</strong>
                </div>

                <div>
                  <span>Domain authority</span>
                  <strong>{selectedPublisher.da}</strong>
                </div>

                <div>
                  <span>Monthly traffic</span>
                  <strong>
                    {compactNumber(selectedPublisher.traffic)}
                  </strong>
                </div>

                <div>
                  <span>Placement price</span>
                  <strong>{money(selectedPublisher.price)}</strong>
                </div>
              </div>

              <div className="pm-demo-notice">
                <strong>Important information</strong>

                <p>
                  These figures are sample data for the interface
                  preview. Publisher availability, traffic and domain
                  metrics have not been verified live.
                </p>
              </div>

              {!formSubmitted ? (
                <form
                  className="pm-inquiry-form"
                  onSubmit={submitInquiry}
                >
                  <h3>Placement inquiry</h3>

                  <p>
                    Fill out the form to preview the inquiry workflow.
                  </p>

                  <label>
                    Your name

                    <input
                      type="text"
                      value={inquiryName}
                      onChange={(event) =>
                        setInquiryName(event.target.value)
                      }
                      placeholder="Enter your name"
                      required
                      minLength={2}
                      maxLength={100}
                    />
                  </label>

                  <label>
                    Email address

                    <input
                      type="email"
                      value={inquiryEmail}
                      onChange={(event) =>
                        setInquiryEmail(event.target.value)
                      }
                      placeholder="you@example.com"
                      required
                      maxLength={254}
                    />
                  </label>

                  <label>
                    Message

                    <textarea
                      value={inquiryMessage}
                      onChange={(event) =>
                        setInquiryMessage(event.target.value)
                      }
                      rows={3}
                      required
                      minLength={5}
                      maxLength={2000}
                    />
                  </label>

                  <button
                    type="submit"
                    className="pm-button pm-button-primary pm-submit-button"
                  >
                    Submit demo inquiry <span>↗</span>
                  </button>

                  <small className="pm-form-footnote">
                    Demo only: this form does not send an email or create
                    a real order.
                  </small>
                </form>
              ) : (
                <div className="pm-success-panel">
                  <div className="pm-success-icon">✓</div>

                  <h3>Demo inquiry validated</h3>

                  <p>
                    The form passed browser-side validation for{" "}
                    <strong>{selectedPublisher.domain}</strong>.
                    No email was sent and no real order was created.
                  </p>

                  <button
                    type="button"
                    className="pm-button pm-button-primary"
                    onClick={() => setSelectedPublisher(null)}
                  >
                    Back to marketplace
                  </button>
                </div>
              )}
            </section>
          </div>
        )}

        {toast && (
          <div className="pm-toast" role="status" aria-live="polite">
            <span>✓</span>
            {toast}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}