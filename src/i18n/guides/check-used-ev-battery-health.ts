import type { L10n } from '../l10n';

// Guide — How to Check Used EV Battery Health.
// Battery health = state of health (SOH), best read from a BMS/OBD diagnostic
// report, not from a claimed CLTC range figure.

export const checkEvBatteryHealth = {
  slug: 'check-used-ev-battery-health',
  title: {
    en: 'How to Check Used EV Battery Health',
    ar: 'كيف تتحقق من صحة بطارية سيارة كهربائية مستعملة',
    ru: 'Как проверить здоровье батареи подержанного электромобиля',
    es: 'Cómo comprobar la salud de la batería de un VE usado',
  },
  description: {
    en: 'How to assess a used EV battery: state of health (SOH) from a diagnostic report, the signals to read, SOH thresholds, LFP vs NMC degradation, and why CLTC range is not a health measure.',
    ar: 'كيف تقيّم بطارية سيارة كهربائية مستعملة: حالة الصحة (SOH) من تقرير تشخيصي، والإشارات التي تقرؤها، وعتبات حالة الصحة، وتدهور LFP مقابل NMC، ولماذا مدى CLTC ليس مقياسًا للصحة.',
    ru: 'Как оценить батарею подержанного электромобиля: состояние здоровья (SOH) по диагностическому отчёту, какие сигналы читать, пороги SOH, деградация LFP и NMC и почему запас хода CLTC не является мерой здоровья.',
    es: 'Cómo evaluar la batería de un VE usado: estado de salud (SOH) a partir de un informe de diagnóstico, las señales que leer, los umbrales de SOH, la degradación LFP frente a NMC y por qué la autonomía CLTC no es una medida de salud.',
  },
  h1: {
    en: 'How to Check Used EV Battery Health',
    ar: 'كيف تتحقق من صحة بطارية سيارة كهربائية مستعملة',
    ru: 'Как проверить здоровье батареи подержанного электромобиля',
    es: 'Cómo comprobar la salud de la batería de un VE usado',
  },
  summary: {
    en: 'Read state of health from a BMS diagnostic report, not from a claimed range figure.',
    ar: 'اقرأ حالة الصحة من تقرير تشخيصي لنظام إدارة البطارية، لا من رقم مدى مُعلن.',
    ru: 'Читайте состояние здоровья по диагностическому отчёту BMS, а не по заявленному запасу хода.',
    es: 'Lea el estado de salud de un informe de diagnóstico del BMS, no de una cifra de autonomía anunciada.',
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
          en: 'Battery health in a used EV is state of health (SOH) — the battery\'s current usable capacity expressed as a percentage of its capacity when new. It is best read from a diagnostic report produced by the vehicle\'s battery management system (BMS) through the OBD port, not inferred from a claimed driving range. A seller\'s range figure is a homologation or marketing number; SOH is a measured value.',
          ar: 'صحة البطارية في السيارة الكهربائية المستعملة هي حالة الصحة (SOH) — أي السعة القابلة للاستخدام الحالية للبطارية معبَّرًا عنها كنسبة مئوية من سعتها عندما كانت جديدة. تُقرأ على أفضل وجه من تقرير تشخيصي يُنتجه نظام إدارة البطارية (BMS) عبر منفذ OBD، ولا تُستنتج من مدى قيادة مُعلن. فرقم المدى الذي يقدمه البائع هو رقم اعتماد أو تسويق؛ أما حالة الصحة فهي قيمة مقاسة.',
          ru: 'Здоровье батареи в подержанном электромобиле — это состояние здоровья (SOH), то есть текущая полезная ёмкость батареи в процентах от ёмкости новой. Его лучше всего считывать из диагностического отчёта, который формирует система управления батареей (BMS) через порт OBD, а не выводить из заявленного запаса хода. Цифра запаса хода от продавца — это омологационный или маркетинговый показатель; SOH — измеренная величина.',
          es: 'La salud de la batería en un VE usado es el estado de salud (SOH): la capacidad útil actual de la batería expresada como porcentaje de su capacidad de nueva. Se lee mejor en un informe de diagnóstico generado por el sistema de gestión de la batería (BMS) a través del puerto OBD, no se deduce de una autonomía anunciada. La cifra de autonomía del vendedor es un dato de homologación o marketing; el SOH es un valor medido.',
        },
      ],
    },
    {
      heading: {
        en: 'What battery health actually measures',
        ar: 'ما الذي تقيسه صحة البطارية فعليًا',
        ru: 'Что на самом деле измеряет здоровье батареи',
        es: 'Qué mide realmente la salud de la batería',
      },
      paragraphs: [
        {
          en: 'SOH is the ratio of current capacity to rated capacity. The BMS estimates it continuously from cell voltages, current flow, temperature and charge/discharge history. A diagnostic tool — an OBD reader or the manufacturer\'s/dealer\'s software — queries the BMS and returns SOH, cell voltage balance and internal resistance, alongside charge and temperature history.',
          ar: 'حالة الصحة هي نسبة السعة الحالية إلى السعة المُقدَّرة. ويقدّرها نظام إدارة البطارية باستمرار من جهود الخلايا وتدفق التيار ودرجة الحرارة وتاريخ الشحن/التفريغ. وتستعلم أداة تشخيصية — قارئ OBD أو برنامج المصنّع/الوكيل — من نظام إدارة البطارية فتعيد حالة الصحة وتوازن جهد الخلايا والمقاومة الداخلية، إلى جانب تاريخ الشحن ودرجة الحرارة.',
          ru: 'SOH — это отношение текущей ёмкости к паспортной. BMS оценивает его непрерывно по напряжениям ячеек, току, температуре и истории заряда/разряда. Диагностический инструмент — OBD-сканер или ПО производителя/дилера — опрашивает BMS и возвращает SOH, разбаланс напряжений ячеек и внутреннее сопротивление вместе с историей зарядки и температуры.',
          es: 'El SOH es la relación entre la capacidad actual y la nominal. El BMS lo estima continuamente a partir de las tensiones de las celdas, el flujo de corriente, la temperatura y el historial de carga/descarga. Una herramienta de diagnóstico — un lector OBD o el software del fabricante/concesionario — consulta el BMS y devuelve el SOH, el equilibrado de tensiones de celdas y la resistencia interna, junto con el historial de carga y temperatura.',
        },
        {
          en: 'This matters because the battery is the single most expensive component, and degradation depends on how the battery was used and charged, not only on distance driven. Two used EVs of the same model, year and odometer reading can carry very different SOH. Range follows SOH, so health is the number to verify before anything else.',
          ar: 'يهمّ هذا لأن البطارية هي أغلى مكوّن منفرد، ويعتمد التدهور على كيفية استخدام البطارية وشحنها، لا على المسافة المقطوعة وحدها. فقد تحمل سيارتان كهربائيتان مستعملتان من نفس الطراز والسنة وقراءة العداد حالة صحة مختلفة جدًا. والمدى يتبع حالة الصحة، لذا فالصحة هي الرقم الذي يجب التحقق منه قبل أي شيء آخر.',
          ru: 'Это важно, потому что батарея — самый дорогой отдельный компонент, а деградация зависит от того, как батарею использовали и заряжали, а не только от пробега. Два подержанных электромобиля одной модели, года и пробега могут иметь совершенно разный SOH. Запас хода следует за SOH, поэтому здоровье — это цифра, которую нужно проверить прежде всего.',
          es: 'Esto importa porque la batería es el componente individual más caro, y la degradación depende de cómo se usó y cargó la batería, no solo de la distancia recorrida. Dos VE usados del mismo modelo, año y kilometraje pueden tener un SOH muy distinto. La autonomía sigue al SOH, así que la salud es la cifra que verificar antes que cualquier otra.',
        },
      ],
    },
    {
      heading: {
        en: 'Reading the health signals',
        ar: 'قراءة إشارات الصحة',
        ru: 'Чтение сигналов здоровья',
        es: 'Leer las señales de salud',
      },
      paragraphs: [
        {
          en: 'The table below lists the signals a professional buyer reads, how to read each one, and what it tells you. Use them together: no single signal is conclusive on its own.',
          ar: 'يسرد الجدول أدناه الإشارات التي يقرؤها المشتري المحترف، وكيف يقرأ كلًا منها، وما تخبرك به. استخدمها معًا: فلا توجد إشارة واحدة حاسمة بمفردها.',
          ru: 'В таблице ниже перечислены сигналы, которые читает профессиональный покупатель, как читать каждый из них и что он означает. Используйте их вместе: ни один сигнал по отдельности не является решающим.',
          es: 'La tabla siguiente enumera las señales que lee un comprador profesional, cómo leer cada una y qué le dice. Úselas en conjunto: ninguna señal por sí sola es concluyente.',
        },
      ],
      table: {
        headers: [
          { en: 'Signal', ar: 'الإشارة', ru: 'Сигнал', es: 'Señal' },
          { en: 'How to read it', ar: 'كيف تقرؤها', ru: 'Как это читать', es: 'Cómo leerla' },
          { en: 'What it tells you', ar: 'ما تخبرك به', ru: 'Что это означает', es: 'Qué le dice' },
        ],
        rows: [
          [
            { en: 'Battery diagnostic report (SOH %)', ar: 'تقرير تشخيص البطارية (نسبة حالة الصحة)', ru: 'Диагностический отчёт по батарее (SOH %)', es: 'Informe de diagnóstico de batería (SOH %)' },
            { en: 'Request a BMS/OBD report showing SOH as a percentage, ideally with cell voltage balance and internal resistance.', ar: 'اطلب تقريرًا من BMS/OBD يعرض حالة الصحة كنسبة مئوية، ويُفضَّل مع توازن جهد الخلايا والمقاومة الداخلية.', ru: 'Запросите отчёт BMS/OBD с SOH в процентах, желательно с разбалансом напряжений ячеек и внутренним сопротивлением.', es: 'Pida un informe BMS/OBD que muestre el SOH como porcentaje, idealmente con el equilibrado de tensiones de celdas y la resistencia interna.' },
            { en: 'The most direct health measure; SOH sets real-world range and remaining useful life.', ar: 'أدقّ مقياس للصحة؛ فحالة الصحة تحدد المدى الفعلي والعمر الإنتاجي المتبقي.', ru: 'Самый прямой показатель здоровья; SOH задаёт реальный запас хода и остаточный ресурс.', es: 'La medida de salud más directa; el SOH fija la autonomía real y la vida útil restante.' },
          ],
          [
            { en: 'Odometer vs battery age', ar: 'عداد المسافة مقابل عمر البطارية', ru: 'Одометр против возраста батареи', es: 'Cuentakilómetros frente a antigüedad de la batería' },
            { en: 'Compare the odometer reading with the battery\'s calendar age and manufacturing date.', ar: 'قارن قراءة عداد المسافة مع عمر البطارية الزمني وتاريخ تصنيعها.', ru: 'Сравните показания одометра с календарным возрастом батареи и датой её изготовления.', es: 'Compare la lectura del cuentakilómetros con la antigüedad de la batería y su fecha de fabricación.' },
            { en: 'High distance on a young battery, or low distance on an old one, flags heavy fast-charging or poor storage habits.', ar: 'مسافة عالية على بطارية حديثة، أو مسافة منخفضة على بطارية قديمة، تنبّه إلى شحن سريع مكثّف أو عادات تخزين سيئة.', ru: 'Большой пробег на молодой батарее или малый на старой указывает на интенсивную быструю зарядку или плохие условия хранения.', es: 'Mucha distancia en una batería joven, o poca en una antigua, señala carga rápida intensa o malos hábitos de almacenamiento.' },
          ],
          [
            { en: 'Observed real-world range', ar: 'المدى الفعلي الملحوظ', ru: 'Наблюдаемый реальный запас хода', es: 'Autonomía real observada' },
            { en: 'Record the range at a known state of charge under controlled conditions and compare it with the rated range.', ar: 'سجّل المدى عند حالة شحن معروفة في ظروف مضبوطة وقارنه بالمدى المُقدَّر.', ru: 'Зафиксируйте запас хода при известном уровне заряда в контролируемых условиях и сравните с паспортным.', es: 'Registre la autonomía a un estado de carga conocido en condiciones controladas y compárela con la homologada.' },
            { en: 'A proxy for usable capacity; a large shortfall against the rated figure suggests degradation or a fault.', ar: 'مؤشر غير مباشر للسعة القابلة للاستخدام؛ فالنقص الكبير عن الرقم المُقدَّر يوحي بتدهور أو عطل.', ru: 'Косвенный показатель полезной ёмкости; большое отклонение от паспортной цифры указывает на деградацию или неисправность.', es: 'Un indicador de la capacidad útil; un gran déficit frente a la cifra homologada sugiere degradación o un fallo.' },
          ],
          [
            { en: 'Charging behaviour (speed, curve, losses)', ar: 'سلوك الشحن (السرعة، والمنحنى، والفاقد)', ru: 'Поведение при зарядке (скорость, кривая, потери)', es: 'Comportamiento de carga (velocidad, curva, pérdidas)' },
            { en: 'Observe charging speed and how it tapers, plus energy drawn versus energy stored.', ar: 'لاحظ سرعة الشحن وكيف تتناقص، إضافة إلى الطاقة المسحوبة مقابل الطاقة المخزَّنة.', ru: 'Наблюдайте скорость зарядки и её снижение, а также поданную энергию против сохранённой.', es: 'Observe la velocidad de carga y cómo se reduce, además de la energía consumida frente a la almacenada.' },
            { en: 'Slow charging, early tapering or higher losses indicate increased internal resistance or degradation.', ar: 'الشحن البطيء أو التناقص المبكر أو الفاقد الأعلى تشير إلى زيادة المقاومة الداخلية أو التدهور.', ru: 'Медленная зарядка, раннее снижение скорости или повышенные потери указывают на рост внутреннего сопротивления или деградацию.', es: 'La carga lenta, la reducción temprana o mayores pérdidas indican una resistencia interna elevada o degradación.' },
          ],
          [
            { en: 'Battery capacity vs nameplate', ar: 'سعة البطارية مقابل اللوحة الاسمية', ru: 'Ёмкость батареи против паспортной', es: 'Capacidad de la batería frente a la nominal' },
            { en: 'Compare the usable capacity the BMS reports with the nameplate (rated) capacity.', ar: 'قارن السعة القابلة للاستخدام التي يبلغها نظام إدارة البطارية مع السعة الاسمية (المُقدَّرة).', ru: 'Сравните полезную ёмкость, которую сообщает BMS, с паспортной (номинальной).', es: 'Compare la capacidad útil que informa el BMS con la capacidad nominal (homologada).' },
            { en: 'Usable capacity is always below rated; a widening gap is the direct expression of SOH loss.', ar: 'السعة القابلة للاستخدام أدنى دائمًا من المُقدَّرة؛ فاتساع الفجوة هو التعبير المباشر عن فقدان حالة الصحة.', ru: 'Полезная ёмкость всегда ниже паспортной; растущий разрыв — прямое выражение потери SOH.', es: 'La capacidad útil siempre es menor que la nominal; una brecha creciente es la expresión directa de la pérdida de SOH.' },
          ],
          [
            { en: 'Temperature & climate history', ar: 'تاريخ درجة الحرارة والمناخ', ru: 'История температуры и климата', es: 'Historial de temperatura y clima' },
            { en: 'Establish where and how the vehicle was used and stored — hot climate, sustained fast charging, long periods at high or low charge.', ar: 'حدّد أين وكيف استُخدمت المركبة وخُزّنت — مناخ حار، أو شحن سريع مطوّل، أو فترات طويلة عند شحن مرتفع أو منخفض.', ru: 'Установите, где и как использовали и хранили автомобиль: жаркий климат, длительная быстрая зарядка, долгие периоды при высоком или низком заряде.', es: 'Establezca dónde y cómo se usó y almacenó el vehículo: clima cálido, carga rápida sostenida, periodos largos con carga alta o baja.' },
            { en: 'Heat and sustained fast charging accelerate degradation; a hot-climate vehicle with heavy DC-charging history carries more risk.', ar: 'تسرّع الحرارة والشحن السريع المطوّل التدهور؛ فمركبة من مناخ حار بتاريخ شحن تيار مستمر مكثّف تحمل مخاطرة أكبر.', ru: 'Жара и длительная быстрая зарядка ускоряют деградацию; автомобиль из жаркого климата с интенсивной DC-зарядкой несёт больший риск.', es: 'El calor y la carga rápida sostenida aceleran la degradación; un vehículo de clima cálido con intensa carga en CC conlleva más riesgo.' },
          ],
          [
            { en: 'Warranty & replacement status', ar: 'الضمان وحالة الاستبدال', ru: 'Гарантия и статус замены', es: 'Garantía y estado de sustitución' },
            { en: 'Check whether the battery has been replaced, and whether the original warranty applies and transfers to your market.', ar: 'تحقق مما إذا كانت البطارية قد استُبدلت، وما إذا كان الضمان الأصلي ساريًا وينتقل إلى سوقك.', ru: 'Проверьте, заменялась ли батарея и действует ли оригинальная гарантия и переносится ли она на ваш рынок.', es: 'Compruebe si la batería ha sido sustituida y si la garantía original aplica y se transfiere a su mercado.' },
            { en: 'A replaced battery resets the SOH baseline; a non-transferring warranty removes the buyer\'s safety net.', ar: 'البطارية المستبدلة تعيد ضبط خط أساس حالة الصحة؛ والضمان غير المنتقل يزيل شبكة أمان المشتري.', ru: 'Заменённая батарея сбрасывает базовый уровень SOH; непередаваемая гарантия лишает покупателя подушки безопасности.', es: 'Una batería sustituida restablece la línea base de SOH; una garantía no transferible elimina la red de seguridad del comprador.' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'Buyer considerations — SOH thresholds, chemistry and the CLTC trap',
        ar: 'اعتبارات المشتري — عتبات حالة الصحة والكيمياء وفخّ CLTC',
        ru: 'Соображения покупателя — пороги SOH, химия и ловушка CLTC',
        es: 'Consideraciones del comprador — umbrales de SOH, química y la trampa del CLTC',
      },
      paragraphs: [
        {
          en: 'Treat SOH thresholds qualitatively, not as one universal number. A battery close to new preserves most of the rated range and is the easiest to resell. A battery in the middle band still serves daily use but should command a lower price. A battery that has fallen materially below the manufacturer\'s degradation warranty level is a repricing signal, or a reason to walk away. What counts as "acceptable" depends on the chemistry, the vehicle\'s age and your destination market\'s expectations — there is no single universal cutoff.',
          ar: 'عامل عتبات حالة الصحة نوعيًا، لا كرقم عالمي واحد. فالبطارية القريبة من الجديدة تحافظ على معظم المدى المُقدَّر وهي الأسهل إعادةَ بيع. والبطارية في النطاق الأوسط ما تزال تخدم الاستخدام اليومي لكن يجب أن تُسعَّر بسعر أدنى. والبطارية التي هبطت ماديًا دون مستوى ضمان التدهور لدى المصنّع هي إشارة لإعادة التسعير، أو سبب للانسحاب. وما يُعدّ «مقبولًا» يعتمد على الكيمياء وعمر المركبة وتوقعات سوق وجهتك — لا يوجد حدّ فاصل عالمي واحد.',
          ru: 'Относитесь к порогам SOH качественно, а не как к одному универсальному числу. Батарея, близкая к новой, сохраняет большую часть паспортного запаса хода и её проще всего перепродать. Батарея в среднем диапазоне ещё годится для ежедневного использования, но должна стоить дешевле. Батарея, заметно опустившаяся ниже гарантийного уровня деградации производителя, — это сигнал к пересмотру цены или повод отказаться. Что считать «приемлемым», зависит от химии, возраста автомобиля и ожиданий вашего рынка — единого универсального порога нет.',
          es: 'Trate los umbrales de SOH de forma cualitativa, no como una única cifra universal. Una batería casi nueva conserva la mayor parte de la autonomía homologada y es la más fácil de revender. Una batería en la franja media aún sirve para el uso diario, pero debe tener un precio menor. Una batería que ha caído materialmente por debajo del nivel de garantía de degradación del fabricante es una señal de reprecio o un motivo para retirarse. Lo que cuente como «aceptable» depende de la química, la antigüedad del vehículo y las expectativas de su mercado de destino: no hay un único corte universal.',
        },
        {
          en: 'LFP and NMC degrade differently, which changes how you read a given SOH. LFP (lithium iron phosphate) degrades more slowly, tolerates more charge cycles and is usually happier being charged to full. NMC (nickel manganese cobalt) holds more energy per kilogram but degrades faster and is more sensitive to deep cycling and heat. An LFP battery with a lower nominal SOH can still have plenty of useful life, while an NMC battery deserves closer scrutiny.',
          ar: 'تتدهور كيمياء LFP وNMC بشكل مختلف، وهذا يغيّر كيف تقرأ حالة صحة معيّنة. فتتدهور LFP (فوسفات الحديد الليثيوم) ببطء أكبر، وتتحمّل دورات شحن أكثر، وترتاح عادةً للشحن حتى الامتلاء. أما NMC (نيكل منغنيز كوبالت) فتخزّن طاقة أكبر لكل كيلوغرام لكنها تتدهور أسرع وأكثر حساسية للتفريغ العميق والحرارة. فبطارية LFP بحالة صحة اسمية أدنى قد يظلّ فيها عمر إنتاجي وفير، بينما تستحق بطارية NMC فحصًا أدق.',
          ru: 'LFP и NMC деградируют по-разному, и это меняет чтение конкретного SOH. LFP (литий-железо-фосфат) деградирует медленнее, выдерживает больше циклов заряда и обычно спокойнее переносит заряд до полного. NMC (никель-марганец-кобальт) хранит больше энергии на килограмм, но деградирует быстрее и чувствительнее к глубокому циклированию и жаре. Батарея LFP с более низким номинальным SOH всё ещё может иметь большой остаточный ресурс, тогда как батарея NMC заслуживает более пристальной проверки.',
          es: 'LFP y NMC se degradan de forma distinta, lo que cambia la lectura de un SOH concreto. LFP (litio-ferrofosfato) se degrada más despacio, tolera más ciclos de carga y suele tolerar mejor cargarse al completo. NMC (níquel-manganeso-cobalto) almacena más energía por kilogramo, pero se degrada más rápido y es más sensible al ciclado profundo y al calor. Una batería LFP con un SOH nominal menor aún puede tener mucha vida útil, mientras que una NMC merece un escrutinio más cercano.',
        },
        {
          en: 'CLTC range is not a health measure. China\'s CLTC range is a homologation test result, not a statement about the specific battery in front of you. A healthy battery and a degraded battery of the same model carry the same CLTC figure. Never use the CLTC number as a proxy for SOH — it tells you the vehicle\'s rated range, not the battery\'s remaining life.',
          ar: 'مدى CLTC ليس مقياسًا للصحة. فمدى CLTC في الصين هو نتيجة اختبار اعتماد، لا تصريحًا عن البطارية المحددة أمامك. فبطارية سليمة وأخرى متدهورة من نفس الطراز تحملان رقم CLTC نفسه. لا تستخدم رقم CLTC أبدًا بديلًا عن حالة الصحة — فهو يخبرك بالمدى المُقدَّر للمركبة، لا بالعمر المتبقي للبطارية.',
          ru: 'Запас хода CLTC — не мера здоровья. Запас хода CLTC в Китае — это результат омологационного теста, а не утверждение о конкретной батарее перед вами. Здоровая и деградировавшая батареи одной модели имеют одинаковую цифру CLTC. Никогда не используйте цифру CLTC как замену SOH: она говорит о паспортном запасе хода автомобиля, а не об остаточном ресурсе батареи.',
          es: 'La autonomía CLTC no es una medida de salud. La autonomía CLTC de China es el resultado de un test de homologación, no una afirmación sobre la batería concreta que tiene delante. Una batería sana y una degradada del mismo modelo llevan la misma cifra CLTC. Nunca use la cifra CLTC como sustituto del SOH: indica la autonomía homologada del vehículo, no la vida restante de la batería.',
        },
      ],
    },
    {
      heading: {
        en: 'Limitations — what SOH cannot tell you',
        ar: 'القيود — ما لا تستطيع حالة الصحة إخبارك به',
        ru: 'Ограничения — чего SOH не может вам сказать',
        es: 'Limitaciones — lo que el SOH no puede decirle',
      },
      paragraphs: [
        {
          en: 'SOH requires the seller to provide a report. There is no way to read a specific battery\'s SOH from photos, a listing or the CLTC figure. If the seller will not or cannot produce a BMS diagnostic report, treat that absence as a risk signal in itself — a battery you cannot assess is a battery you cannot price with confidence.',
          ar: 'تتطلب حالة الصحة أن يقدّم البائع تقريرًا. فلا سبيل لقراءة حالة صحة بطارية معيّنة من الصور أو الإعلان أو رقم CLTC. فإذا لم يستطع البائع أو لم يرد تقديم تقرير تشخيصي لنظام إدارة البطارية، فعامل هذا الغياب كإشارة مخاطرة بحد ذاتها — فالبطارية التي لا تستطيع تقييمها هي بطارية لا تستطيع تسعيرها بثقة.',
          ru: 'SOH требует, чтобы продавец предоставил отчёт. Нет способа прочитать SOH конкретной батареи по фото, объявлению или цифре CLTC. Если продавец не может или не хочет предоставить диагностический отчёт BMS, относитесь к этому отсутствию как к самостоятельному сигналу риска: батарею, которую вы не можете оценить, вы не можете уверенно оценить в деньгах.',
          es: 'El SOH requiere que el vendedor facilite un informe. No hay forma de leer el SOH de una batería concreta a partir de fotos, de un anuncio o de la cifra CLTC. Si el vendedor no quiere o no puede aportar un informe de diagnóstico del BMS, trate esa ausencia como una señal de riesgo en sí misma: una batería que no puede evaluar es una batería que no puede valorar con confianza.',
        },
        {
          en: 'A report is only as good as its source and recency. Ask for a report dated recently and tied to the specific vehicle by VIN, and be alert to reports that cannot be independently verified. A healthy-looking SOH from an old or unverifiable report does not tell you the battery\'s condition today.',
          ar: 'التقرير بقدر جودة مصدره وحداثته. اطلب تقريرًا حديث التاريخ ومرتبطًا بالمركبة المحددة عبر رقم الهيكل، وكن منتبهًا للتقارير التي لا يمكن التحقق منها بشكل مستقل. فحالة صحة تبدو سليمة من تقرير قديم أو غير قابل للتحقق لا تخبرك بحالة البطارية اليوم.',
          ru: 'Отчёт ценен настолько, насколько хорош его источник и свежесть. Просите отчёт недавней даты, привязанный к конкретному автомобилю по VIN, и настороженно относитесь к отчётам, которые нельзя проверить независимо. Здоровый на вид SOH из старого или непроверяемого отчёта не говорит о состоянии батареи сегодня.',
          es: 'Un informe vale lo que su fuente y su actualidad. Pida un informe de fecha reciente y vinculado al vehículo concreto por VIN, y desconfíe de los informes que no puedan verificarse de forma independiente. Un SOH de aspecto sano procedente de un informe antiguo o no verificable no le dice el estado de la batería hoy.',
        },
        {
          en: 'Remote checks are partial. You can review a report remotely, but you cannot independently confirm the physical battery, its history or a live charge test without an inspection. Treat remote review as evidence to weigh, not as proof of condition.',
          ar: 'الفحوصات عن بُعد جزئية. يمكنك مراجعة تقرير عن بُعد، لكنك لا تستطيع تأكيد البطارية الفيزيائية أو تاريخها أو اختبار شحن مباشر بنفسك دون فحص. فعامل المراجعة عن بُعد كدليل يُوزَن، لا كإثبات للحالة.',
          ru: 'Удалённые проверки частичны. Вы можете просмотреть отчёт удалённо, но не можете самостоятельно подтвердить физическую батарею, её историю или живой тест зарядки без осмотра. Относитесь к удалённой проверке как к взвешиваемому свидетельству, а не как к доказательству состояния.',
          es: 'Las comprobaciones remotas son parciales. Puede revisar un informe a distancia, pero no puede confirmar por sí mismo la batería física, su historial o una prueba de carga en vivo sin una inspección. Trate la revisión remota como una evidencia que sopesar, no como una prueba del estado.',
        },
      ],
    },
    {
      heading: {
        en: 'Examples from the database',
        ar: 'أمثلة من قاعدة البيانات',
        ru: 'Примеры из базы данных',
        es: 'Ejemplos de la base de datos',
      },
      paragraphs: [
        {
          en: 'BYD Atto 3 and BYD Seal both use BYD\'s lithium iron phosphate (LFP) blade-style packs. Because LFP degrades slowly and tolerates full charging, SOH on these models is read from a BMS report, and a lower nominal SOH still leaves meaningful usable life. Battery capacity and range figures are published on each model\'s Data sub-site page.',
          ar: 'يستخدم كل من BYD Atto 3 وBYD Seal حزم البطاريات الشفافية من فوسفات الحديد الليثيوم (LFP) من BYD. ولأن LFP تتدهور ببطء وتتحمّل الشحن الكامل، تُقرأ حالة الصحة في هذين الطرازين من تقرير نظام إدارة البطارية، وتبقي حالة الصحة الاسمية الأدنى عمرًا إنتاجيًا ذا معنى. وتُنشر أرقام سعة البطارية والمدى في صفحة كل طراز في الموقع الفرعي للبيانات.',
          ru: 'BYD Atto 3 и BYD Seal используют литий-железо-фосфатные (LFP) лезвийные батареи BYD. Поскольку LFP деградирует медленно и переносит полную зарядку, SOH на этих моделях считывается по отчёту BMS, и более низкий номинальный SOH всё ещё оставляет значительный полезный ресурс. Ёмкость и запас хода публикуются на странице каждой модели на подсайте Data.',
          es: 'El BYD Atto 3 y el BYD Seal usan paquetes de tipo lámina de litio-ferrofosfato (LFP) de BYD. Como el LFP se degrada despacio y tolera la carga completa, el SOH de estos modelos se lee en un informe del BMS, y un SOH nominal menor aún deja una vida útil significativa. La capacidad y la autonomía se publican en la página de cada modelo del subsitio Data.',
        },
        {
          en: 'NIO ES6 carries battery-swap implications. NIO offers battery swap, so the pack fitted to a given ES6 may not be the one it left the factory with. SOH must be read from the specific pack currently installed, and swap history matters as much as the vehicle\'s own age. A current diagnostic report for the fitted pack — not the vehicle\'s history alone — is the correct health measure here.',
          ar: 'تحمل NIO ES6 تداعيات تبديل البطارية. تقدم NIO خدمة تبديل البطارية، لذا قد لا تكون الحزمة المركّبة في ES6 معيّنة هي نفسها التي خرجت بها من المصنع. يجب قراءة حالة الصحة من الحزمة المحددة المركّبة حاليًا، ويهمّ تاريخ التبديل بقدر عمر المركبة نفسه. فالتقرير التشخيصي الحالي للحزمة المركّبة — لا تاريخ المركبة وحده — هو مقياس الصحة الصحيح هنا.',
          ru: 'NIO ES6 связан с особенностями замены батареи. NIO предлагает замену батареи, поэтому блок, установленный на конкретном ES6, может отличаться от того, с которым автомобиль сошёл с завода. SOH нужно читать с конкретного установленного блока, а история замен важна не меньше возраста самого автомобиля. Актуальный диагностический отчёт по установленному блоку — а не только история автомобиля — является здесь правильной мерой здоровья.',
          es: 'El NIO ES6 implica el intercambio de batería. NIO ofrece intercambio de batería, por lo que el paquete montado en un ES6 concreto puede no ser el de fábrica. El SOH debe leerse del paquete concreto instalado, y el historial de intercambios importa tanto como la propia antigüedad del vehículo. Un informe de diagnóstico actual del paquete montado — no solo el historial del vehículo — es aquí la medida correcta de salud.',
        },
        {
          en: 'XPeng G6\'s 800V architecture enables faster DC charging, which also means heavy fast-charging use shows up clearly in the charging curve and losses. Charging-behaviour checks are therefore especially informative on this model — a battery that has seen sustained 800V fast charging will reveal it in how it charges.',
          ar: 'تتيح بنية 800V في XPeng G6 شحنًا سريعًا أسرع بالتيار المستمر، ما يعني أيضًا أن الاستخدام المكثّف للشحن السريع يظهر بوضوح في منحنى الشحن والفاقد. لذا تكون فحوصات سلوك الشحن مفيدة بشكل خاص في هذا الطراز — فالبطارية التي شهدت شحنًا سريعًا مطوّلًا بجهد 800V ستكشفه في طريقة شحنها.',
          ru: 'Архитектура 800V у XPeng G6 обеспечивает более быструю DC-зарядку, что также означает, что интенсивная быстрая зарядка ясно проявляется в кривой зарядки и потерях. Поэтому проверки поведения при зарядке особенно информативны на этой модели: батарея, испытавшая длительную быструю зарядку на 800V, выдаст это в том, как она заряжается.',
          es: 'La arquitectura de 800V del XPeng G6 permite una carga en CC más rápida, lo que también significa que el uso intensivo de carga rápida se manifiesta con claridad en la curva de carga y las pérdidas. Por eso las comprobaciones de comportamiento de carga son especialmente informativas en este modelo: una batería que ha sufrido carga rápida sostenida de 800V lo revelará en cómo carga.',
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
          en: 'Model battery capacity and range figures live on the Data sub-site. For the condition checks that precede purchase, see the Inspection guide; for the wider EV export picture, see the Chinese EVs guide; and for the cost side, use the TCO calculator.',
          ar: 'توجد أرقام سعة البطارية والمدى للطرازات في الموقع الفرعي للبيانات. لفحوصات الحالة التي تسبق الشراء، راجع دليل الفحص؛ وللصورة الأوسع لتصدير المركبات الكهربائية، راجع دليل السيارات الكهربائية الصينية؛ ولجانب التكلفة، استخدم حاسبة التكلفة الإجمالية للملكية.',
          ru: 'Цифры ёмкости батареи и запаса хода моделей находятся на подсайте Data. По проверкам состояния перед покупкой см. руководство по проверке; по более широкой картине экспорта электромобилей — руководство по китайским электромобилям; по затратной стороне — калькулятор совокупной стоимости владения.',
          es: 'Las cifras de capacidad de batería y autonomía de los modelos viven en el subsitio Data. Para las comprobaciones de estado previas a la compra, consulte la guía de inspección; para el panorama más amplio de exportación de VE, la guía de VE chinos; y para el lado del coste, use la calculadora de TCO.',
        },
      ],
      links: [
        {
          href: 'https://data.chinausedautohub.com/models/byd-atto-3/',
          label: {
            en: 'BYD Atto 3 — model data',
            ar: 'BYD Atto 3 — بيانات الطراز',
            ru: 'BYD Atto 3 — данные модели',
            es: 'BYD Atto 3 — datos del modelo',
          },
        },
        {
          href: 'https://data.chinausedautohub.com/models/byd-seal/',
          label: {
            en: 'BYD Seal — model data',
            ar: 'BYD Seal — بيانات الطراز',
            ru: 'BYD Seal — данные модели',
            es: 'BYD Seal — datos del modelo',
          },
        },
        {
          href: 'https://data.chinausedautohub.com/models/nio-es6/',
          label: {
            en: 'NIO ES6 — model data',
            ar: 'NIO ES6 — بيانات الطراز',
            ru: 'NIO ES6 — данные модели',
            es: 'NIO ES6 — datos del modelo',
          },
        },
        {
          href: 'https://data.chinausedautohub.com/models/xpeng-g6/',
          label: {
            en: 'XPeng G6 — model data',
            ar: 'XPeng G6 — بيانات الطراز',
            ru: 'XPeng G6 — данные модели',
            es: 'XPeng G6 — datos del modelo',
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
          slug: 'buying-chinese-evs-for-export',
          label: {
            en: 'Battery and charging specifics — Chinese EVs guide',
            ar: 'تفاصيل البطارية والشحن — دليل السيارات الكهربائية الصينية',
            ru: 'Особенности батареи и зарядки — руководство по китайским электромобилям',
            es: 'Detalles de batería y carga — guía de VE chinos',
          },
        },
        {
          href: 'https://tool.chinausedautohub.com/tco-calculator/',
          label: {
            en: 'Total Cost of Ownership calculator',
            ar: 'حاسبة التكلفة الإجمالية للملكية',
            ru: 'Калькулятор совокупной стоимости владения',
            es: 'Calculadora de coste total de propiedad',
          },
        },
      ],
    },
    {
      heading: {
        en: 'FAQ',
        ar: 'الأسئلة الشائعة',
        ru: 'Часто задаваемые вопросы',
        es: 'Preguntas frecuentes',
      },
      paragraphs: [
        {
          en: 'Can I estimate battery health from the odometer alone? No. The odometer tells you distance driven, not how the battery was charged, stored or thermally stressed. Two vehicles with the same mileage can have very different SOH. Only a BMS diagnostic report gives you the health figure.',
          ar: 'هل يمكنني تقدير صحة البطارية من عداد المسافة وحده؟ لا. يخبرك العداد بالمسافة المقطوعة، لا بكيفية شحن البطارية أو تخزينها أو الإجهاد الحراري الذي تعرضت له. فقد تحمل مركبتان بنفس المسافة حالة صحة مختلفة جدًا. ولا يمنحك رقم الصحة إلا تقرير تشخيصي لنظام إدارة البطارية.',
          ru: 'Можно ли оценить здоровье батареи только по одометру? Нет. Одометр показывает пройденное расстояние, а не то, как батарею заряжали, хранили и подвергали термическому стрессу. Два автомобиля с одинаковым пробегом могут иметь очень разный SOH. Цифру здоровья даёт только диагностический отчёт BMS.',
          es: '¿Puedo estimar la salud de la batería solo por el cuentakilómetros? No. El cuentakilómetros indica la distancia recorrida, no cómo se cargó, almacenó o estresó térmicamente la batería. Dos vehículos con el mismo kilometraje pueden tener un SOH muy distinto. Solo un informe de diagnóstico del BMS da la cifra de salud.',
        },
        {
          en: 'Does a higher SOH always mean a better buy? Not necessarily. SOH is the starting point, but chemistry, replacement status and warranty also matter. An LFP battery at a lower SOH can still have long useful life, and a replaced battery resets the baseline entirely. Read SOH together with the other signals.',
          ar: 'هل تعني حالة الصحة الأعلى دائمًا صفقة أفضل؟ ليس بالضرورة. فحالة الصحة هي نقطة البداية، لكن الكيمياء وحالة الاستبدال والضمان تهم أيضًا. فبطارية LFP بحالة صحة أدنى قد يظلّ فيها عمر إنتاجي طويل، والبطارية المستبدلة تعيد ضبط خط الأساس كليًا. اقرأ حالة الصحة مع الإشارات الأخرى.',
          ru: 'Всегда ли более высокий SOH означает более выгодную покупку? Не обязательно. SOH — это отправная точка, но важны также химия, статус замены и гарантия. Батарея LFP с более низким SOH может иметь долгий остаточный ресурс, а заменённая батарея полностью сбрасывает базовый уровень. Читайте SOH вместе с другими сигналами.',
          es: '¿Un SOH más alto siempre significa una mejor compra? No necesariamente. El SOH es el punto de partida, pero también importan la química, el estado de sustitución y la garantía. Una batería LFP con un SOH menor aún puede tener larga vida útil, y una batería sustituida restablece por completo la línea base. Lea el SOH junto con las demás señales.',
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
          en: 'Last reviewed: 2026-10-04. This guide describes a general method for assessing used EV battery health and does not certify any specific vehicle. Battery health must be confirmed for the specific vehicle with a current BMS diagnostic report before committing.',
          ar: 'آخر مراجعة: 2026-10-04. يصف هذا الدليل طريقة عامة لتقييم صحة بطارية سيارة كهربائية مستعملة ولا يعتمد أي مركبة محددة. يجب تأكيد صحة البطارية للمركبة المحددة بتقرير تشخيصي حالي لنظام إدارة البطارية قبل الالتزام.',
          ru: 'Последняя проверка: 2026-10-04. Это руководство описывает общий метод оценки здоровья батареи подержанного электромобиля и не сертифицирует конкретный автомобиль. Здоровье батареи нужно подтверждать для конкретного автомобиля актуальным диагностическим отчётом BMS до принятия обязательств.',
          es: 'Última revisión: 2026-10-04. Esta guía describe un método general para evaluar la salud de la batería de un VE usado y no certifica ningún vehículo concreto. La salud de la batería debe confirmarse para el vehículo concreto con un informe de diagnóstico BMS actual antes de comprometerse.',
        },
      ],
    },
  ],
};
