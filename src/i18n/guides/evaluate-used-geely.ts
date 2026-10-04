import type { L10n } from '../l10n';

// Guide 9 — How to Evaluate a Used Geely (audit topic #19).
// Original synthesis: a "name → powertrain → specification" evaluation order for a
// brand that sells the same car under a China-market name and a different export
// name. The buyer's first job is to pin down which name and which specification the
// vehicle actually is, then assess the petrol powertrain or the battery, then the
// standard checks. No invented figures; uncertain points say "confirm".

export const evaluateGeely = {
  slug: 'evaluate-used-geely',
  title: {
    en: 'How to Evaluate a Used Geely — Model, Engine and Battery',
    ar: 'كيف تقيّم سيارة Geely مستعملة — الطراز والمحرك والبطارية',
    ru: 'Как оценить подержанный Geely — модель, двигатель и батарея',
    es: 'Cómo evaluar un Geely usado — modelo, motor y batería',
  },
  description: {
    en: 'Evaluating a used Geely: confirm the China vs export naming (Xingyue L / Monjaro, Binyue / Coolray), the petrol engine and transmission condition, and hybrid or EV battery health before running standard used-car checks.',
    ar: 'تقييم سيارة Geely مستعملة: تأكيد التسمية الصينية مقابل التصديرية (Xingyue L / Monjaro وBinyue / Coolray)، وحالة المحرك البنزيني وناقل الحركة، وصحة بطارية الطرازات الهجينة أو الكهربائية قبل إجراء فحوصات السيارات المستعملة القياسية.',
    ru: 'Оценка подержанного Geely: подтвердите китайское и экспортное название (Xingyue L / Monjaro, Binyue / Coolray), состояние бензинового двигателя и трансмиссии, а также здоровье батареи гибридных или электрических версий перед стандартной проверкой.',
    es: 'Evaluar un Geely usado: confirme la denominación china frente a la de exportación (Xingyue L / Monjaro, Binyue / Coolray), el estado del motor de gasolina y la transmisión, y la salud de la batería de las versiones híbridas o eléctricas antes de las comprobaciones estándar.',
  },
  h1: {
    en: 'How to Evaluate a Used Geely',
    ar: 'كيف تقيّم سيارة Geely مستعملة',
    ru: 'Как оценить подержанный Geely',
    es: 'Cómo evaluar un Geely usado',
  },
  summary: {
    en: 'Confirm the model and its China vs export name, assess the petrol powertrain or the battery, then run standard checks.',
    ar: 'أكد الطراز وتسميته الصينية مقابل التصديرية، وقيّم مجموعة الحركة البنزينية أو البطارية، ثم أجرِ الفحوصات القياسية.',
    ru: 'Подтвердите модель и её китайское/экспортное название, оцените бензиновую силовую установку или батарею, затем проведите стандартные проверки.',
    es: 'Confirme el modelo y su denominación china frente a la de exportación, evalúe la motorización de gasolina o la batería y, después, haga las comprobaciones estándar.',
  },
  sections: [
    {
      heading: {
        en: 'The direct answer',
        ar: 'الإجابة المباشرة',
        ru: 'Прямой ответ',
        es: 'La respuesta directa',
      },
      paragraphs: [
        {
          en: 'For a used Geely, first pin down exactly which model and which name you are buying. Geely often sells the same car under a China-market name and a different export name — Xingyue L is sold as Monjaro, Binyue as Coolray, and Boyue as Atlas or Starray in some markets. Then confirm the powertrain: engine and turbo condition plus the transmission type on petrol models, or battery health on the Galaxy hybrid and EV models. After that, run the standard used-car checks (VIN, mileage, accident and service history).',
          ar: 'بالنسبة لسيارة Geely المستعملة، حدد أولاً بدقة أي طراز وبأي اسم تشتري. غالباً ما تبيع Geely السيارة نفسها باسم السوق الصيني وباسم تصديري مختلف — فتُباع Xingyue L باسم Monjaro، وBinyue باسم Coolray، وBoyue باسم Atlas أو Starray في بعض الأسواق. ثم أكد مجموعة الحركة: حالة المحرك والتوربو ونوع ناقل الحركة في طرازات البنزين، أو صحة البطارية في طرازات Galaxy الهجينة والكهربائية. وبعد ذلك أجرِ فحوصات السيارات المستعملة القياسية (رقم الهيكل، والمسافة المقطوعة، وسجل الحوادث والصيانة).',
          ru: 'Для подержанного Geely сначала точно определите, какую модель и под каким названием вы покупаете. Geely часто продаёт один и тот же автомобиль под китайским и под другим экспортным названием: Xingyue L продаётся как Monjaro, Binyue как Coolray, а Boyue в ряде рынков как Atlas или Starray. Затем подтвердите силовую установку: состояние двигателя и турбины и тип трансмиссии у бензиновых моделей либо здоровье батареи у гибридных и электрических моделей Galaxy. После этого проведите стандартные проверки (VIN, пробег, история ДТП и обслуживания).',
          es: 'En un Geely usado, primero determine con exactitud qué modelo y bajo qué nombre compra. Geely suele vender el mismo coche con un nombre del mercado chino y otro de exportación distinto: el Xingyue L se vende como Monjaro, el Binyue como Coolray y el Boyue como Atlas o Starray en algunos mercados. Después confirme la motorización: el estado del motor y del turbo junto con el tipo de transmisión en los modelos de gasolina, o la salud de la batería en los híbridos y eléctricos Galaxy. A continuación, haga las comprobaciones estándar de un usado (VIN, kilometraje, historial de accidentes y de servicio).',
        },
      ],
    },
    {
      heading: {
        en: 'Why the China vs export naming matters',
        ar: 'لماذا تهم التسمية الصينية مقابل التصديرية',
        ru: 'Почему важно различие китайского и экспортного названия',
        es: 'Por qué importa la denominación china frente a la de exportación',
      },
      paragraphs: [
        {
          en: 'Geely\'s dual naming is the single most common source of confusion when buying a used example for export. The same platform and largely the same car can appear in a listing as Xingyue L or Monjaro, Binyue or Coolray, and Boyue or Atlas/Starray, depending on whether the unit was built for the China domestic market or a specific export market. The Emgrand sedan line keeps its name in most markets, and Galaxy is Geely\'s newer new-energy sub-brand rather than a single model.',
          ar: 'التسمية المزدوجة لدى Geely هي أكثر مصادر الالتباس شيوعاً عند شراء سيارة مستعملة للتصدير. فالنفس المنصة ونفس السيارة تقريباً قد تظهر في الإعلان باسم Xingyue L أو Monjaro، وBinyue أو Coolray، وBoyue أو Atlas/Starray، حسب ما إذا كانت الوحدة مصنوعة للسوق الصيني المحلي أم لسوق تصدير معين. وتحتفظ سلسلة سيارات Emgrand السيدان باسمها في معظم الأسواق، وGalaxy هي علامة Geely الفرعية الجديدة للطاقة الجديدة لا طرازاً واحداً.',
          ru: 'Двойное название Geely — самый частый источник путаницы при покупке подержанного автомобиля на экспорт. Одна и та же платформа и в основном один и тот же автомобиль может фигурировать в объявлении как Xingyue L или Monjaro, Binyue или Coolray, Boyue или Atlas/Starray — в зависимости от того, сделан он для внутреннего рынка Китая или для конкретного экспортного рынка. Седан Emgrand сохраняет название в большинстве рынков, а Galaxy — это новая суб-марка Geely для новой энергетики, а не отдельная модель.',
          es: 'La doble denominación de Geely es la fuente de confusión más común al comprar un usado para exportar. La misma plataforma y, en gran medida, el mismo coche puede aparecer en un anuncio como Xingyue L o Monjaro, Binyue o Coolray y Boyue o Atlas/Starray, según si la unidad se fabricó para el mercado interno chino o para un mercado de exportación concreto. La línea de sedanes Emgrand conserva su nombre en la mayoría de los mercados, y Galaxy es la sub-marca de nueva energía de Geely, no un modelo único.',
        },
        {
          en: 'The name is not cosmetic: an export-specification unit and a domestic-specification unit can differ in software, connected services, trim and homologation. Confirm which name the vehicle is sold under and which market it was built for before you assess condition, because the checks differ for petrol and new-energy versions.',
          ar: 'الاسم ليس شكلياً: فقد تختلف الوحدة بالمواصفات التصديرية عن الوحدة بالمواصفات المحلية في البرمجيات والخدمات المتصلة والتجهيز واعتماد الطراز. أكد الاسم الذي تُباع به السيارة والسوق الذي صُنعت له قبل تقييم الحالة، لأن الفحوصات تختلف بين نسخ البنزين ونسخ الطاقة الجديدة.',
          ru: 'Название не косметика: экспортная и внутренняя спецификации могут различаться по ПО, подключённым сервисам, комплектации и омологации. Подтвердите, под каким названием продаётся автомобиль и для какого рынка он собран, прежде чем оценивать состояние, — проверки для бензиновых и новых энергетических версий различаются.',
          es: 'El nombre no es cosmético: una unidad de especificación de exportación y una de especificación nacional pueden diferir en software, servicios conectados, acabado y homologación. Confirme bajo qué nombre se vende el vehículo y para qué mercado se fabricó antes de evaluar el estado, porque las comprobaciones difieren entre versiones de gasolina y de nueva energía.',
        },
      ],
    },
    {
      heading: {
        en: 'What to check on a used Geely — a model-specific checklist',
        ar: 'ما يجب التحقق منه في سيارة Geely مستعملة — قائمة فحص خاصة بالطراز',
        ru: 'Что проверять в подержанном Geely — чек-лист по модели',
        es: 'Qué comprobar en un Geely usado — lista específica del modelo',
      },
      paragraphs: [
        {
          en: 'The table below maps the Geely-specific checks a buyer should run before the generic used-car inspection. Each row states what to check and the warning signs that should trigger more questions. It is a decision aid, not a certificate for any specific vehicle.',
          ar: 'يربط الجدول أدناه فحوصات Geely المحددة التي يجب أن يجريها المشتري قبل الفحص العام للسيارات المستعملة. يذكر كل صف ما يجب التحقق منه وعلامات التحذير التي يجب أن تثير مزيداً من الأسئلة. وهو أداة قرار، لا شهادة لأي مركبة محددة.',
          ru: 'Таблица ниже перечисляет проверки, специфичные для Geely, которые покупателю стоит выполнить до общего осмотра. В каждой строке указано, что проверять и какие тревожные сигналы должны вызвать дополнительные вопросы. Это инструмент принятия решения, а не сертификат для конкретного автомобиля.',
          es: 'La tabla siguiente relaciona las comprobaciones específicas de Geely que un comprador debe hacer antes de la inspección genérica de un usado. Cada fila indica qué comprobar y las señales de alarma que deben suscitar más preguntas. Es una ayuda de decisión, no un certificado para un vehículo concreto.',
        },
      ],
      table: {
        headers: [
          { en: 'Check', ar: 'الفحص', ru: 'Проверка', es: 'Comprobación' },
          { en: 'What to check', ar: 'ما يجب التحقق منه', ru: 'Что проверять', es: 'Qué comprobar' },
          { en: 'Warning signs', ar: 'علامات التحذير', ru: 'Тревожные сигналы', es: 'Señales de alarma' },
        ],
        rows: [
          [
            { en: 'Model naming (Xingyue L / Monjaro / Binyue / Coolray / Emgrand / Boyue / Galaxy)', ar: 'تسمية الطراز (Xingyue L / Monjaro / Binyue / Coolray / Emgrand / Boyue / Galaxy)', ru: 'Название модели (Xingyue L / Monjaro / Binyue / Coolray / Emgrand / Boyue / Galaxy)', es: 'Denominación del modelo (Xingyue L / Monjaro / Binyue / Coolray / Emgrand / Boyue / Galaxy)' },
            { en: 'Confirm the China-market name, the export name and the trim against the VIN plate and documents.', ar: 'أكد اسم السوق الصيني واسم التصدير والتجهيز مقابل لوحة رقم الهيكل والوثائق.', ru: 'Сверьте китайское название, экспортное название и комплектацию с табличкой VIN и документами.', es: 'Confirme el nombre del mercado chino, el de exportación y el acabado con la placa del VIN y los documentos.' },
            { en: 'A listing that mixes two names without stating the market, or a name that does not match the VIN.', ar: 'إعلان يخلط بين اسمين دون ذكر السوق، أو اسم لا يطابق رقم الهيكل.', ru: 'Объявление, смешивающее два названия без указания рынка, или название, не совпадающее с VIN.', es: 'Un anuncio que mezcla dos nombres sin indicar el mercado, o un nombre que no coincide con el VIN.' },
          ],
          [
            { en: 'Engine & turbo', ar: 'المحرك والتوربو', ru: 'Двигатель и турбина', es: 'Motor y turbo' },
            { en: 'On petrol models, check the engine number, oil condition, and — on turbo units — boost behaviour, oil leaks and any abnormal noise or smoke.', ar: 'في طرازات البنزين، تحقق من رقم المحرك وحالة الزيت، و—في وحدات التوربو— من سلوك الشحن وتسربات الزيت وأي ضوضاء أو دخان غير طبيعي.', ru: 'На бензиновых моделях проверьте номер двигателя, состояние масла и — на турбо-версиях — работу наддува, утечки масла и любые посторонние шумы или дым.', es: 'En los modelos de gasolina, compruebe el número de motor, el estado del aceite y — en las versiones turbo — el comportamiento del turbo, las fugas de aceite y cualquier ruido o humo anormal.' },
            { en: 'Oil leaks around the turbo, blue or white exhaust smoke, or a rough idle pointing to wear or a failing turbocharger.', ar: 'تسربات زيت حول التوربو، أو دخان عادم أزرق أو أبيض، أو تباطؤ خشن يشير إلى تآكل أو تعطل الشاحن التوربيني.', ru: 'Утечки масла вокруг турбины, синий или белый дым из выхлопа либо неровный холостой ход, указывающий на износ или отказ турбокомпрессора.', es: 'Fugas de aceite alrededor del turbo, humo de escape azul o blanco, o un ralentí irregular que indique desgaste o fallo del turbocompresor.' },
          ],
          [
            { en: 'Transmission (7DCT / 8AT / CVT)', ar: 'ناقل الحركة (7DCT / 8AT / CVT)', ru: 'Трансмиссия (7DCT / 8AT / CVT)', es: 'Transmisión (7DCT / 8AT / CVT)' },
            { en: 'Identify which unit the car has, then check shift behaviour, fluid condition and any stored fault codes.', ar: 'حدد أي وحدة في السيارة، ثم تحقق من سلوك التبديل وحالة السائل وأي رموز أعطال مخزنة.', ru: 'Определите, какой агрегат установлен, затем проверьте поведение переключений, состояние жидкости и сохранённые коды ошибок.', es: 'Identifique qué unidad lleva el coche y compruebe el comportamiento de los cambios, el estado del fluido y los códigos de avería almacenados.' },
            { en: 'Harsh or delayed shifts, judder on a 7DCT, a slipping CVT, or hidden fault codes.', ar: 'تبديل قاسٍ أو متأخر، أو اهتزاز في 7DCT، أو انزلاق في CVT، أو رموز أعطال مخفية.', ru: 'Жёсткие или запаздывающие переключения, рывки на 7DCT, проскальзывание CVT или скрытые коды ошибок.', es: 'Cambios bruscos o retardados, tirones en un 7DCT, un CVT que patina o códigos de avería ocultos.' },
          ],
          [
            { en: 'Hybrid or EV battery', ar: 'بطارية الطراز الهجين أو الكهربائي', ru: 'Батарея гибрида или электромобиля', es: 'Batería del híbrido o eléctrico' },
            { en: 'For Galaxy hybrid and EV models, request a battery diagnostic report: state of health, capacity and any charge-cycle data.', ar: 'بالنسبة لطرازات Galaxy الهجينة والكهربائية، اطلب تقرير تشخيص للبطارية: حالة الصحة والسعة وأي بيانات لدورات الشحن.', ru: 'Для гибридных и электрических моделей Galaxy запросите диагностический отчёт по батарее: состояние здоровья, ёмкость и данные о циклах зарядки.', es: 'En los híbridos y eléctricos Galaxy, pida un informe de diagnóstico de batería: estado de salud, capacidad y datos de ciclos de carga.' },
            { en: 'No diagnostic report available, or a state of health far below what the age and mileage suggest.', ar: 'عدم توفر تقرير تشخيصي، أو حالة صحة أدنى بكثير مما يوحي به العمر والمسافة المقطوعة.', ru: 'Отсутствие диагностического отчёта или состояние здоровья намного ниже, чем следует из возраста и пробега.', es: 'Sin informe de diagnóstico disponible, o un estado de salud muy por debajo de lo que sugieren la edad y el kilometraje.' },
          ],
          [
            { en: 'Drive type (FWD vs AWD)', ar: 'نوع الدفع (FWD مقابل AWD)', ru: 'Тип привода (FWD или AWD)', es: 'Tipo de tracción (FWD frente a AWD)' },
            { en: 'Confirm whether the vehicle is front-wheel or all-wheel drive, and check the rear differential and propshaft on AWD cars.', ar: 'أكد ما إذا كانت السيارة بدفع أمامي أو كلي، وافحص الترس التفاضلي الخلفي وعمود الإدارة في سيارات الدفع الكلي.', ru: 'Подтвердите, передний или полный привод, и проверьте задний дифференциал и карданный вал на полноприводных автомобилях.', es: 'Confirme si el vehículo es de tracción delantera o total y revise el diferencial trasero y el árbol de transmisión en los de tracción total.' },
            { en: 'An AWD badge on a car whose VIN decodes as FWD, or noise and leaks from an AWD driveline.', ar: 'شارة AWD على سيارة يفك رقم هيكلها إلى FWD، أو ضوضاء وتسربات من مجموعة الدفع الكلي.', ru: 'Значок AWD на автомобиле, чей VIN расшифровывается как FWD, или шумы и утечки от полноприводной трансмиссии.', es: 'Un distintivo AWD en un coche cuyo VIN se descodifica como FWD, o ruidos y fugas de una transmisión de tracción total.' },
          ],
          [
            { en: 'Software & telematics', ar: 'البرمجيات والاتصالات عن بُعد', ru: 'ПО и телематика', es: 'Software y telemática' },
            { en: 'Check the infotainment, connected services and over-the-air updates, and whether they are unlocked for the destination market.', ar: 'تحقق من نظام الترفيه والخدمات المتصلة والتحديثات اللاسلكية، وما إذا كانت مفتوحة لسوق الوجهة.', ru: 'Проверьте мультимедиа, подключённые сервисы и обновления по воздуху и доступны ли они для рынка назначения.', es: 'Compruebe el infoentretenimiento, los servicios conectados y las actualizaciones por aire, y si están desbloqueados para el mercado de destino.' },
            { en: 'China-market software that is region-locked, a non-working companion app, or no OTA support in the destination.', ar: 'برمجيات سوق صيني مقفلة إقليمياً، أو تطبيق مصاحب لا يعمل، أو عدم دعم التحديث اللاسلكي في الوجهة.', ru: 'ПО китайского рынка с региональной блокировкой, неработающее приложение-компаньон или отсутствие OTA в стране назначения.', es: 'Software del mercado chino bloqueado por región, una app complementaria que no funciona o sin soporte OTA en destino.' },
          ],
          [
            { en: 'Trim & equipment', ar: 'التجهيز والمعدات', ru: 'Комплектация и оснащение', es: 'Acabado y equipamiento' },
            { en: 'Map the actual equipment against the trim level — driver assistance, screens, materials — and confirm it matches what was sold for that market.', ar: 'طابق المعدات الفعلية مع مستوى التجهيز — مساعدة السائق والشاشات والمواد — وأكد أنها تطابق ما بيع لذلك السوق.', ru: 'Сопоставьте фактическое оснащение с комплектацией — ассистенты, экраны, материалы — и подтвердите соответствие проданному для этого рынка.', es: 'Coteje el equipamiento real con el nivel de acabado — asistencias, pantallas, materiales — y confirme que coincide con lo vendido para ese mercado.' },
            { en: 'Equipment that does not match the stated trim, or a feature that cannot be verified from photos.', ar: 'معدات لا تطابق التجهيز المعلن، أو ميزة لا يمكن التحقق منها من الصور.', ru: 'Оснащение, не соответствующее заявленной комплектации, или опция, которую нельзя подтвердить по фото.', es: 'Equipamiento que no coincide con el acabado declarado, o una función que no puede verificarse con fotos.' },
          ],
          [
            { en: 'Export & homologation', ar: 'التصدير واعتماد الطراز', ru: 'Экспорт и омологация', es: 'Exportación y homologación' },
            { en: 'Confirm the vehicle meets the destination\'s type-approval, emissions and — for EV and PHEV — charging-standard requirements.', ar: 'أكد أن المركبة تفي بمتطلبات اعتماد الطراز والانبعاثات في الوجهة، و—للكهربائية والهجينة القابلة للشحن— بمعيار الشحن.', ru: 'Подтвердите, что автомобиль соответствует омологации и нормам выбросов страны назначения, а для EV и PHEV — стандарту зарядки.', es: 'Confirme que el vehículo cumple la homologación y las emisiones del destino y — en EV y PHEV — el estándar de carga.' },
            { en: 'A domestic-market specification that does not meet the destination\'s homologation or charging standard.', ar: 'مواصفات سوق محلي لا تفي باعتماد الطراز أو معيار الشحن في الوجهة.', ru: 'Внутренняя спецификация, не соответствующая омологации или стандарту зарядки страны назначения.', es: 'Una especificación de mercado nacional que no cumple la homologación o el estándar de carga del destino.' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'Buyer considerations — petrol SUV vs new-energy Galaxy',
        ar: 'اعتبارات المشتري — سيارات البنزين الرياضية متعددة الاستخدامات مقابل Galaxy للطاقة الجديدة',
        ru: 'Соображения покупателя — бензиновый SUV против нового энергетического Galaxy',
        es: 'Consideraciones del comprador — SUV de gasolina frente a Galaxy de nueva energía',
      },
      paragraphs: [
        {
          en: 'The sourcing logic splits along the powertrain. A petrol SUV such as the Monjaro (Xingyue L) or the Coolray (Binyue) is evaluated as a conventional car: engine, turbo and transmission condition dominate, and parts are broadly shared with other Geely petrol models, which helps long-term maintenance. The Galaxy range is the new-energy side — hybrids and EVs — where the battery report replaces the engine check as the single most important piece of information, and where charging standard and software compatibility with the destination matter as much as mechanical condition.',
          ar: 'يتفرع منطق التوريد حسب مجموعة الحركة. فسيارة البنزين الرياضية متعددة الاستخدامات مثل Monjaro (Xingyue L) أو Coolray (Binyue) تُقيَّم كسيارة تقليدية: تهيمن حالة المحرك والتوربو وناقل الحركة، وتُشارك القطع على نطاق واسع مع طرازات Geely البنزينية الأخرى، مما يساعد الصيانة طويلة الأمد. أما سلسلة Galaxy فهي جانب الطاقة الجديدة — هجينة وكهربائية — حيث يحل تقرير البطارية محل فحص المحرك بوصفه أهم معلومة، وحيث يهم توافق معيار الشحن والبرمجيات مع الوجهة بقدر الحالة الميكانيكية.',
          ru: 'Логика выбора разделяется по силовой установке. Бензиновый SUV, например Monjaro (Xingyue L) или Coolray (Binyue), оценивается как обычный автомобиль: доминирует состояние двигателя, турбины и трансмиссии, а запчасти во многом общие с другими бензиновыми моделями Geely, что облегчает долгосрочное обслуживание. Серия Galaxy — это новая энергетика, гибриды и электромобили, где отчёт по батарее заменяет проверку двигателя как главная информация и где совместимость стандарта зарядки и ПО со страной назначения важна не меньше механического состояния.',
          es: 'La lógica de abastecimiento se divide según la motorización. Un SUV de gasolina como el Monjaro (Xingyue L) o el Coolray (Binyue) se evalúa como un coche convencional: dominan el estado del motor, el turbo y la transmisión, y las piezas se comparten ampliamente con otros modelos de gasolina de Geely, lo que ayuda al mantenimiento a largo plazo. La gama Galaxy es el lado de nueva energía — híbridos y eléctricos — donde el informe de batería sustituye a la comprobación del motor como dato más importante y donde la compatibilidad del estándar de carga y del software con el destino importa tanto como el estado mecánico.',
        },
        {
          en: 'Parts availability is a practical buying input. Geely exports widely, and the Monjaro, Coolray and Emgrand have an established export footprint, which generally means better parts access in the markets that already import them. For the newer Galaxy models, confirm whether the destination has service and battery support before committing. A model with no local support is harder to maintain and to resell, whatever its condition.',
          ar: 'توفر قطع الغيار مدخل شراء عملي. تصدّر Geely على نطاق واسع، ولدى Monjaro وCoolray وEmgrand بصمة تصدير راسخة، مما يعني عموماً وصولاً أفضل لقطع الغيار في الأسواق التي تستوردها بالفعل. أما طرازات Galaxy الأحدث فتحقق مما إذا كانت الوجهة توفر خدمة ودعماً للبطارية قبل الالتزام. فالطراز دون دعم محلي أصعب صيانةً وإعادة بيع، مهما كانت حالته.',
          ru: 'Доступность запчастей — практический фактор покупки. Geely широко экспортирует, и у Monjaro, Coolray и Emgrand сложилось экспортное присутствие, что обычно означает лучший доступ к запчастям на уже импортирующих их рынках. Для более новых моделей Galaxy подтвердите наличие сервиса и поддержки батареи в стране назначения до сделки. Модель без локальной поддержки сложнее обслуживать и перепродавать, каким бы ни было её состояние.',
          es: 'La disponibilidad de repuestos es un dato práctico de compra. Geely exporta ampliamente, y el Monjaro, el Coolray y el Emgrand tienen una presencia de exportación consolidada, lo que suele significar mejor acceso a piezas en los mercados que ya los importan. Para los modelos Galaxy más nuevos, confirme si el destino dispone de servicio y soporte de batería antes de comprometerse. Un modelo sin soporte local es más difícil de mantener y de revender, sea cual sea su estado.',
        },
      ],
    },
    {
      heading: {
        en: 'What this method cannot tell you',
        ar: 'ما لا تستطيع هذه الطريقة إخبارك به',
        ru: 'Чего этот метод не может сказать',
        es: 'Lo que este método no puede decirle',
      },
      paragraphs: [
        {
          en: 'Naming and trim vary by market, and this guide is a general method, not a guarantee for any specific unit. The same name can carry different equipment in different destinations, and a China-market specification may differ from the export version in software, charging and homologation. Before you commit, confirm the equivalent export model for your market and check the specific VIN against its documents and the destination\'s rules.',
          ar: 'تختلف التسمية والتجهيز حسب السوق، وهذا الدليل طريقة عامة لا ضمان لأي وحدة محددة. فقد يحمل الاسم نفسه معدات مختلفة في وجهات مختلفة، وقد تختلف مواصفات السوق الصيني عن نسخة التصدير في البرمجيات والشحن واعتماد الطراز. قبل الالتزام، أكد طراز التصدير المكافئ لسوقك وتحقق من رقم الهيكل المحدد مقابل وثائقه وقواعد الوجهة.',
          ru: 'Названия и комплектации различаются по рынкам, и это руководство — общий метод, а не гарантия для конкретной единицы. Одно и то же название может нести разное оснащение в разных странах, а внутренняя китайская спецификация может отличаться от экспортной по ПО, зарядке и омологации. Прежде чем брать обязательства, подтвердите эквивалентную экспортную модель для вашего рынка и сверьте конкретный VIN с документами и правилами страны назначения.',
          es: 'Las denominaciones y los acabados varían por mercado, y esta guía es un método general, no una garantía para una unidad concreta. El mismo nombre puede llevar equipamiento distinto en destinos diferentes, y una especificación del mercado chino puede diferir de la versión de exportación en software, carga y homologación. Antes de comprometerse, confirme el modelo de exportación equivalente para su mercado y compruebe el VIN concreto con sus documentos y las normas del destino.',
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
          en: 'The main Geely model in our database is the Monjaro, listed under its China-market name Xingyue L — the same mid-size petrol SUV, which is why confirming the name on the VIN plate is the first step in evaluating one. The Coolray (Binyue), Emgrand and the Galaxy range appear as brand context rather than as separate model records: use them to understand Geely\'s naming logic and powertrain spread, not as database entries.',
          ar: 'الطراز الرئيسي لـ Geely في قاعدة بياناتنا هو Monjaro، المدرج باسمه الصيني Xingyue L — نفس سيارة البنزين الرياضية متعددة الاستخدامات متوسطة الحجم، ولهذا فإن تأكيد الاسم على لوحة رقم الهيكل هو الخطوة الأولى في تقييمها. وتظهر Coolray (Binyue) وEmgrand وسلسلة Galaxy كسياق للعلامة لا كسجلات طرازات منفصلة: فاستخدمها لفهم منطق تسمية Geely وانتشار مجموعات الحركة، لا كإدخالات في قاعدة البيانات.',
          ru: 'Главная модель Geely в нашей базе — Monjaro, указанная под китайским названием Xingyue L: это тот же среднеразмерный бензиновый SUV, поэтому подтверждение названия на табличке VIN — первый шаг при его оценке. Coolray (Binyue), Emgrand и серия Galaxy представлены как контекст бренда, а не как отдельные записи моделей: используйте их, чтобы понять логику названий и разброс силовых установок Geely, а не как записи базы данных.',
          es: 'El principal modelo de Geely en nuestra base de datos es el Monjaro, listado bajo su nombre del mercado chino Xingyue L: el mismo SUV de gasolina de tamaño medio, por lo que confirmar el nombre en la placa del VIN es el primer paso para evaluarlo. El Coolray (Binyue), el Emgrand y la gama Galaxy aparecen como contexto de marca, no como registros de modelo separados: úselos para entender la lógica de denominación y la variedad de motorizaciones de Geely, no como entradas de la base de datos.',
        },
      ],
    },
    {
      heading: {
        en: 'Related links',
        ar: 'روابط ذات صلة',
        ru: 'Связанные ссылки',
        es: 'Enlaces relacionados',
      },
      paragraphs: [
        {
          en: 'Model specifications live on the Data sub-site; destination rules and EV/charging requirements are maintained on the Market sub-site by country. The internal guide below covers the domestic vs export specification difference in more depth.',
          ar: 'توجد مواصفات الطرازات في الموقع الفرعي للبيانات؛ وتُصان قواعد الوجهة ومتطلبات المركبات الكهربائية والشحن في الموقع الفرعي للأسواق حسب البلد. ويغطي الدليل الداخلي أدناه فرق المواصفات المحلية مقابل التصديرية بعمق أكبر.',
          ru: 'Спецификации моделей находятся на подсайте Data; правила страны назначения и требования для электромобилей и зарядки ведутся на подсайте Market по странам. Внутреннее руководство ниже подробнее раскрывает разницу внутренней и экспортной спецификации.',
          es: 'Las especificaciones de los modelos están en el subsitio Data; las normas de destino y los requisitos de VE y carga se mantienen en el subsitio Market por país. La guía interna siguiente trata la diferencia de especificación nacional frente a exportación con más detalle.',
        },
      ],
      links: [
        {
          href: 'https://data.chinausedautohub.com/models/geely-monjaro/',
          label: {
            en: 'Geely Monjaro (Xingyue L) — model data',
            ar: 'Geely Monjaro (Xingyue L) — بيانات الطراز',
            ru: 'Geely Monjaro (Xingyue L) — данные модели',
            es: 'Geely Monjaro (Xingyue L) — datos del modelo',
          },
        },
        {
          href: 'https://data.chinausedautohub.com/brands/geely/',
          label: {
            en: 'Geely — brand data',
            ar: 'Geely — بيانات العلامة',
            ru: 'Geely — данные бренда',
            es: 'Geely — datos de la marca',
          },
        },
        {
          href: 'https://market.chinausedautohub.com/countries/saudi-arabia/',
          label: {
            en: 'Saudi Arabia — market rules',
            ar: 'السعودية — قواعد السوق',
            ru: 'Саудовская Аравия — правила рынка',
            es: 'Arabia Saudí — normas de mercado',
          },
        },
        {
          href: 'https://market.chinausedautohub.com/countries/kazakhstan/',
          label: {
            en: 'Kazakhstan — market rules',
            ar: 'كازاخستان — قواعد السوق',
            ru: 'Казахстан — правила рынка',
            es: 'Kazajistán — normas de mercado',
          },
        },
        {
          href: 'https://market.chinausedautohub.com/countries/uzbekistan/',
          label: {
            en: 'Uzbekistan — market rules',
            ar: 'أوزبكستان — قواعد السوق',
            ru: 'Узбекистан — правила рынка',
            es: 'Uzbekistán — normas de mercado',
          },
        },
        {
          href: 'https://market.chinausedautohub.com/countries/tanzania/',
          label: {
            en: 'Tanzania — market rules',
            ar: 'تنزانيا — قواعد السوق',
            ru: 'Танзания — правила рынка',
            es: 'Tanzania — normas de mercado',
          },
        },
        {
          slug: 'china-domestic-vs-export-specification',
          label: {
            en: 'Domestic vs export specification — guide',
            ar: 'المواصفات المحلية مقابل التصديرية — دليل',
            ru: 'Внутренняя и экспортная спецификация — руководство',
            es: 'Especificación nacional frente a exportación — guía',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Frequently asked questions',
        ar: 'أسئلة شائعة',
        ru: 'Часто задаваемые вопросы',
        es: 'Preguntas frecuentes',
      },
      paragraphs: [
        {
          en: 'Is the Monjaro the same car as the Xingyue L? Yes — the Monjaro is the export name for the Xingyue L, Geely\'s mid-size petrol SUV. The car is broadly the same, but specification and software can differ between the China-market and export units, so always confirm the exact trim and VIN.',
          ar: 'هل Monjaro هي نفس سيارة Xingyue L؟ نعم — Monjaro هو اسم التصدير لـ Xingyue L، سيارة Geely البنزينية الرياضية متعددة الاستخدامات متوسطة الحجم. السيارة متطابقة إلى حد كبير، لكن المواصفات والبرمجيات قد تختلف بين وحدات السوق الصيني ووحدات التصدير، لذا أكد دائماً التجهيز الدقيق ورقم الهيكل.',
          ru: 'Monjaro — это та же машина, что и Xingyue L? Да, Monjaro — экспортное название Xingyue L, среднеразмерного бензинового SUV Geely. Автомобиль в целом тот же, но спецификация и ПО могут различаться между китайскими и экспортными единицами, поэтому всегда подтверждайте точную комплектацию и VIN.',
          es: '¿El Monjaro es el mismo coche que el Xingyue L? Sí: el Monjaro es el nombre de exportación del Xingyue L, el SUV de gasolina de tamaño medio de Geely. El coche es en gran medida el mismo, pero la especificación y el software pueden diferir entre las unidades del mercado chino y las de exportación, así que confirme siempre el acabado exacto y el VIN.',
        },
        {
          en: 'How do I know if a Geely is a China-market or an export version? The most reliable signal is the VIN combined with the specification: check which name is on the VIN plate and documents, and whether the software, connected services and charging port (for hybrids and EVs) match the destination market. Where this is unclear, ask for the VIN and the specific trim before committing.',
          ar: 'كيف أعرف إذا كانت سيارة Geely بنسخة السوق الصيني أم نسخة تصدير؟ الإشارة الأكثر موثوقية هي رقم الهيكل مع المواصفات: تحقق من الاسم الموجود على لوحة رقم الهيكل والوثائق، وما إذا كانت البرمجيات والخدمات المتصلة ومنفذ الشحن (للهجينة والكهربائية) تطابق سوق الوجهة. وحيثما كان ذلك غير واضح، اطلب رقم الهيكل والتجهيز المحدد قبل الالتزام.',
          ru: 'Как понять, китайская это или экспортная версия Geely? Самый надёжный сигнал — VIN вместе со спецификацией: проверьте, какое название стоит на табличке VIN и в документах, и совпадают ли ПО, подключённые сервисы и порт зарядки (для гибридов и электромобилей) с рынком назначения. Если это неясно, запросите VIN и точную комплектацию до сделки.',
          es: '¿Cómo sé si un Geely es de mercado chino o versión de exportación? La señal más fiable es el VIN junto con la especificación: compruebe qué nombre figura en la placa del VIN y en los documentos, y si el software, los servicios conectados y el puerto de carga (en híbridos y eléctricos) coinciden con el mercado de destino. Si no está claro, pida el VIN y el acabado concreto antes de comprometerse.',
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
          en: 'Last reviewed: 2026-10-04. This guide describes a general evaluation method and does not certify any specific vehicle. Naming, trim, specification and battery health vary by unit and by market, so confirm the exact model, VIN and destination requirements before committing.',
          ar: 'آخر مراجعة: 2026-10-04. يصف هذا الدليل طريقة تقييم عامة ولا يعتمد أي مركبة محددة. تختلف التسمية والتجهيز والمواصفات وصحة البطارية حسب الوحدة والسوق، لذا أكد الطراز الدقيق ورقم الهيكل ومتطلبات الوجهة قبل الالتزام.',
          ru: 'Последняя проверка: 2026-10-04. Это руководство описывает общий метод оценки и не сертифицирует конкретный автомобиль. Название, комплектация, спецификация и здоровье батареи различаются по единицам и рынкам, поэтому подтвердите точную модель, VIN и требования страны назначения до обязательств.',
          es: 'Última revisión: 2026-10-04. Esta guía describe un método general de evaluación y no certifica ningún vehículo concreto. La denominación, el acabado, la especificación y la salud de la batería varían por unidad y por mercado, así que confirme el modelo exacto, el VIN y los requisitos del destino antes de comprometerse.',
        },
      ],
    },
  ],
};
