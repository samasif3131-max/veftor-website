import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Guest Posting",
    description:
      "Publish content on relevant websites to grow your brand visibility, reach new audiences, and earn valuable backlinks.",
    tags: ["Niche-Relevant Sites", "Editorial Content", "Brand Growth"],
    href: "#guest-posting",
    icon: "✳",
  },
  {
    number: "02",
    title: "Link Building",
    description:
      "Build a stronger backlink profile with relevant, quality-focused link building strategies designed for long-term SEO growth.",
    tags: ["Quality Backlinks", "Authority Growth", "SEO Strategy"],
    href: "#link-building",
    icon: "↗",
  },
  {
    number: "03",
    title: "SEO Services",
    description:
      "Improve your search visibility with practical SEO support, from website optimization to content and keyword strategy.",
    tags: ["On-Page SEO", "Keyword Research", "Content Strategy"],
    href: "#seo-services",
    icon: "◎",
  },
  {
    number: "04",
    title: "Publisher Marketplace",
    description:
      "Discover publishing opportunities, showcase your website, and connect with businesses looking for relevant placements.",
    tags: ["Publisher Discovery", "Website Listings", "Campaigns"],
    href: "#publisher-marketplace",
    icon: "⌘",
  },
];

const benefits = [
  {
    number: "01",
    title: "Relevant Opportunities",
    text: "Find services and publishing opportunities that align with your niche, audience, and business goals.",
    icon: "◈",
  },
  {
    number: "02",
    title: "One Connected Platform",
    text: "Explore guest posting, backlinks, publisher opportunities, and SEO solutions in one place.",
    icon: "◎",
  },
  {
    number: "03",
    title: "Growth-Focused Approach",
    text: "Focus on useful content, relevant websites, and sustainable search visibility for your business.",
    icon: "↗",
  },
];

