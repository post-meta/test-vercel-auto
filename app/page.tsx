import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Test Vercel Auto Deploy</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional
                <span className="text-blue-600"> Cleaning </span>
                Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience spotless results with our reliable, eco-friendly cleaning solutions. 
                We make your space shine so you can focus on what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-200 rounded-full w-96 h-96 mx-auto flex items-center justify-center">
                <div className="text-6xl">🧽</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential homes to commercial spaces, we deliver exceptional cleaning services tailored to your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Residential Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Deep cleaning
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Regular maintenance
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Move-in/out cleaning
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Professional office and commercial space cleaning to maintain a productive environment.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Office buildings
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Retail spaces
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Medical facilities
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600 mb-6">
                Green cleaning solutions that are safe for your family, pets, and the environment.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Non-toxic products
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Biodegradable supplies
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  HEPA filtration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Test Vercel Auto Deploy?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Fast & Efficient</h3>
              <p className="text-gray-600">Quick turnaround without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">Complete coverage for your peace of mind</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold mb-2">Affordable Rates</h3>
              <p className="text-gray-600">Competitive pricing for all budgets</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold mb-2">5-Star Service</h3>
              <p className="text-gray-600">Consistently rated excellent by our clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get your free quote today and experience the difference professional cleaning makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Test Vercel Auto Deploy</h3>
              <p className="text-gray-400">
                Professional cleaning services you can trust. Making your space spotless since 2024.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Residential Cleaning</li>
                <li>Commercial Cleaning</li>
                <li>Deep Cleaning</li>
                <li>Move-in/out Cleaning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 (555) 123-4567</p>
                <p>✉️ hello@testvercelautodeploy.com</p>
                <p>📍 Your City, State 12345</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Test Vercel Auto Deploy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}