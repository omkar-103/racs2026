"use client";
import React, { useState, useEffect } from 'react';
import { Wrench, Mail, Bell, Sparkles, Calendar, MapPin } from 'lucide-react';

export default function UnderConstructionPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(148, 163, 184) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 max-w-5xl w-full transition-all duration-1000 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200">
          {/* Logo Section */}
          <div className="flex justify-center items-center gap-6 mb-10 flex-wrap">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full p-2 shadow-lg border-2 border-blue-100">
              <img src="https://indianchemicalsociety.com/images/logo.png" alt="ICS" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-full p-2 shadow-lg border-2 border-blue-100">
              <img src="https://upload.wikimedia.org/wikipedia/en/1/13/Institute_of_Chemical_Technology_logo.png" alt="ICT" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          {/* Icon with animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-teal-600 p-5 rounded-full shadow-lg">
                <Wrench className="w-10 h-10 text-white" style={{ animation: 'bounce 2s infinite' }} />
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-3 tracking-tight">
              RACS-2026
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-4">
              Website Under Maintenance
            </h2>
            <div className="flex items-center justify-center gap-2 text-slate-600 text-base">
              <Sparkles className="w-5 h-5 text-teal-600" />
              <p className="font-medium">We're making improvements to serve you better</p>
              <Sparkles className="w-5 h-5 text-teal-600" />
            </div>
          </div>

          {/* Conference Info */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 md:p-8 mb-8 border-2 border-blue-200 shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center mb-3 leading-tight">
              National Conference on Recent Advances in Chemical Sciences
            </h2>
            <p className="text-lg md:text-xl text-slate-700 text-center mb-5 font-medium">
              RACS-2026 & 42nd Research Scholars Meet (RSM-2026)
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <Calendar className="w-6 h-6 text-blue-600" />
                <span className="text-base md:text-lg font-semibold text-slate-800">February 26-28, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <MapPin className="w-6 h-6 text-teal-600" />
                <span className="text-base md:text-lg font-semibold text-slate-800">K. V. Auditorium, ICT Mumbai</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-slate-600 text-base md:text-lg mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            We are currently updating our website to serve you better. Our team is working diligently to bring you an improved experience with the latest conference information and registration details.
          </p>

          {/* Progress indicator */}
          <div className="max-w-md mx-auto mb-10">
            <div className="flex justify-between text-slate-700 text-sm font-semibold mb-3">
              <span>Maintenance Progress</span>
              <span className="text-blue-600">85%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden shadow-inner">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 h-4 rounded-full transition-all duration-500 shadow-sm" style={{ width: '85%' }}></div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center bg-slate-50 rounded-2xl p-6 md:p-8 border-2 border-slate-200 shadow-md">
            <p className="text-slate-800 text-lg md:text-xl mb-4 font-bold">Need Immediate Assistance?</p>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg shadow-sm border border-slate-200">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:icticsmbracs2026@gmail.com" className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-base">
                  icticsmbracs2026@gmail.com
                </a>
              </div>
            </div>
            <p className="text-slate-600 text-sm md:text-base mt-5 font-medium">
              We'll be back online shortly. Thank you for your patience!
            </p>
          </div>

          {/* Organizers */}
          <div className="text-center mt-8 pt-6 border-t border-slate-200">
            <p className="text-slate-600 text-sm font-semibold mb-2">Organized by</p>
            <p className="text-slate-800 font-bold text-base">
              Department of Chemistry, ICT Mumbai & Indian Chemical Society – Mumbai Branch
            </p>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-slate-600 text-sm font-medium mt-8">
          © 2025 RACS-2026. Website will be available soon.
        </p>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}