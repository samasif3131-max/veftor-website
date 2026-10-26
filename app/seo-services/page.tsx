"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./SeoServices.css";

const services = [
  {
    number: "01",
    icon: "⌕",
    title: "Technical SEO",
    description:
      "Improve your website's technical foundation with crawlability, indexability, site structure, and performance improvements.",
    tags: ["Site Audits", "Crawlability", "Performance"],
    color: "mint",
  },
  {
    number: "02",
    icon: "✳",
    title: "On-Page SEO",
    description:
      "Optimize page content, headings, metadata, internal links, and search intent to make every important page more useful.",
    tags: ["Content", "Metadata", "Internal Links"],
    color: "peach",
  },
  {
    number: "03",
    icon: "↗",
    title: "Link Building",
    description:
      "Build a stronger backlink profile through relevant publishers, quality placements, and a thoughtful outreach strategy.",
    tags: ["Backlinks", "Outreach", "Authority"],
    color: "lavender",
  },
  {
    number: "04",
    icon: "▤",
    title: "Content Strategy",
    description:
      "Identify valuable topics, understand search intent, and plan content that answers real questions from your audience.",
    tags: ["Keyword Research", "Content Planning", "Search Intent"],
    color: "yellow",
  },
  {
    number: "05",
    icon: "◎",
    title: "Keyword Research",
    description:
      "Discover relevant search opportunities by evaluating search intent, competition, relevance, and business potential.",
    tags: ["Keyword Mapping", "Competitor Research", "Opportunities"],
    color: "blue",
  },
  {
    number: "06",
    icon: "⌁",
    title: "SEO Audits & Reporting",
    description:
      "Understand what's holding your website back with structured audits, actionable recommendations, and performance tracking.",
    tags: ["SEO Audits", "Analytics", "Reporting"],
    color: "rose",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, target audience, goals, and current search performance.",
  },
  {
    number: "02",
    title: "Audit & Plan",
    description:
      "We identify technical issues, content gaps, and opportunities to build a focused SEO roadmap.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "We prioritize practical improvements across your website, content, and authority-building efforts.",
  },
  {
    number: "04",
    title: "Measure & Improve",
    description:
      "We track meaningful performance indicators and refine the strategy as new data becomes available.",
  },
];

const faqs = [
  {
    question: "What do SEO services include?",
    answer:
      "SEO services can include technical audits, on-page optimization, keyword research, content strategy, link building, and performance reporting. The right combination depends on your website and goals.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term process. Some technical improvements can have an impact sooner, while meaningful organic growth often takes several months. Results depend on competition, website condition, implementation, and other factors.",
  },
  {
    question: "Can SEO help a new website?",
    answer:
      "Yes. SEO can help a new website establish a clear structure, target relevant search queries, publish useful content, and build a strong technical foundation from the beginning.",
  },
  {
    question: "Do SEO services include link building?",
    answer:
      "Link building can be an important part of an SEO strategy. The approach should prioritize relevant websites, editorial quality, and natural link acquisition rather than simply maximizing backlink numbers.",
  },
  {
    question: "How is SEO performance measured?",
    answer:
      "Performance can be measured through organic traffic, search visibility, relevant keyword rankings, conversions, and technical health. The most useful metrics are those connected to your business objectives.",
  },
];

