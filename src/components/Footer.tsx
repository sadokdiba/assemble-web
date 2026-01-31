import { Link } from 'react-router-dom'
import { AssembleLogo } from './Header'

export default function Footer() {
  return (
    <footer className="bg-surface-950 border-t border-surface-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <AssembleLogo className="w-10 h-10" />
              <span className="text-xl font-bold text-white">Assemble</span>
            </div>
            <p className="text-surface-400 max-w-sm mb-6 leading-relaxed">
              Privacy-first messaging for communities who value meaningful, encrypted conversations.
            </p>
            <div className="flex items-center gap-2 text-sm text-surface-500">
              <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <span>Encrypted by default</span>
            </div>
            <div className="mt-4 text-xs text-surface-600">
              Currently available in English. French & Spanish coming soon.
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-5">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-surface-400 hover:text-primary-400 transition-colors">Features</a></li>
              <li><a href="#privacy" className="text-surface-400 hover:text-primary-400 transition-colors">Security</a></li>
              <li><a href="#download" className="text-surface-400 hover:text-primary-400 transition-colors">Download</a></li>
              <li><a href="https://github.com/assemble" target="_blank" rel="noopener noreferrer" className="text-surface-400 hover:text-primary-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-5">Company</h3>
            <ul className="space-y-3">
              <li><a href="#community" className="text-surface-400 hover:text-primary-400 transition-colors">Community</a></li>
              <li><Link to="/privacy" className="text-surface-400 hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-surface-400 hover:text-primary-400 transition-colors">Terms of Service</Link></li>
              <li><a href="https://github.com/assemble" target="_blank" rel="noopener noreferrer" className="text-surface-400 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-surface-500 text-sm">
            © {new Date().getFullYear()} Assemble. Built with 🔒 for privacy.
          </p>
          <a 
            href="https://github.com/assemble" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-surface-500 hover:text-primary-400 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-sm font-medium">Open Source on GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
