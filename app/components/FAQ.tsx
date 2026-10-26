
"use client";

import { useState } from "react";
import "./FAQ.css";

const questions = [
  {
    question: "What is Veftor?",
    answer:
      "Veftor is designed as a marketplace where buyers can discover publisher websites and explore link-building opportunities.",
  },
  {
    question: "How do I choose the right publisher?",
    answer:
      "Compare niche relevance, domain metrics, traffic estimates, pricing and the publisher's editorial requirements before placing an order.",
  },
  {
    question: "How does the publishing process work?",
    answer:
      "The intended workflow covers publisher selection, order submission, content review and delivery of the published link. Exact timing depends on the publisher and agreed terms.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "The final refund policy must be provided by the Veftor team and displayed here after it has been confirmed.",
  },
  {
    question: "Are DoFollow and NoFollow links available?",
    answer:
      "Link attributes depend on the publisher's policies and the terms of each placement. Confirm the expected link type before ordering.",
  },
  {
    question: "Can I list my own website?",
    answer:
      "The planned marketplace supports publisher participation. The actual listing process and verification requirements should be confirmed by the Veftor team.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="section faq-section" id="faqs">
      <div className="container faq-layout">
        <div className="faq-intro">
          <span className="section-kicker">NEED TO KNOW</span>
          <h2>
            Questions?
            <br />
            <span>We've got answers.</span>
          </h2>
          <p>
            Find helpful information about publisher discovery, order
            workflows and link-building opportunities.
          </p>
          <a className="button button-primary" href="#contact">
            Contact our team ↗
          </a>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = activeIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article className={`faq-item ${isOpen ? "faq-open" : ""}`} key={item.question}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-toggle" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className="faq-answer"
                  id={answerId}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
