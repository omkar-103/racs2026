import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ImportantDates() {
  const dates = [
    {
      title: 'Abstract Submission Deadline',
      date: '05 December 2025',
      description: 'Last date to submit your research abstract through the online portal'
    },
    {
      title: 'Acceptance Notification',
      date: '10 January 2026',
      description: 'Authors will be notified about the acceptance of their abstracts'
    },
    {
      title: 'Registration Fee Payment',
      date: '15 January 2026',
      description: 'Complete your registration by paying the applicable fees'
    },
    {
      title: 'Accommodation Request',
      date: '20 January 2026',
      description: 'Last date to request accommodation arrangements'
    },
    {
      title: 'Conference Dates',
      date: '26-28 February 2026',
      description: 'Three days of insightful sessions, networking, and knowledge sharing',
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Important Dates</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-2">
            Mark your calendar with these crucial deadlines
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Timeline */}
          <div className="space-y-4 sm:space-y-5">
            {dates.map((item, idx) => (
              <div 
                key={idx}
                className={`
                  bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-300
                  ${item.highlight ? 'border-l-4 border-blue-600' : ''}
                `}
              >
                <div className={`
                  ${item.highlight 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700' 
                    : 'bg-gradient-to-r from-slate-50 to-gray-50'
                  } 
                  p-5 sm:p-6 md:p-8
                `}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 sm:gap-4">
                    <div className="flex-grow">
                      <h3 className={`
                        text-lg sm:text-xl md:text-2xl font-bold mb-2
                        ${item.highlight ? 'text-white' : 'text-gray-900'}
                      `}>
                        {item.title}
                      </h3>
                      <p className={`
                        text-sm sm:text-base
                        ${item.highlight ? 'text-white/90' : 'text-gray-600'}
                      `}>
                        {item.description}
                      </p>
                    </div>
                    
                    <div className={`
                      ${item.highlight 
                        ? 'bg-white text-blue-900' 
                        : 'bg-white text-gray-900'
                      }
                      px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-md flex-shrink-0
                    `}>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-8 sm:mt-10 md:mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border-l-4 border-amber-600">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Important Notice
            </h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-700">
              <p className="leading-relaxed">
                All deadlines are strict and submissions after the deadline will not be considered.
              </p>
              <p className="leading-relaxed">
                Registration fees must be paid before the deadline to confirm your participation.
              </p>
              <p className="leading-relaxed">
                Accommodation requests are subject to availability and will be processed on a first-come, first-served basis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}