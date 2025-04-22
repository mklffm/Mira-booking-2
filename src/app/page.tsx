"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchForm from '@/components/SearchForm';
import DestinationCard from '@/components/DestinationCard';

// Page title translations
const pageTitles = {
  en: "Mira Booking - Hassle-Free Visa Processing",
  fr: "Mira Booking - Traitement de Visa Sans Tracas",
  ar: "ميرا بوكينج - معالجة التأشيرة بدون متاعب"
};

// Sample visa service data
const visaServices = [
  {
    id: 'schengen',
    name: 'Schengen Visa',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1000',
    description: 'Travel to 26 European countries with a single visa. Ideal for tourism, business, or family visits to Europe.',
    price: 25000,
    rating: 4.8,
  },
  {
    id: 'usa-canada',
    name: 'USA & Canada Visa',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000',
    description: 'Visit the United States and Canada for tourism, business meetings, or to meet family and friends.',
    price: 45000,
    rating: 4.7,
  },
  {
    id: 'student',
    name: 'Student Visa',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000',
    description: 'Study abroad in Turkey or France with our specialized student visa processing service.',
    price: 30000,
    rating: 4.9,
  },
];

// Sample service benefits
const serviceBenefits = [
  {
    id: 'expert',
    icon: '👨‍💼',
    title: 'Expert Guidance',
    description: 'Our visa specialists have years of experience with various visa types and country requirements.'
  },
  {
    id: 'fast',
    icon: '⚡',
    title: 'Fast Processing',
    description: 'We expedite your visa application to ensure you get your visa in the shortest time possible.'
  },
  {
    id: 'docs',
    icon: '📄',
    title: 'Document Support',
    description: 'We provide a customized checklist and review all your documents to ensure they meet requirements.'
  },
  {
    id: 'track',
    icon: '🔍',
    title: 'Application Tracking',
    description: 'Track your visa application status in real-time through our online portal.'
  },
];

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: 'Sophie Martin',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    quote: 'The visa application process was so simple with Mira Booking. I got my Schengen visa in just 5 days!',
    rating: 5
  },
  {
    id: 2,
    name: 'Ahmed Hassan',
    location: 'Cairo, Egypt',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    quote: 'I was worried about my UK visa application, but the team made it stress-free and successful.',
    rating: 5
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    location: 'Barcelona, Spain',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150',
    quote: 'Their document checklist service saved me so much time. My USA visa was approved on the first try!',
    rating: 4
  }
];

