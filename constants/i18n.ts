export interface I18nContent {
  header: {
    home: string;
    products: string;
    solutions: string;
    blog: string;
    contact: string;
    demo: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
  };
}

export interface I18nDictionary {
  TR: I18nContent;
  EN: I18nContent;
}

export const i18nDictionary: I18nDictionary = {
  TR: {
    header: {
      home: "Ana Sayfa",
      products: "Ürünler",
      solutions: "Ne Yapıyoruz",
      blog: "Blog",
      contact: "İletişim",
      demo: "Demo Talep Et"
    },
    hero: {
      title: "Araç Kiralama ve Filo Yönetimini Dijitalleştiriyoruz",
      subtitle: "Bireysel kullanıcılardan kurumsal filolara kadar mobilite ekosistemini dijitalleştiren entegre yazılım çözümleri.",
      ctaPrimary: "Platformu Keşfedin",
      ctaSecondary: "Demo Talep Et",
      trust: "Türkiye genelinde 20+ şirket tarafından tercih ediliyor"
    }
  },
  EN: {
    header: {
      home: "Home",
      products: "Products",
      solutions: "What We Do",
      blog: "Blog",
      contact: "Contact",
      demo: "Request Demo"
    },
    hero: {
      title: "We Digitize Car Rental & Fleet Management",
      subtitle: "End-to-end software that digitizes the mobility ecosystem from individuals to corporate fleets.",
      ctaPrimary: "Explore the Platform",
      ctaSecondary: "Request a Demo",
      trust: "Trusted by 20+ companies nationwide"
    }
  }
};

export type Language = 'TR' | 'EN';

// Language persistence utilities
export const getStoredLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('lang') as Language;
    return stored && (stored === 'TR' || stored === 'EN') ? stored : 'TR';
  }
  return 'TR';
};

export const setStoredLanguage = (language: Language): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', language);
  }
};
