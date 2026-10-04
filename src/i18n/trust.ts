import type { L10n } from './l10n';

// Trust / information-policy page. Distinguishes clearly between the four
// confidence levels defined in the vehicle data layer (PHASE 9/17): Verified,
// Provided, Estimated, Not Available.

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
    en: 'How vehicle information is collected and published, and how we distinguish between verified, provided, estimated and not-available details.',
    ar: 'كيف تُجمع معلومات المركبات وتُنشر، وكيف نميز بين التفاصيل الموثقة والمقدَّمة والمقدَّرة وغير المتوفرة.',
    ru: 'Как собирается и публикуется информация об автомобилях и как мы различаем подтверждённые, предоставленные, оценочные и недоступные данные.',
    es: 'Cómo se recopila y publica la información de los vehículos, y cómo distinguimos entre detalles verificados, facilitados, estimados y no disponibles.',
  },
  h1: {
    en: 'Trust & Information',
    ar: 'الثقة والمعلومات',
    ru: 'Доверие и информация',
    es: 'Confianza e información',
  },
  intro: {
    en: 'We publish only the vehicle information we hold and say clearly where each detail comes from. This page explains how information is collected, how we treat it, and what the confidence levels on a listing mean.',
    ar: 'ننشر فقط معلومات المركبات التي نحتفظ بها ونوضح بوضوح مصدر كل تفصيل. تشرح هذه الصفحة كيف تُجمع المعلومات وكيف نتعامل معها وما تعنيه مستويات الثقة في الإعلان.',
    ru: 'Мы публикуем только имеющуюся информацию об автомобилях и прямо указываем, откуда взята каждая деталь. Эта страница объясняет, как собирается информация, как мы с ней работаем и что означают уровни достоверности в объявлении.',
    es: 'Publicamos únicamente la información del vehículo que tenemos e indicamos claramente de dónde procede cada detalle. Esta página explica cómo se recopila la información, cómo la tratamos y qué significan los niveles de confianza de un anuncio.',
  },
  confidenceHeading: {
    en: 'Information confidence levels',
    ar: 'مستويات ثقة المعلومات',
    ru: 'Уровни достоверности информации',
    es: 'Niveles de confianza de la información',
  },
  confidenceIntro: {
    en: 'Every vehicle detail on a listing is marked with one of four confidence levels, so you know how much to rely on it.',
    ar: 'يُعلَّم كل تفصيل في المركبة داخل الإعلان بواحد من أربعة مستويات ثقة، حتى تعرف مدى الاعتماد عليه.',
    ru: 'Каждая деталь автомобиля в объявлении помечена одним из четырёх уровней достоверности, чтобы вы понимали, насколько ей можно доверять.',
    es: 'Cada detalle del vehículo en un anuncio está marcado con uno de cuatro niveles de confianza, para que sepa cuánto puede confiar en él.',
  },
  confidenceLevels: [
    {
      key: 'verified',
      label: {
        en: 'Verified',
        ar: 'موثَّق',
        ru: 'Подтверждено',
        es: 'Verificado',
      },
      text: {
        en: 'A detail confirmed against a reliable source or document we hold — for example, a VIN or registration document.',
        ar: 'تفصيل مؤكد من مصدر موثوق أو وثيقة نحتفظ بها — مثل رقم الهيكل (VIN) أو وثيقة التسجيل.',
        ru: 'Деталь, подтверждённая надёжным источником или документом, который у нас есть, — например, VIN или документ о регистрации.',
        es: 'Un detalle confirmado con una fuente fiable o un documento que tenemos; por ejemplo, un VIN o un documento de matriculación.',
      },
    },
    {
      key: 'provided',
      label: {
        en: 'Provided',
        ar: 'مقدَّم',
        ru: 'Предоставлено',
        es: 'Facilitado',
      },
      text: {
        en: 'A detail supplied by the source (seller, dealer or data provider) that we have not independently verified.',
        ar: 'تفصيل مقدَّم من المصدر (البائع أو التاجر أو مزود البيانات) لم نتحقق منه بشكل مستقل.',
        ru: 'Деталь, предоставленная источником (продавцом, дилером или поставщиком данных), которую мы не проверяли независимо.',
        es: 'Un detalle facilitado por la fuente (vendedor, concesionario o proveedor de datos) que no hemos verificado de forma independiente.',
      },
    },
    {
      key: 'estimated',
      label: {
        en: 'Estimated',
        ar: 'مقدَّر',
        ru: 'Оценочно',
        es: 'Estimado',
      },
      text: {
        en: 'A value we derive or approximate where the exact figure is not available.',
        ar: 'قيمة نستنتجها أو نقرّبها عندما لا يتوفر الرقم الدقيق.',
        ru: 'Значение, которое мы выводим или приблизительно оцениваем, когда точная цифра недоступна.',
        es: 'Un valor que deducimos o aproximamos cuando la cifra exacta no está disponible.',
      },
    },
    {
      key: 'not_available',
      label: {
        en: 'Not Available',
        ar: 'غير متوفر',
        ru: 'Недоступно',
        es: 'No disponible',
      },
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
        en: 'How Vehicle Information Is Collected',
        ar: 'كيف تُجمع معلومات المركبات',
        ru: 'Как собирается информация об автомобилях',
        es: 'Cómo se recopila la información del vehículo',
      },
      paragraphs: [
        {
          en: 'We collect vehicle information from the sources we work with — sellers, dealers and data providers in China\'s market. Each listing records what we received and where it came from.',
          ar: 'نجمع معلومات المركبات من المصادر التي نتعامل معها — البائعون والتجار ومزودو البيانات في السوق الصيني. يسجل كل إعلان ما استلمناه ومن أين جاء.',
          ru: 'Мы собираем информацию об автомобилях из источников, с которыми работаем, — продавцов, дилеров и поставщиков данных на китайском рынке. В каждом объявлении фиксируется, что мы получили и откуда.',
          es: 'Recopilamos la información de los vehículos de las fuentes con las que trabajamos: vendedores, concesionarios y proveedores de datos del mercado chino. Cada anuncio registra lo que recibimos y de dónde procede.',
        },
        {
          en: 'We do not generate or guess specifications, condition or history. Where we do not hold a detail, we mark it as not available.',
          ar: 'لا نولّد أو نخمّن المواصفات أو الحالة أو السجل. عندما لا نحتفظ بتفصيل، نعلّمه بأنه غير متوفر.',
          ru: 'Мы не выдумываем и не угадываем характеристики, состояние или историю. Если у нас нет какой-то детали, мы помечаем её как недоступную.',
          es: 'No generamos ni adivinamos especificaciones, estado o historial. Cuando no tenemos un detalle, lo marcamos como no disponible.',
        },
      ],
    },
    {
      heading: {
        en: 'Vehicle Data Policy',
        ar: 'سياسة بيانات المركبات',
        ru: 'Политика данных об автомобилях',
        es: 'Política de datos del vehículo',
      },
      paragraphs: [
        {
          en: 'We publish only the vehicle information we hold. Vehicle identity, mileage and price shown on a listing are the values supplied by the source and are marked with their confidence level.',
          ar: 'ننشر فقط معلومات المركبات التي نحتفظ بها. هوية المركبة والمسافة المقطوعة والسعر المعروض في الإعلان هي القيم المقدَّمة من المصدر وتُعلَّم بمستوى ثقتها.',
          ru: 'Мы публикуем только имеющуюся информацию. Идентификация автомобиля, пробег и цена в объявлении — это значения, предоставленные источником, и они помечены уровнем достоверности.',
          es: 'Publicamos solo la información del vehículo que tenemos. La identidad, el kilometraje y el precio mostrados en un anuncio son los valores facilitados por la fuente y están marcados con su nivel de confianza.',
        },
        {
          en: 'Where a field is not available, it is marked as not available rather than filled with an assumption.',
          ar: 'عندما لا يتوفر حقل، يُعلَّم بأنه غير متوفر بدلاً من ملئه بافتراض.',
          ru: 'Если поле недоступно, оно помечается как недоступное, а не заполняется предположением.',
          es: 'Cuando un campo no está disponible, se marca como no disponible en lugar de rellenarse con una suposición.',
        },
      ],
    },
    {
      heading: {
        en: 'Inspection Policy',
        ar: 'سياسة الفحص',
        ru: 'Политика проверки',
        es: 'Política de inspección',
      },
      paragraphs: [
        {
          en: 'Inspection information is presented only when we hold it. Inspection availability depends on the vehicle and buyer requirements; not every vehicle has a full inspection report.',
          ar: 'تُعرض معلومات الفحص فقط عندما نحتفظ بها. يعتمد توفر الفحص على المركبة ومتطلبات المشتري؛ ليست كل مركبة لديها تقرير فحص كامل.',
          ru: 'Информация о проверке показывается только при её наличии. Доступность проверки зависит от автомобиля и требований покупателя; не у каждого автомобиля есть полный отчёт.',
          es: 'La información de inspección se presenta solo cuando la tenemos. La disponibilidad depende del vehículo y los requisitos del comprador; no todos los vehículos tienen un informe completo.',
        },
        {
          en: 'We do not claim that every vehicle has been inspected, and we do not present inspection data we do not hold.',
          ar: 'لا ندّعي أن كل مركبة خضعت للفحص، ولا نعرض بيانات فحص لا نحتفظ بها.',
          ru: 'Мы не заявляем, что каждый автомобиль проверен, и не показываем данные проверки, которых у нас нет.',
          es: 'No afirmamos que todos los vehículos hayan sido inspeccionados y no presentamos datos de inspección que no tenemos.',
        },
      ],
    },
    {
      heading: {
        en: 'Pricing Policy',
        ar: 'سياسة التسعير',
        ru: 'Политика ценообразования',
        es: 'Política de precios',
      },
      paragraphs: [
        {
          en: 'Listed prices are asking prices for the vehicle and are provided for information. They may vary based on configuration, shipping, taxes and destination, and do not include landed costs.',
          ar: 'الأسعار المدرجة هي أسعار طلب المركبة وتُقدَّم للمعلومات. قد تختلف حسب التجهيز والشحن والضرائب والوجهة، ولا تشمل تكاليف الوصول النهائية.',
          ru: 'Указанные цены — это запрашиваемая цена за автомобиль, приведённая для информации. Она может меняться в зависимости от комплектации, доставки, налогов и страны назначения и не включает итоговую стоимость.',
          es: 'Los precios listados son precios de venta del vehículo y se ofrecen a título informativo. Pueden variar según la configuración, el envío, los impuestos y el destino, y no incluyen los costes de desembarco.',
        },
        {
          en: 'We confirm final pricing when you request a quote. We do not publish fixed shipping or customs rates because they depend on the destination.',
          ar: 'نؤكد السعر النهائي عند طلب عرض سعر. لا ننشر أسعار شحن أو رسوم جمركية ثابتة لأنها تعتمد على الوجهة.',
          ru: 'Мы подтверждаем итоговую цену при запросе расчёта. Мы не публикуем фиксированные тарифы на доставку или пошлины, поскольку они зависят от страны назначения.',
          es: 'Confirmamos el precio final al solicitar una cotización. No publicamos tarifas fijas de envío o aduana porque dependen del destino.',
        },
      ],
    },
    {
      heading: {
        en: 'Availability Policy',
        ar: 'سياسة التوفر',
        ru: 'Политика доступности',
        es: 'Política de disponibilidad',
      },
      paragraphs: [
        {
          en: 'A listing does not guarantee availability. Status can change as vehicles are reserved or sold. We confirm availability with the source before any order is placed.',
          ar: 'الإعلان لا يضمن التوفر. يمكن أن تتغير الحالة عندما تُحجز المركبات أو تُباع. نؤكد التوفر مع المصدر قبل تقديم أي طلب.',
          ru: 'Объявление не гарантирует наличие. Статус может меняться, когда автомобили бронируются или продаются. Мы подтверждаем наличие у источника до оформления заказа.',
          es: 'Un anuncio no garantiza la disponibilidad. El estado puede cambiar cuando los vehículos se reservan o venden. Confirmamos la disponibilidad con la fuente antes de realizar cualquier pedido.',
        },
        {
          en: 'Sold vehicles are retained on the site for reference and are clearly marked as sold.',
          ar: 'تُحتفظ بالمركبات المباعة في الموقع للرجوع إليها وتُعلَّم بوضوح بأنها مباعة.',
          ru: 'Проданные автомобили остаются на сайте для справки и явно помечаются как проданные.',
          es: 'Los vehículos vendidos se conservan en el sitio como referencia y se marcan claramente como vendidos.',
        },
      ],
    },
    {
      heading: {
        en: 'Export Documentation',
        ar: 'وثائق التصدير',
        ru: 'Экспортная документация',
        es: 'Documentación de exportación',
      },
      paragraphs: [
        {
          en: 'We help prepare the export documentation your destination requires. Exact requirements depend on the vehicle, the export arrangement and the destination country, and are confirmed during the quote.',
          ar: 'نساعد في تجهيز وثائق التصدير التي تتطلبها وجهتك. تعتمد المتطلبات الدقيقة على المركبة وترتيب التصدير وبلد الوجهة، وتُؤكد أثناء تقديم عرض السعر.',
          ru: 'Мы помогаем подготовить экспортные документы, необходимые для вашей страны назначения. Точные требования зависят от автомобиля, схемы экспорта и страны назначения и подтверждаются при расчёте.',
          es: 'Ayudamos a preparar la documentación de exportación que requiere su destino. Los requisitos exactos dependen del vehículo, el acuerdo de exportación y el país de destino, y se confirman durante la cotización.',
        },
      ],
    },
    {
      heading: {
        en: 'Buyer Communication',
        ar: 'التواصل مع المشتري',
        ru: 'Коммуникация с покупателем',
        es: 'Comunicación con el comprador',
      },
      paragraphs: [
        {
          en: 'We respond to enquiries using the details you provide, and use them only to respond to your request. We do not share your details with third parties for marketing.',
          ar: 'نرد على الاستفسارات باستخدام البيانات التي تقدمها، ونستخدمها فقط للرد على طلبك. لا نشارك بياناتك مع أطراف ثالثة لأغراض التسويق.',
          ru: 'Мы отвечаем на запросы, используя предоставленные вами данные, и используем их только для ответа на ваш запрос. Мы не передаём ваши данные третьим лицам для маркетинга.',
          es: 'Respondemos a las consultas con los datos que usted facilita y los usamos solo para responder a su solicitud. No compartimos sus datos con terceros con fines de marketing.',
        },
        {
          en: 'We confirm availability, price and export details with you before you commit to anything.',
          ar: 'نؤكد التوفر والسعر وتفاصيل التصدير معك قبل أن تلتزم بأي شيء.',
          ru: 'Мы подтверждаем наличие, цену и детали экспорта, прежде чем вы к чему-либо обязуетесь.',
          es: 'Confirmamos la disponibilidad, el precio y los detalles de exportación con usted antes de que se comprometa a nada.',
        },
      ],
    },
    {
      heading: {
        en: 'Risk & Fraud Prevention',
        ar: 'الوقاية من المخاطر والاحتيال',
        ru: 'Предотвращение рисков и мошенничества',
        es: 'Prevención de riesgos y fraude',
      },
      paragraphs: [
        {
          en: 'We encourage buyers to verify details before payment, confirm the vehicle and its condition, and work through documented steps. Verify that any payment instructions come from our confirmed contact channels.',
          ar: 'نشجع المشترين على التحقق من التفاصيل قبل الدفع، وتأكيد المركبة وحالتها، والعمل عبر خطوات موثقة. تحقق من أن أي تعليمات دفع تأتي من قنوات الاتصال المؤكدة لدينا.',
          ru: 'Мы рекомендуем покупателям проверять детали до оплаты, подтверждать автомобиль и его состояние и действовать по документированным шагам. Убедитесь, что инструкции по оплате приходят из наших подтверждённых каналов связи.',
          es: 'Animamos a los compradores a verificar los detalles antes de pagar, confirmar el vehículo y su estado, y trabajar mediante pasos documentados. Verifique que las instrucciones de pago provengan de nuestros canales de contacto confirmados.',
        },
        {
          en: 'We do not request payment outside a confirmed, documented transaction. If anything seems unclear, ask us before proceeding.',
          ar: 'لا نطلب أي دفع خارج معاملة مؤكدة وموثقة. إذا بدا أي شيء غير واضح، اسألنا قبل المتابعة.',
          ru: 'Мы не запрашиваем оплату вне подтверждённой, документально оформленной сделки. Если что-то кажется неясным, спросите нас, прежде чем продолжать.',
          es: 'No solicitamos pagos fuera de una transacción confirmada y documentada. Si algo parece poco claro, pregúntenos antes de continuar.',
        },
      ],
    },
    {
      heading: {
        en: 'Information Accuracy',
        ar: 'دقة المعلومات',
        ru: 'Точность информации',
        es: 'Exactitud de la información',
      },
      paragraphs: [
        {
          en: 'We aim to publish accurate, current information, but details can change. If you find an error or a listing that is outdated, contact us and we will correct it.',
          ar: 'نسعى إلى نشر معلومات دقيقة وحديثة، لكن التفاصيل قد تتغير. إذا وجدت خطأً أو إعلاناً قديماً، تواصل معنا وسنصححه.',
          ru: 'Мы стремимся публиковать точную и актуальную информацию, но детали могут меняться. Если вы нашли ошибку или устаревшее объявление, свяжитесь с нами — мы его исправим.',
          es: 'Pretendemos publicar información precisa y actual, pero los detalles pueden cambiar. Si encuentra un error o un anuncio desactualizado, contáctenos y lo corregiremos.',
        },
        {
          en: 'Where information is not available, we say so rather than presenting an assumption as fact.',
          ar: 'عندما لا تتوفر المعلومات، نقول ذلك بدلاً من تقديم افتراض كحقيقة.',
          ru: 'Если информация недоступна, мы прямо это говорим, а не выдаём предположение за факт.',
          es: 'Cuando la información no está disponible, lo decimos en lugar de presentar una suposición como un hecho.',
        },
      ],
    },
  ],
};
