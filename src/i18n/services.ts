import type { L10n } from './l10n';

// Export services cluster. Each service answers the six questions required by
// PHASE 12: what it is, who it is for, what is included / not included, what
// information is required, and what happens next. Capabilities are expressed
// truthfully — availability depends on vehicle / destination / buyer requirements.

export interface ServiceContent {
  slug: string;
  title: L10n;
  description: L10n;
  h1: L10n;
  intro: L10n;
  summary: L10n;
  whatIs: L10n;
  whoFor: L10n;
  included: L10n[];
  notIncluded: L10n[];
  infoRequired: L10n[];
  nextSteps: L10n[];
}

export const SERVICE_SECTION_HEADINGS: Record<string, L10n> = {
  whatIs: {
    en: 'What is the service',
    ar: 'ما هي الخدمة',
    ru: 'Что это за услуга',
    es: 'Qué es el servicio',
  },
  whoFor: {
    en: 'Who is it for',
    ar: 'لمن هذه الخدمة',
    ru: 'Для кого эта услуга',
    es: 'Para quién es',
  },
  included: {
    en: 'What is included',
    ar: 'ما الذي تتضمنه الخدمة',
    ru: 'Что входит',
    es: 'Qué incluye',
  },
  notIncluded: {
    en: 'What is not included',
    ar: 'ما الذي لا تتضمنه الخدمة',
    ru: 'Что не входит',
    es: 'Qué no incluye',
  },
  infoRequired: {
    en: 'What information is required',
    ar: 'ما المعلومات المطلوبة',
    ru: 'Какая информация требуется',
    es: 'Qué información se necesita',
  },
  nextSteps: {
    en: 'What happens next',
    ar: 'ما الخطوة التالية',
    ru: 'Что происходит дальше',
    es: 'Qué ocurre después',
  },
};

export const SERVICES_OVERVIEW: {
  title: L10n;
  description: L10n;
  h1: L10n;
  intro: L10n;
} = {
  title: {
    en: 'Export Services — Sourcing, Inspection & Shipping from China',
    ar: 'خدمات التصدير — التوريد والفحص والشحن من الصين',
    ru: 'Экспортные услуги — подбор, проверка и доставка из Китая',
    es: 'Servicios de exportación — abastecimiento, inspección y envío desde China',
  },
  description: {
    en: 'Export services for sourcing used vehicles from China: vehicle sourcing, inspection, export documentation, shipping and port handling.',
    ar: 'خدمات تصدير لتوريد السيارات المستعملة من الصين: توريد المركبات والفحص ووثائق التصدير والشحن والمناولة في الموانئ.',
    ru: 'Экспортные услуги по подбору подержанных автомобилей из Китая: подбор, проверка, экспортная документация, доставка и портовая обработка.',
    es: 'Servicios de exportación para abastecer vehículos usados desde China: abastecimiento, inspección, documentación de exportación, envío y gestión portuaria.',
  },
  h1: {
    en: 'Export Services',
    ar: 'خدمات التصدير',
    ru: 'Экспортные услуги',
    es: 'Servicios de exportación',
  },
  intro: {
    en: 'Services that support buying and exporting a used vehicle from China — from sourcing to documentation, shipping and port handling. Availability of each service depends on the vehicle, the destination and buyer requirements.',
    ar: 'خدمات تدعم شراء وتصدير سيارة مستعملة من الصين — من التوريد إلى الوثائق والشحن والمناولة في الموانئ. يعتمد توفر كل خدمة على المركبة والوجهة ومتطلبات المشتري.',
    ru: 'Услуги, поддерживающие покупку и экспорт подержанного автомобиля из Китая — от подбора до документации, доставки и портовой обработки. Доступность каждой услуги зависит от автомобиля, страны назначения и требований покупателя.',
    es: 'Servicios que apoyan la compra y exportación de un vehículo usado desde China — del abastecimiento a la documentación, el envío y la gestión portuaria. La disponibilidad de cada servicio depende del vehículo, el destino y los requisitos del comprador.',
  },
};

