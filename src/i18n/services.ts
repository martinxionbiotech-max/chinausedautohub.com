import type { L10n } from './l10n';

// Export services cluster. Eight service categories, each answering the six
// questions required by PHASE 12: what it is, who needs it, what is included,
// what is not included, what the buyer needs to provide, and how to request it.
// Capabilities are expressed truthfully — availability depends on vehicle /
// destination / buyer requirements.

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
    en: 'What it is',
    ar: 'ما هي الخدمة',
    ru: 'Что это',
    es: 'Qué es',
  },
  whoFor: {
    en: 'Who needs it',
    ar: 'لمن هذه الخدمة',
    ru: 'Кому это нужно',
    es: 'Quién lo necesita',
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
    en: 'What the buyer needs to provide',
    ar: 'ما الذي يجب أن يقدمه المشتري',
    ru: 'Что должен предоставить покупатель',
    es: 'Qué debe proporcionar el comprador',
  },
  nextSteps: {
    en: 'How to request',
    ar: 'كيف تطلب الخدمة',
    ru: 'Как заказать',
    es: 'Cómo solicitarlo',
  },
};

export const SERVICES_OVERVIEW: {
  title: L10n;
  description: L10n;
  h1: L10n;
  intro: L10n;
} = {
  title: {
    en: 'Export Services — Sourcing, Verification & Shipping from China',
    ar: 'خدمات التصدير — التوريد والتحقق والشحن من الصين',
    ru: 'Экспортные услуги — подбор, проверка и доставка из Китая',
    es: 'Servicios de exportación — abastecimiento, verificación y envío desde China',
  },
  description: {
    en: 'Eight export service categories for sourcing used vehicles from China: sourcing, inspection coordination, verification, export coordination, shipping, documentation, market research and fleet/batch sourcing.',
    ar: 'ثماني فئات من خدمات التصدير لتوريد السيارات المستعملة من الصين: التوريد وتنسيق الفحص والتحقق وتنسيق التصدير والشحن والتوثيق وأبحاث السوق والتوريد بالدفعات/الأساطيل.',
    ru: 'Восемь категорий экспортных услуг по подбору подержанных автомобилей из Китая: подбор, координация осмотра, верификация, координация экспорта, доставка, документация, исследования рынка и подбор партиями/для автопарков.',
    es: 'Ocho categorías de servicios de exportación para abastecer vehículos usados desde China: abastecimiento, coordinación de inspección, verificación, coordinación de exportación, envío, documentación, investigación de mercado y abastecimiento por flota/lote.',
  },
  h1: {
    en: 'Export Services',
    ar: 'خدمات التصدير',
    ru: 'Экспортные услуги',
    es: 'Servicios de exportación',
  },
  intro: {
    en: 'Eight service categories that support buying and exporting a used vehicle from China. Availability of each service depends on the vehicle, the destination and buyer requirements; we do not list capabilities we do not actually provide.',
    ar: 'ثماني فئات من الخدمات تدعم شراء وتصدير سيارة مستعملة من الصين. يعتمد توفر كل خدمة على المركبة والوجهة ومتطلبات المشتري؛ ولا ندرج قدرات لا نقدمها فعلاً.',
    ru: 'Восемь категорий услуг, поддерживающих покупку и экспорт подержанного автомобиля из Китая. Доступность каждой услуги зависит от автомобиля, страны назначения и требований покупателя; мы не указываем возможности, которых на самом деле не предоставляем.',
    es: 'Ocho categorías de servicios que apoyan la compra y exportación de un coche usado desde China. La disponibilidad de cada servicio depende del vehículo, el destino y los requisitos del comprador; no enumeramos capacidades que realmente no ofrecemos.',
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
      { en: 'Your target market or destination country', ar: 'سوقك المستهدف أو بلد الوجهة', ru: 'Ваш целевой рынок или страна назначения', es: 'Su mercado objetivo o país de destino' },
      { en: 'Brand, model or vehicle type (or "I don\'t know the exact model")', ar: 'العلامة أو الطراز أو نوع المركبة (أو "لا أعرف الطراز المحدد")', ru: 'Марка, модель или тип автомобиля (или «не знаю точную модель»)', es: 'Marca, modelo o tipo de vehículo (o «no conozco el modelo exacto»)' },
      { en: 'Year range and budget', ar: 'نطاق السنة والميزانية', ru: 'Диапазон годов и бюджет', es: 'Rango de año y presupuesto' },
      { en: 'Quantity', ar: 'الكمية', ru: 'Количество', es: 'Cantidad' },
      { en: 'Any requirements such as fuel type, condition, mileage limits or specific features', ar: 'أي متطلبات مثل نوع الوقود أو الحالة أو حدود المسافة المقطوعة أو مواصفات محددة', ru: 'Любые требования: тип топлива, состояние, лимит пробега или особые характеристики', es: 'Cualquier requisito, como tipo de combustible, estado, límites de kilometraje o características específicas' },
    ],
    nextSteps: [
      { en: 'You submit a request with your requirements', ar: 'ترسل طلباً مع متطلباتك', ru: 'Вы отправляете запрос со своими требованиями', es: 'Envía una solicitud con sus requisitos' },
      { en: 'We review and clarify your requirements', ar: 'نراجع متطلباتك ونوضحها', ru: 'Мы изучаем и уточняем ваши требования', es: 'Revisamos y aclaramos sus requisitos' },
      { en: 'We present candidate vehicles we can source', ar: 'نعرض المركبات المرشحة التي يمكننا توريدها', ru: 'Показываем автомобили-кандидаты, которые можем подобрать', es: 'Presentamos vehículos candidatos que podemos abastecer' },
      { en: 'You review, we confirm availability and provide a quote', ar: 'تراجع، ونحن نؤكد التوفر ونقدم عرض سعر', ru: 'Вы изучаете варианты, мы подтверждаем наличие и даём расчёт', es: 'Usted revisa; nosotros confirmamos la disponibilidad y damos una cotización' },
      { en: 'On confirmation, we proceed with export preparation', ar: 'عند التأكيد، نتابع تجهيز التصدير', ru: 'После подтверждения мы переходим к подготовке экспорта', es: 'Tras la confirmación, procedemos con la preparación de la exportación' },
    ],
  },
  {
    slug: 'vehicle-inspection',
    title: {
      en: 'Vehicle Inspection Coordination in China',
      ar: 'تنسيق فحص المركبات في الصين',
      ru: 'Координация осмотра автомобилей в Китае',
      es: 'Coordinación de inspección de vehículos en China',
    },
    description: {
      en: 'What vehicle condition information we provide, how it is collected, and the limits of inspection availability for vehicles sourced from China.',
      ar: 'ما معلومات حالة المركبة التي نقدمها وكيف تُجمع وحدود توفر الفحص للمركبات المورّدة من الصين.',
      ru: 'Какую информацию о состоянии автомобиля мы предоставляем, как она собирается и каковы пределы доступности осмотра для автомобилей из Китая.',
      es: 'Qué información sobre el estado del vehículo ofrecemos, cómo se recopila y los límites de disponibilidad de la inspección para vehículos procedentes de China.',
    },
    h1: {
      en: 'Vehicle Inspection Coordination',
      ar: 'تنسيق فحص المركبات',
      ru: 'Координация осмотра автомобилей',
      es: 'Coordinación de inspección de vehículos',
    },
    intro: {
      en: 'Inspection coordination covers arranging and presenting condition information for a vehicle. We present what we hold and say clearly when a detail is not available. Inspection itself is performed by an independent provider where required.',
      ar: 'يغطي تنسيق الفحص ترتيب وعرض معلومات الحالة للمركبة. نعرض ما نحتفظ به ونوضح بوضوح عندما لا يتوفر تفصيل معين. أما الفحص نفسه فينفذه مزود مستقل عند الحاجة.',
      ru: 'Координация осмотра охватывает организацию и представление информации о состоянии автомобиля. Мы показываем то, что имеем, и прямо указываем, когда какая-то деталь недоступна. Сам осмотр при необходимости выполняет независимый исполнитель.',
      es: 'La coordinación de inspección cubre la organización y presentación de la información de estado de un vehículo. Presentamos lo que tenemos e indicamos claramente cuando un detalle no está disponible. La inspección en sí la realiza un proveedor independiente cuando se requiere.',
    },
    summary: {
      en: 'We coordinate inspection and present the condition information we hold, with clear status labels.',
      ar: 'ننسق الفحص ونعرض معلومات الحالة التي نحتفظ بها، مع علامات حالة واضحة.',
      ru: 'Координируем осмотр и представляем имеющуюся информацию о состоянии с чёткими метками статуса.',
      es: 'Coordinamos la inspección y presentamos la información de estado que tenemos, con etiquetas de estado claras.',
    },
    whatIs: {
      en: 'Inspection coordination is the process of arranging and presenting condition information about a vehicle — exterior, interior, engine, transmission, chassis, electrical system, battery, mileage, tires, paint, accident history and maintenance records. Inspection availability depends on the vehicle and buyer requirements; not every vehicle has a full inspection report.',
      ar: 'تنسيق الفحص هو عملية ترتيب وعرض معلومات الحالة عن المركبة — الخارجي والداخلي والمحرك وناقل الحركة والهيكل والنظام الكهربائي والبطارية والمسافة المقطوعة والإطارات والطلاء وسجل الحوادث وسجلات الصيانة. يعتمد توفر الفحص على المركبة ومتطلبات المشتري؛ ليست كل مركبة لديها تقرير فحص كامل.',
      ru: 'Координация осмотра — это процесс организации и представления информации о состоянии автомобиля: кузов, салон, двигатель, трансмиссия, шасси, электрика, батарея, пробег, шины, краска, история ДТП и записи о техобслуживании. Доступность осмотра зависит от автомобиля и требований покупателя; не у каждого автомобиля есть полный отчёт.',
      es: 'La coordinación de inspección es el proceso de organizar y presentar información sobre el estado de un vehículo: exterior, interior, motor, transmisión, chasis, sistema eléctrico, batería, kilometraje, neumáticos, pintura, historial de accidentes y registros de mantenimiento. La disponibilidad depende del vehículo y los requisitos del comprador; no todos los vehículos tienen un informe completo.',
    },
    whoFor: {
      en: 'Inspection coordination is for buyers who need to assess a vehicle\'s condition before committing — dealers and importers who must satisfy their own buyers, and buyers who want additional certainty before purchase.',
      ar: 'تنسيق الفحص مخصص للمشترين الذين يحتاجون إلى تقييم حالة المركبة قبل الالتزام — التجار والمستوردون الذين يجب أن يرضوا مشتريهم، والمشترون الذين يريدون يقيناً إضافياً قبل الشراء.',
      ru: 'Координация осмотра нужна покупателям, которым важно оценить состояние автомобиля до обязательств, — дилерам и импортёрам, которые должны удовлетворить своих клиентов, и покупателям, желающим дополнительной уверенности перед покупкой.',
      es: 'La coordinación de inspección es para compradores que necesitan evaluar el estado de un vehículo antes de comprometerse: concesionarios e importadores que deben satisfacer a sus propios clientes, y compradores que buscan mayor certeza antes de comprar.',
    },
    included: [
      {
        en: 'The condition information we hold, presented clearly with a status label',
        ar: 'معلومات الحالة التي نحتفظ بها، معروضة بوضوح مع علامة حالة',
        ru: 'Имеющаяся информация о состоянии с чёткой меткой статуса',
        es: 'La información de estado que tenemos, presentada con claridad y con una etiqueta de estado',
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
      {
        en: 'Coordination of an independent inspection where you require one',
        ar: 'تنسيق فحص مستقل عندما تطلبه',
        ru: 'Координация независимого осмотра, если он вам требуется',
        es: 'Coordinación de una inspección independiente cuando la requiera',
      },
    ],
    notIncluded: [
      {
        en: 'A guarantee that every vehicle has been fully inspected — availability depends on the vehicle and buyer requirements',
        ar: 'ضمان أن كل مركبة خضعت لفحص كامل — يعتمد توفر الفحص على المركبة ومتطلبات المشتري',
        ru: 'Гарантия, что каждый автомобиль полностью проверен, — доступность зависит от автомобиля и требований покупателя',
        es: 'Garantía de que todos los vehículos han sido inspeccionados por completo: la disponibilidad depende del vehículo y los requisitos del comprador',
      },
      {
        en: 'Inspection reports we do not hold; we do not invent condition data',
        ar: 'تقارير الفحص التي لا نحتفظ بها؛ نحن لا نختلق بيانات الحالة',
        ru: 'Отчёты об осмотре, которых у нас нет; мы не выдумываем данные о состоянии',
        es: 'Informes de inspección que no tenemos; no inventamos datos de estado',
      },
    ],
    infoRequired: [
      { en: 'The specific vehicle (or vehicle type) you are interested in', ar: 'المركبة المحددة (أو نوع المركبة) التي تهتم بها', ru: 'Конкретный автомобиль (или тип автомобиля), который вас интересует', es: 'El vehículo concreto (o tipo de vehículo) que le interesa' },
      { en: 'Which condition aspects matter most to you (e.g., battery health for EVs, accident history)', ar: 'جوانب الحالة الأكثر أهمية بالنسبة لك (مثل صحة البطارية للمركبات الكهربائية، وسجل الحوادث)', ru: 'Какие аспекты состояния для вас важнее всего (например, здоровье батареи для электромобилей, история ДТП)', es: 'Qué aspectos del estado le importan más (por ejemplo, salud de la batería en VE, historial de accidentes)' },
      { en: 'Whether you require a third-party inspection before purchase', ar: 'ما إذا كنت تحتاج فحصاً من طرف ثالث قبل الشراء', ru: 'Требуется ли вам сторонний осмотр перед покупкой', es: 'Si necesita una inspección de terceros antes de la compra' },
    ],
    nextSteps: [
      { en: 'Tell us the vehicle and the condition details you need', ar: 'أخبرنا بالمركبة وتفاصيل الحالة التي تحتاجها', ru: 'Сообщите нам автомобиль и нужные детали состояния', es: 'Indíquenos el vehículo y los detalles de estado que necesita' },
      { en: 'We confirm what information is available for that vehicle', ar: 'نؤكد المعلومات المتوفرة لتلك المركبة', ru: 'Подтверждаем, какая информация доступна по этому автомобилю', es: 'Confirmamos qué información está disponible para ese vehículo' },
      { en: 'Where a third-party inspection is required, we advise on options (availability depends on the vehicle)', ar: 'عند الحاجة إلى فحص من طرف ثالث، ننصحك بالخيارات (يعتمد التوفر على المركبة)', ru: 'Если требуется сторонний осмотр, консультируем по вариантам (доступность зависит от автомобиля)', es: 'Si se requiere una inspección de terceros, asesoramos sobre las opciones (la disponibilidad depende del vehículo)' },
      { en: 'We present the findings with the information we hold', ar: 'نعرض النتائج مع المعلومات التي نحتفظ بها', ru: 'Представляем результаты вместе с имеющейся информацией', es: 'Presentamos los resultados con la información que tenemos' },
    ],
  },
  {
    slug: 'vehicle-verification',
    title: {
      en: 'Vehicle Verification — Confirm Identity & Documents',
      ar: 'التحقق من المركبات — تأكيد الهوية والوثائق',
      ru: 'Верификация автомобилей — подтверждение идентичности и документов',
      es: 'Verificación de vehículos — confirmar identidad y documentos',
    },
    description: {
      en: 'Verification of vehicle identity, VIN, documents and key figures against the sources and documents we hold, distinct from physical inspection.',
      ar: 'التحقق من هوية المركبة ورقم الهيكل (VIN) والوثائق والأرقام الرئيسية مقابل المصادر والوثائق التي نحتفظ بها، وهو مختلف عن الفحص الفعلي.',
      ru: 'Верификация идентичности автомобиля, VIN, документов и ключевых цифр по имеющимся источникам и документам; отличается от физического осмотра.',
      es: 'Verificación de la identidad del vehículo, VIN, documentos y cifras clave frente a las fuentes y documentos que tenemos; distinta de la inspección física.',
    },
    h1: {
      en: 'Vehicle Verification',
      ar: 'التحقق من المركبات',
      ru: 'Верификация автомобилей',
      es: 'Verificación de vehículos',
    },
    intro: {
      en: 'Verification confirms a vehicle\'s identity, VIN, documents and key figures against a reliable source or document we hold. It is not an inspection: verification checks documents and figures, while inspection assesses physical condition.',
      ar: 'التحقق يؤكد هوية المركبة ورقم الهيكل (VIN) والوثائق والأرقام الرئيسية مقابل مصدر موثوق أو وثيقة نحتفظ بها. وهو ليس فحصاً: فالتحقق يراجع الوثائق والأرقام، بينما الفحص يقيّم الحالة الفعلية.',
      ru: 'Верификация подтверждает идентичность автомобиля, VIN, документы и ключевые цифры по надёжному источнику или документу, который у нас есть. Это не осмотр: верификация проверяет документы и цифры, а осмотр оценивает физическое состояние.',
      es: 'La verificación confirma la identidad, el VIN, los documentos y las cifras clave de un vehículo frente a una fuente fiable o un documento que tenemos. No es una inspección: la verificación comprueba documentos y cifras, mientras que la inspección evalúa el estado físico.',
    },
    summary: {
      en: 'We confirm vehicle identity, VIN and documents against evidence we hold, with a clear status for each field.',
      ar: 'نؤكد هوية المركبة ورقم الهيكل والوثائق مقابل الأدلة التي نحتفظ بها، مع حالة واضحة لكل حقل.',
      ru: 'Подтверждаем идентичность, VIN и документы по имеющимся у нас доказательствам, с чётким статусом для каждого поля.',
      es: 'Confirmamos la identidad, el VIN y los documentos del vehículo frente a la evidencia que tenemos, con un estado claro para cada campo.',
    },
    whatIs: {
      en: 'Verification is the process of checking vehicle identity, VIN, registration documents, export eligibility and key figures (such as year and specification) against the sources and documents we hold. Each field is marked with a status label — Verified only when real evidence exists.',
      ar: 'التحقق هو عملية فحص هوية المركبة ورقم الهيكل (VIN) ووثائق التسجيل وأهلية التصدير والأرقام الرئيسية (مثل السنة والمواصفة) مقابل المصادر والوثائق التي نحتفظ بها. يُعلَّم كل حقل بعلامة حالة — «موثَّق» فقط عند وجود دليل حقيقي.',
      ru: 'Верификация — это процесс проверки идентичности автомобиля, VIN, регистрационных документов, возможности экспорта и ключевых цифр (например, года и комплектации) по имеющимся источникам и документам. Каждое поле помечается меткой статуса — «Подтверждено» только при наличии реальных доказательств.',
      es: 'La verificación es el proceso de comprobar la identidad, el VIN, los documentos de matriculación, la elegibilidad de exportación y las cifras clave (como el año y la especificación) frente a las fuentes y documentos que tenemos. Cada campo se marca con una etiqueta de estado: «Verificado» solo cuando existe evidencia real.',
    },
    whoFor: {
      en: 'Verification is for buyers who need documented confidence in a vehicle\'s identity and paperwork before committing funds — importers, dealers and buyers who must satisfy their own compliance requirements.',
      ar: 'التحقق مخصص للمشترين الذين يحتاجون ثقة موثقة في هوية المركبة وأوراقها قبل الالتزام بالأموال — المستوردون والتجار والمشترون الذين يجب أن يستوفوا متطلبات الامتثال الخاصة بهم.',
      ru: 'Верификация нужна покупателям, которым требуется документально подтверждённая уверенность в идентичности и документах автомобиля до перечисления средств, — импортёрам, дилерам и покупателям, обязанным соблюдать свои требования соответствия.',
      es: 'La verificación es para compradores que necesitan confianza documentada en la identidad y los papeles de un vehículo antes de comprometer fondos: importadores, concesionarios y compradores que deben cumplir sus propios requisitos.',
    },
    included: [
      {
        en: 'Checking the VIN and vehicle identity against the documents and sources we hold',
        ar: 'فحص رقم الهيكل (VIN) وهوية المركبة مقابل الوثائق والمصادر التي نحتفظ بها',
        ru: 'Проверка VIN и идентичности автомобиля по имеющимся документам и источникам',
        es: 'Comprobación del VIN y la identidad del vehículo frente a los documentos y fuentes que tenemos',
      },
      {
        en: 'Confirming document availability and export eligibility where information is held',
        ar: 'تأكيد توفر الوثائق وأهلية التصدير حيثما تتوفر المعلومات',
        ru: 'Подтверждение наличия документов и возможности экспорта при наличии информации',
        es: 'Confirmación de la disponibilidad de documentos y la elegibilidad de exportación cuando se dispone de información',
      },
      {
        en: 'Marking each verified field with its status label',
        ar: 'تعليم كل حقل متحقق منه بعلامة حالته',
        ru: 'Пометка каждого проверенного поля меткой статуса',
        es: 'Marcado de cada campo verificado con su etiqueta de estado',
      },
    ],
    notIncluded: [
      {
        en: 'Physical inspection of the vehicle — that is a separate inspection service',
        ar: 'الفحص الفعلي للمركبة — وهذه خدمة فحص منفصلة',
        ru: 'Физический осмотр автомобиля — это отдельная услуга',
        es: 'La inspección física del vehículo — es un servicio de inspección aparte',
      },
      {
        en: 'A "Verified" label where no supporting evidence exists',
        ar: 'علامة «موثَّق» عندما لا يوجد دليل داعم',
        ru: 'Метка «Подтверждено» при отсутствии подтверждающих доказательств',
        es: 'Una etiqueta «Verificado» cuando no existe evidencia de respaldo',
      },
      {
        en: 'Legal opinions or compliance certification',
        ar: 'الآراء القانونية أو شهادات الامتثال',
        ru: 'Юридические заключения или сертификация соответствия',
        es: 'Opiniones legales ni certificación de cumplimiento',
      },
    ],
    infoRequired: [
      { en: 'The vehicle or vehicle type to verify', ar: 'المركبة أو نوع المركبة المطلوب التحقق منها', ru: 'Автомобиль или тип автомобиля для верификации', es: 'El vehículo o tipo de vehículo a verificar' },
      { en: 'Any documents you already hold (for cross-checking)', ar: 'أي وثائق تحتفظ بها بالفعل (للمقارنة)', ru: 'Любые документы, которые у вас уже есть (для сверки)', es: 'Cualquier documento que ya tenga (para cotejar)' },
      { en: 'Which fields matter most to you (e.g., VIN, export eligibility)', ar: 'الحقول الأكثر أهمية بالنسبة لك (مثل رقم الهيكل، وأهلية التصدير)', ru: 'Какие поля для вас важнее всего (например, VIN, возможность экспорта)', es: 'Qué campos le importan más (p. ej., VIN, elegibilidad de exportación)' },
    ],
    nextSteps: [
      { en: 'Tell us the vehicle and which fields you need verified', ar: 'أخبرنا بالمركبة والحقول التي تحتاج التحقق منها', ru: 'Сообщите нам автомобиль и поля для верификации', es: 'Indíquenos el vehículo y los campos que necesita verificar' },
      { en: 'We confirm what evidence we hold', ar: 'نؤكد الأدلة التي نحتفظ بها', ru: 'Подтверждаем, какие доказательства у нас есть', es: 'Confirmamos qué evidencia tenemos' },
      { en: 'We verify each field and mark its status', ar: 'نتحقق من كل حقل ونعلّم حالته', ru: 'Проверяем каждое поле и помечаем его статус', es: 'Verificamos cada campo y marcamos su estado' },
      { en: 'We report the results with clear status labels', ar: 'نبلغك بالنتائج مع علامات حالة واضحة', ru: 'Сообщаем результаты с чёткими метками статуса', es: 'Informamos de los resultados con etiquetas de estado claras' },
    ],
  },
  {
    slug: 'export-coordination',
    title: {
      en: 'Export Coordination from China',
      ar: 'تنسيق التصدير من الصين',
      ru: 'Координация экспорта из Китая',
      es: 'Coordinación de exportación desde China',
    },
    description: {
      en: 'Coordination of the export process for a used vehicle from China — preparation, documents, port and shipment handoff.',
      ar: 'تنسيق عملية التصدير لسيارة مستعملة من الصين — التجهيز والوثائق والميناء وتسليم الشحنة.',
      ru: 'Координация процесса экспорта подержанного автомобиля из Китая — подготовка, документы, порт и передача груза.',
      es: 'Coordinación del proceso de exportación de un coche usado desde China: preparación, documentos, puerto y entrega del envío.',
    },
    h1: {
      en: 'Export Coordination',
      ar: 'تنسيق التصدير',
      ru: 'Координация экспорта',
      es: 'Coordinación de exportación',
    },
    intro: {
      en: 'Export coordination brings together the steps needed to move a vehicle out of China — preparation, documentation, port handling and handoff to the shipping step. We coordinate; customs and shipping are handled by the relevant authorities and carriers.',
      ar: 'يجمع تنسيق التصدير الخطوات اللازمة لنقل مركبة خارج الصين — التجهيز والتوثيق والمناولة في الميناء وتسليم الشحنة لخطوة الشحن. نحن ننسق؛ أما الجمارك والشحن فتقوم بهما الجهات والناقلون المعنيون.',
      ru: 'Координация экспорта объединяет шаги, необходимые для вывоза автомобиля из Китая, — подготовку, документацию, портовую обработку и передачу на этап доставки. Мы координируем; таможней и доставкой занимаются соответствующие органы и перевозчики.',
      es: 'La coordinación de exportación reúne los pasos necesarios para sacar un vehículo de China: preparación, documentación, gestión portuaria y entrega al paso de envío. Nosotros coordinamos; las aduanas y el envío los gestionan las autoridades y transportistas correspondientes.',
    },
    summary: {
      en: 'We coordinate the export process — preparation, documents and port handoff.',
      ar: 'ننسق عملية التصدير — التجهيز والوثائق وتسليم الميناء.',
      ru: 'Координируем процесс экспорта — подготовку, документы и передачу в порту.',
      es: 'Coordinamos el proceso de exportación: preparación, documentos y entrega en puerto.',
    },
    whatIs: {
      en: 'Export coordination is the set of steps to move a vehicle out of China: confirming export eligibility, preparing the vehicle and documentation, coordinating origin-port handling, and handing off to shipping. Some steps — customs and shipping itself — are performed by authorities or third parties.',
      ar: 'تنسيق التصدير هو مجموعة الخطوات لنقل مركبة خارج الصين: تأكيد أهلية التصدير، وتجهيز المركبة والوثائق، وتنسيق المناولة في ميناء المنشأ، وتسليم الشحنة إلى الشحن. بعض الخطوات — الجمارك والشحن نفسه — تنفذها سلطات أو أطراف ثالثة.',
      ru: 'Координация экспорта — это набор шагов по вывозу автомобиля из Китая: подтверждение возможности экспорта, подготовка автомобиля и документации, координация портовой обработки и передача на доставку. Некоторые шаги — таможня и сама доставка — выполняют органы или третьи стороны.',
      es: 'La coordinación de exportación es el conjunto de pasos para sacar un vehículo de China: confirmar la elegibilidad de exportación, preparar el vehículo y la documentación, coordinar la gestión en el puerto de origen y entregarlo al envío. Algunos pasos — aduanas y el envío en sí — los realizan autoridades o terceros.',
    },
    whoFor: {
      en: 'Export coordination is for buyers who want the export process managed end-to-end after a vehicle is confirmed — dealers, importers and wholesalers.',
      ar: 'تنسيق التصدير مخصص للمشترين الذين يريدون إدارة عملية التصدير من البداية للنهاية بعد تأكيد المركبة — التجار والمستوردون وتجار الجملة.',
      ru: 'Координация экспорта нужна покупателям, которые хотят управлять процессом экспорта целиком после подтверждения автомобиля, — дилерам, импортёрам и оптовикам.',
      es: 'La coordinación de exportación es para compradores que desean gestionar el proceso de exportación de principio a fin tras confirmar un vehículo: concesionarios, importadores y mayoristas.',
    },
    included: [
      {
        en: 'Confirming export eligibility where we hold that information',
        ar: 'تأكيد أهلية التصدير حيثما نحتفظ بهذه المعلومات',
        ru: 'Подтверждение возможности экспорта при наличии такой информации',
        es: 'Confirmación de la elegibilidad de exportación cuando tenemos esa información',
      },
      {
        en: 'Preparing the documentation we are able to provide',
        ar: 'تجهيز الوثائق التي يمكننا توفيرها',
        ru: 'Подготовка документов, которые мы можем предоставить',
        es: 'Preparación de la documentación que podemos proporcionar',
      },
      {
        en: 'Coordinating origin-port handling',
        ar: 'تنسيق المناولة في ميناء المنشأ',
        ru: 'Координация портовой обработки в порту отправления',
        es: 'Coordinación de la gestión en el puerto de origen',
      },
      {
        en: 'Handoff to the shipping step',
        ar: 'تسليم الشحنة إلى خطوة الشحن',
        ru: 'Передача на этап доставки',
        es: 'Entrega al paso de envío',
      },
    ],
    notIncluded: [
      {
        en: 'Performing customs clearance ourselves — that is done by the authorities',
        ar: 'إجراء التخليص الجمركي بأنفسنا — ذلك تقوم به السلطات',
        ru: 'Выполнение таможенной очистки самостоятельно — этим занимаются органы',
        es: 'Realizar el despacho de aduanas nosotros mismos — lo hacen las autoridades',
      },
      {
        en: 'Operating the shipping vessel or carrier',
        ar: 'تشغيل سفينة الشحن أو الناقل',
        ru: 'Эксплуатация судна или перевозчика',
        es: 'Operar el buque o el transportista',
      },
      {
        en: 'A guarantee of export approval or a specific timeline',
        ar: 'ضمان الموافقة على التصدير أو جدول زمني محدد',
        ru: 'Гарантия разрешения на экспорт или конкретного срока',
        es: 'Garantía de aprobación de exportación o de un plazo concreto',
      },
    ],
    infoRequired: [
      { en: 'The confirmed vehicle and its documents', ar: 'المركبة المؤكدة ووثائقها', ru: 'Подтверждённый автомобиль и его документы', es: 'El vehículo confirmado y sus documentos' },
      { en: 'The destination country and port', ar: 'بلد الوجهة والميناء', ru: 'Страна назначения и порт', es: 'El país de destino y el puerto' },
      { en: 'Any export requirements your market is known to impose', ar: 'أي متطلبات تصدير يعرف أن سوقك يفرضها', ru: 'Любые требования к экспорту, которые, как известно, налагает ваш рынок', es: 'Cualquier requisito de exportación que se sepa que impone su mercado' },
    ],
    nextSteps: [
      { en: 'Confirm the vehicle and destination', ar: 'أكد المركبة والوجهة', ru: 'Подтвердите автомобиль и страну назначения', es: 'Confirme el vehículo y el destino' },
      { en: 'We confirm export eligibility and required documents', ar: 'نؤكد أهلية التصدير والوثائق المطلوبة', ru: 'Подтверждаем возможность экспорта и необходимые документы', es: 'Confirmamos la elegibilidad de exportación y los documentos requeridos' },
      { en: 'We coordinate preparation and origin-port handling', ar: 'ننسق التجهيز والمناولة في ميناء المنشأ', ru: 'Координируем подготовку и портовую обработку', es: 'Coordinamos la preparación y la gestión en el puerto de origen' },
      { en: 'We hand off to shipping and keep you updated', ar: 'نسلّم الشحنة إلى الشحن ونبقيك على اطلاع', ru: 'Передаём на доставку и держим вас в курсе', es: 'Entregamos al envío y le mantenemos informado' },
    ],
  },
  {
    slug: 'shipping',
    title: {
      en: 'Shipping Coordination for Used Cars from China',
      ar: 'تنسيق شحن السيارات المستعملة من الصين',
      ru: 'Координация доставки подержанных автомобилей из Китая',
      es: 'Coordinación de envío de coches usados desde China',
    },
    description: {
      en: 'Shipping methods and considerations for moving a used vehicle from China to your destination port, and how we coordinate the arrangement.',
      ar: 'طرق الشحن والاعتبارات المتعلقة بنقل مركبة مستعملة من الصين إلى ميناء وجهتك، وكيف ننسق الترتيب.',
      ru: 'Способы и особенности доставки подержанного автомобиля из Китая в порт назначения и как мы координируем организацию.',
      es: 'Métodos de envío y consideraciones para trasladar un vehículo usado desde China hasta su puerto de destino, y cómo coordinamos el acuerdo.',
    },
    h1: {
      en: 'Shipping Coordination',
      ar: 'تنسيق الشحن',
      ru: 'Координация доставки',
      es: 'Coordinación de envío',
    },
    intro: {
      en: 'Shipping moves a vehicle from a China port to your destination port. We coordinate the arrangement; the actual carriage is performed by a shipping line or freight forwarder. Freight, insurance, taxes and duties depend on the destination and are quoted separately.',
      ar: 'ينقل الشحن المركبة من ميناء صيني إلى ميناء وجهتك. نحن ننسق الترتيب؛ أما النقل الفعلي فينفذه خط شحن أو وكيل شحن. يعتمد الشحن والتأمين والضرائب والرسوم على الوجهة وتُقدَّر بشكل منفصل.',
      ru: 'Доставка перемещает автомобиль из китайского порта в порт назначения. Мы координируем организацию; саму перевозку выполняет судоходная линия или экспедитор. Фрахт, страховка, налоги и пошлины зависят от страны назначения и рассчитываются отдельно.',
      es: 'El envío traslada un vehículo desde un puerto chino hasta su puerto de destino. Coordinamos el acuerdo; el transporte en sí lo realiza una naviera o un transitario. El flete, el seguro, los impuestos y los aranceles dependen del destino y se cotizan por separado.',
    },
    summary: {
      en: 'We coordinate shipping from a China port to your destination port.',
      ar: 'ننسق الشحن من ميناء صيني إلى ميناء وجهتك.',
      ru: 'Координируем доставку из китайского порта в порт назначения.',
      es: 'Coordinamos el envío desde un puerto chino hasta su puerto de destino.',
    },
    whatIs: {
      en: 'Shipping coordination moves a vehicle from a China port to the destination port. Common methods include roll-on/roll-off (RoRo), container shipping, and car carrier. The appropriate method depends on the vehicle, the destination and the buyer\'s requirements.',
      ar: 'ينقل تنسيق الشحن المركبة من ميناء صيني إلى ميناء الوجهة. تشمل الطرق الشائعة النقل بالتدحرج (RoRo) والشحن بالحاويات وناقلات السيارات. تعتمد الطريقة المناسبة على المركبة والوجهة ومتطلبات المشتري.',
      ru: 'Координация доставки перемещает автомобиль из китайского порта в порт назначения. Распространённые способы: ро-ро (RoRo), контейнерная перевозка и автовоз. Подходящий способ зависит от автомобиля, страны назначения и требований покупателя.',
      es: 'La coordinación de envío traslada un vehículo desde un puerto chino al puerto de destino. Los métodos habituales incluyen roll-on/roll-off (RoRo), envío en contenedor y transportista de vehículos. El método adecuado depende del vehículo, el destino y los requisitos del comprador.',
    },
    whoFor: {
      en: 'Shipping coordination is for buyers importing vehicles into their market, and for dealers and importers moving single vehicles or multiple units.',
      ar: 'تنسيق الشحن مخصص للمشترين الذين يستوردون مركبات إلى سوقهم، وللتجار والمستوردين الذين ينقلون مركبة واحدة أو عدة وحدات.',
      ru: 'Координация доставки нужна покупателям, ввозящим автомобили на свой рынок, а также дилерам и импортёрам, перевозящим один или несколько автомобилей.',
      es: 'La coordinación de envío es para compradores que importan vehículos a su mercado y para concesionarios e importadores que trasladan uno o varios vehículos.',
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
        en: 'Operating the vessel — carriage is performed by a shipping line or forwarder',
        ar: 'تشغيل السفينة — النقل ينفذه خط شحن أو وكيل',
        ru: 'Эксплуатация судна — перевозку выполняет судоходная линия или экспедитор',
        es: 'Operar el buque: el transporte lo realiza una naviera o un transitario',
      },
      {
        en: 'A guarantee of transit time — transit time depends on the route, method and schedule',
        ar: 'ضمان مدة النقل — تعتمد مدة النقل على المسار والطريقة والجدول',
        ru: 'Гарантия времени в пути — срок зависит от маршрута, способа и расписания',
        es: 'Garantía del tiempo de tránsito: depende de la ruta, el método y el calendario',
      },
    ],
    infoRequired: [
      { en: 'Destination country and port', ar: 'بلد الوجهة والميناء', ru: 'Страна назначения и порт', es: 'País de destino y puerto' },
      { en: 'The vehicle (or vehicle type and quantity)', ar: 'المركبة (أو نوع المركبة والكمية)', ru: 'Автомобиль (или тип автомобиля и количество)', es: 'El vehículo (o tipo de vehículo y cantidad)' },
      { en: 'Any preference for shipping method', ar: 'أي تفضيل لطريقة الشحن', ru: 'Любое предпочтение по способу доставки', es: 'Cualquier preferencia de método de envío' },
    ],
    nextSteps: [
      { en: 'Confirm the vehicle and destination port', ar: 'أكد المركبة وميناء الوجهة', ru: 'Подтвердите автомобиль и порт назначения', es: 'Confirme el vehículo y el puerto de destino' },
      { en: 'We provide a shipping quote with the export quote', ar: 'نقدم عرض شحن مع عرض التصدير', ru: 'Даём расчёт доставки вместе с расчётом экспорта', es: 'Proporcionamos una cotización de envío junto con la de exportación' },
      { en: 'On confirmation, we coordinate the shipment', ar: 'عند التأكيد، ننسق الشحنة', ru: 'После подтверждения координируем отправку', es: 'Tras la confirmación, coordinamos el envío' },
    ],
  },
  {
    slug: 'export-documentation',
    title: {
      en: 'Documentation Support for Vehicle Export from China',
      ar: 'دعم الوثائق لتصدير المركبات من الصين',
      ru: 'Документационная поддержка экспорта автомобилей из Китая',
      es: 'Soporte documental para la exportación de vehículos desde China',
    },
    description: {
      en: 'The export documents commonly involved in exporting a used vehicle from China, and how we help prepare them.',
      ar: 'وثائق التصدير التي تُستخدم عادة في تصدير سيارة مستعملة من الصين، وكيف نساعد في تجهيزها.',
      ru: 'Экспортные документы, обычно требуемые при экспорте подержанного автомобиля из Китая, и как мы помогаем их подготовить.',
      es: 'Los documentos de exportación que suelen intervenir al exportar un vehículo usado desde China, y cómo ayudamos a prepararlos.',
    },
    h1: {
      en: 'Documentation Support',
      ar: 'دعم الوثائق',
      ru: 'Документационная поддержка',
      es: 'Soporte documental',
    },
    intro: {
      en: 'Documentation support covers the paperwork involved in exporting a vehicle from China. Exact requirements depend on the vehicle, the export arrangement and the destination country, so we confirm them with you during the quote.',
      ar: 'يغطي دعم الوثائق الأوراق المتعلقة بتصدير مركبة من الصين. تعتمد المتطلبات الدقيقة على المركبة وترتيب التصدير وبلد الوجهة، لذا نؤكدها معك أثناء تقديم عرض السعر.',
      ru: 'Документационная поддержка охватывает бумажную работу, связанную с вывозом автомобиля из Китая. Точные требования зависят от автомобиля, схемы экспорта и страны назначения, поэтому мы подтверждаем их при расчёте.',
      es: 'El soporte documental cubre el papeleo necesario para exportar un vehículo desde China. Los requisitos exactos dependen del vehículo, el acuerdo de exportación y el país de destino, por lo que los confirmamos con usted durante la cotización.',
    },
    summary: {
      en: 'We help prepare the export documentation your destination requires.',
      ar: 'نساعد في تجهيز وثائق التصدير التي تتطلبها وجهتك.',
      ru: 'Помогаем подготовить экспортные документы, необходимые для вашей страны назначения.',
      es: 'Ayudamos a preparar la documentación de exportación que requiere su destino.',
    },
    whatIs: {
      en: 'Documentation support is the set of documents required to move a vehicle out of China and clear it at the destination. This commonly includes a commercial invoice, packing list, vehicle documents, export documents, shipping documents, a bill of lading and customs-related documents.',
      ar: 'دعم الوثائق هو مجموعة المستندات المطلوبة لنقل مركبة خارج الصين وتخليصها في الوجهة. تشمل عادة الفاتورة التجارية وقائمة التعبئة ووثائق المركبة ووثائق التصدير ووثائق الشحن وبوليصة الشحن والوثائق الجمركية.',
      ru: 'Документационная поддержка — это набор документов, необходимых для вывоза автомобиля из Китая и его таможенного оформления в стране назначения. Обычно это коммерческий инвойс, упаковочный лист, документы на автомобиль, экспортные и отгрузочные документы, коносамент и таможенные документы.',
      es: 'El soporte documental es el conjunto de documentos necesarios para sacar un vehículo de China y despacharlo en destino. Suele incluir factura comercial, lista de embalaje, documentos del vehículo, documentos de exportación, documentos de envío, conocimiento de embarque y documentos aduaneros.',
    },
    whoFor: {
      en: 'Documentation support is for buyers who need the correct paperwork to export a vehicle and clear it in their destination country — dealers, importers and wholesalers.',
      ar: 'دعم الوثائق مخصص للمشترين الذين يحتاجون الأوراق الصحيحة لتصدير مركبة وتخليصها في بلد الوجهة — التجار والمستوردون وتجار الجملة.',
      ru: 'Документационная поддержка нужна покупателям, которым требуются правильные документы для экспорта автомобиля и его оформления в стране назначения, — дилерам, импортёрам и оптовикам.',
      es: 'El soporte documental es para compradores que necesitan el papeleo correcto para exportar un vehículo y despacharlo en su país de destino: concesionarios, importadores y mayoristas.',
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
      { en: 'The destination country and port', ar: 'بلد الوجهة والميناء', ru: 'Страна назначения и порт', es: 'El país de destino y el puerto' },
      { en: 'The vehicle or vehicle type', ar: 'المركبة أو نوع المركبة', ru: 'Автомобиль или тип автомобиля', es: 'El vehículo o tipo de vehículo' },
      { en: 'Any documentation requirements you already know your market requires', ar: 'أي متطلبات توثيق تعرف بالفعل أن سوقك يتطلبها', ru: 'Любые требования к документам, которые вы уже знаете для своего рынка', es: 'Cualquier requisito documental que ya sepa que exige su mercado' },
    ],
    nextSteps: [
      { en: 'Tell us the vehicle and destination', ar: 'أخبرنا بالمركبة والوجهة', ru: 'Сообщите нам автомобиль и страну назначения', es: 'Indíquenos el vehículo y el destino' },
      { en: 'We confirm the documentation requirements for your case', ar: 'نؤكد متطلبات الوثائق لحالتك', ru: 'Подтверждаем требования к документам для вашего случая', es: 'Confirmamos los requisitos documentales para su caso' },
      { en: 'We prepare and coordinate the documents with the export and shipping steps', ar: 'نجهز الوثائق وننسقها مع خطوات التصدير والشحن', ru: 'Готовим и координируем документы с этапами экспорта и доставки', es: 'Preparamos y coordinamos los documentos con los pasos de exportación y envío' },
    ],
  },
  {
    slug: 'market-research',
    title: {
      en: 'Market Research for Used Car Importers',
      ar: 'أبحاث السوق لمستوردي السيارات المستعملة',
      ru: 'Исследования рынка для импортёров подержанных автомобилей',
      es: 'Investigación de mercado para importadores de coches usados',
    },
    description: {
      en: 'Destination-market research for importers — import rules, taxes, compatibility and demand considerations for sourcing decisions.',
      ar: 'أبحاث سوق الوجهة للمستوردين — قواعد الاستيراد والضرائب والتوافق واعتبارات الطلب لقرارات التوريد.',
      ru: 'Исследование рынка назначения для импортёров — правила импорта, налоги, совместимость и соображения спроса для решений о подборе.',
      es: 'Investigación del mercado de destino para importadores: reglas de importación, impuestos, compatibilidad y consideraciones de demanda para decisiones de abastecimiento.',
    },
    h1: {
      en: 'Market Research',
      ar: 'أبحاث السوق',
      ru: 'Исследования рынка',
      es: 'Investigación de mercado',
    },
    intro: {
      en: 'Market research helps you decide which vehicles are viable for your destination market. Our Market sub-site publishes import rules, taxes, drive-side and compatibility notes with sources; for deeper, case-specific analysis we can review your requirements.',
      ar: 'تساعدك أبحاث السوق على تحديد المركبات القابلة للتسويق في سوق وجهتك. ينشر موقع السوق الفرعي لدينا قواعد الاستيراد والضرائب وجهة القيادة وملاحظات التوافق مع المصادر؛ ولتحليل أعمق خاص بحالتك يمكننا مراجعة متطلباتك.',
      ru: 'Исследование рынка помогает вам решить, какие автомобили жизнеспособны для вашего рынка назначения. Наш рыночный подсайт публикует правила импорта, налоги, сторону руля и примечания о совместимости с источниками; для более глубокого анализа под ваш случай мы можем изучить ваши требования.',
      es: 'La investigación de mercado le ayuda a decidir qué vehículos son viables para su mercado de destino. Nuestro subsitio de mercado publica reglas de importación, impuestos, lado de conducción y notas de compatibilidad con fuentes; para un análisis más profundo y específico podemos revisar sus requisitos.',
    },
    summary: {
      en: 'We provide market guidance and review your requirements for destination-market viability.',
      ar: 'نوفر إرشادات السوق ونراجع متطلباتك لجدوى سوق الوجهة.',
      ru: 'Даём рыночные рекомендации и изучаем ваши требования на жизнеспособность для рынка назначения.',
      es: 'Ofrecemos orientación de mercado y revisamos sus requisitos de viabilidad para el mercado de destino.',
    },
    whatIs: {
      en: 'Market research combines our published market data — import eligibility, vehicle-age rules, drive side, duties, VAT, required documents, ports and shipping — with a review of your specific sourcing brief. Regulatory information is general guidance, not legal advice.',
      ar: 'تجمع أبحاث السوق بين بيانات السوق المنشورة لدينا — أهلية الاستيراد وقواعد عمر المركبة وجهة القيادة والرسوم وضريبة القيمة المضافة والمستندات المطلوبة والموانئ والشحن — ومراجعة طلب التوريد الخاص بك. المعلومات التنظيمية إرشادات عامة، وليست نصيحة قانونية.',
      ru: 'Исследование рынка объединяет наши опубликованные рыночные данные — право на импорт, правила возраста автомобиля, сторону руля, пошлины, НДС, требуемые документы, порты и доставку — с изучением вашего конкретного запроса на подбор. Нормативная информация является общим руководством, а не юридической консультацией.',
      es: 'La investigación de mercado combina nuestros datos de mercado publicados — elegibilidad de importación, reglas de antigüedad, lado de conducción, aranceles, IVA, documentos requeridos, puertos y envío — con una revisión de su solicitud de abastecimiento específica. La información regulatoria es orientación general, no asesoramiento legal.',
    },
    whoFor: {
      en: 'Market research is for importers, dealers and buyers evaluating whether and how to enter a destination market, or which vehicles to source for it.',
      ar: 'أبحاث السوق مخصصة للمستوردين والتجار والمشترين الذين يقيّمون ما إذا كانوا سيدخلون سوق وجهة وكيف، أو أي مركبات يورّدون لها.',
      ru: 'Исследование рынка нужно импортёрам, дилерам и покупателям, оценивающим, стоит ли и как выходить на рынок назначения, или какие автомобили для него подбирать.',
      es: 'La investigación de mercado es para importadores, concesionarios y compradores que evalúan si entrar en un mercado de destino y cómo, o qué vehículos abastecer para él.',
    },
    included: [
      {
        en: 'Access to our published market pages with sourced rules and confidence levels',
        ar: 'الوصول إلى صفحات السوق المنشورة لدينا مع القواعد الموثقة ومستويات الثقة',
        ru: 'Доступ к нашим опубликованным страницам рынков с источниками и уровнями достоверности',
        es: 'Acceso a nuestras páginas de mercado publicadas con reglas y niveles de confianza',
      },
      {
        en: 'Review of your sourcing brief against destination-market considerations',
        ar: 'مراجعة طلب التوريد الخاص بك مقابل اعتبارات سوق الوجهة',
        ru: 'Изучение вашего запроса на подбор с учётом особенностей рынка назначения',
        es: 'Revisión de su solicitud de abastecimiento frente a las consideraciones del mercado de destino',
      },
      {
        en: 'Pointers to relevant tools (landed cost, import duty, compatibility)',
        ar: 'إرشاد إلى الأدوات ذات الصلة (التكلفة النهائية، والرسوم الجمركية، والتوافق)',
        ru: 'Указание на соответствующие инструменты (итоговая стоимость, импортная пошлина, совместимость)',
        es: 'Indicación de herramientas relevantes (coste de desembarco, aranceles, compatibilidad)',
      },
    ],
    notIncluded: [
      {
        en: 'Legal or tax advice — regulatory data is general guidance only',
        ar: 'نصيحة قانونية أو ضريبية — البيانات التنظيمية إرشادات عامة فقط',
        ru: 'Юридические или налоговые консультации — нормативные данные являются только общим руководством',
        es: 'Asesoramiento legal o fiscal: los datos regulatorios son solo orientación general',
      },
      {
        en: 'A guarantee that market rules will not change',
        ar: 'ضمان أن قواعد السوق لن تتغير',
        ru: 'Гарантия того, что правила рынка не изменятся',
        es: 'Garantía de que las reglas del mercado no cambiarán',
      },
      {
        en: 'A definitive list of saleable vehicles — demand depends on many factors',
        ar: 'قائمة نهائية بالمركبات القابلة للبيع — الطلب يعتمد على عوامل كثيرة',
        ru: 'Окончательный список продаваемых автомобилей — спрос зависит от многих факторов',
        es: 'Una lista definitiva de vehículos vendibles: la demanda depende de muchos factores',
      },
    ],
    infoRequired: [
      { en: 'Your destination market or country', ar: 'سوق وجهتك أو بلدك', ru: 'Ваш рынок назначения или страна', es: 'Su mercado de destino o país' },
      { en: 'The vehicle types or brands you are considering', ar: 'أنواع المركبات أو العلامات التي تفكر فيها', ru: 'Типы автомобилей или марки, которые вы рассматриваете', es: 'Los tipos de vehículo o marcas que está considerando' },
      { en: 'Any specific regulatory questions you need answered', ar: 'أي أسئلة تنظيمية محددة تحتاج إجابات لها', ru: 'Любые конкретные нормативные вопросы, на которые вам нужны ответы', es: 'Cualquier pregunta regulatoria específica que necesite responder' },
    ],
    nextSteps: [
      { en: 'Tell us your destination market and requirements', ar: 'أخبرنا بسوق وجهتك ومتطلباتك', ru: 'Сообщите нам ваш рынок назначения и требования', es: 'Indíquenos su mercado de destino y requisitos' },
      { en: 'We point you to the relevant market pages and tools', ar: 'نرشدك إلى صفحات السوق والأدوات ذات الصلة', ru: 'Указываем на соответствующие страницы рынков и инструменты', es: 'Le indicamos las páginas de mercado y herramientas relevantes' },
      { en: 'Where needed, we review your brief against destination requirements', ar: 'عند الحاجة، نراجع طلبك مقابل متطلبات الوجهة', ru: 'При необходимости изучаем ваш запрос с учётом требований страны назначения', es: 'Cuando sea necesario, revisamos su solicitud frente a los requisitos del destino' },
      { en: 'You make sourcing decisions with better information', ar: 'تتخذ قرارات التوريد بمعلومات أفضل', ru: 'Вы принимаете решения о подборе с лучшей информацией', es: 'Toma decisiones de abastecimiento con mejor información' },
    ],
  },
  {
    slug: 'fleet-batch-sourcing',
    title: {
      en: 'Fleet & Batch Sourcing from China',
      ar: 'التوريد للأساطيل والدفعات من الصين',
      ru: 'Подбор для автопарков и партиями из Китая',
      es: 'Abastecimiento por flota y lotes desde China',
    },
    description: {
      en: 'Sourcing multiple vehicles of the same or similar specification for fleet buyers and batch importers.',
      ar: 'توريد عدة مركبات بنفس المواصفة أو مواصفة مشابهة لمشتري الأساطيل ومستوردي الدفعات.',
      ru: 'Подбор нескольких автомобилей одной или схожей комплектации для покупателей автопарков и партийных импортёров.',
      es: 'Abastecimiento de varios vehículos de especificación igual o similar para compradores de flotas e importadores por lotes.',
    },
    h1: {
      en: 'Fleet & Batch Sourcing',
      ar: 'التوريد للأساطيل والدفعات',
      ru: 'Подбор для автопарков и партиями',
      es: 'Abastecimiento por flota y lotes',
    },
    intro: {
      en: 'Fleet and batch sourcing is for buyers who need several vehicles of the same or similar specification. We treat each unit as a separate vehicle with its own condition, mileage and price — a batch is never sold as a single identical block.',
      ar: 'التوريد للأساطيل والدفعات مخصص للمشترين الذين يحتاجون عدة مركبات بنفس المواصفة أو مواصفة مشابهة. نتعامل مع كل وحدة كمركبة منفصلة بحالتها ومسافتها وسعرها — ولا تُباع الدفعة أبداً ككتلة واحدة متطابقة.',
      ru: 'Подбор для автопарков и партиями нужен покупателям, которым требуется несколько автомобилей одной или схожей комплектации. Мы рассматриваем каждую единицу как отдельный автомобиль со своим состоянием, пробегом и ценой — партия никогда не продаётся как единый одинаковый блок.',
      es: 'El abastecimiento por flota y lotes es para compradores que necesitan varios vehículos de especificación igual o similar. Tratamos cada unidad como un vehículo separado con su propio estado, kilometraje y precio: un lote nunca se vende como un único bloque idéntico.',
    },
    summary: {
      en: 'We source multiple vehicles of similar specification, unit by unit.',
      ar: 'نورّد عدة مركبات بمواصفة مشابهة، وحدة بوحدة.',
      ru: 'Подбираем несколько автомобилей схожей комплектации, по одной единице.',
      es: 'Abastecemos varios vehículos de especificación similar, unidad por unidad.',
    },
    whatIs: {
      en: 'Fleet and batch sourcing finds multiple vehicles that match a common requirement — a model, powertrain or configuration for a fleet, a taxi/rental operation or a batch of stock for resale. Each vehicle is sourced and listed individually with its own data.',
      ar: 'يجد التوريد للأساطيل والدفعات عدة مركبات تطابق متطلباً مشتركاً — موديلاً أو نظام دفع أو تجهيزاً لأسطول، أو عملية تأجير/أجرة، أو دفعة مخزون لإعادة البيع. تُورَّد كل مركبة وتُدرج بشكل فردي ببياناتها الخاصة.',
      ru: 'Подбор для автопарков и партиями находит несколько автомобилей, соответствующих общему требованию, — модель, силовую установку или комплектацию для автопарка, такси/проката или партии под перепродажу. Каждый автомобиль подбирается и указывается отдельно со своими данными.',
      es: 'El abastecimiento por flota y lotes encuentra varios vehículos que coinciden con un requisito común: un modelo, una motorización o una configuración para una flota, una operación de taxi/alquiler o un lote para reventa. Cada vehículo se abastece y lista individualmente con sus propios datos.',
    },
    whoFor: {
      en: 'Fleet and batch sourcing is for fleet buyers, taxi/rental operators, and dealers or importers buying several units at once.',
      ar: 'التوريد للأساطيل والدفعات مخصص لمشتري الأساطيل ومشغلي سيارات الأجرة/التأجير والتجار أو المستوردين الذين يشترون عدة وحدات دفعة واحدة.',
      ru: 'Подбор для автопарков и партиями нужен покупателям автопарков, операторам такси/проката и дилерам или импортёрам, покупающим несколько единиц сразу.',
      es: 'El abastecimiento por flota y lotes es para compradores de flotas, operadores de taxi/alquiler y concesionarios o importadores que compran varias unidades a la vez.',
    },
    included: [
      {
        en: 'Reviewing your fleet or batch requirements',
        ar: 'مراجعة متطلبات أسطولك أو دفعتك',
        ru: 'Изучение ваших требований к автопарку или партии',
        es: 'Revisión de sus requisitos de flota o lote',
      },
      {
        en: 'Searching for multiple matching units',
        ar: 'البحث عن عدة وحدات مطابقة',
        ru: 'Поиск нескольких подходящих единиц',
        es: 'Búsqueda de varias unidades coincidentes',
      },
      {
        en: 'Presenting each unit with its own information and price',
        ar: 'عرض كل وحدة بمعلوماتها وسعرها الخاصين',
        ru: 'Представление каждой единицы с её информацией и ценой',
        es: 'Presentación de cada unidad con su propia información y precio',
      },
    ],
    notIncluded: [
      {
        en: 'A guarantee that all units will be identical — each vehicle has its own condition and history',
        ar: 'ضمان أن كل الوحدات ستكون متطابقة — لكل مركبة حالتها وسجلها الخاصان',
        ru: 'Гарантия идентичности всех единиц — у каждого автомобиля своё состояние и история',
        es: 'Garantía de que todas las unidades serán idénticas: cada vehículo tiene su propio estado e historial',
      },
      {
        en: 'Bulk pricing that ignores individual vehicle condition — prices are set per unit',
        ar: 'تسعير بالجملة يتجاهل حالة كل مركبة — تُحدد الأسعار لكل وحدة',
        ru: 'Оптовая цена без учёта состояния каждого автомобиля — цены устанавливаются за единицу',
        es: 'Precios al por mayor que ignoren el estado de cada vehículo: los precios se fijan por unidad',
      },
    ],
    infoRequired: [
      { en: 'Model, powertrain and configuration requirements', ar: 'متطلبات الموديل ونظام الدفع والتجهيز', ru: 'Требования к модели, силовой установке и комплектации', es: 'Requisitos de modelo, motorización y configuración' },
      { en: 'Quantity and target price per unit', ar: 'الكمية والسعر المستهدف لكل وحدة', ru: 'Количество и целевая цена за единицу', es: 'Cantidad y precio objetivo por unidad' },
      { en: 'Destination market and any condition or mileage limits', ar: 'سوق الوجهة وأي حدود للحالة أو المسافة', ru: 'Рынок назначения и любые ограничения по состоянию или пробегу', es: 'Mercado de destino y cualquier límite de estado o kilometraje' },
    ],
    nextSteps: [
      { en: 'Submit your fleet or batch requirements', ar: 'أرسل متطلبات أسطولك أو دفعتك', ru: 'Отправьте требования к автопарку или партии', es: 'Envíe sus requisitos de flota o lote' },
      { en: 'We search for matching units', ar: 'نبحث عن وحدات مطابقة', ru: 'Ищем подходящие единицы', es: 'Buscamos unidades coincidentes' },
      { en: 'We present each unit with its own data and price', ar: 'نعرض كل وحدة ببياناتها وسعرها', ru: 'Представляем каждую единицу с её данными и ценой', es: 'Presentamos cada unidad con sus datos y precio' },
      { en: 'You select units and we confirm availability', ar: 'تختار الوحدات ونؤكد التوفر', ru: 'Вы выбираете единицы, мы подтверждаем наличие', es: 'Usted selecciona unidades y confirmamos la disponibilidad' },
    ],
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
