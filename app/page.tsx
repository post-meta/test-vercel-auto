import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  const business = "Test Vercel Auto Cleaning";
  const location = "Seattle, WA";
  const phone = "206-555-8888";
  
  const hero = {
  "heading": "Seattle's Premier Auto Cleaning Service - Spotless Results Guaranteed",
  "subheading": "Professional car detailing and cleaning services that keep your vehicle looking pristine year-round.",
  "ctaText": "Book Now",
  "ctaLink": "/contact"
};
  const features = [
  {
    "icon": "🤖",
    "title": "Automated Cleaning Schedules",
    "description": "Smart scheduling system that automatically arranges cleaning services based on your preferences and usage patterns without manual intervention."
  }
];
  const services = [
  {
    "title": "Automated Office Deep Cleaning",
    "description": "Comprehensive deep cleaning service using advanced automated systems for offices, ensuring spotless environments with minimal disruption to your business operations.",
    "link": "/services/automated-office-deep-cleaning"
  }
];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {hero.heading}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {hero.subheading}
          </p>
          <Link 
            href={hero.ctaLink}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
          >
            {hero.ctaText}
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose {business}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.link}
                className="block p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-blue-600 font-semibold">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact {business} in {location} today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {phone && (
              <a
                href={`tel:${phone}`}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
              >
                Call {phone}
              </a>
            )}
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
