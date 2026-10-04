// Dictionary layer — the single source of translated UI strings and static
// page copy. Components and pages read every user-facing string through
// `getTranslations(locale)`; no hard-coded English is allowed in templates.
// Adding a language = add one JSON file + register it in LOCALES below.
import en from './en.json';
import ar from './ar.json';
import ru from './ru.json';
import es from './es.json';

export const LOCALES = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'ru', label: 'Русский', dir: 'ltr' },
  { code: 'es', label: 'Español', dir: 'ltr' },
] as const;

export type Locale = (typeof LOCALES)[number]['code'];
export type Dir = 'ltr' | 'rtl';

export const DEFAULT_LOCALE: Locale = 'en';
export const NON_DEFAULT_LOCALES: Locale[] = ['ar', 'ru', 'es'];

export function isLocale(value: string): value is Locale {
  return LOCALES.some((l) => l.code === value);
}

export function localeDir(locale: string): Dir {
  return LOCALES.find((l) => l.code === locale)?.dir ?? 'ltr';
}

export function localeLabel(locale: string): string {
  return LOCALES.find((l) => l.code === locale)?.label ?? locale;
}

// ---------- dictionary types (loosely typed: JSON is the contract) ----------

interface Plurals {
  [key: string]: string;
}

export interface Dictionary {
  site: { tagline: string; description: string };
  lang: Record<string, string>;
  nav: Record<string, string>;
  footer: Record<string, string>;
  common: Record<string, string>;
  status: Record<string, string>;
  vehicleCard: Record<string, string>;
  search: Record<string, string>;
  leadForm: Record<string, string>;
  listing: Record<string, string>;
  detail: Record<string, string>;
  brands: Record<string, string>;
  bodyTypes: Record<string, string>;
  powertrains: Record<string, string>;
  tools: Record<string, string>;
  howItWorks: {
    title: string;
    description: string;
    h1: string;
    intro: string;
    whatWeProvide: string;
    faqHeading: string;
    ready: string;
    buyerGuideNote: string;
    buyerGuideLink: string;
    ownerLegend: string;
    ownerPlatform: string;
    ownerThirdParty: string;
    ownerBoth: string;
    steps: { n: string; title: string; text: string; owner: string }[];
    areas: { title: string; text: string }[];
    faqs: { question: string; answer: string }[];
  };
  home: Record<string, unknown> & {
    title: string;
    heroH1: string;
    heroSub: string;
    trustItems: { title: string; text: string }[];
    whyItems: { title: string; text: string }[];
    steps: { n: string; title: string; text: string }[];
    markets: { slug: string; name: string }[];
    faqs: { question: string; answer: string }[];
    whoHeading: string;
    whoText: string;
    whatHeading: string;
    methodology: string;
    problemsHeading: string;
    problems: { problem: string; solution: string }[];
    pathwaysHeading: string;
    pathways: { title: string; text: string }[];
  };
  about: {
    title: string;
    description: string;
    h1: string;
    contactHeading: string;
    contactUs: string;
    paragraphs: string[];
  };
  contact: {
    title: string;
    description: string;
    h1: string;
    intro: string;
    emailHeading: string;
    emailText: string;
    whatsappHeading: string;
    whatsappText: string;
    preferForm: string;
    requestForm: string;
    formTail: string;
  };
  legal: {
    lastUpdated: string;
    privacy: LegalPage;
    terms: LegalPage;
    cookies: LegalPage;
    legalNotice: LegalPage;
    disclaimer: LegalPage;
    vehicleListingDisclaimer: LegalPage;
    exportCompliance: LegalPage;
    dataProtection: LegalPage;
    externalLinks: LegalPage;
    errorsOmissions: LegalPage;
    copyright: LegalPage;
  };
  notFound: Record<string, string>;
  breadcrumb: Record<string, string>;
  specLabels: Record<string, string>;
  conditionLabels: Record<string, string>;
  exportLabels: Record<string, string>;
  confidence: Record<string, string>;
  units: Record<string, string>;
  plurals: Plurals;
}

interface LegalPage {
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { h: string; p: string[] }[];
}

const dictionaries: Record<Locale, Dictionary> = { en, ar, ru, es } as Record<
  Locale,
  Dictionary
>;

export function getTranslations(locale: string): Dictionary {
  return dictionaries[locale as Locale] ?? en;
}

// Plural-aware interpolation using Intl.PluralRules. The dictionary stores
// category → template under `plurals.<key>` (e.g. "one", "few", "many", "other").
export function plural(
  locale: string,
  key: string,
  count: number,
  dict: Dictionary,
): string {
  const forms = dict.plurals[key];
  if (!forms) return String(count);
  let category: string;
  try {
    category = new Intl.PluralRules(locale).select(count);
  } catch {
    category = count === 1 ? 'one' : 'other';
  }
  const template = forms[category] ?? forms['other'] ?? forms['one'] ?? String(count);
  return template.replaceAll('{count}', String(count.toLocaleString(locale)));
}
