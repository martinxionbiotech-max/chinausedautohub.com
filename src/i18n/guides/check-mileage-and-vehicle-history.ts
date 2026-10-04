import type { L10n } from '../l10n';

// Guide — How to Check Mileage and Vehicle History (signal-based verification, odometer-rollback risk).

export const checkMileageHistory = {
  slug: 'check-mileage-and-vehicle-history',
  title: {
    en: 'How to Check Mileage and Vehicle History on a Used Car from China',
    ar: 'كيف تتحقق من المسافة المقطوعة وسجل المركبة لسيارة مستعملة من الصين',
    ru: 'Как проверить пробег и историю подержанного автомобиля из Китая',
    es: 'Cómo comprobar el kilometraje y el historial de un coche usado de China',
  },
  description: {
    en: 'A practical method for verifying a used car\'s odometer and history: cross-check service records, interior and tire wear, diagnostic readouts and VIN consistency, and treat inconsistent signals as a rollback risk.',
    ar: 'طريقة عملية للتحقق من عداد المسافة وسجل السيارة المستعملة: قارن سجلات الصيانة وتآكل المقصورة والإطارات وقراءات التشخيص واتساق رقم الهيكل، وعامل الإشارات المتعارضة كمؤشر خطر على التلاعب بالعداد.',
    ru: 'Практический метод проверки одометра и истории подержанного автомобиля: сопоставьте записи о ТО, износ салона и шин, показания диагностики и соответствие VIN и относитесь к несовпадающим сигналам как к риску скрученного пробега.',
    es: 'Un método práctico para verificar el cuentakilómetros y el historial de un coche usado: cruce los registros de servicio, el desgaste interior y de neumáticos, las lecturas de diagnóstico y la coherencia del VIN, y trate las señales incoherentes como riesgo de manipulación del kilometraje.',
  },
  h1: {
    en: 'How to Check Mileage and Vehicle History',
    ar: 'كيف تتحقق من المسافة المقطوعة وسجل المركبة',
    ru: 'Как проверить пробег и историю автомобиля',
    es: 'Cómo comprobar el kilometraje y el historial del vehículo',
  },
  summary: {
    en: 'How to cross-check a used car\'s odometer against service records, wear and diagnostics, and how to treat inconsistent signals.',
    ar: 'كيف تقارن عداد المسافة لسيارة مستعملة مع سجلات الصيانة والتآكل والتشخيص، وكيف تتعامل مع الإشارات المتعارضة.',
    ru: 'Как сопоставить одометр подержанного автомобиля с записями о ТО, износом и диагностикой и как относиться к несовпадающим сигналам.',
    es: 'Cómo cruzar el cuentakilómetros de un coche usado con los registros de servicio, el desgaste y el diagnóstico, y cómo tratar las señales incoherentes.',
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
          en: 'To check mileage and vehicle history on a used car from China, cross-check the odometer against the service and maintenance records, the interior and tire wear, and any diagnostic or ECU readout, and treat inconsistent signals between these as an odometer-rollback risk. There is no single universal national mileage database an overseas buyer can query, so verification is built from several signals working together rather than from one lookup.',
          ar: 'للتحقق من المسافة المقطوعة وسجل المركبة لسيارة مستعملة من الصين، قارن عداد المسافة مع سجلات الصيانة والدورية، وتآكل المقصورة والإطارات، وأي قراءة تشخيصية أو من وحدة التحكم الإلكترونية (ECU)، وعامل أي تعارض بين هذه الإشارات كمؤشر خطر على التلاعب بالعداد. لا توجد قاعدة بيانات وطنية موحدة للمسافة يمكن للمشتري الخارجي الاستعلام عنها، لذا يُبنى التحقق من عدة إشارات تعمل معًا بدلاً من بحث واحد.',
          ru: 'Чтобы проверить пробег и историю подержанного автомобиля из Китая, сопоставьте одометр с записями о сервисном обслуживании, износом салона и шин и любыми показаниями диагностики или ЭБУ (ECU) и относитесь к несовпадениям между ними как к риску скрученного пробега. Единой общенациональной базы пробега, доступной зарубежному покупателю, не существует, поэтому проверка строится из нескольких сигналов, работающих вместе, а не из одного запроса.',
          es: 'Para comprobar el kilometraje y el historial de un coche usado de China, cruce el cuentakilómetros con los registros de servicio y mantenimiento, el desgaste interior y de neumáticos y cualquier lectura de diagnóstico o de la ECU, y trate las señales incoherentes entre ellos como riesgo de manipulación del cuentakilómetros. No existe una única base de datos nacional universal de kilometraje que un comprador extranjero pueda consultar, así que la verificación se construye a partir de varias señales que actúan juntas, no de una sola consulta.',
        },
      ],
    },
    {
      heading: {
        en: 'How mileage verification works in China',
        ar: 'كيف يعمل التحقق من المسافة المقطوعة في الصين',
        ru: 'Как работает проверка пробега в Китае',
        es: 'Cómo funciona la verificación del kilometraje en China',
      },
      paragraphs: [
        {
          en: 'Mileage verification for a vehicle sourced in China is signal-based. The odometer is a stored digital value and, on its own, is only one data point; it is never treated as proof. It is checked against a timeline of service records, against physical wear that accumulates with real use (pedals, seats, steering wheel, tires), and against values stored in control modules that a diagnostic tool or ECU readout can reveal. Registration and VIN consistency confirm the vehicle\'s identity and age, while the export and import age sets the plausible mileage range.',
          ar: 'التحقق من المسافة المقطوعة لمركبة مصدرها الصين يعتمد على الإشارات. عداد المسافة قيمة رقمية مخزنة، وهو وحده نقطة بيانات واحدة لا يُعامل كدليل أبدًا. يُقارن مع خط زمني من سجلات الصيانة، ومع التآكل المادي الذي يتراكم مع الاستخدام الفعلي (الدواسات والمقاعد وعجلة القيادة والإطارات)، ومع قيم مخزنة في وحدات التحكم تكشفها أداة التشخيص أو قراءة ECU. ويؤكد اتساق التسجيل ورقم الهيكل هوية المركبة وعمرها، بينما يحدد عمر التصدير والاستيراد النطاق المعقول للمسافة المقطوعة.',
          ru: 'Проверка пробега для автомобиля из Китая строится на сигналах. Одометр — это хранимое цифровое значение, и сам по себе он лишь одна точка данных, которую никогда не считают доказательством. Его сверяют с хронологией записей о ТО, с физическим износом, накапливающимся при реальной эксплуатации (педали, сиденья, руль, шины), и со значениями в блоках управления, которые может показать диагностический прибор или чтение ЭБУ. Соответствие регистрации и VIN подтверждает идентичность и возраст автомобиля, а возраст экспорта и импорта задаёт правдоподобный диапазон пробега.',
          es: 'La verificación del kilometraje de un vehículo procedente de China se basa en señales. El cuentakilómetros es un valor digital almacenado y, por sí solo, es solo un dato que nunca se toma como prueba. Se coteja con una línea temporal de registros de servicio, con el desgaste físico que se acumula con el uso real (pedales, asientos, volante, neumáticos) y con valores guardados en módulos de control que puede revelar una herramienta de diagnóstico o una lectura de la ECU. La coherencia del registro y del VIN confirma la identidad y la antigüedad del vehículo, mientras que la edad de exportación e importación fija el rango plausible de kilometraje.',
        },
        {
          en: 'The method works because no single signal is reliable on its own. A cluster can be replaced, a service book can be incomplete, and wear can be masked by reconditioning. Only when several independent signals agree is the stated mileage reasonably supported; when they conflict, the buyer has reason to ask more questions.',
          ar: 'تعمل الطريقة لأنه لا توجد إشارة واحدة موثوقة وحدها. يمكن استبدال لوحة العدادات، وقد يكون سجل الصيانة ناقصًا، وقد يُخفى التآكل بإعادة التجديد. فقط عندما تتفق عدة إشارات مستقلة تُدعم المسافة المعلنة بشكل معقول؛ وعندما تتعارض، يكون لدى المشتري سبب لطرح مزيد من الأسئلة.',
          ru: 'Метод работает потому, что ни один сигнал по отдельности не надёжен. Панель приборов можно заменить, сервисная книжка может быть неполной, а износ можно замаскировать восстановлением. Лишь когда несколько независимых сигналов согласуются, заявленный пробег можно считать разумно подтверждённым; когда они расходятся, у покупателя есть повод задать больше вопросов.',
          es: 'El método funciona porque ninguna señal es fiable por sí sola. Se puede sustituir un cuadro de instrumentos, un libro de servicio puede estar incompleto y el desgaste puede ocultarse con un reacondicionamiento. Solo cuando varias señales independientes coinciden queda razonablemente respaldado el kilometraje declarado; cuando entran en conflicto, el comprador tiene motivos para hacer más preguntas.',
        },
      ],
    },
    {
      heading: {
        en: 'Signals to cross-check',
        ar: 'الإشارات التي يجب مقارنتها',
        ru: 'Сигналы для сопоставления',
        es: 'Señales que cruzar',
      },
      paragraphs: [
        {
          en: 'Use this table as a working checklist. For each signal, compare what you can see or read against the stated mileage, and treat any warning sign as a reason to request more evidence or an inspection.',
          ar: 'استخدم هذا الجدول كقائمة عمل. لكل إشارة، قارن ما يمكنك رؤيته أو قراءته مع المسافة المعلنة، وعامل أي علامة تحذير كسبب لطلب مزيد من الأدلة أو الفحص.',
          ru: 'Используйте эту таблицу как рабочий чек-лист. По каждому сигналу сопоставьте то, что вы видите или читаете, с заявленным пробегом и относитесь к любому тревожному сигналу как к поводу запросить больше подтверждений или проверку.',
          es: 'Use esta tabla como lista de trabajo. Para cada señal, compare lo que puede ver o leer con el kilometraje declarado y trate cualquier señal de alarma como motivo para pedir más evidencia o una inspección.',
        },
      ],
      table: {
        headers: [
          { en: 'Signal', ar: 'الإشارة', ru: 'Сигнал', es: 'Señal' },
          { en: 'What to check', ar: 'ما يجب التحقق منه', ru: 'Что проверять', es: 'Qué comprobar' },
          { en: 'Warning signs', ar: 'علامات التحذير', ru: 'Тревожные сигналы', es: 'Señales de alarma' },
        ],
        rows: [
          [
            { en: 'Odometer reading', ar: 'قراءة عداد المسافة', ru: 'Показания одометра', es: 'Lectura del cuentakilómetros' },
            { en: 'Record the displayed reading and compare it with any document or diagnostic value you hold.', ar: 'سجّل القراءة المعروضة وقارنها مع أي وثيقة أو قيمة تشخيصية لديك.', ru: 'Зафиксируйте показание и сравните его с любым документом или значением диагностики, которое у вас есть.', es: 'Registre la lectura mostrada y compárela con cualquier documento o valor de diagnóstico que tenga.' },
            { en: 'A reading that drops between records, a replaced or loose cluster, or a value that conflicts with diagnostics.', ar: 'قراءة تنخفض بين السجلات، أو لوحة عدادات مستبدلة أو مرتخية، أو قيمة تتعارض مع التشخيص.', ru: 'Показание, уменьшающееся между записями, заменённая или незакреплённая панель приборов либо значение, противоречащее диагностике.', es: 'Una lectura que baja entre registros, un cuadro sustituido o suelto, o un valor que contradice el diagnóstico.' },
          ],
          [
            { en: 'Service & maintenance records', ar: 'سجلات الصيانة والدورية', ru: 'Записи о сервисном обслуживании', es: 'Registros de servicio y mantenimiento' },
            { en: 'Check that recorded mileage increases consistently over time across services, with no unexplained gaps.', ar: 'تحقق من أن المسافة المسجلة تزداد باستمرار مع الوقت عبر الخدمات، دون فجوات غير مفسرة.', ru: 'Проверьте, что зафиксированный пробег растёт последовательно со временем между ТО, без необъяснимых пробелов.', es: 'Compruebe que el kilometraje registrado aumenta de forma constante a lo largo del tiempo entre servicios, sin vacíos sin explicación.' },
            { en: 'Long gaps in the history, mileage that jumps backwards, or records that stop abruptly.', ar: 'فجوات طويلة في السجل، أو مسافة تقفز للخلف، أو سجلات تتوقف فجأة.', ru: 'Длительные пробелы в истории, пробег, скачущий назад, или записи, резко обрывающиеся.', es: 'Largos vacíos en el historial, kilometraje que salta hacia atrás o registros que se cortan de repente.' },
          ],
          [
            { en: 'Interior wear (pedals, seats, wheel)', ar: 'تآكل المقصورة (الدواسات والمقاعد وعجلة القيادة)', ru: 'Износ салона (педали, сиденья, руль)', es: 'Desgaste interior (pedales, asientos, volante)' },
            { en: 'Match pedal, seat and steering-wheel wear to the stated mileage and age.', ar: 'طابق تآكل الدواسات والمقاعد وعجلة القيادة مع المسافة والعمر المعلنين.', ru: 'Сопоставьте износ педалей, сидений и руля с заявленным пробегом и возрастом.', es: 'Coteje el desgaste de pedales, asientos y volante con el kilometraje y la antigüedad declarados.' },
            { en: 'Low stated mileage with heavy interior wear, or new pedal/seat covers that hide wear.', ar: 'مسافة معلنة منخفضة مع تآكل داخلي شديد، أو أغطية دواسات/مقاعد جديدة تخفي التآكل.', ru: 'Низкий заявленный пробег при сильном износе салона либо новые накладки педалей/чехлы сидений, скрывающие износ.', es: 'Kilometraje declarado bajo con un desgaste interior intenso, o fundas nuevas de pedales/asientos que ocultan el desgaste.' },
          ],
          [
            { en: 'Tire wear & dates', ar: 'تآكل الإطارات وتواريخها', ru: 'Износ и даты шин', es: 'Desgaste y fechas de los neumáticos' },
            { en: 'Compare tread depth and the tire manufacturing date codes with the stated mileage and age.', ar: 'قارن عمق المداس وأكواد تاريخ تصنيع الإطارات مع المسافة والعمر المعلنين.', ru: 'Сравните глубину протектора и коды даты производства шин с заявленным пробегом и возрастом.', es: 'Compare la profundidad del dibujo y los códigos de fecha de fabricación de los neumáticos con el kilometraje y la antigüedad declarados.' },
            { en: 'Worn or mismatched tires that are inconsistent with the stated mileage, or tires far newer than the car suggests.', ar: 'إطارات متآكلة أو غير متطابقة لا تتفق مع المسافة المعلنة، أو إطارات أحدث بكثير مما يوحي به عمر السيارة.', ru: 'Изношенные или несовпадающие шины, не соответствующие заявленному пробегу, либо шины заметно новее, чем предполагает возраст автомобиля.', es: 'Neumáticos desgastados o dispares incoherentes con el kilometraje declarado, o neumáticos mucho más nuevos de lo que sugiere la edad del coche.' },
          ],
          [
            { en: 'Diagnostic / ECU readout', ar: 'قراءة التشخيص / وحدة التحكم (ECU)', ru: 'Показания диагностики / ЭБУ', es: 'Lectura de diagnóstico / ECU' },
            { en: 'Request a diagnostic readout and compare stored values in control modules with the cluster reading.', ar: 'اطلب قراءة تشخيصية وقارن القيم المخزنة في وحدات التحكم مع قراءة لوحة العدادات.', ru: 'Запросите чтение диагностики и сравните значения, хранящиеся в блоках управления, с показанием панели приборов.', es: 'Solicite una lectura de diagnóstico y compare los valores almacenados en los módulos de control con la lectura del cuadro.' },
            { en: 'Control-module values that differ materially from the odometer, or stored fault data that suggests tampering.', ar: 'قيم وحدات التحكم تختلف ماديًا عن عداد المسافة، أو بيانات أخطاء مخزنة توحي بالعبث.', ru: 'Значения в блоках управления, заметно отличающиеся от одометра, или сохранённые коды ошибок, указывающие на вмешательство.', es: 'Valores de los módulos de control que difieren materialmente del cuentakilómetros, o datos de fallo almacenados que sugieren manipulación.' },
          ],
          [
            { en: 'Accident & repair history', ar: 'سجل الحوادث والإصلاح', ru: 'История ДТП и ремонтов', es: 'Historial de accidentes y reparaciones' },
            { en: 'Review any collision or repair history and its confidence level; major repair can sit alongside a misleadingly low mileage.', ar: 'راجع أي سجل تصادم أو إصلاح ومستوى ثقته؛ فقد يصاحب الإصلاح الكبير مسافة منخفضة مضللة.', ru: 'Изучите историю столкновений или ремонтов и её уровень достоверности; крупный ремонт может сочетаться с вводящим в заблуждение низким пробегом.', es: 'Revise el historial de colisiones o reparaciones y su nivel de confianza; una reparación grave puede ir junto a un kilometraje engañosamente bajo.' },
            { en: 'Major collision repair that a "clean" record does not explain, or repair history that conflicts with the stated condition.', ar: 'إصلاح تصادم كبير لا يفسره سجل "نظيف"، أو سجل إصلاح يتعارض مع الحالة المعلنة.', ru: 'Крупный кузовной ремонт, который «чистая» история не объясняет, либо история ремонтов, противоречащая заявленному состоянию.', es: 'Una reparación de colisión grave que un historial «limpio» no explica, o un historial de reparaciones que contradice el estado declarado.' },
          ],
          [
            { en: 'Registration & VIN consistency', ar: 'اتساق التسجيل ورقم الهيكل', ru: 'Соответствие регистрации и VIN', es: 'Coherencia del registro y del VIN' },
            { en: 'Confirm the VIN, make, model, year and registration details match each other and the vehicle.', ar: 'أكد أن رقم الهيكل والصنع والطراز والسنة وتفاصيل التسجيل تتطابق مع بعضها ومع المركبة.', ru: 'Подтвердите, что VIN, марка, модель, год и регистрационные данные совпадают между собой и с автомобилем.', es: 'Confirme que el VIN, la marca, el modelo, el año y los datos de registro coinciden entre sí y con el vehículo.' },
            { en: 'A VIN or identity that does not match the documents, or a VIN plate showing signs of alteration.', ar: 'رقم هيكل أو هوية لا يطابقان الوثائق، أو لوحة رقم الهيكل تظهر علامات تغيير.', ru: 'VIN или идентичность, не совпадающие с документами, либо табличка VIN со следами изменения.', es: 'Un VIN o identidad que no coincide con los documentos, o una placa del VIN con señales de alteración.' },
          ],
          [
            { en: 'Export & import age', ar: 'عمر التصدير والاستيراد', ru: 'Возраст экспорта и импорта', es: 'Edad de exportación e importación' },
            { en: 'Use the vehicle\'s age and typical usage to set a plausible mileage range, then test the stated figure against it.', ar: 'استخدم عمر المركبة والاستخدام النموذجي لتحديد نطاق معقول للمسافة، ثم اختبر الرقم المعلن مقابله.', ru: 'Используйте возраст автомобиля и типичный пробег, чтобы задать правдоподобный диапазон, а затем проверьте заявленную цифру на его фоне.', es: 'Use la antigüedad del vehículo y su uso típico para fijar un rango plausible de kilometraje y luego contraste la cifra declarada con él.' },
            { en: 'A stated mileage far below the plausible range for the vehicle\'s age without supporting evidence.', ar: 'مسافة معلنة أدنى بكثير من النطاق المعقول لعمر المركبة دون أدلة داعمة.', ru: 'Заявленный пробег намного ниже правдоподобного диапазона для возраста автомобиля без подтверждающих данных.', es: 'Un kilometraje declarado muy por debajo del rango plausible para la edad del vehículo sin evidencia que lo respalde.' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'Buyer considerations',
        ar: 'اعتبارات المشتري',
        ru: 'Соображения для покупателя',
        es: 'Consideraciones para el comprador',
      },
      paragraphs: [
        {
          en: 'A professional buyer should treat mileage verification as a confidence-building exercise, not a single yes/no answer. In China there is no single universal national database that an overseas buyer can query to confirm a vehicle\'s mileage, so the practical approach is to gather several signals and see whether they agree. Where the signals align, confidence is higher; where they do not, the buyer should slow down.',
          ar: 'يجب على المشتري المحترف أن يعامل التحقق من المسافة كتمرين لبناء الثقة، لا كإجابة واحدة بنعم/لا. في الصين لا توجد قاعدة بيانات وطنية موحدة يمكن للمشتري الخارجي الاستعلام عنها لتأكيد مسافة المركبة، لذا فالأسلوب العملي هو جمع عدة إشارات ومعرفة هل تتفق. حيث تتوافق الإشارات تكون الثقة أعلى؛ وحيث لا تتوافق، يجب أن يتمهل المشتري.',
          ru: 'Профессиональному покупателю стоит относиться к проверке пробега как к наращиванию уверенности, а не как к однозначному ответу «да/нет». В Китае нет единой общенациональной базы, которую зарубежный покупатель мог бы запросить для подтверждения пробега, поэтому практичный подход — собрать несколько сигналов и посмотреть, согласуются ли они. Где сигналы совпадают, уверенность выше; где нет — покупателю стоит притормозить.',
          es: 'Un comprador profesional debe tratar la verificación del kilometraje como un ejercicio para ganar confianza, no como una única respuesta de sí/no. En China no existe una única base de datos nacional universal que un comprador extranjero pueda consultar para confirmar el kilometraje de un vehículo, así que el enfoque práctico es reunir varias señales y ver si coinciden. Donde las señales se alinean, la confianza es mayor; donde no, el comprador debe ir con calma.',
        },
        {
          en: 'A third-party inspection strengthens confidence where it is available for the vehicle and location. Ask us what is possible for the specific car you are considering, and request the exact photos, videos or diagnostic readouts you need before committing.',
          ar: 'يعزز الفحص من طرف ثالث الثقة حيثما يتوفر للمركبة والموقع. اسألنا عما هو ممكن للسيارة المحددة التي تفكر فيها، واطلب الصور أو مقاطع الفيديو أو قراءات التشخيص الدقيقة التي تحتاجها قبل الالتزام.',
          ru: 'Сторонняя проверка повышает уверенность там, где она доступна для автомобиля и его местонахождения. Спросите нас, что возможно для конкретной машины, которую вы рассматриваете, и запросите точные фото, видео или диагностические чтения, которые вам нужны, до принятия обязательств.',
          es: 'Una inspección de terceros refuerza la confianza cuando está disponible para el vehículo y su ubicación. Pregúntenos qué es posible para el coche concreto que está considerando y solicite las fotos, vídeos o lecturas de diagnóstico exactas que necesite antes de comprometerse.',
        },
      ],
    },
    {
      heading: {
        en: 'Limitations',
        ar: 'القيود',
        ru: 'Ограничения',
        es: 'Limitaciones',
      },
      paragraphs: [
        {
          en: 'Mileage verification has real limits. Service and maintenance records may be unavailable, partial or seller-supplied, and diagnostic access may not be possible for every vehicle. The absence of a record is not proof of odometer rollback — it simply means the evidence is thin — but it does raise the need for an inspection and for more questions before purchase.',
          ar: 'للتحقق من المسافة حدود حقيقية. قد تكون سجلات الصيانة والدورية غير متوفرة أو جزئية أو مقدمة من البائع، وقد لا يتسنى الوصول التشخيصي لكل مركبة. وغياب السجل ليس دليلاً على التلاعب بالعداد — بل يعني ببساطة أن الأدلة ضعيفة — لكنه يرفع الحاجة إلى الفحص ومزيد من الأسئلة قبل الشراء.',
          ru: 'У проверки пробега есть реальные пределы. Записи о сервисном обслуживании могут быть недоступны, неполны или предоставлены продавцом, а доступ к диагностике возможен не для каждого автомобиля. Отсутствие записи — не доказательство скрученного пробега: оно лишь означает, что доказательств мало, но повышает потребность в проверке и дополнительных вопросах перед покупкой.',
          es: 'La verificación del kilometraje tiene límites reales. Los registros de servicio y mantenimiento pueden no estar disponibles, ser parciales o estar facilitados por el vendedor, y el acceso al diagnóstico puede no ser posible para todos los vehículos. La ausencia de un registro no es prueba de manipulación del cuentakilómetros — solo significa que la evidencia es escasa —, pero sí aumenta la necesidad de una inspección y de más preguntas antes de comprar.',
        },
      ],
    },
    {
      heading: {
        en: 'The method across the vehicle database',
        ar: 'الطريقة عبر قاعدة بيانات المركبات',
        ru: 'Метод в разрезе базы автомобилей',
        es: 'El método en la base de datos de vehículos',
      },
      paragraphs: [
        {
          en: 'The signal-based method is the same whether you are assessing a BYD Song Plus (DM-i PHEV or EV, where a diagnostic readout can add battery and odometer data), a Chery Tiggo 8, a Geely Monjaro, a Haval H6 or a Toyota RAV4. For electrified models the diagnostic readout is usually the strongest single signal; for conventional petrol models, service records and physical wear carry more weight. No two listings carry the same evidence, so check what is actually held for the specific vehicle rather than assuming.',
          ar: 'طريقة الإشارات هي نفسها سواء كنت تقيّم BYD Song Plus (نسخة DM-i الهجينة أو الكهربائية، حيث تضيف قراءة التشخيص بيانات البطارية والعداد) أو Chery Tiggo 8 أو Geely Monjaro أو Haval H6 أو Toyota RAV4. في الطرازات المكهربة تكون قراءة التشخيص عادةً أقوى إشارة منفردة؛ وفي طرازات البنزين التقليدية تحمل سجلات الصيانة والتآكل المادي وزنًا أكبر. لا يحمل أي إدراجين نفس الأدلة، لذا تحقق مما هو متوفر فعليًا للمركبة المحددة بدلاً من الافتراض.',
          ru: 'Метод по сигналам одинаков, оцениваете ли вы BYD Song Plus (гибрид DM-i или электромобиль, где чтение диагностики добавляет данные по батарее и пробегу), Chery Tiggo 8, Geely Monjaro, Haval H6 или Toyota RAV4. Для электрифицированных моделей чтение диагностики — обычно самый сильный отдельный сигнал; для обычных бензиновых — больший вес имеют записи о ТО и физический износ. Ни в двух объявлениях нет одинакового набора доказательств, поэтому проверяйте, что реально есть по конкретному автомобилю, а не предполагайте.',
          es: 'El método basado en señales es el mismo tanto si evalúa un BYD Song Plus (híbrido DM-i o VE, donde la lectura de diagnóstico añade datos de batería y kilometraje), un Chery Tiggo 8, un Geely Monjaro, un Haval H6 o un Toyota RAV4. En los modelos electrificados, la lectura de diagnóstico suele ser la señal individual más fuerte; en los modelos de gasolina convencionales, los registros de servicio y el desgaste físico pesan más. Ningún anuncio presenta la misma evidencia, así que compruebe qué se tiene realmente para el vehículo concreto en lugar de suponer.',
        },
      ],
    },
    {
      heading: {
        en: 'Related guides and resources',
        ar: 'أدلة وموارد ذات صلة',
        ru: 'Связанные руководства и ресурсы',
        es: 'Guías y recursos relacionados',
      },
      paragraphs: [
        {
          en: 'Mileage and history are one part of the inspection picture and one input to the buying decision. Use the inspection guide for the full condition checklist, the How to Buy guide for the suitability framework, the Data sub-site for the specific model\'s specifications, and contact us when you need a specific check for a vehicle.',
          ar: 'المسافة والسجل جزء من صورة الفحص ومدخل واحد لقرار الشراء. استخدم دليل الفحص لقائمة الحالة الكاملة، ودليل «كيف تشتري» لإطار الملاءمة، والموقع الفرعي للبيانات لمواصفات الطراز المحدد، وتواصل معنا عندما تحتاج فحصًا محددًا لمركبة.',
          ru: 'Пробег и история — часть картины проверки и один вход в решение о покупке. Используйте руководство по проверке для полного чек-листа состояния, руководство «Как купить» для структуры пригодности, подсайт Data для спецификаций конкретной модели и свяжитесь с нами, когда нужна конкретная проверка автомобиля.',
          es: 'El kilometraje y el historial son una parte de la inspección y un dato de la decisión de compra. Use la guía de inspección para la lista completa de estado, la guía «Cómo comprar» para el marco de idoneidad, el subsitio Data para las especificaciones del modelo concreto, y contáctenos cuando necesite una comprobación específica de un vehículo.',
        },
      ],
      links: [
        {
          slug: 'vehicle-inspection',
          label: {
            en: 'Full condition checklist — Vehicle Inspection guide',
            ar: 'قائمة الحالة الكاملة — دليل فحص المركبة',
            ru: 'Полный чек-лист состояния — руководство по проверке автомобиля',
            es: 'Lista completa de estado — guía de inspección del vehículo',
          },
        },
        {
          slug: 'how-to-buy-used-car-from-china',
          label: {
            en: 'Buying decision and suitability — How to Buy guide',
            ar: 'قرار الشراء والملاءمة — دليل «كيف تشتري»',
            ru: 'Решение о покупке и пригодность — руководство «Как купить»',
            es: 'Decisión de compra e idoneidad — guía «Cómo comprar»',
          },
        },
        {
          href: 'https://data.chinausedautohub.com/models/byd-song-plus/',
          label: {
            en: 'Model specifications example — BYD Song Plus (Data sub-site)',
            ar: 'مثال على مواصفات الطراز — BYD Song Plus (الموقع الفرعي للبيانات)',
            ru: 'Пример спецификаций модели — BYD Song Plus (подсайт Data)',
            es: 'Ejemplo de especificaciones de modelo — BYD Song Plus (subsitio Data)',
          },
        },
        {
          href: 'https://chinausedautohub.com/contact/',
          label: {
            en: 'Request a specific vehicle check — Contact',
            ar: 'اطلب فحصًا محددًا لمركبة — تواصل معنا',
            ru: 'Запросить конкретную проверку автомобиля — Контакты',
            es: 'Solicitar una comprobación específica de vehículo — Contacto',
          },
        },
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
          en: 'Is there a central Chinese mileage database I can query? No. There is no single universal national database an overseas buyer can query to confirm a vehicle\'s mileage. Verification is signal-based: you gather odometer, service, wear and diagnostic evidence and see whether they agree.',
          ar: 'هل توجد قاعدة بيانات صينية مركزية للمسافة يمكنني الاستعلام عنها؟ لا. لا توجد قاعدة بيانات وطنية موحدة يمكن للمشتري الخارجي الاستعلام عنها لتأكيد مسافة المركبة. التحقق يعتمد على الإشارات: تجمع أدلة العداد والصيانة والتآكل والتشخيص وترى هل تتفق.',
          ru: 'Есть ли центральная китайская база пробега, которую можно запросить? Нет. Единой общенациональной базы, доступной зарубежному покупателю для подтверждения пробега, не существует. Проверка строится на сигналах: вы собираете данные одометра, обслуживания, износа и диагностики и смотрите, согласуются ли они.',
          es: '¿Existe una base de datos central china de kilometraje que pueda consultar? No. No existe una única base de datos nacional universal que un comprador extranjero pueda consultar para confirmar el kilometraje de un vehículo. La verificación se basa en señales: reúna la evidencia de cuentakilómetros, servicio, desgaste y diagnóstico y vea si coinciden.',
        },
        {
          en: 'Does a missing service record mean the odometer was rolled back? Not by itself. The absence of a record only means the evidence is thin; it is not proof of rollback. Treat it as a reason to request an inspection or more documentation rather than as a conclusion.',
          ar: 'هل يعني غياب سجل الصيانة أن العداد تم التلاعب به؟ ليس بحد ذاته. غياب السجل يعني فقط أن الأدلة ضعيفة؛ وهو ليس دليلاً على التلاعب. عامله كسبب لطلب فحص أو مزيد من الوثائق بدلاً من اعتباره نتيجة.',
          ru: 'Означает ли отсутствие записи о ТО, что пробег скручен? Само по себе нет. Отсутствие записи лишь означает, что доказательств мало; это не доказательство скрутки. Относитесь к этому как к поводу запросить проверку или больше документов, а не как к выводу.',
          es: '¿Significa la ausencia de un registro de servicio que el cuentakilómetros fue manipulado? Por sí sola, no. La ausencia de un registro solo significa que la evidencia es escasa; no es prueba de manipulación. Trátelo como motivo para pedir una inspección o más documentación, no como una conclusión.',
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
          en: 'Last reviewed: 2026-10-04. This guide describes a general, signal-based method for checking mileage and vehicle history and does not certify any specific vehicle. It is general guidance, not a guarantee, and buyers should confirm any detail that affects their decision with current evidence, a diagnostic readout or an inspection before committing.',
          ar: 'آخر مراجعة: 2026-10-04. يصف هذا الدليل طريقة عامة قائمة على الإشارات للتحقق من المسافة المقطوعة وسجل المركبة، ولا يعتمد أي مركبة محددة. إنه إرشاد عام وليس ضمانًا، ويجب على المشترين تأكيد أي تفصيل يؤثر على قرارهم بأدلة حالية أو قراءة تشخيصية أو فحص قبل الالتزام.',
          ru: 'Последняя проверка: 2026-10-04. Это руководство описывает общий метод проверки пробега и истории по сигналам и не сертифицирует конкретный автомобиль. Это общее руководство, а не гарантия, и покупателям следует подтверждать любую важную для решения деталь актуальными данными, чтением диагностики или проверкой до принятия обязательств.',
          es: 'Última revisión: 2026-10-04. Esta guía describe un método general basado en señales para comprobar el kilometraje y el historial y no certifica ningún vehículo concreto. Es una orientación general, no una garantía, y los compradores deben confirmar cualquier detalle que afecte a su decisión con evidencia actual, una lectura de diagnóstico o una inspección antes de comprometerse.',
        },
      ],
    },
  ],
};
