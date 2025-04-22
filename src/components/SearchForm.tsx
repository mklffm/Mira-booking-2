"use client";

import { useState } from 'react';

// Form translations
const formTranslations = {
  en: {
    title: "Get Your Visa Processing Quote",
    fullName: "Full Name (as in passport)",
    email: "Email Address",
    phone: "Phone Number",
    nationality: "Nationality",
    destination: "Destination Country",
    visaType: "Visa Type",
    tourist: "Tourist",
    business: "Business",
    student: "Student",
    processingTime: "Processing Time",
    standard: "Standard (15 days)",
    expedited: "Expedited (7 days)",
    urgent: "Urgent (3 days)",
    travelDate: "Planned Travel Date",
    passportScan: "Upload Passport Scan",
    dragDrop: "Drag and drop your file here, or click to browse",
    fileRequirements: "PDF, JPG or PNG, max 5MB",
    getQuote: "Get Quote",
    requiredDocuments: "Required Documents",
    emailSubmission: "Submit your documents to:",
    priceTitle: "Your Custom Quote",
    priceDetails: "Visa processing service for",
    processingFee: "Processing fee:",
    totalPrice: "Total Price:",
    applyNow: "Apply Now",
    // B2B related translations
    b2bTitle: "Agency Client Import",
    b2bDescription: "Import visa applications for your clients",
    accountType: "Account Type",
    b2c: "Individual Traveler (B2C)",
    b2b: "Travel Agency (B2B)",
    agencyName: "Agency Name",
    agencyId: "Agency ID",
    bulkUpload: "Bulk Client Upload",
    bulkUploadDescription: "Upload client data in CSV or Excel format",
    bulkTemplateDownload: "Download template",
    bulkRequirements: "CSV, XLSX, max 10MB",
    clientNumber: "Number of Clients",
    importClients: "Import Clients",
    emailInstructions: "For B2B processing, please send your client files to mira.booking.dz@gmail.com",
    priceNote: "All prices are in Algerian Dinars (DZD)",
    sendFilesInstructions: "Please send all required documents to mira.booking.dz@gmail.com",
    fileEmailNote: "Important: Email your documents to complete your application"
  },
  fr: {
    title: "Obtenez Votre Devis de Traitement de Visa",
    fullName: "Nom Complet (comme dans le passeport)",
    email: "Adresse Email",
    phone: "Numéro de Téléphone",
    nationality: "Nationalité",
    destination: "Pays de Destination",
    visaType: "Type de Visa",
    tourist: "Touriste",
    business: "Affaires",
    student: "Étudiant",
    processingTime: "Délai de Traitement",
    standard: "Standard (15 jours)",
    expedited: "Accéléré (7 jours)",
    urgent: "Urgent (3 jours)",
    travelDate: "Date de Voyage Prévue",
    passportScan: "Télécharger Scan du Passeport",
    dragDrop: "Glissez et déposez votre fichier ici, ou cliquez pour parcourir",
    fileRequirements: "PDF, JPG ou PNG, max 5MB",
    getQuote: "Obtenir un Devis",
    requiredDocuments: "Documents Requis",
    emailSubmission: "Soumettez vos documents à:",
    priceTitle: "Votre Devis Personnalisé",
    priceDetails: "Service de traitement de visa pour",
    processingFee: "Frais de traitement:",
    totalPrice: "Prix Total:",
    applyNow: "Faire une Demande",
    // B2B related translations
    b2bTitle: "Importation de Clients d'Agence",
    b2bDescription: "Importez des demandes de visa pour vos clients",
    accountType: "Type de Compte",
    b2c: "Voyageur Individuel (B2C)",
    b2b: "Agence de Voyage (B2B)",
    agencyName: "Nom de l'Agence",
    agencyId: "ID de l'Agence",
    bulkUpload: "Téléchargement en Masse de Clients",
    bulkUploadDescription: "Téléchargez les données client au format CSV ou Excel",
    bulkTemplateDownload: "Télécharger le modèle",
    bulkRequirements: "CSV, XLSX, max 10MB",
    clientNumber: "Nombre de Clients",
    importClients: "Importer les Clients",
    emailInstructions: "Pour le traitement B2B, veuillez envoyer vos fichiers clients à mira.booking.dz@gmail.com",
    priceNote: "Tous les prix sont en Dinars Algériens (DA)",
    sendFilesInstructions: "Veuillez envoyer tous les documents requis à mira.booking.dz@gmail.com",
    fileEmailNote: "Important: Envoyez vos documents par email pour compléter votre demande"
  },
  ar: {
    title: "احصل على عرض سعر لمعالجة التأشيرة",
    fullName: "الاسم الكامل (كما في جواز السفر)",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    nationality: "الجنسية",
    destination: "بلد الوجهة",
    visaType: "نوع التأشيرة",
    tourist: "سياحية",
    business: "أعمال",
    student: "طالب",
    processingTime: "وقت المعالجة",
    standard: "قياسي (15 يوم)",
    expedited: "سريع (7 أيام)",
    urgent: "عاجل (3 أيام)",
    travelDate: "تاريخ السفر المخطط",
    passportScan: "تحميل صورة جواز السفر",
    dragDrop: "اسحب وأفلت الملف هنا، أو انقر للتصفح",
    fileRequirements: "PDF، JPG أو PNG، بحد أقصى 5 ميجابايت",
    getQuote: "الحصول على عرض سعر",
    requiredDocuments: "المستندات المطلوبة",
    emailSubmission: "أرسل مستنداتك إلى:",
    priceTitle: "عرض السعر المخصص لك",
    priceDetails: "خدمة معالجة التأشيرة إلى",
    processingFee: "رسوم المعالجة:",
    totalPrice: "السعر الإجمالي:",
    applyNow: "تقديم الطلب الآن",
    // B2B related translations
    b2bTitle: "استيراد عملاء الوكالة",
    b2bDescription: "استيراد طلبات التأشيرة لعملائك",
    accountType: "نوع الحساب",
    b2c: "مسافر فردي (B2C)",
    b2b: "وكالة سفر (B2B)",
    agencyName: "اسم الوكالة",
    agencyId: "معرف الوكالة",
    bulkUpload: "تحميل العملاء بالجملة",
    bulkUploadDescription: "تحميل بيانات العملاء بتنسيق CSV أو Excel",
    bulkTemplateDownload: "تنزيل القالب",
    bulkRequirements: "CSV، XLSX، بحد أقصى 10 ميجابايت",
    clientNumber: "عدد العملاء",
    importClients: "استيراد العملاء",
    emailInstructions: "للمعالجة التجارية، يرجى إرسال ملفات العملاء إلى mira.booking.dz@gmail.com",
    priceNote: "جميع الأسعار بالدينار الجزائري (د.ج)",
    sendFilesInstructions: "يرجى إرسال جميع المستندات المطلوبة إلى mira.booking.dz@gmail.com",
    fileEmailNote: "هام: أرسل مستنداتك عبر البريد الإلكتروني لإكمال طلبك"
  }
};

