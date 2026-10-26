
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./podcasts-videos.css";

type MediaItem = {
  id: number;
  title: string;
  category: "Podcast" | "Video";
  topic: string;
  duration: string;
  description: string;
  color: string;
  icon: string;
  featured?: boolean;
};

const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "The Future of Digital Growth",
    category: "Video",
    topic: "Digital Strategy",
    duration: "12 min",
    description:
      "Discover how ambitious brands can build stronger digital experiences and turn attention into meaningful growth.",
    color: "orange",
    icon: "▶",
    featured: true,
  },
  {
    id: 2,
    title: "Building Brands That Stand Out",
    category: "Podcast",
    topic: "Branding",
    duration: "28 min",
    description:
      "A conversation about brand positioning, customer trust and creating an identity people remember.",
    color: "navy",
    icon: "♫",
  },
  {
    id: 3,
    title: "Marketing Beyond the Click",
    category: "Video",
    topic: "Marketing",
    duration: "09 min",
    description:
      "Explore smarter ways to create campaigns that connect with real people and deliver business value.",
    color: "green",
    icon: "▶",
  },
  {
    id: 4,
    title: "From Idea to Online Business",
    category: "Podcast",
    topic: "Entrepreneurship",
    duration: "34 min",
    description:
      "Practical lessons on taking an idea online, finding your audience and building momentum.",
    color: "cream",
    icon: "♫",
  },
  {
    id: 5,
    title: "Designing Better Digital Experiences",
    category: "Video",
    topic: "Design",
    duration: "15 min",
    description:
      "Learn why thoughtful design, usability and consistency matter at every stage of the customer journey.",
    color: "purple",
    icon: "▶",
  },
  {
    id: 6,
    title: "What Makes Customers Come Back?",
    category: "Podcast",
    topic: "Customer Experience",
    duration: "25 min",
    description:
      "Explore the role of customer experience, trust and long-term relationships in sustainable growth.",
    color: "orange",
    icon: "♫",
  },
];

const filters = ["All", "Podcasts", "Videos"];

