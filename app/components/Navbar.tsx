"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Navbar.css";

const announcements = [
  "One marketplace for smarter link building",
  "Discover trusted publishers for your next campaign",
  "Compare placements and grow your search visibility",
];

export default function Navbar() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % announcements.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const changeSlide = (direction: number) => {
    setSlide(
      (current) =>
        (current + direction + announcements.length) %
        announcements.length
    );
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown((current) => (current === name ? null : name));
  };

  return (
    <header className="vf-header">
      {/* Announcement Slider */}
      <div className="vf-announcement">
        <button
          type="button"
          className="vf-slide-arrow"
          onClick={() => changeSlide(-1)}
          aria-label="Previous announcement"
        >
          ‹
        </button>

        <div className="vf-announcement-content" key={slide}>
          <span className="vf-announcement-dot" />
          <span>{announcements[slide]}</span>
          <span className="vf-announcement-divider" />

          <Link href="/marketplace" onClick={closeMenu}>
            Explore publishers <span>→</span>
          </Link>
        </div>

        <button
          type="button"
          className="vf-slide-arrow"
          onClick={() => changeSlide(1)}
          aria-label="Next announcement"
        >
          ›
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="vf-nav" aria-label="Main navigation">
        {/* Logo */}
        <Link className="vf-logo" href="/" onClick={closeMenu}>
          <span className="vf-logo-mark">V</span>
          <span>
            veftor<span className="vf-logo-period">.</span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="vf-menu-toggle"
          onClick={() => {
            setMenuOpen((current) => !current);
            setOpenDropdown(null);
          }}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <div className={`vf-nav-links ${menuOpen ? "vf-nav-open" : ""}`}>
          {/* Services Dropdown */}
          <div
            className={`vf-nav-dropdown ${
              openDropdown === "services" ? "vf-dropdown-open" : ""
            }`}
          >
            <button
              type="button"
              className="vf-dropdown-trigger"
              aria-expanded={openDropdown === "services"}
              onClick={() => toggleDropdown("services")}
            >
              Services <span className="vf-chevron">⌄</span>
            </button>

            <div className="vf-dropdown-menu">
              <Link href="/services" onClick={closeMenu}>
                All Services
              </Link>

              <Link href="/guest-posting" onClick={closeMenu}>
                Guest Posting
              </Link>

              <Link href="/link-building" onClick={closeMenu}>
                Link Building
              </Link>
<Link href="/seo-services" onClick={closeMenu}>
  SEO Services
</Link>

              <Link href="/publisher-marketplace">
  Publisher Marketplace
</Link>
            </div>
          </div>

          {/* FAQs */}
          <Link href="/faqs" onClick={closeMenu}>
            FAQs
          </Link>

          {/* Podcasts / Videos */}
          <Link href="/podcasts-videos" onClick={closeMenu}>
            Podcasts/Videos
          </Link>

          {/* Marketplace Dropdown */}
          <div
            className={`vf-nav-dropdown ${
              openDropdown === "marketplace" ? "vf-dropdown-open" : ""
            }`}
          >
            <button
              type="button"
              className="vf-dropdown-trigger"
              aria-expanded={openDropdown === "marketplace"}
              onClick={() => toggleDropdown("marketplace")}
            >
              Marketplace <span className="vf-chevron">⌄</span>
            </button>

            <div className="vf-dropdown-menu">
              <Link href="/marketplace" onClick={closeMenu}>
                Explore Marketplace
              </Link>

              <Link href="/for-advertiser">
  For Advertisers
</Link>

              <Link href="/for-publisher">For Publishers</Link>

              <Link href="/for-agencies">For Agencies</Link>
            </div>
          </div>

          {/* Contact */}
          <Link href="/contact" onClick={closeMenu}>
            Contact Us
          </Link>

          {/* Mobile Actions */}
          <div className="vf-mobile-actions">
            <Link href="/login" className="vf-login" onClick={closeMenu}>
              Login
            </Link>

            <Link
              href="/#get-started"
              className="vf-get-started"
              onClick={closeMenu}
            >
              Get Started <span>→</span>
            </Link>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="vf-nav-actions">
          <Link href="/login" className="vf-login" onClick={closeMenu}>
            Login
          </Link>

          <Link
            href="/get-started"
            className="vf-get-started"
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}