// Document requirements by country
const documentRequirements: {[key: string]: string[]} = {
  schengen: [
    "Valid passport with at least 6 months validity",
    "Completed visa application form",
    "Recent passport-sized photos (35mm x 45mm)",
    "Travel insurance with minimum coverage of €30,000",
    "Proof of accommodation",
    "Flight itinerary (round-trip)",
    "Proof of financial means",
    "Employment verification letter",
  ],
  usa: [
    "Valid passport with at least 6 months validity",
    "DS-160 confirmation page",
    "Appointment confirmation letter",
    "Recent passport-sized photo (51mm x 51mm)",
    "Proof of financial means to cover your trip",
    "Evidence of intent to return to your home country",
    "Employment verification letter",
    "Travel itinerary",
  ],
  uk: [
    "Valid passport with at least 6 months validity",
    "Completed UK visa application form",
    "Recent passport-sized photos (35mm x 45mm)",
    "Proof of financial means",
    "Proof of accommodation",
    "Detailed travel itinerary",
    "Employment verification letter",
    "Travel insurance",
  ],
  canada: [
    "Valid passport with at least 6 months validity",
    "Completed visa application form (IMM 5257)",
    "Recent passport-sized photos (35mm x 45mm)",
    "Proof of financial support",
    "Purpose of travel documentation",
    "Travel history documentation",
    "Letter of invitation (if applicable)",
    "Family information form (IMM 5645)",
  ],
  australia: [
    "Valid passport with at least 6 months validity",
    "Completed visa application form",
    "Recent passport-sized photos (35mm x 45mm)",
    "Proof of financial capacity",
    "Travel itinerary",
    "Employment verification letter",
    "Purpose of visit documentation",
    "Health insurance",
  ],
  dubai: [
    "Valid passport with at least 6 months validity",
    "Completed visa application form",
    "Recent passport-sized colored photos",
    "Flight ticket copy",
    "Hotel booking confirmation",
    "Bank statements for the last 3 months",
    "Travel insurance",
    "Employment verification letter",
  ],
};

