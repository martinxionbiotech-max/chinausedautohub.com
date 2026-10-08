import type { L10n } from '../l10n';

// Guide — How to Verify a Vehicle Before Payment. A pre-payment verification
// action list (VIN, mileage, accident history, photo cross-check, third-party
// inspection). Generic buyer-protection practice; links inspection + verify guides.

export const verifyBeforePayment = {
  slug: 'how-to-verify-a-vehicle-before-payment',
  title: {
    en: 'How to Verify a Vehicle Before Payment',
    ar: 'كيف تتحقق من المركبة قبل الدفع',
    ru: 'Как проверить автомобиль перед оплатой',
    es: 'Cómo verificar un vehículo antes del pago',
  },
  description: {
    en: 'The pre-payment verification checklist for a used vehicle from China: VIN, mileage, accident history, photo and video cross-checks and third-party inspection — what to confirm before you transfer any funds.',
    ar: 'قائمة التحقق قبل الدفع لمركبة مستعملة من الصين: رقم الهيكل (VIN)، والمسافة المقطوعة، وسجل الحوادث، ومطابقة الصور والفيديو، والفحص من طرف ثالث — ما يجب تأكيده قبل تحويل أي أموال.',
    ru: 'Контрольный список проверки перед оплатой подержанного автомобиля из Китая: VIN, пробег, история ДТП, сверка фото и видео и сторонняя проверка — что подтвердить до перевода денег.',
    es: 'La lista de verificación previa al pago para un vehículo usado desde China: VIN, kilometraje, historial de accidentes, cotejo de fotos y vídeo e inspección de terceros — qué confirmar antes de transferir fondos.',
  },
  h1: {
    en: 'How to Verify a Vehicle Before Payment',
    ar: 'كيف تتحقق من المركبة قبل الدفع',
    ru: 'Как проверить автомобиль перед оплатой',
    es: 'Cómo verificar un vehículo antes del pago',
  },
  summary: {
    en: 'A step-by-step action list to verify a vehicle\'s identity, condition, documents and the exporter before you pay.',
    ar: 'قائمة إجراءات خطوة بخطوة للتحقق من هوية المركبة وحالتها ووثائقها والمصدّر قبل الدفع.',
    ru: 'Пошаговый список действий для проверки идентичности автомобиля, его состояния, документов и экспортёра до оплаты.',
    es: 'Una lista de acciones paso a paso para verificar la identidad, el estado, los documentos del vehículo y el exportador antes de pagar.',
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
          en: 'Before you pay a China used-car exporter, confirm four things about the vehicle — its identity (VIN), its mileage, its history and its condition — and one thing about the counterparty: that the exporter and the payment account are who the documents say they are. None of this requires trusting anyone; each check is something you can run or ask for directly. This page is a pre-payment action list, not a certificate for any specific vehicle.',
          ar: 'قبل أن تدفع لمصدّر سيارات مستعملة صيني، أكّد أربعة أمور عن المركبة — هويتها (رقم الهيكل VIN)، ومسافتها المقطوعة، وسجلها، وحالتها — وأمراً واحداً عن الطرف المقابل: أن المصدّر وحساب الدفع هما من تقول الوثائق إنهما هو. لا يتطلب أي من هذا الثقة بأحد؛ فكل فحص شيء يمكنك تنفيذه أو طلبه مباشرة. هذه الصفحة قائمة إجراءات قبل الدفع، وليست شهادة لأي مركبة محددة.',
          ru: 'Прежде чем платить китайскому экспортёру подержанных автомобилей, подтвердите четыре вещи об автомобиле — его идентичность (VIN), пробег, историю и состояние — и одну вещь о контрагенте: что экспортёр и платёжный счёт — это те, кем их называют документы. Ничто из этого не требует доверия; каждая проверка выполняется вами или запрашивается напрямую. Эта страница — список действий перед оплатой, а не сертификат на конкретный автомобиль.',
          es: 'Antes de pagar a un exportador chino de coches usados, confirme cuatro cosas del vehículo — su identidad (VIN), su kilometraje, su historial y su estado — y una cosa de la contraparte: que el exportador y la cuenta de pago son quienes dicen los documentos. Nada de esto exige confiar en nadie; cada comprobación puede ejecutarla o pedirla directamente. Esta página es una lista de acciones previas al pago, no un certificado de ningún vehículo concreto.',
        },
      ],
    },
    {
      heading: {
        en: 'The pre-payment checklist',
        ar: 'قائمة التحقق قبل الدفع',
        ru: 'Контрольный список перед оплатой',
        es: 'La lista de verificación previa al pago',
      },
      checklist: [
        {
          en: 'Confirm the VIN matches across the licence, registration certificate and invoice',
          ar: 'أكّد أن رقم الهيكل (VIN) متطابق عبر الرخصة وشهادة التسجيل والفاتورة',
          ru: 'Подтвердите, что VIN совпадает в лицензии, свидетельстве о регистрации и счёте',
          es: 'Confirme que el VIN coincide en la licencia, el certificado de registro y la factura',
        },
        {
          en: 'Cross-check the mileage against the odometer, service records and interior wear',
          ar: 'قارن المسافة المقطوعة مع عداد المسافة وسجلات الخدمة وتآكل المقصورة',
          ru: 'Сверьте пробег с одометром, записями о ТО и износом салона',
          es: 'Cruce el kilometraje con el cuentakilómetros, los registros de servicio y el desgaste interior',
        },
        {
          en: 'Review the accident and repair history with its confidence level',
          ar: 'راجع سجل الحوادث والإصلاحات مع مستوى ثقته',
          ru: 'Изучите историю ДТП и ремонтов с её уровнем достоверности',
          es: 'Revise el historial de accidentes y reparaciones con su nivel de confianza',
        },
        {
          en: 'Request the specific photos or video you need, including the VIN plate and odometer',
          ar: 'اطلب الصور أو الفيديو المحدد الذي تحتاجه، بما في ذلك لوحة رقم الهيكل وعداد المسافة',
          ru: 'Запросите нужные фото или видео, включая табличку VIN и одометр',
          es: 'Pida las fotos o el vídeo concretos que necesite, incluida la placa del VIN y el cuentakilómetros',
        },
        {
          en: 'Commission a third-party inspection where available and worth the cost',
          ar: 'كلّف بفحص من طرف ثالث حيثما توفر وكانت التكلفة مبررة',
          ru: 'Закажите стороннюю проверку, где она доступна и оправдана по стоимости',
          es: 'Encargue una inspección de terceros cuando esté disponible y merezca la pena',
        },
        {
          en: 'Verify the exporter and the payment account before transferring funds',
          ar: 'تحقق من المصدّر وحساب الدفع قبل تحويل الأموال',
          ru: 'Проверьте экспортёра и платёжный счёт до перевода средств',
          es: 'Verifique al exportador y la cuenta de pago antes de transferir fondos',
        },
      ],
    },
    {
      heading: {
        en: 'Verify the vehicle identity (VIN)',
        ar: 'تحقق من هوية المركبة (رقم الهيكل VIN)',
        ru: 'Проверьте идентичность автомобиля (VIN)',
        es: 'Verifique la identidad del vehículo (VIN)',
      },
      paragraphs: [
        {
          en: 'The VIN is the vehicle\'s fingerprint, and it must be identical everywhere: on the export licence application, the Motor Vehicle Registration Certificate (机动车登记证书), the commercial invoice and the physical plate on the vehicle. The licence application must also show the brand, model, registration date and transfer-pending-export date consistent with the registration certificate. A mismatch means one document does not describe the vehicle you are buying — stop and resolve it before paying.',
          ar: 'رقم الهيكل (VIN) هو بصمة المركبة، ويجب أن يكون متطابقاً في كل مكان: على طلب رخصة التصدير، وشهادة تسجيل المركبة (机动车登记证书)، والفاتورة التجارية، واللوحة المادية على المركبة. كما يجب أن يُظهر طلب الرخصة العلامة والطراز وتاريخ التسجيل وتاريخ نقل الملكية بانتظار التصدير بما يتوافق مع شهادة التسجيل. التضارب يعني أن إحدى الوثائق لا تصف المركبة التي تشتريها — توقف وحلّ الأمر قبل الدفع.',
          ru: 'VIN — это отпечаток автомобиля, и он должен быть одинаковым везде: в заявке на экспортную лицензию, в свидетельстве о регистрации транспортного средства (机动车登记证书), в коммерческом счёте и на физической табличке автомобиля. В заявке на лицензию также должны быть указаны марка, модель, дата регистрации и дата передачи в ожидании экспорта в соответствии со свидетельством о регистрации. Расхождение означает, что один из документов не описывает покупаемый вами автомобиль — остановитесь и разрешите это до оплаты.',
          es: 'El VIN es la huella del vehículo y debe ser idéntico en todas partes: en la solicitud de licencia de exportación, el Certificado de Registro de Vehículo de Motor (机动车登记证书), la factura comercial y la placa física del vehículo. La solicitud de licencia también debe mostrar la marca, el modelo, la fecha de registro y la fecha de transferencia pendiente de exportación de forma coherente con el certificado de registro. Una discrepancia significa que un documento no describe el vehículo que compra: deténgase y resuélvalo antes de pagar.',
        },
      ],
    },
    {
      heading: {
        en: 'Verify the mileage',
        ar: 'تحقق من المسافة المقطوعة',
        ru: 'Проверьте пробег',
        es: 'Verifique el kilometraje',
      },
      paragraphs: [
        {
          en: 'Mileage is one of the most important figures and one of the most commonly tampered with. Cross-check it against several independent signals: the odometer, the service records (which should increase consistently over time), interior wear on the pedals, seats and steering wheel, and tire wear. A low stated mileage with heavy wear, or a reading that drops between records, is a warning sign to resolve before payment.',
          ar: 'المسافة المقطوعة من أهم الأرقام ومن أكثرها عرضة للتلاعب. قارنها عبر عدة مؤشرات مستقلة: عداد المسافة، وسجلات الخدمة (التي يجب أن تزيد باستمرار مع الوقت)، وتآكل المقصورة على الدواسات والمقاعد وعجلة القيادة، وتآكل الإطارات. المسافة المعلنة المنخفضة مع تآكل شديد، أو القراءة التي تنخفض بين السجلات، علامة تحذير يجب حلّها قبل الدفع.',
          ru: 'Пробег — одна из важнейших цифр и одна из самых часто подделываемых. Сверьте его по нескольким независимым признакам: одометр, записи о ТО (которые должны последовательно расти со временем), износ салона на педалях, сиденьях и руле, а также износ шин. Низкий заявленный пробег при сильном износе или показание, уменьшающееся между записями, — тревожный сигнал, который нужно разрешить до оплаты.',
          es: 'El kilometraje es una de las cifras más importantes y una de las más manipuladas. Crúcelo con varias señales independientes: el cuentakilómetros, los registros de servicio (que deben aumentar de forma constante con el tiempo), el desgaste interior de pedales, asientos y volante, y el desgaste de neumáticos. Un kilometraje declarado bajo con desgaste intenso, o una lectura que baja entre registros, es una advertencia a resolver antes del pago.',
        },
      ],
      links: [
        {
          slug: 'check-mileage-and-vehicle-history',
          label: {
            en: 'How to check mileage in depth — Mileage & History guide',
            ar: 'كيف تتحقق من المسافة بعمق — دليل المسافة والتاريخ',
            ru: 'Как глубже проверить пробег — руководство по пробегу и истории',
            es: 'Cómo comprobar el kilometraje a fondo — guía de kilometraje e historial',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Verify accident history and records',
        ar: 'تحقق من سجل الحوادث والسجلات',
        ru: 'Проверьте историю ДТП и записи',
        es: 'Verifique el historial de accidentes y los registros',
      },
      paragraphs: [
        {
          en: 'Accident and maintenance history is not always available for every vehicle, and a missing record is different from a clean record. Ask what the exporter holds and how it is sourced — verified against a document, provided by the seller, or backed by a source — and mark it accordingly. A record that is missing entirely for a detail that matters to you, or a "clean" history contradicted by repaint or panel-gap signs, is a reason to dig deeper before you pay.',
          ar: 'سجل الحوادث والصيانة لا يتوفر دائماً لكل مركبة، والسجل المفقود يختلف عن السجل النظيف. اسأل عمّا يحتفظ به المصدّر وكيف حُصل عليه — موثّق مقابل وثيقة، أو مقدّم من البائع، أو مدعوم بمصدر — وعلّمه وفقاً لذلك. السجل المفقود كلياً لتفصيل يهمك، أو السجل «النظيف» الذي تناقضه علامات إعادة طلاء أو فجوات ألواح، سبب للتعمق أكثر قبل الدفع.',
          ru: 'История ДТП и обслуживания доступна не всегда, и отсутствующая запись отличается от чистой истории. Спросите, что есть у экспортёра и как это получено — подтверждено документом, предоставлено продавцом или подтверждено источником — и пометьте соответственно. Полностью отсутствующая запись по важной детали или «чистая» история, которой противоречат следы перекраски или зазоры панелей, — повод копнуть глубже до оплаты.',
          es: 'El historial de accidentes y mantenimiento no siempre está disponible, y un registro ausente es distinto de un registro limpio. Pregunte qué tiene el exportador y cómo se obtuvo — verificado contra un documento, facilitado por el vendedor o respaldado por una fuente — y márquelo en consecuencia. Un registro totalmente ausente sobre un detalle que le importa, o un historial «limpio» contradicho por repintado o holguras de paneles, es motivo para profundizar antes de pagar.',
        },
      ],
    },
    {
      heading: {
        en: 'Cross-check with photos and video',
        ar: 'طابق مع الصور والفيديو',
        ru: 'Сверьте по фото и видео',
        es: 'Coteje con fotos y vídeo',
      },
      paragraphs: [
        {
          en: 'Most buyers verify a vehicle remotely, so ask for exactly what you need: the VIN plate, the odometer reading, the engine or battery bay, the areas you care about, and a dated or live video walkthrough that shows the vehicle is real and present. A seller who refuses a live walkthrough or will not share the VIN is itself a signal. Match what you receive against the documents and the description before you commit funds.',
          ar: 'يتحقق معظم المشترين من المركبة عن بُعد، لذا اطلب ما تحتاجه بالضبط: لوحة رقم الهيكل، وقراءة عداد المسافة، وحجرة المحرك أو البطارية، والمناطق التي تهمك، وجولة فيديو مؤرخة أو مباشرة تُظهر أن المركبة حقيقية وموجودة. البائع الذي يرفض الجولة المباشرة أو لا يشارك رقم الهيكل هو بحد ذاته إشارة. طابق ما تستلمه مع الوثائق والوصف قبل الالتزام بالأموال.',
          ru: 'Большинство покупателей проверяют автомобиль удалённо, поэтому запрашивайте ровно то, что нужно: табличку VIN, показания одометра, моторный отсек или батарею, интересующие вас зоны и датированный или живой видеообзор, подтверждающий, что автомобиль реален и присутствует. Продавец, отказывающийся от живого обзора или не сообщающий VIN, — сам по себе сигнал. Сверьте полученное с документами и описанием до перевода средств.',
          es: 'La mayoría de los compradores verifican el vehículo de forma remota, así que pida exactamente lo que necesita: la placa del VIN, la lectura del cuentakilómetros, el vano del motor o de la batería, las zonas que le importan y un recorrido en vídeo fechado o en directo que muestre que el vehículo es real y está presente. Un vendedor que rechaza el recorrido en directo o no comparte el VIN ya es una señal. Coteje lo recibido con los documentos y la descripción antes de comprometer fondos.',
        },
      ],
    },
    {
      heading: {
        en: 'Third-party inspection',
        ar: 'الفحص من طرف ثالث',
        ru: 'Сторонняя проверка',
        es: 'Inspección de terceros',
      },
      paragraphs: [
        {
          en: 'For a high-value vehicle, an EV where battery health is critical, or an incomplete listing, a third-party inspection or diagnostic report adds independent certainty. It adds time and cost, so weigh it against the vehicle\'s value and your risk tolerance. The third-party product inspection report (产品检测报告) is also part of the export documentation itself, so a legitimate exporter can normally point you to an inspection record.',
          ar: 'للمركبة عالية القيمة، أو الكهربائية التي تكون صحة بطاريتها حرجة، أو الإعلان الناقص، يضيف الفحص من طرف ثالث أو التقرير التشخيصي يقيناً مستقلاً. إنه يضيف وقتاً وتكلفة، لذا وازنه مقابل قيمة المركبة وتحمل المخاطر لديك. كما أن تقرير فحص المنتج من طرف ثالث (产品检测报告) جزء من وثائق التصدير نفسها، لذا يمكن للمصدّر الشرعي عادةً أن يوجّهك إلى سجل فحص.',
          ru: 'Для дорогого автомобиля, электромобиля с критичной батареей или неполного объявления сторонняя проверка или диагностический отчёт добавляют независимую уверенность. Это добавляет время и стоимость, поэтому соотнесите это со стоимостью автомобиля и вашей готовностью к риску. Отчёт о проверке продукции третьей стороной (产品检测报告) также входит в саму экспортную документацию, поэтому легитимный экспортёр обычно может указать на запись о проверке.',
          es: 'Para un vehículo de alto valor, un VE con batería crítica o un anuncio incompleto, una inspección de terceros o un informe de diagnóstico añade certeza independiente. Añade tiempo y coste, así que sopéselo con el valor del vehículo y su tolerancia al riesgo. El informe de inspección de producto de terceros (产品检测报告) también forma parte de la propia documentación de exportación, por lo que un exportador legítimo normalmente puede indicarle un registro de inspección.',
        },
      ],
      links: [
        {
          slug: 'vehicle-inspection',
          label: {
            en: 'The full inspection method — Vehicle Inspection guide',
            ar: 'طريقة الفحص الكاملة — دليل فحص المركبات',
            ru: 'Полный метод проверки — руководство по осмотру автомобиля',
            es: 'El método completo de inspección — guía de inspección de vehículos',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Verify the exporter and the payment before you pay',
        ar: 'تحقق من المصدّر والدفع قبل أن تدفع',
        ru: 'Проверьте экспортёра и оплату до того, как платить',
        es: 'Verifique al exportador y el pago antes de pagar',
      },
      paragraphs: [
        {
          en: 'A perfect vehicle does not protect you from a dishonest counterparty. Confirm the exporter\'s registration, filing and licence, and — critically — that the account you are asked to pay is in the company\'s own name, matching the contract and the licence. A request to pay a personal or unrelated third-party account is the single most reliable warning signal. Run the exporter verification and the payment check before you transfer any funds.',
          ar: 'المركبة المثالية لا تحميك من طرف مقابل غير نزيه. أكّد تسجيل المصدّر وتسجيله التصديري ورخصته، و— الأهم — أن الحساب المطلوب الدفع إليه باسم الشركة نفسها، مطابقاً للعقد والرخصة. طلب الدفع إلى حساب شخصي أو حساب طرف ثالث غير ذي صلة هو الإشارة التحذيرية الأكثر موثوقية على الإطلاق. نفّذ التحقق من المصدّر وفحص الدفع قبل تحويل أي أموال.',
          ru: 'Идеальный автомобиль не защищает от нечестного контрагента. Подтвердите регистрацию, экспортную регистрацию и лицензию экспортёра и — критически важно — что счёт, на который вас просят платить, принадлежит самой компании и совпадает с контрактом и лицензией. Просьба оплатить на личный или посторонний счёт — самый надёжный тревожный сигнал. Выполните проверку экспортёра и проверку оплаты до перевода любых средств.',
          es: 'Un vehículo perfecto no le protege de una contraparte deshonesta. Confirme el registro, la inscripción de exportación y la licencia del exportador y — críticamente — que la cuenta a la que se le pide pagar esté a nombre de la empresa, coincidiendo con el contrato y la licencia. La petición de pagar a una cuenta personal o de un tercero no relacionado es la señal de advertencia más fiable. Ejecute la verificación del exportador y la comprobación del pago antes de transferir fondos.',
        },
      ],
      links: [
        {
          slug: 'how-to-verify-china-used-car-exporter',
          label: {
            en: 'Verify the exporter — How to Verify guide',
            ar: 'تحقق من المصدّر — دليل «كيف تتحقق»',
            ru: 'Проверьте экспортёра — руководство «Как проверить»',
            es: 'Verifique al exportador — guía «Cómo verificar»',
          },
        },
        {
          slug: 'china-used-car-export-payment-risks',
          label: {
            en: 'Payment methods and protection — Payment Risks guide',
            ar: 'طرق الدفع والحماية — دليل مخاطر الدفع',
            ru: 'Способы оплаты и защита — руководство по платёжным рискам',
            es: 'Métodos de pago y protección — guía de riesgos de pago',
          },
        },
        {
          slug: 'how-to-verify-used-car-export-credentials',
          label: {
            en: 'Check the credentials — Export Credentials guide',
            ar: 'تحقق من المؤهلات — دليل مؤهلات التصدير',
            ru: 'Проверьте полномочия — руководство по экспортным полномочиям',
            es: 'Compruebe las credenciales — guía de credenciales de exportación',
          },
        },
      ],
    },
    {
      heading: {
        en: 'What to do if a check fails',
        ar: 'ماذا تفعل إذا فشل فحص',
        ru: 'Что делать, если проверка не пройдена',
        es: 'Qué hacer si falla una comprobación',
      },
      paragraphs: [
        {
          en: 'Do not rationalise a failed check. A VIN mismatch, an unexplained mileage inconsistency, a refusal to share the VIN or a live walkthrough, or a payment account that does not match the company are each a reason to stop and ask the exporter to resolve the issue in writing. If it cannot be resolved, do not pay. A resolved doubt is cheaper than a lost deposit.',
          ar: 'لا تبرر الفحص الفاشل. تضارب رقم الهيكل، أو تعارض غير مفسر في المسافة، أو رفض مشاركة رقم الهيكل أو الجولة المباشرة، أو حساب دفع لا يطابق الشركة — كل واحدة سبب للتوقف ومطالبة المصدّر بحل المشكلة كتابةً. إذا تعذّر حلّها، لا تدفع. الشك المحلول أرخص من عربون مفقود.',
          ru: 'Не рационализируйте не пройденную проверку. Несовпадение VIN, необъяснимое расхождение пробега, отказ сообщить VIN или провести живой обзор либо платёжный счёт, не совпадающий с компанией, — каждый пункт повод остановиться и попросить экспортёра разрешить вопрос письменно. Если это не удаётся разрешить, не платите. Разрешённое сомнение дешевле потерянного задатка.',
          es: 'No racionalice una comprobación fallida. Una discrepancia de VIN, una incoherencia de kilometraje sin explicación, una negativa a compartir el VIN o el recorrido en directo, o una cuenta de pago que no coincide con la empresa son, cada una, motivo para detenerse y pedir al exportador que resuelva el asunto por escrito. Si no puede resolverse, no pague. Una duda resuelta es más barata que un depósito perdido.',
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
          slug: 'vehicle-inspection',
          label: {
            en: 'The full inspection method — Vehicle Inspection guide',
            ar: 'طريقة الفحص الكاملة — دليل فحص المركبات',
            ru: 'Полный метод проверки — руководство по осмотру автомобиля',
            es: 'El método completo de inspección — guía de inspección de vehículos',
          },
        },
        {
          slug: 'how-to-verify-china-used-car-exporter',
          label: {
            en: 'Verify the exporter — How to Verify guide',
            ar: 'تحقق من المصدّر — دليل «كيف تتحقق»',
            ru: 'Проверьте экспортёра — руководство «Как проверить»',
            es: 'Verifique al exportador — guía «Cómo verificar»',
          },
        },
        {
          slug: 'china-used-car-export-contract-checklist',
          label: {
            en: 'Lock the verified details into the contract — Contract Checklist guide',
            ar: 'ثبّت التفاصيل المُتحقق منها في العقد — دليل قائمة العقد',
            ru: 'Закрепите проверенные детали в контракте — руководство по чек-листу контракта',
            es: 'Fije los detalles verificados en el contrato — guía de lista de contrato',
          },
        },
        {
          href: 'https://chinausedautohub.com/contact/',
          label: {
            en: 'Ask us about a specific vehicle — Contact',
            ar: 'اسألنا عن مركبة محددة — اتصل بنا',
            ru: 'Спросите нас о конкретном автомобиле — Контакты',
            es: 'Pregúntenos por un vehículo concreto — Contacto',
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
          en: 'Last reviewed: 2026-10-08. This page describes general pre-payment verification practice and is not a guarantee, a certificate for any specific vehicle or a substitute for your own checks. Whether a vehicle matches its documents and whether an exporter is a good counterparty are judgements only you can make. Confirm any detail that affects your decision with the exporter and, where it matters, an independent party in China before transferring funds.',
          ar: 'آخر مراجعة: 2026-10-08. تصف هذه الصفحة ممارسات التحقق العامة قبل الدفع وليست ضماناً أو شهادة لأي مركبة محددة أو بديلاً عن تحققاتك. ما إذا كانت المركبة تطابق وثائقها وما إذا كان المصدّر طرفاً مقابلاً جيداً هما حكمان لا يمكن أن يصدرهما إلا أنت. أكّد أي تفصيل يؤثر على قرارك مع المصدّر، وحيثما يهم، مع طرف مستقل في الصين قبل تحويل الأموال.',
          ru: 'Последняя проверка: 2026-10-08. Эта страница описывает общую практику проверки перед оплатой и не является гарантией, сертификатом на конкретный автомобиль или заменой ваших собственных проверок. Совпадает ли автомобиль со своими документами и является ли экспортёр хорошим контрагентом — это суждения, которые можете вынести только вы. Подтверждайте любые детали, влияющие на решение, у экспортёра и, где это важно, у независимой стороны в Китае до перевода средств.',
          es: 'Última revisión: 2026-10-08. Esta página describe prácticas generales de verificación previa al pago y no es una garantía, un certificado de ningún vehículo concreto ni un sustituto de sus propias comprobaciones. Si un vehículo coincide con sus documentos y si un exportador es una buena contraparte son juicios que solo usted puede emitir. Confirme cualquier detalle que afecte a su decisión con el exportador y, donde importe, con una parte independiente en China antes de transferir fondos.',
        },
      ],
    },
  ],
};
