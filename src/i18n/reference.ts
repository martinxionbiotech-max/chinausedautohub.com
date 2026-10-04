// Reference-data translations (body types, fuel types, transmissions, drives,
// markets, brand overviews, model descriptions). English lives in src/data/*.json;
// this module holds ar/ru/es and falls back to the data layer for English.
// Values must reflect the same facts as the JSON — no invented specs.

type L10n = { ar: string; ru: string; es: string };

const BODY_TYPE_NAMES: Record<string, L10n> = {
  suv: { ar: 'سيارة دفع رباعي (SUV)', ru: 'Внедорожник (SUV)', es: 'SUV' },
  sedan: { ar: 'سيدان', ru: 'Седан', es: 'Sedán' },
};

const BODY_TYPE_DESCRIPTIONS: Record<string, L10n> = {
  suv: {
    ar: 'سيارات رياضية متعددة الاستخدامات، تشمل الفئات المدمجة والمتوسطة وذات السبعة مقاعد.',
    ru: 'Внедорожники, включая компактные, среднеразмерные и 7-местные модели.',
    es: 'Vehículos utilitarios deportivos, incluidos los compactos, medianos y de 7 plazas.',
  },
  sedan: {
    ar: 'سيدان ركاب بأربعة أبواب في فئتي المدمج والمتوسط.',
    ru: 'Четырёхдверные пассажирские седаны в компактном и среднем сегментах.',
    es: 'Sedanes de pasajeros de cuatro puertas en los segmentos compacto y mediano.',
  },
};

const FUEL_NAMES: Record<string, L10n> = {
  petrol: { ar: 'بنزين', ru: 'Бензин', es: 'Gasolina' },
  ev: { ar: 'كهربائي', ru: 'Электро', es: 'Eléctrico' },
  phev: { ar: 'هجين قابل للشحن', ru: 'Подключаемый гибрид', es: 'Híbrido enchufable' },
  hybrid: { ar: 'هجين', ru: 'Гибрид', es: 'Híbrido' },
};

const FUEL_DESCRIPTIONS: Record<string, L10n> = {
  petrol: {
    ar: 'سيارات تعمل بمحرك احتراق داخلي بنزين.',
    ru: 'Автомобили с бензиновым двигателем внутреннего сгорания.',
    es: 'Vehículos de gasolina con motor de combustión interna.',
  },
  ev: {
    ar: 'سيارات كهربائية تعمل بالبطارية.',
    ru: 'Электромобили с аккумуляторной батареей.',
    es: 'Vehículos eléctricos de batería.',
  },
  phev: {
    ar: 'سيارات هجينة قابلة للشحن الكهربائي.',
    ru: 'Подключаемые гибридные электромобили.',
    es: 'Vehículos eléctricos híbridos enchufables.',
  },
  hybrid: {
    ar: 'سيارات هجينة غير قابلة للشحن.',
    ru: 'Гибридные электромобили без подзарядки.',
    es: 'Vehículos eléctricos híbridos no enchufables.',
  },
};

const TRANSMISSION_NAMES: Record<string, L10n> = {
  automatic: { ar: 'أوتوماتيك', ru: 'Автомат', es: 'Automática' },
  dct: { ar: 'DCT (قابض مزدوج)', ru: 'DCT (робот с двойным сцеплением)', es: 'DCT (doble embrague)' },
  cvt: { ar: 'CVT', ru: 'CVT (вариатор)', es: 'CVT' },
  manual: { ar: 'يدوي', ru: 'Механика', es: 'Manual' },
};

const DRIVE_NAMES: Record<string, L10n> = {
  fwd: { ar: 'دفع أمامي', ru: 'Передний привод', es: 'Tracción delantera' },
  rwd: { ar: 'دفع خلفي', ru: 'Задний привод', es: 'Tracción trasera' },
  awd: { ar: 'دفع رباعي', ru: 'Полный привод', es: 'Tracción total' },
};

