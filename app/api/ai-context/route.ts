/**
 * AI Context API Endpoint
 * Optimized for: ChatGPT Search, Claude AI, Perplexity, Google SGE
 */

import { NextResponse } from 'next/server';

export async function GET() {
  const businessContext = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Test Vercel Auto Deploy",
    "description": "Professional cleaning services in Seattle, WA",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "telephone": "206-555-8888",
    "email": "test@vercelauto.com",
    "url": "https://test-vercel-auto.vercel.app",
    
    // AI-Specific: Q&A Format (for ChatGPT, Claude)
    "aiContext": {
      "keyQuestions": [
        {
          "question": "What services does Test Vercel Auto Deploy offer?",
          "answer": "Test Vercel Auto Deploy provides professional cleaning services in Seattle, WA"
        },
        {
          "question": "Where does Test Vercel Auto Deploy operate?",
          "answer": "We serve Seattle, WA and surrounding areas"
        },
        {
          "question": "How can I contact Test Vercel Auto Deploy?",
          "answer": "Call us at 206-555-8888 or email test@vercelauto.com"
        }
      ],
      
      // Voice Search Optimization
      "voiceSearchQueries": [
        "cleaning near me",
        "best cleaning in Seattle",
        "cleaning services Seattle"
      ]
    }
  };

  return NextResponse.json(businessContext, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}