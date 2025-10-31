import React from 'react';

export default function ContactPage() {
  const business = "Test Vercel Auto Cleaning";
  const location = "Seattle, WA";
  const phone = "206-555-8888";
  const email = "test@vercelauto.com";
  
  const contactContent = {
  "heading": "Get Your Seattle Cleaning Quote",
  "description": "Contact Test Vercel Auto Cleaning for professional cleaning services in Seattle. We provide reliable, efficient cleaning solutions for your home or business."
};

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{contactContent.heading}</h1>
          <p className="text-xl text-blue-100">{contactContent.description}</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Name</label>
                <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Phone</label>
                <input type="tel" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{business}</h3>
                <p className="text-gray-600">{location}</p>
              </div>
              {phone && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <a href={`tel:${phone}`} className="text-blue-600 hover:text-blue-700 text-lg">{phone}</a>
                </div>
              )}
              {email && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-700">{email}</a>
                </div>
              )}
              <div className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