const MARKET_NAMES: Record<string, L10n> = {
  uae: { ar: 'الإمارات', ru: 'ОАЭ', es: 'EAU' },
  'saudi-arabia': { ar: 'السعودية', ru: 'Саудовская Аравия', es: 'Arabia Saudí' },
  kenya: { ar: 'كينيا', ru: 'Кения', es: 'Kenia' },
  tanzania: { ar: 'تنزانيا', ru: 'Танзания', es: 'Tanzania' },
  nigeria: { ar: 'نيجيريا', ru: 'Нигерия', es: 'Nigeria' },
  kazakhstan: { ar: 'كازاخستان', ru: 'Казахстан', es: 'Kazajistán' },
  uzbekistan: { ar: 'أوزبكستان', ru: 'Узбекистан', es: 'Uzbekistán' },
};

const BRAND_OVERVIEWS: Record<string, L10n> = {
  byd: {
    ar: 'BYD شركة سيارات صينية تركّز بقوة على السيارات الكهربائية، بما فيها سيارات الركاب الهجينة القابلة للشحن (DM-i/DM-p) والكهربائية بالكامل (e-platform 3.0). وتُصدَّر عدة موديلات منها إلى الأسواق الخارجية.',
    ru: 'BYD — китайский автопроизводитель с акцентом на электрифицированные автомобили, включая подключаемые гибриды (DM-i/DM-p) и полностью электрические легковые автомобили (платформа e-platform 3.0). Ряд моделей экспортируется на зарубежные рынки.',
    es: 'BYD es un fabricante chino con un fuerte enfoque en vehículos electrificados, incluidos los turismos PHEV (DM-i/DM-p) y eléctricos puros (plataforma e 3.0). Varios de sus modelos se exportan a mercados extranjeros.',
  },
  geely: {
    ar: 'تنتج Geely Auto مجموعة واسعة من سيارات الركاب، بما فيها سيارات Monjaro (Xingyue L) وCoolray (Binyue) الرياضية متعددة الاستخدامات، وتباع في عدة أسواق عالمية.',
    ru: 'Geely Auto выпускает широкий ассортимент легковых автомобилей, включая внедорожники Monjaro (Xingyue L) и Coolray (Binyue), продаваемые на многих мировых рынках.',
    es: 'Geely Auto produce una amplia gama de turismos, incluidos los SUV Monjaro (Xingyue L) y Coolray (Binyue), vendidos en múltiples mercados globales.',
  },
  chery: {
    ar: 'Chery من أكبر مصدري السيارات في الصين، وتُباع موديلات مثل Tiggo 8 Pro وArrizo 8 في العديد من الأسواق الناشئة.',
    ru: 'Chery — один из крупнейших экспортёров автомобилей Китая; модели Tiggo 8 Pro и Arrizo 8 продаются на многих развивающихся рынках.',
    es: 'Chery es uno de los mayores exportadores de vehículos de China, con modelos como el Tiggo 8 Pro y el Arrizo 8 vendidos en muchos mercados emergentes.',
  },
  changan: {
    ar: 'تنتج Changan Automobile سيارات ركاب تشمل SUV طراز CS75 Plus وسيدان UNI-V، مع نشاط تصدير متزايد.',
    ru: 'Changan Automobile выпускает легковые автомобили, включая внедорожник CS75 Plus и седан UNI-V, с растущей экспортной активностью.',
    es: 'Changan Automobile produce turismos como el SUV CS75 Plus y el sedán UNI-V, con una actividad exportadora en crecimiento.',
  },
  gac: {
    ar: 'تصنع GAC Motor سيارات تشمل SUV طراز GS4 تحت علامة Trumpchi (GAC)، وتُصدَّر إلى عدة أسواق خارجية.',
    ru: 'GAC Motor выпускает автомобили, включая внедорожник GS4 под брендом Trumpchi (GAC), экспортируемые на несколько зарубежных рынков.',
    es: 'GAC Motor fabrica vehículos como el SUV GS4 bajo la marca Trumpchi (GAC), exportados a varios mercados extranjeros.',
  },
  'great-wall': {
    ar: 'تشتهر Great Wall Motor بعلامة Haval للسيارات الرياضية متعددة الاستخدامات وطراز Haval H6، أحد أشهر سيارات SUV المدمجة طويلة العمر في الصين، ويُباع دوليًا أيضًا.',
    ru: 'Great Wall Motor известна брендом внедорожников Haval и моделью Haval H6 — одним из самых долго выпускаемых компактных внедорожников Китая, продаваемым и за рубежом.',
    es: 'Great Wall Motor es conocida por su marca de SUV Haval y el Haval H6, uno de los SUV compactos más veteranos de China, vendido también internacionalmente.',
  },
  nio: {
    ar: 'تصمم NIO سيارات كهربائية فاخرة من فئة SUV والسيدان، بما فيها SUV طراز ES6، وبدأت المبيعات في أسواق أوروبية وشرق أوسطية مختارة.',
    ru: 'NIO проектирует премиальные электрические внедорожники и седаны, включая внедорожник ES6, и начала продажи на отдельных рынках Европы и Ближнего Востока.',
    es: 'NIO diseña SUV y sedanes eléctricos premium, incluido el SUV ES6, y ha iniciado ventas en mercados seleccionados de Europa y Oriente Medio.',
  },
  xpeng: {
    ar: 'تنتج XPeng سيارات كهربائية تشمل SUV متوسط الحجم G6، مع حضور متوسع في أوروبا ومناطق أخرى.',
    ru: 'XPeng выпускает электромобили, включая среднеразмерный внедорожник G6, с расширяющимся присутствием в Европе и других регионах.',
    es: 'XPeng produce vehículos eléctricos como el SUV mediano G6, con una presencia creciente en Europa y otras regiones.',
  },
};

