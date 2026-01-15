export type Language = 'tr' | 'en';
export type Page = 'home' | 'product' | 'products' | 'about' | 'services' | 'service-detail' | 'product-detail' | 'what-we-do' | 'technology' | 'contact' | 'blog' | 'blog-article' | 'filo-yonetimi' | 'ozmal-arac' | 'arac-takip' | 'bakim-onarim' | 'gunluk-kiralama' | 'kiralama-sirketleri' | 'cagri-merkezi' | 'arac-gorsellestirme' | 'goruntu-guvenligi' | 'arac-degerlendirme' | 'gdpr' | 'privacy-policy' | 'terms-of-use' | 'cookie-policy' | 'kvkk';

export interface SEOSection {
  title: string;
  content: string;
}

export interface SEOContent {
  title: string;
  metaDescription: string;
  sections: SEOSection[];
}

export interface ContentType {
  tr: any;
  en: any;
}

export interface ScreenshotData {
  id: string;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  image: string;
  features: { tr: string[]; en: string[] };
}