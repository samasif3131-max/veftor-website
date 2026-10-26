
"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./get-started.css";

const options = [
  {
    id: "advertiser",
    number: "01",
    icon: "↗",
    title: "I'm an Advertiser",
    description:
      "Discover publishers, buy guest posts, and build quality backlinks for your website.",
  },
  {
    id: "publisher",
    number: "02",
    icon: "◎",
    title: "I'm a Publisher",
    description:
      "List your website, connect with advertisers, and earn from publishing opportunities.",
  },
  {
    id: "agency",
    number: "03",
    icon: "✳",
    title: "I'm an Agency",
    description:
      "Manage link-building campaigns and find publishing opportunities for your clients.",
  },
];

export default function GetStartedPage() {
  const [selected, setSelected] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selected) {
      setMessage("Please select an option to continue.");
      return;
    }

    const subject = encodeURIComponent("Get Started with Veftor");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nWebsite: ${website || "Not provided"}\nAccount type: ${selected}\n\nI would like to get started with Veftor.`
    );

    window.location.href = `mailto:support@veftor.com?subject=${subject}&body=${body}`;
    setMessage(
      "Your email app should open with your details. Please send the email to complete your inquiry."
    );
  }

  return (
    <>
      <Navbar />

      <main className="gs-page">
        <section className="gs-hero">
          <div className="gs-eyebrow">
            <span className="gs-eyebrow-dot" />
            YOUR NEXT STEP STARTS HERE
          </div>

          <h1>
            Let&apos;s grow
            <br />
            <span>together.</span>
          </h1>

          <p className="gs-intro">
            Whether you&apos;re building backlinks, publishing content, or
            growing client campaigns, Veftor helps you find the right
            opportunities.
          </p>

          <div className="gs-layout">
            <div className="gs-left">
              <h2>First, tell us about yourself.</h2>
              <p className="gs-help">
                Choose the option that best describes you.
              </p>

              <div className="gs-options">
                {options.map((option) => (
                  <button
                    type="button"
                    key={option.id}
                    className={`gs-option ${
                      selected === option.id ? "gs-option-selected" : ""
                    }`}
                    onClick={() => {
                      setSelected(option.id);
                      setMessage("");
                    }}
                    aria-pressed={selected === option.id}
                  >
                    <span className="gs-option-icon">{option.icon}</span>

                    <span className="gs-option-content">
                      <span className="gs-option-number">
                        {option.number}
                      </span>
                      <span className="gs-option-title">
                        {option.title}
                      </span>
                      <span className="gs-option-description">
                        {option.description}
                      </span>
                    </span>

                    <span className="gs-option-check">
                      {selected === option.id ? "✓" : "→"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="gs-right">
              <div className="gs-form-heading">
                <span className="gs-form-step">YOUR DETAILS</span>
                <h2>Let&apos;s make it happen.</h2>
                <p>Share a few details so we can get you started.</p>
              </div>

              <form className="gs-form" onSubmit={handleSubmit}>
                <label htmlFor="gs-name">Full name *</label>
                <input
                  id="gs-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  required
                />

                <label htmlFor="gs-email">Work email *</label>
                <input
                  id="gs-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  required
                />

                <label htmlFor="gs-website">Website URL (optional)</label>
                <input
                  id="gs-website"
                  name="website"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />

                {message && (
                  <p className="gs-message" role="status">
                    {message}
                  </p>
                )}

                <button type="submit" className="gs-submit">
                  Get Started <span>→</span>
                </button>

                <p className="gs-privacy">
                  By continuing, you agree to be contacted about your inquiry.
                </p>
              </form>
            </div>
          </div>

          <div className="gs-bottom-note">
            <span>✳</span>
            One marketplace. More opportunities. Better growth.
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
