// Vehicle content translations (description + condition + export field values)
// keyed by vehicle_id. English lives in src/data/vehicles.json; this module
// holds ar/ru/es. Price/spec numbers are never changed.

type L10n = { ar: string; ru: string; es: string };

const DESCRIPTIONS: Record<string, L10n> = {
  'byd-song-plus-2024-001': {
    ar: 'سيارة BYD Song Plus DM-i موديل 2024 قطعت 18,235 كم. نظام دفع هجين قابل للشحن (محرك توربيني 1.5 لتر + محرك كهربائي) مع بطارية 18.3 كيلوواط/ساعة، ما يتيح القيادة الكهربائية للاستخدام اليومي. لون خارجي أبيض، خمسة مقاعد، دفع أمامي وناقل حركة أوتوماتيك. تقع في شنجن، الصين.',
    ru: 'BYD Song Plus DM-i 2024 года с пробегом 18 235 км. Подключаемая гибридная силовая установка (1,5 л турбо + электромотор) с батареей 18,3 кВт·ч позволяет ежедневно ездить на электротяге. Белый кузов, пять мест, передний привод и автоматическая коробка передач. Находится в Шэньчжэне, Китай.',
    es: 'BYD Song Plus DM-i 2024 con 18 235 km. Tren motriz híbrido enchufable (turbo de 1,5 L + motor eléctrico) con batería de 18,3 kWh, por lo que puede funcionar en modo eléctrico para el uso diario. Exterior blanco, cinco plazas, tracción delantera y transmisión automática. Ubicado en Shenzhen, China.',
  },
  'byd-seal-2024-001': {
    ar: 'سيدان BYD Seal الكهربائية موديل 2024 قطعت 9,120 كم. مبنية على منصة BYD e-platform 3.0 بتصميم دفع خلفي بمحرك واحد وبطارية تقارب 82.5 كيلوواط/ساعة. لون خارجي أزرق قطبي، خمسة مقاعد، ناقل حركة أوتوماتيك. تقع في قوانغتشو، الصين.',
    ru: 'Электрический седан BYD Seal 2024 года с пробегом 9 120 км. Построен на платформе BYD e-platform 3.0 с задним приводом и одним мотором, батарея около 82,5 кВт·ч. Кузов «Арктик блю», пять мест, автоматическая коробка передач. Находится в Гуанчжоу, Китай.',
    es: 'Sedán eléctrico BYD Seal 2024 con 9 120 km. Construido sobre la plataforma e 3.0 de BYD con tracción trasera de un solo motor y una batería de aproximadamente 82,5 kWh. Exterior azul ártico, cinco plazas, transmisión automática. Ubicado en Guangzhou, China.',
  },
  'geely-monjaro-2024-001': {
    ar: 'سيارة Geely Monjaro (Xingyue L) موديل 2024 قطعت 15,480 كم. محرك بنزين توربيني سعة 2.0 لتر، دفع رباعي وناقل حركة أوتوماتيك بثماني سرعات. لون خارجي فضي، خمسة مقاعد. تقع في هانغتشو، الصين.',
    ru: 'Geely Monjaro (Xingyue L) 2024 года с пробегом 15 480 км. Бензиновый турбодвигатель 2,0 л, полный привод и 8-ступенчатая автоматическая коробка передач. Серебристый кузов, пять мест. Находится в Ханчжоу, Китай.',
    es: 'Geely Monjaro (Xingyue L) 2024 con 15 480 km. Motor de gasolina turbo de 2,0 L, tracción total y transmisión automática de 8 velocidades. Exterior plateado, cinco plazas. Ubicado en Hangzhou, China.',
  },
  'geely-coolray-2023-001': {
    ar: 'سيارة Geely Coolray (Binyue) موديل 2023 قطعت 22,100 كم. محرك بنزين توربيني سعة 1.5 لتر، دفع أمامي وناقل حركة بقابض مزدوج بسبع سرعات. لون خارجي أحمر، خمسة مقاعد. تقع في نينغبو، الصين. هذه الوحدة محجوزة حاليًا.',
    ru: 'Geely Coolray (Binyue) 2023 года с пробегом 22 100 км. Бензиновый турбодвигатель 1,5 л, передний привод и 7-ступенчатая коробка с двойным сцеплением. Красный кузов, пять мест. Находится в Нинбо, Китай. В настоящее время автомобиль зарезервирован.',
    es: 'Geely Coolray (Binyue) 2023 con 22 100 km. Motor de gasolina turbo de 1,5 L, tracción delantera y transmisión de doble embrague de 7 velocidades. Exterior rojo, cinco plazas. Ubicado en Ningbo, China. Esta unidad está actualmente reservada.',
  },
  'chery-tiggo-8-pro-2023-001': {
    ar: 'سيارة Chery Tiggo 8 Pro موديل 2023 قطعت 27,650 كم. محرك بنزين توربيني سعة 2.0 لتر، دفع رباعي وناقل حركة بقابض مزدوج بسبع سرعات. لون خارجي أسود، تصميم بسبعة مقاعد. تقع في ووهو، الصين.',
    ru: 'Chery Tiggo 8 Pro 2023 года с пробегом 27 650 км. Бензиновый турбодвигатель 2,0 л, полный привод и 7-ступенчатая коробка с двойным сцеплением. Чёрный кузов, семиместная компоновка. Находится в Уху, Китай.',
    es: 'Chery Tiggo 8 Pro 2023 con 27 650 km. Motor de gasolina turbo de 2,0 L, tracción total y transmisión de doble embrague de 7 velocidades. Exterior negro, disposición de siete plazas. Ubicado en Wuhu, China.',
  },
  'chery-arrizo-8-2023-001': {
    ar: 'سيارة Chery Arrizo 8 موديل 2023 قطعت 19,870 كم. محرك بنزين توربيني سعة 1.6 لتر، دفع أمامي وناقل حركة بقابض مزدوج بسبع سرعات. لون خارجي أبيض، خمسة مقاعد. تقع في ووهو، الصين.',
    ru: 'Chery Arrizo 8 2023 года с пробегом 19 870 км. Бензиновый турбодвигатель 1,6 л, передний привод и 7-ступенчатая коробка с двойным сцеплением. Белый кузов, пять мест. Находится в Уху, Китай.',
    es: 'Chery Arrizo 8 2023 con 19 870 km. Motor de gasolina turbo de 1,6 L, tracción delantera y transmisión de doble embrague de 7 velocidades. Exterior blanco, cinco plazas. Ubicado en Wuhu, China.',
  },
  'changan-cs75-plus-2024-001': {
    ar: 'سيارة Changan CS75 Plus موديل 2024 قطعت 11,930 كم. محرك بنزين توربيني سعة 2.0 لتر، دفع أمامي وناقل حركة أوتوماتيك بثماني سرعات. لون خارجي رمادي، خمسة مقاعد. تقع في تشونغتشينغ، الصين.',
    ru: 'Changan CS75 Plus 2024 года с пробегом 11 930 км. Бензиновый турбодвигатель 2,0 л, передний привод и 8-ступенчатая автоматическая коробка передач. Серый кузов, пять мест. Находится в Чунцине, Китай.',
    es: 'Changan CS75 Plus 2024 con 11 930 km. Motor de gasolina turbo de 2,0 L, tracción delantera y transmisión automática de 8 velocidades. Exterior gris, cinco plazas. Ubicado en Chongqing, China.',
  },
  'changan-uni-v-2023-001': {
    ar: 'سيارة Changan UNI-V موديل 2023 قطعت 16,220 كم. محرك بنزين توربيني سعة 1.5 لتر، دفع أمامي وناقل حركة بقابض مزدوج بسبع سرعات. لون خارجي رمادي، خمسة مقاعد. تقع في تشونغتشينغ، الصين.',
    ru: 'Changan UNI-V 2023 года с пробегом 16 220 км. Бензиновый турбодвигатель 1,5 л, передний привод и 7-ступенчатая коробка с двойным сцеплением. Серый кузов, пять мест. Находится в Чунцине, Китай.',
    es: 'Changan UNI-V 2023 con 16 220 km. Motor de gasolina turbo de 1,5 L, tracción delantera y transmisión de doble embrague de 7 velocidades. Exterior gris, cinco plazas. Ubicado en Chongqing, China.',
  },
  'gac-gs4-2022-001': {
    ar: 'سيارة GAC GS4 موديل 2022 قطعت 41,500 كم. محرك بنزين توربيني سعة 1.5 لتر، دفع أمامي وناقل حركة أوتوماتيك. لون خارجي أبيض، خمسة مقاعد. تقع في قوانغتشو، الصين. تم بيع هذه السيارة وتُحتفظ بها للرجوع إليها.',
    ru: 'GAC GS4 2022 года с пробегом 41 500 км. Бензиновый турбодвигатель 1,5 л, передний привод и автоматическая коробка передач. Белый кузов, пять мест. Находится в Гуанчжоу, Китай. Этот автомобиль продан и оставлен для справки.',
    es: 'GAC GS4 2022 con 41 500 km. Motor de gasolina turbo de 1,5 L, tracción delantera y transmisión automática. Exterior blanco, cinco plazas. Ubicado en Guangzhou, China. Este vehículo ha sido vendido y se conserva como referencia.',
  },
  'great-wall-haval-h6-2023-001': {
    ar: 'سيارة Haval H6 موديل 2023 قطعت 24,780 كم. محرك بنزين توربيني سعة 1.5 لتر، دفع أمامي وناقل حركة بقابض مزدوج بسبع سرعات. لون خارجي أسود، خمسة مقاعد. تقع في باودينغ، الصين.',
    ru: 'Haval H6 2023 года с пробегом 24 780 км. Бензиновый турбодвигатель 1,5 л, передний привод и 7-ступенчатая коробка с двойным сцеплением. Чёрный кузов, пять мест. Находится в Баодине, Китай.',
    es: 'Haval H6 2023 con 24 780 km. Motor de gasolina turbo de 1,5 L, tracción delantera y transmisión de doble embrague de 7 velocidades. Exterior negro, cinco plazas. Ubicado en Baoding, China.',
  },
  'nio-es6-2023-001': {
    ar: 'سيارة NIO ES6 الكهربائية الرياضية متعددة الاستخدامات موديل 2023 قطعت 14,320 كم. دفع رباعي بمحركين مع بطارية تقارب 75 كيلوواط/ساعة. لون خارجي رمادي، خمسة مقاعد، ناقل حركة أوتوماتيك. تقع في خفي، الصين.',
    ru: 'Электрический внедорожник NIO ES6 2023 года с пробегом 14 320 км. Полный привод на двух моторах с батареей около 75 кВт·ч. Серый кузов, пять мест, автоматическая коробка передач. Находится в Хэфэе, Китай.',
    es: 'SUV eléctrico NIO ES6 2023 con 14 320 km. Tracción total de dos motores con una batería de aproximadamente 75 kWh. Exterior gris, cinco plazas, transmisión automática. Ubicado en Hefei, China.',
  },
  'xpeng-g6-2024-001': {
    ar: 'سيارة XPeng G6 الكهربائية الرياضية متعددة الاستخدامات موديل 2024 قطعت 8,940 كم. محرك واحد بدفع خلفي على منصة 800V مع بطارية تقارب 66 كيلوواط/ساعة. لون خارجي فضي، خمسة مقاعد، ناقل حركة أوتوماتيك. تقع في قوانغتشو، الصين.',
    ru: 'Электрический внедорожник XPeng G6 2024 года с пробегом 8 940 км. Задний привод с одним мотором на платформе 800 В, батарея около 66 кВт·ч. Серебристый кузов, пять мест, автоматическая коробка передач. Находится в Гуанчжоу, Китай.',
    es: 'SUV eléctrico XPeng G6 2024 con 8 940 km. Motor único de tracción trasera sobre plataforma de 800 V con una batería de aproximadamente 66 kWh. Exterior plateado, cinco plazas, transmisión automática. Ubicado en Guangzhou, China.',
  },
};

export function vehicleDescription(id: string, locale: string, en: string): string {
  const l = DESCRIPTIONS[id];
  if (!l) return en;
  if (locale === 'ar') return l.ar;
  if (locale === 'ru') return l.ru;
  if (locale === 'es') return l.es;
  return en;
}
