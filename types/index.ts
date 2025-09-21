export type Language = 'tr' | 'en';
export type Page = 'home' | 'product';

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