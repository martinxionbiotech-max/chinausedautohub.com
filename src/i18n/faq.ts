import type { L10n } from './l10n';

// Buyer FAQ. Real questions covering sourcing, quotes, shipping, payment,
// vehicle condition and the demo inventory disclosure. Answers avoid invented
// promises — payment terms, timelines and exact requirements are stated as
// depending on the vehicle / destination / transaction.

export interface FaqItem {
  question: L10n;
  answer: L10n;
}

export const FAQ_PAGE: {
  title: L10n;
  description: L10n;
  h1: L10n;
  intro: L10n;
  items: FaqItem[];
} = {
  title: {
    en: 'Frequently Asked Questions — Buying Used Cars from China',
    ar: 'الأسئلة الشائعة — شراء السيارات المستعملة من الصين',
    ru: 'Частые вопросы — покупка подержанных автомобилей из Китая',
    es: 'Preguntas frecuentes — comprar coches usados desde China',
  },
  description: {
    en: 'Answers to common buyer questions about sourcing, quotes, shipping, payment, vehicle condition and how the platform works.',
    ar: 'إجابات عن أسئلة المشترين الشائعة حول التوريد وعروض الأسعار والشحن والدفع وحالة المركبات وكيف يعمل الموقع.',
    ru: 'Ответы на частые вопросы покупателей о подборе, расчётах, доставке, оплате, состоянии автомобилей и работе платформы.',
    es: 'Respuestas a las preguntas frecuentes de los compradores sobre abastecimiento, cotizaciones, envío, pago, estado del vehículo y funcionamiento de la plataforma.',
  },
  h1: {
    en: 'Frequently Asked Questions',
    ar: 'الأسئلة الشائعة',
    ru: 'Частые вопросы',
    es: 'Preguntas frecuentes',
  },
  intro: {
    en: 'Answers to the questions buyers most often ask about sourcing and exporting a used vehicle from China.',
    ar: 'إجابات عن الأسئلة التي يطرحها المشترون غالباً حول توريد وتصدير سيارة مستعملة من الصين.',
    ru: 'Ответы на вопросы, которые покупатели чаще всего задают о подборе и экспорте подержанного автомобиля из Китая.',
    es: 'Respuestas a las preguntas que más suelen hacer los compradores sobre el abastecimiento y la exportación de un vehículo usado desde China.',
  },
  items: [
    {
      question: {
        en: 'Are the vehicles on this site real listings?',
        ar: 'هل المركبات على هذا الموقع إعلانات حقيقية؟',
        ru: 'Являются ли автомобили на этом сайте реальными объявлениями?',
        es: '¿Los vehículos de este sitio son anuncios reales?',
      },
      answer: {
        en: 'The current inventory is DEMO DATA used to demonstrate how the platform works — it is not a set of real vehicles for sale. When real inventory is added, each listing will show the vehicle information we hold, clearly marked with its confidence level.',
        ar: 'المخزون الحالي هو بيانات تجريبية (DEMO DATA) تُستخدم لتوضيح كيفية عمل المنصة — وليست مجموعة مركبات حقيقية للبيع. عند إضافة مخزون حقيقي، سيعرض كل إعلان معلومات المركبة التي نحتفظ بها، معلَّمة بوضوح بمستوى ثقتها.',
        ru: 'Текущий каталог — это ДЕМО-ДАННЫЕ, показывающие, как работает платформа, а не реальные автомобили для продажи. Когда появится реальный каталог, в каждом объявлении будет указана имеющаяся у нас информация с уровнем достоверности.',
        es: 'El inventario actual son DATOS DE DEMOSTRACIÓN que muestran cómo funciona la plataforma; no son vehículos reales en venta. Cuando se añada inventario real, cada anuncio mostrará la información que tenemos, marcada con su nivel de confianza.',
      },
    },
    {
      question: {
        en: 'Can you source a vehicle that is not in your inventory?',
        ar: 'هل يمكنكم توريد مركبة غير موجودة في مخزونكم؟',
        ru: 'Можете ли вы подобрать автомобиль, которого нет в вашем каталоге?',
        es: '¿Pueden abastecer un vehículo que no está en su inventario?',
      },
      answer: {
        en: 'Yes. Tell us the brand, model, year, budget and destination using the Request a Car form, and we will look for options in China\'s market. Availability depends on the vehicle and current market supply.',
        ar: 'نعم. أخبرنا بالعلامة والطراز والسنة والميزانية والوجهة عبر نموذج "اطلب سيارة"، وسنبحث عن خيارات في السوق الصيني. يعتمد التوفر على المركبة والعرض الحالي في السوق.',
        ru: 'Да. Укажите марку, модель, год, бюджет и страну назначения через форму «Запросить автомобиль», и мы поищем варианты на китайском рынке. Наличие зависит от автомобиля и текущего предложения.',
        es: 'Sí. Indíquenos la marca, el modelo, el año, el presupuesto y el destino mediante el formulario «Solicitar un coche» y buscaremos opciones en el mercado chino. La disponibilidad depende del vehículo y de la oferta actual.',
      },
    },
    {
      question: {
        en: 'How do I request a quote?',
        ar: 'كيف أطلب عرض سعر؟',
        ru: 'Как запросить расчёт цены?',
        es: '¿Cómo solicito una cotización?',
      },
      answer: {
        en: 'Find a vehicle and use the Request Quote button on its listing, or use the Request a Car form to describe your requirements. We will get back to you with availability, price and export information.',
        ar: 'ابحث عن مركبة واستخدم زر "اطلب عرض سعر" في إعلانها، أو استخدم نموذج "اطلب سيارة" لوصف متطلباتك. سنرد عليك بمعلومات التوفر والسعر والتصدير.',
        ru: 'Найдите автомобиль и используйте кнопку «Запросить расчёт» в его объявлении либо форму «Запросить автомобиль», чтобы описать требования. Мы ответим с информацией о наличии, цене и экспорте.',
        es: 'Encuentre un vehículo y use el botón «Solicitar cotización» de su anuncio, o use el formulario «Solicitar un coche» para describir sus requisitos. Le responderemos con disponibilidad, precio e información de exportación.',
      },
    },
    {
      question: {
        en: 'What does the listed price include?',
        ar: 'ماذا يشمل السعر المدرج؟',
        ru: 'Что входит в указанную цену?',
        es: '¿Qué incluye el precio listado?',
      },
      answer: {
        en: 'The listed price is the asking price for the vehicle only. It may vary based on configuration, shipping, taxes and destination, and does not include shipping, insurance, taxes or import duties (landed costs).',
        ar: 'السعر المدرج هو سعر طلب المركبة فقط. قد يختلف حسب التجهيز والشحن والضرائب والوجهة، ولا يشمل الشحن أو التأمين أو الضرائب أو الرسوم الجمركية (تكاليف الوصول).',
        ru: 'Указанная цена — это только запрашиваемая цена за автомобиль. Она может меняться в зависимости от комплектации, доставки, налогов и страны назначения и не включает доставку, страховку, налоги и пошлины (итоговую стоимость).',
        es: 'El precio listado es solo el precio de venta del vehículo. Puede variar según la configuración, el envío, los impuestos y el destino, y no incluye envío, seguro, impuestos ni aranceles de importación (costes de desembarco).',
      },
    },
    {
      question: {
        en: 'What information do I need to provide to source a vehicle?',
        ar: 'ما المعلومات التي يجب أن أقدمها لتوريد مركبة؟',
        ru: 'Какую информацию нужно предоставить для подбора автомобиля?',
        es: '¿Qué información debo facilitar para abastecer un vehículo?',
      },
      answer: {
        en: 'The most useful details are your destination country, brand or model (or vehicle type), year range, budget, quantity and any requirements such as fuel type, condition or mileage limits.',
        ar: 'أهم التفاصيل: بلد الوجهة، والعلامة أو الطراز (أو نوع المركبة)، ونطاق السنة، والميزانية، والكمية، وأي متطلبات مثل نوع الوقود أو الحالة أو حدود المسافة المقطوعة.',
        ru: 'Наиболее полезные данные: страна назначения, марка или модель (или тип автомобиля), диапазон годов, бюджет, количество и любые требования — тип топлива, состояние, лимит пробега.',
        es: 'Los datos más útiles son: país de destino, marca o modelo (o tipo de vehículo), rango de año, presupuesto, cantidad y cualquier requisito como tipo de combustible, estado o límites de kilometraje.',
      },
    },
    {
      question: {
        en: 'How long does export take?',
        ar: 'كم يستغرق التصدير؟',
        ru: 'Сколько времени занимает экспорт?',
        es: '¿Cuánto tarda la exportación?',
      },
      answer: {
        en: 'Export time depends on the vehicle, documentation requirements, the shipping route and the destination. We confirm an estimated timeline when you request a quote.',
        ar: 'يعتمد وقت التصدير على المركبة ومتطلبات الوثائق ومسار الشحن والوجهة. نؤكد جدولاً زمنياً تقديرياً عند طلب عرض سعر.',
        ru: 'Срок экспорта зависит от автомобиля, требований к документам, маршрута доставки и страны назначения. Мы подтверждаем ориентировочный срок при запросе расчёта.',
        es: 'El tiempo de exportación depende del vehículo, los requisitos documentales, la ruta de envío y el destino. Confirmamos un plazo estimado al solicitar la cotización.',
      },
    },
    {
      question: {
        en: 'What documents are required to export a vehicle from China?',
        ar: 'ما الوثائق المطلوبة لتصدير مركبة من الصين؟',
        ru: 'Какие документы нужны для экспорта автомобиля из Китая?',
        es: '¿Qué documentos se necesitan para exportar un vehículo desde China?',
      },
      answer: {
        en: 'Exporting a vehicle commonly involves a commercial invoice, packing list, vehicle documents, export and shipping documents, and a bill of lading, plus customs-related documents. Exact requirements depend on the vehicle, the export arrangement and the destination country.',
        ar: 'يشمل تصدير المركبة عادة الفاتورة التجارية وقائمة التعبئة ووثائق المركبة ووثائق التصدير والشحن وبوليصة الشحن، إضافة إلى وثائق جمركية. تعتمد المتطلبات الدقيقة على المركبة وترتيب التصدير وبلد الوجهة.',
        ru: 'Экспорт автомобиля обычно включает коммерческий инвойс, упаковочный лист, документы на автомобиль, экспортные и отгрузочные документы и коносамент, а также таможенные документы. Точные требования зависят от автомобиля, схемы экспорта и страны назначения.',
        es: 'Exportar un vehículo suele implicar factura comercial, lista de embalaje, documentos del vehículo, documentos de exportación y envío, y un conocimiento de embarque, además de documentos aduaneros. Los requisitos exactos dependen del vehículo, el acuerdo de exportación y el país de destino.',
      },
    },
    {
      question: {
        en: 'How is a vehicle\'s condition reported?',
        ar: 'كيف يُبلَّغ عن حالة المركبة؟',
        ru: 'Как сообщается состояние автомобиля?',
        es: '¿Cómo se informa del estado de un vehículo?',
      },
      answer: {
        en: 'We publish the condition information we hold, as supplied by the source, and mark each detail with a verification level — verified, provided, seller-supplied, source-backed or not available. Where a detail is not held, we say so rather than guessing.',
        ar: 'ننشر معلومات الحالة التي نحتفظ بها، كما يوردها المصدر، ونعلّم كل تفصيل بمستوى تحقق — موثَّق أو مقدَّم أو مقدَّم من البائع أو مدعوم بمصدر أو غير متوفر. عندما لا نحتفظ بتفصيل، نقول ذلك بدلاً من التخمين.',
        ru: 'Мы публикуем имеющуюся информацию о состоянии, предоставленную источником, и помечаем каждую деталь уровнем проверки — подтверждено, предоставлено, предоставлено продавцом, подтверждено источником или недоступно. Если детали нет, мы говорим об этом, а не угадываем.',
        es: 'Publicamos la información de estado que tenemos, según la facilita la fuente, y marcamos cada detalle con un nivel de verificación: verificado, facilitado, facilitado por el vendedor, respaldado por una fuente o no disponible. Cuando no tenemos un detalle, lo decimos en lugar de adivinar.',
      },
    },
    {
      question: {
        en: 'Do you provide inspection reports?',
        ar: 'هل تقدمون تقارير فحص؟',
        ru: 'Предоставляете ли вы отчёты о проверке?',
        es: '¿Proporcionan informes de inspección?',
      },
      answer: {
        en: 'We present the inspection information we hold for a vehicle. Inspection availability depends on the vehicle and buyer requirements; not every vehicle has a full inspection report. Where a third-party inspection is required, we advise on options.',
        ar: 'نعرض معلومات الفحص التي نحتفظ بها للمركبة. يعتمد توفر الفحص على المركبة ومتطلبات المشتري؛ ليست كل مركبة لديها تقرير فحص كامل. عند الحاجة إلى فحص من طرف ثالث، ننصحك بالخيارات.',
        ru: 'Мы предоставляем имеющуюся информацию о проверке автомобиля. Доступность проверки зависит от автомобиля и требований покупателя; не у каждого автомобиля есть полный отчёт. Если нужна сторонняя проверка, мы консультируем по вариантам.',
        es: 'Presentamos la información de inspección que tenemos de un vehículo. La disponibilidad depende del vehículo y los requisitos del comprador; no todos los vehículos tienen un informe completo. Si se requiere una inspección de terceros, asesoramos sobre las opciones.',
      },
    },
    {
      question: {
        en: 'What payment terms do you use?',
        ar: 'ما شروط الدفع التي تستخدمونها؟',
        ru: 'Какие условия оплаты вы используете?',
        es: '¿Qué condiciones de pago utilizan?',
      },
      answer: {
        en: 'Payment terms are confirmed during the transaction and depend on the vehicle, the arrangement and the destination. We do not request payment outside a confirmed, documented transaction. Verify that any payment instructions come from our confirmed contact channels.',
        ar: 'تُؤكد شروط الدفع أثناء المعاملة وتعتمد على المركبة والترتيب والوجهة. لا نطلب أي دفع خارج معاملة مؤكدة وموثقة. تحقق من أن أي تعليمات دفع تأتي من قنوات الاتصال المؤكدة لدينا.',
        ru: 'Условия оплаты подтверждаются в ходе сделки и зависят от автомобиля, договорённости и страны назначения. Мы не запрашиваем оплату вне подтверждённой, документально оформленной сделки. Убедитесь, что инструкции по оплате приходят из наших подтверждённых каналов.',
        es: 'Las condiciones de pago se confirman durante la transacción y dependen del vehículo, el acuerdo y el destino. No solicitamos pagos fuera de una transacción confirmada y documentada. Verifique que las instrucciones de pago provengan de nuestros canales confirmados.',
      },
    },
    {
      question: {
        en: 'What is the difference between FOB, CIF and CFR?',
        ar: 'ما الفرق بين FOB و CIF و CFR؟',
        ru: 'В чём разница между FOB, CIF и CFR?',
        es: '¿Cuál es la diferencia entre FOB, CIF y CFR?',
      },
      answer: {
        en: 'FOB, CIF and CFR are shipping terms (Incoterms) that define who pays for and is responsible for the goods at each stage. FOB means the seller delivers to the port of origin; CIF adds insurance; CFR includes freight but not insurance. See our guide for the full explanation.',
        ar: '‏FOB وCIF وCFR هي مصطلحات شحن (Incoterms) تحدد من يدفع ومن يتحمل مسؤولية البضائع في كل مرحلة. يعني FOB أن البائع يسلم في ميناء المنشأ؛ ويضيف CIF التأمين؛ ويشمل CFR الشحن دون التأمين. راجع دليلنا للشرح الكامل.',
        ru: 'FOB, CIF и CFR — это условия поставки (Инкотермс), определяющие, кто платит и отвечает за товар на каждом этапе. FOB означает доставку продавцом в порт отправления; CIF добавляет страховку; CFR включает фрахт, но не страховку. Полное объяснение — в нашем руководстве.',
        es: 'FOB, CIF y CFR son términos de envío (Incoterms) que definen quién paga y es responsable de la mercancía en cada etapa. FOB significa que el vendedor entrega en el puerto de origen; CIF añade el seguro; CFR incluye el flete pero no el seguro. Consulte nuestra guía para la explicación completa.',
      },
    },
    {
      question: {
        en: 'How do I estimate the landed cost of a vehicle?',
        ar: 'كيف أقدّر التكلفة النهائية للمركبة؟',
        ru: 'Как оценить итоговую стоимость автомобиля?',
        es: '¿Cómo estimo el coste de desembarco de un vehículo?',
      },
      answer: {
        en: 'Landed cost is the vehicle price plus freight, insurance, customs duties, taxes and port charges. We explain the components and method in our landed cost guide, and the Import Tools sub-site has calculators. Final figures are confirmed at quote time.',
        ar: 'التكلفة النهائية هي سعر المركبة زائد الشحن والتأمين والرسوم الجمركية والضرائب ورسوم الموانئ. نشرح المكونات والطريقة في دليل التكلفة النهائية، ويحتوي الموقع الفرعي لأدوات الاستيراد على حاسبات. تُؤكد الأرقام النهائية عند عرض السعر.',
        ru: 'Итоговая стоимость — это цена автомобиля плюс фрахт, страховка, пошлины, налоги и портовые сборы. Мы объясняем компоненты и метод в руководстве по итоговой стоимости, а на подсайте инструментов есть калькуляторы. Итоговые цифры подтверждаются при расчёте.',
        es: 'El coste de desembarco es el precio del vehículo más flete, seguro, aranceles, impuestos y gastos portuarios. Explicamos los componentes y el método en nuestra guía de coste de desembarco, y el subsitio de herramientas de importación tiene calculadoras. Las cifras finales se confirman al cotizar.',
      },
    },
    {
      question: {
        en: 'Can you recommend vehicles suitable for my market?',
        ar: 'هل يمكنكم التوصية بمركبات مناسبة لسوقي؟',
        ru: 'Можете ли вы порекомендовать автомобили, подходящие для моего рынка?',
        es: '¿Pueden recomendarme vehículos adecuados para mi mercado?',
      },
      answer: {
        en: 'Yes. Tell us your destination market and requirements, and we can recommend vehicles suitable for that market and look for options to source.',
        ar: 'نعم. أخبرنا بسوق وجهتك ومتطلباتك، ويمكننا التوصية بمركبات مناسبة لذلك السوق والبحث عن خيارات لتوريدها.',
        ru: 'Да. Сообщите нам рынок назначения и требования, и мы порекомендуем подходящие автомобили и поищем варианты для подбора.',
        es: 'Sí. Indíquenos su mercado de destino y sus requisitos, y podremos recomendar vehículos adecuados para ese mercado y buscar opciones para abastecerlos.',
      },
    },
    {
      question: {
        en: 'How do I contact you?',
        ar: 'كيف أتواصل معكم؟',
        ru: 'Как с вами связаться?',
        es: '¿Cómo me pongo en contacto con ustedes?',
      },
      answer: {
        en: 'You can reach us by email or WhatsApp using the details on the Contact page, or submit the Request a Car form and we will get back to you.',
        ar: 'يمكنك التواصل معنا عبر البريد الإلكتروني أو واتساب باستخدام البيانات في صفحة الاتصال، أو إرسال نموذج "اطلب سيارة" وسنرد عليك.',
        ru: 'Свяжитесь с нами по электронной почте или WhatsApp, используя данные на странице контактов, либо отправьте форму «Запросить автомобиль», и мы ответим.',
        es: 'Puede contactarnos por correo o WhatsApp con los datos de la página de contacto, o enviar el formulario «Solicitar un coche» y le responderemos.',
      },
    },
  ],
};