const MODEL_DESCRIPTIONS: Record<string, L10n> = {
  'byd/song-plus': {
    ar: 'SUV متوسطة الحجم متوفرة كسيارة هجينة قابلة للشحن (DM-i) في السوق الصيني، وتشتهر بالقيادة اليومية الكهربائية مع موسّع مدى بنزين.',
    ru: 'Среднеразмерный внедорожник, доступный в Китае как подключаемый гибрид (DM-i), известный ежедневной ездой на электротяге с бензиновым удлинителем запаса хода.',
    es: 'SUV mediano disponible como PHEV (DM-i) en el mercado chino, conocido por la conducción diaria eléctrica con un extensor de autonomía de gasolina.',
  },
  'byd/seal': {
    ar: 'سيدان كهربائية متوسطة الحجم مبنية على منصة BYD e-platform 3.0، وتتوفر بتكوينات بمحرك واحد أو محركين.',
    ru: 'Среднеразмерный электрический седан на платформе BYD e-platform 3.0 с одним или двумя электромоторами.',
    es: 'Sedán eléctrico mediano construido sobre la plataforma e 3.0 de BYD, ofrecido con configuraciones de uno y dos motores.',
  },
  'geely/monjaro': {
    ar: 'SUV متوسطة الحجم (تُباع باسم Xingyue L في الصين) بمحرك 2.0T وناقل حركة أوتوماتيك، وتُصدَّر إلى عدة أسواق.',
    ru: 'Среднеразмерный внедорожник (в Китае продаётся как Xingyue L) с двигателем 2.0T и автоматической коробкой передач, экспортируется на несколько рынков.',
    es: 'SUV mediano (vendido como Xingyue L en China) con motor 2.0T y transmisión automática, exportado a varios mercados.',
  },
  'geely/coolray': {
    ar: 'SUV مدمجة (Binyue في الصين) بمحرك بنزين بشاحن توربيني، وتحظى بشعبية في أسواق التصدير.',
    ru: 'Компактный внедорожник (Binyue в Китае) с турбированным бензиновым двигателем, популярный на экспортных рынках.',
    es: 'SUV compacto (Binyue en China) con motor de gasolina turboalimentado, popular en mercados de exportación.',
  },
  'chery/tiggo-8-pro': {
    ar: 'SUV متوسطة الحجم بسبعة مقاعد بمحركات بنزين بشاحن توربيني، وهي موديل تصدير رئيسي لشركة Chery.',
    ru: 'Среднеразмерный 7-местный внедорожник с турбированными бензиновыми двигателями, ключевая экспортная модель Chery.',
    es: 'SUV mediano de 7 plazas con motores de gasolina turboalimentados, un modelo de exportación clave de Chery.',
  },
  'chery/arrizo-8': {
    ar: 'سيدان متوسطة الحجم بمحركات بنزين بشاحن توربيني، مصممة كسيارة عائلية مركّزة على القيمة.',
    ru: 'Среднеразмерный седан с турбированными бензиновыми двигателями, позиционируемый как семейный седан с акцентом на ценность.',
    es: 'Sedán mediano con motores de gasolina turboalimentados, posicionado como un sedán familiar centrado en el valor.',
  },
  'changan/cs75-plus': {
    ar: 'SUV مدمجة إلى متوسطة الحجم بمحركات بنزين بشاحن توربيني وناقل حركة أوتوماتيك، وهي من أكثر موديلات Changan مبيعًا.',
    ru: 'Компактно-среднеразмерный внедорожник с турбированными бензиновыми двигателями и автоматической коробкой передач, одна из самых продаваемых моделей Changan.',
    es: 'SUV de tamaño compacto a mediano con motores de gasolina turboalimentados y transmisión automática, uno de los modelos más vendidos de Changan.',
  },
  'changan/uni-v': {
    ar: 'سيدان رياضية مدمجة بمحرك بنزين بشاحن توربيني وناقل حركة بقابض مزدوج.',
    ru: 'Спортивный компактный седан с турбированным бензиновым двигателем и роботизированной коробкой с двойным сцеплением.',
    es: 'Sedán compacto deportivo con motor de gasolina turboalimentado y transmisión de doble embrague.',
  },
  'gac/gs4': {
    ar: 'SUV مدمجة من GAC Motor (Trumpchi)، وتتوفر بمحركات بنزين بشاحن توربيني.',
    ru: 'Компактный внедорожник от GAC Motor (Trumpchi) с турбированными бензиновыми двигателями.',
    es: 'SUV compacto de GAC Motor (Trumpchi), ofrecido con motores de gasolina turboalimentados.',
  },
  'great-wall/haval-h6': {
    ar: 'SUV مدمجة من Haval بمحركات بنزين بشاحن توربيني وناقل DCT، وهي موديل طويل العمر وعالي الإنتاج في الصين.',
    ru: 'Компактный внедорожник Haval с турбированными бензиновыми двигателями и DCT, долго выпускаемая массовая модель в Китае.',
    es: 'SUV compacto de Haval con motores de gasolina turboalimentados y DCT, un modelo de gran volumen y larga trayectoria en China.',
  },
  'nio/es6': {
    ar: 'SUV كهربائية متوسطة الحجم من NIO، وتتوفر بدفع رباعي بمحركين وإمكانية تبديل البطارية.',
    ru: 'Среднеразмерный электрический внедорожник NIO с полным приводом на двух моторах и возможностью замены батареи.',
    es: 'SUV eléctrico mediano de NIO, ofrecido con tracción total de dos motores y capacidad de intercambio de batería.',
  },
  'xpeng/g6': {
    ar: 'SUV كهربائية متوسطة الحجم من XPeng ببنية 800V وقدرة شحن سريع.',
    ru: 'Среднеразмерный электрический внедорожник XPeng с архитектурой 800 В и быстрой зарядкой.',
    es: 'SUV eléctrico mediano de XPeng con arquitectura de 800 V y carga rápida.',
  },
};

