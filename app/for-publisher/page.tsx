
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import Link from "next/link";
import "./Publisher.css";

const benefits = [
  {
    number: "01",
    icon: "↗",
    title: "Grow Your Revenue",
    description:
      "Turn your website traffic into a revenue opportunity with advertising solutions designed around your audience.",
    color: "orange",
  },
  {
    number: "02",
    icon: "◎",
    title: "Reach the Right Audience",
    description:
      "Connect with relevant advertisers and create more valuable advertising experiences for your visitors.",
    color: "green",
  },
  {
    number: "03",
    icon: "▥",
    title: "Understand Performance",
    description:
      "Use performance insights to understand engagement, evaluate placements, and make informed decisions.",
    color: "orange",
  },
  {
    number: "04",
    icon: "✳",
    title: "Protect User Experience",
    description:
      "Build a more balanced monetization strategy that considers your content, audience, and site experience.",
    color: "green",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect your platform",
    description:
      "Tell us about your website, content, audience, and publishing goals.",
  },
  {
    number: "02",
    title: "Explore opportunities",
    description:
      "Discover suitable advertising opportunities for your publishing platform.",
  },
  {
    number: "03",
    title: "Optimize performance",
    description:
      "Review performance insights and refine your monetization strategy over time.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Flexible ad opportunities",
    description:
      "Explore advertising opportunities that align with your content and audience.",
  },
  {
    number: "02",
    title: "Performance insights",
    description:
      "Understand key performance indicators and identify opportunities to improve.",
  },
  {
    number: "03",
    title: "Publisher-first approach",
    description:
      "Keep your content, audience, and long-term publishing goals at the center.",
  },
];

const faqs = [
  {
    question: "Who can become a Veftor publisher?",
    answer:
      "Website owners, digital publishers, and eligible content platforms can explore Veftor publishing opportunities. Eligibility and requirements depend on the platform and its content.",
  },
  {
    question: "How can publishers monetize their websites?",
    answer:
      "Publishers can explore relevant advertising opportunities, review available placement options, and work toward a monetization strategy that fits their audience and content.",
  },
  {
    question: "Will I be able to track performance?",
    answer:
      "Performance reporting depends on the tools and services available to your account. Ask the Veftor team which reporting features and metrics are currently supported.",
  },
  {
    question: "Is there a minimum traffic requirement?",
    answer:
      "Requirements may depend on your website, audience, content, and the advertising opportunity. Contact the Veftor team to discuss your platform.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use the contact option on this page to reach the Veftor team. Share your website URL and a short description of your publishing platform so the team can guide you through the next steps.",
  },
];

