import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Assemble" className="logo-img" />
          <span className="logo-text">Assemble</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Assemble. Privacy first, always.</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  )
}

export default function Terms() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="legal-page">
        <h1 className="legal-title">Terms of Service</h1>
        
        <div className="legal-content">
          <p className="legal-date">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Assemble, you agree to be bound by these Terms of Service 
              and our Privacy Policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Use of Service</h2>
            <p>
              You agree to use Assemble only for lawful purposes and in accordance with these Terms. 
              You must not use the service in any way that violates any applicable laws or regulations.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. User Content</h2>
            <p>
              You retain full ownership of content you create and share through Assemble. 
              Your messages are end-to-end encrypted, meaning only you and your recipients can read them.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@assembleapp.org">legal@assembleapp.org</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
