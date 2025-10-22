import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users } from 'lucide-react';

export default function CommitteeOrganizing() {
  const members = [
    'Prof. Shivram S. Garje, Chairperson',
    'Prof. Atul C. Chaskar, Convener',
    'Dr. Rupesh H. Gaikwad, Co-convener',
    'Dr. Rahul Pinjari, Secretary',
    'Dr. Prasad P. Phadnis, Joint Secretary',
    'Dr. Shreddha Tiwari, Treasurer',
    'Dr. V. Sudarsan',
    'Dr. Shilpee Sachar',
    'Dr. Sandeep Nigam',
    'Prof. Raghunath Acharya',
    'Dr. Kanhu Barick',
    'Dr. Anant Kapdi'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-blue-900 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                Organizing Committee
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {members.map((member, idx) => (
                <div 
                  key={idx} 
                  className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border-l-4 border-blue-900 hover:shadow-md transition-shadow"
                >
                  <p className="text-sm md:text-base text-gray-800 font-medium">{member}</p>
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