export const SERVICES: ServiceContent[] = [
  {
    slug: 'vehicle-sourcing',
    title: {
      en: 'Vehicle Sourcing from China — Find Used Cars for Export',
      ar: 'توريد المركبات من الصين — ابحث عن سيارات مستعملة للتصدير',
      ru: 'Подбор автомобилей из Китая — поиск подержанных машин на экспорт',
      es: 'Abastecimiento de vehículos desde China — encuentre coches usados para exportar',
    },
    description: {
      en: 'How we help buyers source used and near-new vehicles from China\'s domestic market, and the information we need to start.',
      ar: 'كيف نساعد المشترين على توريد سيارات مستعملة وشبه جديدة من السوق المحلي الصيني، والمعلومات التي نحتاجها للبدء.',
      ru: 'Как мы помогаем покупателям подбирать подержанные и почти новые автомобили на внутреннем рынке Китая и какая информация нужна для начала.',
      es: 'Cómo ayudamos a los compradores a abastecer vehículos usados y seminuevos del mercado interno chino, y la información que necesitamos para empezar.',
    },
    h1: {
      en: 'Vehicle Sourcing from China',
      ar: 'توريد المركبات من الصين',
      ru: 'Подбор автомобилей из Китая',
      es: 'Abastecimiento de vehículos desde China',
    },
    intro: {
      en: 'Vehicle sourcing is how we help you find specific used or near-new vehicles in China\'s domestic market. Whether a vehicle is already in our inventory or needs to be located on request, we start from your requirements.',
      ar: 'توريد المركبات هو كيف نساعدك في العثور على سيارات مستعملة أو شبه جديدة محددة في السوق المحلي الصيني. سواء كانت المركبة موجودة بالفعل في مخزوننا أو يلزم البحث عنها عند الطلب، نبدأ من متطلباتك.',
      ru: 'Подбор автомобилей — это то, как мы помогаем вам находить конкретные подержанные или почти новые автомобили на внутреннем рынке Китая. Есть ли автомобиль уже в нашем каталоге или его нужно искать по запросу — мы начинаем с ваших требований.',
      es: 'El abastecimiento de vehículos es cómo le ayudamos a encontrar vehículos usados o seminuevos específicos en el mercado interno chino. Tanto si el vehículo ya está en nuestro inventario como si debe localizarse bajo pedido, partimos de sus requisitos.',
    },
    summary: {
      en: 'We source specific vehicles from China\'s domestic market, starting from your requirements.',
      ar: 'نورّد مركبات محددة من السوق المحلي الصيني انطلاقاً من متطلباتك.',
      ru: 'Подбираем конкретные автомобили на внутреннем рынке Китая, исходя из ваших требований.',
      es: 'Abastecemos vehículos específicos del mercado interno chino, partiendo de sus requisitos.',
    },
    whatIs: {
      en: 'Vehicle sourcing means identifying vehicles in China\'s domestic market that match a buyer\'s requirements — brand, model, year, budget, condition and destination. We search our current inventory first, and where a specific vehicle is not listed, we look for options through our sourcing network and present candidates for your confirmation.',
      ar: 'توريد المركبات يعني تحديد المركبات في السوق المحلي الصيني التي تطابق متطلبات المشتري — العلامة والطراز والسنة والميزانية والحالة والوجهة. نبحث أولاً في مخزوننا الحالي، وحيث لا تكون المركبة المحددة مدرجة، نبحث عن خيارات عبر شبكة التوريد لدينا ونعرض المرشحين لتأكيدك.',
      ru: 'Подбор автомобилей — это поиск на внутреннем рынке Китая машин, соответствующих требованиям покупателя: марка, модель, год, бюджет, состояние и страна назначения. Сначала мы проверяем текущий каталог, а если нужной машины нет — ищем варианты через нашу сеть поставок и показываем кандидатов для вашего подтверждения.',
      es: 'Abastecer vehículos significa identificar vehículos en el mercado interno chino que coincidan con los requisitos del comprador: marca, modelo, año, presupuesto, estado y destino. Primero buscamos en nuestro inventario actual y, si el vehículo no está listado, buscamos opciones a través de nuestra red de abastecimiento y presentamos candidatos para su confirmación.',
    },
    whoFor: {
      en: 'Sourcing is for dealers, importers, wholesalers and professional buyers who want a specific vehicle or vehicle type, or who want us to recommend vehicles suitable for their market. It also suits buyers who have not yet decided on an exact model.',
      ar: 'التوريد مخصص للتجار والمستوردين وتجار الجملة والمشترين المحترفين الذين يريدون مركبة أو نوع مركبة محدداً، أو يريدون منا التوصية بمركبات مناسبة لسوقهم. كما يناسب المشترين الذين لم يقرروا بعد طرازاً محدداً.',
      ru: 'Подбор подходит дилерам, импортёрам, оптовикам и профессиональным покупателям, которым нужен конкретный автомобиль или тип автомобиля либо рекомендации по моделям для их рынка. Он также подходит покупателям, ещё не определившимся с конкретной моделью.',
      es: 'El abastecimiento es para concesionarios, importadores, mayoristas y compradores profesionales que desean un vehículo o tipo de vehículo concreto, o que quieren que les recomendemos vehículos adecuados para su mercado. También sirve a compradores que aún no han decidido un modelo exacto.',
    },
    included: [
      {
        en: 'Reviewing your requirements and clarifying anything that is unclear',
        ar: 'مراجعة متطلباتك وتوضيح أي شيء غير واضح',
        ru: 'Изучение ваших требований и уточнение неясных моментов',
        es: 'Revisar sus requisitos y aclarar cualquier aspecto poco claro',
      },
      {
        en: 'Searching our current inventory for matches',
        ar: 'البحث في مخزوننا الحالي عن مركبات مطابقة',
        ru: 'Поиск подходящих машин в нашем текущем каталоге',
        es: 'Buscar coincidencias en nuestro inventario actual',
      },
      {
        en: 'Looking for candidate vehicles that match your brief where possible',
        ar: 'البحث عن مركبات مرشحة تطابق طلبك حيثما أمكن',
        ru: 'Поиск подходящих под ваш запрос автомобилей, где это возможно',
        es: 'Buscar vehículos candidatos que coincidan con su solicitud, cuando sea posible',
      },
      {
        en: 'Presenting candidates with the information we hold (specifications, mileage, price, condition where provided)',
        ar: 'عرض المرشحين مع المعلومات المتوفرة لدينا (المواصفات والمسافة المقطوعة والسعر والحالة حيثما وردت)',
        ru: 'Показ кандидатов с имеющейся у нас информацией (характеристики, пробег, цена, состояние при наличии)',
        es: 'Presentar candidatos con la información que tenemos (especificaciones, kilometraje, precio y estado cuando se facilita)',
      },
      {
        en: 'Confirming availability with the source before you commit',
        ar: 'تأكيد التوفر مع المصدر قبل التزامك',
        ru: 'Подтверждение наличия у источника до вашего обязательства',
        es: 'Confirmar la disponibilidad con la fuente antes de que usted se comprometa',
      },
    ],
    notIncluded: [
      {
        en: 'A guarantee that a specific vehicle can be located — availability depends on the vehicle and current market supply',
        ar: 'ضمان إمكانية العثور على مركبة محددة — يعتمد التوفر على المركبة والعرض الحالي في السوق',
        ru: 'Гарантия нахождения конкретного автомобиля — наличие зависит от автомобиля и текущего предложения на рынке',
        es: 'Garantía de que se pueda localizar un vehículo concreto: la disponibilidad depende del vehículo y de la oferta actual del mercado',
      },
      {
        en: 'Fixed pricing — prices depend on the specific vehicle and are confirmed at quote time',
        ar: 'تسعير ثابت — تعتمد الأسعار على المركبة المحددة وتُؤكد عند تقديم عرض السعر',
        ru: 'Фиксированные цены — цены зависят от конкретного автомобиля и подтверждаются при расчёте',
        es: 'Precios fijos: los precios dependen del vehículo concreto y se confirman al cotizar',
      },
      {
        en: 'Purchase or payment on your behalf without your explicit confirmation',
        ar: 'الشراء أو الدفع نيابة عنك دون تأكيد صريح منك',
        ru: 'Покупка или оплата от вашего имени без вашего явного подтверждения',
        es: 'Compra o pago en su nombre sin su confirmación explícita',
      },
    ],
    infoRequired: [
      {
        en: 'Your target market or destination country',
        ar: 'سوقك المستهدف أو بلد الوجهة',
        ru: 'Ваш целевой рынок или страна назначения',
        es: 'Su mercado objetivo o país de destino',
      },
      {
        en: 'Brand, model or vehicle type (or "I don\'t know the exact model")',
        ar: 'العلامة أو الطراز أو نوع المركبة (أو "لا أعرف الطراز المحدد")',
        ru: 'Марка, модель или тип автомобиля (или «не знаю точную модель»)',
        es: 'Marca, modelo o tipo de vehículo (o «no conozco el modelo exacto»)',
      },
      {
        en: 'Year range and budget',
        ar: 'نطاق السنة والميزانية',
        ru: 'Диапазон годов и бюджет',
        es: 'Rango de año y presupuesto',
      },
      {
        en: 'Quantity',
        ar: 'الكمية',
        ru: 'Количество',
        es: 'Cantidad',
      },
      {
        en: 'Any requirements such as fuel type, condition, mileage limits or specific features',
        ar: 'أي متطلبات مثل نوع الوقود أو الحالة أو حدود المسافة المقطوعة أو مواصفات محددة',
        ru: 'Любые требования: тип топлива, состояние, лимит пробега или особые характеристики',
        es: 'Cualquier requisito, como tipo de combustible, estado, límites de kilometraje o características específicas',
      },
    ],
    nextSteps: [
      {
        en: 'You submit a request with your requirements',
        ar: 'ترسل طلباً مع متطلباتك',
        ru: 'Вы отправляете запрос со своими требованиями',
        es: 'Envía una solicitud con sus requisitos',
      },
      {
        en: 'We review and clarify your requirements',
        ar: 'نراجع متطلباتك ونوضحها',
        ru: 'Мы изучаем и уточняем ваши требования',
        es: 'Revisamos y aclaramos sus requisitos',
      },
      {
        en: 'We present candidate vehicles we can source',
        ar: 'نعرض المركبات المرشحة التي يمكننا توريدها',
        ru: 'Показываем автомобили-кандидаты, которые можем подобрать',
        es: 'Presentamos vehículos candidatos que podemos abastecer',
      },
      {
        en: 'You review, we confirm availability and provide a quote',
        ar: 'تراجع، ونحن نؤكد التوفر ونقدم عرض سعر',
        ru: 'Вы изучаете варианты, мы подтверждаем наличие и даём расчёт',
        es: 'Usted revisa; nosotros confirmamos la disponibilidad y damos una cotización',
      },
      {
        en: 'On confirmation, we proceed with export preparation',
        ar: 'عند التأكيد، نتابع تجهيز التصدير',
        ru: 'После подтверждения мы переходим к подготовке экспорта',
        es: 'Tras la confirmación, procedemos con la preparación de la exportación',
      },
    ],
  },
  {
    slug: 'vehicle-inspection',
    title: {
      en: 'Used Car Inspection in China — Vehicle Condition Information',
      ar: 'فحص السيارات المستعملة في الصين — معلومات حالة المركبة',
      ru: 'Проверка подержанных авто в Китае — информация о состоянии',
      es: 'Inspección de coches usados en China — información del estado del vehículo',
    },
    description: {
      en: 'What vehicle condition information we provide, how it is collected, and the limits of inspection availability for vehicles sourced from China.',
      ar: 'ما معلومات حالة المركبة التي نقدمها وكيف تُجمع وحدود توفر الفحص للمركبات المورّدة من الصين.',
      ru: 'Какую информацию о состоянии автомобиля мы предоставляем, как она собирается и каковы пределы доступности проверки для автомобилей из Китая.',
      es: 'Qué información sobre el estado del vehículo ofrecemos, cómo se recopila y los límites de disponibilidad de la inspección para vehículos procedentes de China.',
    },
    h1: {
      en: 'Vehicle Inspection',
      ar: 'فحص المركبات',
      ru: 'Проверка автомобилей',
      es: 'Inspección de vehículos',
    },
    intro: {
      en: 'Inspection covers the condition information we hold for a vehicle — specifications, mileage, and condition details as supplied by the source. We publish what we hold and say clearly when a detail is not available.',
      ar: 'يغطي الفحص معلومات الحالة التي نحتفظ بها للمركبة — المواصفات والمسافة المقطوعة وتفاصيل الحالة كما يوردها المصدر. ننشر ما نحتفظ به ونوضح بوضوح عندما لا يتوفر تفصيل معين.',
      ru: 'Проверка охватывает имеющуюся у нас информацию о состоянии автомобиля — характеристики, пробег и детали состояния, предоставленные источником. Мы публикуем то, что имеем, и прямо указываем, когда какая-то деталь недоступна.',
      es: 'La inspección cubre la información de estado que tenemos de un vehículo: especificaciones, kilometraje y detalles de estado según los facilita la fuente. Publicamos lo que tenemos e indicamos claramente cuando un detalle no está disponible.',
    },
    summary: {
      en: 'We present the condition information we hold for a vehicle, with clear confidence levels.',
      ar: 'نعرض معلومات الحالة التي نحتفظ بها للمركبة، مع مستويات ثقة واضحة.',
      ru: 'Предоставляем имеющуюся информацию о состоянии автомобиля с чёткими уровнями достоверности.',
      es: 'Presentamos la información de estado que tenemos de un vehículo, con niveles de confianza claros.',
    },
    whatIs: {
      en: 'Inspection is the process of gathering and presenting condition information about a vehicle — exterior, interior, engine, transmission, chassis, electrical system, battery, mileage, tires, paint, accident history and maintenance records. Inspection availability depends on the vehicle and buyer requirements; not every vehicle has a full inspection report.',
      ar: 'الفحص هو عملية جمع وعرض معلومات الحالة عن المركبة — الخارجي والداخلي والمحرك وناقل الحركة والهيكل والنظام الكهربائي والبطارية والمسافة المقطوعة والإطارات والطلاء وسجل الحوادث وسجلات الصيانة. يعتمد توفر الفحص على المركبة ومتطلبات المشتري؛ ليست كل مركبة لديها تقرير فحص كامل.',
      ru: 'Проверка — это процесс сбора и представления информации о состоянии автомобиля: кузов, салон, двигатель, трансмиссия, шасси, электрика, батарея, пробег, шины, краска, история ДТП и записи о техобслуживании. Доступность проверки зависит от автомобиля и требований покупателя; не у каждого автомобиля есть полный отчёт.',
      es: 'La inspección es el proceso de recopilar y presentar información sobre el estado de un vehículo: exterior, interior, motor, transmisión, chasis, sistema eléctrico, batería, kilometraje, neumáticos, pintura, historial de accidentes y registros de mantenimiento. La disponibilidad depende del vehículo y los requisitos del comprador; no todos los vehículos tienen un informe completo.',
    },
    whoFor: {
      en: 'Inspection information is for buyers who need to assess a vehicle\'s condition before committing — dealers and importers who must satisfy their own buyers, and buyers who want additional certainty before purchase.',
      ar: 'معلومات الفحص مخصصة للمشترين الذين يحتاجون إلى تقييم حالة المركبة قبل الالتزام — التجار والمستوردون الذين يجب أن يرضوا مشتريهم، والمشترون الذين يريدون يقيناً إضافياً قبل الشراء.',
      ru: 'Информация о проверке нужна покупателям, которым важно оценить состояние автомобиля до обязательств — дилерам и импортёрам, которые должны удовлетворить своих клиентов, и покупателям, желающим дополнительной уверенности перед покупкой.',
      es: 'La información de inspección es para compradores que necesitan evaluar el estado de un vehículo antes de comprometerse: concesionarios e importadores que deben satisfacer a sus propios clientes, y compradores que buscan mayor certeza antes de comprar.',
    },
    included: [
      {
        en: 'The condition information we hold, presented clearly with a verification level (verified, provided, seller-supplied, source-backed, or not available)',
        ar: 'معلومات الحالة التي نحتفظ بها، معروضة بوضوح مع مستوى تحقق (موثَّق أو مقدَّم أو مقدَّم من البائع أو مدعوم بمصدر أو غير متوفر)',
        ru: 'Имеющаяся информация о состоянии с чётким уровнем проверки (подтверждено, предоставлено, предоставлено продавцом, подтверждено источником или недоступно)',
        es: 'La información de estado que tenemos, presentada con claridad y con un nivel de verificación (verificado, facilitado, facilitado por el vendedor, respaldado por una fuente o no disponible)',
      },
      {
        en: 'Specifications and mileage as supplied by the source',
        ar: 'المواصفات والمسافة المقطوعة كما يوردها المصدر',
        ru: 'Характеристики и пробег, предоставленные источником',
        es: 'Especificaciones y kilometraje según los facilita la fuente',
      },
      {
        en: 'For electric vehicles, battery condition, health, capacity and diagnostic details where available',
        ar: 'للمركبات الكهربائية، حالة البطارية وصحتها وسعتها وتفاصيل التشخيص حيثما توفرت',
        ru: 'Для электромобилей — состояние батареи, её здоровье, ёмкость и данные диагностики при наличии',
        es: 'Para vehículos eléctricos, estado de la batería, salud, capacidad y detalles de diagnóstico cuando estén disponibles',
      },
    ],
    notIncluded: [
      {
        en: 'A guarantee that every vehicle has been fully inspected — inspection availability depends on the vehicle and buyer requirements',
        ar: 'ضمان أن كل مركبة خضعت لفحص كامل — يعتمد توفر الفحص على المركبة ومتطلبات المشتري',
        ru: 'Гарантия, что каждый автомобиль полностью проверен — доступность проверки зависит от автомобиля и требований покупателя',
        es: 'Garantía de que todos los vehículos han sido inspeccionados por completo: la disponibilidad depende del vehículo y los requisitos del comprador',
      },
      {
        en: 'Inspection reports we do not hold; we do not invent condition data',
        ar: 'تقارير الفحص التي لا نحتفظ بها؛ نحن لا نختلق بيانات الحالة',
        ru: 'Отчёты о проверке, которых у нас нет; мы не выдумываем данные о состоянии',
        es: 'Informes de inspección que no tenemos; no inventamos datos de estado',
      },
    ],
    infoRequired: [
      {
        en: 'The specific vehicle (or vehicle type) you are interested in',
        ar: 'المركبة المحددة (أو نوع المركبة) التي تهتم بها',
        ru: 'Конкретный автомобиль (или тип автомобиля), который вас интересует',
        es: 'El vehículo concreto (o tipo de vehículo) que le interesa',
      },
      {
        en: 'Which condition aspects matter most to you (e.g., battery health for EVs, accident history)',
        ar: 'جوانب الحالة الأكثر أهمية بالنسبة لك (مثل صحة البطارية للمركبات الكهربائية، وسجل الحوادث)',
        ru: 'Какие аспекты состояния для вас важнее всего (например, здоровье батареи для электромобилей, история ДТП)',
        es: 'Qué aspectos del estado le importan más (por ejemplo, salud de la batería en VE, historial de accidentes)',
      },
      {
        en: 'Whether you require a third-party inspection before purchase',
        ar: 'ما إذا كنت تحتاج فحصاً من طرف ثالث قبل الشراء',
        ru: 'Требуется ли вам сторонняя проверка перед покупкой',
        es: 'Si necesita una inspección de terceros antes de la compra',
      },
    ],
    nextSteps: [
      {
        en: 'Tell us the vehicle and the condition details you need',
        ar: 'أخبرنا بالمركبة وتفاصيل الحالة التي تحتاجها',
        ru: 'Сообщите нам автомобиль и нужные детали состояния',
        es: 'Indíquenos el vehículo y los detalles de estado que necesita',
      },
      {
        en: 'We confirm what information is available for that vehicle',
        ar: 'نؤكد المعلومات المتوفرة لتلك المركبة',
        ru: 'Подтверждаем, какая информация доступна по этому автомобилю',
        es: 'Confirmamos qué información está disponible para ese vehículo',
      },
      {
        en: 'Where a third-party inspection is required, we advise on options (availability depends on the vehicle)',
        ar: 'عند الحاجة إلى فحص من طرف ثالث، ننصحك بالخيارات (يعتمد التوفر على المركبة)',
        ru: 'Если требуется сторонняя проверка, консультируем по вариантам (доступность зависит от автомобиля)',
        es: 'Si se requiere una inspección de terceros, asesoramos sobre las opciones (la disponibilidad depende del vehículo)',
      },
      {
        en: 'We present the findings with the information we hold',
        ar: 'نعرض النتائج مع المعلومات التي نحتفظ بها',
        ru: 'Представляем результаты вместе с имеющейся информацией',
        es: 'Presentamos los resultados con la información que tenemos',
      },
    ],
  },
  {
    slug: 'export-documentation',
    title: {
      en: 'China Vehicle Export Documentation',
      ar: 'وثائق تصدير المركبات من الصين',
      ru: 'Экспортная документация для автомобилей из Китая',
      es: 'Documentación de exportación de vehículos desde China',
    },
    description: {
      en: 'The export documents commonly involved in exporting a used vehicle from China, and how we help prepare them.',
      ar: 'وثائق التصدير التي تُستخدم عادة في تصدير سيارة مستعملة من الصين، وكيف نساعد في تجهيزها.',
      ru: 'Экспортные документы, обычно требуемые при экспорте подержанного автомобиля из Китая, и как мы помогаем их подготовить.',
      es: 'Los documentos de exportación que suelen intervenir al exportar un vehículo usado desde China, y cómo ayudamos a prepararlos.',
    },
    h1: {
      en: 'Export Documentation',
      ar: 'وثائق التصدير',
      ru: 'Экспортная документация',
      es: 'Documentación de exportación',
    },
    intro: {
      en: 'Export documentation covers the paperwork involved in exporting a vehicle from China. Exact requirements depend on the vehicle, the export arrangement and the destination country, so we confirm them with you during the quote.',
      ar: 'تغطي وثائق التصدير الأوراق المتعلقة بتصدير مركبة من الصين. تعتمد المتطلبات الدقيقة على المركبة وترتيب التصدير وبلد الوجهة، لذا نؤكدها معك أثناء تقديم عرض السعر.',
      ru: 'Экспортная документация охватывает бумажную работу, связанную с вывозом автомобиля из Китая. Точные требования зависят от автомобиля, схемы экспорта и страны назначения, поэтому мы подтверждаем их при расчёте.',
      es: 'La documentación de exportación cubre el papeleo necesario para exportar un vehículo desde China. Los requisitos exactos dependen del vehículo, el acuerdo de exportación y el país de destino, por lo que los confirmamos con usted durante la cotización.',
    },
    summary: {
      en: 'We help prepare the export documentation your destination requires.',
      ar: 'نساعد في تجهيز وثائق التصدير التي تتطلبها وجهتك.',
      ru: 'Помогаем подготовить экспортные документы, необходимые для вашей страны назначения.',
      es: 'Ayudamos a preparar la documentación de exportación que requiere su destino.',
    },
    whatIs: {
      en: 'Export documentation is the set of documents required to move a vehicle out of China and clear it at the destination. This commonly includes a commercial invoice, packing list, vehicle documents, export documents, shipping documents, a bill of lading and customs-related documents.',
      ar: 'وثائق التصدير هي مجموعة المستندات المطلوبة لنقل مركبة خارج الصين وتخليصها في الوجهة. تشمل عادة الفاتورة التجارية وقائمة التعبئة ووثائق المركبة ووثائق التصدير ووثائق الشحن وبوليصة الشحن والوثائق الجمركية.',
      ru: 'Экспортная документация — это набор документов, необходимых для вывоза автомобиля из Китая и его таможенного оформления в стране назначения. Обычно это коммерческий инвойс, упаковочный лист, документы на автомобиль, экспортные и отгрузочные документы, коносамент и таможенные документы.',
      es: 'La documentación de exportación es el conjunto de documentos necesarios para sacar un vehículo de China y despacharlo en destino. Suele incluir factura comercial, lista de embalaje, documentos del vehículo, documentos de exportación, documentos de envío, conocimiento de embarque y documentos aduaneros.',
    },
    whoFor: {
      en: 'Documentation support is for buyers who need the correct paperwork to export a vehicle and clear it in their destination country — dealers, importers and wholesalers.',
      ar: 'دعم الوثائق مخصص للمشترين الذين يحتاجون الأوراق الصحيحة لتصدير مركبة وتخليصها في بلد الوجهة — التجار والمستوردون وتجار الجملة.',
      ru: 'Помощь с документами нужна покупателям, которым требуются правильные документы для экспорта автомобиля и его оформления в стране назначения — дилерам, импортёрам и оптовикам.',
      es: 'El apoyo documental es para compradores que necesitan el papeleo correcto para exportar un vehículo y despacharlo en su país de destino: concesionarios, importadores y mayoristas.',
    },
    included: [
      {
        en: 'Guidance on the documents commonly required for your destination',
        ar: 'إرشاد حول الوثائق المطلوبة عادة لوجهتك',
        ru: 'Консультация по документам, обычно требуемым для вашей страны назначения',
        es: 'Orientación sobre los documentos que suele requerir su destino',
      },
      {
        en: 'Preparation of the documents we are able to provide for the transaction',
        ar: 'تجهيز الوثائق التي يمكننا توفيرها للمعاملة',
        ru: 'Подготовка документов, которые мы можем предоставить по сделке',
        es: 'Preparación de los documentos que podemos proporcionar para la transacción',
      },
      {
        en: 'Coordination with the shipping and export steps where applicable',
        ar: 'التنسيق مع خطوات الشحن والتصدير حيثما ينطبق',
        ru: 'Координация с этапами доставки и экспорта, где применимо',
        es: 'Coordinación con los pasos de envío y exportación cuando corresponda',
      },
    ],
    notIncluded: [
      {
        en: 'A guarantee of any specific legal requirement — exact requirements depend on the vehicle, the export arrangement and the destination country',
        ar: 'ضمان أي متطلب قانوني محدد — تعتمد المتطلبات الدقيقة على المركبة وترتيب التصدير وبلد الوجهة',
        ru: 'Гарантия конкретного юридического требования — точные требования зависят от автомобиля, схемы экспорта и страны назначения',
        es: 'Garantía de un requisito legal concreto: los requisitos exactos dependen del vehículo, el acuerdo de exportación y el país de destino',
      },
      {
        en: 'Legal advice; we provide document preparation, not legal opinions',
        ar: 'استشارات قانونية؛ نحن نوفر تجهيز الوثائق، لا آراء قانونية',
        ru: 'Юридические консультации; мы готовим документы, а не даём юридические заключения',
        es: 'Asesoramiento jurídico; preparamos documentos, no damos opiniones legales',
      },
    ],
    infoRequired: [
      {
        en: 'The destination country and port',
        ar: 'بلد الوجهة والميناء',
        ru: 'Страна назначения и порт',
        es: 'El país de destino y el puerto',
      },
      {
        en: 'The vehicle or vehicle type',
        ar: 'المركبة أو نوع المركبة',
        ru: 'Автомобиль или тип автомобиля',
        es: 'El vehículo o tipo de vehículo',
      },
      {
        en: 'Any documentation requirements you already know your market requires',
        ar: 'أي متطلبات توثيق تعرف بالفعل أن سوقك يتطلبها',
        ru: 'Любые требования к документам, которые вы уже знаете для своего рынка',
        es: 'Cualquier requisito documental que ya sepa que exige su mercado',
      },
    ],
    nextSteps: [
      {
        en: 'Tell us the vehicle and destination',
        ar: 'أخبرنا بالمركبة والوجهة',
        ru: 'Сообщите нам автомобиль и страну назначения',
        es: 'Indíquenos el vehículo y el destino',
      },
      {
        en: 'We confirm the documentation requirements for your case',
        ar: 'نؤكد متطلبات الوثائق لحالتك',
        ru: 'Подтверждаем требования к документам для вашего случая',
        es: 'Confirmamos los requisitos documentales para su caso',
      },
      {
        en: 'We prepare and coordinate the documents with the export and shipping steps',
        ar: 'نجهز الوثائق وننسقها مع خطوات التصدير والشحن',
        ru: 'Готовим и координируем документы с этапами экспорта и доставки',
        es: 'Preparamos y coordinamos los documentos con los pasos de exportación y envío',
      },
    ],
  },
  {
    slug: 'shipping',
    title: {
      en: 'Shipping a Used Car from China',
      ar: 'شحن سيارة مستعملة من الصين',
      ru: 'Доставка подержанного автомобиля из Китая',
      es: 'Envío de un coche usado desde China',
    },
    description: {
      en: 'Shipping methods and considerations for moving a used vehicle from China to your destination port.',
      ar: 'طرق الشحن والاعتبارات المتعلقة بنقل مركبة مستعملة من الصين إلى ميناء وجهتك.',
      ru: 'Способы и особенности доставки подержанного автомобиля из Китая в порт назначения.',
      es: 'Métodos de envío y consideraciones para trasladar un vehículo usado desde China hasta su puerto de destino.',
    },
    h1: {
      en: 'Shipping',
      ar: 'الشحن',
      ru: 'Доставка',
      es: 'Envío',
    },
    intro: {
      en: 'Shipping is the movement of a vehicle from a China port to your destination port. Freight, insurance, taxes and duties depend on the destination and are quoted separately.',
      ar: 'الشحن هو نقل المركبة من ميناء صيني إلى ميناء وجهتك. يعتمد الشحن والتأمين والضرائب والرسوم على الوجهة وتُقدَّر بشكل منفصل.',
      ru: 'Доставка — это перемещение автомобиля из китайского порта в порт назначения. Фрахт, страховка, налоги и пошлины зависят от страны назначения и рассчитываются отдельно.',
      es: 'El envío es el traslado de un vehículo desde un puerto chino hasta su puerto de destino. El flete, el seguro, los impuestos y los aranceles dependen del destino y se cotizan por separado.',
    },
    summary: {
      en: 'We coordinate shipping from a China port to your destination port.',
      ar: 'ننسق الشحن من ميناء صيني إلى ميناء وجهتك.',
      ru: 'Координируем доставку из китайского порта в порт назначения.',
      es: 'Coordinamos el envío desde un puerto chino hasta su puerto de destino.',
    },
    whatIs: {
      en: 'Shipping moves a vehicle from a China port to the destination port. Common methods include roll-on/roll-off (RoRo), container shipping, and car carrier. The appropriate method depends on the vehicle, the destination and the buyer\'s requirements.',
      ar: 'ينقل الشحن المركبة من ميناء صيني إلى ميناء الوجهة. تشمل الطرق الشائعة النقل بالتدحرج (RoRo) والشحن بالحاويات وناقلات السيارات. تعتمد الطريقة المناسبة على المركبة والوجهة ومتطلبات المشتري.',
      ru: 'Доставка перемещает автомобиль из китайского порта в порт назначения. Распространённые способы: ро-ро (RoRo), контейнерная перевозка и автовоз. Подходящий способ зависит от автомобиля, страны назначения и требований покупателя.',
      es: 'El envío traslada un vehículo desde un puerto chino al puerto de destino. Los métodos habituales incluyen roll-on/roll-off (RoRo), envío en contenedor y transportista de vehículos. El método adecuado depende del vehículo, el destino y los requisitos del comprador.',
    },
    whoFor: {
      en: 'Shipping is for buyers importing vehicles into their market, and for dealers and importers moving single vehicles or multiple units.',
      ar: 'الشحن مخصص للمشترين الذين يستوردون مركبات إلى سوقهم، وللتجار والمستوردين الذين ينقلون مركبة واحدة أو عدة وحدات.',
      ru: 'Доставка нужна покупателям, ввозящим автомобили на свой рынок, а также дилерам и импортёрам, перевозящим один или несколько автомобилей.',
      es: 'El envío es para compradores que importan vehículos a su mercado y para concesionarios e importadores que trasladan uno o varios vehículos.',
    },
    included: [
      {
        en: 'Coordination of shipping to your destination port',
        ar: 'تنسيق الشحن إلى ميناء وجهتك',
        ru: 'Координация доставки в ваш порт назначения',
        es: 'Coordinación del envío a su puerto de destino',
      },
      {
        en: 'Guidance on shipping method (RoRo, container or car carrier) for your case',
        ar: 'إرشاد حول طريقة الشحن (RoRo أو حاوية أو ناقلة سيارات) لحالتك',
        ru: 'Консультация по способу доставки (RoRo, контейнер или автовоз) для вашего случая',
        es: 'Orientación sobre el método de envío (RoRo, contenedor o transportista) para su caso',
      },
      {
        en: 'Coordination of shipping documents with the export steps',
        ar: 'تنسيق وثائق الشحن مع خطوات التصدير',
        ru: 'Координация отгрузочных документов с этапами экспорта',
        es: 'Coordinación de los documentos de envío con los pasos de exportación',
      },
    ],
    notIncluded: [
      {
        en: 'Fixed freight prices — freight, insurance, taxes and duties depend on the destination and are quoted separately',
        ar: 'أسعار شحن ثابتة — يعتمد الشحن والتأمين والضرائب والرسوم على الوجهة وتُقدَّر بشكل منفصل',
        ru: 'Фиксированные цены на фрахт — фрахт, страховка, налоги и пошлины зависят от страны назначения и рассчитываются отдельно',
        es: 'Precios de flete fijos: el flete, el seguro, los impuestos y los aranceles dependen del destino y se cotizan por separado',
      },
      {
        en: 'A guarantee of transit time — transit time depends on the route, method and schedule',
        ar: 'ضمان مدة النقل — تعتمد مدة النقل على المسار والطريقة والجدول',
        ru: 'Гарантия времени в пути — срок зависит от маршрута, способа и расписания',
        es: 'Garantía del tiempo de tránsito: depende de la ruta, el método y el calendario',
      },
    ],
    infoRequired: [
      {
        en: 'Destination country and port',
        ar: 'بلد الوجهة والميناء',
        ru: 'Страна назначения и порт',
        es: 'País de destino y puerto',
      },
      {
        en: 'The vehicle (or vehicle type and quantity)',
        ar: 'المركبة (أو نوع المركبة والكمية)',
        ru: 'Автомобиль (или тип автомобиля и количество)',
        es: 'El vehículo (o tipo de vehículo y cantidad)',
      },
      {
        en: 'Any preference for shipping method',
        ar: 'أي تفضيل لطريقة الشحن',
        ru: 'Любое предпочтение по способу доставки',
        es: 'Cualquier preferencia de método de envío',
      },
    ],
    nextSteps: [
      {
        en: 'Confirm the vehicle and destination port',
        ar: 'أكد المركبة وميناء الوجهة',
        ru: 'Подтвердите автомобиль и порт назначения',
        es: 'Confirme el vehículo y el puerto de destino',
      },
      {
        en: 'We provide a shipping quote with the export quote',
        ar: 'نقدم عرض شحن مع عرض التصدير',
        ru: 'Даём расчёт доставки вместе с расчётом экспорта',
        es: 'Proporcionamos una cotización de envío junto con la de exportación',
      },
      {
        en: 'On confirmation, we coordinate the shipment',
        ar: 'عند التأكيد، ننسق الشحنة',
        ru: 'После подтверждения координируем отправку',
        es: 'Tras la confirmación, coordinamos el envío',
      },
    ],
  },
  {
    slug: 'port-handling',
    title: {
      en: 'Port Handling for Vehicle Export from China',
      ar: 'المناولة في الموانئ لتصدير المركبات من الصين',
      ru: 'Портовая обработка при экспорте автомобилей из Китая',
      es: 'Gestión portuaria para la exportación de vehículos desde China',
    },
    description: {
      en: 'Port handling at the origin and destination for vehicles exported from China.',
      ar: 'المناولة في ميناء المنشأ وميناء الوجهة للمركبات المصدَّرة من الصين.',
      ru: 'Портовая обработка в порту отправления и назначения для автомобилей, экспортируемых из Китая.',
      es: 'Gestión portuaria en origen y destino para vehículos exportados desde China.',
    },
    h1: {
      en: 'Port Handling',
      ar: 'المناولة في الموانئ',
      ru: 'Портовая обработка',
      es: 'Gestión portuaria',
    },
    intro: {
      en: 'Port handling covers the steps at the port — receiving the vehicle, preparing it for loading, and the destination-side handling. The specific steps depend on the port and the shipping arrangement.',
      ar: 'تغطي المناولة في الموانئ الخطوات في الميناء — استلام المركبة وتجهيزها للتحميل والمناولة في جانب الوجهة. تعتمد الخطوات المحددة على الميناء وترتيب الشحن.',
      ru: 'Портовая обработка охватывает этапы в порту — приём автомобиля, подготовку к погрузке и обработку на стороне назначения. Конкретные этапы зависят от порта и схемы доставки.',
      es: 'La gestión portuaria cubre los pasos en el puerto: recepción del vehículo, preparación para la carga y gestión en el lado de destino. Los pasos concretos dependen del puerto y del acuerdo de envío.',
    },
    summary: {
      en: 'We coordinate the vehicle through origin and destination ports.',
      ar: 'ننسق مرور المركبة عبر ميناء المنشأ وميناء الوجهة.',
      ru: 'Координируем прохождение автомобиля через порты отправления и назначения.',
      es: 'Coordinamos el paso del vehículo por los puertos de origen y destino.',
    },
    whatIs: {
      en: 'Port handling is the set of activities at the origin port (receiving, inspection, documentation checks, preparation for loading) and, where applicable, at the destination port (unloading, clearance, release).',
      ar: 'المناولة في الموانئ هي مجموعة الأنشطة في ميناء المنشأ (الاستلام والفحص ومراجعة الوثائق والتجهيز للتحميل)، وحيثما ينطبق، في ميناء الوجهة (التفريغ والتخليص والإفراج).',
      ru: 'Портовая обработка — это набор операций в порту отправления (приём, проверка, сверка документов, подготовка к погрузке) и, где применимо, в порту назначения (выгрузка, оформление, выпуск).',
      es: 'La gestión portuaria es el conjunto de actividades en el puerto de origen (recepción, inspección, comprobación de documentos, preparación para la carga) y, cuando corresponda, en el puerto de destino (descarga, despacho, liberación).',
    },
    whoFor: {
      en: 'Port handling is for buyers who want the vehicle moved through the port correctly — dealers, importers and wholesalers.',
      ar: 'المناولة في الموانئ مخصصة للمشترين الذين يريدون نقل المركبة عبر الميناء بشكل صحيح — التجار والمستوردون وتجار الجملة.',
      ru: 'Портовая обработка нужна покупателям, которые хотят правильно провести автомобиль через порт — дилерам, импортёрам и оптовикам.',
      es: 'La gestión portuaria es para compradores que desean que el vehículo pase correctamente por el puerto: concesionarios, importadores y mayoristas.',
    },
    included: [
      {
        en: 'Coordination of the vehicle through the origin port',
        ar: 'تنسيق مرور المركبة عبر ميناء المنشأ',
        ru: 'Координация прохождения автомобиля через порт отправления',
        es: 'Coordinación del paso del vehículo por el puerto de origen',
      },
      {
        en: 'Guidance on what is required at the destination port',
        ar: 'إرشاد حول ما هو مطلوب في ميناء الوجهة',
        ru: 'Консультация о том, что требуется в порту назначения',
        es: 'Orientación sobre lo que se requiere en el puerto de destino',
      },
      {
        en: 'Coordination with shipping and documentation steps',
        ar: 'التنسيق مع خطوات الشحن والوثائق',
        ru: 'Координация с этапами доставки и документации',
        es: 'Coordinación con los pasos de envío y documentación',
      },
    ],
    notIncluded: [
      {
        en: 'Fixed port charges — port charges vary by port and shipment and are quoted separately',
        ar: 'رسوم موانئ ثابتة — تختلف رسوم الموانئ حسب الميناء والشحنة وتُقدَّر بشكل منفصل',
        ru: 'Фиксированные портовые сборы — они зависят от порта и отправки и рассчитываются отдельно',
        es: 'Tarifas portuarias fijas: varían según el puerto y el envío y se cotizan por separado',
      },
      {
        en: 'A guarantee of specific destination clearance requirements — these depend on the destination country',
        ar: 'ضمان متطلبات تخليص محددة في الوجهة — تعتمد هذه على بلد الوجهة',
        ru: 'Гарантия конкретных требований по оформлению в стране назначения — они зависят от страны назначения',
        es: 'Garantía de requisitos de despacho concretos en destino: dependen del país de destino',
      },
    ],
    infoRequired: [
      {
        en: 'Origin pickup location (city) and China port',
        ar: 'موقع استلام المنشأ (المدينة) والميناء الصيني',
        ru: 'Место получения (город) и китайский порт',
        es: 'Lugar de recogida en origen (ciudad) y puerto chino',
      },
      {
        en: 'Destination country and port',
        ar: 'بلد الوجهة والميناء',
        ru: 'Страна назначения и порт',
        es: 'País de destino y puerto',
      },
      {
        en: 'Whether you need destination-side handling',
        ar: 'ما إذا كنت تحتاج مناولة في جانب الوجهة',
        ru: 'Нужна ли вам обработка на стороне назначения',
        es: 'Si necesita gestión en el lado de destino',
      },
    ],
    nextSteps: [
      {
        en: 'Confirm the vehicle and ports',
        ar: 'أكد المركبة والموانئ',
        ru: 'Подтвердите автомобиль и порты',
        es: 'Confirme el vehículo y los puertos',
      },
      {
        en: 'We include port handling in your quote',
        ar: 'ندرج المناولة في الموانئ ضمن عرض السعر',
        ru: 'Включаем портовую обработку в ваш расчёт',
        es: 'Incluimos la gestión portuaria en su cotización',
      },
      {
        en: 'On confirmation, we coordinate the port steps',
        ar: 'عند التأكيد، ننسق خطوات الميناء',
        ru: 'После подтверждения координируем портовые этапы',
        es: 'Tras la confirmación, coordinamos los pasos portuarios',
      },
    ],
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
