import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                Indian Chemical Society Kolkata
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Indian Chemical Society (ICS) is the oldest professional society of chemists in India. It was established in 1924 at Kolkata by the renowned chemist, Acharya Prafulla Chandra Ray, along with J. N. Mukherjee, S. S. Bhatnagar and other distinguished scientists with the aim of promoting advancement of chemistry and research in chemical sciences. Through various activities, ICS provides a forum to the Indian chemists to foster better communication and interaction among individual scientists, universities, research institutions and industry. Indian Chemical Society has twelve branches all over the country.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                Indian Chemical Society Mumbai Branch
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                The Mumbai Branch of the Indian Chemical Society known as ICS-MB, was established in year 1951 and is the most dynamic branch of the ICS in the country. In 1983, ICS-MB started Aptitude Test in chemistry for students at undergraduate and post graduate levels. In 1987, ICS-MB organized first Research Scholars' Meet (RSM) at University Department of Chemistry. In order to improve chemical education, ICS-MB also delivers lecture series and workshops on different topics for the institutes and colleges in Mumbai region. In order celebrate Centennial year of foundation of Indian Chemical Society and in the memory of Acharya Prafulla Chandra Ray, Mumbai Branch of Indian Chemical Society is organizing a National conference from 26-28 February 2026 and 42nd Research Scholars Meet (RSM-2026).
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                Department of Chemistry, Institute of Chemical Technology, Deemed to be University
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Department of Chemistry was established in 1951 in the then University Department of Chemical Technology (UDCT) to teach Chemistry Courses to the technology students and do research in Chemistry. Over the last 75 years the Chemistry Section grew into current Department of Chemistry. Right from the inception the faculty members in the Department have been guiding students for Ph.D. and so far more than 300 students have obtained their Ph.D. degrees and the faculty members have published more than 800 research publications. The department is well-equipped with a state-of-the-art instrumentation facility.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}