// Text translations
const translations = {
  en: {
    heroTitle: "Hassle-Free Visa Processing",
    heroSubtitle: "Get your visa processed quickly and efficiently with our expert application service",
    howItWorksTitle: "How Our Visa Processing Works",
    howItWorksSubtitle: "A simple 4-step process to get your visa quickly and efficiently",
    step1Title: "Submit Application",
    step1Text: "Fill out our form and upload your passport scan to get started",
    step2Title: "Document Review",
    step2Text: "Our experts review your documents and provide a customized checklist",
    step3Title: "Submit Application",
    step3Text: "We prepare and submit your application to the embassy or consulate",
    step4Title: "Visa Approval",
    step4Text: "Receive your visa and prepare for your trip with confidence",
    servicesTitle: "Popular Visa Services",
    servicesSubtitle: "We process visa applications for countries worldwide",
    viewAllServices: "View All Visa Services",
    whyChooseTitle: "Why Choose Our Visa Services",
    whyChooseSubtitle: "We make the visa application process simpler and more efficient",
    statsTitle: "Our Success Speaks for Itself",
    statsSubtitle: "We've helped thousands of clients get their visas",
    approvalRate: "Visa Approval Rate",
    applicationsProcessed: "Applications Processed",
    countriesCovered: "Countries Covered",
    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle: "Read testimonials from our satisfied visa applicants",
    ctaTitle: "Ready to Apply for Your Visa?",
    ctaSubtitle: "Get a personalized quote for your visa application today!",
    startApplication: "Start My Application",
    schengenVisa: "Schengen Visa",
    schengenDesc: "Travel to 26 European countries with a single visa. Ideal for tourism, business, or family visits to Europe.",
    usaCanadaVisa: "USA & Canada Visa",
    usaCanadaDesc: "Visit the United States and Canada for tourism, business meetings, or to meet family and friends.",
    studentVisa: "Student Visa",
    studentDesc: "Study abroad in Turkey or France with our specialized student visa processing service.",
    currencyCode: "DZD",
    currencyName: "Algerian Dinar",
  },
  fr: {
    heroTitle: "Traitement de Visa Sans Tracas",
    heroSubtitle: "Obtenez votre visa traité rapidement et efficacement grâce à notre service de demande expert",
    howItWorksTitle: "Comment Fonctionne Notre Traitement de Visa",
    howItWorksSubtitle: "Un processus simple en 4 étapes pour obtenir votre visa rapidement et efficacement",
    step1Title: "Soumettre la Demande",
    step1Text: "Remplissez notre formulaire et téléchargez votre scan de passeport pour commencer",
    step2Title: "Examen des Documents",
    step2Text: "Nos experts examinent vos documents et fournissent une liste personnalisée",
    step3Title: "Dépôt de la Demande",
    step3Text: "Nous préparons et soumettons votre demande à l'ambassade ou au consulat",
    step4Title: "Approbation du Visa",
    step4Text: "Recevez votre visa et préparez votre voyage en toute confiance",
    servicesTitle: "Services de Visa Populaires",
    servicesSubtitle: "Nous traitons les demandes de visa pour des pays du monde entier",
    viewAllServices: "Voir Tous les Services de Visa",
    whyChooseTitle: "Pourquoi Choisir Nos Services de Visa",
    whyChooseSubtitle: "Nous rendons le processus de demande de visa plus simple et plus efficace",
    statsTitle: "Notre Succès Parle de Lui-même",
    statsSubtitle: "Nous avons aidé des milliers de clients à obtenir leur visa",
    approvalRate: "Taux d'Approbation des Visas",
    applicationsProcessed: "Demandes Traitées",
    countriesCovered: "Pays Couverts",
    testimonialsTitle: "Ce Que Disent Nos Clients",
    testimonialsSubtitle: "Lisez les témoignages de nos demandeurs de visa satisfaits",
    ctaTitle: "Prêt à Faire Votre Demande de Visa?",
    ctaSubtitle: "Obtenez un devis personnalisé pour votre demande de visa aujourd'hui!",
    startApplication: "Commencer Ma Demande",
    schengenVisa: "Visa Schengen",
    schengenDesc: "Voyagez dans 26 pays européens avec un seul visa. Idéal pour le tourisme, les affaires ou les visites familiales en Europe.",
    usaCanadaVisa: "Visa USA & Canada",
    usaCanadaDesc: "Visitez les États-Unis et le Canada pour le tourisme, les réunions d'affaires ou pour rencontrer famille et amis.",
    studentVisa: "Visa Étudiant",
    studentDesc: "Étudiez à l'étranger en Turquie ou en France avec notre service spécialisé de traitement des visas étudiants.",
    currencyCode: "DA",
    currencyName: "Dinar Algérien",
  },
  ar: {
    heroTitle: "معالجة التأشيرة بدون متاعب",
    heroSubtitle: "احصل على تأشيرتك بسرعة وكفاءة مع خدمة التقديم المتخصصة لدينا",
    howItWorksTitle: "كيف تعمل خدمة معالجة التأشيرات لدينا",
    howItWorksSubtitle: "عملية بسيطة من 4 خطوات للحصول على تأشيرتك بسرعة وكفاءة",
    step1Title: "تقديم الطلب",
    step1Text: "املأ النموذج وقم بتحميل صورة جواز سفرك للبدء",
    step2Title: "مراجعة المستندات",
    step2Text: "يقوم خبراؤنا بمراجعة مستنداتك وتقديم قائمة مخصصة",
    step3Title: "تقديم الطلب",
    step3Text: "نقوم بإعداد وتقديم طلبك إلى السفارة أو القنصلية",
    step4Title: "الموافقة على التأشيرة",
    step4Text: "استلم تأشيرتك واستعد لرحلتك بثقة",
    servicesTitle: "خدمات التأشيرات الشائعة",
    servicesSubtitle: "نقدم خدمات معالجة طلبات التأشيرة للدول في جميع أنحاء العالم",
    viewAllServices: "عرض جميع خدمات التأشيرة",
    whyChooseTitle: "لماذا تختار خدمات التأشيرة لدينا",
    whyChooseSubtitle: "نجعل عملية طلب التأشيرة أبسط وأكثر كفاءة",
    statsTitle: "نجاحنا يتحدث عن نفسه",
    statsSubtitle: "لقد ساعدنا آلاف العملاء في الحصول على تأشيراتهم",
    approvalRate: "معدل الموافقة على التأشيرات",
    applicationsProcessed: "الطلبات المعالجة",
    countriesCovered: "الدول المشمولة",
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonialsSubtitle: "اقرأ شهادات من مقدمي طلبات التأشيرة الراضين",
    ctaTitle: "هل أنت مستعد لتقديم طلب الحصول على تأشيرتك؟",
    ctaSubtitle: "احصل على عرض سعر مخصص لطلب التأشيرة الخاص بك اليوم!",
    startApplication: "ابدأ طلبي",
    schengenVisa: "تأشيرة شنغن",
    schengenDesc: "سافر إلى 26 دولة أوروبية بتأشيرة واحدة. مثالية للسياحة والأعمال أو زيارات العائلة في أوروبا.",
    usaCanadaVisa: "تأشيرة الولايات المتحدة وكندا",
    usaCanadaDesc: "زيارة الولايات المتحدة وكندا للسياحة واجتماعات العمل أو لقاء العائلة والأصدقاء.",
    studentVisa: "تأشيرة طالب",
    studentDesc: "ادرس في الخارج في تركيا أو فرنسا مع خدمة معالجة تأشيرات الطلاب المتخصصة لدينا.",
    currencyCode: "د.ج",
    currencyName: "دينار جزائري",
  }
};