const COLOR_NAMES: Record<string, L10n> = {
  White: { ar: 'أبيض', ru: 'Белый', es: 'Blanco' },
  'Arctic Blue': { ar: 'أزرق قطبي', ru: 'Арктик блю', es: 'Azul ártico' },
  Silver: { ar: 'فضي', ru: 'Серебристый', es: 'Plata' },
  Red: { ar: 'أحمر', ru: 'Красный', es: 'Rojo' },
  Black: { ar: 'أسود', ru: 'Чёрный', es: 'Negro' },
  Grey: { ar: 'رمادي', ru: 'Серый', es: 'Gris' },
};

const LOCATION_NAMES: Record<string, L10n> = {
  'Shenzhen, China': { ar: 'شنجن، الصين', ru: 'Шэньчжэнь, Китай', es: 'Shenzhen, China' },
  'Guangzhou, China': { ar: 'قوانغتشو، الصين', ru: 'Гуанчжоу, Китай', es: 'Guangzhou, China' },
  'Hangzhou, China': { ar: 'هانغتشو، الصين', ru: 'Ханчжоу, Китай', es: 'Hangzhou, China' },
  'Ningbo, China': { ar: 'نينغبو، الصين', ru: 'Нинбо, Китай', es: 'Ningbo, China' },
  'Wuhu, China': { ar: 'ووهو، الصين', ru: 'Уху, Китай', es: 'Wuhu, China' },
  'Chongqing, China': { ar: 'تشونغتشينغ، الصين', ru: 'Чунцин, Китай', es: 'Chongqing, China' },
  'Hefei, China': { ar: 'خفي، الصين', ru: 'Хэфэй, Китай', es: 'Hefei, China' },
  'Baoding, China': { ar: 'باودينغ، الصين', ru: 'Баодин, Китай', es: 'Baoding, China' },
};

