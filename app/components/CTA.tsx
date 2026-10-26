
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-decoration cta-decoration-one" />
          <div className="cta-decoration cta-decoration-two" />

          <div className="cta-copy">
            <span className="cta-kicker">YOUR NEXT CAMPAIGN STARTS HERE</span>
            <h2>
              Ready to grow your
              <br />
              <span>online authority?</span>
            </h2>
            <p>
              Discover publisher opportunities and build a clearer workflow
              for your link-building campaigns.
            </p>
          </div>

          <div className="cta-actions">
            <a className="button button-white" href="/marketplace">
              Explore marketplace <span>↗</span>
            </a>

            <button className="button google-button" type="button" disabled>
              <span className="google-g" aria-hidden="true">G</span>
              Continue with Google
            </button>

            <small className="cta-trust">
              Google sign-in requires authentication setup.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
