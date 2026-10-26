
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./LinkBuilding.css";

const services = [
  { number: "01", icon: "↗", title: "Authority Backlinks", text: "Earn relevant editorial backlinks that support website authority and sustainable organic growth." },
  { number: "02", icon: "✳", title: "Digital PR", text: "Build brand visibility through compelling stories, industry publications and editorial coverage." },
  { number: "03", icon: "⌁", title: "Niche-Relevant Links", text: "Focus on websites connected to your industry, audience and subject matter." },
  { number: "04", icon: "◎", title: "Link Gap Analysis", text: "Discover competitor backlink opportunities and identify practical ways to strengthen your profile." },
  { number: "05", icon: "↔", title: "Resource Link Building", text: "Promote useful resources and valuable content to publishers who may find them helpful." },
  { number: "06", icon: "⌘", title: "Backlink Audits", text: "Review referring domains, identify potential risks and plan a stronger off-page SEO strategy." },
];

const steps = [
  ["01", "Discover", "Understand your website, niche, competitors and SEO goals."],
  ["02", "Strategize", "Identify relevant websites and prioritize meaningful opportunities."],
  ["03", "Outreach", "Build genuine publisher relationships through personalized outreach."],
  ["04", "Measure", "Review placements, referring domains and campaign progress."],
];

const faqs = [
  { question: "What is link building?", answer: "Link building is the process of earning links from other websites to yours. Relevant, editorially earned links can support discovery, credibility and SEO." },
  { question: "How do you choose websites for backlinks?", answer: "We consider topical relevance, editorial quality, audience fit, website credibility and whether a placement makes sense in context." },
  { question: "How long does link building take?", answer: "Timelines depend on your niche, competition, publisher response times and campaign goals. SEO improvements are not immediate or guaranteed." },
  { question: "Can link building guarantee rankings?", answer: "No responsible SEO service can guarantee a specific ranking. Link building is one part of a broader SEO strategy." },
];

