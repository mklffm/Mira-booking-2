"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Page title translations
const pageTitles = {
  en: "Services - Mira Booking",
  fr: "Services - Mira Booking",
  ar: "الخدمات - ميرا بوكينج"
};

// Sample visa service data
const visaServices = [
  {
    id: 'schengen',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1000',
    price: 25000,
    rating: 4.8,
  },
  {
    id: 'usa-canada',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000',
    price: 45000,
    rating: 4.7,
  },
  {
    id: 'student',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000',
    price: 30000,
    rating: 4.9,
  },
];

// Sample travel services data
const travelServices = [
  {
    id: 'flights',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000',
    title: 'Flight Booking',
    description: 'Find the best flight deals for your next trip.',
  },
  {
    id: 'hotels',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000',
    title: 'Hotel Booking',
    description: 'Book comfortable and affordable accommodations worldwide.',
  },
  {
    id: 'packages',
    image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=1000',
    title: 'Travel Packages',
    description: 'Complete travel packages for a worry-free experience.',
  },
];

// Text translations
const translations = {
  en: {
    title: "Our Services",
    subtitle: "Complete travel solutions for all your needs",
    visaProcessingTab: "Visa Processing",
    travelServicesTab: "Travel Services",
    visaProcessingTitle: "Visa Processing Services",
    visaProcessingSubtitle: "Professional visa services for various destinations",
    travelServicesTitle: "Travel Services",
    travelServicesSubtitle: "Complete travel booking services for your journey",
    description: "Our experts provide reliable and efficient services for all your travel needs.",
    schengenVisa: "Schengen Visa",
    schengenDesc: "Travel to 26 European countries with a single visa. Ideal for tourism, business, or family visits to Europe.",
    usaCanadaVisa: "USA & Canada Visa",
    usaCanadaDesc: "Visit the United States and Canada for tourism, business meetings, or to meet family and friends.",
    studentVisa: "Student Visa",
    studentDesc: "Study abroad in Turkey or France with our specialized student visa processing service.",
    flightBooking: "Flight Booking",
    flightDesc: "Find the best flight deals for your next trip.",
    hotelBooking: "Hotel Booking",
    hotelDesc: "Book comfortable and affordable accommodations worldwide.",
    travelPackages: "Travel Packages",
    packagesDesc: "Complete travel packages for a worry-free experience.",
    learnMore: "Learn More",
    applyNow: "Apply Now",
    planMyTrip: "Plan My Trip",
    startVisaApplication: "Start Visa Application",
    currencyCode: "DZD",
    currencyName: "Algerian Dinar"
  },
  fr: {
    title: "Nos Services",
    subtitle: "Solutions de voyage complètes pour tous vos besoins",
    visaProcessingTab: "Traitement des Visas",
    travelServicesTab: "Services de Voyage",
    visaProcessingTitle: "Services de Traitement des Visas",
    visaProcessingSubtitle: "Services professionnels de visa pour diverses destinations",
    travelServicesTitle: "Services de Voyage",
    travelServicesSubtitle: "Services complets de réservation de voyages pour votre périple",
    description: "Nos experts fournissent des services fiables et efficaces pour tous vos besoins de voyage.",
    schengenVisa: "Visa Schengen",
    schengenDesc: "Voyagez dans 26 pays européens avec un seul visa. Idéal pour le tourisme, les affaires ou les visites familiales en Europe.",
    usaCanadaVisa: "Visa USA & Canada",
    usaCanadaDesc: "Visitez les États-Unis et le Canada pour le tourisme, les réunions d'affaires ou pour rencontrer famille et amis.",
    studentVisa: "Visa Étudiant",
    studentDesc: "Étudiez à l'étranger en Turquie ou en France avec notre service spécialisé de traitement des visas étudiants.",
    flightBooking: "Réservation de Vols",
    flightDesc: "Trouvez les meilleures offres de vols pour votre prochain voyage.",
    hotelBooking: "Réservation d'Hôtels",
    hotelDesc: "Réservez des hébergements confortables et abordables dans le monde entier.",
    travelPackages: "Forfaits Voyage",
    packagesDesc: "Forfaits de voyage complets pour une expérience sans souci.",
    learnMore: "En Savoir Plus",
    applyNow: "Faire une Demande",
    planMyTrip: "Planifier Mon Voyage",
    startVisaApplication: "Commencer la Demande de Visa",
    currencyCode: "DA",
    currencyName: "Dinar Algérien"
  },
  ar: {
    title: "خدماتنا",
    subtitle: "حلول سفر متكاملة لجميع احتياجاتك",
    visaProcessingTab: "معالجة التأشيرات",
    travelServicesTab: "خدمات السفر",
    visaProcessingTitle: "خدمات معالجة التأشيرات",
    visaProcessingSubtitle: "خدمات تأشيرات احترافية لمختلف الوجهات",
    travelServicesTitle: "خدمات السفر",
    travelServicesSubtitle: "خدمات حجز سفر كاملة لرحلتك",
    description: "يقدم خبراؤنا خدمات موثوقة وفعالة لجميع احتياجات سفرك.",
    schengenVisa: "تأشيرة شنغن",
    schengenDesc: "سافر إلى 26 دولة أوروبية بتأشيرة واحدة. مثالية للسياحة والأعمال أو زيارات العائلة في أوروبا.",
    usaCanadaVisa: "تأشيرة الولايات المتحدة وكندا",
    usaCanadaDesc: "زيارة الولايات المتحدة وكندا للسياحة واجتماعات العمل أو لقاء العائلة والأصدقاء.",
    studentVisa: "تأشيرة طالب",
    studentDesc: "ادرس في الخارج في تركيا أو فرنسا مع خدمة معالجة تأشيرات الطلاب المتخصصة لدينا.",
    flightBooking: "حجز الطيران",
    flightDesc: "ابحث عن أفضل عروض الطيران لرحلتك القادمة.",
    hotelBooking: "حجز الفنادق",
    hotelDesc: "احجز أماكن إقامة مريحة وبأسعار معقولة في جميع أنحاء العالم.",
    travelPackages: "باقات السفر",
    packagesDesc: "باقات سفر كاملة لتجربة خالية من المتاعب.",
    learnMore: "معرفة المزيد",
    applyNow: "تقديم طلب",
    planMyTrip: "خطط لرحلتي",
    startVisaApplication: "بدء طلب التأشيرة",
    currencyCode: "د.ج",
    currencyName: "دينار جزائري"
  }
};

