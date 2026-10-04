import type { L10n } from '../l10n';

// Guide 3 — How to Inspect a Used Car in China (what to check, incl. EV checks).

export const inspection = {
  slug: 'vehicle-inspection',
  title: {
    en: 'How to Inspect a Used Car in China — What to Check',
    ar: 'كيف تفحص سيارة مستعملة في الصين — ما يجب التحقق منه',
    ru: 'Как проверить подержанный автомобиль в Китае — на что смотреть',
    es: 'Cómo inspeccionar un coche usado en China — qué comprobar',
  },
  description: {
    en: 'What to check when assessing a used vehicle from China: exterior, interior, engine, transmission, battery, mileage, accident history, and EV-specific checks.',
    ar: 'ما يجب التحقق منه عند تقييم مركبة مستعملة من الصين: الخارجي والداخلي والمحرك وناقل الحركة والبطارية والمسافة المقطوعة وسجل الحوادث وفحوصات المركبات الكهربائية.',
    ru: 'Что проверять при оценке подержанного автомобиля из Китая: кузов, салон, двигатель, трансмиссия, батарея, пробег, история ДТП и проверки для электромобилей.',
    es: 'Qué comprobar al evaluar un vehículo usado desde China: exterior, interior, motor, transmisión, batería, kilometraje, historial de accidentes y comprobaciones específicas de VE.',
  },
  h1: {
    en: 'How to Inspect a Used Car in China',
    ar: 'كيف تفحص سيارة مستعملة في الصين',
    ru: 'Как проверить подержанный автомобиль в Китае',
    es: 'Cómo inspeccionar un coche usado en China',
  },
  summary: {
    en: 'What to check when assessing a used vehicle, including EV battery checks.',
    ar: 'ما يجب التحقق منه عند تقييم مركبة مستعملة، بما في ذلك فحوصات بطارية المركبات الكهربائية.',
    ru: 'Что проверять при оценке подержанного автомобиля, включая проверки батареи электромобиля.',
    es: 'Qué comprobar al evaluar un vehículo usado, incluidas las comprobaciones de batería de VE.',
  },
  sections: [
    {
      heading: {
        en: 'Why inspection matters',
        ar: 'لماذا يهم الفحص',
        ru: 'Почему проверка важна',
        es: 'Por qué importa la inspección',
      },
      paragraphs: [
        {
          en: 'A used vehicle\'s condition affects its value, its reliability and how it will perform in your market. Before committing, buyers should understand what is known about the vehicle and what is not, and request additional information where it matters most.',
          ar: 'تؤثر حالة المركبة المستعملة على قيمتها وموثوقيتها وأدائها في سوقك. قبل الالتزام، يجب أن يفهم المشترون ما هو معروف عن المركبة وما هو غير معروف، وأن يطلبوا معلومات إضافية حيثما يهم الأمر أكثر.',
          ru: 'Состояние подержанного автомобиля влияет на его стоимость, надёжность и то, как он будет работать на вашем рынке. Прежде чем брать обязательства, покупателю важно понимать, что известно об автомобиле, а что нет, и запрашивать дополнительную информацию там, где это важнее всего.',
          es: 'El estado de un vehículo usado afecta a su valor, su fiabilidad y su rendimiento en su mercado. Antes de comprometerse, el comprador debe entender qué se sabe del vehículo y qué no, y pedir información adicional donde más importe.',
        },
      ],
    },
    {
      heading: {
        en: 'What to check on any vehicle',
        ar: 'ما يجب التحقق منه في أي مركبة',
        ru: 'Что проверять в любом автомобиле',
        es: 'Qué comprobar en cualquier vehículo',
      },
      paragraphs: [
        {
          en: 'A standard assessment covers the exterior (paint, panels, signs of repair), interior (wear, function), engine, transmission, chassis, electrical system, tires, and mileage. Each area can reveal condition or inconsistency with the stated mileage.',
          ar: 'يغطي التقييم القياسي الخارجي (الطلاء والألواح وعلامات الإصلاح) والداخلي (التآكل والوظائف) والمحرك وناقل الحركة والهيكل والنظام الكهربائي والإطارات والمسافة المقطوعة. يمكن لكل منطقة أن تكشف الحالة أو أي تعارض مع المسافة المقطوعة المعلنة.',
          ru: 'Стандартная оценка охватывает кузов (краска, панели, следы ремонта), салон (износ, работа), двигатель, трансмиссию, шасси, электрику, шины и пробег. Каждая зона может выявить состояние или несоответствие заявленному пробегу.',
          es: 'Una evaluación estándar cubre el exterior (pintura, paneles, señales de reparación), el interior (desgaste, funcionamiento), el motor, la transmisión, el chasis, el sistema eléctrico, los neumáticos y el kilometraje. Cada área puede revelar el estado o incoherencias con el kilometraje declarado.',
        },
      ],
    },
    {
      heading: {
        en: 'Accident history and maintenance records',
        ar: 'سجل الحوادث وسجلات الصيانة',
        ru: 'История ДТП и записи о техобслуживании',
        es: 'Historial de accidentes y registros de mantenimiento',
      },
      paragraphs: [
        {
          en: 'Accident history and maintenance records are important but are not always available for every vehicle. We present what we hold and mark it with a confidence level. Where a record is not available, we say so rather than assuming.',
          ar: 'سجل الحوادث وسجلات الصيانة مهمان لكنهما لا يتوفران دائماً لكل مركبة. نعرض ما نحتفظ به ونعلّمه بمستوى ثقة. عندما لا يتوفر سجل، نقول ذلك بدلاً من الافتراض.',
          ru: 'История ДТП и записи о техобслуживании важны, но не всегда доступны для каждого автомобиля. Мы показываем то, что имеем, и помечаем уровень достоверности. Если записи нет, мы говорим об этом, а не предполагаем.',
          es: 'El historial de accidentes y los registros de mantenimiento son importantes, pero no siempre están disponibles para todos los vehículos. Presentamos lo que tenemos y lo marcamos con un nivel de confianza. Cuando no hay registro, lo decimos en lugar de suponer.',
        },
      ],
      table: {
        headers: [
          { en: 'Signal', ar: 'الإشارة', ru: 'Признак', es: 'Señal' },
          { en: 'What to check', ar: 'ما يجب التحقق منه', ru: 'Что проверять', es: 'Qué comprobar' },
          { en: 'Warning signs', ar: 'علامات التحذير', ru: 'Тревожные сигналы', es: 'Señales de alarma' },
        ],
        rows: [
          [
            { en: 'Accident record', ar: 'سجل الحوادث', ru: 'Запись о ДТП', es: 'Registro de accidentes' },
            { en: 'Review any collision or repair history the source provides, and its confidence level.', ar: 'راجع أي سجل تصادم أو إصلاح يقدمه المصدر، ومستوى ثقته.', ru: 'Изучите историю столкновений или ремонтов, которую даёт источник, и её уровень достоверности.', es: 'Revise el historial de colisiones o reparaciones que facilite la fuente y su nivel de confianza.' },
            { en: 'A record that is missing entirely, or one that is marked seller-supplied without independent checking.', ar: 'سجل مفقود كليًا، أو معلَّم بأنه مقدَّم من البائع دون تحقق مستقل.', ru: 'Полностью отсутствующая запись или помеченная как предоставленная продавцом без независимой проверки.', es: 'Un registro totalmente ausente, o marcado como facilitado por el vendedor sin comprobación independiente.' },
          ],
          [
            { en: 'Structural signs', ar: 'علامات هيكلية', ru: 'Структурные признаки', es: 'Señales estructurales' },
            { en: 'Look for repaint, mismatched panel gaps, or frame/chassis misalignment.', ar: 'ابحث عن إعادة طلاء أو فجوات ألواح غير متطابقة أو اختلال في الهيكل/الشاسيه.', ru: 'Ищите перекраску, несовпадающие зазоры панелей или нарушение геометрии рамы/шасси.', es: 'Busque repintado, holguras de paneles dispares o desalineación del chasis/bastidor.' },
            { en: 'Signs of major collision repair that contradict a "clean" record.', ar: 'علامات إصلاح تصادم كبير تناقض سجلًا "نظيفًا".', ru: 'Признаки крупного кузовного ремонта, противоречащие «чистой» истории.', es: 'Señales de reparación de una colisión grave que contradicen un historial «limpio».' },
          ],
          [
            { en: 'Maintenance records', ar: 'سجلات الصيانة', ru: 'Записи о ТО', es: 'Registros de mantenimiento' },
            { en: 'Check for a regular, consistent service history that matches the mileage.', ar: 'تحقق من وجود سجل خدمة منتظم ومتسق يطابق المسافة المقطوعة.', ru: 'Проверьте регулярную и последовательную историю обслуживания, соответствующую пробегу.', es: 'Compruebe un historial de servicio regular y coherente que coincida con el kilometraje.' },
            { en: 'Missing service history with no explanation, or records that stop abruptly.', ar: 'سجل خدمة مفقود دون تفسير، أو سجلات تتوقف فجأة.', ru: 'Отсутствующая история обслуживания без объяснения или записи, резко обрывающиеся.', es: 'Historial de servicio ausente sin explicación, o registros que se cortan de repente.' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'EV-specific checks: battery health, capacity and charging',
        ar: 'فحوصات المركبات الكهربائية: صحة البطارية وسعتها والشحن',
        ru: 'Проверки для электромобилей: здоровье батареи, ёмкость и зарядка',
        es: 'Comprobaciones específicas de VE: salud de la batería, capacidad y carga',
      },
      paragraphs: [
        {
          en: 'For electric vehicles, the battery is the most important component to assess. Key checks are battery condition, battery health (state of health / degradation), battery capacity, and the charging system. A battery diagnostic report provides the clearest picture where one is available.',
          ar: 'بالنسبة للمركبات الكهربائية، البطارية هي أهم مكوّن يجب تقييمه. الفحوصات الأساسية هي حالة البطارية وصحتها (حالة الصحة / التدهور) وسعتها ونظام الشحن. يقدم تقرير تشخيص البطارية الصورة الأوضح عندما يتوفر.',
          ru: 'Для электромобилей батарея — самый важный компонент для оценки. Ключевые проверки: состояние батареи, её здоровье (степень деградации), ёмкость и система зарядки. Диагностический отчёт по батарее даёт самую ясную картину, когда он доступен.',
          es: 'En los vehículos eléctricos, la batería es el componente más importante a evaluar. Las comprobaciones clave son el estado de la batería, su salud (estado de salud / degradación), su capacidad y el sistema de carga. Un informe de diagnóstico de batería da la imagen más clara cuando está disponible.',
        },
      ],
    },
    {
      heading: {
        en: 'Inspection reports and confidence levels',
        ar: 'تقارير الفحص ومستويات الثقة',
        ru: 'Отчёты о проверке и уровни достоверности',
        es: 'Informes de inspección y niveles de confianza',
      },
      paragraphs: [
        {
          en: 'We present the inspection information we hold for a vehicle, marked as verified, provided, seller-supplied, source-backed or not available. Not every vehicle has a full inspection report, and inspection availability depends on the vehicle and buyer requirements.',
          ar: 'نعرض معلومات الفحص التي نحتفظ بها للمركبة، معلَّمة كموثَّق أو مقدَّم أو مقدَّم من البائع أو مدعوم بمصدر أو غير متوفر. ليست كل مركبة لديها تقرير فحص كامل، ويعتمد توفر الفحص على المركبة ومتطلبات المشتري.',
          ru: 'Мы показываем имеющуюся информацию о проверке автомобиля с пометкой: подтверждено, предоставлено, предоставлено продавцом, подтверждено источником или недоступно. Не у каждого автомобиля есть полный отчёт, и доступность проверки зависит от автомобиля и требований покупателя.',
          es: 'Presentamos la información de inspección que tenemos de un vehículo, marcada como verificada, facilitada, facilitada por el vendedor, respaldada por una fuente o no disponible. No todos los vehículos tienen un informe completo, y la disponibilidad depende del vehículo y los requisitos del comprador.',
        },
      ],
    },
    {
      heading: {
        en: 'Third-party inspection options',
        ar: 'خيارات الفحص من طرف ثالث',
        ru: 'Варианты сторонней проверки',
        es: 'Opciones de inspección de terceros',
      },
      paragraphs: [
        {
          en: 'In some cases, a third-party inspection can provide additional certainty before purchase. Whether this is available depends on the vehicle and its location. Ask us what is possible for the vehicle you are considering.',
          ar: 'في بعض الحالات، يمكن أن يوفر الفحص من طرف ثالث يقيناً إضافياً قبل الشراء. يعتمد توفر ذلك على المركبة وموقعها. اسألنا عما هو ممكن للمركبة التي تفكر فيها.',
          ru: 'В некоторых случаях сторонняя проверка может дать дополнительную уверенность перед покупкой. Её доступность зависит от автомобиля и его расположения. Спросите нас, что возможно для рассматриваемого вами автомобиля.',
          es: 'En algunos casos, una inspección de terceros puede aportar certeza adicional antes de la compra. Su disponibilidad depende del vehículo y su ubicación. Pregúntenos qué es posible para el vehículo que está considerando.',
        },
      ],
    },
    {
      heading: {
        en: 'A detailed exterior checklist',
        ar: 'قائمة فحص خارجية مفصلة',
        ru: 'Подробный чек-лист по кузову',
        es: 'Una lista detallada del exterior',
      },
      paragraphs: [
        {
          en: 'Walk the exterior systematically: paint condition and consistency, panel gaps, signs of repainting or repair, glass, lights, and the condition of the tires. Look for rust, dents, and mismatched panels, which can indicate prior damage or repair.',
          ar: 'افحص الهيكل الخارجي بشكل منهجي: حالة الطلاء واتساقه، وفجوات الألواح، وعلامات إعادة الطلاء أو الإصلاح، والزجاج، والأضواء، وحالة الإطارات. ابحث عن الصدأ والانبعاجات والألواح غير المتطابقة، والتي قد تشير إلى تلف أو إصلاح سابق.',
          ru: 'Пройдитесь по кузову системно: состояние и однородность краски, зазоры панелей, следы перекраски или ремонта, стёкла, свет и состояние шин. Ищите ржавчину, вмятины и несоответствующие панели — это может указывать на прежний ущерб или ремонт.',
          es: 'Recorra el exterior de forma sistemática: estado y uniformidad de la pintura, holguras de los paneles, señales de repintado o reparación, lunas, luces y estado de los neumáticos. Busque óxido, abolladuras y paneles que no coincidan, que pueden indicar daños o reparaciones previas.',
        },
      ],
    },
    {
      heading: {
        en: 'Interior and mechanical checks',
        ar: 'فحوصات المقصورة والميكانيكية',
        ru: 'Проверки салона и механики',
        es: 'Comprobaciones del interior y de la mecánica',
      },
      paragraphs: [
        {
          en: 'Inside, check wear against the stated mileage, the function of controls and electronics, and for any signs of water ingress or unusual smells. Mechanically, look at the engine or drivetrain, transmission, chassis and electrical system for leaks, noise or inconsistency.',
          ar: 'في الداخل، تحقق من التآكل مقارنة بالمسافة المقطوعة المعلنة، ووظائف أدوات التحكم والإلكترونيات، وأي علامات تسرب مياه أو روائح غير معتادة. ومن الناحية الميكانيكية، افحص المحرك أو نظام الدفع وناقل الحركة والهيكل والنظام الكهربائي بحثًا عن تسربات أو ضوضاء أو تعارض.',
          ru: 'Внутри проверьте износ в сравнении с заявленным пробегом, работу органов управления и электроники, а также признаки попадания воды или необычные запахи. Механически осмотрите двигатель или силовую установку, трансмиссию, шасси и электрику на предмет утечек, шума или несоответствий.',
          es: 'En el interior, compruebe el desgaste en relación con el kilometraje declarado, el funcionamiento de mandos y electrónica, y cualquier señal de entrada de agua u olores inusuales. Mecánicamente, revise el motor o el tren motriz, la transmisión, el chasis y el sistema eléctrico en busca de fugas, ruidos o incoherencias.',
        },
        {
          en: 'Where a vehicle cannot be examined in person, ask for the specific photos or videos you need, or a third-party inspection if available for that vehicle.',
          ar: 'عندما يتعذر فحص المركبة شخصيًا، اطلب الصور أو مقاطع الفيديو المحددة التي تحتاجها، أو فحصًا من طرف ثالث إذا كان متاحًا لتلك المركبة.',
          ru: 'Если осмотреть автомобиль лично невозможно, запросите нужные фото или видео либо стороннюю проверку, если она доступна для этого автомобиля.',
          es: 'Cuando el vehículo no pueda examinarse en persona, pida las fotos o vídeos concretos que necesite, o una inspección de terceros si está disponible para ese vehículo.',
        },
      ],
    },
    {
      heading: {
        en: 'How to verify mileage',
        ar: 'كيف تتحقق من المسافة المقطوعة',
        ru: 'Как проверить пробег',
        es: 'Cómo verificar el kilometraje',
      },
      paragraphs: [
        {
          en: 'Mileage is one of the most important figures, and it can be checked against several signals: the odometer, service records, wear on the interior (pedals, seats, steering wheel), tire wear, and any diagnostic readout. Inconsistency between these signals can be a warning sign.',
          ar: 'المسافة المقطوعة من أهم الأرقام، ويمكن التحقق منها عبر عدة مؤشرات: عداد المسافة، وسجلات الصيانة، وتآكل المقصورة (الدواسات والمقاعد وعجلة القيادة)، وتآكل الإطارات، وأي قراءة تشخيصية. إن التعارض بين هذه المؤشرات قد يكون علامة تحذيرية.',
          ru: 'Пробег — одна из важнейших цифр, и его можно проверить по нескольким признакам: одометр, записи о ТО, износ салона (педали, сиденья, руль), износ шин и показания диагностики. Несоответствие между этими признаками может быть тревожным сигналом.',
          es: 'El kilometraje es una de las cifras más importantes y puede verificarse mediante varias señales: el cuentakilómetros, los registros de servicio, el desgaste del interior (pedales, asientos, volante), el desgaste de los neumáticos y cualquier lectura de diagnóstico. La incoherencia entre estas señales puede ser una advertencia.',
        },
      ],
      table: {
        headers: [
          { en: 'Signal', ar: 'الإشارة', ru: 'Признак', es: 'Señal' },
          { en: 'What to check', ar: 'ما يجب التحقق منه', ru: 'Что проверять', es: 'Qué comprobar' },
          { en: 'Warning signs', ar: 'علامات التحذير', ru: 'Тревожные сигналы', es: 'Señales de alarma' },
        ],
        rows: [
          [
            { en: 'Odometer reading', ar: 'قراءة عداد المسافة', ru: 'Показания одометра', es: 'Lectura del cuentakilómetros' },
            { en: 'Compare the odometer against any diagnostic readout and documents.', ar: 'قارن عداد المسافة مع أي قراءة تشخيصية والوثائق.', ru: 'Сверьте одометр с показаниями диагностики и документами.', es: 'Compare el cuentakilómetros con cualquier lectura de diagnóstico y los documentos.' },
            { en: 'A reading that drops between records, or a replaced/loose cluster suggesting tampering.', ar: 'قراءة تنخفض بين السجلات، أو لوحة عدادات مستبدلة/مرتخية توحي بالعبث.', ru: 'Показание, уменьшающееся между записями, или заменённая/незакреплённая панель, указывающая на вмешательство.', es: 'Una lectura que baja entre registros, o un cuadro sustituido/suelto que sugiere manipulación.' },
          ],
          [
            { en: 'Service records', ar: 'سجلات الخدمة', ru: 'Записи о ТО', es: 'Registros de servicio' },
            { en: 'Check whether recorded mileage increases consistently over time.', ar: 'تحقق مما إذا كانت المسافة المسجلة تزيد باستمرار مع الوقت.', ru: 'Проверьте, растёт ли зафиксированный пробег последовательно со временем.', es: 'Compruebe si el kilometraje registrado aumenta de forma constante con el tiempo.' },
            { en: 'Long gaps in records, or mileage that jumps backwards between services.', ar: 'فجوات طويلة في السجلات، أو مسافة تقفز للخلف بين الخدمات.', ru: 'Длительные пробелы в записях или пробег, скачущий назад между ТО.', es: 'Largos vacíos en los registros, o kilometraje que salta hacia atrás entre servicios.' },
          ],
          [
            { en: 'Interior wear', ar: 'تآكل المقصورة', ru: 'Износ салона', es: 'Desgaste interior' },
            { en: 'Match pedal, seat and steering-wheel wear to the stated mileage.', ar: 'طابق تآكل الدواسات والمقاعد وعجلة القيادة مع المسافة المعلنة.', ru: 'Сопоставьте износ педалей, сидений и руля с заявленным пробегом.', es: 'Coteje el desgaste de pedales, asientos y volante con el kilometraje declarado.' },
            { en: 'Low stated mileage with heavy interior wear.', ar: 'مسافة معلنة منخفضة مع تآكل داخلي شديد.', ru: 'Низкий заявленный пробег при сильном износе салона.', es: 'Kilometraje declarado bajo con un desgaste interior intenso.' },
          ],
          [
            { en: 'Tire wear', ar: 'تآكل الإطارات', ru: 'Износ шин', es: 'Desgaste de neumáticos' },
            { en: 'Compare tire tread and manufacturing dates with the mileage and age.', ar: 'قارن مداس الإطارات وتواريخ تصنيعها مع المسافة والعمر.', ru: 'Сравните глубину протектора и даты производства шин с пробегом и возрастом.', es: 'Compare la banda de rodadura y las fechas de fabricación de los neumáticos con el kilometraje y la antigüedad.' },
            { en: 'Worn or mismatched tires that are inconsistent with the stated mileage.', ar: 'إطارات متآكلة أو غير متطابقة لا تتفق مع المسافة المعلنة.', ru: 'Изношенные или несовпадающие шины, не соответствующие заявленному пробегу.', es: 'Neumáticos desgastados o dispares incoherentes con el kilometraje declarado.' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'Reading the confidence levels',
        ar: 'قراءة مستويات الثقة',
        ru: 'Чтение уровней достоверности',
        es: 'Leer los niveles de confianza',
      },
      paragraphs: [
        {
          en: 'Each detail on a listing carries one of six verification levels. Verified means confirmed against a source we hold; provided means supplied by the source without independent checking; seller-supplied and source-backed describe where the value comes from; not available means we do not hold it; and not independently verified means we show the detail but have not yet checked it.',
          ar: 'يحمل كل تفصيل في الإدراج واحداً من ستة مستويات تحقق. الموثَّق يعني مؤكداً من مصدر نحتفظ به؛ والمقدَّم يعني مقدم من المصدر دون تحقق مستقل؛ والمقدَّم من البائع والمدعوم بمصدر يصفان مصدر القيمة؛ وغير المتوفر يعني أننا لا نحتفظ به؛ وغير المتحقق منه بشكل مستقل يعني أننا نعرض التفصيل لكننا لم نتحقق منه بعد.',
          ru: 'Каждая деталь в объявлении имеет один из шести уровней проверки. Подтверждено — сверено с источником, который у нас есть; предоставлено — поступило от источника без независимой проверки; предоставлено продавцом и подтверждено источником описывают происхождение значения; недоступно — у нас нет этой детали; не подтверждено независимо — мы показываем деталь, но ещё не проверили её.',
          es: 'Cada detalle de un anuncio lleva uno de seis niveles de verificación. Verificado significa confirmado con una fuente que tenemos; facilitado significa suministrado por la fuente sin comprobación independiente; facilitado por el vendedor y respaldado por fuente describen de dónde procede el valor; no disponible significa que no lo tenemos; y no verificado de forma independiente significa que mostramos el detalle pero aún no lo hemos comprobado.',
        },
        {
          en: 'Use these levels to decide where you need more certainty, and ask us for the specific detail you care about most.',
          ar: 'استخدم هذه المستويات لتحديد أين تحتاج مزيدًا من اليقين، واطلب منا التفصيل المحدد الذي يهمك أكثر.',
          ru: 'Используйте эти уровни, чтобы понять, где вам нужна большая уверенность, и запросите у нас конкретную деталь, которая важна для вас больше всего.',
          es: 'Use estos niveles para decidir dónde necesita más certeza y pídanos el detalle concreto que más le importe.',
        },
      ],
    },
    {
      heading: {
        en: 'Preparing for a remote inspection',
        ar: 'الاستعداد لفحص عن بُعد',
        ru: 'Подготовка к удалённой проверке',
        es: 'Prepararse para una inspección remota',
      },
      paragraphs: [
        {
          en: 'Most buyers inspect a vehicle remotely. Prepare a short list of what you need — specific angles, the odometer, the VIN plate, the battery or engine bay, and any area you are concerned about — and ask us to provide those.',
          ar: 'يفحص معظم المشترين المركبة عن بُعد. جهّز قائمة قصيرة بما تحتاجه — زوايا محددة، وعداد المسافة، ولوحة رقم الهيكل، وحجرة البطارية أو المحرك، وأي منطقة تثير قلقك — واطلب منا توفيرها.',
          ru: 'Большинство покупателей проверяют автомобиль удалённо. Подготовьте короткий список того, что вам нужно, — конкретные ракурсы, одометр, табличка с VIN, моторный отсек или батарея и любые зоны, которые вас беспокоят, — и попросите нас это предоставить.',
          es: 'La mayoría de los compradores inspeccionan el vehículo de forma remota. Prepare una lista breve de lo que necesita — ángulos concretos, el cuentakilómetros, la placa del VIN, el vano motor o de la batería y cualquier zona que le preocupe — y pídanos que se la facilitemos.',
        },
      ],
    },
    {
      heading: {
        en: 'What a clean report does and doesn\'t mean',
        ar: 'ماذا يعني التقرير النظيف وما لا يعنيه',
        ru: 'Что означает и не означает чистый отчёт',
        es: 'Qué significa y qué no un informe limpio',
      },
      paragraphs: [
        {
          en: 'A clean inspection report means no issues were found in the areas examined at the time. It does not mean the vehicle is perfect forever, nor that hidden faults cannot exist. Treat it as a snapshot of the information available, not a lifetime guarantee.',
          ar: 'التقرير النظيف يعني عدم العثور على مشكلات في المناطق المفحوصة في وقت الفحص. ولا يعني أن المركبة مثالية إلى الأبد، ولا أن العيوب الخفية مستحيلة. تعامل معه كصورة للحظة المعلومات المتوفرة، وليس ضمانًا مدى الحياة.',
          ru: 'Чистый отчёт означает, что в проверенных зонах на момент проверки проблем не найдено. Это не значит, что автомобиль идеален навсегда и что скрытых дефектов быть не может. Относитесь к нему как к снимку доступной информации, а не к пожизненной гарантии.',
          es: 'Un informe limpio significa que no se encontraron problemas en las zonas examinadas en ese momento. No significa que el vehículo sea perfecto para siempre ni que no puedan existir fallos ocultos. Trátelo como una instantánea de la información disponible, no como una garantía de por vida.',
        },
      ],
    },
    {
      heading: {
        en: 'Red flags to watch for',
        ar: 'علامات تحذيرية يجب الانتباه لها',
        ru: 'Тревожные сигналы',
        es: 'Señales de alarma a vigilar',
      },
      paragraphs: [
        {
          en: 'Watch for inconsistency between the stated mileage and interior or tire wear, mismatched panel gaps or paint, a VIN that does not match the documents, or pressure to commit before details are confirmed. Any of these is a reason to ask more questions.',
          ar: 'انتبه إلى التعارض بين المسافة المقطوعة المعلنة وتآكل المقصورة أو الإطارات، أو فجوات الألواح أو الطلاء غير المتطابق، أو رقم هيكل لا يطابق الوثائق، أو الضغط للالتزام قبل تأكيد التفاصيل. أي من هذه سبب لطرح مزيد من الأسئلة.',
          ru: 'Обращайте внимание на несоответствие заявленного пробега износу салона или шин, на несовпадающие зазоры панелей или краску, на VIN, не совпадающий с документами, или на давление заключить сделку до подтверждения деталей. Любое из этого — повод задать больше вопросов.',
          es: 'Vigile las incoherencias entre el kilometraje declarado y el desgaste del interior o de los neumáticos, holguras o pintura de paneles que no coinciden, un VIN que no coincide con los documentos, o la presión para comprometerse antes de confirmar los detalles. Cualquiera de estas señales es motivo para hacer más preguntas.',
        },
      ],
    },
    {
      heading: {
        en: 'Comparing inspection options',
        ar: 'مقارنة خيارات الفحص',
        ru: 'Сравнение вариантов проверки',
        es: 'Comparar opciones de inspección',
      },
      paragraphs: [
        {
          en: 'You may have several options: the information we already hold, specific photos or videos on request, a battery or mechanical diagnostic report, or a third-party inspection where available. Balance the cost and time of each against the value of the vehicle and your level of concern.',
          ar: 'قد تكون لديك عدة خيارات: المعلومات التي نحتفظ بها بالفعل، أو صور أو مقاطع فيديو محددة عند الطلب، أو تقرير تشخيص للبطارية أو الميكانيكا، أو فحص من طرف ثالث حيثما توفر. وازن بين تكلفة ووقت كل خيار وقيمة المركبة ومستوى قلقك.',
          ru: 'У вас может быть несколько вариантов: уже имеющаяся информация, конкретные фото или видео по запросу, диагностический отчёт по батарее или механике либо сторонняя проверка, где она доступна. Соотнесите стоимость и время каждого варианта со стоимостью автомобиля и вашей степенью беспокойства.',
          es: 'Puede tener varias opciones: la información que ya tenemos, fotos o vídeos concretos bajo pedido, un informe de diagnóstico de batería o mecánico, o una inspección de terceros cuando esté disponible. Equilibre el coste y el tiempo de cada opción con el valor del vehículo y su nivel de preocupación.',
        },
      ],
    },
    {
      heading: {
        en: 'Inspection and negotiation',
        ar: 'الفحص والتفاوض',
        ru: 'Проверка и переговоры',
        es: 'Inspección y negociación',
      },
      paragraphs: [
        {
          en: 'Inspection findings give you a factual basis for discussion. If the report reveals issues, you can ask questions, request a re-check, or negotiate the price. A documented issue is far easier to address than a surprise discovered after the vehicle arrives.',
          ar: 'تمنحك نتائج الفحص أساسًا واقعيًا للنقاش. إذا كشف التقرير مشكلات، يمكنك طرح الأسئلة أو طلب إعادة فحص أو التفاوض على السعر. المشكلة الموثقة أسهل بكثير في معالجتها من مفاجأة تكتشفها بعد وصول المركبة.',
          ru: 'Результаты проверки дают фактическую основу для обсуждения. Если отчёт выявил проблемы, вы можете задать вопросы, запросить повторную проверку или договориться о цене. Документированная проблема решается гораздо проще, чем сюрприз после прибытия автомобиля.',
          es: 'Los resultados de la inspección le dan una base objetiva para negociar. Si el informe revela problemas, puede hacer preguntas, pedir una revisión o negociar el precio. Un problema documentado es mucho más fácil de tratar que una sorpresa tras la llegada del vehículo.',
        },
      ],
    },
    {
      heading: {
        en: 'Documenting condition at delivery',
        ar: 'توثيق الحالة عند التسليم',
        ru: 'Фиксация состояния при доставке',
        es: 'Documentar el estado en la entrega',
      },
      paragraphs: [
        {
          en: 'When the vehicle reaches the destination port, note its condition against what was agreed — photos help. This is your record for the release, any insurance claim and your own resale. If there is a discrepancy, document it immediately and tell us.',
          ar: 'عند وصول المركبة إلى ميناء الوجهة، سجل حالتها مقابل ما تم الاتفاق عليه — والصور مفيدة. هذا هو سجلك للإفراج وأي مطالبة تأمين وإعادة البيع لديك. إذا كان هناك تعارض، وثّقه فورًا وأخبرنا.',
          ru: 'Когда автомобиль прибывает в порт назначения, зафиксируйте его состояние относительно согласованного — помогут фото. Это ваш документ для выпуска, страхового случая и собственной перепродажи. При расхождении зафиксируйте его сразу и сообщите нам.',
          es: 'Cuando el vehículo llegue al puerto de destino, registre su estado frente a lo acordado — las fotos ayudan. Es su registro para la liberación, cualquier reclamación de seguro y su propia reventa. Si hay una discrepancia, documéntela de inmediato y avísenos.',
        },
      ],
    },
    {
      heading: {
        en: 'When a re-inspection is worth it',
        ar: 'متى تستحق إعادة الفحص',
        ru: 'Когда стоит повторная проверка',
        es: 'Cuándo merece la pena una reinspección',
      },
      paragraphs: [
        {
          en: 'A re-inspection or deeper diagnostic is worth considering for high-value vehicles, for EVs where battery health is critical, or when the initial information is incomplete or inconsistent. It adds time and cost, so weigh it against the vehicle\'s value and your risk tolerance.',
          ar: 'تستحق إعادة الفحص أو التشخيص الأعمق النظر فيها للمركبات عالية القيمة، أو للمركبات الكهربائية حيث تكون صحة البطارية حرجة، أو عندما تكون المعلومات الأولية ناقصة أو متعارضة. إنها تضيف وقتًا وتكلفة، لذا وازنها مقابل قيمة المركبة وتحمل المخاطر لديك.',
          ru: 'Повторная или более глубокая проверка оправдана для дорогих автомобилей, для электромобилей с критичной батареей или когда исходная информация неполна или противоречива. Она добавляет время и стоимость, поэтому соотнесите её со стоимостью автомобиля и вашей готовностью к риску.',
          es: 'Una reinspección o un diagnóstico más profundo merece la pena en vehículos de alto valor, en VE donde la salud de la batería es crítica, o cuando la información inicial es incompleta o incoherente. Añade tiempo y coste, así que sopéselo con el valor del vehículo y su tolerancia al riesgo.',
        },
      ],
    },
    {
      heading: {
        en: 'What inspection cannot guarantee',
        ar: 'ما لا يمكن أن يضمنه الفحص',
        ru: 'Что не может гарантировать проверка',
        es: 'Lo que la inspección no puede garantizar',
      },
      paragraphs: [
        {
          en: 'Inspection reduces uncertainty but cannot eliminate it. Hidden faults can exist, and a clean report reflects the information available at the time. We encourage buyers to review all information carefully and ask before committing.',
          ar: 'يقلل الفحص من عدم اليقين لكنه لا يلغيه. يمكن أن توجد عيوب خفية، ويعكس التقرير النظيف المعلومات المتوفرة في وقتها. نشجع المشترين على مراجعة كل المعلومات بعناية والسؤال قبل الالتزام.',
          ru: 'Проверка снижает неопределённость, но не устраняет её. Скрытые дефекты возможны, а чистый отчёт отражает информацию, доступную на момент проверки. Мы рекомендуем покупателям тщательно изучить всю информацию и задавать вопросы до принятия обязательств.',
          es: 'La inspección reduce la incertidumbre pero no la elimina. Puede haber fallos ocultos, y un informe limpio refleja la información disponible en ese momento. Animamos a los compradores a revisar toda la información con cuidado y a preguntar antes de comprometerse.',
        },
      ],
    },
    {
      heading: {
        en: 'Decision framework — accept, clarify or reject',
        ar: 'إطار القرار — القبول أو التوضيح أو الرفض',
        ru: 'Структура решения — принять, уточнить или отказаться',
        es: 'Marco de decisión — aceptar, aclarar o rechazar',
      },
      paragraphs: [
        {
          en: 'Every inspection finding leads to one of three outcomes: accept and proceed, ask for more information or a price adjustment, or reject. Grade the findings against the vehicle\'s value and your risk tolerance, and treat an unresolved warning sign as a reason to pause, not to overlook it.',
          ar: 'كل نتيجة فحص تؤدي إلى واحدة من ثلاث نتائج: القبول والمتابعة، أو طلب مزيد من المعلومات أو تعديل السعر، أو الرفض. قيّم النتائج مقابل قيمة المركبة وتحمل المخاطر لديك، وعامل علامة التحذير غير المحلولة كسبب للتوقف، لا لتجاهلها.',
          ru: 'Любой результат проверки ведёт к одному из трёх исходов: принять и продолжить, запросить больше информации или корректировку цены либо отказаться. Оцените результаты относительно стоимости автомобиля и вашей готовности к риску и относитесь к неразрешённому тревожному сигналу как к поводу остановиться, а не пропустить его.',
          es: 'Cada resultado de inspección lleva a uno de tres desenlaces: aceptar y continuar, pedir más información o un ajuste de precio, o rechazar. Valore los hallazgos frente al valor del vehículo y su tolerancia al riesgo, y trate una señal de alarma no resuelta como motivo para detenerse, no para pasarla por alto.',
        },
      ],
      table: {
        headers: [
          { en: 'Factor', ar: 'العامل', ru: 'Фактор', es: 'Factor' },
          { en: 'What to check', ar: 'ما يجب التحقق منه', ru: 'Что проверять', es: 'Qué comprobar' },
          { en: 'Warning signs', ar: 'علامات التحذير', ru: 'Тревожные сигналы', es: 'Señales de alarma' },
        ],
        rows: [
          [
            { en: 'Vehicle identity', ar: 'هوية المركبة', ru: 'Идентичность автомобиля', es: 'Identidad del vehículo' },
            { en: 'Confirm the VIN, make, model and year against the documents.', ar: 'أكد رقم الهيكل والصنع والطراز والسنة مقابل الوثائق.', ru: 'Сверьте VIN, марку, модель и год с документами.', es: 'Confirme el VIN, la marca, el modelo y el año con los documentos.' },
            { en: 'A VIN or identity that does not match the documents.', ar: 'رقم هيكل أو هوية لا يطابقان الوثائق.', ru: 'VIN или идентичность, не совпадающие с документами.', es: 'Un VIN o identidad que no coincide con los documentos.' },
          ],
          [
            { en: 'Mileage', ar: 'المسافة المقطوعة', ru: 'Пробег', es: 'Kilometraje' },
            { en: 'Cross-check the odometer, service records, interior and tire wear.', ar: 'قارن عداد المسافة وسجلات الخدمة وتآكل المقصورة والإطارات.', ru: 'Сопоставьте одометр, записи о ТО, износ салона и шин.', es: 'Cruce el cuentakilómetros, los registros de servicio y el desgaste interior y de neumáticos.' },
            { en: 'Inconsistency between these signals suggesting odometer rollback.', ar: 'تعارض بين هذه الإشارات يوحي بالتلاعب بعداد المسافة.', ru: 'Несоответствие между этими признаками, указывающее на скрученный пробег.', es: 'Incoherencia entre estas señales que sugiere manipulación del cuentakilómetros.' },
          ],
          [
            { en: 'Structural condition', ar: 'الحالة الهيكلية', ru: 'Состояние конструкции', es: 'Estado estructural' },
            { en: 'Look for repaint, panel gaps, chassis misalignment and repair signs.', ar: 'ابحث عن إعادة طلاء وفجوات ألواح واختلال هيكلي وعلامات إصلاح.', ru: 'Ищите перекраску, зазоры панелей, нарушение геометрии шасси и следы ремонта.', es: 'Busque repintado, holguras de paneles, desalineación del chasis y señales de reparación.' },
            { en: 'Signs of major collision repair that a "clean" record does not explain.', ar: 'علامات إصلاح تصادم كبير لا يفسرها سجل "نظيف".', ru: 'Признаки крупного кузовного ремонта, которые «чистая» история не объясняет.', es: 'Señales de reparación de colisión grave que un historial «limpio» no explica.' },
          ],
          [
            { en: 'EV battery (if applicable)', ar: 'بطارية المركبة الكهربائية (إن وجدت)', ru: 'Батарея электромобиля (если есть)', es: 'Batería del VE (si procede)' },
            { en: 'Review state of health, capacity and any diagnostic report.', ar: 'راجع حالة الصحة والسعة وأي تقرير تشخيصي.', ru: 'Изучите состояние здоровья, ёмкость и диагностический отчёт.', es: 'Revise el estado de salud, la capacidad y cualquier informe de diagnóstico.' },
            { en: 'No diagnostic report available for a battery you cannot assess.', ar: 'لا يوجد تقرير تشخيصي لبطارية لا يمكنك تقييمها.', ru: 'Отсутствует диагностический отчёт по батарее, которую вы не можете оценить.', es: 'Sin informe de diagnóstico para una batería que no puede evaluar.' },
          ],
          [
            { en: 'Records', ar: 'السجلات', ru: 'Записи', es: 'Registros' },
            { en: 'Check accident history and maintenance records and their confidence level.', ar: 'تحقق من سجل الحوادث وسجلات الصيانة ومستوى ثقتهما.', ru: 'Проверьте историю ДТП и записи о ТО и их уровень достоверности.', es: 'Compruebe el historial de accidentes y mantenimiento y su nivel de confianza.' },
            { en: 'Missing or inconsistent records for a detail that matters to you.', ar: 'سجلات ناقصة أو متعارضة لتفصيل يهمك.', ru: 'Отсутствующие или противоречивые записи по важной для вас детали.', es: 'Registros ausentes o incoherentes sobre un detalle que le importa.' },
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
          en: 'The depth of inspection varies by case. A high-value vehicle, an EV where battery health is critical, or an incomplete listing justify a deeper diagnostic or third-party inspection; a cheap, common vehicle with a documented history may not. The decision principle is the same — match the depth of checking to the value at stake and the uncertainty in the information.',
          ar: 'يختلف عمق الفحص حسب الحالة. فالمركبة عالية القيمة أو الكهربائية التي تكون صحة بطاريتها حرجة أو الإعلان الناقص تبرر تشخيصًا أعمق أو فحصًا من طرف ثالث؛ بينما قد لا تحتاج المركبة الرخيصة الشائعة ذات السجل الموثق إلى ذلك. مبدأ القرار واحد — طابق عمق الفحص مع القيمة المعرضة للخطر وعدم اليقين في المعلومات.',
          ru: 'Глубина проверки зависит от случая. Дорогой автомобиль, электромобиль с критичной батареей или неполное объявление оправдывают более глубокую диагностику или стороннюю проверку; дешёвый распространённый автомобиль с документированной историей — возможно, нет. Принцип решения один — сопоставьте глубину проверки со стоимостью на кону и неопределённостью информации.',
          es: 'La profundidad de la inspección varía según el caso. Un vehículo de alto valor, un VE con batería crítica o un anuncio incompleto justifican un diagnóstico más profundo o una inspección de terceros; un vehículo barato y común con historial documentado quizá no. El principio de decisión es el mismo: ajuste la profundidad de comprobación al valor en juego y a la incertidumbre de la información.',
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
          en: 'What a clean inspection can and cannot tell you interacts with your destination\'s rules: a vehicle may pass inspection yet still be ineligible by age, drive-side or specification. Check those inputs on the Market sub-site, where each rule carries a source and last-checked date.',
          ar: 'ما يمكن وما لا يمكن أن يخبرك به الفحص النظيف يتفاعل مع قواعد وجهتك: فقد تجتاز المركبة الفحص ومع ذلك تكون غير مؤهلة بسبب العمر أو جانب القيادة أو المواصفات. تحقق من تلك المدخلات في الموقع الفرعي للأسواق، حيث يحمل كل حكم مصدره وتاريخ آخر فحص.',
          ru: 'То, что чистая проверка может и не может сказать, взаимодействует с правилами вашей страны: автомобиль может пройти проверку, но оставаться недопустимым по возрасту, стороне руля или характеристикам. Проверьте эти данные на подсайте Market, где каждое правило имеет источник и дату последней проверки.',
          es: 'Lo que una inspección limpia puede y no puede decir interactúa con las normas de su destino: un vehículo puede pasar la inspección y aun así no ser elegible por antigüedad, lado de conducción o especificación. Compruebe esos datos en el subsitio Market, donde cada norma lleva fuente y fecha de última comprobación.',
        },
      ],
      links: [
        {
          href: 'https://market.chinausedautohub.com/',
          label: {
            en: 'Check destination rules by country — Market sub-site',
            ar: 'تحقق من قواعد الوجهة حسب البلد — الموقع الفرعي للأسواق',
            ru: 'Проверьте правила страны назначения по странам — подсайт Market',
            es: 'Consulte las normas de destino por país — subsitio Market',
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
          en: 'Inspection findings are one input to the buying decision. For the full commercial picture, see the How to Buy guide\'s suitability framework; for EV battery and charging specifics, see the Chinese EVs guide; for model specifications, see the Data sub-site.',
          ar: 'نتائج الفحص مدخل واحد لقرار الشراء. للصورة التجارية الكاملة، راجع إطار الملاءمة في دليل «كيف تشتري»؛ ولتفاصيل بطارية وشحن المركبات الكهربائية، راجع دليل السيارات الكهربائية الصينية؛ ولمواصفات الطرازات، راجع الموقع الفرعي للبيانات.',
          ru: 'Результаты проверки — лишь один вход для решения о покупке. Для полной коммерческой картины см. структуру пригодности в руководстве «Как купить»; по батарее и зарядке электромобилей — руководство по китайским электромобилям; по спецификациям моделей — подсайт Data.',
          es: 'Los resultados de la inspección son un dato de la decisión de compra. Para el panorama comercial completo, consulte el marco de idoneidad de la guía «Cómo comprar»; para batería y carga de VE, la guía de VE chinos; para especificaciones de modelos, el subsitio Data.',
        },
      ],
      links: [
        {
          slug: 'how-to-buy-used-car-from-china',
          label: {
            en: 'Full buying decision — How to Buy guide',
            ar: 'قرار الشراء الكامل — دليل «كيف تشتري»',
            ru: 'Полное решение о покупке — руководство «Как купить»',
            es: 'Decisión de compra completa — guía «Cómo comprar»',
          },
        },
        {
          slug: 'buying-chinese-evs-for-export',
          label: {
            en: 'Battery and charging checks — Chinese EVs guide',
            ar: 'فحوصات البطارية والشحن — دليل السيارات الكهربائية الصينية',
            ru: 'Проверки батареи и зарядки — руководство по китайским электромобилям',
            es: 'Comprobaciones de batería y carga — guía de VE chinos',
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
          en: 'Inspection reduces risk; the Tools sub-site helps you price the rest of the decision. Compare vehicles and estimate landed and ownership cost to see how a condition finding affects the whole deal.',
          ar: 'يقلل الفحص المخاطرة؛ ويساعدك الموقع الفرعي للأدوات على تسعير باقي القرار. قارن المركبات وقدّر التكلفة النهائية وتكلفة الملكية لترى كيف تؤثر نتيجة الحالة على الصفقة كاملة.',
          ru: 'Проверка снижает риск; подсайт инструментов помогает оценить остальную часть решения. Сравните автомобили и оцените итоговую стоимость и стоимость владения, чтобы увидеть, как результат проверки влияет на всю сделку.',
          es: 'La inspección reduce el riesgo; el subsitio de herramientas le ayuda a valorar el resto de la decisión. Compare vehículos y estime el coste de desembarco y de propiedad para ver cómo un hallazgo de estado afecta a todo el trato.',
        },
      ],
      links: [
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
          en: 'Inspection information is presented only when we hold it, and each detail carries a confidence level (verified, provided, seller-supplied, source-backed, not available, or not independently verified). We do not fabricate inspection results. Destination rules and model specifications are sourced on the Market and Data sub-sites respectively.',
          ar: 'تُعرض معلومات الفحص فقط عندما نحتفظ بها، وكل تفصيل يحمل مستوى ثقة (موثَّق، مقدَّم، مقدَّم من البائع، مدعوم بمصدر، غير متوفر، أو غير متحقق منه بشكل مستقل). لا نختلق نتائج فحص. تُصدر قواعد الوجهة ومواصفات الطرازات من موقعي الأسواق والبيانات على التوالي.',
          ru: 'Информация о проверке показывается только при её наличии, и каждая деталь имеет уровень достоверности (подтверждено, предоставлено, предоставлено продавцом, подтверждено источником, недоступно или не подтверждено независимо). Мы не выдумываем результаты проверок. Правила страны назначения и спецификации моделей берутся на подсайтах Market и Data соответственно.',
          es: 'La información de inspección se presenta solo cuando la tenemos, y cada detalle lleva un nivel de confianza (verificado, facilitado, facilitado por el vendedor, respaldado por fuente, no disponible o no verificado de forma independiente). No fabricamos resultados de inspección. Las normas de destino y las especificaciones de modelos proceden de los subsitios Market y Data respectivamente.',
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
          en: 'Last reviewed: 2026-10-04. This guide describes a general inspection method and does not certify any specific vehicle. A clean report is a snapshot of the information available at the time, not a lifetime guarantee. Confirm any detail that affects your decision with a current quote or inspection before committing.',
          ar: 'آخر مراجعة: 2026-10-04. يصف هذا الدليل طريقة فحص عامة ولا يعتمد أي مركبة محددة. التقرير النظيف هو لقطة للمعلومات المتوفرة وقت الفحص، وليس ضمانًا مدى الحياة. أكد أي تفصيل يؤثر على قرارك بعرض سعر أو فحص حالي قبل الالتزام.',
          ru: 'Последняя проверка: 2026-10-04. Это руководство описывает общий метод проверки и не сертифицирует конкретный автомобиль. Чистый отчёт — это снимок информации, доступной на момент проверки, а не пожизненная гарантия. Подтвердите любую важную деталь актуальным расчётом или проверкой до обязательств.',
          es: 'Última revisión: 2026-10-04. Esta guía describe un método general de inspección y no certifica ningún vehículo concreto. Un informe limpio es una instantánea de la información disponible en ese momento, no una garantía de por vida. Confirme cualquier detalle que afecte a su decisión con una cotización o inspección actual antes de comprometerse.',
        },
      ],
    },
  ],
};
