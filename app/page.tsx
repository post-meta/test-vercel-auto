import { Phone, Sparkles, Clock, Shield, Star, CheckCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Test Vercel Auto Deploy</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Professional
                <span className="text-blue-600 block">Cleaning Services</span>
                You Can Trust
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience spotless results with our reliable, eco-friendly cleaning solutions. 
                We make your space shine while you focus on what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                  Get Free Quote
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  View Services
                </button>
              </div>
              <div className="flex items-center mt-8 space-x-6">
                <div className="flex items-center">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">4.9/5 from 200+ reviews</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">100% Satisfaction Guaranteed</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Eco-Friendly Products</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Flexible Scheduling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Cleaning Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential homes to commercial spaces, we provide comprehensive cleaning solutions tailored to your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="h-12 w-12 text-blue-600" />,
                title: "Residential Cleaning",
                description: "Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.",
                features: ["Deep cleaning", "Regular maintenance", "Move-in/out cleaning"]
              },
              {
                icon: <Shield className="h-12 w-12 text-blue-600" />,
                title: "Office Cleaning",
                description: "Professional commercial cleaning to maintain a healthy and productive work environment.",
                features: ["Daily cleaning", "Sanitization", "Waste management"]
              },
              {
                icon: <Clock className="h-12 w-12 text-blue-600" />,
                title: "Post-Construction",
                description: "Specialized cleaning services for newly constructed or renovated properties.",
                features: ["Debris removal", "Dust elimination", "Final polish"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-blue-50 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for a Spotless Space?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of satisfied customers who trust us with their cleaning needs.
            Get your free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
              Get Free Estimate
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">Test Vercel Auto Deploy</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional cleaning services you can trust. Making your space spotless since 2020.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Residential Cleaning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Office Cleaning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Post-Construction</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deep Cleaning</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>(555) 123-4567</p>
                <p>hello@testvercelautodeploy.com</p>
                <p>Available Mon-Sat, 8AM-6PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Test Vercel Auto Deploy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}