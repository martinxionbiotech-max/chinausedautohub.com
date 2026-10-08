import type { L10n } from '../l10n';

// Sourcing topic — Export-Ready Vehicle Sourcing (age/emission/drive-side screening).

export const exportReadySourcing = {
  slug: 'export-ready-vehicle-sourcing',
  title: {
    en: 'Export-Ready Vehicle Sourcing — Age, Emission and Drive-Side Screening',
    ar: 'توريد المركبات الجاهزة للتصدير — غربلة العمر والانبعاثات وجانب القيادة',
    ru: 'Подбор автомобилей, готовых к экспорту — проверка по возрасту, выбросам и стороне руля',
    es: 'Abastecimiento de vehículos listos para exportar — filtrado por antigüedad, emisiones y lado de conducción',
  },
  description: {
    en: 'How to screen a sourced vehicle against the destination country\'s age, emission and drive-side requirements so it is export-ready before you pay — linked to the Market rules that carry each requirement.',
    ar: 'كيف تغربل مركبة مورّدة مقابل متطلبات العمر والانبعاثات وجانب القيادة في بلد الوجهة لتكون جاهزة للتصدير قبل أن تدفع — مع روابط لقواعد الأسواق التي تحمل كل متطلب.',
    ru: 'Как проверить подобранный автомобиль на соответствие требованиям страны назначения по возрасту, выбросам и стороне руля, чтобы он был готов к экспорту до оплаты, — со ссылками на правила Market, содержащие каждое требование.',
    es: 'Cómo filtrar un vehículo abastecido frente a los requisitos de antigüedad, emisiones y lado de conducción del país de destino para que esté listo para exportar antes de pagar — enlazado a las reglas de Market que contienen cada requisito.',
  },
  h1: {
    en: 'Export-Ready Vehicle Sourcing',
    ar: 'توريد المركبات الجاهزة للتصدير',
    ru: 'Подбор автомобилей, готовых к экспорту',
    es: 'Abastecimiento de vehículos listos para exportar',
  },
  summary: {
    en: 'The age, emission and drive-side screening that makes a sourced vehicle export-ready for its destination.',
    ar: 'غربلة العمر والانبعاثات وجانب القيادة التي تجعل المركبة المورّدة جاهزة للتصدير لوجهتها.',
    ru: 'Проверка по возрасту, выбросам и стороне руля, делающая подобранный автомобиль готовым к экспорту в страну назначения.',
    es: 'El filtrado por antigüedad, emisiones y lado de conducción que hace que un vehículo abastecido esté listo para exportar a su destino.',
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
          en: 'An "export-ready" vehicle is not just a vehicle that can be found — it is one that can legally enter the destination country. Three destination-side requirements decide this most often: the vehicle age limit, the emission standard, and the drive side (left- or right-hand drive). A sourced candidate that fails any of the three is not export-ready, however good its condition or price. Screening these three against the destination\'s rules before any payment is the difference between a workable vehicle and a stranded one. This page sets out the screening logic and links to the Market rules that carry each requirement.',
          ar: 'المركبة «الجاهزة للتصدير» ليست مجرد مركبة يمكن العثور عليها — بل مركبة يمكنها الدخول قانونياً إلى بلد الوجهة. ثلاثة متطلبات على جانب الوجهة تقرر هذا في أغلب الأحيان: حد عمر المركبة، ومعيار الانبعاثات، وجانب القيادة (يسار أو يمين). المرشح المورَّد الذي يفشل في أي من الثلاثة ليس جاهزاً للتصدير، مهما كانت حالته أو سعره جيدين. غربلة هذه الثلاثة مقابل قواعد الوجهة قبل أي دفع هي الفرق بين مركبة صالحة ومركبة عالقة. تضع هذه الصفحة منطق الغربلة وتربط بقواعد الأسواق التي تحمل كل متطلب.',
          ru: '«Готовый к экспорту» автомобиль — это не просто автомобиль, который можно найти, а тот, который может законно въехать в страну назначения. Чаще всего это решают три требования со стороны назначения: предельный возраст автомобиля, стандарт выбросов и сторона руля (левая или правая). Подобранный кандидат, не прошедший любое из трёх, не готов к экспорту, какими бы хорошими ни были его состояние и цена. Проверка этих трёх пунктов по правилам назначения до любой оплаты — разница между рабочим автомобилем и застрявшим. На этой странице изложена логика проверки и даны ссылки на правила Market, содержащие каждое требование.',
          es: 'Un vehículo «listo para exportar» no es solo un vehículo que se puede encontrar, sino uno que puede entrar legalmente en el país de destino. Tres requisitos del lado del destino lo deciden con más frecuencia: el límite de antigüedad, el estándar de emisiones y el lado de conducción (izquierda o derecha). Un candidato abastecido que falla cualquiera de los tres no está listo para exportar, por buenos que sean su estado y su precio. Filtrar estos tres frente a las reglas del destino antes de cualquier pago es la diferencia entre un vehículo viable y uno varado. Esta página expone la lógica de filtrado y enlaza a las reglas de Market que contienen cada requisito.',
        },
      ],
    },
    {
      heading: {
        en: 'The three screens at a glance',
        ar: 'الغربلات الثلاث في لمحة',
        ru: 'Три проверки в общем виде',
        es: 'Los tres filtros de un vistazo',
      },
      table: {
        headers: [
          { en: 'Screen', ar: 'الغربلة', ru: 'Проверка', es: 'Filtro' },
          { en: 'What it decides', ar: 'ما الذي تقرره', ru: 'Что она определяет', es: 'Qué decide' },
          { en: 'Where the rule lives', ar: 'أين توجد القاعدة', ru: 'Где находится правило', es: 'Dónde está la regla' },
        ],
        rows: [
          [
            { en: 'Vehicle age', ar: 'عمر المركبة', ru: 'Возраст автомобиля', es: 'Antigüedad del vehículo' },
            { en: 'Whether the unit is within the destination\'s age limit for used imports', ar: 'ما إذا كانت الوحدة ضمن حد عمر الوجهة للواردات المستعملة', ru: 'Находится ли единица в пределах возраста назначения для подержанного импорта', es: 'Si la unidad está dentro del límite de antigüedad del destino para importaciones usadas' },
            { en: 'The destination\'s Market page — Vehicle Age rules', ar: 'صفحة سوق الوجهة — قواعد عمر المركبة', ru: 'Страница рынка назначения — Правила возраста автомобиля', es: 'La página de Market del destino — Reglas de antigüedad' },
          ],
          [
            { en: 'Emission standard', ar: 'معيار الانبعاثات', ru: 'Стандарт выбросов', es: 'Estándar de emisiones' },
            { en: 'Whether the vehicle meets the destination\'s minimum emission requirement', ar: 'ما إذا كانت المركبة تستوفي الحد الأدنى لانبعاثات الوجهة', ru: 'Соответствует ли автомобиль минимальному требованию по выбросам назначения', es: 'Si el vehículo cumple el requisito mínimo de emisiones del destino' },
            { en: 'The destination\'s Market page — Emission requirements', ar: 'صفحة سوق الوجهة — متطلبات الانبعاثات', ru: 'Страница рынка назначения — Требования по выбросам', es: 'La página de Market del destino — Requisitos de emisiones' },
          ],
          [
            { en: 'Drive side', ar: 'جانب القيادة', ru: 'Сторона руля', es: 'Lado de conducción' },
            { en: 'Whether the vehicle\'s LHD/RHD matches the destination and is registrable', ar: 'ما إذا كان جانب قيادة المركبة (يسار/يمين) يطابق الوجهة وقابلاً للتسجيل', ru: 'Соответствует ли сторона руля (LHD/RHD) назначению и подлежит ли регистрации', es: 'Si el LHD/RHD del vehículo coincide con el destino y es matriculable' },
            { en: 'The destination\'s Market page — Driving side', ar: 'صفحة سوق الوجهة — جانب القيادة', ru: 'Страница рынка назначения — Сторона руля', es: 'La página de Market del destino — Lado de conducción' },
          ],
        ],
      },
    },
    {
      heading: {
        en: 'The screening sequence',
        ar: 'تسلسل الغربلة',
        ru: 'Последовательность проверки',
        es: 'La secuencia de filtrado',
      },
      paragraphs: [
        {
          en: 'Run the screens in a fixed order to fail cheap and fast. First, drive side: a LHD-only unit destined for a RHD market that does not allow LHD registration is out immediately, before any deeper checks. Second, vehicle age: confirm the unit\'s registration date against the destination\'s age limit — a unit outside the limit is out. Third, emissions: confirm the vehicle\'s emission standard meets the destination\'s minimum. Only a candidate that passes all three is worth the cost of a full inspection, documentation and payment. Re-check the destination rules at decision time, because limits and standards can change.',
          ar: 'نفّذ الغربلات بترتيب ثابت لتفشل بثمن بخس وبسرعة. أولاً، جانب القيادة: وحدة يسارية فقط متجهة إلى سوق قيادة يمينية لا يسمح بتسجيل المركبات اليسارية تخرج فوراً، قبل أي فحوصات أعمق. ثانياً، عمر المركبة: أكد تاريخ تسجيل الوحدة مقابل حد عمر الوجهة — فالوحدة خارج الحد تخرج. ثالثاً، الانبعاثات: أكد أن معيار انبعاثات المركبة يستوفي حد الوجهة الأدنى. فقط المرشح الذي يجتاز الثلاثة جميعها يستحق تكلفة الفحص الكامل والتوثيق والدفع. أعد فحص قواعد الوجهة وقت القرار، لأن الحدود والمعايير قد تتغير.',
          ru: 'Выполняйте проверки в фиксированном порядке, чтобы дешёво и быстро отсекать. Сначала сторона руля: единица только с LHD, предназначенная для рынка RHD, где регистрация LHD не разрешена, отсекается сразу, до более глубоких проверок. Во-вторых, возраст: сверьте дату регистрации единицы с пределом возраста назначения — единица вне предела отсекается. В-третьих, выбросы: подтвердите, что стандарт выбросов автомобиля соответствует минимуму назначения. Только кандидат, прошедший все три, стоит затрат на полный осмотр, документацию и оплату. Перепроверяйте правила назначения в момент решения, поскольку пределы и стандарты могут меняться.',
          es: 'Ejecute los filtros en un orden fijo para descartar barato y rápido. Primero, el lado de conducción: una unidad solo-LHD destinada a un mercado RHD que no permite matricular LHD queda descartada de inmediato, antes de comprobaciones más profundas. Segundo, la antigüedad: confirme la fecha de matriculación de la unidad frente al límite de antigüedad del destino; una unidad fuera del límite queda descartada. Tercero, las emisiones: confirme que el estándar de emisiones del vehículo cumple el mínimo del destino. Solo un candidato que supera los tres merece el coste de una inspección completa, documentación y pago. Revise las reglas del destino en el momento de decidir, porque los límites y estándares pueden cambiar.',
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
      checklist: [
        {
          en: 'Confirm the destination\'s drive side first — it is the cheapest screen and fails the fastest',
          ar: 'أكد جانب القيادة في الوجهة أولاً — فهو أرخص غربلة ويفشل الأسرع',
          ru: 'Сначала подтвердите сторону руля назначения — это самая дешёвая проверка и отсекает быстрее всего',
          es: 'Confirme primero el lado de conducción del destino: es el filtro más barato y descarta más rápido',
        },
        {
          en: 'Confirm the vehicle age against the destination limit using the unit\'s registration date',
          ar: 'أكد عمر المركبة مقابل حد الوجهة باستخدام تاريخ تسجيل الوحدة',
          ru: 'Подтвердите возраст автомобиля по пределу назначения, используя дату регистрации единицы',
          es: 'Confirme la antigüedad frente al límite del destino usando la fecha de matriculación de la unidad',
        },
        {
          en: 'Confirm the emission standard meets the destination\'s minimum before any payment',
          ar: 'أكد أن معيار الانبعاثات يستوفي حد الوجهة الأدنى قبل أي دفع',
          ru: 'Подтвердите соответствие стандарта выбросов минимуму назначения до любой оплаты',
          es: 'Confirme que el estándar de emisiones cumple el mínimo del destino antes de cualquier pago',
        },
        {
          en: 'Re-verify the destination rules at decision time — limits and standards change',
          ar: 'أعد التحقق من قواعد الوجهة وقت القرار — فالحدود والمعايير تتغير',
          ru: 'Перепроверьте правила назначения в момент решения — пределы и стандарты меняются',
          es: 'Vuelva a verificar las reglas del destino al decidir: los límites y estándares cambian',
        },
      ],
    },
    {
      heading: {
        en: 'Related resources',
        ar: 'موارد ذات صلة',
        ru: 'Связанные ресурсы',
        es: 'Recursos relacionados',
      },
      links: [
        {
          slug: 'chinese-suv-sourcing',
          label: {
            en: 'SUV candidates and market fit — Chinese SUV Sourcing',
            ar: 'مرشحو سيارات الـ SUV وملاءمة السوق — توريد سيارات الـ SUV الصينية',
            ru: 'Кандидаты SUV и соответствие рынку — Подбор китайских кроссоверов',
            es: 'Candidatos SUV y encaje de mercado — Abastecimiento de SUV chinos',
          },
        },
        {
          slug: 'used-car-sourcing-from-china',
          label: {
            en: 'Vehicle types and risks — Used Car Sourcing From China',
            ar: 'أنواع المركبات ومخاطرها — توريد السيارات المستعملة من الصين',
            ru: 'Типы автомобилей и риски — Подбор подержанных автомобилей из Китая',
            es: 'Tipos de vehículos y riesgos — Abastecimiento de coches usados desde China',
          },
        },
        {
          href: 'https://market.chinausedautohub.com/countries/',
          label: {
            en: 'Destination import rules — Market sub-site',
            ar: 'قواعد الاستيراد حسب الوجهة — الموقع الفرعي للأسواق',
            ru: 'Правила импорта стран назначения — подсайт Market',
            es: 'Normas de importación por destino — subsitio Market',
          },
        },
        {
          href: 'https://tool.chinausedautohub.com/vehicle-age-calculator/',
          label: {
            en: 'Check a vehicle\'s age — Vehicle Age tool',
            ar: 'افحص عمر المركبة — أداة عمر المركبة',
            ru: 'Проверьте возраст автомобиля — Инструмент возраста автомобиля',
            es: 'Compruebe la antigüedad — Herramienta de antigüedad',
          },
        },
        {
          guide: 'china-used-car-export-compliance',
          label: {
            en: 'China-side export rules — Export Compliance guide',
            ar: 'قواعد التصدير في الجانب الصيني — دليل الامتثال للتصدير',
            ru: 'Правила экспорта на стороне Китая — Руководство по соответствию экспорту',
            es: 'Normas de exportación del lado chino — Guía de cumplimiento de exportación',
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
          en: 'Last reviewed: 2026-10-08. This page sets out a screening logic for export-ready sourcing. The age limits, emission standards and drive-side rules are destination-specific and are carried on each country\'s Market page; they can change, so confirm them at decision time with the relevant authority or a qualified exporter. This page provides no specific limits or duty figures as fact and lists no inventory.',
          ar: 'آخر مراجعة: 2026-10-08. تضع هذه الصفحة منطق غربلة للتوريد الجاهز للتصدير. حدود العمر ومعايير الانبعاثات وقواعد جانب القيادة خاصة بكل وجهة ومذكورة في صفحة سوق كل بلد؛ وقد تتغير، لذا أكدها وقت القرار مع السلطة المختصة أو مصدّر مؤهل. لا تقدم هذه الصفحة أي حدود أو أرقام رسوم محددة كحقيقة ولا تدرج أي مخزون.',
          ru: 'Последняя проверка: 2026-10-08. На этой странице изложена логика проверки для подбора, готового к экспорту. Пределы возраста, стандарты выбросов и правила стороны руля специфичны для каждой страны назначения и приведены на странице Market каждой страны; они могут меняться, поэтому подтверждайте их в момент решения у соответствующего органа или квалифицированного экспортёра. На этой странице не приводятся конкретные пределы или пошлины как факт и нет наличия.',
          es: 'Última revisión: 2026-10-08. Esta página expone una lógica de filtrado para el abastecimiento listo para exportar. Los límites de antigüedad, los estándares de emisiones y las reglas de lado de conducción son específicos de cada destino y figuran en la página de Market de cada país; pueden cambiar, así que confírmelos al decidir con la autoridad correspondiente o un exportador cualificado. Esta página no ofrece límites o aranceles concretos como hechos ni enumera inventario.',
        },
      ],
    },
  ],
};
