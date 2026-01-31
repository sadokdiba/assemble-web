export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Privacy />
        <Community />
        <Download />
      </main>
      <Footer />
    </>
  )
}

// ==========================================
// HEADER
// ==========================================
function Header() {
  return (
    <nav className="nav" id="nav">
      <div className="nav-container">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Assemble" className="logo-img" />
          <span className="logo-text">Assemble</span>
        </a>

        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#privacy" className="nav-link">Privacy</a>
          <a href="#community" className="nav-link">Community</a>
          <a href="#download" className="btn-cta">Join Waitlist</a>
        </div>

        <MobileMenu />
      </div>
    </nav>
  )
}

function MobileMenu() {
  const toggleMenu = () => {
    const menu = document.getElementById('mobile-menu')
    const toggle = document.getElementById('menu-toggle')
    menu?.classList.toggle('open')
    toggle?.classList.toggle('active')
  }

  return (
    <>
      <button id="menu-toggle" className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div id="mobile-menu" className="mobile-menu">
        <a href="#features" className="mobile-link" onClick={toggleMenu}>Features</a>
        <a href="#privacy" className="mobile-link" onClick={toggleMenu}>Privacy</a>
        <a href="#community" className="mobile-link" onClick={toggleMenu}>Community</a>
        <a href="#download" className="btn-cta" onClick={toggleMenu}>Join Waitlist</a>
      </div>
    </>
  )
}

// ==========================================
// HERO
// ==========================================
function Hero() {
  return (
    <section className="hero">
      {/* Background elements */}
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="float-piece fp-1"></div>
        <div className="float-piece fp-2"></div>
        <div className="float-piece fp-3"></div>
        <div className="float-piece fp-4"></div>
      </div>

      <div className="hero-content">
        <div className="badge">
          <span className="badge-dot"></span>
          <span className="badge-text">Privacy-First Messaging</span>
        </div>

        <h1 className="hero-title">
          <span className="title-line">
            <span className="title-word">Conversations</span>
          </span>
          <span className="title-line">
            <span className="title-word">that stay </span>
            <span className="title-word highlight">private</span>
          </span>
        </h1>

        <p className="hero-desc">
          A community-driven platform where your conversations are truly yours. 
          End-to-end encrypted, open source, and built by the people who use it.
        </p>

        <div className="hero-actions">
          <a href="#download" className="btn-primary">
            <span>Join the Waitlist</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="btn-arrow">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
            </svg>
          </a>
          <span className="hero-note">iOS and Android coming soon</span>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

// ==========================================
// FEATURES
// ==========================================
function Features() {
  const features = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />,
      title: 'End-to-End Encryption',
      desc: 'Your messages are encrypted before they leave your device. Only you and your recipient can read them.'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />,
      title: 'Group Conversations',
      desc: 'Create encrypted group chats for your team, family, or community. Same privacy, shared with those you trust.'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />,
      title: 'Open Source',
      desc: 'Every line of code is public. Audit it yourself, contribute improvements, or fork it for your own use.'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />,
      title: 'No Cloud Storage',
      desc: 'Your messages live on your device, not on our servers. We physically cannot access your data.'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
      title: 'Lightning Fast',
      desc: 'Built for performance. Messages sync instantly across all your devices without compromising security.'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.39m3.421 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />,
      title: 'Beautiful Design',
      desc: 'A clean, intuitive interface that gets out of your way. Messaging should be simple and delightful.'
    }
  ]

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-head">
          <span className="label">Features</span>
          <h2 className="section-title">Built for <span className="highlight">privacy</span></h2>
          <p className="section-desc">Everything you need for secure communication, nothing you don't.</p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {f.icon}
                </svg>
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// PRIVACY
// ==========================================
function Privacy() {
  const items = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />,
      title: 'Device-Level Encryption',
      desc: 'Messages encrypted before leaving your device using your unique keys.'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
      title: 'Zero Knowledge',
      desc: 'We cannot read your messages. Our servers only see encrypted data.'
    },
    {
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></>,
      title: 'Fully Auditable',
      desc: 'Open source code means anyone can verify our security claims.'
    }
  ]

  return (
    <section id="privacy" className="section section-dark">
      <div className="container">
        <div className="section-head">
          <span className="label">Security</span>
          <h2 className="section-title">Your privacy, <span className="highlight">guaranteed</span></h2>
          <p className="section-desc">We use the same encryption protocols trusted by security experts worldwide.</p>
        </div>

        <div className="privacy-grid">
          {items.map((item, i) => (
            <div key={i} className="privacy-card">
              <div className="privacy-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {item.icon}
                </svg>
              </div>
              <h3 className="privacy-title">{item.title}</h3>
              <p className="privacy-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// COMMUNITY
// ==========================================
function Community() {
  return (
    <section id="community" className="section">
      <div className="container">
        <div className="section-head">
          <span className="label">Open Source</span>
          <h2 className="section-title">You shape what we <span className="highlight">build</span></h2>
          <p className="section-desc">Assemble is built by its community. Every feature, every decision—guided by the people who use it.</p>
        </div>

        <div className="community-cta">
          <a 
            href="https://github.com/sadokdiba/assemble-web" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-btn"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// DOWNLOAD CTA
// ==========================================
function Download() {
  return (
    <section id="download" className="section section-cta">
      <div className="container">
        <div className="cta-box">
          <h2 className="cta-title">Get Early Access</h2>
          <p className="cta-desc">Be among the first to experience truly private messaging.</p>
          
          <a 
            href="mailto:hello@assembleapp.org?subject=Waitlist%20Request&body=Hi%2C%20I%27d%20like%20to%20join%20the%20Assemble%20waitlist.%0A%0AMy%20name%3A%20%0ADevice%3A%20iOS%20%2F%20Android"
            className="btn-primary btn-lg"
          >
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
            <span>Join Waitlist</span>
          </a>
          
          <p className="cta-note">No spam, just launch updates.</p>

          <div className="platforms">
            <div className="platform">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>iOS Coming Soon</span>
            </div>
            <div className="platform">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
              </svg>
              <span>Android Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// FOOTER
// ==========================================
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="logo">
              <img src="/logo.png" alt="Assemble" className="logo-img" />
              <span className="logo-text">Assemble</span>
            </a>
            <p className="footer-desc">Privacy-first messaging for communities who value meaningful, encrypted conversations.</p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#privacy">Security</a>
            <a href="#download">Join Waitlist</a>
            <a href="https://github.com/sadokdiba" target="_blank" rel="noopener noreferrer">Roadmap</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#community">Community</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="mailto:hello@assembleapp.org">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Assemble. Built for privacy.</span>
          <a href="https://github.com/sadokdiba" target="_blank" rel="noopener noreferrer">Open Source on GitHub</a>
        </div>
      </div>
    </footer>
  )
}
