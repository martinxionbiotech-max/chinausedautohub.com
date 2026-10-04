import type { L10n } from '../l10n';

// Guide 7 — How to Estimate Landed Cost (components and method, no fake rates).

export const landedCost = {
  slug: 'landed-cost',
  title: {
    en: 'How to Estimate Landed Cost of a Vehicle Imported from China',
    ar: 'كيف تقدّر التكلفة النهائية لمركبة مستوردة من الصين',
    ru: 'Как оценить итоговую стоимость автомобиля, импортированного из Китая',
    es: 'Cómo estimar el coste de desembarco de un vehículo importado desde China',
  },
  description: {
    en: 'How to estimate the total landed cost of an imported used vehicle: the cost components and the method, without fixed rate tables.',
    ar: 'كيف تقدّر التكلفة النهائية الإجمالية لمركبة مستعملة مستوردة: مكونات التكلفة والطريقة، دون جداول أسعار ثابتة.',
    ru: 'Как оценить полную итоговую стоимость импортированного автомобиля: компоненты и метод без фиксированных тарифных таблиц.',
    es: 'Cómo estimar el coste total de desembarco de un vehículo usado importado: los componentes del coste y el método, sin tablas de tarifas fijas.',
  },
  h1: {
    en: 'How to Estimate Landed Cost',
    ar: 'كيف تقدّر التكلفة النهائية',
    ru: 'Как оценить итоговую стоимость',
    es: 'Cómo estimar el coste de desembarco',
  },
  summary: {
    en: 'How to estimate the total landed cost of an imported vehicle.',
    ar: 'كيف تقدّر التكلفة النهائية الإجمالية لمركبة مستوردة.',
    ru: 'Как оценить полную итоговую стоимость импортированного автомобиля.',
    es: 'Cómo estimar el coste total de desembarco de un vehículo importado.',
  },
  sections: [
    {
      heading: {
        en: 'What "landed cost" means',
        ar: 'ماذا تعني "التكلفة النهائية"',
        ru: 'Что значит «итоговая стоимость»',
        es: 'Qué significa «coste de desembarco»',
      },
      paragraphs: [
        {
          en: 'Landed cost is the total cost of getting a vehicle from China to your destination, ready for clearance — not just the vehicle price. It is the number that matters for budgeting, because it is what you actually pay before local registration.',
          ar: 'التكلفة النهائية هي التكلفة الإجمالية لنقل مركبة من الصين إلى وجهتك، جاهزة للتخليص — وليس سعر المركبة فقط. وهو الرقم المهم للميزانية، لأنه ما تدفعه فعلياً قبل التسجيل المحلي.',
          ru: 'Итоговая стоимость — это полная стоимость доставки автомобиля из Китая в вашу страну назначения, готового к оформлению, — не только цена автомобиля. Именно эта цифра важна для бюджета, поскольку это то, что вы фактически платите до местной регистрации.',
          es: 'El coste de desembarco es el coste total de llevar un vehículo desde China hasta su destino, listo para el despacho, no solo el precio del vehículo. Es la cifra que importa para presupuestar, porque es lo que realmente paga antes de la matriculación local.',
        },
      ],
    },
    {
      heading: {
        en: 'The cost components',
        ar: 'مكونات التكلفة',
        ru: 'Компоненты стоимости',
        es: 'Los componentes del coste',
      },
      paragraphs: [
        {
          en: 'Landed cost is made up of several components: the vehicle price, freight, insurance, customs duties, taxes, and port or handling charges at origin and destination. Each component is estimated separately, then summed.',
          ar: 'تتكون التكلفة النهائية من عدة مكونات: سعر المركبة، والشحن، والتأمين، والرسوم الجمركية، والضرائب، ورسوم الموانئ أو المناولة في المنشأ والوجهة. يُقدَّر كل مكون على حدة ثم يُجمع.',
          ru: 'Итоговая стоимость складывается из нескольких компонентов: цена автомобиля, фрахт, страховка, таможенные пошлины, налоги и портовые сборы или сборы за обработку в портах отправления и назначения. Каждый компонент оценивается отдельно, затем суммируется.',
          es: 'El coste de desembarco se compone de varios elementos: el precio del vehículo, el flete, el seguro, los aranceles, los impuestos y los gastos portuarios o de manipulación en origen y destino. Cada componente se estima por separado y luego se suma.',
        },
      ],
    },
    {
      heading: {
        en: 'Step 1 — Vehicle price',
        ar: 'الخطوة 1 — سعر المركبة',
        ru: 'Шаг 1 — Цена автомобиля',
        es: 'Paso 1 — Precio del vehículo',
      },
      paragraphs: [
        {
          en: 'Start with the vehicle\'s asking price, confirmed at quote time. This is the base figure. Prices may vary based on configuration, and the final confirmed price is what enters the calculation.',
          ar: 'ابدأ بسعر طلب المركبة، المؤكد عند عرض السعر. هذا هو الرقم الأساسي. قد تختلف الأسعار حسب التجهيز، والسعر النهائي المؤكد هو ما يدخل في الحساب.',
          ru: 'Начните с запрашиваемой цены автомобиля, подтверждённой при расчёте. Это базовая цифра. Цена может меняться в зависимости от комплектации, и в расчёт входит итоговая подтверждённая цена.',
          es: 'Empiece con el precio de venta del vehículo, confirmado al cotizar. Es la cifra base. Los precios pueden variar según la configuración, y el precio final confirmado es el que entra en el cálculo.',
        },
      ],
    },
    {
      heading: {
        en: 'Step 2 — Freight',
        ar: 'الخطوة 2 — الشحن',
        ru: 'Шаг 2 — Фрахт',
        es: 'Paso 2 — Flete',
      },
      paragraphs: [
        {
          en: 'Freight is the cost of moving the vehicle from the China port to the destination port. It depends on the route, the shipping method (RoRo, container or car carrier) and the market at the time of shipment, so it is confirmed as part of the quote.',
          ar: 'الشحن هو تكلفة نقل المركبة من الميناء الصيني إلى ميناء الوجهة. يعتمد على المسار وطريقة الشحن (RoRo أو حاوية أو ناقلة سيارات) والسوق وقت الشحن، لذا يُؤكد ضمن عرض السعر.',
          ru: 'Фрахт — это стоимость перевозки автомобиля из китайского порта в порт назначения. Он зависит от маршрута, способа доставки (RoRo, контейнер или автовоз) и рынка на момент отправки, поэтому подтверждается в рамках расчёта.',
          es: 'El flete es el coste de trasladar el vehículo del puerto chino al puerto de destino. Depende de la ruta, el método de envío (RoRo, contenedor o transportista) y el mercado en el momento del envío, por lo que se confirma como parte de la cotización.',
        },
      ],
    },
    {
      heading: {
        en: 'Step 3 — Insurance',
        ar: 'الخطوة 3 — التأمين',
        ru: 'Шаг 3 — Страховка',
        es: 'Paso 3 — Seguro',
      },
      paragraphs: [
        {
          en: 'Marine insurance covers the vehicle during transit. The cost depends on the vehicle\'s value, the route and the coverage level. Under CIF the seller arranges a minimum level of insurance; otherwise you arrange it separately.',
          ar: 'يغطي التأمين البحري المركبة أثناء النقل. تعتمد التكلفة على قيمة المركبة والمسار ومستوى التغطية. بموجب CIF يرتب البائع مستوى أدنى من التأمين؛ وإلا ترتبه أنت بشكل منفصل.',
          ru: 'Морская страховка покрывает автомобиль во время перевозки. Стоимость зависит от стоимости автомобиля, маршрута и уровня покрытия. При CIF продавец оформляет минимальный уровень страховки; иначе вы оформляете её отдельно.',
          es: 'El seguro marítimo cubre el vehículo durante el tránsito. El coste depende del valor del vehículo, la ruta y el nivel de cobertura. Con CIF el vendedor gestiona un nivel mínimo de seguro; de lo contrario, lo gestiona usted por separado.',
        },
      ],
    },
    {
      heading: {
        en: 'Step 4 — Customs duties and taxes',
        ar: 'الخطوة 4 — الرسوم الجمركية والضرائب',
        ru: 'Шаг 4 — Таможенные пошлины и налоги',
        es: 'Paso 4 — Aranceles e impuestos',
      },
      paragraphs: [
        {
          en: 'Import duties and taxes are charged at the destination and are set by the destination country. They often depend on the vehicle\'s value, type, age and engine. These are the most destination-specific components, and they are detailed per market on the Market sub-site.',
          ar: 'تُفرض رسوم الاستيراد والضرائب في الوجهة وتحددها بلد الوجهة. وغالباً ما تعتمد على قيمة المركبة ونوعها وعمرها ومحركها. وهي أكثر المكونات ارتباطاً بالوجهة، وتُفصَّل لكل سوق في الموقع الفرعي للأسواق.',
          ru: 'Импортные пошлины и налоги взимаются в стране назначения и устанавливаются её властями. Они часто зависят от стоимости, типа, возраста и двигателя автомобиля. Это самые специфичные для страны компоненты; они детализированы по рынкам на подсайте Market.',
          es: 'Los aranceles e impuestos de importación se cobran en destino y los fija el país de destino. A menudo dependen del valor, el tipo, la antigüedad y el motor del vehículo. Son los componentes más específicos del destino y se detallan por mercado en el subsitio Market.',
        },
      ],
    },
    {
      heading: {
        en: 'Step 5 — Port and handling charges',
        ar: 'الخطوة 5 — رسوم الموانئ والمناولة',
        ru: 'Шаг 5 — Портовые сборы и обработка',
        es: 'Paso 5 — Gastos portuarios y de manipulación',
      },
      paragraphs: [
        {
          en: 'Port charges apply at the origin port (receiving, preparing and loading) and at the destination port (unloading, handling and clearance). They vary by port and shipment and are quoted separately.',
          ar: 'تُطبق رسوم الموانئ في ميناء المنشأ (الاستلام والتجهيز والتحميل) وفي ميناء الوجهة (التفريغ والمناولة والتخليص). تختلف حسب الميناء والشحنة وتُقدَّر بشكل منفصل.',
          ru: 'Портовые сборы применяются в порту отправления (приём, подготовка, погрузка) и в порту назначения (выгрузка, обработка, оформление). Они зависят от порта и отправки и рассчитываются отдельно.',
          es: 'Los gastos portuarios se aplican en el puerto de origen (recepción, preparación y carga) y en el puerto de destino (descarga, manipulación y despacho). Varían según el puerto y el envío y se cotizan por separado.',
        },
      ],
    },
    {
      heading: {
        en: 'Putting it together',
        ar: 'تجميع المكونات',
        ru: 'Собираем вместе',
        es: 'Cómo unirlo todo',
      },
      paragraphs: [
        {
          en: 'Landed cost = vehicle price + freight + insurance + customs duties + taxes + port and handling charges. Estimate each component, sum them, and add a margin for uncertainty. This gives a realistic budget figure before you commit.',
          ar: 'التكلفة النهائية = سعر المركبة + الشحن + التأمين + الرسوم الجمركية + الضرائب + رسوم الموانئ والمناولة. قدّر كل مكون واجمعها وأضف هامشاً لعدم اليقين. هذا يعطيك رقماً واقعياً للميزانية قبل الالتزام.',
          ru: 'Итоговая стоимость = цена автомобиля + фрахт + страховка + пошлины + налоги + портовые сборы и обработка. Оцените каждый компонент, суммируйте и добавьте запас на неопределённость. Это даст реалистичную бюджетную цифру до обязательств.',
          es: 'Coste de desembarco = precio del vehículo + flete + seguro + aranceles + impuestos + gastos portuarios y de manipulación. Estime cada componente, súmelos y añada un margen de incertidumbre. Así obtiene una cifra presupuestaria realista antes de comprometerse.',
        },
      ],
    },
    {
      heading: {
        en: 'Using the Import Tools calculators',
        ar: 'استخدام حاسبات أدوات الاستيراد',
        ru: 'Использование калькуляторов инструментов импорта',
        es: 'Usar las calculadoras de herramientas de importación',
      },
      paragraphs: [
        {
          en: 'The Import Tools sub-site provides calculators to help you estimate landed cost, shipping and import cost. They structure the calculation; the final figures are still confirmed at quote time with current rates.',
          ar: 'يوفر الموقع الفرعي لأدوات الاستيراد حاسبات تساعدك في تقدير التكلفة النهائية والشحن وتكلفة الاستيراد. وهي تهيكل الحساب؛ بينما تُؤكد الأرقام النهائية عند عرض السعر بالأسعار الحالية.',
          ru: 'Подсайт инструментов импорта предоставляет калькуляторы для оценки итоговой стоимости, доставки и стоимости импорта. Они структурируют расчёт; итоговые цифры всё равно подтверждаются при расчёте по текущим тарифам.',
          es: 'El subsitio de herramientas de importación ofrece calculadoras para estimar el coste de desembarco, el envío y el coste de importación. Estructuran el cálculo; las cifras finales se confirman al cotizar con las tarifas vigentes.',
        },
      ],
    },
    {
      heading: {
        en: 'A worked example with placeholder values',
        ar: 'مثال توضيحي بقيم مؤقتة',
        ru: 'Наглядный пример с условными значениями',
        es: 'Un ejemplo práctico con valores de referencia',
      },
      paragraphs: [
        {
          en: 'To see the method, imagine a vehicle with an asking price of P. Add freight F, insurance I, customs duties D, taxes T, and port and handling charges H. The landed cost is P + F + I + D + T + H. The proportions vary, but the structure is always the same.',
          ar: 'لرؤية الطريقة، تخيل مركبة بسعر طلب P. أضف الشحن F والتأمين I والرسوم الجمركية D والضرائب T ورسوم الموانئ والمناولة H. التكلفة النهائية هي P + F + I + D + T + H. تختلف النسب، لكن البنية واحدة دائمًا.',
          ru: 'Чтобы увидеть метод, представьте автомобиль с запрашиваемой ценой P. Добавьте фрахт F, страховку I, пошлины D, налоги T и портовые сборы H. Итоговая стоимость = P + F + I + D + T + H. Пропорции меняются, но структура всегда одна.',
          es: 'Para ver el método, imagine un vehículo con precio de venta P. Añada el flete F, el seguro I, los aranceles D, los impuestos T y los gastos portuarios H. El coste de desembarco es P + F + I + D + T + H. Las proporciones varían, pero la estructura es siempre la misma.',
        },
        {
          en: 'Fill in each value with the figures quoted for your case. If a value is not yet known, estimate it and mark it clearly, then confirm it before committing.',
          ar: 'املأ كل قيمة بالأرقام المقدَّرة لحالتك. إذا لم تكن القيمة معروفة بعد، قدّرها وعلّمها بوضوح، ثم أكدها قبل الالتزام.',
          ru: 'Подставьте каждое значение из расчёта для вашего случая. Если значение пока неизвестно, оцените его и явно пометьте, а затем подтвердите до обязательств.',
          es: 'Complete cada valor con las cifras cotizadas para su caso. Si un valor aún no se conoce, estímelo y márquelo con claridad, y confírmelo antes de comprometerse.',
        },
      ],
    },
    {
      heading: {
        en: 'Why rates are not fixed',
        ar: 'لماذا ليست الأسعار ثابتة',
        ru: 'Почему тарифы не фиксированы',
        es: 'Por qué las tarifas no son fijas',
      },
      paragraphs: [
        {
          en: 'Freight, insurance, duties, taxes and port charges all vary by destination, by the vehicle, and over time. A rate that applies to one route or one period may not apply to another. That is why we confirm figures at quote time rather than publishing a fixed table.',
          ar: 'يختلف الشحن والتأمين والرسوم والضرائب ورسوم الموانئ جميعها حسب الوجهة والمركبة وبمرور الوقت. فالسعر الذي ينطبق على مسار أو فترة معينة قد لا ينطبق على غيرها. لهذا نؤكد الأرقام عند عرض السعر بدلًا من نشر جدول ثابت.',
          ru: 'Фрахт, страховка, пошлины, налоги и портовые сборы зависят от страны назначения, автомобиля и времени. Тариф для одного маршрута или периода может не подойти для другого. Поэтому мы подтверждаем цифры при расчёте, а не публикуем фиксированную таблицу.',
          es: 'El flete, el seguro, los aranceles, los impuestos y los gastos portuarios varían según el destino, el vehículo y con el tiempo. Una tarifa válida para una ruta o un periodo puede no servir para otro. Por eso confirmamos las cifras al cotizar en lugar de publicar una tabla fija.',
        },
      ],
    },
    {
      heading: {
        en: 'Common hidden costs to include',
        ar: 'تكاليف خفية شائعة يجب إدراجها',
        ru: 'Часто упускаемые скрытые расходы',
        es: 'Costes ocultos comunes que incluir',
      },
      paragraphs: [
        {
          en: 'Buyers sometimes overlook components beyond the obvious ones: inland transport to the origin port, port handling on both sides, insurance, customs broker or clearing fees, storage if the vehicle is held, and inspection or certification fees where applicable. Include these in your estimate.',
          ar: 'يتجاهل المشترون أحيانًا مكونات غير الواضحة: النقل الداخلي إلى ميناء المنشأ، والمناولة في الميناءين، والتأمين، ورسوم الوسيط الجمركي أو التخليص، والتخزين إذا احتُجزت المركبة، ورسوم الفحص أو الاعتماد حيثما تنطبق. أدرج هذه في تقديرك.',
          ru: 'Покупатели иногда упускают неочевидные компоненты: внутреннюю доставку до порта отправления, портовую обработку с обеих сторон, страховку, сборы таможенного брокера или оформления, хранение, если автомобиль задерживается, и сборы за проверку или сертификацию, где применимо. Включите их в оценку.',
          es: 'Los compradores a veces pasan por alto componentes que no son obvios: transporte interior al puerto de origen, gestión portuaria en ambos lados, seguro, honorarios de agente de aduanas o despacho, almacenamiento si el vehículo se retiene, y tasas de inspección o certificación cuando correspondan. Inclúyalos en su estimación.',
        },
      ],
    },
    {
      heading: {
        en: 'Adding a contingency margin',
        ar: 'إضافة هامش للطوارئ',
        ru: 'Добавление резервного запаса',
        es: 'Añadir un margen de contingencia',
      },
      paragraphs: [
        {
          en: 'Because components can move between the estimate and the final invoice, add a contingency margin — a percentage on top of your total — to absorb small changes. A realistic margin turns your estimate into a usable budget rather than a best-case figure.',
          ar: 'نظرًا لأن المكونات قد تتغير بين التقدير والفاتورة النهائية، أضف هامشًا للطوارئ — نسبة مئوية فوق الإجمالي — لاستيعاب التغييرات الصغيرة. الهامش الواقعي يحول تقديرك إلى ميزانية قابلة للاستخدام بدلًا من رقم مثالي.',
          ru: 'Поскольку компоненты могут измениться между оценкой и итоговым счётом, добавьте резервный запас — процент сверх итога — чтобы поглотить небольшие изменения. Реалистичный запас превращает оценку в рабочую бюджетную цифру, а не в оптимистичный минимум.',
          es: 'Como los componentes pueden variar entre la estimación y la factura final, añada un margen de contingencia — un porcentaje sobre el total — para absorber pequeños cambios. Un margen realista convierte su estimación en un presupuesto utilizable y no en una cifra ideal.',
        },
      ],
    },
    {
      heading: {
        en: 'Estimating duties and taxes specifically',
        ar: 'تقدير الرسوم والضرائب تحديدًا',
        ru: 'Оценка пошлин и налогов отдельно',
        es: 'Estimar aranceles e impuestos específicamente',
      },
      paragraphs: [
        {
          en: 'Duties and taxes are usually the largest destination-specific component, and they are typically calculated on the vehicle\'s value, often with adjustments for age, type and engine. Because the rules differ by country, the practical way to estimate them is to check your destination\'s published rates (detailed on the Market sub-site) and apply them to the confirmed value.',
          ar: 'الرسوم والضرائب عادةً أكبر مكوّن مرتبط بالوجهة، وتُحسب غالبًا على قيمة المركبة مع تعديلات للعمر والنوع والمحرك. ولأن القواعد تختلف حسب البلد، فإن الطريقة العملية لتقديرها هي مراجعة الأسعار المنشورة لوجهتك (المفصلة في الموقع الفرعي للأسواق) وتطبيقها على القيمة المؤكدة.',
          ru: 'Пошлины и налоги — обычно самый крупный компонент, зависящий от страны назначения; они рассчитываются от стоимости автомобиля с поправками на возраст, тип и двигатель. Поскольку правила различаются по странам, практичный способ — изучить опубликованные ставки вашей страны (подробно на подсайте Market) и применить их к подтверждённой стоимости.',
          es: 'Los aranceles e impuestos suelen ser el mayor componente específico del destino, y normalmente se calculan sobre el valor del vehículo, con ajustes por antigüedad, tipo y motor. Como las normas difieren por país, la forma práctica de estimarlos es consultar las tarifas publicadas de su destino (detalladas en el subsitio Market) y aplicarlas al valor confirmado.',
        },
      ],
    },
    {
      heading: {
        en: 'Using the estimate to set your resale price',
        ar: 'استخدام التقدير لتحديد سعر إعادة البيع',
        ru: 'Использование оценки для цены перепродажи',
        es: 'Usar la estimación para fijar su precio de reventa',
      },
      paragraphs: [
        {
          en: 'For dealers and importers, the landed cost is the floor for pricing — add your margin and local costs on top to reach a resale price. An accurate landed cost is therefore the difference between a profitable deal and an unpleasant surprise after the vehicle arrives.',
          ar: 'بالنسبة للتجار والمستوردين، التكلفة النهائية هي الحد الأدنى للتسعير — أضف هامشك وتكاليفك المحلية فوقها للوصول إلى سعر إعادة البيع. وبالتالي فإن التكلفة النهائية الدقيقة هي الفرق بين صفقة مربحة ومفاجأة غير سارة بعد وصول المركبة.',
          ru: 'Для дилеров и импортёров итоговая стоимость — это нижняя граница цены: добавьте сверху свою маржу и местные расходы, чтобы получить цену перепродажи. Точная итоговая стоимость — это разница между прибыльной сделкой и неприятным сюрпризом после прибытия автомобиля.',
          es: 'Para concesionarios e importadores, el coste de desembarco es el suelo del precio: añada su margen y los costes locales encima para llegar al precio de reventa. Por tanto, un coste de desembarco preciso es la diferencia entre un trato rentable y una sorpresa desagradable tras la llegada del vehículo.',
        },
      ],
    },
    {
      heading: {
        en: 'When to refresh your estimate',
        ar: 'متى تحدّث تقديرك',
        ru: 'Когда обновлять оценку',
        es: 'Cuándo actualizar su estimación',
      },
      paragraphs: [
        {
          en: 'Refresh your estimate whenever a key input changes — the vehicle, the destination, the shipping method, or time passing (rates move). Before you commit, replace estimated components with the confirmed figures from a current quote so your final budget reflects reality.',
          ar: 'حدّث تقديرك كلما تغير مدخل أساسي — المركبة أو الوجهة أو طريقة الشحن أو مرور الوقت (تتغير الأسعار). قبل الالتزام، استبدل المكونات المقدَّرة بالأرقام المؤكدة من عرض سعر حالي حتى تعكس ميزانيتك النهائية الواقع.',
          ru: 'Обновляйте оценку при изменении любого ключевого параметра — автомобиль, страна назначения, способ доставки или время (тарифы меняются). Перед обязательствами замените оценочные компоненты подтверждёнными цифрами из актуального расчёта, чтобы итоговый бюджет отражал реальность.',
          es: 'Actualice su estimación cuando cambie un dato clave: el vehículo, el destino, el método de envío o el paso del tiempo (las tarifas varían). Antes de comprometerse, sustituya los componentes estimados por las cifras confirmadas de una cotización actual para que su presupuesto final refleje la realidad.',
        },
      ],
    },
    {
      heading: {
        en: 'A step-by-step estimate walkthrough',
        ar: 'جولة تقدير خطوة بخطوة',
        ru: 'Пошаговый разбор оценки',
        es: 'Un recorrido de estimación paso a paso',
      },
      paragraphs: [
        {
          en: 'Start with the confirmed vehicle price. Add the freight quote for your route and method. Add marine insurance. Add estimated customs duties and taxes for your destination. Add port and handling charges on both sides. Add a contingency margin. The total is your landed cost.',
          ar: 'ابدأ بسعر المركبة المؤكد. أضف عرض الشحن لمسارك وطريقتك. أضف التأمين البحري. أضف الرسوم الجمركية والضرائب التقديرية لوجهتك. أضف رسوم الموانئ والمناولة في الجانبين. أضف هامشًا للطوارئ. الإجمالي هو تكلفتك النهائية.',
          ru: 'Начните с подтверждённой цены автомобиля. Добавьте расчёт фрахта для вашего маршрута и способа. Добавьте морскую страховку. Добавьте оценочные пошлины и налоги для вашей страны. Добавьте портовые сборы и обработку с обеих сторон. Добавьте резервный запас. Итог — ваша итоговая стоимость.',
          es: 'Empiece con el precio confirmado del vehículo. Añada la cotización del flete para su ruta y método. Añada el seguro marítimo. Añada los aranceles e impuestos estimados para su destino. Añada los gastos portuarios y de manipulación en ambos lados. Añada un margen de contingencia. El total es su coste de desembarco.',
        },
      ],
    },
    {
      heading: {
        en: 'Where estimates often go wrong',
        ar: 'أين تخطئ التقديرات غالبًا',
        ru: 'Где оценки часто ошибаются',
        es: 'Dónde suelen fallar las estimaciones',
      },
      paragraphs: [
        {
          en: 'Estimates most often go wrong by omitting a component — inland transport, port handling, clearing fees or insurance — or by using an outdated duty or freight rate. Listing every component explicitly and confirming current figures at quote time closes most of the gap.',
          ar: 'تخطئ التقديرات غالبًا بحذف مكوّن — النقل الداخلي أو المناولة في الميناء أو رسوم التخليص أو التأمين — أو باستخدام رسوم أو شحن قديم. إن سرد كل مكوّن بوضوح وتأكيد الأرقام الحالية عند عرض السعر يسد معظم الفجوة.',
          ru: 'Оценки чаще всего ошибаются из-за пропуска компонента — внутренней доставки, портовой обработки, сборов за оформление или страховки — либо из-за устаревшей ставки пошлины или фрахта. Явное перечисление всех компонентов и подтверждение актуальных цифр при расчёте закрывают большую часть разрыва.',
          es: 'Las estimaciones suelen fallar al omitir un componente — transporte interior, gestión portuaria, honorarios de despacho o seguro — o al usar una tarifa de arancel o flete desactualizada. Enumerar cada componente explícitamente y confirmar las cifras actuales al cotizar cierra la mayor parte de la brecha.',
        },
      ],
    },
    {
      heading: {
        en: 'Sharing your estimate with a partner',
        ar: 'مشاركة تقديرك مع شريك',
        ru: 'Обсуждение оценки с партнёром',
        es: 'Compartir su estimación con un socio',
      },
      paragraphs: [
        {
          en: 'If you are importing for resale, share your landed-cost estimate with your team or financing partner so everyone prices against the same full figure. A transparent, itemized estimate makes the business case clear and helps you set a realistic resale price and margin.',
          ar: 'إذا كنت تستورد لإعادة البيع، شارك تقدير التكلفة النهائية مع فريقك أو شريك التمويل حتى يسعّر الجميع مقابل نفس الرقم الكامل. إن التقدير الشفاف المفصل يوضح الحالة التجارية ويساعدك على تحديد سعر إعادة بيع وهامش واقعيين.',
          ru: 'Если вы импортируете для перепродажи, поделитесь оценкой итоговой стоимости с командой или финансовым партнёром, чтобы все считали по одной полной цифре. Прозрачная, детализированная оценка проясняет бизнес-кейс и помогает установить реалистичную цену перепродажи и маржу.',
          es: 'Si importa para revender, comparta su estimación de coste de desembarco con su equipo o socio financiero para que todos calculen con la misma cifra completa. Una estimación transparente y desglosada aclara el caso de negocio y le ayuda a fijar un precio de reventa y un margen realistas.',
        },
      ],
    },
    {
      heading: {
        en: 'A note on accuracy',
        ar: 'ملاحظة حول الدقة',
        ru: 'Замечание о точности',
        es: 'Una nota sobre la exactitud',
      },
      paragraphs: [
        {
          en: 'Because freight, insurance, duties, taxes and port charges vary by destination and time, we do not publish fixed rate tables. Use this method to build your own estimate, and request a quote for the confirmed figures.',
          ar: 'نظراً لأن الشحن والتأمين والرسوم والضرائب ورسوم الموانئ تختلف حسب الوجهة والوقت، لا ننشر جداول أسعار ثابتة. استخدم هذه الطريقة لبناء تقديرك الخاص، واطلب عرض سعر للأرقام المؤكدة.',
          ru: 'Поскольку фрахт, страховка, пошлины, налоги и портовые сборы зависят от страны назначения и времени, мы не публикуем фиксированные тарифные таблицы. Используйте этот метод для собственной оценки и запросите расчёт для подтверждённых цифр.',
          es: 'Como el flete, el seguro, los aranceles, los impuestos y los gastos portuarios varían según el destino y el momento, no publicamos tablas de tarifas fijas. Use este método para elaborar su propia estimación y solicite una cotización para las cifras confirmadas.',
        },
      ],
    },
  ],
};
