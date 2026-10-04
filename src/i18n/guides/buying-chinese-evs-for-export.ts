import type { L10n } from '../l10n';

// Guide 8 — Buying Chinese EVs for Export.
// P3.7: structured as four professional blocks — Battery / Vehicle / Compatibility /
// Export Risks — each explaining *why* a factor changes an export decision, plus a
// decision framework table (Factor | What to check | Why it matters for export).
// Zero-fabrication: parameters without a source are written "Not publicly documented".

export const buyingEvs = {
  slug: 'buying-chinese-evs-for-export',
  title: {
    en: 'Buying Chinese EVs for Export — What to Consider',
    ar: 'شراء السيارات الكهربائية الصينية للتصدير — ما يجب مراعاته',
    ru: 'Покупка китайских электромобилей на экспорт — что учесть',
    es: 'Comprar VE chinos para exportar — qué considerar',
  },
  description: {
    en: 'Professional export knowledge for Chinese EVs: battery health and capacity, BEV/PHEV/EREV categories, charging and software compatibility, and export risks — each explained in terms of how it changes an export decision.',
    ar: 'معرفة تصديرية احترافية للسيارات الكهربائية الصينية: صحة البطارية وسعتها، وفئات BEV/PHEV/EREV، وتوافق الشحن والبرمجيات، ومخاطر التصدير — كل منها مشروحًا من حيث كيفية تأثيره على قرار التصدير.',
    ru: 'Профессиональные знания об экспорте китайских электромобилей: здоровье и ёмкость батареи, категории BEV/PHEV/EREV, совместимость зарядки и ПО, а также риски экспорта — каждый фактор объяснён через его влияние на решение об экспорте.',
    es: 'Conocimiento profesional de exportación para VE chinos: salud y capacidad de la batería, categorías BEV/PHEV/EREV, compatibilidad de carga y software, y riesgos de exportación — cada uno explicado por cómo cambia una decisión de exportación.',
  },
  h1: {
    en: 'Buying Chinese EVs for Export',
    ar: 'شراء السيارات الكهربائية الصينية للتصدير',
    ru: 'Покупка китайских электромобилей на экспорт',
    es: 'Comprar VE chinos para exportar',
  },
  summary: {
    en: 'Four blocks of EV export knowledge: battery, vehicle category, compatibility and export risks.',
    ar: 'أربع كتل من معرفة تصدير المركبات الكهربائية: البطارية، وفئة المركبة، والتوافق، ومخاطر التصدير.',
    ru: 'Четыре блока знаний об экспорте электромобилей: батарея, категория автомобиля, совместимость и риски экспорта.',
    es: 'Cuatro bloques de conocimiento sobre exportación de VE: batería, categoría del vehículo, compatibilidad y riesgos de exportación.',
  },
  sections: [
    {
      heading: {
        en: 'Why Chinese EVs are exported',
        ar: 'لماذا تُصدَّر السيارات الكهربائية الصينية',
        ru: 'Почему китайские электромобили экспортируются',
        es: 'Por qué se exportan los VE chinos',
      },
      paragraphs: [
        {
          en: 'Chinese brands produce a wide range of battery electric vehicles (BEVs), plug-in hybrids (PHEVs) and extended-range EVs (EREVs), and many are increasingly exported worldwide. Buyers source them for their efficiency, features and value across many markets.',
          ar: 'تنتج العلامات الصينية نطاقاً واسعاً من المركبات الكهربائية بالكامل (BEV) والهجينة القابلة للشحن (PHEV) والمركبات الكهربائية ممتدة المدى (EREV)، ويُصدَّر الكثير منها بشكل متزايد حول العالم. يورّدها المشترون لكفاءتها ومزاياها وقيمتها عبر أسواق عديدة.',
          ru: 'Китайские бренды выпускают широкий ассортимент аккумуляторных электромобилей (BEV), подключаемых гибридов (PHEV) и электромобилей с увеличенным запасом хода (EREV), и многие из них всё чаще экспортируются по всему миру. Покупатели выбирают их за эффективность, оснащение и ценность на многих рынках.',
          es: 'Las marcas chinas producen una amplia gama de eléctricos de batería (BEV), híbridos enchufables (PHEV) y eléctricos de autonomía extendida (EREV), y muchos se exportan cada vez más a todo el mundo. Los compradores los eligen por su eficiencia, prestaciones y valor en muchos mercados.',
        },
        {
          en: 'This guide is organised into four blocks — battery, vehicle, compatibility and export risks — and each factor is explained in terms of why it changes an export decision, not just what it means.',
          ar: 'يُنظَّم هذا الدليل في أربع كتل — البطارية، والمركبة، والتوافق، ومخاطر التصدير — ويُشرح كل عامل من حيث لماذا يغيّر قرار التصدير، لا مجرد معناه.',
          ru: 'Это руководство состоит из четырёх блоков — батарея, автомобиль, совместимость и риски экспорта, — и каждый фактор объясняется через то, почему он меняет решение об экспорте, а не только что он означает.',
          es: 'Esta guía se organiza en cuatro bloques — batería, vehículo, compatibilidad y riesgos de exportación — y cada factor se explica por qué cambia una decisión de exportación, no solo qué significa.',
        },
      ],
    },
    {
      heading: {
        en: 'Block 1 — Battery: the factors that decide export value and risk',
        ar: 'الكتلة 1 — البطارية: العوامل التي تحدد قيمة التصدير ومخاطره',
        ru: 'Блок 1 — Батарея: факторы, определяющие ценность и риск экспорта',
        es: 'Bloque 1 — Batería: los factores que deciden el valor y el riesgo de exportación',
      },
      paragraphs: [
        {
          en: 'The battery is the single most important and expensive component of an EV, and it dominates both the vehicle\'s value and its risk profile for an importer. Every battery factor below matters for export because it changes what a destination-market buyer is actually paying for — and what they can resell later.',
          ar: 'البطارية هي أهم وأغلى مكوّن في المركبة الكهربائية، وهي تهيمن على قيمة المركبة وعلى ملف مخاطرها بالنسبة للمستورد. كل عامل بطارية أدناه يهم التصدير لأنه يغيّر ما يدفع المشتري في سوق الوجهة مقابله فعلياً — وما يمكنه إعادة بيعه لاحقاً.',
          ru: 'Батарея — самый важный и дорогой компонент электромобиля, и она определяет как стоимость автомобиля, так и его профиль риска для импортёра. Каждый фактор батареи ниже важен для экспорта, потому что он меняет то, за что фактически платит покупатель в стране назначения, — и что можно перепродать позже.',
          es: 'La batería es el componente más importante y caro de un VE, y domina tanto el valor del vehículo como su perfil de riesgo para un importador. Cada factor de batería que sigue importa para la exportación porque cambia lo que el comprador del mercado de destino está pagando realmente — y lo que podrá revender después.',
        },
        {
          en: 'State of health (SOH) is the battery\'s current capacity as a proportion of its capacity when new. For export it matters because SOH sets the real-world range and the remaining useful life a buyer is paying for — a battery at 85% SOH is a materially different asset from one at 70%, and that difference moves the whole landed-cost and resale equation.',
          ar: 'حالة الصحة (SOH) هي سعة البطارية الحالية كنسبة من سعتها عندما كانت جديدة. وتهم التصدير لأنها تحدد المدى الفعلي والعمر الإنتاجي المتبقي الذي يدفع المشتري مقابله — فبطارية عند 85% حالة صحة أصل مختلف مادياً عن واحدة عند 70%، وهذا الفرق يحرّك معادلة التكلفة النهائية وإعادة البيع كلها.',
          ru: 'Состояние здоровья (SOH) — это текущая ёмкость батареи как доля от ёмкости новой. Для экспорта это важно, потому что SOH задаёт реальный запас хода и остаточный срок службы, за который платит покупатель: батарея с SOH 85% — это материально иной актив, чем с SOH 70%, и эта разница сдвигает всю итоговую стоимость и перепродажу.',
          es: 'El estado de salud (SOH) es la capacidad actual de la batería como proporción de su capacidad de nueva. Para la exportación importa porque el SOH fija la autonomía real y la vida útil restante que paga el comprador: una batería al 85% de SOH es un activo materialmente distinto de una al 70%, y esa diferencia mueve toda la ecuación de coste de desembarco y reventa.',
        },
        {
          en: 'Capacity is usually quoted two ways: nominal (rated) capacity and usable capacity — what the vehicle can actually draw, which is lower. For export the gap matters because a buyer compares the advertised range against usable capacity, and a vehicle whose usable capacity is far below nominal will disappoint in the destination market and hurt resale.',
          ar: 'تُذكر السعة عادة بطريقتين: السعة الاسمية (المُقدَّرة) والسعة القابلة للاستخدام — ما يمكن للمركبة سحبه فعلياً، وهي أقل. ويَهم الفرق التصديرَ لأن المشتري يقارن المدى المُعلَن بالسعة القابلة للاستخدام، والمركبة التي تكون سعتها القابلة للاستخدام أدنى كثيراً من الاسمية ستُخيب الآمال في سوق الوجهة وتضر بإعادة البيع.',
          ru: 'Ёмкость обычно указывают двумя способами: номинальная (паспортная) и полезная — то, что автомобиль реально может использовать, и она ниже. Для экспорта важен этот разрыв: покупатель сравнивает заявленный запас хода с полезной ёмкостью, и автомобиль, чья полезная ёмкость намного ниже номинальной, разочарует на рынке назначения и навредит перепродаже.',
          es: 'La capacidad se cita normalmente de dos formas: nominal (homologada) y útil — lo que el vehículo puede aprovechar realmente, que es menor. Para la exportación importa la brecha porque el comprador compara la autonomía anunciada con la capacidad útil, y un vehículo cuya capacidad útil está muy por debajo de la nominal decepcionará en destino y perjudicará la reventa.',
        },
        {
          en: 'Degradation is gradual and driven by age, use and charging habits, and the two main chemistries degrade differently: LFP (lithium iron phosphate) and NMC (nickel manganese cobalt). For export this matters because the destination\'s climate and charging patterns change how quickly degradation continues, and chemistry affects cold-weather range and charging behaviour — a fact that shifts a vehicle\'s suitability between a hot market and a cold one.',
          ar: 'التدهور تدريجي وتقوده العوامل العمر والاستخدام وعادات الشحن، وتتدهور الكيميائيتان الرئيسيتان بشكل مختلف: LFP (فوسفات الحديد الليثيوم) وNMC (نيكل منغنيز كوبالت). ويَهم ذلك التصديرَ لأن مناخ الوجهة وأنماط الشحن فيها تغيّران مدى سرعة استمرار التدهور، وتؤثر الكيمياء على المدى في الطقس البارد وسلوك الشحن — وهي حقيقة تنقل ملاءمة المركبة بين سوق حار وسوق بارد.',
          ru: 'Деградация постепенна и обусловлена возрастом, использованием и привычками зарядки, а две основные химии деградируют по-разному: LFP (литий-железо-фосфат) и NMC (никель-марганец-кобальт). Для экспорта это важно, потому что климат и режим зарядки в стране назначения меняют скорость дальнейшей деградации, а химия влияет на запас хода в холоде и поведение при зарядке — факт, который меняет пригодность автомобиля между жарким и холодным рынками.',
          es: 'La degradación es gradual y la impulsan la edad, el uso y los hábitos de carga, y las dos químicas principales se degradan de forma distinta: LFP (litio-ferrofosfato) y NMC (níquel-manganeso-cobalto). Para la exportación importa porque el clima y los patrones de carga del destino cambian la rapidez de la degradación futura, y la química afecta a la autonomía en frío y al comportamiento de carga: un hecho que desplaza la idoneidad del vehículo entre un mercado cálido y uno frío.',
        },
        {
          en: 'Charging splits into AC (home/workplace) charging and DC fast charging, with different speeds and connectors. For export, fast-charging capability decides real-world usability in a market with limited home charging, and the fast-charging standard must match the destination network — a vehicle that cannot fast-charge on the local standard loses practical value even if its battery is healthy.',
          ar: 'ينقسم الشحن إلى شحن بالتيار المتردد (في المنزل/العمل) وشحن سريع بالتيار المستمر، بسرعات وموصلات مختلفة. ويحدد الشحن السريع في التصدير قابلية الاستخدام الفعلي في سوق ذات شحن منزلي محدود، ويجب أن يطابق معيار الشحن السريع شبكة الوجهة — فالمركبة التي لا تستطيع الشحن السريع بالمعيار المحلي تفقد قيمتها العملية حتى لو كانت بطاريتها سليمة.',
          ru: 'Зарядка делится на зарядку переменным током (AC, дома/на работе) и быструю зарядку постоянным током (DC), с разными скоростями и разъёмами. Для экспорта возможность быстрой зарядки определяет реальную пригодность на рынке с ограниченной домашней зарядкой, а стандарт быстрой зарядки должен совпадать с сетью страны назначения — автомобиль, который не может быстро заряжаться по местному стандарту, теряет практическую ценность даже при исправной батарее.',
          es: 'La carga se divide en carga de CA (en casa/trabajo) y carga rápida de CC, con velocidades y conectores distintos. Para la exportación, la carga rápida decide la usabilidad real en un mercado con carga doméstica limitada, y el estándar de carga rápida debe coincidir con la red de destino: un vehículo que no puede cargar rápido con el estándar local pierde valor práctico aunque su batería esté sana.',
        },
        {
          en: 'Battery warranty is often generous in the domestic market but frequently does not transfer to export markets. For export this is a deciding factor: whether the warranty applies at the destination, and whether any local service can honour it, directly changes the buyer\'s downside risk and therefore the price they will pay.',
          ar: 'ضمان البطارية سخيّ غالباً في السوق المحلي لكنه لا ينتقل عادة إلى أسواق التصدير. ويُعد هذا في التصدير عاملاً حاسماً: فسريان الضمان في الوجهة، وقدرة أي خدمة محلية على الوفاء به، يغيّران مباشرة مخاطر المشتري السلبية وبالتالي السعر الذي سيدفعه.',
          ru: 'Гарантия на батарею часто щедрая на внутреннем рынке, но обычно не переносится на экспортные рынки. Для экспорта это решающий фактор: действует ли гарантия в стране назначения и может ли местный сервис её исполнить, напрямую меняет риск покупателя и, следовательно, цену, которую он заплатит.',
          es: 'La garantía de batería suele ser generosa en el mercado interno, pero con frecuencia no se transfiere a mercados de exportación. Para la exportación es un factor decisivo: si la garantía aplica en destino y si un servicio local puede hacerla efectiva, cambia directamente el riesgo a la baja del comprador y, por tanto, el precio que pagará.',
        },
        {
          en: 'Where a battery parameter is not available, treat that absence as information. We mark unavailable data as such rather than guessing; a parameter that has no published figure is written "Not publicly documented".',
          ar: 'عندما لا يتوفر معامل من معاملات البطارية، عامل غيابه كمعلومة. نعلّم البيانات غير المتوفرة على أنها كذلك بدلاً من التخمين؛ والمعامل الذي لا رقم منشور له يُكتب «غير موثّق علناً».',
          ru: 'Если параметр батареи недоступен, воспринимайте его отсутствие как информацию. Мы помечаем недоступные данные как таковые, а не угадываем; параметр без опубликованной цифры записывается как «Не задокументировано публично».',
          es: 'Cuando un parámetro de batería no está disponible, trate esa ausencia como información. Marcamos los datos no disponibles como tales en lugar de adivinar; un parámetro sin cifra publicada se escribe «No documentado públicamente».',
        },
      ],
    },
    {
      heading: {
        en: 'Block 2 — Vehicle: BEV, PHEV and EREV, and domestic vs export specification',
        ar: 'الكتلة 2 — المركبة: BEV وPHEV وEREV، والمواصفات المحلية مقابل التصديرية',
        ru: 'Блок 2 — Автомобиль: BEV, PHEV и EREV, а также внутренняя и экспортная спецификация',
        es: 'Bloque 2 — Vehículo: BEV, PHEV y EREV, y especificación nacional frente a exportación',
      },
      paragraphs: [
        {
          en: 'The vehicle category decides which rules, duties and charging infrastructure apply. A BEV runs only on its rechargeable battery. A PHEV combines an electric motor with a combustion engine and recharges from the grid, running electric for daily use with the engine as backup. An EREV (extended-range EV, a range-extender form of PHEV) is always driven by its electric motor while a small combustion engine only generates electricity — it plugs in like a PHEV but drives like a BEV.',
          ar: 'تحدد فئة المركبة القواعد والرسوم وبنية الشحن التي تنطبق. تعمل المركبة الكهربائية بالكامل (BEV) على بطاريتها القابلة للشحن فقط. وتجمع الهجينة القابلة للشحن (PHEV) بين محرك كهربائي ومحرك احتراق وتُشحن من الشبكة، وتعمل بالكهرباء للاستخدام اليومي مع المحرك كاحتياطي. أما المركبة الكهربائية ممتدة المدى (EREV، وهي شكل من الهجينة القابلة للشحن بموسّع مدى) فيُدار دفعها دائماً بالمحرك الكهربائي بينما يولد محرك احتراق صغير الكهرباء فقط — تُشحن مثل PHEV لكنها تسير مثل BEV.',
          ru: 'Категория автомобиля определяет, какие правила, пошлины и зарядная инфраструктура применяются. BEV работает только от заряжаемой батареи. PHEV сочетает электромотор с ДВС и заряжается от сети, работая на электротяге в повседневных поездках с двигателем как резервом. EREV (электромобиль с увеличенным запасом хода, форма PHEV с удлинителем хода) всегда приводится электромотором, а небольшой ДВС лишь вырабатывает электричество — он заряжается как PHEV, но едет как BEV.',
          es: 'La categoría del vehículo decide qué normas, aranceles e infraestructura de carga aplican. Un BEV funciona solo con su batería recargable. Un PHEV combina un motor eléctrico con uno de combustión y se recarga de la red, funcionando en eléctrico para el uso diario con el motor como respaldo. Un EREV (eléctrico de autonomía extendida, forma de PHEV con extensor de autonomía) siempre lo impulsa su motor eléctrico mientras un pequeño motor de combustión solo genera electricidad: se enchufa como un PHEV pero circula como un BEV.',
        },
        {
          en: 'Domestic vs export specification is a distinct check. A vehicle built for the China domestic market can differ from an official export version in its charging port, software and connectivity, supported voltage and frequency, and even safety/type-approval. For export this means a domestic-specification vehicle may need a connector adapter, may carry region-locked software, or may not meet the destination\'s homologation — so specification is a decision factor, not a minor detail.',
          ar: 'المواصفات المحلية مقابل التصديرية فحص مستقل. فالمركبة المصنوعة للسوق الصيني المحلي قد تختلف عن نسخة التصدير الرسمية في منفذ الشحن والبرمجيات والاتصال والجهد والتردد المدعومين، وحتى في الأمان واعتماد الطراز. ويعني ذلك في التصدير أن مركبة بالمواصفات المحلية قد تحتاج محول موصل، أو تحمل برمجيات مقفلة إقليمياً، أو لا تفي باعتماد الطراز في الوجهة — فالمواصفات عامل قرار لا تفصيل ثانوي.',
          ru: 'Внутренняя и экспортная спецификация — это отдельная проверка. Автомобиль, созданный для внутреннего рынка Китая, может отличаться от официальной экспортной версии портом зарядки, ПО и связью, поддерживаемым напряжением и частотой и даже безопасностью/омологацией. Для экспорта это значит, что автомобиль с внутренней спецификацией может требовать адаптер разъёма, нести привязанное к региону ПО или не соответствовать омологации страны назначения — спецификация является фактором решения, а не мелочью.',
          es: 'La especificación nacional frente a la de exportación es una comprobación distinta. Un vehículo fabricado para el mercado interno chino puede diferir de una versión oficial de exportación en el puerto de carga, el software y la conectividad, el voltaje y la frecuencia soportados, e incluso la seguridad/homologación. Para la exportación esto significa que un vehículo de especificación nacional puede necesitar un adaptador de conector, traer software bloqueado por región o no cumplir la homologación del destino: la especificación es un factor de decisión, no un detalle menor.',
        },
      ],
    },
    {
      heading: {
        en: 'Block 3 — Compatibility: will the vehicle work in the destination market',
        ar: 'الكتلة 3 — التوافق: هل ستعمل المركبة في سوق الوجهة',
        ru: 'Блок 3 — Совместимость: будет ли автомобиль работать в стране назначения',
        es: 'Bloque 3 — Compatibilidad: funcionará el vehículo en el mercado de destino',
      },
      paragraphs: [
        {
          en: 'Charging standard and connector are the first compatibility check. China\'s domestic standard is GB/T; destinations commonly use CCS2 (Europe and several regions), CHAdeMO (notably Japan) or North American connectors. A China-market vehicle\'s port may not physically match the destination network, and adapters are not always practical or safe for daily fast charging.',
          ar: 'معيار الشحن والموصل هما أول فحص توافق. المعيار المحلي في الصين هو GB/T؛ وتستخدم الوجهات عادة CCS2 (أوروبا ومناطق عدة)، أو CHAdeMO (خاصة اليابان) أو موصلات أمريكا الشمالية. قد لا يطابق منفذ مركبة السوق الصيني شبكة الوجهة فعلياً، والمحولات ليست دائماً عملية أو آمنة للشحن السريع اليومي.',
          ru: 'Стандарт зарядки и разъём — первая проверка совместимости. Внутренний стандарт Китая — GB/T; в странах назначения обычно используются CCS2 (Европа и ряд регионов), CHAdeMO (особенно Япония) или североамериканские разъёмы. Порт автомобиля китайского рынка может физически не совпадать с сетью страны назначения, а адаптеры не всегда практичны или безопасны для ежедневной быстрой зарядки.',
          es: 'El estándar de carga y el conector son la primera comprobación de compatibilidad. El estándar interno de China es GB/T; los destinos suelen usar CCS2 (Europa y varias regiones), CHAdeMO (sobre todo Japón) o conectores norteamericanos. El puerto de un vehículo del mercado chino puede no coincidir físicamente con la red de destino, y los adaptadores no siempre son prácticos o seguros para la carga rápida diaria.',
        },
        {
          en: 'Voltage, frequency and charging infrastructure matter next. Grid voltage and frequency differ between regions, and public-charging density varies widely. The vehicle\'s on-board charger must accept the destination\'s voltage and frequency, and its connector must match the local physical standard — both, not just one.',
          ar: 'الجهد والتردد وبنية الشحن تهم بعد ذلك. يختلف جهد الشبكة وترددها بين المناطق، وتتباين كثافة الشحن العام على نطاق واسع. يجب أن يقبل الشاحن المدمج في المركبة جهد الوجهة وترددها، وأن يطابق موصلها المعيار الفيزيائي المحلي — كلاهما، لا أحدهما فقط.',
          ru: 'Далее важны напряжение, частота и зарядная инфраструктура. Напряжение и частота сети различаются между регионами, а плотность публичных зарядок сильно варьируется. Встроенное зарядное устройство автомобиля должно принимать напряжение и частоту страны назначения, а его разъём — совпадать с местным физическим стандартом: и то, и другое, а не что-то одно.',
          es: 'Después importan el voltaje, la frecuencia y la infraestructura de carga. El voltaje y la frecuencia de red difieren entre regiones, y la densidad de carga pública varía mucho. El cargador de a bordo del vehículo debe aceptar el voltaje y la frecuencia del destino, y su conector debe coincidir con el estándar físico local: ambas cosas, no solo una.',
        },
        {
          en: 'Software, OTA, language and connected services are a compatibility risk most buyers overlook. Infotainment, navigation, over-the-air updates, the mobile app and connected services are often region- or language-locked to China. In the destination they may not work, may not update, or may require re-flashing — and that affects the buyer\'s day-to-day experience and resale appeal.',
          ar: 'البرمجيات والتحديث اللاسلكي واللغة والخدمات المتصلة مخاطرة توافق يغفلها معظم المشترين. فأنظمة الترفيه والملاحة والتحديثات اللاسلكية وتطبيق الهاتف والخدمات المتصلة غالباً مقفلة إقليمياً أو لغوياً على الصين. وفي الوجهة قد لا تعمل أو لا تتحدث أو تحتاج إعادة تثبيت برمجي — وهذا يؤثر على تجربة المشتري اليومية وجاذبية إعادة البيع.',
          ru: 'ПО, обновления по воздуху, язык и подключённые сервисы — это риск совместимости, который большинство покупателей упускает. Мультимедиа, навигация, обновления по воздуху, мобильное приложение и подключённые сервисы часто привязаны к региону или языку Китая. В стране назначения они могут не работать, не обновляться или требовать перепрошивки — и это влияет на ежедневный опыт покупателя и привлекательность при перепродаже.',
          es: 'El software, las OTA, el idioma y los servicios conectados son un riesgo de compatibilidad que la mayoría de compradores pasa por alto. El infoentretenimiento, la navegación, las actualizaciones por aire, la app móvil y los servicios conectados suelen estar bloqueados por región o idioma a China. En destino pueden no funcionar, no actualizarse o requerir re-flasheo, y eso afecta a la experiencia diaria del comprador y al atractivo de reventa.',
        },
      ],
      checklist: [
        { en: 'Check the connector standard against the destination network (GB/T vs CCS2/CHAdeMO/other).', ar: 'تحقق من معيار الموصل مقابل شبكة الوجهة (GB/T مقابل CCS2/CHAdeMO/غيرها).', ru: 'Проверьте стандарт разъёма против сети страны назначения (GB/T или CCS2/CHAdeMO/иное).', es: 'Compruebe el estándar del conector frente a la red de destino (GB/T frente a CCS2/CHAdeMO/otro).' },
        { en: 'Check voltage and frequency compatibility for on-board charging.', ar: 'تحقق من توافق الجهد والتردد للشحن المدمج.', ru: 'Проверьте совместимость напряжения и частоты для встроенной зарядки.', es: 'Compruebe la compatibilidad de voltaje y frecuencia para la carga de a bordo.' },
        { en: 'Check fast-charging standard and whether adapters are practical for your use.', ar: 'تحقق من معيار الشحن السريع وما إذا كانت المحولات عملية لاستخدامك.', ru: 'Проверьте стандарт быстрой зарядки и практичность адаптеров для вашего использования.', es: 'Compruebe el estándar de carga rápida y si los adaptadores son prácticos para su uso.' },
        { en: 'Check software, OTA, app, language and connected-service availability in the destination.', ar: 'تحقق من توفر البرمجيات والتحديث اللاسلكي والتطبيق واللغة والخدمات المتصلة في الوجهة.', ru: 'Проверьте доступность ПО, обновлений по воздуху, приложения, языка и подключённых сервисов в стране назначения.', es: 'Compruebe la disponibilidad de software, OTA, app, idioma y servicios conectados en destino.' },
        { en: 'Confirm each point against the specific vehicle\'s specification and the destination network — not generic assumptions.', ar: 'أكد كل نقطة مقابل مواصفات المركبة المحددة وشبكة الوجهة — لا افتراضات عامة.', ru: 'Подтверждайте каждый пункт по конкретной спецификации автомобиля и сети страны назначения, а не по общим предположениям.', es: 'Confirme cada punto según la especificación concreta del vehículo y la red de destino, no por supuestos genéricos.' },
      ],
    },
    {
      heading: {
        en: 'Block 4 — Export risks: what can go wrong after purchase',
        ar: 'الكتلة 4 — مخاطر التصدير: ما قد يسوء بعد الشراء',
        ru: 'Блок 4 — Риски экспорта: что может пойти не так после покупки',
        es: 'Bloque 4 — Riesgos de exportación: qué puede salir mal tras la compra',
      },
      paragraphs: [
        {
          en: 'Warranty is the first risk. Battery and vehicle warranties are often valid only in the domestic market, so an export buyer may find the warranty does not transfer, or that no local dealer will honour it. This converts a "covered" vehicle into an "uncovered" one the moment it ships — a change that should be priced into the decision.',
          ar: 'الضمان هو أول مخاطرة. فغالباً ما تكون ضمانات البطارية والمركبة سارية في السوق المحلي فقط، لذا قد يجد مشتري التصدير أن الضمان لا ينتقل، أو أنه لا يوجد وكيل محلي يفي به. وهذا يحوّل المركبة «المغطاة» إلى «غير مغطاة» لحظة شحنها — تغيير يجب تسعيره في القرار.',
          ru: 'Гарантия — первый риск. Гарантии на батарею и автомобиль часто действуют только на внутреннем рынке, поэтому экспортный покупатель может обнаружить, что гарантия не переносится или ни один местный дилер её не исполнит. Это превращает «покрытый» автомобиль в «непокрытый» в момент отправки — изменение, которое следует заложить в решение.',
          es: 'La garantía es el primer riesgo. Las garantías de batería y vehículo a menudo solo valen en el mercado interno, por lo que un comprador de exportación puede encontrar que la garantía no se transfiere o que ningún concesionario local la hace efectiva. Esto convierte un vehículo «cubierto» en «descubierto» en el momento del envío: un cambio que debe incluirse en la decisión.',
        },
        {
          en: 'Software region lock, app availability and OTA limitations form a cluster of risks. A vehicle region-locked to China may not receive over-the-air updates abroad, its companion app may be unavailable or geo-restricted, and connected features may stop working. These are rarely visible in a listing and only surface after the vehicle arrives.',
          ar: 'قفل البرمجيات الإقليمي وتوفر التطبيق وقيود التحديث اللاسلكي تشكل مجموعة مخاطر. فالمركبة المقفلة إقليمياً على الصين قد لا تتلقى تحديثات لاسلكية في الخارج، وقد يكون تطبيقها المصاحب غير متوفر أو مقيداً جغرافياً، وقد تتوقف المزايا المتصلة. ونادراً ما تظهر هذه في الإعلان ولا تظهر إلا بعد وصول المركبة.',
          ru: 'Региональная блокировка ПО, доступность приложения и ограничения OTA образуют кластер рисков. Автомобиль, привязанный к региону Китая, может не получать обновления по воздуху за рубежом, его сопутствующее приложение может быть недоступно или гео-ограничено, а подключённые функции могут перестать работать. Это редко видно в объявлении и проявляется только после прибытия автомобиля.',
          es: 'El bloqueo regional de software, la disponibilidad de la app y las limitaciones de OTA forman un grupo de riesgos. Un vehículo bloqueado por región a China puede no recibir actualizaciones por aire en el extranjero, su app complementaria puede estar no disponible o georestringida, y las funciones conectadas pueden dejar de funcionar. Rara vez se ve en el anuncio y solo aparece tras la llegada del vehículo.',
        },
        {
          en: 'Parts and service are a practical risk. Availability of parts and of technicians trained on the brand and model varies by market. A model with weak local support is harder to maintain and resell, which matters for dealers and importers who must support what they sell.',
          ar: 'قطع الغيار والخدمة مخاطرة عملية. يتباين توفر قطع الغيار والفنيين المدرَّبين على العلامة والطراز حسب السوق. فالطراز ضعيف الدعم المحلي أصعب صيانةً وإعادة بيع، وهذا يهم التجار والمستوردين الذين يجب أن يدعموا ما يبيعونه.',
          ru: 'Запчасти и сервис — практический риск. Доступность запчастей и специалистов, обученных по марке и модели, различается по рынкам. Модель со слабой локальной поддержкой сложнее обслуживать и перепродавать, что важно для дилеров и импортёров, которые должны поддерживать то, что продают.',
          es: 'Los repuestos y el servicio son un riesgo práctico. La disponibilidad de repuestos y de técnicos formados en la marca y el modelo varía por mercado. Un modelo con poco soporte local es más difícil de mantener y revender, algo que importa a concesionarios e importadores que deben respaldar lo que venden.',
        },
        {
          en: 'Destination compatibility pulls these risks together. A vehicle can be inexpensive, healthy and well-specced yet still be a poor export choice if its charging standard, software or support do not fit the destination. The export decision is a compatibility decision as much as a price decision.',
          ar: 'توافق الوجهة يجمع هذه المخاطر. فقد تكون المركبة رخيصة وسليمة وجيدة التجهيز ومع ذلك خيار تصدير ضعيف إذا لم يناسب معيار الشحن أو البرمجيات أو الدعم لديها الوجهة. فقرار التصدير قرار توافق بقدر ما هو قرار سعر.',
          ru: 'Совместимость со страной назначения объединяет эти риски. Автомобиль может быть недорогим, исправным и хорошо оснащённым, но всё равно быть плохим выбором для экспорта, если его стандарт зарядки, ПО или поддержка не подходят стране назначения. Решение об экспорте — это решение о совместимости в той же мере, что и о цене.',
          es: 'La compatibilidad de destino reúne estos riesgos. Un vehículo puede ser barato, sano y bien equipado y aun así ser una mala opción de exportación si su estándar de carga, software o soporte no encajan con el destino. La decisión de exportación es tanto de compatibilidad como de precio.',
        },
      ],
    },
    {
      heading: {
        en: 'Decision framework — the factors that drive an EV export decision',
        ar: 'إطار القرار — العوامل التي تقود قرار تصدير المركبة الكهربائية',
        ru: 'Структура решения — факторы, определяющие решение об экспорте электромобиля',
        es: 'Marco de decisión — los factores que guían una decisión de exportación de VE',
      },
      paragraphs: [
        {
          en: 'The table below maps each factor to what to check and why it matters for export. It is a decision aid, not a substitute for verifying the specific vehicle and destination. Any parameter with no published figure is written "Not publicly documented", never guessed.',
          ar: 'تربط الجدول أدناه كل عامل بما يجب التحقق منه ولماذا يهم التصدير. وهو أداة قرار لا بديل عن التحقق من المركبة والوجهة المحددتين. أي معامل لا رقم منشور له يُكتب «غير موثّق علناً»، ولا يُخمَّن أبداً.',
          ru: 'Таблица ниже связывает каждый фактор с тем, что проверять и почему это важно для экспорта. Это инструмент принятия решения, а не замена проверки конкретного автомобиля и страны назначения. Любой параметр без опубликованной цифры записывается как «Не задокументировано публично» и никогда не угадывается.',
          es: 'La tabla siguiente relaciona cada factor con qué comprobar y por qué importa para la exportación. Es una ayuda de decisión, no un sustituto de verificar el vehículo y destino concretos. Cualquier parámetro sin cifra publicada se escribe «No documentado públicamente» y nunca se adivina.',
        },
      ],
      table: {
        headers: [
          { en: 'Factor', ar: 'العامل', ru: 'Фактор', es: 'Factor' },
          { en: 'What to check', ar: 'ما يجب التحقق منه', ru: 'Что проверять', es: 'Qué comprobar' },
          { en: 'Why it matters for export', ar: 'لماذا يهم التصدير', ru: 'Почему это важно для экспорта', es: 'Por qué importa para la exportación' },
        ],
        rows: [
          [
            { en: 'State of health (SOH)', ar: 'حالة الصحة (SOH)', ru: 'Состояние здоровья (SOH)', es: 'Estado de salud (SOH)' },
            { en: 'A battery diagnostic report showing SOH as a percentage of new capacity.', ar: 'تقرير تشخيص للبطارية يعرض حالة الصحة كنسبة من سعة الجديدة.', ru: 'Диагностический отчёт по батарее с SOH как процентом от новой ёмкости.', es: 'Un informe de diagnóstico de batería que muestre el SOH como porcentaje de la capacidad de nueva.' },
            { en: 'SOH sets real-world range and remaining life — what a destination buyer is actually paying for.', ar: 'تحدد حالة الصحة المدى الفعلي والعمر المتبقي — ما يدفع مشتري الوجهة مقابله فعلياً.', ru: 'SOH задаёт реальный запас хода и остаточный ресурс — то, за что фактически платит покупатель в стране назначения.', es: 'El SOH fija la autonomía real y la vida restante: lo que paga realmente un comprador de destino.' },
          ],
          [
            { en: 'Usable vs nominal capacity', ar: 'السعة القابلة للاستخدام مقابل الاسمية', ru: 'Полезная и номинальная ёмкость', es: 'Capacidad útil frente a nominal' },
            { en: 'Usable capacity against the nominal (rated) figure.', ar: 'السعة القابلة للاستخدام مقابل الرقم الاسمي (المُقدَّر).', ru: 'Полезная ёмкость против номинальной (паспортной).', es: 'La capacidad útil frente a la nominal (homologada).' },
            { en: 'A large gap means the advertised range overstates what the vehicle can deliver, hurting resale in the destination.', ar: 'الفجوة الكبيرة تعني أن المدى المُعلَن يبالغ فيما يمكن للمركبة تقديمه، مما يضر بإعادة البيع في الوجهة.', ru: 'Большой разрыв означает, что заявленный запас хода завышает реальные возможности, что вредит перепродаже в стране назначения.', es: 'Una brecha grande significa que la autonomía anunciada exagera lo que el vehículo entrega, perjudicando la reventa en destino.' },
          ],
          [
            { en: 'Degradation & chemistry', ar: 'التدهور والكيمياء', ru: 'Деградация и химия', es: 'Degradación y química' },
            { en: 'Age, chemistry (LFP vs NMC) and how the battery has been used and charged.', ar: 'العمر والكيمياء (LFP مقابل NMC) وكيف استُخدمت البطارية وشُحنت.', ru: 'Возраст, химия (LFP или NMC) и то, как батарею использовали и заряжали.', es: 'La edad, la química (LFP frente a NMC) y cómo se ha usado y cargado la batería.' },
            { en: 'The destination\'s climate and charging patterns change future degradation, and chemistry shifts cold-weather range and charging behaviour.', ar: 'يغيّر مناخ الوجهة وأنماط الشحن فيها التدهور المستقبلي، وتنقل الكيمياء مدى الطقس البارد وسلوك الشحن.', ru: 'Климат и режим зарядки в стране назначения меняют будущую деградацию, а химия сдвигает запас хода в холод и поведение при зарядке.', es: 'El clima y los patrones de carga del destino cambian la degradación futura, y la química desplaza la autonomía en frío y el comportamiento de carga.' },
          ],
          [
            { en: 'Charging & fast charging', ar: 'الشحن والشحن السريع', ru: 'Зарядка и быстрая зарядка', es: 'Carga y carga rápida' },
            { en: 'AC charging capability and DC fast-charging speed and standard.', ar: 'قدرة الشحن بالتيار المتردد وسرعة ومعيار الشحن السريع بالتيار المستمر.', ru: 'Возможность зарядки AC и скорость и стандарт быстрой зарядки DC.', es: 'La capacidad de carga de CA y la velocidad y estándar de carga rápida de CC.' },
            { en: 'Fast-charging determines usability where home charging is scarce, and the standard must match the destination network.', ar: 'يحدد الشحن السريع قابلية الاستخدام حيث يندر الشحن المنزلي، ويجب أن يطابق المعيار شبكة الوجهة.', ru: 'Быстрая зарядка определяет пригодность там, где домашняя зарядка ограничена, а стандарт должен совпадать с сетью страны назначения.', es: 'La carga rápida determina la usabilidad donde escasea la carga doméstica, y el estándar debe coincidir con la red de destino.' },
          ],
          [
            { en: 'Battery warranty', ar: 'ضمان البطارية', ru: 'Гарантия на батарею', es: 'Garantía de batería' },
            { en: 'Whether the warranty applies and whether it transfers to the export market.', ar: 'ما إذا كان الضمان سارياً وما إذا كان ينتقل إلى سوق التصدير.', ru: 'Действует ли гарантия и переносится ли она на экспортный рынок.', es: 'Si la garantía aplica y si se transfiere al mercado de exportación.' },
            { en: 'A non-transferring warranty removes the buyer\'s safety net and lowers the price they will pay.', ar: 'الضمان غير المنتقل يزيل شبكة أمان المشتري ويخفض السعر الذي سيدفعه.', ru: 'Непередаваемая гарантия лишает покупателя подушки безопасности и снижает цену, которую он заплатит.', es: 'Una garantía no transferible elimina la red de seguridad del comprador y baja el precio que pagará.' },
          ],
          [
            { en: 'Vehicle category', ar: 'فئة المركبة', ru: 'Категория автомобиля', es: 'Categoría del vehículo' },
            { en: 'Whether the vehicle is a BEV, PHEV or EREV.', ar: 'ما إذا كانت المركبة BEV أو PHEV أو EREV.', ru: 'Является ли автомобиль BEV, PHEV или EREV.', es: 'Si el vehículo es BEV, PHEV o EREV.' },
            { en: 'The category decides which duties, rules and charging infrastructure apply at the destination.', ar: 'تحدد الفئة الرسوم والقواعد وبنية الشحن التي تنطبق في الوجهة.', ru: 'Категория определяет, какие пошлины, правила и зарядная инфраструктура применяются в стране назначения.', es: 'La categoría decide qué aranceles, normas e infraestructura de carga aplican en destino.' },
          ],
          [
            { en: 'Domestic vs export specification', ar: 'المواصفات المحلية مقابل التصديرية', ru: 'Внутренняя и экспортная спецификация', es: 'Especificación nacional frente a exportación' },
            { en: 'Whether the vehicle is a China-domestic spec or an official export version.', ar: 'ما إذا كانت المركبة بمواصفات السوق الصيني المحلي أو نسخة تصدير رسمية.', ru: 'Автомобиль внутренней китайской спецификации или официальная экспортная версия.', es: 'Si el vehículo es de especificación nacional china o una versión oficial de exportación.' },
            { en: 'Domestic spec may need a connector adapter, carry region-locked software, or fail destination homologation.', ar: 'قد تحتاج المواصفات المحلية محول موصل، أو تحمل برمجيات مقفلة إقليمياً، أو تفشل في اعتماد الطراز في الوجهة.', ru: 'Внутренняя спецификация может требовать адаптер разъёма, нести привязанное к региону ПО или не пройти омологацию страны назначения.', es: 'La especificación nacional puede requerir adaptador de conector, traer software bloqueado por región o fallar la homologación de destino.' },
          ],
          [
            { en: 'Connector & charging standard', ar: 'الموصل ومعيار الشحن', ru: 'Разъём и стандарт зарядки', es: 'Conector y estándar de carga' },
            { en: 'The vehicle\'s port (e.g. GB/T) against the destination standard (e.g. CCS2, CHAdeMO).', ar: 'منفذ المركبة (مثل GB/T) مقابل معيار الوجهة (مثل CCS2 أو CHAdeMO).', ru: 'Порт автомобиля (например, GB/T) против стандарта страны назначения (например, CCS2, CHAdeMO).', es: 'El puerto del vehículo (p. ej. GB/T) frente al estándar de destino (p. ej. CCS2, CHAdeMO).' },
            { en: 'A mismatch blocks or complicates charging, and adapters are not always practical for daily fast charging.', ar: 'عدم التطابق يمنع الشحن أو يعقّده، والمحولات ليست دائماً عملية للشحن السريع اليومي.', ru: 'Несовпадение блокирует или усложняет зарядку, а адаптеры не всегда практичны для ежедневной быстрой зарядки.', es: 'Un desajuste bloquea o complica la carga, y los adaptadores no siempre son prácticos para la carga rápida diaria.' },
          ],
          [
            { en: 'Voltage, frequency & infrastructure', ar: 'الجهد والتردد والبنية التحتية', ru: 'Напряжение, частота и инфраструктура', es: 'Voltaje, frecuencia e infraestructura' },
            { en: 'On-board charger support for the destination\'s voltage/frequency and local charging density.', ar: 'دعم الشاحن المدمج لجهد/تردد الوجهة وكثافة الشحن المحلية.', ru: 'Поддержка встроенным зарядным устройством напряжения/частоты страны и плотность местной зарядки.', es: 'El soporte del cargador de a bordo para el voltaje/frecuencia del destino y la densidad de carga local.' },
            { en: 'Even a matching connector fails if the electrical system or network density does not suit the market.', ar: 'حتى الموصل المطابق يفشل إذا لم يناسب النظام الكهربائي أو كثافة الشبكة السوق.', ru: 'Даже совпадающий разъём не поможет, если электрическая система или плотность сети не подходят рынку.', es: 'Incluso un conector que coincide falla si el sistema eléctrico o la densidad de red no se adaptan al mercado.' },
          ],
          [
            { en: 'Software, OTA & connected services', ar: 'البرمجيات والتحديث اللاسلكي والخدمات المتصلة', ru: 'ПО, OTA и подключённые сервисы', es: 'Software, OTA y servicios conectados' },
            { en: 'Whether infotainment, navigation, OTA updates, app and connected services work in the destination.', ar: 'ما إذا كانت أنظمة الترفيه والملاحة والتحديثات اللاسلكية والتطبيق والخدمات المتصلة تعمل في الوجهة.', ru: 'Работают ли мультимедиа, навигация, обновления по воздуху, приложение и подключённые сервисы в стране назначения.', es: 'Si el infoentretenimiento, la navegación, las OTA, la app y los servicios conectados funcionan en destino.' },
            { en: 'Region-locked software or an unavailable app degrades the daily experience and resale appeal — often only visible after arrival.', ar: 'البرمجيات المقفلة إقليمياً أو التطبيق غير المتوفر يخفضان التجربة اليومية وجاذبية إعادة البيع — وغالباً لا يظهران إلا بعد الوصول.', ru: 'Привязанное к региону ПО или недоступное приложение ухудшают ежедневный опыт и привлекательность при перепродаже — часто видно только после прибытия.', es: 'El software bloqueado por región o una app no disponible degradan la experiencia diaria y el atractivo de reventa, a menudo solo visibles tras la llegada.' },
          ],
          [
            { en: 'Parts, service & destination eligibility', ar: 'قطع الغيار والخدمة وأهلية الوجهة', ru: 'Запчасти, сервис и пригодность для страны', es: 'Repuestos, servicio y elegibilidad de destino' },
            { en: 'Local parts/service for the model, and the destination\'s import eligibility and EV rules.', ar: 'قطع الغيار/الخدمة المحلية للطراز، وأهلية الاستيراد وقواعد المركبات الكهربائية في الوجهة.', ru: 'Местные запчасти/сервис для модели, а также правила импорта и нормы для электромобилей в стране.', es: 'Repuestos/servicio local del modelo, y la elegibilidad de importación y las normas de VE del destino.' },
            { en: 'Weak support or restrictive rules can make an otherwise good EV a poor commercial choice in a specific market.', ar: 'قد يجعل الدعم الضعيف أو القواعد المقيِّدة مركبة كهربائية جيدة خياراً تجارياً ضعيفاً في سوق معين.', ru: 'Слабая поддержка или ограничительные правила могут сделать в целом хороший электромобиль плохим коммерческим выбором на конкретном рынке.', es: 'Un soporte débil o normas restrictivas pueden hacer que un VE por lo demás bueno sea una mala opción comercial en un mercado concreto.' },
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
          en: 'The depth of checking varies. A nearly new BEV with a diagnostic report needs less scrutiny than an older PHEV with no battery data; an official export version may already match the destination\'s charging standard; and a market with strong EV incentives changes the economics. The principle is constant — weigh battery condition and compatibility against the vehicle\'s value and the destination\'s rules.',
          ar: 'يختلف عمق الفحص. فالمركبة الكهربائية بالكامل شبه الجديدة ذات التقرير التشخيصي تحتاج فحصاً أقل من هجينة أقدم دون بيانات بطارية؛ وقد تطابق نسخة التصدير الرسمية معيار الشحن في الوجهة بالفعل؛ ويغيّر السوق ذو حوافز المركبات الكهربائية القوية الاقتصاديات. المبدأ ثابت — وازن بين حالة البطارية والتوافق وقيمة المركبة وقواعد الوجهة.',
          ru: 'Глубина проверки зависит от случая. Почти новый BEV с диагностическим отчётом требует меньше проверок, чем старый PHEV без данных о батарее; официальная экспортная версия может уже соответствовать стандарту зарядки страны назначения; рынок с сильными стимулами для электромобилей меняет экономику. Принцип неизменен — сопоставляйте состояние батареи и совместимость со стоимостью автомобиля и правилами страны.',
          es: 'La profundidad de comprobación varía. Un BEV seminuevo con informe de diagnóstico necesita menos escrutinio que un PHEV antiguo sin datos de batería; una versión oficial de exportación puede ya coincidir con el estándar de carga del destino; y un mercado con fuertes incentivos para VE cambia la economía. El principio es constante: sopese el estado de la batería y la compatibilidad con el valor del vehículo y las normas del destino.',
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
          en: 'EV import rules, duties, incentives and technical requirements are destination-specific and maintained on the Market sub-site (each rule with a source and last-checked date). The EV import centre compares EV policy across markets, and each country page carries an EV rules section.',
          ar: 'قواعد استيراد المركبات الكهربائية والرسوم والحوافز والمتطلبات التقنية خاصة بكل وجهة وتُصان في الموقع الفرعي للأسواق (كل حكم بمصدر وتاريخ آخر فحص). يقارن مركز استيراد المركبات الكهربائية سياسات المركبات الكهربائية عبر الأسواق، وتحمل كل صفحة بلد قسماً لقواعد المركبات الكهربائية.',
          ru: 'Правила импорта электромобилей, пошлины, стимулы и технические требования специфичны для страны и ведутся на подсайте Market (каждое правило с источником и датой последней проверки). Центр импорта электромобилей сравнивает политику по рынкам, а каждая страница страны содержит раздел правил для электромобилей.',
          es: 'Las normas de importación de VE, aranceles, incentivos y requisitos técnicos son específicos del destino y se mantienen en el subsitio Market (cada norma con fuente y fecha de última comprobación). El centro de importación de VE compara la política entre mercados, y cada página de país lleva una sección de normas de VE.',
        },
      ],
      links: [
        {
          href: 'https://market.chinausedautohub.com/ev-import/',
          label: {
            en: 'EV import rules by market — Market sub-site',
            ar: 'قواعد استيراد المركبات الكهربائية حسب السوق — الموقع الفرعي للأسواق',
            ru: 'Правила импорта электромобилей по рынкам — подсайт Market',
            es: 'Normas de importación de VE por mercado — subsitio Market',
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
          en: 'EV, PHEV and EREV model specifications live on the Data sub-site — each model page carries powertrain, battery capacity, range and a source/confidence note. For the condition and battery checks that precede purchase, see the Inspection guide; for the full commercial decision, see the How to Buy guide.',
          ar: 'توجد مواصفات طرازات BEV وPHEV وEREV في الموقع الفرعي للبيانات — تحمل كل صفحة طراز نظام الدفع وسعة البطارية والمدى وملاحظة مصدر/ثقة. لفحوصات الحالة والبطارية التي تسبق الشراء، راجع دليل الفحص؛ وللقرار التجاري الكامل، راجع دليل «كيف تشتري».',
          ru: 'Спецификации моделей BEV, PHEV и EREV находятся на подсайте Data — каждая страница модели содержит силовую установку, ёмкость батареи, запас хода и пометку источника/достоверности. По проверкам состояния и батареи перед покупкой см. руководство по проверке; по полному коммерческому решению — руководство «Как купить».',
          es: 'Las especificaciones de modelos BEV, PHEV y EREV viven en el subsitio Data: cada página de modelo lleva la motorización, la capacidad de batería, la autonomía y una nota de fuente/confianza. Para las comprobaciones de estado y batería previas a la compra, consulte la guía de inspección; para la decisión comercial completa, la guía «Cómo comprar».',
        },
      ],
      links: [
        {
          href: 'https://data.chinausedautohub.com/models/byd-atto-3/',
          label: {
            en: 'BYD Atto 3 — EV model data',
            ar: 'BYD Atto 3 — بيانات طراز كهربائي',
            ru: 'BYD Atto 3 — данные модели электромобиля',
            es: 'BYD Atto 3 — datos del modelo EV',
          },
        },
        {
          href: 'https://data.chinausedautohub.com/models/byd-seal/',
          label: {
            en: 'BYD Seal — EV model data',
            ar: 'BYD Seal — بيانات طراز كهربائي',
            ru: 'BYD Seal — данные модели электромобиля',
            es: 'BYD Seal — datos del modelo EV',
          },
        },
        {
          href: 'https://data.chinausedautohub.com/models/li-auto-l7/',
          label: {
            en: 'Li Auto L7 — EREV model data',
            ar: 'Li Auto L7 — بيانات طراز ممتد المدى',
            ru: 'Li Auto L7 — данные модели EREV',
            es: 'Li Auto L7 — datos del modelo EREV',
          },
        },
        {
          href: 'https://data.chinausedautohub.com/models/byd-song-plus/',
          label: {
            en: 'BYD Song Plus — PHEV/EV model data',
            ar: 'BYD Song Plus — بيانات طراز هجين/كهربائي',
            ru: 'BYD Song Plus — данные модели PHEV/EV',
            es: 'BYD Song Plus — datos del modelo PHEV/EV',
          },
        },
        {
          slug: 'vehicle-inspection',
          label: {
            en: 'Condition and battery checks — Inspection guide',
            ar: 'فحوصات الحالة والبطارية — دليل الفحص',
            ru: 'Проверки состояния и батареи — руководство по проверке',
            es: 'Comprobaciones de estado y batería — guía de inspección',
          },
        },
        {
          slug: 'how-to-buy-used-car-from-china',
          label: {
            en: 'Full buying decision — How to Buy guide',
            ar: 'قرار الشراء الكامل — دليل «كيف تشتري»',
            ru: 'Полное решение о покупке — руководство «Как купить»',
            es: 'Decisión de compra completa — guía «Cómo comprar»',
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
          en: 'Estimate EV import cost and check destination compatibility on the Tools sub-site. The calculators structure the estimate; final figures are confirmed at quote time with current rates.',
          ar: 'قدّر تكلفة استيراد المركبة الكهربائية وتحقق من توافق الوجهة في الموقع الفرعي للأدوات. تهيكل الحاسبات التقدير؛ وتؤكد الأرقام النهائية عند عرض السعر بالأسعار الحالية.',
          ru: 'Оцените стоимость импорта электромобиля и проверьте совместимость со страной на подсайте инструментов. Калькуляторы структурируют оценку; итоговые цифры подтверждаются при расчёте по текущим тарифам.',
          es: 'Estime el coste de importación del VE y compruebe la compatibilidad de destino en el subsitio de herramientas. Las calculadoras estructuran la estimación; las cifras finales se confirman al cotizar con las tarifas vigentes.',
        },
      ],
      links: [
        {
          href: 'https://tool.chinausedautohub.com/ev-import-cost-calculator/',
          label: {
            en: 'EV Import Cost Calculator',
            ar: 'حاسبة تكلفة استيراد المركبات الكهربائية',
            ru: 'Калькулятор стоимости импорта электромобиля',
            es: 'Calculadora de coste de importación de VE',
          },
        },
        {
          href: 'https://tool.chinausedautohub.com/market-compatibility/',
          label: {
            en: 'Market Compatibility checker',
            ar: 'أداة التحقق من توافق السوق',
            ru: 'Проверка совместимости с рынком',
            es: 'Comprobador de compatibilidad de mercado',
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
          en: 'Battery and charging information is presented only when we hold it, with a confidence level. We do not fabricate SOH, capacity, range or chemistry figures; a parameter with no published figure is written "Not publicly documented", and battery health without a diagnostic report is marked "Not available". EV import rules and incentives are sourced on the Market sub-site (each with a cited source), and model specifications on the Data sub-site. Charging-standard compatibility should be verified for the specific vehicle and destination.',
          ar: 'تُعرض معلومات البطارية والشحن فقط عندما نحتفظ بها، مع مستوى ثقة. ولا نختلق أرقام حالة الصحة أو السعة أو المدى أو الكيمياء؛ فالمعامل الذي لا رقم منشور له يُكتب «غير موثّق علناً»، وتُعلَّم صحة البطارية دون تقرير تشخيصي بأنها «غير متوفرة». تصدر قواعد وحوافز استيراد المركبات الكهربائية من الموقع الفرعي للأسواق (كل منها بمصدر مستشهد به)، ومواصفات الطرازات من الموقع الفرعي للبيانات. يجب التحقق من توافق معيار الشحن للمركبة والوجهة المحددتين.',
          ru: 'Информация о батарее и зарядке показывается только при её наличии, с уровнем достоверности. Мы не выдумываем цифры SOH, ёмкости, запаса хода или химии; параметр без опубликованной цифры записывается как «Не задокументировано публично», а здоровье батареи без диагностического отчёта помечается как «Недоступно». Правила и стимулы импорта электромобилей берутся на подсайте Market (каждое с указанным источником), а спецификации моделей — на подсайте Data. Совместимость стандарта зарядки нужно проверять для конкретного автомобиля и страны.',
          es: 'La información de batería y carga se presenta solo cuando la tenemos, con un nivel de confianza. No fabricamos cifras de SOH, capacidad, autonomía ni química; un parámetro sin cifra publicada se escribe «No documentado públicamente», y la salud de batería sin informe de diagnóstico se marca «No disponible». Las normas e incentivos de importación de VE proceden del subsitio Market (cada uno con fuente citada) y las especificaciones de modelos del subsitio Data. La compatibilidad del estándar de carga debe verificarse para el vehículo y destino concretos.',
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
          en: 'Last reviewed: 2026-10-04. This guide describes EV export considerations in general; battery health, charging compatibility and destination rules must be verified for the specific vehicle and market. Confirm any figure that affects your decision with a current quote or diagnostic before committing.',
          ar: 'آخر مراجعة: 2026-10-04. يصف هذا الدليل اعتبارات تصدير المركبات الكهربائية عمومًا؛ يجب التحقق من صحة البطارية وتوافق الشحن وقواعد الوجهة للمركبة والسوق المحددين. أكد أي رقم يؤثر على قرارك بعرض سعر أو تشخيص حالي قبل الالتزام.',
          ru: 'Последняя проверка: 2026-10-04. Это руководство описывает соображения по экспорту электромобилей в общем виде; здоровье батареи, совместимость зарядки и правила страны нужно проверять для конкретного автомобиля и рынка. Подтвердите любую важную цифру актуальным расчётом или диагностикой до обязательств.',
          es: 'Última revisión: 2026-10-04. Esta guía describe las consideraciones de exportación de VE en general; la salud de la batería, la compatibilidad de carga y las normas de destino deben verificarse para el vehículo y mercado concretos. Confirme cualquier cifra que afecte a su decisión con una cotización o diagnóstico actual antes de comprometerse.',
        },
      ],
    },
    {
      heading: {
        en: 'Key considerations',
        ar: 'اعتبارات أساسية',
        ru: 'Ключевые соображения',
        es: 'Consideraciones clave',
      },
      paragraphs: [
        {
          en: 'Exact requirements depend on the vehicle, the export arrangement and the destination country. Prioritise battery condition and charging compatibility, review the information we hold with its confidence level, and confirm the destination rules before committing.',
          ar: 'تعتمد المتطلبات الدقيقة على المركبة وترتيب التصدير وبلد الوجهة. أعطِ الأولوية لحالة البطارية وتوافق الشحن، وراجع المعلومات التي نحتفظ بها مع مستوى ثقتها، وأكد قواعد الوجهة قبل الالتزام.',
          ru: 'Точные требования зависят от автомобиля, схемы экспорта и страны назначения. Уделите приоритет состоянию батареи и совместимости зарядки, изучите имеющуюся информацию с уровнем достоверности и подтвердите правила страны назначения до обязательств.',
          es: 'Los requisitos exactos dependen del vehículo, el acuerdo de exportación y el país de destino. Priorice el estado de la batería y la compatibilidad de carga, revise la información que tenemos con su nivel de confianza y confirme las normas de destino antes de comprometerse.',
        },
      ],
    },
  ],
};
