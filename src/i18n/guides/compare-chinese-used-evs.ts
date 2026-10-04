import type { L10n } from '../l10n';

// Guide 9 — How to Compare Chinese Used EVs.
// P3.7: comparison must rest on the criteria that actually move value for an export
// buyer (battery, range, charging, size/segment, platform, brand export support,
// destination eligibility), not marketing claims. Includes a criteria table
// (Criterion | What to check | Why it matters) and a real-model comparison.

export const compareChineseUsedEvs = {
  slug: 'compare-chinese-used-evs',
  title: {
    en: 'How to Compare Chinese Used EVs — Criteria That Matter',
    ar: 'كيف تقارن السيارات الكهربائية الصينية المستعملة — المعايير المهمة',
    ru: 'Как сравнивать подержанные китайские электромобили — важные критерии',
    es: 'Cómo comparar VE chinos usados — los criterios que importan',
  },
  description: {
    en: 'A framework for comparing Chinese used EVs on the criteria that move export value — battery, range, charging, segment, platform, export support and destination eligibility — with a criteria table and real model examples.',
    ar: 'إطار لمقارنة السيارات الكهربائية الصينية المستعملة وفق المعايير التي تحرك قيمة التصدير — البطارية والمدى والشحن والفئة والمنصة ودعم التصدير وأهلية الوجهة — مع جدول معايير وأمثلة لطرازات حقيقية.',
    ru: 'Структура сравнения подержанных китайских электромобилей по критериям, которые определяют экспортную ценность: батарея, запас хода, зарядка, класс, платформа, экспортная поддержка и допуск в стране назначения — с таблицей критериев и реальными примерами моделей.',
    es: 'Un marco para comparar VE chinos usados según los criterios que mueven el valor de exportación — batería, autonomía, carga, segmento, plataforma, soporte de exportación y elegibilidad de destino — con una tabla de criterios y ejemplos de modelos reales.',
  },
  h1: {
    en: 'How to Compare Chinese Used EVs',
    ar: 'كيف تقارن السيارات الكهربائية الصينية المستعملة',
    ru: 'Как сравнивать подержанные китайские электромобили',
    es: 'Cómo comparar VE chinos usados',
  },
  summary: {
    en: 'Compare Chinese used EVs on the criteria that move export value, not marketing claims — with a criteria table and real model examples.',
    ar: 'قارن السيارات الكهربائية الصينية المستعملة وفق المعايير التي تحرك قيمة التصدير، لا الادعاءات التسويقية — مع جدول معايير وأمثلة لطرازات حقيقية.',
    ru: 'Сравнивайте подержанные китайские электромобили по критериям, определяющим экспортную ценность, а не по маркетинговым заявлениям — с таблицей критериев и реальными примерами моделей.',
    es: 'Compare VE chinos usados según los criterios que mueven el valor de exportación, no según afirmaciones de marketing — con una tabla de criterios y ejemplos de modelos reales.',
  },
  sections: [
    {
      heading: {
        en: 'Direct answer',
        ar: 'الإجابة المباشرة',
        ru: 'Прямой ответ',
        es: 'Respuesta directa',
      },
      paragraphs: [
        {
          en: 'Compare Chinese used EVs on the criteria that actually change what an export buyer pays and receives: battery capacity and chemistry, real-world range, charging speed and standards, body and segment, drive type, platform generation, brand export support, and whether the car is eligible for your destination.',
          ar: 'قارن السيارات الكهربائية الصينية المستعملة وفق المعايير التي تغيّر فعلياً ما يدفعه المشتري المصدر وما يستلمه: سعة البطارية وكيمياؤها، والمدى الفعلي، وسرعة الشحن ومعاييره، والهيكل والفئة، ونوع الدفع، وجيل المنصة، ودعم تصدير العلامة، وما إذا كانت السيارة مؤهلة لوجهتك.',
          ru: 'Сравнивайте подержанные китайские электромобили по критериям, которые реально меняют то, что платит и получает экспортный покупатель: ёмкость и химия батареи, реальный запас хода, скорость и стандарты зарядки, кузов и класс, тип привода, поколение платформы, экспортная поддержка бренда и допуск автомобиля в вашей стране.',
          es: 'Compare los VE chinos usados según los criterios que realmente cambian lo que paga y recibe un comprador exportador: capacidad y química de la batería, autonomía real, velocidad y estándares de carga, carrocería y segmento, tipo de tracción, generación de plataforma, soporte de exportación de la marca y si el coche es elegible en su destino.',
        },
        {
          en: 'Marketing claims about range or features are a starting point, not a basis for comparison. Anchor every comparison in the specification and in the vehicle\'s actual condition, which you confirm per unit.',
          ar: 'الادعاءات التسويقية حول المدى أو المزايا هي نقطة بداية، لا أساس للمقارنة. اجعل كل مقارنة راسخة في المواصفات وفي الحالة الفعلية للمركبة، والتي تؤكدها لكل وحدة على حدة.',
          ru: 'Маркетинговые заявления о запасе хода или функциях — это отправная точка, а не основа сравнения. Опирайте каждое сравнение на характеристики и на фактическое состояние автомобиля, которое подтверждается по каждой единице.',
          es: 'Las afirmaciones de marketing sobre autonomía o características son un punto de partida, no una base de comparación. Ancle cada comparación en la especificación y en el estado real del vehículo, que confirma por unidad.',
        },
      ],
    },
    {
      heading: {
        en: 'The comparison framework: eight criteria',
        ar: 'إطار المقارنة: ثمانية معايير',
        ru: 'Структура сравнения: восемь критериев',
        es: 'El marco de comparación: ocho criterios',
      },
      paragraphs: [
        {
          en: 'A disciplined comparison walks through the same eight criteria for every candidate. This prevents the common mistake of comparing two cars on one headline number — usually advertised range — while ignoring the factors that determine real cost, usability and resale.',
          ar: 'المقارنة المنضبطة تمر على المعايير الثمانية نفسها لكل مرشح. وهذا يمنع الخطأ الشائع بمقارنة سيارتين على رقم واحد بارز — عادة المدى المعلن — مع تجاهل العوامل التي تحدد التكلفة الفعلية وسهولة الاستخدام وإعادة البيع.',
          ru: 'Дисциплинированное сравнение проходит по одним и тем же восьми критериям для каждого кандидата. Это предотвращает типичную ошибку — сравнение двух автомобилей по одному яркому числу (обычно рекламируемому запасу хода) при игнорировании факторов, определяющих реальную стоимость, удобство и перепродажу.',
          es: 'Una comparación disciplinada recorre los mismos ocho criterios para cada candidato. Esto evita el error habitual de comparar dos coches por una sola cifra llamativa — normalmente la autonomía anunciada — ignorando los factores que determinan el coste real, la usabilidad y la reventa.',
        },
      ],
      table: {
        headers: [
          { en: 'Criterion', ar: 'المعيار', ru: 'Критерий', es: 'Criterio' },
          { en: 'What to check', ar: 'ما يجب التحقق منه', ru: 'Что проверять', es: 'Qué comprobar' },
          { en: 'Why it matters', ar: 'لماذا يهم', ru: 'Почему это важно', es: 'Por qué importa' },
        ],
        rows: [
          [
            { en: 'Battery capacity & chemistry', ar: 'سعة البطارية وكيمياؤها', ru: 'Ёмкость и химия батареи', es: 'Capacidad y química de la batería' },
            { en: 'Confirm gross vs usable capacity and the chemistry (LFP or NMC).', ar: 'أكد السعة الإجمالية مقابل القابلة للاستخدام والكيمياء (LFP أو NMC).', ru: 'Подтвердите полную и полезную ёмкость, а также химию (LFP или NMC).', es: 'Confirme la capacidad bruta frente a la útil y la química (LFP o NMC).' },
            { en: 'The battery is the largest driver of an EV\'s value; chemistry affects weight, degradation and charging behaviour.', ar: 'البطارية هي أكبر محرك لقيمة المركبة الكهربائية؛ والكيمياء تؤثر على الوزن والتدهور وسلوك الشحن.', ru: 'Батарея — главный фактор стоимости электромобиля; химия влияет на вес, деградацию и поведение при зарядке.', es: 'La batería es el mayor motor del valor de un VE; la química afecta al peso, la degradación y el comportamiento de carga.' },
          ],
          [
            { en: 'Range & test cycle', ar: 'المدى ودورة الاختبار', ru: 'Запас хода и цикл испытаний', es: 'Autonomía y ciclo de prueba' },
            { en: 'Note whether range is quoted as CLTC, NEDC or WLTP, and request a realistic usable figure.', ar: 'لاحظ ما إذا كان المدى مقتبساً بـ CLTC أو NEDC أو WLTP، واطلب رقماً واقعياً قابلاً للاستخدام.', ru: 'Отметьте, указан ли запас хода по CLTC, NEDC или WLTP, и запросите реалистичную полезную цифру.', es: 'Anote si la autonomía se indica en CLTC, NEDC o WLTP y pida una cifra útil realista.' },
            { en: 'Different cycles flatter range to different degrees; comparing mixed-cycle figures misrepresents one car against another.', ar: 'الدورات المختلفة تضخم المدى بدرجات متفاوتة؛ فمقارنة أرقام دورات مختلطة تسيء تمثيل سيارة مقابل أخرى.', ru: 'Разные циклы завышают запас хода в разной степени; сравнение цифр разных циклов искажает картину одной машины против другой.', es: 'Los distintos ciclos inflan la autonomía en distinta medida; comparar cifras de ciclos mixtos falsea un coche frente a otro.' },
          ],
          [
            { en: 'Charging architecture & speed', ar: 'بنية الشحن وسرعته', ru: 'Архитектура и скорость зарядки', es: 'Arquitectura y velocidad de carga' },
            { en: 'Check the peak DC charge rate and whether the car uses a higher-voltage platform.', ar: 'تحقق من معدل الشحن بالتيار المستمر الأقصى وما إذا كانت السيارة تستخدم منصة جهد أعلى.', ru: 'Проверьте пиковую мощность зарядки постоянным током и использует ли автомобиль платформу повышенного напряжения.', es: 'Compruebe la potencia máxima de carga en CC y si el coche usa una plataforma de mayor voltaje.' },
            { en: 'Charging speed determines downtime and daily usability; a slower-architected car can be far less practical for high-mileage use.', ar: 'سرعة الشحن تحدد وقت التوقف وسهولة الاستخدام اليومي؛ فالسيارة ذات البنية الأبطأ قد تكون أقل عملية بكثير للاستخدام عالي المسافات.', ru: 'Скорость зарядки определяет простои и повседневное удобство; автомобиль с более медленной архитектурой может быть заметно менее практичным при больших пробегах.', es: 'La velocidad de carga determina el tiempo muerto y la usabilidad diaria; un coche de arquitectura más lenta puede ser mucho menos práctico para uso de alto kilometraje.' },
          ],
          [
            { en: 'Body & segment', ar: 'الهيكل والفئة', ru: 'Кузов и класс', es: 'Carrocería y segmento' },
            { en: 'Confirm the body type and size segment (compact, mid-size, large).', ar: 'أكد نوع الهيكل وفئة الحجم (مدمجة، متوسطة، كبيرة).', ru: 'Подтвердите тип кузова и класс размера (компактный, средний, большой).', es: 'Confirme el tipo de carrocería y el segmento de tamaño (compacto, medio, grande).' },
            { en: 'Segment sets price expectations and the level of buyer demand in each destination market.', ar: 'الفئة تحدد توقعات السعر ومستوى طلب المشترين في كل سوق وجهة.', ru: 'Класс задаёт ценовые ожидания и уровень спроса покупателей в каждом рынке назначения.', es: 'El segmento fija las expectativas de precio y el nivel de demanda de compradores en cada mercado de destino.' },
          ],
          [
            { en: 'Drive type', ar: 'نوع الدفع', ru: 'Тип привода', es: 'Tipo de tracción' },
            { en: 'Check front-, rear- or all-wheel drive, and whether a right-hand-drive version exists.', ar: 'تحقق من الدفع الأمامي أو الخلفي أو الرباعي، وما إذا كانت توجد نسخة بقيادة على اليمين.', ru: 'Проверьте передний, задний или полный привод и наличие версии с правым рулём.', es: 'Compruebe la tracción delantera, trasera o total, y si existe una versión con volante a la derecha.' },
            { en: 'Drive layout and drive-side availability determine whether the car can be registered and driven in your market.', ar: 'توزيع الدفع وتوفر جانب القيادة يحددان ما إذا كان يمكن تسجيل السيارة وقيادتها في سوقك.', ru: 'Схема привода и доступность стороны руля определяют, можно ли зарегистрировать и водить автомобиль на вашем рынке.', es: 'El esquema de tracción y la disponibilidad del lado de conducción determinan si el coche puede registrarse y conducirse en su mercado.' },
          ],
          [
            { en: 'Platform generation', ar: 'جيل المنصة', ru: 'Поколение платформы', es: 'Generación de plataforma' },
            { en: 'Identify the platform generation and whether it is still in production and supported.', ar: 'حدد جيل المنصة وما إذا كانت ما تزال قيد الإنتاج ومدعومة.', ru: 'Определите поколение платформы и продолжает ли она производиться и поддерживаться.', es: 'Identifique la generación de la plataforma y si sigue en producción y con soporte.' },
            { en: 'A current, supported platform means parts, software updates and aftermarket support remain available.', ar: 'المنصة الحالية المدعومة تعني توفر قطع الغيار وتحديثات البرمجيات ودعم ما بعد البيع.', ru: 'Актуальная поддерживаемая платформа означает доступность запчастей, обновлений ПО и послепродажной поддержки.', es: 'Una plataforma actual y con soporte significa que siguen disponibles piezas, actualizaciones de software y soporte posventa.' },
          ],
          [
            { en: 'Export & parts support', ar: 'دعم التصدير وقطع الغيار', ru: 'Экспортная поддержка и запчасти', es: 'Soporte de exportación y piezas' },
            { en: 'Check whether the brand formally exports to your region and has local parts and service.', ar: 'تحقق مما إذا كانت العلامة تصدّر رسمياً إلى منطقتك ولديها قطع غيار وخدمة محلية.', ru: 'Проверьте, официально ли бренд экспортирует в ваш регион и есть ли там местные запчасти и сервис.', es: 'Compruebe si la marca exporta formalmente a su región y tiene piezas y servicio locales.' },
            { en: 'A grey-market car without local support carries higher ownership and resale risk.', ar: 'السيارة المستوردة بطرق غير رسمية دون دعم محلي تحمل مخاطر ملكية وإعادة بيع أعلى.', ru: 'Автомобиль из «серого» импорта без локальной поддержки несёт более высокие риски владения и перепродажи.', es: 'Un coche de importación paralela sin soporte local conlleva un mayor riesgo de propiedad y reventa.' },
          ],
          [
            { en: 'Destination eligibility', ar: 'أهلية الوجهة', ru: 'Допуск в стране назначения', es: 'Elegibilidad de destino' },
            { en: 'Confirm age, drive-side, charging-standard and homologation rules for your market.', ar: 'أكد قواعد العمر وجانب القيادة ومعيار الشحن والاعتماد لسوقك.', ru: 'Подтвердите правила по возрасту, стороне руля, стандарту зарядки и омологации для вашего рынка.', es: 'Confirme las normas de antigüedad, lado de conducción, estándar de carga y homologación para su mercado.' },
            { en: 'A car that cannot be registered or charged locally has little value regardless of its specification.', ar: 'السيارة التي لا يمكن تسجيلها أو شحنها محلياً لها قيمة قليلة مهما كانت مواصفاتها.', ru: 'Автомобиль, который нельзя зарегистрировать или зарядить локально, имеет малую ценность независимо от характеристик.', es: 'Un coche que no puede registrarse o cargarse localmente tiene poco valor con independencia de su especificación.' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'Battery chemistry: LFP vs NMC',
        ar: 'كيمياء البطارية: LFP مقابل NMC',
        ru: 'Химия батареи: LFP против NMC',
        es: 'Química de la batería: LFP frente a NMC',
      },
      paragraphs: [
        {
          en: 'The two chemistries most relevant to used Chinese EVs are LFP (lithium iron phosphate) and NMC (nickel-manganese-cobalt). LFP cells are generally cheaper, tolerate more charge cycles, and degrade more slowly over time, but have lower energy density — so an LFP pack of the same capacity is heavier and bulkier. NMC packs deliver more energy for their weight, which suits longer-range or higher-performance models, but are typically more expensive and more sensitive to being held at a high state of charge.',
          ar: 'الكيميائيتان الأكثر صلة بالسيارات الكهربائية الصينية المستعملة هما LFP (فوسفات الحديد والليثيوم) و NMC (النيكل والمنغنيز والكوبالت). خلايا LFP أرخص عموماً وتتحمل دورات شحن أكثر وتتدهور أبطأ بمرور الوقت، لكن كثافة طاقتها أقل — لذا فإن حزمة LFP بنفس السعة تكون أثقل وأضخم. أما حزم NMC فتوفر طاقة أكبر بالنسبة لوزنها، ما يناسب طرازات المدى الأطول أو الأداء الأعلى، لكنها عادة أغلى وأكثر حساسية للبقاء عند حالة شحن عالية.',
          ru: 'Две химии, наиболее актуальные для подержанных китайских электромобилей, — это LFP (литий-железо-фосфат) и NMC (никель-марганец-кобальт). Элементы LFP обычно дешевле, выдерживают больше циклов заряда и деградируют медленнее со временем, но имеют меньшую плотность энергии — поэтому батарея LFP той же ёмкости тяжелее и объёмнее. Батареи NMC дают больше энергии на единицу веса, что подходит для моделей с большим запасом хода или высокой производительностью, но обычно дороже и чувствительнее к длительному нахождению при высоком уровне заряда.',
          es: 'Las dos químicas más relevantes en los VE chinos usados son LFP (fosfato de hierro y litio) y NMC (níquel-manganeso-cobalto). Las celdas LFP suelen ser más baratas, soportan más ciclos de carga y se degradan más despacio con el tiempo, pero tienen menor densidad energética — así que un pack LFP de la misma capacidad es más pesado y voluminoso. Los packs NMC entregan más energía por peso, lo que conviene a modelos de mayor autonomía o rendimiento, pero suelen ser más caros y más sensibles a permanecer a un estado de carga alto.',
        },
        {
          en: 'For a used export purchase, chemistry is a tie-breaker, not a verdict. A well-kept LFP car can age very well; a high-mileage NMC car may still out-range it. Judge chemistry together with the battery\'s measured state of health, which you confirm per unit.',
          ar: 'بالنسبة لشراء تصديري مستعمل، الكيمياء عامل فاصل وليست حكماً. فسيارة LFP محفوظة جيداً قد تتقدم في العمر بشكل ممتاز؛ وسيارة NMC عالية المسافة قد تتفوق عليها في المدى مع ذلك. احكم على الكيمياء مع حالة صحة البطارية المقاسة، التي تؤكدها لكل وحدة.',
          ru: 'Для подержанной экспортной покупки химия — это решающий аргумент при прочих равных, а не приговор. Хорошо ухоженный автомобиль с LFP может стареть очень хорошо; автомобиль с NMC и большим пробегом всё же может превосходить его по запасу хода. Оценивайте химию вместе с измеренным состоянием здоровья батареи, которое подтверждается по каждой единице.',
          es: 'Para una compra usada de exportación, la química es un factor de desempate, no un veredicto. Un coche LFP bien cuidado puede envejecer muy bien; un coche NMC de alto kilometraje aún puede superarlo en autonomía. Juzgue la química junto con el estado de salud medido de la batería, que confirma por unidad.',
        },
      ],
    },
    {
      heading: {
        en: 'Range: reading the test cycle',
        ar: 'المدى: قراءة دورة الاختبار',
        ru: 'Запас хода: чтение цикла испытаний',
        es: 'Autonomía: leer el ciclo de prueba',
      },
      paragraphs: [
        {
          en: 'Chinese-market vehicles usually quote range on the CLTC cycle, which is generally more optimistic than the WLTP cycle used in Europe and the older NEDC cycle. The gap between CLTC and WLTP varies by vehicle, driving style and conditions, so do not apply a single fixed conversion. When you can, use a WLTP figure as a cross-market baseline; when only CLTC is available, treat it as an upper, laboratory-style estimate rather than a real-world number.',
          ar: 'عادة ما تقتبس سيارات السوق الصينية المدى بدورة CLTC، وهي عموماً أكثر تفاؤلاً من دورة WLTP المستخدمة في أوروبا ودورة NEDC الأقدم. تتباين الفجوة بين CLTC وWLTP حسب المركبة وأسلوب القيادة والظروف، فلا تطبّق تحويلاً ثابتاً واحداً. عندما تستطيع، استخدم رقم WLTP كأساس عبر الأسواق؛ وعندما يتوفر CLTC فقط، عامله كتقدير مخبري أعلى وليس رقماً واقعياً.',
          ru: 'Автомобили китайского рынка обычно указывают запас хода по циклу CLTC, который в целом оптимистичнее цикла WLTP, используемого в Европе, и старого цикла NEDC. Разрыв между CLTC и WLTP зависит от автомобиля, стиля вождения и условий, поэтому не применяйте одно фиксированное преобразование. Если возможно, используйте цифру WLTP как кросс-рыночную базу; если доступен только CLTC, относитесь к нему как к верхней лабораторной оценке, а не реальной цифре.',
          es: 'Los vehículos del mercado chino suelen indicar la autonomía en el ciclo CLTC, que por lo general es más optimista que el ciclo WLTP usado en Europa y el antiguo ciclo NEDC. La brecha entre CLTC y WLTP varía según el vehículo, el estilo de conducción y las condiciones, así que no aplique una única conversión fija. Cuando pueda, use una cifra WLTP como base entre mercados; cuando solo haya CLTC, trátela como una estimación de laboratorio superior, no como una cifra real.',
        },
        {
          en: 'For a used EV, the original sticker range matters less than what the battery can deliver now. Confirm the battery\'s current state of health and, where possible, its measured range, rather than comparing two cars on their brochure figures alone.',
          ar: 'بالنسبة للمركبة الكهربائية المستعملة، المدى الأصلي المعلن أقل أهمية مما يمكن أن تقدمه البطارية الآن. أكد حالة صحة البطارية الحالية، وحيثما أمكن، مداها المقاس، بدلاً من مقارنة سيارتين بأرقام كتيباتهما فقط.',
          ru: 'Для подержанного электромобиля исходный рекламный запас хода менее важен, чем то, что батарея может выдать сейчас. Подтвердите текущее состояние здоровья батареи и, где возможно, её измеренный запас хода, а не сравнивайте два автомобиля только по брошюрным цифрам.',
          es: 'En un VE usado, la autonomía original anunciada importa menos que lo que la batería puede entregar ahora. Confirme el estado de salud actual de la batería y, cuando sea posible, su autonomía medida, en lugar de comparar dos coches solo por las cifras de su folleto.',
        },
      ],
    },
    {
      heading: {
        en: 'Charging: speed, standards and compatibility',
        ar: 'الشحن: السرعة والمعايير والتوافق',
        ru: 'Зарядка: скорость, стандарты и совместимость',
        es: 'Carga: velocidad, estándares y compatibilidad',
      },
      paragraphs: [
        {
          en: 'Charging comparison has two parts: how fast the car can charge (peak DC rate and whether it uses a higher-voltage platform), and whether its connector matches your market. Domestic Chinese EVs use GB/T connectors for both AC and DC charging; many export markets use CCS2 (or another standard) instead. An export unit may retain a GB/T port or be adapted, so confirm which connector the specific car carries and whether your destination\'s charging network supports it.',
          ar: 'مقارنة الشحن لها جزءان: مدى سرعة شحن السيارة (معدل التيار المستمر الأقصى وما إذا كانت تستخدم منصة جهد أعلى)، وما إذا كان موصلها يطابق سوقك. تستخدم السيارات الكهربائية الصينية المحلية موصلات GB/T لكل من الشحن بالتيار المتردد والمستمر؛ وتستخدم أسواق تصدير كثيرة CCS2 (أو معياراً آخر) بدلاً من ذلك. قد تحتفظ الوحدة المصدرة بمنفذ GB/T أو تكون معدلة، لذا أكد أي موصل تحمله السيارة المحددة وما إذا كانت شبكة الشحن في وجهتك تدعمه.',
          ru: 'Сравнение зарядки состоит из двух частей: как быстро автомобиль может заряжаться (пиковая мощность постоянного тока и использует ли он платформу повышенного напряжения) и подходит ли его разъём вашему рынку. Домашние китайские электромобили используют разъёмы GB/T и для переменного, и для постоянного тока; многие экспортные рынки вместо этого используют CCS2 (или другой стандарт). Экспортная единица может сохранить порт GB/T или быть адаптирована, поэтому подтвердите, какой разъём у конкретного автомобиля и поддерживает ли его зарядная сеть вашей страны.',
          es: 'La comparación de carga tiene dos partes: lo rápido que puede cargar el coche (potencia máxima en CC y si usa una plataforma de mayor voltaje) y si su conector coincide con su mercado. Los VE chinos domésticos usan conectores GB/T para carga en CA y en CC; muchos mercados de exportación usan CCS2 (u otro estándar) en su lugar. Una unidad de exportación puede conservar el puerto GB/T o estar adaptada, así que confirme qué conector lleva el coche concreto y si la red de carga de su destino lo admite.',
        },
        {
          en: 'Charging speed is a real cost factor. A car that charges faster spends less time off the road, which matters for taxis, fleets and high-mileage resale; a slower car may be fine for private short-range use. Match charging capability to how the buyer will actually use the vehicle.',
          ar: 'سرعة الشحن عامل تكلفة حقيقي. فالسيارة التي تشحن أسرع تقضي وقتاً أقل بعيداً عن الطريق، ما يهم لسيارات الأجرة والأساطيل وإعادة البيع عالية المسافات؛ وقد تكون السيارة الأبطأ مناسبة للاستخدام الخاص قصير المدى. طابق قدرة الشحن مع الاستخدام الفعلي للمشتري للسيارة.',
          ru: 'Скорость зарядки — реальный фактор стоимости. Автомобиль, который заряжается быстрее, проводит меньше времени вне дороги, что важно для такси, автопарков и перепродажи с большим пробегом; более медленный автомобиль может быть приемлем для частной короткой эксплуатации. Сопоставьте возможности зарядки с тем, как покупатель реально будет использовать автомобиль.',
          es: 'La velocidad de carga es un factor de coste real. Un coche que carga más rápido pasa menos tiempo fuera de la carretera, lo que importa en taxis, flotas y reventa de alto kilometraje; un coche más lento puede bastar para uso privado de corta distancia. Ajuste la capacidad de carga al uso real que el comprador dará al vehículo.',
        },
      ],
    },
    {
      heading: {
        en: 'Segment, drive type and right-hand drive',
        ar: 'الفئة ونوع الدفع والقيادة على اليمين',
        ru: 'Класс, тип привода и правый руль',
        es: 'Segmento, tracción y volante a la derecha',
      },
      paragraphs: [
        {
          en: 'Segment and drive type shape both price and demand. A compact crossover (Atto 3, MG ZS EV) competes in a high-volume, price-sensitive band; a mid-size sedan (Seal) or mid-size SUV (ES6, G6, Song Plus EV) sits a step above. Drive type ranges from front-wheel drive in many affordable models to rear- or all-wheel drive in performance or premium ones, which affects handling and, in some climates, traction.',
          ar: 'تشكّل الفئة ونوع الدفع كلاً من السعر والطلب. فالسيارة الكروس أوفر المدمجة (Atto 3 وMG ZS EV) تنافس في شريحة عالية الحجم وحساسة للسعر؛ أما السيدان متوسطة الحجم (Seal) أو الـSUV متوسطة الحجم (ES6 وG6 وSong Plus EV) فتقف درجة أعلى. يتراوح نوع الدفع من الدفع الأمامي في كثير من الطرازات الميسورة إلى الدفع الخلفي أو الرباعي في طرازات الأداء أو الفاخرة، ما يؤثر على القيادة، وفي بعض المناخات، على التماسك.',
          ru: 'Класс и тип привода формируют и цену, и спрос. Компактный кроссовер (Atto 3, MG ZS EV) конкурирует в массовой, чувствительной к цене нише; среднеразмерный седан (Seal) или среднеразмерный внедорожник (ES6, G6, Song Plus EV) стоит на ступень выше. Тип привода варьируется от переднего во многих доступных моделях до заднего или полного в производительных или премиальных, что влияет на управляемость и, в некоторых климатах, на сцепление.',
          es: 'El segmento y la tracción moldean tanto el precio como la demanda. Un crossover compacto (Atto 3, MG ZS EV) compite en una franja de alto volumen y sensible al precio; un sedán medio (Seal) o un SUV medio (ES6, G6, Song Plus EV) se sitúa un escalón por encima. El tipo de tracción va de la delantera en muchos modelos asequibles a la trasera o total en los de rendimiento o premium, lo que afecta a la conducción y, en algunos climas, a la tracción.',
        },
        {
          en: 'Right-hand drive is a binary filter. Most Chinese EVs sold domestically are left-hand drive only; some models have official right-hand-drive export versions for markets such as the United Kingdom, Australia, Japan and parts of Africa and Asia. If your destination requires right-hand drive, confirm availability for the specific model before shortlisting anything else.',
          ar: 'القيادة على اليمين عامل تصفية ثنائي. معظم السيارات الكهربائية الصينية المباعة محلياً بقيادة يسارية فقط؛ وبعض الطرازات لها نسخ تصدير رسمية بقيادة على اليمين لأسواق مثل المملكة المتحدة وأستراليا واليابان وأجزاء من أفريقيا وآسيا. إذا كانت وجهتك تتطلب القيادة على اليمين، أكد التوفر للطراز المحدد قبل قصر أي قائمة مختصرة.',
          ru: 'Правый руль — это бинарный фильтр. Большинство китайских электромобилей, продаваемых внутри страны, только с левым рулём; у некоторых моделей есть официальные экспортные версии с правым рулём для таких рынков, как Великобритания, Австралия, Япония и части Африки и Азии. Если ваша страна требует правый руль, подтвердите доступность конкретной модели, прежде чем составлять короткий список.',
          es: 'El volante a la derecha es un filtro binario. La mayoría de los VE chinos vendidos en el mercado doméstico solo son de volante a la izquierda; algunos modelos tienen versiones de exportación oficiales con volante a la derecha para mercados como Reino Unido, Australia, Japón y partes de África y Asia. Si su destino exige volante a la derecha, confirme la disponibilidad del modelo concreto antes de hacer una lista corta.',
        },
      ],
    },
    {
      heading: {
        en: 'Platform, export support and destination eligibility',
        ar: 'المنصة ودعم التصدير وأهلية الوجهة',
        ru: 'Платформа, экспортная поддержка и допуск в стране',
        es: 'Plataforma, soporte de exportación y elegibilidad de destino',
      },
      paragraphs: [
        {
          en: 'A model\'s platform generation and the brand\'s export posture decide what happens after the sale. A current, still-produced platform means parts, software updates and aftermarket support continue; a discontinued platform or a brand with no formal presence in your region raises ownership and resale risk. Check whether the brand exports officially to your region and whether local service and parts are realistically available.',
          ar: 'جيل منصة الطراز ووضعية تصدير العلامة يقرران ما يحدث بعد البيع. المنصة الحالية التي ما تزال تُنتج تعني استمرار قطع الغيار وتحديثات البرمجيات ودعم ما بعد البيع؛ أما المنصة المتوقفة أو العلامة التي لا حضور رسمي لها في منطقتك فترفع مخاطر الملكية وإعادة البيع. تحقق مما إذا كانت العلامة تصدّر رسمياً إلى منطقتك وما إذا كانت الخدمة وقطع الغيار المحلية متاحة واقعياً.',
          ru: 'Поколение платформы модели и экспортная позиция бренда определяют, что произойдёт после продажи. Актуальная, всё ещё производимая платформа означает продолжение поставок запчастей, обновлений ПО и послепродажной поддержки; снятая с производства платформа или бренд без официального присутствия в вашем регионе повышает риски владения и перепродажи. Проверьте, официально ли бренд экспортирует в ваш регион и реально ли доступны локальный сервис и запчасти.',
          es: 'La generación de la plataforma de un modelo y la postura exportadora de la marca deciden qué ocurre tras la venta. Una plataforma actual, aún en producción, significa que siguen las piezas, las actualizaciones de software y el soporte posventa; una plataforma descatalogada o una marca sin presencia formal en su región elevan el riesgo de propiedad y reventa. Compruebe si la marca exporta oficialmente a su región y si el servicio y las piezas locales son realistas.',
        },
        {
          en: 'Destination eligibility is the final filter. Age limits, drive-side rules, charging-standard and homologation requirements differ by market, and a car can be excellent on every other criterion yet unsellable locally. Check these inputs on the Market sub-site, where each rule carries a source and a last-checked date.',
          ar: 'أهلية الوجهة هي المرشح الأخير. تختلف حدود العمر وقواعد جانب القيادة ومتطلبات معيار الشحن والاعتماد حسب السوق، وقد تكون السيارة ممتازة في كل معيار آخر لكنها غير قابلة للبيع محلياً. تحقق من هذه المدخلات في الموقع الفرعي للأسواق، حيث يحمل كل حكم مصدره وتاريخ آخر فحص.',
          ru: 'Допуск в стране назначения — последний фильтр. Ограничения по возрасту, правила стороны руля, требования стандарта зарядки и омологации различаются по рынкам, и автомобиль может быть отличным по всем прочим критериям, но непродаваемым локально. Проверьте эти данные на подсайте Market, где каждое правило имеет источник и дату последней проверки.',
          es: 'La elegibilidad de destino es el filtro final. Los límites de antigüedad, las normas de lado de conducción y los requisitos de estándar de carga y homologación difieren por mercado, y un coche puede ser excelente en todos los demás criterios y aun así invendible localmente. Compruebe estos datos en el subsitio Market, donde cada norma lleva fuente y fecha de última comprobación.',
        },
      ],
    },
    {
      heading: {
        en: 'Limitations: there is no universal score',
        ar: 'القيود: لا توجد درجة عالمية',
        ru: 'Ограничения: универсальной оценки нет',
        es: 'Limitaciones: no hay una puntuación universal',
      },
      paragraphs: [
        {
          en: 'This framework is a method for comparison, not a scoring system that ranks every EV on one number. The eight criteria carry different weights for different buyers — a fleet operator weights charging speed, a private buyer weights price and segment, and both must respect destination eligibility. Do not expect a single "best" car to emerge from the table; expect a shortlist of cars that fit a specific use case.',
          ar: 'هذا الإطار طريقة للمقارنة، وليس نظام تسجيل يصنف كل سيارة كهربائية برقم واحد. المعايير الثمانية تحمل أوزاناً مختلفة لمشترين مختلفين — مشغّل الأسطول يرجح سرعة الشحن، والمشتري الخاص يرجح السعر والفئة، وعلى كليهما احترام أهلية الوجهة. لا تتوقع أن تبرز سيارة «أفضل» واحدة من الجدول؛ توقع قائمة مختصرة لسيارات تناسب حالة استخدام محددة.',
          ru: 'Эта структура — метод сравнения, а не система оценки, ранжирующая каждый электромобиль одним числом. Восемь критериев имеют разный вес для разных покупателей: оператор автопарка отдаёт приоритет скорости зарядки, частный покупатель — цене и классу, и оба обязаны учитывать допуск в стране. Не ждите, что из таблицы появится единственный «лучший» автомобиль; ждите короткий список машин, подходящих под конкретный сценарий использования.',
          es: 'Este marco es un método de comparación, no un sistema de puntuación que ordene cada VE con una sola cifra. Los ocho criterios tienen distinto peso según el comprador: un operador de flota prioriza la velocidad de carga, un comprador particular prioriza precio y segmento, y ambos deben respetar la elegibilidad de destino. No espere que surja un único coche «mejor» de la tabla; espere una lista corta de coches que se ajusten a un caso de uso concreto.',
        },
        {
          en: 'Above all, the individual battery\'s state of health dominates used-EV value. Two cars of the same model, year and specification can differ materially because one battery has degraded more than the other. Always confirm the battery\'s condition for the specific unit — this framework is general guidance, not a guarantee about any particular vehicle.',
          ar: 'وقبل كل شيء، تهيمن حالة صحة البطارية الفردية على قيمة المركبة الكهربائية المستعملة. فقد تختلف سيارتان من الطراز والسنة والمواصفات نفسها مادياً لأن بطارية إحداهما تدهورت أكثر من الأخرى. أكد دائماً حالة بطارية الوحدة المحددة — هذا الإطار إرشاد عام، وليس ضماناً لأي مركبة معينة.',
          ru: 'Прежде всего, индивидуальное состояние здоровья батареи доминирует в ценности подержанного электромобиля. Два автомобиля одной модели, года и комплектации могут существенно различаться, потому что батарея одного деградировала сильнее. Всегда подтверждайте состояние батареи конкретной единицы — эта структура является общей рекомендацией, а не гарантией по конкретному автомобилю.',
          es: 'Por encima de todo, el estado de salud de la batería individual domina el valor de un VE usado. Dos coches del mismo modelo, año y especificación pueden diferir sustancialmente porque una batería se ha degradado más que la otra. Confirme siempre el estado de la batería de la unidad concreta — este marco es orientación general, no una garantía sobre ningún vehículo en particular.',
        },
      ],
    },
    {
      heading: {
        en: 'Real models compared',
        ar: 'طرازات حقيقية مقارنة',
        ru: 'Сравнение реальных моделей',
        es: 'Modelos reales comparados',
      },
      paragraphs: [
        {
          en: 'The models below illustrate how the criteria separate cars in practice. Descriptions are qualitative and based on each model\'s general positioning; confirm the exact specification, chemistry and connector of any specific unit before committing.',
          ar: 'توضح الطرازات أدناه كيف تفصل المعايير بين السيارات عملياً. الأوصاف نوعية وتستند إلى التموضع العام لكل طراز؛ أكد المواصفات الدقيقة والكيمياء والموصل لأي وحدة محددة قبل الالتزام.',
          ru: 'Модели ниже показывают, как критерии разделяют автомобили на практике. Описания качественные и основаны на общем позиционировании каждой модели; подтвердите точную спецификацию, химию и разъём конкретной единицы до обязательств.',
          es: 'Los modelos siguientes ilustran cómo los criterios separan los coches en la práctica. Las descripciones son cualitativas y se basan en el posicionamiento general de cada modelo; confirme la especificación exacta, la química y el conector de cada unidad concreta antes de comprometerse.',
        },
      ],
      table: {
        headers: [
          { en: 'Model', ar: 'الطراز', ru: 'Модель', es: 'Modelo' },
          { en: 'Segment & drive', ar: 'الفئة والدفع', ru: 'Класс и привод', es: 'Segmento y tracción' },
          { en: 'Battery / charging notes', ar: 'ملاحظات البطارية / الشحن', ru: 'Заметки о батарее / зарядке', es: 'Notas de batería / carga' },
          { en: 'Export notes', ar: 'ملاحظات التصدير', ru: 'Заметки об экспорте', es: 'Notas de exportación' },
        ],
        rows: [
          [
            { en: 'BYD Atto 3', ar: 'BYD Atto 3', ru: 'BYD Atto 3', es: 'BYD Atto 3' },
            { en: 'Compact crossover, front-wheel drive.', ar: 'كروس أوفر مدمجة، دفع أمامي.', ru: 'Компактный кроссовер, передний привод.', es: 'Crossover compacto, tracción delantera.' },
            { en: 'LFP blade-battery pack; confirm the specific unit\'s capacity and connector.', ar: 'حزمة بطارية LFP النصلية؛ أكد سعة الوحدة المحددة وموصلها.', ru: 'Батарея LFP типа blade; подтвердите ёмкость и разъём конкретной единицы.', es: 'Pack de batería LFP tipo blade; confirme la capacidad y el conector de la unidad concreta.' },
            { en: 'Widely exported with official right-hand-drive versions in several markets.', ar: 'مصدرة على نطاق واسع مع نسخ رسمية بقيادة على اليمين في أسواق عدة.', ru: 'Широко экспортируется с официальными версиями с правым рулём на ряде рынков.', es: 'Ampliamente exportado con versiones oficiales de volante a la derecha en varios mercados.' },
          ],
          [
            { en: 'BYD Seal', ar: 'BYD Seal', ru: 'BYD Seal', es: 'BYD Seal' },
            { en: 'Mid-size sedan, rear- or all-wheel drive.', ar: 'سيدان متوسطة الحجم، دفع خلفي أو رباعي.', ru: 'Среднеразмерный седан, задний или полный привод.', es: 'Sedán medio, tracción trasera o total.' },
            { en: 'Higher-voltage fast-charging platform in some variants; confirm chemistry and charge rate per unit.', ar: 'منصة شحن سريع بجهد أعلى في بعض النسخ؛ أكد الكيمياء ومعدل الشحن لكل وحدة.', ru: 'Платформа быстрой зарядки повышенного напряжения в некоторых версиях; подтвердите химию и мощность зарядки по каждой единице.', es: 'Plataforma de carga rápida de mayor voltaje en algunas variantes; confirme la química y la tasa de carga por unidad.' },
            { en: 'Exported to a growing number of markets; verify parts and service support in your region.', ar: 'مصدر إلى عدد متزايد من الأسواق؛ تحقق من دعم قطع الغيار والخدمة في منطقتك.', ru: 'Экспортируется во всё большее число рынков; проверьте поддержку запчастей и сервиса в вашем регионе.', es: 'Exportado a un número creciente de mercados; verifique el soporte de piezas y servicio en su región.' },
          ],
          [
            { en: 'BYD Song Plus (EV)', ar: 'BYD Song Plus (EV)', ru: 'BYD Song Plus (EV)', es: 'BYD Song Plus (EV)' },
            { en: 'Compact SUV, front-wheel drive.', ar: 'SUV مدمجة، دفع أمامي.', ru: 'Компактный внедорожник, передний привод.', es: 'SUV compacto, tracción delantera.' },
            { en: 'Also sold as a DM-i plug-in hybrid; for the EV version confirm battery chemistry and capacity.', ar: 'تُباع أيضاً كهجينة قابلة للشحن DM-i؛ وبالنسبة لنسخة EV أكد كيمياء البطارية وسعتها.', ru: 'Также продаётся как подключаемый гибрид DM-i; для версии EV подтвердите химию и ёмкость батареи.', es: 'También se vende como híbrido enchufable DM-i; para la versión EV confirme la química y capacidad de la batería.' },
            { en: 'High-volume model in China; export support and right-hand-drive availability vary by market.', ar: 'طراز عالي الحجم في الصين؛ يختلف دعم التصدير وتوفر القيادة على اليمين حسب السوق.', ru: 'Массовая модель в Китае; экспортная поддержка и доступность правого руля различаются по рынкам.', es: 'Modelo de alto volumen en China; el soporte de exportación y la disponibilidad de volante a la derecha varían por mercado.' },
          ],
          [
            { en: 'NIO ES6', ar: 'NIO ES6', ru: 'NIO ES6', es: 'NIO ES6' },
            { en: 'Mid-size electric SUV, dual-motor all-wheel drive.', ar: 'SUV كهربائية متوسطة الحجم، دفع رباعي بمحركين.', ru: 'Среднеразмерный электрический внедорожник, полный привод с двумя моторами.', es: 'SUV eléctrico medio, tracción total de doble motor.' },
            { en: 'Battery-swap capable; confirm whether swap stations exist in your market before relying on this feature.', ar: 'قابلة لتبديل البطارية؛ أكد وجود محطات التبديل في سوقك قبل الاعتماد على هذه الميزة.', ru: 'Поддерживает замену батареи; подтвердите наличие станций замены на вашем рынке, прежде чем полагаться на эту функцию.', es: 'Capaz de intercambio de batería; confirme si existen estaciones de intercambio en su mercado antes de confiar en esta función.' },
            { en: 'Export presence is more limited than the volume brands; verify support before purchase.', ar: 'الحضور التصديري محدود أكثر من العلامات عالية الحجم؛ تحقق من الدعم قبل الشراء.', ru: 'Экспортное присутствие ограниченнее, чем у массовых брендов; проверьте поддержку до покупки.', es: 'La presencia exportadora es más limitada que la de las marcas de volumen; verifique el soporte antes de comprar.' },
          ],
          [
            { en: 'XPeng G6', ar: 'XPeng G6', ru: 'XPeng G6', es: 'XPeng G6' },
            { en: 'Mid-size electric SUV, rear- or all-wheel drive.', ar: 'SUV كهربائية متوسطة الحجم، دفع خلفي أو رباعي.', ru: 'Среднеразмерный электрический внедорожник, задний или полный привод.', es: 'SUV eléctrico medio, tracción trasera o total.' },
            { en: 'Higher-voltage fast-charging platform; confirm the unit\'s charge rate and connector.', ar: 'منصة شحن سريع بجهد أعلى؛ أكد معدل شحن الوحدة وموصلها.', ru: 'Платформа быстрой зарядки повышенного напряжения; подтвердите мощность зарядки и разъём единицы.', es: 'Plataforma de carga rápida de mayor voltaje; confirme la tasa de carga y el conector de la unidad.' },
            { en: 'Exporting to selected markets; check regional presence and destination eligibility.', ar: 'يصدر إلى أسواق مختارة؛ تحقق من الحضور الإقليمي وأهلية الوجهة.', ru: 'Экспортируется в отдельные рынки; проверьте региональное присутствие и допуск в стране.', es: 'Exporta a mercados seleccionados; compruebe la presencia regional y la elegibilidad de destino.' },
          ],
          [
            { en: 'MG ZS EV', ar: 'MG ZS EV', ru: 'MG ZS EV', es: 'MG ZS EV' },
            { en: 'Compact crossover, front-wheel drive.', ar: 'كروس أوفر مدمجة، دفع أمامي.', ru: 'Компактный кроссовер, передний привод.', es: 'Crossover compacto, tracción delantera.' },
            { en: 'A well-established EV line from SAIC/MG; confirm battery chemistry and capacity per unit.', ar: 'خط كهربائي راسخ من SAIC/MG؛ أكد كيمياء البطارية وسعتها لكل وحدة.', ru: 'Устоявшаяся электрическая линейка SAIC/MG; подтвердите химию и ёмкость батареи по каждой единице.', es: 'Una línea eléctrica consolidada de SAIC/MG; confirme la química y capacidad de la batería por unidad.' },
            { en: 'One of the most widely exported, with right-hand-drive versions and a broad dealer network.', ar: 'من أكثر الطرازات تصديراً، مع نسخ بقيادة على اليمين وشبكة وكلاء واسعة.', ru: 'Один из самых широко экспортируемых, с версиями с правым рулём и широкой дилерской сетью.', es: 'Uno de los más exportados, con versiones de volante a la derecha y una amplia red de concesionarios.' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'Related models and tools',
        ar: 'الطرازات والأدوات ذات الصلة',
        ru: 'Связанные модели и инструменты',
        es: 'Modelos y herramientas relacionados',
      },
      paragraphs: [
        {
          en: 'Confirm each candidate\'s specification on the Data sub-site, then compare candidates and estimate import cost with the Tools sub-site.',
          ar: 'أكد مواصفات كل مرشح في الموقع الفرعي للبيانات، ثم قارن المرشحين وقدّر تكلفة الاستيراد عبر الموقع الفرعي للأدوات.',
          ru: 'Подтвердите спецификацию каждого кандидата на подсайте Data, затем сравните кандидатов и оцените стоимость импорта с помощью подсайта инструментов.',
          es: 'Confirme la especificación de cada candidato en el subsitio Data y luego compare candidatos y estime el coste de importación con el subsitio de herramientas.',
        },
      ],
      links: [
        {
          href: 'https://data.chinausedautohub.com/models/byd-atto-3/',
          label: {
            en: 'BYD Atto 3 — Data sub-site',
            ar: 'BYD Atto 3 — الموقع الفرعي للبيانات',
            ru: 'BYD Atto 3 — подсайт Data',
            es: 'BYD Atto 3 — subsitio Data',
          },
        },
        {
          href: 'https://data.chinausedautohub.com/models/byd-seal/',
          label: {
            en: 'BYD Seal — Data sub-site',
            ar: 'BYD Seal — الموقع الفرعي للبيانات',
            ru: 'BYD Seal — подсайт Data',
            es: 'BYD Seal — subsitio Data',
          },
        },
        {
          href: 'https://data.chinausedautohub.com/models/xpeng-g6/',
          label: {
            en: 'XPeng G6 — Data sub-site',
            ar: 'XPeng G6 — الموقع الفرعي للبيانات',
            ru: 'XPeng G6 — подсайт Data',
            es: 'XPeng G6 — subsitio Data',
          },
        },
        {
          href: 'https://data.chinausedautohub.com/models/nio-es6/',
          label: {
            en: 'NIO ES6 — Data sub-site',
            ar: 'NIO ES6 — الموقع الفرعي للبيانات',
            ru: 'NIO ES6 — подсайт Data',
            es: 'NIO ES6 — subsitio Data',
          },
        },
        {
          href: 'https://tool.chinausedautohub.com/vehicle-comparison/',
          label: {
            en: 'Vehicle Comparison tool',
            ar: 'أداة مقارنة المركبات',
            ru: 'Инструмент сравнения автомобилей',
            es: 'Herramienta de comparación de vehículos',
          },
        },
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
            en: 'Market Compatibility tool',
            ar: 'أداة توافق السوق',
            ru: 'Инструмент совместимости с рынком',
            es: 'Herramienta de compatibilidad de mercado',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Related guide and markets',
        ar: 'الدليل والأسواق ذات الصلة',
        ru: 'Связанное руководство и рынки',
        es: 'Guía y mercados relacionados',
      },
      paragraphs: [
        {
          en: 'For the deeper EV export picture, see the Chinese EVs guide; for what a specific destination requires, check the country pages on the Market sub-site.',
          ar: 'للصورة الأعمق لتصدير المركبات الكهربائية، راجع دليل السيارات الكهربائية الصينية؛ ولمعرفة ما تتطلبه وجهة محددة، راجع صفحات الدول في الموقع الفرعي للأسواق.',
          ru: 'Для более глубокой картины экспорта электромобилей см. руководство по китайским электромобилям; о том, что требует конкретная страна, см. страницы стран на подсайте Market.',
          es: 'Para el panorama más profundo de la exportación de VE, consulte la guía de VE chinos; para saber qué exige un destino concreto, consulte las páginas de países en el subsitio Market.',
        },
      ],
      links: [
        {
          slug: 'buying-chinese-evs-for-export',
          label: {
            en: 'Buying Chinese EVs for Export guide',
            ar: 'دليل شراء السيارات الكهربائية الصينية للتصدير',
            ru: 'Руководство «Покупка китайских электромобилей на экспорт»',
            es: 'Guía «Comprar VE chinos para exportar»',
          },
        },
        {
          href: 'https://market.chinausedautohub.com/countries/kenya/',
          label: {
            en: 'Kenya — Market sub-site',
            ar: 'كينيا — الموقع الفرعي للأسواق',
            ru: 'Кения — подсайт Market',
            es: 'Kenia — subsitio Market',
          },
        },
        {
          href: 'https://market.chinausedautohub.com/countries/uae/',
          label: {
            en: 'United Arab Emirates — Market sub-site',
            ar: 'الإمارات العربية المتحدة — الموقع الفرعي للأسواق',
            ru: 'ОАЭ — подсайт Market',
            es: 'Emiratos Árabes Unidos — subsitio Market',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Frequently asked questions',
        ar: 'الأسئلة الشائعة',
        ru: 'Часто задаваемые вопросы',
        es: 'Preguntas frecuentes',
      },
      paragraphs: [
        {
          en: 'Which matters more for a used EV — the advertised range or the battery\'s current health? The battery\'s current state of health matters more. Brochure range describes a new car on a specific test cycle; what a used unit can actually deliver depends on degradation, which you should confirm with a diagnostic before comparing or pricing.',
          ar: 'أيهما أهم للمركبة الكهربائية المستعملة — المدى المعلن أم صحة البطارية الحالية؟ صحة البطارية الحالية أهم. فمدى الكتيب يصف سيارة جديدة على دورة اختبار محددة؛ وما يمكن للوحدة المستعملة تقديمه فعلياً يعتمد على التدهور، الذي يجب أن تؤكده بفحص تشخيصي قبل المقارنة أو التسعير.',
          ru: 'Что важнее для подержанного электромобиля — заявленный запас хода или текущее состояние батареи? Важнее текущее состояние здоровья батареи. Брошюрный запас хода описывает новый автомобиль на конкретном цикле испытаний; то, что реально может выдать подержанная единица, зависит от деградации, которую следует подтвердить диагностикой до сравнения или оценки цены.',
          es: '¿Qué importa más en un VE usado — la autonomía anunciada o el estado actual de la batería? Importa más el estado de salud actual de la batería. La autonomía del folleto describe un coche nuevo en un ciclo de prueba concreto; lo que una unidad usada puede entregar realmente depende de la degradación, que debe confirmar con un diagnóstico antes de comparar o poner precio.',
        },
        {
          en: 'How do I know whether the charging connector fits my country? Check the connector on the specific unit against your destination\'s charging standard, and whether the local network supports it. Domestic Chinese EVs often use GB/T connectors, while many export markets use CCS2; confirm the unit\'s port and your market\'s standard before committing.',
          ar: 'كيف أعرف ما إذا كان موصل الشحن يناسب بلدي؟ تحقق من الموصل في الوحدة المحددة مقابل معيار الشحن في وجهتك، وما إذا كانت الشبكة المحلية تدعمه. غالباً ما تستخدم السيارات الكهربائية الصينية المحلية موصلات GB/T، بينما تستخدم أسواق تصدير كثيرة CCS2؛ أكد منفذ الوحدة ومعيار سوقك قبل الالتزام.',
          ru: 'Как узнать, подходит ли разъём зарядки для моей страны? Сверьте разъём конкретной единицы со стандартом зарядки вашей страны и с тем, поддерживает ли его местная сеть. Домашние китайские электромобили часто используют разъёмы GB/T, а многие экспортные рынки — CCS2; подтвердите порт единицы и стандарт вашего рынка до обязательств.',
          es: '¿Cómo sé si el conector de carga sirve para mi país? Compare el conector de la unidad concreta con el estándar de carga de su destino y si la red local lo admite. Los VE chinos domésticos suelen usar conectores GB/T, mientras que muchos mercados de exportación usan CCS2; confirme el puerto de la unidad y el estándar de su mercado antes de comprometerse.',
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
          en: 'Last reviewed: 2026-10-04. This guide describes a general comparison method and does not certify any specific vehicle or guarantee any figure. Battery condition, charging compatibility and destination eligibility must be confirmed for the individual unit and market before committing.',
          ar: 'آخر مراجعة: 2026-10-04. يصف هذا الدليل طريقة مقارنة عامة ولا يعتمد أي مركبة محددة ولا يضمن أي رقم. يجب تأكيد حالة البطارية وتوافق الشحن وأهلية الوجهة للوحدة والسوق المحددين قبل الالتزام.',
          ru: 'Последняя проверка: 2026-10-04. Это руководство описывает общий метод сравнения и не сертифицирует какой-либо конкретный автомобиль и не гарантирует никакие цифры. Состояние батареи, совместимость зарядки и допуск в стране должны быть подтверждены для конкретной единицы и рынка до принятия обязательств.',
          es: 'Última revisión: 2026-10-04. Esta guía describe un método general de comparación y no certifica ningún vehículo concreto ni garantiza ninguna cifra. El estado de la batería, la compatibilidad de carga y la elegibilidad de destino deben confirmarse para la unidad y el mercado concretos antes de comprometerse.',
        },
      ],
    },
  ],
};