// Base prices for different visa types
const visaPrices: {[key: string]: {[key: string]: number}} = {
  usa: {
    tourist: 45000,
    business: 55000,
    student: 50000,
  },
  canada: {
    tourist: 42000,
    business: 52000,
    student: 47000,
  },
  france: {
    tourist: 25000,
    business: 35000,
    student: 30000,
  },
  germany: {
    tourist: 25000,
    business: 35000,
    student: 30000,
  },
  spain: {
    tourist: 25000,
    business: 35000,
    student: 30000,
  },
  austria: {
    tourist: 25000,
    business: 35000,
    student: 30000,
  },
  uk: {
    tourist: 38000,
    business: 48000,
    student: 43000,
  },
  turkey: {
    tourist: 20000,
    business: 30000,
    student: 25000,
  },
  qatar: {
    tourist: 32000,
    business: 42000,
    student: 37000,
  },
  saudiarabia: {
    tourist: 35000,
    business: 45000,
    student: 40000,
  },
  uae: {
    tourist: 30000,
    business: 40000,
    student: 35000,
  },
  tunisia: {
    tourist: 18000,
    business: 28000,
    student: 23000,
  },
};

// Country list with their display names
const countries = {
  usa: {
    en: "United States (USA)",
    fr: "États-Unis (USA)",
    ar: "الولايات المتحدة الأمريكية"
  },
  canada: {
    en: "Canada",
    fr: "Canada",
    ar: "كندا"
  },
  france: {
    en: "France",
    fr: "France",
    ar: "فرنسا"
  },
  germany: {
    en: "Germany",
    fr: "Allemagne",
    ar: "ألمانيا"
  },
  spain: {
    en: "Spain",
    fr: "Espagne",
    ar: "إسبانيا"
  },
  austria: {
    en: "Austria",
    fr: "Autriche",
    ar: "النمسا"
  },
  uk: {
    en: "United Kingdom (UK)",
    fr: "Royaume-Uni",
    ar: "المملكة المتحدة"
  },
  turkey: {
    en: "Turkey",
    fr: "Turquie",
    ar: "تركيا"
  },
  qatar: {
    en: "Qatar",
    fr: "Qatar",
    ar: "قطر"
  },
  saudiarabia: {
    en: "Saudi Arabia",
    fr: "Arabie Saoudite",
    ar: "المملكة العربية السعودية"
  },
  uae: {
    en: "United Arab Emirates (UAE)",
    fr: "Émirats Arabes Unis",
    ar: "الإمارات العربية المتحدة"
  },
  tunisia: {
    en: "Tunisia",
    fr: "Tunisie",
    ar: "تونس"
  }
};

const processingTimes: {[key: string]: {[key: string]: number}} = {
  standard: { days: 15, fee: 0 },
  expedited: { days: 7, fee: 5000 },
  urgent: { days: 3, fee: 10000 },
};

