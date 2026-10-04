import type { L10n } from '../l10n';
import { howToBuy } from './how-to-buy-used-car-from-china';
import { exportProcess } from './china-used-car-export-process';
import { inspection } from './vehicle-inspection';
import { exportDocuments } from './export-documents';
import { shipping } from './shipping';
import { fobVsCifVsCfr } from './fob-vs-cif-vs-cfr';
import { landedCost } from './landed-cost';
import { buyingEvs } from './buying-chinese-evs-for-export';

export interface GuideSection {
  heading: L10n;
  paragraphs: L10n[];
  /** Optional cross-guide links rendered under the section. */
  links?: { slug: string; label: L10n }[];
}

export interface GuideContent {
  slug: string;
  title: L10n;
  description: L10n;
  h1: L10n;
  summary: L10n;
  sections: GuideSection[];
}

export const GUIDES_OVERVIEW: {
  title: L10n;
  description: L10n;
  h1: L10n;
  intro: L10n;
} = {
  title: {
    en: 'Buying Guides — How to Buy & Export Used Cars from China',
    ar: 'أدلة الشراء — كيف تشتري وتصدّر سيارات مستعملة من الصين',
    ru: 'Руководства — как купить и экспортировать подержанные авто из Китая',
    es: 'Guías de compra — cómo comprar y exportar coches usados desde China',
  },
  description: {
    en: 'Practical guides on buying and exporting used vehicles from China: the buying process, inspection, documents, shipping, Incoterms, landed cost and Chinese EVs.',
    ar: 'أدلة عملية حول شراء وتصدير المركبات المستعملة من الصين: عملية الشراء والفحص والوثائق والشحن ومصطلحات التجارة والتكلفة النهائية والسيارات الكهربائية الصينية.',
    ru: 'Практические руководства по покупке и экспорту подержанных автомобилей из Китая: процесс покупки, проверка, документы, доставка, Инкотермс, итоговая стоимость и китайские электромобили.',
    es: 'Guías prácticas sobre la compra y exportación de vehículos usados desde China: proceso de compra, inspección, documentos, envío, Incoterms, coste de desembarco y VE chinos.',
  },
  h1: {
    en: 'Buying Guides',
    ar: 'أدلة الشراء',
    ru: 'Руководства по покупке',
    es: 'Guías de compra',
  },
  intro: {
    en: 'Practical, evergreen guides that explain how buying and exporting a used vehicle from China works — the process, the terminology and what to watch for.',
    ar: 'أدلة عملية دائمة تشرح كيف يعمل شراء وتصدير مركبة مستعملة من الصين — العملية والمصطلحات وما يجب الانتباه إليه.',
    ru: 'Практические, актуальные руководства, объясняющие, как устроена покупка и экспорт подержанного автомобиля из Китая, — процесс, терминология и на что обращать внимание.',
    es: 'Guías prácticas y atemporales que explican cómo funciona la compra y exportación de un vehículo usado desde China: el proceso, la terminología y en qué fijarse.',
  },
};

export const GUIDES: GuideContent[] = [
  howToBuy,
  exportProcess,
  inspection,
  exportDocuments,
  shipping,
  fobVsCifVsCfr,
  landedCost,
  buyingEvs,
];

export function getGuide(slug: string): GuideContent | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
