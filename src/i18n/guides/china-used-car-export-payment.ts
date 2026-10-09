import type { L10n } from '../l10n';

// Guide — China Used Car Export Payment (complete payment guide).
// Full guide perspective: the payment process, the main instruments (T/T, L/C,
// escrow), staged/instalment structure, currency & exchange rate, and bank
// compliance — general commercial practice, no invented fees, rates or bank
// names. Distinct from `china-used-car-export-payment-risks` (risk-protection
// perspective: signals + protective steps); the two cross-link.

export const payment = {
  slug: 'china-used-car-export-payment',
  title: {
    en: 'China Used Car Export Payment — The Complete Guide',
    ar: 'الدفع في تصدير السيارات المستعملة من الصين — الدليل الشامل',
    ru: 'Оплата при экспорте подержанных автомобилей из Китая — полное руководство',
    es: 'Pago en la exportación de coches usados desde China — la guía completa',
  },
  description: {
    en: 'How payment works when you buy a used car from a China exporter: the staged payment process, the main instruments (telegraphic transfer, letter of credit, escrow), instalment structure, currency and exchange rate, and bank compliance — general commercial practice, not fixed rates.',
    ar: 'كيف يعمل الدفع عند شراء سيارة مستعملة من مصدّر صيني: عملية الدفع المرحلي، والأدوات الرئيسية (التحويل البرقي والاعتماد المستندي والضمان)، وهيكل الأقساط، والعملة وسعر الصرف، والامتثال المصرفي — ممارسة تجارية عامة، لا أسعاراً ثابتة.',
    ru: 'Как устроена оплата при покупке подержанного автомобиля у китайского экспортёра: поэтапный процесс оплаты, основные инструменты (телеграфный перевод, аккредитив, эскроу), структура рассрочки, валюта и обменный курс, банковский комплаенс — общая коммерческая практика, без фиксированных ставок.',
    es: 'Cómo funciona el pago al comprar un coche usado a un exportador chino: el proceso de pago escalonado, los instrumentos principales (transferencia bancaria, carta de crédito, custodia), la estructura de pagos a plazos, la divisa y el tipo de cambio, y el cumplimiento bancario — práctica comercial general, sin tarifas fijas.',
  },
  h1: {
    en: 'China Used Car Export Payment: The Complete Guide',
    ar: 'الدفع في تصدير السيارات المستعملة من الصين: الدليل الشامل',
    ru: 'Оплата при экспорте подержанных автомобилей из Китая: полное руководство',
    es: 'Pago en la exportación de coches usados desde China: la guía completa',
  },
  summary: {
    en: 'How payment is structured and executed in a China used car export — the process, the instruments, the stages and the currency — so you pay against evidence, not hope.',
    ar: 'كيف يتم هيكلة الدفع وتنفيذه في تصدير السيارات المستعملة من الصين — العملية والأدوات والمراحل والعملة — بحيث تدفع مقابل الدليل لا الأمل.',
    ru: 'Как структурируется и исполняется оплата при экспорте подержанного автомобиля из Китая — процесс, инструменты, этапы и валюта — чтобы вы платили за доказательства, а не за надежду.',
    es: 'Cómo se estructura y ejecuta el pago en una exportación de coches usados desde China — el proceso, los instrumentos, las etapas y la divisa — para pagar contra evidencia, no contra esperanza.',
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
          en: 'Payment in a China used car export is not one transfer: it is a staged sequence of payments released against verifiable milestones. The three main instruments are telegraphic transfer (T/T), a letter of credit (L/C) and escrow, and the deal currency and the paying account are agreed in writing in the contract before any money moves. This page explains the complete payment process; the separate Payment Risks guide covers the risk signals and the protective steps that keep the money recoverable.',
          ar: 'الدفع في تصدير السيارات المستعملة من الصين ليس تحويلاً واحداً؛ بل سلسلة دفع مرحلي تُفرج دفعاته مقابل مراحل إنجاز قابلة للتحقق. الأدوات الرئيسية الثلاث هي التحويل البرقي (T/T) والاعتماد المستندي (L/C) وحساب الضمان (escrow)، ويُتفق على عملة الصفقة والحساب الدافع كتابةً في العقد قبل تحريك أي أموال. تشرح هذه الصفحة عملية الدفع الكاملة؛ أما دليل مخاطر الدفع المنفصل فيغطي إشارات الخطر والخطوات الوقائية التي تحافظ على قابلية استرداد الأموال.',
          ru: 'Оплата при экспорте подержанного автомобиля из Китая — это не один перевод, а поэтапная последовательность платежей, перечисляемых против проверяемых этапов. Три основных инструмента — телеграфный перевод (T/T), аккредитив (L/C) и эскроу, а валюта сделки и платёжный счёт письменно согласуются в контракте до перевода каких-либо средств. Эта страница объясняет весь процесс оплаты; отдельное руководство по платёжным рискам описывает тревожные сигналы и защитные шаги, сохраняющие возможность вернуть деньги.',
          es: 'El pago en una exportación de coches usados desde China no es una sola transferencia: es una secuencia escalonada de pagos liberados contra hitos verificables. Los tres instrumentos principales son la transferencia bancaria (T/T), la carta de crédito (L/C) y la custodia (escrow), y la divisa de la operación y la cuenta de pago se acuerdan por escrito en el contrato antes de mover dinero alguno. Esta página explica el proceso de pago completo; la guía separada de Riesgos de pago cubre las señales de riesgo y los pasos de protección que mantienen el dinero recuperable.',
        },
      ],
    },
    {
      heading: {
        en: 'The payment process at a glance',
        ar: 'عملية الدفع في لمحة',
        ru: 'Процесс оплаты в общем виде',
        es: 'El proceso de pago de un vistazo',
      },
      paragraphs: [
        {
          en: 'Money should follow evidence. Each stage below ties a payment to something you can independently check.',
          ar: 'يجب أن يتبع المال الدليل. تربط كل مرحلة أدناه دفعةً بشيء يمكنك التحقق منه بشكل مستقل.',
          ru: 'Деньги должны следовать за доказательствами. Каждый этап ниже привязывает платёж к тому, что вы можете проверить самостоятельно.',
          es: 'El dinero debe seguir a la evidencia. Cada etapa siguiente vincula un pago a algo que puede comprobar de forma independiente.',
        },
      ],
      table: {
        headers: [
          { en: 'Stage', ar: 'المرحلة', ru: 'Этап', es: 'Etapa' },
          { en: 'What happens', ar: 'ما يحدث', ru: 'Что происходит', es: 'Qué ocurre' },
          { en: 'When money moves', ar: 'متى يتحرك المال', ru: 'Когда переводятся деньги', es: 'Cuándo se mueve el dinero' },
        ],
        rows: [
          [
            { en: '1. Contract', ar: '1. العقد', ru: '1. Контракт', es: '1. Contrato' },
            { en: 'You agree the vehicle, price, documents, after-sales terms and a staged payment schedule in writing.', ar: 'تتفق كتابةً على المركبة والسعر والوثائق وشروط ما بعد البيع وجدول دفع مرحلي.', ru: 'Вы письменно согласуете автомобиль, цену, документы, условия послепродажного обслуживания и поэтапный график оплаты.', es: 'Acuerda por escrito el vehículo, el precio, los documentos, las condiciones posventa y un calendario de pagos escalonado.' },
            { en: 'A deposit after the contract is signed and the exporter is verified.', ar: 'عربون بعد توقيع العقد والتحقق من المصدّر.', ru: 'Депозит после подписания контракта и проверки экспортёра.', es: 'Un depósito tras firmar el contrato y verificar al exportador.' },
          ],
          [
            { en: '2. Verification', ar: '2. التحقق', ru: '2. Проверка', es: '2. Verificación' },
            { en: 'You verify the exporter\'s filing and registration and the vehicle\'s identity and documents.', ar: 'تتحقق من تسجيل المصدّر واستعلامه ومن هوية المركبة ووثائقها.', ru: 'Вы проверяете регистрацию и данные экспортёра, а также идентичность автомобиля и документы.', es: 'Verifica el registro y los datos del exportador y la identidad y documentos del vehículo.' },
            { en: 'No payment — verification happens before money moves.', ar: 'لا دفع — يتم التحقق قبل تحريك المال.', ru: 'Оплаты нет — проверка происходит до перевода денег.', es: 'Sin pago: la verificación ocurre antes de mover el dinero.' },
          ],
          [
            { en: '3. Licence & inspection', ar: '3. الرخصة والفحص', ru: '3. Лицензия и осмотр', es: '3. Licencia e inspección' },
            { en: 'The exporter obtains the export licence and the vehicle passes inspection.', ar: 'يحصل المصدّر على رخصة التصدير وتجتاز المركبة الفحص.', ru: 'Экспортёр получает экспортную лицензию, а автомобиль проходит осмотр.', es: 'El exportador obtiene la licencia de exportación y el vehículo pasa la inspección.' },
            { en: 'A balance payment against the licence and the inspection report.', ar: 'دفعة رصيد مقابل الرخصة وتقرير الفحص.', ru: 'Остаток против лицензии и отчёта об осмотре.', es: 'Un pago del saldo contra la licencia y el informe de inspección.' },
          ],
          [
            { en: '4. Loading & bill of lading', ar: '4. التحميل وبوليصة الشحن', ru: '4. Погрузка и коносамент', es: '4. Carga y conocimiento de embarque' },
            { en: 'The vehicle is loaded and the carrier issues the bill of lading.', ar: 'تُحمَّل المركبة ويصدر الناقل بوليصة الشحن.', ru: 'Автомобиль погружен, и перевозчик выдаёт коносамент.', es: 'El vehículo se carga y el transportista emite el conocimiento de embarque.' },
            { en: 'The remaining balance against the bill of lading or loading confirmation.', ar: 'الرصيد المتبقي مقابل بوليصة الشحن أو تأكيد التحميل.', ru: 'Оставшийся остаток против коносамента или подтверждения погрузки.', es: 'El saldo restante contra el conocimiento de embarque o la confirmación de carga.' },
          ],
          [
            { en: '5. Shipping & delivery', ar: '5. الشحن والتسليم', ru: '5. Доставка и получение', es: '5. Envío y entrega' },
            { en: 'The vehicle ships to your port and clears your destination country\'s import rules.', ar: 'تُشحن المركبة إلى مينائك وتستوفي قواعد الاستيراد في بلد وجهتك.', ru: 'Автомобиль отправляется в ваш порт и проходит правила импорта страны назначения.', es: 'El vehículo se envía a su puerto y cumple las normas de importación de su país de destino.' },
            { en: 'Any final amount as written in the contract — avoid paying the full amount before loading.', ar: 'أي مبلغ نهائي كما ورد في العقد — تجنّب دفع المبلغ كاملاً قبل التحميل.', ru: 'Любая финальная сумма, указанная в контракте, — избегайте полной оплаты до погрузки.', es: 'Cualquier importe final según el contrato: evite pagar el importe completo antes de la carga.' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'The main payment instruments compared',
        ar: 'مقارنة أدوات الدفع الرئيسية',
        ru: 'Сравнение основных платёжных инструментов',
        es: 'Comparación de los principales instrumentos de pago',
      },
      paragraphs: [
        {
          en: 'The three instruments differ in how the money moves and who carries the risk. Choose by deal value and verification strength, not by the lowest fee. For the risk trade-off behind each, see the Payment Risks guide.',
          ar: 'تختلف الأدوات الثلاثة في كيفية تحرك المال ومن يتحمل الخطر. اختر حسب قيمة الصفقة وقوة التحقق، لا حسب أقل رسوم. ولمعرفة الموازنة بين المخاطر خلف كل أداة، راجع دليل مخاطر الدفع.',
          ru: 'Три инструмента различаются тем, как движутся деньги и кто несёт риск. Выбирайте по сумме сделки и глубине проверки, а не по самой низкой комиссии. О соотношении рисков по каждому — в руководстве по платёжным рискам.',
          es: 'Los tres instrumentos difieren en cómo se mueve el dinero y quién asume el riesgo. Elija por el valor de la operación y la solidez de la verificación, no por la comisión más baja. Para la relación riesgo de cada uno, véase la guía de Riesgos de pago.',
        },
      ],
      table: {
        headers: [
          { en: 'Instrument', ar: 'الأداة', ru: 'Инструмент', es: 'Instrumento' },
          { en: 'How it works', ar: 'كيف يعمل', ru: 'Как работает', es: 'Cómo funciona' },
          { en: 'When it suits', ar: 'متى يناسب', ru: 'Когда подходит', es: 'Cuándo conviene' },
          { en: 'Key consideration', ar: 'الاعتبار الأساسي', ru: 'Ключевое соображение', es: 'Consideración clave' },
        ],
        rows: [
          [
            { en: 'Telegraphic transfer (T/T)', ar: 'التحويل البرقي (T/T)', ru: 'Телеграфный перевод (T/T)', es: 'Transferencia bancaria (T/T)' },
            { en: 'You transfer from your bank to the exporter\'s named account, usually a deposit then a balance per milestone.', ar: 'تحوّل من مصرفك إلى الحساب المسمى للمصدّر، عادةً عربون ثم رصيد لكل مرحلة.', ru: 'Вы переводите со своего банка на именованный счёт экспортёра, обычно депозит, затем остаток по этапам.', es: 'Transfiere de su banco a la cuenta nominativa del exportador, normalmente un depósito y luego un saldo por hito.' },
            { en: 'Standard single-unit and small-batch deals, where the exporter is verified and milestones are clear.', ar: 'صفقات الوحدة المفردة والدفعات الصغيرة القياسية، حيث يكون المصدّر متحققاً منه والمراحل واضحة.', ru: 'Стандартные сделки на одну единицу и небольшие партии, где экспортёр проверен и этапы ясны.', es: 'Operaciones estándar de una unidad o lotes pequeños, con exportador verificado e hitos claros.' },
            { en: 'Funds are gone once sent — your protection is the staged schedule and the account-name match, not the instrument.', ar: 'الأموال تذهب بمجرد إرسالها — حمايتك هي الجدول المرحلي ومطابقة اسم الحساب، لا الأداة.', ru: 'Средства уходят после отправки — ваша защита в поэтапном графике и совпадении имени счёта, а не в инструменте.', es: 'Los fondos se van una vez enviados: su protección es el calendario escalonado y la coincidencia del nombre de la cuenta, no el instrumento.' },
          ],
          [
            { en: 'Letter of credit (L/C)', ar: 'الاعتماد المستندي (L/C)', ru: 'Аккредитив (L/C)', es: 'Carta de crédito (L/C)' },
            { en: 'Your bank commits to pay the exporter only when the specified documents (such as the bill of lading) are presented.', ar: 'يلتزم مصرفك بالدفع للمصدّر فقط عند تقديم الوثائق المحددة (مثل بوليصة الشحن).', ru: 'Ваш банк обязуется заплатить экспортёру только при представлении указанных документов (например, коносамента).', es: 'Su banco se compromete a pagar al exportador solo cuando se presenten los documentos especificados (como el conocimiento de embarque).' },
            { en: 'Higher-value deals and bulk orders, where the document condition is worth the cost and paperwork.', ar: 'الصفقات الأعلى قيمة والطلبات بالجملة، حيث تستحق شرطية الوثائق التكلفة والأوراق.', ru: 'Более дорогие сделки и оптовые заказы, где условие по документам стоит затрат и бумажной работы.', es: 'Operaciones de mayor valor y pedidos al por mayor, donde la condición documental justifica el coste y el papeleo.' },
            { en: 'Payment is conditional on documents, not on trust — but it requires both banks to agree on the terms.', ar: 'الدفع مشروط بالوثائق لا بالثقة — لكنه يتطلب موافقة المصرفين على الشروط.', ru: 'Оплата зависит от документов, а не от доверия, — но требует согласия обоих банков по условиям.', es: 'El pago depende de documentos, no de confianza, pero requiere que ambos bancos acuerden las condiciones.' },
          ],
          [
            { en: 'Escrow', ar: 'حساب الضمان (Escrow)', ru: 'Эскроу', es: 'Custodia (escrow)' },
            { en: 'A neutral third party holds your funds and releases them only when the agreed condition (such as loading) is met.', ar: 'يحتفظ طرف محايد بأموالك ولا يفرج عنها إلا عند تحقق الشرط المتفق عليه (مثل التحميل).', ru: 'Нейтральная третья сторона держит ваши средства и переводит их только при выполнении согласованного условия (например, погрузки).', es: 'Un tercero neutral retiene sus fondos y los libera solo cuando se cumple la condición acordada (por ejemplo, la carga).' },
            { en: 'First-time buyers and deals where trust is not yet established, if both parties agree to use it.', ar: 'المشترون لأول مرة والصفقات التي لم تُبنَ فيها الثقة بعد، إذا وافق الطرفان على استخدامه.', ru: 'Покупатели-новички и сделки, где доверие ещё не установлено, если обе стороны согласны его использовать.', es: 'Compradores primerizos y operaciones donde aún no hay confianza, si ambas partes aceptan usarlo.' },
            { en: 'Availability depends on the provider and both parties\' agreement — confirm the provider and terms before relying on it.', ar: 'يعتمد التوفر على المزود وموافقة الطرفين — أكّد المزود والشروط قبل الاعتماد عليه.', ru: 'Доступность зависит от провайдера и согласия сторон — подтвердите провайдера и условия, прежде чем полагаться на него.', es: 'La disponibilidad depende del proveedor y del acuerdo de ambas partes: confirme el proveedor y las condiciones antes de fiarse de él.' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'Structuring payment in stages',
        ar: 'هيكلة الدفع على مراحل',
        ru: 'Структурирование оплаты по этапам',
        es: 'Estructurar el pago por etapas',
      },
      paragraphs: [
        {
          en: 'A staged (instalment) structure ties each tranche to a milestone, so you never carry the whole risk at once. There is no universal percentage split — the split is a negotiation — but the principle is constant: the largest tranche should move only against the strongest evidence (the bill of lading or loading confirmation).',
          ar: 'الهيكل المرحلي (بالأقساط) يربط كل دفعة بمرحلة إنجاز، بحيث لا تتحمل الخطر كله دفعة واحدة. لا توجد نسبة تقسيم عالمية — التقسيم مسألة تفاوض — لكن المبدأ ثابت: يجب أن تتحرك الدفعة الأكبر فقط مقابل أقوى دليل (بوليصة الشحن أو تأكيد التحميل).',
          ru: 'Поэтапная (рассроченная) структура привязывает каждый транш к этапу, чтобы вы не несли весь риск сразу. Универсальной пропорции нет — это предмет переговоров, — но принцип постоянен: самый крупный транш должен переводиться только против самого сильного доказательства (коносамент или подтверждение погрузки).',
          es: 'Una estructura escalonada (a plazos) vincula cada tramo a un hito, de modo que nunca asuma todo el riesgo de golpe. No existe un reparto porcentual universal — el reparto es una negociación —, pero el principio es constante: el tramo mayor debe moverse solo contra la evidencia más sólida (el conocimiento de embarque o la confirmación de carga).',
        },
      ],
      checklist: [
        {
          en: 'Write the schedule into the contract: each tranche, its amount or share, and the exact milestone that releases it',
          ar: 'اكتب الجدول في العقد: كل دفعة وقيمتها أو نسبتها والمرحلة الدقيقة التي تفرج عنها',
          ru: 'Запишите график в контракт: каждый транш, его сумму или долю и точный этап, который его высвобождает',
          es: 'Escriba el calendario en el contrato: cada tramo, su importe o porcentaje y el hito exacto que lo libera',
        },
        {
          en: 'Keep the deposit small enough that you can walk away, and large enough to show commitment',
          ar: 'اجعل العربون صغيراً بما يكفي لتتمكن من الانسحاب، وكبيراً بما يكفي لإظهار الالتزام',
          ru: 'Держите депозит достаточно малым, чтобы можно было отказаться, и достаточно большим, чтобы показать обязательство',
          es: 'Mantenga el depósito lo bastante pequeño para poder retirarse y lo bastante grande para mostrar compromiso',
        },
        {
          en: 'Tie the balance to the bill of lading or a loading confirmation you can verify with the carrier',
          ar: 'اربط الرصيد ببوليصة الشحن أو تأكيد تحميل يمكنك التحقق منه لدى الناقل',
          ru: 'Привяжите остаток к коносаменту или подтверждению погрузки, которые вы можете проверить у перевозчика',
          es: 'Vincule el saldo al conocimiento de embarque o a una confirmación de carga que pueda verificar con el transportista',
        },
        {
          en: 'Never agree to a schedule that releases the full amount before any verifiable event',
          ar: 'لا توافق أبداً على جدول يفرج عن المبلغ كاملاً قبل أي حدث قابل للتحقق',
          ru: 'Никогда не соглашайтесь на график, высвобождающий полную сумму до какого-либо проверяемого события',
          es: 'Nunca acepte un calendario que libere el importe completo antes de un hecho verificable',
        },
      ],
    },
    {
      heading: {
        en: 'Currency and exchange rate',
        ar: 'العملة وسعر الصرف',
        ru: 'Валюта и обменный курс',
        es: 'Divisa y tipo de cambio',
      },
      paragraphs: [
        {
          en: 'The deal currency is a contract term, not an afterthought. Most China used car exports are priced in US dollars (USD) or Chinese yuan (CNY); the exporter quotes in one, and you pay in whichever the contract states. If your bank settles in a different currency, the exchange rate applied on the payment date is a real cost that can move the total. This page does not quote exchange rates — they change continuously and are set by your bank at the moment of transfer. Fix in the contract who bears any movement between the quote and the payment dates.',
          ar: 'عملة الصفقة شرط في العقد، لا فكرة لاحقة. تُسعَّر معظم صادرات السيارات المستعملة الصينية بالدولار الأمريكي (USD) أو اليوان الصيني (CNY)؛ يقدّم المصدّر السعر بعملة، وتدفع بالعملة التي ينص عليها العقد. إذا سوّى مصرفك بعملة مختلفة، فإن سعر الصرف المطبق في تاريخ الدفع تكلفة حقيقية قد تحرّك الإجمالي. لا تذكر هذه الصفحة أسعار صرف — فهي تتغير باستمرار ويحددها مصرفك لحظة التحويل. ثبّت في العقد من يتحمل أي حركة بين تاريخي التسعير والدفع.',
          ru: 'Валюта сделки — это условие контракта, а не второстепенная деталь. Большинство экспортных сделок по подержанным автомобилям из Китая оцениваются в долларах США (USD) или китайских юанях (CNY); экспортёр указывает цену в одной валюте, а вы платите в той, что зафиксирована в контракте. Если ваш банк проводит расчёт в другой валюте, курс на дату платежа — это реальная стоимость, которая может изменить итог. Эта страница не приводит курсы — они меняются постоянно и устанавливаются вашим банком в момент перевода. Зафиксируйте в контракте, кто несёт любое изменение между датами котировки и платежа.',
          es: 'La divisa de la operación es una condición del contrato, no una idea tardía. La mayoría de las exportaciones de coches usados desde China se cotizan en dólares estadounidenses (USD) o yuanes chinos (CNY); el exportador cotiza en una y usted paga en la que indique el contrato. Si su banco liquida en otra divisa, el tipo de cambio aplicado en la fecha de pago es un coste real que puede mover el total. Esta página no cita tipos de cambio: cambian continuamente y los fija su banco en el momento de la transferencia. Fije en el contrato quién asume cualquier movimiento entre las fechas de cotización y de pago.',
        },
      ],
    },
    {
      heading: {
        en: 'Bank compliance and verification',
        ar: 'الامتثال المصرفي والتحقق',
        ru: 'Банковский комплаенс и проверка',
        es: 'Cumplimiento bancario y verificación',
      },
      paragraphs: [
        {
          en: 'Banks on both sides run compliance checks on cross-border payments — identity, source of funds and the purpose of the transfer — and they match the beneficiary name against the account. This is why the paying account must carry the contract entity\'s name: a mismatch is both a compliance red flag and a sign the money is going to the wrong party. Confirm the account name and number in writing, from the same channel that issued the contract, and re-verify before every tranche. This page names no bank and quotes no fees or processing terms; those are confirmed directly with your bank.',
          ar: 'تجري المصارف على الجانبين فحوصات امتثال على المدفوعات عبر الحدود — الهوية ومصدر الأموال والغرض من التحويل — وتطابق اسم المستفيد مع الحساب. لهذا يجب أن يحمل الحساب الدافع اسم كيان العقد: فعدم التطابق إشارة امتثال خطر ودليل على أن المال ذاهب إلى الطرف الخطأ. أكّد اسم الحساب ورقمه كتابةً، من القناة نفسها التي أصدرت العقد، وأعد التحقق قبل كل دفعة. لا تسمي هذه الصفحة أي مصرف ولا تذكر رسوماً أو شروط معالجة؛ فهي تُؤكد مباشرة مع مصرفك.',
          ru: 'Банки с обеих сторон проводят комплаенс-проверки трансграничных платежей — личности, источника средств и назначения перевода — и сверяют имя получателя со счётом. Поэтому платёжный счёт должен носить имя организации из контракта: несовпадение — это и комплаенс-тревога, и признак того, что деньги уходят не тому. Подтверждайте имя и номер счёта письменно, по тому же каналу, что выпустил контракт, и перепроверяйте перед каждым траншем. Эта страница не называет банков и не приводит комиссии или условия обработки — они подтверждаются напрямую с вашим банком.',
          es: 'Los bancos de ambas partes ejecutan comprobaciones de cumplimiento en los pagos transfronterizos — identidad, origen de los fondos y finalidad de la transferencia — y cotejan el nombre del beneficiario con la cuenta. Por eso la cuenta de pago debe llevar el nombre de la entidad del contrato: una discrepancia es a la vez una señal de cumplimiento y un indicio de que el dinero va a la parte equivocada. Confirme el nombre y el número de cuenta por escrito, por el mismo canal que emitió el contrato, y vuelva a verificarlos antes de cada tramo. Esta página no nombra ningún banco ni cita comisiones ni condiciones de tramitación; se confirman directamente con su banco.',
        },
      ],
      links: [
        {
          slug: 'how-to-check-chinese-company-registration',
          label: {
            en: 'Confirm the entity behind the account — Company Registration guide',
            ar: 'أكّد الكيان خلف الحساب — دليل التحقق من تسجيل الشركة',
            ru: 'Подтвердите организацию за счётом — руководство по проверке регистрации компании',
            es: 'Confirme la entidad detrás de la cuenta — guía de registro de empresa',
          },
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
          en: 'A well-structured payment is a buyer\'s main source of leverage. If you pay in stages against documented milestones, into a named account that matches the contract, you keep control through every step from deposit to bill of lading. If you pay the full amount up front into an unverified account, you have given that control away before the vehicle is even loaded. The payment method you pick matters less than the discipline of the schedule and the account.',
          ar: 'الدفع المنظم جيداً هو المصدر الرئيسي للنفوذ لدى المشتري. إذا دفعت على مراحل مقابل مراحل موثقة، إلى حساب مسمى يطابق العقد، فإنك تحتفظ بالسيطرة في كل خطوة من العربون إلى بوليصة الشحن. أما إذا دفعت المبلغ كاملاً مقدماً إلى حساب غير متحقق منه، فقد تخلّيت عن تلك السيطرة قبل تحميل المركبة أصلاً. طريقة الدفع التي تختارها أقل أهمية من انضباط الجدول والحساب.',
          ru: 'Хорошо выстроенная оплата — главный источник рычагов покупателя. Если вы платите поэтапно против документированных этапов, на именованный счёт, совпадающий с контрактом, вы сохраняете контроль на каждом шаге — от депозита до коносамента. Если же вы платите всю сумму вперёд на непроверенный счёт, вы отдали этот контроль ещё до погрузки автомобиля. Способ оплаты менее важен, чем дисциплина графика и счёта.',
          es: 'Un pago bien estructurado es la principal fuente de influencia del comprador. Si paga por etapas contra hitos documentados, a una cuenta nominativa que coincide con el contrato, conserva el control en cada paso, del depósito al conocimiento de embarque. Si paga el importe completo por adelantado a una cuenta no verificada, ha cedido ese control antes incluso de que se cargue el vehículo. El método de pago que elija importa menos que la disciplina del calendario y de la cuenta.',
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
          en: 'This page describes general commercial payment practice and does not quote fees, exchange rates, processing terms or bank names, which vary by institution and are confirmed at payment time. Escrow availability depends on the provider and both parties\' agreement. This platform is not a bank, a payment provider or an escrow agent and does not hold or move buyer funds. It is not financial or legal advice.',
          ar: 'تصف هذه الصفحة ممارسة الدفع التجارية العامة ولا تذكر رسوماً أو أسعار صرف أو شروط معالجة أو أسماء مصارف، لأنها تختلف حسب المؤسسة وتُؤكد عند الدفع. يعتمد توفر حساب الضمان على المزود وموافقة الطرفين. هذه المنصة ليست مصرفاً أو مزود دفع أو وكيل ضمان ولا تحتفظ بأموال المشترين أو تنقلها. وهي ليست استشارة مالية أو قانونية.',
          ru: 'Эта страница описывает общую коммерческую платёжную практику и не приводит комиссии, курсы, условия обработки или названия банков, которые зависят от учреждения и подтверждаются при оплате. Доступность эскроу зависит от провайдера и согласия сторон. Эта платформа не является банком, платёжным провайдером или эскроу-агентом и не хранит и не перемещает средства покупателей. Это не финансовая и не юридическая консультация.',
          es: 'Esta página describe la práctica comercial general de pagos y no cita comisiones, tipos de cambio, condiciones de tramitación ni nombres de bancos, que varían por entidad y se confirman al pagar. La disponibilidad de la custodia depende del proveedor y del acuerdo de ambas partes. Esta plataforma no es un banco, un proveedor de pagos ni un agente de custodia, y no retiene ni mueve fondos de compradores. No constituye asesoramiento financiero ni legal.',
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
          slug: 'china-used-car-export-payment-risks',
          label: {
            en: 'The risk side — payment risks, signals and protective steps',
            ar: 'جانب الخطر — مخاطر الدفع والإشارات والخطوات الوقائية',
            ru: 'Сторона риска — платёжные риски, сигналы и защитные шаги',
            es: 'El lado del riesgo — riesgos de pago, señales y pasos de protección',
          },
        },
        {
          slug: 'china-used-car-export-contract-checklist',
          label: {
            en: 'Fix the payment schedule in the contract — Contract Checklist guide',
            ar: 'ثبّت جدول الدفع في العقد — دليل قائمة العقد',
            ru: 'Зафиксируйте график оплаты в контракте — руководство по чек-листу контракта',
            es: 'Fije el calendario de pagos en el contrato — guía de lista de contrato',
          },
        },
        {
          slug: 'how-to-verify-china-used-car-exporter',
          label: {
            en: 'Verify the exporter before the deposit — How to Verify guide',
            ar: 'تحقق من المصدّر قبل العربون — دليل «كيف تتحقق»',
            ru: 'Проверьте экспортёра до депозита — руководство «Как проверить»',
            es: 'Verifique al exportador antes del depósito — guía «Cómo verificar»',
          },
        },
        {
          href: 'https://tool.chinausedautohub.com/landed-cost-calculator/',
          label: {
            en: 'Estimate your total outlay — Landed Cost Calculator',
            ar: 'قدّر إجمالي إنفاقك — حاسبة التكلفة النهائية',
            ru: 'Оцените общие расходы — калькулятор итоговой стоимости',
            es: 'Estime su desembolso total — calculadora de coste de desembarco',
          },
        },
        {
          href: 'https://chinausedautohub.com/contact/',
          label: {
            en: 'Ask us about a vehicle or payment — Contact',
            ar: 'اسألنا عن مركبة أو دفع — اتصل بنا',
            ru: 'Спросите нас об автомобиле или оплате — Контакты',
            es: 'Pregúntenos por un vehículo o un pago — Contacto',
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
          en: 'Last reviewed: 2026-10-09. This guide describes general commercial payment practice and is not financial or legal advice. It does not quote fees, rates, processing terms or bank names. Confirm the currency, the account, the payment method and any fees or terms with your bank and the payment provider before transferring funds.',
          ar: 'آخر مراجعة: 2026-10-09. يصف هذا الدليل ممارسة الدفع التجارية العامة وليس استشارة مالية أو قانونية. وهو لا يذكر رسوماً أو أسعاراً أو شروط معالجة أو أسماء مصارف. أكّد العملة والحساب وطريقة الدفع وأي رسوم أو شروط مع مصرفك ومزود الدفع قبل تحويل الأموال.',
          ru: 'Последняя проверка: 2026-10-09. Это руководство описывает общую коммерческую платёжную практику и не является финансовой или юридической консультацией. Оно не приводит комиссии, ставки, условия обработки или названия банков. Подтвердите валюту, счёт, способ оплаты и любые комиссии или условия у вашего банка и платёжного провайдера до перевода средств.',
          es: 'Última revisión: 2026-10-09. Esta guía describe la práctica comercial general de pagos y no constituye asesoramiento financiero ni legal. No cita comisiones, tipos, condiciones de tramitación ni nombres de bancos. Confirme la divisa, la cuenta, el método de pago y cualquier comisión o condición con su banco y el proveedor de pago antes de transferir fondos.',
        },
      ],
    },
  ],
};
