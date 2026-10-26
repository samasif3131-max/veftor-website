"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./FAQs.css";

const faqGroups = [
  {
    category: "Getting Started",
    label: "01 / The Basics",
    title: "New to Veftor?",
    description:
      "Everything you need to know before starting your link-building journey.",
    questions: [
      {
        question: "What is Veftor?",
        answer:
          "Veftor is a link-building and publisher marketplace platform designed to help businesses, SEO professionals, and agencies discover publishers and explore opportunities to strengthen their online visibility.",
      },
      {
        question: "Who can use Veftor?",
        answer:
          "Veftor is designed for advertisers, website owners, SEO professionals, digital marketing agencies, and publishers who want to explore content placement and link-building opportunities.",
      },
      {
        question: "How do I get started?",
        answer:
          "Start by exploring our Services and Marketplace pages to understand the available options. When you're ready, select Get Started to begin your journey with Veftor.",
      },
      {
        question: "Do I need SEO experience to use Veftor?",
        answer:
          "No. Whether you're new to SEO or an experienced professional, you can explore our services and choose options that align with your goals and level of experience.",
      },
    ],
  },
  {
    category: "Services & Link Building",
    label: "02 / Our Services",
    title: "Understand our services.",
    description:
      "Learn more about guest posting, link building, and SEO services.",
    questions: [
      {
        question: "What is guest posting?",
        answer:
          "Guest posting involves publishing useful, relevant content on another website. It can help businesses reach new audiences, build brand awareness, and earn relevant backlinks when placements are editorially appropriate.",
      },
      {
        question: "What is link building?",
        answer:
          "Link building is the process of earning links from other websites to your own. Quality link-building strategies focus on relevance, useful content, editorial integrity, and long-term SEO value.",
      },
      {
        question: "What SEO services does Veftor offer?",
        answer:
          "Explore the Services page for information about Veftor's service offerings, including guest posting, link building, and SEO-related solutions. Available services and terms should be confirmed before placing an order.",
      },
      {
        question: "Can link building guarantee higher Google rankings?",
        answer:
          "No. Search rankings depend on many factors, including content quality, technical SEO, competition, and search engine algorithms. No legitimate provider can guarantee a specific ranking or a particular timeline.",
      },
    ],
  },
  {
    category: "Marketplace",
    label: "03 / The Marketplace",
    title: "Find the right opportunities.",
    description:
      "Answers for advertisers, publishers, and marketing agencies.",
    questions: [
      {
        question: "What is the Veftor Marketplace?",
        answer:
          "The Veftor Marketplace is designed to help users explore publisher-related opportunities. Visit the Marketplace page to learn more about the options available for advertisers, publishers, and agencies.",
      },
      {
        question: "Who are advertisers?",
        answer:
          "Advertisers are businesses, website owners, or marketing professionals looking to promote their brands, publish content, or explore relevant link-building opportunities.",
      },
      {
        question: "How can publishers benefit?",
        answer:
          "Publishers can explore opportunities to connect with businesses that need relevant content placements. Eligibility, publishing requirements, and commercial terms should be confirmed through the platform.",
      },
      {
        question: "Can marketing agencies use Veftor?",
        answer:
          "Yes. Veftor is designed to serve agencies looking for link-building and publisher-related opportunities. Visit the Marketplace page to explore the options intended for agencies.",
      },
    ],
  },
  {
    category: "Orders & Support",
    label: "04 / Working Together",
    title: "Need a little more clarity?",
    description:
      "Helpful information about choosing services and getting assistance.",
    questions: [
      {
        question: "How do I choose the right service?",
        answer:
          "Start with your campaign goals, target audience, website relevance, and budget. Review the Services and Marketplace pages to understand your options before deciding which approach best fits your needs.",
      },
      {
        question: "How long does link building take to show results?",
        answer:
          "SEO results vary depending on your website, competition, content, and the links acquired. Meaningful changes can take weeks or months, and results are never guaranteed.",
      },
      {
        question: "How can I contact Veftor?",
        answer:
          "Use the Contact Us option in the main navigation to find the appropriate way to reach the Veftor team. Include your goals and questions so the team can better understand your request.",
      },
    ],
  },
];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [openQuestion, setOpenQuestion] = useState<string | null>("0-0");
  const [search, setSearch] = useState("");

  const categories = [
    "All Questions",
    ...faqGroups.map((group) => group.category),
  ];

  const filteredGroups = faqGroups
    .map((group, groupIndex) => ({
      ...group,
      originalIndex: groupIndex,
      questions: group.questions
        .map((item, questionIndex) => ({
          ...item,
          originalIndex: questionIndex,
        }))
        .filter((item) => {
          const matchesSearch =
            item.question.toLowerCase().includes(search.toLowerCase()) ||
            item.answer.toLowerCase().includes(search.toLowerCase());

          return matchesSearch;
        }),
    }))
    .filter((group) => {
      const matchesCategory =
        activeCategory === "All Questions" ||
        group.category === activeCategory;

      return matchesCategory && group.questions.length > 0;
    });

  return (
    <>
      <Navbar />

      <main className="vf-faq-page">
        <section className="vf-faq-hero">
          <div className="vf-faq-orb vf-faq-orb-one" />
          <div className="vf-faq-orb vf-faq-orb-two" />

          <div className="vf-faq-hero-inner">
            <div className="vf-faq-badge">
              <span className="vf-faq-badge-dot" />
              YOUR QUESTIONS, ANSWERED
            </div>

            <h1>
              Got questions?
              <br />
              <span>We have answers.</span>
            </h1>

            <p className="vf-faq-hero-description">
              Everything you need to know about Veftor, link building,
              publishers, and growing your digital presence.
            </p>

            <div className="vf-faq-search">
              <span className="vf-faq-search-icon" aria-hidden="true">
                ⌕
              </span>

              <input
                type="search"
                placeholder="Search your question..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search frequently asked questions"
              />

              <span className="vf-faq-search-hint">SEARCH</span>
            </div>

            <div className="vf-faq-hero-note">
              <span>✳</span>
              Clear answers. Smarter decisions. Better growth.
            </div>
          </div>

          <div className="vf-faq-hero-bottom">
            <span>BUILT FOR YOUR GROWTH</span>
            <span className="vf-faq-bottom-line" />
            <span>VEFTOR / FAQ CENTER</span>
          </div>
        </section>

        <section className="vf-faq-content">
          <div className="vf-faq-section-heading">
            <div>
              <span className="vf-faq-eyebrow">THE HELP CENTER</span>

              <h2>
                Let's clear things <span>up.</span>
              </h2>

              <p>
                Browse by topic or search for a specific answer.
              </p>
            </div>

            <div className="vf-faq-count">
              <strong>
                {filteredGroups.reduce(
                  (total, group) => total + group.questions.length,
                  0
                )}
              </strong>
              <span>HELPFUL ANSWERS</span>
            </div>
          </div>

          <div className="vf-faq-category-list" aria-label="FAQ categories">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`vf-faq-category ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {index === 0 ? (
                  <span className="vf-faq-category-symbol">✳</span>
                ) : (
                  <span className="vf-faq-category-number">
                    {String(index).padStart(2, "0")}
                  </span>
                )}

                {category}
              </button>
            ))}
          </div>

          <div className="vf-faq-layout">
            <aside className="vf-faq-sidebar">
              <div className="vf-faq-sidebar-card">
                <div className="vf-faq-sidebar-icon">✳</div>

                <span className="vf-faq-eyebrow">NEED A HAND?</span>

                <h3>
                  Still looking
                  <br />
                  for an answer?
                </h3>

                <p>
                  Can't find what you're looking for? Get in touch with our
                  team and tell us what you need.
                </p>

                <a href="/#contact" className="vf-faq-contact-link">
                  Contact Us <span>↗</span>
                </a>

                <div className="vf-faq-sidebar-decoration">V.</div>
              </div>

              <div className="vf-faq-mini-note">
                <span className="vf-faq-mini-dot" />
                HERE TO HELP YOU GROW
              </div>
            </aside>

            <div className="vf-faq-questions">
              {filteredGroups.length > 0 ? (
                filteredGroups.map((group) => (
                  <div
                    className="vf-faq-group"
                    key={group.category}
                    id={group.category
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}
                  >
                    <div className="vf-faq-group-heading">
                      <div>
                        <span className="vf-faq-group-label">
                          {group.label}
                        </span>

                        <h3>{group.title}</h3>

                        <p>{group.description}</p>
                      </div>

                      <span className="vf-faq-group-count">
                        {String(group.questions.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="vf-faq-accordion">
                      {group.questions.map((item) => {
                        const questionId = `${group.originalIndex}-${item.originalIndex}`;
                        const isOpen = openQuestion === questionId;

                        return (
                          <article
                            className={`vf-faq-item ${
                              isOpen ? "vf-faq-item-open" : ""
                            }`}
                            key={questionId}
                          >
                            <button
                              type="button"
                              className="vf-faq-question"
                              aria-expanded={isOpen}
                              onClick={() =>
                                setOpenQuestion(isOpen ? null : questionId)
                              }
                            >
                              <span className="vf-faq-question-number">
                                {String(item.originalIndex + 1).padStart(
                                  2,
                                  "0"
                                )}
                              </span>

                              <span className="vf-faq-question-text">
                                {item.question}
                              </span>

                              <span className="vf-faq-toggle">
                                {isOpen ? "−" : "+"}
                              </span>
                            </button>

                            <div
                              className="vf-faq-answer-wrap"
                              aria-hidden={!isOpen}
                            >
                              <div className="vf-faq-answer">
                                <p>{item.answer}</p>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <div className="vf-faq-empty">
                  <span>⌕</span>
                  <h3>No questions found</h3>
                  <p>
                    Try a different search term or select another category.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All Questions");
                    }}
                  >
                    Clear filters <span>→</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="vf-faq-cta">
          <div className="vf-faq-cta-glow" />

          <div className="vf-faq-cta-content">
            <span className="vf-faq-cta-label">
              YOUR NEXT STEP STARTS HERE
            </span>

            <h2>
              Ready to build
              <br />
              <span>something bigger?</span>
            </h2>

            <p>
              Explore Veftor's services and discover opportunities to move
              your brand forward.
            </p>

            <div className="vf-faq-cta-actions">
              <a href="/marketplace" className="vf-faq-cta-primary">
                Explore Marketplace <span>↗</span>
              </a>

              <a href="/services" className="vf-faq-cta-secondary">
                Explore Services <span>→</span>
              </a>
            </div>
          </div>

          <div className="vf-faq-cta-mark" aria-hidden="true">
            V.
          </div>

          <div className="vf-faq-cta-bottom">
            <span>SMARTER CONNECTIONS.</span>
            <span>STRONGER GROWTH.</span>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}