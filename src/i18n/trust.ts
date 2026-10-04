import type { L10n } from './l10n';

// Trust / data-trust framework. Eight status labels and thirteen sections.
// The label "Verified" is reserved for details confirmed against a reliable
// source or document we actually hold — never applied to demo listings.

export interface TrustSection {
  heading: L10n;
  paragraphs: L10n[];
}

export interface ConfidenceLevel {
  key: string;
  label: L10n;
  text: L10n;
}

export const TRUST_PAGE: {
  title: L10n;
  description: L10n;
  h1: L10n;
  intro: L10n;
  confidenceHeading: L10n;
  confidenceIntro: L10n;
  confidenceLevels: ConfidenceLevel[];
  sections: TrustSection[];
} = {
  title: {
    en: 'Trust — How We Handle Vehicle Information',
    ar: 'الثقة — كيف نتعامل مع معلومات المركبات',
    ru: 'Доверие — как мы обращаемся с информацией об автомобилях',
    es: 'Confianza — cómo gestionamos la información de los vehículos',
  },
  description: {
    en: 'How vehicle and market information is collected, verified and published, and what the eight data-status labels mean.',
    ar: 'كيف تُجمع معلومات المركبات والسوق وتُتحقق منها وتُنشر، وما معنى علامات حالة البيانات الثماني.',
    ru: 'Как собирается, проверяется и публикуется информация об автомобилях и рынках, и что означают восемь меток статуса данных.',
    es: 'Cómo se recopila, verifica y publica la información de vehículos y mercados, y qué significan las ocho etiquetas de estado de los datos.',
  },
  h1: {
    en: 'Trust & Information',
    ar: 'الثقة والمعلومات',
    ru: 'Доверие и информация',
    es: 'Confianza e información',
  },
  intro: {
    en: 'We publish only the information we hold and say clearly where each detail comes from. This page explains how information is collected, how we treat it, and what the status labels on a listing or a market page mean.',
    ar: 'ننشر فقط المعلومات التي نحتفظ بها ونوضح بوضوح مصدر كل تفصيل. تشرح هذه الصفحة كيف تُجمع المعلومات وكيف نتعامل معها وما معنى علامات الحالة في الإعلان أو صفحة السوق.',
    ru: 'Мы публикуем только имеющуюся информацию и прямо указываем, откуда взята каждая деталь. Эта страница объясняет, как собирается информация, как мы с ней работаем и что означают метки статуса в объявлении или на странице рынка.',
    es: 'Publicamos únicamente la información que tenemos e indicamos claramente de dónde procede cada detalle. Esta página explica cómo se recopila la información, cómo la tratamos y qué significan las etiquetas de estado de un anuncio o una página de mercado.',
  },
  confidenceHeading: {
    en: 'Data status labels',
    ar: 'علامات حالة البيانات',
    ru: 'Метки статуса данных',
    es: 'Etiquetas de estado de los datos',
  },
  confidenceIntro: {
    en: 'Every vehicle detail on a listing — and every rule on a market page — is marked with one of eight status labels, so you know how much to rely on it.',
    ar: 'يُعلَّم كل تفصيل في المركبة داخل الإعلان — وكل قاعدة في صفحة السوق — بواحدة من ثماني علامات حالة، حتى تعرف مدى الاعتماد عليها.',
    ru: 'Каждая деталь автомобиля в объявлении — и каждое правило на странице рынка — помечена одной из восьми меток статуса, чтобы вы понимали, насколько ей можно доверять.',
    es: 'Cada detalle del vehículo en un anuncio — y cada regla en una página de mercado — está marcado con una de ocho etiquetas de estado, para que sepa cuánto puede confiar en él.',
  },
  confidenceLevels: [
    {
      key: 'verified',
      label: { en: 'Verified', ar: 'موثَّق', ru: 'Подтверждено', es: 'Verificado' },
      text: {
        en: 'Confirmed against a reliable source or document we actually hold — for example, a VIN or registration document. This label is used only when real evidence exists.',
        ar: 'مؤكد من مصدر موثوق أو وثيقة نحتفظ بها فعلاً — مثل رقم الهيكل (VIN) أو وثيقة التسجيل. تُستخدم هذه العلامة فقط عند وجود دليل حقيقي.',
        ru: 'Подтверждено надёжным источником или документом, который у нас действительно есть, — например, VIN или документ о регистрации. Эта метка используется только при наличии реальных доказательств.',
        es: 'Confirmado con una fuente fiable o un documento que realmente tenemos; por ejemplo, un VIN o un documento de matriculación. Esta etiqueta se usa solo cuando existe evidencia real.',
      },
    },
    {
      key: 'source_backed',
      label: { en: 'Source-backed', ar: 'مدعوم بمصدر', ru: 'Подтверждено источником', es: 'Respaldado por fuente' },
      text: {
        en: 'Supported by a citable source — for example, a manufacturer specification or an official government page — but not independently re-verified by us.',
        ar: 'مدعوم بمصدر يمكن الاستشهاد به — مثل مواصفة الشركة المصنعة أو صفحة حكومية رسمية — دون إعادة التحقق منه بشكل مستقل من قبلنا.',
        ru: 'Подтверждено источником, на который можно сослаться, — например, спецификацией производителя или официальной государственной страницей, — но не перепроверено нами независимо.',
        es: 'Respaldado por una fuente citable — por ejemplo, una especificación del fabricante o una página gubernamental oficial — pero no reverificado de forma independiente por nosotros.',
      },
    },
    {
      key: 'seller_provided',
      label: { en: 'Seller-provided', ar: 'مقدَّم من البائع', ru: 'Предоставлено продавцом', es: 'Facilitado por el vendedor' },
      text: {
        en: 'Supplied directly by the seller (dealer, exporter or data provider) and not independently verified.',
        ar: 'قدَّمه البائع مباشرة (التاجر أو المصدّر أو مزود البيانات) ولم يتم التحقق منه بشكل مستقل.',
        ru: 'Предоставлено напрямую продавцом (дилером, экспортёром или поставщиком данных) и не проверено независимо.',
        es: 'Facilitado directamente por el vendedor (concesionario, exportador o proveedor de datos) y no verificado de forma independiente.',
      },
    },
    {
      key: 'inspection_pending',
      label: { en: 'Inspection pending', ar: 'الفحص قيد الانتظار', ru: 'Проверка ожидается', es: 'Inspección pendiente' },
      text: {
        en: 'An inspection has been requested or is planned, but no report is available yet. Do not treat this as a completed inspection.',
        ar: 'تم طلب الفحص أو هو مخطط له، لكن لا يوجد تقرير متاح بعد. لا تعامل هذا على أنه فحص مكتمل.',
        ru: 'Проверка запрошена или запланирована, но отчёт ещё не готов. Не считайте это завершённой проверкой.',
        es: 'Se ha solicitado o está prevista una inspección, pero aún no hay informe disponible. No lo trate como una inspección completada.',
      },
    },
    {
      key: 'needs_confirmation',
      label: { en: 'Needs confirmation', ar: 'يحتاج إلى تأكيد', ru: 'Требует подтверждения', es: 'Necesita confirmación' },
      text: {
        en: 'The detail is present but has not been confirmed against a reliable source. Confirm it before relying on it.',
        ar: 'التفصيل موجود لكنه لم يُؤكد من مصدر موثوق. أكّده قبل الاعتماد عليه.',
        ru: 'Деталь указана, но не подтверждена надёжным источником. Подтвердите её, прежде чем полагаться.',
        es: 'El detalle está presente pero no se ha confirmado con una fuente fiable. Confírmelo antes de fiarse de él.',
      },
    },
    {
      key: 'estimated',
      label: { en: 'Estimated', ar: 'تقديري', ru: 'Оценка', es: 'Estimado' },
      text: {
        en: 'A calculated or approximate value — such as a landed-cost figure — not an exact quote or a customs assessment.',
        ar: 'قيمة محسوبة أو تقريبية — مثل رقم التكلفة النهائية — وليست عرض سعر دقيقاً أو تقديراً جمركياً.',
        ru: 'Расчётная или приблизительная величина — например, итоговая стоимость — а не точная котировка или таможенная оценка.',
        es: 'Un valor calculado o aproximado — como una cifra de coste de desembarco — no una cotización exacta ni una valoración aduanera.',
      },
    },
    {
      key: 'historical',
      label: { en: 'Historical', ar: 'تاريخي', ru: 'Исторические данные', es: 'Histórico' },
      text: {
        en: 'A record retained for reference (for example, a sold vehicle) rather than a current, actionable listing.',
        ar: 'سجل محفوظ للرجوع إليه (مثل مركبة مباعة) وليس إدراجاً حاليّاً قابلاً للتعامل.',
        ru: 'Запись, сохранённая для справки (например, проданный автомобиль), а не актуальное объявление.',
        es: 'Un registro conservado como referencia (por ejemplo, un vehículo vendido) y no un anuncio actual procesable.',
      },
    },
    {
      key: 'unavailable',
      label: { en: 'Unavailable', ar: 'غير متوفر', ru: 'Недоступно', es: 'No disponible' },
      text: {
        en: 'A detail we do not hold. We say so rather than guessing or leaving a blank field unexplained.',
        ar: 'تفصيل لا نحتفظ به. نقول ذلك بدلاً من التخمين أو ترك حقل فارغ دون توضيح.',
        ru: 'Деталь, которой у нас нет. Мы прямо это указываем, а не угадываем и не оставляем поле пустым без объяснения.',
        es: 'Un detalle que no tenemos. Lo indicamos en lugar de adivinar o dejar un campo vacío sin explicación.',
      },
    },
  ],
  sections: [
    {
      heading: {
        en: 'Vehicle Information Sources',
        ar: 'مصادر معلومات المركبات',
        ru: 'Источники информации об автомобилях',
        es: 'Fuentes de información del vehículo',
      },
      paragraphs: [
        {
          en: 'We collect vehicle information from the sources we work with — sellers, dealers and data providers in China\'s market. Each listing records what we received and where it came from.',
          ar: 'نجمع معلومات المركبات من المصادر التي نتعامل معها — البائعون والتجار ومزودو البيانات في السوق الصيني. يسجل كل إعلان ما استلمناه ومن أين جاء.',
          ru: 'Мы собираем информацию об автомобилях из источников, с которыми работаем, — продавцов, дилеров и поставщиков данных на китайском рынке. В каждом объявлении фиксируется, что мы получили и откуда.',
          es: 'Recopilamos la información de los vehículos de las fuentes con las que trabajamos: vendedores, concesionarios y proveedores de datos del mercado chino. Cada anuncio registra lo que recibimos y de dónde procede.',
        },
        {
          en: 'We do not generate or guess specifications, condition or history. Where we do not hold a detail, we mark it unavailable.',
          ar: 'لا نولّد أو نخمّن المواصفات أو الحالة أو السجل. عندما لا نحتفظ بتفصيل، نعلّمه بأنه غير متوفر.',
          ru: 'Мы не выдумываем и не угадываем характеристики, состояние или историю. Если у нас нет какой-то детали, мы помечаем её как недоступную.',
          es: 'No generamos ni adivinamos especificaciones, estado o historial. Cuando no tenemos un detalle, lo marcamos como no disponible.',
        },
      ],
    },
    {
      heading: {
        en: 'Vehicle Verification',
        ar: 'التحقق من المركبات',
        ru: 'Проверка автомобилей',
        es: 'Verificación del vehículo',
      },
      paragraphs: [
        {
          en: 'Vehicle verification means confirming a detail against a reliable source or document we hold. It is not the same as an inspection: verification confirms identity, documents or figures; inspection assesses physical condition.',
          ar: 'التحقق من المركبة يعني تأكيد تفصيل من مصدر موثوق أو وثيقة نحتفظ بها. وهو ليس مثل الفحص: فالتحقق يؤكد الهوية أو الوثائق أو الأرقام؛ أما الفحص فيقيّم الحالة الفعلية.',
          ru: 'Проверка автомобиля означает подтверждение детали надёжным источником или документом, который у нас есть. Это не то же самое, что осмотр: проверка подтверждает идентичность, документы или цифры, а осмотр оценивает физическое состояние.',
          es: 'La verificación de un vehículo significa confirmar un detalle con una fuente fiable o un documento que tenemos. No es lo mismo que una inspección: la verificación confirma identidad, documentos o cifras; la inspección evalúa el estado físico.',
        },
        {
          en: 'We use the "Verified" label only when such evidence actually exists. A detail marked otherwise has not been verified by us, even if it appears on a listing.',
          ar: 'نستخدم علامة «موثَّق» فقط عندما يوجد مثل هذا الدليل فعلاً. أي تفصيل معلَّم بغير ذلك لم نتحقق منه، حتى لو ظهر في الإعلان.',
          ru: 'Мы используем метку «Подтверждено» только при реальном наличии таких доказательств. Деталь с другой меткой нами не проверялась, даже если она есть в объявлении.',
          es: 'Usamos la etiqueta «Verificado» solo cuando existe realmente dicha evidencia. Un detalle marcado de otro modo no ha sido verificado por nosotros, aunque aparezca en el anuncio.',
        },
      ],
    },
    {
      heading: {
        en: 'Inspection Status',
        ar: 'حالة الفحص',
        ru: 'Статус осмотра',
        es: 'Estado de la inspección',
      },
      paragraphs: [
        {
          en: 'Inspection information is presented only when we hold it. Inspection availability depends on the vehicle and buyer requirements; not every vehicle has a full inspection report.',
          ar: 'تُعرض معلومات الفحص فقط عندما نحتفظ بها. يعتمد توفر الفحص على المركبة ومتطلبات المشتري؛ ليست كل مركبة لديها تقرير فحص كامل.',
          ru: 'Информация об осмотре показывается только при её наличии. Доступность осмотра зависит от автомобиля и требований покупателя; не у каждого автомобиля есть полный отчёт.',
          es: 'La información de inspección se presenta solo cuando la tenemos. La disponibilidad depende del vehículo y los requisitos del comprador; no todos los vehículos tienen un informe completo.',
        },
        {
          en: 'A status of "Inspection pending" means an inspection is requested or planned but not yet complete. We do not present inspection data we do not hold.',
          ar: 'حالة «الفحص قيد الانتظار» تعني أن الفحص مطلوب أو مخطط له لكنه لم يكتمل بعد. لا نعرض بيانات فحص لا نحتفظ بها.',
          ru: 'Статус «Проверка ожидается» означает, что проверка запрошена или запланирована, но ещё не завершена. Мы не показываем данные осмотра, которых у нас нет.',
          es: 'Un estado de «Inspección pendiente» significa que la inspección está solicitada o prevista pero aún no completada. No presentamos datos de inspección que no tenemos.',
        },
      ],
    },
    {
      heading: {
        en: 'Mileage Information',
        ar: 'معلومات المسافة المقطوعة',
        ru: 'Информация о пробеге',
        es: 'Información de kilometraje',
      },
      paragraphs: [
        {
          en: 'Mileage shown on a listing is the value supplied by the source and is marked with its status. We do not adjust or estimate mileage ourselves.',
          ar: 'المسافة المقطوعة المعروضة في الإعلان هي القيمة المقدَّمة من المصدر وتُعلَّم بحالتها. لا نعدّل أو نقدّر المسافة بأنفسنا.',
          ru: 'Пробег, указанный в объявлении, — это значение, предоставленное источником, и он помечен своим статусом. Мы сами не корректируем и не оцениваем пробег.',
          es: 'El kilometraje mostrado en un anuncio es el valor facilitado por la fuente y está marcado con su estado. No ajustamos ni estimamos el kilometraje por nuestra cuenta.',
        },
        {
          en: 'Mileage can be affected by odometer tampering in any used market. Confirm mileage and any supporting history before purchase; where we hold no evidence, we mark it accordingly.',
          ar: 'قد تتأثر المسافة المقطوعة بالتلاعب بعداد المسافة في أي سوق للمستعمل. أكّد المسافة وأي سجل داعم قبل الشراء؛ وعندما لا نحتفظ بدليل، نعلّمها وفق ذلك.',
          ru: 'На пробег в любом рынке подержанных автомобилей может повлиять скрутка одометра. Подтверждайте пробег и подтверждающую историю перед покупкой; если у нас нет доказательств, мы помечаем это.',
          es: 'El kilometraje puede verse afectado por la manipulación del cuentakilómetros en cualquier mercado de usados. Confirme el kilometraje y cualquier historial de respaldo antes de comprar; si no tenemos evidencia, lo marcamos en consecuencia.',
        },
      ],
    },
    {
      heading: {
        en: 'Price Update Policy',
        ar: 'سياسة تحديث الأسعار',
        ru: 'Политика обновления цен',
        es: 'Política de actualización de precios',
      },
      paragraphs: [
        {
          en: 'Listed prices are asking prices for the vehicle and are provided for information. They may vary based on configuration, shipping, taxes and destination, and do not include landed costs.',
          ar: 'الأسعار المدرجة هي أسعار طلب المركبة وتُقدَّم للمعلومات. قد تختلف حسب التجهيز والشحن والضرائب والوجهة، ولا تشمل تكاليف الوصول النهائية.',
          ru: 'Указанные цены — это запрашиваемая цена за автомобиль, приведённая для информации. Она может меняться в зависимости от комплектации, доставки, налогов и страны назначения и не включает итоговую стоимость.',
          es: 'Los precios listados son precios de venta del vehículo y se ofrecen a título informativo. Pueden variar según la configuración, el envío, los impuestos y el destino, y no incluyen los costes de desembarco.',
        },
        {
          en: 'We confirm final pricing when you request a quote. We do not publish fixed shipping or customs rates, because they depend on the destination.',
          ar: 'نؤكد السعر النهائي عند طلب عرض سعر. لا ننشر أسعار شحن أو رسوم جمركية ثابتة لأنها تعتمد على الوجهة.',
          ru: 'Мы подтверждаем итоговую цену при запросе расчёта. Мы не публикуем фиксированные тарифы на доставку или пошлины, поскольку они зависят от страны назначения.',
          es: 'Confirmamos el precio final al solicitar una cotización. No publicamos tarifas fijas de envío o aduana porque dependen del destino.',
        },
      ],
    },
    {
      heading: {
        en: 'Vehicle History',
        ar: 'سجل المركبة',
        ru: 'История автомобиля',
        es: 'Historial del vehículo',
      },
      paragraphs: [
        {
          en: 'Accident and maintenance history is shown only when we hold it, and is marked with its status. Absence of a record does not mean the vehicle has no history — it means we do not hold that information.',
          ar: 'يُعرض سجل الحوادث والصيانة فقط عندما نحتفظ به، ويُعلَّم بحالته. عدم وجود سجل لا يعني أن المركبة بلا سجل — بل يعني أننا لا نحتفظ بتلك المعلومات.',
          ru: 'История ДТП и обслуживания показывается только при её наличии и помечается своим статусом. Отсутствие записи не означает, что у автомобиля нет истории, — это значит, что у нас нет такой информации.',
          es: 'El historial de accidentes y mantenimiento se muestra solo cuando lo tenemos y está marcado con su estado. La ausencia de un registro no significa que el vehículo no tenga historial; significa que no tenemos esa información.',
        },
        {
          en: 'We encourage buyers to verify history independently where it matters for the purchase.',
          ar: 'نشجع المشترين على التحقق من السجل بشكل مستقل عندما يكون ذلك مهماً للشراء.',
          ru: 'Мы рекомендуем покупателям самостоятельно проверять историю там, где это важно для покупки.',
          es: 'Animamos a los compradores a verificar el historial de forma independiente cuando sea relevante para la compra.',
        },
      ],
    },
    {
      heading: {
        en: 'VIN Handling',
        ar: 'التعامل مع رقم الهيكل (VIN)',
        ru: 'Обращение с VIN',
        es: 'Gestión del VIN',
      },
      paragraphs: [
        {
          en: 'A VIN identifies a specific vehicle. Where a listing shows a VIN, it is the value supplied by the source and its status is marked on the listing.',
          ar: 'يحدد رقم الهيكل (VIN) مركبة محددة. عندما يعرض الإعلان رقم هيكل، فهو القيمة المقدَّمة من المصدر وحالته معلَّمة في الإعلان.',
          ru: 'VIN идентифицирует конкретный автомобиль. Если в объявлении указан VIN, это значение, предоставленное источником, и его статус помечен в объявлении.',
          es: 'El VIN identifica un vehículo concreto. Cuando un anuncio muestra un VIN, es el valor facilitado por la fuente y su estado está marcado en el anuncio.',
        },
        {
          en: 'We do not derive or reconstruct VINs. If a VIN is not available, we say so.',
          ar: 'لا نشتق أو نعيد تركيب أرقام الهيكل. إذا لم يتوفر رقم الهيكل، نقول ذلك.',
          ru: 'Мы не выводим и не восстанавливаем VIN. Если VIN недоступен, мы прямо это указываем.',
          es: 'No derivamos ni reconstruimos VIN. Si un VIN no está disponible, lo indicamos.',
        },
      ],
    },
    {
      heading: {
        en: 'Market Information Sources',
        ar: 'مصادر معلومات السوق',
        ru: 'Источники рыночной информации',
        es: 'Fuentes de información de mercado',
      },
      paragraphs: [
        {
          en: 'Market pages on our Market sub-site carry import rules, tax rates and compatibility notes. Every rule is linked to its source, its last-checked date and a confidence level.',
          ar: 'تحمل صفحات السوق في موقع السوق الفرعي لدينا قواعد الاستيراد ومعدلات الضرائب وملاحظات التوافق. كل قاعدة مربوطة بمصدرها وتاريخ آخر فحص لها ومستوى ثقتها.',
          ru: 'Страницы рынков на нашем рыночном подсайте содержат правила импорта, налоговые ставки и примечания о совместимости. Каждое правило связано с источником, датой последней проверки и уровнем достоверности.',
          es: 'Las páginas de mercado de nuestro subsitio de mercado incluyen reglas de importación, tipos impositivos y notas de compatibilidad. Cada regla está vinculada a su fuente, su fecha de última comprobación y un nivel de confianza.',
        },
        {
          en: 'We prefer official government, customs and transport authorities over third-party summaries for critical regulatory claims.',
          ar: 'نفضّل الجهات الحكومية والجمركية وجهات النقل الرسمية على الملخصات الخارجية للادعاءات التنظيمية الحرجة.',
          ru: 'Для критических нормативных утверждений мы предпочитаем официальные правительственные, таможенные и транспортные органы, а не сторонние сводки.',
          es: 'Para afirmaciones regulatorias críticas preferimos fuentes oficiales gubernamentales, aduaneras y de transporte antes que resúmenes de terceros.',
        },
      ],
    },
    {
      heading: {
        en: 'Regulatory Information',
        ar: 'المعلومات التنظيمية',
        ru: 'Нормативная информация',
        es: 'Información regulatoria',
      },
      paragraphs: [
        {
          en: 'Regulatory and tax information is general guidance only and is not legal advice. Requirements can change and vary by destination.',
          ar: 'المعلومات التنظيمية والضريبية هي إرشادات عامة فقط وليست نصيحة قانونية. قد تتغير المتطلبات وتختلف حسب الوجهة.',
          ru: 'Нормативная и налоговая информация носит только общий справочный характер и не является юридической консультацией. Требования могут меняться и различаться в зависимости от страны назначения.',
          es: 'La información regulatoria y fiscal es solo orientación general y no constituye asesoramiento legal. Los requisitos pueden cambiar y variar según el destino.',
        },
        {
          en: 'Consult the relevant destination-country authorities — customs, tax and transport — before trading. Do not rely on this website as a legal authority.',
          ar: 'استشر الجهات المعنية في بلد الوجهة — الجمارك والضرائب والنقل — قبل التعامل. لا تعتمد على هذا الموقع كمرجع قانوني.',
          ru: 'Перед сделкой консультируйтесь с соответствующими органами страны назначения — таможней, налоговыми и транспортными органами. Не полагайтесь на этот сайт как на правовой источник.',
          es: 'Consulte a las autoridades competentes del país de destino — aduanas, impuestos y transporte — antes de operar. No dependa de este sitio web como autoridad legal.',
        },
      ],
    },
    {
      heading: {
        en: 'Calculator Assumptions',
        ar: 'افتراضات الحاسبات',
        ru: 'Допущения калькуляторов',
        es: 'Supuestos de las calculadoras',
      },
      paragraphs: [
        {
          en: 'Our import tools produce estimates, not quotes. Each calculator states its inputs, formula, assumptions, data source, last-updated date and limitations.',
          ar: 'تنتج أدوات الاستيراد لدينا تقديرات، لا عروض أسعار. توضح كل حاسبة مدخلاتها وصيغتها وافتراضاتها ومصدر بياناتها وتاريخ آخر تحديث وقيودها.',
          ru: 'Наши импортные инструменты дают оценки, а не котировки. Каждый калькулятор указывает входные данные, формулу, допущения, источник данных, дату последнего обновления и ограничения.',
          es: 'Nuestras herramientas de importación producen estimaciones, no cotizaciones. Cada calculadora indica sus entradas, fórmula, supuestos, fuente de datos, fecha de última actualización y limitaciones.',
        },
        {
          en: 'Where the underlying rules do not support cent-level precision, we show a rounded "Estimated" figure rather than an exact-looking amount.',
          ar: 'عندما لا تدعم القواعد الأساسية دقة حتى السنت، نعرض رقماً مقرّباً بعبارة «تقديري» بدلاً من مبلغ يبدو دقيقاً.',
          ru: 'Когда исходные правила не поддерживают точность до цента, мы показываем округлённую величину с пометкой «Оценка», а не точную сумму.',
          es: 'Cuando las reglas subyacentes no respaldan precisión de céntimos, mostramos una cifra redondeada «Estimado» en lugar de una cantidad de apariencia exacta.',
        },
      ],
    },
    {
      heading: {
        en: 'Last-Updated Policy',
        ar: 'سياسة آخر تحديث',
        ru: 'Политика последнего обновления',
        es: 'Política de última actualización',
      },
      paragraphs: [
        {
          en: 'Content pages state when they were last reviewed. Market rules carry a last-checked date; exchange-rate and tax snapshots carry their source date.',
          ar: 'تذكر صفحات المحتوى متى رُوجعت آخر مرة. تحمل قواعد السوق تاريخ آخر فحص؛ وتحمل لقطات أسعار الصرف والضرائب تاريخ مصدرها.',
          ru: 'Страницы контента указывают дату последнего пересмотра. Правила рынка содержат дату последней проверки; снимки валютных курсов и налогов содержат дату источника.',
          es: 'Las páginas de contenido indican cuándo se revisaron por última vez. Las reglas de mercado llevan una fecha de última comprobación; las instantáneas de tipos de cambio e impuestos llevan su fecha de origen.',
        },
        {
          en: 'A recent date does not guarantee current accuracy. Verify time-sensitive figures with the relevant authority before acting.',
          ar: 'التاريخ الحديث لا يضمن الدقة الحالية. تحقق من الأرقام الحساسة زمنياً مع الجهة المعنية قبل التصرف.',
          ru: 'Недавняя дата не гарантирует актуальную точность. Проверяйте чувствительные ко времени цифры в соответствующем органе, прежде чем действовать.',
          es: 'Una fecha reciente no garantiza exactitud actual. Verifique las cifras sensibles al tiempo con la autoridad correspondiente antes de actuar.',
        },
      ],
    },
    {
      heading: {
        en: 'Data Limitations',
        ar: 'قيود البيانات',
        ru: 'Ограничения данных',
        es: 'Limitaciones de los datos',
      },
      paragraphs: [
        {
          en: 'We publish only information we hold. Fields we do not hold are marked unavailable rather than filled with an assumption.',
          ar: 'ننشر فقط المعلومات التي نحتفظ بها. الحقول التي لا نحتفظ بها تُعلَّم بأنها غير متوفرة بدلاً من ملئها بافتراض.',
          ru: 'Мы публикуем только имеющуюся информацию. Поля, которых у нас нет, помечаются как недоступные, а не заполняются предположением.',
          es: 'Publicamos solo la información que tenemos. Los campos que no tenemos se marcan como no disponibles en lugar de rellenarse con una suposición.',
        },
        {
          en: 'This platform is not a vehicle inspection body, a customs broker, a legal adviser or a shipping carrier. Those functions are performed by third parties.',
          ar: 'هذه المنصة ليست جهة فحص مركبات ولا وسيطاً جمركياً ولا مستشاراً قانونياً ولا ناقلاً بحرياً. يؤدي تلك الوظائف أطراف ثالثة.',
          ru: 'Эта платформа не является органом осмотра автомобилей, таможенным брокером, юридическим консультантом или перевозчиком. Эти функции выполняют третьи стороны.',
          es: 'Esta plataforma no es un organismo de inspección de vehículos, un agente de aduanas, un asesor legal ni un transportista. Esas funciones las realizan terceros.',
        },
      ],
    },
    {
      heading: {
        en: 'Corrections Policy',
        ar: 'سياسة التصحيحات',
        ru: 'Политика исправлений',
        es: 'Política de correcciones',
      },
      paragraphs: [
        {
          en: 'We aim to publish accurate, current information, but errors can occur. If you find an error or an outdated listing, tell us and we will review and correct it as soon as practicable.',
          ar: 'نسعى إلى نشر معلومات دقيقة وحديثة، لكن قد تحدث أخطاء. إذا وجدت خطأً أو إدراجاً قديماً، أخبرنا وسنراجعه ونصححه في أقرب وقت ممكن عملياً.',
          ru: 'Мы стремимся публиковать точную и актуальную информацию, но возможны ошибки. Если вы нашли ошибку или устаревшее объявление, сообщите нам — мы рассмотрим и исправим его как можно скорее.',
          es: 'Pretendemos publicar información precisa y actual, pero pueden producirse errores. Si encuentra un error o un anuncio desactualizado, avísenos y lo revisaremos y corregiremos tan pronto como sea posible.',
        },
        {
          en: 'Where a correction changes a fact a buyer may rely on, we update the affected page and its status where appropriate.',
          ar: 'عندما يغيّر التصحيح حقيقة قد يعتمد عليها المشتري، نحدّث الصفحة المعنية وحالتها حيثما يناسب.',
          ru: 'Если исправление меняет факт, на который может полагаться покупатель, мы обновляем соответствующую страницу и её статус, где это уместно.',
          es: 'Cuando una corrección cambia un hecho en el que un comprador podría confiar, actualizamos la página afectada y su estado cuando corresponde.',
        },
      ],
    },
  ],
};