const process = [
  {
    number: "01",
    title: "Choose Your Service",
    text: "Explore our services and choose the solution that best matches your goals.",
  },
  {
    number: "02",
    title: "Explore Opportunities",
    text: "Discover relevant publishers, placements, and optimization opportunities.",
  },
  {
    number: "03",
    title: "Move Forward",
    text: "Take the next step toward stronger content, authority, and search visibility.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="vf-services-page">
        {/* HERO SECTION */}
        <section className="vf-services-hero">
          <div className="vf-services-glow" />

          <div className="vf-services-container vf-services-hero-grid">
            <div className="vf-services-hero-content">
              <div className="vf-services-eyebrow">
                <span className="vf-services-status-dot" />
                THE VEFTOR SERVICES ECOSYSTEM
              </div>

              <h1>
                Smarter SEO.
                <br />
                <span>Stronger Growth.</span>
              </h1>

              <p className="vf-services-hero-description">
                Discover guest posting, quality-focused link building, and
                SEO solutions designed to help your business build visibility
                and grow online.
              </p>

              <div className="vf-services-hero-actions">
                <a href="#all-services" className="vf-services-primary-btn">
                  Explore Services <span>↗</span>
                </a>

                <a
                  href="#how-it-works"
                  className="vf-services-secondary-btn"
                >
                  How It Works <span>↓</span>
                </a>
              </div>

              <div className="vf-services-trust-line">
                <span>Guest Posting</span>
                <span className="vf-services-trust-separator">/</span>
                <span>Link Building</span>
                <span className="vf-services-trust-separator">/</span>
                <span>SEO Solutions</span>
              </div>
            </div>

            <div className="vf-services-visual">
              <div className="vf-services-orbit vf-services-orbit-one" />
              <div className="vf-services-orbit vf-services-orbit-two" />

              <div className="vf-services-center-card">
                <div className="vf-services-logo-mark">V</div>

                <span className="vf-services-center-label">
                  YOUR GROWTH HUB
                </span>

                <h2>
                  Built for
                  <br />
                  Better Visibility
                </h2>

                <p>Content. Authority. Search.</p>
              </div>

              <div className="vf-services-floating-card vf-services-float-top">
                <span className="vf-services-float-icon">↗</span>

                <div>
                  <strong>Link Building</strong>
                  <small>Build your authority</small>
                </div>
              </div>

              <div className="vf-services-floating-card vf-services-float-bottom">
                <span className="vf-services-float-icon">◎</span>

                <div>
                  <strong>SEO Strategy</strong>
                  <small>Grow your visibility</small>
                </div>
              </div>

              <div className="vf-services-visual-dot vf-services-dot-one" />
              <div className="vf-services-visual-dot vf-services-dot-two" />
            </div>
          </div>

          <a href="#all-services" className="vf-services-scroll-indicator">
            <span />
            DISCOVER OUR SERVICES
          </a>
        </section>

        {/* SERVICES SECTION */}
        <section
          className="vf-services-list-section"
          id="all-services"
        >
          <div className="vf-services-container">
            <div className="vf-services-section-heading">
              <div>
                <span className="vf-services-section-label">
                  WHAT WE OFFER
                </span>

                <h2>
                  Everything you need
                  <br />
                  <span>to grow online.</span>
                </h2>
              </div>

              <p>
                Explore services that connect content, publishers, and search
                optimization in one streamlined ecosystem.
              </p>
            </div>

            <div className="vf-services-grid">
              {services.map((service) => (
                <article
                  className="vf-service-card"
                  key={service.number}
                  id={service.href.replace("#", "")}
                >
                  <div className="vf-service-card-top">
                    <span className="vf-service-number">
                      {service.number}
                    </span>

                    <span className="vf-service-arrow">{service.icon}</span>
                  </div>

                  <div className="vf-service-icon-box">{service.icon}</div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="vf-service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    href="/marketplace"
                    className="vf-service-link"
                  >
                    Explore service <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY VEFTOR */}
        <section className="vf-services-benefits" id="why-veftor">
          <div className="vf-services-container">
            <div className="vf-services-section-heading">
              <div>
                <span className="vf-services-section-label">
                  WHY VEFTOR
                </span>

                <h2>
                  A clearer path
                  <br />
                  <span>to online growth.</span>
                </h2>
              </div>

              <p>
                Bring your content and SEO goals together with a platform
                built around relevant opportunities and practical solutions.
              </p>
            </div>

            <div className="vf-services-benefit-grid">
              {benefits.map((benefit) => (
                <article
                  className="vf-services-benefit"
                  key={benefit.number}
                >
                  <div className="vf-services-benefit-icon">
                    {benefit.icon}
                  </div>

                  <span className="vf-services-benefit-number">
                    {benefit.number}
                  </span>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          className="vf-services-process-section"
          id="how-it-works"
        >
          <div className="vf-services-container">
            <div className="vf-services-process-heading">
              <span className="vf-services-section-label">
                HOW IT WORKS
              </span>

              <h2>
                From your goals
                <br />
                <span>to your next step.</span>
              </h2>

              <p>
                A straightforward way to explore services and discover
                opportunities for your business.
              </p>
            </div>

            <div className="vf-services-process-grid">
              {process.map((step) => (
                <article
                  className="vf-services-process-card"
                  key={step.number}
                >
                  <span className="vf-services-process-number">
                    {step.number}
                  </span>

                  <div className="vf-services-process-line" />

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          className="vf-services-cta-section"
          id="get-started"
        >
          <div className="vf-services-container">
            <div className="vf-services-cta">
              <div className="vf-services-cta-glow" />

              <span className="vf-services-section-label">
                READY TO GET STARTED?
              </span>

              <h2>
                Let&apos;s build your
                <br />
                next growth story.
              </h2>

              <p>
                Explore the Veftor ecosystem and find the right starting
                point for your SEO and content goals.
              </p>

              <div className="vf-services-hero-actions vf-services-cta-actions">
                <a
                  href="/marketplace"
                  className="vf-services-primary-btn"
                >
                  Explore Marketplace <span>↗</span>
                </a>

                <a
                  href="/#contact"
                  className="vf-services-secondary-btn"
                >
                  Contact Us <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}