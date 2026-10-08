import type { L10n } from '../l10n';

// Guide — China's 180-Day Used Car Export Rule (Policy page, split out from the
// compliance guide). Official-source-first: 商贸函〔2025〕648号 (2025-11-11),
// effective 2026-01-01. Facts separated from interpretation per §9.

export const oneEightyDayRule = {
  slug: 'china-180-day-used-car-export-rule',
  title: {
    en: "China's 180-Day Used Car Export Rule",
    ar: 'قاعدة 180 يوماً لتصدير السيارات المستعملة في الصين',
    ru: 'Правило 180 дней при экспорте подержанных автомобилей из Китая',
    es: 'Regla de los 180 días para la exportación de coches usados en China',
  },
  description: {
    en: "China's 180-day used car export rule: from 1 January 2026, a vehicle exported less than 180 days after its registration date requires the manufacturer's after-sales service confirmation — the official source, who it affects and what buyers should check.",
    ar: 'قاعدة 180 يوماً لتصدير السيارات المستعملة في الصين: اعتباراً من 1 يناير 2026، تتطلب المركبة التي تُصدَّر بعد أقل من 180 يوماً من تاريخ تسجيلها إقراراً بخدمة ما بعد البيع من الشركة المصنعة — المصدر الرسمي ومن يشملهم وما يجب على المشترين فحصه.',
    ru: 'Правило 180 дней при экспорте подержанных автомобилей из Китая: с 1 января 2026 года автомобиль, экспортируемый менее чем через 180 дней после даты регистрации, требует подтверждения послепродажного обслуживания от производителя — официальный источник, кого это затрагивает и что проверять покупателям.',
    es: 'Regla de los 180 días para la exportación de coches usados en China: desde el 1 de enero de 2026, un vehículo exportado menos de 180 días después de su fecha de registro requiere la confirmación de servicio posventa del fabricante — la fuente oficial, a quién afecta y qué deben comprobar los compradores.',
  },
  h1: {
    en: "China's 180-Day Used Car Export Rule",
    ar: 'قاعدة 180 يوماً لتصدير السيارات المستعملة في الصين',
    ru: 'Правило 180 дней при экспорте подержанных автомобилей из Китая',
    es: 'Regla de los 180 días para la exportación de coches usados en China',
  },
  summary: {
    en: "What China's 180-day used car export rule is, where it comes from, who it affects, and what overseas buyers should verify before payment.",
    ar: 'ما هي قاعدة 180 يوماً لتصدير السيارات المستعملة في الصين، ومن أين جاءت، ومن تشملهم، وما الذي يجب على المشترين في الخارج التحقق منه قبل الدفع.',
    ru: 'Что такое правило 180 дней при экспорте подержанных автомобилей из Китая, откуда оно взялось, кого затрагивает и что зарубежным покупателям проверять до оплаты.',
    es: 'Qué es la regla de los 180 días para exportar coches usados desde China, de dónde viene, a quién afecta y qué deben verificar los compradores extranjeros antes de pagar.',
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
          en: "From 1 January 2026, a used vehicle being exported less than 180 days (inclusive) after its registration date in China requires an after-sales service confirmation (售后维修服务确认书) issued by the vehicle's manufacturer before an export licence will be granted; without it, no export licence is issued. The requirement comes from the MOFCOM / MIIT / MPS / GACC notice 商贸函〔2025〕648号, dated 11 November 2025. For overseas buyers the practical point is simple: for a near-new vehicle, the exporter must be able to show the manufacturer's confirmation before you pay.",
          ar: 'اعتباراً من 1 يناير 2026، تتطلب المركبة المستعملة التي تُصدَّر بعد أقل من 180 يوماً (شاملاً) من تاريخ تسجيلها في الصين إقراراً بخدمة ما بعد البيع (售后维修服务确认书) صادراً عن الشركة المصنعة للمركبة قبل منح رخصة التصدير؛ وبدونه لا تُصدر رخصة التصدير. يأتي هذا المتطلب من إشعار وزارة التجارة والصناعة والأمن العام والجمارك 商贸函〔2025〕648号 بتاريخ 11 نوفمبر 2025. النقطة العملية للمشترين في الخارج بسيطة: للمركبة شبه الجديدة، يجب أن يكون المصدّر قادراً على إظهار إقرار الشركة المصنعة قبل أن تدفع.',
          ru: 'С 1 января 2026 года подержанный автомобиль, экспортируемый менее чем через 180 дней (включительно) после даты регистрации в Китае, требует подтверждения послепродажного обслуживания (售后维修服务确认书), выданного производителем автомобиля, прежде чем будет выдана экспортная лицензия; без него лицензия не выдаётся. Требование исходит из уведомления MOFCOM / MIIT / MPS / GACC 商贸函〔2025〕648号 от 11 ноября 2025 года. Для зарубежных покупателей практический вывод прост: для почти нового автомобиля экспортёр должен иметь возможность показать подтверждение производителя до вашей оплаты.',
          es: 'Desde el 1 de enero de 2026, un vehículo usado exportado menos de 180 días (inclusive) después de su fecha de registro en China requiere una confirmación de servicio posventa (售后维修服务确认书) emitida por el fabricante del vehículo antes de que se conceda una licencia de exportación; sin ella, no se emite la licencia. El requisito procede del aviso MOFCOM / MIIT / MPS / GACC 商贸函〔2025〕648号, de 11 de noviembre de 2025. Para los compradores extranjeros el punto práctico es simple: en un vehículo seminuevo, el exportador debe poder mostrar la confirmación del fabricante antes de que usted pague.',
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
            { en: 'Effective date', ar: 'تاريخ السريان', ru: 'Дата вступления в силу', es: 'Fecha de entrada en vigor' },
            { en: '1 January 2026', ar: '1 يناير 2026', ru: '1 января 2026 года', es: '1 de enero de 2026' },
          ],
          [
            { en: 'Threshold', ar: 'العتبة', ru: 'Порог', es: 'Umbral' },
            { en: 'Exported less than 180 days (inclusive) after the registration date (注册登记日期)', ar: 'تُصدَّر بعد أقل من 180 يوماً (شاملاً) من تاريخ التسجيل (注册登记日期)', ru: 'Экспорт менее чем через 180 дней (включительно) после даты регистрации (注册登记日期)', es: 'Exportado menos de 180 días (inclusive) después de la fecha de registro (注册登记日期)' },
          ],
          [
            { en: 'Requirement', ar: 'المتطلب', ru: 'Требование', es: 'Requisito' },
            { en: 'Manufacturer-issued after-sales service confirmation (售后维修服务确认书)', ar: 'إقرار خدمة ما بعد البيع صادر عن الشركة المصنعة (售后维修服务确认书)', ru: 'Подтверждение послепродажного обслуживания от производителя (售后维修服务确认书)', es: 'Confirmación de servicio posventa emitida por el fabricante (售后维修服务确认书)' },
          ],
          [
            { en: 'Required contents', ar: 'المحتويات المطلوبة', ru: 'Требуемое содержание', es: 'Contenido requerido' },
            { en: 'Export destination country, vehicle information and after-sales service network information, stamped with the manufacturer\'s seal', ar: 'بلد التصدير ومعلومات المركبة ومعلومات شبكة خدمة ما بعد البيع، مع ختم الشركة المصنعة', ru: 'Страна экспорта, информация об автомобиле и о сети послепродажного обслуживания, с печатью производителя', es: 'País de exportación, información del vehículo e información de la red de servicio posventa, con el sello del fabricante' },
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
        en: 'Why this rule was introduced',
        ar: 'لماذا أُدخلت هذه القاعدة',
        ru: 'Зачем введено это правило',
        es: 'Por qué se introdujo esta regla',
      },
      paragraphs: [
        {
          en: "The notice that introduced the requirement is headed 'strictly control exporting new cars in the name of used cars' (严控新车以二手车名义出口). The 180-day window is the control point: a vehicle exported very soon after registration is, in effect, a new car being exported through the used-car channel, and the after-sales confirmation ensures the manufacturer stands behind after-sales service and spare-parts support for it. The stated purpose is to regulate competition order and promote the healthy, orderly development of used-car exports.",
          ar: 'الإشعار الذي أدخل المتطلب عنوانه «الرقابة الصارمة على تصدير السيارات الجديدة باسم السيارات المستعملة» (严控新车以二手车名义出口). نافذة 180 يوماً هي نقطة الرقابة: المركبة التي تُصدَّر بعد وقت قصير جداً من تسجيلها هي في الواقع سيارة جديدة تُصدَّر عبر قناة السيارات المستعملة، ويضمن إقرار ما بعد البيع أن الشركة المصنعة تتكفل بخدمة ما بعد البيع ودعم قطع الغيار لها. الهدف المعلن هو ضبط نظام المنافسة وتعزيز التطور الصحي والمنظم لصادرات السيارات المستعملة.',
          ru: 'Уведомление, вводящее требование, озаглавлено «строго контролировать экспорт новых автомобилей под видом подержанных» (严控新车以二手车名义出口). Окно в 180 дней — это контрольная точка: автомобиль, экспортируемый очень скоро после регистрации, фактически является новым автомобилем, экспортируемым через канал подержанных, а подтверждение послепродажного обслуживания гарантирует, что производитель отвечает за сервис и запчасти для него. Заявленная цель — упорядочить конкуренцию и способствовать здоровому, упорядоченному развитию экспорта подержанных автомобилей.',
          es: 'El aviso que introdujo el requisito se titula «controlar estrictamente la exportación de coches nuevos con el nombre de coches usados» (严控新车以二手车名义出口). La ventana de 180 días es el punto de control: un vehículo exportado muy poco después de su registro es, en la práctica, un coche nuevo que se exporta por el canal de usados, y la confirmación posventa garantiza que el fabricante respalda el servicio posventa y los repuestos. El propósito declarado es regular el orden de la competencia y promover el desarrollo sano y ordenado de la exportación de coches usados.',
        },
      ],
    },
    {
      heading: {
        en: 'Who it affects',
        ar: 'من تشملهم القاعدة',
        ru: 'Кого это затрагивает',
        es: 'A quién afecta',
      },
      paragraphs: [
        {
          en: 'The requirement binds the export enterprise in China — the entity that applies for the export licence. It affects overseas buyers indirectly: if a near-new vehicle you want to buy cannot be accompanied by the manufacturer\'s confirmation, the exporter cannot obtain the export licence, and the deal stalls at the licence step. The buyer is not the one who files the confirmation; the buyer\'s job is to make sure the exporter can and will obtain it.',
          ar: 'يُلزم المتطلب مؤسسة التصدير في الصين — الكيان الذي يتقدم بطلب رخصة التصدير. ويؤثر على المشترين في الخارج بشكل غير مباشر: إذا لم تتمكن المركبة شبه الجديدة التي تريد شراءها من أن ترافقها إقرار الشركة المصنعة، فلن يتمكن المصدّر من الحصول على رخصة التصدير، وتتعثر الصفقة عند خطوة الرخصة. المشتري ليس من يقدّم الإقرار؛ بل مهمة المشتري هي التأكد من أن المصدّر يستطيع وسيحصل عليه.',
          ru: 'Требование обязывает экспортное предприятие в Китае — организацию, подающую заявку на экспортную лицензию. На зарубежных покупателей оно влияет косвенно: если почти новый автомобиль, который вы хотите купить, не может сопровождаться подтверждением производителя, экспортёр не сможет получить экспортную лицензию, и сделка застрянет на этапе лицензии. Покупатель не подаёт подтверждение; задача покупателя — убедиться, что экспортёр может и получит его.',
          es: 'El requisito vincula a la empresa exportadora en China: la entidad que solicita la licencia de exportación. Afecta a los compradores extranjeros de forma indirecta: si un vehículo seminuevo que desea comprar no puede ir acompañado de la confirmación del fabricante, el exportador no puede obtener la licencia de exportación y la operación se detiene en el paso de la licencia. El comprador no es quien presenta la confirmación; su trabajo es asegurarse de que el exportador puede y va a obtenerla.',
        },
      ],
    },
    {
      heading: {
        en: 'What vehicles are affected',
        ar: 'ما المركبات المشمولة',
        ru: 'Какие автомобили затрагиваются',
        es: 'Qué vehículos se ven afectados',
      },
      paragraphs: [
        {
          en: 'Vehicles whose export application is made less than 180 days (inclusive) after the registration date. The registration date is the reference point, and it must be stated on the export licence application together with the transfer-pending-export date, consistent with the Motor Vehicle Registration Certificate (机动车登记证书). Vehicles that completed the transfer-registration-pending-export procedure before the notice took effect are to be guided to fulfil their contracts and export in an orderly manner.',
          ar: 'المركبات التي يُقدَّم طلب تصديرها بعد أقل من 180 يوماً (شاملاً) من تاريخ التسجيل. تاريخ التسجيل هو النقطة المرجعية، ويجب ذكره في طلب رخصة التصدير مع تاريخ نقل الملكية بانتظار التصدير، بما يتوافق مع شهادة تسجيل المركبة (机动车登记证书). أما المركبات التي أتمّت إجراء نقل الملكية بانتظار التصدير قبل سريان الإشعار فيُوجَّه أصحابها إلى تنفيذ عقودهم والتصدير بشكل منظم.',
          ru: 'Автомобили, заявка на экспорт которых подана менее чем через 180 дней (включительно) после даты регистрации. Дата регистрации — это точка отсчёта, и она должна указываться в заявке на экспортную лицензию вместе с датой передачи в ожидании экспорта, в соответствии со свидетельством о регистрации транспортного средства (机动车登记证书). Автомобили, завершившие процедуру передачи в ожидании экспорта до вступления уведомления в силу, должны быть направлены на исполнение контрактов и упорядоченный экспорт.',
          es: 'Vehículos cuya solicitud de exportación se presente menos de 180 días (inclusive) después de la fecha de registro. La fecha de registro es el punto de referencia y debe indicarse en la solicitud de licencia de exportación junto con la fecha de transferencia pendiente de exportación, de forma coherente con el Certificado de Registro de Vehículo de Motor (机动车登记证书). Los vehículos que completaron el trámite de transferencia pendiente de exportación antes de que el aviso entrara en vigor deben guiarse para cumplir sus contratos y exportar de forma ordenada.',
        },
      ],
    },
    {
      heading: {
        en: 'What documents may be required',
        ar: 'ما الوثائق التي قد تُطلب',
        ru: 'Какие документы могут потребоваться',
        es: 'Qué documentos pueden requerirse',
      },
      paragraphs: [
        {
          en: 'For a vehicle inside the 180-day window, the exporter must be able to present the manufacturer\'s after-sales service confirmation (售后维修服务确认书), whose contents include the export destination country, the vehicle information and the after-sales service network information, stamped with the manufacturer\'s seal. This sits alongside the documents every export already requires: the Motor Vehicle Registration Certificate, the export licence, and the third-party inspection report.',
          ar: 'للمركبة داخل نافذة 180 يوماً، يجب أن يكون المصدّر قادراً على تقديم إقرار خدمة ما بعد البيع من الشركة المصنعة (售后维修服务确认书)، وتتضمن محتوياته بلد التصدير ومعلومات المركبة ومعلومات شبكة خدمة ما بعد البيع، مع ختم الشركة المصنعة. وهذا يأتي إلى جانب الوثائق التي يتطلبها كل تصدير أصلاً: شهادة تسجيل المركبة، ورخصة التصدير، وتقرير الفحص من جهة خارجية.',
          ru: 'Для автомобиля внутри окна 180 дней экспортёр должен иметь возможность представить подтверждение послепродажного обслуживания от производителя (售后维修服务确认书), содержание которого включает страну экспорта, информацию об автомобиле и о сети послепродажного обслуживания, с печатью производителя. Это дополняет документы, которые уже требуются для любого экспорта: свидетельство о регистрации транспортного средства, экспортную лицензию и отчёт о проверке третьей стороной.',
          es: 'Para un vehículo dentro de la ventana de 180 días, el exportador debe poder presentar la confirmación de servicio posventa del fabricante (售后维修服务确认书), cuyo contenido incluye el país de exportación, la información del vehículo y la información de la red de servicio posventa, con el sello del fabricante. Esto se suma a los documentos que ya requiere toda exportación: el Certificado de Registro de Vehículo de Motor, la licencia de exportación y el informe de inspección de terceros.',
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
          en: 'The 180-day rule changes what you should ask before buying a near-new vehicle. If the vehicle you are sourcing is less than 180 days from registration, confirm with the exporter — in writing — that the manufacturer\'s after-sales service confirmation can be obtained, and that the export licence application will show the registration date and transfer-pending-export date consistent with the registration certificate. A near-new vehicle that cannot be accompanied by this confirmation is one that cannot currently be exported.',
          ar: 'تغيّر قاعدة 180 يوماً ما يجب أن تسأل عنه قبل شراء مركبة شبه جديدة. إذا كانت المركبة التي تستوردها بعد أقل من 180 يوماً من التسجيل، أكّد مع المصدّر — كتابةً — إمكانية الحصول على إقرار خدمة ما بعد البيع من الشركة المصنعة، وأن طلب رخصة التصدير سيُظهر تاريخ التسجيل وتاريخ نقل الملكية بانتظار التصدير بما يتوافق مع شهادة التسجيل. المركبة شبه الجديدة التي لا يمكن أن يرافقها هذا الإقرار هي مركبة لا يمكن تصديرها حالياً.',
          ru: 'Правило 180 дней меняет то, что нужно спрашивать перед покупкой почти нового автомобиля. Если автомобиль, который вы подбираете, находится менее чем в 180 днях от регистрации, письменно подтвердите с экспортёром, что подтверждение послепродажного обслуживания от производителя может быть получено и что в заявке на экспортную лицензию будут указаны дата регистрации и дата передачи в ожидании экспорта в соответствии со свидетельством о регистрации. Почти новый автомобиль, который не может сопровождаться этим подтверждением, в настоящее время не может быть экспортирован.',
          es: 'La regla de los 180 días cambia lo que debe preguntar antes de comprar un vehículo seminuevo. Si el vehículo que está buscando tiene menos de 180 días desde el registro, confirme con el exportador — por escrito — que se puede obtener la confirmación de servicio posventa del fabricante y que la solicitud de licencia mostrará la fecha de registro y la fecha de transferencia pendiente de exportación de forma coherente con el certificado de registro. Un vehículo seminuevo que no pueda ir acompañado de esta confirmación es uno que actualmente no puede exportarse.',
        },
      ],
    },
    {
      heading: {
        en: 'How buyers can reduce compliance risk',
        ar: 'كيف يمكن للمشترين تقليل مخاطر الامتثال',
        ru: 'Как покупателям снизить риск несоответствия',
        es: 'Cómo pueden los compradores reducir el riesgo de cumplimiento',
      },
      checklist: [
        {
          en: 'Ask the exporter for the vehicle\'s registration date up front, not after you commit',
          ar: 'اطلب تاريخ تسجيل المركبة من المصدّر مقدماً، لا بعد التزامك',
          ru: 'Запрашивайте дату регистрации автомобиля у экспортёра заранее, а не после обязательств',
          es: 'Pida la fecha de registro del vehículo al exportador por adelantado, no después de comprometerse',
        },
        {
          en: 'For a vehicle inside the 180-day window, confirm in writing that the manufacturer\'s after-sales service confirmation can be obtained',
          ar: 'للمركبة داخل نافذة 180 يوماً، أكّد كتابةً إمكانية الحصول على إقرار خدمة ما بعد البيع من الشركة المصنعة',
          ru: 'Для автомобиля внутри окна 180 дней письменно подтвердите, что подтверждение послепродажного обслуживания от производителя может быть получено',
          es: 'Para un vehículo dentro de la ventana de 180 días, confirme por escrito que se puede obtener la confirmación de servicio posventa del fabricante',
        },
        {
          en: 'Confirm the registration date and transfer-pending-export date on the licence application match the registration certificate',
          ar: 'أكّد أن تاريخ التسجيل وتاريخ نقل الملكية بانتظار التصدير في طلب الرخصة يطابقان شهادة التسجيل',
          ru: 'Подтвердите, что дата регистрации и дата передачи в ожидании экспорта в заявке на лицензию совпадают со свидетельством о регистрации',
          es: 'Confirme que la fecha de registro y la fecha de transferencia pendiente de exportación de la solicitud de licencia coinciden con el certificado de registro',
        },
        {
          en: 'Treat a near-new vehicle whose confirmation cannot be shown as a stop signal, not a detail to skip',
          ar: 'عامل المركبة شبه الجديدة التي لا يمكن إظهار إقرارها كإشارة توقف، لا كتفصيل يمكن تجاوزه',
          ru: 'Считайте почти новый автомобиль, подтверждение по которому нельзя показать, сигналом остановиться, а не деталью, которую можно пропустить',
          es: 'Trate un vehículo seminuevo cuya confirmación no pueda mostrarse como una señal de alto, no como un detalle a saltarse',
        },
      ],
    },
    {
      heading: {
        en: 'What to verify before payment',
        ar: 'ما يجب التحقق منه قبل الدفع',
        ru: 'Что проверять перед оплатой',
        es: 'Qué verificar antes de pagar',
      },
      paragraphs: [
        {
          en: 'Do not pay for a near-new vehicle until you have seen the manufacturer\'s after-sales service confirmation (or a written commitment that it will be provided before the licence application) and the registration certificate showing the registration date. These two documents decide whether the export can complete at all. Combine this check with the full exporter verification and due diligence before you transfer funds.',
          ar: 'لا تدفع مقابل مركبة شبه جديدة حتى ترى إقرار خدمة ما بعد البيع من الشركة المصنعة (أو التزاماً مكتوباً بتقديمه قبل طلب الرخصة) وشهادة التسجيل التي تُظهر تاريخ التسجيل. هاتان الوثيقتان تحددان ما إذا كان التصدير يمكن أن يكتمل أصلاً. اجمع هذا الفحص مع التحقق الكامل من المصدّر والعناية الواجبة قبل تحويل الأموال.',
          ru: 'Не платите за почти новый автомобиль, пока не увидите подтверждение послепродажного обслуживания от производителя (или письменное обязательство предоставить его до подачи заявки на лицензию) и свидетельство о регистрации с датой регистрации. Эти два документа определяют, может ли экспорт вообще завершиться. Сочетайте эту проверку с полной проверкой экспортёра и комплексной проверкой до перевода средств.',
          es: 'No pague por un vehículo seminuevo hasta haber visto la confirmación de servicio posventa del fabricante (o un compromiso escrito de que se proporcionará antes de la solicitud de licencia) y el certificado de registro que muestre la fecha de registro. Esos dos documentos deciden si la exportación puede completarse en absoluto. Combine esta comprobación con la verificación completa del exportador y la diligencia debida antes de transferir fondos.',
        },
      ],
      links: [
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
        en: 'What changed compared with previous practice',
        ar: 'ما الذي تغيّر مقارنة بالممارسة السابقة',
        ru: 'Что изменилось по сравнению с прежней практикой',
        es: 'Qué cambió frente a la práctica anterior',
      },
      paragraphs: [
        {
          en: 'Since 2024 the export enterprise has been the party responsible for quality traceability and has been required to provide after-sales service and spare-parts support, and each vehicle has needed an export licence, an inspection report and a registration certificate. The change effective 1 January 2026 adds a specific, time-based control for near-new vehicles: a vehicle exported within 180 days of registration must carry the manufacturer\'s written after-sales service confirmation. This is a tightening of the licence step for near-new vehicles, not a change to the general export process.',
          ar: 'منذ 2024، كانت مؤسسة التصدير هي الطرف المسؤول عن تتبع الجودة وكان مطلوباً منها تقديم خدمة ما بعد البيع ودعم قطع الغيار، وكانت كل مركبة تحتاج رخصة تصدير وتقرير فحص وشهادة تسجيل. يضيف التغيير الساري من 1 يناير 2026 رقابة زمنية محددة للمركبات شبه الجديدة: المركبة التي تُصدَّر خلال 180 يوماً من التسجيل يجب أن تحمل إقرار خدمة ما بعد البيع المكتوب من الشركة المصنعة. هذا تشديد لخطوة الرخصة للمركبات شبه الجديدة، لا تغيير في عملية التصدير العامة.',
          ru: 'С 2024 года экспортное предприятие является стороной, отвечающей за прослеживаемость качества, и обязано предоставлять послепродажное обслуживание и поддержку запчастями, а каждому автомобилю нужны экспортная лицензия, отчёт о проверке и свидетельство о регистрации. Изменение с 1 января 2026 года добавляет конкретный временной контроль для почти новых автомобилей: автомобиль, экспортируемый в течение 180 дней после регистрации, должен иметь письменное подтверждение послепродажного обслуживания от производителя. Это ужесточение этапа лицензии для почти новых автомобилей, а не изменение общего процесса экспорта.',
          es: 'Desde 2024, la empresa exportadora es la parte responsable de la trazabilidad de la calidad y debe prestar servicio posventa y soporte de repuestos, y cada vehículo necesita una licencia de exportación, un informe de inspección y un certificado de registro. El cambio vigente desde el 1 de enero de 2026 añade un control temporal específico para vehículos seminuevos: un vehículo exportado dentro de los 180 días posteriores al registro debe llevar la confirmación escrita de servicio posventa del fabricante. Es un endurecimiento del paso de licencia para vehículos seminuevos, no un cambio del proceso general de exportación.',
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
          en: 'The facts above — the 180-day threshold, the confirmation document, its contents and the effective date — are taken directly from 商贸函〔2025〕648号. How the rule is applied to a specific vehicle, and whether a particular confirmation satisfies the authority, are matters of interpretation and local enforcement that can vary. Where a detail is not settled by the official text, do not rely on a general summary: confirm the current requirement with the relevant authority or qualified exporter before shipment.',
          ar: 'الحقائق أعلاه — عتبة 180 يوماً، ووثيقة الإقرار، ومحتوياتها، وتاريخ السريان — مأخوذة مباشرة من 商贸函〔2025〕648号. أما كيفية تطبيق القاعدة على مركبة محددة، وما إذا كان إقرار معين يرضي السلطة، فهي مسائل تفسير وإنفاذ محلي قد تختلف. وعندما لا يحسم النص الرسمي تفصيلاً، لا تعتمد على ملخص عام: أكّد المتطلب الحالي مع السلطة المختصة أو مصدّر مؤهل قبل الشحن.',
          ru: 'Приведённые выше факты — порог 180 дней, документ-подтверждение, его содержание и дата вступления в силу — взяты непосредственно из 商贸函〔2025〕648号. То, как правило применяется к конкретному автомобилю и удовлетворяет ли конкретное подтверждение орган, — это вопросы толкования и местного правоприменения, которые могут различаться. Если деталь не урегулирована официальным текстом, не полагайтесь на общую сводку: подтвердите актуальное требование у соответствующего органа или квалифицированного экспортёра до отгрузки.',
          es: 'Los hechos anteriores — el umbral de 180 días, el documento de confirmación, su contenido y la fecha de entrada en vigor — se toman directamente de 商贸函〔2025〕648号. Cómo se aplica la regla a un vehículo concreto y si una confirmación concreta satisface a la autoridad son cuestiones de interpretación y aplicación local que pueden variar. Cuando un detalle no esté resuelto por el texto oficial, no se base en un resumen general: confirme el requisito vigente con la autoridad correspondiente o un exportador cualificado antes del envío.',
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
          en: 'The rule is drawn from the following current Chinese official document, verified on 2026-10-08:',
          ar: 'القاعدة مستقاة من الوثيقة الصينية الرسمية الحالية التالية، وتم التحقق منها في 2026-10-08:',
          ru: 'Правило взято из следующего действующего китайского официального документа, проверенного 2026-10-08:',
          es: 'La regla procede del siguiente documento oficial chino vigente, verificado el 2026-10-08:',
        },
        {
          en: '1. 商务部、工业和信息化部、公安部、海关总署《关于进一步加强二手车出口管理工作的通知》(商贸函〔2025〕648号, 2025-11-11) — the 180-day requirement and the after-sales service confirmation are in section 一(一). https://www.gov.cn/zhengce/zhengceku/202511/content_7048644.htm',
          ar: '1. وزارة التجارة ووزارة الصناعة وتكنولوجيا المعلومات ووزارة الأمن العام والجمارك «بشأن زيادة تعزيز إدارة أعمال تصدير السيارات المستعملة» (商贸函〔2025〕648号، 2025-11-11) — متطلب 180 يوماً وإقرار خدمة ما بعد البيع في القسم 一(一). https://www.gov.cn/zhengce/zhengceku/202511/content_7048644.htm',
          ru: '1. Минторг, Министерство промышленности и информатизации, Министерство общественной безопасности и таможня «О дальнейшем усилении управления экспортом подержанных автомобилей» (商贸函〔2025〕648号, 2025-11-11) — требование 180 дней и подтверждение послепродажного обслуживания в разделе 一(一). https://www.gov.cn/zhengce/zhengceku/202511/content_7048644.htm',
          es: '1. MOFCOM, MIIT, MPS y GACC «Sobre el refuerzo adicional de la gestión de la exportación de coches usados» (商贸函〔2025〕648号, 2025-11-11) — el requisito de 180 días y la confirmación de servicio posventa están en la sección 一(一). https://www.gov.cn/zhengce/zhengceku/202511/content_7048644.htm',
        },
        {
          en: '2. 商务部等5部门《关于进一步做好二手车出口工作的通知》(商贸发〔2024〕25号, 2024-02-07) — the underlying export enterprise, quality, inspection and after-sales obligations. https://www.gov.cn/zhengce/zhengceku/202402/content_6931424.htm',
          ar: '2. إشعار 5 جهات «بشأن مواصلة تحسين أعمال تصدير السيارات المستعملة» (商贸发〔2024〕25号، 2024-02-07) — التزامات مؤسسة التصدير والجودة والفحص وما بعد البيع الأساسية. https://www.gov.cn/zhengce/zhengceku/202402/content_6931424.htm',
          ru: '2. Уведомление 5 ведомств «О дальнейшем совершенствовании работы по экспорту подержанных автомобилей» (商贸发〔2024〕25号, 2024-02-07) — базовые обязательства экспортного предприятия, качество, проверка и постпродажное обслуживание. https://www.gov.cn/zhengce/zhengceku/202402/content_6931424.htm',
          es: '2. Aviso de 5 departamentos «Sobre la mejora continua del trabajo de exportación de coches usados» (商贸发〔2024〕25号, 2024-02-07) — las obligaciones subyacentes de empresa exportadora, calidad, inspección y posventa. https://www.gov.cn/zhengce/zhengceku/202402/content_6931424.htm',
        },
        {
          en: '3. 商务部等5部门《关于二手车出口有关事项的公告》(2024年第6号, 发文 2024-02-05, 施行 2024-03-01) — export licence management, filing and the prohibited-export list. https://www.mofcom.gov.cn/zcfb/blgg/bl/2024/art/2024/art_92204c384cb34be5b63d169eba63759c.html',
          ar: '3. إعلان 5 جهات «بشأن المسائل المتعلقة بتصدير السيارات المستعملة» (2024年第6号، صدر 2024-02-05، وسرى 2024-03-01) — إدارة رخصة التصدير والتسجيل وقائمة حظر التصدير. https://www.mofcom.gov.cn/zcfb/blgg/bl/2024/art/2024/art_92204c384cb34be5b63d169eba63759c.html',
          ru: '3. Объявление 5 ведомств «О вопросах экспорта подержанных автомобилей» (2024年第6号, издано 2024-02-05, действует с 2024-03-01) — управление экспортной лицензией, регистрация и список запрещённого экспорта. https://www.mofcom.gov.cn/zcfb/blgg/bl/2024/art/2024/art_92204c384cb34be5b63d169eba63759c.html',
          es: '3. Anuncio de 5 departamentos «Sobre asuntos relacionados con la exportación de coches usados» (2024年第6号, emitido 2024-02-05, vigente 2024-03-01) — gestión de la licencia de exportación, registro y lista de exportación prohibida. https://www.mofcom.gov.cn/zcfb/blgg/bl/2024/art/2024/art_92204c384cb34be5b63d169eba63759c.html',
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
          href: 'https://chinausedautohub.com/export-compliance/',
          label: {
            en: 'Export compliance disclaimer — Legal page',
            ar: 'إخلاء مسؤولية الامتثال للتصدير — الصفحة القانونية',
            ru: 'Дисклеймер о соответствии экспорту — юридическая страница',
            es: 'Aviso de cumplimiento de exportación — página legal',
          },
        },
        {
          href: 'https://market.chinausedautohub.com/countries/',
          label: {
            en: 'Destination-country import rules — Market sub-site',
            ar: 'قواعد الاستيراد حسب بلد الوجهة — الموقع الفرعي للأسواق',
            ru: 'Правила импорта стран назначения — подсайт Market',
            es: 'Normas de importación por país de destino — subsitio Market',
          },
        },
        {
          href: 'https://chinausedautohub.com/services/vehicle-sourcing/',
          label: {
            en: 'Source a compliant vehicle — Vehicle Sourcing service',
            ar: 'توريد مركبة متوافقة — خدمة توريد المركبات',
            ru: 'Подбор соответствующего автомобиля — услуга подбора',
            es: 'Abastecer un vehículo conforme — servicio de abastecimiento de vehículos',
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
          en: 'Last reviewed: 2026-10-08. This page summarises an official Chinese notice for overseas buyers and is not legal advice. The requirement, its threshold and its effective date are quoted from 商贸函〔2025〕648号; how it is applied to a specific vehicle is decided by the Chinese export authorities and can change. Confirm the current requirement with the relevant authority or a qualified exporter before shipment.',
          ar: 'آخر مراجعة: 2026-10-08. تلخّص هذه الصفحة إشعاراً صينياً رسمياً للمشترين في الخارج وليست استشارة قانونية. المتطلب وعتبته وتاريخ سريانه مقتبسة من 商贸函〔2025〕648号؛ أما كيفية تطبيقه على مركبة محددة فتقره سلطات التصدير الصينية وقد تتغير. أكّد المتطلب الحالي مع السلطة المختصة أو مصدّر مؤهل قبل الشحن.',
          ru: 'Последняя проверка: 2026-10-08. Эта страница обобщает официальное китайское уведомление для зарубежных покупателей и не является юридической консультацией. Требование, его порог и дата вступления в силу цитируются из 商贸函〔2025〕648号; то, как оно применяется к конкретному автомобилю, решают экспортные органы Китая, и это может меняться. Подтвердите актуальное требование у соответствующего органа или квалифицированного экспортёра до отгрузки.',
          es: 'Última revisión: 2026-10-08. Esta página resume un aviso oficial chino para compradores extranjeros y no constituye asesoramiento legal. El requisito, su umbral y su fecha de entrada en vigor se citan de 商贸函〔2025〕648号; cómo se aplica a un vehículo concreto lo deciden las autoridades de exportación chinas y puede cambiar. Confirme el requisito vigente con la autoridad correspondiente o un exportador cualificado antes del envío.',
        },
      ],
    },
  ],
};
