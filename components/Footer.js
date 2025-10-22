"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Eye, Users } from 'lucide-react';

export default function Footer() {
  const [visitorStats, setVisitorStats] = useState({
    totalVisitors: 0,
    topCountries: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/visitors');
        const data = await res.json();
        
        if (data.success) {
          setVisitorStats({
            totalVisitors: data.totalVisitors,
            topCountries: data.countryStats.slice(0, 3)
          });
        }
      } catch (error) {
        console.error('Error fetching visitor stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <footer className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white mt-auto relative">
      {/* Visitor Counter - Top Right Corner */}
      <div className="absolute top-4 right-4 bg-gradient-to-br from-blue-800 to-blue-700 rounded-lg shadow-lg p-3 border border-blue-600/30 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-yellow-400" />
            <div>
              <p className="text-[10px] text-blue-200 leading-tight">Visitors</p>
              {loading ? (
                <div className="h-4 w-12 bg-blue-600 rounded animate-pulse"></div>
              ) : (
                <p className="text-sm font-bold leading-tight">{visitorStats.totalVisitors.toLocaleString()}</p>
              )}
            </div>
          </div>
          
          {!loading && visitorStats.topCountries.length > 0 && (
            <>
              <div className="w-px h-8 bg-blue-600"></div>
              <div className="flex items-center gap-1">
                {visitorStats.topCountries.map((stat, idx) => (
                  <div key={idx} className="group relative">
                    {stat.countryCode !== 'XX' ? (
                      <img 
                        src={`https://flagcdn.com/20x15/${stat.countryCode.toLowerCase()}.png`}
                        alt={stat.country}
                        className="w-5 h-4 rounded shadow-sm hover:scale-110 transition-transform cursor-pointer"
                      />
                    ) : (
                      <span className="text-sm">🌍</span>
                    )}
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {stat.country}: {stat.count}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link href="/scope" className="hover:text-yellow-400 transition">Scope</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <p className="text-sm mb-2">Email: <a href="mailto:icticsmbracs2026@gmail.com" className="hover:text-yellow-400 transition">icticsmbracs2026@gmail.com</a></p>
            <p className="text-sm">Venue: K. V. Auditorium<br/>ICT, Mumbai</p>
          </div>

          {/* Conference Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">RACS-2026</h3>
            <p className="text-sm">National Conference on Recent Advances in Chemical Sciences</p>
            <p className="text-sm mt-2">February 26-28, 2026</p>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center text-sm">
          <p>&copy; 2025 RACS-2026. All Rights Reserved.</p>
          <p className="mt-1 text-xs text-gray-300">Organized by Department of Chemistry, ICT Mumbai & Indian Chemical Society - Mumbai Branch</p>
        </div>


       {/* Developer Credit */}
        <p className="absolute bottom-0 right-4 text-[3px] sm:text-[5px] text-blue-400/50 hover:text-blue-300/70 transition-colors">
  Website Developed by{' '}
  <a 
    href="https://linkedin.com/in/omkar-parelkar" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-blue-200 underline decoration-dotted"
  >
    Omkar Parelkar
  </a>
</p>

      </div>

      
    </footer>
  );
}