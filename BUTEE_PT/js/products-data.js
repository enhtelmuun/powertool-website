/* =============================================================
   POWERTOOL — Бүтээгдэхүүний каталогийн дата сан
   Product catalog data (bilingual MN / EN)
   -------------------------------------------------------------
   Шинэ бүтээгдэхүүн нэмэх:  products массивт нэг объект нэмнэ.
   Add a new product: append one object to the `products` array.
   ============================================================= */
window.PT_CATALOG = {

  categories: [
    {
      id: 'metering',
      brand: 'INHEMETER',
      img: 'img/i310.png',
      name:    { mn: 'Ухаалаг тоолуур',          en: 'Smart Metering' },
      tagline: { mn: 'Цахилгаан эрчим хүчний ухаалаг хэмжилт', en: 'Smart electrical energy metering' },
      intro:   {
        mn: 'INHEMETER нэг ба гурван фазын ухаалаг тоолуур, дата концентратор. DLMS/COSEM протокол, TOU тариф, алсын удирдлага (AMI), залилангаас хамгаалах өндөр түвшний шийдэл.',
        en: 'INHEMETER single- and three-phase smart meters and data concentrators. DLMS/COSEM protocol, TOU tariffs, remote management (AMI) and strong anti-tamper revenue protection.'
      }
    },
    {
      id: 'heatpump',
      brand: 'AIROSD',
      img: 'img/hp-r290.png',
      name:    { mn: 'Дулааны насос',            en: 'Heat Pumps' },
      tagline: { mn: 'Халаалт · Хөргөлт · Халуун ус', en: 'Heating · Cooling · Hot Water' },
      intro:   {
        mn: 'AIROSD агаар-усны DC инвертер дулааны насос. –35°C хүйтэнд найдвартай ажиллаж, A+++ зэрэглэлийн эрчим хүчний хэмнэлттэй. Гэр ахуйгаас аж үйлдвэрийн хэмжээ хүртэл.',
        en: 'AIROSD air-to-water DC inverter heat pumps. Reliable operation down to –35°C with A+++ energy efficiency — from residential homes to industrial scale.'
      }
    }
  ],

  products: [

    /* ============ INHEMETER — METERING ============ */
    {
      id: 'i210', category: 'metering', brand: 'INHEMETER', name: 'i210',
      img: 'img/i210.png',
      type:    { mn: 'Нэг фазын ухаалаг тоолуур', en: 'Single-Phase Smart Meter' },
      tagline: { mn: 'Модульчлагдсан нэг фазын AMI тоолуур (Class 1)', en: 'Modular single-phase AMI meter (Class 1)' },
      badges: ['Class 1', 'DLMS/COSEM', 'IP54', 'TOU', 'AMI', 'Anti-tamper'],
      summary: {
        mn: 'Гэр ахуй, худалдаа, аж үйлдвэрийн хэрэглэгчдэд зориулсан модульчлагдсан нэг фазын ухаалаг тоолуур. Урьдчилсан болон дараа төлбөрт горимыг дэмжих ба уян хатан холбооны модультай (HPLC/G3-PLC, кабель, RF, 4G).',
        en: 'Modular single-phase smart meter for residential, commercial and industrial customers. Supports prepayment and post-payment with flexible hot-swap communication modules (HPLC/G3-PLC, cable, RF, 4G).'
      },
      highlights: [
        { mn: 'Урьдчилсан/дараа төлбөрт горим (сонгох боломжтой)', en: 'Prepayment & post-payment (selectable)' },
        { mn: 'Залилангаас хамгаалах — терминал таг илрүүлэгч', en: 'Anti-tamper terminal cover detection' },
        { mn: 'Hot-swap холбооны модуль: 4G/HPLC/G3-PLC/RF', en: 'Hot-swap comms: 4G/HPLC/G3-PLC/RF' },
        { mn: 'Дотоод реле таслуур, 10 жилийн нөөц батерей', en: 'Internal relay disconnect, 10-year backup battery' }
      ],
      specGroups: [
        { title: { mn: 'Нарийвчлал', en: 'Accuracy' }, rows: [
          { k: { mn: 'Идэвхтэй энерги', en: 'Active energy' },   v: { mn: 'Class 1 (IEC 62053-21)', en: 'Class 1 (IEC 62053-21)' } },
          { k: { mn: 'Реактив энерги', en: 'Reactive energy' },  v: { mn: 'Class 2 (IEC 62053-23)', en: 'Class 2 (IEC 62053-23)' } },
          { k: { mn: 'Импульс', en: 'Impulse' },                 v: { mn: '1000 imp/kWh, 1000 imp/kvarh', en: '1000 imp/kWh, 1000 imp/kvarh' } }
        ]},
        { title: { mn: 'Хүчдэл ба гүйдэл', en: 'Voltage & Current' }, rows: [
          { k: { mn: 'Нэрлэсэн хүчдэл', en: 'Nominal voltage' }, v: { mn: '230V', en: '230V' } },
          { k: { mn: 'Ажлын хүчдэл', en: 'Working voltage' },    v: { mn: '70%Un–120%Un', en: '70%Un–120%Un' } },
          { k: { mn: 'Нэрлэсэн гүйдэл', en: 'Rated current' },   v: { mn: '5(6)A', en: '5(6)A' } },
          { k: { mn: 'Давтамж', en: 'Frequency' },               v: { mn: '50±5% Hz', en: '50±5% Hz' } }
        ]},
        { title: { mn: 'Холбоо', en: 'Communication' }, rows: [
          { k: { mn: 'Протокол', en: 'Protocol' },               v: { mn: 'DLMS/COSEM', en: 'DLMS/COSEM' } },
          { k: { mn: 'Модуль', en: 'Module' },                   v: { mn: '4G(3G/GPRS)/HPLC/G3-PLC/RF (hot-swap)', en: '4G(3G/GPRS)/HPLC/G3-PLC/RF (hot-swap)' } },
          { k: { mn: 'Интерфэйс', en: 'Interface' },             v: { mn: 'Infrared (IEC 62056-21), RS-485', en: 'Infrared (IEC 62056-21), RS-485' } }
        ]},
        { title: { mn: 'Ерөнхий', en: 'General' }, rows: [
          { k: { mn: 'Хамгаалалт', en: 'Protection' },           v: { mn: 'IP54 (IEC 60529)', en: 'IP54 (IEC 60529)' } },
          { k: { mn: 'Ажлын температур', en: 'Operating temp.' }, v: { mn: '–45°C ~ +75°C', en: '–45°C ~ +75°C' } },
          { k: { mn: 'Жин', en: 'Weight' },                      v: { mn: '~1200 г', en: '~1200 g' } },
          { k: { mn: 'Хэмжээ', en: 'Dimensions' },               v: { mn: '210×135×65 мм', en: '210×135×65 mm' } }
        ]}
      ]
    },

    {
      id: 'i310', category: 'metering', brand: 'INHEMETER', name: 'i310',
      img: 'img/i310.png',
      type:    { mn: 'Гурван фазын ухаалаг тоолуур', en: 'Three-Phase Smart Meter' },
      tagline: { mn: 'Шууд холболттой гурван фазын модульчлагдсан тоолуур', en: 'Direct-connection three-phase modular meter' },
      badges: ['Class 1', 'DLMS/COSEM', 'IP54', 'TOU', 'AMI', 'Anti-tamper'],
      summary: {
        mn: 'Шууд холболттой гурван фазын олон функцт ухаалаг тоолуур. Гэр ахуй, худалдаа, аж үйлдвэрийн хэрэглэгчдэд. 120A реле таслуур, уян хатан холбооны модультай.',
        en: 'Direct-connection three-phase multi-function smart meter for residential, commercial and industrial use. 120A relay disconnect with flexible communication modules.'
      },
      highlights: [
        { mn: 'Гурван фаз шууд холболт 3×230/400V', en: 'Three-phase direct connection 3×230/400V' },
        { mn: '120A дөрвөн туйлт реле таслуур (UC3)', en: '120A quadripolar relay disconnect (UC3)' },
        { mn: 'Урьдчилсан/дараа төлбөр, AMI дэмжлэг', en: 'Prepayment/post-payment, AMI support' },
        { mn: 'Hot-swap 4G/HPLC/RF модуль', en: 'Hot-swap 4G/HPLC/RF modules' }
      ],
      specGroups: [
        { title: { mn: 'Нарийвчлал', en: 'Accuracy' }, rows: [
          { k: { mn: 'Идэвхтэй энерги', en: 'Active energy' },   v: { mn: 'Class 1 (IEC 62053-21)', en: 'Class 1 (IEC 62053-21)' } },
          { k: { mn: 'Реактив энерги', en: 'Reactive energy' },  v: { mn: 'Class 2 (IEC 62053-23)', en: 'Class 2 (IEC 62053-23)' } }
        ]},
        { title: { mn: 'Хүчдэл ба гүйдэл', en: 'Voltage & Current' }, rows: [
          { k: { mn: 'Нэрлэсэн хүчдэл', en: 'Nominal voltage' }, v: { mn: '3×230/400V', en: '3×230/400V' } },
          { k: { mn: 'Нэрлэсэн гүйдэл', en: 'Rated current' },   v: { mn: '20A', en: '20A' } },
          { k: { mn: 'Дээд гүйдэл', en: 'Maximum current' },     v: { mn: '100A', en: '100A' } },
          { k: { mn: 'Давтамж', en: 'Frequency' },               v: { mn: '50±5% Hz', en: '50±5% Hz' } }
        ]},
        { title: { mn: 'Холбоо', en: 'Communication' }, rows: [
          { k: { mn: 'Протокол', en: 'Protocol' },               v: { mn: 'DLMS/COSEM', en: 'DLMS/COSEM' } },
          { k: { mn: 'Модуль', en: 'Module' },                   v: { mn: '4G / HPLC / RF (hot-swap), RS-485, IR', en: '4G / HPLC / RF (hot-swap), RS-485, IR' } }
        ]},
        { title: { mn: 'Ерөнхий', en: 'General' }, rows: [
          { k: { mn: 'Хамгаалалт', en: 'Protection' },           v: { mn: 'IP54 (IEC 60529)', en: 'IP54 (IEC 60529)' } },
          { k: { mn: 'Ажлын температур', en: 'Operating temp.' }, v: { mn: '–45°C ~ +75°C', en: '–45°C ~ +75°C' } },
          { k: { mn: 'Жин', en: 'Weight' },                      v: { mn: '~2000 г', en: '~2000 g' } },
          { k: { mn: 'Хэмжээ', en: 'Dimensions' },               v: { mn: '265×170×72 мм', en: '265×170×72 mm' } }
        ]}
      ]
    },

    {
      id: 'iT30', category: 'metering', brand: 'INHEMETER', name: 'iT30',
      img: 'img/iT30.png',
      type:    { mn: 'Гурван фазын өндөр нарийвчлалтай тоолуур', en: 'High-Accuracy Three-Phase Meter' },
      tagline: { mn: 'CT/VT холболттой, Class 0.5S, MID гэрчилгээтэй', en: 'CT/VT connection, Class 0.5S, MID certified' },
      badges: ['Class 0.5S', 'MID', 'Power Quality', 'Multi-protocol', 'Load Profile'],
      summary: {
        mn: 'Цахилгаан станц, өндөр хүчдэлийн дэд станц, дамжуулах шугамын солилцооны цэг, томоохон үйлдвэрт зориулсан маш өндөр нарийвчлалтай гурван фазын тоолуур. Эрчим хүчний чанарын хэмжилт (Power Quality) бүхий.',
        en: 'Very high-accuracy three-phase meter for power plants, HV substations, transmission exchange points and large industries. Includes full power-quality measurement.'
      },
      highlights: [
        { mn: 'Class 0.5S нарийвчлал, MID гэрчилгээтэй', en: 'Class 0.5S accuracy, MID certified' },
        { mn: 'Power Quality хэмжилт (IEC 61000-4-30 A класс)', en: 'Power quality measurement (IEC 61000-4-30 Class A)' },
        { mn: '4 оролт / 4 гаралт уян хатан I/O', en: '4 inputs / 4 outputs flexible I/O' },
        { mn: 'GPRS/3G/4G/PLC/Ethernet холбоо', en: 'GPRS/3G/4G/PLC/Ethernet communication' }
      ],
      specGroups: [
        { title: { mn: 'Нарийвчлал', en: 'Accuracy' }, rows: [
          { k: { mn: 'Идэвхтэй энерги', en: 'Active energy' },   v: { mn: 'Class 0.5S (IEC 62053-22)', en: 'Class 0.5S (IEC 62053-22)' } },
          { k: { mn: 'Реактив энерги', en: 'Reactive energy' },  v: { mn: 'Class 1S (IEC 62053-24)', en: 'Class 1S (IEC 62053-24)' } },
          { k: { mn: 'Холболт', en: 'Connection' },              v: { mn: '3 фаз 3 утас / 3 фаз 4 утас', en: '3-phase 3-wire / 4-wire' } }
        ]},
        { title: { mn: 'Хүчдэл ба гүйдэл', en: 'Voltage & Current' }, rows: [
          { k: { mn: 'Нэрлэсэн хүчдэл', en: 'Nominal voltage' }, v: { mn: '3×57.7/100V ~ 3×230/400V', en: '3×57.7/100V ~ 3×230/400V' } },
          { k: { mn: 'Нэрлэсэн гүйдэл', en: 'Rated current' },   v: { mn: '1A, 5A', en: '1A, 5A' } },
          { k: { mn: 'Дээд гүйдэл', en: 'Maximum current' },     v: { mn: '6A, 10A', en: '6A, 10A' } }
        ]},
        { title: { mn: 'Эрчим хүчний чанар', en: 'Power Quality' }, rows: [
          { k: { mn: 'Стандарт', en: 'Standard' },               v: { mn: 'IEC 61000-4-30 A класс', en: 'IEC 61000-4-30 Class A' } },
          { k: { mn: 'Хэмжилт', en: 'Measured' },                v: { mn: 'Sag/swell, flicker, гармоник, THD', en: 'Sag/swell, flicker, harmonics, THD' } }
        ]},
        { title: { mn: 'Холбоо ба I/O', en: 'Communication & I/O' }, rows: [
          { k: { mn: 'Протокол', en: 'Protocol' },               v: { mn: 'DLMS/COSEM', en: 'DLMS/COSEM' } },
          { k: { mn: 'Модуль', en: 'Modules' },                  v: { mn: 'GPRS/3G/4G/PLC/Ethernet (hot-swap)', en: 'GPRS/3G/4G/PLC/Ethernet (hot-swap)' } },
          { k: { mn: 'Оролт/Гаралт', en: 'I/O' },                v: { mn: '4 оролт / 4 гаралт', en: '4 inputs / 4 outputs' } }
        ]},
        { title: { mn: 'Ерөнхий', en: 'General' }, rows: [
          { k: { mn: 'Хамгаалалт', en: 'Protection' },           v: { mn: 'IP54 (IEC 60529)', en: 'IP54 (IEC 60529)' } },
          { k: { mn: 'Жин', en: 'Weight' },                      v: { mn: '~2000 г', en: '~2000 g' } },
          { k: { mn: 'Хэмжээ', en: 'Dimensions' },               v: { mn: '280×175×81 мм', en: '280×175×81 mm' } }
        ]}
      ]
    },

    {
      id: 'IHM-4000', category: 'metering', brand: 'INHEMETER', name: 'IHM-4000',
      img: 'img/IHM-4000.png',
      type:    { mn: 'Дата концентратор', en: 'Data Concentrator' },
      tagline: { mn: 'AMI системийн мэдээллийг төвлөрүүлэгч', en: 'Hub that concentrates AMI system data' },
      badges: ['HPLC', 'GPRS/WCDMA/LTE', 'DLMS', 'DL/T 645'],
      summary: {
        mn: 'Олон тоолуурын мэдээллийг цуглуулж, төвлөрүүлэн дамжуулдаг дата концентратор — ухаалаг хэмжилтийн (AMI) системийн "тархи". HPLC доод холбоо ба GPRS/WCDMA/LTE дээд холбоотой.',
        en: 'A data concentrator that collects and concentrates data from many meters — the "brain" of an AMI system. HPLC downstream and GPRS/WCDMA/LTE upstream communication.'
      },
      highlights: [
        { mn: 'HPLC доод холбоо (тоолууруудтай)', en: 'HPLC downstream link (to meters)' },
        { mn: 'GPRS/WCDMA/LTE дээд холбоо (төвтэй)', en: 'GPRS/WCDMA/LTE upstream link (to head-end)' },
        { mn: 'DLMS / DL/T 645 протокол', en: 'DLMS / DL/T 645 protocols' },
        { mn: 'LCD дэлгэц, төлөв заагч', en: 'LCD display and status indicators' }
      ],
      specGroups: [
        { title: { mn: 'Ерөнхий', en: 'General' }, rows: [
          { k: { mn: 'Хүчдэл', en: 'Voltage' },                  v: { mn: '3×230/400V, 50Hz', en: '3×230/400V, 50Hz' } },
          { k: { mn: 'Доод холбоо', en: 'Downstream' },          v: { mn: 'HPLC', en: 'HPLC' } },
          { k: { mn: 'Дээд холбоо', en: 'Upstream' },            v: { mn: 'GPRS / WCDMA / LTE', en: 'GPRS / WCDMA / LTE' } },
          { k: { mn: 'Протокол', en: 'Protocol' },               v: { mn: 'DLMS, DL/T 645', en: 'DLMS, DL/T 645' } },
          { k: { mn: 'Дэлгэц', en: 'Display' },                  v: { mn: 'LCD', en: 'LCD' } }
        ]}
      ]
    },

    /* ============ AIROSD — HEAT PUMPS ============ */
    {
      id: 'hp-r290', category: 'heatpump', brand: 'AIROSD', name: 'R290 Residential',
      img: 'img/hp-r290.png',
      type:    { mn: 'R290 гэр ахуйн моноблок', en: 'R290 Residential Monobloc' },
      tagline: { mn: 'Байгальд ээлтэй R290 хөргөгчтэй DC инвертер', en: 'Eco-friendly R290 refrigerant DC inverter' },
      badges: ['R290', 'A+++', 'DC Inverter', 'SCOP 4.66', '–25°C'],
      models: [ { code: 'QBKFXFC-024SBII', label: '24 kW', pdf: 'datasheets/QBKFXFC-024SBII.pdf' }, { code: 'QBKFXFC-030SBII', label: '30 kW', pdf: 'datasheets/QBKFXFC-030SBII.pdf' } ],
      summary: {
        mn: 'Байгальд ээлтэй R290 (пропан) хөргөгч ашигласан гэр ахуйн моноблок дулааны насос. Бүрэн DC инвертер технологи, A+++ зэрэглэлийн өндөр хэмнэлттэй.',
        en: 'Residential monobloc heat pump using eco-friendly R290 (propane) refrigerant. Full DC inverter technology with A+++ class high efficiency.'
      },
      highlights: [
        { mn: 'Байгальд ээлтэй R290 хөргөгч (GWP бага)', en: 'Eco-friendly R290 refrigerant (low GWP)' },
        { mn: 'A+++ зэрэглэл, SCOP 4.66 хүртэл', en: 'A+++ class, SCOP up to 4.66' },
        { mn: 'Бүрэн DC инвертер, COP 5.2 хүртэл', en: 'Full DC inverter, COP up to 5.2' },
        { mn: 'Халаалт + хөргөлт + халуун ус', en: 'Heating + cooling + hot water' }
      ],
      specGroups: [
        { title: { mn: 'Гүйцэтгэл (A7W35)', en: 'Performance (A7W35)' }, rows: [
          { k: { mn: 'Халаах чадал', en: 'Heating capacity' },   vals: ['6.98–24.0 kW', '8.59–29.95 kW'] },
          { k: { mn: 'COP', en: 'COP' },                          vals: ['4.09–5.22', '3.92–5.32'] },
          { k: { mn: 'Хөргөх чадал (A35W7)', en: 'Cooling cap. (A35W7)' }, vals: ['5.84–15.38 kW', '7.19–18.93 kW'] }
        ]},
        { title: { mn: 'Улирлын гүйцэтгэл (35°C)', en: 'Seasonal (35°C outlet)' }, rows: [
          { k: { mn: 'SCOP', en: 'SCOP' },                        vals: ['4.66', '4.68'] },
          { k: { mn: 'ERP зэрэглэл', en: 'ERP class' },           vals: ['A+++', 'A+++'] },
          { k: { mn: 'Дуу (1м)', en: 'Sound (1m)' },              vals: ['47 dB(A)', '49 dB(A)'] }
        ]},
        { title: { mn: 'Ерөнхий', en: 'General' }, rows: [
          { k: { mn: 'Хөргөгч', en: 'Refrigerant' },             vals: ['R290 · 2.0 kg', 'R290 · 2.3 kg'] },
          { k: { mn: 'Тэжээл', en: 'Power supply' },              vals: ['380–415V/3N~ 50/60Hz', '380–415V/3N~ 50/60Hz'] },
          { k: { mn: 'Усны урсгал', en: 'Water flow' },           vals: ['3.44 m³/h', '5.16 m³/h'] },
          { k: { mn: 'Хэмжээ', en: 'Dimensions' },                vals: ['1100×510×1590 мм', '1100×510×1590 мм'] },
          { k: { mn: 'Жин', en: 'Weight' },                       vals: ['180 kg', '200 kg'] }
        ]}
      ]
    },

    {
      id: 'hp-monobloc', category: 'heatpump', brand: 'AIROSD', name: 'R32 Monobloc',
      img: 'img/hp-monobloc.png',
      type:    { mn: 'R32 моноблок дулааны насос', en: 'R32 Monobloc Heat Pump' },
      tagline: { mn: 'Бүх-нэг-дотор, суурилуулахад хялбар', en: 'All-in-one design, easy to install' },
      badges: ['R32', 'A+++', 'DC Inverter', 'SCOP 4.6', '16–30 kW'],
      models: [ { code: 'QBKFXFC-016SRI', label: '16 kW', pdf: 'datasheets/QBKFXFC-016SRI.pdf' }, { code: 'QBKFXFC-024SRII', label: '24 kW', pdf: 'datasheets/QBKFXFC-024SRII.pdf' }, { code: 'QBKFXFC-030SRII', label: '30 kW', pdf: 'datasheets/QBKFXFC-030SRII.pdf' } ],
      summary: {
        mn: 'R32 хөргөгчтэй моноблок дулааны насос — бүх эд анги нэг блокт багтсан тул суурилуулахад хялбар, найдвартай. Гэр ахуй болон жижиг худалдааны байр.',
        en: 'R32 monobloc heat pump — all components in one block for simple, reliable installation. For homes and small commercial buildings.'
      },
      highlights: [
        { mn: 'Моноблок бүтэц — суурилуулахад хялбар', en: 'Monobloc design — easy installation' },
        { mn: 'A+++ зэрэглэл, SCOP 4.6 хүртэл', en: 'A+++ class, SCOP up to 4.6' },
        { mn: '16 / 24 / 30 kW гурван чадал', en: 'Three sizes: 16 / 24 / 30 kW' },
        { mn: 'Халаалт + хөргөлт + халуун ус', en: 'Heating + cooling + hot water' }
      ],
      specGroups: [
        { title: { mn: 'Гүйцэтгэл (A7W35)', en: 'Performance (A7W35)' }, rows: [
          { k: { mn: 'Халаах чадал', en: 'Heating capacity' },   vals: ['7.57–20.5 kW', '9.91–26.6 kW', '11.72–32.9 kW'] },
          { k: { mn: 'COP', en: 'COP' },                          vals: ['4.10–5.18', '4.09–5.22', '4.22–5.22'] }
        ]},
        { title: { mn: 'Улирлын гүйцэтгэл (35°C)', en: 'Seasonal (35°C outlet)' }, rows: [
          { k: { mn: 'SCOP', en: 'SCOP' },                        vals: ['4.55', '4.6', '4.58'] },
          { k: { mn: 'ERP зэрэглэл', en: 'ERP class' },           vals: ['A+++', 'A+++', 'A+++'] }
        ]},
        { title: { mn: 'Ерөнхий', en: 'General' }, rows: [
          { k: { mn: 'Хөргөгч', en: 'Refrigerant' },             vals: ['R32 · 2.8 kg', 'R32 · 3.2 kg', 'R32 · 5.0 kg'] },
          { k: { mn: 'Тэжээл', en: 'Power supply' },              vals: ['380–415V/3N~', '380–415V/3N~', '380–415V/3N~'] },
          { k: { mn: 'Хэмжээ', en: 'Dimensions' },                vals: ['1080×510×1360', '1100×510×1590', '1100×510×1590'] },
          { k: { mn: 'Жин', en: 'Weight' },                       vals: ['150 kg', '180 kg', '200 kg'] }
        ]}
      ]
    },

    {
      id: 'hp-split', category: 'heatpump', brand: 'AIROSD', name: 'R32 Split',
      img: 'img/hp-split.jpg',
      type:    { mn: 'R32 сплит дулааны насос', en: 'R32 Split Heat Pump' },
      tagline: { mn: 'Гадна + дотор блоктой, уян хатан суурилуулалт', en: 'Outdoor + indoor unit, flexible installation' },
      badges: ['R32', 'A+++', 'DC Inverter', 'Split', '24–30 kW'],
      models: [ { code: 'QBKFXFC-024SRII/WG', label: '24 kW', pdf: 'datasheets/QBKFXFC-024SRII-WG.pdf' }, { code: 'QBKFXFC-030SRII/WG', label: '30 kW', pdf: 'datasheets/QBKFXFC-030SRII-WG.pdf' } ],
      summary: {
        mn: 'Гадна болон дотор блок тусдаа байрлах сплит хувилбар. Дотор блок нь усны систем рүү шууд холбогдох тул суурилуулалт уян хатан, чимээ багатай.',
        en: 'Split version with separate outdoor and indoor units. The indoor hydro unit connects directly to the water system for flexible, quiet installation.'
      },
      highlights: [
        { mn: 'Гадна + дотор блок (тусдаа)', en: 'Separate outdoor + indoor units' },
        { mn: 'Дотор блок чимээ багатай (46 dB)', en: 'Quiet indoor unit (46 dB)' },
        { mn: 'A+++ зэрэглэл, SCOP 4.6 хүртэл', en: 'A+++ class, SCOP up to 4.6' },
        { mn: 'Халаалт + хөргөлт + халуун ус', en: 'Heating + cooling + hot water' }
      ],
      specGroups: [
        { title: { mn: 'Гүйцэтгэл (A7W35)', en: 'Performance (A7W35)' }, rows: [
          { k: { mn: 'Халаах чадал', en: 'Heating capacity' },   vals: ['9.91–26.6 kW', '11.72–32.9 kW'] },
          { k: { mn: 'COP', en: 'COP' },                          vals: ['4.09–5.22', '4.22–5.22'] }
        ]},
        { title: { mn: 'Улирлын гүйцэтгэл (35°C)', en: 'Seasonal (35°C outlet)' }, rows: [
          { k: { mn: 'SCOP', en: 'SCOP' },                        vals: ['4.6', '4.58'] },
          { k: { mn: 'ERP зэрэглэл', en: 'ERP class' },           vals: ['A+++', 'A+++'] }
        ]},
        { title: { mn: 'Ерөнхий', en: 'General' }, rows: [
          { k: { mn: 'Хөргөгч', en: 'Refrigerant' },             vals: ['R32 · 3.2 kg', 'R32 · 5.0 kg'] },
          { k: { mn: 'Гадна блок хэмжээ', en: 'Outdoor dim.' },   vals: ['1100×510×1590', '1100×510×1590'] },
          { k: { mn: 'Дотор блок хэмжээ', en: 'Indoor dim.' },    vals: ['500×340×910', '500×340×910'] },
          { k: { mn: 'Жин (гадна/дотор)', en: 'Weight (out/in)' },vals: ['180 / 55 kg', '200 / 65 kg'] }
        ]}
      ]
    },

    {
      id: 'hp-commercial', category: 'heatpump', brand: 'AIROSD', name: 'R32 Commercial',
      img: 'img/hp-commercial.png',
      type:    { mn: 'R32 худалдаа/үйлдвэрийн дулааны насос', en: 'R32 Commercial Heat Pump' },
      tagline: { mn: '45–200 kW том оврын шийдэл, –35°C ажиллагаа', en: 'Large 45–200 kW solution, operates to –35°C' },
      badges: ['R32', 'A+++', '45–200 kW', '–35°C', 'EVI'],
      models: [
        { code: '045URII', label: '45 kW', pdf: 'datasheets/QBKFXFC-045URII.pdf' }, { code: '070URII', label: '70 kW', pdf: 'datasheets/QBKFXFC-070URII.pdf' },
        { code: '100URII', label: '100 kW', pdf: 'datasheets/QBKFXFC-100URII.pdf' }, { code: '150URII', label: '150 kW', pdf: 'datasheets/QBKFXFC-150URII.pdf' }, { code: '200URII', label: '200 kW', pdf: 'datasheets/QBKFXFC-200URII.pdf' }
      ],
      summary: {
        mn: 'Худалдаа, үйлдвэр, томоохон барилгад зориулсан 45–200 kW чадлын дулааны насос. EVI технологиор –35°C хүйтэнд найдвартай ажиллана. Модуль болгон холбож чадлыг өргөтгөх боломжтой.',
        en: 'Commercial/industrial heat pump from 45–200 kW. EVI technology ensures reliable operation down to –35°C. Modular cascading lets you scale capacity.'
      },
      highlights: [
        { mn: '45–200 kW өргөн чадлын хүрээ', en: 'Wide 45–200 kW capacity range' },
        { mn: 'EVI технологи — –35°C хүртэл', en: 'EVI technology — down to –35°C' },
        { mn: 'A+++ зэрэглэл, SCOP 4.4+', en: 'A+++ class, SCOP 4.4+' },
        { mn: 'Гаралтын ус 60°C хүртэл', en: 'Water outlet up to 60°C' }
      ],
      specGroups: [
        { title: { mn: 'Гүйцэтгэл (A7W35)', en: 'Performance (A7W35)' }, rows: [
          { k: { mn: 'Халаах чадал', en: 'Heating cap.' },        vals: ['14.4–46.7', '22.5–73.9', '29.4–100.7', '46.9–150.3', '61.9–199.5'] },
          { k: { mn: 'COP', en: 'COP' },                          vals: ['4.13–5.21', '4.02–5.12', '3.93–5.01', '4.10–5.18', '3.89–5.11'] }
        ]},
        { title: { mn: 'Улирлын гүйцэтгэл (35°C)', en: 'Seasonal (35°C)' }, rows: [
          { k: { mn: 'SCOP', en: 'SCOP' },                        vals: ['4.44', '4.45', '4.41', '4.55', '4.51'] },
          { k: { mn: 'ERP зэрэглэл', en: 'ERP class' },           vals: ['A+++', 'A+++', 'A+++', 'A+++', 'A+++'] }
        ]},
        { title: { mn: 'Ерөнхий', en: 'General' }, rows: [
          { k: { mn: 'Хөргөгч (R32)', en: 'Refrigerant (R32)' }, vals: ['6.5 kg', '5.0×2 kg', '6.0×2 kg', '7.5×2 kg', '7.5×4 kg'] },
          { k: { mn: 'Ажлын темп.', en: 'Operating temp.' },      vals: ['–35~45°C', '–35~45°C', '–35~45°C', '–35~45°C', '–35~45°C'] },
          { k: { mn: 'Гаралтын темп.', en: 'Outlet temp.' },      vals: ['5~60°C', '5~60°C', '5~60°C', '5~60°C', '5~60°C'] },
          { k: { mn: 'Жин', en: 'Weight' },                       vals: ['265 kg', '600 kg', '800 kg', '1200 kg', '1250 kg'] }
        ]}
      ]
    },

    {
      id: 'hp-twostage', category: 'heatpump', brand: 'AIROSD', name: 'Two-Stage Heating',
      img: 'img/hp-twostage.png',
      type:    { mn: 'Хоёр шатлалт өндөр температурын дулааны насос', en: 'Two-Stage High-Temperature Heat Pump' },
      tagline: { mn: 'Гаралтын ус 85°C хүртэл, –35°C ажиллагаа', en: 'Water outlet up to 85°C, operates to –35°C' },
      badges: ['R410A+R134A', '85°C', '–35°C', 'Scroll ×4', '52–110 kW'],
      models: [ { code: 'KFXF-060UMAII/FD', label: '66 kW', pdf: 'datasheets/KFXF-060UMAII-FD.pdf' }, { code: 'KFXF-110UMAII/FD', label: '110 kW', pdf: 'datasheets/KFXF-110UMAII-FD.pdf' } ],
      summary: {
        mn: 'Хоёр шатлалт компрессорын систем (R410A + R134A) ашиглан гаралтын усыг 85°C хүртэл халаах өндөр температурын дулааны насос. Төвлөрсөн дулаан хангамж, аж үйлдвэрийн процесст тохиромжтой.',
        en: 'Two-stage compressor system (R410A + R134A) heating water up to 85°C. Suited for district heating and industrial process heat.'
      },
      highlights: [
        { mn: 'Гаралтын ус 85°C хүртэл (өндөр темп.)', en: 'Water outlet up to 85°C (high temp.)' },
        { mn: 'Хоёр шатлалт, 4 Scroll компрессор', en: 'Two-stage, 4 scroll compressors' },
        { mn: '–35°C хүйтэнд ажиллана', en: 'Operates down to –35°C' },
        { mn: 'Төвлөрсөн дулаан, аж үйлдвэрт', en: 'District heating & industrial use' }
      ],
      specGroups: [
        { title: { mn: 'Гүйцэтгэл', en: 'Performance' }, rows: [
          { k: { mn: 'Халаах чадал (нэрлэсэн)', en: 'Heating cap. (rated)' }, vals: ['66 kW', '110 kW'] },
          { k: { mn: 'COP (нэрлэсэн)', en: 'COP (rated)' },       vals: ['2.4', '2.4'] },
          { k: { mn: 'A-7W70 чадал/COP', en: 'A-7W70 cap./COP' }, vals: ['55 kW / 2.25', '90 kW / 2.25'] }
        ]},
        { title: { mn: 'Ерөнхий', en: 'General' }, rows: [
          { k: { mn: 'Хөргөгч', en: 'Refrigerant' },             vals: ['R410A + R134A', 'R410A + R134A'] },
          { k: { mn: 'Компрессор', en: 'Compressor' },           vals: ['Scroll × 4', 'Scroll × 4'] },
          { k: { mn: 'Дээд гаралтын темп.', en: 'Max outlet temp.' }, vals: ['85°C', '85°C'] },
          { k: { mn: 'Ажлын темп.', en: 'Operating temp.' },     vals: ['–35~40°C', '–35~40°C'] },
          { k: { mn: 'Жин', en: 'Weight' },                      vals: ['700 kg', '1100 kg'] }
        ]}
      ]
    },

    {
      id: 'hp-water-heater', category: 'heatpump', brand: 'AIROSD', name: 'All-in-One Water Heater',
      img: 'img/hp-water-heater.png',
      type:    { mn: 'Бүх-нэг-дотор DC инвертер усны халаагуур', en: 'All-in-One DC Inverter Water Heater' },
      tagline: { mn: 'Compressor + сав нэгдсэн, эрчим хүч хэмнэсэн', en: 'Integrated compressor + tank, energy saving' },
      badges: ['R32/R410A', 'DC Inverter', 'All-in-One', 'DHW'],
      models: [ { code: 'KRS80-150V', label: '150 L', pdf: 'datasheets/KRS80-150V.pdf' }, { code: 'KRS80-200V', label: '200 L', pdf: 'datasheets/KRS80-200V.pdf' }, { code: 'KRS160-400V', label: '400 L', pdf: 'datasheets/KRS160-400V.pdf' } ],
      summary: {
        mn: 'Компрессор, дулаан солилцуур, ус хадгалах савыг нэг бүтээгдэхүүнд нэгтгэсэн ахуйн халуун усны (DHW) шийдэл. DC инвертер технологиор эрчим хүч хэмнэж, суурилуулалтыг хялбарчилна.',
        en: 'Domestic hot water (DHW) solution integrating compressor, heat exchanger and storage tank in one product. DC inverter technology saves energy and simplifies installation.'
      },
      highlights: [
        { mn: 'Бүх-нэг-дотор бүтэц (сав нэгдсэн)', en: 'All-in-one design (integrated tank)' },
        { mn: 'DC инвертер — эрчим хүч хэмнэлттэй', en: 'DC inverter — energy saving' },
        { mn: 'R32/R410A хөргөгч (загвараас хамаарна)', en: 'R32/R410A refrigerant (model dependent)' },
        { mn: 'Олон давхар хамгаалалт', en: 'Multiple protection layers' }
      ],
      specGroups: [
        { title: { mn: 'Ерөнхий', en: 'General' }, rows: [
          { k: { mn: 'Төрөл', en: 'Type' },                      v: { mn: 'Бүх-нэг-дотор DHW дулааны насос', en: 'All-in-one DHW heat pump' } },
          { k: { mn: 'Технологи', en: 'Technology' },            v: { mn: 'DC инвертер', en: 'DC inverter' } },
          { k: { mn: 'Хөргөгч', en: 'Refrigerant' },             v: { mn: 'R32 / R410A', en: 'R32 / R410A' } },
          { k: { mn: 'Хэрэглээ', en: 'Application' },             v: { mn: 'Ахуйн халуун ус (DHW)', en: 'Domestic hot water (DHW)' } }
        ]}
      ]
    }

  ]
};
