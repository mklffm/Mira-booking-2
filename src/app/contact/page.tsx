"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Page title translations
const pageTitles = {
  en: "Contact Us - Mira Booking",
  fr: "Contactez-Nous - Mira Booking",
  ar: "اتصل بنا - ميرا بوكينج"
};

// Text translations
const translations = {
  en: {
    pageTitle: "Contact Us",
    subtitle: "We're here to help",
    name: "Name",
    email: "Email",
    phone: "Phone",
    subject: "Subject",
    message: "Message",
    send: "Send",
    address: "Centre Commercial Bab Ezzouar, Algiers, Algeria",
    emailAddress: "mira.booking.dz@gmail.com",
    phoneNumber: "+213 660 885 339 / +213 654 729 019",
    officeHours: "Office Hours: Mon-Fri 9:00 AM - 6:00 PM",
    contactInfo: "Contact Information",
    formTitle: "Send us a message",
    formSubtitle: "We'll respond as soon as possible",
    namePlaceholder: "Enter your full name",
    emailPlaceholder: "Enter your email address",
    phonePlaceholder: "Enter your phone number",
    subjectPlaceholder: "What is your message about?",
    messagePlaceholder: "How can we help you?",
    successMessage: "Your message has been sent. We'll get back to you soon!"
  },
  fr: {
    pageTitle: "Contactez-Nous",
    subtitle: "Nous sommes là pour vous aider",
    name: "Nom",
    email: "Email",
    phone: "Téléphone",
    subject: "Sujet",
    message: "Message",
    send: "Envoyer",
    address: "Centre Commercial Bab Ezzouar, Alger, Algérie",
    emailAddress: "mira.booking.dz@gmail.com",
    phoneNumber: "+213 660 885 339 / +213 654 729 019",
    officeHours: "Heures d'ouverture: Lun-Ven 9:00 - 18:00",
    contactInfo: "Informations de contact",
    formTitle: "Envoyez-nous un message",
    formSubtitle: "Nous vous répondrons dans les plus brefs délais",
    namePlaceholder: "Entrez votre nom complet",
    emailPlaceholder: "Entrez votre adresse email",
    phonePlaceholder: "Entrez votre numéro de téléphone",
    subjectPlaceholder: "Quel est le sujet de votre message?",
    messagePlaceholder: "Comment pouvons-nous vous aider?",
    successMessage: "Votre message a été envoyé. Nous vous répondrons bientôt!"
  },
  ar: {
    pageTitle: "اتصل بنا",
    subtitle: "نحن هنا للمساعدة",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    subject: "الموضوع",
    message: "الرسالة",
    send: "إرسال",
    address: "مركز التسوق باب الزوار، الجزائر العاصمة، الجزائر",
    emailAddress: "mira.booking.dz@gmail.com",
    phoneNumber: "٢١٣٦٦٠٨٨٥٣٣٩+ / ٢١٣٦٥٤٧٢٩٠١٩+",
    officeHours: "ساعات العمل: الاثنين-الجمعة ٩:٠٠ - ١٨:٠٠",
    contactInfo: "معلومات الاتصال",
    formTitle: "أرسل لنا رسالة",
    formSubtitle: "سنرد عليك في أقرب وقت ممكن",
    namePlaceholder: "أدخل اسمك الكامل",
    emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
    phonePlaceholder: "أدخل رقم هاتفك",
    subjectPlaceholder: "ما هو موضوع رسالتك؟",
    messagePlaceholder: "كيف يمكننا مساعدتك؟",
    successMessage: "تم إرسال رسالتك. سنرد عليك قريبًا!"
  }
};

export default function ContactPage() {
  const [language, setLanguage] = useState<string>(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferredLanguage');
      return savedLanguage || 'fr'; // Default to French if nothing is saved
    }
    return 'fr'; // Default for server-side rendering
  });
  const t = translations[language as keyof typeof translations];
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the form data to your backend
    console.log('Form submitted:', formData);
    // Show success message
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header language={language} setLanguage={handleLanguageChange} />
      
      <main className="container mx-auto px-4 sm:px-6 py-16 pt-32 relative">
        {/* Simple background - removed animated elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-blue-200/10 mix-blend-multiply"></div>
          <div className="absolute bottom-20 right-[15%] w-64 h-64 rounded-full bg-blue-100/5 mix-blend-multiply"></div>
        </div>
      
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {t.pageTitle}
          </h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - simplified */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{t.formTitle}</h2>
            <p className="text-gray-600 mb-6">{t.formSubtitle}</p>
            
            {formSubmitted && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-700">
                {t.successMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{t.phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.phonePlaceholder}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">{t.subject}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.subjectPlaceholder}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-blue-800 hover:to-blue-600 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  {t.send}
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 12h15" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
          
          {/* Contact Information - simplified */}
          <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 p-8 rounded-xl text-white shadow-lg relative overflow-hidden">
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-8 relative">
                {t.contactInfo}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-300 rounded"></span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className={`${language === 'ar' ? 'ml-4' : 'mr-4'} bg-white/20 p-3 rounded-full shadow-md`}>
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t.address.split(',')[0]}</p>
                    <p className="opacity-90">{t.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`${language === 'ar' ? 'ml-4' : 'mr-4'} bg-white/20 p-3 rounded-full shadow-md`}>
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t.email}</p>
                    <p className="opacity-90">{t.emailAddress}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`${language === 'ar' ? 'ml-4' : 'mr-4'} bg-white/20 p-3 rounded-full shadow-md`}>
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t.phone}</p>
                    <p className="opacity-90">{t.phoneNumber}</p>
                    <p className="mt-1 text-sm opacity-80">{t.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
} 