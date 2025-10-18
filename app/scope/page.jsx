import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ScopePage() {
  const topics = [
    'Green and Sustainable Chemistry',
    'Computational Chemistry',
    'Artificial Intelligence driven Chemistry',
    'Advanced functional materials',
    'Polymer Chemistry',
    'Green Energy generation & Storage',
    'Catalysis',
    'Supramolecular Chemistry',
    'Bio-inorganic Chemistry, Biochemistry',
    'Organic light emitting material',
    'Nuclear & Radiochemistry',
    'Reaction Mechanism and Dynamics',
    'Separation Chemistry',
    'Nano chemistry',
    'Synthetic Organic Chemistry',
    'Synthesis of APIs, Impurities',
    'Analytical techniques',
    'Radiation & Photochemistry',
    'Radioisotope Application to Society, Healthcare & Industry',
    'Chemical Health and Safety',
    'Chemical Education'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Scope of the Conference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {topics.map((topic, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start p-3 md:p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all shadow-sm hover:shadow-md"
                >
                  <span className="text-blue-900 mr-2 text-lg font-bold">•</span>
                  <span className="text-gray-800 text-sm md:text-base">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}