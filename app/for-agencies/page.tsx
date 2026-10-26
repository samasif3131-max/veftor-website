
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import Link from "next/link";
import "./Agencies.css";

const benefits = [
  {
    number: "01",
    icon: "↗",
    title: "Scale Your Campaigns",
    description:
      "Explore advertising opportunities that help your agency expand campaign reach and work toward stronger outcomes for your clients.",
    color: "orange",
  },
  {
    number: "02",
    icon: "◎",
    title: "Reach Relevant Audiences",
    description:
      "Discover opportunities to connect your clients with audiences that align with their campaign objectives and target markets.",
    color: "green",
  },
  {
    number: "03",
    icon: "▥",
    title: "Make Informed Decisions",
    description:
      "Use available campaign insights to evaluate performance, identify opportunities, and guide your next strategic decisions.",
    color: "orange",
  },
  {
    number: "04",
    icon: "✳",
    title: "Build Client Confidence",
    description:
      "Develop thoughtful advertising strategies around your clients' goals, audience needs, and long-term business objectives.",
    color: "green",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us about your agency",
    description:
      "Share your agency's focus, the clients you serve, and the campaign objectives you want to achieve.",
  },
  {
    number: "02",
    title: "Explore opportunities",
    description:
      "Connect with the Veftor team to discuss suitable advertising opportunities for your clients.",
  },
  {
    number: "03",
    title: "Move campaigns forward",
    description:
      "Work toward your campaign objectives, review available performance insights, and identify opportunities to improve.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Campaign opportunities",
    description:
      "Explore advertising options that align with your clients' objectives, industries, and target audiences.",
  },
  {
    number: "02",
    title: "Performance-focused planning",
    description:
      "Use available campaign insights to evaluate progress and make more informed marketing decisions.",
  },
  {
    number: "03",
    title: "A collaborative approach",
    description:
      "Discuss your agency's needs with the Veftor team and explore opportunities suited to your goals.",
  },
];

const faqs = [
  {
    question: "Who can work with Veftor as an agency?",
    answer:
      "Digital marketing agencies, media agencies, advertising agencies, and other eligible marketing partners can contact Veftor to explore potential collaboration opportunities. Suitability depends on the agency's services, clients, and campaign requirements.",
  },
  {
    question: "What types of campaigns can agencies explore?",
    answer:
      "Agencies can discuss their clients' advertising objectives, target audiences, industries, and campaign requirements with the Veftor team to understand which opportunities may be suitable.",
  },
  {
    question: "Can agencies manage campaigns for multiple clients?",
    answer:
      "If you manage advertising for multiple clients, share your requirements with the Veftor team. They can explain the available options and whether the current services support your agency's workflow.",
  },
  {
    question: "Can we track campaign performance?",
    answer:
      "Reporting and performance insights depend on the tools and services available for your account or campaign. Contact the Veftor team to confirm which reporting features and metrics are currently supported.",
  },
  {
    question: "Is there a minimum campaign budget?",
    answer:
      "Budget requirements may vary depending on the campaign, advertising opportunity, and service. Contact the Veftor team to discuss your budget and campaign objectives.",
  },
  {
    question: "How can our agency get started?",
    answer:
      "Visit the contact page and share your agency name, website, services, and campaign goals. The Veftor team can help you understand the next steps and available collaboration opportunities.",
  },
];

