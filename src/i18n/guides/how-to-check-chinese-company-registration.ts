import type { L10n } from '../l10n';

// Guide — How to Check a Chinese Company's Registration. Public-channel lookup
// steps (国家企业信用信息公示系统 and related public registries) — "how to check",
// no fabricated qualifications. Platform's own qualification stance continues §5.

export const checkCompanyRegistration = {
  slug: 'how-to-check-chinese-company-registration',
  title: {
    en: 'How to Check a Chinese Company\'s Registration',
    ar: 'كيف تتحقق من تسجيل شركة صينية',
    ru: 'Как проверить регистрацию китайской компании',
    es: 'Cómo comprobar el registro de una empresa china',
  },
  description: {
    en: 'How to look up a Chinese company\'s business registration through public channels: the national enterprise credit publicity system, what the record shows and how to read the status — a how-to, not a qualification claim.',
    ar: 'كيف تستعلم عن التسجيل التجاري لشركة صينية عبر القنوات العامة: نظام الدعاية الائتمانية الوطني للمؤسسات، وما يعرضه السجل، وكيف تقرأ الحالة — دليل «كيف»، لا ادعاء بمؤهل.',
    ru: 'Как проверить регистрацию китайской компании через публичные каналы: национальная система публикации кредитной информации о предприятиях, что показывает запись и как читать статус — руководство «как», а не заявление о квалификации.',
    es: 'Cómo consultar el registro mercantil de una empresa china por canales públicos: el sistema nacional de publicidad de información crediticia empresarial, qué muestra el registro y cómo leer el estado — un «cómo», no una afirmación de cualificación.',
  },
  h1: {
    en: 'How to Check a Chinese Company\'s Registration',
    ar: 'كيف تتحقق من تسجيل شركة صينية',
    ru: 'Как проверить регистрацию китайской компании',
    es: 'Cómo comprobar el registro de una empresa china',
  },
  summary: {
    en: 'Step-by-step how to look up a Chinese company\'s registration in the public credit-information system and read the result.',
    ar: 'خطوة بخطوة لكيفية الاستعلام عن تسجيل شركة صينية في نظام المعلومات الائتمانية العامة وقراءة النتيجة.',
    ru: 'Пошаговое руководство по проверке регистрации китайской компании в публичной системе кредитной информации и чтению результата.',
    es: 'Paso a paso para consultar el registro de una empresa china en el sistema público de información crediticia y leer el resultado.',
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
          en: 'A Chinese company\'s registration is checked through public channels — primarily the National Enterprise Credit Information Publicity System (国家企业信用信息公示系统), where every legally registered company appears with its unified social credit code (统一社会信用代码), registered name, legal representative, registered capital, business scope and status. You look up the name or code and read the result: a company you cannot find, or whose name or status does not match what the seller claims, is a company to stop and investigate. This page explains how to run the lookup; it does not grant or claim any qualification.',
          ar: 'يُتحقق من تسجيل الشركة الصينية عبر القنوات العامة — في المقام الأول نظام الدعاية الائتمانية الوطني للمؤسسات (国家企业信用信息公示系统)، حيث تظهر كل شركة مسجلة قانونياً برمزها الائتماني الاجتماعي الموحّد (统一社会信用代码) واسمها المسجل وممثلها القانوني ورأس مالها المسجل ونطاق أعمالها وحالتها. تستعلم عن الاسم أو الرمز وتقرأ النتيجة: الشركة التي لا تجدها، أو التي لا يطابق اسمها أو حالتها ما يدّعيه البائع، شركة يجب التوقف والتحقيق معها. تشرح هذه الصفحة كيفية إجراء الاستعلام؛ وهي لا تمنح أو تدّعي أي مؤهل.',
          ru: 'Регистрация китайской компании проверяется через публичные каналы — прежде всего через Национальную систему публикации кредитной информации о предприятиях (国家企业信用信息公示系统), где каждая легально зарегистрированная компания числится со своим единым кодом социального кредита (统一社会信用代码), зарегистрированным именем, законным представителем, уставным капиталом, сферой деятельности и статусом. Вы ищете имя или код и читаете результат: компания, которую вы не находите или чьё имя/статус не совпадают с заявленным продавцом, — повод остановиться и разобраться. Эта страница объясняет, как выполнить проверку; она не предоставляет и не заявляет никакой квалификации.',
          es: 'El registro de una empresa china se comprueba por canales públicos, principalmente a través del Sistema Nacional de Publicidad de Información Crediticia Empresarial (国家企业信用信息公示系统), donde toda empresa legalmente registrada aparece con su código de crédito social unificado (统一社会信用代码), nombre registrado, representante legal, capital social, ámbito de actividad y estado. Busca el nombre o el código y lee el resultado: una empresa que no encuentre, o cuyo nombre o estado no coincida con lo que afirma el vendedor, es una empresa ante la que detenerse e investigar. Esta página explica cómo ejecutar la consulta; no otorga ni afirma ninguna cualificación.',
        },
      ],
    },
    {
      heading: {
        en: 'What the record shows',
        ar: 'ما يعرضه السجل',
        ru: 'Что показывает запись',
        es: 'Qué muestra el registro',
      },
      table: {
        headers: [
          { en: 'Field', ar: 'الحقل', ru: 'Поле', es: 'Campo' },
          { en: 'What to check', ar: 'ما الذي تتحقق منه', ru: 'Что проверять', es: 'Qué comprobar' },
        ],
        rows: [
          [
            { en: 'Unified social credit code (统一社会信用代码)', ar: 'رمز الائتمان الاجتماعي الموحّد (统一社会信用代码)', ru: 'Единый код социального кредита (统一社会信用代码)', es: 'Código de crédito social unificado (统一社会信用代码)' },
            { en: 'Matches the code on the invoice, contract and licence', ar: 'يطابق الرمز الموجود على الفاتورة والعقد والرخصة', ru: 'Совпадает с кодом в счёте, контракте и лицензии', es: 'Coincide con el código de la factura, el contrato y la licencia' },
          ],
          [
            { en: 'Registered name', ar: 'الاسم المسجل', ru: 'Зарегистрированное имя', es: 'Nombre registrado' },
            { en: 'Matches the seller\'s name on the documents exactly', ar: 'يطابق اسم البائع على الوثائق تماماً', ru: 'Точно совпадает с именем продавца в документах', es: 'Coincide exactamente con el nombre del vendedor en los documentos' },
          ],
          [
            { en: 'Legal representative (法定代表人)', ar: 'الممثل القانوني (法定代表人)', ru: 'Законный представитель (法定代表人)', es: 'Representante legal (法定代表人)' },
            { en: 'A named individual; keep it for the contract record', ar: 'فرد مسمّى؛ احتفظ به لسجل العقد', ru: 'Конкретное лицо; сохраните для записи контракта', es: 'Una persona concreta; consérvelo para el registro del contrato' },
          ],
          [
            { en: 'Status (经营状态)', ar: 'الحالة (经营状态)', ru: 'Статус (经营状态)', es: 'Estado (经营状态)' },
            { en: 'Normal/active; watch for deregistered, revoked or abnormal-operation records', ar: 'طبيعي/نشط؛ انتبه لسجلات الإلغاء أو الإبطال أو العمليات غير الطبيعية', ru: 'Нормальный/действующий; остерегайтесь записей о ликвидации, отзыве или аномальной деятельности', es: 'Normal/activo; cuidado con registros de cancelación, revocación u operaciones anómalas' },
          ],
          [
            { en: 'Business scope (经营范围)', ar: 'نطاق الأعمال (经营范围)', ru: 'Сфера деятельности (经营范围)', es: 'Ámbito de actividad (经营范围)' },
            { en: 'Includes vehicle trade/export where relevant; compare with the claimed activity', ar: 'يشمل تجارة/تصدير المركبات حيثما يلزم؛ قارنه بالنشاط المُدّعى', ru: 'Включает торговлю/экспорт автомобилей, где применимо; сравните с заявленной деятельностью', es: 'Incluye el comercio/exportación de vehículos cuando corresponda; compárelo con la actividad alegada' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'Step-by-step lookup',
        ar: 'الاستعلام خطوة بخطوة',
        ru: 'Пошаговая проверка',
        es: 'Consulta paso a paso',
      },
      checklist: [
        {
          en: 'Ask the exporter for its full registered name and unified social credit code',
          ar: 'اطلب من المصدّر اسمه المسجل الكامل ورمز الائتمان الاجتماعي الموحّد',
          ru: 'Запросите у экспортёра полное зарегистрированное имя и единый код социального кредита',
          es: 'Pida al exportador su nombre registrado completo y el código de crédito social unificado',
        },
        {
          en: 'Open the National Enterprise Credit Information Publicity System (国家企业信用信息公示系统) and search by name or code',
          ar: 'افتح نظام الدعاية الائتمانية الوطني للمؤسسات (国家企业信用信息公示系统) وابحث بالاسم أو الرمز',
          ru: 'Откройте Национальную систему публикации кредитной информации о предприятиях (国家企业信用信息公示系统) и выполните поиск по имени или коду',
          es: 'Abra el Sistema Nacional de Publicidad de Información Crediticia Empresarial (国家企业信用信息公示系统) y busque por nombre o código',
        },
        {
          en: 'Compare the registered name, code and status against the seller\'s documents',
          ar: 'قارن الاسم المسجل والرمز والحالة مع وثائق البائع',
          ru: 'Сверьте зарегистрированное имя, код и статус с документами продавца',
          es: 'Compare el nombre registrado, el código y el estado con los documentos del vendedor',
        },
        {
          en: 'For a high-value deal or a first deal, have an independent party in China run the lookup and the export-filing check',
          ar: 'لصفقة عالية القيمة أو صفقة أولى، اطلب من طرف مستقل في الصين إجراء الاستعلام وفحص التسجيل التصديري',
          ru: 'Для дорогой или первой сделки поручите независимой стороне в Китае выполнить проверку и проверку экспортной регистрации',
          es: 'Para una operación de alto valor o una primera operación, haga que una parte independiente en China ejecute la consulta y la comprobación del registro de exportación',
        },
      ],
    },
    {
      heading: {
        en: 'Business registration vs export filing',
        ar: 'التسجيل التجاري مقابل التسجيل التصديري',
        ru: 'Регистрация компании и экспортная регистрация',
        es: 'Registro mercantil frente a registro de exportación',
      },
      paragraphs: [
        {
          en: 'Two separate things confirm a counterparty. Business registration (工商/企业登记) proves the company legally exists; export filing (备案) proves it is authorised to export used vehicles. A company can be registered yet not authorised to export, and a claimed filing can only be checked against the commerce authority. Confirm both before you pay.',
          ar: 'أمران منفصلان يؤكدان الطرف المقابل. التسجيل التجاري (工商/企业登记) يثبت أن الشركة موجودة قانونياً؛ والتسجيل التصديري (备案) يثبت أنها مخوّلة بتصدير المركبات المستعملة. قد تكون الشركة مسجلة دون أن تكون مخوّلة بالتصدير، ولا يمكن التحقق من التسجيل المُدّعى إلا لدى سلطة التجارة. أكّد كليهما قبل أن تدفع.',
          ru: 'Контрагента подтверждают две разные вещи. Регистрация компании (工商/企业登记) доказывает, что компания юридически существует; экспортная регистрация (备案) доказывает, что она уполномочена экспортировать подержанные автомобили. Компания может быть зарегистрирована, но не иметь права на экспорт, а заявленную регистрацию можно проверить только в органе торговли. Подтверждайте и то и другое до оплаты.',
          es: 'Dos cosas distintas confirman a una contraparte. El registro mercantil (工商/企业登记) prueba que la empresa existe legalmente; el registro de exportación (备案) prueba que está autorizada a exportar vehículos usados. Una empresa puede estar registrada sin estar autorizada a exportar, y un registro alegado solo puede comprobarse ante la autoridad de comercio. Confirme ambos antes de pagar.',
        },
      ],
      links: [
        {
          slug: 'how-to-verify-china-used-car-exporter',
          label: {
            en: 'Confirm the export filing too — How to Verify guide',
            ar: 'أكّد التسجيل التصديري أيضاً — دليل «كيف تتحقق»',
            ru: 'Подтвердите и экспортную регистрацию — руководство «Как проверить»',
            es: 'Confirme también el registro de exportación — guía «Cómo verificar»',
          },
        },
        {
          slug: 'china-used-car-exporter-due-diligence-checklist',
          label: {
            en: 'The full checklist — Due Diligence guide',
            ar: 'القائمة الكاملة — دليل العناية الواجبة',
            ru: 'Полный чек-лист — руководство по due diligence',
            es: 'La lista completa — guía de diligencia debida',
          },
        },
        {
          href: 'https://company.chinausedautohub.com/',
          label: {
            en: 'Company directory — verified and source-backed entities',
            ar: 'دليل الشركات — كيانات موثقة ومدعومة بمصدر',
            ru: 'Справочник компаний — проверенные и подтверждённые источниками организации',
            es: 'Directorio de empresas — entidades verificadas y respaldadas por fuentes',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Our own qualification stance',
        ar: 'موقفنا من المؤهلات',
        ru: 'Наша позиция по квалификации',
        es: 'Nuestra postura sobre las cualificaciones',
      },
      paragraphs: [
        {
          en: 'China Used Auto Hub is a sourcing and information platform, not an exporter, a customs broker or a legal authority. We do not claim a qualification unless it can be independently verified, and we do not hold a registration or filing on your behalf. The same standard we apply to ourselves is the standard you should apply to any exporter: a claim you cannot independently check is a claim you should not rely on.',
          ar: 'China Used Auto Hub منصة توريد ومعلومات، وليست مصدّراً أو وسيطاً جمركياً أو سلطة قانونية. نحن لا ندّعي مؤهلاً ما لم يكن قابلاً للتحقق المستقل، ولا نحتفظ بتسجيل أو تسجيل تصديري نيابة عنك. المعيار نفسه الذي نطبقه على أنفسنا هو المعيار الذي يجب أن تطبقه على أي مصدّر: الادعاء الذي لا يمكنك التحقق منه مستقلاً هو ادعاء لا يجب أن تعتمد عليه.',
          ru: 'China Used Auto Hub — это платформа подбора и информации, а не экспортёр, таможенный брокер или юридический орган. Мы не заявляем о квалификации, если она не может быть проверена независимо, и не держим регистрацию или экспортную регистрацию от вашего имени. Тот же стандарт, который мы применяем к себе, вы должны применять к любому экспортёру: заявление, которое вы не можете проверить независимо, — это заявление, на которое не следует полагаться.',
          es: 'China Used Auto Hub es una plataforma de abastecimiento e información, no un exportador, un agente de aduanas ni una autoridad legal. No afirmamos una cualificación salvo que pueda verificarse de forma independiente, y no mantenemos un registro ni una inscripción en su nombre. El mismo estándar que nos aplicamos a nosotros mismos es el que usted debería aplicar a cualquier exportador: una afirmación que no puede comprobar de forma independiente es una afirmación en la que no debe confiar.',
        },
      ],
    },
    {
      heading: {
        en: 'Limitations',
        ar: 'الحدود',
        ru: 'Ограничения',
        es: 'Limitaciones',
      },
      paragraphs: [
        {
          en: 'The public system is the primary channel, but some registries are not fully accessible from abroad and some details require a Chinese contact or agent. Registration alone does not prove honesty or solvency — it proves existence. Use the lookup as the first check, then continue with document cross-check, contract review and staged payment before you transfer funds.',
          ar: 'النظام العام هو القناة الأساسية، لكن بعض السجلات غير متاحة بالكامل من الخارج وبعض التفاصيل تتطلب جهة اتصال أو وكيلاً في الصين. التسجيل وحده لا يثبت النزاهة أو الملاءة المالية — بل يثبت الوجود. استخدم الاستعلام كفحص أول، ثم واصل بمطابقة الوثائق ومراجعة العقد والدفع المقسم قبل تحويل الأموال.',
          ru: 'Публичная система — основной канал, но некоторые реестры не полностью доступны из-за рубежа, а некоторые детали требуют контакта или агента в Китае. Регистрация сама по себе не доказывает честность или платёжеспособность — она доказывает существование. Используйте проверку как первый шаг, затем продолжайте сверкой документов, проверкой контракта и поэтапной оплатой до перевода средств.',
          es: 'El sistema público es el canal principal, pero algunos registros no son plenamente accesibles desde el extranjero y algunos detalles requieren un contacto o agente en China. El registro por sí solo no prueba la honestidad ni la solvencia: prueba la existencia. Use la consulta como primera comprobación y continúe con el cotejo de documentos, la revisión del contrato y el pago escalonado antes de transferir fondos.',
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
          slug: 'how-to-verify-china-used-car-exporter',
          label: {
            en: 'The six verification actions — How to Verify guide',
            ar: 'إجراءات التحقق الستة — دليل «كيف تتحقق»',
            ru: 'Шесть действий проверки — руководство «Как проверить»',
            es: 'Las seis acciones de verificación — guía «Cómo verificar»',
          },
        },
        {
          slug: 'china-used-car-exporter-red-flags',
          label: {
            en: 'The warning signals — Red Flags guide',
            ar: 'إشارات التحذير — دليل العلامات الحمراء',
            ru: 'Тревожные сигналы — руководство по красным флагам',
            es: 'Las señales de advertencia — guía de señales de alarma',
          },
        },
        {
          slug: 'china-used-car-export-contract-checklist',
          label: {
            en: 'Put the verified name into the contract — Contract Checklist guide',
            ar: 'ضع الاسم المُتحقق منه في العقد — دليل قائمة العقد',
            ru: 'Внесите проверенное имя в контракт — руководство по чек-листу контракта',
            es: 'Incorpore el nombre verificado al contrato — guía de lista de contrato',
          },
        },
        {
          href: 'https://chinausedautohub.com/contact/',
          label: {
            en: 'Ask us about a company or a vehicle — Contact',
            ar: 'اسألنا عن شركة أو مركبة — اتصل بنا',
            ru: 'Спросите нас о компании или автомобиле — Контакты',
            es: 'Pregúntenos por una empresa o un vehículo — Contacto',
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
          en: 'Last reviewed: 2026-10-08. This guide describes how to check a company\'s registration through public channels and is not legal advice, a guarantee or a qualification claim. Registry names, codes and statuses are facts of the public record; whether a specific company is honest, solvent or a good counterparty is a judgement only you can make. Confirm any decision-affecting detail with the exporter and, where it matters, an independent party in China before paying.',
          ar: 'آخر مراجعة: 2026-10-08. يصف هذا الدليل كيفية التحقق من تسجيل الشركة عبر القنوات العامة وليس استشارة قانونية أو ضماناً أو ادعاء بمؤهل. أسماء السجلات ورموزها وحالاتها حقائق من السجل العام؛ أما ما إذا كانت شركة معينة نزيهة أو قادرة على السداد أو طرفاً مقابلاً جيداً فهو حكم لا يمكن أن يصدره إلا أنت. أكّد أي تفصيل يؤثر على القرار مع المصدّر، وحيثما يهم، مع طرف مستقل في الصين قبل الدفع.',
          ru: 'Последняя проверка: 2026-10-08. Это руководство описывает, как проверить регистрацию компании через публичные каналы, и не является юридической консультацией, гарантией или заявлением о квалификации. Имена, коды и статусы в реестре — это факты публичной записи; является ли конкретная компания честной, платёжеспособной или хорошим контрагентом — это суждение, которое можете вынести только вы. Подтверждайте любые детали, влияющие на решение, у экспортёра и, где это важно, у независимой стороны в Китае до оплаты.',
          es: 'Última revisión: 2026-10-08. Esta guía describe cómo comprobar el registro de una empresa por canales públicos y no es asesoramiento legal, una garantía ni una afirmación de cualificación. Los nombres, códigos y estados del registro son hechos del registro público; si una empresa concreta es honesta, solvente o una buena contraparte es un juicio que solo usted puede emitir. Confirme cualquier detalle que afecte a una decisión con el exportador y, donde importe, con una parte independiente en China antes de pagar.',
        },
      ],
    },
  ],
};
