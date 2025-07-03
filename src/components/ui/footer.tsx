import "./footer.css";
import Logo from "./logo";
const FooterIllustration = "/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-illustration" aria-hidden="true">
          <img
            className="footer-illustration-img"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="footer-grid">
          <div className="footer-block">
            <h3 className="footer-block-title">Product</h3>
            <ul className="footer-list">
              <li><a className="footer-link" href="#0">Features</a></li>
              <li><a className="footer-link" href="#0">Integrations</a></li>
              <li><a className="footer-link" href="#0">Pricing &amp; Plans</a></li>
              <li><a className="footer-link" href="#0">Changelog</a></li>
              <li><a className="footer-link" href="#0">Our method</a></li>
              <li><a className="footer-link" href="#0">User policy</a></li>
            </ul>
          </div>
          <div className="footer-block">
            <h3 className="footer-block-title">Company</h3>
            <ul className="footer-list">
              <li><a className="footer-link" href="#0">About us</a></li>
              <li><a className="footer-link" href="#0">Diversity &amp; Inclusion</a></li>
              <li><a className="footer-link" href="#0">Blog</a></li>
              <li><a className="footer-link" href="#0">Careers</a></li>
              <li><a className="footer-link" href="#0">Financial statements</a></li>
            </ul>
          </div>
          <div className="footer-block">
            <h3 className="footer-block-title">Resources</h3>
            <ul className="footer-list">
              <li><a className="footer-link" href="#0">Community</a></li>
              <li><a className="footer-link" href="#0">Terms of service</a></li>
              <li><a className="footer-link" href="#0">Report a vulnerability</a></li>
            </ul>
          </div>
          <div className="footer-block">
            <h3 className="footer-block-title">Content Library</h3>
            <ul className="footer-list">
              <li><a className="footer-link" href="#0">Templates</a></li>
              <li><a className="footer-link" href="#0">Tutorials</a></li>
              <li><a className="footer-link" href="#0">Knowledge base</a></li>
              <li><a className="footer-link" href="#0">Learn</a></li>
              <li><a className="footer-link" href="#0">Cookie manager</a></li>
            </ul>
          </div>
          <div className="footer-branding">
            <div className="footer-logo"><Logo /></div>
            <div className="footer-copyright">
              <p>
                &copy; Cruip.com <span className="footer-sep">·</span>
                <a className="footer-link" href="#0">Terms</a>
              </p>
              <ul className="footer-socials">
                <li><a className="footer-social" href="#0" aria-label="Twitter">T</a></li>
                <li><a className="footer-social" href="#0" aria-label="Medium">M</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
