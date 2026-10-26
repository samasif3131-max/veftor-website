
"use client";

import { useMemo, useState } from "react";
import "./Marketplace.css";

const publishers = [
  { name: "Growth Journal", url: "growthjournal.example", niche: "Technology", dr: 72, traffic: "85K", price: 180, color: "publisher-blue" },
  { name: "Modern Living", url: "modernliving.example", niche: "Lifestyle", dr: 64, traffic: "52K", price: 125, color: "publisher-green" },
  { name: "Finance Today", url: "financetoday.example", niche: "Finance", dr: 81, traffic: "120K", price: 240, color: "publisher-orange" },
  { name: "Healthy Habits", url: "healthyhabits.example", niche: "Health", dr: 59, traffic: "39K", price: 95, color: "publisher-purple" },
];

const filters = ["All", "Technology", "Lifestyle", "Finance", "Health"];

export default function Marketplace() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const visiblePublishers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return publishers.filter((publisher) => {
      const matchesFilter = filter === "All" || publisher.niche === filter;
      const matchesSearch =
        !query ||
        publisher.name.toLowerCase().includes(query) ||
        publisher.url.toLowerCase().includes(query) ||
        publisher.niche.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <section className="section marketplace-section" id="marketplace">
      <div className="container">
        <div className="section-heading heading-row marketplace-heading">
          <div>
            <span className="section-kicker">THE PUBLISHER NETWORK</span>
            <h2>Quality sites. <span>Clear metrics.</span></h2>
            <p>Explore sample opportunities and compare publisher metrics.</p>
          </div>
          <a className="button button-outline" href="/marketplace">
            Browse marketplace ↗
          </a>
        </div>

        <div className="marketplace-toolbar">
          <label className="marketplace-search">
            <span aria-hidden="true">⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search publisher or niche..."
              aria-label="Search publisher or niche"
            />
          </label>

          <div className="marketplace-filters" aria-label="Filter by niche">
            {filters.map((item) => (
              <button
                className={filter === item ? "filter-chip active" : "filter-chip"}
                key={item}
                onClick={() => setFilter(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="publisher-list">
          {visiblePublishers.map((publisher) => (
            <article className="publisher-card" key={publisher.name}>
              <div className={`publisher-avatar ${publisher.color}`}>
                {publisher.name.charAt(0)}
              </div>

              <div className="publisher-name">
                <strong>{publisher.name}</strong>
                <small>{publisher.url}</small>
                <span className="publisher-niche">{publisher.niche}</span>
              </div>

              <div className="publisher-metric">
                <small>Domain rating</small>
                <strong>{publisher.dr}</strong>
              </div>

              <div className="publisher-metric">
                <small>Monthly traffic</small>
                <strong>{publisher.traffic}</strong>
              </div>

              <div className="publisher-price">
                <small>Sample price</small>
                <strong>${publisher.price}</strong>
              </div>

              <a
                className="button button-primary publisher-view"
                href="/marketplace"
                aria-label={`View ${publisher.name}`}
              >
                View site ↗
              </a>
            </article>
          ))}

          {visiblePublishers.length === 0 && (
            <div className="marketplace-empty">
              No sample publishers match your search.
            </div>
          )}
        </div>

        <p className="marketplace-disclaimer">
          Illustrative demo listings and metrics only — not verified live inventory.
        </p>
      </div>
    </section>
  );
}
