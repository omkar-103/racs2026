'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {

  // Add this in your page.js or layout.js
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'RACS-2026 - National Conference on Recent Advances in Chemical Sciences',
  description: 'National Conference on Recent Advances in Chemical Sciences for Societal and Industrial Applications',
  startDate: '2026-01-20T09:00:00+05:30',
  endDate: '2026-01-22T17:00:00+05:30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Institute of Chemical Technology',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nathalal Parekh Marg, Matunga',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400019',
      addressCountry: 'IN'
    }
  },
  organizer: [
    {
      '@type': 'Organization',
      name: 'Institute of Chemical Technology Mumbai',
      url: 'https://www.ictmumbai.edu.in'
    },
    {
      '@type': 'Organization',
      name: 'Indian Chemical Society',
      url: 'https://www.indianchemicalsociety.com'
    }
  ],
  performer: {
    '@type': 'PerformingGroup',
    name: 'Chemical Scientists and Researchers'
  }
};

  const [hasRecorded, setHasRecorded] = useState(false);

  useEffect(() => {
    // Record this visit only once
    const recordVisit = async () => {
      const sessionKey = 'visitor_recorded';
      const recorded = sessionStorage.getItem(sessionKey);
      
      if (recorded && hasRecorded) {
        console.log('Visit already recorded in this session');
        return;
      }

      try {
        console.log('Starting visit recording...');
        
        const ipRes = await fetch('/api/get-ip');
        const ipData = await ipRes.json();
        
        console.log('IP Response:', ipData);
        
        if (ipData.success && ipData.ip) {
          const visitRes = await fetch('/api/visitors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ip: ipData.ip,
              userAgent: navigator.userAgent
            })
          });
          
          const visitData = await visitRes.json();
          console.log('Visit Response:', visitData);
          
          if (visitData.success) {
            sessionStorage.setItem(sessionKey, 'true');
            setHasRecorded(true);
            console.log('Visit recorded successfully. Total visitors:', visitData.totalVisitors);
          }
        }
      } catch (error) {
        console.error('Error recording visit:', error);
      }
    };

    recordVisit();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Important Updates Marquee */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-lg overflow-hidden">
        <div className="flex items-center">
          {/* Important Updates Label */}
          <div className="bg-white text-red-600 px-4 md:px-6 py-2.5 md:py-3 font-bold text-xs md:text-base whitespace-nowrap flex-shrink-0 shadow-md">
            Important Updates
          </div>
          
          {/* Scrolling Content */}
          <div className="flex-1 overflow-hidden py-2.5 md:py-3">
            <div className="flex animate-scroll">
              <div className="flex items-center whitespace-nowrap">
                <a 
                  href="https://drive.google.com/file/d/1cJnN5wM_CqapgTZwhYuTRzRYlg0jpA3B/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs md:text-base font-semibold hover:text-yellow-300 transition-colors px-4 cursor-pointer"
                >
                  <span className="mr-2">📢</span>
                  Click here to check RACS-2026 Conference Flyer & Important Announcements
                </a>
                <span className="text-yellow-300 mx-4 md:mx-8">•</span>
                
                <a 
                  href="https://drive.google.com/file/d/1cJnN5wM_CqapgTZwhYuTRzRYlg0jpA3B/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs md:text-base font-semibold hover:text-yellow-300 transition-colors px-4 cursor-pointer"
                >
                  <span className="mr-2">🔔</span>
                  Abstract Submission Deadline: December 05, 2025
                </a>
                <span className="text-yellow-300 mx-4 md:mx-8">•</span>
                
                <a 
                  href="https://drive.google.com/file/d/1cJnN5wM_CqapgTZwhYuTRzRYlg0jpA3B/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs md:text-base font-semibold hover:text-yellow-300 transition-colors px-4 cursor-pointer"
                >
                  <span className="mr-2">📢</span>
                  Click here to check RACS-2026 Conference Flyer & Important Announcements
                </a>
                <span className="text-yellow-300 mx-4 md:mx-8">•</span>
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="flex items-center whitespace-nowrap">
                <a 
                  href="https://drive.google.com/file/d/1cJnN5wM_CqapgTZwhYuTRzRYlg0jpA3B/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs md:text-base font-semibold hover:text-yellow-300 transition-colors px-4 cursor-pointer"
                >
                  <span className="mr-2">📢</span>
                  Click here to check RACS-2026 Conference Flyer & Important Announcements
                </a>
                <span className="text-yellow-300 mx-4 md:mx-8">•</span>
                
                <a 
                  href="https://drive.google.com/file/d/1cJnN5wM_CqapgTZwhYuTRzRYlg0jpA3B/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs md:text-base font-semibold hover:text-yellow-300 transition-colors px-4 cursor-pointer"
                >
                  <span className="mr-2">🔔</span>
                  Abstract Submission Deadline: December 05, 2025
                </a>
                <span className="text-yellow-300 mx-4 md:mx-8">•</span>
                
                <a 
                  href="https://drive.google.com/file/d/1cJnN5wM_CqapgTZwhYuTRzRYlg0jpA3B/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs md:text-base font-semibold hover:text-yellow-300 transition-colors px-4 cursor-pointer"
                >
                  <span className="mr-2">📢</span>
                  Click here to check RACS-2026 Conference Flyer & Important Announcements
                </a>
                <span className="text-yellow-300 mx-4 md:mx-8">•</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-yellow-100 to-yellow-50 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-2xl p-4 md:p-8">
            {/* Header with Logos */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <img src="https://indianchemicalsociety.com/images/logo.png" alt="Indian Chemical Society" className="w-full h-full rounded-full border-4 border-blue-900 object-cover" />
              </div>
              
              <div className="flex-1 w-full">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-900 mb-3"></h1>
                <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white rounded-lg p-4 md:p-6 text-center shadow-lg">
                  <h2 className="text-lg md:text-2xl font-bold mb-2">National Conference on</h2>
                  <h3 className="text-base md:text-xl mb-2 leading-tight">Recent Advances in Chemical Sciences for Societal and Industrial Applications (RACS-2026)</h3>
                  <p className="text-sm md:text-lg mb-2">& 42nd Research Scholars Meet (RSM-2026)</p>
                  <p className="text-lg md:text-xl font-semibold mb-2">February 26-28, 2026</p>
                  <p className="text-sm md:text-lg">Venue: K. V. Auditorium, ICT, Mumbai</p>
                </div>
              </div>
              
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <img src="https://upload.wikimedia.org/wikipedia/en/1/13/Institute_of_Chemical_Technology_logo.png" alt="ICT Mumbai" className="w-full h-full rounded-full border-4 border-blue-900 object-cover" />
              </div>
            </div>
            
            {/* Organized By */}
            <div className="text-center mb-6">
              <p className="text-lg md:text-xl font-semibold italic mb-2 text-black">
                Organized by
              </p>
              <p className="text-sm md:text-lg font-medium text-black">
                Department of Chemistry, ICT Mumbai and Indian Chemical Society – Mumbai Branch
              </p>
            </div>

            {/* Patrons */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg p-4 mb-6 shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-center">Patrons</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8">
              {[
                'Padma Vibhushan Prof M.M. Sharma',
                'Padma Vibhushan Dr. Anil Kakodkar',
                'Padma Bhushan Prof. J. B. Joshi',
                'Padma Shri Prof. G.D. Yadav',
                'Padma Shri Prof. J. P. Mittal',
                'Prof. A. B. Pandit, VC, ICT'
              ].map((patron, idx) => (
                <div
                  key={idx}
                  className="p-3 md:p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <p className="font-semibold text-sm md:text-base text-center text-gray-900">
                    {patron}
                  </p>
                </div>
              ))}
            </div>

            {/* Conference Objectives */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-4 mb-4 shadow-md">
                <h3 className="text-xl md:text-2xl font-bold text-center">Conference Objectives</h3>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 md:p-6 shadow-lg border border-blue-100">
                <div className="space-y-4">
                  {[
                    'Share insights on emerging trends and future prospects in the field of chemical sciences.',
                    'Foster collaboration across disciplines and strengthen ties between academia and industry.',
                    'Promote innovative thinking and sustainable approaches to address practical challenges.',
                    'Create opportunities for early-career researchers to showcase their work and engage with international experts.',
                    'Inspire the development and exploration of novel ideas.',
                    'Support and nurture entrepreneurial initiatives in science and technology.'
                  ].map((objective, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                        {idx + 1}
                      </div>
                      <p className="text-gray-800 text-sm md:text-base leading-relaxed pt-0.5">
                        {objective}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Abstract Information */}
            <div className="bg-blue-50 rounded-lg p-6 mb-6 border-l-4 border-blue-900">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Abstract Submission</h3>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-base leading-relaxed">
                  Abstracts of the contributed papers should be submitted before{' '}
                  <strong className="text-blue-900">December 05, 2025</strong>. The length of the 
                  abstract should be limited to one page (Template available on:{' '}
                  <a 
                    href="https://www.racs2026.in/" 
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    https://www.racs2026.in/
                  </a>) including figures, tables and references.
                </p>
                
                <p className="text-base leading-relaxed">
                  Abstract submission should be done through online portal (
                  <a 
                    href="https://www.racs2026.in/" 
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    https://www.racs2026.in/
                  </a>). Abstracts will be peer reviewed prior to inclusion in the symposium proceedings.
                </p>
                
                <p className="text-base leading-relaxed">
                  The scientific programme of the symposium will include invited talks by eminent Indian 
                  and overseas scientists/engineers. Contributed papers will be presented in oral and 
                  poster sessions.
                </p>
              </div>
            </div>

            {/* Quick Links Section - Replacing the tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Link href="/important-dates">
                <div className="group bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                  <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-3 md:p-4">
                    <h3 className="text-xl md:text-2xl font-bold text-center">Important Dates</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-6xl">📅</span>
                    </div>
                    <p className="text-center text-gray-700 text-base mb-4">
                      View all deadlines and key dates for abstract submission, registration, and accommodation.
                    </p>
                    <div className="flex items-center justify-center text-yellow-700 font-semibold group-hover:text-yellow-800">
                      View Details <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/registration">
                <div className="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-3 md:p-4">
                    <h3 className="text-xl md:text-2xl font-bold text-center">Registration Fees</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-6xl">💳</span>
                    </div>
                    <p className="text-center text-gray-700 text-base mb-4">
                      Check registration fees for different categories and complete your registration.
                    </p>
                    <div className="flex items-center justify-center text-teal-700 font-semibold group-hover:text-teal-800">
                      View Details <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}