export default function SeoServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <>
      <Navbar />

      <main className="seo-page">
        {/* HERO */}
        <section className="seo-hero">
          <div className="seo-container seo-hero-grid">
            <div className="seo-hero-content">
              <div className="seo-eyebrow">
                <span className="seo-eyebrow-dot" />
                SEARCH ENGINE OPTIMIZATION
              </div>

              <h1 className="seo-hero-title">
                Make your website
                <br />
                <span>easier to find.</span>
              </h1>

              <p className="seo-hero-text">
                Smarter SEO starts with the right strategy. Improve your
                website, reach the right audience, and build a stronger
                foundation for sustainable organic growth.
              </p>

              <div className="seo-hero-actions">
                <Link href="/contact" className="seo-btn seo-btn-dark">
                  Discuss Your SEO Goals <span>↗</span>
                </Link>

                <a href="#seo-services" className="seo-text-link">
                  Explore our services <span>↓</span>
                </a>
              </div>

              <div className="seo-hero-note">
                <span className="seo-note-icon">✳</span>
                <span>
                  Strategy first. Meaningful improvements. Long-term thinking.
                </span>
              </div>
            </div>

            <div className="seo-hero-visual">
              <div className="seo-visual-orbit seo-orbit-one" />
              <div className="seo-visual-orbit seo-orbit-two" />

              <div className="seo-search-card">
                <div className="seo-search-top">
                  <span className="seo-window-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>Organic visibility</span>
                  <span className="seo-search-menu">•••</span>
                </div>

                <div className="seo-search-bar">
                  <span>⌕</span>
                  <span>Find your next opportunity</span>
                  <span className="seo-search-enter">↵</span>
                </div>

                <div className="seo-result-label">YOUR SEO ROADMAP</div>

                <div className="seo-result-row">
                  <span className="seo-result-icon seo-result-green">✓</span>
                  <div>
                    <strong>Technical foundation</strong>
                    <small>Build a healthier website</small>
                  </div>
                  <span className="seo-result-status">Optimize</span>
                </div>

                <div className="seo-result-row">
                  <span className="seo-result-icon seo-result-purple">↗</span>
                  <div>
                    <strong>Content opportunities</strong>
                    <small>Reach relevant searches</small>
                  </div>
                  <span className="seo-result-status">Discover</span>
                </div>

                <div className="seo-result-row">
                  <span className="seo-result-icon seo-result-orange">◎</span>
                  <div>
                    <strong>Authority building</strong>
                    <small>Strengthen your presence</small>
                  </div>
                  <span className="seo-result-status">Grow</span>
                </div>

                <div className="seo-chart">
                  <div className="seo-chart-heading">
                    <span>Visibility over time</span>
                    <span>Illustrative</span>
                  </div>

                  <div className="seo-chart-bars">
                    {[28, 38, 32, 49, 44, 61, 56, 74, 68, 89, 82, 100].map(
                      (height, index) => (
                        <span
                          key={index}
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="seo-floating-card seo-floating-top">
                <span className="seo-floating-symbol">✳</span>
                <span>
                  <strong>Be discoverable</strong>
                  <small>Build your search presence</small>
                </span>
              </div>

              <div className="seo-floating-card seo-floating-bottom">
                <span className="seo-floating-check">✓</span>
                <span>
                  <strong>Built around your goals</strong>
                  <small>A strategy tailored to you</small>
                </span>
              </div>
            </div>
          </div>

          <div className="seo-hero-decoration seo-decoration-one" />
          <div className="seo-hero-decoration seo-decoration-two" />
        </section>

        {/* MARQUEE */}
        <div className="seo-marquee" aria-label="SEO service specialties">
          <div className="seo-marquee-track">
            {Array.from({ length: 2 }).map((_, group) => (
              <div className="seo-marquee-group" key={group}>
                <span>TECHNICAL SEO</span><i>✳</i>
                <span>CONTENT STRATEGY</span><i>✳</i>
                <span>KEYWORD RESEARCH</span><i>✳</i>
                <span>LINK BUILDING</span><i>✳</i>
                <span>ORGANIC GROWTH</span><i>✳</i>
              </div>
            ))}
          </div>
        </div>

        {/* INTRO */}
        <section className="seo-intro seo-section">
          <div className="seo-container seo-intro-grid">
            <div>
              <span className="seo-section-label">A BETTER WAY TO GROW</span>

              <h2 className="seo-section-title">
                Visibility is good.
                <br />
                <span>Relevant visibility is better.</span>
              </h2>
            </div>

            <div className="seo-intro-copy">
              <p>
                SEO isn't just about appearing in search results. It's about
                connecting your website with people who are looking for what
                you offer.
              </p>

              <p>
                Veftor helps you approach search optimization with a clearer
                plan, practical priorities, and a focus on the work that
                matters to your business.
              </p>

              <Link href="/contact" className="seo-inline-link">
                Let's talk about your goals <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="seo-services-section seo-section" id="seo-services">
          <div className="seo-container">
            <div className="seo-section-heading">
              <div>
                <span className="seo-section-label">WHAT WE DO</span>
                <h2 className="seo-section-title">
                  SEO built around
                  <br />
                  <span>the bigger picture.</span>
                </h2>
              </div>

              <p>
                The right combination of research, optimization, content, and
                authority-building can help create a stronger search
                foundation.
              </p>
            </div>

            <div className="seo-services-grid">
              {services.map((service) => (
                <article
                  className={`seo-service-card seo-card-${service.color}`}
                  key={service.number}
                >
                  <div className="seo-service-card-top">
                    <span className="seo-service-icon">{service.icon}</span>
                    <span className="seo-service-number">{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="seo-service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="seo-card-link"
                    aria-label={`Ask about ${service.title}`}
                  >
                    Explore service <span>↗</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE */}
        <section className="seo-feature seo-section">
          <div className="seo-container seo-feature-grid">
            <div className="seo-feature-visual">
              <div className="seo-feature-circle seo-feature-circle-one" />
              <div className="seo-feature-circle seo-feature-circle-two" />

              <div className="seo-feature-panel">
                <span className="seo-feature-panel-label">
                  THE SEO FRAMEWORK
                </span>

                <div className="seo-framework-item">
                  <span className="seo-framework-icon">⌕</span>
                  <span>
                    <strong>Understand</strong>
                    <small>Research your audience and market</small>
                  </span>
                  <span className="seo-framework-number">01</span>
                </div>

                <div className="seo-framework-item">
                  <span className="seo-framework-icon">✳</span>
                  <span>
                    <strong>Improve</strong>
                    <small>Fix issues and optimize important pages</small>
                  </span>
                  <span className="seo-framework-number">02</span>
                </div>

                <div className="seo-framework-item">
                  <span className="seo-framework-icon">↗</span>
                  <span>
                    <strong>Grow</strong>
                    <small>Build relevance and track progress</small>
                  </span>
                  <span className="seo-framework-number">03</span>
                </div>

                <div className="seo-framework-footer">
                  <span className="seo-framework-pulse" />
                  A continuous process of improvement
                </div>
              </div>

              <span className="seo-feature-sticker">THINK LONG TERM ↗</span>
            </div>

            <div className="seo-feature-content">
              <span className="seo-section-label">THE VEFTOR APPROACH</span>

              <h2 className="seo-section-title">
                Less guesswork.
                <br />
                <span>More direction.</span>
              </h2>

              <p>
                Every website has different strengths, challenges, and
                opportunities. Your SEO strategy should reflect that.
              </p>

              <ul className="seo-benefit-list">
                <li>
                  <span>✓</span>
                  <div>
                    <strong>Priorities that make sense</strong>
                    <p>Focus on improvements based on your needs and goals.</p>
                  </div>
                </li>

                <li>
                  <span>✓</span>
                  <div>
                    <strong>Connected SEO efforts</strong>
                    <p>Bring technical health, content, and authority together.</p>
                  </div>
                </li>

                <li>
                  <span>✓</span>
                  <div>
                    <strong>Clearer performance insights</strong>
                    <p>Use meaningful data to guide the next steps.</p>
                  </div>
                </li>
              </ul>

              <Link href="/contact" className="seo-btn seo-btn-dark">
                Plan Your SEO Strategy <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="seo-process seo-section" id="seo-process">
          <div className="seo-container">
            <div className="seo-process-heading">
              <span className="seo-section-label">HOW IT WORKS</span>
              <h2 className="seo-section-title">
                A clearer path from
                <br />
                <span>insight to action.</span>
              </h2>
              <p>
                A structured approach helps turn search opportunities into
                practical work your team can prioritize.
              </p>
            </div>

            <div className="seo-process-grid">
              {process.map((step, index) => (
                <article className="seo-process-card" key={step.number}>
                  <div className="seo-process-top">
                    <span>{step.number}</span>
                    <span className="seo-process-symbol">
                      {["⌕", "◎", "✳", "↗"][index]}
                    </span>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  {index < process.length - 1 && (
                    <span className="seo-process-arrow">↗</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="seo-faq seo-section" id="seo-faq">
          <div className="seo-container seo-faq-grid">
            <div className="seo-faq-intro">
              <span className="seo-section-label">GOOD QUESTIONS</span>

              <h2 className="seo-section-title">
                SEO questions,
                <br />
                <span>clear answers.</span>
              </h2>

              <p>
                Want to understand how SEO fits your business? Start with
                these common questions.
              </p>

              <Link href="/contact" className="seo-inline-link">
                Have another question? Contact us <span>↗</span>
              </Link>
            </div>

            <div className="seo-faq-list">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <article
                    className={`seo-faq-item ${isOpen ? "seo-faq-active" : ""}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="seo-faq-question"
                      onClick={() =>
                        setActiveFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className="seo-faq-toggle">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`seo-faq-answer ${
                        isOpen ? "seo-faq-answer-open" : ""
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="seo-cta-section">
          <div className="seo-container">
            <div className="seo-cta">
              <div className="seo-cta-decoration seo-cta-decoration-one" />
              <div className="seo-cta-decoration seo-cta-decoration-two" />

              <div className="seo-cta-content">
                <span className="seo-cta-label">
                  YOUR NEXT CHAPTER STARTS HERE
                </span>

                <h2>
                  Let's make your
                  <br />
                  <span>search presence count.</span>
                </h2>

                <p>
                  Tell us where you want to go. Let's explore the SEO
                  opportunities that make sense for your website.
                </p>

                <div className="seo-cta-actions">
                  <Link href="/contact" className="seo-btn seo-btn-light">
                    Talk to Our Team <span>↗</span>
                  </Link>

                  <Link href="/marketplace" className="seo-cta-secondary">
                    Explore Marketplace <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="seo-cta-orbit">
                <div className="seo-cta-orbit-inner">
                  <span>V</span>
                  <i>✳</i>
                  <b>↗</b>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}