import type { L10n } from '../l10n';

// Guide — Used Car Export After-Sales Service Confirmation. The 售后维修服务确认书
// mechanism introduced by 商贸函〔2025〕648号 (effective 2026-01-01). Official-source
// verified; facts separated from interpretation per §9.

export const afterSalesConfirmation = {
  slug: 'used-car-export-after-sales-service-confirmation',
  title: {
    en: 'Used Car Export After-Sales Service Confirmation',
    ar: 'إقرار خدمة ما بعد البيع لتصدير السيارات المستعملة',
    ru: 'Подтверждение послепродажного обслуживания при экспорте подержанных автомобилей',
    es: 'Confirmación de servicio posventa en la exportación de coches usados',
  },
  description: {
    en: 'China\'s used car export after-sales service confirmation (售后维修服务确认书): when it is required, who issues it, what it contains and what overseas buyers should ask before payment.',
    ar: 'إقرار خدمة ما بعد البيع لتصدير السيارات المستعملة في الصين (售后维修服务确认书): متى يُطلب، ومن يصدره، وماذا يتضمن، وما الذي يجب على المشترين في الخارج أن يسألوا عنه قبل الدفع.',
    ru: 'Подтверждение послепродажного обслуживания при экспорте подержанных автомобилей из Китая (售后维修服务确认书): когда требуется, кто выдаёт, что содержит и что зарубежным покупателям спрашивать до оплаты.',
    es: 'La confirmación de servicio posventa en la exportación de coches usados desde China (售后维修服务确认书): cuándo se exige, quién la emite, qué contiene y qué deben preguntar los compradores extranjeros antes de pagar.',
  },
  h1: {
    en: 'Used Car Export After-Sales Service Confirmation',
    ar: 'إقرار خدمة ما بعد البيع لتصدير السيارات المستعملة',
    ru: 'Подтверждение послепродажного обслуживания при экспорте подержанных автомобилей',
    es: 'Confirmación de servicio posventa en la exportación de coches usados',
  },
  summary: {
    en: 'What the after-sales service confirmation is, when a near-new export requires it, and how buyers confirm it before payment.',
    ar: 'ما هو إقرار خدمة ما بعد البيع، ومتى يتطلبه تصدير مركبة شبه جديدة، وكيف يؤكده المشترون قبل الدفع.',
    ru: 'Что такое подтверждение послепродажного обслуживания, когда почти новый автомобиль его требует и как покупателям подтвердить его до оплаты.',
    es: 'Qué es la confirmación de servicio posventa, cuándo la exige un vehículo seminuevo y cómo la confirman los compradores antes de pagar.',
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
          en: 'From 1 January 2026, a used vehicle being exported less than 180 days (inclusive) after its registration date requires an after-sales service confirmation (售后维修服务确认书) issued by the vehicle\'s manufacturer before an export licence will be granted. The document must state the export destination country, the vehicle information and the after-sales service network information, and carry the manufacturer\'s seal. A vehicle whose manufacturer cannot or will not issue it cannot currently be exported. The requirement comes from the notice 商贸函〔2025〕648号, dated 11 November 2025.',
          ar: 'اعتباراً من 1 يناير 2026، تتطلب المركبة المستعملة التي تُصدَّر بعد أقل من 180 يوماً (شاملاً) من تاريخ تسجيلها إقراراً بخدمة ما بعد البيع (售后维修服务确认书) صادراً عن الشركة المصنعة للمركبة قبل منح رخصة التصدير. يجب أن تذكر الوثيقة بلد التصدير ومعلومات المركبة ومعلومات شبكة خدمة ما بعد البيع، وأن تحمل ختم الشركة المصنعة. المركبة التي لا تستطيع أو لا ترغب شركتها المصنعة في إصداره لا يمكن تصديرها حالياً. يأتي المتطلب من الإشعار 商贸函〔2025〕648号 بتاريخ 11 نوفمبر 2025.',
          ru: 'С 1 января 2026 года подержанный автомобиль, экспортируемый менее чем через 180 дней (включительно) после даты регистрации, требует подтверждения послепродажного обслуживания (售后维修服务确认书), выданного производителем автомобиля, прежде чем будет выдана экспортная лицензия. Документ должен указывать страну экспорта, информацию об автомобиле и о сети послепродажного обслуживания и иметь печать производителя. Автомобиль, чей производитель не может или не хочет его выдать, в настоящее время не может быть экспортирован. Требование исходит из уведомления 商贸函〔2025〕648号 от 11 ноября 2025 года.',
          es: 'Desde el 1 de enero de 2026, un vehículo usado exportado menos de 180 días (inclusive) después de su fecha de registro requiere una confirmación de servicio posventa (售后维修服务确认书) emitida por el fabricante del vehículo antes de que se conceda una licencia de exportación. El documento debe indicar el país de exportación, la información del vehículo y la información de la red de servicio posventa, y llevar el sello del fabricante. Un vehículo cuyo fabricante no puede o no quiere emitirla no puede exportarse actualmente. El requisito procede del aviso 商贸函〔2025〕648号, de 11 de noviembre de 2025.',
        },
      ],
    },
    {
      heading: {
        en: 'Key facts',
        ar: 'الحقائق الأساسية',
        ru: 'Ключевые факты',
        es: 'Datos clave',
      },
      table: {
        headers: [
          { en: 'Item', ar: 'البند', ru: 'Пункт', es: 'Elemento' },
          { en: 'Detail', ar: 'التفصيل', ru: 'Деталь', es: 'Detalle' },
        ],
        rows: [
          [
            { en: 'Document', ar: 'الوثيقة', ru: 'Документ', es: 'Documento' },
            { en: 'After-sales service confirmation (售后维修服务确认书)', ar: 'إقرار خدمة ما بعد البيع (售后维修服务确认书)', ru: 'Подтверждение послепродажного обслуживания (售后维修服务确认书)', es: 'Confirmación de servicio posventa (售后维修服务确认书)' },
          ],
          [
            { en: 'When required', ar: 'متى يُطلب', ru: 'Когда требуется', es: 'Cuándo se exige' },
            { en: 'Vehicle exported less than 180 days (inclusive) after its registration date', ar: 'مركبة تُصدَّر بعد أقل من 180 يوماً (شاملاً) من تاريخ تسجيلها', ru: 'Автомобиль, экспортируемый менее чем через 180 дней (включительно) после даты регистрации', es: 'Vehículo exportado menos de 180 días (inclusive) después de su fecha de registro' },
          ],
          [
            { en: 'Issued by', ar: 'يُصدره', ru: 'Кем выдаётся', es: 'Emitido por' },
            { en: 'The vehicle\'s manufacturer (生产企业)', ar: 'الشركة المصنعة للمركبة (生产企业)', ru: 'Производитель автомобиля (生产企业)', es: 'El fabricante del vehículo (生产企业)' },
          ],
          [
            { en: 'Required contents', ar: 'المحتويات المطلوبة', ru: 'Требуемое содержание', es: 'Contenido requerido' },
            { en: 'Export destination country, vehicle information, after-sales service network information', ar: 'بلد التصدير، ومعلومات المركبة، ومعلومات شبكة خدمة ما بعد البيع', ru: 'Страна экспорта, информация об автомобиле, информация о сети послепродажного обслуживания', es: 'País de exportación, información del vehículo, información de la red de servicio posventa' },
          ],
          [
            { en: 'Seal', ar: 'الختم', ru: 'Печать', es: 'Sello' },
            { en: 'Stamped with the manufacturer\'s official seal (加盖生产企业公章)', ar: 'مختومة بالختم الرسمي للشركة المصنعة (加盖生产企业公章)', ru: 'Заверено официальной печатью производителя (加盖生产企业公章)', es: 'Sellado con el sello oficial del fabricante (加盖生产企业公章)' },
          ],
          [
            { en: 'Consequence without it', ar: 'النتيجة بدونه', ru: 'Последствие без него', es: 'Consecuencia sin él' },
            { en: 'No export licence (出口许可证) is issued', ar: 'لا تُصدر رخصة التصدير (出口许可证)', ru: 'Экспортная лицензия (出口许可证) не выдаётся', es: 'No se emite la licencia de exportación (出口许可证)' },
          ],
          [
            { en: 'Source', ar: 'المصدر', ru: 'Источник', es: 'Fuente' },
            { en: '商贸函〔2025〕648号, MOFCOM / MIIT / MPS / GACC notice, 11 November 2025', ar: '商贸函〔2025〕648号، إشعار وزارة التجارة والصناعة والأمن العام والجمارك، 11 نوفمبر 2025', ru: '商贸函〔2025〕648号, уведомление MOFCOM / MIIT / MPS / GACC, 11 ноября 2025 года', es: '商贸函〔2025〕648号, aviso MOFCOM / MIIT / MPS / GACC, 11 de noviembre de 2025' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'Why this confirmation exists',
        ar: 'لماذا وُجد هذا الإقرار',
        ru: 'Зачем существует это подтверждение',
        es: 'Por qué existe esta confirmación',
      },
      paragraphs: [
        {
          en: 'The notice that introduced it is headed "strictly control exporting new cars in the name of used cars" (严控新车以二手车名义出口). A vehicle exported very soon after registration is, in effect, a new car leaving through the used-car channel. Requiring the manufacturer\'s confirmation ensures that the manufacturer stands behind after-sales service and spare-parts support for the vehicle in the destination country — closing a gap that a buyer of a near-new vehicle would otherwise face.',
          ar: 'الإشعار الذي أدخله عنوانه «الرقابة الصارمة على تصدير السيارات الجديدة باسم السيارات المستعملة» (严控新车以二手车名义出口). المركبة التي تُصدَّر بعد وقت قصير جداً من تسجيلها هي في الواقع سيارة جديدة تغادر عبر قناة السيارات المستعملة. اشتراط إقرار الشركة المصنعة يضمن أن الشركة المصنعة تتكفل بخدمة ما بعد البيع ودعم قطع الغيار للمركبة في بلد الوجهة — ساداً فجوة كان مشتري المركبة شبه الجديدة سيواجهها لولا ذلك.',
          ru: 'Уведомление, вводящее это, озаглавлено «строго контролировать экспорт новых автомобилей под видом подержанных» (严控新车以二手车名义出口). Автомобиль, экспортируемый очень скоро после регистрации, фактически является новым автомобилем, уходящим через канал подержанных. Требование подтверждения производителя гарантирует, что производитель отвечает за послепродажное обслуживание и запчасти для автомобиля в стране назначения — закрывая разрыв, с которым иначе столкнулся бы покупатель почти нового автомобиля.',
          es: 'El aviso que lo introdujo se titula «controlar estrictamente la exportación de coches nuevos con el nombre de coches usados» (严控新车以二手车名义出口). Un vehículo exportado muy poco después de su registro es, en la práctica, un coche nuevo que sale por el canal de usados. Exigir la confirmación del fabricante garantiza que el fabricante respalda el servicio posventa y los repuestos del vehículo en el país de destino, cerrando una brecha que de otro modo afrontaría el comprador de un vehículo seminuevo.',
        },
      ],
    },
    {
      heading: {
        en: 'Who it binds and what it means for buyers',
        ar: 'من يلزمه وماذا يعني للمشترين',
        ru: 'Кого это обязывает и что это значит для покупателей',
        es: 'A quién vincula y qué significa para los compradores',
      },
      paragraphs: [
        {
          en: 'The requirement binds the export enterprise in China — the party that applies for the export licence. It reaches overseas buyers indirectly: if the near-new vehicle you want cannot be accompanied by the manufacturer\'s confirmation, the exporter cannot obtain the licence, and the deal stalls at the licence step. The buyer does not file the confirmation; the buyer\'s job is to make sure the exporter can and will obtain it before any money moves.',
          ar: 'يُلزم المتطلب مؤسسة التصدير في الصين — الطرف الذي يتقدم بطلب رخصة التصدير. ويصل إلى المشترين في الخارج بشكل غير مباشر: إذا لم تتمكن المركبة شبه الجديدة التي تريدها من أن يرافقها إقرار الشركة المصنعة، فلن يتمكن المصدّر من الحصول على الرخصة، وتتعثر الصفقة عند خطوة الرخصة. المشتري لا يقدّم الإقرار؛ بل مهمته التأكد من أن المصدّر يستطيع وسيحصل عليه قبل تحريك أي أموال.',
          ru: 'Требование обязывает экспортное предприятие в Китае — сторону, подающую заявку на экспортную лицензию. На зарубежных покупателей оно влияет косвенно: если почти новый автомобиль, который вы хотите, не может сопровождаться подтверждением производителя, экспортёр не сможет получить лицензию, и сделка застрянет на этапе лицензии. Покупатель не подаёт подтверждение; задача покупателя — убедиться, что экспортёр может и получит его до того, как будут переведены деньги.',
          es: 'El requisito vincula a la empresa exportadora en China: la parte que solicita la licencia de exportación. Llega a los compradores extranjeros de forma indirecta: si el vehículo seminuevo que desea no puede ir acompañado de la confirmación del fabricante, el exportador no puede obtener la licencia y la operación se detiene en el paso de la licencia. El comprador no presenta la confirmación; su trabajo es asegurarse de que el exportador puede y va a obtenerla antes de que se mueva dinero alguno.',
        },
      ],
    },
    {
      heading: {
        en: 'The broader after-sales obligation',
        ar: 'الالتزام الأوسع لخدمة ما بعد البيع',
        ru: 'Более широкое обязательство по послепродажному обслуживанию',
        es: 'La obligación posventa más amplia',
      },
      paragraphs: [
        {
          en: 'The after-sales confirmation for near-new vehicles sits on top of a standing obligation. Since the 2024 rules, the export enterprise is the responsible party for quality traceability and must provide after-sales service and spare-parts support for every exported vehicle, and the export contract must include after-sales service content. So the manufacturer\'s confirmation is an additional, time-based control for near-new vehicles — not the only after-sales requirement that exists.',
          ar: 'يأتي إقرار ما بعد البيع للمركبات شبه الجديدة فوق التزام قائم. منذ قواعد 2024، تكون مؤسسة التصدير هي الطرف المسؤول عن تتبع الجودة ويجب أن توفر خدمة ما بعد البيع ودعم قطع الغيار لكل مركبة مُصدَّرة، ويجب أن يتضمن عقد التصدير محتوى خدمة ما بعد البيع. لذا فإن إقرار الشركة المصنعة رقابة زمنية إضافية للمركبات شبه الجديدة — لا متطلب ما بعد البيع الوحيد الموجود.',
          ru: 'Подтверждение послепродажного обслуживания для почти новых автомобилей дополняет постоянное обязательство. С правил 2024 года экспортное предприятие является ответственной стороной за прослеживаемость качества и должно предоставлять послепродажное обслуживание и запчасти для каждого экспортируемого автомобиля, а экспортный контракт должен содержать условия послепродажного обслуживания. Поэтому подтверждение производителя — это дополнительный временной контроль для почти новых автомобилей, а не единственное существующее требование по послепродажному обслуживанию.',
          es: 'La confirmación posventa para vehículos seminuevos se suma a una obligación permanente. Desde las normas de 2024, la empresa exportadora es la parte responsable de la trazabilidad de la calidad y debe prestar servicio posventa y soporte de repuestos para cada vehículo exportado, y el contrato de exportación debe incluir contenido de servicio posventa. Así, la confirmación del fabricante es un control temporal adicional para vehículos seminuevos, no el único requisito posventa existente.',
        },
      ],
      links: [
        {
          slug: 'china-used-car-export-compliance',
          label: {
            en: 'The full after-sales and traceability rules — Compliance guide',
            ar: 'قواعد ما بعد البيع والتتبع الكاملة — دليل الامتثال',
            ru: 'Полные правила послепродажного обслуживания и прослеживаемости — руководство по соответствию',
            es: 'Las normas completas de posventa y trazabilidad — guía de cumplimiento',
          },
        },
      ],
    },
    {
      heading: {
        en: 'How to verify before payment',
        ar: 'كيف تتحقق قبل الدفع',
        ru: 'Как проверить перед оплатой',
        es: 'Cómo verificar antes del pago',
      },
      checklist: [
        {
          en: 'Ask for the vehicle\'s registration date up front, before you commit',
          ar: 'اطلب تاريخ تسجيل المركبة مقدماً، قبل التزامك',
          ru: 'Запрашивайте дату регистрации автомобиля заранее, до обязательств',
          es: 'Pida la fecha de registro del vehículo por adelantado, antes de comprometerse',
        },
        {
          en: 'For a vehicle inside the 180-day window, confirm in writing that the manufacturer\'s confirmation can be obtained',
          ar: 'للمركبة داخل نافذة 180 يوماً، أكّد كتابةً إمكانية الحصول على إقرار الشركة المصنعة',
          ru: 'Для автомобиля внутри окна 180 дней письменно подтвердите, что подтверждение производителя может быть получено',
          es: 'Para un vehículo dentro de la ventana de 180 días, confirme por escrito que se puede obtener la confirmación del fabricante',
        },
        {
          en: 'Ask to see the confirmation, or a written commitment that it will be provided before the licence application',
          ar: 'اطلب رؤية الإقرار، أو التزاماً مكتوباً بتقديمه قبل طلب الرخصة',
          ru: 'Попросите показать подтверждение или письменное обязательство предоставить его до подачи заявки на лицензию',
          es: 'Pida ver la confirmación, o un compromiso escrito de que se proporcionará antes de la solicitud de licencia',
        },
        {
          en: 'Confirm the registration date and transfer-pending-export date on the licence application match the registration certificate',
          ar: 'أكّد أن تاريخ التسجيل وتاريخ نقل الملكية بانتظار التصدير في طلب الرخصة يطابقان شهادة التسجيل',
          ru: 'Подтвердите, что дата регистрации и дата передачи в ожидании экспорта в заявке на лицензию совпадают со свидетельством о регистрации',
          es: 'Confirme que la fecha de registro y la fecha de transferencia pendiente de exportación de la solicitud de licencia coinciden con el certificado de registro',
        },
        {
          en: 'Treat a near-new vehicle whose confirmation cannot be shown as a stop signal',
          ar: 'عامل المركبة شبه الجديدة التي لا يمكن إظهار إقرارها كإشارة توقف',
          ru: 'Считайте почти новый автомобиль, подтверждение по которому нельзя показать, сигналом остановиться',
          es: 'Trate un vehículo seminuevo cuya confirmación no pueda mostrarse como una señal de alto',
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
          en: 'The facts above — the document name, the 180-day threshold, the required contents and the manufacturer\'s seal — are taken directly from 商贸函〔2025〕648号. Whether a specific confirmation satisfies the authority, and how the rule is applied to a given vehicle, are matters of interpretation and local enforcement that can vary. Where a detail is not settled by the official text, do not rely on a general summary: confirm the current requirement with the relevant authority or a qualified exporter before shipment.',
          ar: 'الحقائق أعلاه — اسم الوثيقة، وعتبة 180 يوماً، والمحتويات المطلوبة، وختم الشركة المصنعة — مأخوذة مباشرة من 商贸函〔2025〕648号. أما ما إذا كان إقرار معين يرضي السلطة، وكيف تُطبق القاعدة على مركبة معينة، فهما مسألتا تفسير وإنفاذ محلي قد تختلفان. وعندما لا يحسم النص الرسمي تفصيلاً، لا تعتمد على ملخص عام: أكّد المتطلب الحالي مع السلطة المختصة أو مصدّر مؤهل قبل الشحن.',
          ru: 'Приведённые факты — название документа, порог 180 дней, требуемое содержание и печать производителя — взяты непосредственно из 商贸函〔2025〕648号. Удовлетворяет ли конкретное подтверждение орган и как правило применяется к конкретному автомобилю — это вопросы толкования и местного правоприменения, которые могут различаться. Если деталь не урегулирована официальным текстом, не полагайтесь на общую сводку: подтвердите актуальное требование у соответствующего органа или квалифицированного экспортёра до отгрузки.',
          es: 'Los hechos anteriores — el nombre del documento, el umbral de 180 días, el contenido requerido y el sello del fabricante — se toman directamente de 商贸函〔2025〕648号. Si una confirmación concreta satisface a la autoridad y cómo se aplica la regla a un vehículo dado son cuestiones de interpretación y aplicación local que pueden variar. Cuando un detalle no esté resuelto por el texto oficial, no se base en un resumen general: confirme el requisito vigente con la autoridad correspondiente o un exportador cualificado antes del envío.',
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
          en: 'The requirement is drawn from the following current Chinese official documents, verified on 2026-10-08:',
          ar: 'المتطلب مستمد من الوثيقتين الصينيتين الرسميتين الحاليتين التاليتين، وتم التحقق منهما في 2026-10-08:',
          ru: 'Требование взято из следующих действующих китайских официальных документов, проверенных 2026-10-08:',
          es: 'El requisito procede de los siguientes documentos oficiales chinos vigentes, verificados el 2026-10-08:',
        },
        {
          en: '1. 商务部、工业和信息化部、公安部、海关总署《关于进一步加强二手车出口管理工作的通知》(商贸函〔2025〕648号, 2025-11-11) — the after-sales service confirmation requirement is in section 一(一). https://www.gov.cn/zhengce/zhengceku/202511/content_7048644.htm',
          ar: '1. وزارة التجارة ووزارة الصناعة وتكنولوجيا المعلومات ووزارة الأمن العام والجمارك «بشأن زيادة تعزيز إدارة أعمال تصدير السيارات المستعملة» (商贸函〔2025〕648号، 2025-11-11) — متطلب إقرار خدمة ما بعد البيع في القسم 一(一). https://www.gov.cn/zhengce/zhengceku/202511/content_7048644.htm',
          ru: '1. Минторг, Министерство промышленности и информатизации, Министерство общественной безопасности и таможня «О дальнейшем усилении управления экспортом подержанных автомобилей» (商贸函〔2025〕648号, 2025-11-11) — требование о подтверждении послепродажного обслуживания в разделе 一(一). https://www.gov.cn/zhengce/zhengceku/202511/content_7048644.htm',
          es: '1. MOFCOM, MIIT, MPS y GACC «Sobre el refuerzo adicional de la gestión de la exportación de coches usados» (商贸函〔2025〕648号, 2025-11-11) — el requisito de confirmación posventa está en la sección 一(一). https://www.gov.cn/zhengce/zhengceku/202511/content_7048644.htm',
        },
        {
          en: '2. 商务部等5部门《关于进一步做好二手车出口工作的通知》(商贸发〔2024〕25号, 2024-02-07) — the underlying export-enterprise quality, traceability and after-sales obligations. https://www.gov.cn/zhengce/zhengceku/202402/content_6931424.htm',
          ar: '2. إشعار 5 جهات «بشأن مواصلة تحسين أعمال تصدير السيارات المستعملة» (商贸发〔2024〕25号، 2024-02-07) — التزامات مؤسسة التصدير الأساسية في الجودة والتتبع وما بعد البيع. https://www.gov.cn/zhengce/zhengceku/202402/content_6931424.htm',
          ru: '2. Уведомление 5 ведомств «О дальнейшем совершенствовании работы по экспорту подержанных автомобилей» (商贸发〔2024〕25号, 2024-02-07) — базовые обязательства экспортного предприятия по качеству, прослеживаемости и послепродажному обслуживанию. https://www.gov.cn/zhengce/zhengceku/202402/content_6931424.htm',
          es: '2. Aviso de 5 departamentos «Sobre la mejora continua del trabajo de exportación de coches usados» (商贸发〔2024〕25号, 2024-02-07) — las obligaciones subyacentes de empresa exportadora en calidad, trazabilidad y posventa. https://www.gov.cn/zhengce/zhengceku/202402/content_6931424.htm',
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
          slug: 'china-180-day-used-car-export-rule',
          label: {
            en: 'The 180-day rule in full — 180-Day Rule guide',
            ar: 'قاعدة 180 يوماً بالكامل — دليل قاعدة 180 يوماً',
            ru: 'Правило 180 дней полностью — руководство по правилу 180 дней',
            es: 'La regla de los 180 días al completo — guía de la regla de los 180 días',
          },
        },
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
          href: 'https://chinausedautohub.com/china-used-car-export-rules/',
          label: {
            en: 'The 2026 policy hub — China Used Car Export Rules',
            ar: 'مركز سياسات 2026 — قواعد تصدير السيارات المستعملة من الصين',
            ru: 'Хаб политики 2026 — правила экспорта подержанных автомобилей из Китая',
            es: 'El hub de política 2026 — normas de exportación de coches usados desde China',
          },
        },
        {
          slug: 'how-to-verify-china-used-car-exporter',
          label: {
            en: 'Verify the exporter before you pay — How to Verify guide',
            ar: 'تحقق من المصدّر قبل الدفع — دليل «كيف تتحقق»',
            ru: 'Проверьте экспортёра до оплаты — руководство «Как проверить»',
            es: 'Verifique al exportador antes de pagar — guía «Cómo verificar»',
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
          en: 'Last reviewed: 2026-10-08. This page summarises an official Chinese notice for overseas buyers and is not legal advice. The document name, threshold, required contents and seal are quoted from 商贸函〔2025〕648号; how it is applied to a specific vehicle is decided by the Chinese export authorities and can change. Confirm the current requirement with the relevant authority or a qualified exporter before shipment.',
          ar: 'آخر مراجعة: 2026-10-08. تلخّص هذه الصفحة إشعاراً صينياً رسمياً للمشترين في الخارج وليست استشارة قانونية. اسم الوثيقة والعتبة والمحتويات المطلوبة والختم مقتبسة من 商贸函〔2025〕648号؛ أما كيفية تطبيقه على مركبة محددة فتقره سلطات التصدير الصينية وقد تتغير. أكّد المتطلب الحالي مع السلطة المختصة أو مصدّر مؤهل قبل الشحن.',
          ru: 'Последняя проверка: 2026-10-08. Эта страница обобщает официальное китайское уведомление для зарубежных покупателей и не является юридической консультацией. Название документа, порог, требуемое содержание и печать цитируются из 商贸函〔2025〕648号; как это применяется к конкретному автомобилю, решают экспортные органы Китая, и это может меняться. Подтвердите актуальное требование у соответствующего органа или квалифицированного экспортёра до отгрузки.',
          es: 'Última revisión: 2026-10-08. Esta página resume un aviso oficial chino para compradores extranjeros y no constituye asesoramiento legal. El nombre del documento, el umbral, el contenido requerido y el sello se citan de 商贸函〔2025〕648号; cómo se aplica a un vehículo concreto lo deciden las autoridades de exportación chinas y puede cambiar. Confirme el requisito vigente con la autoridad correspondiente o un exportador cualificado antes del envío.',
        },
      ],
    },
  ],
};