export default function ForPublisherPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HEADER / NAVBAR */}
      <Navbar />

      <main className="publisher-page">
        {/* HERO */}
        <section className="publisher-hero">
          <div className="publisher-hero-glow publisher-glow-orange" />
          <div className="publisher-hero-glow publisher-glow-green" />

          <div className="publisher-container publisher-hero-grid">
            <div className="publisher-hero-copy">
              <div className="publisher-eyebrow">
                <span className="publisher-status-dot" />
                FOR PUBLISHERS
              </div>

              <h1>
                Your content.
                <br />
                Your audience.
                <br />
                <span className="publisher-gradient-text">
                  More possibilities.
                </span>
              </h1>

              <p className="publisher-hero-description">
                Your content deserves opportunities to grow. Discover a smarter
                approach to digital advertising with Veftor, built around your
                audience, your platform, and your publishing goals.
              </p>

              <div className="publisher-hero-actions">
                <a
                  href="#publisher-contact"
                  className="publisher-btn publisher-btn-primary"
                >
                  Become a Publisher <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="#publisher-benefits"
                  className="publisher-btn publisher-btn-secondary"
                >
                  Explore Benefits <span aria-hidden="true">↓</span>
                </a>
              </div>

              <div className="publisher-hero-note">
                <span className="publisher-note-check">✓</span>
                <span>Built for publishers who want to grow.</span>
              </div>
            </div>

            {/* Decorative dashboard illustration */}
            <div className="publisher-hero-visual">
              <div className="publisher-orbit publisher-orbit-one" />
              <div className="publisher-orbit publisher-orbit-two" />

              <div className="publisher-dashboard">
                <div className="publisher-dashboard-top">
                  <div className="publisher-dashboard-brand">
                    <span className="publisher-mini-logo">V</span>
                    <span>Publisher overview</span>
                  </div>

                  <span className="publisher-live-pill">
                    <span /> Overview
                  </span>
                </div>

                <div className="publisher-dashboard-intro">
                  <span>Your publishing potential</span>
                  <h3>Built for growth.</h3>
                  <p>Make every opportunity count.</p>
                </div>

                <div className="publisher-dashboard-metrics">
                  <div className="publisher-metric-card">
                    <span>Audience</span>
                    <strong>01</strong>
                    <small>Know your visitors</small>
                    <div className="publisher-metric-line publisher-line-orange">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>

                  <div className="publisher-metric-card">
                    <span>Performance</span>
                    <strong>02</strong>
                    <small>Understand results</small>
                    <div className="publisher-metric-line publisher-line-green">
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

                <div className="publisher-dashboard-bottom">
                  <div className="publisher-dashboard-icon">↗</div>
                  <div>
                    <strong>Opportunities ahead</strong>
                    <p>Find the right path for your platform.</p>
                  </div>
                  <span className="publisher-bottom-arrow">→</span>
                </div>
              </div>

              <div className="publisher-float-card publisher-float-top">
                <span className="publisher-float-icon publisher-float-orange">
                  ↗
                </span>
                <div>
                  <strong>Grow with purpose</strong>
                  <small>Built around your goals</small>
                </div>
              </div>

              <div className="publisher-float-card publisher-float-bottom">
                <span className="publisher-float-icon publisher-float-green">
                  ✓
                </span>
                <div>
                  <strong>Publisher focused</strong>
                  <small>Your content comes first</small>
                </div>
              </div>
            </div>
          </div>

          <a href="#publisher-benefits" className="publisher-scroll-cue">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        {/* VALUE STRIP */}
        <section
          className="publisher-value-strip"
          aria-label="Veftor publisher values"
        >
          <div className="publisher-container publisher-value-grid">
            <div>
              <span className="publisher-value-icon">↗</span>
              <span>Revenue opportunities</span>
            </div>
            <div>
              <span className="publisher-value-icon">◎</span>
              <span>Audience focused</span>
            </div>
            <div>
              <span className="publisher-value-icon">▥</span>
              <span>Performance insights</span>
            </div>
            <div>
              <span className="publisher-value-icon">✳</span>
              <span>Long-term growth</span>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section
          className="publisher-section publisher-benefits-section"
          id="publisher-benefits"
        >
          <div className="publisher-container">
            <div className="publisher-section-heading publisher-centered">
              <span className="publisher-eyebrow">
                <span className="publisher-status-dot" />
                WHY VEFTOR
              </span>

              <h2>
                More than ads.
                <br />
                <span className="publisher-gradient-text">
                  A path to growth.
                </span>
              </h2>

              <p>
                Your platform is more than a source of traffic. It is a valuable
                digital property. Explore ways to develop its advertising
                potential while keeping your audience in mind.
              </p>
            </div>

            <div className="publisher-benefits-grid">
              {benefits.map((benefit) => (
                <article
                  className={`publisher-benefit-card publisher-card-${benefit.color}`}
                  key={benefit.number}
                >
                  <div className="publisher-card-top">
                    <span className="publisher-benefit-icon">
                      {benefit.icon}
                    </span>
                    <span className="publisher-card-number">
                      {benefit.number}
                    </span>
                  </div>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>

                  <div className="publisher-card-bottom">
                    <span>Explore the opportunity</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS / PROCESS */}
        <section className="publisher-section publisher-process-section">
          <div className="publisher-container publisher-process-grid">
            <div className="publisher-section-heading publisher-process-heading">
              <span className="publisher-eyebrow">
                <span className="publisher-status-dot" />
                HOW IT WORKS
              </span>

              <h2>
                From publisher
                <br />
                to{" "}
                <span className="publisher-gradient-text">
                  possibilities.
                </span>
              </h2>

              <p>
                Start with your publishing goals. Explore the options, understand
                your opportunities, and work toward a strategy that suits your
                platform.
              </p>

              <a
                href="#publisher-contact"
                className="publisher-btn publisher-btn-primary"
              >
                Get Started <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="publisher-steps">
              {steps.map((step) => (
                <article className="publisher-step" key={step.number}>
                  <div className="publisher-step-number">{step.number}</div>

                  <div className="publisher-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  <span className="publisher-step-arrow" aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="publisher-section publisher-capabilities-section">
          <div className="publisher-container">
            <div className="publisher-capabilities-panel">
              <div className="publisher-capabilities-copy">
                <span className="publisher-eyebrow">
                  <span className="publisher-status-dot" />
                  BUILT AROUND PUBLISHERS
                </span>

                <h2>
                  The right foundation
                  <br />
                  for your{" "}
                  <span className="publisher-gradient-text">next step.</span>
                </h2>

                <p>
                  Build a clearer view of your advertising opportunities with an
                  approach that puts your content, audience, and publishing
                  objectives first.
                </p>

                <a href="#publisher-contact" className="publisher-text-link">
                  Talk to our team <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="publisher-capability-list">
                {capabilities.map((item) => (
                  <article
                    className="publisher-capability-item"
                    key={item.number}
                  >
                    <span className="publisher-capability-number">
                      {item.number}
                    </span>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                    <span className="publisher-capability-check">✓</span>
                  </article>
                ))}
              </div>

              <div className="publisher-panel-decoration" aria-hidden="true">
                V
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="publisher-section publisher-faq-section">
          <div className="publisher-container publisher-faq-grid">
            <div className="publisher-section-heading publisher-faq-heading">
              <span className="publisher-eyebrow">
                <span className="publisher-status-dot" />
                COMMON QUESTIONS
              </span>

              <h2>
                Questions?
                <br />
                <span className="publisher-gradient-text">
                  We've got answers.
                </span>
              </h2>

              <p>
                Find out more about publisher opportunities with Veftor.
              </p>

              <a href="#publisher-contact" className="publisher-text-link">
                Still have questions? Contact us{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="publisher-faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    className={`publisher-faq-item ${isOpen ? "is-open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      className="publisher-faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <span
                        className="publisher-faq-toggle"
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div className="publisher-faq-answer" hidden={!isOpen}>
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
          className="publisher-section publisher-contact-section"
          id="publisher-contact"
        >
          <div className="publisher-container">
            <div className="publisher-contact-panel">
              <div className="publisher-contact-glow" />

              <div className="publisher-contact-content">
                <span className="publisher-eyebrow">
                  <span className="publisher-status-dot" />
                  YOUR NEXT CHAPTER
                </span>

                <h2>
                  Ready to explore
                  <br />
                  <span className="publisher-gradient-text">
                    your potential?
                  </span>
                </h2>

                <p>
                  Tell us about your platform and publishing goals. Connect
                  with the Veftor team to explore the next steps.
                </p>

                <div className="publisher-contact-actions">
                  <Link
                    href="/contact"
                    className="publisher-btn publisher-btn-primary"
                  >
                    Contact Veftor <span aria-hidden="true">↗</span>
                  </Link>

                  <Link
                    href="/for-advertiser"
                    className="publisher-btn publisher-btn-secondary"
                  >
                    For Advertisers <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <span className="publisher-contact-footnote">
                  Have a website? Let's talk about your publishing goals.
                </span>
              </div>

              <div className="publisher-contact-mark" aria-hidden="true">
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
