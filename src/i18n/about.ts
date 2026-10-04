import type { L10n } from './l10n';

// About page. Ten sections plus a three-way information distinction
// (platform information / vehicle-specific verified information / official
// destination-country requirements). No exaggeration of size, coverage or
// capability.

export interface AboutSection {
  heading: L10n;
  paragraphs: L10n[];
}

export interface AboutDistinction {
  heading: L10n;
  text: L10n;
}

export const ABOUT_PAGE: {
  title: L10n;
  description: L10n;
  h1: L10n;
  intro: L10n;
  sections: AboutSection[];
  distinctionHeading: L10n;
  distinctionIntro: L10n;
  distinctions: AboutDistinction[];
} = {
  title: {
    en: 'About — China Used Car Export',
    ar: 'من نحن — تصدير السيارات المستعملة من الصين',
    ru: 'О нас — Экспорт подержанных автомобилей из Китая',
    es: 'Nosotros — Exportación de coches usados de China',
  },
  description: {
    en: 'What China Used Auto Hub is, who it serves, how vehicle information is collected and verified, and how sourcing works.',
    ar: 'ما هي China Used Auto Hub، ولمن تخدم، وكيف تُجمع معلومات المركبات وتُتحقق منها، وكيف يعمل التوريد.',
    ru: 'Что такое China Used Auto Hub, кому она служит, как собирается и проверяется информация об автомобилях и как работает подбор.',
    es: 'Qué es China Used Auto Hub, a quién sirve, cómo se recopila y verifica la información de los vehículos y cómo funciona el abastecimiento.',
  },
  h1: {
    en: 'About',
    ar: 'من نحن',
    ru: 'О нас',
    es: 'Nosotros',
  },
  intro: {
    en: 'China Used Auto Hub is a commercial platform for sourcing used and near-new vehicles from China\'s domestic market for export. This page explains what the platform is, who it serves, how information is handled, and what it does and does not guarantee.',
    ar: 'China Used Auto Hub منصة تجارية لاستيراد السيارات المستعملة وشبه الجديدة من السوق المحلي الصيني للتصدير. تشرح هذه الصفحة ما هي المنصة، ولمن تخدم، وكيف تُعالج المعلومات، وما الذي تضمنه وما لا تضمنه.',
    ru: 'China Used Auto Hub — коммерческая платформа для подбора подержанных и почти новых автомобилей на внутреннем рынке Китая для экспорта. На этой странице объясняется, что такое платформа, кому она служит, как обрабатывается информация, и что она гарантирует и чего не гарантирует.',
    es: 'China Used Auto Hub es una plataforma comercial para el abastecimiento de vehículos usados y seminuevos del mercado interno chino para exportación. Esta página explica qué es la plataforma, a quién sirve, cómo se gestiona la información y qué garantiza y qué no.',
  },
  sections: [
    {
      heading: {
        en: 'What China Used Auto Hub is',
        ar: 'ما هي China Used Auto Hub',
        ru: 'Что такое China Used Auto Hub',
        es: 'Qué es China Used Auto Hub',
      },
      paragraphs: [
        {
          en: 'China Used Auto Hub is a commercial platform for sourcing used and near-new vehicles from China\'s domestic market for export. We help overseas dealers, importers, wholesalers and professional buyers find vehicles, compare specifications, request quotes and source specific vehicles.',
          ar: 'China Used Auto Hub منصة تجارية لاستيراد السيارات المستعملة وشبه الجديدة من السوق المحلي الصيني للتصدير. نساعد الوكلاء والمستوردين وتجار الجملة والمشترين المحترفين في الخارج على العثور على السيارات ومقارنة المواصفات وطلب عروض الأسعار وتوريد سيارات محددة.',
          ru: 'China Used Auto Hub — коммерческая платформа для подбора подержанных и почти новых автомобилей на внутреннем рынке Китая для экспорта. Мы помогаем зарубежным дилерам, импортёрам, оптовикам и профессиональным покупателям находить автомобили, сравнивать характеристики, запрашивать цены и подбирать конкретные автомобили.',
          es: 'China Used Auto Hub es una plataforma comercial para el abastecimiento de vehículos usados y seminuevos del mercado interno chino para exportación. Ayudamos a concesionarios, importadores, mayoristas y compradores profesionales en el extranjero a encontrar vehículos, comparar especificaciones, solicitar cotizaciones y abastecer vehículos concretos.',
        },
        {
          en: 'We are not a vehicle manufacturer, a statutory inspection body, a customs broker, a legal adviser or a shipping carrier. Those functions are performed by third parties.',
          ar: 'لسنا مصنّع سيارات ولا جهة فحص رسمية ولا وسيطاً جمركياً ولا مستشاراً قانونياً ولا ناقلاً بحرياً. يؤدي تلك الوظائف أطراف ثالثة.',
          ru: 'Мы не являемся автопроизводителем, органом обязательного осмотра, таможенным брокером, юридическим консультантом или перевозчиком. Эти функции выполняют третьи стороны.',
          es: 'No somos un fabricante de vehículos, un organismo de inspección reglamentaria, un agente de aduanas, un asesor legal ni un transportista. Esas funciones las realizan terceros.',
        },
      ],
    },
    {
      heading: {
        en: 'Who it serves',
        ar: 'لمن تخدم',
        ru: 'Кому она служит',
        es: 'A quién sirve',
      },
      paragraphs: [
        {
          en: 'The platform is built for professional buyers: overseas used-car dealers, vehicle importers, wholesalers, fleet buyers and sourcing agents who buy vehicles for a destination market.',
          ar: 'صُممت المنصة للمشترين المحترفين: تجار السيارات المستعملة في الخارج ومستوردو المركبات وتجار الجملة ومشترو الأساطيل ووكلاء التوريد الذين يشترون مركبات لسوق وجهة.',
          ru: 'Платформа создана для профессиональных покупателей: зарубежных дилеров подержанных автомобилей, импортёров, оптовиков, покупателей автопарков и агентов по подбору, которые покупают автомобили для целевого рынка.',
          es: 'La plataforma está pensada para compradores profesionales: concesionarios de usados en el extranjero, importadores de vehículos, mayoristas, compradores de flotas y agentes de abastecimiento que compran vehículos para un mercado de destino.',
        },
      ],
    },
    {
      heading: {
        en: 'What information the platform provides',
        ar: 'ما المعلومات التي توفرها المنصة',
        ru: 'Какую информацию предоставляет платформа',
        es: 'Qué información proporciona la plataforma',
      },
      paragraphs: [
        {
          en: 'The platform publishes vehicle inventory (listings with condition, mileage, price and status), model-level specifications on the Vehicle Data sub-site, destination-market information on the Market sub-site, and import calculation tools on the Tools sub-site.',
          ar: 'تنشر المنصة مخزون المركبات (إدراجات بالحالة والمسافة والسعر والحالة)، ومواصفات على مستوى الموديل في موقع البيانات الفرعي، ومعلومات أسواق الوجهة في موقع السوق الفرعي، وأدوات حساب الاستيراد في موقع الأدوات الفرعي.',
          ru: 'Платформа публикует каталог автомобилей (объявления с состоянием, пробегом, ценой и статусом), характеристики на уровне модели на подсайте данных, информацию о рынках назначения на подсайте рынков и инструменты расчёта импорта на подсайте инструментов.',
          es: 'La plataforma publica inventario de vehículos (anuncios con estado, kilometraje, precio y estado), especificaciones a nivel de modelo en el subsitio de datos, información de mercados de destino en el subsitio de mercado y herramientas de cálculo de importación en el subsitio de herramientas.',
        },
      ],
    },
    {
      heading: {
        en: 'How vehicle information is collected',
        ar: 'كيف تُجمع معلومات المركبات',
        ru: 'Как собирается информация об автомобилях',
        es: 'Cómo se recopila la información del vehículo',
      },
      paragraphs: [
        {
          en: 'We collect vehicle information from the sources we work with — sellers, dealers and data providers in China\'s market. Each listing records what we received and where it came from.',
          ar: 'نجمع معلومات المركبات من المصادر التي نتعامل معها — البائعون والتجار ومزودو البيانات في السوق الصيني. يسجل كل إعلان ما استلمناه ومن أين جاء.',
          ru: 'Мы собираем информацию об автомобилях из источников, с которыми работаем, — продавцов, дилеров и поставщиков данных на китайском рынке. В каждом объявлении фиксируется, что мы получили и откуда.',
          es: 'Recopilamos la información de los vehículos de las fuentes con las que trabajamos: vendedores, concesionarios y proveedores de datos del mercado chino. Cada anuncio registra lo que recibimos y de dónde procede.',
        },
        {
          en: 'We do not generate or guess specifications, condition or history. Where we do not hold a detail, we mark it unavailable.',
          ar: 'لا نولّد أو نخمّن المواصفات أو الحالة أو السجل. عندما لا نحتفظ بتفصيل، نعلّمه بأنه غير متوفر.',
          ru: 'Мы не выдумываем и не угадываем характеристики, состояние или историю. Если у нас нет какой-то детали, мы помечаем её как недоступную.',
          es: 'No generamos ni adivinamos especificaciones, estado o historial. Cuando no tenemos un detalle, lo marcamos como no disponible.',
        },
      ],
    },
    {
      heading: {
        en: 'What information is verified',
        ar: 'ما المعلومات التي تُتحقق منها',
        ru: 'Какая информация проверяется',
        es: 'Qué información se verifica',
      },
      paragraphs: [
        {
          en: 'A detail is marked "Verified" only when it has been confirmed against a reliable source or document we actually hold — for example, a VIN or registration document. Most listing details are seller-provided or source-backed and are marked accordingly.',
          ar: 'يُعلَّم التفصيل بعلامة «موثَّق» فقط عندما يُؤكد من مصدر موثوق أو وثيقة نحتفظ بها فعلاً — مثل رقم الهيكل (VIN) أو وثيقة التسجيل. معظم تفاصيل الإدراج مقدَّمة من البائع أو مدعومة بمصدر وتُعلَّم وفق ذلك.',
          ru: 'Деталь помечается «Подтверждено» только при подтверждении надёжным источником или документом, который у нас действительно есть, — например, VIN или документом о регистрации. Большинство деталей объявления предоставлены продавцом или подтверждены источником и помечаются соответственно.',
          es: 'Un detalle se marca «Verificado» solo cuando se ha confirmado con una fuente fiable o un documento que realmente tenemos; por ejemplo, un VIN o un documento de matriculación. La mayoría de los detalles de un anuncio son facilitados por el vendedor o respaldados por una fuente y se marcan en consecuencia.',
        },
      ],
    },
    {
      heading: {
        en: 'What information may require confirmation',
        ar: 'ما المعلومات التي قد تتطلب تأكيداً',
        ru: 'Какая информация может требовать подтверждения',
        es: 'Qué información puede requerir confirmación',
      },
      paragraphs: [
        {
          en: 'Availability, price, condition and destination requirements may require confirmation with the source or the destination authorities. Regulatory and tax data on our Market sub-site is general guidance and must be verified with the destination country before trading.',
          ar: 'قد يتطلب التوفر والسعر والحالة ومتطلبات الوجهة تأكيداً مع المصدر أو سلطات الوجهة. البيانات التنظيمية والضريبية في موقع السوق الفرعي لدينا إرشادات عامة ويجب التحقق منها مع بلد الوجهة قبل التعامل.',
          ru: 'Наличие, цена, состояние и требования страны назначения могут требовать подтверждения у источника или органов страны назначения. Нормативные и налоговые данные на нашем рыночном подсайте являются общим руководством и должны проверяться в стране назначения перед сделкой.',
          es: 'La disponibilidad, el precio, el estado y los requisitos del destino pueden requerir confirmación con la fuente o las autoridades del destino. Los datos regulatorios y fiscales de nuestro subsitio de mercado son orientación general y deben verificarse con el país de destino antes de operar.',
        },
      ],
    },
    {
      heading: {
        en: 'How sourcing works',
        ar: 'كيف يعمل التوريد',
        ru: 'Как работает подбор',
        es: 'Cómo funciona el abastecimiento',
      },
      paragraphs: [
        {
          en: 'A buyer describes their requirements — brand, model, year, budget, quantity and destination. We search current inventory first, then look for candidate vehicles through our sourcing network and present them with the information we hold. Availability and price are confirmed before any commitment.',
          ar: 'يصف المشتري متطلباته — العلامة والموديل والسنة والميزانية والكمية والوجهة. نبحث أولاً في المخزون الحالي، ثم نبحث عن مركبات مرشحة عبر شبكة التوريد لدينا ونعرضها مع المعلومات التي نحتفظ بها. يُؤكد التوفر والسعر قبل أي التزام.',
          ru: 'Покупатель описывает свои требования — марку, модель, год, бюджет, количество и страну назначения. Сначала мы проверяем текущий каталог, затем ищем автомобили-кандидаты через нашу сеть поставок и показываем их с имеющейся информацией. Наличие и цена подтверждаются до каких-либо обязательств.',
          es: 'El comprador describe sus requisitos: marca, modelo, año, presupuesto, cantidad y destino. Primero buscamos en el inventario actual, luego buscamos vehículos candidatos a través de nuestra red de abastecimiento y los presentamos con la información que tenemos. La disponibilidad y el precio se confirman antes de cualquier compromiso.',
        },
      ],
    },
    {
      heading: {
        en: 'What the platform does NOT guarantee',
        ar: 'ما الذي لا تضمنه المنصة',
        ru: 'Что платформа НЕ гарантирует',
        es: 'Qué NO garantiza la plataforma',
      },
      paragraphs: [
        {
          en: 'The platform does not guarantee availability of a specific vehicle, does not guarantee that every vehicle has been independently inspected, and does not provide legal, tax or import advice. It does not control customs, destination registration, shipping schedules or destination authorities.',
          ar: 'لا تضمن المنصة توفر مركبة محددة، ولا تضمن أن كل مركبة خضعت لفحص مستقل، ولا تقدم نصيحة قانونية أو ضريبية أو استيرادية. كما لا تتحكم في الجمارك أو تسجيل الوجهة أو جداول الشحن أو سلطات الوجهة.',
          ru: 'Платформа не гарантирует наличие конкретного автомобиля, не гарантирует, что каждый автомобиль был независимо осмотрен, и не даёт юридических, налоговых или импортных консультаций. Она не контролирует таможню, регистрацию в стране назначения, графики доставки или органы страны назначения.',
          es: 'La plataforma no garantiza la disponibilidad de un vehículo concreto, no garantiza que todos los vehículos hayan sido inspeccionados de forma independiente y no ofrece asesoramiento legal, fiscal o de importación. No controla las aduanas, el registro en destino, los calendarios de envío ni las autoridades de destino.',
        },
        {
          en: 'We do not publish sales figures, customer counts, certifications or rankings that we cannot substantiate.',
          ar: 'لا ننشر أرقام المبيعات أو عدد العملاء أو الشهادات أو التصنيفات التي لا يمكننا إثباتها.',
          ru: 'Мы не публикуем показатели продаж, количество клиентов, сертификаты или рейтинги, которые не можем подтвердить.',
          es: 'No publicamos cifras de ventas, número de clientes, certificaciones ni rankings que no podamos respaldar.',
        },
      ],
    },
    {
      heading: {
        en: 'Relationship between inventory, data and market information',
        ar: 'العلاقة بين المخزون والبيانات ومعلومات السوق',
        ru: 'Связь между каталогом, данными и рыночной информацией',
        es: 'Relación entre inventario, datos e información de mercado',
      },
      paragraphs: [
        {
          en: 'The platform keeps five concepts separate: vehicle inventory (a specific vehicle for sale), vehicle knowledge (model/generation/trim specifications on the Data sub-site), market intelligence (destination rules on the Market sub-site), decision tools (calculators), and commercial services. A vehicle listing links to its model data, and a model links to relevant markets and tools.',
          ar: 'تفصل المنصة بين خمسة مفاهيم: مخزون المركبات (مركبة محددة للبيع)، ومعرفة المركبات (مواصفات الموديل/الجيل/الطراز في موقع البيانات الفرعي)، واستخبارات السوق (قواعد الوجهة في موقع السوق الفرعي)، وأدوات القرار (الحاسبات)، والخدمات التجارية. يرتبط إدراج المركبة ببيانات موديلها، ويرتبط الموديل بالأسواق والأدوات ذات الصلة.',
          ru: 'Платформа разделяет пять понятий: каталог автомобилей (конкретный автомобиль на продажу), знания об автомобилях (характеристики модели/поколения/комплектации на подсайте данных), рыночную аналитику (правила стран назначения на подсайте рынков), инструменты решений (калькуляторы) и коммерческие услуги. Объявление автомобиля ссылается на данные его модели, а модель — на соответствующие рынки и инструменты.',
          es: 'La plataforma separa cinco conceptos: inventario de vehículos (un vehículo concreto en venta), conocimiento de vehículos (especificaciones de modelo/generación/acabado en el subsitio de datos), inteligencia de mercado (reglas de destino en el subsitio de mercado), herramientas de decisión (calculadoras) y servicios comerciales. Un anuncio enlaza con los datos de su modelo, y un modelo enlaza con los mercados y herramientas relevantes.',
        },
      ],
    },
    {
      heading: {
        en: 'Contact and commercial inquiry path',
        ar: 'التواصل ومسار الاستفسار التجاري',
        ru: 'Контакт и путь коммерческого запроса',
        es: 'Contacto y vía de consulta comercial',
      },
      paragraphs: [
        {
          en: 'To enquire about a vehicle or request a quote, use the Request a Car form, email us, or message us on WhatsApp. We respond with availability, price and export information.',
          ar: 'للاستفسار عن مركبة أو طلب عرض سعر، استخدم نموذج «اطلب سيارة»، أو راسلنا بالبريد الإلكتروني، أو تواصل معنا عبر واتساب. نرد عليك بمعلومات التوفر والسعر والتصدير.',
          ru: 'Чтобы узнать об автомобиле или запросить цену, воспользуйтесь формой «Заказать автомобиль», напишите на почту или в WhatsApp. Мы ответим с информацией о наличии, цене и экспорте.',
          es: 'Para consultar sobre un vehículo o solicitar una cotización, use el formulario «Pedir un coche», escríbanos por correo o contáctenos por WhatsApp. Respondemos con disponibilidad, precio e información de exportación.',
        },
      ],
    },
  ],
  distinctionHeading: {
    en: 'Three kinds of information',
    ar: 'ثلاثة أنواع من المعلومات',
    ru: 'Три вида информации',
    es: 'Tres tipos de información',
  },
  distinctionIntro: {
    en: 'This website contains three distinct kinds of information, and we label them so you can tell them apart:',
    ar: 'يحتوي هذا الموقع على ثلاثة أنواع مختلفة من المعلومات، ونعلّمها حتى تتمكن من التمييز بينها:',
    ru: 'Этот сайт содержит три разных вида информации, и мы помечаем их, чтобы вы могли их различать:',
    es: 'Este sitio web contiene tres tipos distintos de información, y los etiquetamos para que pueda distinguirlos:',
  },
  distinctions: [
    {
      heading: {
        en: 'Platform information',
        ar: 'معلومات المنصة',
        ru: 'Информация о платформе',
        es: 'Información de la plataforma',
      },
      text: {
        en: 'How the platform works, what services it offers, and how information is handled. This is about the platform itself, not about any specific vehicle.',
        ar: 'كيف تعمل المنصة، وما الخدمات التي تقدمها، وكيف تُعالج المعلومات. هذا يتعلق بالمنصة نفسها، لا بأي مركبة محددة.',
        ru: 'Как работает платформа, какие услуги предлагает и как обрабатывается информация. Это о самой платформе, а не о конкретном автомобиле.',
        es: 'Cómo funciona la plataforma, qué servicios ofrece y cómo se gestiona la información. Trata de la propia plataforma, no de ningún vehículo concreto.',
      },
    },
    {
      heading: {
        en: 'Vehicle-specific verified information',
        ar: 'معلومات موثقة خاصة بالمركبة',
        ru: 'Проверенная информация о конкретном автомобиле',
        es: 'Información verificada específica del vehículo',
      },
      text: {
        en: 'Details about a specific vehicle — identity, VIN, documents, condition, mileage and price — each marked with its status. Only details confirmed against evidence we hold are marked "Verified".',
        ar: 'تفاصيل عن مركبة محددة — الهوية ورقم الهيكل والوثائق والحالة والمسافة والسعر — وكل منها معلَّم بحالته. تُعلَّم بعلامة «موثَّق» فقط التفاصيل المؤكدة بأدلة نحتفظ بها.',
        ru: 'Детали о конкретном автомобиле — идентичность, VIN, документы, состояние, пробег и цена — каждая со своей меткой статуса. «Подтверждено» помечаются только детали, подтверждённые имеющимися у нас доказательствами.',
        es: 'Detalles sobre un vehículo concreto — identidad, VIN, documentos, estado, kilometraje y precio — cada uno con su estado. Solo se marcan «Verificado» los detalles confirmados con evidencia que tenemos.',
      },
    },
    {
      heading: {
        en: 'Official destination-country requirements',
        ar: 'متطلبات بلد الوجهة الرسمية',
        ru: 'Официальные требования страны назначения',
        es: 'Requisitos oficiales del país de destino',
      },
      text: {
        en: 'Import rules, duties and taxes for a destination market. These are general guidance sourced from authorities, not legal advice; confirm them with the destination-country authorities before trading.',
        ar: 'قواعد الاستيراد والرسوم والضرائب لسوق الوجهة. هذه إرشادات عامة مستقاة من السلطات، وليست نصيحة قانونية؛ أكّدها مع سلطات بلد الوجهة قبل التعامل.',
        ru: 'Правила импорта, пошлины и налоги для рынка назначения. Это общее руководство на основе данных органов, а не юридическая консультация; подтверждайте их в органах страны назначения перед сделкой.',
        es: 'Reglas de importación, aranceles e impuestos para un mercado de destino. Son orientación general basada en fuentes oficiales, no asesoramiento legal; confírmelas con las autoridades del país de destino antes de operar.',
      },
    },
  ],
};
