import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, Users, Award, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">About Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-2">
            Celebrating a Century of Excellence in Chemical Sciences
          </p>
        </div>
      </div>

      <div className="flex-1 py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            {/* Indian Chemical Society Kolkata */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="bg-white/10 p-2.5 sm:p-3 rounded-lg">
                    <Building2 className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    Indian Chemical Society Kolkata
                  </h2>
                </div>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                    <span className="text-blue-900 font-semibold">Established 1924</span> — The Oldest Professional Society of Chemists in India
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  The Indian Chemical Society (ICS) was founded at Kolkata by the renowned chemist <span className="font-semibold text-gray-900">Acharya Prafulla Chandra Ray</span>, along with <span className="font-semibold">J. N. Mukherjee</span>, <span className="font-semibold">S. S. Bhatnagar</span>, and other distinguished scientists. Established with the vision of promoting advancement in chemistry and research in chemical sciences, ICS serves as a vital forum for Indian chemists, fostering collaboration and communication among scientists, universities, research institutions, and industry.
                </p>
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-blue-900">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold text-xs sm:text-sm md:text-base">12 Branches across India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Indian Chemical Society Mumbai Branch */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="bg-white/10 p-2.5 sm:p-3 rounded-lg">
                    <Users className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                    Indian Chemical Society Mumbai Branch
                  </h2>
                </div>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                    <span className="text-teal-700 font-semibold">Founded 1951</span> — The Most Dynamic Branch of ICS
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  The Mumbai Branch of the Indian Chemical Society (ICS-MB) has been at the forefront of chemical education and research excellence for over seven decades. Since its inception, ICS-MB has pioneered several initiatives to advance chemical sciences in the region.
                </p>
                
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 mb-3 sm:mb-4">
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">Key Milestones</h3>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base">
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-teal-600 font-bold mt-0.5 sm:mt-1">•</span>
                      <p className="text-gray-700"><span className="font-semibold">1983:</span> Initiated Aptitude Tests in chemistry for undergraduate and postgraduate students</p>
                    </div>
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-teal-600 font-bold mt-0.5 sm:mt-1">•</span>
                      <p className="text-gray-700"><span className="font-semibold">1987:</span> Organized the first Research Scholars' Meet (RSM)</p>
                    </div>
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-teal-600 font-bold mt-0.5 sm:mt-1">•</span>
                      <p className="text-gray-700"><span className="font-semibold">Ongoing:</span> Regular lecture series and workshops for institutes across Mumbai</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border-l-4 border-yellow-600">
                  <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed">
                    In commemoration of the <span className="font-bold text-yellow-900">Centennial Year</span> of the Indian Chemical Society and in honor of <span className="font-semibold">Acharya Prafulla Chandra Ray</span>, ICS-MB is organizing a <span className="font-bold text-blue-900">National Conference (RACS-2026)</span> and the <span className="font-bold text-blue-900">42nd Research Scholars' Meet (RSM-2026)</span> from February 26-28, 2026.
                  </p>
                </div>
              </div>
            </div>

            {/* Department of Chemistry, ICT */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="bg-white/10 p-2.5 sm:p-3 rounded-lg">
                    <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                    Department of Chemistry, ICT Mumbai
                  </h2>
                </div>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-900 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                    <span className="text-indigo-900 font-semibold">Established 1951</span> — Institute of Chemical Technology, Deemed to be University
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  The Department of Chemistry was established in the former University Department of Chemical Technology (UDCT) with a dual mandate: to provide comprehensive chemistry education to technology students and to conduct cutting-edge research in chemical sciences. Over the past 75 years, the Department has evolved into a center of academic and research excellence.
                </p>

                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-indigo-100">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 mb-1 sm:mb-2">300+</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium leading-tight">Ph.D. Graduates</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-blue-100">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-1 sm:mb-2">800+</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium leading-tight">Research Publications</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-cyan-100">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900 mb-1 sm:mb-2">75</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium leading-tight">Years of Excellence</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6">
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    The Department continues its tradition of academic excellence, guiding doctoral research and producing world-class scientists. With state-of-the-art instrumentation facilities and a commitment to innovation, the Department remains at the forefront of chemical research and education in India.
                  </p>
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