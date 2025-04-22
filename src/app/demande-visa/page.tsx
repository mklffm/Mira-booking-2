"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchForm from '@/components/SearchForm';

// Simple translations
const translations = {
  fr: {
    title: "Demande de Visa",
    subtitle: "Remplissez notre formulaire pour demander un visa"
  },
  en: {
    title: "Visa Application",
    subtitle: "Fill out our form to apply for a visa"
  },
  ar: {
    title: "طلب تأشيرة",
    subtitle: "املأ نموذجنا للتقدم بطلب للحصول على تأشيرة"
  }
};

export default function VisaApplicationPage() {
  const [language, setLanguage] = useState('fr');
  const t = translations[language as keyof typeof translations] || translations.fr;
  
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };
  
  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header language={language} setLanguage={handleLanguageChange} />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">{t.title}</h1>
          <p className="text-lg text-center text-gray-600 mb-8">
            {t.subtitle}
          </p>
          
          <div className="max-w-4xl mx-auto">
            <SearchForm language={language} />
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
} 