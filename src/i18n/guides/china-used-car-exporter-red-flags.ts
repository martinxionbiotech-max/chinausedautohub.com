import type { L10n } from '../l10n';

// Guide — China Used Car Exporter Red Flags. Six categories of warning signals
// (registration, credentials, document contradictions, payment, price, communication)
// each with a matching verification action. Links to the R2 verify + due-diligence pages.

export const redFlags = {
  slug: 'china-used-car-exporter-red-flags',
  title: {
    en: 'China Used Car Exporter Red Flags',
    ar: 'العلامات الحمراء لمصدّري السيارات المستعملة في الصين',
    ru: 'Красные флаги китайских экспортёров подержанных автомобилей',
    es: 'Señales de alarma de los exportadores chinos de coches usados',
  },
  description: {
    en: 'The red flags that signal a risky China used car exporter: registration anomalies, unverifiable credentials, document contradictions, payment anomalies, price anomalies and communication anomalies — each with the action that checks it.',
    ar: 'العلامات الحمراء التي تشير إلى مصدّر سيارات مستعملة صيني محفوف بالمخاطر: شذوذ في التسجيل، ومؤهلات لا يمكن التحقق منها، وتناقضات في الوثائق، وشذوذ في الدفع والسعر والتواصل — كل علامة مع الإجراء الذي يفحصها.',
    ru: 'Красные флаги, указывающие на рискованного китайского экспортёра подержанных автомобилей: аномалии регистрации, непроверяемые квалификации, противоречия в документах, аномалии оплаты, цены и общения — каждый с действием для проверки.',
    es: 'Las señales de alarma que indican un exportador chino de coches usados arriesgado: anomalías de registro, credenciales no verificables, contradicciones documentales, anomalías de pago, precio y comunicación — cada una con la acción que la comprueba.',
  },
  h1: {
    en: 'China Used Car Exporter Red Flags',
    ar: 'العلامات الحمراء لمصدّري السيارات المستعملة في الصين',
    ru: 'Красные флаги китайских экспортёров подержанных автомобилей',
    es: 'Señales de alarma de los exportadores chinos de coches usados',
  },
  summary: {
    en: 'Six categories of warning signals that should stop or slow a deal, and the verification action each one triggers.',
    ar: 'ست فئات من إشارات التحذير التي يجب أن توقف الصفقة أو تبطئها، وإجراء التحقق الذي تطلقه كل إشارة.',
    ru: 'Шесть категорий тревожных сигналов, которые должны остановить или замедлить сделку, и действие проверки, которое запускает каждая.',
    es: 'Seis categorías de señales de advertencia que deben detener o frenar una operación, y la acción de verificación que activa cada una.',
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
          en: 'A red flag is a specific, observable signal that a claim is likely false or a deal is likely risky — not a vague "feels off". The six categories below each pair a signal with a concrete action you can take to test it. A single red flag does not always mean fraud, but a red flag you cannot resolve is a reason to stop the deal.',
          ar: 'العلامة الحمراء هي إشارة محددة قابلة للملاحظة تدل على أن ادعاءً ما كاذب على الأرجح أو أن صفقة ما محفوفة بالمخاطر على الأرجح — وليست «إحساساً غامضاً بالريبة». تقرن الفئات الست أدناه كل إشارة بإجراء ملموس يمكنك اتخاذه لاختبارها. لا تعني العلامة الحمراء الواحدة دائماً احتيالاً، لكن العلامة الحمراء التي لا يمكنك حلّها سبب للتوقف عن الصفقة.',
          ru: 'Красный флаг — это конкретный наблюдаемый сигнал о том, что заявление, вероятно, ложно или сделка, вероятно, рискованна, — а не смутное «что-то не так». Шесть категорий ниже связывают каждый сигнал с конкретным действием, которым его можно проверить. Один красный флаг не всегда означает мошенничество, но красный флаг, который вы не можете разрешить, — повод остановить сделку.',
          es: 'Una señal de alarma es una señal específica y observable de que una afirmación probablemente es falsa o una operación probablemente es arriesgada; no es un vago «me da mala espina». Las seis categorías siguientes emparejan cada señal con una acción concreta para comprobarla. Una sola señal no siempre implica fraude, pero una señal que no puede resolver es motivo para detener la operación.',
        },
      ],
    },
    {
      heading: {
        en: 'The six categories at a glance',
        ar: 'الفئات الست في لمحة',
        ru: 'Шесть категорий в общем виде',
        es: 'Las seis categorías de un vistazo',
      },
      table: {
        headers: [
          { en: 'Category', ar: 'الفئة', ru: 'Категория', es: 'Categoría' },
          { en: 'Signal', ar: 'الإشارة', ru: 'Сигнал', es: 'Señal' },
          { en: 'Verification action', ar: 'إجراء التحقق', ru: 'Действие проверки', es: 'Acción de verificación' },
        ],
        rows: [
          [
            { en: 'Registration anomaly', ar: 'شذوذ في التسجيل', ru: 'Аномалия регистрации', es: 'Anomalía de registro' },
            { en: 'Company not found in the registry, or a different name/status', ar: 'عدم العثور على الشركة في السجل، أو اسم/حالة مختلفان', ru: 'Компания не найдена в реестре или другое имя/статус', es: 'Empresa no encontrada en el registro, o un nombre/estado distinto' },
            { en: 'Look it up in the national enterprise credit publicity system', ar: 'استعلم عنها في نظام الدعاية الائتمانية الوطني للمؤسسات', ru: 'Проверьте её в национальной системе публикации кредитной информации', es: 'Consúltela en el sistema nacional de publicidad de información crediticia' },
          ],
          [
            { en: 'Unverifiable credentials', ar: 'مؤهلات لا يمكن التحقق منها', ru: 'Непроверяемые квалификации', es: 'Credenciales no verificables' },
            { en: 'Filing or licence number that cannot be found anywhere', ar: 'رقم تسجيل أو رخصة لا يمكن العثور عليه في أي مكان', ru: 'Номер регистрации или лицензии, который нигде не находится', es: 'Número de registro o licencia que no aparece en ningún sitio' },
            { en: 'Ask for the proof and check the name against the authority', ar: 'اطلب الإثبات وتحقق من الاسم لدى السلطة', ru: 'Запросите подтверждение и сверьте имя с органом', es: 'Pida la prueba y compruebe el nombre con la autoridad' },
          ],
          [
            { en: 'Document contradiction', ar: 'تناقض في الوثائق', ru: 'Противоречие в документах', es: 'Contradicción documental' },
            { en: 'VIN, model or registration date differs across licence, certificate and invoice', ar: 'اختلاف رقم الهيكل (VIN) أو الطراز أو تاريخ التسجيل بين الرخصة والشهادة والفاتورة', ru: 'VIN, модель или дата регистрации различаются в лицензии, свидетельстве и счёте', es: 'El VIN, el modelo o la fecha de registro difieren entre licencia, certificado y factura' },
            { en: 'Compare the documents yourself; a mismatch is a stop signal', ar: 'قارن الوثائق بنفسك؛ التضارب إشارة توقف', ru: 'Сравните документы сами; расхождение — сигнал остановиться', es: 'Compare los documentos usted mismo; una discrepancia es una señal de alto' },
          ],
          [
            { en: 'Payment anomaly', ar: 'شذوذ في الدفع', ru: 'Аномалия оплаты', es: 'Anomalía de pago' },
            { en: 'Request to pay into a personal or unrelated third-party account', ar: 'طلب الدفع إلى حساب شخصي أو حساب طرف ثالث غير ذي صلة', ru: 'Просьба оплатить на личный или посторонний счёт', es: 'Petición de pagar a una cuenta personal o de un tercero no relacionado' },
            { en: 'Confirm the paying entity name matches the contract and licence', ar: 'أكّد تطابق اسم الجهة الدافعة مع العقد والرخصة', ru: 'Подтвердите, что имя получателя платежа совпадает с контрактом и лицензией', es: 'Confirme que el nombre de la entidad pagadora coincide con el contrato y la licencia' },
          ],
          [
            { en: 'Price anomaly', ar: 'شذوذ في السعر', ru: 'Аномалия цены', es: 'Anomalía de precio' },
            { en: 'A price far below market with no explanation', ar: 'سعر أقل بكثير من السوق دون تفسير', ru: 'Цена значительно ниже рыночной без объяснения', es: 'Un precio muy por debajo del mercado sin explicación' },
            { en: 'Ask for the breakdown and compare against the landed-cost estimate', ar: 'اطلب التفصيل وقارنه بتقدير التكلفة النهائية', ru: 'Запросите разбивку и сравните с оценкой итоговой стоимости', es: 'Pida el desglose y compárelo con la estimación del coste de desembarco' },
          ],
          [
            { en: 'Communication anomaly', ar: 'شذوذ في التواصل', ru: 'Аномалия общения', es: 'Anomalía de comunicación' },
            { en: 'Refusal to share the VIN, a live walkthrough, or pressure to pay quickly', ar: 'رفض مشاركة رقم الهيكل (VIN) أو جولة مباشرة، أو الضغط للدفع بسرعة', ru: 'Отказ сообщить VIN, провести живой обзор или давление платить быстро', es: 'Negativa a compartir el VIN o un recorrido en directo, o presión para pagar rápido' },
            { en: 'Treat refusal or pressure itself as a signal; do not skip it', ar: 'عامل الرفض أو الضغط نفسه كإشارة؛ لا تتجاهله', ru: 'Считайте сам отказ или давление сигналом; не пропускайте его', es: 'Trate la negativa o la presión en sí como una señal; no la pase por alto' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'Registration anomalies',
        ar: 'شذوذات التسجيل',
        ru: 'Аномалии регистрации',
        es: 'Anomalías de registro',
      },
      paragraphs: [
        {
          en: 'Every legally registered Chinese company has a unified social credit code (统一社会信用代码) and appears in the national enterprise credit information publicity system (国家企业信用信息公示系统). A company you cannot find there, whose registered name does not match the name on the licence and invoice, or whose status shows deregistration or an abnormal-operations record, is a company you should not pay. The export filing (备案) is separate from corporate registration — confirm both.',
          ar: 'كل شركة صينية مسجلة قانونياً لديها رمز ائتماني اجتماعي موحّد (统一社会信用代码) وتظهر في نظام الدعاية الائتمانية الوطني للمؤسسات (国家企业信用信息公示系统). الشركة التي لا تجدها هناك، أو التي لا يطابق اسمها المسجل الاسم على الرخصة والفاتورة، أو التي تظهر حالتها إلغاءً أو سجل عمليات غير طبيعي، ليست شركة يجب أن تدفع لها. التسجيل التصديري (备案) منفصل عن التسجيل التجاري — أكّد كليهما.',
          ru: 'У каждой легально зарегистрированной китайской компании есть единый код социального кредита (统一社会信用代码), и она числится в национальной системе публикации кредитной информации о предприятиях (国家企业信用信息公示系统). Компания, которую вы там не находите, чьё зарегистрированное имя не совпадает с именем в лицензии и счёте или чей статус показывает ликвидацию либо аномальную деятельность, — это компания, которой не следует платить. Экспортная регистрация (备案) отдельна от корпоративной — подтверждайте обе.',
          es: 'Toda empresa china legalmente registrada tiene un código de crédito social unificado (统一社会信用代码) y aparece en el sistema nacional de publicidad de información crediticia empresarial (国家企业信用信息公示系统). Una empresa que no encuentre allí, cuyo nombre registrado no coincida con el de la licencia y la factura, o cuyo estado muestre cancelación o un registro de operaciones anómalas, no es una empresa a la que deba pagar. El registro de exportación (备案) es distinto del registro mercantil: confirme ambos.',
        },
      ],
      links: [
        {
          slug: 'how-to-check-chinese-company-registration',
          label: {
            en: 'How to run the lookup — Company registration guide',
            ar: 'كيف تجري الاستعلام — دليل تسجيل الشركات',
            ru: 'Как выполнить проверку — руководство по регистрации компаний',
            es: 'Cómo hacer la consulta — guía de registro de empresas',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Unverifiable credentials',
        ar: 'مؤهلات لا يمكن التحقق منها',
        ru: 'Непроверяемые квалификации',
        es: 'Credenciales no verificables',
      },
      paragraphs: [
        {
          en: 'A legitimate exporter can point you to its filing proof and its registration. A licence number, filing number or certification that cannot be found in any public directory is not evidence — it is a claim you are being asked to take on faith. We do not claim a qualification unless it can be independently verified, and you should hold any exporter to the same standard.',
          ar: 'يمكن للمصدّر الشرعي أن يوجّهك إلى إثبات تسجيله واستعلامه التجاري. رقم الرخصة أو رقم التسجيل أو الشهادة التي لا يمكن العثور عليها في أي دليل عام ليست دليلاً — بل ادعاءً يُطلب منك قبوله على الإيمان. نحن لا نزعم وجود مؤهل ما لم يكن قابلاً للتحقق المستقل، وينبغي أن تمسك أي مصدّر بنفس المعيار.',
          ru: 'Легитимный экспортёр может указать вам на подтверждение своей регистрации. Номер лицензии, регистрации или сертификат, которые не находятся ни в одном публичном справочнике, — это не доказательство, а заявление, которое вас просят принять на веру. Мы не заявляем о квалификации, если она не может быть проверена независимо, и вам следует придерживаться того же стандарта для любого экспортёра.',
          es: 'Un exportador legítimo puede indicarle su prueba de registro y su consulta mercantil. Un número de licencia, registro o certificación que no aparece en ningún directorio público no es evidencia: es una afirmación que se le pide aceptar por fe. No afirmamos una cualificación salvo que pueda verificarse de forma independiente, y usted debería exigir el mismo estándar a cualquier exportador.',
        },
      ],
    },
    {
      heading: {
        en: 'Document contradictions',
        ar: 'تناقضات الوثائق',
        ru: 'Противоречия в документах',
        es: 'Contradicciones documentales',
      },
      paragraphs: [
        {
          en: 'The export licence application must show the brand, model, registration date and transfer-pending-export date consistent with the Motor Vehicle Registration Certificate (机动车登记证书). If the VIN, model, year or owner name differs across the licence, the registration certificate and the commercial invoice, the paperwork does not describe the vehicle you are buying. Any mismatch — however small — is a stop signal, because it means one of the documents is wrong.',
          ar: 'يجب أن يُظهر طلب رخصة التصدير العلامة والطراز وتاريخ التسجيل وتاريخ نقل الملكية بانتظار التصدير بما يتوافق مع شهادة تسجيل المركبة (机动车登记证书). إذا اختلف رقم الهيكل (VIN) أو الطراز أو السنة أو اسم المالك بين الرخصة وشهادة التسجيل والفاتورة التجارية، فإن الأوراق لا تصف المركبة التي تشتريها. أي تضارب — مهما كان صغيراً — إشارة توقف، لأنه يعني أن إحدى الوثائق خاطئة.',
          ru: 'В заявке на экспортную лицензию марка, модель, дата регистрации и дата передачи в ожидании экспорта должны соответствовать свидетельству о регистрации транспортного средства (机动车登记证书). Если VIN, модель, год или имя владельца различаются в лицензии, свидетельстве о регистрации и коммерческом счёте, документы не описывают покупаемый вами автомобиль. Любое расхождение — даже незначительное — сигнал остановиться, потому что один из документов неверен.',
          es: 'La solicitud de licencia de exportación debe mostrar la marca, el modelo, la fecha de registro y la fecha de transferencia pendiente de exportación de forma coherente con el Certificado de Registro de Vehículo de Motor (机动车登记证书). Si el VIN, el modelo, el año o el nombre del propietario difieren entre la licencia, el certificado de registro y la factura comercial, el papeleo no describe el vehículo que compra. Cualquier discrepancia, por pequeña que sea, es una señal de alto, porque significa que uno de los documentos es incorrecto.',
        },
      ],
    },
    {
      heading: {
        en: 'Payment anomalies',
        ar: 'شذوذات الدفع',
        ru: 'Аномалии оплаты',
        es: 'Anomalías de pago',
      },
      paragraphs: [
        {
          en: 'The single most reliable signal is a request to pay into an account whose name does not match the company named in the contract and on the licence. Legitimate exporters receive payment into a corporate account in the company\'s own name. A request to pay a personal account, an unrelated third-party account, or a name that keeps changing is a red flag to resolve or stop on.',
          ar: 'الإشارة الأكثر موثوقية على الإطلاق هي طلب الدفع إلى حساب لا يطابق اسمه اسم الشركة المذكورة في العقد وعلى الرخصة. يستقبل المصدّرون الشرعيون المدفوعات في حساب شركة باسم الشركة نفسها. طلب الدفع إلى حساب شخصي، أو حساب طرف ثالث غير ذي صلة، أو اسم يتغير باستمرار، علامة حمراء يجب حلّها أو التوقف عندها.',
          ru: 'Самый надёжный сигнал — просьба оплатить на счёт, имя которого не совпадает с компанией, указанной в контракте и лицензии. Легитимные экспортёры получают оплату на корпоративный счёт на имя компании. Просьба оплатить на личный счёт, посторонний счёт или на имя, которое постоянно меняется, — красный флаг, который нужно разрешить или остановиться на нём.',
          es: 'La señal más fiable es la petición de pagar a una cuenta cuyo nombre no coincide con la empresa nombrada en el contrato y en la licencia. Los exportadores legítimos reciben el pago en una cuenta corporativa a nombre de la empresa. Una petición de pagar a una cuenta personal, una cuenta de un tercero no relacionado o un nombre que cambia constantemente es una señal de alarma a resolver o ante la que detenerse.',
        },
      ],
      links: [
        {
          slug: 'china-used-car-export-payment-risks',
          label: {
            en: 'Payment methods and protection — Payment Risks guide',
            ar: 'طرق الدفع والحماية — دليل مخاطر الدفع',
            ru: 'Способы оплаты и защита — руководство по платёжным рискам',
            es: 'Métodos de pago y protección — guía de riesgos de pago',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Price anomalies',
        ar: 'شذوذات السعر',
        ru: 'Аномалии цены',
        es: 'Anomalías de precio',
      },
      paragraphs: [
        {
          en: 'A price far below market for the same model and year, with no credible explanation, is a signal that something else is hidden — a vehicle condition problem, a document that will not clear, or a seller who never intends to deliver. Ask for the full breakdown and compare it against a landed-cost estimate. A seller who cannot explain a below-market price is a seller you cannot evaluate.',
          ar: 'السعر الأقل بكثير من السوق لنفس الطراز والسنة، دون تفسير مقنع، إشارة إلى أن شيئاً آخر مخفي — مشكلة في حالة المركبة، أو وثيقة لن تُخلَّص، أو بائع لا ينوي التسليم أصلاً. اطلب التفصيل الكامل وقارنه بتقدير التكلفة النهائية. البائع الذي لا يستطيع تفسير سعر أقل من السوق هو بائع لا يمكنك تقييمه.',
          ru: 'Цена значительно ниже рыночной для той же модели и года без правдоподобного объяснения — сигнал, что скрыто что-то ещё: проблема с состоянием автомобиля, документ, который не пройдёт оформление, или продавец, который не намерен поставлять. Запросите полную разбивку и сравните с оценкой итоговой стоимости. Продавец, который не может объяснить цену ниже рыночной, — это продавец, которого вы не можете оценить.',
          es: 'Un precio muy por debajo del mercado para el mismo modelo y año, sin una explicación creíble, es una señal de que se oculta algo más: un problema de estado del vehículo, un documento que no se despachará o un vendedor que no piensa entregar. Pida el desglose completo y compárelo con una estimación del coste de desembarco. Un vendedor que no puede explicar un precio por debajo del mercado es un vendedor que no puede evaluar.',
        },
      ],
      links: [
        {
          slug: 'landed-cost',
          label: {
            en: 'Build a cost baseline — Landed Cost guide',
            ar: 'أنشئ خط أساس للتكلفة — دليل التكلفة النهائية',
            ru: 'Постройте базовую стоимость — руководство по итоговой стоимости',
            es: 'Establezca una base de coste — guía de coste de desembarco',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Communication anomalies',
        ar: 'شذوذات التواصل',
        ru: 'Аномалии общения',
        es: 'Anomalías de comunicación',
      },
      paragraphs: [
        {
          en: 'A refusal to share the VIN, a refusal to show the vehicle or premises in a live walkthrough, or pressure to pay quickly are behavioural signals, not document signals — but they carry the same weight. A legitimate exporter is willing to be verified; hesitation or refusal on any check is itself a signal. Do not let urgency override the checklist.',
          ar: 'رفض مشاركة رقم الهيكل (VIN)، أو رفض إظهار المركبة أو المقر في جولة مباشرة، أو الضغط للدفع بسرعة، إشارات سلوكية لا إشارات وثائقية — لكنها تحمل الوزن نفسه. المصدّر الشرعي مستعد لأن يُتحقق منه؛ فالتردد أو الرفض في أي فحص هو بحد ذاته إشارة. لا تدع الاستعجال يلغي قائمة الفحص.',
          ru: 'Отказ сообщить VIN, показать автомобиль или помещение в живом обзоре или давление платить быстро — это поведенческие, а не документальные сигналы, но они имеют тот же вес. Легитимный экспортёр готов к проверке; колебание или отказ по любой проверке — само по себе сигнал. Не позволяйте спешке отменять чек-лист.',
          es: 'Negarse a compartir el VIN, a mostrar el vehículo o las instalaciones en un recorrido en directo, o presionar para pagar rápido son señales de comportamiento, no documentales, pero tienen el mismo peso. Un exportador legítimo está dispuesto a ser verificado; dudar o negarse en cualquier comprobación ya es una señal. No deje que la urgencia anule la lista.',
        },
      ],
    },
    {
      heading: {
        en: 'What to do when you see a red flag',
        ar: 'ماذا تفعل عند رؤية علامة حمراء',
        ru: 'Что делать при красном флаге',
        es: 'Qué hacer ante una señal de alarma',
      },
      checklist: [
        {
          en: 'Stop and name the signal — write down exactly what you observed',
          ar: 'توقف وسمِّ الإشارة — دوّن بالضبط ما لاحظته',
          ru: 'Остановитесь и назовите сигнал — запишите, что именно вы наблюдали',
          es: 'Deténgase y nombre la señal: anote exactamente lo que observó',
        },
        {
          en: 'Run the matching verification action from the table above',
          ar: 'نفّذ إجراء التحقق المقابل من الجدول أعلاه',
          ru: 'Выполните соответствующее действие проверки из таблицы выше',
          es: 'Ejecute la acción de verificación correspondiente de la tabla anterior',
        },
        {
          en: 'Ask the exporter to resolve it in writing, not in a chat message',
          ar: 'اطلب من المصدّر حلّها كتابةً، لا في رسالة محادثة',
          ru: 'Попросите экспортёра разрешить это письменно, а не в сообщении чата',
          es: 'Pida al exportador que lo resuelva por escrito, no en un mensaje de chat',
        },
        {
          en: 'If it cannot be resolved, stop the deal — a resolved doubt beats a hoped-for outcome',
          ar: 'إذا تعذّر حلّها، أوقف الصفقة — الشك المحلول أفضل من النتيجة المرجوة',
          ru: 'Если это не удаётся разрешить, остановите сделку — разрешённое сомнение лучше ожидаемого исхода',
          es: 'Si no puede resolverse, detenga la operación: una duda resuelta vale más que un resultado esperado',
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
          slug: 'china-used-car-exporter-due-diligence-checklist',
          label: {
            en: 'The full checklist — Due Diligence guide',
            ar: 'القائمة الكاملة — دليل العناية الواجبة',
            ru: 'Полный чек-лист — руководство по due diligence',
            es: 'La lista completa — guía de diligencia debida',
          },
        },
        {
          slug: 'how-to-avoid-china-used-car-export-scams',
          label: {
            en: 'How these signals map to scams — Avoid Scams guide',
            ar: 'كيف ترتبط هذه الإشارات بعمليات الاحتيال — دليل تجنّب الاحتيال',
            ru: 'Как эти сигналы соотносятся с мошенничеством — руководство по избежанию мошенничества',
            es: 'Cómo se relacionan estas señales con las estafas — guía para evitar estafas',
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
        en: 'Last reviewed and verification status',
        ar: 'آخر مراجعة وحالة التحقق',
        ru: 'Дата последней проверки и статус верификации',
        es: 'Última revisión y estado de verificación',
      },
      paragraphs: [
        {
          en: 'Last reviewed: 2026-10-08. This guide describes general warning signals and is not a guarantee, an accusation against any exporter, or a substitute for your own verification. Where we describe a Chinese official procedure, the underlying source is the MOFCOM / MIIT / MPS / MOT / GACC notices cited in our compliance guide. Treat a red flag as a question to resolve, not a verdict — and confirm any decision-affecting detail directly with the exporter and, where it matters, an independent party.',
          ar: 'آخر مراجعة: 2026-10-08. يصف هذا الدليل إشارات تحذير عامة وليس ضماناً أو اتهاماً ضد أي مصدّر أو بديلاً عن تحققك الخاص. عندما نصف إجراءً صينياً رسمياً، يكون المصدر الأساسي هو إشعارات وزارة التجارة والصناعة والأمن العام والنقل والجمارك المذكورة في دليل الامتثال لدينا. عامل العلامة الحمراء كسؤال يجب حلّه لا كحكم نهائي — وأكّد أي تفصيل يؤثر على القرار مباشرة مع المصدّر، وحيثما يهم، مع طرف مستقل.',
          ru: 'Последняя проверка: 2026-10-08. Это руководство описывает общие тревожные сигналы и не является гарантией, обвинением какого-либо экспортёра или заменой вашей собственной проверки. Когда мы описываем китайскую официальную процедуру, её исходным источником являются уведомления MOFCOM / MIIT / MPS / MOT / GACC, указанные в нашем руководстве по соответствию. Относитесь к красному флагу как к вопросу, который нужно разрешить, а не как к вердикту — и подтверждайте любые детали, влияющие на решение, напрямую с экспортёром и, где это важно, с независимой стороной.',
          es: 'Última revisión: 2026-10-08. Esta guía describe señales de advertencia generales y no es una garantía, una acusación contra ningún exportador ni un sustituto de su propia verificación. Cuando describimos un procedimiento oficial chino, la fuente subyacente son los avisos MOFCOM / MIIT / MPS / MOT / GACC citados en nuestra guía de cumplimiento. Trate una señal de alarma como una pregunta a resolver, no como un veredicto, y confirme cualquier detalle que afecte a una decisión directamente con el exportador y, donde importe, con una parte independiente.',
        },
      ],
    },
  ],
};
