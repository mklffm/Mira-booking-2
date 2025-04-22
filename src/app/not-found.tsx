"use client";

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Simplified version with no localStorage or document manipulations
export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header language="fr" setLanguage={() => {}} />
      
      <main className="flex flex-col items-center justify-center pt-40 pb-20 px-4">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-4xl font-bold mt-6 mb-4 text-gray-800">Page non trouvée</h2>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <Link 
          href="/" 
          className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-3 rounded-lg shadow-md hover:from-blue-800 hover:to-blue-600 transition-all duration-300 font-medium"
        >
          Retour à l'accueil
        </Link>
      </main>
      
      <Footer language="fr" />
    </div>
  );
} 