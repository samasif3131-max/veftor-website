
"use client";

import { useEffect, useState, type FormEvent } from "react";
import "./PromoPopups.css";

export default function PromoPopups() {
  const [activePopup, setActivePopup] = useState<"audit" | "offer" | null>(
    null
  );
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(2);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActivePopup("audit");
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  function closeAuditPopup() {
    setActivePopup("offer");
  }

  function closeOfferPopup() {
    setActivePopup(null);
  }

  function handleAuditSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!domain.trim() || !email.trim()) {
      setFormMessage("Please enter your website domain and email address.");
      return;
    }

    // Form ko apne backend/API se connect karna hoga
    // taake submitted details aap tak pohanch sakein.
    setFormMessage(
      "Thanks! Your details are ready. Connect this form to your backend to receive submissions."
    );
  }

  const packages = [
    { amount: "$1,500", bonus: "5%", extra: "+$75", days: "30 days", color: "gold" },
    { amount: "$3,000", bonus: "10%", extra: "+$300", days: "30 days", color: "purple" },
    { amount: "$6,000", bonus: "20%", extra: "+$1,200", days: "45 days", color: "green" },
    { amount: "$10,000", bonus: "30%", extra: "+$3,000", days: "60 days", color: "pink" },
  ];

  if (activePopup === null) return null;

  return (
    <div className="vef-popups-root">
      <button
        className="vef-popup-backdrop"
        aria-label="Close popup"
        onClick={
          activePopup === "audit" ? closeAuditPopup : closeOfferPopup
        }
      />

      {activePopup === "audit" && (
        <section
          className="vef-audit-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="vef-audit-title"
        >
          <button
            className="vef-modal-close"
            type="button"
            onClick={closeAuditPopup}
            aria-label="Close audit popup"
          >
            ×
          </button>

          <div className="vef-audit-heading">
            <span className="vef-audit-label">
              <span>✧</span> FREE · NO CREDIT CARD
            </span>

            <h2 id="vef-audit-title">
              Find what’s holding
              <br />
              your growth back
            </h2>

            <p>
              Get a free website review and discover opportunities to improve
              your digital performance.
            </p>
          </div>

          <form className="vef-audit-form" onSubmit={handleAuditSubmit}>
            <label htmlFor="vef-domain">
              Website domain <span>*</span>
            </label>
            <input
              id="vef-domain"
              type="text"
              placeholder="example.com"
              value={domain}
              onChange={(event) => setDomain(event.target.value)}
              required
            />

            <label htmlFor="vef-email">
              Email address <span>*</span>
            </label>
            <input
              id="vef-email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="vef-whatsapp">
              WhatsApp number <small>(optional)</small>
            </label>
            <input
              id="vef-whatsapp"
              type="tel"
              placeholder="+92 300 1234567"
              value={whatsapp}
              onChange={(event) => setWhatsapp(event.target.value)}
            />

            <button className="vef-audit-submit" type="submit">
              Get my free audit <span>↗</span>
            </button>

            {formMessage && (
              <p className="vef-form-message" role="status">
                {formMessage}
              </p>
            )}

            <p className="vef-privacy-note">
              Your information will be handled responsibly.
            </p>
          </form>
        </section>
      )}

      {activePopup === "offer" && (
        <section
          className="vef-offer-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="vef-offer-title"
        >
          <button
            className="vef-modal-close vef-offer-close"
            type="button"
            onClick={closeOfferPopup}
            aria-label="Close offer popup"
          >
            ×
          </button>

          <div className="vef-offer-heading">
            <div className="vef-offer-crown" aria-hidden="true">
              ♛
            </div>

            <div className="vef-offer-heading-copy">
              <span className="vef-offer-label">
                ✦ VEFTOR SPECIAL OFFER
              </span>
              <h2 id="vef-offer-title">
                Grow Further, <span>Get More.</span> ↗
              </h2>
            </div>
          </div>

          <div className="vef-offer-content">
            <div className="vef-offer-intro">
              <h3>
                <span>✦</span> Explore Our Packages
              </h3>
              <p>
                Choose an option that fits your goals and explore the
                opportunities available to you.
              </p>
            </div>

            <div className="vef-package-grid">
              {packages.map((item, index) => (
                <button
                  type="button"
                  key={item.amount}
                  className={`vef-package-card vef-package-${item.color} ${
                    selectedPackage === index ? "is-selected" : ""
                  }`}
                  onClick={() => setSelectedPackage(index)}
                  aria-pressed={selectedPackage === index}
                >
                  {index === 3 && (
                    <span className="vef-package-best">FEATURED</span>
                  )}

                  <span className="vef-package-add">PACKAGE</span>
                  <strong className="vef-package-amount">
                    {item.amount}
                  </strong>

                  <span className="vef-package-bonus">
                    <strong>{item.bonus}</strong>
                    <small>BONUS</small>
                  </span>

                  <span className="vef-package-extra">
                    + Get {item.extra}
                  </span>

                  <span className="vef-package-validity">
                    ◷ {item.days} validity
                  </span>
                </button>
              ))}
            </div>

            <button
              className="vef-offer-cta"
              type="button"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              ✦ Explore This Offer <span>→</span>
            </button>

            <p className="vef-offer-disclaimer">
              Offer details and eligibility are subject to confirmation.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