export default function HomePage() {
  const [language, setLanguage] = useState<string>(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferredLanguage');
      return savedLanguage || 'fr'; // Default to French if nothing is saved
    }
    return 'fr'; // Default for server-side rendering
  });
  
  const t = translations[language as keyof typeof translations];
  
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
  
  // Function to handle language changes from the Header component
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };
  
  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header language={language} setLanguage={handleLanguageChange} />
      
      <main>
        {/* Hero Section - Enhanced with Dynamic Animations */}
        <section className="relative h-[700px] overflow-hidden pt-24">
          {/* Background image with advanced layered effects */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070" 
              alt="Travel background" 
              fill 
              priority
              className="object-cover transform scale-105 animate-slow-zoom"
            />
            {/* Multi-layered gradient overlay with animated opacity */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-700/85 animate-gradient-shift"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-blue-500/20 to-transparent opacity-70 animate-pulse-slow"></div>
            
            {/* Animated particles overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] animate-pulse-slow"></div>
            
            {/* Dynamic floating decorative elements */}
            <div className="absolute -top-20 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-400/10 blur-3xl animate-float-slow" style={{animationDuration: '25s'}}></div>
            <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-blue-400/10 to-blue-500/10 blur-3xl animate-float-slow" style={{animationDuration: '30s', animationDelay: '2s'}}></div>
            <div className="absolute bottom-10 left-[15%] w-64 h-64 rounded-full bg-gradient-to-tr from-blue-600/10 to-blue-300/10 blur-3xl animate-float-slow" style={{animationDuration: '20s', animationDelay: '1s'}}></div>
            
            {/* Additional subtle light beams */}
            <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-blue-400/0 via-blue-400/10 to-blue-400/0 animate-glow-pulse"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-blue-300/0 via-blue-300/10 to-blue-300/0 animate-glow-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
            <div className="max-w-4xl">
              {language === 'ar' ? (
                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in tracking-tight">
                  <span className="block mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 animate-slide-up animate-gradient-x" style={{animationDelay: '0.3s'}}>معالجة التأشيرة</span>
                  <span className="block mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-300 animate-slide-up animate-gradient-x" style={{animationDelay: '0.6s'}}>دون</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white animate-slide-up animate-gradient-x" style={{animationDelay: '0.9s'}}>متاعب</span>
                </h1>
              ) : (
                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-50 to-white animate-slide-up animate-gradient-x" style={{animationDelay: '0.3s'}}>{t.heroTitle}</span>
                </h1>
              )}
              
              <p className="text-blue-50 text-xl md:text-2xl mb-10 max-w-2xl animate-slide-up backdrop-blur-[2px] shadow-text" style={{animationDelay: '0.6s'}}>
                {t.heroSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 animate-slide-up" style={{animationDelay: '0.9s'}}>
                <Link 
                  href="#booking-form" 
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[3px] transition duration-500"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#104c91_0%,#3b82f6_50%,#60a5fa_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500 px-8 py-4 text-lg font-medium text-white backdrop-blur-3xl transition-all duration-700 ease-out-expo group-hover:scale-105">
                    {t.startApplication}
                    <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>

                <Link 
                  href="/services-visa" 
                  className="backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-4 rounded-full transition-all duration-700 ease-out-expo flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 text-lg relative overflow-hidden group hover:scale-105 hover:border-white/30 transform"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1200 ease-out-expo"></span>
                  {language === 'en' ? 'Learn More' : language === 'fr' ? 'En Savoir Plus' : 'معرفة المزيد'}
                  <svg className="w-6 h-6 group-hover:rotate-45 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Enhanced modern wave divider with animation */}
          <div className="absolute -bottom-1 left-0 right-0 overflow-hidden">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] transform scale-x-105">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white opacity-70" style={{ animation: 'wave 15s linear infinite' }}></path>
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white opacity-90 translate-y-[5px]" style={{ animation: 'waveFlip 10s linear infinite' }}></path>
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
            </svg>
          </div>
          
          {/* Subtle animated particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-200 rounded-full animate-float-particle"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-blue-100 rounded-full animate-float-particle" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-float-particle" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-blue-100 rounded-full animate-float-particle" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-2/3 right-1/2 w-1 h-1 bg-blue-200 rounded-full animate-float-particle" style={{animationDelay: '0.5s'}}></div>
          </div>
        </section>
        
        {/* Booking Form Section - Enhanced With Dynamic Animations */}
        <section className="py-20 relative overflow-hidden" id="booking-form">
          {/* Dynamic flowing background elements */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-50 to-white"></div>
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl animate-float" style={{animationDuration: '20s'}}></div>
          <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl animate-float" style={{animationDuration: '18s', animationDelay: '2s'}}></div>
          
          {/* Animated shapes */}
          <div className="absolute top-1/3 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-bounce-gentle"></div>
          <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-blue-500/10 rounded-full animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-blue-300/10 rounded-full animate-bounce-gentle" style={{animationDelay: '0.5s'}}></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16 stagger-animation">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4 shadow-sm animate-fade-in">
                {language === 'en' ? 'VISA APPLICATION' : 
                 language === 'fr' ? 'DEMANDE DE VISA' : 
                 'طلب تأشيرة'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
                <span className="gradient-text">{language === 'en' ? 'Start Your Visa Process' : 
                 language === 'fr' ? 'Commencez Votre Processus de Visa' : 
                 'ابدأ عملية التأشيرة الخاصة بك'}</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
                {language === 'en' ? 'Choose individual application or bulk processing for travel agencies' : 
                 language === 'fr' ? 'Choisissez une demande individuelle ou un traitement en masse pour les agences de voyage' : 
                 'اختر التقديم الفردي أو المعالجة الجماعية لوكالات السفر'}
              </p>
            </div>
            
            {/* Animated form with enhanced styling */}
            <div className="max-w-4xl mx-auto relative z-10 animate-slide-up" style={{animationDelay: '0.6s'}}>
              {/* Decorative gradient glow */}
              <div className="absolute -top-8 -left-8 -right-8 -bottom-8 bg-gradient-to-br from-blue-600/10 to-blue-500/5 rounded-2xl blur-xl animate-pulse-slow"></div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400/20 rounded-full blur-md animate-float-shadow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-md animate-float-shadow" style={{animationDelay: '1s'}}></div>
              
              {/* Main form container */}
              <div className="relative z-10 gradient-border-blue p-1 rounded-xl shadow-2xl transform transition-all duration-500 hover:shadow-blue-glow-lg">
                <div className="blue-glass-effect p-8 rounded-lg">
                  <SearchForm language={language} />
                </div>
              </div>
              
              {/* Pulsing highlight effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/5 rounded-xl blur-3xl animate-pulse-slow -z-10"></div>
            </div>
            
            {/* Enhanced feature badges with animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
              <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-blue-glow transition-all duration-500 transform hover:-translate-y-2 group animate-slide-up" style={{animationDelay: '0.8s'}}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-out-expo"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {language === 'en' ? 'Fast Processing' : 
                     language === 'fr' ? 'Traitement Rapide' : 
                     'معالجة سريعة'}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {language === 'en' ? 'Get your visa in as little as 3 days' : 
                     language === 'fr' ? 'Obtenez votre visa en aussi peu que 3 jours' : 
                     'احصل على تأشيرتك في غضون 3 أيام فقط'}
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-blue-glow transition-all duration-500 transform hover:-translate-y-2 group animate-slide-up" style={{animationDelay: '1s'}}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-out-expo"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {language === 'en' ? 'Secure Process' : 
                     language === 'fr' ? 'Processus Sécurisé' : 
                     'عملية آمنة'}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {language === 'en' ? 'Your data is protected and secure' : 
                     language === 'fr' ? 'Vos données sont protégées et sécurisées' : 
                     'بياناتك محمية وآمنة'}
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-blue-glow transition-all duration-500 transform hover:-translate-y-2 group animate-slide-up" style={{animationDelay: '1.2s'}}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-out-expo"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {language === 'en' ? '24/7 Support' : 
                     language === 'fr' ? 'Support 24/7' : 
                     'دعم على مدار الساعة'}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {language === 'en' ? 'Get help whenever you need it' : 
                     language === 'fr' ? 'Obtenez de l\'aide quand vous en avez besoin' : 
                     'احصل على المساعدة عندما تحتاج إليها'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works - Dynamic Modern Design */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative">
          {/* Dynamic animated background elements */}
          <div className="absolute -top-20 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-40 blur-3xl animate-float" style={{animationDuration: '15s'}}></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl animate-float" style={{animationDuration: '18s', animationDelay: '2s'}}></div>
          
          {/* Moving particles */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce-gentle" style={{animationDuration: '3s'}}></div>
            <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-blue-500 rounded-full animate-bounce-gentle" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-blue-300 rounded-full animate-bounce-gentle" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce-gentle" style={{animationDuration: '3.5s', animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 slide-in-bottom">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4 shadow-sm shine">
                {language === 'en' ? 'SIMPLE PROCESS' : 
                 language === 'fr' ? 'PROCESSUS SIMPLE' : 
                 'عملية بسيطة'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in" style={{animationDelay: '0.3s'}}>{t.howItWorksTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.5s'}}>{t.howItWorksSubtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Animated connecting line with moving gradient for desktop */}
              <div className="hidden md:block absolute top-[100px] left-[180px] right-[180px] h-1 bg-gradient-to-r from-blue-500 to-blue-400 z-0 opacity-70 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent absolute top-0 left-0 animate-shimmer" style={{backgroundSize: '200% 100%'}}></div>
              </div>
              
              {/* Interactive step cards */}
              <div className="enhanced-card p-6 hover:shadow-blue-glow transition-all duration-500 group animate-slide-up" style={{animationDelay: '0.3s'}} data-step="1">
                <div className="relative">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 text-white text-3xl font-bold mb-4 shadow-xl group-hover:shadow-blue-glow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <div className="relative z-10">1</div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-400/0 via-blue-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 blue-animated-underline">{t.step1Title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.step1Text}</p>
                  
                  {/* Animated arrow for mobile */}
                  <div className="block md:hidden mt-4 animate-bounce-gentle">
                    <svg className="w-6 h-6 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="enhanced-card p-6 hover:shadow-blue-glow transition-all duration-500 group animate-slide-up" style={{animationDelay: '0.6s'}} data-step="2">
                <div className="relative">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white text-3xl font-bold mb-4 shadow-xl group-hover:shadow-blue-glow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <div className="relative z-10">2</div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-400/0 via-blue-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 blue-animated-underline">{t.step2Title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.step2Text}</p>
                  
                  {/* Animated arrow for mobile */}
                  <div className="block md:hidden mt-4 animate-bounce-gentle" style={{animationDelay: '0.2s'}}>
                    <svg className="w-6 h-6 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="enhanced-card p-6 hover:shadow-blue-glow transition-all duration-500 group animate-slide-up" style={{animationDelay: '0.9s'}} data-step="3">
                <div className="relative">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white text-3xl font-bold mb-4 shadow-xl group-hover:shadow-blue-glow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <div className="relative z-10">3</div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-400/0 via-blue-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 blue-animated-underline">{t.step3Title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.step3Text}</p>
                  
                  {/* Animated arrow for mobile */}
                  <div className="block md:hidden mt-4 animate-bounce-gentle" style={{animationDelay: '0.4s'}}>
                    <svg className="w-6 h-6 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="enhanced-card p-6 hover:shadow-blue-glow transition-all duration-500 group animate-slide-up" style={{animationDelay: '1.2s'}} data-step="4">
                <div className="relative">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl font-bold mb-4 shadow-xl group-hover:shadow-blue-glow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <div className="relative z-10">4</div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-400/0 via-blue-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-slow"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 blue-animated-underline">{t.step4Title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t.step4Text}</p>
                </div>
              </div>
            </div>
            
            {/* Call to action button */}
            <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '1.5s'}}>
              <Link
                href="#booking-form"
                className="btn-gradient px-8 py-3 rounded-full inline-flex items-center justify-center gap-2 group"
              >
                {language === 'en' ? 'Start Your Application Now' : 
                 language === 'fr' ? 'Commencez Votre Demande Maintenant' : 
                 'ابدأ طلبك الآن'}
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Popular Visa Services - Enhanced Blue Gradient */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Enhanced decorative elements */}
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 slide-in-bottom">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4 shadow-sm">
                {language === 'en' ? 'POPULAR CHOICES' : 
                 language === 'fr' ? 'CHOIX POPULAIRES' : 
                 'الخيارات الشائعة'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{t.servicesTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.servicesSubtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
              {visaServices.map((service, index) => (
                <div 
                  key={service.id} 
                  className="enhanced-card service-card overflow-hidden transition-all duration-500 hover:shadow-blue-glow group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.id === 'schengen' ? t.schengenVisa : 
                           service.id === 'usa-canada' ? t.usaCanadaVisa : t.studentVisa} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 bg-blue-gradient rounded-full text-white text-sm font-medium shadow-md">
                        {service.price.toLocaleString()} {t.currencyCode}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 shadow-md">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-white text-sm">{service.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 blue-animated-underline inline-block">
                      {service.id === 'schengen' ? t.schengenVisa : 
                       service.id === 'usa-canada' ? t.usaCanadaVisa : t.studentVisa}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.id === 'schengen' ? t.schengenDesc : 
                       service.id === 'usa-canada' ? t.usaCanadaDesc : t.studentDesc}
                    </p>
                    <Link href={`/services/${service.id}`} className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center learn-more group">
                      <span className="blue-animated-underline">
                        {language === 'en' ? 'Learn More' : 
                        language === 'fr' ? 'En Savoir Plus' : 
                        'معرفة المزيد'}
                      </span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/services" 
                className="btn-gradient"
              >
                {t.viewAllServices}
                <svg className="w-4 h-4 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Service Features - Enhanced Blue Design */}
        <section className="py-20 bg-blue-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 slide-in-bottom">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4 shadow-sm">
                {language === 'en' ? 'WHY CHOOSE US' : 
                 language === 'fr' ? 'POURQUOI NOUS CHOISIR' : 
                 'لماذا تختارنا'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">{t.whyChooseTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.whyChooseSubtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-animation">
              {serviceBenefits.map((benefit, index) => (
                <div 
                  key={benefit.id} 
                  className="blue-glass-effect p-6 rounded-xl shadow-lg flex items-start transform transition-all duration-300 hover:shadow-blue-glow hover:scale-[1.02] border border-blue-200/30"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-gradient h-16 w-16 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 blue-animated-underline inline-block">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Success Rate Stats - Enhanced Interactive Design */}
        <section className="py-20 bg-blue-gradient text-white relative overflow-hidden">
          {/* Dynamic moving background effects */}
          <div className="absolute inset-0 bg-[url('/images/world-map-dots.svg')] opacity-20 animate-pulse-slow"></div>
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl animate-float" style={{animationDuration: '20s'}}></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-float" style={{animationDuration: '15s', animationDelay: '2s'}}></div>
          
          {/* Moving highlight accent lines */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full animate-slide-right" style={{animationDuration: '3s', animationIterationCount: 'infinite'}}></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full animate-slide-right" style={{animationDuration: '3s', animationDelay: '1.5s', animationIterationCount: 'infinite'}}></div>
          </div>
          
          {/* Moving particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 h-2 w-2 bg-white/30 rounded-full animate-float" style={{animationDuration: '6s'}}></div>
            <div className="absolute top-3/4 left-1/2 h-3 w-3 bg-white/30 rounded-full animate-float" style={{animationDuration: '8s', animationDelay: '1s'}}></div>
            <div className="absolute top-2/4 right-1/4 h-2 w-2 bg-white/30 rounded-full animate-float" style={{animationDuration: '7s', animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/4 right-1/3 h-3 w-3 bg-white/30 rounded-full animate-float" style={{animationDuration: '9s', animationDelay: '3s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 stagger-animation">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4 backdrop-blur-sm shadow-sm animate-fade-in">
                {language === 'en' ? 'PROVEN SUCCESS' : 
                 language === 'fr' ? 'SUCCÈS PROUVÉ' : 
                 'نجاح مثبت'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-lg animate-slide-up" style={{animationDelay: '0.2s'}}>{t.statsTitle}</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>{t.statsSubtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center stagger-animation">
              <div className="glass-effect p-8 rounded-xl border border-white/20 transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-blue-glow-lg group animate-slide-up" style={{animationDelay: '0.6s'}}>
                <div className="relative mb-4">
                  {/* Circular progress bar animation - removed the spinning border that causes the stick effect */}
                  <div className="w-32 h-32 mx-auto rounded-full border-8 border-blue-400/30 flex items-center justify-center"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl md:text-6xl font-bold text-shadow-lg group-hover:scale-110 transition-transform duration-500">98%</div>
                  </div>
                </div>
                <p className="text-xl group-hover:text-blue-200 transition-colors duration-300">{t.approvalRate}</p>
              </div>
              
              <div className="glass-effect p-8 rounded-xl border border-white/20 transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-blue-glow-lg group animate-slide-up" style={{animationDelay: '0.8s'}}>
                <div className="relative">
                  <div className="text-5xl md:text-6xl font-bold mb-2 text-shadow-lg">
                    <div className="inline-block animate-count-up" data-count-start="0" data-count-end="5000" data-count-duration="2">5,000+</div>
                  </div>
                  {/* Animated underline */}
                  <div className="h-1 w-16 bg-white/50 mx-auto mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                  </div>
                </div>
                <p className="text-xl group-hover:text-blue-200 transition-colors duration-300">{t.applicationsProcessed}</p>
              </div>
              
              <div className="glass-effect p-8 rounded-xl border border-white/20 transform transition-all duration-500 hover:translate-y-[-10px] hover:shadow-blue-glow-lg group animate-slide-up" style={{animationDelay: '1s'}}>
                <div className="relative">
                  <div className="text-5xl md:text-6xl font-bold mb-2 text-shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <div className="inline-block animate-count-up" data-count-start="0" data-count-end="50" data-count-duration="1.5">50+</div>
                  </div>
                  {/* Animated world map icon */}
                  <div className="w-16 h-16 mx-auto mb-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-full h-full animate-pulse-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-xl group-hover:text-blue-200 transition-colors duration-300">{t.countriesCovered}</p>
              </div>
            </div>
            
            {/* Additional success metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 stagger-animation">
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transform transition-all duration-300 hover:bg-white/20 text-center animate-slide-up" style={{animationDelay: '1.2s'}}>
                <p className="text-2xl font-bold mb-1">24/7</p>
                <p className="text-sm opacity-80">{language === 'en' ? 'Customer Support' : language === 'fr' ? 'Support Client' : 'دعم العملاء'}</p>
              </div>
              
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transform transition-all duration-300 hover:bg-white/20 text-center animate-slide-up" style={{animationDelay: '1.3s'}}>
                <p className="text-2xl font-bold mb-1">15+</p>
                <p className="text-sm opacity-80">{language === 'en' ? 'Years Experience' : language === 'fr' ? 'Années d\'Expérience' : 'سنوات الخبرة'}</p>
              </div>
              
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transform transition-all duration-300 hover:bg-white/20 text-center animate-slide-up" style={{animationDelay: '1.4s'}}>
                <p className="text-2xl font-bold mb-1">12+</p>
                <p className="text-sm opacity-80">{language === 'en' ? 'Industry Awards' : language === 'fr' ? 'Prix du Secteur' : 'جوائز الصناعة'}</p>
              </div>
              
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transform transition-all duration-300 hover:bg-white/20 text-center animate-slide-up" style={{animationDelay: '1.5s'}}>
                <p className="text-2xl font-bold mb-1">100%</p>
                <p className="text-sm opacity-80">{language === 'en' ? 'Satisfaction Guarantee' : language === 'fr' ? 'Garantie de Satisfaction' : 'ضمان الرضا'}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials - Enhanced Blue Design */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 slide-in-bottom">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4 shadow-sm">
                {language === 'en' ? 'TESTIMONIALS' : 
                 language === 'fr' ? 'TÉMOIGNAGES' : 
                 'الشهادات'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">{t.testimonialsTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.testimonialsSubtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="blue-glass-effect p-8 rounded-xl shadow-lg relative group hover:shadow-blue-glow transition-all duration-500 border border-blue-200/30"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-blue-gradient transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
                  <div className="flex items-center mb-6">
                    <div className="h-16 w-16 rounded-full overflow-hidden mr-4 ring-4 ring-blue-100 shadow-md">
                      <Image src={testimonial.image} alt={testimonial.name} width={64} height={64} className="object-cover h-full w-full" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <svg className="h-8 w-8 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 mb-6 italic">"{ testimonial.quote }"</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section - Dynamic Modern Design */}
        <section className="py-20 bg-blue-gradient text-white relative overflow-hidden">
          {/* Dynamic background elements */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          
          {/* Animated particles background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-pulse-slow"></div>
          
          {/* Floating gradient orbs */}
          <div className="absolute top-10 right-10 w-60 h-60 rounded-full bg-blue-400/10 blur-3xl animate-float" style={{animationDuration: '15s'}}></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-blue-300/15 blur-3xl animate-float" style={{animationDuration: '12s', animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-blue-200/10 blur-xl animate-float" style={{animationDuration: '20s', animationDelay: '1s'}}></div>
          
          {/* Light beams */}
          <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-white/0 via-white/10 to-white/0 animate-pulse-slow"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-white/0 via-white/10 to-white/0 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          
          {/* Animated accent lines */}
          <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
            <div className="absolute -inset-[10px] border border-white/5 rounded-xl animate-pulse" style={{animationDuration: '3s'}}></div>
            <div className="absolute -inset-[30px] border border-white/5 rounded-xl animate-pulse" style={{animationDuration: '4s'}}></div>
            <div className="absolute -inset-[50px] border border-white/5 rounded-xl animate-pulse" style={{animationDuration: '5s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8 inline-block">
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute -inset-10 rounded-full border border-white/10 animate-pulse-slow"></div>
                  <div className="absolute -inset-6 rounded-full border border-white/20 animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
                  <div className="relative bg-white/20 backdrop-blur-md px-6 py-2 rounded-full animate-fade-in">
                    <span className="font-medium tracking-wide">{language === 'en' ? 'START NOW' : language === 'fr' ? 'COMMENCEZ MAINTENANT' : 'ابدأ الآن'}</span>
                  </div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-lg animate-slide-up">{t.ctaTitle}</h2>
              <p className="text-xl mb-10 text-blue-100 animate-slide-up" style={{animationDelay: '0.3s'}}>{t.ctaSubtitle}</p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
                <Link 
                  href="#booking-form" 
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[3px] transition duration-300"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#60a5fa_50%,#3b82f6_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-bold text-blue-600 backdrop-blur-3xl transition-all duration-300 group-hover:bg-opacity-90 group-hover:scale-105">
                    {t.startApplication}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
                
                <Link
                  href="/services"
                  className="px-10 py-4 rounded-full bg-transparent border border-white/30 text-white text-lg font-medium inline-flex items-center justify-center hover:bg-white/10 transition-all duration-300 group hover:border-white/50 backdrop-blur-sm hover:scale-105 transform"
                >
                  {language === 'en' ? 'Explore Services' : language === 'fr' ? 'Explorer les Services' : 'استكشاف الخدمات'}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              {/* Trust badges */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{animationDelay: '0.9s'}}>
                <div className="flex flex-col items-center trust-badge">
                  <svg className="w-12 h-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-sm">{language === 'en' ? 'Secure Process' : language === 'fr' ? 'Processus Sécurisé' : 'عملية آمنة'}</p>
                </div>
                
                <div className="flex flex-col items-center trust-badge">
                  <svg className="w-12 h-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm">{language === 'en' ? 'Fast Processing' : language === 'fr' ? 'Traitement Rapide' : 'معالجة سريعة'}</p>
                </div>
                
                <div className="flex flex-col items-center trust-badge">
                  <svg className="w-12 h-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-sm">{language === 'en' ? '24/7 Support' : language === 'fr' ? 'Support 24/7' : 'دعم على مدار الساعة'}</p>
                </div>
                
                <div className="flex flex-col items-center trust-badge">
                  <svg className="w-12 h-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  <p className="text-sm">{language === 'en' ? 'Satisfaction Guaranteed' : language === 'fr' ? 'Satisfaction Garantie' : 'ضمان الرضا'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer language={language} />
      </main>
    </div>
  );
} 