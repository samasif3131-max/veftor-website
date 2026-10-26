
"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      <main className="vc-page">
        {/* Hero Section */}
        <section className="vc-hero">
          <div className="vc-hero-inner">
            <div className="vc-eyebrow">
              <span className="vc-eyebrow-dot" />
              WE&apos;RE HERE TO HELP
            </div>

            <h1>
              Let&apos;s talk about
              <br />
              your <span>growth.</span>
            </h1>

            <p className="vc-hero-description">
              Have a question about link building, guest posting, or our
              publisher marketplace? We&apos;d love to hear from you.
              Tell us what you need, and let&apos;s explore the possibilities.
            </p>

            <a href="#contact-form" className="vc-hero-button">
              Get in Touch <span>↗</span>
            </a>

            <div className="vc-hero-trust">
              <span className="vc-trust-icon">✓</span>
              Real conversations. Clear answers. Better opportunities.
            </div>
          </div>

          <div className="vc-hero-decoration vc-decoration-one" />
          <div className="vc-hero-decoration vc-decoration-two" />

          <div className="vc-hero-badge">
            <span className="vc-badge-icon">✳</span>
            <div>
              <strong>Let&apos;s connect</strong>
              <span>Your next opportunity starts here.</span>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="vc-contact-section">
          <div className="vc-section-heading">
            <span className="vc-section-label">GET IN TOUCH</span>
            <h2>
              We&apos;re all ears.
              <span> Tell us everything.</span>
            </h2>
            <p>
              Whether you&apos;re exploring our platform or need help with a
              campaign, choose the best way to connect with us.
            </p>
          </div>

          <div className="vc-info-grid">
            <article className="vc-info-card">
              <div className="vc-info-icon vc-icon-orange">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3>Email Us</h3>

              <p>
                Have a question or need more information? Send our team a
                message.
              </p>

              <a href="#contact-form">
                Send an inquiry <span>→</span>
              </a>
            </article>

            <article className="vc-info-card">
              <div className="vc-info-icon vc-icon-green">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </div>

              <h3>Explore Veftor</h3>

              <p>
                Discover publishing opportunities and find the right services
                for your next campaign.
              </p>

              <a href="/marketplace">
                Explore marketplace <span>→</span>
              </a>
            </article>

            <article className="vc-info-card">
              <div className="vc-info-icon vc-icon-navy">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="M12 7v5l3.5 2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3>Have a Project?</h3>

              <p>
                Tell us about your goals, your website, and the results
                you&apos;re looking to achieve.
              </p>

              <a href="/get-started">
                Get started <span>→</span>
              </a>
            </article>
          </div>
        </section>

        {/* Main Contact Form */}
        <section className="vc-form-section" id="contact-form">
          <div className="vc-form-layout">
            <div className="vc-form-sidebar">
              <span className="vc-section-label">LET&apos;S CONNECT</span>

              <h2>
                Your next big
                <br />
                idea starts with
                <br />
                a <span>conversation.</span>
              </h2>

              <p>
                Share a little about what you&apos;re looking for. Complete
                the form and we&apos;ll help you identify the next step.
              </p>

              <div className="vc-sidebar-points">
                <div>
                  <span className="vc-point-check">✓</span>
                  <span>Tell us about your goals</span>
                </div>

                <div>
                  <span className="vc-point-check">✓</span>
                  <span>Choose the right inquiry type</span>
                </div>

                <div>
                  <span className="vc-point-check">✓</span>
                  <span>Give us the details we need</span>
                </div>
              </div>

              <div className="vc-sidebar-note">
                <span className="vc-note-mark">“</span>
                <p>
                  Great partnerships begin with understanding what matters
                  most to you.
                </p>
              </div>
            </div>

            <div className="vc-form-card">
              {submitted ? (
                <div className="vc-success" role="status">
                  <div className="vc-success-icon">✓</div>

                  <h3>Thanks for reaching out!</h3>

                  <p>
                    Your form has been completed successfully in this demo.
                    To receive real inquiries, this form still needs to be
                    connected to an email service or backend.
                  </p>

                  <button
                    type="button"
                    className="vc-reset-button"
                    onClick={() => {
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        subject: "General Inquiry",
                        message: "",
                      });

                      setSubmitted(false);
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="vc-form-header">
                    <span className="vc-form-label">CONTACT FORM</span>
                    <h3>Tell us what you need.</h3>
                    <p>Fields marked with * are required.</p>
                  </div>

                  <form className="vc-form" onSubmit={handleSubmit}>
                    <div className="vc-field-row">
                      <div className="vc-field">
                        <label htmlFor="vc-name">Full Name *</label>

                        <input
                          id="vc-name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          autoComplete="name"
                          required
                        />
                      </div>

                      <div className="vc-field">
                        <label htmlFor="vc-email">Email Address *</label>

                        <input
                          id="vc-email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                          required
                        />
                      </div>
                    </div>

                    <div className="vc-field">
                      <label htmlFor="vc-company">
                        Company or Website
                      </label>

                      <input
                        id="vc-company"
                        name="company"
                        type="text"
                        placeholder="Your company name or website"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="vc-field">
                      <label htmlFor="vc-subject">How can we help? *</label>

                      <select
                        id="vc-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="General Inquiry">
                          General Inquiry
                        </option>

                        <option value="Guest Posting">
                          Guest Posting
                        </option>

                        <option value="Link Building">
                          Link Building
                        </option>

                        <option value="Publisher Marketplace">
                          Publisher Marketplace
                        </option>

                        <option value="Become a Publisher">
                          Become a Publisher
                        </option>

                        <option value="Agency Partnership">
                          Agency Partnership
                        </option>

                        <option value="Technical Support">
                          Technical Support
                        </option>

                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="vc-field">
                      <label htmlFor="vc-message">Your Message *</label>

                      <textarea
                        id="vc-message"
                        name="message"
                        placeholder="Tell us a little about your goals, questions, or project..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                      />
                    </div>

                    <button type="submit" className="vc-submit-button">
                      Send Your Message <span>→</span>
                    </button>

                    <p className="vc-form-disclaimer">
                      Your information should only be used to respond to
                      your inquiry. Connect a backend before collecting
                      real customer submissions.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="vc-faq-section">
          <div className="vc-faq-heading">
            <span className="vc-section-label">GOOD TO KNOW</span>

            <h2>
              A few things you
              <br />
              <span>might be wondering.</span>
            </h2>

            <p>
              Need more information before reaching out? Start here.
            </p>
          </div>

          <div className="vc-faq-list">
            <details className="vc-faq-item">
              <summary>
                What can I contact Veftor about?
                <span>+</span>
              </summary>

              <p>
                You can contact us about guest posting, link building,
                publisher opportunities, agency partnerships, marketplace
                questions, or general inquiries.
              </p>
            </details>

            <details className="vc-faq-item">
              <summary>
                I&apos;m a publisher. How can I get started?
                <span>+</span>
              </summary>

              <p>
                Visit our marketplace or Get Started page to explore the
                available options. You can also select publisher-related
                inquiries in the contact form.
              </p>
            </details>

            <details className="vc-faq-item">
              <summary>
                Can agencies work with Veftor?
                <span>+</span>
              </summary>

              <p>
                Agencies can contact us about campaign requirements,
                publisher discovery, and potential partnership opportunities.
              </p>
            </details>

            <details className="vc-faq-item">
              <summary>
                Will this contact form send my message?
                <span>+</span>
              </summary>

              <p>
                This version demonstrates the form and validates required
                fields, but it does not transmit data. A backend or form
                service must be connected to receive real inquiries.
              </p>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <section className="vc-final-cta">
          <div className="vc-cta-decoration" />

          <span className="vc-cta-label">YOUR NEXT CHAPTER STARTS HERE</span>

          <h2>
            Ready to build
            <br />
            <span>something great?</span>
          </h2>

          <p>
            Explore the Veftor platform and discover opportunities for
            your next campaign.
          </p>

          <div className="vc-cta-actions">
            <a href="/get-started" className="vc-cta-primary">
              Get Started <span>→</span>
            </a>

            <a href="/marketplace" className="vc-cta-secondary">
              Explore Marketplace
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}