export default function LinkBuildingPage() {
  return (
    <>
      <Navbar />

      <main className="vlink-page">
        <section className="vlink-hero">
          <div className="vlink-hero-grid-bg" aria-hidden="true" />
          <div className="vlink-hero-glow" aria-hidden="true" />

          <div className="vlink-container vlink-hero-layout">
            <div className="vlink-hero-content">
              <div className="vlink-eyebrow">
                <span className="vlink-live-dot" />
                STRATEGIC LINK BUILDING
              </div>

              <h1 className="vlink-title">
                Build links.
                <br />
                Build <span>authority.</span>
                <br />
                Grow with purpose.
              </h1>

              <p className="vlink-lead">
                Connect your brand with relevant websites, earn meaningful
                backlinks and build a stronger foundation for long-term
                organic growth.
              </p>

              <div className="vlink-actions">
                <Link href="/contact" className="vlink-button vlink-button-orange">
                  Discuss your project <span>↗</span>
                </Link>
                <a href="#vlink-services" className="vlink-button vlink-button-light">
                  Explore services <span>↓</span>
                </a>
              </div>

              <div className="vlink-trust">
                <span>✓</span>
                Relevance-first strategy. Transparent process.
              </div>
            </div>

            <div className="vlink-hero-visual">
              <div className="vlink-image-frame">
                <img
                  className="vlink-hero-image"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
                  alt="Digital marketing analytics and website performance"
                />
                <div className="vlink-image-overlay" />
                <div className="vlink-image-caption">
                  <span className="vlink-caption-icon">↗</span>
                  <div>
                    <strong>Build meaningful connections</strong>
                    <small>Research · Relevance · Authority</small>
                  </div>
                </div>
              </div>

              <div className="vlink-float-card vlink-float-top">
                <span className="vlink-float-icon">✳</span>
                <div>
                  <small>OUR PRIORITY</small>
                  <strong>Editorial quality</strong>
                </div>
              </div>

              <div className="vlink-float-card vlink-float-bottom">
                <span className="vlink-float-icon vlink-green">◎</span>
                <div>
                  <small>OUR APPROACH</small>
                  <strong>Niche relevance</strong>
                </div>
              </div>

              <div className="vlink-orbit vlink-orbit-a" />
              <div className="vlink-orbit vlink-orbit-b" />
            </div>
          </div>

          <div className="vlink-container vlink-hero-footer">
            <span>QUALITY OVER QUANTITY</span>
            <span className="vlink-footer-line" />
            <span>LINKS WITH A PURPOSE</span>
          </div>
        </section>

        <section className="vlink-marquee" aria-label="Link building principles">
          <div className="vlink-marquee-track">
            {[0, 1].map((group) => (
              <div className="vlink-marquee-group" key={group} aria-hidden={group === 1}>
                <span>Relevant Backlinks</span><i>✳</i>
                <span>Editorial Quality</span><i>✳</i>
                <span>Strategic Outreach</span><i>✳</i>
                <span>Organic Growth</span><i>✳</i>
                <span>Lasting Authority</span><i>✳</i>
              </div>
            ))}
          </div>
        </section>

        <section className="vlink-section vlink-intro">
          <div className="vlink-container vlink-intro-layout">
            <div>
              <div className="vlink-kicker">01 / THE STRATEGY</div>
              <h2 className="vlink-heading">
                Not just more links.
                <br />
                <span>Better connections.</span>
              </h2>
            </div>

            <div className="vlink-intro-content">
              <p className="vlink-paragraph">
                Strong link building is about earning connections that make
                sense for your business. We focus on relevant websites,
                thoughtful outreach and editorial placements that support
                your wider SEO strategy.
              </p>

              <div className="vlink-mini-grid">
                <div><span>01</span><h3>Relevance</h3><p>Websites related to your niche and audience.</p></div>
                <div><span>02</span><h3>Credibility</h3><p>Useful placements with meaningful context.</p></div>
                <div><span>03</span><h3>Consistency</h3><p>A considered long-term approach to SEO.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="vlink-section vlink-services" id="vlink-services">
          <div className="vlink-container">
            <div className="vlink-section-header">
              <div>
                <div className="vlink-kicker vlink-kicker-light">02 / OUR SERVICES</div>
                <h2 className="vlink-heading vlink-heading-light">
                  A smarter way to
                  <br />
                  <span>earn authority.</span>
                </h2>
              </div>
              <p className="vlink-paragraph vlink-paragraph-light">
                Every website has different needs. Explore our link building
                services and find an approach that fits your goals.
              </p>
            </div>

            <div className="vlink-service-grid">
              {services.map((service) => (
                <article className="vlink-service-card" key={service.number}>
                  <div className="vlink-card-top">
                    <span className="vlink-card-number">{service.number}</span>
                    <span className="vlink-card-icon">{service.icon}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="vlink-card-bottom">
                    <span>Explore our approach</span>
                    <span className="vlink-card-arrow">↗</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vlink-section vlink-feature">
          <div className="vlink-container vlink-feature-layout">
            <div className="vlink-feature-media">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
                alt="Marketing team collaborating on a digital strategy"
                className="vlink-feature-image"
                loading="lazy"
              />
              <div className="vlink-feature-label">
                <span>✳</span> Strategy backed by research
              </div>
            </div>

            <div className="vlink-feature-content">
              <div className="vlink-kicker">03 / THE VEFTOR APPROACH</div>
              <h2 className="vlink-heading">
                Earn links you can
                <br />
                <span>stand behind.</span>
              </h2>
              <p className="vlink-paragraph">
                We believe quality matters more than raw link volume.
                Our approach emphasizes relevance, editorial integrity and
                clear communication throughout the campaign.
              </p>

              <ul className="vlink-check-list">
                <li><span>✓</span> Relevant websites and contextual placements</li>
                <li><span>✓</span> Thoughtful, personalized outreach</li>
                <li><span>✓</span> Transparent reporting and communication</li>
                <li><span>✓</span> Sustainable SEO practices</li>
              </ul>

              <Link href="/contact" className="vlink-text-link">
                Talk to our team <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="vlink-section vlink-process">
          <div className="vlink-container">
            <div className="vlink-kicker">04 / HOW IT WORKS</div>
            <div className="vlink-section-header">
              <h2 className="vlink-heading">
                Clear steps.
                <br />
                <span>Purposeful progress.</span>
              </h2>
              <p className="vlink-paragraph">
                A structured workflow keeps your campaign focused, organized
                and aligned with your business goals.
              </p>
            </div>

            <div className="vlink-process-grid">
              {steps.map(([number, title, description]) => (
                <article className="vlink-process-card" key={number}>
                  <div className="vlink-process-top">
                    <span>{number}</span><span className="vlink-process-icon">↗</span>
                  </div>
                  <div className="vlink-process-line"><span /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vlink-section vlink-faq">
          <div className="vlink-container vlink-faq-layout">
            <div>
              <div className="vlink-kicker">05 / QUESTIONS</div>
              <h2 className="vlink-heading">
                Good questions.
                <br />
                <span>Clear answers.</span>
              </h2>
              <p className="vlink-paragraph">
                Want to understand how link building fits into your SEO plan?
                Here are a few common questions.
              </p>
              <Link href="/contact" className="vlink-text-link">
                Ask us a question <span>↗</span>
              </Link>
            </div>

            <div className="vlink-faq-list">
              {faqs.map((faq) => (
                <details className="vlink-faq-item" key={faq.question}>
                  <summary>{faq.question}<span>+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="vlink-cta">
          <div className="vlink-cta-orb" />
          <div className="vlink-container vlink-cta-layout">
            <div className="vlink-cta-content">
              <div className="vlink-kicker vlink-kicker-light">
                LET&apos;S BUILD SOMETHING VALUABLE
              </div>
              <h2>
                Your next stage
                <br />
                of growth starts with
                <br />
                <span>the right links.</span>
              </h2>
              <p>
                Tell us about your website and SEO goals. Let&apos;s explore a
                strategy tailored to your business.
              </p>
              <div className="vlink-actions">
                <Link href="/contact" className="vlink-button vlink-button-orange">
                  Discuss your project <span>↗</span>
                </Link>
                <Link href="/get-started" className="vlink-button vlink-button-ghost">
                  Get started <span>→</span>
                </Link>
              </div>
            </div>

            <div className="vlink-cta-art" aria-hidden="true">
              <div className="vlink-cta-ring vlink-ring-one" />
              <div className="vlink-cta-ring vlink-ring-two" />
              <div className="vlink-cta-ring vlink-ring-three" />
              <div className="vlink-cta-center">V.</div>
              <span className="vlink-cta-node vlink-node-one">↗</span>
              <span className="vlink-cta-node vlink-node-two">✳</span>
              <span className="vlink-cta-node vlink-node-three">◎</span>
              <span className="vlink-cta-node vlink-node-four">⌁</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
