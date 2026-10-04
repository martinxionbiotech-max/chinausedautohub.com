import type { L10n } from '../l10n';

// Guide 9 — Used EV vs ICE Vehicles from China.
// Decision framework: the choice is destination-driven (duty/eligibility,
// charging infrastructure, running cost, resale), not a single "better" option.
// Zero-fabrication: figures are market-dependent; no fixed savings claim.

export const evVsIce = {
  slug: 'ev-vs-ice-vehicles-from-china',
  title: {
    en: 'Used EV vs ICE Vehicles from China — How to Choose',
    ar: 'المركبات الكهربائية مقابل محركات الاحتراق المستعملة من الصين — كيف تختار',
    ru: 'Подержанные электромобили и ДВС из Китая — как выбрать',
    es: 'VE usados frente a combustión desde China — cómo elegir',
  },
  description: {
    en: 'A destination-driven comparison of used EVs and ICE vehicles from China: duty and eligibility, charging infrastructure, running cost, parts and resale — with a side-by-side decision table.',
    ar: 'مقارنة مدفوعة بالوجهة بين المركبات الكهربائية ومحركات الاحتراق المستعملة من الصين: الرسوم والأهلية، وبنية الشحن، وتكلفة التشغيل، وقطع الغيار وإعادة البيع — مع جدول قرار جنبًا إلى جنب.',
    ru: 'Сравнение подержанных электромобилей и автомобилей с ДВС из Китая, зависящее от страны назначения: пошлины и пригодность, зарядная инфраструктура, стоимость эксплуатации, запчасти и перепродажа — с таблицей решений.',
    es: 'Comparación entre VE usados y vehículos de combustión desde China, según el destino: aranceles y elegibilidad, infraestructura de carga, coste de uso, repuestos y reventa — con una tabla de decisión comparativa.',
  },
  h1: {
    en: 'Used EV vs ICE Vehicles from China',
    ar: 'المركبات الكهربائية مقابل محركات الاحتراق المستعملة من الصين',
    ru: 'Подержанные электромобили и ДВС из Китая',
    es: 'VE usados frente a vehículos de combustión desde China',
  },
  summary: {
    en: 'How to choose between a used EV and a used ICE vehicle from China, based on your destination market.',
    ar: 'كيف تختار بين مركبة كهربائية مستعملة ومركبة بمحرك احتراق مستعملة من الصين، بناءً على سوق وجهتك.',
    ru: 'Как выбрать между подержанным электромобилем и автомобилем с ДВС из Китая, исходя из вашего рынка назначения.',
    es: 'Cómo elegir entre un VE usado y un vehículo de combustión usado desde China, según su mercado de destino.',
  },
  sections: [
    {
      heading: {
        en: 'The short answer',
        ar: 'الإجابة المختصرة',
        ru: 'Короткий ответ',
        es: 'La respuesta breve',
      },
      paragraphs: [
        {
          en: 'There is no single better option between a used EV and a used ICE vehicle from China. The right choice turns on four things at your destination: import duty and eligibility treatment, charging infrastructure, running cost versus fuel, and resale demand. An EV tends to win where duty relief and reliable charging exist; an ICE tends to win where charging is scarce and fuel, parts and servicing are already well established.',
          ar: 'لا يوجد خيار واحد أفضل بين مركبة كهربائية مستعملة ومركبة بمحرك احتراق مستعملة من الصين. يعتمد الاختيار الصحيح على أربعة أمور في وجهتك: معاملة الرسوم والأهلية، وبنية الشحن، وتكلفة التشغيل مقابل الوقود، والطلب على إعادة البيع. تميل المركبة الكهربائية للتفوق حيث تتوفر إعفاءات الرسوم والشحن الموثوق؛ بينما يميل محرك الاحتراق للتفوق حيث يندر الشحن ويكون الوقود وقطع الغيار والخدمة راسخة بالفعل.',
          ru: 'Единого лучшего варианта между подержанным электромобилем и автомобилем с ДВС из Китая нет. Правильный выбор зависит от четырёх вещей в вашей стране: режима пошлин и допуска, зарядной инфраструктуры, стоимости эксплуатации в сравнении с топливом и спроса на перепродажу. Электромобиль обычно выигрывает там, где есть льготы по пошлинам и надёжная зарядка; автомобиль с ДВС — там, где зарядка редка, а топливо, запчасти и сервис уже хорошо развиты.',
          es: 'No hay una única opción mejor entre un VE usado y un vehículo de combustión usado desde China. La elección correcta depende de cuatro cosas en su destino: el trato de aranceles y elegibilidad, la infraestructura de carga, el coste de uso frente al combustible y la demanda de reventa. Un VE suele ganar donde existen exenciones de aranceles y carga fiable; un vehículo de combustión suele ganar donde la carga escasea y el combustible, los repuestos y el servicio ya están consolidados.',
        },
      ],
    },
    {
      heading: {
        en: 'How the choice actually works',
        ar: 'كيف يعمل الاختيار فعليًا',
        ru: 'Как на самом деле устроен выбор',
        es: 'Cómo funciona realmente la elección',
      },
      paragraphs: [
        {
          en: 'The decision is not about the vehicle in isolation — it is about how the vehicle interacts with the market it lands in. Two vehicles can cost the same at the port in China yet land at very different total costs, and sell at very different speeds, once duties, charging availability, parts support and local demand are applied. A cheap-to-buy EV can become expensive to own where electricity is irregular and charging is scarce; a conventional ICE can be simple to run but costly to fuel where petrol is heavily taxed.',
          ar: 'القرار لا يتعلق بالمركبة بمعزل — بل بكيفية تفاعل المركبة مع السوق الذي تهبط فيه. فقد تتكلف مركبتان المبلغ نفسه في ميناء الصين، لكنهما تصلان بتكلفتين إجماليتين مختلفتين تمامًا، وتباعان بسرعتين مختلفتين تمامًا، بمجرد تطبيق الرسوم وتوفر الشحن ودعم قطع الغيار والطلب المحلي. فالمركبة الكهربائية الرخيصة شراءً قد تصبح مكلفة في التملك حيث تكون الكهرباء غير منتظمة والشحن نادرًا؛ وقد يكون محرك الاحتراق التقليدي سهل التشغيل لكنه مكلف في التزود بالوقود حيث يُفرض على البنزين ضرائب عالية.',
          ru: 'Решение касается не автомобиля самого по себе, а того, как автомобиль взаимодействует с рынком, куда он попадает. Два автомобиля могут стоить одинаково в порту Китая, но обойтись в очень разные итоговые суммы и продаваться с очень разной скоростью, как только применяются пошлины, доступность зарядки, поддержка запчастями и местный спрос. Дёшево купленный электромобиль может стать дорогим в эксплуатации там, где электричество нерегулярно, а зарядка редка; обычный ДВС может быть прост в эксплуатации, но дорог в заправке там, где бензин сильно обложен налогами.',
          es: 'La decisión no es sobre el vehículo de forma aislada, sino sobre cómo interactúa con el mercado en el que aterriza. Dos vehículos pueden costar lo mismo en el puerto de China y, sin embargo, desembarcar con costes totales muy distintos y venderse a velocidades muy diferentes una vez que se aplican aranceles, disponibilidad de carga, soporte de repuestos y demanda local. Un VE barato de comprar puede volverse caro de mantener donde la electricidad es irregular y la carga escasa; un vehículo de combustión puede ser fácil de usar pero costoso de repostar donde la gasolina está muy gravada.',
        },
        {
          en: 'This guide sets out the factors to weigh, a side-by-side comparison across eight criteria, the limitations of any generalisation, and real models from the database that illustrate each category.',
          ar: 'يعرض هذا الدليل العوامل التي يجب موازنتها، ومقارنة جنبًا إلى جنب عبر ثمانية معايير، وحدود أي تعميم، وطرازات حقيقية من قاعدة البيانات توضح كل فئة.',
          ru: 'Это руководство излагает факторы, которые нужно взвесить, сравнение по восьми критериям, ограничения любого обобщения и реальные модели из базы данных, иллюстрирующие каждую категорию.',
          es: 'Esta guía expone los factores que sopesar, una comparación lado a lado en ocho criterios, los límites de cualquier generalización y modelos reales de la base de datos que ilustran cada categoría.',
        },
      ],
    },
    {
      heading: {
        en: 'EV vs ICE — a side-by-side comparison',
        ar: 'المركبات الكهربائية مقابل محركات الاحتراق — مقارنة جنبًا إلى جنب',
        ru: 'Электромобиль и ДВС — сравнение по критериям',
        es: 'VE frente a combustión — una comparación lado a lado',
      },
      paragraphs: [
        {
          en: 'The table below compares the two types across eight criteria. It is a decision aid, not a guarantee: every cell depends on the specific vehicle, the destination and current rates, which change.',
          ar: 'يقارن الجدول أدناه النوعين عبر ثمانية معايير. وهو أداة قرار لا ضمان: فكل خانة تعتمد على المركبة المحددة والوجهة والأسعار الحالية، التي تتغير.',
          ru: 'Таблица ниже сравнивает два типа по восьми критериям. Это инструмент принятия решения, а не гарантия: каждая ячейка зависит от конкретного автомобиля, страны назначения и текущих ставок, которые меняются.',
          es: 'La tabla siguiente compara ambos tipos en ocho criterios. Es una ayuda de decisión, no una garantía: cada celda depende del vehículo concreto, del destino y de las tarifas vigentes, que cambian.',
        },
      ],
      table: {
        headers: [
          { en: 'Criterion', ar: 'المعيار', ru: 'Критерий', es: 'Criterio' },
          { en: 'EV (battery electric)', ar: 'المركبة الكهربائية (بالكامل)', ru: 'Электромобиль (BEV)', es: 'VE (eléctrico de batería)' },
          { en: 'ICE (internal combustion)', ar: 'محرك الاحتراق الداخلي', ru: 'ДВС (двигатель внутреннего сгорания)', es: 'Combustión (motor de combustión interna)' },
        ],
        rows: [
          [
            { en: 'Purchase price band', ar: 'نطاق سعر الشراء', ru: 'Диапазон цены покупки', es: 'Banda de precio de compra' },
            { en: 'Often a higher unit price than a comparable ICE at the same age, though this varies widely by model and battery size.', ar: 'غالبًا سعر وحدة أعلى من محرك احتراق مماثل في العمر نفسه، رغم أن هذا يتباين كثيرًا حسب الطراز وحجم البطارية.', ru: 'Часто более высокая цена за единицу, чем у сопоставимого ДВС того же возраста, хотя это сильно зависит от модели и ёмкости батареи.', es: 'A menudo un precio unitario más alto que un vehículo de combustión comparable de la misma edad, aunque varía mucho según el modelo y el tamaño de batería.' },
            { en: 'Generally a lower entry price for the same class and age; the widest supply sits in the mid-range segment.', ar: 'عمومًا سعر دخول أقل لنفس الفئة والعمر؛ ويتركز أوسع عرض في الشريحة المتوسطة.', ru: 'Обычно более низкая цена входа для того же класса и возраста; самый широкий выбор сосредоточен в среднем сегменте.', es: 'Generalmente un precio de entrada más bajo para la misma clase y edad; la mayor oferta se concentra en el segmento medio.' },
          ],
          [
            { en: 'Import duty & VAT treatment', ar: 'معاملة رسوم الاستيراد وضريبة القيمة المضافة', ru: 'Импортная пошлина и НДС', es: 'Trato de aranceles e IVA' },
            { en: 'Some markets apply reduced or zero duty and VAT relief to EVs (for example Kenya and Uzbekistan); the benefit is destination-specific.', ar: 'تطبق بعض الأسواق رسومًا مخفضة أو صفرية وإعفاءً من ضريبة القيمة المضافة على المركبات الكهربائية (مثل كينيا وأوزبكستان)؛ والفائدة خاصة بكل وجهة.', ru: 'Некоторые рынки применяют сниженные или нулевые пошлины и льготы по НДС для электромобилей (например, Кения и Узбекистан); выгода зависит от страны.', es: 'Algunos mercados aplican aranceles reducidos o nulos y exención de IVA a los VE (por ejemplo, Kenia y Uzbekistán); el beneficio depende del destino.' },
            { en: 'Usually the standard duty and VAT schedule for the vehicle class, with no EV-specific relief.', ar: 'عادةً جدول الرسوم وضريبة القيمة المضافة القياسي لفئة المركبة، دون إعفاء خاص بالمركبات الكهربائية.', ru: 'Обычно стандартная схема пошлин и НДС для класса автомобиля, без льгот для электромобилей.', es: 'Normalmente el calendario estándar de aranceles e IVA para la clase del vehículo, sin exención específica para VE.' },
          ],
          [
            { en: 'Running & energy cost', ar: 'تكلفة التشغيل والطاقة', ru: 'Стоимость эксплуатации и энергии', es: 'Coste de uso y energía' },
            { en: 'Lower energy cost per kilometre where grid electricity is affordable and stable; higher where charging relies on expensive or irregular power.', ar: 'تكلفة طاقة أقل لكل كيلومتر حيث تكون كهرباء الشبكة ميسورة ومستقرة؛ وأعلى حيث يعتمد الشحن على كهرباء مكلفة أو غير منتظمة.', ru: 'Более низкая стоимость энергии на километр там, где сетевое электричество доступно и стабильно; выше — где зарядка зависит от дорогого или нерегулярного электричества.', es: 'Menor coste de energía por kilómetro donde la electricidad de red es asequible y estable; mayor donde la carga depende de electricidad cara o irregular.' },
            { en: 'Fuel cost is well understood but fluctuates with local fuel prices, which are high in several African markets.', ar: 'تكلفة الوقود مفهومة جيدًا لكنها تتقلب مع أسعار الوقود المحلية، المرتفعة في عدة أسواق أفريقية.', ru: 'Стоимость топлива хорошо понятна, но колеблется вместе с местными ценами на топливо, которые высоки на ряде африканских рынков.', es: 'El coste de combustible es bien conocido, pero fluctúa con los precios locales, que son altos en varios mercados africanos.' },
          ],
          [
            { en: 'Maintenance & parts', ar: 'الصيانة وقطع الغيار', ru: 'Обслуживание и запчасти', es: 'Mantenimiento y repuestos' },
            { en: 'Fewer moving parts and no oil, coolant or exhaust maintenance, but battery and high-voltage components need specialised service.', ar: 'أجزاء متحركة أقل ولا صيانة للزيت أو سائل التبريد أو العادم، لكن البطارية والمكونات عالية الجهد تحتاج خدمة متخصصة.', ru: 'Меньше движущихся частей и нет обслуживания масла, охлаждающей жидкости или выхлопа, но батарея и высоковольтные компоненты требуют специализированного сервиса.', es: 'Menos piezas móviles y sin mantenimiento de aceite, refrigerante o escape, pero la batería y los componentes de alta tensión requieren servicio especializado.' },
            { en: 'Mature, widely understood servicing and broad parts availability; engine wear rises with age and mileage.', ar: 'خدمة ناضجة ومفهومة على نطاق واسع وتوفر واسع لقطع الغيار؛ ويزداد تآكل المحرك مع العمر والمسافة.', ru: 'Зрелое, широко понятное обслуживание и широкая доступность запчастей; износ двигателя растёт с возрастом и пробегом.', es: 'Servicio maduro y ampliamente comprendido, con amplia disponibilidad de repuestos; el desgaste del motor crece con la edad y el kilometraje.' },
          ],
          [
            { en: 'Range & refuelling vs charging', ar: 'المدى وإعادة التزود مقابل الشحن', ru: 'Запас хода и заправка или зарядка', es: 'Autonomía y repostaje frente a carga' },
            { en: 'Range is set by battery health; charging is slower than refuelling and depends on grid access.', ar: 'يتحدد المدى بصحة البطارية؛ والشحن أبطأ من التزود بالوقود ويعتمد على الوصول للشبكة.', ru: 'Запас хода определяется здоровьем батареи; зарядка медленнее заправки и зависит от доступа к сети.', es: 'La autonomía la fija la salud de la batería; la carga es más lenta que el repostaje y depende del acceso a la red.' },
            { en: 'Refuels in minutes at any fuel station; range is governed only by tank size and engine condition.', ar: 'يُعاد تزويده بالوقود في دقائق في أي محطة وقود؛ ويتحكم في المدى فقط حجم الخزان وحالة المحرك.', ru: 'Заправляется за минуты на любой АЗС; запас хода определяется только объёмом бака и состоянием двигателя.', es: 'Reposta en minutos en cualquier gasolinera; la autonomía solo la rigen el tamaño del depósito y el estado del motor.' },
          ],
          [
            { en: 'Destination infrastructure', ar: 'بنية الوجهة التحتية', ru: 'Инфраструктура страны назначения', es: 'Infraestructura de destino' },
            { en: 'Needs public or home charging; infrastructure is still thin in some African markets, which limits daily usability.', ar: 'يحتاج شحنًا عامًا أو منزليًا؛ ولا تزال البنية التحتية ضعيفة في بعض الأسواق الأفريقية، مما يحد من قابلية الاستخدام اليومي.', ru: 'Требует публичной или домашней зарядки; инфраструктура всё ещё слаба на некоторых африканских рынках, что ограничивает повседневную пригодность.', es: 'Necesita carga pública o doméstica; la infraestructura aún es escasa en algunos mercados africanos, lo que limita la usabilidad diaria.' },
            { en: 'Runs on existing fuel-station networks; no new infrastructure required.', ar: 'يعمل على شبكات محطات الوقود القائمة؛ ولا حاجة لبنية تحتية جديدة.', ru: 'Работает на существующей сети АЗС; новая инфраструктура не требуется.', es: 'Funciona con la red de gasolineras existente; no requiere infraestructura nueva.' },
          ],
          [
            { en: 'Resale & demand', ar: 'إعادة البيع والطلب', ru: 'Перепродажа и спрос', es: 'Reventa y demanda' },
            { en: 'Demand is rising where electricity and incentives exist; resale can be weaker where charging is scarce or battery health is hard to verify.', ar: 'يتزايد الطلب حيث تتوفر الكهرباء والحوافز؛ وقد تكون إعادة البيع أضعف حيث يندر الشحن أو يصعب التحقق من صحة البطارية.', ru: 'Спрос растёт там, где есть электричество и стимулы; перепродажа может быть слабее там, где зарядка редка или здоровье батареи трудно проверить.', es: 'La demanda crece donde hay electricidad e incentivos; la reventa puede ser más débil donde la carga escasea o la salud de la batería es difícil de verificar.' },
            { en: 'Steady, broad demand in most markets; resale is easier to price because the asset is well understood.', ar: 'طلب ثابت وواسع في معظم الأسواق؛ وإعادة البيع أسهل تسعيرًا لأن الأصل مفهوم جيدًا.', ru: 'Стабильный, широкий спрос на большинстве рынков; перепродажу проще оценить, потому что актив хорошо понятен.', es: 'Demanda constante y amplia en la mayoría de mercados; la reventa es más fácil de valorar porque el activo es bien comprendido.' },
          ],
          [
            { en: 'Age-restriction interaction', ar: 'التفاعل مع قيود العمر', ru: 'Взаимодействие с ограничением по возрасту', es: 'Interacción con la restricción por antigüedad' },
            { en: 'Age limits affect both types, but an older EV also carries battery degradation, so age compounds value loss more sharply.', ar: 'تؤثر قيود العمر على النوعين، لكن المركبة الكهربائية الأقدم تحمل أيضًا تدهورًا في البطارية، فيضاعف العمر خسارة القيمة بشكل أشد.', ru: 'Ограничения по возрасту касаются обоих типов, но более старый электромобиль несёт ещё и деградацию батареи, поэтому возраст сильнее ускоряет потерю стоимости.', es: 'Los límites de antigüedad afectan a ambos tipos, pero un VE más antiguo también arrastra degradación de batería, por lo que la edad agrava la pérdida de valor.' },
            { en: 'Age limits apply the same way; engine wear is the main age-related concern rather than battery health.', ar: 'تنطبق قيود العمر بالطريقة نفسها؛ ويُعد تآكل المحرك مصدر القلق الرئيسي المرتبط بالعمر بدلًا من صحة البطارية.', ru: 'Ограничения по возрасту применяются одинаково; главная возрастная проблема — износ двигателя, а не здоровье батареи.', es: 'Los límites de antigüedad se aplican igual; el desgaste del motor es la principal preocupación por edad, no la salud de la batería.' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'Buyer considerations',
        ar: 'اعتبارات المشتري',
        ru: 'Соображения покупателя',
        es: 'Consideraciones del comprador',
      },
      paragraphs: [
        {
          en: 'Duty relief is the most important single variable. Some markets give EVs preferential import treatment — for example reduced or zero duty in Kenya and Uzbekistan — while an ICE of the same class pays the standard schedule. That difference can be larger than any fuel saving, but it must be confirmed for your specific destination and vehicle, because the rules are country-specific and change.',
          ar: 'الإعفاء من الرسوم هو أهم متغير منفرد. فبعض الأسواق تمنح المركبات الكهربائية معاملة استيراد تفضيلية — مثل رسوم مخفضة أو صفرية في كينيا وأوزبكستان — بينما يدفع محرك الاحتراق من الفئة نفسها الجدول القياسي. وقد يكون هذا الفرق أكبر من أي توفير في الوقود، لكن يجب تأكيده لوجهتك ومركبتك المحددتين، لأن القواعد خاصة بكل بلد وتتغير.',
          ru: 'Льготы по пошлинам — самый важный отдельный фактор. Некоторые рынки дают электромобилям льготный режим импорта — например, сниженные или нулевые пошлины в Кении и Узбекистане, — тогда как ДВС того же класса платит по стандартной схеме. Эта разница может быть больше любой экономии на топливе, но её нужно подтверждать для конкретной страны и автомобиля, потому что правила специфичны и меняются.',
          es: 'La exención de aranceles es la variable individual más importante. Algunos mercados dan a los VE un trato de importación preferente — por ejemplo, aranceles reducidos o nulos en Kenia y Uzbekistán — mientras que un vehículo de combustión de la misma clase paga el calendario estándar. Esa diferencia puede ser mayor que cualquier ahorro de combustible, pero debe confirmarse para su destino y vehículo concretos, porque las normas son específicas de cada país y cambian.',
        },
        {
          en: 'Charging infrastructure is the second decisive factor. Several African markets still have thin public-charging coverage, which limits where and how an EV can be used daily; an ICE needs nothing beyond the existing fuel-station network. A buyer who cannot charge at home or at a reliable public point should weigh an EV\'s energy advantage against that constraint honestly.',
          ar: 'بنية الشحن التحتية هي العامل الحاسم الثاني. فما تزال عدة أسواق أفريقية ذات تغطية شحن عام ضعيفة، مما يحد من أين وكيف يمكن استخدام المركبة الكهربائية يوميًا؛ بينما لا يحتاج محرك الاحتراق شيئًا يتجاوز شبكة محطات الوقود القائمة. والمشتري الذي لا يستطيع الشحن في المنزل أو في نقطة عامة موثوقة يجب أن يوازن ميزة طاقة المركبة الكهربائية مقابل هذا القيد بصدق.',
          ru: 'Зарядная инфраструктура — второй решающий фактор. На ряде африканских рынков публичная зарядка всё ещё слаба, что ограничивает, где и как электромобиль можно использовать ежедневно; ДВС не нуждается ни в чём, кроме существующей сети АЗС. Покупатель, который не может заряжаться дома или у надёжной публичной точки, должен честно взвесить энергетическое преимущество электромобиля против этого ограничения.',
          es: 'La infraestructura de carga es el segundo factor decisivo. Varios mercados africanos aún tienen una cobertura de carga pública escasa, lo que limita dónde y cómo se puede usar un VE a diario; un vehículo de combustión no necesita nada más que la red de gasolineras existente. Un comprador que no puede cargar en casa ni en un punto público fiable debe sopesar con honestidad la ventaja energética del VE frente a esa limitación.',
        },
        {
          en: 'Battery degradation versus engine wear is the durability trade-off. An EV battery loses capacity gradually with age, use and charging habits, and a worn battery is expensive to replace; an ICE engine wears with age and mileage but is generally repairable at lower unit cost. Neither is free of age-related risk — the question is which risk is cheaper to manage in your market.',
          ar: 'تدهور البطارية مقابل تآكل المحرك هو مفاضلة المتانة. فبطارية المركبة الكهربائية تفقد سعتها تدريجيًا مع العمر والاستخدام وعادات الشحن، والبطارية المتآكلة مكلفة الاستبدال؛ بينما يتآكل محرك الاحتراق مع العمر والمسافة لكنه قابل للإصلاح عمومًا بتكلفة وحدة أقل. ولا يخلو أي منهما من مخاطر مرتبطة بالعمر — السؤال هو أي المخاطر أرخص إدارةً في سوقك.',
          ru: 'Деградация батареи против износа двигателя — это компромисс по долговечности. Батарея электромобиля постепенно теряет ёмкость с возрастом, использованием и привычками зарядки, а изношенная батарея дорога в замене; двигатель ДВС изнашивается с возрастом и пробегом, но обычно ремонтируется при меньшей стоимости единицы. Ни один из них не свободен от возрастного риска — вопрос в том, какой риск дешевле управлять на вашем рынке.',
          es: 'La degradación de la batería frente al desgaste del motor es la disyuntiva de durabilidad. La batería de un VE pierde capacidad gradualmente con la edad, el uso y los hábitos de carga, y una batería desgastada es cara de sustituir; un motor de combustión se desgasta con la edad y el kilometraje, pero suele ser reparable a menor coste unitario. Ninguno está libre de riesgo por edad: la cuestión es qué riesgo es más barato de gestionar en su mercado.',
        },
        {
          en: 'Parts availability is the operational variable. ICE models from established Chinese brands are widely supported and easy to service in most markets; EV high-voltage components — battery, inverter, charging module — need specialised parts and technicians that are not yet present everywhere. For an import-and-resell buyer, this affects not only running cost but how confidently the vehicle can be sold on.',
          ar: 'توفر قطع الغيار هو المتغير التشغيلي. فطرازات محركات الاحتراق من العلامات الصينية الراسخة مدعومة على نطاق واسع وسهلة الخدمة في معظم الأسواق؛ بينما تحتاج مكونات المركبات الكهربائية عالية الجهد — البطارية والعاكس ووحدة الشحن — قطع غيار وفنيين متخصصين غير متوفرين بعد في كل مكان. وبالنسبة للمشتري المستورد ثم البائع، يؤثر هذا ليس فقط على تكلفة التشغيل بل على مدى الثقة في إعادة بيع المركبة.',
          ru: 'Доступность запчастей — это операционная переменная. Модели с ДВС от устоявшихся китайских брендов широко поддержаны и легко обслуживаются на большинстве рынков; высоковольтные компоненты электромобиля — батарея, инвертор, модуль зарядки — требуют специализированных запчастей и техников, которые есть ещё не везде. Для покупателя, который импортирует и перепродаёт, это влияет не только на стоимость эксплуатации, но и на уверенность в дальнейшей продаже.',
          es: 'La disponibilidad de repuestos es la variable operativa. Los modelos de combustión de marcas chinas consolidadas tienen amplio soporte y son fáciles de mantener en la mayoría de mercados; los componentes de alta tensión del VE — batería, inversor, módulo de carga — requieren repuestos y técnicos especializados que aún no existen en todas partes. Para un comprador que importa y revende, esto afecta no solo al coste de uso, sino a la confianza con la que podrá vender el vehículo.',
        },
      ],
    },
    {
      heading: {
        en: 'Limitations',
        ar: 'حدود المقارنة',
        ru: 'Ограничения',
        es: 'Limitaciones',
      },
      paragraphs: [
        {
          en: 'Every figure in this comparison is market-dependent and changes. Duty rates, VAT treatment, electricity and fuel prices, incentives and charging coverage all shift over time and differ by country — sometimes by province or port. This guide makes no fixed claim about which type is cheaper to buy or run, and no promise of a specific saving.',
          ar: 'كل رقم في هذه المقارنة يعتمد على السوق ويتغير. فمعدلات الرسوم ومعاملة ضريبة القيمة المضافة وأسعار الكهرباء والوقود والحوافز وتغطية الشحن تتغير كلها مع الوقت وتختلف باختلاف البلد — أحيانًا باختلاف المقاطعة أو الميناء. ولا يقدم هذا الدليل أي ادعاء ثابت حول أيهما أرخص شراءً أو تشغيلًا، ولا وعدًا بتوفير محدد.',
          ru: 'Каждая цифра в этом сравнении зависит от рынка и меняется. Ставки пошлин, режим НДС, цены на электричество и топливо, стимулы и покрытие зарядкой — всё это меняется со временем и различается по странам, иногда по провинции или порту. Это руководство не делает фиксированных заявлений о том, какой тип дешевле купить или эксплуатировать, и не обещает конкретной экономии.',
          es: 'Cada cifra de esta comparación depende del mercado y cambia. Los tipos de arancel, el trato del IVA, los precios de electricidad y combustible, los incentivos y la cobertura de carga cambian con el tiempo y difieren por país — a veces por provincia o puerto. Esta guía no hace ninguna afirmación fija sobre qué tipo es más barato de comprar o usar, ni promete un ahorro concreto.',
        },
        {
          en: 'Always verify duty treatment per country before committing. The Market sub-site carries each country\'s rules with a source and last-checked date, and the final figure should be confirmed against a current quote at the time of purchase.',
          ar: 'تحقق دائمًا من معاملة الرسوم لكل بلد قبل الالتزام. يحمل الموقع الفرعي للأسواق قواعد كل بلد مع المصدر وتاريخ آخر فحص، ويجب تأكيد الرقم النهائي مقابل عرض سعر حالي وقت الشراء.',
          ru: 'Всегда проверяйте режим пошлин по каждой стране до обязательств. Подсайт Market содержит правила каждой страны с источником и датой последней проверки, а итоговую цифру следует подтверждать текущим расчётом на момент покупки.',
          es: 'Verifique siempre el trato arancelario por país antes de comprometerse. El subsitio Market recoge las normas de cada país con fuente y fecha de última comprobación, y la cifra final debe confirmarse con una cotización vigente en el momento de la compra.',
        },
      ],
    },
    {
      heading: {
        en: 'Real examples from the database',
        ar: 'أمثلة حقيقية من قاعدة البيانات',
        ru: 'Реальные примеры из базы данных',
        es: 'Ejemplos reales de la base de datos',
      },
      paragraphs: [
        {
          en: 'These models, present in the database, illustrate each category. They are cited to show the range of options, not to recommend one type over another.',
          ar: 'توضح هذه الطرازات، الموجودة في قاعدة البيانات، كل فئة. وتُستشهد لإظهار نطاق الخيارات، لا للتوصية بنوع على آخر.',
          ru: 'Эти модели, присутствующие в базе данных, иллюстрируют каждую категорию. Они приведены, чтобы показать спектр вариантов, а не рекомендовать один тип вместо другого.',
          es: 'Estos modelos, presentes en la base de datos, ilustran cada categoría. Se citan para mostrar el abanico de opciones, no para recomendar un tipo sobre otro.',
        },
      ],
      checklist: [
        { en: 'BYD Song Plus — a PHEV that works as a middle ground: electric for daily trips, a combustion engine for longer runs without charging dependence.', ar: 'BYD Song Plus — هجينة قابلة للشحن تعمل كحل وسط: كهربائية للرحلات اليومية، ومحرك احتراق للرحلات الأطول دون الاعتماد على الشحن.', ru: 'BYD Song Plus — подключаемый гибрид как золотая середина: электротяга для ежедневных поездок и ДВС для дальних без зависимости от зарядки.', es: 'BYD Song Plus — un PHEV que funciona como punto intermedio: eléctrico para el día a día y un motor de combustión para trayectos largos sin depender de la carga.' },
        { en: 'BYD Atto 3 and BYD Seal — full battery-electric EVs, where duty relief and charging availability decide the case.', ar: 'BYD Atto 3 وBYD Seal — مركبتان كهربائيتان بالكامل، حيث تقرر إعفاءات الرسوم وتوفر الشحن جدوى الاختيار.', ru: 'BYD Atto 3 и BYD Seal — полностью электрические модели, где выбор решают льготы по пошлинам и доступность зарядки.', es: 'BYD Atto 3 y BYD Seal — VE de batería pura, donde la exención de aranceles y la disponibilidad de carga deciden la elección.' },
        { en: 'Geely Monjaro — a conventional ICE SUV representing the standard-duty, established-parts route.', ar: 'Geely Monjaro — سيارة دفع رباعي تقليدية بمحرك احتراق تمثل مسار الرسوم القياسية وقطع الغيار الراسخة.', ru: 'Geely Monjaro — обычный кроссовер с ДВС, представляющий маршрут со стандартными пошлинами и устоявшимися запчастями.', es: 'Geely Monjaro — un SUV de combustión convencional que representa la vía de aranceles estándar y repuestos consolidados.' },
        { en: 'Haval H6 — a high-volume ICE SUV with broad parts availability in many export markets.', ar: 'Haval H6 — سيارة دفع رباعي بمحرك احتراق عالية الحجم مع توفر واسع لقطع الغيار في أسواق تصدير عديدة.', ru: 'Haval H6 — массовый кроссовер с ДВС с широкой доступностью запчастей на многих экспортных рынках.', es: 'Haval H6 — un SUV de combustión de gran volumen con amplia disponibilidad de repuestos en muchos mercados de exportación.' },
        { en: 'Chery Tiggo 8 — a mid-size ICE SUV, a common entry point in the mid-range price band.', ar: 'Chery Tiggo 8 — سيارة دفع رباعي متوسطة الحجم بمحرك احتراق، نقطة دخول شائعة في الشريحة السعرية المتوسطة.', ru: 'Chery Tiggo 8 — среднеразмерный кроссовер с ДВС, распространённая точка входа в среднем ценовом сегменте.', es: 'Chery Tiggo 8 — un SUV de combustión de tamaño medio, un punto de entrada común en la banda de precio medio.' },
      ],
    },
    {
      heading: {
        en: 'Related markets',
        ar: 'أسواق ذات صلة',
        ru: 'Связанные рынки',
        es: 'Mercados relacionados',
      },
      paragraphs: [
        {
          en: 'The EV-versus-ICE balance is decided at the destination. Check the country pages below for the current duty, eligibility and EV treatment in each market.',
          ar: 'تُحسم موازنة المركبات الكهربائية مقابل محركات الاحتراق في الوجهة. راجع صفحات البلدان أدناه لمعرفة الرسوم والأهلية ومعاملة المركبات الكهربائية الحالية في كل سوق.',
          ru: 'Баланс «электромобиль против ДВС» решается в стране назначения. Смотрите страницы стран ниже для актуальных пошлин, пригодности и режима для электромобилей на каждом рынке.',
          es: 'El equilibrio entre VE y combustión se decide en el destino. Consulte las páginas de país siguientes para ver los aranceles, la elegibilidad y el trato actual a los VE en cada mercado.',
        },
      ],
      links: [
        { href: 'https://market.chinausedautohub.com/countries/kenya/', label: { en: 'Kenya — market rules', ar: 'كينيا — قواعد السوق', ru: 'Кения — правила рынка', es: 'Kenia — normas del mercado' } },
        { href: 'https://market.chinausedautohub.com/countries/uzbekistan/', label: { en: 'Uzbekistan — market rules', ar: 'أوزبكستان — قواعد السوق', ru: 'Узбекистан — правила рынка', es: 'Uzbekistán — normas del mercado' } },
        { href: 'https://market.chinausedautohub.com/countries/uae/', label: { en: 'UAE — market rules', ar: 'الإمارات — قواعد السوق', ru: 'ОАЭ — правила рынка', es: 'EAU — normas del mercado' } },
        { href: 'https://market.chinausedautohub.com/countries/nigeria/', label: { en: 'Nigeria — market rules', ar: 'نيجيريا — قواعد السوق', ru: 'Нигерия — правила рынка', es: 'Nigeria — normas del mercado' } },
      ],
    },
    {
      heading: {
        en: 'Related guides, tools and model data',
        ar: 'أدلة وأدوات وبيانات طرازات ذات صلة',
        ru: 'Связанные руководства, инструменты и данные моделей',
        es: 'Guías, herramientas y datos de modelos relacionados',
      },
      paragraphs: [
        {
          en: 'For EV battery and charging specifics, see the Chinese EVs guide; for how duties and freight build the total cost, see the Landed Cost guide. The tools below structure the estimate, and the Data sub-site carries the specifications for the models above.',
          ar: 'لتفاصيل بطارية وشحن المركبات الكهربائية، راجع دليل السيارات الكهربائية الصينية؛ ولمعرفة كيف تشكل الرسوم والشحن التكلفة الإجمالية، راجع دليل التكلفة النهائية. وتهيكل الأدوات أدناه التقدير، ويحمل الموقع الفرعي للبيانات مواصفات الطرازات أعلاه.',
          ru: 'По батарее и зарядке электромобилей см. руководство по китайским электромобилям; по тому, как пошлины и фрахт формируют итоговую стоимость, — руководство по итоговой стоимости. Инструменты ниже структурируют оценку, а подсайт Data содержит спецификации моделей выше.',
          es: 'Para batería y carga de VE, consulte la guía de VE chinos; para cómo los aranceles y el flete forman el coste total, la guía de coste de desembarco. Las herramientas siguientes estructuran la estimación, y el subsitio Data contiene las especificaciones de los modelos anteriores.',
        },
      ],
      links: [
        { slug: 'buying-chinese-evs-for-export', label: { en: 'Battery and charging specifics — Chinese EVs guide', ar: 'تفاصيل البطارية والشحن — دليل السيارات الكهربائية الصينية', ru: 'Детали батареи и зарядки — руководство по китайским электромобилям', es: 'Detalles de batería y carga — guía de VE chinos' } },
        { slug: 'landed-cost', label: { en: 'How duties and freight build total cost — Landed Cost guide', ar: 'كيف تشكل الرسوم والشحن التكلفة الإجمالية — دليل التكلفة النهائية', ru: 'Как пошлины и фрахт формируют итоговую стоимость — руководство по итоговой стоимости', es: 'Cómo los aranceles y el flete forman el coste total — guía de coste de desembarco' } },
        { href: 'https://tool.chinausedautohub.com/ev-import-cost-calculator/', label: { en: 'EV Import Cost Calculator', ar: 'حاسبة تكلفة استيراد المركبات الكهربائية', ru: 'Калькулятор стоимости импорта электромобиля', es: 'Calculadora de coste de importación de VE' } },
        { href: 'https://tool.chinausedautohub.com/landed-cost-calculator/', label: { en: 'Landed Cost Calculator', ar: 'حاسبة التكلفة النهائية', ru: 'Калькулятор итоговой стоимости', es: 'Calculadora de coste de desembarco' } },
        { href: 'https://tool.chinausedautohub.com/tco-calculator/', label: { en: 'Total Cost of Ownership Calculator', ar: 'حاسبة التكلفة الإجمالية للملكية', ru: 'Калькулятор совокупной стоимости владения', es: 'Calculadora de coste total de propiedad' } },
        { href: 'https://data.chinausedautohub.com/models/byd-song-plus/', label: { en: 'BYD Song Plus — model data', ar: 'BYD Song Plus — بيانات الطراز', ru: 'BYD Song Plus — данные модели', es: 'BYD Song Plus — datos del modelo' } },
        { href: 'https://data.chinausedautohub.com/models/geely-monjaro/', label: { en: 'Geely Monjaro — model data', ar: 'Geely Monjaro — بيانات الطراز', ru: 'Geely Monjaro — данные модели', es: 'Geely Monjaro — datos del modelo' } },
      ],
    },
    {
      heading: {
        en: 'Frequently asked questions',
        ar: 'أسئلة شائعة',
        ru: 'Частые вопросы',
        es: 'Preguntas frecuentes',
      },
      paragraphs: [
        {
          en: 'Is a PHEV a good middle ground between EV and ICE?',
          ar: 'هل الهجينة القابلة للشحن حل وسط جيد بين المركبات الكهربائية ومحركات الاحتراق؟',
          ru: 'Является ли PHEV хорошим компромиссом между электромобилем и ДВС?',
          es: '¿Es un PHEV un buen punto intermedio entre VE y combustión?',
        },
        {
          en: 'Often, yes — the BYD Song Plus is a common example. A PHEV runs electric for daily trips and falls back on the engine for longer journeys, so it reduces fuel dependence without requiring a full charging network. It still pays duty as a hybrid rather than a pure EV in most markets, so the relief may be smaller.',
          ar: 'غالبًا نعم — وتعد BYD Song Plus مثالًا شائعًا. تعمل الهجينة القابلة للشحن بالكهرباء للرحلات اليومية وتعود للمحرك في الرحلات الأطول، فتقلل الاعتماد على الوقود دون الحاجة لشبكة شحن كاملة. وهي ما تزال تدفع رسومًا كهجينة لا كمركبة كهربائية خالصة في معظم الأسواق، لذا قد يكون الإعفاء أصغر.',
          ru: 'Часто да — BYD Song Plus является распространённым примером. PHEV едет на электротяге в ежедневных поездках и переключается на двигатель в дальних, снижая зависимость от топлива без полной зарядной сети. Однако в большинстве рынков он облагается пошлиной как гибрид, а не чистый электромобиль, поэтому льгота может быть меньше.',
          es: 'A menudo sí — el BYD Song Plus es un ejemplo común. Un PHEV funciona en eléctrico para el día a día y recurre al motor en trayectos largos, reduciendo la dependencia del combustible sin requerir una red de carga completa. Aun así, paga aranceles como híbrido y no como VE puro en la mayoría de mercados, por lo que la exención puede ser menor.',
        },
        {
          en: 'Should I choose an EV only because duty relief is available?',
          ar: 'هل أختار المركبة الكهربائية لمجرد توفر إعفاء من الرسوم؟',
          ru: 'Стоит ли выбирать электромобиль только из-за льготы по пошлинам?',
          es: '¿Debo elegir un VE solo porque hay exención de aranceles?',
        },
        {
          en: 'No. Duty relief is one input among several. Charging infrastructure, battery health and resale demand matter just as much, and a duty saving can be outweighed by an EV that is hard to charge or to resell in your market. Treat the relief as part of the total-cost calculation, not the whole answer.',
          ar: 'لا. الإعفاء من الرسوم مدخل واحد من عدة مدخلات. فبنية الشحن وصحة البطارية والطلب على إعادة البيع لا تقل أهمية، وقد يتفوق توفير الرسوم على مركبة كهربائية يصعب شحنها أو إعادة بيعها في سوقك. عامل الإعفاء كجزء من حساب التكلفة الإجمالية، لا كالجواب الكامل.',
          ru: 'Нет. Льгота по пошлинам — лишь один из факторов. Зарядная инфраструктура, здоровье батареи и спрос на перепродажу важны не меньше, а экономию на пошлинах может перевесить электромобиль, который трудно заряжать или перепродать на вашем рынке. Рассматривайте льготу как часть расчёта общей стоимости, а не как полный ответ.',
          es: 'No. La exención de aranceles es un dato entre varios. La infraestructura de carga, la salud de la batería y la demanda de reventa importan igual, y un ahorro arancelario puede verse superado por un VE difícil de cargar o de revender en su mercado. Trate la exención como parte del cálculo del coste total, no como toda la respuesta.',
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
          en: 'Last reviewed: 2026-10-04. This guide is general guidance, not a guarantee. Duty rates, VAT treatment, electricity and fuel prices, and resale demand change over time and differ by country; confirm the current duty treatment, charging availability and market demand for your specific destination before committing.',
          ar: 'آخر مراجعة: 2026-10-04. هذا الدليل إرشاد عام لا ضمان. تتغير معدلات الرسوم ومعاملة ضريبة القيمة المضافة وأسعار الكهرباء والوقود والطلب على إعادة البيع مع الوقت وتختلف باختلاف البلد؛ أكد معاملة الرسوم الحالية وتوفر الشحن وطلب السوق لوجهتك المحددة قبل الالتزام.',
          ru: 'Последняя проверка: 2026-10-04. Это руководство является общим ориентиром, а не гарантией. Ставки пошлин, режим НДС, цены на электричество и топливо и спрос на перепродажу меняются со временем и различаются по странам; подтвердите актуальный режим пошлин, доступность зарядки и рыночный спрос для вашей страны назначения до обязательств.',
          es: 'Última revisión: 2026-10-04. Esta guía es orientación general, no una garantía. Los tipos de arancel, el trato del IVA, los precios de electricidad y combustible y la demanda de reventa cambian con el tiempo y difieren por país; confirme el trato arancelario vigente, la disponibilidad de carga y la demanda del mercado para su destino concreto antes de comprometerse.',
        },
      ],
    },
  ],
};
