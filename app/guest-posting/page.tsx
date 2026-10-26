
"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./guest-posting.css";

const niches = [
  { name: "Technology", icon: "⌘", count: "01" },
  { name: "Business", icon: "↗", count: "02" },
  { name: "Digital Marketing", icon: "✳", count: "03" },
  { name: "Finance", icon: "◈", count: "04" },
  { name: "Lifestyle", icon: "✺", count: "05" },
  { name: "Health & Wellness", icon: "✚", count: "06" },
];

const steps = [
  {
    number: "01",
    title: "Tell us your goals",
    description:
      "Share your niche, target audience and the kind of websites you want to reach.",
  },
  {
    number: "02",
    title: "Find the right fit",
    description:
      "We identify relevant publishing opportunities aligned with your content and audience.",
  },
  {
    number: "03",
    title: "Create & outreach",
    description:
      "Prepare quality content and coordinate outreach with suitable publishers.",
  },
  {
    number: "04",
    title: "Review your placement",
    description:
      "Review the agreed placement details and keep track of the campaign progress.",
  },
];

export default function GuestPostingPage() {
  const [selectedNiche, setSelectedNiche] = useState("Technology");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      <main className="gp-page">
        <section className="gp-hero">
          <div className="gp-grid-pattern" />
          <div className="gp-glow gp-glow-a" />
          <div className="gp-glow gp-glow-b" />

          <div className="gp-container gp-hero-layout">
            <div className="gp-hero-copy">
              <div className="gp-eyebrow">
                <span className="gp-live-dot" />
                VEFTOR / GUEST POSTING
              </div>

              <h1>
                Get your brand
                <br />
                <span>in the right</span>
                <br />
                conversation.
              </h1>

              <p>
                Reach relevant audiences, share valuable expertise and build
                your brand presence with strategic guest posting.
              </p>

              <div className="gp-hero-actions">
                <a href="#gp-inquiry" className="gp-button gp-button-orange">
                  Start your campaign <span>↗</span>
                </a>
                <a href="#gp-process" className="gp-button gp-button-ghost">
                  How it works <span>↓</span>
                </a>
              </div>

              <div className="gp-trust-note">
                <span className="gp-mini-check">✓</span>
                Relevance-first outreach. Quality-focused content.
              </div>
            </div>

            <div className="gp-hero-visual">
              <div className="gp-visual-topline">
                <span>THE VISIBILITY ENGINE</span>
                <span>VP—001</span>
              </div>

              <div className="gp-orbit gp-orbit-one" />
              <div className="gp-orbit gp-orbit-two" />

              <div className="gp-main-visual-card">
                <div className="gp-visual-card-header">
                  <span className="gp-visual-brand">V.</span>
                  <span>YOUR BRAND, ELSEWHERE.</span>
                </div>

                <div className="gp-visual-editorial">
                  <span className="gp-editorial-kicker">
                    A NEW PERSPECTIVE
                  </span>
                  <div className="gp-editorial-title">
                    YOUR
                    <br />
                    EXPERTISE.
                    <br />
                    <span>THEIR</span>
                    <br />
                    AUDIENCE.
                  </div>
                  <div className="gp-editorial-lines">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>

                <div className="gp-visual-footer">
                  <span>CREATE VALUE</span>
                  <span>BUILD PRESENCE ↗</span>
                </div>
              </div>

              <div className="gp-floating-card gp-float-top">
                <span className="gp-float-icon">↗</span>
                <div>
                  <strong>Brand visibility</strong>
                  <small>Reach new readers</small>
                </div>
              </div>

              <div className="gp-floating-card gp-float-bottom">
                <span className="gp-float-icon gp-float-green">✳</span>
                <div>
                  <strong>Relevant placements</strong>
                  <small>Audience comes first</small>
                </div>
              </div>

              <div className="gp-visual-caption">
                MAKE EVERY PLACEMENT COUNT.
              </div>
            </div>
          </div>

          <div className="gp-hero-bottom">
            <span>CONTENT WITH PURPOSE.</span>
            <span>RELATIONSHIPS THAT MATTER. ↓</span>
          </div>
        </section>

        <section className="gp-marquee" aria-label="Guest posting benefits">
          <div className="gp-marquee-track">
            {Array.from({ length: 2 }, (_, repeat) => (
              <div className="gp-marquee-group" key={repeat}>
                <span>RELEVANT OUTREACH</span><i>✳</i>
                <span>QUALITY CONTENT</span><i>✳</i>
                <span>BRAND AUTHORITY</span><i>✳</i>
                <span>NEW AUDIENCES</span><i>✳</i>
              </div>
            ))}
          </div>
        </section>

        <section className="gp-benefits gp-section">
          <div className="gp-container">
            <div className="gp-section-heading">
              <div>
                <span className="gp-section-label">WHY GUEST POSTING</span>
                <h2>
                  Don't just publish.
                  <br />
                  <span>Make an impression.</span>
                </h2>
              </div>
              <p>
                Put useful ideas in front of relevant readers and create
                opportunities for your brand to be discovered.
              </p>
            </div>

            <div className="gp-benefit-grid">
              <article className="gp-benefit-card gp-benefit-dark">
                <span className="gp-benefit-number">01 / REACH</span>
                <div className="gp-benefit-icon">↗</div>
                <h3>Expand your reach</h3>
                <p>
                  Introduce your brand to audiences who already care about
                  your industry and expertise.
                </p>
                <span className="gp-card-decoration">R.</span>
              </article>

              <article className="gp-benefit-card gp-benefit-orange">
                <span className="gp-benefit-number">02 / TRUST</span>
                <div className="gp-benefit-icon">✳</div>
                <h3>Build brand authority</h3>
                <p>
                  Share helpful insights and demonstrate what makes your
                  business worth listening to.
                </p>
                <span className="gp-card-decoration">B.</span>
              </article>

              <article className="gp-benefit-card gp-benefit-cream">
                <span className="gp-benefit-number">03 / RELEVANCE</span>
                <div className="gp-benefit-icon">◎</div>
                <h3>Connect with context</h3>
                <p>
                  Focus on topical relevance, editorial quality and
                  placements that make sense for your audience.
                </p>
                <span className="gp-card-decoration">C.</span>
              </article>
            </div>
          </div>
        </section>

        <section className="gp-niches gp-section">
          <div className="gp-container">
            <div className="gp-section-heading">
              <div>
                <span className="gp-section-label">FIND YOUR SPACE</span>
                <h2>
                  Your niche.
                  <br />
                  <span>Your audience.</span>
                </h2>
              </div>
              <p>
                Select your industry to start a more focused conversation
                about potential publishing opportunities.
              </p>
            </div>

            <div className="gp-niche-layout">
              <div className="gp-niche-list">
                {niches.map((niche) => (
                  <button
                    type="button"
                    key={niche.name}
                    className={`gp-niche-item ${
                      selectedNiche === niche.name ? "gp-niche-active" : ""
                    }`}
                    onClick={() => setSelectedNiche(niche.name)}
                  >
                    <span className="gp-niche-count">{niche.count}</span>
                    <span className="gp-niche-icon">{niche.icon}</span>
                    <span className="gp-niche-name">{niche.name}</span>
                    <span className="gp-niche-arrow">↗</span>
                  </button>
                ))}
              </div>

              <div className="gp-niche-feature">
                <div className="gp-niche-feature-top">
                  <span>YOUR SELECTED INDUSTRY</span>
                  <span className="gp-niche-status">● READY TO EXPLORE</span>
                </div>

                <div className="gp-niche-feature-art">
                  <div className="gp-niche-large-icon">
                    {niches.find((n) => n.name === selectedNiche)?.icon}
                  </div>
                  <div className="gp-niche-circle gp-circle-one" />
                  <div className="gp-niche-circle gp-circle-two" />
                  <span className="gp-niche-art-label">VEFTOR / NICHE</span>
                </div>

                <span className="gp-section-label">POTENTIAL OPPORTUNITIES</span>
                <h3>{selectedNiche}</h3>
                <p>
                  Explore relevant publications, editorial requirements and
                  content angles that fit your industry. Opportunities and
                  availability are confirmed during consultation.
                </p>

                <a
                  href="#gp-inquiry"
                  className="gp-inline-link"
                  onClick={() => {
                    // Keep the selected niche ready for the inquiry.
                  }}
                >
                  Discuss this niche <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="gp-process gp-section" id="gp-process">
          <div className="gp-container">
            <div className="gp-process-heading">
              <span className="gp-section-label gp-label-light">
                SIMPLE BY DESIGN
              </span>
              <h2>
                From first brief
                <br />
                <span>to published piece.</span>
              </h2>
              <p>
                A clear process keeps your campaign focused, collaborative
                and aligned with your goals.
              </p>
            </div>

            <div className="gp-steps">
              {steps.map((step) => (
                <article className="gp-step" key={step.number}>
                  <div className="gp-step-top">
                    <span>{step.number}</span>
                    <span className="gp-step-arrow">↗</span>
                  </div>
                  <div className="gp-step-line" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>

            <div className="gp-process-bottom">
              <span>NO ONE-SIZE-FITS-ALL CAMPAIGNS.</span>
              <span>STRATEGY BEFORE PLACEMENT. ✳</span>
            </div>
          </div>
        </section>

        <section className="gp-guidelines gp-section">
          <div className="gp-container gp-guidelines-layout">
            <div className="gp-guidelines-copy">
              <span className="gp-section-label">OUR QUALITY PRINCIPLES</span>
              <h2>
                Quality isn't
                <br />
                <span>an afterthought.</span>
              </h2>
              <p>
                Strong guest posting starts with useful content and a
                publication that fits. Our approach prioritizes relevance
                over arbitrary volume.
              </p>
              <a href="#gp-inquiry" className="gp-button gp-button-orange">
                Talk about your goals <span>↗</span>
              </a>
            </div>

            <div className="gp-guideline-list">
              {[
                ["01", "Topical relevance", "Prioritize publications that make sense for your industry."],
                ["02", "Editorial value", "Create content that serves readers, not just search engines."],
                ["03", "Transparent scope", "Discuss deliverables and placement details before work begins."],
                ["04", "Realistic expectations", "No guaranteed rankings or unsupported traffic promises."],
              ].map(([number, title, description]) => (
                <div className="gp-guideline-row" key={number}>
                  <span className="gp-guideline-number">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <span className="gp-guideline-check">✓</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gp-inquiry gp-section" id="gp-inquiry">
          <div className="gp-container gp-inquiry-layout">
            <div className="gp-inquiry-copy">
              <span className="gp-section-label gp-label-light">
                LET'S GET STARTED
              </span>
              <h2>
                Let's put your
                <br />
                <span>expertise out there.</span>
              </h2>
              <p>
                Tell us a little about your business and guest posting goals.
                We'll have the context needed to discuss your next steps.
              </p>

              <div className="gp-inquiry-note">
                <span>✳</span>
                <div>
                  <strong>A campaign built around your goals.</strong>
                  <p>
                    Share your niche, target audience and publishing
                    preferences to start the conversation.
                  </p>
                </div>
              </div>

              <div className="gp-inquiry-bottom">
                VEFTOR / GUEST POSTING
              </div>
            </div>

            <form className="gp-form" onSubmit={handleSubmit}>
              <div className="gp-form-heading">
                <span>PROJECT BRIEF / 001</span>
                <h3>Tell us what you have in mind.</h3>
                <p>Fields marked * are required.</p>
              </div>

              {submitted ? (
                <div className="gp-success" role="status">
                  <span>✓</span>
                  <h3>Thanks for sharing your brief.</h3>
                  <p>
                    This demo form doesn't send your details yet. Connect it
                    to your email or backend to receive real inquiries.
                  </p>
                  <button
                    type="button"
                    className="gp-button gp-button-orange"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another inquiry ↗
                  </button>
                </div>
              ) : (
                <>
                  <div className="gp-form-row">
                    <label>
                      Your name *
                      <input
                        name="name"
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        required
                      />
                    </label>
                    <label>
                      Work email *
                      <input
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                      />
                    </label>
                  </div>

                  <label>
                    Company / website *
                    <input
                      name="website"
                      type="text"
                      placeholder="Your company or website URL"
                      required
                    />
                  </label>

                  <label>
                    Industry *
                    <select
                      name="niche"
                      value={selectedNiche}
                      onChange={(event) => setSelectedNiche(event.target.value)}
                      required
                    >
                      {niches.map((niche) => (
                        <option key={niche.name} value={niche.name}>
                          {niche.name}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label>
                    What are you looking for? *
                    <select name="goal" required defaultValue="">
                      <option value="" disabled>
                        Select your primary goal
                      </option>
                      <option value="Brand awareness">Brand awareness</option>
                      <option value="Editorial placements">Editorial placements</option>
                      <option value="Content creation">Guest content creation</option>
                      <option value="Outreach campaign">Outreach campaign</option>
                      <option value="Other">Other / not sure yet</option>
                    </select>
                  </label>

                  <label>
                    Tell us about your project
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Your goals, target audience, preferred publications..."
                    />
                  </label>

                  <button
                    type="submit"
                    className="gp-button gp-button-orange gp-submit"
                  >
                    Send your project brief <span>↗</span>
                  </button>

                  <p className="gp-form-disclaimer">
                    Your details are intended for this inquiry. Add your
                    privacy policy and backend integration before collecting
                    live submissions.
                  </p>
                </>
              )}
            </form>
          </div>
        </section>

        <section className="gp-final-cta">
          <div className="gp-container gp-final-cta-inner">
            <div>
              <span>YOUR NEXT OPPORTUNITY STARTS HERE</span>
              <h2>
                Have something
                <br />
                <em>worth sharing?</em>
              </h2>
            </div>
            <Link href="/contact" className="gp-button gp-button-light">
              Contact our team <span>↗</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}