export default function ServicesPage() {
  const [language, setLanguage] = useState<string>(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferredLanguage');
      return savedLanguage || 'fr'; // Default to French if nothing is saved
    }
    return 'fr'; // Default for server-side rendering
  });
  const [activeTab, setActiveTab] = useState('visa'); // Default to visa processing tab
  
  const t = translations[language as keyof typeof translations];
  const isRTL = language === 'ar';
  
  // Update page title when language changes
  useEffect(() => {
    const pageTitle = pageTitles[language as keyof typeof pageTitles] || pageTitles.en;
    document.title = pageTitle;
    
    // Set RTL direction for Arabic language
    if (language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.body.classList.add('rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.body.classList.remove('rtl');
    }
    
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header language={language} setLanguage={setLanguage} />
      
      <main className="pt-32">
        <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">{t.subtitle}</p>
          </div>
        </section>
        
        {/* Tabs Navigation */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-4 tabs-container">
              <button
                onClick={() => setActiveTab('visa')}
                className={`px-6 py-3 text-lg font-medium rounded-t-lg transition-all ${
                  activeTab === 'visa'
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t.visaProcessingTab}
              </button>
              <button
                onClick={() => setActiveTab('travel')}
                className={`px-6 py-3 text-lg font-medium rounded-t-lg transition-all ${
                  activeTab === 'travel'
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t.travelServicesTab}
              </button>
            </div>
          </div>
        </section>
        
        {/* Visa Processing Section */}
        {activeTab === 'visa' && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.visaProcessingTitle}</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.visaProcessingSubtitle}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Schengen Visa Card */}
                <div className="enhanced-card group">
                  <div className="card-image">
                    <Image 
                      src={visaServices[0].image} 
                      alt={t.schengenVisa} 
                      fill 
                      className="object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">{t.schengenVisa}</h3>
                      <p className="text-white/80 mb-4 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">{t.schengenDesc}</p>
                      <div className="flex flex-wrap gap-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <Link 
                          href="/demande-visa?type=schengen" 
                          className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                          {t.startVisaApplication}
                        </Link>
                        <Link 
                          href="/services-visa/schengen" 
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                          {t.learnMore}
                        </Link>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-white text-sm">{visaServices[0].rating}</span>
                      </div>
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-white text-sm font-medium">
                          {visaServices[0].price.toLocaleString()} {t.currencyCode}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* USA & Canada Visa Card */}
                <div className="enhanced-card group">
                  <div className="card-image">
                    <Image 
                      src={visaServices[1].image} 
                      alt={t.usaCanadaVisa} 
                      fill 
                      className="object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">{t.usaCanadaVisa}</h3>
                      <p className="text-white/80 mb-4 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">{t.usaCanadaDesc}</p>
                      <div className="flex flex-wrap gap-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <Link 
                          href="/demande-visa?type=usa-canada" 
                          className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                          {t.startVisaApplication}
                        </Link>
                        <Link 
                          href="/services-visa/usa-canada" 
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                          {t.learnMore}
                        </Link>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-white text-sm">{visaServices[1].rating}</span>
                      </div>
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-white text-sm font-medium">
                          {visaServices[1].price.toLocaleString()} {t.currencyCode}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Student Visa Card */}
                <div className="enhanced-card group">
                  <div className="card-image">
                    <Image 
                      src={visaServices[2].image} 
                      alt={t.studentVisa} 
                      fill 
                      className="object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">{t.studentVisa}</h3>
                      <p className="text-white/80 mb-4 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">{t.studentDesc}</p>
                      <div className="flex flex-wrap gap-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <Link 
                          href="/demande-visa?type=student" 
                          className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                          {t.startVisaApplication}
                        </Link>
                        <Link 
                          href="/services-visa/student" 
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                          {t.learnMore}
                        </Link>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-white text-sm">{visaServices[2].rating}</span>
                      </div>
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-white text-sm font-medium">
                          {visaServices[2].price.toLocaleString()} {t.currencyCode}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="mt-16 text-center">
                <div className="glass-effect mx-auto max-w-4xl p-8 rounded-2xl relative overflow-hidden">
                  {/* Background gradient animation */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-50 blur-xl animate-pulse"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">{language === 'en' ? 'Ready to start your visa journey?' : language === 'fr' ? 'Prêt à commencer votre parcours de visa?' : 'هل أنت مستعد لبدء رحلة تأشيرتك؟'}</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">{language === 'en' ? 'Our expert team is ready to assist you through the entire visa application process.' : language === 'fr' ? 'Notre équipe d\'experts est prête à vous accompagner tout au long du processus de demande de visa.' : 'فريقنا من الخبراء جاهز لمساعدتك خلال عملية طلب التأشيرة بأكملها.'}</p>
                    
                    <Link 
                      href="/demande-visa" 
                      className="btn-gradient inline-flex items-center gap-2 group"
                    >
                      {t.startVisaApplication}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Travel Services Section */}
        {activeTab === 'travel' && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.travelServicesTitle}</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.travelServicesSubtitle}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Flight Booking Card */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group service-card">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={travelServices[0].image} 
                      alt={t.flightBooking} 
                      fill 
                      className="object-cover transition-transform duration-700 hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t.flightBooking}</h3>
                    <p className="text-gray-600 mb-4">{t.flightDesc}</p>
                    <div className="flex flex-wrap gap-2">
                      <Link 
                        href="/travel/flights" 
                        className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                      >
                        {t.planMyTrip}
                      </Link>
                      <Link 
                        href="/travel/flights/info" 
                        className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-md text-sm font-medium learn-more"
                      >
                        {t.learnMore}
                        <svg className="w-4 h-4 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Hotel Booking Card */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group service-card">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={travelServices[1].image}
                      alt={t.hotelBooking} 
                      fill 
                      className="object-cover transition-transform duration-700 hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t.hotelBooking}</h3>
                    <p className="text-gray-600 mb-4">{t.hotelDesc}</p>
                    <div className="flex flex-wrap gap-2">
                      <Link 
                        href="/travel/hotels" 
                        className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                      >
                        {t.planMyTrip}
                      </Link>
                      <Link 
                        href="/travel/hotels/info" 
                        className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-md text-sm font-medium learn-more"
                      >
                        {t.learnMore}
                        <svg className="w-4 h-4 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Travel Packages Card */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group service-card">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={travelServices[2].image}
                      alt={t.travelPackages} 
                      fill 
                      className="object-cover transition-transform duration-700 hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t.travelPackages}</h3>
                    <p className="text-gray-600 mb-4">{t.packagesDesc}</p>
                    <div className="flex flex-wrap gap-2">
                      <Link 
                        href="/travel/packages" 
                        className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                      >
                        {t.planMyTrip}
                      </Link>
                      <Link 
                        href="/travel/packages/info" 
                        className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-md text-sm font-medium learn-more"
                      >
                        {t.learnMore}
                        <svg className="w-4 h-4 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="mt-16 text-center">
                <Link 
                  href="/travel" 
                  className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all hover:shadow-xl"
                >
                  {t.planMyTrip}
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer language={language} />
    </div>
  );
} 