export default function ForAgenciesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HEADER / NAVBAR */}
      <Navbar />

      <main className="agencies-page">
        {/* HERO */}
        <section className="agencies-hero">
          <div className="agencies-hero-glow agencies-glow-orange" />
          <div className="agencies-hero-glow agencies-glow-green" />

          <div className="agencies-container agencies-hero-grid">
            <div className="agencies-hero-copy">
              <div className="agencies-eyebrow">
                <span className="agencies-status-dot" />
                FOR AGENCIES
              </div>

              <h1>
                Your strategy.
                <br />
                Your clients.
                <br />
                <span className="agencies-gradient-text">
                  More possibilities.
                </span>
              </h1>

              <p className="agencies-hero-description">
                Great campaigns start with the right opportunities. Discover a
                smarter approach to digital advertising with Veftor, built
                around your clients, your strategy, and your campaign goals.
              </p>

              <div className="agencies-hero-actions">
                <a
                  href="#agencies-contact"
                  className="agencies-btn agencies-btn-primary"
                >
                  Partner With Veftor <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="#agencies-benefits"
                  className="agencies-btn agencies-btn-secondary"
                >
                  Explore Benefits <span aria-hidden="true">↓</span>
                </a>
              </div>

              <div className="agencies-hero-note">
                <span className="agencies-note-check">✓</span>
                <span>Built around your agency's goals.</span>
              </div>
            </div>

            {/* DECORATIVE CAMPAIGN DASHBOARD */}
            <div className="agencies-hero-visual">
              <div className="agencies-orbit agencies-orbit-one" />
              <div className="agencies-orbit agencies-orbit-two" />

              <div className="agencies-dashboard">
                <div className="agencies-dashboard-top">
                  <div className="agencies-dashboard-brand">
                    <span className="agencies-mini-logo">V</span>
                    <span>Campaign overview</span>
                  </div>

                  <span className="agencies-live-pill">
                    <span /> Strategy
                  </span>
                </div>

                <div className="agencies-dashboard-intro">
                  <span>Your campaign potential</span>
                  <h3>Built for impact.</h3>
                  <p>Every strategy starts with a goal.</p>
                </div>

                <div className="agencies-dashboard-metrics">
                  <div className="agencies-metric-card">
                    <span>Audience</span>
                    <strong>01</strong>
                    <small>Reach the right people</small>

                    <div className="agencies-metric-line agencies-line-orange">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>

                  <div className="agencies-metric-card">
                    <span>Strategy</span>
                    <strong>02</strong>
                    <small>Plan with purpose</small>

                    <div className="agencies-metric-line agencies-line-green">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>

                <div className="agencies-dashboard-bottom">
                  <div className="agencies-dashboard-icon">↗</div>

                  <div>
                    <strong>New opportunities</strong>
                    <p>Move your campaign strategy forward.</p>
                  </div>

                  <span className="agencies-bottom-arrow">→</span>
                </div>
              </div>

              <div className="agencies-float-card agencies-float-top">
                <span className="agencies-float-icon agencies-float-orange">
                  ↗
                </span>

                <div>
                  <strong>Strategy meets opportunity</strong>
                  <small>Built around your goals</small>
                </div>
              </div>

              <div className="agencies-float-card agencies-float-bottom">
                <span className="agencies-float-icon agencies-float-green">
                  ✓
                </span>

                <div>
                  <strong>Client focused</strong>
                  <small>Your objectives come first</small>
                </div>
              </div>
            </div>
          </div>

          <a href="#agencies-benefits" className="agencies-scroll-cue">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        {/* VALUE STRIP */}
        <section
          className="agencies-value-strip"
          aria-label="Veftor agency values"
        >
          <div className="agencies-container agencies-value-grid">
            <div>
              <span className="agencies-value-icon">↗</span>
              <span>Campaign opportunities</span>
            </div>

            <div>
              <span className="agencies-value-icon">◎</span>
              <span>Audience focused</span>
            </div>

            <div>
              <span className="agencies-value-icon">▥</span>
              <span>Performance insights</span>
            </div>

            <div>
              <span className="agencies-value-icon">✳</span>
              <span>Strategic growth</span>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section
          className="agencies-section agencies-benefits-section"
          id="agencies-benefits"
        >
          <div className="agencies-container">
            <div className="agencies-section-heading agencies-centered">
              <span className="agencies-eyebrow">
                <span className="agencies-status-dot" />
                WHY VEFTOR
              </span>

              <h2>
                More than campaigns.
                <br />
                <span className="agencies-gradient-text">
                  A strategy for growth.
                </span>
              </h2>

              <p>
                Your agency brings the strategy. Veftor gives you an
                opportunity to explore advertising solutions that align with
                your clients' goals, audience, and business priorities.
              </p>
            </div>

            <div className="agencies-benefits-grid">
              {benefits.map((benefit) => (
                <article
                  className={`agencies-benefit-card agencies-card-${benefit.color}`}
                  key={benefit.number}
                >
                  <div className="agencies-card-top">
                    <span className="agencies-benefit-icon">
                      {benefit.icon}
                    </span>

                    <span className="agencies-card-number">
                      {benefit.number}
                    </span>
                  </div>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>

                  <a
                    href="#agencies-contact"
                    className="agencies-card-bottom"
                  >
                    <span>Explore the opportunity</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="agencies-section agencies-process-section">
          <div className="agencies-container agencies-process-grid">
            <div className="agencies-section-heading agencies-process-heading">
              <span className="agencies-eyebrow">
                <span className="agencies-status-dot" />
                HOW IT WORKS
              </span>

              <h2>
                From strategy
                <br />
                to <span className="agencies-gradient-text">possibilities.</span>
              </h2>

              <p>
                Start with your clients' objectives. Explore relevant
                opportunities, discuss your requirements, and work toward a
                campaign strategy that fits your agency.
              </p>

              <a
                href="#agencies-contact"
                className="agencies-btn agencies-btn-primary"
              >
                Get Started <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="agencies-steps">
              {steps.map((step) => (
                <article className="agencies-step" key={step.number}>
                  <div className="agencies-step-number">{step.number}</div>

                  <div className="agencies-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  <span className="agencies-step-arrow" aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="agencies-section agencies-capabilities-section">
          <div className="agencies-container">
            <div className="agencies-capabilities-panel">
              <div className="agencies-capabilities-copy">
                <span className="agencies-eyebrow">
                  <span className="agencies-status-dot" />
                  BUILT FOR AGENCIES
                </span>

                <h2>
                  The right foundation
                  <br />
                  for your{" "}
                  <span className="agencies-gradient-text">next campaign.</span>
                </h2>

                <p>
                  Bring your clients' objectives into focus with an approach
                  that considers audience relevance, campaign performance, and
                  your agency's long-term goals.
                </p>

                <a
                  href="#agencies-contact"
                  className="agencies-text-link"
                >
                  Talk to our team <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="agencies-capability-list">
                {capabilities.map((item) => (
                  <article
                    className="agencies-capability-item"
                    key={item.number}
                  >
                    <span className="agencies-capability-number">
                      {item.number}
                    </span>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                    <span className="agencies-capability-check">✓</span>
                  </article>
                ))}
              </div>

              <div className="agencies-panel-decoration" aria-hidden="true">
                V
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="agencies-section agencies-faq-section">
          <div className="agencies-container agencies-faq-grid">
            <div className="agencies-section-heading agencies-faq-heading">
              <span className="agencies-eyebrow">
                <span className="agencies-status-dot" />
                COMMON QUESTIONS
              </span>

              <h2>
                Questions?
                <br />
                <span className="agencies-gradient-text">
                  We've got answers.
                </span>
              </h2>

              <p>
                Learn more about agency collaboration and advertising
                opportunities with Veftor.
              </p>

              <a href="#agencies-contact" className="agencies-text-link">
                Still have questions? Contact us{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="agencies-faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    className={`agencies-faq-item ${isOpen ? "is-open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      className="agencies-faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>

                      <span
                        className="agencies-faq-toggle"
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div className="agencies-faq-answer" hidden={!isOpen}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="agencies-section agencies-contact-section"
          id="agencies-contact"
        >
          <div className="agencies-container">
            <div className="agencies-contact-panel">
              <div className="agencies-contact-glow" />

              <div className="agencies-contact-content">
                <span className="agencies-eyebrow">
                  <span className="agencies-status-dot" />
                  YOUR NEXT CAMPAIGN
                </span>

                <h2>
                  Ready to create
                  <br />
                  <span className="agencies-gradient-text">
                    new possibilities?
                  </span>
                </h2>

                <p>
                  Tell us about your agency, your clients, and your campaign
                  objectives. Connect with the Veftor team to explore the next
                  steps.
                </p>

                <div className="agencies-contact-actions">
                  <Link
                    href="/contact"
                    className="agencies-btn agencies-btn-primary"
                  >
                    Contact Veftor <span aria-hidden="true">↗</span>
                  </Link>

                  <Link
                    href="/for-publisher"
                    className="agencies-btn agencies-btn-secondary"
                  >
                    For Publishers <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <span className="agencies-contact-footnote">
                  Have a campaign in mind? Let's discuss your goals.
                </span>
              </div>

              <div className="agencies-contact-mark" aria-hidden="true">
                <span>V</span>
                <i />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
