import type { L10n } from '../l10n';
import { exportRulesPillar } from './export-rules';
import { exportGuidePillar } from './export-guide';
import { sourcingPillar } from './sourcing';

// Pillar (hub) pages — top-level route pages that summarise a topic cluster and
// point to the cluster's deeper pages without repeating their content. Two
// pillars exist today: the Export Policy hub (/china-used-car-export-rules/) and
// the Knowledge hub (/china-used-car-export/). Each renders through PillarPage.

export interface PillarLink {
  slug?: string; // internal guide slug (rendered as a localised guide URL)
  path?: string; // internal root-relative URL (rendered localised, e.g. a sourcing topic)
  href?: string; // external / sub-site URL
  label: L10n;
}

export interface PillarTopic {
  label: L10n; // topic title
  description: L10n; // one-line summary of what the linked page covers
  slug?: string; // internal guide slug
  path?: string; // internal root-relative URL (e.g. a sourcing topic)
  href?: string; // external / sub-site URL
}

export interface PillarTable {
  headers: L10n[];
  rows: L10n[][];
}

export interface PillarSection {
  heading: L10n;
  paragraphs?: L10n[];
  checklist?: L10n[];
  table?: PillarTable;
  links?: PillarLink[];
  topics?: PillarTopic[];
}

export interface PillarContent {
  slug: string;
  path: string; // root-relative public URL (with trailing slash)
  title: L10n;
  description: L10n;
  h1: L10n;
  intro: L10n;
  sections: PillarSection[];
}

export const PILLARS: PillarContent[] = [exportRulesPillar, exportGuidePillar, sourcingPillar];

export function getPillar(slug: string): PillarContent | undefined {
  return PILLARS.find((p) => p.slug === slug);
}
