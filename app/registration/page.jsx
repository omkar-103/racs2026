import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RegistrationFees() {
  const feeCategories = [
    {
      category: 'M.Sc. Students',
      fee: '₹750',
      color: 'from-blue-50 to-blue-100'
    },
    {
      category: 'Ph.D. Students / Post-Docs',
      fee: '₹1,000',
      color: 'from-indigo-50 to-indigo-100'
    },
    {
      category: 'Academicians / Scientists',
      fee: '₹2,000',
      color: 'from-teal-50 to-teal-100'
    },
    {
      category: 'Delegates from Industries',
      fee: '₹4,000',
      color: 'from-purple-50 to-purple-100'
    },
    {
      category: 'Accompanying Person',
      fee: '₹1,000',
      color: 'from-amber-50 to-amber-100'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Registration Fees</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-2">
            RACS-2026 Conference Registration
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Fee Cards */}
          <div className="space-y-4 sm:space-y-5">
            {feeCategories.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${item.color} p-5 sm:p-6 md:p-8 flex justify-between items-center`}>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                    {item.category}
                  </h3>
                  <div className="bg-white rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-md">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                      {item.fee}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-8 sm:mt-10 md:mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border-l-4 border-blue-600">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Important Information
            </h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-700">
              <p className="leading-relaxed">
                Registration fees must be paid by <span className="font-semibold text-gray-900">15 January 2026</span> to confirm your participation.
              </p>
              <p className="leading-relaxed">
                Students must provide valid ID at the time of registration.
              </p>
              <p className="leading-relaxed">
                Registration fees are non-refundable. Substitutions are allowed with prior notice.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}