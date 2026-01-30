import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen bg-surface-950">
      <Header />
      <main className="max-w-3xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
        
        <div className="prose prose-lg prose-invert">
          <p className="text-surface-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-surface-400 mb-4">
              By accessing or using Assemble, you agree to be bound by these Terms of Service 
              and our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Use of Service</h2>
            <p className="text-surface-400 mb-4">
              You agree to use Assemble only for lawful purposes and in accordance with these Terms. 
              You must not use the service in any way that violates any applicable laws or regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. User Content</h2>
            <p className="text-surface-400 mb-4">
              You retain full ownership of content you create and share through Assemble. 
              Your messages are end-to-end encrypted, meaning only you and your recipients can read them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Contact Us</h2>
            <p className="text-surface-400 mb-4">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@assemble.chat" className="text-primary-400 hover:text-primary-300">legal@assemble.chat</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
