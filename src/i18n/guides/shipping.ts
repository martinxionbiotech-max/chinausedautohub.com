import type { L10n } from '../l10n';

// Guide 5 — Shipping a Used Car from China (methods, no fixed rates).

export const shipping = {
  slug: 'shipping',
  title: {
    en: 'Shipping a Used Car from China — Methods Explained',
    ar: 'شحن سيارة مستعملة من الصين — شرح الطرق',
    ru: 'Доставка подержанного автомобиля из Китая — способы',
    es: 'Envío de un coche usado desde China — métodos explicados',
  },
  description: {
    en: 'Shipping methods for used vehicles from China — RoRo, container and car carrier — plus ports, transit time, freight, insurance and charges.',
    ar: 'طرق شحن المركبات المستعملة من الصين — RoRo والحاوية وناقلات السيارات — إضافة إلى الموانئ ومدة النقل والشحن والتأمين والرسوم.',
    ru: 'Способы доставки подержанных автомобилей из Китая — RoRo, контейнер и автовоз — а также порты, срок, фрахт, страховка и сборы.',
    es: 'Métodos de envío de vehículos usados desde China — RoRo, contenedor y transportista — además de puertos, tiempo de tránsito, flete, seguro y gastos.',
  },
  h1: {
    en: 'Shipping a Used Car from China',
    ar: 'شحن سيارة مستعملة من الصين',
    ru: 'Доставка подержанного автомобиля из Китая',
    es: 'Envío de un coche usado desde China',
  },
  summary: {
    en: 'Shipping methods — RoRo, container and car carrier — explained.',
    ar: 'شرح طرق الشحن — RoRo والحاوية وناقلات السيارات.',
    ru: 'Объяснение способов доставки — RoRo, контейнер и автовоз.',
    es: 'Métodos de envío — RoRo, contenedor y transportista — explicados.',
  },
  sections: [
    {
      heading: {
        en: 'Shipping methods at a glance',
        ar: 'طرق الشحن بلمحة',
        ru: 'Способы доставки вкратце',
        es: 'Métodos de envío de un vistazo',
      },
      paragraphs: [
        {
          en: 'Vehicles are moved from a China port to the destination port using one of three common methods: roll-on/roll-off (RoRo), container shipping, or a car carrier. The right method depends on the vehicle, the destination and the buyer\'s requirements.',
          ar: 'تُنقل المركبات من ميناء صيني إلى ميناء الوجهة بإحدى ثلاث طرق شائعة: النقل بالتدحرج (RoRo) أو الشحن بالحاويات أو ناقلات السيارات. تعتمد الطريقة المناسبة على المركبة والوجهة ومتطلبات المشتري.',
          ru: 'Автомобили перевозятся из китайского порта в порт назначения одним из трёх распространённых способов: ро-ро (RoRo), контейнер или автовоз. Подходящий способ зависит от автомобиля, страны назначения и требований покупателя.',
          es: 'Los vehículos se trasladan desde un puerto chino al puerto de destino mediante uno de tres métodos habituales: roll-on/roll-off (RoRo), contenedor o transportista. El método correcto depende del vehículo, el destino y los requisitos del comprador.',
        },
      ],
    },
    {
      heading: {
        en: 'RoRo (roll-on/roll-off)',
        ar: 'النقل بالتدحرج (RoRo)',
        ru: 'Ро-ро (RoRo)',
        es: 'RoRo (roll-on/roll-off)',
      },
      paragraphs: [
        {
          en: 'RoRo ships vehicles by driving them onto a dedicated vessel and securing them for the voyage. It is a common and cost-efficient method for running, self-propelled vehicles. The vehicle must be able to move under its own power.',
          ar: 'تنقل سفن RoRo المركبات بقيادتها إلى داخل سفينة مخصصة وتثبيتها للرحلة. وهي طريقة شائعة وفعّالة من حيث التكلفة للمركبات الصالحة للحركة الذاتية. يجب أن تكون المركبة قادرة على التحرك بقوتها الذاتية.',
          ru: 'Ро-ро суда перевозят автомобили, заезжающие на борт своим ходом и закрепляемые на время рейса. Это распространённый и экономичный способ для исправных самоходных автомобилей. Автомобиль должен двигаться своим ходом.',
          es: 'Los buques RoRo transportan vehículos conduciéndolos a bordo de un barco dedicado y asegurándolos para el viaje. Es un método común y rentable para vehículos en marcha y autopropulsados. El vehículo debe poder moverse por sí mismo.',
        },
      ],
    },
    {
      heading: {
        en: 'Container shipping',
        ar: 'الشحن بالحاويات',
        ru: 'Контейнерная перевозка',
        es: 'Envío en contenedor',
      },
      paragraphs: [
        {
          en: 'A vehicle can be loaded into a shipping container, which protects it from the elements and allows consolidation with other goods. Container shipping is often chosen for high-value vehicles, for non-running vehicles, or when extra protection or consolidation is wanted.',
          ar: 'يمكن تحميل المركبة في حاوية شحن، ما يحميها من العوامل الجوية ويسمح بتجميعها مع بضائع أخرى. يُختار الشحن بالحاويات غالباً للمركبات عالية القيمة أو غير الصالحة للحركة أو عند الرغبة في حماية إضافية أو تجميع.',
          ru: 'Автомобиль можно погрузить в контейнер, который защищает его от внешней среды и позволяет консолидировать с другими грузами. Контейнер часто выбирают для дорогих автомобилей, неисправных машин или когда нужна дополнительная защита или консолидация.',
          es: 'Un vehículo puede cargarse en un contenedor, que lo protege de los elementos y permite consolidarlo con otras mercancías. El contenedor se elige a menudo para vehículos de alto valor, no operativos, o cuando se desea protección o consolidación adicional.',
        },
      ],
    },
    {
      heading: {
        en: 'Car carrier',
        ar: 'ناقلات السيارات',
        ru: 'Автовоз',
        es: 'Transportista de vehículos',
      },
      paragraphs: [
        {
          en: 'Car carriers are vessels or trailers built specifically to move many vehicles at once. For sea freight this overlaps with RoRo; for land legs it means dedicated vehicle trailers. The applicable method depends on the route and the vehicle.',
          ar: 'ناقلات السيارات هي سفن أو مقطورات مصممة خصيصاً لنقل عدة مركبات دفعة واحدة. في الشحن البحري يتداخل ذلك مع RoRo؛ أما في الأجزاء البرية فيعني مقطورات مخصصة للمركبات. تعتمد الطريقة المطبقة على المسار والمركبة.',
          ru: 'Автовозы — это суда или прицепы, созданные специально для перевозки сразу многих автомобилей. В морских перевозках это пересекается с RoRo, а на сухопутных участках означает специализированные автоприцепы. Применимый способ зависит от маршрута и автомобиля.',
          es: 'Los transportistas de vehículos son buques o remolques construidos específicamente para mover muchos vehículos a la vez. En el transporte marítimo se solapa con el RoRo; en los tramos terrestres significa remolques dedicados. El método aplicable depende de la ruta y el vehículo.',
        },
      ],
    },
    {
      heading: {
        en: 'China port and destination port',
        ar: 'الميناء الصيني وميناء الوجهة',
        ru: 'Китайский порт и порт назначения',
        es: 'Puerto chino y puerto de destino',
      },
      paragraphs: [
        {
          en: 'Shipping is arranged from a China port (the origin) to your destination port. The origin port is often the port nearest the vehicle\'s location; the destination port is your choice. Both affect the route, transit time and cost.',
          ar: 'يُرتب الشحن من ميناء صيني (المنشأ) إلى ميناء وجهتك. غالباً ما يكون ميناء المنشأ أقرب ميناء إلى موقع المركبة؛ وميناء الوجهة هو اختيارك. يؤثر كلاهما على المسار ومدة النقل والتكلفة.',
          ru: 'Доставка организуется из китайского порта (отправление) в ваш порт назначения. Порт отправления — обычно ближайший к месту нахождения автомобиля; порт назначения выбираете вы. Оба влияют на маршрут, срок и стоимость.',
          es: 'El envío se organiza desde un puerto chino (origen) hasta su puerto de destino. El puerto de origen suele ser el más cercano a la ubicación del vehículo; el de destino es su elección. Ambos afectan a la ruta, el tiempo de tránsito y el coste.',
        },
      ],
    },
    {
      heading: {
        en: 'Transit time',
        ar: 'مدة النقل',
        ru: 'Время в пути',
        es: 'Tiempo de tránsito',
      },
      paragraphs: [
        {
          en: 'Transit time depends on the route, the shipping method and the schedule. It is confirmed as an estimate when you request a quote — it is not a fixed figure, because schedules and weather can affect timing.',
          ar: 'تعتمد مدة النقل على المسار وطريقة الشحن والجدول. تُؤكد كتقدير عند طلب عرض سعر — وهي ليست رقماً ثابتاً لأن الجداول والطقس قد يؤثران على التوقيت.',
          ru: 'Время в пути зависит от маршрута, способа доставки и расписания. Оно подтверждается как оценка при запросе расчёта — это не фиксированная цифра, поскольку расписание и погода могут влиять на сроки.',
          es: 'El tiempo de tránsito depende de la ruta, el método de envío y el calendario. Se confirma como estimación al solicitar la cotización; no es una cifra fija, porque el calendario y el clima pueden afectar al tiempo.',
        },
      ],
    },
    {
      heading: {
        en: 'Freight, insurance and charges',
        ar: 'الشحن والتأمين والرسوم',
        ru: 'Фрахт, страховка и сборы',
        es: 'Flete, seguro y gastos',
      },
      paragraphs: [
        {
          en: 'The full shipping cost is made up of several components — freight (the transport itself), insurance, and port charges at origin and destination. How much of each you arrange and pay yourself depends on the trade term; see the FOB/CFR/CIF guide for who pays what, and the landed cost guide for how these add up.',
          ar: 'تتكون تكلفة الشحن الكاملة من عدة مكونات — الشحن (النقل نفسه)، والتأمين، ورسوم الموانئ في المنشأ والوجهة. يعتمد مقدار ما ترتبه وتدفعه بنفسك من كل مكوّن على مصطلح التجارة؛ راجع دليل FOB/CFR/CIF لمعرفة من يدفع ماذا، ودليل التكلفة النهائية لمعرفة كيف تُجمع هذه المكونات.',
          ru: 'Полная стоимость доставки состоит из нескольких компонентов — фрахт (сама перевозка), страховка и портовые сборы в портах отправления и назначения. Сколько из этого вы организуете и оплачиваете сами, зависит от торгового термина; см. руководство FOB/CFR/CIF, кто за что платит, и руководство по итоговой стоимости, как это суммируется.',
          es: 'El coste total del envío se compone de varios elementos — el flete (el transporte en sí), el seguro y los gastos portuarios en origen y destino. Cuánto de cada uno gestiona y paga usted depende del término comercial; consulte la guía FOB/CFR/CIF sobre quién paga qué, y la guía de coste de desembarco sobre cómo se suman.',
        },
      ],
      links: [
        {
          slug: 'fob-vs-cif-vs-cfr',
          label: {
            en: 'Who pays for what — see the FOB/CFR/CIF guide',
            ar: 'من يدفع ماذا — راجع دليل FOB/CFR/CIF',
            ru: 'Кто за что платит — см. руководство FOB/CFR/CIF',
            es: 'Quién paga qué — consulte la guía FOB/CFR/CIF',
          },
        },
        {
          slug: 'landed-cost',
          label: {
            en: 'How these add up — see the Landed Cost guide',
            ar: 'كيف تُجمع هذه المكونات — راجع دليل التكلفة النهائية',
            ru: 'Как это суммируется — см. руководство по итоговой стоимости',
            es: 'Cómo se suman — consulte la guía de coste de desembarco',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Choosing between RoRo and container',
        ar: 'الاختيار بين RoRo والحاوية',
        ru: 'Выбор между RoRo и контейнером',
        es: 'Elegir entre RoRo y contenedor',
      },
      paragraphs: [
        {
          en: 'RoRo is usually the more cost-efficient choice for a running, self-propelled vehicle, because the vehicle drives on and off the vessel. Container shipping adds protection and allows consolidation, and is often preferred for high-value vehicles, non-running vehicles, or when you want the extra security of an enclosed container.',
          ar: 'عادةً ما يكون RoRo الخيار الأكثر كفاءة من حيث التكلفة للمركبة الصالحة للحركة الذاتية، لأن المركبة تصعد وتنزل من السفينة بنفسها. يضيف الشحن بالحاويات حماية ويسمح بالتجميع، وغالبًا ما يُفضل للمركبات عالية القيمة أو غير الصالحة للحركة أو عندما تريد الأمان الإضافي لحاوية مغلقة.',
          ru: 'RoRo обычно экономичнее для исправного самоходного автомобиля, потому что машина сама заезжает на судно и съезжает с него. Контейнер добавляет защиту и позволяет консолидацию, и его часто выбирают для дорогих автомобилей, неисправных машин или когда нужна дополнительная защита закрытого контейнера.',
          es: 'El RoRo suele ser la opción más rentable para un vehículo en marcha y autopropulsado, porque el vehículo sube y baja del buque por sí mismo. El contenedor añade protección y permite la consolidación, y suele preferirse para vehículos de alto valor, no operativos, o cuando se desea la seguridad extra de un contenedor cerrado.',
        },
        {
          en: 'We recommend a method based on the vehicle, the destination and your requirements, and confirm it with you before booking.',
          ar: 'نوصي بطريقة بناءً على المركبة والوجهة ومتطلباتك، ونؤكدها معك قبل الحجز.',
          ru: 'Мы рекомендуем способ на основе автомобиля, страны назначения и ваших требований и подтверждаем его с вами до бронирования.',
          es: 'Recomendamos un método según el vehículo, el destino y sus requisitos, y lo confirmamos con usted antes de reservar.',
        },
      ],
    },
    {
      heading: {
        en: 'Factors that affect the port and route',
        ar: 'العوامل التي تؤثر على الميناء والمسار',
        ru: 'Факторы, влияющие на порт и маршрут',
        es: 'Factores que afectan al puerto y la ruta',
      },
      paragraphs: [
        {
          en: 'The origin port is usually the port nearest the vehicle\'s location, which affects the inland transport leg. The destination port is your choice, and choosing a major port with frequent sailings can improve schedule options. Both ports affect the route, transit time and total cost.',
          ar: 'يكون ميناء المنشأ عادةً أقرب ميناء إلى موقع المركبة، ما يؤثر على مرحلة النقل الداخلي. وميناء الوجهة هو اختيارك، وقد يؤدي اختيار ميناء رئيسي برحلات متكررة إلى تحسين خيارات الجدول. يؤثر كلا الميناءين على المسار ومدة النقل والتكلفة الإجمالية.',
          ru: 'Порт отправления — обычно ближайший к месту нахождения автомобиля, что влияет на внутренний участок перевозки. Порт назначения выбираете вы, и выбор крупного порта с частыми рейсами может улучшить варианты расписания. Оба порта влияют на маршрут, срок и итоговую стоимость.',
          es: 'El puerto de origen suele ser el más cercano a la ubicación del vehículo, lo que afecta al tramo de transporte interior. El puerto de destino es su elección, y elegir un puerto principal con salidas frecuentes puede mejorar las opciones de calendario. Ambos puertos afectan a la ruta, el tiempo de tránsito y el coste total.',
        },
      ],
    },
    {
      heading: {
        en: 'Understanding insurance for vehicle shipping',
        ar: 'فهم التأمين على شحن المركبات',
        ru: 'Понимание страховки при доставке автомобиля',
        es: 'Entender el seguro del envío de vehículos',
      },
      paragraphs: [
        {
          en: 'Marine insurance covers the vehicle against loss or damage in transit. Whether the seller or you arrange insurance depends on the trade term — the FOB/CFR/CIF guide explains who pays what. Shipping itself covers only the physical movement of the vehicle.',
          ar: 'يغطي التأمين البحري المركبة ضد الفقد أو التلف أثناء النقل. يعتمد ما إذا كان البائع أو أنت يرتب التأمين على مصطلح التجارة — يشرح دليل FOB/CFR/CIF من يدفع ماذا. أما الشحن نفسه فيغطي فقط الحركة المادية للمركبة.',
          ru: 'Морская страховка покрывает автомобиль от утраты или повреждения во время перевозки. Кто оформляет страховку — продавец или вы, зависит от торгового термина; руководство FOB/CFR/CIF объясняет, кто за что платит. Сама доставка покрывает только физическое перемещение автомобиля.',
          es: 'El seguro marítimo cubre el vehículo contra pérdida o daños durante el tránsito. Si el seguro lo gestiona el vendedor o usted depende del término comercial; la guía FOB/CFR/CIF explica quién paga qué. El envío en sí solo cubre el movimiento físico del vehículo.',
        },
      ],
      links: [
        {
          slug: 'fob-vs-cif-vs-cfr',
          label: {
            en: 'Who pays for insurance — see the FOB/CFR/CIF guide',
            ar: 'من يدفع التأمين — راجع دليل FOB/CFR/CIF',
            ru: 'Кто платит за страховку — см. руководство FOB/CFR/CIF',
            es: 'Quién paga el seguro — consulte la guía FOB/CFR/CIF',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Preparing the vehicle for shipment',
        ar: 'تجهيز المركبة للشحن',
        ru: 'Подготовка автомобиля к отправке',
        es: 'Preparar el vehículo para el envío',
      },
      paragraphs: [
        {
          en: 'Before shipment, the vehicle is typically inspected, its identity is checked against its documents, and any personal items are removed. Fuel levels and battery condition may need to meet carrier requirements, especially for electric vehicles. We coordinate these steps at the origin.',
          ar: 'قبل الشحن، تُفحص المركبة عادةً، وتُتحقق هويتها مقابل وثائقها، وتُزال أي أغراض شخصية. قد تحتاج مستويات الوقود وحالة البطارية إلى تلبية متطلبات الناقل، خاصة للمركبات الكهربائية. ننسق هذه الخطوات في المنشأ.',
          ru: 'Перед отправкой автомобиль обычно осматривается, его идентичность сверяется с документами, а личные вещи убираются. Уровень топлива и состояние батареи могут требоваться перевозчиком, особенно для электромобилей. Мы координируем эти шаги в пункте отправления.',
          es: 'Antes del envío, el vehículo se inspecciona normalmente, se comprueba su identidad con los documentos y se retiran los objetos personales. Los niveles de combustible y el estado de la batería pueden tener que cumplir los requisitos del transportista, especialmente en los VE. Coordinamos estos pasos en origen.',
        },
      ],
    },
    {
      heading: {
        en: 'What to expect at the destination port',
        ar: 'ما الذي تتوقعه في ميناء الوجهة',
        ru: 'Чего ожидать в порту назначения',
        es: 'Qué esperar en el puerto de destino',
      },
      paragraphs: [
        {
          en: 'At the destination, the vehicle is unloaded and must clear customs before release. Duties, taxes and any inspection or registration requirements are set by the destination country. Your clearing agent (or we, where arranged) handles these steps; the bill of lading is the key document for release.',
          ar: 'في الوجهة، تُفرغ المركبة ويجب تخليصها جمركيًا قبل الإفراج. تحدد الرسوم والضرائب وأي متطلبات فحص أو تسجيل بلد الوجهة. يتولى وكيل التخليص لديك (أو نحن، حيثما تم الترتيب) هذه الخطوات؛ وبوليصة الشحن هي الوثيقة الأساسية للإفراج.',
          ru: 'В порту назначения автомобиль выгружается и должен пройти таможню до выпуска. Пошлины, налоги и любые требования к проверке или регистрации устанавливаются страной назначения. Ваш агент по оформлению (или мы, если это оговорено) выполняет эти шаги; коносамент — ключевой документ для выпуска.',
          es: 'En el destino, el vehículo se descarga y debe pasar la aduana antes de su liberación. Los aranceles, impuestos y cualquier requisito de inspección o matriculación los fija el país de destino. Su agente de despacho (o nosotros, si así se acordó) gestiona estos pasos; el conocimiento de embarque es el documento clave para la liberación.',
        },
      ],
    },
    {
      heading: {
        en: 'How to compare shipping quotes',
        ar: 'كيف تقارن عروض الشحن',
        ru: 'Как сравнивать предложения по доставке',
        es: 'Cómo comparar cotizaciones de envío',
      },
      paragraphs: [
        {
          en: 'When comparing quotes, look at what is included: freight only, or also insurance, origin and destination port charges, and inland transport. A lower headline price can hide excluded charges. Compare like for like, and confirm the full landed picture before deciding.',
          ar: 'عند مقارنة العروض، انظر إلى ما هو مشمول: الشحن فقط، أم أيضًا التأمين ورسوم موانئ المنشأ والوجهة والنقل الداخلي. قد يخفي السعر الرئيسي المنخفض رسومًا مستبعدة. قارن بالمثل بالمثل، وأكد الصورة النهائية الكاملة قبل اتخاذ القرار.',
          ru: 'Сравнивая предложения, смотрите, что входит: только фрахт или также страховка, портовые сборы в портах отправления и назначения и внутренняя доставка. Более низкая стартовая цена может скрывать исключённые сборы. Сравнивайте сопоставимое и подтверждайте полную итоговую картину до решения.',
          es: 'Al comparar cotizaciones, mire qué incluye: solo el flete, o también el seguro, los gastos portuarios de origen y destino y el transporte interior. Un precio principal más bajo puede ocultar gastos excluidos. Compare lo comparable y confirme el panorama de desembarco completo antes de decidir.',
        },
      ],
    },
    {
      heading: {
        en: 'Single vehicle vs consolidated shipments',
        ar: 'مركبة واحدة مقابل الشحنات المجمعة',
        ru: 'Одиночная отправка или консолидированная',
        es: 'Envíos individuales frente a consolidados',
      },
      paragraphs: [
        {
          en: 'Shipping a single vehicle is straightforward. For multiple vehicles, consolidation — for example, several vehicles in one container or on one RoRo sailing — can improve efficiency and reduce per-unit handling. The best approach depends on your volume and destination.',
          ar: 'شحن مركبة واحدة أمر مباشر. أما للمركبات المتعددة، فقد يحسّن التجميع — مثل عدة مركبات في حاوية واحدة أو على رحلة RoRo واحدة — الكفاءة ويقلل المناولة لكل وحدة. يعتمد النهج الأفضل على حجمك ووجهتك.',
          ru: 'Отправить один автомобиль просто. Для нескольких машин консолидация — например, несколько автомобилей в одном контейнере или на одном рейсе RoRo — может повысить эффективность и снизить обработку на единицу. Лучший подход зависит от объёма и страны назначения.',
          es: 'Enviar un solo vehículo es sencillo. Para varios vehículos, la consolidación — por ejemplo, varios vehículos en un contenedor o en una misma salida RoRo — puede mejorar la eficiencia y reducir la manipulación por unidad. El mejor enfoque depende de su volumen y destino.',
        },
      ],
    },
    {
      heading: {
        en: 'Communication during transit',
        ar: 'التواصل أثناء النقل',
        ru: 'Коммуникация во время перевозки',
        es: 'Comunicación durante el tránsito',
      },
      paragraphs: [
        {
          en: 'Once the vehicle is on the water, we share the tracking reference and keep you informed of key milestones — loading, departure, arrival and release. If anything changes, tell us promptly so we can adjust. Good communication prevents small issues from becoming delays.',
          ar: 'بمجرد أن تكون المركبة في البحر، نشارك مرجع التتبع ونبقيك على اطلاع بالمعالم الرئيسية — التحميل والمغادرة والوصول والإفراج. إذا تغير أي شيء، أخبرنا فورًا حتى نتمكن من التعديل. التواصل الجيد يمنع المشكلات الصغيرة من التحول إلى تأخيرات.',
          ru: 'После того как автомобиль в пути, мы делимся номером для отслеживания и сообщаем о ключевых этапах — погрузка, отправление, прибытие и выпуск. Если что-то меняется, сообщите нам сразу, чтобы мы могли скорректировать. Хорошая коммуникация не даёт мелким проблемам стать задержками.',
          es: 'Una vez que el vehículo está en el mar, compartimos la referencia de seguimiento y le informamos de los hitos clave: carga, salida, llegada y liberación. Si algo cambia, avísenos de inmediato para ajustar. Una buena comunicación evita que pequeños problemas se conviertan en retrasos.',
        },
      ],
    },
    {
      heading: {
        en: 'Choosing the origin port',
        ar: 'اختيار ميناء المنشأ',
        ru: 'Выбор порта отправления',
        es: 'Elegir el puerto de origen',
      },
      paragraphs: [
        {
          en: 'The origin port is usually the one nearest the vehicle\'s location, which keeps the inland transport leg short and simple. In some cases a different port offers better sailing options for your destination. We recommend the practical choice for your vehicle and route.',
          ar: 'يكون ميناء المنشأ عادةً الأقرب إلى موقع المركبة، ما يبقي مرحلة النقل الداخلي قصيرة وبسيطة. في بعض الحالات يوفر ميناء آخر خيارات إبحار أفضل لوجهتك. نوصي بالخيار العملي لمركبتك ومسارك.',
          ru: 'Порт отправления обычно ближайший к месту нахождения автомобиля, что делает внутренний участок коротким и простым. В некоторых случаях другой порт предлагает лучшие варианты рейсов для вашей страны назначения. Мы рекомендуем практичный вариант для вашего автомобиля и маршрута.',
          es: 'El puerto de origen suele ser el más cercano a la ubicación del vehículo, lo que mantiene el tramo interior corto y sencillo. En algunos casos otro puerto ofrece mejores salidas para su destino. Recomendamos la opción práctica para su vehículo y ruta.',
        },
      ],
    },
    {
      heading: {
        en: 'Transit milestones explained',
        ar: 'شرح معالم النقل',
        ru: 'Этапы перевозки: объяснение',
        es: 'Hitos del tránsito explicados',
      },
      paragraphs: [
        {
          en: 'A shipment passes through predictable milestones: pickup and inland transport, arrival and loading at the origin port, departure, arrival at the destination port, unloading, and release. Tracking each milestone lets you plan the destination-side steps in advance.',
          ar: 'تمر الشحنة بمعالم يمكن التنبؤ بها: الاستلام والنقل الداخلي، والوصول والتحميل في ميناء المنشأ، والمغادرة، والوصول إلى ميناء الوجهة، والتفريغ، والإفراج. إن تتبع كل معلم يتيح لك التخطيط لخطوات جانب الوجهة مسبقًا.',
          ru: 'Отправка проходит предсказуемые этапы: получение и внутренняя перевозка, прибытие и погрузка в порту отправления, отправление, прибытие в порт назначения, выгрузка и выпуск. Отслеживание каждого этапа позволяет заранее планировать шаги на стороне назначения.',
          es: 'Un envío pasa por hitos predecibles: recogida y transporte interior, llegada y carga en el puerto de origen, salida, llegada al puerto de destino, descarga y liberación. Seguir cada hito le permite planificar con antelación los pasos del lado de destino.',
        },
      ],
    },
    {
      heading: {
        en: 'Handling damage or delay',
        ar: 'معالجة التلف أو التأخير',
        ru: 'Действия при повреждении или задержке',
        es: 'Gestionar daños o retrasos',
      },
      paragraphs: [
        {
          en: 'If a vehicle is damaged in transit or a shipment is delayed, the first step is to document it and notify the carrier through the proper channel — the bill of lading and insurance documents are the reference. We help coordinate this. Documenting promptly protects any insurance claim.',
          ar: 'إذا تضررت المركبة أثناء النقل أو تأخرت الشحنة، فالخطوة الأولى هي التوثيق وإبلاغ الناقل عبر القناة الصحيحة — وبوليصة الشحن ووثائق التأمين هي المرجع. نساعد في تنسيق ذلك. التوثيق الفوري يحمي أي مطالبة تأمين.',
          ru: 'Если автомобиль повреждён в пути или отправка задержалась, первый шаг — задокументировать и уведомить перевозчика по правильному каналу; коносамент и страховые документы — ориентир. Мы помогаем это скоординировать. Своевременная фиксация защищает страховую претензию.',
          es: 'Si un vehículo se daña en tránsito o un envío se retrasa, el primer paso es documentarlo y notificar al transportista por el canal adecuado; el conocimiento de embarque y los documentos del seguro son la referencia. Ayudamos a coordinarlo. Documentarlo con prontitud protege cualquier reclamación de seguro.',
        },
      ],
    },
    {
      heading: {
        en: 'How shipping is arranged',
        ar: 'كيف يُرتب الشحن',
        ru: 'Как организуется доставка',
        es: 'Cómo se organiza el envío',
      },
      paragraphs: [
        {
          en: 'Tell us the vehicle and your destination port. We recommend a shipping method for your case and provide a shipping quote together with the export quote. On confirmation, we coordinate the shipment and its documents.',
          ar: 'أخبرنا بالمركبة وميناء وجهتك. نوصي بطريقة شحن لحالتك ونقدم عرض شحن مع عرض التصدير. عند التأكيد، ننسق الشحنة ووثائقها.',
          ru: 'Сообщите нам автомобиль и порт назначения. Мы порекомендуем способ доставки для вашего случая и дадим расчёт доставки вместе с расчётом экспорта. После подтверждения координируем отправку и её документы.',
          es: 'Indíquenos el vehículo y su puerto de destino. Recomendamos un método de envío para su caso y damos una cotización de envío junto con la de exportación. Tras la confirmación, coordinamos el envío y sus documentos.',
        },
      ],
    },
    {
      heading: {
        en: 'Decision matrix — RoRo vs container',
        ar: 'مصفوفة القرار — RoRo مقابل الحاوية',
        ru: 'Матрица решений — RoRo или контейнер',
        es: 'Matriz de decisión — RoRo frente a contenedor',
      },
      paragraphs: [
        {
          en: 'The right method depends on the vehicle, its value and your destination. Use this matrix to narrow the choice, then confirm the practical method with us before booking.',
          ar: 'تعتمد الطريقة المناسبة على المركبة وقيمتها ووجهتك. استخدم هذه المصفوفة لتضييق الاختيار، ثم أكد الطريقة العملية معنا قبل الحجز.',
          ru: 'Подходящий способ зависит от автомобиля, его стоимости и страны назначения. Используйте матрицу, чтобы сузить выбор, затем подтвердите практичный способ с нами до бронирования.',
          es: 'El método correcto depende del vehículo, su valor y su destino. Use esta matriz para acotar la elección y confirme el método práctico con nosotros antes de reservar.',
        },
      ],
      table: {
        headers: [
          { en: 'Situation', ar: 'الحالة', ru: 'Ситуация', es: 'Situación' },
          { en: 'RoRo', ar: 'RoRo', ru: 'RoRo', es: 'RoRo' },
          { en: 'Container', ar: 'الحاوية', ru: 'Контейнер', es: 'Contenedor' },
        ],
        rows: [
          [
            { en: 'Running, self-propelled vehicle', ar: 'مركبة صالحة للحركة الذاتية', ru: 'Исправный самоходный автомобиль', es: 'Vehículo en marcha y autopropulsado' },
            { en: 'Usually the more cost-efficient choice — the vehicle drives on and off.', ar: 'عادة الخيار الأكثر كفاءة من حيث التكلفة — تصعد المركبة وتنزل بنفسها.', ru: 'Обычно экономичнее — автомобиль сам заезжает и съезжает.', es: 'Suele ser la opción más rentable: el vehículo sube y baja por sí mismo.' },
            { en: 'Possible but usually unnecessary.', ar: 'ممكن لكنه غير ضروري عادة.', ru: 'Возможен, но обычно не нужен.', es: 'Posible, pero normalmente innecesario.' },
          ],
          [
            { en: 'Non-running vehicle', ar: 'مركبة غير صالحة للحركة', ru: 'Неисправный автомобиль', es: 'Vehículo no operativo' },
            { en: 'Not possible — the vehicle must move under its own power.', ar: 'غير ممكن — يجب أن تتحرك المركبة بقوتها الذاتية.', ru: 'Невозможно — автомобиль должен двигаться своим ходом.', es: 'No es posible: el vehículo debe moverse por sí mismo.' },
            { en: 'The practical option.', ar: 'الخيار العملي.', ru: 'Практичный вариант.', es: 'La opción práctica.' },
          ],
          [
            { en: 'High-value vehicle', ar: 'مركبة عالية القيمة', ru: 'Дорогой автомобиль', es: 'Vehículo de alto valor' },
            { en: 'Possible.', ar: 'ممكن.', ru: 'Возможен.', es: 'Posible.' },
            { en: 'Often preferred for the added protection of an enclosed box.', ar: 'يُفضل غالبًا للحماية الإضافية للصندوق المغلق.', ru: 'Часто предпочтителен из-за дополнительной защиты закрытого ящика.', es: 'A menudo preferido por la protección adicional de un espacio cerrado.' },
          ],
          [
            { en: 'Extra security or enclosed protection', ar: 'أمان إضافي أو حماية مغلقة', ru: 'Дополнительная защита или закрытая упаковка', es: 'Seguridad extra o protección cerrada' },
            { en: 'Limited protection from the elements.', ar: 'حماية محدودة من العوامل الجوية.', ru: 'Ограниченная защита от внешней среды.', es: 'Protección limitada frente a los elementos.' },
            { en: 'Enclosed protection for the whole voyage.', ar: 'حماية مغلقة طوال الرحلة.', ru: 'Закрытая защита на весь рейс.', es: 'Protección cerrada durante todo el viaje.' },
          ],
          [
            { en: 'Consolidation with other cargo', ar: 'التجميع مع بضائع أخرى', ru: 'Консолидация с другим грузом', es: 'Consolidación con otra carga' },
            { en: 'Not applicable.', ar: 'غير قابل للتطبيق.', ru: 'Не применимо.', es: 'No aplicable.' },
            { en: 'Possible — load alongside other goods in one box.', ar: 'ممكن — تحميلها مع بضائع أخرى في صندوق واحد.', ru: 'Возможна — погрузка вместе с другим грузом в одном контейнере.', es: 'Posible: cargar junto a otras mercancías en un mismo contenedor.' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'Exceptions',
        ar: 'استثناءات',
        ru: 'Исключения',
        es: 'Excepciones',
      },
      paragraphs: [
        {
          en: 'The method is not fixed by the vehicle alone. An electric vehicle may add battery-handling requirements; a route without a convenient RoRo sailing may make container the only practical choice; and a buyer consolidating several vehicles may ship differently than a single vehicle. Confirm the method for your case.',
          ar: 'الطريقة لا تحددها المركبة وحدها. فقد تضيف المركبة الكهربائية متطلبات مناولة البطارية؛ وقد يجعل المسار دون رحلة RoRo ملائمة الحاويةَ الخيارَ العملي الوحيد؛ وقد يشحن المشتري الذي يجمع عدة مركبات بشكل مختلف عن المركبة الواحدة. أكد الطريقة لحالتك.',
          ru: 'Способ определяется не только автомобилем. Электромобиль может добавить требования к батарее; маршрут без удобного рейса RoRo может сделать контейнер единственным практичным вариантом; покупатель, консолидирующий несколько машин, может отправить их иначе, чем один автомобиль. Подтвердите способ для вашего случая.',
          es: 'El método no lo fija solo el vehículo. Un VE puede añadir requisitos de manipulación de batería; una ruta sin salida RoRo conveniente puede hacer del contenedor la única opción práctica; y un comprador que consolida varios vehículos puede enviarlos distinto a uno solo. Confirme el método para su caso.',
        },
      ],
    },
    {
      heading: {
        en: 'Related market considerations',
        ar: 'اعتبارات السوق ذات الصلة',
        ru: 'Связанные соображения по рынку',
        es: 'Consideraciones de mercado relacionadas',
      },
      paragraphs: [
        {
          en: 'Destination ports, shipping routes and any destination-side import rules are maintained on the Market sub-site. Choosing a major destination port with frequent sailings can improve schedule options.',
          ar: 'تُصان موانئ الوجهة ومسارات الشحن وأي قواعد استيراد في الوجهة في الموقع الفرعي للأسواق. قد يؤدي اختيار ميناء وجهة رئيسي برحلات متكررة إلى تحسين خيارات الجدول.',
          ru: 'Порты назначения, маршруты и правила импорта в стране назначения ведутся на подсайте Market. Выбор крупного порта назначения с частыми рейсами может улучшить варианты расписания.',
          es: 'Los puertos de destino, las rutas de envío y las normas de importación de destino se mantienen en el subsitio Market. Elegir un puerto de destino principal con salidas frecuentes puede mejorar las opciones de calendario.',
        },
      ],
      links: [
        {
          href: 'https://market.chinausedautohub.com/ports/',
          label: {
            en: 'Ports and routes — Market sub-site',
            ar: 'الموانئ والمسارات — الموقع الفرعي للأسواق',
            ru: 'Порты и маршруты — подсайт Market',
            es: 'Puertos y rutas — subsitio Market',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Related vehicle considerations',
        ar: 'اعتبارات المركبة ذات الصلة',
        ru: 'Связанные соображения по автомобилю',
        es: 'Consideraciones de vehículo relacionadas',
      },
      paragraphs: [
        {
          en: 'A vehicle\'s condition and value determine the shipping method, so shipping is downstream of inspection. For condition assessment, see the Inspection guide; for how shipping and insurance fit the cost picture, see the FOB/CFR/CIF and Landed Cost guides.',
          ar: 'تحدد حالة المركبة وقيمتها طريقة الشحن، لذا فالشحن يلي الفحص. لتقييم الحالة، راجع دليل الفحص؛ ولمعرفة كيف يتناسب الشحن والتأمين مع صورة التكلفة، راجع دليلي FOB/CFR/CIF والتكلفة النهائية.',
          ru: 'Состояние и стоимость автомобиля определяют способ доставки, поэтому доставка следует за проверкой. По оценке состояния см. руководство по проверке; как доставка и страховка вписываются в картину расходов — руководства FOB/CFR/CIF и по итоговой стоимости.',
          es: 'El estado y el valor del vehículo determinan el método de envío, por lo que el envío va después de la inspección. Para la evaluación del estado, consulte la guía de inspección; para cómo encajan envío y seguro en el panorama de costes, las guías FOB/CFR/CIF y de coste de desembarco.',
        },
      ],
      links: [
        {
          slug: 'vehicle-inspection',
          label: {
            en: 'Assess condition first — Inspection guide',
            ar: 'قيّم الحالة أولًا — دليل الفحص',
            ru: 'Сначала оцените состояние — руководство по проверке',
            es: 'Evalúe primero el estado — guía de inspección',
          },
        },
        {
          slug: 'fob-vs-cif-vs-cfr',
          label: {
            en: 'Who pays for freight and insurance — FOB/CFR/CIF guide',
            ar: 'من يدفع الشحن والتأمين — دليل FOB/CFR/CIF',
            ru: 'Кто платит за фрахт и страховку — руководство FOB/CFR/CIF',
            es: 'Quién paga el flete y el seguro — guía FOB/CFR/CIF',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Related tools',
        ar: 'أدوات ذات صلة',
        ru: 'Связанные инструменты',
        es: 'Herramientas relacionadas',
      },
      paragraphs: [
        {
          en: 'Estimate freight and the resulting landed cost on the Tools sub-site. The calculators structure the estimate; final figures are confirmed at quote time with current rates.',
          ar: 'قدّر الشحن والتكلفة النهائية الناتجة في الموقع الفرعي للأدوات. تهيكل الحاسبات التقدير؛ وتؤكد الأرقام النهائية عند عرض السعر بالأسعار الحالية.',
          ru: 'Оцените фрахт и итоговую стоимость на подсайте инструментов. Калькуляторы структурируют оценку; итоговые цифры подтверждаются при расчёте по текущим тарифам.',
          es: 'Estime el flete y el coste de desembarco resultante en el subsitio de herramientas. Las calculadoras estructuran la estimación; las cifras finales se confirman al cotizar con las tarifas vigentes.',
        },
      ],
      links: [
        {
          href: 'https://tool.chinausedautohub.com/shipping-cost-estimator/',
          label: {
            en: 'Shipping Cost Estimator',
            ar: 'حاسبة تقدير تكلفة الشحن',
            ru: 'Оценка стоимости доставки',
            es: 'Estimador de coste de envío',
          },
        },
        {
          href: 'https://tool.chinausedautohub.com/landed-cost-calculator/',
          label: {
            en: 'Landed Cost Calculator',
            ar: 'حاسبة التكلفة النهائية',
            ru: 'Калькулятор итоговой стоимости',
            es: 'Calculadora de coste de desembarco',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Reliable sources',
        ar: 'مصادر موثوقة',
        ru: 'Надёжные источники',
        es: 'Fuentes fiables',
      },
      paragraphs: [
        {
          en: 'Freight and insurance rates are not fixed; they are confirmed from current sources at quote time. Port and route data are maintained on the Market sub-site, and carrier documents (the bill of lading) are the reference for release. We do not publish rate tables.',
          ar: 'أسعار الشحن والتأمين ليست ثابتة؛ تُؤكد من مصادر حالية عند عرض السعر. تُصان بيانات الموانئ والمسارات في الموقع الفرعي للأسواق، ووثائق الناقل (بوليصة الشحن) هي مرجع الإفراج. لا ننشر جداول أسعار.',
          ru: 'Тарифы на фрахт и страховку не фиксированы; они подтверждаются из актуальных источников при расчёте. Данные о портах и маршрутах ведутся на подсайте Market, а документы перевозчика (коносамент) — ориентир для выпуска. Мы не публикуем тарифные таблицы.',
          es: 'Las tarifas de flete y seguro no son fijas; se confirman de fuentes actuales al cotizar. Los datos de puertos y rutas se mantienen en el subsitio Market, y los documentos del transportista (conocimiento de embarque) son la referencia para la liberación. No publicamos tablas de tarifas.',
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
          en: 'Last reviewed: 2026-10-04. This guide describes shipping methods in general; transit times and rates are estimates confirmed at quote time, not guarantees. Confirm the method, route and figures for your vehicle before booking.',
          ar: 'آخر مراجعة: 2026-10-04. يصف هذا الدليل طرق الشحن عمومًا؛ فمدد النقل والأسعار تقديرات تؤكد عند عرض السعر، وليست ضمانات. أكد الطريقة والمسار والأرقام لمركبتك قبل الحجز.',
          ru: 'Последняя проверка: 2026-10-04. Это руководство описывает способы доставки в общем виде; сроки и тарифы — это оценки, подтверждаемые при расчёте, а не гарантии. Подтвердите способ, маршрут и цифры для вашего автомобиля до бронирования.',
          es: 'Última revisión: 2026-10-04. Esta guía describe los métodos de envío en general; los plazos y tarifas son estimaciones que se confirman al cotizar, no garantías. Confirme el método, la ruta y las cifras de su vehículo antes de reservar.',
        },
      ],
    },
  ],
};
