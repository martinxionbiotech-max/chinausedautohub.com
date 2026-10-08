import type { L10n } from '../l10n';

// Sourcing cluster — buyer-knowledge layer, distinct from `/services/` (platform
// services). The pillar hub (/sourcing/) is a PillarContent rendered by
// PillarPage; these six deep pages are the how-to decision content. The sourcing
// discipline (§22/§23): we describe how sourcing to buyer requirements works as
// an industry practice and never present artificial inventory, fake VINs,
// mileage, stock numbers or real-time prices.

export interface SourcingLink {
  slug?: string; // sibling sourcing topic → /sourcing/{slug}/
  guide?: string; // guide slug → /guides/{slug}/
  path?: string; // internal root-relative URL (e.g. /services/vehicle-sourcing/)
  href?: string; // external / sub-site URL (data / market / tools)
  label: L10n;
}

export interface SourcingTable {
  headers: L10n[];
  rows: L10n[][];
}

export interface SourcingSection {
  heading: L10n;
  paragraphs?: L10n[];
  checklist?: L10n[];
  table?: SourcingTable;
  links?: SourcingLink[];
}

export interface SourcingTopic {
  slug: string;
  title: L10n;
  description: L10n;
  h1: L10n;
  summary: L10n;
  sections: SourcingSection[];
}

import { howChinaSourcingWorks } from './how-china-used-car-sourcing-works';
import { usedCarSourcing } from './used-car-sourcing-from-china';
import { evSourcing } from './china-ev-sourcing';
import { bydSourcing } from './byd-sourcing';
import { suvSourcing } from './chinese-suv-sourcing';
import { exportReadySourcing } from './export-ready-vehicle-sourcing';

export const SOURCING_TOPICS: SourcingTopic[] = [
  howChinaSourcingWorks,
  usedCarSourcing,
  evSourcing,
  bydSourcing,
  suvSourcing,
  exportReadySourcing,
];

export function getSourcingTopic(slug: string): SourcingTopic | undefined {
  return SOURCING_TOPICS.find((t) => t.slug === slug);
}
