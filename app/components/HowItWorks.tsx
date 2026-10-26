
"use client";

import { useState } from "react";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: "⌕",
    title: "Find Your Match",
    description:
      "Explore websites by niche, authority, traffic and budget.",
    color: "step-blue",
  },
  {
    number: "02",
    icon: "↗",
    title: "Place Your Order",
    description:
      "Choose a publisher and submit your guest-post requirements.",
    color: "step-green",
  },
  {
    number: "03",
    icon: "✓",
    title: "Review Content",
    description:
      "Check your content and follow the progress of your order.",
    color: "step-orange",
  },
  {
    number: "04",
    icon: "◎",
    title: "Get Your Live Link",
    description:
      "Receive the published URL when your order is completed.",
    color: "step-purple",
  },
];

export default function HowItWorks() {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !question.trim()) return;

    setSubmitted(true);
    setQuestion("");
  }

  return (
    <section className="section how-section" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">SIMPLE. TRANSPARENT. EFFECTIVE.</span>
          <h2>
            From search to <span>published.</span>
          </h2>
          <p>
            A straightforward workflow that keeps your link-building
            campaign organized at every step.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className={`step-card ${step.color}`} key={step.number}>
              <div className="step-top">
                <span className="step-number">{step.number}</span>
                <span className="step-icon">{step.icon}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="step-bottom-line" />
            </article>
          ))}
        </div>

        <div className="assistant-panel">
          <div className="assistant-copy">
            <span className="section-kicker">VEFTOR ASSISTANT</span>
            <h3>Have a campaign in mind?</h3>
            <p>
              Tell us what you need. Leave your email and campaign question
              so the team can follow up when the messaging service is connected.
            </p>

            <div className="assistant-points">
              <span>✓ Publisher discovery</span>
              <span>✓ Campaign guidance</span>
              <span>✓ Order support</span>
            </div>
          </div>

          <div className="chat-window">
            <div className="chat-header">
              <span className="chat-avatar">V</span>
              <div>
                <strong>Veftor Assistant</strong>
                <small><span className="online-dot" /> Inquiry form demo</small>
              </div>
            </div>

            <div className="chat-body">
              <div className="chat-message chat-bot">
                Hi there! What kind of link-building campaign are you planning?
              </div>

              {submitted && (
                <div className="chat-message chat-user">
                  Your demo inquiry has been prepared. No message has been sent yet.
                </div>
              )}

              <form className="chat-form" onSubmit={handleSubmit}>
                <label htmlFor="assistant-email">Your email</label>
                <input
                  id="assistant-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  required
                />

                <label htmlFor="assistant-question">How can we help?</label>
                <textarea
                  id="assistant-question"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="I need publishers in the technology niche..."
                  required
                  rows={3}
                />

                <button className="button button-primary chat-submit" type="submit">
                  Prepare inquiry <span>↗</span>
                </button>

                <small className="chat-disclaimer">
                  Demo only — connect an API to deliver inquiries to the admin team.
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
