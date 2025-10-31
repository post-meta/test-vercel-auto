import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const business = "Test Vercel Auto Cleaning";
  const location = "Seattle, WA";
  const phone = "206-555-8888";
  
  const heading = "Our cleaning Services";
  const description = "Professional cleaning services in Seattle, WA";
  const services = [
  {
    "id": "residential-cleaning",
    "title": "Residential Home Cleaning",
    "shortDescription": "Complete home cleaning service including dusting, vacuuming, mopping, and sanitizing all living spaces. Perfect for busy families and professionals seeking spotless homes.",
    "features": [
      "Deep cleaning all rooms thoroughly",
      "Eco-friendly products and safe chemicals",
      "Flexible scheduling including weekend availability"
    ],
    "icon": "🏠"
  }
];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{heading}</h1>
          <p className="text-xl text-blue-100">{description}</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.id}`} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Need Help Choosing?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact {business} in {location} for a free consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {phone && (
              <a href={`tel:${phone}`} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                Call {phone}
              </a>
            )}
            <Link href="/contact" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
