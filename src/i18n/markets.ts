import type { L10n } from './l10n';

// Main-site Markets overview. The main site does NOT copy Market sub-site
// content — it lists popular markets and links to market.chinausedautohub.com
// for the detailed import requirements, taxes, vehicle age, drive side, ports.

export const MARKETS_PAGE: {
  title: L10n;
  description: L10n;
  h1: L10n;
  intro: L10n;
  detailNote: L10n;
  suitableVehicles: L10n;
  browseBrands: L10n;
  importTools: L10n;
} = {
  title: {
    en: 'Export Markets — Used Cars from China to Your Market',
    ar: 'أسواق التصدير — سيارات مستعملة من الصين إلى سوقك',
    ru: 'Рынки экспорта — подержанные автомобили из Китая на ваш рынок',
    es: 'Mercados de exportación — coches usados desde China a su mercado',
  },
  description: {
    en: 'Popular destination markets for used vehicles exported from China, with links to market-specific import details.',
    ar: 'أسواق الوجهة الشائعة للمركبات المستعملة المصدَّرة من الصين، مع روابط لتفاصيل الاستيراد الخاصة بكل سوق.',
    ru: 'Популярные рынки назначения для подержанных автомобилей из Китая со ссылками на детали импорта по каждому рынку.',
    es: 'Mercados de destino populares para vehículos usados exportados desde China, con enlaces a detalles de importación de cada mercado.',
  },
  h1: {
    en: 'Popular Markets',
    ar: 'الأسواق الشائعة',
    ru: 'Популярные рынки',
    es: 'Mercados populares',
  },
  intro: {
    en: 'Buyers source used vehicles from China to many markets. This overview lists popular destination markets. Detailed import requirements, taxes, vehicle age limits, drive side, documents and ports for each market live on the Market sub-site.',
    ar: 'يورّد المشترون سيارات مستعملة من الصين إلى أسواق عديدة. تسرد هذه النظرة العامة أسواق الوجهة الشائعة. توجد متطلبات الاستيراد التفصيلية والضرائب وحدود عمر المركبات وجانب القيادة والوثائق والموانئ لكل سوق في الموقع الفرعي للأسواق.',
    ru: 'Покупатели поставляют подержанные автомобили из Китая на многие рынки. Этот обзор перечисляет популярные рынки назначения. Детальные требования к импорту, налоги, ограничения по возрасту, сторона руля, документы и порты по каждому рынку находятся на подсайте Market.',
    es: 'Los compradores abastecen vehículos usados desde China a muchos mercados. Este resumen enumera los mercados de destino populares. Los requisitos detallados de importación, impuestos, límites de antigüedad, lado de conducción, documentos y puertos de cada mercado están en el subsitio Market.',
  },
  detailNote: {
    en: 'Open market details',
    ar: 'افتح تفاصيل السوق',
    ru: 'Открыть детали рынка',
    es: 'Abrir detalles del mercado',
  },
  suitableVehicles: {
    en: 'Browse available vehicles from China and filter by brand, body type and powertrain for your market.',
    ar: 'تصفح المركبات المتاحة من الصين وصفّها حسب العلامة التجارية ونوع الهيكل ونظام الدفع المناسب لسوقك.',
    ru: 'Просмотрите доступные автомобили из Китая и отфильтруйте по марке, типу кузова и силовой установке для вашего рынка.',
    es: 'Explore los vehículos disponibles desde China y fíltrelos por marca, tipo de carrocería y tren motriz para su mercado.',
  },
  browseBrands: {
    en: 'Compare Chinese brands and find which models are available for export.',
    ar: 'قارن العلامات التجارية الصينية واكتشف الموديلات المتاحة للتصدير.',
    ru: 'Сравните китайские марки и узнайте, какие модели доступны для экспорта.',
    es: 'Compare las marcas chinas y descubra qué modelos están disponibles para exportación.',
  },
  importTools: {
    en: 'Estimate landed cost, shipping and import costs with the calculators on the Import Tools sub-site.',
    ar: 'قدّر التكلفة النهائية والشحن وتكاليف الاستيراد باستخدام الحاسبات في الموقع الفرعي لأدوات الاستيراد.',
    ru: 'Оцените итоговую стоимость, доставку и расходы на импорт с помощью калькуляторов на подсайте инструментов импорта.',
    es: 'Estime el coste de desembarco, el envío y los costes de importación con las calculadoras del subsitio de herramientas de importación.',
  },
};
