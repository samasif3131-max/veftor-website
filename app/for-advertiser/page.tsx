"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ForAdvertiser.css";

const benefits = [
  {
    number: "01",
    icon: "◎",
    title: "Reach the Right Audience",
    description:
      "Connect with publishers whose audiences match your brand, industry, and campaign goals.",
    tag: "Audience-first targeting",
  },
  {
    number: "02",
    icon: "↗",
    title: "Scale Your Campaigns",
    description:
      "Discover new publishing opportunities and expand your brand's reach with a smarter strategy.",
    tag: "Built to scale",
  },
  {
    number: "03",
    icon: "◇",
    title: "Full Campaign Control",
    description:
      "Compare publishers, evaluate opportunities, and make informed decisions before you invest.",
    tag: "Your campaign, your call",
  },
  {
    number: "04",
    icon: "✳",
    title: "Build Lasting Partnerships",
    description:
      "Find publishers who understand your vision and create opportunities for long-term collaboration.",
    tag: "Relationships that grow",
  },
];

const steps = [
  {
    number: "01",
    title: "Define your goals",
    description:
      "Decide what matters most to your brand, from visibility and awareness to quality traffic.",
  },
  {
    number: "02",
    title: "Discover publishers",
    description:
      "Explore publishing opportunities and shortlist partners that fit your campaign.",
  },
  {
    number: "03",
    title: "Connect and collaborate",
    description:
      "Reach out to publishers, discuss your requirements, and explore potential partnerships.",
  },
  {
    number: "04",
    title: "Grow your impact",
    description:
      "Build stronger relationships and develop your next campaign with confidence.",
  },
];

const capabilities = [
  "Publisher discovery",
  "Campaign planning",
  "Partnership opportunities",
  "Brand visibility",
  "Audience alignment",
  "Growth-focused decisions",
];

