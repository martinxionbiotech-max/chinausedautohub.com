// Localized content model for long-form, page-specific copy (guides, services,
// trust, FAQ, markets). Unlike the JSON dictionary layer (shared UI strings),
// this holds all four languages side by side in one file so translations stay
// in sync and reviewable together. English is the reference language.
export interface L10n {
  en: string;
  ar: string;
  ru: string;
  es: string;
}

export function pick(l: L10n, locale: string): string {
  const v = (l as unknown as Record<string, string>)[locale];
  return v ?? l.en;
}
