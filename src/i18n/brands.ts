// Per-brand commercial + knowledge content for brand landing pages.
// Grounded in the brands/models/vehicles data — no invented sales figures,
// certifications or rankings. English is authoritative; ar/ru/es are
// factual translations of the same statements.
//
// Fields:
//   whyConsider        — why an export buyer would consider this brand
//   chinaPosition      — the brand's position in China's domestic market
//   exportConsideration — China-market vs export-version differences to verify

export interface BrandKnowledge {
  whyConsider: string;
  chinaPosition: string;
  exportConsideration: string;
}

type L10n = { ar: BrandKnowledge; ru: BrandKnowledge; es: BrandKnowledge };

const BRAND_KNOWLEDGE_EN: Record<string, BrandKnowledge> = {
  byd: {
    whyConsider:
      'BYD offers electrified powertrains — PHEV (DM-i) and full EV — in both SUV and sedan forms. Buyers looking at Chinese new-energy vehicles often consider BYD for electric-first daily driving and a broad model range.',
    chinaPosition:
      'BYD is one of China\u2019s largest producers of electrified vehicles, with a strong position in the domestic new-energy market across PHEV and EV passenger cars.',
    exportConsideration:
      'China-market BYD models can carry local names, trim levels and charging/telematics configurations that differ from export versions. Confirm target-market homologation, drive side and charging standard before finalizing.',
  },
  geely: {
    whyConsider:
      'Geely\u2019s SUV range — including the Monjaro and Coolray — gives export buyers petrol-powered options across mid-size and compact segments.',
    chinaPosition:
      'Geely Auto is a major Chinese automaker with a broad passenger-vehicle lineup and an established presence across multiple global markets.',
    exportConsideration:
      'Some Geely models are sold under different names overseas (for example, the Monjaro is the Xingyue L in China). Confirm the equivalent export model and regional specification for your market.',
  },
  chery: {
    whyConsider:
      'Chery offers petrol SUVs and sedans, including the 7-seat Tiggo 8 Pro — relevant for buyers who need larger or family-oriented vehicles.',
    chinaPosition:
      'Chery is among China\u2019s largest vehicle exporters, with models distributed across many emerging markets.',
    exportConsideration:
      'Chery has extensive export operations, but China-market and export-market variants can differ in trim, engine calibration and features. Verify the specific build for your destination.',
  },
  changan: {
    whyConsider:
      'Changan\u2019s CS75 Plus and UNI-V cover the mid-size SUV and sporty sedan segments, both with turbocharged petrol powertrains.',
    chinaPosition:
      'Changan Automobile is a leading Chinese automaker with a growing export footprint and strong domestic sales of models such as the CS75 Plus.',
    exportConsideration:
      'China-market Changan models may differ from overseas versions in specification and naming. Confirm homologation and the exact variant for your target market.',
  },
  gac: {
    whyConsider:
      'GAC\u2019s Trumpchi GS4 is a compact petrol SUV — a common segment for buyers sourcing affordable used SUVs from China.',
    chinaPosition:
      'GAC Motor produces the Trumpchi SUV range, including the GS4, with sales across several overseas markets.',
    exportConsideration:
      'GAC\u2019s Trumpchi brand and model naming can vary between China and export markets. Confirm the equivalent model and destination-specific requirements.',
  },
  'great-wall': {
    whyConsider:
      'The Haval H6 is a long-running, high-volume compact SUV — a familiar reference point for buyers seeking a proven petrol SUV.',
    chinaPosition:
      'Great Wall Motor\u2019s Haval brand, and the H6 in particular, has been one of China\u2019s most enduring and high-volume SUV lines.',
    exportConsideration:
      'Haval models sold overseas can differ from China-market versions in equipment and homologation. Verify drive side, trim and regional compliance.',
  },
  nio: {
    whyConsider:
      'NIO\u2019s ES6 is a premium electric SUV with dual-motor AWD — relevant for buyers seeking higher-specification EVs with battery-swap capability.',
    chinaPosition:
      'NIO is a premium Chinese EV brand focused on electric SUVs and sedans, with sales in select European and Middle East markets.',
    exportConsideration:
      'NIO\u2019s battery-swap and charging ecosystem is region-specific; export units may require different charging and software support. Confirm compatibility for your destination.',
  },
  xpeng: {
    whyConsider:
      'XPeng\u2019s G6 is a mid-size electric SUV on an 800V platform with fast-charging — of interest to buyers prioritizing EV charging performance.',
    chinaPosition:
      'XPeng produces electric vehicles such as the G6, with an expanding presence in Europe and other regions.',
    exportConsideration:
      'China-market XPeng vehicles may differ from export versions in charging, software and driver-assistance features. Confirm regional homologation and feature availability.',
  },
};

