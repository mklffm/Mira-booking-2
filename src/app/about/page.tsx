'use client';
import { useEffect, useState } from 'react';
import { FaUsers, FaGlobe, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

// Translations for the about page
const translations = {
  en: {
    pageTitle: 'About Us',
    metaDescription: 'Learn about Mira Booking - Your trusted partner for visa processing',
    heroTitle: 'Your Trusted Partner for Global Visa Solutions',
    heroSubtitle: 'Simplifying visa processing since 2018',
    
    section1Title: 'Our Mission',
    section1Text: 'At Mira Booking, we\'re dedicated to making visa processing accessible, transparent, and hassle-free for travelers worldwide. Our mission is to remove barriers to global mobility through technology and expert service.',
    section1Text2: 'We combine cutting-edge technology with expert knowledge to guide you through every step of your visa journey, ensuring a smooth and successful application process.',
    statLabel: 'Successful Applications',
    
    section2Title: 'Our Story',
    section2Text: 'Founded in 2018, Mira Booking emerged from a personal frustration with complex visa processes. What began as a solution for friends and family quickly grew into a trusted service for thousands of travelers across the globe.',
    
    section3Title: 'Why Choose Us',
    advantage1Title: 'Expert Team',
    advantage1Text: 'Our visa specialists have processed over 50,000 applications with a 98% success rate',
    advantage2Title: 'Global Coverage',
    advantage2Text: 'Services available for over 100 countries worldwide with local expertise',
    advantage3Title: 'Transparent Process',
    advantage3Text: 'Clear pricing, no hidden fees, and real-time updates on your application status',
    
    section4Title: 'Our Values',
    value1: 'Integrity',
    value2: 'Excellence',
    value3: 'Innovation',
    value4: 'Customer-First',
    
    teamTitle: 'Meet Our Leadership',
    teamMember1Name: 'Sarah Larsson',
    teamMember1Position: 'CEO & Founder',
    teamMember2Name: 'Michel Dubois',
    teamMember2Position: 'Chief Operations Officer',
    teamMember3Name: 'Amir Hassan',
    teamMember3Position: 'Head of Customer Experience',
    
    ctaTitle: 'Ready to start your journey?',
    ctaButton: 'Apply Now',
    ctaText: 'Join thousands of satisfied travelers who trusted Mira Booking for their visa needs'
  },
  fr: {
    pageTitle: 'À Propos de Nous',
    metaDescription: 'Découvrez Mira Booking - Votre partenaire de confiance pour le traitement des visas',
    heroTitle: 'Votre Partenaire de Confiance pour les Solutions de Visa Mondiales',
    heroSubtitle: 'Simplification du traitement des visas depuis 2018',
    
    section1Title: 'Notre Mission',
    section1Text: 'Chez Mira Booking, nous nous consacrons à rendre le traitement des visas accessible, transparent et sans tracas pour les voyageurs du monde entier. Notre mission est d\'éliminer les obstacles à la mobilité mondiale grâce à la technologie et à un service expert.',
    section1Text2: 'Nous combinons une technologie de pointe avec une expertise professionnelle pour vous guider à chaque étape de votre parcours de visa, garantissant un processus de demande fluide et réussi.',
    statLabel: 'Demandes Réussies',
    
    section2Title: 'Notre Histoire',
    section2Text: 'Fondée en 2018, Mira Booking est née d\'une frustration personnelle face aux processus complexes de visa. Ce qui a commencé comme une solution pour les amis et la famille s\'est rapidement transformé en un service de confiance pour des milliers de voyageurs à travers le monde.',
    
    section3Title: 'Pourquoi Nous Choisir',
    advantage1Title: 'Équipe d\'Experts',
    advantage1Text: 'Nos spécialistes des visas ont traité plus de 50 000 demandes avec un taux de réussite de 98%',
    advantage2Title: 'Couverture Mondiale',
    advantage2Text: 'Services disponibles pour plus de 100 pays dans le monde avec expertise locale',
    advantage3Title: 'Processus Transparent',
    advantage3Text: 'Prix clairs, pas de frais cachés et mises à jour en temps réel sur l\'état de votre demande',
    
    section4Title: 'Nos Valeurs',
    value1: 'Intégrité',
    value2: 'Excellence',
    value3: 'Innovation',
    value4: 'Priorité au Client',
    
    teamTitle: 'Rencontrez Notre Direction',
    teamMember1Name: 'Sarah Larsson',
    teamMember1Position: 'PDG et Fondatrice',
    teamMember2Name: 'Michel Dubois',
    teamMember2Position: 'Directeur des Opérations',
    teamMember3Name: 'Amir Hassan',
    teamMember3Position: 'Responsable de l\'Expérience Client',
    
    ctaTitle: 'Prêt à commencer votre voyage?',
    ctaButton: 'Postuler Maintenant',
    ctaText: 'Rejoignez des milliers de voyageurs satisfaits qui ont fait confiance à Mira Booking pour leurs besoins de visa'
  },
  ar: {
    pageTitle: 'من نحن',
    metaDescription: 'تعرف على ميرا بوكينج - شريكك الموثوق في معالجة التأشيرات',
    heroTitle: 'شريكك الموثوق لحلول التأشيرات العالمية',
    heroSubtitle: 'تبسيط معالجة التأشيرات منذ عام 2018',
    
    section1Title: 'مهمتنا',
    section1Text: 'في ميرا بوكينج، نحن مكرسون لجعل معالجة التأشيرات سهلة وشفافة وخالية من المتاعب للمسافرين في جميع أنحاء العالم. مهمتنا هي إزالة الحواجز أمام التنقل العالمي من خلال التكنولوجيا والخدمة المتخصصة.',
    section1Text2: 'نحن نجمع بين التكنولوجيا المتطورة والخبرة المتخصصة لإرشادك خلال كل خطوة من رحلة التأشيرة الخاصة بك، مما يضمن عملية تطبيق سلسة وناجحة.',
    statLabel: 'طلبات ناجحة',
    
    section2Title: 'قصتنا',
    section2Text: 'تأسست ميرا بوكينج في عام 2018، وظهرت من إحباط شخصي مع عمليات التأشيرة المعقدة. ما بدأ كحل للأصدقاء والعائلة تحول بسرعة إلى خدمة موثوقة لآلاف المسافرين في جميع أنحاء العالم.',
    
    section3Title: 'لماذا تختارنا',
    advantage1Title: 'فريق خبراء',
    advantage1Text: 'قام متخصصونا في التأشيرات بمعالجة أكثر من 50,000 طلب بمعدل نجاح 98%',
    advantage2Title: 'تغطية عالمية',
    advantage2Text: 'خدمات متاحة لأكثر من 100 دولة حول العالم مع خبرة محلية',
    advantage3Title: 'عملية شفافة',
    advantage3Text: 'أسعار واضحة، بدون رسوم خفية، وتحديثات في الوقت الحقيقي حول حالة طلبك',
    
    section4Title: 'قيمنا',
    value1: 'النزاهة',
    value2: 'التميز',
    value3: 'الابتكار',
    value4: 'العميل أولاً',
    
    teamTitle: 'تعرف على قيادتنا',
    teamMember1Name: 'سارة لارسون',
    teamMember1Position: 'الرئيس التنفيذي والمؤسس',
    teamMember2Name: 'ميشيل دوبوا',
    teamMember2Position: 'مدير العمليات',
    teamMember3Name: 'أمير حسن',
    teamMember3Position: 'رئيس تجربة العملاء',
    
    ctaTitle: 'هل أنت مستعد لبدء رحلتك؟',
    ctaButton: 'قدم الآن',
    ctaText: 'انضم إلى آلاف المسافرين الراضين الذين وثقوا بميرا بوكينج لاحتياجات التأشيرة الخاصة بهم'
  }
};

export default function AboutPage() {
  const [language, setLanguage] = useState<string>(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferredLanguage');
      return savedLanguage || 'fr'; // Default to French if nothing is saved
    }
    return 'fr'; // Default for server-side rendering
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isRTL = language === 'ar';
  
  // Get translations based on language with proper type casting
  const t = translations[language as keyof typeof translations] || translations.fr;
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
      setIsSubmitting(false);
      // You would typically show a success message here
    }, 1500);
  };

  // Update document title based on language
  useEffect(() => {
    document.title = t.pageTitle;
    document.documentElement.lang = language;
    
    // Set the direction attribute based on language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t.metaDescription);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = t.metaDescription;
      document.head.appendChild(newMetaDescription);
    }
    
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', language);
  }, [language, isRTL, t]);

  return (
    <main className={`flex min-h-screen flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section - Enhanced with animations */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-600 to-green-400 overflow-hidden">
        {/* Decorative floating elements */}
        <div 
          className="absolute top-20 left-20 h-24 w-24 bg-white/10 rounded-full blur-md animate-float" 
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 h-32 w-32 bg-white/10 rounded-full blur-md animate-float" 
          style={{ animationDelay: '1.2s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 h-16 w-16 bg-white/10 rounded-full blur-md animate-float" 
          style={{ animationDelay: '1.8s' }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.heroTitle}
            </h1>
            <p 
              className="text-xl text-white/80 mb-10 animate-slide-up" 
              style={{ animationDelay: '0.3s' }}
            >
              {t.heroSubtitle}
            </p>
          </div>
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent z-0"></div>
      </section>
      
      {/* Mission Section - With enhanced animations */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 h-32 w-32 bg-blue-100 rounded-full opacity-30 animate-float"></div>
        <div 
          className="absolute -bottom-10 -left-10 h-32 w-32 bg-green-100 rounded-full opacity-30 animate-float" 
          style={{ animationDelay: '1s' }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`grid md:grid-cols-2 gap-12 items-center ${isRTL ? 'md:rtl' : ''}`}>
            <div 
              className="animate-slide-up" 
              style={{ animationDelay: '0.2s' }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {t.section1Title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t.section1Text}
              </p>
              <p className="text-lg text-gray-600">
                {t.section1Text2}
              </p>
            </div>
            
            <div 
              className="relative animate-slide-up" 
              style={{ animationDelay: '0.4s' }}
            >
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl transform transition-all hover:shadow-blue-glow hover:scale-105">
                <Image 
                  src="/images/mission.jpg" 
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-xl p-4 animate-float-shadow">
                <p className="text-sm text-gray-600">{t.statLabel}</p>
                <p className="text-2xl font-bold text-blue-600 animate-pulse-slow">10,000+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Advantages Section - Enhanced with animations */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative background patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 h-40 w-40 border-2 border-blue-400 rounded-full animate-spin-slow"></div>
          <div 
            className="absolute bottom-10 right-10 h-60 w-60 border-2 border-green-400 rounded-full animate-spin-slow" 
            style={{ 
              animationDirection: 'reverse', 
              animationDelay: '2s' 
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-center text-gray-800 animate-fade-in">
            {t.section3Title}
          </h2>
          
          <div className={`grid md:grid-cols-3 gap-8 ${isRTL ? 'md:rtl' : ''} team-stagger`}>
            <div 
              className="bg-white rounded-xl p-8 shadow-sm text-center hover:shadow-md transition-all duration-500 hover:shadow-blue-glow transform hover:-translate-y-1 animate-slide-up" 
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                <FaUsers className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {t.advantage1Title}
              </h3>
              <p className="text-gray-600">
                {t.advantage1Text}
              </p>
            </div>
            
            <div 
              className="bg-white rounded-xl p-8 shadow-sm text-center hover:shadow-md transition-all duration-500 hover:shadow-green-glow transform hover:-translate-y-1 animate-slide-up" 
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                <FaGlobe className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {t.advantage2Title}
              </h3>
              <p className="text-gray-600">
                {t.advantage2Text}
              </p>
            </div>
            
            <div 
              className="bg-white rounded-xl p-8 shadow-sm text-center hover:shadow-md transition-all duration-500 hover:shadow-purple-glow transform hover:-translate-y-1 animate-slide-up" 
              style={{ animationDelay: '0.6s' }}
            >
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                <FaCheckCircle className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {t.advantage3Title}
              </h3>
              <p className="text-gray-600">
                {t.advantage3Text}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section - Enhanced with glass morphism */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-green-400 text-white relative overflow-hidden">
        {/* Animated light beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-0 left-1/4 w-1/2 h-full bg-white/5 rotate-45 transform -translate-x-full animate-slide-right-infinite" 
            style={{ animationDuration: '12s' }}
          ></div>
          <div 
            className="absolute top-0 left-1/4 w-1/3 h-full bg-white/5 rotate-45 transform -translate-x-full animate-slide-right-infinite" 
            style={{ animationDuration: '8s', animationDelay: '1s' }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-center animate-fade-in">
            {t.section4Title}
          </h2>
          
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${isRTL ? 'md:rtl' : ''} values-stagger`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-slide-up">
              <h3 className="text-xl font-bold">{t.value1}</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-slide-up">
              <h3 className="text-xl font-bold">{t.value2}</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-slide-up">
              <h3 className="text-xl font-bold">{t.value3}</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-500 transform hover:scale-105 animate-slide-up">
              <h3 className="text-xl font-bold">{t.value4}</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section - Enhanced with animations */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full opacity-50"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-50 rounded-full opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-center text-gray-800 animate-fade-in">
            {t.teamTitle}
          </h2>
          
          <div className={`grid md:grid-cols-3 gap-8 ${isRTL ? 'md:rtl' : ''} team-stagger`}>
            <div className="text-center animate-slide-up">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-blue-100 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-glow">
                <Image 
                  src="/images/team-1.jpg" 
                  alt={t.teamMember1Name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {t.teamMember1Name}
              </h3>
              <p className="text-gray-600">
                {t.teamMember1Position}
              </p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-green-100 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-green-glow">
                <Image 
                  src="/images/team-2.jpg" 
                  alt={t.teamMember2Name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {t.teamMember2Name}
              </h3>
              <p className="text-gray-600">
                {t.teamMember2Position}
              </p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-purple-100 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-glow">
                <Image 
                  src="/images/team-3.jpg" 
                  alt={t.teamMember3Name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {t.teamMember3Name}
              </h3>
              <p className="text-gray-600">
                {t.teamMember3Position}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section - With animations */}
      <section className="py-16 md:py-24 bg-blue-50 relative overflow-hidden">
        {/* Decorative floating elements */}
        <div className="absolute top-20 left-[5%] w-64 h-64 rounded-full bg-blue-200/20 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-[5%] w-80 h-80 rounded-full bg-green-200/20 blur-3xl animate-float-slow" style={{ animationDuration: '15s', animationDelay: '2s' }}></div>
        
        {/* Animated light beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-100/20 to-transparent transform -translate-y-1/2 animate-slide-right-infinite" style={{ animationDuration: '20s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                {language === 'ar' ? 'تواصل معنا' : (language === 'fr' ? 'Contactez-nous' : 'Contact Us')}
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'ar' ? 'نحن هنا للإجابة على جميع استفساراتك' : (language === 'fr' ? 'Nous sommes là pour répondre à toutes vos questions' : 'We\'re here to answer all your inquiries')}
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-8 relative overflow-hidden transform transition-all duration-500 hover:shadow-blue-glow">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-400/10 opacity-50"></div>
              
              {/* The form */}
              <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 values-stagger">
                  <div className="animate-slide-up">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'ar' ? 'الاسم الأول' : (language === 'fr' ? 'Prénom' : 'First Name')}
                    </label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="input focus:shadow-blue-glow transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      placeholder={language === 'ar' ? 'أدخل اسمك الأول' : (language === 'fr' ? 'Entrez votre prénom' : 'Enter your first name')}
                    />
                  </div>
                  
                  <div className="animate-slide-up">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'ar' ? 'اسم العائلة' : (language === 'fr' ? 'Nom de famille' : 'Last Name')}
                    </label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="input focus:shadow-blue-glow transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      placeholder={language === 'ar' ? 'أدخل اسم العائلة' : (language === 'fr' ? 'Entrez votre nom de famille' : 'Enter your last name')}
                    />
                  </div>
                  
                  <div className="animate-slide-up">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'ar' ? 'البريد الإلكتروني' : (language === 'fr' ? 'Email' : 'Email')}
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input focus:shadow-blue-glow transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : (language === 'fr' ? 'Entrez votre email' : 'Enter your email')}
                    />
                  </div>
                  
                  <div className="animate-slide-up">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'ar' ? 'رقم الهاتف' : (language === 'fr' ? 'Téléphone' : 'Phone')}
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input focus:shadow-blue-glow transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      placeholder={language === 'ar' ? 'أدخل رقم هاتفك' : (language === 'fr' ? 'Entrez votre numéro de téléphone' : 'Enter your phone number')}
                    />
                  </div>
                </div>
                
                <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'ar' ? 'الموضوع' : (language === 'fr' ? 'Sujet' : 'Subject')}
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="select focus:shadow-blue-glow transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <option value="General Inquiry">{language === 'ar' ? 'استفسار عام' : (language === 'fr' ? 'Demande générale' : 'General Inquiry')}</option>
                    <option value="Visa Support">{language === 'ar' ? 'دعم التأشيرة' : (language === 'fr' ? 'Support de visa' : 'Visa Support')}</option>
                    <option value="Business Partnership">{language === 'ar' ? 'شراكة الأعمال' : (language === 'fr' ? 'Partenariat commercial' : 'Business Partnership')}</option>
                    <option value="Technical Support">{language === 'ar' ? 'دعم فني' : (language === 'fr' ? 'Support technique' : 'Technical Support')}</option>
                  </select>
                </div>
                
                <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'ar' ? 'رسالتك' : (language === 'fr' ? 'Votre message' : 'Your Message')}
                  </label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="input focus:shadow-blue-glow transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md resize-none"
                    placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : (language === 'fr' ? 'Écrivez votre message ici...' : 'Write your message here...')}
                  ></textarea>
                </div>
                
                <div className="animate-slide-up" style={{ animationDelay: '1s' }}>
                  <button 
                    type="submit" 
                    className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-green-400 text-white font-medium rounded-lg hover:from-blue-700 hover:to-green-500 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl focus:shadow-blue-glow shadow-md flex items-center justify-center overflow-hidden group"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : null}
                      {language === 'ar' ? 'إرسال الرسالة' : (language === 'fr' ? 'Envoyer le message' : 'Send Message')}
                    </span>
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="h-full w-1/3 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out"></div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with animations and effects */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Pulsing rings animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-blue-300/30 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-green-300/20 rounded-full animate-ping-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {t.ctaTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t.ctaText}
            </p>
            <Link href="/" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-green-400 text-white font-medium rounded-full hover:from-blue-700 hover:to-green-500 transition-all shadow-lg hover:shadow-blue-glow transform hover:-translate-y-1 animate-pulse-slow">
              {t.ctaButton}
              <FaArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 