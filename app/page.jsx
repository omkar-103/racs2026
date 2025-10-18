'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
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
              <p className="text-lg md:text-xl font-semibold italic mb-2">Organized by</p>
              <p className="text-sm md:text-lg font-medium">Department of Chemistry, ICT Mumbai and Indian Chemical Society- Mumbai Branch</p>
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
                <div key={idx} className="p-3 md:p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow hover:shadow-md transition-shadow">
                  <p className="font-semibold text-sm md:text-base text-center">{patron}</p>
                </div>
              ))}
            </div>

            {/* Abstract Information */}
            <div className="bg-blue-50 rounded-lg p-4 md:p-6 mb-6 border-l-4 border-blue-900">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">Abstract Submission</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Abstracts of the contributed papers should be submitted before <strong>November 14, 2025</strong>. 
                The length of the abstract should be limited to one page (Template available on: 
                <a href="https://www.racs2026.in/" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  https://www.racs2026.in/
                </a>) including figures, tables and references.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Abstract submission should be done through online portal (
                <a href="https://www.racs2026.in/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  https://www.racs2026.in/
                </a>). Abstracts will be peer reviewed prior to inclusion in the symposium proceedings.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                The scientific programme of the symposium will include Invited talks by eminent Indian and overseas 
                scientists / engineers. Contributed papers will be presented in Oral and Poster sessions.
              </p>
            </div>

            {/* Important Dates & Registration Fees Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Important Dates */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-3 md:p-4">
                  <h3 className="text-xl md:text-2xl font-bold text-center">Important Dates</h3>
                </div>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-yellow-300">
                      <td className="p-3 md:p-4 font-semibold text-sm md:text-base">Abstract submission:</td>
                      <td className="p-3 md:p-4 text-right font-bold text-sm md:text-base">05 December 2025</td>
                    </tr>
                    <tr className="border-b border-yellow-300">
                      <td className="p-3 md:p-4 font-semibold text-sm md:text-base">Acceptance of the abstracts:</td>
                      <td className="p-3 md:p-4 text-right font-bold text-sm md:text-base">10 January 2026</td>
                    </tr>
                    <tr className="border-b border-yellow-300">
                      <td className="p-3 md:p-4 font-semibold text-sm md:text-base">Accommodation request:</td>
                      <td className="p-3 md:p-4 text-right font-bold text-sm md:text-base">20 January 2026</td>
                    </tr>
                    <tr className="border-b border-yellow-300">
                      <td className="p-3 md:p-4 font-semibold text-sm md:text-base">Payment of registration fees:</td>
                      <td className="p-3 md:p-4 text-right font-bold text-sm md:text-base">15 January 2026</td>
                    </tr>
                    <tr>
                      <td className="p-3 md:p-4 font-semibold text-sm md:text-base">Accompanying person:</td>
                      <td className="p-3 md:p-4 text-right font-bold text-sm md:text-base">₹ 1000/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Registration Fees */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-3 md:p-4">
                  <h3 className="text-xl md:text-2xl font-bold text-center">Registration Fees</h3>
                </div>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-teal-300">
                      <td className="p-3 md:p-4 font-semibold text-sm md:text-base">M.Sc.</td>
                      <td className="p-3 md:p-4 text-right font-bold text-sm md:text-base">₹ 750/-</td>
                    </tr>
                    <tr className="border-b border-teal-300">
                      <td className="p-3 md:p-4 font-semibold text-sm md:text-base">Ph.D Students/Post-Docs</td>
                      <td className="p-3 md:p-4 text-right font-bold text-sm md:text-base">₹ 1000/-</td>
                    </tr>
                    <tr className="border-b border-teal-300">
                      <td className="p-3 md:p-4 font-semibold text-sm md:text-base">Academician/Scientists</td>
                      <td className="p-3 md:p-4 text-right font-bold text-sm md:text-base">₹ 2000/-</td>
                    </tr>
                    <tr className="border-b border-teal-300">
                      <td className="p-3 md:p-4 font-semibold text-sm md:text-base">Delegates from Industries</td>
                      <td className="p-3 md:p-4 text-right font-bold text-sm md:text-base">₹ 4000/-</td>
                    </tr>
                    <tr>
                      <td className="p-3 md:p-4 font-semibold text-sm md:text-base">Accompanying person</td>
                      <td className="p-3 md:p-4 text-right font-bold text-sm md:text-base">₹ 1000/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
