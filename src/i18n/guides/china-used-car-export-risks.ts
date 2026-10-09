import type { L10n } from '../l10n';

// Guide — China Used Car Export Risks (full-chain risk overview).
// A map of risks across the whole export chain (sourcing, documents, logistics,
// customs & tax, payment, delivery), each with a one-line mitigation and a link
// to the specialty page. Overview only — deliberately does not repeat the
// specialty pages' full body (§2 no cannibalisation).

export const exportRisks = {
  slug: 'china-used-car-export-risks',
  title: {
    en: 'China Used Car Export Risks — The Full-Chain Overview',
    ar: 'مخاطر تصدير السيارات المستعملة من الصين — النظرة الشاملة عبر سلسلة التصدير',
    ru: 'Риски экспорта подержанных автомобилей из Китая — обзор всей цепочки',
    es: 'Riesgos de la exportación de coches usados desde China — el panorama de toda la cadena',
  },
  description: {
    en: 'A full-chain map of the risks in a China used car export — sourcing, documents, logistics, customs and tax, payment and delivery — each with its mitigation and a link to the specialty guide. The overview, not a repeat of the deep pages.',
    ar: 'خريطة شاملة لمخاطر تصدير السيارات المستعملة من الصين — التوريد والوثائق والخدمات اللوجستية والجمارك والضرائب والدفع والتسليم — كل خطر مع معالجته ورابط إلى الدليل المتخصص. النظرة الشاملة، لا تكرار للصفحات التفصيلية.',
    ru: 'Карта рисков всей цепочки экспорта подержанного автомобиля из Китая — подбор, документы, логистика, таможня и налоги, оплата и доставка — каждый с мерой снижения и ссылкой на специализированное руководство. Обзор, а не повтор подробных страниц.',
    es: 'Un mapa de toda la cadena de riesgos de una exportación de coches usados desde China — abastecimiento, documentos, logística, aduanas e impuestos, pago y entrega — cada uno con su mitigación y un enlace a la guía especializada. El panorama, no una repetición de las páginas detalladas.',
  },
  h1: {
    en: 'China Used Car Export Risks: The Full-Chain Overview',
    ar: 'مخاطر تصدير السيارات المستعملة من الصين: النظرة الشاملة عبر سلسلة التصدير',
    ru: 'Риски экспорта подержанных автомобилей из Китая: обзор всей цепочки',
    es: 'Riesgos de la exportación de coches usados desde China: el panorama de toda la cadena',
  },
  summary: {
    en: 'Where risk actually sits at each step of a China used car export, how to reduce it, and which specialty guide covers each risk in depth.',
    ar: 'أين يكمن الخطر فعلياً في كل خطوة من تصدير السيارات المستعملة من الصين، وكيف تقلله، وأي دليل متخصص يغطي كل خطر بعمق.',
    ru: 'Где на самом деле находится риск на каждом шаге экспорта подержанного автомобиля из Китая, как его снизить и какое специализированное руководство подробно покрывает каждый риск.',
    es: 'Dónde se sitúa realmente el riesgo en cada paso de una exportación de coches usados desde China, cómo reducirlo y qué guía especializada cubre cada riesgo en profundidad.',
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
          en: 'Risk in a China used car export is not one thing; it is distributed across six stages — sourcing, documents, logistics, customs and tax, payment and delivery — and a failure at any stage can stall or sink the whole deal. The single most protective habit is to verify before you pay: verify the exporter, verify the vehicle and its documents, and only then release money against milestones. This page maps the whole chain; the specialty guides below explain each risk and its checks in depth.',
          ar: 'الخطر في تصدير السيارات المستعملة من الصين ليس شيئاً واحداً؛ بل موزع على ست مراحل — التوريد والوثائق والخدمات اللوجستية والجمارك والضرائب والدفع والتسليم — والفشل في أي مرحلة قد يعطل الصفقة كلها أو يغرقها. العادة الأكثر حماية هي التحقق قبل الدفع: تحقق من المصدّر، ومن المركبة ووثائقها، وعندها فقط أفرج عن المال مقابل مراحل الإنجاز. ترسم هذه الصفحة السلسلة كاملة؛ أما الأدلة المتخصصة أدناه فتشرح كل خطر وفحوصاته بعمق.',
          ru: 'Риск при экспорте подержанного автомобиля из Китая — это не что-то одно; он распределён по шести этапам — подбор, документы, логистика, таможня и налоги, оплата и доставка — и сбой на любом этапе может остановить или потопить всю сделку. Самая защитная привычка — проверять до оплаты: проверьте экспортёра, автомобиль и его документы и только затем переводите деньги против этапов. Эта страница рисует всю цепочку; специализированные руководства ниже подробно объясняют каждый риск и его проверки.',
          es: 'El riesgo en una exportación de coches usados desde China no es una sola cosa; se distribuye en seis etapas — abastecimiento, documentos, logística, aduanas e impuestos, pago y entrega — y un fallo en cualquier etapa puede frenar o hundir toda la operación. El hábito más protector es verificar antes de pagar: verifique al exportador, el vehículo y sus documentos, y solo entonces libere el dinero contra hitos. Esta página traza toda la cadena; las guías especializadas de abajo explican cada riesgo y sus comprobaciones en profundidad.',
        },
      ],
    },
    {
      heading: {
        en: 'The full-chain risk map',
        ar: 'خريطة المخاطر عبر السلسلة الكاملة',
        ru: 'Карта рисков всей цепочки',
        es: 'El mapa de riesgos de toda la cadena',
      },
      paragraphs: [
        {
          en: 'Each stage names its main risk, the mitigation, and the specialty guide that goes deeper.',
          ar: 'تسمي كل مرحلة خطرها الرئيسي والمعالجة والدليل المتخصص الذي يتعمق أكثر.',
          ru: 'Каждый этап называет свой главный риск, меру снижения и специализированное руководство, которое идёт глубже.',
          es: 'Cada etapa indica su riesgo principal, la mitigación y la guía especializada que profundiza.',
        },
      ],
      table: {
        headers: [
          { en: 'Stage', ar: 'المرحلة', ru: 'Этап', es: 'Etapa' },
          { en: 'Main risk', ar: 'الخطر الرئيسي', ru: 'Главный риск', es: 'Riesgo principal' },
          { en: 'Mitigation', ar: 'المعالجة', ru: 'Снижение риска', es: 'Mitigación' },
          { en: 'Deep guide', ar: 'الدليل التفصيلي', ru: 'Подробное руководство', es: 'Guía detallada' },
        ],
        rows: [
          [
            { en: 'Sourcing', ar: 'التوريد', ru: 'Подбор', es: 'Abastecimiento' },
            { en: 'Dealing with an unverified exporter or a vehicle that does not exist as described.', ar: 'التعامل مع مصدّر غير متحقق منه أو مركبة غير موجودة كما وُصفت.', ru: 'Работа с непроверенным экспортёром или автомобилем, который не существует в описанном виде.', es: 'Tratar con un exportador no verificado o un vehículo que no existe como se describe.' },
            { en: 'Verify the exporter and the vehicle before committing any money.', ar: 'تحقق من المصدّر والمركبة قبل الالتزام بأي مال.', ru: 'Проверьте экспортёра и автомобиль до перевода каких-либо средств.', es: 'Verifique al exportador y el vehículo antes de comprometer dinero alguno.' },
            { en: 'How to Verify a China Used Car Exporter', ar: 'كيف تتحقق من مصدّر سيارات مستعملة صيني', ru: 'Как проверить китайского экспортёра подержанных автомобилей', es: 'Cómo verificar un exportador chino de coches usados' },
          ],
          [
            { en: 'Documents', ar: 'الوثائق', ru: 'Документы', es: 'Documentos' },
            { en: 'Missing, forged or contradictory documents that block the export licence.', ar: 'وثائق مفقودة أو مزورة أو متناقضة تعطل رخصة التصدير.', ru: 'Отсутствующие, поддельные или противоречивые документы, блокирующие экспортную лицензию.', es: 'Documentos faltantes, falsificados o contradictorios que bloquean la licencia de exportación.' },
            { en: 'Request and cross-check the export documents, the licence and the credentials before payment.', ar: 'اطلب وطابق وثائق التصدير والرخصة والمؤهلات قبل الدفع.', ru: 'Запросите и сверьте экспортные документы, лицензию и квалификации до оплаты.', es: 'Solicite y coteje los documentos de exportación, la licencia y las credenciales antes de pagar.' },
            { en: 'Export Documents & Credentials', ar: 'وثائق التصدير والمؤهلات', ru: 'Экспортные документы и квалификации', es: 'Documentos de exportación y credenciales' },
          ],
          [
            { en: 'Logistics & shipping', ar: 'الخدمات اللوجستية والشحن', ru: 'Логистика и доставка', es: 'Logística y envío' },
            { en: 'Damage in transit, or a shipping term that leaves you carrying the risk at the wrong point.', ar: 'ضرر أثناء النقل، أو شرط شحن يجعلك تتحمل الخطر في النقطة الخطأ.', ru: 'Повреждение в пути или условие доставки, оставляющее риск на вас в неправильной точке.', es: 'Daños en tránsito, o una condición de envío que le deja el riesgo en el punto equivocado.' },
            { en: 'Choose the right Incoterm and insurance, and know when ownership and risk pass to you.', ar: 'اختر مصطلح التجارة والتأمين الصحيحين، واعرف متى تنتقل الملكية والخطر إليك.', ru: 'Выберите правильный Инкотермс и страхование и знайте, когда право собственности и риск переходят к вам.', es: 'Elija el Incoterm y el seguro correctos, y sepa cuándo le pasan la propiedad y el riesgo.' },
            { en: 'Shipping & Incoterms', ar: 'الشحن ومصطلحات التجارة', ru: 'Доставка и Инкотермс', es: 'Envío e Incoterms' },
          ],
          [
            { en: 'Customs & tax', ar: 'الجمارك والضرائب', ru: 'Таможня и налоги', es: 'Aduanas e impuestos' },
            { en: 'Unexpected import duty, VAT or a destination rule that makes the vehicle non-compliant or uneconomic.', ar: 'رسوم استيراد أو ضريبة غير متوقعة أو قاعدة وجهة تجعل المركبة غير مطابقة أو غير مجدية اقتصادياً.', ru: 'Неожиданная импортная пошлина, НДС или правило назначения, делающее автомобиль несоответствующим или невыгодным.', es: 'Arancel, IVA o una norma de destino inesperados que hacen el vehículo no conforme o antieconómico.' },
            { en: 'Confirm the destination country\'s duty, tax, age and emission rules before you order.', ar: 'أكّد قواعد الرسوم والضرائب والعمر والانبعاثات في بلد الوجهة قبل الطلب.', ru: 'Подтвердите правила пошлин, налогов, возраста и выбросов страны назначения до заказа.', es: 'Confirme las normas de arancel, impuestos, edad y emisiones del país de destino antes de pedir.' },
            { en: 'Market Intelligence', ar: 'ذكاء الأسواق', ru: 'Рыночная аналитика', es: 'Inteligencia de mercado' },
          ],
          [
            { en: 'Payment', ar: 'الدفع', ru: 'Оплата', es: 'Pago' },
            { en: 'Paying too early, in full, or into the wrong account.', ar: 'الدفع مبكراً جداً أو بالكامل أو إلى الحساب الخطأ.', ru: 'Слишком ранняя, полная оплата или оплата на неверный счёт.', es: 'Pagar demasiado pronto, por completo o a la cuenta equivocada.' },
            { en: 'Pay in stages against milestones, into a named account matching the contract.', ar: 'ادفع على مراحل مقابل مراحل الإنجاز، إلى حساب مسمى يطابق العقد.', ru: 'Платите поэтапно против этапов, на именованный счёт, совпадающий с контрактом.', es: 'Pague por etapas contra hitos, a una cuenta nominativa que coincida con el contrato.' },
            { en: 'Payment & Payment Risks', ar: 'الدفع ومخاطر الدفع', ru: 'Оплата и платёжные риски', es: 'Pago y riesgos de pago' },
          ],
          [
            { en: 'Delivery & after-sales', ar: 'التسليم وما بعد البيع', ru: 'Доставка и послепродажное обслуживание', es: 'Entrega y posventa' },
            { en: 'A vehicle that arrives damaged or different, with no documented recourse.', ar: 'مركبة تصل تالفة أو مختلفة، دون سبيل توثيقي للرجوع.', ru: 'Автомобиль прибывает повреждённым или иным, без документированной возможности recourse.', es: 'Un vehículo que llega dañado o distinto, sin recurso documentado.' },
            { en: 'Fix the condition and after-sales terms in the contract and keep the evidence trail.', ar: 'ثبّت شروط الحالة وما بعد البيع في العقد واحتفظ بسجل الأدلة.', ru: 'Зафиксируйте условия состояния и послепродажного обслуживания в контракте и храните след доказательств.', es: 'Fije las condiciones de estado y posventa en el contrato y conserve el rastro de evidencia.' },
            { en: 'Warranty & After-Sales', ar: 'الضمان وما بعد البيع', ru: 'Гарантия и послепродажное обслуживание', es: 'Garantía y posventa' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'How to read the risk map',
        ar: 'كيف تقرأ خريطة المخاطر',
        ru: 'Как читать карту рисков',
        es: 'Cómo leer el mapa de riesgos',
      },
      paragraphs: [
        {
          en: 'The stages are sequential, but the risk compounds backward: a mistake at sourcing poisons the documents, which poisons the payment, which poisons the delivery. That is why the mitigation for every stage points back to one habit — verify first, then pay. If you only internalise one thing from this map, make it that: no verifiable evidence, no money.',
          ar: 'المراحل متسلسلة، لكن الخطر يتضاعف بالعكس: خطأ في التوريد يسمّم الوثائق، التي تسمّم الدفع، الذي يسمّم التسليم. لهذا تشير معالجة كل مرحلة إلى عادة واحدة — تحقق أولاً ثم ادفع. إذا لم تستوعب من هذه الخريطة إلا شيئاً واحداً، فليكن: لا دليل قابل للتحقق، لا مال.',
          ru: 'Этапы последовательны, но риск накапливается в обратную сторону: ошибка на этапе подбора отравляет документы, те отравляют оплату, а та — доставку. Поэтому снижение риска на каждом этапе возвращается к одной привычке — сначала проверяй, потом плати. Если из этой карты усвоить только одно, пусть будет это: нет проверяемого доказательства — нет денег.',
          es: 'Las etapas son secuenciales, pero el riesgo se acumula hacia atrás: un error en el abastecimiento envenena los documentos, que envenenan el pago, que envenena la entrega. Por eso la mitigación de cada etapa remite a un único hábito: verifique primero, pague después. Si solo interioriza una cosa de este mapa, que sea esta: sin evidencia verificable, no hay dinero.',
        },
      ],
    },
    {
      heading: {
        en: 'The highest-risk moments',
        ar: 'اللحظات الأعلى خطراً',
        ru: 'Моменты наивысшего риска',
        es: 'Los momentos de mayor riesgo',
      },
      paragraphs: [
        {
          en: 'Two moments concentrate most of the loss potential: the moment you choose the exporter, and the moment you send money. Choosing wrong makes every later step harder to rescue; paying wrong makes the loss hardest to recover. Both are decisions you can make on evidence, and both have a dedicated guide.',
          ar: 'تتركز معظم احتمالات الخسارة في لحظتين: لحظة اختيار المصدّر، ولحظة إرسال المال. الاختيار الخاطئ يجعل كل خطوة لاحقة أصعب إنقاذاً؛ والدفع الخاطئ يجعل الخسارة أصعب استرداداً. كلاهما قرار يمكنك اتخاذه بالدليل، ولكل منهما دليل مخصص.',
          ru: 'Большая часть потенциальных потерь сосредоточена в двух моментах: момент выбора экспортёра и момент отправки денег. Неверный выбор делает каждый последующий шаг труднее спасти; неверная оплата делает потерю труднее вернуть. Оба — решения, которые можно принять на основе доказательств, и у каждого есть своё руководство.',
          es: 'Dos momentos concentran la mayor parte del potencial de pérdida: el momento de elegir al exportador y el momento de enviar el dinero. Elegir mal hace más difícil rescatar cada paso posterior; pagar mal hace más difícil recuperar la pérdida. Ambos son decisiones que puede tomar con evidencia, y ambos tienen una guía dedicada.',
        },
      ],
    },
    {
      heading: {
        en: 'What this means for buyers',
        ar: 'ماذا يعني هذا للمشترين',
        ru: 'Что это значит для покупателей',
        es: 'Qué significa esto para los compradores',
      },
      paragraphs: [
        {
          en: 'You do not need to eliminate risk to buy safely from China — you need to put each risk in front of the payment, not behind it. A buyer who runs the checks in order, keeps the evidence, and pays against milestones converts a risky chain into a controlled process. The overview here is the map; the specialty guides are the instructions for each stage.',
          ar: 'لا تحتاج إلى إزالة الخطر لتشتري بأمان من الصين — تحتاج إلى وضع كل خطر قبل الدفع، لا بعده. المشتري الذي ينفذ الفحوصات بالترتيب، ويحتفظ بالأدلة، ويدفع مقابل المراحل يحوّل سلسلة محفوفة بالمخاطر إلى عملية خاضعة للسيطرة. النظرة الشاملة هنا هي الخريطة؛ والأدلة المتخصصة هي التعليمات لكل مرحلة.',
          ru: 'Чтобы безопасно покупать из Китая, не нужно устранять риск — нужно ставить каждый риск перед оплатой, а не после. Покупатель, выполняющий проверки по порядку, хранящий доказательства и платящий против этапов, превращает рискованную цепочку в контролируемый процесс. Обзор здесь — карта; специализированные руководства — инструкции для каждого этапа.',
          es: 'No necesita eliminar el riesgo para comprar con seguridad desde China: necesita situar cada riesgo delante del pago, no detrás. Un comprador que ejecuta las comprobaciones en orden, conserva la evidencia y paga contra hitos convierte una cadena arriesgada en un proceso controlado. El panorama aquí es el mapa; las guías especializadas son las instrucciones de cada etapa.',
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
          en: 'This page is an overview map, not a substitute for the specialty guides. It does not repeat their checklists or case detail, and it does not guarantee that following these mitigations removes all risk — export fraud and compliance can still occur. This platform is an information and sourcing service and does not act as a bank, insurer, inspector or legal adviser. Confirm decision-affecting details with the relevant authority, your customs broker or a qualified exporter.',
          ar: 'هذه الصفحة خريطة نظرة عامة، لا بديلاً عن الأدلة المتخصصة. وهي لا تكرر قوائمها أو تفاصيل حالاتها، ولا تضمن أن اتباع هذه المعالجات يزيل كل خطر — فالاحتيال في التصدير وعدم الامتثال قد يقعان رغم ذلك. هذه المنصة خدمة معلومات وتوريد ولا تعمل كمصرف أو مؤمّن أو مفتش أو مستشار قانوني. أكّد التفاصيل المؤثرة في القرار مع السلطة المختصة أو وسيط الجمارك أو مصدّر مؤهل.',
          ru: 'Эта страница — обзорная карта, а не замена специализированных руководств. Она не повторяет их чек-листы и детали кейсов и не гарантирует, что следование этим мерам устраняет весь риск — мошенничество и несоответствие всё же возможны. Эта платформа — информационный сервис и сервис подбора, и не действует как банк, страховщик, инспектор или юрист. Подтверждайте влияющие на решение детали у соответствующего органа, вашего таможенного брокера или квалифицированного экспортёра.',
          es: 'Esta página es un mapa general, no un sustituto de las guías especializadas. No repite sus listas ni el detalle de casos, y no garantiza que seguir estas mitigaciones elimine todo riesgo: el fraude y el incumplimiento pueden ocurrir igualmente. Esta plataforma es un servicio de información y abastecimiento, y no actúa como banco, aseguradora, inspector ni asesor legal. Confirme los detalles que afecten a una decisión con la autoridad correspondiente, su agente de aduanas o un exportador cualificado.',
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
          slug: 'china-used-car-exporter-red-flags',
          label: {
            en: 'The warning signals, stage by stage — Red Flags guide',
            ar: 'إشارات التحذير، مرحلة بمرحلة — دليل العلامات الحمراء',
            ru: 'Тревожные сигналы по этапам — руководство по красным флагам',
            es: 'Las señales de advertencia, etapa por etapa — guía de señales de alarma',
          },
        },
        {
          slug: 'how-to-avoid-china-used-car-export-scams',
          label: {
            en: 'How scams work and how to avoid them — Scam avoidance guide',
            ar: 'كيف تعمل عمليات الاحتيال وكيف تتجنبها — دليل تجنّب الاحتيال',
            ru: 'Как работают мошенничества и как их избежать — руководство по защите от мошенничества',
            es: 'Cómo funcionan las estafas y cómo evitarlas — guía para evitar estafas',
          },
        },
        {
          slug: 'china-used-car-export-payment-risks',
          label: {
            en: 'The payment stage in depth — Payment Risks guide',
            ar: 'مرحلة الدفع بعمق — دليل مخاطر الدفع',
            ru: 'Этап оплаты подробно — руководство по платёжным рискам',
            es: 'La etapa de pago en profundidad — guía de riesgos de pago',
          },
        },
        {
          slug: 'how-to-verify-china-used-car-exporter',
          label: {
            en: 'De-risk the sourcing stage — How to Verify guide',
            ar: 'قلّل خطر مرحلة التوريد — دليل «كيف تتحقق»',
            ru: 'Снизьте риск этапа подбора — руководство «Как проверить»',
            es: 'Reduzca el riesgo de la etapa de abastecimiento — guía «Cómo verificar»',
          },
        },
        {
          slug: 'how-to-verify-a-vehicle-before-payment',
          label: {
            en: 'De-risk the vehicle before the payment — Verify Before Payment guide',
            ar: 'قلّل خطر المركبة قبل الدفع — دليل التحقق قبل الدفع',
            ru: 'Снизьте риск по автомобилю до оплаты — руководство «Проверить до оплаты»',
            es: 'Reduzca el riesgo del vehículo antes del pago — guía de verificación antes del pago',
          },
        },
        {
          href: 'https://market.chinausedautohub.com/countries/',
          label: {
            en: 'Check the destination-country rules — Market Intelligence',
            ar: 'تحقق من قواعد بلد الوجهة — ذكاء الأسواق',
            ru: 'Проверьте правила страны назначения — рыночная аналитика',
            es: 'Compruebe las normas del país de destino — inteligencia de mercado',
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
          en: 'Last reviewed: 2026-10-09. This page is a risk overview that routes buyers to the specialty guides, which carry their own sources, dates and disclaimers. It is not legal, financial or shipping advice. Confirm decision-affecting details with the relevant authority, your customs broker or a qualified exporter before payment and shipment.',
          ar: 'آخر مراجعة: 2026-10-09. هذه الصفحة نظرة عامة على المخاطر توجّه المشترين إلى الأدلة المتخصصة، التي تحمل مصادرها وتواريخها وإخلاءاتها الخاصة. وهي ليست استشارة قانونية أو مالية أو شحن. أكّد التفاصيل المؤثرة في القرار مع السلطة المختصة أو وسيط الجمارك أو مصدّر مؤهل قبل الدفع والشحن.',
          ru: 'Последняя проверка: 2026-10-09. Эта страница — обзор рисков, направляющий покупателей к специализированным руководствам, которые содержат свои источники, даты и дисклеймеры. Это не юридическая, финансовая или транспортная консультация. Подтверждайте влияющие на решение детали у соответствующего органа, вашего таможенного брокера или квалифицированного экспортёра до оплаты и отгрузки.',
          es: 'Última revisión: 2026-10-09. Esta página es un panorama de riesgos que remite a los compradores a las guías especializadas, que contienen sus propias fuentes, fechas y avisos. No constituye asesoramiento legal, financiero ni de envío. Confirme los detalles que afecten a una decisión con la autoridad correspondiente, su agente de aduanas o un exportador cualificado antes del pago y el envío.',
        },
      ],
    },
  ],
};
