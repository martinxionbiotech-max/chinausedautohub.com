import type { L10n } from '../l10n';

// Guide — China Used Car Export Negative List. The prohibited-vehicle categories
// (禁止出口情形, 2024年第6号公告 section 六) and the dishonest-behaviour negative list
// (不诚信行为负面清单, 商贸函〔2025〕648号 attachment 1). Official-source verified;
// items listed only where a source supports them (§9).

export const negativeList = {
  slug: 'china-used-car-export-negative-list',
  title: {
    en: 'China Used Car Export Negative List',
    ar: 'القائمة السلبية لتصدير السيارات المستعملة في الصين',
    ru: 'Негативный список экспорта подержанных автомобилей из Китая',
    es: 'Lista negativa de exportación de coches usados desde China',
  },
  description: {
    en: 'The vehicles China prohibits from export and the dishonest-behaviour negative list exporters are monitored against — the prohibited categories, the modified-vehicle restrictions and what buyers should check.',
    ar: 'المركبات التي تحظر الصين تصديرها والقائمة السلبية للسلوك غير النزيه التي يُراقب المصدّرون على أساسها — الفئات المحظورة، وقيود المركبات المعدّلة، وما يجب على المشترين فحصه.',
    ru: 'Автомобили, запрещённые Китаем к экспорту, и негативный список недобросовестного поведения, по которому контролируются экспортёры, — запрещённые категории, ограничения на модифицированные автомобили и что проверять покупателям.',
    es: 'Los vehículos que China prohíbe exportar y la lista negativa de conducta deshonesta contra la que se vigila a los exportadores: las categorías prohibidas, las restricciones a vehículos modificados y qué deben comprobar los compradores.',
  },
  h1: {
    en: 'China Used Car Export Negative List',
    ar: 'القائمة السلبية لتصدير السيارات المستعملة في الصين',
    ru: 'Негативный список экспорта подержанных автомобилей из Китая',
    es: 'Lista negativa de exportación de coches usados desde China',
  },
  summary: {
    en: 'The prohibited-vehicle categories and the dishonest-behaviour list that define what cannot be exported, and how a buyer checks a vehicle against them.',
    ar: 'فئات المركبات المحظورة وقائمة السلوك غير النزيه التي تحدد ما لا يمكن تصديره، وكيف يفحص المشتري مركبة مقابلها.',
    ru: 'Категории запрещённых автомобилей и список недобросовестного поведения, определяющие, что нельзя экспортировать, и как покупатель проверяет автомобиль по ним.',
    es: 'Las categorías de vehículos prohibidos y la lista de conducta deshonesta que definen lo que no puede exportarse, y cómo un comprador comprueba un vehículo frente a ellas.',
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
          en: '"Negative list" covers two different things in China\'s used-car export rules, and it is worth keeping them apart. The first is the list of vehicles that must not be exported (禁止出口情形) — a set of status-based categories in the 2024 No. 6 announcement. The second is the dishonest-behaviour negative list (二手车出口不诚信行为负面清单), which the authorities use to supervise exporters rather than to classify vehicles. This page lists both, from their official sources, and tells you how to check a vehicle against the prohibited categories before you pay.',
          ar: 'تغطي «القائمة السلبية» أمرين مختلفين في قواعد تصدير السيارات المستعملة في الصين، ومن الجدير الفصل بينهما. الأول قائمة المركبات التي يجب عدم تصديرها (禁止出口情形) — مجموعة من الفئات القائمة على الحالة في إعلان 2024 رقم 6. والثاني القائمة السلبية للسلوك غير النزيه (二手车出口不诚信行为负面清单)، التي تستخدمها السلطات للإشراف على المصدّرين لا لتصنيف المركبات. تعرض هذه الصفحة كليهما، من مصادرهما الرسمية، وتخبرك كيف تفحص مركبة مقابل الفئات المحظورة قبل أن تدفع.',
          ru: '«Негативный список» охватывает две разные вещи в правилах экспорта подержанных автомобилей Китая, и их стоит различать. Первая — список автомобилей, которые нельзя экспортировать (禁止出口情形), — набор категорий по статусу в объявлении № 6 2024 года. Вторая — негативный список недобросовестного поведения (二手车出口不诚信行为负面清单), который органы используют для надзора за экспортёрами, а не для классификации автомобилей. Эта страница приводит оба из официальных источников и объясняет, как проверить автомобиль по запрещённым категориям до оплаты.',
          es: '«Lista negativa» cubre dos cosas distintas en las normas de exportación de coches usados de China, y conviene separarlas. La primera es la lista de vehículos que no deben exportarse (禁止出口情形), un conjunto de categorías basadas en el estado en el anuncio n.º 6 de 2024. La segunda es la lista negativa de conducta deshonesta (二手车出口不诚信行为负面清单), que las autoridades usan para supervisar a los exportadores, no para clasificar vehículos. Esta página presenta ambas, desde sus fuentes oficiales, y le dice cómo comprobar un vehículo frente a las categorías prohibidas antes de pagar.',
        },
      ],
    },
    {
      heading: {
        en: 'The prohibited vehicles (禁止出口情形)',
        ar: 'المركبات المحظورة (禁止出口情形)',
        ru: 'Запрещённые автомобили (禁止出口情形)',
        es: 'Los vehículos prohibidos (禁止出口情形)',
      },
      paragraphs: [
        {
          en: 'The 2024 No. 6 announcement lists ten situations in which a used vehicle must not be exported. They are status-based: a vehicle is excluded because of its age, its legal state or its documentation — not because of its brand or model. The categories below are quoted from section 六 of the announcement, checked 2026-10-08.',
          ar: 'يسرد إعلان 2024 رقم 6 عشر حالات يجب فيها عدم تصدير المركبة المستعملة. وهي قائمة على الحالة: تُستبعد المركبة بسبب عمرها أو حالتها القانونية أو وثائقها — لا بسبب علامتها أو طرازها. الفئات أدناه مقتبسة من القسم 六 من الإعلان، وتم التحقق منها في 2026-10-08.',
          ru: 'В объявлении № 6 2024 года перечислены десять ситуаций, в которых подержанный автомобиль нельзя экспортировать. Они основаны на статусе: автомобиль исключается из-за возраста, правового состояния или документации — не из-за марки или модели. Категории ниже цитируются из раздела 六 объявления, проверено 2026-10-08.',
          es: 'El anuncio n.º 6 de 2024 enumera diez situaciones en las que un vehículo usado no debe exportarse. Se basan en el estado: un vehículo queda excluido por su antigüedad, su estado legal o su documentación, no por su marca o modelo. Las categorías siguientes se citan de la sección 六 del anuncio, verificadas el 2026-10-08.',
        },
      ],
      table: {
        headers: [
          { en: 'Prohibited category', ar: 'الفئة المحظورة', ru: 'Запрещённая категория', es: 'Categoría prohibida' },
          { en: 'What it means for a buyer', ar: 'ماذا يعني للمشتري', ru: 'Что это значит для покупателя', es: 'Qué significa para el comprador' },
        ],
        rows: [
          [
            { en: 'Vehicles at or within one year (inclusive) of the mandatory scrapping standard', ar: 'مركبات عند معيار الإتلاف الإلزامي أو خلال سنة واحدة (شاملة) منه', ru: 'Автомобили на уровне обязательного стандарта утилизации или в пределах одного года (включительно) до него', es: 'Vehículos en el estándar de desguace obligatorio o a un año (inclusive) de él' },
            { en: 'A vehicle too close to scrap age cannot be exported, whatever its price', ar: 'المركبة القريبة جداً من عمر الإتلاف لا يمكن تصديرها مهما كان سعرها', ru: 'Автомобиль, слишком близкий к утилизационному возрасту, нельзя экспортировать независимо от цены', es: 'Un vehículo demasiado próximo a la edad de desguace no puede exportarse, sea cual sea su precio' },
          ],
          [
            { en: 'Vehicles under mortgage, pledge or customs supervision', ar: 'مركبات تحت رهن أو حجز أو إشراف جمركي', ru: 'Автомобили в залоге, закладе или под таможенным надзором', es: 'Vehículos bajo hipoteca, prenda o supervisión aduanera' },
            { en: 'An encumbered vehicle may have title issues in China — confirm it is clear', ar: 'المركبة المرهونة قد تكون لديها مشاكل ملكية في الصين — أكّد أنها خالية', ru: 'Обременённый автомобиль может иметь проблемы с правом собственности в Китае — подтвердите, что он чист', es: 'Un vehículo gravado puede tener problemas de titularidad en China: confirme que está libre' },
          ],
          [
            { en: 'Vehicles sealed or seized by supervisory, judicial or law-enforcement authorities', ar: 'مركبات محجوزة أو مصادرة من سلطات رقابية أو قضائية أو إنفاذ قانون', ru: 'Автомобили, арестованные или изъятые надзорными, судебными или правоохранительными органами', es: 'Vehículos precintados o embargados por autoridades de supervisión, judiciales o policiales' },
            { en: 'A vehicle caught in a dispute or enforcement action cannot move across the border', ar: 'المركبة العالقة في نزاع أو إجراء إنفاذ لا يمكنها عبور الحدود', ru: 'Автомобиль, затронутый спором или исполнительным производством, не может пересечь границу', es: 'Un vehículo atrapado en una disputa o acción ejecutiva no puede cruzar la frontera' },
          ],
          [
            { en: 'Vehicles obtained by theft, robbery, fraud or other crime', ar: 'مركبات حصل عليها بالسرقة أو السلب أو الاحتيال أو جريمة أخرى', ru: 'Автомобили, полученные путём кражи, грабежа, мошенничества или иного преступления', es: 'Vehículos obtenidos por robo, hurto, fraude u otro delito' },
            { en: 'Stolen or fraudulently obtained vehicles are never exportable', ar: 'المركبات المسروقة أو المحصّلة بالاحتيال غير قابلة للتصدير أبداً', ru: 'Угнанные или мошеннически полученные автомобили никогда не подлежат экспорту', es: 'Los vehículos robados u obtenidos fraudulentamente nunca son exportables' },
          ],
          [
            { en: 'Vehicles inconsistent with their registration certificate', ar: 'مركبات لا تطابق شهادة تسجيلها', ru: 'Автомобили, не соответствующие своему свидетельству о регистрации', es: 'Vehículos que no coinciden con su certificado de registro' },
            { en: 'A VIN, model or owner mismatch against the certificate is a stop signal', ar: 'تضارب رقم الهيكل أو الطراز أو المالك مع الشهادة إشارة توقف', ru: 'Несовпадение VIN, модели или владельца со свидетельством — сигнал остановиться', es: 'Una discrepancia de VIN, modelo o propietario frente al certificado es una señal de alto' },
          ],
          [
            { en: 'Smuggled or illegally assembled (拼/组) vehicles', ar: 'مركبات مهربة أو مجمّعة بشكل غير قانوني', ru: 'Контрабандные или незаконно собранные автомобили', es: 'Vehículos de contrabando o ensamblados ilegalmente' },
            { en: 'A vehicle with no legitimate Chinese origin cannot be exported', ar: 'المركبة بلا أصل صيني مشروع لا يمكن تصديرها', ru: 'Автомобиль без законного китайского происхождения нельзя экспортировать', es: 'Un vehículo sin origen chino legítimo no puede exportarse' },
          ],
          [
            { en: 'Vehicles with incomplete legal certificates', ar: 'مركبات بشهادات قانونية ناقصة', ru: 'Автомобили с неполными юридическими свидетельствами', es: 'Vehículos con certificados legales incompletos' },
            { en: 'Incomplete paperwork blocks export — ask for the full document set', ar: 'الأوراق الناقصة تمنع التصدير — اطلب مجموعة الوثائق الكاملة', ru: 'Неполные документы блокируют экспорт — запросите полный комплект документов', es: 'El papeleo incompleto bloquea la exportación: pida el conjunto completo de documentos' },
          ],
          [
            { en: 'Vehicles that fail inspection (检测不合格)', ar: 'مركبات تفشل في الفحص (检测不合格)', ru: 'Автомобили, не прошедшие проверку (检测不合格)', es: 'Vehículos que no superan la inspección (检测不合格)' },
            { en: 'A vehicle must pass the third-party inspection to be exportable', ar: 'يجب أن تجتاز المركبة الفحص من طرف ثالث لتكون قابلة للتصدير', ru: 'Автомобиль должен пройти стороннюю проверку, чтобы подлежать экспорту', es: 'Un vehículo debe superar la inspección de terceros para poder exportarse' },
          ],
          [
            { en: 'Vehicles with unresolved traffic violations or accidents', ar: 'مركبات بمخالفات مرورية أو حوادث غير معالجة', ru: 'Автомобили с неразрешёнными нарушениями ПДД или ДТП', es: 'Vehículos con infracciones de tráfico o accidentes no resueltos' },
            { en: 'Unresolved violations or accident liability must be cleared before export', ar: 'يجب تصفية المخالفات أو مسؤولية الحادث غير المعالجة قبل التصدير', ru: 'Неразрешённые нарушения или ответственность за ДТП должны быть урегулированы до экспорта', es: 'Las infracciones o la responsabilidad por accidentes no resueltas deben saldarse antes de exportar' },
          ],
          [
            { en: 'Other vehicles prohibited from trade or export by law', ar: 'مركبات أخرى يحظر القانون تداولها أو تصديرها', ru: 'Прочие автомобили, запрещённые к торговле или экспорту законом', es: 'Otros vehículos prohibidos para el comercio o la exportación por ley' },
            { en: 'A catch-all category — treat any other legal restriction as decisive', ar: 'فئة شاملة — عامل أي قيد قانوني آخر كحاسم', ru: 'Общая категория — относитесь к любому другому правовому ограничению как к решающему', es: 'Una categoría comodín: trate cualquier otra restricción legal como decisiva' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'The dishonest-behaviour negative list',
        ar: 'القائمة السلبية للسلوك غير النزيه',
        ru: 'Негативный список недобросовестного поведения',
        es: 'La lista negativa de conducta deshonesta',
      },
      paragraphs: [
        {
          en: 'Separately, the 2026 notice attaches a dishonest-behaviour negative list (二手车出口不诚信行为负面清单) that the authorities use to supervise exporters. It concerns exporter behaviour — such as repeated dishonest acts, failure to provide repair-technology and spare-parts support, and failure to fulfil quality-assurance obligations — not the classification of a specific vehicle. An exporter on the wrong side of this list may face talks, corrective orders, and a licence decision that weighs its corrective record.',
          ar: 'بشكل منفصل، يرفق إشعار 2026 قائمة سلبية للسلوك غير النزيه (二手车出口不诚信行为负面清单) تستخدمها السلطات للإشراف على المصدّرين. وتتعلق بسلوك المصدّر — مثل الأفعال غير النزيهة المتكررة، والفشل في توفير تقنية الإصلاح ودعم قطع الغيار، والفشل في الوفاء بالتزامات ضمان الجودة — لا بتصنيف مركبة محددة. المصدّر الذي يقف على الجانب الخطأ من هذه القائمة قد يواجه محادثات وأوامر تصحيحية وقرار رخصة يزن سجله التصحيحي.',
          ru: 'Отдельно в уведомлении 2026 года прилагается негативный список недобросовестного поведения (二手车出口不诚信行为负面清单), который органы используют для надзора за экспортёрами. Он касается поведения экспортёра — например, повторных недобросовестных действий, неисполнения обязательств по ремонтной технологии и запчастям и по гарантии качества — а не классификации конкретного автомобиля. Экспортёр на неправильной стороне этого списка может столкнуться с беседами, предписаниями об исправлении и решением по лицензии с учётом его исправительного послужного списка.',
          es: 'Por separado, el aviso de 2026 adjunta una lista negativa de conducta deshonesta (二手车出口不诚信行为负面清单) que las autoridades usan para supervisar a los exportadores. Concierne al comportamiento del exportador — como actos deshonestos reiterados, incumplimiento de la provisión de tecnología de reparación y repuestos y del cumplimiento de las obligaciones de garantía de calidad —, no a la clasificación de un vehículo concreto. Un exportador en el lado equivocado de esta lista puede afrontar conversaciones, órdenes correctivas y una decisión de licencia que sopese su historial correctivo.',
        },
      ],
    },
    {
      heading: {
        en: 'Modified vehicles (改装车)',
        ar: 'المركبات المعدّلة (改装车)',
        ru: 'Модифицированные автомобили (改装车)',
        es: 'Vehículos modificados (改装车)',
      },
      paragraphs: [
        {
          en: 'Modified vehicles face stricter licence conditions, not a blanket ban. Under the 2026 notice, a modified-vehicle exporter must accurately state the chassis brand, the modified brand and the model, and submit proof of the authenticity of the modification. Where the authenticity of the modification cannot be proven, the product is not listed in the MIIT road-motor-vehicle catalogue, or it lacks valid compulsory product certification, no export licence is issued. Ask a modified-vehicle exporter for this proof before you pay.',
          ar: 'تواجه المركبات المعدّلة شروط رخصة أشد، لا حظراً شاملاً. بموجب إشعار 2026، يجب على مصدّر المركبات المعدّلة أن يذكر بدقة علامة الشاسيه والعلامة المعدّلة والطراز، وأن يقدّم إثباتاً على أصالة التعديل. وعندما يتعذر إثبات أصالة التعديل، أو كان المنتج غير مدرج في دليل وزارة الصناعة وتكنولوجيا المعلومات للمركبات الآلية، أو يفتقر إلى شهادة منتج إلزامية سارية، لا تُصدر رخصة التصدير. اطلب من مصدّر المركبات المعدّلة هذا الإثبات قبل أن تدفع.',
          ru: 'К модифицированным автомобилям применяются более строгие условия лицензии, а не полный запрет. Согласно уведомлению 2026 года, экспортёр модифицированного автомобиля должен точно указать марку шасси, модифицированную марку и модель и представить подтверждение подлинности модификации. Если подлинность модификации не доказана, изделие не внесено в каталог дорожных транспортных средств MIIT или у него нет действующей обязательной сертификации продукции, экспортная лицензия не выдаётся. Запросите это подтверждение у экспортёра модифицированного автомобиля до оплаты.',
          es: 'Los vehículos modificados afrontan condiciones de licencia más estrictas, no una prohibición total. Según el aviso de 2026, un exportador de vehículos modificados debe indicar con precisión la marca del chasis, la marca modificada y el modelo, y aportar prueba de la autenticidad de la modificación. Si no puede probarse la autenticidad, el producto no figura en el catálogo de vehículos de motor del MIIT o carece de certificación de producto obligatoria válida, no se emite licencia de exportación. Pida esa prueba al exportador de un vehículo modificado antes de pagar.',
        },
      ],
    },
    {
      heading: {
        en: 'What is not on this list',
        ar: 'ما ليس في هذه القائمة',
        ru: 'Чего нет в этом списке',
        es: 'Qué no está en esta lista',
      },
      paragraphs: [
        {
          en: 'China\'s prohibited-vehicle list is about a vehicle\'s status, not its drive side, brand or model. The official list does not single out right-hand-drive vehicles or specific models. Where a destination country restricts right-hand-drive vehicles, an age range or a model, that is an import-eligibility rule of the destination country, not a Chinese export prohibition — and it is checked on the Market sub-site, not here. We list an item as prohibited only where an official source supports it; we do not add drive-side or model restrictions that the official text does not contain.',
          ar: 'قائمة المركبات المحظورة في الصين تتعلق بحالة المركبة، لا بجانب قيادتها أو علامتها أو طرازها. القائمة الرسمية لا تفرد مركبات المقود الأيمن أو طرازات محددة. وعندما يقيّد بلد الوجهة مركبات المقود الأيمن أو نطاقاً عمرياً أو طرازاً، فهذه قاعدة أهلية استيراد في بلد الوجهة، لا حظر تصدير صيني — وتُفحص في الموقع الفرعي للأسواق، لا هنا. ندرج عنصراً كمحظور فقط عندما يدعمه مصدر رسمي؛ ولا نضيف قيود جانب القيادة أو الطراز التي لا يحتويها النص الرسمي.',
          ru: 'Китайский список запрещённых автомобилей касается статуса автомобиля, а не стороны руля, марки или модели. Официальный список не выделяет праворульные автомобили или конкретные модели. Когда страна назначения ограничивает праворульные автомобили, возрастной диапазон или модель, это правило допустимости импорта страны назначения, а не китайский запрет на экспорт — и проверяется оно на подсайте Market, а не здесь. Мы указываем пункт как запрещённый только там, где его подтверждает официальный источник; мы не добавляем ограничения по стороне руля или модели, которых нет в официальном тексте.',
          es: 'La lista china de vehículos prohibidos se refiere al estado del vehículo, no al lado de conducción, la marca o el modelo. La lista oficial no señala los vehículos con volante a la derecha ni modelos concretos. Cuando un país de destino restringe los vehículos con volante a la derecha, un rango de antigüedad o un modelo, es una norma de elegibilidad de importación del país de destino, no una prohibición de exportación china, y se comprueba en el subsitio Market, no aquí. Solo marcamos un elemento como prohibido cuando una fuente oficial lo respalda; no añadimos restricciones de lado de conducción o de modelo que el texto oficial no contenga.',
        },
      ],
      links: [
        {
          href: 'https://market.chinausedautohub.com/countries/',
          label: {
            en: 'Destination-country import rules — Market sub-site',
            ar: 'قواعد الاستيراد حسب بلد الوجهة — الموقع الفرعي للأسواق',
            ru: 'Правила импорта стран назначения — подсайт Market',
            es: 'Normas de importación por país de destino — subsitio Market',
          },
        },
      ],
    },
    {
      heading: {
        en: 'What to check before payment',
        ar: 'ما يجب فحصه قبل الدفع',
        ru: 'Что проверять перед оплатой',
        es: 'Qué comprobar antes del pago',
      },
      checklist: [
        {
          en: 'Confirm the vehicle is within its legal use life, not at or near the scrapping standard',
          ar: 'أكّد أن المركبة ضمن عمر استخدامها القانوني، وليست عند معيار الإتلاف أو قريباً منه',
          ru: 'Подтвердите, что автомобиль в пределах законного срока службы, не на уровне стандарта утилизации и не рядом с ним',
          es: 'Confirme que el vehículo está dentro de su vida útil legal, no en el estándar de desguace ni cerca de él',
        },
        {
          en: 'Confirm the VIN, model and owner match the registration certificate exactly',
          ar: 'أكّد أن رقم الهيكل والطراز والمالك يطابقون شهادة التسجيل تماماً',
          ru: 'Подтвердите, что VIN, модель и владелец точно совпадают со свидетельством о регистрации',
          es: 'Confirme que el VIN, el modelo y el propietario coinciden exactamente con el certificado de registro',
        },
        {
          en: 'Confirm the vehicle is free of mortgage, pledge, seizure or customs supervision',
          ar: 'أكّد أن المركبة خالية من الرهن أو الحجز أو المصادرة أو الإشراف الجمركي',
          ru: 'Подтвердите, что автомобиль свободен от залога, заклада, ареста или таможенного надзора',
          es: 'Confirme que el vehículo está libre de hipoteca, prenda, embargo o supervisión aduanera',
        },
        {
          en: 'Confirm there are no unresolved traffic violations or accidents',
          ar: 'أكّد عدم وجود مخالفات مرورية أو حوادث غير معالجة',
          ru: 'Подтвердите, что нет неразрешённых нарушений ПДД или ДТП',
          es: 'Confirme que no hay infracciones de tráfico ni accidentes sin resolver',
        },
        {
          en: 'For a modified vehicle, ask for proof of the authenticity of the modification',
          ar: 'للمركبة المعدّلة، اطلب إثباتاً على أصالة التعديل',
          ru: 'Для модифицированного автомобиля запросите подтверждение подлинности модификации',
          es: 'Para un vehículo modificado, pida prueba de la autenticidad de la modificación',
        },
      ],
    },
    {
      heading: {
        en: 'Facts vs interpretation',
        ar: 'الحقائق مقابل التفسير',
        ru: 'Факты и толкование',
        es: 'Hechos frente a interpretación',
      },
      paragraphs: [
        {
          en: 'The prohibited categories above are quoted from section 六 of the 2024 No. 6 announcement and the modified-vehicle and dishonest-behaviour provisions of 商贸函〔2025〕648号. How a category is applied to a specific vehicle — for example, how close "within one year of scrapping" is measured — is decided by the authorities and can vary. Where a detail is not settled by the official text, do not rely on a general summary: confirm the current requirement with the relevant authority or a qualified exporter before shipment.',
          ar: 'الفئات المحظورة أعلاه مقتبسة من القسم 六 من إعلان 2024 رقم 6 وأحكام المركبات المعدّلة والسلوك غير النزيه في 商贸函〔2025〕648号. أما كيفية تطبيق فئة على مركبة محددة — مثلاً، كيف يُقاس «خلال سنة من الإتلاف» — فتقرره السلطات وقد يختلف. وعندما لا يحسم النص الرسمي تفصيلاً، لا تعتمد على ملخص عام: أكّد المتطلب الحالي مع السلطة المختصة أو مصدّر مؤهل قبل الشحن.',
          ru: 'Приведённые запрещённые категории цитируются из раздела 六 объявления № 6 2024 года и положений о модифицированных автомобилях и недобросовестном поведении из 商贸函〔2025〕648号. Как категория применяется к конкретному автомобилю — например, как измеряется «в течение года до утилизации» — решают органы, и это может различаться. Если деталь не урегулирована официальным текстом, не полагайтесь на общую сводку: подтвердите актуальное требование у соответствующего органа или квалифицированного экспортёра до отгрузки.',
          es: 'Las categorías prohibidas anteriores se citan de la sección 六 del anuncio n.º 6 de 2024 y de las disposiciones sobre vehículos modificados y conducta deshonesta de 商贸函〔2025〕648号. Cómo se aplica una categoría a un vehículo concreto — por ejemplo, cómo se mide «a un año del desguace» — lo deciden las autoridades y puede variar. Cuando un detalle no esté resuelto por el texto oficial, no se base en un resumen general: confirme el requisito vigente con la autoridad correspondiente o un exportador cualificado antes del envío.',
        },
      ],
    },
    {
      heading: {
        en: 'Official sources',
        ar: 'المصادر الرسمية',
        ru: 'Официальные источники',
        es: 'Fuentes oficiales',
      },
      paragraphs: [
        {
          en: 'The prohibited categories and the dishonest-behaviour list are drawn from the following current Chinese official documents, verified on 2026-10-08:',
          ar: 'الفئات المحظورة وقائمة السلوك غير النزيه مستمدة من الوثائق الصينية الرسمية الحالية التالية، وتم التحقق منها في 2026-10-08:',
          ru: 'Запрещённые категории и список недобросовестного поведения взяты из следующих действующих китайских официальных документов, проверенных 2026-10-08:',
          es: 'Las categorías prohibidas y la lista de conducta deshonesta proceden de los siguientes documentos oficiales chinos vigentes, verificados el 2026-10-08:',
        },
        {
          en: '1. 商务部等5部门《关于二手车出口有关事项的公告》(2024年第6号, effective 2024-03-01) — the ten prohibited-export situations are in section 六. https://www.mofcom.gov.cn/zcfb/blgg/bl/2024/art/2024/art_92204c384cb34be5b63d169eba63759c.html',
          ar: '1. إعلان 5 جهات «بشأن المسائل المتعلقة بتصدير السيارات المستعملة» (2024年第6号، ساري من 2024-03-01) — حالات حظر التصدير العشر في القسم 六. https://www.mofcom.gov.cn/zcfb/blgg/bl/2024/art/2024/art_92204c384cb34be5b63d169eba63759c.html',
          ru: '1. Объявление 5 ведомств «О вопросах экспорта подержанных автомобилей» (2024年第6号, действует с 2024-03-01) — десять запрещённых ситуаций экспорта в разделе 六. https://www.mofcom.gov.cn/zcfb/blgg/bl/2024/art/2024/art_92204c384cb34be5b63d169eba63759c.html',
          es: '1. Anuncio de 5 departamentos «Sobre asuntos relacionados con la exportación de coches usados» (2024年第6号, vigente desde 2024-03-01) — las diez situaciones de exportación prohibida están en la sección 六. https://www.mofcom.gov.cn/zcfb/blgg/bl/2024/art/2024/art_92204c384cb34be5b63d169eba63759c.html',
        },
        {
          en: '2. 商务部、工业和信息化部、公安部、海关总署《关于进一步加强二手车出口管理工作的通知》(商贸函〔2025〕648号, 2025-11-11) — the dishonest-behaviour negative list (attachment 1) and the modified-vehicle licence conditions (section 二(四)). https://www.gov.cn/zhengce/zhengceku/202511/content_7048644.htm',
          ar: '2. وزارة التجارة ووزارة الصناعة وتكنولوجيا المعلومات ووزارة الأمن العام والجمارك «بشأن زيادة تعزيز إدارة أعمال تصدير السيارات المستعملة» (商贸函〔2025〕648号، 2025-11-11) — القائمة السلبية للسلوك غير النزيه (الملحق 1) وشروط رخصة المركبات المعدّلة (القسم 二(四)). https://www.gov.cn/zhengce/zhengceku/202511/content_7048644.htm',
          ru: '2. Минторг, Министерство промышленности и информатизации, Министерство общественной безопасности и таможня «О дальнейшем усилении управления экспортом подержанных автомобилей» (商贸函〔2025〕648号, 2025-11-11) — негативный список недобросовестного поведения (приложение 1) и условия лицензии для модифицированных автомобилей (раздел 二(四)). https://www.gov.cn/zhengce/zhengceku/202511/content_7048644.htm',
          es: '2. MOFCOM, MIIT, MPS y GACC «Sobre el refuerzo adicional de la gestión de la exportación de coches usados» (商贸函〔2025〕648号, 2025-11-11) — la lista negativa de conducta deshonesta (anexo 1) y las condiciones de licencia para vehículos modificados (sección 二(四)). https://www.gov.cn/zhengce/zhengceku/202511/content_7048644.htm',
        },
      ],
    },
    {
      heading: {
        en: 'Related resources and next steps',
        ar: 'موارد ذات صلة والخطوات التالية',
        ru: 'Связанные ресурсы и следующие шаги',
        es: 'Recursos relacionados y próximos pasos',
      },
      links: [
        {
          slug: 'china-used-car-export-compliance',
          label: {
            en: 'The full compliance picture — Export Compliance guide',
            ar: 'الصورة الكاملة للامتثال — دليل الامتثال للتصدير',
            ru: 'Полная картина соответствия — руководство по соответствию экспорту',
            es: 'El panorama completo de cumplimiento — guía de cumplimiento de exportación',
          },
        },
        {
          slug: 'china-180-day-used-car-export-rule',
          label: {
            en: 'The near-new vehicle control — 180-Day Rule guide',
            ar: 'رقابة المركبات شبه الجديدة — دليل قاعدة 180 يوماً',
            ru: 'Контроль почти новых автомобилей — руководство по правилу 180 дней',
            es: 'El control de vehículos seminuevos — guía de la regla de los 180 días',
          },
        },
        {
          slug: 'how-to-verify-a-vehicle-before-payment',
          label: {
            en: 'Check the vehicle before you pay — Verify Before Payment guide',
            ar: 'افحص المركبة قبل الدفع — دليل «التحقق قبل الدفع»',
            ru: 'Проверьте автомобиль до оплаты — руководство «Проверить перед оплатой»',
            es: 'Compruebe el vehículo antes de pagar — guía «Verificar antes del pago»',
          },
        },
        {
          href: 'https://chinausedautohub.com/china-used-car-export-rules/',
          label: {
            en: 'The 2026 policy hub — China Used Car Export Rules',
            ar: 'مركز سياسات 2026 — قواعد تصدير السيارات المستعملة من الصين',
            ru: 'Хаб политики 2026 — правила экспорта подержанных автомобилей из Китая',
            es: 'El hub de política 2026 — normas de exportación de coches usados desde China',
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
          en: 'Last reviewed: 2026-10-08. This page summarises Chinese official export prohibitions for overseas buyers and is not legal advice. The prohibited categories and the dishonest-behaviour list are quoted from their official sources; how a category is applied to a specific vehicle is decided by the Chinese export authorities and can change. We list an item as prohibited only where an official source supports it. Confirm the current requirement with the relevant authority or a qualified exporter before shipment.',
          ar: 'آخر مراجعة: 2026-10-08. تلخّص هذه الصفحة المحظورات الرسمية الصينية للتصدير للمشترين في الخارج وليست استشارة قانونية. الفئات المحظورة وقائمة السلوك غير النزيه مقتبسة من مصادرهما الرسمية؛ أما كيفية تطبيق فئة على مركبة محددة فتقره سلطات التصدير الصينية وقد تتغير. ندرج عنصراً كمحظور فقط عندما يدعمه مصدر رسمي. أكّد المتطلب الحالي مع السلطة المختصة أو مصدّر مؤهل قبل الشحن.',
          ru: 'Последняя проверка: 2026-10-08. Эта страница обобщает китайские официальные запреты на экспорт для зарубежных покупателей и не является юридической консультацией. Запрещённые категории и список недобросовестного поведения цитируются из официальных источников; как категория применяется к конкретному автомобилю, решают экспортные органы Китая, и это может меняться. Мы указываем пункт как запрещённый только там, где его подтверждает официальный источник. Подтвердите актуальное требование у соответствующего органа или квалифицированного экспортёра до отгрузки.',
          es: 'Última revisión: 2026-10-08. Esta página resume las prohibiciones oficiales chinas de exportación para compradores extranjeros y no constituye asesoramiento legal. Las categorías prohibidas y la lista de conducta deshonesta se citan de sus fuentes oficiales; cómo se aplica una categoría a un vehículo concreto lo deciden las autoridades de exportación chinas y puede cambiar. Solo marcamos un elemento como prohibido cuando una fuente oficial lo respalda. Confirme el requisito vigente con la autoridad correspondiente o un exportador cualificado antes del envío.',
        },
      ],
    },
  ],
};
