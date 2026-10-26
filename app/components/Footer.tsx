
import "./Footer.css";

const footerGroups = [
  {
    title: "Platform",
    links: [
      { label: "Marketplace", href: "/marketplace" },
      { label: "For Advertisers", href: "/advertisers" },
      { label: "For Publishers", href: "/publishers" },
      { label: "For Agencies", href: "/agencies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "#faqs" },
      { label: "How It Works", href: "#services" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-col">
            <a className="footer-brand" href="/" aria-label="Veftor home">
              <span className="footer-brand-symbol">V</span>
              <span>Veftor<span className="footer-period">.</span></span>
            </a>

            <p>
              A smarter way to discover publishers and organize your
              link-building opportunities.
            </p>

            <a className="footer-contact" href="#contact">
              Let’s talk about your campaign <span>↗</span>
            </a>
          </div>

          {footerGroups.map((group) => (
            <div className="footer-col" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
<span>© 2026 Veftor. All rights reserved.</span>          <span className="footer-status">
            <span className="footer-status-dot" />
            Built for better connections
          </span>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