export type RefLocale = 'en' | 'ar' | 'ru' | 'es';

function pick(l: L10n, locale: string, en: string): string {
  if (locale === 'ar') return l.ar;
  if (locale === 'ru') return l.ru;
  if (locale === 'es') return l.es;
  return en;
}

export function bodyTypeName(slug: string, locale: string, en: string): string {
  return BODY_TYPE_NAMES[slug] ? pick(BODY_TYPE_NAMES[slug], locale, en) : en;
}
export function bodyTypeDescription(slug: string, locale: string, en: string): string {
  return BODY_TYPE_DESCRIPTIONS[slug] ? pick(BODY_TYPE_DESCRIPTIONS[slug], locale, en) : en;
}
export function fuelTypeName(slug: string, locale: string, en: string): string {
  return FUEL_NAMES[slug] ? pick(FUEL_NAMES[slug], locale, en) : en;
}
export function fuelTypeDescription(slug: string, locale: string, en: string): string {
  return FUEL_DESCRIPTIONS[slug] ? pick(FUEL_DESCRIPTIONS[slug], locale, en) : en;
}
export function transmissionName(slug: string, locale: string, en: string): string {
  return TRANSMISSION_NAMES[slug] ? pick(TRANSMISSION_NAMES[slug], locale, en) : en;
}
export function driveName(slug: string, locale: string, en: string): string {
  return DRIVE_NAMES[slug] ? pick(DRIVE_NAMES[slug], locale, en) : en;
}
export function marketName(slug: string, locale: string, en: string): string {
  return MARKET_NAMES[slug] ? pick(MARKET_NAMES[slug], locale, en) : en;
}
export function brandOverview(slug: string, locale: string, en: string): string {
  return BRAND_OVERVIEWS[slug] ? pick(BRAND_OVERVIEWS[slug], locale, en) : en;
}
export function modelDescription(brand: string, slug: string, locale: string, en: string): string {
  const key = `${brand}/${slug}`;
  return MODEL_DESCRIPTIONS[key] ? pick(MODEL_DESCRIPTIONS[key], locale, en) : en;
}
export function colorName(value: string, locale: string): string {
  return COLOR_NAMES[value] ? pick(COLOR_NAMES[value], locale, value) : value;
}
export function locationName(value: string, locale: string): string {
  return LOCATION_NAMES[value] ? pick(LOCATION_NAMES[value], locale, value) : value;
}
