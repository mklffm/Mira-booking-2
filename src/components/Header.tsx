"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
}

// Header translations
const translations = {
  en: {
    language: "Language",
    home: "Home",
    about: "Requirements",
    services: "Services",
    contact: "Apply",
    contactUs: "Contact Us",
    getStarted: "Get Started"
  },
  fr: {
    language: "Langue",
    home: "Accueil",
    about: "Conditions",
    services: "Services",
    contact: "Demande",
    contactUs: "Contactez-Nous",
    getStarted: "Commencer"
  },
  ar: {
    language: "اللغة",
    home: "الرئيسية",
    about: "المتطلبات",
    services: "الخدمات",
    contact: "تقديم طلب",
    contactUs: "اتصل بنا",
    getStarted: "ابدأ الآن"
  }
};

const Header = ({ language, setLanguage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  // Check if we're on the homepage
  const isHomePage = pathname === '/';
  
  const t = translations[language as keyof typeof translations] || translations.en;
  
  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    
    // Also save to localStorage directly for redundancy
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
    }
    
    setIsLanguageDropdownOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className={`container mx-auto px-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="font-bold text-xl">
                <span className={`${isScrolled || !isHomePage ? 'text-primary-600' : 'text-white'}`}>Mira</span>
                <span className="bg-gradient-to-r from-primary-600 to-secondary-500 text-transparent bg-clip-text"> Booking</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className={`md:flex items-center ${language === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
              <Link href="/" className={`${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} hover:text-primary-600 transition-colors`}>
                {t.home}
              </Link>
              <Link href="/services-visa" className={`${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} hover:text-primary-600 transition-colors`}>
                {t.services}
              </Link>
              <Link href="/contact" className={`${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} hover:text-primary-600 transition-colors`}>
                {t.contactUs}
              </Link>
              <Link href="/demande-visa" className={`${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} hover:text-primary-600 transition-colors`}>
                {t.contact}
              </Link>
              
              {/* Language Selector */}
              <div className="relative" ref={languageDropdownRef}>
                <button 
                  onClick={toggleLanguageDropdown}
                  className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-1' : 'space-x-1'} ${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} hover:text-primary-600 transition-colors`}
                >
                  <span>{t.language}</span>
                  <svg className={`w-4 h-4 ${isLanguageDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {isLanguageDropdownOpen && (
                  <div className={`absolute ${language === 'ar' ? 'right-0' : 'left-0'} mt-2 bg-white shadow-lg rounded-md overflow-hidden z-20 min-w-[150px]`}>
                    <div className="py-1">
                      <button 
                        onClick={() => changeLanguage('en')}
                        className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left ${language === 'en' ? 'font-bold' : ''}`}
                      >
                        <span className="mr-2">🇬🇧</span> English
                      </button>
                      <button 
                        onClick={() => changeLanguage('fr')}
                        className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left ${language === 'fr' ? 'font-bold' : ''}`}
                      >
                        <span className="mr-2">🇫🇷</span> Français
                      </button>
                      <button 
                        onClick={() => changeLanguage('ar')}
                        className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left ${language === 'ar' ? 'font-bold' : ''}`}
                      >
                        <span className="mr-2">🇩🇿</span> العربية
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <Link 
              href="/demande-visa" 
              className="bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 text-white px-6 py-2 rounded-full shadow-lg transition-all"
            >
              {t.getStarted}
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleLanguageDropdown}
              className={`${language === 'ar' ? 'ml-4' : 'mr-4'} ${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path>
              </svg>
            </button>
            
            {isLanguageDropdownOpen && (
              <div className={`absolute top-16 ${language === 'ar' ? 'right-4' : 'left-4'} bg-white shadow-lg rounded-md overflow-hidden z-20`}>
                <div className="py-1">
                  <button 
                    onClick={() => changeLanguage('en')}
                    className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left ${language === 'en' ? 'font-bold' : ''}`}
                  >
                    <span className="mr-2">🇬🇧</span> English
                  </button>
                  <button 
                    onClick={() => changeLanguage('fr')}
                    className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left ${language === 'fr' ? 'font-bold' : ''}`}
                  >
                    <span className="mr-2">🇫🇷</span> Français
                  </button>
                  <button 
                    onClick={() => changeLanguage('ar')}
                    className={`flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left ${language === 'ar' ? 'font-bold' : ''}`}
                  >
                    <span className="mr-2">🇩🇿</span> العربية
                  </button>
                </div>
              </div>
            )}
            
            <button 
              onClick={toggleMenu}
              className={`${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'}`}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className="py-2">
              <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                {t.home}
              </Link>
              <Link href="/services-visa" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                {t.services}
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                {t.contactUs}
              </Link>
              <Link href="/demande-visa" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                {t.contact}
              </Link>
              <Link 
                href="/demande-visa" 
                className="block px-4 py-3 mt-2 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-medium" 
                onClick={() => setIsMenuOpen(false)}
              >
                {t.getStarted}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 