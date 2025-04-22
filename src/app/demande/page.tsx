"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DemandeRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to /demande-visa
    router.replace('/demande-visa');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg">Redirecting to visa application page...</p>
    </div>
  );
} 