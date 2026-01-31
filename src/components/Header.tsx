import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Reusable logo component
export function AssembleLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" className="fill-primary-500"/>
      <path d="M8 10a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-8l-4 4v-4H10a2 2 0 01-2-2v-8z" fill="white" fillOpacity="0.9"/>
      <rect x="13" y="13" width="6" height="5" rx="1" className="fill-primary-500"/>
      <path d="M14 13v-1.5a2 2 0 114 0V13" className="stroke-primary-500" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass py-3' : 'bg-transparent py-5'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <AssembleLogo className="w-10 h-10 transform group-hover:scale-105 transition-transform" />
              <div className="absolute -inset-1 bg-primary-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold text-white">Assemble</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#privacy" className="text-surface-300 hover:text-primary-400 transition-colors font-medium">Privacy</a>
            <a href="#features" className="text-surface-300 hover:text-primary-400 transition-colors font-medium">Features</a>
            <a href="#community" className="text-surface-300 hover:text-primary-400 transition-colors font-medium">Community</a>
            <a 
              href="#download" 
              className="btn-glow bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-primary-400 hover:to-primary-500 transition-all shadow-lg shadow-primary-500/25"
            >
              Join Waitlist
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-surface-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-2xl p-4 space-y-3">
            <a href="#privacy" className="block text-surface-300 hover:text-primary-400 transition-colors font-medium py-2">Privacy</a>
            <a href="#features" className="block text-surface-300 hover:text-primary-400 transition-colors font-medium py-2">Features</a>
            <a href="#community" className="block text-surface-300 hover:text-primary-400 transition-colors font-medium py-2">Community</a>
            <a 
              href="#download" 
              className="block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-3 rounded-xl font-semibold text-center"
            >
              Join Waitlist
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
