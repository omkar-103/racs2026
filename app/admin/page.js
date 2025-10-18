'use client';
import { useState, useEffect } from 'react';
import { Shield, User, Mail, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const adminEmails = [
    'ac.chaskar@ictmumbai.edu.in',
    'achaskar25@gmail.com',
    'rupeshhgaikwad@gmail.com',
    'omkarparelkar@gmail.com'
  ];

  useEffect(() => {
    const user = localStorage.getItem('conferenceUser');
    if (!user) {
      setIsAuthorized(false);
      setLoading(false);
      return;
    }
    
    const parsedUser = JSON.parse(user);
    setCurrentUser(parsedUser);
    
    if (!adminEmails.includes(parsedUser.email)) {
      setIsAuthorized(false);
      setLoading(false);
      return;
    }
    
    setIsAuthorized(true);
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/admin/users');
      const data = await res.json();
      if (data.success) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="bg-gray-50 py-12 flex-1 flex items-center justify-center">
          <div className="text-2xl text-blue-900">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="bg-gray-50 py-12 flex-1 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md">
            <div className="text-center">
              <Shield className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
              <p className="text-gray-600">You do not have permission to access the admin panel.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-8 md:py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-yellow-600 mr-3" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-blue-900">Admin Panel</h1>
                <p className="text-sm text-gray-600">Welcome, {currentUser?.firstName} {currentUser?.lastName}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Registered Users</h2>
              <p className="text-gray-600 text-sm">Total: {users.length} users</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm md:text-base">First Name</th>
                    <th className="px-4 py-3 text-left text-sm md:text-base">Last Name</th>
                    <th className="px-4 py-3 text-left text-sm md:text-base">Email</th>
                    <th className="px-4 py-3 text-left text-sm md:text-base">Registered At</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center py-8 text-gray-500">
                        No registered users yet.
                      </td>
                    </tr>
                  ) : (
                    users.map((user, idx) => (
                      <tr key={idx} className="border-b hover:bg-blue-50 transition-colors">
                        <td className="px-4 py-3 text-sm md:text-base">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-blue-900" />
                            {user.firstName}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm md:text-base">{user.lastName}</td>
                        <td className="px-4 py-3 text-sm md:text-base">
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-gray-500" />
                            <span className="break-all">{user.email}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm md:text-base">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                            {new Date(user.createdAt).toLocaleString()}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}