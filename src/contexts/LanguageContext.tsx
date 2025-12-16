import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Language = 'ar' | 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('museum-language');
    if (saved && ['ar', 'fr', 'en'].includes(saved)) {
      return saved as Language;
    }
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('ar')) return 'ar';
    if (browserLang.startsWith('fr')) return 'fr';
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('museum-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const translations = getTranslations(language);
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translation data
const getTranslations = (lang: Language): Record<string, string> => {
  const translations: Record<Language, Record<string, string>> = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.blog': 'Articles',
      'nav.prehistoric': 'Prehistoric Collections',
      'nav.ethnographic': 'Ethnographic Exhibits',
      'nav.exhibitions': 'Special Exhibitions',
      'nav.contact': 'Contact',
      
      // Home Page
      'home.hero.title': 'Bardo National Museum',
      'home.hero.subtitle': 'Discover Algeria\'s Rich Prehistoric and Ethnographic Heritage',
      'home.mission.title': 'Our Mission',
      'home.mission.text': 'The Bardo National Museum of Prehistory and Ethnography preserves and showcases Algeria\'s cultural heritage, from prehistoric artifacts to traditional ethnographic collections.',
      'home.quickLinks.title': 'Explore Our Collections',
      'home.hours.title': 'Visit Us',
      'home.hours.schedule': 'Open Saturday to Thursday, 9:00 AM - 5:00 PM',
      'home.hours.address': '3 Rue Franklin Roosevelt, Algiers, Algeria',
      
      // About Page
      'about.title': 'About the Museum',
      'about.history.title': 'History',
      'about.history.text': 'The Bardo National Museum was established in 1930 and is located in a beautiful 18th-century Ottoman villa. It houses one of the most important collections of prehistoric and ethnographic artifacts in North Africa.',
      'about.mission.title': 'Mission & Purpose',
      'about.mission.text': 'Our mission is to preserve, study, and present Algeria\'s rich cultural heritage, from the earliest human settlements to traditional crafts and customs.',
      'about.collections.title': 'Major Collections',
      'about.collections.text': 'The museum features extensive prehistoric tools, pottery, jewelry, traditional clothing, musical instruments, and ritual objects from various Algerian regions.',
      
      // Blog Page
      'blog.title': 'Articles & Research',
      'blog.readMore': 'Read More',
      
      // Prehistoric Collections
      'prehistoric.title': 'Prehistoric Collections',
      'prehistoric.intro': 'Explore artifacts from Algeria\'s prehistoric periods, including stone tools, pottery, and ancient jewelry.',
      'prehistoric.paleolithic.title': 'Paleolithic Era',
      'prehistoric.paleolithic.desc': 'Stone tools and artifacts from the earliest human settlements in North Africa.',
      'prehistoric.neolithic.title': 'Neolithic Era',
      'prehistoric.neolithic.desc': 'Pottery, polished stone tools, and evidence of early agriculture.',
      'prehistoric.bronze.title': 'Bronze Age',
      'prehistoric.bronze.desc': 'Metal tools, weapons, and decorative objects.',
      
      // Ethnographic Exhibits
      'ethnographic.title': 'Ethnographic Exhibits',
      'ethnographic.intro': 'Discover traditional Algerian culture through clothing, tools, and ritual objects.',
      'ethnographic.clothing.title': 'Traditional Clothing',
      'ethnographic.clothing.desc': 'Elaborate costumes and textiles from different Algerian regions.',
      'ethnographic.tools.title': 'Traditional Tools',
      'ethnographic.tools.desc': 'Agricultural and craft tools used in daily life.',
      'ethnographic.ritual.title': 'Ritual Objects',
      'ethnographic.ritual.desc': 'Religious and ceremonial artifacts.',
      
      // Special Exhibitions
      'exhibitions.title': 'Special Exhibitions',
      'exhibitions.current': 'Current Exhibition',
      'exhibitions.upcoming': 'Upcoming Exhibitions',
      'exhibitions.past': 'Past Exhibitions',
      
      // Contact Page
      'contact.title': 'Contact Us',
      'contact.form.title': 'Send us a message',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.subject': 'Subject',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Send Message',
      'contact.form.success': 'Thank you! Your message has been sent successfully.',
      'contact.form.error': 'Sorry, there was an error sending your message. Please try again.',
      'contact.info.title': 'Museum Information',
      'contact.info.address': 'Address',
      'contact.info.phone': 'Phone',
      'contact.info.email': 'Email',
      'contact.info.hours': 'Opening Hours',
      
      // AI Assistant
      'ai.title': 'Ask Museum Guide',
      'ai.placeholder': 'Ask about the museum, collections, or visiting information...',
      'ai.send': 'Send',
      'ai.thinking': 'Thinking...',
      'ai.welcome': 'Hello! I\'m your museum guide. Ask me anything about the Bardo Museum, our collections, or visiting information.',
      
      // Footer
      'footer.about': 'About',
      'footer.visit': 'Visit',
      'footer.follow': 'Follow Us',
      'footer.copyright': '© 2025 Bardo National Museum. All rights reserved.',
      
      // Common
      'common.learnMore': 'Learn More',
      'common.close': 'Close',
      'common.loading': 'Loading...',
    },
    fr: {
      // Navigation
      'nav.home': 'Accueil',
      'nav.about': 'À Propos',
      'nav.blog': 'Articles',
      'nav.prehistoric': 'Collections Préhistoriques',
      'nav.ethnographic': 'Expositions Ethnographiques',
      'nav.exhibitions': 'Expositions Spéciales',
      'nav.contact': 'Contact',
      
      // Home Page
      'home.hero.title': 'Musée National du Bardo',
      'home.hero.subtitle': 'Découvrez le Riche Patrimoine Préhistorique et Ethnographique de l\'Algérie',
      'home.mission.title': 'Notre Mission',
      'home.mission.text': 'Le Musée National du Bardo de Préhistoire et d\'Ethnographie préserve et présente le patrimoine culturel algérien, des artefacts préhistoriques aux collections ethnographiques traditionnelles.',
      'home.quickLinks.title': 'Explorez Nos Collections',
      'home.hours.title': 'Visitez-Nous',
      'home.hours.schedule': 'Ouvert du samedi au jeudi, 9h00 - 17h00',
      'home.hours.address': '3 Rue Franklin Roosevelt, Alger, Algérie',
      
      // About Page
      'about.title': 'À Propos du Musée',
      'about.history.title': 'Histoire',
      'about.history.text': 'Le Musée National du Bardo a été créé en 1930 et est situé dans une belle villa ottomane du XVIIIe siècle. Il abrite l\'une des plus importantes collections d\'artefacts préhistoriques et ethnographiques d\'Afrique du Nord.',
      'about.mission.title': 'Mission et Objectif',
      'about.mission.text': 'Notre mission est de préserver, étudier et présenter le riche patrimoine culturel de l\'Algérie, des premiers établissements humains aux métiers et coutumes traditionnels.',
      'about.collections.title': 'Collections Principales',
      'about.collections.text': 'Le musée présente des outils préhistoriques, de la poterie, des bijoux, des vêtements traditionnels, des instruments de musique et des objets rituels de diverses régions algériennes.',
      
      // Blog Page
      'blog.title': 'Articles et Recherches',
      'blog.readMore': 'Lire Plus',
      
      // Prehistoric Collections
      'prehistoric.title': 'Collections Préhistoriques',
      'prehistoric.intro': 'Explorez les artefacts des périodes préhistoriques de l\'Algérie, y compris les outils en pierre, la poterie et les bijoux anciens.',
      'prehistoric.paleolithic.title': 'Ère Paléolithique',
      'prehistoric.paleolithic.desc': 'Outils en pierre et artefacts des premiers établissements humains en Afrique du Nord.',
      'prehistoric.neolithic.title': 'Ère Néolithique',
      'prehistoric.neolithic.desc': 'Poterie, outils en pierre polie et preuves de l\'agriculture précoce.',
      'prehistoric.bronze.title': 'Âge du Bronze',
      'prehistoric.bronze.desc': 'Outils métalliques, armes et objets décoratifs.',
      
      // Ethnographic Exhibits
      'ethnographic.title': 'Expositions Ethnographiques',
      'ethnographic.intro': 'Découvrez la culture algérienne traditionnelle à travers les vêtements, les outils et les objets rituels.',
      'ethnographic.clothing.title': 'Vêtements Traditionnels',
      'ethnographic.clothing.desc': 'Costumes élaborés et textiles de différentes régions algériennes.',
      'ethnographic.tools.title': 'Outils Traditionnels',
      'ethnographic.tools.desc': 'Outils agricoles et artisanaux utilisés dans la vie quotidienne.',
      'ethnographic.ritual.title': 'Objets Rituels',
      'ethnographic.ritual.desc': 'Artefacts religieux et cérémoniels.',
      
      // Special Exhibitions
      'exhibitions.title': 'Expositions Spéciales',
      'exhibitions.current': 'Exposition Actuelle',
      'exhibitions.upcoming': 'Expositions à Venir',
      'exhibitions.past': 'Expositions Passées',
      
      // Contact Page
      'contact.title': 'Contactez-Nous',
      'contact.form.title': 'Envoyez-nous un message',
      'contact.form.name': 'Nom',
      'contact.form.email': 'Email',
      'contact.form.subject': 'Sujet',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Envoyer le Message',
      'contact.form.success': 'Merci ! Votre message a été envoyé avec succès.',
      'contact.form.error': 'Désolé, une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.',
      'contact.info.title': 'Informations du Musée',
      'contact.info.address': 'Adresse',
      'contact.info.phone': 'Téléphone',
      'contact.info.email': 'Email',
      'contact.info.hours': 'Heures d\'Ouverture',
      
      // AI Assistant
      'ai.title': 'Demandez au Guide du Musée',
      'ai.placeholder': 'Posez des questions sur le musée, les collections ou les informations de visite...',
      'ai.send': 'Envoyer',
      'ai.thinking': 'Réflexion...',
      'ai.welcome': 'Bonjour ! Je suis votre guide du musée. Posez-moi des questions sur le Musée du Bardo, nos collections ou les informations de visite.',
      
      // Footer
      'footer.about': 'À Propos',
      'footer.visit': 'Visiter',
      'footer.follow': 'Suivez-Nous',
      'footer.copyright': '© 2025 Musée National du Bardo. Tous droits réservés.',
      
      // Common
      'common.learnMore': 'En Savoir Plus',
      'common.close': 'Fermer',
      'common.loading': 'Chargement...',
    },
    ar: {
      // Navigation
      'nav.home': 'الرئيسية',
      'nav.about': 'عن المتحف',
      'nav.blog': 'المقالات',
      'nav.prehistoric': 'المجموعات ما قبل التاريخ',
      'nav.ethnographic': 'المعروضات الإثنوغرافية',
      'nav.exhibitions': 'المعارض الخاصة',
      'nav.contact': 'اتصل بنا',
      
      // Home Page
      'home.hero.title': 'المتحف الوطني باردو',
      'home.hero.subtitle': 'اكتشف التراث الجزائري الغني من عصور ما قبل التاريخ والإثنوغرافيا',
      'home.mission.title': 'مهمتنا',
      'home.mission.text': 'يحافظ المتحف الوطني باردو لعصور ما قبل التاريخ والإثنوغرافيا على التراث الثقافي الجزائري ويعرضه، من القطع الأثرية لعصور ما قبل التاريخ إلى المجموعات الإثنوغرافية التقليدية.',
      'home.quickLinks.title': 'استكشف مجموعاتنا',
      'home.hours.title': 'قم بزيارتنا',
      'home.hours.schedule': 'مفتوح من السبت إلى الخميس، 9:00 صباحًا - 5:00 مساءً',
      'home.hours.address': '3 شارع فرانكلين روزفلت، الجزائر العاصمة، الجزائر',
      
      // About Page
      'about.title': 'عن المتحف',
      'about.history.title': 'التاريخ',
      'about.history.text': 'تأسس المتحف الوطني باردو عام 1930 ويقع في فيلا عثمانية جميلة من القرن الثامن عشر. يضم واحدة من أهم مجموعات القطع الأثرية لعصور ما قبل التاريخ والإثنوغرافية في شمال أفريقيا.',
      'about.mission.title': 'المهمة والغرض',
      'about.mission.text': 'مهمتنا هي الحفاظ على التراث الثقافي الجزائري الغني ودراسته وتقديمه، من أقدم المستوطنات البشرية إلى الحرف والعادات التقليدية.',
      'about.collections.title': 'المجموعات الرئيسية',
      'about.collections.text': 'يعرض المتحف أدوات ما قبل التاريخ الواسعة، والفخار، والمجوهرات، والملابس التقليدية، والآلات الموسيقية، والأشياء الطقسية من مختلف المناطق الجزائرية.',
      
      // Blog Page
      'blog.title': 'المقالات والأبحاث',
      'blog.readMore': 'اقرأ المزيد',
      
      // Prehistoric Collections
      'prehistoric.title': 'مجموعات ما قبل التاريخ',
      'prehistoric.intro': 'استكشف القطع الأثرية من فترات ما قبل التاريخ في الجزائر، بما في ذلك الأدوات الحجرية والفخار والمجوهرات القديمة.',
      'prehistoric.paleolithic.title': 'العصر الحجري القديم',
      'prehistoric.paleolithic.desc': 'الأدوات الحجرية والقطع الأثرية من أقدم المستوطنات البشرية في شمال أفريقيا.',
      'prehistoric.neolithic.title': 'العصر الحجري الحديث',
      'prehistoric.neolithic.desc': 'الفخار والأدوات الحجرية المصقولة وأدلة على الزراعة المبكرة.',
      'prehistoric.bronze.title': 'العصر البرونزي',
      'prehistoric.bronze.desc': 'الأدوات المعدنية والأسلحة والأشياء الزخرفية.',
      
      // Ethnographic Exhibits
      'ethnographic.title': 'المعروضات الإثنوغرافية',
      'ethnographic.intro': 'اكتشف الثقافة الجزائرية التقليدية من خلال الملابس والأدوات والأشياء الطقسية.',
      'ethnographic.clothing.title': 'الملابس التقليدية',
      'ethnographic.clothing.desc': 'أزياء ومنسوجات متقنة من مختلف المناطق الجزائرية.',
      'ethnographic.tools.title': 'الأدوات التقليدية',
      'ethnographic.tools.desc': 'الأدوات الزراعية والحرفية المستخدمة في الحياة اليومية.',
      'ethnographic.ritual.title': 'الأشياء الطقسية',
      'ethnographic.ritual.desc': 'القطع الأثرية الدينية والاحتفالية.',
      
      // Special Exhibitions
      'exhibitions.title': 'المعارض الخاصة',
      'exhibitions.current': 'المعرض الحالي',
      'exhibitions.upcoming': 'المعارض القادمة',
      'exhibitions.past': 'المعارض السابقة',
      
      // Contact Page
      'contact.title': 'اتصل بنا',
      'contact.form.title': 'أرسل لنا رسالة',
      'contact.form.name': 'الاسم',
      'contact.form.email': 'البريد الإلكتروني',
      'contact.form.subject': 'الموضوع',
      'contact.form.message': 'الرسالة',
      'contact.form.submit': 'إرسال الرسالة',
      'contact.form.success': 'شكرًا لك! تم إرسال رسالتك بنجاح.',
      'contact.form.error': 'عذرًا، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.',
      'contact.info.title': 'معلومات المتحف',
      'contact.info.address': 'العنوان',
      'contact.info.phone': 'الهاتف',
      'contact.info.email': 'البريد الإلكتروني',
      'contact.info.hours': 'ساعات العمل',
      
      // AI Assistant
      'ai.title': 'اسأل مرشد المتحف',
      'ai.placeholder': 'اسأل عن المتحف أو المجموعات أو معلومات الزيارة...',
      'ai.send': 'إرسال',
      'ai.thinking': 'جاري التفكير...',
      'ai.welcome': 'مرحبًا! أنا مرشدك في المتحف. اسألني أي شيء عن متحف باردو أو مجموعاتنا أو معلومات الزيارة.',
      
      // Footer
      'footer.about': 'عن المتحف',
      'footer.visit': 'زيارة',
      'footer.follow': 'تابعنا',
      'footer.copyright': '© 2025 المتحف الوطني باردو. جميع الحقوق محفوظة.',
      
      // Common
      'common.learnMore': 'اعرف المزيد',
      'common.close': 'إغلاق',
      'common.loading': 'جاري التحميل...',
    },
  };

  return translations[lang] || translations.en;
};