const BRAND_KNOWLEDGE_L10N: Record<string, L10n> = {
  byd: {
    ar: {
      whyConsider:
        'تقدم BYD أنظمة دفع كهربائية — هجينة قابلة للشحن (DM-i) وكهربائية بالكامل — في شكل SUV وسيدان. غالبًا ما ينظر المشترون المهتمون بالسيارات الصينية العاملة بالطاقة الجديدة إلى BYD للقيادة اليومية الكهربائية ونطاق واسع من الموديلات.',
      chinaPosition:
        'BYD واحدة من أكبر منتجي السيارات الكهربائية في الصين، مع حضور قوي في سوق الطاقة الجديدة المحلي عبر سيارات الركاب الهجينة القابلة للشحن والكهربائية.',
      exportConsideration:
        'قد تحمل موديلات BYD في السوق الصيني أسماء محلية وفئات تجهيز وإعدادات شحن/اتصالات تختلف عن نسخ التصدير. تأكد من اعتماد السوق المستهدف وجهة القيادة ومعيار الشحن قبل الإتمام.',
    },
    ru: {
      whyConsider:
        'BYD предлагает электрифицированные силовые установки — подключаемые гибриды (DM-i) и полностью электрические — в кузовах SUV и седан. Покупатели китайских NEV часто рассматривают BYD за ежедневную езду на электротяге и широкий модельный ряд.',
      chinaPosition:
        'BYD — один из крупнейших производителей электрифицированных автомобилей в Китае с сильными позициями на внутреннем рынке NEV в сегментах PHEV и EV.',
      exportConsideration:
        'Модели BYD для китайского рынка могут иметь локальные названия, комплектации и настройки зарядки/телематики, отличающиеся от экспортных. Подтвердите омологацию, сторону руля и стандарт зарядки для целевого рынка.',
    },
    es: {
      whyConsider:
        'BYD ofrece propulsiones electrificadas — PHEV (DM-i) y eléctrico puro — en formato SUV y sedán. Los compradores de vehículos chinos de nueva energía suelen considerar BYD por la conducción diaria eléctrica y una amplia gama de modelos.',
      chinaPosition:
        'BYD es uno de los mayores productores de vehículos electrificados de China, con una fuerte posición en el mercado interno de nueva energía en turismos PHEV y EV.',
      exportConsideration:
        'Los modelos BYD del mercado chino pueden tener nombres locales, niveles de acabado y configuraciones de carga/telemática distintos de las versiones de exportación. Confirma la homologación, el lado de conducción y el estándar de carga del mercado de destino.',
    },
  },
  geely: {
    ar: {
      whyConsider:
        'تمنح تشكيلة Geely من سيارات SUV — بما فيها Monjaro وCoolray — المشترين المصدرين خيارات بنزين في فئتي المتوسط والمدمج.',
      chinaPosition:
        'Geely Auto شركة سيارات صينية كبرى بتشكيلة واسعة من سيارات الركاب وحضور راسخ في عدة أسواق عالمية.',
      exportConsideration:
        'تُباع بعض موديلات Geely بأسماء مختلفة في الخارج (مثلًا Monjaro هي Xingyue L في الصين). تأكد من الموديل التصديري المكافئ والمواصفات الإقليمية لسوقك.',
    },
    ru: {
      whyConsider:
        'Линейка внедорожников Geely — включая Monjaro и Coolray — даёт экспортным покупателям бензиновые варианты в среднеразмерном и компактном сегментах.',
      chinaPosition:
        'Geely Auto — крупный китайский автопроизводитель с широкой линейкой легковых автомобилей и присутствием на многих мировых рынках.',
      exportConsideration:
        'Некоторые модели Geely продаются за рубежом под другими названиями (например, Monjaro — это Xingyue L в Китае). Подтвердите эквивалентную экспортную модель и региональную спецификацию для вашего рынка.',
    },
    es: {
      whyConsider:
        'La gama de SUV de Geely — incluidos el Monjaro y el Coolray — ofrece a los compradores de exportación opciones de gasolina en los segmentos mediano y compacto.',
      chinaPosition:
        'Geely Auto es un gran fabricante chino con una amplia gama de turismos y una presencia consolidada en múltiples mercados globales.',
      exportConsideration:
        'Algunos modelos de Geely se venden con nombres distintos en el extranjero (por ejemplo, el Monjaro es el Xingyue L en China). Confirma el modelo de exportación equivalente y la especificación regional para tu mercado.',
    },
  },
  chery: {
    ar: {
      whyConsider:
        'تقدم Chery سيارات SUV وسيدان بنزين، بما فيها Tiggo 8 Pro ذات السبعة مقاعد — مناسبة للمشترين الذين يحتاجون سيارات أكبر أو عائلية.',
      chinaPosition:
        'Chery من أكبر مصدري السيارات في الصين، وتتوزع موديلاتها في العديد من الأسواق الناشئة.',
      exportConsideration:
        'تمتلك Chery عمليات تصدير واسعة، لكن قد تختلف نسخ السوق الصيني عن نسخ أسواق التصدير في التجهيز ومعايرة المحرك والمزايا. تحقق من النسخة المحددة لوجهتك.',
    },
    ru: {
      whyConsider:
        'Chery предлагает бензиновые внедорожники и седаны, включая 7-местный Tiggo 8 Pro — актуально для покупателей, которым нужны более крупные или семейные автомобили.',
      chinaPosition:
        'Chery — один из крупнейших экспортёров автомобилей Китая, чьи модели представлены на многих развивающихся рынках.',
      exportConsideration:
        'У Chery обширные экспортные операции, но версии для Китая и экспортных рынков могут отличаться комплектацией, настройкой двигателя и функциями. Проверьте конкретную сборку для вашей страны.',
    },
    es: {
      whyConsider:
        'Chery ofrece SUV y sedanes de gasolina, incluido el Tiggo 8 Pro de 7 plazas — relevante para compradores que necesitan vehículos más grandes o familiares.',
      chinaPosition:
        'Chery es uno de los mayores exportadores de vehículos de China, con modelos distribuidos en muchos mercados emergentes.',
      exportConsideration:
        'Chery tiene amplias operaciones de exportación, pero las variantes del mercado chino y de exportación pueden diferir en acabado, calibración del motor y características. Verifica la versión específica para tu destino.',
    },
  },
  changan: {
    ar: {
      whyConsider:
        'يغطي CS75 Plus وUNI-V من Changan فئتي SUV المتوسطة والسيدان الرياضية، وكلاهما بمحركات بنزين بشاحن توربيني.',
      chinaPosition:
        'Changan Automobile شركة سيارات صينية رائدة ذات بصمة تصدير متنامية ومبيعات محلية قوية لموديلات مثل CS75 Plus.',
      exportConsideration:
        'قد تختلف موديلات Changan في السوق الصيني عن النسخ الخارجية في المواصفات والتسمية. تأكد من الاعتماد والنسخة المحددة لسوقك المستهدف.',
    },
    ru: {
      whyConsider:
        'CS75 Plus и UNI-V от Changan покрывают сегменты среднеразмерного внедорожника и спортивного седана, оба с турбированными бензиновыми двигателями.',
      chinaPosition:
        'Changan Automobile — ведущий китайский автопроизводитель с растущим экспортным присутствием и сильными внутренними продажами таких моделей, как CS75 Plus.',
      exportConsideration:
        'Модели Changan для китайского рынка могут отличаться от зарубежных версий по спецификации и названию. Подтвердите омологацию и точную версию для целевого рынка.',
    },
    es: {
      whyConsider:
        'El CS75 Plus y el UNI-V de Changan cubren los segmentos de SUV mediano y sedán deportivo, ambos con motores de gasolina turboalimentados.',
      chinaPosition:
        'Changan Automobile es un fabricante chino líder con una creciente huella exportadora y fuertes ventas nacionales de modelos como el CS75 Plus.',
      exportConsideration:
        'Los modelos Changan del mercado chino pueden diferir de las versiones extranjeras en especificación y denominación. Confirma la homologación y la variante exacta para tu mercado.',
    },
  },
  gac: {
    ar: {
      whyConsider:
        'إن Trumpchi GS4 من GAC سيارة SUV مدمجة بنزين — فئة شائعة للمشترين الذين يستوردون سيارات SUV مستعملة ميسورة من الصين.',
      chinaPosition:
        'تنتج GAC Motor تشكيلة SUV من Trumpchi، بما فيها GS4، مع مبيعات في عدة أسواق خارجية.',
      exportConsideration:
        'قد تختلف علامة Trumpchi من GAC وأسماء الموديلات بين الصين وأسواق التصدير. تأكد من الموديل المكافئ ومتطلبات الوجهة المحددة.',
    },
    ru: {
      whyConsider:
        'Trumpchi GS4 от GAC — компактный бензиновый внедорожник, распространённый сегмент для покупателей доступных подержанных SUV из Китая.',
      chinaPosition:
        'GAC Motor выпускает линейку внедорожников Trumpchi, включая GS4, с продажами на нескольких зарубежных рынках.',
      exportConsideration:
        'Названия бренда Trumpchi и моделей GAC могут отличаться в Китае и на экспортных рынках. Подтвердите эквивалентную модель и требования конкретной страны.',
    },
    es: {
      whyConsider:
        'El Trumpchi GS4 de GAC es un SUV compacto de gasolina — un segmento habitual para compradores que buscan SUV usados asequibles desde China.',
      chinaPosition:
        'GAC Motor produce la gama de SUV Trumpchi, incluido el GS4, con ventas en varios mercados extranjeros.',
      exportConsideration:
        'La marca Trumpchi y los nombres de los modelos de GAC pueden variar entre China y los mercados de exportación. Confirma el modelo equivalente y los requisitos del destino.',
    },
  },
  'great-wall': {
    ar: {
      whyConsider:
        'إن Haval H6 سيارة SUV مدمجة طويلة العمر وعالية الإنتاج — نقطة مرجعية مألوفة للمشترين الباحثين عن SUV بنزين مجربة.',
      chinaPosition:
        'كانت علامة Haval من Great Wall Motor، وخاصة H6، من أطول خطوط SUV عمرًا وأعلاها إنتاجًا في الصين.',
      exportConsideration:
        'قد تختلف موديلات Haval المباعة في الخارج عن نسخ السوق الصيني في التجهيز والاعتماد. تحقق من جهة القيادة والتجهيز والامتثال الإقليمي.',
    },
    ru: {
      whyConsider:
        'Haval H6 — долго выпускаемый массовый компактный внедорожник, знакомый ориентир для покупателей проверенного бензинового SUV.',
      chinaPosition:
        'Бренд Haval компании Great Wall Motor, и особенно H6, — одна из самых долго выпускаемых и массовых линеек внедорожников в Китае.',
      exportConsideration:
        'Модели Haval за рубежом могут отличаться от китайских версий оснащением и омологацией. Проверьте сторону руля, комплектацию и региональное соответствие.',
    },
    es: {
      whyConsider:
        'El Haval H6 es un SUV compacto de gran volumen y larga trayectoria — un punto de referencia familiar para compradores que buscan un SUV de gasolina probado.',
      chinaPosition:
        'La marca Haval de Great Wall Motor, y el H6 en particular, ha sido una de las líneas de SUV más longevas y de mayor volumen de China.',
      exportConsideration:
        'Los modelos Haval vendidos en el extranjero pueden diferir de las versiones chinas en equipamiento y homologación. Verifica el lado de conducción, el acabado y el cumplimiento regional.',
    },
  },
  nio: {
    ar: {
      whyConsider:
        'إن ES6 من NIO سيارة SUV كهربائية فاخرة بدفع رباعي بمحركين — مناسبة للمشترين الباحثين عن سيارات كهربائية بمواصفات أعلى مع إمكانية تبديل البطارية.',
      chinaPosition:
        'NIO علامة سيارات كهربائية صينية فاخرة تركز على سيارات SUV والسيدان الكهربائية، مع مبيعات في أسواق أوروبية وشرق أوسطية مختارة.',
      exportConsideration:
        'نظام تبديل البطارية والشحن من NIO خاص بمناطق معينة؛ وقد تحتاج وحدات التصدير إلى دعم شحن وبرمجيات مختلف. تأكد من التوافق مع وجهتك.',
    },
    ru: {
      whyConsider:
        'ES6 от NIO — премиальный электрический внедорожник с полным приводом на двух моторах, актуальный для покупателей EV более высокого класса с возможностью замены батареи.',
      chinaPosition:
        'NIO — премиальный китайский бренд электромобилей, специализирующийся на электрических внедорожниках и седанах, с продажами на отдельных рынках Европы и Ближнего Востока.',
      exportConsideration:
        'Экосистема замены батареи и зарядки NIO зависит от региона; экспортным машинам может потребоваться другая зарядка и программная поддержка. Подтвердите совместимость с вашей страной.',
    },
    es: {
      whyConsider:
        'El ES6 de NIO es un SUV eléctrico premium con tracción total de dos motores — relevante para compradores que buscan EV de mayor especificación con intercambio de batería.',
      chinaPosition:
        'NIO es una marca china premium de vehículos eléctricos centrada en SUV y sedanes eléctricos, con ventas en mercados seleccionados de Europa y Oriente Medio.',
      exportConsideration:
        'El ecosistema de intercambio de batería y carga de NIO es específico de cada región; las unidades de exportación pueden requerir un soporte de carga y software distinto. Confirma la compatibilidad con tu destino.',
    },
  },
  xpeng: {
    ar: {
      whyConsider:
        'إن G6 من XPeng سيارة SUV كهربائية متوسطة الحجم على منصة 800V بشحن سريع — تهم المشترين الذين يولون الأولوية لأداء شحن المركبات الكهربائية.',
      chinaPosition:
        'تنتج XPeng سيارات كهربائية مثل G6، مع حضور متوسع في أوروبا ومناطق أخرى.',
      exportConsideration:
        'قد تختلف مركبات XPeng في السوق الصيني عن نسخ التصدير في الشحن والبرمجيات ومزايا مساعدة السائق. تأكد من الاعتماد الإقليمي وتوفر المزايا.',
    },
    ru: {
      whyConsider:
        'G6 от XPeng — среднеразмерный электрический внедорожник на платформе 800 В с быстрой зарядкой, интересен покупателям, для которых важна скорость зарядки EV.',
      chinaPosition:
        'XPeng выпускает электромобили, такие как G6, с расширяющимся присутствием в Европе и других регионах.',
      exportConsideration:
        'Автомобили XPeng для китайского рынка могут отличаться от экспортных версий зарядкой, программным обеспечением и функциями помощи водителю. Подтвердите региональную омологацию и доступность функций.',
    },
    es: {
      whyConsider:
        'El G6 de XPeng es un SUV eléctrico mediano sobre una plataforma de 800 V con carga rápida — de interés para compradores que priorizan el rendimiento de carga de los EV.',
      chinaPosition:
        'XPeng produce vehículos eléctricos como el G6, con una presencia creciente en Europa y otras regiones.',
      exportConsideration:
        'Los vehículos XPeng del mercado chino pueden diferir de las versiones de exportación en carga, software y funciones de asistencia al conductor. Confirma la homologación regional y la disponibilidad de funciones.',
    },
  },
};

export function getBrandKnowledge(slug: string, locale: string): BrandKnowledge {
  if (locale === 'ar' || locale === 'ru' || locale === 'es') {
    const l = BRAND_KNOWLEDGE_L10N[slug]?.[locale];
    if (l) return l;
  }
  return (
    BRAND_KNOWLEDGE_EN[slug] ?? {
      whyConsider: '',
      chinaPosition: '',
      exportConsideration: '',
    }
  );
}
