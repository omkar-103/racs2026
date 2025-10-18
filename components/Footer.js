import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white mt-auto">
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
      </div>
    </footer>
  );
}