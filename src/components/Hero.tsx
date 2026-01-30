export default function Hero() {
  return (
    <section className="min-h-screen mesh-bg pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          {/* Privacy badge */}
          <div className="inline-flex items-center gap-2 glass-light px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <span className="text-sm text-surface-300 font-medium">End-to-End Encrypted</span>
            <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-white">Conversations that</span>
            <br />
            <span className="gradient-text">stay private</span>
          </h1>
          
          <p className="mt-8 text-xl text-surface-400 max-w-2xl mx-auto leading-relaxed">
            Assemble is a community-driven messaging platform where your conversations 
            are truly yours. No ads, no data mining, just meaningful connections.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#download" 
              className="btn-glow group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-primary-400 hover:to-primary-500 transition-all shadow-xl shadow-primary-500/30 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Free
            </a>
            <a 
              href="#privacy" 
              className="glass text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-surface-700/50 transition-all flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              How We Protect You
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-surface-500 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>No Data Collection</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Community Governed</span>
            </div>
          </div>
        </div>

        {/* Hero Visual - Encrypted Messages Illustration */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent rounded-3xl" />
          <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Chat mockup */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex-shrink-0" />
                  <div className="glass-light rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-surface-200 text-sm">Hey! Did you check out that new project?</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-surface-500">
                      <svg className="w-3 h-3 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                      </svg>
                      <span>Encrypted</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex-shrink-0" />
                  <div className="bg-primary-600/30 rounded-2xl rounded-tr-sm p-4 max-w-xs">
                    <p className="text-surface-200 text-sm">Yes! It looks amazing. Want to discuss it?</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-surface-500 justify-end">
                      <svg className="w-3 h-3 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                      </svg>
                      <span>Encrypted</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Encryption visual */}
              <div className="text-center">
                <div className="relative inline-flex">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-3xl flex items-center justify-center lock-pulse">
                    <svg className="w-16 h-16 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="absolute -inset-4 border-2 border-primary-500/20 rounded-[2rem] border-dashed animate-[spin_20s_linear_infinite]" />
                </div>
                <p className="mt-6 text-surface-400 text-sm">
                  Your messages are encrypted before they leave your device
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