interface SearchFormProps {
  language?: string;
}

const SearchForm = ({ language = 'en' }: SearchFormProps) => {
  const t = formTranslations[language as keyof typeof formTranslations] || formTranslations.en;
  const isRTL = language === 'ar';
  
  // Initialize account type state
  const [accountType, setAccountType] = useState<'b2c' | 'b2b'>('b2c');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    destination: '',
    visaType: 'tourist',
    processingTime: 'standard',
    travelDate: '',
    passportScan: null as File | null,
    // B2B fields
    agencyName: '',
    agencyId: '',
    clientNumber: 1,
    bulkClientFile: null as File | null
  });
  
  const [showPrice, setShowPrice] = useState(false);
  const [customPrice, setCustomPrice] = useState(0);
  const [requiredDocuments, setRequiredDocuments] = useState<string[]>([]);
  const [submissionEmail, setSubmissionEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // If destination changes, update required documents
    if (name === 'destination') {
      const destinationKey = value.toLowerCase().replace(/\s+/g, '');
      
      // Find the closest matching destination
      const matchingDestination = Object.keys(documentRequirements).find(key => 
        destinationKey.includes(key) || key.includes(destinationKey)
      );
      
      if (matchingDestination) {
        setRequiredDocuments(documentRequirements[matchingDestination]);
        setSubmissionEmail('mira.booking.dz@gmail.com');
      } else {
        setRequiredDocuments([]);
        setSubmissionEmail('mira.booking.dz@gmail.com');
      }
    }
    
    // Hide price when form changes
    setShowPrice(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fieldName = e.target.name === 'bulk-client-upload' ? 'bulkClientFile' : 'passportScan';
      setFormData({
        ...formData,
        [fieldName]: e.target.files[0],
      });
    }
  };

  // Add code to get the currency code based on language
  const getCurrencyCode = () => {
    if (language === 'en') return 'DZD';
    if (language === 'fr') return 'DA';
    return 'د.ج'; // Arabic
  };

  const calculatePrice = () => {
    if (accountType === 'b2b') {
      // For B2B, calculate based on number of clients
      const basePrice = 15000; // Base price per client in Algerian Dinars
      const clientCount = Number(formData.clientNumber) || 1;
      // Apply a volume discount
      const discount = clientCount > 10 ? 0.15 : clientCount > 5 ? 0.1 : 0;
      const totalPrice = Math.round(basePrice * clientCount * (1 - discount));
      return totalPrice;
    } else {
      // For B2C, use the country-specific pricing
      const destinationKey = formData.destination;
      
      // Default price if no match
      let basePrice = 30000;
      
      // Get price based on destination and visa type
      if (destinationKey && visaPrices[destinationKey] && visaPrices[destinationKey][formData.visaType]) {
        basePrice = visaPrices[destinationKey][formData.visaType];
      }
      
      // Add processing time fee
      const processingFee = processingTimes[formData.processingTime].fee;
      let totalPrice = basePrice + processingFee;
      
      return totalPrice;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const price = calculatePrice();
    setCustomPrice(price);
    setShowPrice(true);
  };

  // Add reset functionality
  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      nationality: '',
      destination: '',
      visaType: 'tourist',
      processingTime: 'standard',
      travelDate: '',
      passportScan: null,
      agencyName: '',
      agencyId: '',
      clientNumber: 1,
      bulkClientFile: null
    });
    setShowPrice(false);
    setRequiredDocuments([]);
  };

  return (
    <div className={`search-form ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Remove debug info */}
      
      {/* Account Type Toggle - Original implementation with gradient design */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
          {t.accountType}
        </label>
        <div className={`account-toggle flex justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <button
            type="button"
            className={`account-toggle-btn ${accountType === 'b2c' ? 'active' : ''} flex items-center justify-center gap-2 px-6 py-3`}
            onClick={() => setAccountType('b2c')}
          >
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{t.b2c}</span>
          </button>
          <button
            type="button"
            className={`account-toggle-btn ${accountType === 'b2b' ? 'active' : ''} flex items-center justify-center gap-2 px-6 py-3`}
            onClick={() => setAccountType('b2b')}
          >
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{t.b2b}</span>
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {accountType === 'b2c' ? t.title : t.b2bTitle}
      </h2>
      {accountType === 'b2b' && (
        <p className="text-gray-600 mb-6">{t.b2bDescription}</p>
      )}
      
      <form onSubmit={handleSubmit} className="w-full">
        {/* Form fields based on account type */}
        {accountType === 'b2c' ? (
          /* B2C Form - Individual Form */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                {t.fullName}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="input"
                value={formData.fullName}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input"
                value={formData.phone}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            
            <div>
              <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">
                {t.nationality}
              </label>
              <select
                id="nationality"
                name="nationality"
                className="input"
                value={formData.nationality}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="">{isRTL ? '-- اختر الجنسية --' : language === 'fr' ? '-- Sélectionner la nationalité --' : '-- Select Nationality --'}</option>
                {Object.entries(countries).map(([key, names]) => (
                  <option key={key} value={key}>
                    {language === 'ar' ? names.ar : language === 'fr' ? names.fr : names.en}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                {t.destination}
              </label>
              <select
                id="destination"
                name="destination"
                className="input"
                value={formData.destination}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="">{isRTL ? '-- اختر البلد --' : language === 'fr' ? '-- Sélectionner un pays --' : '-- Select Country --'}</option>
                {Object.entries(countries).map(([key, names]) => (
                  <option key={key} value={key}>
                    {language === 'ar' ? names.ar : language === 'fr' ? names.fr : names.en}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="visaType" className="block text-sm font-medium text-gray-700 mb-1">
                {t.visaType}
              </label>
              <select
                id="visaType"
                name="visaType"
                className="input"
                value={formData.visaType}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="tourist">{t.tourist}</option>
                <option value="business">{t.business}</option>
                <option value="student">{t.student}</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="processingTime" className="block text-sm font-medium text-gray-700 mb-1">
                {t.processingTime}
              </label>
              <select
                id="processingTime"
                name="processingTime"
                className="input"
                value={formData.processingTime}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="standard">{t.standard}</option>
                <option value="expedited">{t.expedited}</option>
                <option value="urgent">{t.urgent}</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">
                {t.travelDate}
              </label>
              <input
                type="date"
                id="travelDate"
                name="travelDate"
                className="input"
                value={formData.travelDate}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
          </div>
        ) : (
          /* B2B Form - Agency Form */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="agencyName" className="block text-sm font-medium text-gray-700 mb-1">
                {t.agencyName}
              </label>
              <input
                type="text"
                id="agencyName"
                name="agencyName"
                className="input"
                value={formData.agencyName}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            
            <div>
              <label htmlFor="agencyId" className="block text-sm font-medium text-gray-700 mb-1">
                {t.agencyId}
              </label>
              <input
                type="text"
                id="agencyId"
                name="agencyId"
                className="input"
                value={formData.agencyId}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input"
                value={formData.phone}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                {t.destination}
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                className="input"
                value={formData.destination}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            
            <div>
              <label htmlFor="clientNumber" className="block text-sm font-medium text-gray-700 mb-1">
                {t.clientNumber}
              </label>
              <input
                type="number"
                id="clientNumber"
                name="clientNumber"
                min="1"
                max="1000"
                className="input"
                value={formData.clientNumber}
                onChange={handleChange}
                required
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.bulkUpload}
              </label>
              <p className="text-sm text-gray-500 mb-2">{t.bulkUploadDescription}</p>
              
              <div className="file-upload-container">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4h-8"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 16h18l3-3h6a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h3"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  
                  <div className="flex flex-col text-sm text-gray-600 items-center">
                    <label
                      htmlFor="bulk-client-upload"
                      className="file-upload-label"
                    >
                      <span>{t.dragDrop}</span>
                      <input
                        id="bulk-client-upload"
                        name="bulk-client-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                        accept=".csv,.xlsx,.xls"
                      />
                    </label>
                    
                    <p className="mt-2">
                      <a href="#" className="text-primary-600 hover:text-primary-500">
                        {t.bulkTemplateDownload}
                      </a>
                    </p>
                  </div>
                  
                  <p className="text-xs text-gray-500">{t.bulkRequirements}</p>
                  
                  {formData.bulkClientFile && (
                    <p className="file-uploaded-name">{formData.bulkClientFile.name}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Passport Upload Section - Only show for B2C */}
        {accountType === 'b2c' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.passportScan}
            </label>
            <div className="file-upload-container">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4h-8"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 16h18l3-3h6a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h3"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600 justify-center">
                  <label
                    htmlFor="passport-upload"
                    className="file-upload-label"
                  >
                    <span>{t.dragDrop}</span>
                    <input
                      id="passport-upload"
                      name="passport-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">{t.fileRequirements}</p>
                {formData.passportScan && (
                  <p className="file-uploaded-name">{formData.passportScan.name}</p>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className={`flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
          <button
            type="button"
            onClick={resetForm}
            className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg shadow-sm transition-all duration-300"
          >
            {isRTL ? "إعادة تعيين" : language === 'fr' ? "Réinitialiser" : "Reset"}
          </button>
          <button
            type="submit"
            className="btn-gradient"
          >
            {accountType === 'b2c' ? t.getQuote : t.importClients}
          </button>
        </div>
      </form>
      
      {showPrice && (
        <div className="price-quote fade-in">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t.priceTitle}</h3>
          
          <div className="flex flex-col space-y-4">
            <div>
              <p className="text-lg text-gray-700">
                {accountType === 'b2c' ? 
                  `${t.priceDetails} ${formData.destination && countries[formData.destination as keyof typeof countries] 
                    ? countries[formData.destination as keyof typeof countries][language as keyof (typeof countries)[keyof typeof countries]] || formData.destination
                    : formData.destination}` : 
                  `${t.priceDetails} ${formData.clientNumber} ${t.clientNumber.toLowerCase()}`
                }
              </p>

              {accountType === 'b2c' && (
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-blue-50 p-2 rounded">
                    <span className="font-medium">{t.visaType}:</span> {formData.visaType === 'tourist' ? t.tourist : formData.visaType === 'business' ? t.business : t.student}
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <span className="font-medium">{t.processingTime}:</span> {formData.processingTime === 'standard' ? t.standard : formData.processingTime === 'expedited' ? t.expedited : t.urgent}
                  </div>
                </div>
              )}
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-gray-700 flex justify-between">
                  <span>{t.processingFee}:</span> 
                  <span className="font-semibold">{customPrice.toLocaleString()} {getCurrencyCode()}</span>
                </p>
                
                <div className="mt-3 pt-3 border-t border-blue-200">
                  <p className="price-total flex justify-between items-center">
                    <span className="text-lg font-bold">{t.totalPrice}</span> 
                    <span className="price-amount text-xl">{customPrice.toLocaleString()} {getCurrencyCode()}</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Email instructions for ALL clients */}
            <div className="email-instructions bg-blue-50 border border-blue-200">
              <div className={`email-instructions-icon ${isRTL ? 'ml-3 mr-0' : 'mr-3 ml-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-blue-800 mb-1">
                  {t.fileEmailNote}
                </p>
                <p className="text-blue-700">
                  {t.sendFilesInstructions}
                </p>
                <p className="font-bold text-blue-800 mt-2 text-lg">mira.booking.dz@gmail.com</p>
              </div>
            </div>
            
            {/* Add price note */}
            <div className="text-sm text-gray-500 italic text-center mt-2">
              {t.priceNote}
            </div>
            
            <button 
              className="btn-gradient w-full mt-4" 
              onClick={() => window.location.href = "mailto:mira.booking.dz@gmail.com"}
            >
              {t.applyNow}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchForm; 