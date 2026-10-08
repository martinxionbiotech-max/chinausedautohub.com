import type { L10n } from '../l10n';

// Pillar — Find and Source Used Cars from China (Sourcing hub).
// Honest sourcing stance (§22/§23): requirement-driven sourcing, no artificial
// inventory. Maps the sourcing cluster and the five-step process, and routes to
// the cluster's deep pages, the services, the Trust cluster and the sub-sites.
// It deliberately does not repeat the deep pages' content.

export const sourcingPillar = {
  slug: 'sourcing',
  path: '/sourcing/',
  title: {
    en: 'Find and Source Used Cars from China — Sourcing Hub',
    ar: 'اعثر على سيارات مستعملة من الصين وورّدها — مركز التوريد',
    ru: 'Поиск и подбор подержанных автомобилей из Китая — центр подбора',
    es: 'Encuentre y abastezca coches usados desde China — centro de abastecimiento',
  },
  description: {
    en: 'How ChinaUsedAutoHub helps buyers source used cars from China: the honest sourcing stance, the five-step process (requirements → sourcing → verification → logistics → delivery), the sourcing topic map and the related services, Trust and sub-site resources.',
    ar: 'كيف يساعد ChinaUsedAutoHub المشترين على توريد السيارات المستعملة من الصين: موقف التوريد الصادق، والعملية الخماسية (المتطلبات ← التوريد ← التحقق ← الخدمات اللوجستية ← التسليم)، وخريطة مواضيع التوريد، والخدمات ذات الصلة، وموارد الثقة والمواقع الفرعية.',
    ru: 'Как ChinaUsedAutoHub помогает покупателям подбирать подержанные автомобили из Китая: честный подход к подбору, пятиэтапный процесс (требования → подбор → проверка → логистика → доставка), карта тем подбора и связанные услуги, Trust и ресурсы подсайтов.',
    es: 'Cómo ayuda ChinaUsedAutoHub a los compradores a abastecer coches usados desde China: el enfoque honesto de abastecimiento, el proceso de cinco pasos (requisitos → abastecimiento → verificación → logística → entrega), el mapa de temas de abastecimiento y los recursos relacionados de servicios, Trust y subsitios.',
  },
  h1: {
    en: 'Find and Source Used Cars from China',
    ar: 'اعثر على سيارات مستعملة من الصين وورّدها',
    ru: 'Поиск и подбор подержанных автомобилей из Китая',
    es: 'Encuentre y abastezca coches usados desde China',
  },
  intro: {
    en: 'Sourcing is how a buyer goes from a requirement — a brand, model, year, budget and destination — to a specific vehicle that can be verified, shipped and imported. This hub explains how we approach sourcing honestly, walks the five-step process, and maps every sourcing topic to its deep page.',
    ar: 'التوريد هو كيف ينتقل المشتري من متطلب — علامة وطراز وسنة وميزانية ووجهة — إلى مركبة محددة يمكن التحقق منها وشحنها واستيرادها. يشرح هذا المركز كيف نتعامل مع التوريد بصدق، ويستعرض العملية الخماسية، ويربط كل موضوع توريد بصفحته التفصيلية.',
    ru: 'Подбор — это как покупатель переходит от требования — марка, модель, год, бюджет и страна назначения — к конкретному автомобилю, который можно проверить, отправить и импортировать. Этот хаб объясняет, как мы честно подходим к подбору, описывает пятиэтапный процесс и связывает каждую тему подбора с её подробной страницей.',
    es: 'El abastecimiento es cómo un comprador pasa de un requisito — marca, modelo, año, presupuesto y destino — a un vehículo concreto que se puede verificar, enviar e importar. Este centro explica cómo abordamos el abastecimiento con honestidad, recorre el proceso de cinco pasos y enlaza cada tema de abastecimiento con su página detallada.',
  },
  sections: [
    {
      heading: {
        en: 'Our sourcing stance',
        ar: 'موقفنا من التوريد',
        ru: 'Наш подход к подбору',
        es: 'Nuestro enfoque de abastecimiento',
      },
      paragraphs: [
        {
          en: 'We source vehicles according to buyer requirements rather than presenting artificial inventory. That means we do not publish a fake stock list of vehicles we do not hold; instead, we start from your brief and search China\'s domestic market — wholesale markets, auctions, dealer and manufacturer channels — for candidates that match it, then present those candidates with the information we hold and confirm availability with the source before you commit. Any example vehicles shown on this site are labelled as illustrative examples, never as current inventory.',
          ar: 'نورّد المركبات وفق متطلبات المشتري بدلاً من عرض مخزون مصطنع. وهذا يعني أننا لا ننشر قائمة مخزون وهمية لمركبات لا نحتفظ بها؛ بل نبدأ من طلبك ونبحث في السوق المحلي الصيني — أسواق الجملة والمزادات وقنوات الوكلاء والمصنعين — عن مرشحين يطابقونه، ثم نعرض هؤلاء المرشحين بالمعلومات التي نحتفظ بها ونؤكد التوفر مع المصدر قبل التزامك. أي مركبات مثال تظهر على هذا الموقع موسومة كأمثلة توضيحية، لا كمخزون حالي أبداً.',
          ru: 'Мы подбираем автомобили под требования покупателя, а не представляем искусственное наличие. Это значит, что мы не публикуем фальшивый список наличия автомобилей, которых у нас нет; вместо этого мы исходим из вашего запроса и ищем на внутреннем рынке Китая — оптовых рынках, аукционах, дилерских и заводских каналах — кандидатов, которые ему соответствуют, затем представляем этих кандидатов с имеющейся у нас информацией и подтверждаем наличие у источника до вашего обязательства. Любые примеры автомобилей на этом сайте помечены как иллюстративные примеры, а не как текущее наличие.',
          es: 'Abastecemos vehículos según los requisitos del comprador en lugar de presentar inventario artificial. Esto significa que no publicamos una lista falsa de existencias que no tenemos; en su lugar, partimos de su encargo y buscamos en el mercado interno chino — mercados mayoristas, subastas, canales de concesionarios y fabricantes — candidatos que lo cumplan, los presentamos con la información que tenemos y confirmamos la disponibilidad con la fuente antes de que usted se comprometa. Cualquier vehículo de ejemplo en este sitio se etiqueta como ejemplo ilustrativo, nunca como inventario actual.',
        },
      ],
    },
    {
      heading: {
        en: 'The five-step process',
        ar: 'العملية الخماسية',
        ru: 'Пятиэтапный процесс',
        es: 'El proceso de cinco pasos',
      },
      paragraphs: [
        {
          en: 'Sourcing runs through five steps. Each step has its own deeper page or resource; this is the overview.',
          ar: 'يمر التوريد بخمس خطوات. لكل خطوة صفحتها التفصيلية أو موردها الخاص؛ وهذه نظرة عامة.',
          ru: 'Подбор проходит пять этапов. У каждого этапа есть своя подробная страница или ресурс; здесь общий обзор.',
          es: 'El abastecimiento recorre cinco pasos. Cada paso tiene su propia página o recurso; esto es la visión general.',
        },
      ],
      table: {
        headers: [
          { en: 'Step', ar: 'الخطوة', ru: 'Этап', es: 'Paso' },
          { en: 'What happens', ar: 'ما الذي يحدث', ru: 'Что происходит', es: 'Qué ocurre' },
          { en: 'Deep page', ar: 'الصفحة التفصيلية', ru: 'Подробная страница', es: 'Página detallada' },
        ],
        rows: [
          [
            { en: '1. Requirements', ar: '1. المتطلبات', ru: '1. Требования', es: '1. Requisitos' },
            { en: 'You define the brief: brand, model, year, budget, condition and destination', ar: 'تحدد الطلب: العلامة والطراز والسنة والميزانية والحالة والوجهة', ru: 'Вы определяете запрос: марка, модель, год, бюджет, состояние и страна назначения', es: 'Usted define el encargo: marca, modelo, año, presupuesto, estado y destino' },
            { en: 'The sourcing mechanism', ar: 'آلية التوريد', ru: 'Механизм подбора', es: 'El mecanismo de abastecimiento' },
          ],
          [
            { en: '2. Sourcing', ar: '2. التوريد', ru: '2. Подбор', es: '2. Abastecimiento' },
            { en: 'Candidates are searched across China\'s channels and presented to you', ar: 'يُبحث عن المرشحين عبر قنوات الصين ويُعرضون عليك', ru: 'Кандидаты ищутся по каналам Китая и представляются вам', es: 'Se buscan candidatos en los canales de China y se le presentan' },
            { en: 'Vehicle types and how sourcing works', ar: 'أنواع المركبات وكيف يعمل التوريد', ru: 'Типы автомобилей и как работает подбор', es: 'Tipos de vehículos y cómo funciona el abastecimiento' },
          ],
          [
            { en: '3. Verification', ar: '3. التحقق', ru: '3. Проверка', es: '3. Verificación' },
            { en: 'The candidate\'s documents, odometer, condition and export eligibility are checked', ar: 'تُفحص وثائق المرشح وعداد مسافته وحالته وأهليته للتصدير', ru: 'Проверяются документы, пробег, состояние и возможность экспорта кандидата', es: 'Se comprueban los documentos, el kilometraje, el estado y la elegibilidad de exportación del candidato' },
            { en: 'Export-ready screening and the Trust cluster', ar: 'غربلة الجاهزية للتصدير ومجموعة الثقة', ru: 'Проверка готовности к экспорту и кластер Trust', es: 'El filtrado de listo-para-exportar y el clúster Trust' },
          ],
          [
            { en: '4. Logistics', ar: '4. الخدمات اللوجستية', ru: '4. Логистика', es: '4. Logística' },
            { en: 'Export preparation, documentation and shipping are coordinated', ar: 'يُنسق تجهيز التصدير والتوثيق والشحن', ru: 'Координируются подготовка экспорта, документация и доставка', es: 'Se coordinan la preparación de exportación, la documentación y el envío' },
            { en: 'Shipping and export-process guides', ar: 'أدلة الشحن وعملية التصدير', ru: 'Руководства по доставке и процессу экспорта', es: 'Guías de envío y proceso de exportación' },
          ],
          [
            { en: '5. Delivery', ar: '5. التسليم', ru: '5. Доставка', es: '5. Entrega' },
            { en: 'The vehicle clears the destination\'s import rules and reaches you', ar: 'تخليص المركبة لقواعد الاستيراد في الوجهة ووصولها إليك', ru: 'Автомобиль проходит импортные правила назначения и достигает вас', es: 'El vehículo supera las normas de importación del destino y le llega' },
            { en: 'Destination Market rules', ar: 'قواعد سوق الوجهة', ru: 'Правила рынка назначения', es: 'Reglas de Market del destino' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'Sourcing topic map',
        ar: 'خريطة مواضيع التوريد',
        ru: 'Карта тем подбора',
        es: 'Mapa de temas de abastecimiento',
      },
      paragraphs: [
        {
          en: 'Six deep pages cover the sourcing knowledge layer. Each links below; this hub summarises the map without repeating their content.',
          ar: 'تغطي ست صفحات تفصيلية طبقة معرفة التوريد. كل منها مرتبط أدناه؛ ويلخّص هذا المركز الخريطة دون تكرار محتواها.',
          ru: 'Шесть подробных страниц покрывают уровень знаний о подборе. Каждая ссылка ниже; этот хаб обобщает карту, не повторяя их содержание.',
          es: 'Seis páginas detalladas cubren la capa de conocimiento de abastecimiento. Cada una se enlaza abajo; este centro resume el mapa sin repetir su contenido.',
        },
      ],
      topics: [
        {
          label: {
            en: 'How China Used Car Sourcing Works',
            ar: 'كيف يعمل توريد السيارات المستعملة من الصين',
            ru: 'Как работает подбор подержанных автомобилей в Китае',
            es: 'Cómo funciona el abastecimiento de coches usados en China',
          },
          description: {
            en: 'The channels, the platform role and the self-service vs delegation choice.',
            ar: 'القنوات ودور المنصة وخيار الخدمة الذاتية مقابل التفويض.',
            ru: 'Каналы, роль платформы и выбор между самостоятельным поиском и делегированием.',
            es: 'Los canales, el papel de la plataforma y la elección autoservicio frente a delegación.',
          },
          path: '/sourcing/how-china-used-car-sourcing-works/',
        },
        {
          label: {
            en: 'Used Car Sourcing From China',
            ar: 'توريد السيارات المستعملة من الصين',
            ru: 'Подбор подержанных автомобилей из Китая',
            es: 'Abastecimiento de coches usados desde China',
          },
          description: {
            en: 'The vehicle types — ex-demo, stock, trade-in, ex-fleet — and their risks.',
            ar: 'أنواع المركبات — العرض والمخزون والاستبدال والأساطيل — ومخاطرها.',
            ru: 'Типы автомобилей — демо, склад, трейд-ин, автопарк — и их риски.',
            es: 'Los tipos de vehículos — ex-demostración, stock, permuta, ex-flota — y sus riesgos.',
          },
          path: '/sourcing/used-car-sourcing-from-china/',
        },
        {
          label: {
            en: 'China EV Sourcing',
            ar: 'توريد السيارات الكهربائية من الصين',
            ru: 'Подбор электромобилей из Китая',
            es: 'Abastecimiento de VE desde China',
          },
          description: {
            en: 'Battery health, GB/T charging adaptation and destination EV policy.',
            ar: 'صحة البطارية وتكييف شحن GB/T وسياسة المركبات الكهربائية في الوجهة.',
            ru: 'Здоровье батареи, адаптация зарядки GB/T и политика страны назначения для электромобилей.',
            es: 'Salud de la batería, adaptación de carga GB/T y política de VE del destino.',
          },
          path: '/sourcing/china-ev-sourcing/',
        },
        {
          label: {
            en: 'BYD Sourcing',
            ar: 'توريد BYD',
            ru: 'Подбор BYD',
            es: 'Abastecimiento BYD',
          },
          description: {
            en: 'BYD vehicle traits, popular export models and the overseas channel picture.',
            ar: 'خصائص مركبات BYD ونماذج التصدير الشائعة وصورة القنوات الخارجية.',
            ru: 'Особенности автомобилей BYD, популярные экспортные модели и картина зарубежных каналов.',
            es: 'Características de los BYD, modelos de exportación populares y panorama de canales en el extranjero.',
          },
          path: '/sourcing/byd-sourcing/',
        },
        {
          label: {
            en: 'Chinese SUV Sourcing',
            ar: 'توريد سيارات الـ SUV الصينية',
            ru: 'Подбор китайских кроссоверов',
            es: 'Abastecimiento de SUV chinos',
          },
          description: {
            en: 'The popular export SUV nameplates and the market-fit checks.',
            ar: 'أسماء سيارات الـ SUV الشائعة للتصدير وفحوصات ملاءمة السوق.',
            ru: 'Популярные экспортные наименования SUV и проверки соответствия рынку.',
            es: 'Las denominaciones de SUV de exportación populares y las comprobaciones de encaje de mercado.',
          },
          path: '/sourcing/chinese-suv-sourcing/',
        },
        {
          label: {
            en: 'Export-Ready Vehicle Sourcing',
            ar: 'توريد المركبات الجاهزة للتصدير',
            ru: 'Подбор автомобилей, готовых к экспорту',
            es: 'Abastecimiento de vehículos listos para exportar',
          },
          description: {
            en: 'Age, emission and drive-side screening against destination rules.',
            ar: 'غربلة العمر والانبعاثات وجانب القيادة مقابل قواعد الوجهة.',
            ru: 'Проверка по возрасту, выбросам и стороне руля по правилам назначения.',
            es: 'Filtrado por antigüedad, emisiones y lado de conducción frente a las reglas del destino.',
          },
          path: '/sourcing/export-ready-vehicle-sourcing/',
        },
      ],
    },
    {
      heading: {
        en: 'Sourcing vs. platform services',
        ar: 'التوريد مقابل خدمات المنصة',
        ru: 'Подбор против услуг платформы',
        es: 'Abastecimiento frente a servicios de la plataforma',
      },
      paragraphs: [
        {
          en: 'This Sourcing section is the buyer-knowledge layer: how-to decision content that helps you source a vehicle yourself or brief us well. The Services section is the platform-service layer: what we do when you engage us — sourcing, inspection coordination, verification, export coordination, shipping, documentation, market research and fleet sourcing. Both exist so the knowledge and the service do not blur into each other.',
          ar: 'قسم التوريد هذا هو طبقة معرفة المشتري: محتوى قرار إرشادي يساعدك على توريد مركبة بنفسك أو على إعداد طلب جيد لنا. قسم الخدمات هو طبقة خدمة المنصة: ما نفعله عندما تتعامل معنا — التوريد وتنسيق الفحص والتحقق وتنسيق التصدير والشحن والتوثيق وأبحاث السوق وتوريد الأساطيل. كلاهما موجود كي لا تختلط المعرفة بالخدمة.',
          ru: 'Этот раздел «Подбор» — уровень знаний покупателя: контент для принятия решений, который помогает вам подобрать автомобиль самостоятельно или хорошо составить запрос для нас. Раздел «Услуги» — уровень сервиса платформы: что мы делаем, когда вы обращаетесь к нам, — подбор, координация осмотра, верификация, координация экспорта, доставка, документация, исследования рынка и подбор для автопарков. Оба существуют, чтобы знание и услуга не смешивались.',
          es: 'Esta sección de Abastecimiento es la capa de conocimiento del comprador: contenido de decisión que le ayuda a abastecer un vehículo usted mismo o a prepararnos bien un encargo. La sección de Servicios es la capa de servicio de la plataforma: lo que hacemos cuando nos contrata — abastecimiento, coordinación de inspección, verificación, coordinación de exportación, envío, documentación, investigación de mercado y abastecimiento de flotas. Ambos existen para que el conocimiento y el servicio no se confundan.',
        },
      ],
      links: [
        {
          path: '/services/',
          label: {
            en: 'Platform services — the Services hub',
            ar: 'خدمات المنصة — مركز الخدمات',
            ru: 'Услуги платформы — центр услуг',
            es: 'Servicios de la plataforma — el centro de Servicios',
          },
        },
        {
          path: '/services/vehicle-sourcing/',
          label: {
            en: 'The sourcing service specifically — Vehicle Sourcing',
            ar: 'خدمة التوريد تحديداً — توريد المركبات',
            ru: 'Именно сервис подбора — Подбор автомобилей',
            es: 'El servicio de abastecimiento en concreto — Abastecimiento de vehículos',
          },
        },
        {
          path: '/services/fleet-batch-sourcing/',
          label: {
            en: 'Volume sourcing — Fleet & Batch Sourcing',
            ar: 'التوريد بالكميات — توريد الأساطيل والدفعات',
            ru: 'Подбор по объёму — Подбор автопарков и партий',
            es: 'Abastecimiento por volumen — Abastecimiento de flotas y lotes',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Related resources',
        ar: 'موارد ذات صلة',
        ru: 'Связанные ресурсы',
        es: 'Recursos relacionados',
      },
      links: [
        {
          path: '/trust/',
          label: {
            en: 'How to trust a sourcing decision — Trust cluster',
            ar: 'كيف تثق بقرار التوريد — مجموعة الثقة',
            ru: 'Как доверять решению о подборе — кластер Trust',
            es: 'Cómo confiar en una decisión de abastecimiento — clúster Trust',
          },
        },
        {
          slug: 'how-to-verify-china-used-car-exporter',
          label: {
            en: 'Verify the exporter — How to Verify a China Used Car Exporter',
            ar: 'تحقق من المصدّر — كيف تتحقق من مصدّر سيارات مستعملة صيني',
            ru: 'Проверьте экспортёра — Как проверить экспортёра подержанных автомобилей из Китая',
            es: 'Verifique al exportador — Cómo verificar un exportador de coches usados de China',
          },
        },
        {
          href: 'https://data.chinausedautohub.com/',
          label: {
            en: 'Vehicle specifications — Data sub-site',
            ar: 'مواصفات المركبات — الموقع الفرعي للبيانات',
            ru: 'Характеристики автомобилей — подсайт Data',
            es: 'Especificaciones de vehículos — subsitio Data',
          },
        },
        {
          href: 'https://market.chinausedautohub.com/countries/',
          label: {
            en: 'Destination import rules — Market sub-site',
            ar: 'قواعد الاستيراد حسب الوجهة — الموقع الفرعي للأسواق',
            ru: 'Правила импорта стран назначения — подсайт Market',
            es: 'Normas de importación por destino — subsitio Market',
          },
        },
        {
          href: 'https://tool.chinausedautohub.com/',
          label: {
            en: 'Cost and compatibility tools — Tools sub-site',
            ar: 'أدوات التكلفة والتوافق — الموقع الفرعي للأدوات',
            ru: 'Инструменты стоимости и совместимости — подсайт Tools',
            es: 'Herramientas de coste y compatibilidad — subsitio Tools',
          },
        },
        {
          href: 'https://company.chinausedautohub.com/',
          label: {
            en: 'Exporter due-diligence directory — Companies sub-site',
            ar: 'دليل العناية الواجبة للمصدّرين — الموقع الفرعي للشركات',
            ru: 'Справочник должной проверки экспортёров — подсайт Companies',
            es: 'Directorio de diligencia debida de exportadores — subsitio Companies',
          },
        },
        {
          path: '/contact/',
          label: {
            en: 'Start a sourcing request — Contact',
            ar: 'ابدأ طلب توريد — اتصل بنا',
            ru: 'Начните запрос на подбор — Контакты',
            es: 'Inicie una solicitud de abastecimiento — Contacto',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Last reviewed and verification status',
        ar: 'آخر مراجعة وحالة التحقق',
        ru: 'Дата последней проверки и статус верификации',
        es: 'Última revisión y estado de verificación',
      },
      paragraphs: [
        {
          en: 'Last reviewed: 2026-10-08. This hub describes our sourcing stance and the general sourcing process. It lists no inventory, no VINs, no mileage, no stock numbers and no real-time prices; any example vehicles elsewhere on the site are labelled as illustrative examples. A specific vehicle\'s availability, condition and export eligibility must be confirmed from its own documents, inspection and the destination\'s current rules before committing.',
          ar: 'آخر مراجعة: 2026-10-08. يصف هذا المركز موقفنا من التوريد وعملية التوريد العامة. وهو لا يدرج أي مخزون أو أرقام هويكل (VIN) أو مسافات أو أرقام مخزون أو أسعار لحظية؛ وأي مركبات مثال في مكان آخر من الموقع موسومة كأمثلة توضيحية. يجب تأكيد توفر المركبة المحددة وحالتها وأهليتها للتصدير من وثائقها وفحصها وقواعد الوجهة الحالية قبل الالتزام.',
          ru: 'Последняя проверка: 2026-10-08. Этот хаб описывает наш подход к подбору и общий процесс подбора. Здесь нет наличия, VIN, пробега, складских номеров и актуальных цен; любые примеры автомобилей в других местах сайта помечены как иллюстративные примеры. Наличие, состояние и возможность экспорта конкретного автомобиля должны подтверждаться его документами, осмотром и действующими правилами назначения до принятия обязательств.',
          es: 'Última revisión: 2026-10-08. Este centro describe nuestro enfoque de abastecimiento y el proceso general de abastecimiento. No enumera inventario, VIN, kilometraje, números de stock ni precios en tiempo real; cualquier vehículo de ejemplo en otras partes del sitio se etiqueta como ejemplo ilustrativo. La disponibilidad, el estado y la elegibilidad de exportación de un vehículo concreto deben confirmarse con sus documentos, inspección y las normas vigentes del destino antes de comprometerse.',
        },
      ],
    },
  ],
};
