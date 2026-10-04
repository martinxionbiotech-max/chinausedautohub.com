// Per-brand procurement-detail content for the brand landing pages (PHASE 5).
// Extends src/i18n/brands.ts (whyConsider / chinaPosition / exportConsideration)
// with the remaining "why should a professional buyer care" sections. Grounded
// in the brands/models data — no invented sales figures, certifications or
// rankings. English is authoritative; ar/ru/es are factual translations.

export interface BrandDetail {
  majorSegments: string;
  exportModels: string;
  portfolio: string;
  usedMarket: string;
  modelFamilies: string;
  destinationConsiderations: string;
}

type L10n = { ar: BrandDetail; ru: BrandDetail; es: BrandDetail };

const DETAIL_EN: Record<string, BrandDetail> = {
  byd: {
    majorSegments:
      'Compact to mid-size SUVs and sedans, with a strong focus on electrified powertrains across both body styles.',
    exportModels:
      'Song Plus, Atto 3, Seal, Han and Qin Plus are the export-relevant names most often sourced; several also sell under BYD\u2019s global naming.',
    portfolio:
      'PHEV (DM-i) and full EV dominate the range, with HEV also offered; pure-combustion models are a minority in the current lineup.',
    usedMarket:
      'High domestic volumes mean a broad used supply, but battery state of health is the key check on electrified units.',
    modelFamilies:
      'Song (SUV), Qin (sedan), Han (flagship sedan), Tang (SUV), Seal and Atto 3 (EV), plus the Yuan and Dolphin small-EV lines.',
    destinationConsiderations:
      'China-market naming, trim and charging/telematics can differ from export versions; confirm homologation, drive side and charging standard for the destination.',
  },
  geely: {
    majorSegments:
      'Compact to mid-size SUVs plus sedans and hatchbacks.',
    exportModels:
      'Monjaro (Xingyue L), Coolray (Binyue) and the Emgrand sedans are the commonly referenced export models.',
    portfolio:
      'Petrol (ICE) models remain the export core, with growing HEV, PHEV and EV availability.',
    usedMarket:
      'Petrol SUVs offer simpler condition checks than electrified rivals; confirm the equivalent export model name for the unit you are sourcing.',
    modelFamilies:
      'Xingyue L (Monjaro), Binyue (Coolray), Boyue, Emgrand and the Galaxy new-energy lines.',
    destinationConsiderations:
      'Several models are sold under different names overseas; verify the equivalent export model and regional specification.',
  },
  chery: {
    majorSegments:
      'Compact to mid-size SUVs and sedans, including 7-seat SUVs.',
    exportModels:
      'Tiggo 8 / Tiggo 8 Pro and Arrizo 8 are the main export-relevant models, with the Tiggo SUV range the core.',
    portfolio:
      'Predominantly petrol (ICE), with PHEV and EV variants emerging on newer models.',
    usedMarket:
      'A large export footprint means established parts and service networks in many emerging markets; confirm trim and engine calibration per unit.',
    modelFamilies:
      'Tiggo (SUV), Arrizo (sedan), and the newer Omoda/Jaecoo export-oriented lines.',
    destinationConsiderations:
      'China-market and export-market variants can differ in trim, engine calibration and features; verify the specific build for the destination.',
  },
  changan: {
    majorSegments:
      'Compact to mid-size SUVs, sedans and pickups.',
    exportModels:
      'CS75 Plus and UNI-V are the export-relevant names most commonly referenced.',
    portfolio:
      'Mainly petrol (ICE) with turbocharged engines; HEV, PHEV and EV are available on selected models.',
    usedMarket:
      'A large domestic automaker with broad used supply; confirm the specific variant and its homologation status.',
    modelFamilies:
      'CS (SUV), UNI (premium crossover/sedan) and Eado (sedan) lines.',
    destinationConsiderations:
      'Naming and specification can differ between China and overseas markets; verify the exact variant.',
  },
  gac: {
    majorSegments:
      'Compact to mid-size SUVs, sedans and MPVs.',
    exportModels:
      'GS4 is the most commonly referenced export model, with the Trumpchi GS SUV range the core.',
    portfolio:
      'Mainly petrol (ICE); hybrid and EV variants exist on selected models.',
    usedMarket:
      'Compact petrol SUVs dominate the affordable used segment; confirm build and maintenance history.',
    modelFamilies:
      'Trumpchi GS (SUV), GA (sedan) and M (MPV) lines.',
    destinationConsiderations:
      'The Trumpchi brand and model naming can vary between China and export markets; confirm the equivalent model.',
  },
  'great-wall': {
    majorSegments:
      'Compact to mid-size SUVs and pickups.',
    exportModels:
      'Haval H6 is the flagship export-relevant model, with the Haval SUV range and GWM pickup lines also exported.',
    portfolio:
      'Mainly petrol (ICE); HEV, PHEV and EV variants exist on selected Haval models.',
    usedMarket:
      'The H6\u2019s long production run means a large used supply; confirm the generation and trim match the stated year.',
    modelFamilies:
      'Haval (SUV) and GWM Poer/Cannon (pickup) lines, plus the Tank off-road range.',
    destinationConsiderations:
      'Export Haval models can differ in equipment and homologation from China-market versions.',
  },
  nio: {
    majorSegments:
      'Premium mid-size to large SUVs and sedans.',
    exportModels:
      'ES6 and ES7/EL6 SUVs and the ET sedans are the export-relevant models.',
    portfolio:
      'Full EV only, with battery-swap as a defining feature.',
    usedMarket:
      'Lower domestic volumes than volume brands; the battery-swap and charging ecosystem is region-specific, so confirm support for the destination.',
    modelFamilies:
      'ES (SUV), EC (coupe SUV) and ET (sedan) lines.',
    destinationConsiderations:
      'Battery-swap and charging support are region-specific; export units may need different software and charging configuration.',
  },
  xpeng: {
    majorSegments:
      'Mid-size SUVs and sedans.',
    exportModels:
      'G6 SUV and P7 sedan are the export-relevant models.',
    portfolio:
      'Full EV only, with 800V fast-charging architecture on newer models.',
    usedMarket:
      'Growing but smaller used supply; battery health and charging compatibility are the key checks.',
    modelFamilies:
      'G (SUV) and P (sedan) lines.',
    destinationConsiderations:
      'Charging, software and driver-assistance features can differ between China-market and export versions.',
  },
};

