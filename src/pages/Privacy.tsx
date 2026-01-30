import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-surface-950">
      <Header />
      <main className="max-w-3xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
        
        <div className="prose prose-lg prose-invert">
          <p className="text-surface-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
            <p className="text-surface-400 mb-4">
              We collect minimal information required to provide the service. Your messages are end-to-end 
              encrypted and we cannot read them. We only store what's necessary to deliver your messages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
            <p className="text-surface-400 mb-4">
              We use the limited information we collect solely to provide, maintain, and improve our services. 
              We never sell your data or use it for advertising purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Data Security</h2>
            <p className="text-surface-400 mb-4">
              All messages are protected with end-to-end encryption. This means only you and the people 
              you're communicating with can read your messages. Not even Assemble can access them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Contact Us</h2>
            <p className="text-surface-400 mb-4">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@assemble.chat" className="text-primary-400 hover:text-primary-300">privacy@assemble.chat</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
