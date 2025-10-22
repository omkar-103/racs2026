'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, LogOut, Shield } from 'lucide-react';

export default function Navbar() {
  const [showCommitteeDropdown, setShowCommitteeDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCommitteeDropdown(false);
      }
    };

    if (showCommitteeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCommitteeDropdown]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('conferenceUser');
  };

  const toggleCommitteeDropdown = () => {
    setShowCommitteeDropdown(!showCommitteeDropdown);
  };

  const closeDropdown = () => {
    setShowCommitteeDropdown(false);
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
              <Link href="/" className="px-3 py-2 hover:bg-blue-800 rounded transition-all duration-200 font-medium text-sm">
                Home
              </Link>
              <Link href="/about" className="px-3 py-2 hover:bg-blue-800 rounded transition-all duration-200 font-medium text-sm">
                About Us
              </Link>
              <Link href="/scope" className="px-3 py-2 hover:bg-blue-800 rounded transition-all duration-200 font-medium text-sm">
                Scope
              </Link>
              
              {/* Committee Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={toggleCommitteeDropdown}
                  className="px-3 py-2 hover:bg-blue-800 rounded transition-all duration-200 flex items-center font-medium text-sm"
                >
                  Committee <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${showCommitteeDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showCommitteeDropdown && (
                  <div className="absolute left-0 mt-2 w-64 bg-white text-blue-950 shadow-2xl rounded-lg overflow-hidden border-2 border-blue-200 z-50">
                    <Link 
                      href="/committee/national" 
                      className="block px-4 py-3 hover:bg-blue-100 border-b transition-colors text-sm"
                      onClick={closeDropdown}
                    >
                      National Advisory Committee
                    </Link>
                    <Link 
                      href="/committee/organizing" 
                      className="block px-4 py-3 hover:bg-blue-100 border-b transition-colors text-sm"
                      onClick={closeDropdown}
                    >
                      Organizing Committee
                    </Link>
                    <Link 
                      href="/committee/local" 
                      className="block px-4 py-3 hover:bg-blue-100 border-b transition-colors text-sm"
                      onClick={closeDropdown}
                    >
                      Local Organizing Committee
                    </Link>
                    <Link 
                      href="/committee/technical" 
                      className="block px-4 py-3 hover:bg-blue-100 border-b transition-colors text-sm"
                      onClick={closeDropdown}
                    >
                      Technical Committee
                    </Link>
                    <Link 
                      href="/committee/accommodation" 
                      className="block px-4 py-3 hover:bg-blue-100 transition-colors text-sm"
                      onClick={closeDropdown}
                    >
                      Accommodation & Transport Committee
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/important-dates" className="px-3 py-2 hover:bg-blue-800 rounded transition-all duration-200 font-medium text-sm">
                Important Dates
              </Link>
              <Link href="/registration" className="px-3 py-2 hover:bg-blue-800 rounded transition-all duration-200 font-medium text-sm">
                Registration
              </Link>
              <Link href="/contact" className="px-3 py-2 hover:bg-blue-800 rounded transition-all duration-200 font-medium text-sm">
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
                    <Link href="/admin" className="px-3 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-all duration-200 flex items-center text-sm font-medium shadow-md">
                      <Shield className="w-4 h-4 mr-1" /> Admin
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-200 flex items-center text-sm font-medium shadow-md"
                  >
                    <LogOut className="w-4 h-4 mr-1" /> Logout
                  </button>
                </>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    href="/register"
                    className="px-3 md:px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-lg transition-all duration-200 font-medium shadow-md text-sm"
                  >
                    Register
                  </Link>
                  <Link
                    href="/login"
                    className="px-3 md:px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-200 font-medium shadow-md text-sm"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-2">
              <Link href="/" className="block px-4 py-2 hover:bg-blue-800 rounded">Home</Link>
              <Link href="/about" className="block px-4 py-2 hover:bg-blue-800 rounded">About Us</Link>
              <Link href="/scope" className="block px-4 py-2 hover:bg-blue-800 rounded">Scope</Link>
              <Link href="/committee/national" className="block px-4 py-2 hover:bg-blue-800 rounded">National Advisory Committee</Link>
              <Link href="/committee/organizing" className="block px-4 py-2 hover:bg-blue-800 rounded">Organizing Committee</Link>
              <Link href="/committee/local" className="block px-4 py-2 hover:bg-blue-800 rounded">Local Committee</Link>
              <Link href="/committee/technical" className="block px-4 py-2 hover:bg-blue-800 rounded">Technical Committee</Link>
              <Link href="/committee/accommodation" className="block px-4 py-2 hover:bg-blue-800 rounded">Accommodation & Transport</Link>
              <Link href="/important-dates" className="block px-4 py-2 hover:bg-blue-800 rounded">Important Dates</Link>
              <Link href="/registration" className="block px-4 py-2 hover:bg-blue-800 rounded">Registration</Link>
              <Link href="/contact" className="block px-4 py-2 hover:bg-blue-800 rounded">Contact</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}