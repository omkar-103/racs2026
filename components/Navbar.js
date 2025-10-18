'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, LogOut, User, Shield } from 'lucide-react';

export default function Navbar() {
  const [showCommitteeDropdown, setShowCommitteeDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const adminEmails = [
    'ac.chaskar@ictmumbai.edu.in',
    'achaskar25@gmail.com',
    'rupeshhgaikwad@gmail.com',
    'omkarparelkar@gmail.com'
  ];

  const isAdmin = currentUser && adminEmails.includes(currentUser.email);

  useEffect(() => {
    const user = localStorage.getItem('conferenceUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
      setIsLoggedIn(true);
    }
  }, []);

  const handleAuth = async () => {
    if (isLoginMode) {
      // Login
      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email, password: formData.password })
        });
        const data = await res.json();
        if (data.success) {
          setCurrentUser(data.user);
          setIsLoggedIn(true);
          localStorage.setItem('conferenceUser', JSON.stringify(data.user));
          setShowAuthModal(false);
          setFormData({ firstName: '', lastName: '', email: '', password: '' });
        } else {
          alert(data.message || 'Login failed');
        }
      } catch (error) {
        alert('Error logging in');
      }
    } else {
      // Register
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
        alert('Please fill all fields');
        return;
      }
      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        const data = await res.json();
        if (data.success) {
          setCurrentUser(data.user);
          setIsLoggedIn(true);
          localStorage.setItem('conferenceUser', JSON.stringify(data.user));
          setShowAuthModal(false);
          setFormData({ firstName: '', lastName: '', email: '', password: '' });
        } else {
          alert(data.message || 'Registration failed');
        }
      } catch (error) {
        alert('Error registering');
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('conferenceUser');
  };

  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-3 px-4 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-2">
            <div className="text-xs md:text-sm">
              <span className="font-semibold">National Conference on RACS-2026</span>
              <span className="hidden md:inline"> | February 26-28, 2026</span>
            </div>
            <div className="text-xs md:text-sm">
              <span className="font-semibold">Venue:</span> K. V. Auditorium, ICT, Mumbai
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link href="/" className="px-4 py-2 hover:bg-blue-800 rounded transition-all duration-200 font-medium">
                Home
              </Link>
              <Link href="/about" className="px-4 py-2 hover:bg-blue-800 rounded transition-all duration-200 font-medium">
                About Us
              </Link>
              <Link href="/scope" className="px-4 py-2 hover:bg-blue-800 rounded transition-all duration-200 font-medium">
                Scope
              </Link>
              
              {/* Committee Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowCommitteeDropdown(true)}
                onMouseLeave={() => setShowCommitteeDropdown(false)}
              >
                <button className="px-4 py-2 hover:bg-blue-800 rounded transition-all duration-200 flex items-center font-medium">
                  Committee <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {showCommitteeDropdown && (
                  <div className="absolute left-0 mt-2 w-64 bg-white text-blue-950 shadow-2xl rounded-lg overflow-hidden">
                    <Link href="/committee/national" className="block px-4 py-3 hover:bg-blue-100 border-b transition-colors">
                      National Advisory Committee
                    </Link>
                    <Link href="/committee/organizing" className="block px-4 py-3 hover:bg-blue-100 border-b transition-colors">
                      Organizing Committee
                    </Link>
                    <Link href="/committee/local" className="block px-4 py-3 hover:bg-blue-100 transition-colors">
                      Local Organizing Committee
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/contact" className="px-4 py-2 hover:bg-blue-800 rounded transition-all duration-200 font-medium">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Auth Section */}
            <div className="flex items-center space-x-3">
              {isLoggedIn ? (
                <>
                  <span className="text-sm hidden md:inline">Hi, {currentUser?.firstName}</span>
                  {isAdmin && (
                    <Link href="/admin" className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-all duration-200 flex items-center text-sm font-medium shadow-md">
                      <Shield className="w-4 h-4 mr-1" /> Admin
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-200 flex items-center text-sm font-medium shadow-md"
                  >
                    <LogOut className="w-4 h-4 mr-1" /> Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => { setShowAuthModal(true); setIsLoginMode(true); }}
                  className="px-4 md:px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-lg transition-all duration-200 font-medium shadow-md text-sm md:text-base"
                >
                  Register / Login
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-2">
              <Link href="/" className="block px-4 py-2 hover:bg-blue-800 rounded">Home</Link>
              <Link href="/about" className="block px-4 py-2 hover:bg-blue-800 rounded">About Us</Link>
              <Link href="/scope" className="block px-4 py-2 hover:bg-blue-800 rounded">Scope</Link>
              <Link href="/committee/national" className="block px-4 py-2 hover:bg-blue-800 rounded">National Committee</Link>
              <Link href="/committee/organizing" className="block px-4 py-2 hover:bg-blue-800 rounded">Organizing Committee</Link>
              <Link href="/committee/local" className="block px-4 py-2 hover:bg-blue-800 rounded">Local Committee</Link>
              <Link href="/contact" className="block px-4 py-2 hover:bg-blue-800 rounded">Contact</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-900">
                {isLoginMode ? 'Login' : 'Register'}
              </h2>
              <button onClick={() => setShowAuthModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              {!isLoginMode && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <button
                onClick={handleAuth}
                className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3 rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-200 font-semibold shadow-md"
              >
                {isLoginMode ? 'Login' : 'Register'}
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsLoginMode(!isLoginMode)}
                className="text-blue-600 hover:underline text-sm"
              >
                {isLoginMode ? "Don't have an account? Register" : 'Already have an account? Login'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}