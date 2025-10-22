import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Contact RACS</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">For any query, please write to:</p>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-900 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <a 
                      href="mailto:icticsmbracs2026@gmail.com" 
                      className="text-lg md:text-xl font-semibold text-blue-900 hover:text-blue-700 transition break-all"
                    >
                      icticsmbracs2026@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-teal-900 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Venue</p>
                    <p className="text-base md:text-lg font-semibold text-teal-900">K. V. Auditorium</p>
                    <p className="text-sm md:text-base text-gray-700">Institute of Chemical Technology (ICT)</p>
                    <p className="text-sm md:text-base text-gray-700">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}