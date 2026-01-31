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
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  )
}

export default function Privacy() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="legal-page">
        <h1 className="legal-title">Privacy Policy</h1>
        
        <div className="legal-content">
          <p className="legal-date">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>
              We collect minimal information required to provide the service. Your messages are end-to-end 
              encrypted and we cannot read them. We only store what's necessary to deliver your messages.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the limited information we collect solely to provide, maintain, and improve our services. 
              We never sell your data or use it for advertising purposes.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Data Security</h2>
            <p>
              All messages are protected with end-to-end encryption. This means only you and the people 
              you're communicating with can read your messages. Not even Assemble can access them.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@assembleapp.org">privacy@assembleapp.org</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