const DETAIL_L10N: Record<string, L10n> = {
  byd: {
    ar: {
      majorSegments:
        'سيارات SUV وسيدان مدمجة إلى متوسطة الحجم، مع تركيز قوي على أنظمة الدفع الكهربائية في كلا النوعين.',
      exportModels:
        'Song Plus وAtto 3 وSeal وHan وQin Plus هي الأسماء التصديرية الأكثر طلبًا؛ ويُباع بعضها أيضًا بالأسماء العالمية لعلامة BYD.',
      portfolio:
        'تهيمن PHEV (DM-i) والكهربائية بالكامل على التشكيلة، مع توفر HEV أيضًا؛ أما موديلات الاحتراق البحت فهي أقلية في التشكيلة الحالية.',
      usedMarket:
        'الأحجام المحلية الكبيرة تعني عرضًا واسعًا للمستعمل، لكن صحة البطارية هي الفحص الأساسي للوحدات الكهربائية.',
      modelFamilies:
        'خطوط Song (SUV)، وQin (سيدان)، وHan (سيدان رئيسي)، وTang (SUV)، وSeal وAtto 3 (كهربائية)، إضافة إلى خطي Yuan وDolphin الكهربائيين الصغيرين.',
      destinationConsiderations:
        'قد تختلف التسمية والفئة وإعدادات الشحن/الاتصالات في السوق الصيني عن نسخ التصدير؛ تأكد من الاعتماد وجهة القيادة ومعيار الشحن للوجهة.',
    },
    ru: {
      majorSegments:
        'Компактные и среднеразмерные внедорожники и седаны с сильным акцентом на электрифицированные силовые установки в обоих типах кузова.',
      exportModels:
        'Song Plus, Atto 3, Seal, Han и Qin Plus — наиболее востребованные экспортные модели; некоторые продаются также под глобальными названиями BYD.',
      portfolio:
        'В линейке доминируют PHEV (DM-i) и чистые электромобили, также есть HEV; модели с чистым ДВС — меньшинство в текущем ряду.',
      usedMarket:
        'Большие внутренние объёмы означают широкое предложение на вторичном рынке, но ключевая проверка для электрифицированных машин — состояние батареи.',
      modelFamilies:
        'Линейки Song (SUV), Qin (седан), Han (флагманский седан), Tang (SUV), Seal и Atto 3 (EV), а также малые электромобили Yuan и Dolphin.',
      destinationConsiderations:
        'Названия, комплектации и настройки зарядки/телематики для Китая могут отличаться от экспортных; подтвердите омологацию, сторону руля и стандарт зарядки для страны назначения.',
    },
    es: {
      majorSegments:
        'SUV y sedanes compactos y medianos, con un fuerte enfoque en propulsiones electrificadas en ambos tipos de carrocería.',
      exportModels:
        'Song Plus, Atto 3, Seal, Han y Qin Plus son los nombres de exportación más solicitados; varios se venden también bajo la denominación global de BYD.',
      portfolio:
        'Dominan PHEV (DM-i) y eléctrico puro, con HEV también ofrecido; los modelos de combustión pura son minoría en la gama actual.',
      usedMarket:
        'Los altos volúmenes domésticos implican una amplia oferta de usados, pero el estado de salud de la batería es la comprobación clave en unidades electrificadas.',
      modelFamilies:
        'Líneas Song (SUV), Qin (sedán), Han (sedán insignia), Tang (SUV), Seal y Atto 3 (EV), más las líneas eléctricas pequeñas Yuan y Dolphin.',
      destinationConsiderations:
        'La denominación, el acabado y la configuración de carga/telemática del mercado chino pueden diferir de las versiones de exportación; confirma la homologación, el lado de conducción y el estándar de carga para el destino.',
    },
  },
  geely: {
    ar: {
      majorSegments:
        'سيارات SUV مدمجة إلى متوسطة الحجم إضافة إلى السيدان والهاتشباك.',
      exportModels:
        'Monjaro (Xingyue L) وCoolray (Binyue) وسيدان Emgrand هي الموديلات التصديرية الأكثر ذكرًا.',
      portfolio:
        'تبقى موديلات البنزين (ICE) جوهر التصدير، مع توفر متزايد لـ HEV وPHEV وEV.',
      usedMarket:
        'توفر سيارات SUV البنزينية فحوصات حالة أبسط من المنافسات الكهربائية؛ تأكد من اسم الموديل التصديري المكافئ للوحدة التي تستوردها.',
      modelFamilies:
        'خطوط Xingyue L (Monjaro)، وBinyue (Coolray)، وBoyue، وEmgrand، وخطوط Galaxy للطاقة الجديدة.',
      destinationConsiderations:
        'تُباع عدة موديلات بأسماء مختلفة في الخارج؛ تحقق من الموديل التصديري المكافئ والمواصفات الإقليمية.',
    },
    ru: {
      majorSegments:
        'Компактные и среднеразмерные внедорожники, а также седаны и хэтчбеки.',
      exportModels:
        'Monjaro (Xingyue L), Coolray (Binyue) и седаны Emgrand — наиболее упоминаемые экспортные модели.',
      portfolio:
        'Ядром экспорта остаются бензиновые модели (ICE), растёт доступность HEV, PHEV и EV.',
      usedMarket:
        'Бензиновые внедорожники проще проверять по состоянию, чем электрифицированные конкуренты; подтвердите эквивалентное экспортное название закупаемой машины.',
      modelFamilies:
        'Линейки Xingyue L (Monjaro), Binyue (Coolray), Boyue, Emgrand и новые энергетические линии Galaxy.',
      destinationConsiderations:
        'Несколько моделей продаются за рубежом под другими названиями; проверьте эквивалентную экспортную модель и региональную спецификацию.',
    },
    es: {
      majorSegments:
        'SUV compactos y medianos, además de sedanes y hatchbacks.',
      exportModels:
        'Monjaro (Xingyue L), Coolray (Binyue) y los sedanes Emgrand son los modelos de exportación más citados.',
      portfolio:
        'Los modelos de gasolina (ICE) siguen siendo el núcleo exportador, con una creciente disponibilidad de HEV, PHEV y EV.',
      usedMarket:
        'Los SUV de gasolina ofrecen comprobaciones de estado más sencillas que los rivales electrificados; confirma el nombre del modelo de exportación equivalente de la unidad que vas a adquirir.',
      modelFamilies:
        'Líneas Xingyue L (Monjaro), Binyue (Coolray), Boyue, Emgrand y las líneas de nueva energía Galaxy.',
      destinationConsiderations:
        'Varios modelos se venden con nombres distintos en el extranjero; verifica el modelo de exportación equivalente y la especificación regional.',
    },
  },
  chery: {
    ar: {
      majorSegments:
        'سيارات SUV وسيدان مدمجة إلى متوسطة الحجم، بما فيها SUV بسبعة مقاعد.',
      exportModels:
        'Tiggo 8 / Tiggo 8 Pro وArrizo 8 هي الموديلات التصديرية الرئيسية، مع مجموعة Tiggo SUV كالعمود الفقري.',
      portfolio:
        'في الغالب بنزين (ICE)، مع ظهور نسخ PHEV وEV في الموديلات الأحدث.',
      usedMarket:
        'تعني البصمة التصديرية الكبيرة شبكات قطع غيار وخدمة راسخة في العديد من الأسواق الناشئة؛ تأكد من الفئة ومعايرة المحرك لكل وحدة.',
      modelFamilies:
        'خطوط Tiggo (SUV)، وArrizo (سيدان)، وخطوط Omoda/Jaecoo التصديرية الأحدث.',
      destinationConsiderations:
        'قد تختلف نسخ السوق الصيني عن نسخ أسواق التصدير في الفئة ومعايرة المحرك والمزايا؛ تحقق من النسخة المحددة للوجهة.',
    },
    ru: {
      majorSegments:
        'Компактные и среднеразмерные внедорожники и седаны, включая 7-местные внедорожники.',
      exportModels:
        'Tiggo 8 / Tiggo 8 Pro и Arrizo 8 — основные экспортные модели, ядром является линейка внедорожников Tiggo.',
      portfolio:
        'Преимущественно бензин (ICE), на новых моделях появляются версии PHEV и EV.',
      usedMarket:
        'Большой экспортный след означает развитые сети запчастей и сервиса во многих развивающихся странах; подтверждайте комплектацию и настройку двигателя по каждой машине.',
      modelFamilies:
        'Линейки Tiggo (SUV), Arrizo (седан) и новые экспортно-ориентированные линии Omoda/Jaecoo.',
      destinationConsiderations:
        'Версии для Китая и экспортных рынков могут различаться комплектацией, настройкой двигателя и функциями; проверьте конкретную сборку для страны назначения.',
    },
    es: {
      majorSegments:
        'SUV y sedanes compactos y medianos, incluidos SUV de 7 plazas.',
      exportModels:
        'Tiggo 8 / Tiggo 8 Pro y Arrizo 8 son los principales modelos de exportación, con la gama de SUV Tiggo como núcleo.',
      portfolio:
        'Predominantemente gasolina (ICE), con variantes PHEV y EV apareciendo en modelos más nuevos.',
      usedMarket:
        'Una gran huella exportadora implica redes de repuestos y servicio consolidadas en muchos mercados emergentes; confirma el acabado y la calibración del motor de cada unidad.',
      modelFamilies:
        'Líneas Tiggo (SUV), Arrizo (sedán) y las nuevas líneas orientadas a exportación Omoda/Jaecoo.',
      destinationConsiderations:
        'Las variantes del mercado chino y de exportación pueden diferir en acabado, calibración del motor y características; verifica la versión específica para el destino.',
    },
  },
  changan: {
    ar: {
      majorSegments:
        'سيارات SUV وسيدان مدمجة إلى متوسطة الحجم، إضافة إلى البيك أب.',
      exportModels:
        'CS75 Plus وUNI-V هما الاسمان التصديريان الأكثر ذكرًا.',
      portfolio:
        'في الغالب بنزين (ICE) بمحركات بشاحن توربيني؛ تتوفر HEV وPHEV وEV في موديلات مختارة.',
      usedMarket:
        'شركة سيارات محلية كبيرة بعرض مستعمل واسع؛ تأكد من النسخة المحددة وحالة اعتمادها.',
      modelFamilies:
        'خطوط CS (SUV)، وUNI (كروس أوفر/سيدان فاخرة)، وEado (سيدان).',
      destinationConsiderations:
        'قد تختلف التسمية والمواصفات بين الصين والأسواق الخارجية؛ تحقق من النسخة المحددة.',
    },
    ru: {
      majorSegments:
        'Компактные и среднеразмерные внедорожники, седаны и пикапы.',
      exportModels:
        'CS75 Plus и UNI-V — наиболее упоминаемые экспортные названия.',
      portfolio:
        'В основном бензин (ICE) с турбированными двигателями; HEV, PHEV и EV доступны на отдельных моделях.',
      usedMarket:
        'Крупный внутренний автопроизводитель с широким предложением на вторичном рынке; подтверждайте конкретную версию и её омологацию.',
      modelFamilies:
        'Линейки CS (SUV), UNI (премиальный кроссовер/седан) и Eado (седан).',
      destinationConsiderations:
        'Названия и спецификации могут различаться между Китаем и зарубежными рынками; проверяйте точную версию.',
    },
    es: {
      majorSegments:
        'SUV y sedanes compactos y medianos, además de pickups.',
      exportModels:
        'CS75 Plus y UNI-V son los nombres de exportación más citados.',
      portfolio:
        'Principalmente gasolina (ICE) con motores turboalimentados; HEV, PHEV y EV disponibles en modelos seleccionados.',
      usedMarket:
        'Un gran fabricante doméstico con amplia oferta de usados; confirma la variante concreta y su estado de homologación.',
      modelFamilies:
        'Líneas CS (SUV), UNI (crossover/sedán premium) y Eado (sedán).',
      destinationConsiderations:
        'La denominación y la especificación pueden diferir entre China y los mercados extranjeros; verifica la variante exacta.',
    },
  },
  gac: {
    ar: {
      majorSegments:
        'سيارات SUV وسيدان مدمجة إلى متوسطة الحجم، إضافة إلى MPV.',
      exportModels:
        'GS4 هو الموديل التصديري الأكثر ذكرًا، مع مجموعة Trumpchi GS SUV كالعمود الفقري.',
      portfolio:
        'في الغالب بنزين (ICE)؛ توجد نسخ هجينة وكهربائية في موديلات مختارة.',
      usedMarket:
        'تهيمن سيارات SUV البنزينية المدمجة على فئة المستعمل الميسور؛ تأكد من البناء وسجل الصيانة.',
      modelFamilies:
        'خطوط Trumpchi GS (SUV)، وGA (سيدان)، وM (MPV).',
      destinationConsiderations:
        'قد تختلف علامة Trumpchi وتسمية الموديلات بين الصين وأسواق التصدير؛ تأكد من الموديل المكافئ.',
    },
    ru: {
      majorSegments:
        'Компактные и среднеразмерные внедорожники, седаны и минивэны.',
      exportModels:
        'GS4 — наиболее упоминаемая экспортная модель, ядром является линейка внедорожников Trumpchi GS.',
      portfolio:
        'В основном бензин (ICE); гибридные и электрические версии есть на отдельных моделях.',
      usedMarket:
        'Компактные бензиновые внедорожники доминируют в доступном сегменте подержанных машин; подтверждайте сборку и историю обслуживания.',
      modelFamilies:
        'Линейки Trumpchi GS (SUV), GA (седан) и M (MPV).',
      destinationConsiderations:
        'Бренд Trumpchi и названия моделей могут различаться между Китаем и экспортными рынками; подтверждайте эквивалентную модель.',
    },
    es: {
      majorSegments:
        'SUV y sedanes compactos y medianos, además de MPV.',
      exportModels:
        'GS4 es el modelo de exportación más citado, con la gama de SUV Trumpchi GS como núcleo.',
      portfolio:
        'Principalmente gasolina (ICE); existen variantes híbridas y eléctricas en modelos seleccionados.',
      usedMarket:
        'Los SUV compactos de gasolina dominan el segmento usado asequible; confirma la fabricación y el historial de mantenimiento.',
      modelFamilies:
        'Líneas Trumpchi GS (SUV), GA (sedán) y M (MPV).',
      destinationConsiderations:
        'La marca Trumpchi y la denominación de los modelos pueden variar entre China y los mercados de exportación; confirma el modelo equivalente.',
    },
  },
  'great-wall': {
    ar: {
      majorSegments:
        'سيارات SUV مدمجة إلى متوسطة الحجم، إضافة إلى البيك أب.',
      exportModels:
        'Haval H6 هو الموديل التصديري الرئيسي، مع تصدير مجموعة Haval SUV وخطوط البيك أب GWM أيضًا.',
      portfolio:
        'في الغالب بنزين (ICE)؛ توجد نسخ HEV وPHEV وEV في موديلات Haval مختارة.',
      usedMarket:
        'يعني طول فترة إنتاج H6 عرضًا مستعملًا كبيرًا؛ تأكد من أن الجيل والفئة يطابقان سنة الصنع المعلنة.',
      modelFamilies:
        'خطوط Haval (SUV) وGWM Poer/Cannon (بيك أب)، إضافة إلى مجموعة Tank للطرق الوعرة.',
      destinationConsiderations:
        'قد تختلف موديلات Haval التصديرية في التجهيز والاعتماد عن نسخ السوق الصيني.',
    },
    ru: {
      majorSegments:
        'Компактные и среднеразмерные внедорожники и пикапы.',
      exportModels:
        'Haval H6 — флагманская экспортная модель, также экспортируются линейка внедорожников Haval и пикапы GWM.',
      portfolio:
        'В основном бензин (ICE); версии HEV, PHEV и EV есть на отдельных моделях Haval.',
      usedMarket:
        'Долгий выпуск H6 означает большое предложение на вторичном рынке; подтверждайте, что поколение и комплектация соответствуют заявленному году.',
      modelFamilies:
        'Линейки Haval (SUV) и GWM Poer/Cannon (пикап), а также внедорожная линейка Tank.',
      destinationConsiderations:
        'Экспортные модели Haval могут отличаться оснащением и омологацией от китайских версий.',
    },
    es: {
      majorSegments:
        'SUV compactos y medianos, además de pickups.',
      exportModels:
        'Haval H6 es el modelo de exportación insignia, y también se exportan la gama de SUV Haval y las líneas de pickup GWM.',
      portfolio:
        'Principalmente gasolina (ICE); existen variantes HEV, PHEV y EV en modelos Haval seleccionados.',
      usedMarket:
        'La larga producción del H6 implica una amplia oferta de usados; confirma que la generación y el acabado coincidan con el año declarado.',
      modelFamilies:
        'Líneas Haval (SUV) y GWM Poer/Cannon (pickup), más la gama todoterreno Tank.',
      destinationConsiderations:
        'Los modelos Haval de exportación pueden diferir en equipamiento y homologación de las versiones del mercado chino.',
    },
  },
  nio: {
    ar: {
      majorSegments:
        'سيارات SUV وسيدان فاخرة متوسطة إلى كبيرة الحجم.',
      exportModels:
        'سيارات SUV طراز ES6 وES7/EL6 وسيدان ET هي الموديلات التصديرية.',
      portfolio:
        'كهربائية بالكامل فقط، مع تبديل البطارية كميزة مميزة.',
      usedMarket:
        'أحجام محلية أقل من العلامات ذات الكميات الكبيرة؛ نظام تبديل البطارية والشحن خاص بالمناطق، لذا تأكد من دعم الوجهة.',
      modelFamilies:
        'خطوط ES (SUV)، وEC (كوبيه SUV)، وET (سيدان).',
      destinationConsiderations:
        'دعم تبديل البطارية والشحن خاص بالمناطق؛ قد تحتاج وحدات التصدير إلى برمجيات وإعدادات شحن مختلفة.',
    },
    ru: {
      majorSegments:
        'Премиальные среднеразмерные и крупные внедорожники и седаны.',
      exportModels:
        'Внедорожники ES6 и ES7/EL6 и седаны ET — экспортные модели.',
      portfolio:
        'Только чистые электромобили, определяющая особенность — замена батареи.',
      usedMarket:
        'Объёмы ниже, чем у массовых брендов; экосистема замены батареи и зарядки зависит от региона, поэтому подтверждайте поддержку в стране назначения.',
      modelFamilies:
        'Линейки ES (SUV), EC (купе-SUV) и ET (седан).',
      destinationConsiderations:
        'Поддержка замены батареи и зарядки зависит от региона; экспортным машинам может требоваться другое ПО и конфигурация зарядки.',
    },
    es: {
      majorSegments:
        'SUV y sedanes premium medianos y grandes.',
      exportModels:
        'Los SUV ES6 y ES7/EL6 y los sedanes ET son los modelos de exportación.',
      portfolio:
        'Solo eléctrico puro, con el intercambio de batería como característica definitoria.',
      usedMarket:
        'Volúmenes domésticos inferiores a las marcas de gran volumen; el ecosistema de intercambio de batería y carga es específico de cada región, así que confirma el soporte en el destino.',
      modelFamilies:
        'Líneas ES (SUV), EC (SUV cupé) y ET (sedán).',
      destinationConsiderations:
        'El soporte de intercambio de batería y carga es específico de cada región; las unidades de exportación pueden requerir software y configuración de carga distintos.',
    },
  },
  xpeng: {
    ar: {
      majorSegments:
        'سيارات SUV وسيدان متوسطة الحجم.',
      exportModels:
        'SUV طراز G6 وسيدان P7 هما الموديلان التصديريان.',
      portfolio:
        'كهربائية بالكامل فقط، مع بنية شحن سريع 800V في الموديلات الأحدث.',
      usedMarket:
        'عرض مستعمل متنامٍ لكنه أصغر؛ صحة البطارية وتوافق الشحن هما الفحصان الأساسيان.',
      modelFamilies:
        'خطوط G (SUV) وP (سيدان).',
      destinationConsiderations:
        'قد تختلف مزايا الشحن والبرمجيات ومساعدة السائق بين نسخ السوق الصيني ونسخ التصدير.',
    },
    ru: {
      majorSegments:
        'Среднеразмерные внедорожники и седаны.',
      exportModels:
        'Внедорожник G6 и седан P7 — экспортные модели.',
      portfolio:
        'Только чистые электромобили, на новых моделях — архитектура быстрой зарядки 800 В.',
      usedMarket:
        'Предложение на вторичном рынке растёт, но меньше; ключевые проверки — состояние батареи и совместимость зарядки.',
      modelFamilies:
        'Линейки G (SUV) и P (седан).',
      destinationConsiderations:
        'Функции зарядки, ПО и помощи водителю могут различаться между китайскими и экспортными версиями.',
    },
    es: {
      majorSegments:
        'SUV y sedanes medianos.',
      exportModels:
        'El SUV G6 y el sedán P7 son los modelos de exportación.',
      portfolio:
        'Solo eléctrico puro, con arquitectura de carga rápida de 800 V en modelos más nuevos.',
      usedMarket:
        'Oferta de usados creciente pero menor; el estado de la batería y la compatibilidad de carga son las comprobaciones clave.',
      modelFamilies:
        'Líneas G (SUV) y P (sedán).',
      destinationConsiderations:
        'Las funciones de carga, software y asistencia al conductor pueden diferir entre las versiones del mercado chino y de exportación.',
    },
  },
};

export function getBrandDetail(slug: string, locale: string): BrandDetail {
  if (locale === 'ar' || locale === 'ru' || locale === 'es') {
    const l = DETAIL_L10N[slug]?.[locale];
    if (l) return l;
  }
  return (
    DETAIL_EN[slug] ?? {
      majorSegments: '',
      exportModels: '',
      portfolio: '',
      usedMarket: '',
      modelFamilies: '',
      destinationConsiderations: '',
    }
  );
}
