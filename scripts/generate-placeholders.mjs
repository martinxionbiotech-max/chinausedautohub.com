#!/usr/bin/env node
// Generates clearly-labelled neutral placeholder vehicle images (SVG).
// No real vehicle photos are available in Phase 1; every placeholder is
// explicitly marked "DEMO — Placeholder image" so it can never be mistaken
// for a real listing photo.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'images');
mkdirSync(outDir, { recursive: true });

const COLORS = {
  white: '#e8e8ea',
  silver: '#c6c9ce',
  grey: '#9aa0a8',
  black: '#3a3f46',
  blue: '#2f5d8c',
  red: '#8c3a3a',
};

function carSvg(bodyColor, label) {
  // 1200x800 side-profile placeholder.
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-label="${label}">
  <rect width="1200" height="800" fill="#f2f4f7"/>
  <rect x="24" y="24" width="1152" height="752" fill="none" stroke="#dfe3e8" stroke-width="2"/>
  <!-- ground shadow -->
  <ellipse cx="600" cy="620" rx="470" ry="26" fill="#e2e6ec"/>
  <!-- car body -->
  <path d="M150 470 L150 540 Q150 556 166 556 L1030 556 Q1046 556 1046 540 L1046 470 Z" fill="${bodyColor}"/>
  <!-- cabin -->
  <path d="M330 470 L372 336 Q376 318 396 318 L760 318 Q780 318 784 336 L820 470 Z" fill="${bodyColor}"/>
  <!-- windows -->
  <path d="M398 470 L430 344 L520 344 L520 470 Z" fill="#c9d4e0"/>
  <path d="M544 470 L544 344 L632 344 L632 470 Z" fill="#c9d4e0"/>
  <path d="M656 470 L656 344 L744 344 L744 470 Z" fill="#c9d4e0"/>
  <!-- beltline -->
  <line x1="160" y1="470" x2="1040" y2="470" stroke="#ffffff" stroke-opacity="0.35" stroke-width="3"/>
  <!-- wheels -->
  <circle cx="340" cy="556" r="62" fill="#22262c"/>
  <circle cx="340" cy="556" r="34" fill="#5a616b"/>
  <circle cx="860" cy="556" r="62" fill="#22262c"/>
  <circle cx="860" cy="556" r="34" fill="#5a616b"/>
  <!-- label -->
  <rect x="420" y="656" width="360" height="46" rx="8" fill="#1a2330"/>
  <text x="600" y="686" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="22" fill="#ffffff">DEMO — Placeholder image</text>
  <text x="600" y="740" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="18" fill="#718096">No real vehicle photo available</text>
</svg>
`;
}

const targets = [
  ['placeholder-suv-white.svg', COLORS.white],
  ['placeholder-suv-silver.svg', COLORS.silver],
  ['placeholder-suv-grey.svg', COLORS.grey],
  ['placeholder-suv-black.svg', COLORS.black],
  ['placeholder-suv-blue.svg', COLORS.blue],
  ['placeholder-suv-red.svg', COLORS.red],
  ['placeholder-sedan-white.svg', COLORS.white],
  ['placeholder-sedan-blue.svg', COLORS.blue],
  ['placeholder-sedan-grey.svg', COLORS.grey],
];

for (const [file, color] of targets) {
  writeFileSync(join(outDir, file), carSvg(color, 'Demo vehicle placeholder'), 'utf8');
  console.log('wrote', file);
}
console.log('Done. Generated', targets.length, 'placeholder images.');
