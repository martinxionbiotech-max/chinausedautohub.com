import type { L10n } from '../l10n';

// Guide 6 — FOB vs CFR vs CIF (Incoterms for vehicle export; no rate tables).

export const fobVsCifVsCfr = {
  slug: 'fob-vs-cif-vs-cfr',
  title: {
    en: 'FOB vs CIF vs CFR — Shipping Terms Explained',
    ar: '‏FOB مقابل CIF مقابل CFR — شرح مصطلحات الشحن',
    ru: 'FOB, CIF и CFR — объяснение условий поставки',
    es: 'FOB vs CIF vs CFR — términos de envío explicados',
  },
  description: {
    en: 'What FOB, CIF and CFR mean, what each includes, and how they differ when shipping a used vehicle from China.',
    ar: 'ما معنى FOB وCIF وCFR، وما يتضمنه كل منها، وكيف تختلف عند شحن مركبة مستعملة من الصين.',
    ru: 'Что означают FOB, CIF и CFR, что включает каждый термин и чем они различаются при доставке автомобиля из Китая.',
    es: 'Qué significan FOB, CIF y CFR, qué incluye cada uno y en qué se diferencian al enviar un vehículo usado desde China.',
  },
  h1: {
    en: 'FOB vs CIF vs CFR',
    ar: '‏FOB مقابل CIF مقابل CFR',
    ru: 'FOB, CIF и CFR',
    es: 'FOB vs CIF vs CFR',
  },
  summary: {
    en: 'What FOB, CIF and CFR mean and how they differ.',
    ar: 'ما معنى FOB وCIF وCFR وكيف تختلف.',
    ru: 'Что означают FOB, CIF и CFR и чем они различаются.',
    es: 'Qué significan FOB, CIF y CFR y en qué se diferencian.',
  },
  sections: [
    {
      heading: {
        en: 'What these terms are',
        ar: 'ما هذه المصطلحات',
        ru: 'Что это за термины',
        es: 'Qué son estos términos',
      },
      paragraphs: [
        {
          en: 'FOB, CFR and CIF are Incoterms — standard international trade terms that define who pays for and is responsible for goods at each stage of a shipment, and where the risk transfers from seller to buyer. They are widely used when importing vehicles.',
          ar: '‏FOB وCFR وCIF هي مصطلحات تجارية دولية (Incoterms) تحدد من يدفع ومن يتحمل مسؤولية البضائع في كل مرحلة من الشحن، وأين تنتقل المخاطرة من البائع إلى المشتري. وتُستخدم على نطاق واسع عند استيراد المركبات.',
          ru: 'FOB, CFR и CIF — это Инкотермс, стандартные международные торговые термины, определяющие, кто платит и отвечает за товар на каждом этапе перевозки и где риск переходит от продавца к покупателю. Они широко используются при импорте автомобилей.',
          es: 'FOB, CFR y CIF son Incoterms: términos comerciales internacionales estándar que definen quién paga y es responsable de la mercancía en cada etapa del envío, y dónde se transfiere el riesgo del vendedor al comprador. Se usan mucho al importar vehículos.',
        },
      ],
    },
    {
      heading: {
        en: 'FOB — Free on Board',
        ar: '‏FOB — تسليم على ظهر السفينة',
        ru: 'FOB — франко-борт',
        es: 'FOB — franco a bordo',
      },
      paragraphs: [
        {
          en: 'Under FOB, the seller delivers the goods on board the vessel at the origin port and clears them for export. The buyer is responsible for freight, insurance and everything after the goods are on board. Risk transfers to the buyer once the vehicle is loaded.',
          ar: 'بموجب FOB، يسلم البائع البضائع على ظهر السفينة في ميناء المنشأ ويخليصها للتصدير. ويتحمل المشتري مسؤولية الشحن والتأمين وكل شيء بعد صعود البضائع على متن السفينة. تنتقل المخاطرة إلى المشتري بمجرد تحميل المركبة.',
          ru: 'При FOB продавец доставляет товар на борт судна в порту отправления и оформляет его на экспорт. Покупатель отвечает за фрахт, страховку и всё после погрузки товара на борт. Риск переходит к покупателю после погрузки автомобиля.',
          es: 'Con FOB, el vendedor entrega la mercancía a bordo del buque en el puerto de origen y la despacha para exportación. El comprador es responsable del flete, el seguro y todo lo posterior a que la mercancía esté a bordo. El riesgo se transfiere al comprador una vez cargado el vehículo.',
        },
      ],
    },
    {
      heading: {
        en: 'CFR — Cost and Freight',
        ar: '‏CFR — التكلفة والشحن',
        ru: 'CFR — стоимость и фрахт',
        es: 'CFR — coste y flete',
      },
      paragraphs: [
        {
          en: 'Under CFR, the seller pays for the cost of the goods and the freight to the destination port. The buyer is responsible for insurance and for everything after the goods are loaded (the risk still transfers at loading). CFR includes freight but not insurance.',
          ar: 'بموجب CFR، يدفع البائع تكلفة البضائع والشحن إلى ميناء الوجهة. ويتحمل المشتري مسؤولية التأمين وكل شيء بعد تحميل البضائع (تنتقل المخاطرة عند التحميل). يشمل CFR الشحن دون التأمين.',
          ru: 'При CFR продавец оплачивает стоимость товара и фрахт до порта назначения. Покупатель отвечает за страховку и всё после погрузки (риск по-прежнему переходит при погрузке). CFR включает фрахт, но не страховку.',
          es: 'Con CFR, el vendedor paga el coste de la mercancía y el flete hasta el puerto de destino. El comprador es responsable del seguro y de todo después de la carga (el riesgo sigue transfiriéndose en la carga). CFR incluye el flete pero no el seguro.',
        },
      ],
    },
    {
      heading: {
        en: 'CIF — Cost, Insurance and Freight',
        ar: '‏CIF — التكلفة والتأمين والشحن',
        ru: 'CIF — стоимость, страхование и фрахт',
        es: 'CIF — coste, seguro y flete',
      },
      paragraphs: [
        {
          en: 'Under CIF, the seller pays for the cost of the goods, the freight and a minimum level of marine insurance to the destination port. The buyer is responsible for everything after the goods are loaded, but the seller arranges and pays for the freight and insurance.',
          ar: 'بموجب CIF، يدفع البائع تكلفة البضائع والشحن ومستوى أدنى من التأمين البحري إلى ميناء الوجهة. يتحمل المشتري مسؤولية كل شيء بعد تحميل البضائع، لكن البائع يرتب ويدفع الشحن والتأمين.',
          ru: 'При CIF продавец оплачивает стоимость товара, фрахт и минимальный уровень морской страховки до порта назначения. Покупатель отвечает за всё после погрузки, но продавец организует и оплачивает фрахт и страховку.',
          es: 'Con CIF, el vendedor paga el coste de la mercancía, el flete y un nivel mínimo de seguro marítimo hasta el puerto de destino. El comprador es responsable de todo después de la carga, pero el vendedor organiza y paga el flete y el seguro.',
        },
      ],
    },
    {
      heading: {
        en: 'How they compare',
        ar: 'كيف تقارن بينها',
        ru: 'Как они соотносятся',
        es: 'Cómo se comparan',
      },
      paragraphs: [
        {
          en: 'The key differences are what the seller arranges and pays for. FOB: the buyer pays freight and insurance from the origin port. CFR: the seller pays freight to the destination port, but the buyer arranges insurance. CIF: the seller pays freight and insurance to the destination port. In all three, the risk of loss or damage transfers to the buyer once the goods are loaded on the vessel.',
          ar: 'الاختلافات الأساسية هي ما يرتبه البائع ويدفعه. FOB: يدفع المشتري الشحن والتأمين من ميناء المنشأ. CFR: يدفع البائع الشحن إلى ميناء الوجهة، لكن المشتري يرتب التأمين. CIF: يدفع البائع الشحن والتأمين إلى ميناء الوجهة. في الثلاثة جميعها، تنتقل مخاطرة الفقد أو التلف إلى المشتري بمجرد تحميل البضائع على السفينة.',
          ru: 'Ключевое различие — что организует и оплачивает продавец. FOB: покупатель платит за фрахт и страховку от порта отправления. CFR: продавец платит фрахт до порта назначения, но страховку оформляет покупатель. CIF: продавец платит фрахт и страховку до порта назначения. Во всех трёх случаях риск утраты или повреждения переходит к покупателю после погрузки на борт.',
          es: 'Las diferencias clave son qué organiza y paga el vendedor. FOB: el comprador paga el flete y el seguro desde el puerto de origen. CFR: el vendedor paga el flete hasta el puerto de destino, pero el comprador gestiona el seguro. CIF: el vendedor paga el flete y el seguro hasta el puerto de destino. En los tres, el riesgo de pérdida o daño se transfiere al comprador una vez cargada la mercancía en el buque.',
        },
      ],
    },
    {
      heading: {
        en: 'How this affects your landed cost',
        ar: 'كيف يؤثر هذا على تكلفتك النهائية',
        ru: 'Как это влияет на итоговую стоимость',
        es: 'Cómo afecta esto a su coste de desembarco',
      },
      paragraphs: [
        {
          en: 'The term you agree affects which components are already included in the seller\'s price and which you must arrange and pay for yourself. Under CIF, freight and basic insurance are included in the seller\'s price; under FOB, you arrange both. Whatever the term, you still pay import duties, taxes and destination charges at your end.',
          ar: 'يؤثر المصطلح الذي تتفق عليه على المكونات المدرجة بالفعل في سعر البائع والتي يجب عليك ترتيبها ودفعها بنفسك. بموجب CIF، يُدرج الشحن والتأمين الأساسي في سعر البائع؛ وبموجب FOB ترتب أنت كليهما. مهما كان المصطلح، ما تزال تدفع الرسوم الجمركية والضرائب ورسوم الوجهة في جانبك.',
          ru: 'Согласованный термин определяет, какие компоненты уже включены в цену продавца, а какие вы организуете и оплачиваете сами. При CIF фрахт и базовая страховка включены в цену продавца; при FOB оба вы оформляете сами. Независимо от термина вы всё равно платите пошлины, налоги и сборы на своей стороне.',
          es: 'El término que acuerde afecta a qué componentes ya están incluidos en el precio del vendedor y cuáles debe gestionar y pagar usted. Con CIF, el flete y el seguro básico están incluidos en el precio del vendedor; con FOB, usted gestiona ambos. Sea cual sea el término, usted sigue pagando aranceles, impuestos y gastos de destino.',
        },
      ],
    },
    {
      heading: {
        en: 'Risk transfer explained',
        ar: 'شرح انتقال المخاطرة',
        ru: 'Переход риска: объяснение',
        es: 'La transferencia de riesgo explicada',
      },
      paragraphs: [
        {
          en: 'Under FOB, CFR and CIF, the risk of loss or damage passes from the seller to the buyer when the goods are loaded on board the vessel at the origin port. This is true even under CIF, where the seller pays for freight and insurance — the seller arranges and pays for them, but the risk has already moved to you.',
          ar: 'بموجب FOB وCFR وCIF، تنتقل مخاطرة الفقد أو التلف من البائع إلى المشتري عندما تُحمَّل البضائع على متن السفينة في ميناء المنشأ. وهذا صحيح حتى بموجب CIF، حيث يدفع البائع الشحن والتأمين — يرتب البائع ويدفع ثمنهما، لكن المخاطرة تكون قد انتقلت إليك بالفعل.',
          ru: 'При FOB, CFR и CIF риск утраты или повреждения переходит от продавца к покупателю, когда товар погружен на борт судна в порту отправления. Это верно и при CIF, где продавец платит за фрахт и страховку: продавец организует и оплачивает их, но риск уже перешёл к вам.',
          es: 'Con FOB, CFR y CIF, el riesgo de pérdida o daño pasa del vendedor al comprador cuando la mercancía se carga a bordo del buque en el puerto de origen. Esto es así incluso con CIF, donde el vendedor paga el flete y el seguro: el vendedor los organiza y paga, pero el riesgo ya se ha transferido a usted.',
        },
        {
          en: 'This is why it matters to arrange adequate insurance under FOB and CFR, where the seller is not responsible for insuring the shipment.',
          ar: 'ولهذا من المهم ترتيب تأمين كافٍ بموجب FOB وCFR، حيث لا يكون البائع مسؤولًا عن تأمين الشحنة.',
          ru: 'Поэтому при FOB и CFR важно оформить достаточную страховку, поскольку продавец не отвечает за страхование груза.',
          es: 'Por eso importa contratar un seguro adecuado con FOB y CFR, donde el vendedor no es responsable de asegurar el envío.',
        },
      ],
    },
    {
      heading: {
        en: 'Who pays for what: a breakdown',
        ar: 'من يدفع ماذا: تفصيل',
        ru: 'Кто за что платит: разбор',
        es: 'Quién paga qué: un desglose',
      },
      paragraphs: [
        {
          en: 'Think of the three terms as layers. FOB: the seller covers everything up to loading at the origin port; the buyer covers freight and insurance. CFR: the seller adds freight to the destination port, but the buyer still arranges insurance. CIF: the seller adds both freight and minimum insurance to the destination port.',
          ar: 'فكر في المصطلحات الثلاثة كطبقات. FOB: يغطي البائع كل شيء حتى التحميل في ميناء المنشأ؛ ويغطي المشتري الشحن والتأمين. CFR: يضيف البائع الشحن إلى ميناء الوجهة، لكن المشتري ما يزال يرتب التأمين. CIF: يضيف البائع كلا من الشحن والتأمين الأدنى إلى ميناء الوجهة.',
          ru: 'Думайте о трёх терминах как о слоях. FOB: продавец покрывает всё до погрузки в порту отправления; покупатель платит фрахт и страховку. CFR: продавец добавляет фрахт до порта назначения, но страховку по-прежнему оформляет покупатель. CIF: продавец добавляет и фрахт, и минимальную страховку до порта назначения.',
          es: 'Piense en los tres términos como capas. FOB: el vendedor cubre todo hasta la carga en el puerto de origen; el comprador paga el flete y el seguro. CFR: el vendedor añade el flete hasta el puerto de destino, pero el comprador sigue gestionando el seguro. CIF: el vendedor añade tanto el flete como un seguro mínimo hasta el puerto de destino.',
        },
        {
          en: 'Whatever the term, you still pay import duties, taxes and destination charges at your end — these are never covered by the seller.',
          ar: 'مهما كان المصطلح، ما تزال تدفع رسوم الاستيراد والضرائب ورسوم الوجهة في جانبك — وهذه لا يغطيها البائع أبدًا.',
          ru: 'Независимо от термина вы всё равно платите импортные пошлины, налоги и сборы на своей стороне — их никогда не покрывает продавец.',
          es: 'Sea cual sea el término, usted sigue pagando los aranceles, impuestos y gastos de destino — el vendedor nunca los cubre.',
        },
      ],
    },
    {
      heading: {
        en: 'How to choose the right term for a vehicle',
        ar: 'كيف تختار المصطلح المناسب للمركبة',
        ru: 'Как выбрать правильный термин для автомобиля',
        es: 'Cómo elegir el término adecuado para un vehículo',
      },
      paragraphs: [
        {
          en: 'Buyers who want control over freight and insurance often prefer FOB, arranging their own carrier and coverage. Buyers who want a simpler arrangement with freight included choose CFR, and those who want freight plus insurance included choose CIF. There is no single correct answer — it depends on your preference, experience and destination.',
          ar: 'المشترون الذين يريدون التحكم في الشحن والتأمين يفضلون غالبًا FOB، حيث يرتبون الناقل والتغطية بأنفسهم. والذين يريدون ترتيبًا أبسط مع الشحن مشمولًا يختارون CFR، والذين يريدون الشحن والتأمين معًا يختارون CIF. لا توجد إجابة واحدة صحيحة — يعتمد ذلك على تفضيلك وخبرتك ووجهتك.',
          ru: 'Покупатели, которым нужен контроль над фрахтом и страховкой, часто предпочитают FOB, организуя перевозчика и покрытие самостоятельно. Кто хочет проще — с включённым фрахтом — выбирает CFR, а кто хочет фрахт и страховку вместе — CIF. Единого правильного ответа нет — всё зависит от ваших предпочтений, опыта и страны назначения.',
          es: 'Los compradores que desean controlar el flete y el seguro suelen preferir FOB, gestionando su propio transportista y cobertura. Quienes quieren un acuerdo más sencillo con el flete incluido eligen CFR, y quienes quieren flete y seguro incluidos eligen CIF. No hay una única respuesta correcta: depende de su preferencia, experiencia y destino.',
        },
      ],
      links: [
        {
          slug: 'shipping',
          label: {
            en: 'How the vehicle is physically moved — see the Shipping guide',
            ar: 'كيف تُنقل المركبة ماديًا — راجع دليل الشحن',
            ru: 'Как автомобиль физически перевозится — см. руководство по доставке',
            es: 'Cómo se traslada físicamente el vehículo — consulte la guía de envío',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Incoterm Decision Matrix — which term suits the situation',
        ar: 'مصفوفة قرار مصطلحات التجارة — أي مصطلح يناسب الموقف',
        ru: 'Матрица решений по Инкотермс — какой термин подходит ситуации',
        es: 'Matriz de decisión de Incoterms — qué término conviene a la situación',
      },
      paragraphs: [
        {
          en: 'The term you choose should match how you want to control freight, insurance and risk. The matrix below rates each term\'s suitability for common situations — "Suitable", "Depends" or "Not typical" — with a short reason. These are conditional judgments, not universal rules: your destination, experience and preferences change the answer. Confirm the term in writing before booking.',
          ar: 'يجب أن يطابق المصطلح الذي تختاره كيف تريد التحكم في الشحن والتأمين والمخاطرة. تقيّم المصفوفة أدناه ملاءمة كل مصطلح للحالات الشائعة — «مناسب» أو «يعتمد» أو «غير معتاد» — مع سبب موجز. وهذه أحكام مشروطة لا قواعد عالمية: فوجهتك وخبرتك وتفضيلاتك تغيّر الإجابة. أكد المصطلح كتابيًا قبل الحجز.',
          ru: 'Выбранный термин должен соответствовать тому, как вы хотите контролировать фрахт, страховку и риск. Матрица ниже оценивает пригодность каждого термина для типовых ситуаций — «Подходит», «Зависит» или «Не характерно» — с краткой причиной. Это условные оценки, а не универсальные правила: ваша страна, опыт и предпочтения меняют ответ. Подтвердите термин письменно до бронирования.',
          es: 'El término que elija debe coincidir con cómo desea controlar el flete, el seguro y el riesgo. La matriz siguiente valora la idoneidad de cada término para situaciones comunes — «Adecuado», «Depende» o «No habitual» — con una razón breve. Son juicios condicionales, no reglas universales: su destino, experiencia y preferencias cambian la respuesta. Confirme el término por escrito antes de reservar.',
        },
      ],
      table: {
        headers: [
          { en: 'Situation', ar: 'الحالة', ru: 'Ситуация', es: 'Situación' },
          { en: 'FOB', ar: 'FOB', ru: 'FOB', es: 'FOB' },
          { en: 'CFR', ar: 'CFR', ru: 'CFR', es: 'CFR' },
          { en: 'CIF', ar: 'CIF', ru: 'CIF', es: 'CIF' },
        ],
        rows: [
          [
            { en: 'Buyer has their own freight forwarder', ar: 'للمشتري وكيل شحن خاص به', ru: 'У покупателя свой экспедитор', es: 'El comprador tiene su propio transitario' },
            { en: 'Suitable — you control freight and insurance through a forwarder you trust.', ar: 'مناسب — تتحكم في الشحن والتأمين عبر وكيل تثق به.', ru: 'Подходит — вы контролируете фрахт и страховку через проверенного экспедитора.', es: 'Adecuado — controla el flete y el seguro a través de un transitario de confianza.' },
            { en: 'Depends — your forwarder can still manage the destination leg, but the seller paying freight limits your control.', ar: 'يعتمد — يمكن لوكيلك إدارة مرحلة الوجهة، لكن دفع البائع للشحن يحد من تحكمك.', ru: 'Зависит — ваш экспедитор может вести участок до назначения, но оплата фрахта продавцом ограничивает ваш контроль.', es: 'Depende — su transitario aún puede gestionar el tramo de destino, pero que el vendedor pague el flete limita su control.' },
            { en: 'Not typical — the seller arranging freight and insurance works against having your own forwarder.', ar: 'غير معتاد — ترتيب البائع للشحن والتأمين يتعارض مع وجود وكيل شحن خاص بك.', ru: 'Не характерно — организация фрахта и страховки продавцом противоречит наличию собственного экспедитора.', es: 'No habitual — que el vendedor organice el flete y el seguro va en contra de tener su propio transitario.' },
          ],
          [
            { en: 'Seller arranges shipping', ar: 'البائع يرتب الشحن', ru: 'Доставку организует продавец', es: 'El vendedor organiza el envío' },
            { en: 'Not typical — FOB leaves freight and insurance to the buyer, not the seller.', ar: 'غير معتاد — يترك FOB الشحن والتأمين للمشتري لا البائع.', ru: 'Не характерно — FOB оставляет фрахт и страховку покупателю, а не продавцу.', es: 'No habitual — FOB deja el flete y el seguro al comprador, no al vendedor.' },
            { en: 'Suitable — the seller pays freight to the destination port.', ar: 'مناسب — يدفع البائع الشحن إلى ميناء الوجهة.', ru: 'Подходит — продавец платит фрахт до порта назначения.', es: 'Adecuado — el vendedor paga el flete hasta el puerto de destino.' },
            { en: 'Suitable — the seller pays freight plus minimum insurance.', ar: 'مناسب — يدفع البائع الشحن والتأمين الأدنى.', ru: 'Подходит — продавец платит фрахт и минимальную страховку.', es: 'Adecuado — el vendedor paga el flete y un seguro mínimo.' },
          ],
          [
            { en: 'Buyer wants their own insurance', ar: 'يريد المشتري تأمينه الخاص', ru: 'Покупатель хочет свою страховку', es: 'El comprador quiere su propio seguro' },
            { en: 'Suitable — you arrange your own coverage at the level you choose.', ar: 'مناسب — ترتب تغطيتك بنفسك بالمستوى الذي تختاره.', ru: 'Подходит — вы оформляете собственную страховку на выбранном уровне.', es: 'Adecuado — gestiona su propia cobertura al nivel que elija.' },
            { en: 'Suitable — insurance is left to you under CFR.', ar: 'مناسب — يُترك التأمين لك بموجب CFR.', ru: 'Подходит — при CFR страховка остаётся на вас.', es: 'Adecuado — el seguro queda en sus manos con CFR.' },
            { en: 'Depends — CIF includes only the seller\'s minimum cover, which may be less than you want.', ar: 'يعتمد — يتضمن CIF الحد الأدنى من تغطية البائع فقط، وقد يكون أقل مما تريد.', ru: 'Зависит — CIF включает лишь минимальное покрытие продавца, которого может быть недостаточно.', es: 'Depende — CIF solo incluye la cobertura mínima del vendedor, que puede ser menor de lo que desea.' },
          ],
          [
            { en: 'Experienced importer', ar: 'مستورد خبير', ru: 'Опытный импортёр', es: 'Importador experimentado' },
            { en: 'Suitable — control over freight and insurance suits buyers who know their routes and carriers.', ar: 'مناسب — التحكم في الشحن والتأمين يناسب المشترين الذين يعرفون مساراتهم وناقليهم.', ru: 'Подходит — контроль над фрахтом и страховкой подходит тем, кто знает свои маршруты и перевозчиков.', es: 'Adecuado — el control del flete y el seguro conviene a quien conoce sus rutas y transportistas.' },
            { en: 'Depends — workable if you only want the seller to handle freight.', ar: 'يعتمد — مجدٍ إذا كنت تريد من البائع تولي الشحن فقط.', ru: 'Зависит — применим, если вы хотите, чтобы продавец занимался только фрахтом.', es: 'Depende — viable si solo desea que el vendedor gestione el flete.' },
            { en: 'Depends — workable, but you accept the seller\'s minimum insurance.', ar: 'يعتمد — مجدٍ، لكنك تقبل الحد الأدنى من تأمين البائع.', ru: 'Зависит — применим, но вы принимаете минимальную страховку продавца.', es: 'Depende — viable, pero acepta el seguro mínimo del vendedor.' },
          ],
          [
            { en: 'First-time importer', ar: 'مستورد لأول مرة', ru: 'Импортёр впервые', es: 'Importador primerizo' },
            { en: 'Depends — more to arrange yourself while you are still learning.', ar: 'يعتمد — مزيد مما ترتبه بنفسك بينما ما تزال تتعلم.', ru: 'Зависит — больше оформлять самому, пока вы ещё учитесь.', es: 'Depende — más que gestionar usted mismo mientras aún aprende.' },
            { en: 'Depends — freight is handled, but you still arrange insurance.', ar: 'يعتمد — يُتولى الشحن، لكنك ما تزال ترتب التأمين.', ru: 'Зависит — фрахт урегулирован, но страховку вы оформляете сами.', es: 'Depende — el flete está gestionado, pero usted aún contrata el seguro.' },
            { en: 'Suitable — the seller handling freight and minimum insurance is simpler while you learn.', ar: 'مناسب — تولي البائع للشحن والتأمين الأدنى أبسط أثناء تعلمك.', ru: 'Подходит — организация фрахта и минимальной страховки продавцом проще, пока вы учитесь.', es: 'Adecuado — que el vendedor gestione el flete y un seguro mínimo es más simple mientras aprende.' },
          ],
          [
            { en: 'Single vehicle', ar: 'مركبة واحدة', ru: 'Один автомобиль', es: 'Un solo vehículo' },
            { en: 'Depends — choose on how much you want to arrange yourself.', ar: 'يعتمد — اختر حسب مقدار ما تريد ترتيبه بنفسك.', ru: 'Зависит — выбирайте по тому, сколько вы готовы организовывать сами.', es: 'Depende — elija según cuánto quiera gestionar usted mismo.' },
            { en: 'Depends — choose on how much you want to arrange yourself.', ar: 'يعتمد — اختر حسب مقدار ما تريد ترتيبه بنفسك.', ru: 'Зависит — выбирайте по тому, сколько вы готовы организовывать сами.', es: 'Depende — elija según cuánto quiera gestionar usted mismo.' },
            { en: 'Depends — choose on how much you want to arrange yourself.', ar: 'يعتمد — اختر حسب مقدار ما تريد ترتيبه بنفسك.', ru: 'Зависит — выбирайте по тому, сколько вы готовы организовывать сами.', es: 'Depende — elija según cuánto quiera gestionar usted mismo.' },
          ],
          [
            { en: 'Multiple vehicles', ar: 'مركبات متعددة', ru: 'Несколько автомобилей', es: 'Varios vehículos' },
            { en: 'Suitable — you manage consolidation and control the move.', ar: 'مناسب — تدير التجميع وتتحكم في النقل.', ru: 'Подходит — вы управляете консолидацией и контролируете перевозку.', es: 'Adecuado — gestiona la consolidación y controla el traslado.' },
            { en: 'Depends — the seller handles freight, but consolidation control is limited.', ar: 'يعتمد — يتولى البائع الشحن، لكن التحكم في التجميع محدود.', ru: 'Зависит — продавец ведёт фрахт, но контроль консолидации ограничен.', es: 'Depende — el vendedor gestiona el flete, pero el control de la consolidación es limitado.' },
            { en: 'Suitable — the seller handles more of the move when you prefer less involvement.', ar: 'مناسب — يتولى البائع جزءًا أكبر من النقل عندما تفضل مشاركة أقل.', ru: 'Подходит — продавец берёт на себя больше при перевозке, когда вы предпочитаете меньше участвовать.', es: 'Adecuado — el vendedor asume más del traslado cuando prefiere menos implicación.' },
          ],
          [
            { en: 'Container shipment', ar: 'شحنة حاويات', ru: 'Контейнерная отправка', es: 'Envío en contenedor' },
            { en: 'Depends — the term governs cost and risk, not the physical method.', ar: 'يعتمد — يحكم المصطلح التكلفة والمخاطرة لا الطريقة الفيزيائية.', ru: 'Зависит — термин управляет расходами и риском, а не физическим способом.', es: 'Depende — el término rige el coste y el riesgo, no el método físico.' },
            { en: 'Depends — the term governs cost and risk, not the physical method.', ar: 'يعتمد — يحكم المصطلح التكلفة والمخاطرة لا الطريقة الفيزيائية.', ru: 'Зависит — термин управляет расходами и риском, а не физическим способом.', es: 'Depende — el término rige el coste y el riesgo, no el método físico.' },
            { en: 'Depends — the term governs cost and risk, not the physical method.', ar: 'يعتمد — يحكم المصطلح التكلفة والمخاطرة لا الطريقة الفيزيائية.', ru: 'Зависит — термин управляет расходами и риском, а не физическим способом.', es: 'Depende — el término rige el coste y el riesgo, no el método físico.' },
          ],
          [
            { en: 'RoRo shipment', ar: 'شحنة RoRo', ru: 'Отправка RoRo', es: 'Envío RoRo' },
            { en: 'Depends — RoRo is a method, not an Incoterm; the term decides who pays freight and insurance.', ar: 'يعتمد — RoRo طريقة شحن لا مصطلحًا تجاريًا؛ فالمصطلح يحدد من يدفع الشحن والتأمين.', ru: 'Зависит — RoRo это способ, а не Инкотермс; термин решает, кто платит фрахт и страховку.', es: 'Depende — RoRo es un método, no un Incoterm; el término decide quién paga flete y seguro.' },
            { en: 'Depends — RoRo is a method, not an Incoterm; the term decides who pays freight and insurance.', ar: 'يعتمد — RoRo طريقة شحن لا مصطلحًا تجاريًا؛ فالمصطلح يحدد من يدفع الشحن والتأمين.', ru: 'Зависит — RoRo это способ, а не Инкотермс; термин решает, кто платит фрахт и страховку.', es: 'Depende — RoRo es un método, no un Incoterm; el término decide quién paga flete y seguro.' },
            { en: 'Depends — RoRo is a method, not an Incoterm; the term decides who pays freight and insurance.', ar: 'يعتمد — RoRo طريقة شحن لا مصطلحًا تجاريًا؛ فالمصطلح يحدد من يدفع الشحن والتأمين.', ru: 'Зависит — RoRo это способ, а не Инкотермс; термин решает, кто платит фрахт и страховку.', es: 'Depende — RoRo es un método, no un Incoterm; el término decide quién paga flete y seguro.' },
          ],
        ],
      },
      links: [
        {
          slug: 'landed-cost',
          label: {
            en: 'How the term affects your total cost — see the Landed Cost guide',
            ar: 'كيف يؤثر المصطلح على تكلفتك الإجمالية — راجع دليل التكلفة النهائية',
            ru: 'Как термин влияет на итоговую стоимость — см. руководство по итоговой стоимости',
            es: 'Cómo afecta el término a su coste total — consulte la guía de coste de desembarco',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Common misconceptions',
        ar: 'مفاهيم خاطئة شائعة',
        ru: 'Распространённые заблуждения',
        es: 'Conceptos erróneos comunes',
      },
      paragraphs: [
        {
          en: 'A common misconception is that CIF means the seller handles everything to your door — it does not; it only covers freight and minimum insurance to the destination port, and risk transfers at loading. Another is that FOB means the buyer has no obligations — the buyer still handles freight, insurance, duties, taxes and destination charges.',
          ar: 'من المفاهيم الخاطئة الشائعة أن CIF يعني أن البائع يتولى كل شيء حتى بابك — ليس كذلك؛ فهو يغطي فقط الشحن والتأمين الأدنى إلى ميناء الوجهة، وتنتقل المخاطرة عند التحميل. ومنها أيضًا أن FOB يعني عدم وجود التزامات على المشتري — بل ما يزال المشتري يتولى الشحن والتأمين والرسوم والضرائب ورسوم الوجهة.',
          ru: 'Распространённое заблуждение — что CIF означает, будто продавец отвечает за всё до вашей двери. Это не так: CIF покрывает только фрахт и минимальную страховку до порта назначения, а риск переходит при погрузке. Другое — что при FOB у покупателя нет обязательств: на самом деле он отвечает за фрахт, страховку, пошлины, налоги и сборы на стороне назначения.',
          es: 'Un error común es creer que CIF significa que el vendedor se encarga de todo hasta su puerta: no es así; solo cubre el flete y un seguro mínimo hasta el puerto de destino, y el riesgo se transfiere en la carga. Otro es que FOB significa que el comprador no tiene obligaciones: en realidad el comprador gestiona el flete, el seguro, los aranceles, los impuestos y los gastos de destino.',
        },
      ],
    },
    {
      heading: {
        en: 'How these terms appear in practice',
        ar: 'كيف تظهر هذه المصطلحات عمليًا',
        ru: 'Как эти термины применяются на практике',
        es: 'Cómo aparecen estos términos en la práctica',
      },
      paragraphs: [
        {
          en: 'In vehicle sourcing, a price may be quoted "FOB Shenzhen" (seller delivers to the vessel at Shenzhen and clears export) or "CIF Mombasa" (seller pays freight and insurance to Mombasa). The term tells you exactly where the seller\'s responsibility ends and yours begins.',
          ar: 'في توريد المركبات، قد يُقدَّم السعر "FOB شنجن" (يسلم البائع على السفينة في شنجن ويخليص التصدير) أو "CIF مومباسا" (يدفع البائع الشحن والتأمين إلى مومباسا). يخبرك المصطلح بالضبط أين تنتهي مسؤولية البائع وأين تبدأ مسؤوليتك.',
          ru: 'При подборе автомобилей цена может быть указана как «FOB Шэньчжэнь» (продавец доставляет на судно в Шэньчжэне и оформляет экспорт) или «CIF Момбаса» (продавец оплачивает фрахт и страховку до Момбасы). Термин точно указывает, где заканчивается ответственность продавца и начинается ваша.',
          es: 'En el abastecimiento de vehículos, un precio puede cotizarse «FOB Shenzhen» (el vendedor entrega en el buque en Shenzhen y despacha la exportación) o «CIF Mombasa» (el vendedor paga el flete y el seguro hasta Mombasa). El término le dice exactamente dónde termina la responsabilidad del vendedor y empieza la suya.',
        },
      ],
    },
    {
      heading: {
        en: 'Negotiating the right term',
        ar: 'التفاوض على المصطلح المناسب',
        ru: 'Согласование правильного термина',
        es: 'Negociar el término adecuado',
      },
      paragraphs: [
        {
          en: 'There is no universally best term. If you have a trusted carrier and want control over freight and insurance, FOB may suit you. If you prefer the seller to arrange more of the journey, CFR or CIF may be simpler. Discuss the option with us and choose the one that matches your experience and destination.',
          ar: 'لا يوجد مصطلح أفضل عالميًا. إذا كان لديك ناقل موثوق وتريد التحكم في الشحن والتأمين، فقد يناسبك FOB. وإذا كنت تفضل أن يرتب البائع جزءًا أكبر من الرحلة، فقد يكون CFR أو CIF أبسط. ناقش الخيار معنا واختر ما يناسب خبرتك ووجهتك.',
          ru: 'Единого лучшего термина нет. Если у вас есть надёжный перевозчик и вы хотите контролировать фрахт и страховку, вам может подойти FOB. Если вы предпочитаете, чтобы продавец организовывал большую часть пути, проще CFR или CIF. Обсудите вариант с нами и выберите подходящий для вашего опыта и страны назначения.',
          es: 'No existe un término universalmente mejor. Si tiene un transportista de confianza y quiere controlar el flete y el seguro, FOB puede convenirle. Si prefiere que el vendedor organice más del trayecto, CFR o CIF pueden ser más simples. Coméntelo con nosotros y elija el que encaje con su experiencia y destino.',
        },
      ],
    },
    {
      heading: {
        en: 'Terms and your total cost',
        ar: 'المصطلحات وتكلفتك الإجمالية',
        ru: 'Термины и ваша итоговая стоимость',
        es: 'Los términos y su coste total',
      },
      paragraphs: [
        {
          en: 'The term changes which components appear inside the seller\'s price and which you arrange yourself, but it does not change the total components of your landed cost — duties, taxes and destination charges are always yours. Use the term to understand what you are comparing, then budget the full landed cost.',
          ar: 'يغير المصطلح المكونات التي تظهر داخل سعر البائع والتي ترتبها بنفسك، لكنه لا يغير مكونات تكلفتك النهائية الإجمالية — فالرسوم والضرائب ورسوم الوجهة تبقى عليك دائمًا. استخدم المصطلح لفهم ما تقارنه، ثم ضَع ميزانية التكلفة النهائية الكاملة.',
          ru: 'Термин меняет, какие компоненты входят в цену продавца, а какие вы организуете сами, но не меняет общий состав итоговой стоимости — пошлины, налоги и сборы на стороне назначения всегда ваши. Используйте термин, чтобы понимать, что вы сравниваете, а затем бюджетируйте полную итоговую стоимость.',
          es: 'El término cambia qué componentes aparecen dentro del precio del vendedor y cuáles organiza usted, pero no cambia los componentes totales de su coste de desembarco: aranceles, impuestos y gastos de destino son siempre suyos. Use el término para entender qué compara y luego presupueste el coste de desembarco completo.',
        },
      ],
    },
    {
      heading: {
        en: 'A quick comparison in words',
        ar: 'مقارنة سريعة بالكلمات',
        ru: 'Быстрое сравнение словами',
        es: 'Una comparación rápida en palabras',
      },
      paragraphs: [
        {
          en: 'FOB: the seller loads the vehicle and clears export; you pay freight and insurance. CFR: the seller adds freight to the destination port; you pay insurance. CIF: the seller adds both freight and insurance. The risk passes to you at loading in every case, and duties and taxes are always yours.',
          ar: '‏FOB: يحمّل البائع المركبة ويخليص التصدير؛ وتدفع أنت الشحن والتأمين. CFR: يضيف البائع الشحن إلى ميناء الوجهة؛ وتدفع أنت التأمين. CIF: يضيف البائع كلا من الشحن والتأمين. تنتقل المخاطرة إليك عند التحميل في جميع الحالات، والرسوم والضرائب تبقى عليك دائمًا.',
          ru: 'FOB: продавец грузит автомобиль и оформляет экспорт; вы платите фрахт и страховку. CFR: продавец добавляет фрахт до порта назначения; вы платите страховку. CIF: продавец добавляет и фрахт, и страховку. Риск переходит к вам при погрузке в любом случае, а пошлины и налоги всегда ваши.',
          es: 'FOB: el vendedor carga el vehículo y despacha la exportación; usted paga flete y seguro. CFR: el vendedor añade el flete hasta el puerto de destino; usted paga el seguro. CIF: el vendedor añade flete y seguro. El riesgo pasa a usted en la carga en todos los casos, y los aranceles e impuestos son siempre suyos.',
        },
      ],
    },
    {
      heading: {
        en: 'Incoterms and documentation',
        ar: 'مصطلحات التجارة والوثائق',
        ru: 'Инкотермс и документация',
        es: 'Incoterms y documentación',
      },
      paragraphs: [
        {
          en: 'The term you agree is stated on the commercial invoice and the quote, so both parties share the same understanding of who pays for and is responsible for each leg. Make sure the term is written clearly on your paperwork — it is the reference if anything is disputed later.',
          ar: 'يُذكر المصطلح الذي تتفق عليه في الفاتورة التجارية وعرض السعر، بحيث يتشارك الطرفان نفس الفهم لمن يدفع ومن يتحمل مسؤولية كل مرحلة. تأكد من كتابة المصطلح بوضوح في أوراقك — فهو المرجع إذا حدث أي خلاف لاحقًا.',
          ru: 'Согласованный термин указывается в коммерческом инвойсе и расчёте, чтобы обе стороны одинаково понимали, кто платит и отвечает за каждый участок. Убедитесь, что термин чётко указан в документах, — это ориентир при возможных спорах позже.',
          es: 'El término acordado se indica en la factura comercial y la cotización, para que ambas partes compartan la misma comprensión de quién paga y es responsable de cada tramo. Asegúrese de que el término figure con claridad en su documentación: es la referencia si algo se disputa después.',
        },
      ],
    },
    {
      heading: {
        en: 'Getting the term in writing',
        ar: 'تثبيت المصطلح كتابيًا',
        ru: 'Фиксация термина письменно',
        es: 'Dejar el término por escrito',
      },
      paragraphs: [
        {
          en: 'Always confirm the term in writing before the shipment is booked — the term, the ports, and what each side covers. A written confirmation removes ambiguity and is the simplest way to avoid a misunderstanding about who arranges freight, insurance or clearance.',
          ar: 'أكد دائمًا المصطلح كتابيًا قبل حجز الشحنة — المصطلح والموانئ وما يغطيه كل طرف. الإثبات الكتابي يزيل الغموض وهو أبسط طريقة لتجنب سوء الفهم حول من يرتب الشحن أو التأمين أو التخليص.',
          ru: 'Всегда подтверждайте термин письменно до бронирования отправки — сам термин, порты и что покрывает каждая сторона. Письменное подтверждение устраняет неоднозначность и является самым простым способом избежать недопонимания о том, кто организует фрахт, страховку или оформление.',
          es: 'Confirme siempre el término por escrito antes de reservar el envío: el término, los puertos y qué cubre cada parte. Una confirmación escrita elimina la ambigüedad y es la forma más simple de evitar malentendidos sobre quién gestiona el flete, el seguro o el despacho.',
        },
      ],
    },
    {
      heading: {
        en: 'A note on rates',
        ar: 'ملاحظة حول الأسعار',
        ru: 'Замечание о тарифах',
        es: 'Una nota sobre las tarifas',
      },
      paragraphs: [
        {
          en: 'Freight and insurance rates are not fixed — they depend on the vehicle, the route, the shipping method and the market at the time of shipment. We do not publish rate tables; instead, the relevant figures are confirmed when you request a quote.',
          ar: 'أسعار الشحن والتأمين ليست ثابتة — فهي تعتمد على المركبة والمسار وطريقة الشحن والسوق وقت الشحن. لا ننشر جداول أسعار؛ بل تُؤكد الأرقام ذات الصلة عند طلب عرض سعر.',
          ru: 'Тарифы на фрахт и страховку не фиксированы — они зависят от автомобиля, маршрута, способа доставки и рынка на момент отправки. Мы не публикуем таблицы тарифов; соответствующие цифры подтверждаются при запросе расчёта.',
          es: 'Las tarifas de flete y seguro no son fijas: dependen del vehículo, la ruta, el método de envío y el mercado en el momento del envío. No publicamos tablas de tarifas; las cifras pertinentes se confirman al solicitar la cotización.',
        },
      ],
    },
    {
      heading: {
        en: 'Exceptions',
        ar: 'استثناءات',
        ru: 'Исключения',
        es: 'Excepciones',
      },
      paragraphs: [
        {
          en: 'The term is only about cost and risk up to the destination port — it never covers import duties, taxes or destination charges, whatever term you choose. Some buyers also use terms beyond FOB/CFR/CIF for specific arrangements; the same principle applies: read what each term includes and confirm it in writing.',
          ar: 'المصطلح يتعلق فقط بالتكلفة والمخاطرة حتى ميناء الوجهة — فهو لا يغطي أبدًا رسوم الاستيراد أو الضرائب أو رسوم الوجهة، أيًا كان المصطلح الذي تختاره. كما يستخدم بعض المشترين مصطلحات أخرى غير FOB/CFR/CIF لترتيبات محددة؛ وينطبق المبدأ نفسه: اقرأ ما يتضمنه كل مصطلح وأكده كتابيًا.',
          ru: 'Термин касается только расходов и риска до порта назначения — он никогда не покрывает импортные пошлины, налоги или сборы в стране назначения, какой бы термин вы ни выбрали. Некоторые покупатели также используют термины помимо FOB/CFR/CIF для особых схем; принцип тот же: читайте, что включает термин, и подтверждайте письменно.',
          es: 'El término solo atañe al coste y al riesgo hasta el puerto de destino: nunca cubre los aranceles de importación, los impuestos ni los gastos de destino, elija el término que elija. Algunos compradores también usan términos más allá de FOB/CFR/CIF para acuerdos concretos; el principio es el mismo: lea qué incluye cada término y confírmelo por escrito.',
        },
      ],
    },
    {
      heading: {
        en: 'Practical checklist',
        ar: 'قائمة تحقق عملية',
        ru: 'Практический чек-лист',
        es: 'Lista práctica',
      },
      checklist: [
        { en: 'Choose a term that matches your control preference and experience.', ar: 'اختر مصطلحًا يطابق تفضيلك في التحكم وخبرتك.', ru: 'Выберите термин, соответствующий вашим предпочтениям по контролю и опыту.', es: 'Elija un término acorde a su preferencia de control y experiencia.' },
        { en: 'Confirm the term, the ports and what each side covers — in writing.', ar: 'أكد المصطلح والموانئ وما يغطيه كل طرف — كتابيًا.', ru: 'Подтвердите термин, порты и что покрывает каждая сторона — письменно.', es: 'Confirme el término, los puertos y qué cubre cada parte — por escrito.' },
        { en: 'Remember duties, taxes and destination charges are always yours.', ar: 'تذكر أن الرسوم والضرائب ورسوم الوجهة عليك دائمًا.', ru: 'Помните: пошлины, налоги и сборы на стороне назначения всегда ваши.', es: 'Recuerde que aranceles, impuestos y gastos de destino son siempre suyos.' },
        { en: 'Under FOB or CFR, arrange your own adequate insurance.', ar: 'بموجب FOB أو CFR، رتب تأمينك الكافي بنفسك.', ru: 'При FOB или CFR оформите собственную достаточную страховку.', es: 'Con FOB o CFR, contrate usted un seguro adecuado.' },
      ],
    },
    {
      heading: {
        en: 'Related market considerations',
        ar: 'اعتبارات السوق ذات الصلة',
        ru: 'Связанные соображения по рынку',
        es: 'Consideraciones de mercado relacionadas',
      },
      paragraphs: [
        {
          en: 'Destination duties, taxes and charges — which no Incoterm covers — are maintained per country on the Market sub-site, where each rule carries a source and last-checked date.',
          ar: 'رسوم الوجهة والضرائب والتكاليف — التي لا يغطيها أي مصطلح تجاري — تُصان لكل بلد في الموقع الفرعي للأسواق، حيث يحمل كل حكم مصدره وتاريخ آخر فحص.',
          ru: 'Пошлины, налоги и сборы в стране назначения — которые не покрывает ни один Инкотермс — ведутся по странам на подсайте Market, где каждое правило имеет источник и дату последней проверки.',
          es: 'Los aranceles, impuestos y gastos de destino — que ningún Incoterm cubre — se mantienen por país en el subsitio Market, donde cada norma lleva fuente y fecha de última comprobación.',
        },
      ],
      links: [
        {
          href: 'https://market.chinausedautohub.com/',
          label: {
            en: 'Destination duties and taxes by country — Market sub-site',
            ar: 'رسوم وضرائب الوجهة حسب البلد — الموقع الفرعي للأسواق',
            ru: 'Пошлины и налоги страны назначения по странам — подсайт Market',
            es: 'Aranceles e impuestos de destino por país — subsitio Market',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Related vehicle considerations',
        ar: 'اعتبارات المركبة ذات الصلة',
        ru: 'Связанные соображения по автомобилю',
        es: 'Consideraciones de vehículo relacionadas',
      },
      paragraphs: [
        {
          en: 'The term interacts with how the vehicle is physically moved — see the Shipping guide for RoRo versus container. The term\'s cost impact flows into your total landed cost — see the Landed Cost guide.',
          ar: 'يتفاعل المصطلح مع كيفية نقل المركبة ماديًا — راجع دليل الشحن للمقارنة بين RoRo والحاوية. ويتدفق أثر تكلفة المصطلح إلى تكلفتك النهائية الإجمالية — راجع دليل التكلفة النهائية.',
          ru: 'Термин взаимодействует с тем, как автомобиль физически перевозится, — см. руководство по доставке (RoRo или контейнер). Влияние термина на расходы входит в итоговую стоимость — см. руководство по итоговой стоимости.',
          es: 'El término interactúa con cómo se mueve físicamente el vehículo: consulte la guía de envío para RoRo frente a contenedor. El impacto de coste del término entra en su coste de desembarco total: consulte la guía de coste de desembarco.',
        },
      ],
      links: [
        {
          slug: 'shipping',
          label: {
            en: 'RoRo vs container — Shipping guide',
            ar: 'RoRo مقابل الحاوية — دليل الشحن',
            ru: 'RoRo или контейнер — руководство по доставке',
            es: 'RoRo frente a contenedor — guía de envío',
          },
        },
        {
          slug: 'landed-cost',
          label: {
            en: 'How the term affects total cost — Landed Cost guide',
            ar: 'كيف يؤثر المصطلح على التكلفة الإجمالية — دليل التكلفة النهائية',
            ru: 'Как термин влияет на итоговую стоимость — руководство по итоговой стоимости',
            es: 'Cómo afecta el término al coste total — guía de coste de desembarco',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Related tools',
        ar: 'أدوات ذات صلة',
        ru: 'Связанные инструменты',
        es: 'Herramientas relacionadas',
      },
      paragraphs: [
        {
          en: 'The FOB/CFR/CIF calculator on the Tools sub-site structures how the term splits cost between parties. It estimates; final figures are confirmed at quote time.',
          ar: 'تهيكل حاسبة FOB/CFR/CIF في الموقع الفرعي للأدوات كيف يقسم المصطلح التكلفة بين الأطراف. وهي تقدّر؛ وتؤكد الأرقام النهائية عند عرض السعر.',
          ru: 'Калькулятор FOB/CFR/CIF на подсайте инструментов структурирует, как термин делит расходы между сторонами. Он оценивает; итоговые цифры подтверждаются при расчёте.',
          es: 'La calculadora FOB/CFR/CIF del subsitio de herramientas estructura cómo reparte el término el coste entre las partes. Estima; las cifras finales se confirman al cotizar.',
        },
      ],
      links: [
        {
          href: 'https://tool.chinausedautohub.com/fob-cfr-cif-calculator/',
          label: {
            en: 'FOB/CFR/CIF Calculator',
            ar: 'حاسبة FOB/CFR/CIF',
            ru: 'Калькулятор FOB/CFR/CIF',
            es: 'Calculadora FOB/CFR/CIF',
          },
        },
      ],
    },
    {
      heading: {
        en: 'Reliable sources',
        ar: 'مصادر موثوقة',
        ru: 'Надёжные источники',
        es: 'Fuentes fiables',
      },
      paragraphs: [
        {
          en: 'The Incoterm definitions here follow the standard international trade terms. Freight and insurance figures are not fixed; they are confirmed from current sources at quote time, and destination duties and taxes are sourced on the Market sub-site. We do not publish rate tables.',
          ar: 'تتبع تعريفات مصطلحات التجارة الواردة هنا المصطلحات التجارية الدولية القياسية. أرقام الشحن والتأمين ليست ثابتة؛ تؤكد من مصادر حالية عند عرض السعر، وتصدر رسوم وضرائب الوجهة من الموقع الفرعي للأسواق. لا ننشر جداول أسعار.',
          ru: 'Определения Инкотермс здесь следуют стандартным международным торговым терминам. Цифры по фрахту и страховке не фиксированы; они подтверждаются из актуальных источников при расчёте, а пошлины и налоги страны назначения берутся на подсайте Market. Мы не публикуем тарифные таблицы.',
          es: 'Las definiciones de Incoterms aquí siguen los términos comerciales internacionales estándar. Las cifras de flete y seguro no son fijas; se confirman de fuentes actuales al cotizar, y los aranceles e impuestos de destino proceden del subsitio Market. No publicamos tablas de tarifas.',
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
          en: 'Last reviewed: 2026-10-04. This guide explains trade terms for vehicle export; it contains no fixed rates or unverified claims. Confirm the term, ports and figures in writing with a current quote before booking.',
          ar: 'آخر مراجعة: 2026-10-04. يشرح هذا الدليل مصطلحات التجارة لتصدير المركبات؛ ولا يحتوي على أسعار ثابتة أو ادعاءات غير مُتحقق منها. أكد المصطلح والموانئ والأرقام كتابيًا بعرض سعر حالي قبل الحجز.',
          ru: 'Последняя проверка: 2026-10-04. Это руководство объясняет торговые термины для экспорта автомобилей; оно не содержит фиксированных тарифов или непроверенных утверждений. Подтвердите термин, порты и цифры письменно актуальным расчётом до бронирования.',
          es: 'Última revisión: 2026-10-04. Esta guía explica los términos comerciales para la exportación de vehículos; no contiene tarifas fijas ni afirmaciones no verificadas. Confirme el término, los puertos y las cifras por escrito con una cotización actual antes de reservar.',
        },
      ],
    },
  ],
};