export default function PodcastsVideosPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredItems = useMemo(() => {
    return mediaItems.filter((item) => {
      const matchesFilter =
        activeFilter === "All" ||
        (activeFilter === "Podcasts" && item.category === "Podcast") ||
        (activeFilter === "Videos" && item.category === "Video");

      const matchesSearch = `${item.title} ${item.topic} ${item.description}`
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  const featured = mediaItems.find((item) => item.featured)!;

  return (
    <>
      <Navbar />

      <main className="pv-page">
        <section className="pv-hero">
          <div className="pv-orb pv-orb-one" />
          <div className="pv-orb pv-orb-two" />

          <div className="pv-container pv-hero-grid">
            <div className="pv-hero-content">
              <div className="pv-eyebrow">
                <span className="pv-eyebrow-dot" />
                THE VEFTOR MEDIA HUB
              </div>

              <h1>
                Ideas that move
                <br />
                business <span>forward.</span>
              </h1>

              <p>
                Fresh perspectives, meaningful conversations and practical
                insights to help your business think bigger and grow smarter.
              </p>

              <div className="pv-hero-actions">
                <a href="#explore-media" className="pv-primary-btn">
                  Explore the library <span>↘</span>
                </a>

                <a href="#featured-content" className="pv-text-btn">
                  Discover featured content <span>→</span>
                </a>
              </div>

              <div className="pv-hero-note">
                <span className="pv-sound-bars">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                Ideas worth your time. Insights worth your attention.
              </div>
            </div>

            <div className="pv-hero-art" aria-label="Veftor media illustration">
              <div className="pv-art-ring pv-ring-one" />
              <div className="pv-art-ring pv-ring-two" />

              <div className="pv-art-label pv-label-top">
                <span>●</span> IDEAS IN MOTION
              </div>

              <div className="pv-art-card">
                <div className="pv-art-topline">
                  <span>VEFTOR / MEDIA</span>
                  <span>001—026</span>
                </div>

                <div className="pv-art-visual">
                  <div className="pv-art-disc">
                    <div className="pv-art-disc-inner" />
                    <div className="pv-art-disc-center">V.</div>
                  </div>
                  <div className="pv-art-play">▶</div>
                  <div className="pv-art-wave">
                    {Array.from({ length: 29 }, (_, i) => (
                      <i key={i} style={{ "--bar": `${15 + ((i * 17) % 75)}%` } as React.CSSProperties} />
                    ))}
                  </div>
                </div>

                <div className="pv-art-bottom">
                  <div>
                    <span>THE NEXT CHAPTER</span>
                    <strong>Think. Create. Grow.</strong>
                  </div>
                  <span className="pv-art-arrow">↗</span>
                </div>
              </div>

              <div className="pv-floating-tag pv-floating-tag-one">
                <span>♫</span> Conversations
              </div>

              <div className="pv-floating-tag pv-floating-tag-two">
                <span>▶</span> Fresh perspectives
              </div>

              <div className="pv-art-index">A SPACE FOR BIGGER THINKING.</div>
            </div>
          </div>

          <div className="pv-hero-bottom">
            <span>GOOD IDEAS TRAVEL FAR.</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="pv-intro-strip">
          <div className="pv-container pv-strip-inner">
            <span className="pv-strip-label">YOUR NEXT BIG IDEA STARTS HERE</span>
            <div className="pv-strip-items">
              <span>Strategy</span>
              <i>✳</i>
              <span>Creativity</span>
              <i>✳</i>
              <span>Growth</span>
              <i>✳</i>
              <span>Innovation</span>
            </div>
          </div>
        </section>

        <section className="pv-featured-section" id="featured-content">
          <div className="pv-container">
            <div className="pv-section-heading">
              <div>
                <div className="pv-section-kicker">
                  <span /> HANDPICKED FOR YOU
                </div>
                <h2>
                  Worth your <span>watch.</span>
                </h2>
              </div>

              <p>
                Start with an idea that challenges your perspective and opens
                the door to something better.
              </p>
            </div>

            <button
              className="pv-featured-card"
              onClick={() => setSelectedMedia(featured)}
              aria-label={`View details for ${featured.title}`}
            >
              <div className="pv-featured-visual">
                <div className="pv-featured-grid" />
                <div className="pv-featured-big-v">V</div>

                <div className="pv-featured-chip">
                  <span /> FEATURED STORY
                </div>

                <div className="pv-featured-play">▶</div>

                <div className="pv-featured-sticker">
                  THINK
                  <br />
                  BIGGER
                  <br />
                  ↗
                </div>

                <div className="pv-featured-visual-footer">
                  <span>VEFTOR ORIGINALS</span>
                  <span>01 / 06</span>
                </div>
              </div>

              <div className="pv-featured-info">
                <div className="pv-featured-meta">
                  <span className="pv-category-pill">VIDEO</span>
                  <span>{featured.duration} watch</span>
                </div>

                <h3>{featured.title}</h3>

                <p>{featured.description}</p>

                <div className="pv-featured-link">
                  Explore this story <span>↗</span>
                </div>
              </div>
            </button>
          </div>
        </section>

        <section className="pv-library-section" id="explore-media">
          <div className="pv-container">
            <div className="pv-section-heading pv-library-heading">
              <div>
                <div className="pv-section-kicker">
                  <span /> THE CONTENT LIBRARY
                </div>
                <h2>
                  Find your next <span>inspiration.</span>
                </h2>
              </div>

              <p>
                From quick ideas to deeper conversations, explore the topics
                that matter to your business.
              </p>
            </div>

            <div className="pv-library-controls">
              <div className="pv-filter-tabs" aria-label="Filter media">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    className={activeFilter === filter ? "active" : ""}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                    {activeFilter === filter && (
                      <span className="pv-filter-dot" />
                    )}
                  </button>
                ))}
              </div>

              <label className="pv-search">
                <span>⌕</span>
                <input
                  type="search"
                  placeholder="Search ideas, topics..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  aria-label="Search media"
                />
              </label>
            </div>

            <div className="pv-media-grid">
              {filteredItems.map((item, index) => (
                <article
                  className="pv-media-card"
                  key={item.id}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <button
                    className={`pv-media-visual pv-visual-${item.color}`}
                    onClick={() => setSelectedMedia(item)}
                    aria-label={`View ${item.title}`}
                  >
                    <div className="pv-card-number">
                      VF. / {String(item.id).padStart(2, "0")}
                    </div>

                    <div className="pv-card-pattern">
                      <div className="pv-pattern-circle" />
                      <div className="pv-pattern-square" />
                      <div className="pv-pattern-line" />
                    </div>

                    <span className="pv-card-symbol">{item.icon}</span>

                    <span className="pv-card-play">
                      {item.category === "Video" ? "▶" : "♫"}
                    </span>

                    <span className="pv-card-duration">{item.duration}</span>
                  </button>

                  <div className="pv-media-info">
                    <div className="pv-media-meta">
                      <span
                        className={
                          item.category === "Video"
                            ? "pv-type-video"
                            : "pv-type-podcast"
                        }
                      >
                        {item.category}
                      </span>
                      <span>{item.topic}</span>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <button
                      className="pv-card-link"
                      onClick={() => setSelectedMedia(item)}
                    >
                      Explore episode <span>↗</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="pv-empty-state">
                <span>⌕</span>
                <h3>No matching stories yet.</h3>
                <p>Try another search term or choose a different category.</p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveFilter("All");
                  }}
                >
                  Reset filters ↗
                </button>
              </div>
            )}

            <div className="pv-library-footer">
              <span>
                SHOWING {filteredItems.length} OF {mediaItems.length} STORIES
              </span>
              <span>MORE IDEAS. MORE POSSIBILITIES. <b>✳</b></span>
            </div>
          </div>
        </section>

        <section className="pv-podcast-banner">
          <div className="pv-container pv-podcast-grid">
            <div className="pv-podcast-art">
              <div className="pv-podcast-orbit orbit-a" />
              <div className="pv-podcast-orbit orbit-b" />

              <div className="pv-podcast-disc">
                <span>V.</span>
              </div>

              <div className="pv-podcast-note note-a">♫</div>
              <div className="pv-podcast-note note-b">✳</div>

              <div className="pv-podcast-art-caption">
                <span>THE VEFTOR CONVERSATIONS</span>
                <span>EST. 2026</span>
              </div>
            </div>

            <div className="pv-podcast-content">
              <div className="pv-section-kicker pv-kicker-light">
                <span /> PRESS PLAY ON POSSIBILITY
              </div>

              <h2>
                Good conversations.
                <br />
                <span>Better ideas.</span>
              </h2>

              <p>
                Big questions, fresh perspectives and conversations that help
                you see your next opportunity a little differently.
              </p>

              <div className="pv-podcast-points">
                <div>
                  <span>01</span>
                  <p>Fresh perspectives</p>
                </div>
                <div>
                  <span>02</span>
                  <p>Practical takeaways</p>
                </div>
                <div>
                  <span>03</span>
                  <p>Ideas for what comes next</p>
                </div>
              </div>

              <a href="#explore-media" className="pv-light-btn">
                Explore podcasts <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="pv-cta-section">
          <div className="pv-container pv-cta-card">
            <div className="pv-cta-decoration">V.</div>

            <div className="pv-cta-copy">
              <span>YOUR NEXT CHAPTER STARTS WITH A CONVERSATION</span>
              <h2>
                Got a big idea?
                <br />
                <em>Let’s make it happen.</em>
              </h2>
              <p>
                Let’s talk about your goals and find a smarter way to move
                your business forward.
              </p>
            </div>

            <div className="pv-cta-actions">
              <Link href="/contact" className="pv-primary-btn">
                Let’s talk <span>↗</span>
              </Link>
              <span>GOOD THINGS START HERE. ↗</span>
            </div>
          </div>
        </section>
      </main>

      {selectedMedia && (
        <div
          className="pv-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedMedia(null);
            }
          }}
          role="presentation"
        >
          <section
            className="pv-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pv-modal-title"
          >
            <button
              className="pv-modal-close"
              onClick={() => setSelectedMedia(null)}
              aria-label="Close details"
            >
              ×
            </button>

            <div
              className={`pv-modal-art pv-visual-${selectedMedia.color}`}
            >
              <span>{selectedMedia.icon}</span>
            </div>

            <div className="pv-modal-body">
              <div className="pv-media-meta">
                <span className="pv-type-video">{selectedMedia.category}</span>
                <span>{selectedMedia.duration}</span>
                <span>{selectedMedia.topic}</span>
              </div>

              <h2 id="pv-modal-title">{selectedMedia.title}</h2>
              <p>{selectedMedia.description}</p>

              <div className="pv-modal-notice">
                <span>✳</span>
                This is a content preview. Connect your real video or podcast
                player to enable playback.
              </div>

              <button
                className="pv-primary-btn"
                onClick={() => setSelectedMedia(null)}
              >
                Back to library <span>↗</span>
              </button>
            </div>
          </section>
        </div>
      )}

      <Footer />
    </>
  );
}