export default function ForAdvertiser() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-reveal");

            if (sectionId) {
              setVisibleSections((previous) =>
                previous.includes(sectionId)
                  ? previous
                  : [...previous, sectionId]
              );
            }
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    revealRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef =
    (id: string) => (element: HTMLElement | null) => {
      const index = Number(id);

      if (!Number.isNaN(index)) {
        revealRefs.current[index] = element;
      }
    };

  const handleGetStarted = () => {
    document.getElementById("advertiser-contact")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailError("");
    setSubmitted(false);

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent("Advertiser Partnership Inquiry");
    const body = encodeURIComponent(
      `Hello Veftor team,\n\nI am interested in advertising opportunities on Veftor.\n\nMy email: ${email.trim()}\n\nPlease share more information about getting started.\n\nThank you.`
    );

    window.location.href = `mailto:hello@veftor.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const faqs = [
    {
      question: "What is Veftor for Advertisers?",
      answer:
        "Veftor helps advertisers discover publishing opportunities, explore potential partners, and make more informed decisions about their digital campaigns.",
    },
    {
      question: "How do I find the right publishers?",
      answer:
        "Start by identifying your campaign goals, audience, and preferred content categories. You can then explore the available publisher marketplace and shortlist options that align with your needs.",
    },
    {
      question: "Can I contact publishers about a campaign?",
      answer:
        "Yes. You can use the contact or inquiry options available on publisher listings to discuss campaign requirements and potential collaborations.",
    },
    {
      question: "Is Veftor suitable for growing brands?",
      answer:
        "The advertiser experience is designed to help brands explore opportunities at different stages of growth, from discovering their first publishing partners to expanding an existing strategy.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="advertiser-page">
        {/* HERO */}
        <section className="advertiser-hero">
          <div className="advertiser-hero-grid" aria-hidden="true" />
          <div className="advertiser-orb advertiser-orb-one" aria-hidden="true" />
          <div className="advertiser-orb advertiser-orb-two" aria-hidden="true" />

          <div className="advertiser-container advertiser-hero-layout">
            <div className="advertiser-hero-copy">
              <div className="advertiser-eyebrow advertiser-hero-eyebrow">
                <span className="advertiser-eyebrow-dot" />
                THE ADVERTISER EXPERIENCE
              </div>

              <h1>
                Your brand deserves
                <br />
                <span className="advertiser-gradient-text">
                  a bigger stage.
                </span>
              </h1>

              <p className="advertiser-hero-description">
                Find the right publishing partners, unlock new opportunities,
                and turn your advertising vision into meaningful growth with
                Veftor.
              </p>

              <div className="advertiser-hero-actions">
                <button
                  className="advertiser-button advertiser-button-primary"
                  onClick={handleGetStarted}
                >
                  Start Your Journey <span aria-hidden="true">↗</span>
                </button>

                <a
                  href="#advertiser-how-it-works"
                  className="advertiser-button advertiser-button-secondary"
                >
                  Explore How It Works <span aria-hidden="true">↓</span>
                </a>
              </div>

              <div className="advertiser-hero-proof">
                <div className="advertiser-proof-icon" aria-hidden="true">
                  ✓
                </div>
                <p>
                  <strong>Smarter discovery.</strong>
                  <span> Better connections. Bigger possibilities.</span>
                </p>
              </div>
            </div>

            <div className="advertiser-hero-visual">
              <div className="advertiser-visual-glow" aria-hidden="true" />

              <div className="advertiser-dashboard">
                <div className="advertiser-dashboard-top">
                  <div>
                    <span className="advertiser-dashboard-label">
                      VEFTOR / ADVERTISERS
                    </span>
                    <h2>Your growth workspace</h2>
                  </div>

                  <span className="advertiser-dashboard-status">
                    <span /> Ready to explore
                  </span>
                </div>

                <div className="advertiser-dashboard-banner">
                  <div className="advertiser-banner-orbit" aria-hidden="true">
                    <div className="advertiser-orbit-ring advertiser-ring-one" />
                    <div className="advertiser-orbit-ring advertiser-ring-two" />
                    <div className="advertiser-orbit-core">V</div>
                    <span className="advertiser-orbit-node node-one">↗</span>
                    <span className="advertiser-orbit-node node-two">✳</span>
                    <span className="advertiser-orbit-node node-three">◇</span>
                  </div>

                  <div className="advertiser-banner-copy">
                    <span>YOUR NEXT OPPORTUNITY</span>
                    <h3>
                      Make every
                      <br />
                      connection count.
                    </h3>
                    <p>Discover. Connect. Grow.</p>
                  </div>
                </div>

                <div className="advertiser-dashboard-metrics">
                  <div className="advertiser-metric-card">
                    <span className="advertiser-metric-icon">◎</span>
                    <span className="advertiser-metric-title">
                      Publisher discovery
                    </span>
                    <strong>Explore</strong>
                    <span className="advertiser-metric-note">
                      Find your fit
                    </span>
                  </div>

                  <div className="advertiser-metric-card">
                    <span className="advertiser-metric-icon">↗</span>
                    <span className="advertiser-metric-title">
                      Campaign planning
                    </span>
                    <strong>Connect</strong>
                    <span className="advertiser-metric-note">
                      Build partnerships
                    </span>
                  </div>
                </div>

                <div className="advertiser-dashboard-footer">
                  <span className="advertiser-live-dot" />
                  A smarter way to find your next partner
                  <span className="advertiser-footer-sparkle">✳</span>
                </div>
              </div>

              <div className="advertiser-float-card advertiser-float-top">
                <span className="advertiser-float-icon">✳</span>
                <div>
                  <strong>Find your fit</strong>
                  <span>Partners that align</span>
                </div>
              </div>

              <div className="advertiser-float-card advertiser-float-bottom">
                <span className="advertiser-float-icon advertiser-float-icon-purple">
                  ↗
                </span>
                <div>
                  <strong>Think bigger</strong>
                  <span>Grow your reach</span>
                </div>
              </div>
            </div>
          </div>

          <a
            className="advertiser-scroll-indicator"
            href="#advertiser-benefits"
          >
            <span className="advertiser-scroll-line" />
            SCROLL TO EXPLORE
          </a>
        </section>

        {/* VALUE STRIP */}
        <section className="advertiser-value-strip">
          <div className="advertiser-container advertiser-value-inner">
            <span>BUILT FOR BRANDS THAT WANT MORE</span>
            <div className="advertiser-value-item">
              <span>✳</span> Better discovery
            </div>
            <div className="advertiser-value-item">
              <span>◇</span> Smarter partnerships
            </div>
            <div className="advertiser-value-item">
              <span>↗</span> Sustainable growth
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section
          className="advertiser-section advertiser-benefits-section"
          id="advertiser-benefits"
          data-reveal="1"
          ref={addRevealRef("1")}
        >
          <div className="advertiser-container">
            <div
              className={`advertiser-section-heading advertiser-reveal ${
                visibleSections.includes("1") ? "is-visible" : ""
              }`}
            >
              <div className="advertiser-eyebrow">
                <span className="advertiser-eyebrow-dot" />
                WHY ADVERTISERS CHOOSE VEFTOR
              </div>

              <h2>
                Less guesswork.
                <br />
                <span className="advertiser-gradient-text">
                  More possibilities.
                </span>
              </h2>

              <p>
                Good advertising starts with the right connections. Discover
                opportunities that make your next move more intentional.
              </p>
            </div>

            <div className="advertiser-benefit-grid">
              {benefits.map((benefit, index) => (
                <article
                  className={`advertiser-benefit-card advertiser-reveal ${
                    visibleSections.includes("1") ? "is-visible" : ""
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  key={benefit.number}
                >
                  <div className="advertiser-benefit-top">
                    <span className="advertiser-benefit-icon">
                      {benefit.icon}
                    </span>
                    <span className="advertiser-benefit-number">
                      / {benefit.number}
                    </span>
                  </div>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>

                  <div className="advertiser-benefit-bottom">
                    <span className="advertiser-benefit-tag-dot" />
                    {benefit.tag}
                  </div>

                  <span
                    className="advertiser-card-decoration"
                    aria-hidden="true"
                  >
                    {benefit.icon}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          className="advertiser-section advertiser-process-section"
          id="advertiser-how-it-works"
          data-reveal="2"
          ref={addRevealRef("2")}
        >
          <div className="advertiser-container advertiser-process-layout">
            <div
              className={`advertiser-process-intro advertiser-reveal ${
                visibleSections.includes("2") ? "is-visible" : ""
              }`}
            >
              <div className="advertiser-eyebrow">
                <span className="advertiser-eyebrow-dot" />
                A CLEARER WAY FORWARD
              </div>

              <h2>
                From first idea
                <br />
                to <span className="advertiser-gradient-text">real impact.</span>
              </h2>

              <p>
                Your next campaign doesn't need to feel complicated. Start with
                your goals and build meaningful publisher relationships one
                step at a time.
              </p>

              <button
                className="advertiser-button advertiser-button-primary"
                onClick={handleGetStarted}
              >
                Let's Get Started <span aria-hidden="true">↗</span>
              </button>

              <div className="advertiser-process-note">
                <span className="advertiser-process-note-icon">✳</span>
                <p>
                  <strong>Start with a strategy.</strong>
                  <br />
                  Build with the right connections.
                </p>
              </div>
            </div>

            <div className="advertiser-steps">
              {steps.map((step, index) => (
                <article
                  className={`advertiser-step advertiser-reveal ${
                    visibleSections.includes("2") ? "is-visible" : ""
                  }`}
                  style={{ transitionDelay: `${index * 110}ms` }}
                  key={step.number}
                >
                  <div className="advertiser-step-number">{step.number}</div>

                  <div className="advertiser-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  <span className="advertiser-step-arrow" aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section
          className="advertiser-section advertiser-capabilities-section"
          data-reveal="3"
          ref={addRevealRef("3")}
        >
          <div className="advertiser-container advertiser-capabilities-layout">
            <div
              className={`advertiser-capabilities-copy advertiser-reveal ${
                visibleSections.includes("3") ? "is-visible" : ""
              }`}
            >
              <div className="advertiser-eyebrow">
                <span className="advertiser-eyebrow-dot" />
                MADE FOR YOUR NEXT MOVE
              </div>

              <h2>
                Everything starts
                <br />
                with the <span className="advertiser-gradient-text">right fit.</span>
              </h2>

              <p>
                Every brand has a different goal. Veftor helps you explore the
                opportunities and connections that fit your direction.
              </p>

              <a
                href="/publisher-marketplace"
                className="advertiser-text-link"
              >
                Explore Publisher Marketplace <span>↗</span>
              </a>
            </div>

            <div
              className={`advertiser-capabilities-panel advertiser-reveal ${
                visibleSections.includes("3") ? "is-visible" : ""
              }`}
            >
              <div className="advertiser-capabilities-panel-header">
                <div>
                  <span>YOUR ADVERTISING TOOLKIT</span>
                  <h3>Start with what matters.</h3>
                </div>
                <span className="advertiser-toolkit-icon">✳</span>
              </div>

              <div className="advertiser-capabilities-list">
                {capabilities.map((capability, index) => (
                  <div
                    className="advertiser-capability"
                    style={{ transitionDelay: `${index * 70}ms` }}
                    key={capability}
                  >
                    <span className="advertiser-capability-check">✓</span>
                    {capability}
                    <span className="advertiser-capability-arrow">↗</span>
                  </div>
                ))}
              </div>

              <div className="advertiser-toolkit-footer">
                <span className="advertiser-toolkit-pulse" />
                YOUR NEXT OPPORTUNITY STARTS HERE
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="advertiser-section advertiser-faq-section"
          data-reveal="4"
          ref={addRevealRef("4")}
        >
          <div className="advertiser-container advertiser-faq-layout">
            <div
              className={`advertiser-faq-heading advertiser-reveal ${
                visibleSections.includes("4") ? "is-visible" : ""
              }`}
            >
              <div className="advertiser-eyebrow">
                <span className="advertiser-eyebrow-dot" />
                GOT QUESTIONS?
              </div>

              <h2>
                Let's clear
                <br />
                things <span className="advertiser-gradient-text">up.</span>
              </h2>

              <p>
                Everything you need to know before exploring your next
                advertising opportunity.
              </p>

              <a
                href="#advertiser-contact"
                className="advertiser-text-link"
              >
                Still have questions? Get in touch <span>↗</span>
              </a>
            </div>

            <div className="advertiser-faq-list">
              {faqs.map((faq, index) => (
                <article
                  className={`advertiser-faq-item ${
                    activeFaq === index ? "advertiser-faq-active" : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    className="advertiser-faq-question"
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                    aria-expanded={activeFaq === index}
                  >
                    <span className="advertiser-faq-index">
                      0{index + 1}
                    </span>
                    <span>{faq.question}</span>
                    <span className="advertiser-faq-toggle">
                      {activeFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  <div className="advertiser-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="advertiser-cta-section"
          id="advertiser-contact"
          data-reveal="5"
          ref={addRevealRef("5")}
        >
          <div className="advertiser-cta-grid" aria-hidden="true" />
          <div className="advertiser-cta-orb" aria-hidden="true" />

          <div
            className={`advertiser-container advertiser-cta-content advertiser-reveal ${
              visibleSections.includes("5") ? "is-visible" : ""
            }`}
          >
            <div className="advertiser-cta-badge">
              <span className="advertiser-eyebrow-dot" />
              YOUR NEXT CHAPTER STARTS HERE
            </div>

            <h2>
              Ready to put your
              <br />
              brand <span>in motion?</span>
            </h2>

            <p>
              Start exploring new opportunities and find the publishing
              connections that move your brand forward.
            </p>

            <form
              className="advertiser-contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <label className="advertiser-sr-only" htmlFor="advertiser-email">
                Your email address
              </label>

              <input
                id="advertiser-email"
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setEmailError("");
                  setSubmitted(false);
                }}
                aria-invalid={Boolean(emailError)}
                aria-describedby={
                  emailError ? "advertiser-email-error" : undefined
                }
              />

              <button
                className="advertiser-button advertiser-button-primary"
                type="submit"
              >
                Get in Touch <span aria-hidden="true">↗</span>
              </button>

              {emailError && (
                <p
                  className="advertiser-form-message advertiser-form-error"
                  id="advertiser-email-error"
                  role="alert"
                >
                  {emailError}
                </p>
              )}

              {submitted && (
                <p className="advertiser-form-message" role="status">
                  Your email app should open with a pre-filled inquiry. Send
                  the email to contact the Veftor team.
                </p>
              )}
            </form>

            <div className="advertiser-cta-footnote">
              <span>✳</span> Better connections begin with one conversation.
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}