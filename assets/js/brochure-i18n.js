/* ==========================================================================
   brochure.html — Russian and English for the print catalogue.

   Same convention as assets/js/i18n.js: a phrase is keyed by its own
   Azerbaijani text and the value is the HTML that replaces it. This file only
   holds the catalogue deck, so the site bundle stays the size it was — the
   page loads it before i18n.js, which merges it into its own dictionaries.

   The catalogue is printed, not browsed, so the language comes from the URL:
   brochure.html?lang=ru. tools/build-brochure.sh prints all three.
   ========================================================================== */
(function (w) {
  "use strict";

  var RU = {
    /* cover */
    "HeatTech MMC — Xidmət Kataloqu": "HeatTech MMC — каталог услуг",
    "Xidmət kataloqu · 2026": "<i></i>Каталог услуг · 2026",
    "Qazanxana, Odluq və Sənaye Avadanlıqlarının Peşəkar Təmiri, Avtomatlaşdırılması və Modifikasiyası":
      "<em>Профессиональный ремонт</em>, автоматизация и модификация котельных и горелок",
    "Binalar, istehsalat müəssisələri, fabriklər, aqrokomplekslər və asfalt zavodları üçün istənilən gücdə qazanxanaların, sənaye odluqlarının (burner), CO₂ avtomatika sistemlərinin, nasosların, generatorların, vintli hava kompressorlarının və PLC/MCC idarəetmə panolarının texniki servisi, təmiri və retrofiti.":
      "Техническое обслуживание, ремонт и ретрофит котельных любой мощности, промышленных горелок, систем автоматики CO₂, насосов, генераторов, винтовых воздушных компрессоров и щитов управления PLC/MCC для зданий, производственных предприятий, фабрик, агрокомплексов и асфальтобетонных заводов.",
    "ildən artıq təcrübə": "лет опыта",
    "qəza müdaxiləsi": "аварийный выезд",
    "zəmanətli icra": "гарантия на работы",
    "-dək yanacaq qənaəti": "экономии топлива, макс.",
    "Qazanxana": "Котельная",
    "Sənaye odluğu": "Промышленная горелка",
    "Odluq · Burner": "Горелка · Burner",
    "İdarəetmə panosu": "Щит управления",
    "HeatTech MMC · Ə. Nəvai küç. 10C, Babək prospekti, Bakı, Azərbaycan":
      "<b>HeatTech MMC</b> · ул. А. Навои 10C, проспект Бабека, Баку, Азербайджан",

    /* contents */
    "Kataloq · Mündəricat": "Каталог · Содержание",
    "Kataloqun quruluşu": "Структура каталога",
    "2008-ci ildən Azərbaycanda sənaye istilik texnikası":
      "Промышленная теплотехника <em>в Азербайджане</em> с 2008 года",
    "Bir mühəndis komandası, yeddi istiqamət: diaqnostika, əsaslı təmir, modernizasiya (retrofit) və planlı texniki xidmət. Məqsədimiz — avadanlıqlarınızın fasiləsiz işi, maksimal enerji səmərəliliyi və tam təhlükəsizlik.":
      "Одна инженерная команда, семь направлений: диагностика, капитальный ремонт, модернизация (ретрофит) и плановое обслуживание. Наша цель — бесперебойная работа вашего оборудования, максимальная энергоэффективность и полная безопасность.",
    "Rəqəmlərlə biz": "Мы в цифрах",
    "təcrübə · zəmanət · qənaət": "опыт · гарантия · экономия",
    "Xidmətlər 01–03": "Услуги 01–03",
    "qazanxana · odluq · CO₂": "котельная · горелка · CO₂",
    "Xidmətlər 04–07": "Услуги 04–07",
    "nasos · kompressor · generator · pano": "насос · компрессор · генератор · щит",
    "Rəqəmsal baca qazı analizi": "Цифровой анализ дымовых газов",
    "Xidmət modelləri və FAQ": "Модели обслуживания и FAQ",
    "birdəfəlik · müqaviləli": "разовое · договорное",
    "İxtisas sahələri": "Специализация",
    "zavod · aqro · sənaye · bina": "завод · агро · промышленность · здание",
    "Sertifikatlar və brendlər": "Сертификаты и бренды",
    "lisenziya · akkreditasiya": "лицензии · аккредитации",
    "Müştərilər və iş kadrları": "Клиенты и кадры с объектов",
    "sahələrdən": "с объектов",
    "Əlaqə və iş axını": "Контакты и порядок работы",
    "çağırış · audit · icra": "вызов · аудит · исполнение",
    "Müəssisədə mühəndis baxışı": "Осмотр инженера на предприятии",
    "Avadanlığın nominal iş rejimini bərpa etmək - bütün xidmətlərimizin təməl sütunudur. Odluğun kalibrlənməsi, panonun retrofiti və dövri baxış çox vaxt yeni avadanlıqdan qat-qat ucuz başa gəlir və eyni nəticəni verir.":
      "Восстановление номинального режима работы оборудования — основа всех наших услуг. Калибровка горелки, ретрофит щита и периодический осмотр часто обходятся многократно дешевле нового оборудования и дают тот же результат.",

    /* 01 profile */
    "01 / Profil": "01 / Профиль",
    "Təcrübə, zəmanət və ölçülə bilən qənaət":
      "Опыт, гарантия и <em>измеримая экономия</em>",
    "İldən Artıq Təcrübə": "Лет опыта",
    "2008-ci ildən etibarən servis sektorunda uğurlu fəaliyyət, qazanxana və sənaye avadanlıqlarının təmirində zəngin mühəndislik təcrübəsi.":
      "С 2008 года — успешная работа в сервисном секторе и богатый инженерный опыт в ремонте котельного и промышленного оборудования.",
    "Zəmanətli İcra": "Гарантия на работы",
    "Bütün təmir, modifikasiya və ehtiyat hissəsi dəyişimi işlərinə zəmanət öhdəliyi.":
      "Гарантийные обязательства на все работы по ремонту, модификации и замене запасных частей.",
    "Qəza Müdaxiləsi": "Аварийный выезд",
    "İstehsalatın və ya müəssisənin dayanmaması üçün operativ mobil servis xidməti.":
      "Оперативная мобильная сервисная служба, чтобы производство или объект не останавливались.",
    "%-dək": "% макс.",
    "Yanacaq Qənaəti": "Экономия топлива",
    "Odluqların dəqiq kalibrlənməsi və elektron modulyasiyaya keçirilməsi (retrofit) nəticəsində əldə olunan maksimum səmərəlilik.":
      "Максимальная эффективность за счёт точной калибровки горелок и перевода их на электронную модуляцию (ретрофит).",
    "Güc diapazonu · ∞": "Диапазон мощности · ∞",
    "Kiçik həcmli mərkəzi isitmə sistemlərindən tutmuş, nəhəng sənaye buxar qazanlarına, 20 MW-lıq qazanxanalara və asfalt plantı odluqlarına qədər tam texniki xidmət. Mexaniki hissə, yanma prosesi və avtomatika — üçü də bir komandada.":
      "Полное техническое обслуживание — от небольших систем центрального отопления до крупных промышленных паровых котлов, котельных на 20 МВт и горелок асфальтобетонных заводов. Механика, процесс горения и автоматика — всё в одной команде.",
    "Odluq üzərində servis işi": "Сервисные работы на горелке",
    "Qazanxana avadanlığı": "Оборудование котельной",

    /* 02 services */
    "02 / Xidmətlər": "02 / Услуги",
    "Qazanxana · Odluq · CO₂ avtomatika": "Котельная · Горелка · Автоматика CO₂",
    "Əsas xidmətlərimiz": "Основные услуги",
    "İstilik mənbəyi və yanma prosesi": "Источник тепла и <em>процесс горения</em>",
    "Qazanxana sistemi": "Система котельной",
    "Qazanxana Sistemlərinin Kompleks Servisi, Təmiri və Mövsümi Hazırlığı":
      "Комплексное обслуживание, ремонт и сезонная подготовка котельных",
    "İstənilən gücdə və tipli (suqızdırıcı, buxar, qızgın yağ) qazanxanaların kompleks texniki xidməti, diaqnostikası və əsaslı təmiri.":
      "Комплексное обслуживание, диагностика и капитальный ремонт котельных любой мощности и типа (водогрейные, паровые, термомасляные).",
    "Qazanların daxili və xarici səthlərinin ərp və çöküntülərdən kimyəvi/mexaniki təmizlənməsi, təhlükəsizlik klapanlarının və avtomatik idarəetmə lövhələrinin tənzimlənməsi, mövsümə tam hazır vəziyyətə gətirilməsi. Potensial qəzaları öncədən müəyyən edərək gözlənilməz istehsalat dayanmalarının qarşısını alırıq.":
      "Химическая и механическая очистка внутренних и внешних поверхностей котлов от накипи и отложений, настройка предохранительных клапанов и щитов автоматики, полная подготовка к сезону. Выявляя потенциальные аварии заранее, мы предотвращаем незапланированные простои производства.",
    "Sənaye Odluqlarının (Burner) Təmiri, Modifikasiyası və Retrofiti":
      "Ремонт, модификация и ретрофит промышленных горелок (burner)",
    "Qaz, dizel, mazut və kombinasiya olunmuş (çoxyanacaqlı) odluqların təmiri, sınağı və kalibrlənməsi peşəkar səviyyədə.":
      "Профессиональный ремонт, испытание и калибровка газовых, дизельных, мазутных и комбинированных (многотопливных) горелок.",
    "Köhnəlmiş, mexaniki idarəetməli odluqları modernizasiya edərək (retrofit), mikroprosessorlu elektron idarəetmə və servo-mühərrikli hava-yanacaq nisbəti sistemlərinə keçiririk. Yanma prosesini rəqəmsal qaz analizatorları ilə tənzimləyərək CO və CO₂ emissiyalarını minimuma endirir, 15–30% yanacaq qənaəti əldə edirik.":
      "Устаревшие горелки с механическим управлением мы модернизируем (ретрофит), переводя их на микропроцессорное электронное управление и сервоприводное регулирование соотношения «воздух — топливо». Настраивая горение цифровыми газоанализаторами, сводим выбросы CO и CO₂ к минимуму и получаем 15–30% экономии топлива.",
    "CO2 avtomatika sistemi": "Система автоматики CO₂",
    "Aqrokomplekslər üçün CO₂ Qurğularının Sensor və Avtomatika Yenilənməsi":
      "Обновление датчиков и автоматики установок CO₂ для агрокомплексов",
    "İstixana və aqrokomplekslərdə CO₂ səviyyəsinin normadan artıq və ya əskik olması həm məhsula zərər verir, həm də heyət üçün təhlükə yaradır.":
      "В теплицах и агрокомплексах отклонение уровня CO₂ от нормы — как вверх, так и вниз — вредит урожаю и создаёт опасность для персонала.",
    "CO₂ generatorlarının və dozajlama xətlərinin avtomatika sistemlərini sıfırdan qurur və ya mövcud sistemləri yeniləyirik: həssas CO₂ sensorlarının kalibrlənməsi, avtomatik qaz sızma təhlükəsizlik klapanlarının inteqrasiyası və mərkəzi idarəetmə pultuna (PLC) qoşulması.":
      "Автоматику генераторов CO₂ и линий дозирования мы строим с нуля или модернизируем существующие системы: калибровка чувствительных датчиков CO₂, интеграция автоматических отсечных клапанов на случай утечки газа и подключение к центральному пульту управления (ПЛК).",
    "Nasos · Kompressor · Generator · Pano": "Насос · Компрессор · Генератор · Щит",
    "Mexanika, enerji və avtomatika": "Механика, энергия и <em>автоматика</em>",
    "Nasos qrupu": "Насосная группа",
    "Dövriyyə və Təzyiq Nasoslarının Texniki Servisi":
      "Техническое обслуживание циркуляционных и повысительных насосов",
    "Dövriyyə, təzyiq artırma (booster), yanğın və drenaj nasoslarının təmiri və profilaktikası.":
      "Ремонт и профилактика циркуляционных, повысительных (booster), пожарных и дренажных насосов.",
    "Şaquli, üfüqi və mərkəzdənqaçma nasosların diaqnostikası, mexaniki salnik və yastıqların dəyişdirilməsi, rotorların dinamik balanslaşdırılması, mühərrik sarğılarının nəzarəti və tezlik çeviricilərinin (VFD) sazlanması. Kavitasiya riskini aradan qaldırır, elektrik sərfiyyatını azaldırıq.":
      "Диагностика вертикальных, горизонтальных и центробежных насосов, замена механических уплотнений и подшипников, динамическая балансировка роторов, контроль обмоток двигателя и настройка частотных преобразователей (VFD). Снимаем риск кавитации и снижаем расход электроэнергии.",
    "Vintli hava kompressoru": "Винтовой воздушный компрессор",
    "Vintli Hava Kompressorlarının Servisi və Əsaslı Təmiri":
      "Обслуживание и капитальный ремонт винтовых воздушных компрессоров",
    "Pnevmatik avadanlığı sıxılmış hava ilə təmin edən vintli kompressorun dayanması bütün xəttin dayanması deməkdir.":
      "Остановка винтового компрессора, питающего сжатым воздухом пневматическое оборудование, означает остановку всей линии.",
    "Planlı baxış (yağ, hava və separator filtrləri), vint blokunun (air-end) əsaslı təmiri, klapanların bərpası, soyutma radiatorlarının təmizlənməsi və təzyiq sensorlarının sazlanması. Həddindən artıq qızmanın və təzyiq düşmələrinin qarşısını alırıq.":
      "Плановое обслуживание (масляный, воздушный и сепараторный фильтры), капитальный ремонт винтового блока (air-end), восстановление клапанов, очистка радиаторов охлаждения и настройка датчиков давления. Предотвращаем перегрев и падение давления.",
    "Sənaye generatoru": "Промышленный генератор",
    "Sənaye Generatorlarının Servisi və İdarəetmə Panellərinin Təmiri":
      "Обслуживание промышленных генераторов и ремонт панелей управления",
    "Şəbəkə kəsildikdə müəssisəni enerji ilə təmin edən dizel və qaz generatorlarının operativ işə düşməsi həyati əhəmiyyət daşıyır.":
      "При отключении сети мгновенный запуск дизельных и газовых генераторов, питающих предприятие, имеет критическое значение.",
    "Mühərrik və alternatör diaqnostikası, Avtomatik Transfer Şalterlərinin (ATS) tənzimlənməsi, idarəetmə kartlarının proqramlaşdırılması, yük altında sınaqlar və dövri yağ/filtr dəyişimi.":
      "Диагностика двигателя и альтернатора, настройка автоматических вводов резерва (АВР/ATS), программирование плат управления, испытания под нагрузкой и периодическая замена масла и фильтров.",
    "PLC/MCC idarəetmə panosu": "Щит управления PLC/MCC",
    "Sənaye Avtomatikası və PLC/MCC Panolarının Yığılması, Proqramlaşdırılması":
      "Промышленная автоматика: сборка и программирование щитов PLC/MCC",
    "Elektrik paylayıcı, avtomatika və PLC/SCADA idarəetmə panolarının sıfırdan yığılması, retrofiti və operativ təmiri — IEC/EN standartlarına uyğun.":
      "Сборка с нуля, ретрофит и оперативный ремонт распределительных, автоматических и PLC/SCADA щитов управления — по стандартам IEC/EN.",
    "PLC/HMI/SCADA lövhələri, güc və paylayıcı panolar (MCC/MDB), generator avtomatikası (ATS/AMF), tezlik çeviricilərinin (VFD) inteqrasiyası ilə 20–40% elektrik qənaəti, sensor və aktuatorların kalibrlənməsi.":
      "Панели PLC/HMI/SCADA, силовые и распределительные щиты (MCC/MDB), автоматика генераторов (ATS/AMF), интеграция частотных преобразователей (VFD) с экономией электроэнергии 20–40%, калибровка датчиков и приводов.",

    /* 03 flue gas analysis */
    "Baca qazı analizi": "Анализ дымовых газов",
    "03 / Xüsusi mühəndislik xidməti": "03 / Специальная инженерная услуга",
    "Ölçmədən tənzimləmə yoxdur": "Без измерения нет настройки",
    "Rəqəmsal Baca Qazı Analizi ilə Maksimum Səmərəlilik və Minimum Emissiya":
      "<em class=\"cy\">Максимальная эффективность</em> и минимум выбросов благодаря цифровому анализу дымовых газов",
    "Yanacağın vizual yox, spektral cihazlarla təhlili. Kalibrlənmiş analizatorla CO, CO₂, NO, NOx və O₂ göstəricilərini ölçür, hava/yanacaq nisbətini idarəetmə lövhəsindən (servo-mühərriklərdən) dəqiq tənzimləyirik.":
      "Топливо оценивается не на глаз, а спектральными приборами. Калиброванным анализатором мы измеряем CO, CO₂, NO, NOx и O₂ и точно настраиваем соотношение «воздух — топливо» со щита управления (через сервоприводы).",
    "Oksigen · hədəf aralıq": "Кислород · целевой диапазон",
    "ppm ↓": "ppm ↓",
    "Dəm qazı · minimuma": "Угарный газ · к минимуму",
    "Maks. ↑": "Макс. ↑",
    "Karbon dioksid · pik": "Углекислый газ · пик",
    "Azot oksidləri · norma": "Оксиды азота · норма",
    "Oksigen (O₂) — hava nisbətinin açarı": "Кислород (O₂) — ключ к соотношению воздуха",
    "Azad oksigenin çox olması lazımsız havanın qızdırılıb bacadan atılması (enerji itkisi), az olması yanacağın tam yanmaması deməkdir. Hava damperini dəqiq tənzimləyərək O₂-ni ideal həddə (təbii qaz üçün 3–4%) gətiririk.":
      "Избыток свободного кислорода означает, что лишний воздух нагревается и вылетает в дымоход (потеря энергии), недостаток — что топливо сгорает не полностью. Точно настраивая воздушную заслонку, мы выводим O₂ на идеальный уровень (3–4% для природного газа).",
    "Dəm qazı (CO) — gizli yanacaq itkisi": "Угарный газ (CO) — скрытая потеря топлива",
    "Yanacaq tam yanmadıqda karbon-monoksid əmələ gəlir — birbaşa havaya sovrulan yanmamış pul və zəhərlənmə riski. CO-nu ppm səviyyəsinə endirməklə yanacağın 100%-ə yaxın effektivliklə enerjiyə çevrilməsini təmin edirik.":
      "При неполном сгорании образуется монооксид углерода — несгоревшие деньги, улетающие в воздух, и риск отравления. Снижая CO до уровня ppm, мы добиваемся перевода топлива в энергию с эффективностью, близкой к 100%.",
    "Karbon dioksid (CO₂) — yanma keyfiyyəti": "Углекислый газ (CO₂) — качество горения",
    "Bacada CO₂-nin pik səviyyəyə çatması yanacağın ideal yandığını göstərir. Maksimum CO₂ verimi üçün hava və yanacaq girişini tam balansa gətiririk.":
      "Пиковый уровень CO₂ в дымоходе говорит об идеальном сгорании топлива. Ради максимального выхода CO₂ мы полностью балансируем подачу воздуха и топлива.",
    "Azot oksidləri (NO, NOx) — ekologiya": "Оксиды азота (NO, NOx) — экология",
    "Yanma kamerasında temperatur həddindən artıq yüksək olduqda zərərli NOx qazları yaranır. Alovun formasını və temperaturunu tənzimləyərək Low-NOx standartlarını təmin edirik.":
      "Слишком высокая температура в камере сгорания порождает вредные газы NOx. Регулируя форму и температуру факела, мы обеспечиваем соответствие стандартам Low-NOx.",
    "Biznesə və ətraf mühitə xeyri": "Польза для бизнеса и окружающей среды",
    "Yanacaq sərfiyyatında böyük qənaət": "Большая экономия топлива",
    "Düzgün tənzimlənməmiş sənaye odluqları il ərzində tonlarla artıq yanacaq və ya minlərlə kubmetr artıq təbii qaz yandırır. Analizatorla tənzimləmə bu itkini anında dayandırır.":
      "Неверно настроенные промышленные горелки за год сжигают лишние тонны топлива или тысячи кубометров природного газа. Настройка по анализатору немедленно останавливает эту потерю.",
    "Avadanlığın ömrünün uzanması": "Продление срока службы оборудования",
    "Tam yanmayan yanacaq qazan borularında qurum yaradır. 1 mm-lik qurum təbəqəsi istilik ötürülməsini 10% zəiflədir. Analiz sayəsində borular təmiz qalır.":
      "Не сгоревшее полностью топливо оставляет сажу на трубах котла. Слой сажи в 1 мм ухудшает теплопередачу на 10%. Благодаря анализу трубы остаются чистыми.",
    "Ekoloji standartlar və cərimələrdən mühafizə": "Экостандарты и защита от штрафов",
    "CO və NOx qazlarının beynəlxalq ekoloji normalara uyğunlaşdırılması və Dövlət Ekologiya müfəttişliklərinə rəsmi Baca Analizi Hesabatının təqdim edilməsi.":
      "Приведение CO и NOx к международным экологическим нормам и предоставление государственной экологической инспекции официального отчёта об анализе дымовых газов.",

    /* 04 service models, FAQ */
    "Xidmət modelləri": "Модели обслуживания",
    "04 / Əməkdaşlıq formatı": "04 / Формат сотрудничества",
    "Birdəfəlik təmir · Müqaviləli xidmət": "Разовый ремонт · Договорное обслуживание",
    "Sizə Uyğun Xidmət Modelini Seçin": "Выберите подходящую <em>модель обслуживания</em>",
    "Meyar": "Критерий",
    "Birdəfəlik Təmir və Servis": "Разовый ремонт и сервис",
    "Dövri (Müqaviləli) Texniki XidmətMaksimum qənaət":
      "Периодическое (договорное) обслуживание<span class=\"flag\">Максимальная экономия</span>",
    "Xidmət məqsədi": "Цель обслуживания",
    "Mövcud nasazlığı və qəzanı aradan qaldırmaq": "Устранить текущую неисправность или аварию",
    "Qəzaların baş verməsinin öncədən qarşısını almaq": "Предотвратить аварии заранее",
    "Reaksiya müddəti": "Время реакции",
    "Müraciət növbəsinə uyğun operativ müdaxilə": "Оперативный выезд в порядке очереди заявок",
    "24/7 prioritetli və anında reaksiya": "Приоритетная реакция 24/7, немедленно",
    "Maliyyə planlaması": "Финансовое планирование",
    "Qəza anında gözlənilməz xərclər": "Непредвиденные расходы в момент аварии",
    "Öncədən bəlli, sabit illik/aylıq büdcə": "Заранее известный, стабильный годовой/месячный бюджет",
    "Avadanlığın ömrü": "Срок службы оборудования",
    "Qısamüddətli bərpa": "Кратковременное восстановление",
    "Maksimum uzunömürlülük və yüksək effektivlik": "Максимальный ресурс и высокая эффективность",
    "Yanacaq qənaəti": "Экономия топлива",
    "Yalnız təmir olunan detal çərçivəsində": "Только в пределах отремонтированного узла",
    "Daimi kalibrləmə sayəsində maksimum qənaət": "Максимальная экономия за счёт постоянной калибровки",
    "Tez-tez verilən suallar": "Часто задаваемые вопросы",
    "Odluqların (burner) retrofit olunması nə üçün vacibdir?":
      "Почему важен ретрофит горелок (burner)?",
    "Mexaniki idarə olunan köhnə odluqlarda hava və yanacaq nisbəti dəqiq tənzimlənmir. Retrofit zamanı rəqəmsal idarəetmə və servo-mühərriklər quraşdırılır. Bu, yanacağın tam yanmasını təmin edərək 15–30% qənaət verir.":
      "В старых горелках с механическим управлением соотношение воздуха и топлива не настраивается точно. При ретрофите ставятся цифровое управление и сервоприводы. Это обеспечивает полное сгорание топлива и даёт 15–30% экономии.",
    "Baca qazı analizi nə qədər vaxtdan bir aparılmalıdır?":
      "Как часто нужно проводить анализ дымовых газов?",
    "Sənaye müəssisələrində və böyük qazanxanalarda ildə ən azı 4 dəfə (mövsüm keçidlərində). Həmçinin yanacaq keyfiyyəti dəyişdikdə və ya təmir işindən sonra mütləqdir.":
      "На промышленных предприятиях и в крупных котельных — не реже 4 раз в год (на сменах сезона). Также обязательно при изменении качества топлива или после ремонтных работ.",
    "Nə üçün təmir əvəzinə dövri xidmət müqaviləsi bağlamalıyam?":
      "Почему стоит заключить договор на периодическое обслуживание вместо разового ремонта?",
    "Dövri xidmət zamanı mühəndislərimiz kiçik nasazlıqları öncədən aşkar edir. Bu, istehsalatın anidən dayanmasının və sonradan yaranacaq çox daha bahalı təmir xərclərinin qarşısını alır.":
      "При периодическом обслуживании наши инженеры выявляют мелкие неисправности заранее. Это предотвращает внезапную остановку производства и куда более дорогой ремонт впоследствии.",

    /* 05 sectors */
    "05 / Müəssisə tipləri": "05 / Типы объектов",
    "Zavod · Aqro · Sənaye · Bina": "Завод · Агро · Промышленность · Здание",
    "Xidmət göstərdiyimiz müəssisə/sahə tipləri":
      "<em>Типы объектов и отраслей</em>, которые мы обслуживаем",
    "Asfalt zavodu": "Асфальтобетонный завод",
    "Asfalt Zavodları və İnert Material Təsərrüfatları":
      "Асфальтобетонные заводы и хозяйства инертных материалов",
    "Yüksək güclü asfalt plantı odluqlarının (dizel, mazut, təbii qaz və ya kombinasiya olunmuş) təcili təmiri, yanma kamerasının kalibrlənməsi, alov sensorlarının təmizlənməsi və qaz/hava qarışığının optimal tənzimlənməsi.":
      "Срочный ремонт мощных горелок асфальтобетонных заводов (дизель, мазут, природный газ или комбинированные), калибровка камеры сгорания, чистка датчиков пламени и оптимальная настройка газовоздушной смеси.",
    "İstixana təsərrüfatı": "Тепличное хозяйство",
    "Aqrokomplekslər və İstixana Təsərrüfatları": "Агрокомплексы и тепличные хозяйства",
    "İstixanaların CO₂ idarəetmə sistemləri, böyük həcmli isitmə qazanxanaları, suvarma və təzyiq nasos stansiyalarının fasiləsiz servisi.":
      "Бесперебойное обслуживание систем управления CO₂ теплиц, крупных отопительных котельных, оросительных и повысительных насосных станций.",
    "Sənaye müəssisəsi": "Промышленное предприятие",
    "Fabriklər və Sənaye Müəssisələri": "Фабрики и промышленные предприятия",
    "İstehsalat xətlərini təmin edən buxar və qızgın yağ qazanları, yüksək təzyiqli vintli hava kompressorları, sənaye odluqları və MCC panolarının təmiri, retrofiti.":
      "Ремонт и ретрофит паровых и термомасляных котлов, винтовых компрессоров высокого давления, промышленных горелок и щитов MCC, питающих производственные линии.",
    "Yaşayış və biznes binası": "Жилое и деловое здание",
    "Yaşayış Binaları, Otellər və Biznes Mərkəzləri": "Жилые дома, отели и бизнес-центры",
    "Mərkəzi isitmə və isti su qazanxanaları, təzyiq artırma (booster) nasosları, dövriyyə sistemləri və qəza generatorlarının kompleks baxışı.":
      "Комплексное обслуживание котельных центрального отопления и ГВС, повысительных (booster) насосов, циркуляционных систем и аварийных генераторов.",

    /* 06 certificates, brands */
    "Sertifikatlar · Brendlər": "Сертификаты · Бренды",
    "06 / Səlahiyyət": "06 / Полномочия",
    "Lisenziyalar · Akkreditasiyalar · Servis brendləri":
      "Лицензии · Аккредитации · Обслуживаемые бренды",
    "Sertifikatlar və lisenziyalar": "Сертификаты и лицензии",
    "Beynəlxalq Standartlar və Rəsmi Lisenziyalarımız":
      "Международные стандарты и <em>наши официальные лицензии</em>",
    "İqtisadiyyat Nazirliyinin rəsmi lisenziyaları":
      "Официальные лицензии Министерства экономики",
    "Təhlükə potensiallı obyektlərdə (buxar və suqızdırıcı qazanlar, təzyiq altında işləyən qablar) montaj, sazlama və təmir işlərinin, həmçinin texniki qurğuların diaqnostikası və yoxlamalarının aparılması üçün rəsmi lisenziyalar.":
      "Официальные лицензии на монтаж, наладку и ремонт на объектах повышенной опасности (паровые и водогрейные котлы, сосуды под давлением), а также на диагностику и техническое освидетельствование установок.",
    "İstehsalçı avadanlıq sertifikatları": "Сертификаты производителей оборудования",
    "Mühəndis heyətimizin aparıcı beynəlxalq odluq, qazan, vintli kompressor və generator istehsalçılarının xüsusi təlim mərkəzlərində keçdiyi ixtisaslaşma akkreditasiyaları. Tam siyahı və skan nüsxələr: heat.az/#sertifikatlar":
      "Аккредитации о специализации, полученные нашими инженерами в учебных центрах ведущих мировых производителей горелок, котлов, винтовых компрессоров и генераторов. Полный список и сканы: <b style=\"color:var(--accent)\">heat.az/#sertifikatlar</b>",
    "Lisenziya EL-388/2026": "Лицензия EL-388/2026",
    "İqtisadiyyat Nazirliyi": "Министерство экономики",
    "Lisenziya EL-380/2026": "Лицензия EL-380/2026",
    "RIELLO Odluq Təlimi": "Обучение по горелкам RIELLO",
    "Kompressor Servisi": "Сервис компрессоров",
    "Servis etdiyimiz avadanlıq brendləri": "Бренды оборудования, которое мы обслуживаем",

    /* 07 clients, contact */
    "Müştərilər · İşlər": "Клиенты · Работы",
    "07 / Əməkdaşlıq": "07 / Сотрудничество",
    "Sahələrdə görülən işlər · heat.az/qalereya": "Работы на объектах · heat.az/qalereya",
    "Bizə etibar edən şirkətlər": "Компании, которые нам доверяют",
    "Sənaye, tikinti, otel və aqrar sektoru":
      "Промышленность, строительство, отели и <em>аграрный сектор</em>",
    "AGA İş Mərkəzi": "Бизнес-центр AGA",
    "Bakı Sağlamlıq Mərkəzi": "Бакинский центр здоровья",
    "Respublika Diaqnostika Mərkəzi": "Республиканский диагностический центр",
    "Dünyagöz Klinika": "Клиника Dünyagöz",
    "Qəbələ Konserv Zavodu": "Габалинский консервный завод",
    "N1 Çörək Zavodu": "Хлебозавод №1",
    "Bakıxanov Çörək Zavodu": "Бакихановский хлебозавод",
    "Qazanxana · montaj və sazlama": "Котельная · монтаж и наладка",
    "Odluq · Lamtec avtomatika": "Горелка · автоматика Lamtec",
    "Odluq · əsaslı təmir": "Горелка · капитальный ремонт",
    "Pano · elektrik montajı": "Щит · электромонтаж",
    "Təcili çağırış və mühəndis baxışı": "Аварийный вызов и осмотр инженера",
    "Sistemlərinizdə Problem Var, Yoxsa Yanacaq Qənaəti Əldə Etmək İstəyirsiniz?":
      "У вас проблема в системах или вы хотите получить <em>экономию топлива</em>?",
    "Mühəndisimizin müəssisənizə baxış keçirməsi, mövcud avadanlıqların auditi və sizə xüsusi texniki/kommersiya təklifinin hazırlanması üçün bizimlə əlaqə saxlayın.":
      "Свяжитесь с нами, чтобы наш инженер осмотрел ваш объект, провёл аудит оборудования и подготовил для вас индивидуальное технико-коммерческое предложение.",
    "Təcili çağırış": "Аварийный вызов",
    "Mobil / WhatsApp": "Мобильный / WhatsApp",
    "E-poçt": "E-mail",
    "Veb": "Сайт",
    "Ünvan": "Адрес",
    "Ə. Nəvai küç. 10C, Babək prospekti, Bakı": "ул. А. Навои 10C, проспект Бабека, Баку",
    "İş saatları": "Часы работы",
    "B.e–Ş 09:00–18:00 · Təcili çağırış 24/7": "Пн–Сб 09:00–18:00 · Аварийный вызов 24/7",
    "© 2026 HeatTech MMC. Bütün hüquqlar qorunur.":
      "© 2026 HeatTech MMC. Все права защищены.",
    "Necə işləyirik": "Как мы работаем",
    "Zəng və ya WhatsApp sorğusu — avadanlığın tipi və problem barədə qısa məlumat.":
      "Звонок или заявка в WhatsApp — коротко о типе оборудования и проблеме.",
    "Müəssisəyə mühəndis baxışı və mövcud avadanlıqların auditi.":
      "Осмотр инженера на объекте и аудит имеющегося оборудования.",
    "Texniki-kommersiya təklifi: iş həcmi, ehtiyat hissələr, müddət.":
      "Технико-коммерческое предложение: объём работ, запчасти, сроки.",
    "İcra, sınaq və baca qazı analizi ilə yekun tənzimləmə.":
      "Исполнение, испытания и финальная настройка по анализу дымовых газов.",
    "Zəmanət və istəyə görə dövri texniki xidmət müqaviləsi.":
      "Гарантия и, по желанию, договор на периодическое обслуживание."
  };

  var EN = {
    /* cover */
    "HeatTech MMC — Xidmət Kataloqu": "HeatTech MMC — Service Catalogue",
    "Xidmət kataloqu · 2026": "<i></i>Service catalogue · 2026",
    "Qazanxana, Odluq və Sənaye Avadanlıqlarının Peşəkar Təmiri, Avtomatlaşdırılması və Modifikasiyası":
      "<em>Professional repair</em>, automation and modification of boiler plants, burners and industrial equipment",
    "Binalar, istehsalat müəssisələri, fabriklər, aqrokomplekslər və asfalt zavodları üçün istənilən gücdə qazanxanaların, sənaye odluqlarının (burner), CO₂ avtomatika sistemlərinin, nasosların, generatorların, vintli hava kompressorlarının və PLC/MCC idarəetmə panolarının texniki servisi, təmiri və retrofiti.":
      "Service, repair and retrofit of boiler plants of any capacity, industrial burners, CO₂ automation systems, pumps, generators, screw air compressors and PLC/MCC control panels — for buildings, production plants, factories, agro complexes and asphalt plants.",
    "ildən artıq təcrübə": "years of experience",
    "qəza müdaxiləsi": "emergency response",
    "zəmanətli icra": "work under warranty",
    "-dək yanacaq qənaəti": "fuel savings, up to",
    "Qazanxana": "Boiler plant",
    "Sənaye odluğu": "Industrial burner",
    "Odluq · Burner": "Burner",
    "İdarəetmə panosu": "Control panel",
    "HeatTech MMC · Ə. Nəvai küç. 10C, Babək prospekti, Bakı, Azərbaycan":
      "<b>HeatTech MMC</b> · 10C A. Navai str., Babek ave., Baku, Azerbaijan",

    /* contents */
    "Kataloq · Mündəricat": "Catalogue · Contents",
    "Kataloqun quruluşu": "How this catalogue is built",
    "2008-ci ildən Azərbaycanda sənaye istilik texnikası":
      "Industrial heat engineering <em>in Azerbaijan</em> since 2008",
    "Bir mühəndis komandası, yeddi istiqamət: diaqnostika, əsaslı təmir, modernizasiya (retrofit) və planlı texniki xidmət. Məqsədimiz — avadanlıqlarınızın fasiləsiz işi, maksimal enerji səmərəliliyi və tam təhlükəsizlik.":
      "One engineering team, seven directions: diagnostics, overhaul, modernisation (retrofit) and scheduled maintenance. Our goal is uninterrupted operation of your equipment, maximum energy efficiency and complete safety.",
    "Rəqəmlərlə biz": "Us in numbers",
    "təcrübə · zəmanət · qənaət": "experience · warranty · savings",
    "Xidmətlər 01–03": "Services 01–03",
    "qazanxana · odluq · CO₂": "boiler plant · burner · CO₂",
    "Xidmətlər 04–07": "Services 04–07",
    "nasos · kompressor · generator · pano": "pump · compressor · generator · panel",
    "Rəqəmsal baca qazı analizi": "Digital flue gas analysis",
    "Xidmət modelləri və FAQ": "Service models and FAQ",
    "birdəfəlik · müqaviləli": "one-off · contract",
    "İxtisas sahələri": "Industries served",
    "zavod · aqro · sənaye · bina": "plant · agro · industry · building",
    "Sertifikatlar və brendlər": "Certificates and brands",
    "lisenziya · akkreditasiya": "licences · accreditations",
    "Müştərilər və iş kadrları": "Clients and site work",
    "sahələrdən": "from the field",
    "Əlaqə və iş axını": "Contact and workflow",
    "çağırış · audit · icra": "call-out · audit · execution",
    "Müəssisədə mühəndis baxışı": "Engineer inspection on site",
    "Avadanlığın nominal iş rejimini bərpa etmək - bütün xidmətlərimizin təməl sütunudur. Odluğun kalibrlənməsi, panonun retrofiti və dövri baxış çox vaxt yeni avadanlıqdan qat-qat ucuz başa gəlir və eyni nəticəni verir.":
      "Restoring equipment to its rated operating mode is the backbone of every service we offer. Calibrating a burner, retrofitting a panel and inspecting on a schedule are often many times cheaper than new equipment — and deliver the same result.",

    /* 01 profile */
    "01 / Profil": "01 / Profile",
    "Təcrübə, zəmanət və ölçülə bilən qənaət":
      "Experience, warranty and <em>measurable savings</em>",
    "İldən Artıq Təcrübə": "Years of Experience",
    "2008-ci ildən etibarən servis sektorunda uğurlu fəaliyyət, qazanxana və sənaye avadanlıqlarının təmirində zəngin mühəndislik təcrübəsi.":
      "Successful work in the service sector since 2008 and deep engineering experience in repairing boiler and industrial equipment.",
    "Zəmanətli İcra": "Work Under Warranty",
    "Bütün təmir, modifikasiya və ehtiyat hissəsi dəyişimi işlərinə zəmanət öhdəliyi.":
      "A warranty commitment on all repair, modification and spare part replacement work.",
    "Qəza Müdaxiləsi": "Emergency Response",
    "İstehsalatın və ya müəssisənin dayanmaması üçün operativ mobil servis xidməti.":
      "A rapid mobile service crew so production or the facility never stops.",
    "%-dək": "% max",
    "Yanacaq Qənaəti": "Fuel Savings",
    "Odluqların dəqiq kalibrlənməsi və elektron modulyasiyaya keçirilməsi (retrofit) nəticəsində əldə olunan maksimum səmərəlilik.":
      "Maximum efficiency from precise burner calibration and conversion to electronic modulation (retrofit).",
    "Güc diapazonu · ∞": "Capacity range · ∞",
    "Kiçik həcmli mərkəzi isitmə sistemlərindən tutmuş, nəhəng sənaye buxar qazanlarına, 20 MW-lıq qazanxanalara və asfalt plantı odluqlarına qədər tam texniki xidmət. Mexaniki hissə, yanma prosesi və avtomatika — üçü də bir komandada.":
      "Full technical service from small central heating systems to large industrial steam boilers, 20 MW boiler plants and asphalt plant burners. Mechanics, combustion and automation — all in one team.",
    "Odluq üzərində servis işi": "Service work on a burner",
    "Qazanxana avadanlığı": "Boiler plant equipment",

    /* 02 services */
    "02 / Xidmətlər": "02 / Services",
    "Qazanxana · Odluq · CO₂ avtomatika": "Boiler plant · Burner · CO₂ automation",
    "Əsas xidmətlərimiz": "Our core services",
    "İstilik mənbəyi və yanma prosesi": "The heat source and the <em>combustion process</em>",
    "Qazanxana sistemi": "Boiler plant system",
    "Qazanxana Sistemlərinin Kompleks Servisi, Təmiri və Mövsümi Hazırlığı":
      "Complete Service, Repair and Seasonal Preparation of Boiler Plants",
    "İstənilən gücdə və tipli (suqızdırıcı, buxar, qızgın yağ) qazanxanaların kompleks texniki xidməti, diaqnostikası və əsaslı təmiri.":
      "Complete maintenance, diagnostics and overhaul of boiler plants of any capacity and type (hot water, steam, thermal oil).",
    "Qazanların daxili və xarici səthlərinin ərp və çöküntülərdən kimyəvi/mexaniki təmizlənməsi, təhlükəsizlik klapanlarının və avtomatik idarəetmə lövhələrinin tənzimlənməsi, mövsümə tam hazır vəziyyətə gətirilməsi. Potensial qəzaları öncədən müəyyən edərək gözlənilməz istehsalat dayanmalarının qarşısını alırıq.":
      "Chemical and mechanical cleaning of internal and external boiler surfaces from scale and deposits, adjustment of safety valves and automatic control panels, full preparation for the season. By spotting potential failures early we prevent unplanned production stoppages.",
    "Sənaye Odluqlarının (Burner) Təmiri, Modifikasiyası və Retrofiti":
      "Repair, Modification and Retrofit of Industrial Burners",
    "Qaz, dizel, mazut və kombinasiya olunmuş (çoxyanacaqlı) odluqların təmiri, sınağı və kalibrlənməsi peşəkar səviyyədə.":
      "Professional repair, testing and calibration of gas, diesel, heavy oil and combined (multi-fuel) burners.",
    "Köhnəlmiş, mexaniki idarəetməli odluqları modernizasiya edərək (retrofit), mikroprosessorlu elektron idarəetmə və servo-mühərrikli hava-yanacaq nisbəti sistemlərinə keçiririk. Yanma prosesini rəqəmsal qaz analizatorları ilə tənzimləyərək CO və CO₂ emissiyalarını minimuma endirir, 15–30% yanacaq qənaəti əldə edirik.":
      "We modernise worn burners with mechanical control (retrofit), moving them to microprocessor electronic control and servo-driven air-fuel ratio systems. Tuning combustion with digital gas analysers, we cut CO and CO₂ emissions to a minimum and achieve 15–30% fuel savings.",
    "CO2 avtomatika sistemi": "CO₂ automation system",
    "Aqrokomplekslər üçün CO₂ Qurğularının Sensor və Avtomatika Yenilənməsi":
      "Sensor and Automation Upgrades for CO₂ Units in Agro Complexes",
    "İstixana və aqrokomplekslərdə CO₂ səviyyəsinin normadan artıq və ya əskik olması həm məhsula zərər verir, həm də heyət üçün təhlükə yaradır.":
      "In greenhouses and agro complexes a CO₂ level above or below the norm both harms the crop and endangers the staff.",
    "CO₂ generatorlarının və dozajlama xətlərinin avtomatika sistemlərini sıfırdan qurur və ya mövcud sistemləri yeniləyirik: həssas CO₂ sensorlarının kalibrlənməsi, avtomatik qaz sızma təhlükəsizlik klapanlarının inteqrasiyası və mərkəzi idarəetmə pultuna (PLC) qoşulması.":
      "We build automation for CO₂ generators and dosing lines from scratch or upgrade existing systems: calibration of sensitive CO₂ sensors, integration of automatic gas leak safety valves and connection to the central control system (PLC).",
    "Nasos · Kompressor · Generator · Pano": "Pump · Compressor · Generator · Panel",
    "Mexanika, enerji və avtomatika": "Mechanics, power and <em>automation</em>",
    "Nasos qrupu": "Pump set",
    "Dövriyyə və Təzyiq Nasoslarının Texniki Servisi":
      "Technical Service of Circulation and Booster Pumps",
    "Dövriyyə, təzyiq artırma (booster), yanğın və drenaj nasoslarının təmiri və profilaktikası.":
      "Repair and preventive service of circulation, booster, fire-fighting and drainage pumps.",
    "Şaquli, üfüqi və mərkəzdənqaçma nasosların diaqnostikası, mexaniki salnik və yastıqların dəyişdirilməsi, rotorların dinamik balanslaşdırılması, mühərrik sarğılarının nəzarəti və tezlik çeviricilərinin (VFD) sazlanması. Kavitasiya riskini aradan qaldırır, elektrik sərfiyyatını azaldırıq.":
      "Diagnostics of vertical, horizontal and centrifugal pumps, replacement of mechanical seals and bearings, dynamic rotor balancing, motor winding checks and tuning of variable frequency drives (VFD). We remove the risk of cavitation and cut power consumption.",
    "Vintli hava kompressoru": "Screw air compressor",
    "Vintli Hava Kompressorlarının Servisi və Əsaslı Təmiri":
      "Service and Overhaul of Screw Air Compressors",
    "Pnevmatik avadanlığı sıxılmış hava ilə təmin edən vintli kompressorun dayanması bütün xəttin dayanması deməkdir.":
      "When the screw compressor feeding compressed air to pneumatic equipment stops, the whole line stops with it.",
    "Planlı baxış (yağ, hava və separator filtrləri), vint blokunun (air-end) əsaslı təmiri, klapanların bərpası, soyutma radiatorlarının təmizlənməsi və təzyiq sensorlarının sazlanması. Həddindən artıq qızmanın və təzyiq düşmələrinin qarşısını alırıq.":
      "Scheduled service (oil, air and separator filters), overhaul of the air-end, valve restoration, cleaning of cooling radiators and tuning of pressure sensors. We prevent overheating and pressure drops.",
    "Sənaye generatoru": "Industrial generator",
    "Sənaye Generatorlarının Servisi və İdarəetmə Panellərinin Təmiri":
      "Service of Industrial Generators and Repair of Control Panels",
    "Şəbəkə kəsildikdə müəssisəni enerji ilə təmin edən dizel və qaz generatorlarının operativ işə düşməsi həyati əhəmiyyət daşıyır.":
      "When the grid fails, the instant start of the diesel and gas generators powering the facility is critical.",
    "Mühərrik və alternatör diaqnostikası, Avtomatik Transfer Şalterlərinin (ATS) tənzimlənməsi, idarəetmə kartlarının proqramlaşdırılması, yük altında sınaqlar və dövri yağ/filtr dəyişimi.":
      "Engine and alternator diagnostics, adjustment of automatic transfer switches (ATS), programming of control boards, load testing and periodic oil and filter changes.",
    "PLC/MCC idarəetmə panosu": "PLC/MCC control panel",
    "Sənaye Avtomatikası və PLC/MCC Panolarının Yığılması, Proqramlaşdırılması":
      "Industrial Automation: Building and Programming PLC/MCC Panels",
    "Elektrik paylayıcı, avtomatika və PLC/SCADA idarəetmə panolarının sıfırdan yığılması, retrofiti və operativ təmiri — IEC/EN standartlarına uyğun.":
      "Building from scratch, retrofitting and rapid repair of distribution, automation and PLC/SCADA control panels — to IEC/EN standards.",
    "PLC/HMI/SCADA lövhələri, güc və paylayıcı panolar (MCC/MDB), generator avtomatikası (ATS/AMF), tezlik çeviricilərinin (VFD) inteqrasiyası ilə 20–40% elektrik qənaəti, sensor və aktuatorların kalibrlənməsi.":
      "PLC/HMI/SCADA boards, power and distribution panels (MCC/MDB), generator automation (ATS/AMF), VFD integration for 20–40% electricity savings, and calibration of sensors and actuators.",

    /* 03 flue gas analysis */
    "Baca qazı analizi": "Flue gas analysis",
    "03 / Xüsusi mühəndislik xidməti": "03 / Specialist engineering service",
    "Ölçmədən tənzimləmə yoxdur": "No tuning without measurement",
    "Rəqəmsal Baca Qazı Analizi ilə Maksimum Səmərəlilik və Minimum Emissiya":
      "<em class=\"cy\">Maximum efficiency</em> and minimum emissions through digital flue gas analysis",
    "Yanacağın vizual yox, spektral cihazlarla təhlili. Kalibrlənmiş analizatorla CO, CO₂, NO, NOx və O₂ göstəricilərini ölçür, hava/yanacaq nisbətini idarəetmə lövhəsindən (servo-mühərriklərdən) dəqiq tənzimləyirik.":
      "Fuel judged by spectral instruments, not by eye. With a calibrated analyser we measure CO, CO₂, NO, NOx and O₂, then set the air-to-fuel ratio precisely from the control panel (through the servo motors).",
    "Oksigen · hədəf aralıq": "Oxygen · target range",
    "ppm ↓": "ppm ↓",
    "Dəm qazı · minimuma": "Carbon monoxide · to a minimum",
    "Maks. ↑": "Max ↑",
    "Karbon dioksid · pik": "Carbon dioxide · peak",
    "Azot oksidləri · norma": "Nitrogen oxides · within norm",
    "Oksigen (O₂) — hava nisbətinin açarı": "Oxygen (O₂) — the key to the air ratio",
    "Azad oksigenin çox olması lazımsız havanın qızdırılıb bacadan atılması (enerji itkisi), az olması yanacağın tam yanmaması deməkdir. Hava damperini dəqiq tənzimləyərək O₂-ni ideal həddə (təbii qaz üçün 3–4%) gətiririk.":
      "Too much free oxygen means excess air is heated and thrown out of the stack — lost energy; too little means the fuel does not burn completely. By setting the air damper precisely we bring O₂ to its ideal level (3–4% for natural gas).",
    "Dəm qazı (CO) — gizli yanacaq itkisi": "Carbon monoxide (CO) — the hidden fuel loss",
    "Yanacaq tam yanmadıqda karbon-monoksid əmələ gəlir — birbaşa havaya sovrulan yanmamış pul və zəhərlənmə riski. CO-nu ppm səviyyəsinə endirməklə yanacağın 100%-ə yaxın effektivliklə enerjiyə çevrilməsini təmin edirik.":
      "Incomplete combustion produces carbon monoxide — unburnt money going straight into the air, plus a poisoning risk. Bringing CO down to ppm level, we turn fuel into energy at close to 100% efficiency.",
    "Karbon dioksid (CO₂) — yanma keyfiyyəti": "Carbon dioxide (CO₂) — combustion quality",
    "Bacada CO₂-nin pik səviyyəyə çatması yanacağın ideal yandığını göstərir. Maksimum CO₂ verimi üçün hava və yanacaq girişini tam balansa gətiririk.":
      "A peak CO₂ reading in the stack shows the fuel is burning ideally. For maximum CO₂ yield we bring the air and fuel inputs into full balance.",
    "Azot oksidləri (NO, NOx) — ekologiya": "Nitrogen oxides (NO, NOx) — the environment",
    "Yanma kamerasında temperatur həddindən artıq yüksək olduqda zərərli NOx qazları yaranır. Alovun formasını və temperaturunu tənzimləyərək Low-NOx standartlarını təmin edirik.":
      "When the combustion chamber runs too hot, harmful NOx gases form. By shaping the flame and controlling its temperature we meet Low-NOx standards.",
    "Biznesə və ətraf mühitə xeyri": "What the business and the environment gain",
    "Yanacaq sərfiyyatında böyük qənaət": "Large savings on fuel",
    "Düzgün tənzimlənməmiş sənaye odluqları il ərzində tonlarla artıq yanacaq və ya minlərlə kubmetr artıq təbii qaz yandırır. Analizatorla tənzimləmə bu itkini anında dayandırır.":
      "A badly tuned industrial burner burns tonnes of extra fuel or thousands of extra cubic metres of natural gas a year. Tuning with an analyser stops that loss immediately.",
    "Avadanlığın ömrünün uzanması": "Longer equipment life",
    "Tam yanmayan yanacaq qazan borularında qurum yaradır. 1 mm-lik qurum təbəqəsi istilik ötürülməsini 10% zəiflədir. Analiz sayəsində borular təmiz qalır.":
      "Fuel that does not burn completely leaves soot on the boiler tubes. A 1 mm layer of soot weakens heat transfer by 10%. Analysis keeps the tubes clean.",
    "Ekoloji standartlar və cərimələrdən mühafizə": "Environmental standards and protection from fines",
    "CO və NOx qazlarının beynəlxalq ekoloji normalara uyğunlaşdırılması və Dövlət Ekologiya müfəttişliklərinə rəsmi Baca Analizi Hesabatının təqdim edilməsi.":
      "Bringing CO and NOx in line with international environmental norms and submitting an official flue gas analysis report to the state environmental inspectorate.",

    /* 04 service models, FAQ */
    "Xidmət modelləri": "Service models",
    "04 / Əməkdaşlıq formatı": "04 / Form of cooperation",
    "Birdəfəlik təmir · Müqaviləli xidmət": "One-off repair · Contract service",
    "Sizə Uyğun Xidmət Modelini Seçin": "Choose the <em>service model</em> that fits you",
    "Meyar": "Criterion",
    "Birdəfəlik Təmir və Servis": "One-off repair and service",
    "Dövri (Müqaviləli) Texniki XidmətMaksimum qənaət":
      "Periodic (contract) maintenance<span class=\"flag\">Maximum savings</span>",
    "Xidmət məqsədi": "Purpose of the service",
    "Mövcud nasazlığı və qəzanı aradan qaldırmaq": "Clear the current fault or breakdown",
    "Qəzaların baş verməsinin öncədən qarşısını almaq": "Prevent breakdowns before they happen",
    "Reaksiya müddəti": "Response time",
    "Müraciət növbəsinə uyğun operativ müdaxilə": "Prompt call-out in order of requests",
    "24/7 prioritetli və anında reaksiya": "Priority 24/7 response, immediately",
    "Maliyyə planlaması": "Financial planning",
    "Qəza anında gözlənilməz xərclər": "Unexpected costs at the moment of failure",
    "Öncədən bəlli, sabit illik/aylıq büdcə": "A known, fixed annual or monthly budget",
    "Avadanlığın ömrü": "Equipment life",
    "Qısamüddətli bərpa": "Short-term recovery",
    "Maksimum uzunömürlülük və yüksək effektivlik": "Maximum service life and high efficiency",
    "Yanacaq qənaəti": "Fuel savings",
    "Yalnız təmir olunan detal çərçivəsində": "Limited to the part that was repaired",
    "Daimi kalibrləmə sayəsində maksimum qənaət": "Maximum savings through continuous calibration",
    "Tez-tez verilən suallar": "Frequently asked questions",
    "Odluqların (burner) retrofit olunması nə üçün vacibdir?":
      "Why does retrofitting a burner matter?",
    "Mexaniki idarə olunan köhnə odluqlarda hava və yanacaq nisbəti dəqiq tənzimlənmir. Retrofit zamanı rəqəmsal idarəetmə və servo-mühərriklər quraşdırılır. Bu, yanacağın tam yanmasını təmin edərək 15–30% qənaət verir.":
      "On old mechanically controlled burners the air-to-fuel ratio cannot be set precisely. A retrofit installs digital control and servo motors, which gives complete combustion and 15–30% savings.",
    "Baca qazı analizi nə qədər vaxtdan bir aparılmalıdır?":
      "How often should flue gas analysis be carried out?",
    "Sənaye müəssisələrində və böyük qazanxanalarda ildə ən azı 4 dəfə (mövsüm keçidlərində). Həmçinin yanacaq keyfiyyəti dəyişdikdə və ya təmir işindən sonra mütləqdir.":
      "At industrial plants and large boiler houses, at least four times a year (at the seasonal changeovers). It is also required whenever fuel quality changes or after repair work.",
    "Nə üçün təmir əvəzinə dövri xidmət müqaviləsi bağlamalıyam?":
      "Why sign a maintenance contract instead of paying per repair?",
    "Dövri xidmət zamanı mühəndislərimiz kiçik nasazlıqları öncədən aşkar edir. Bu, istehsalatın anidən dayanmasının və sonradan yaranacaq çox daha bahalı təmir xərclərinin qarşısını alır.":
      "During periodic service our engineers catch small faults early. That prevents sudden production stoppages and the far more expensive repairs that follow them.",

    /* 05 sectors */
    "05 / Müəssisə tipləri": "05 / Types of facility",
    "Zavod · Aqro · Sənaye · Bina": "Plant · Agro · Industry · Building",
    "Xidmət göstərdiyimiz müəssisə/sahə tipləri":
      "The <em>facilities and industries</em> we serve",
    "Asfalt zavodu": "Asphalt plant",
    "Asfalt Zavodları və İnert Material Təsərrüfatları":
      "Asphalt Plants and Aggregate Facilities",
    "Yüksək güclü asfalt plantı odluqlarının (dizel, mazut, təbii qaz və ya kombinasiya olunmuş) təcili təmiri, yanma kamerasının kalibrlənməsi, alov sensorlarının təmizlənməsi və qaz/hava qarışığının optimal tənzimlənməsi.":
      "Emergency repair of high-capacity asphalt plant burners (diesel, heavy oil, natural gas or combined), calibration of the combustion chamber, cleaning of flame sensors and optimal tuning of the gas-air mixture.",
    "İstixana təsərrüfatı": "Greenhouse facility",
    "Aqrokomplekslər və İstixana Təsərrüfatları": "Agro Complexes and Greenhouse Facilities",
    "İstixanaların CO₂ idarəetmə sistemləri, böyük həcmli isitmə qazanxanaları, suvarma və təzyiq nasos stansiyalarının fasiləsiz servisi.":
      "Uninterrupted service of greenhouse CO₂ control systems, large heating plants, irrigation and booster pump stations.",
    "Sənaye müəssisəsi": "Industrial facility",
    "Fabriklər və Sənaye Müəssisələri": "Factories and Industrial Plants",
    "İstehsalat xətlərini təmin edən buxar və qızgın yağ qazanları, yüksək təzyiqli vintli hava kompressorları, sənaye odluqları və MCC panolarının təmiri, retrofiti.":
      "Repair and retrofit of the steam and thermal oil boilers, high-pressure screw air compressors, industrial burners and MCC panels that keep production lines running.",
    "Yaşayış və biznes binası": "Residential and business building",
    "Yaşayış Binaları, Otellər və Biznes Mərkəzləri": "Residential Buildings, Hotels and Business Centres",
    "Mərkəzi isitmə və isti su qazanxanaları, təzyiq artırma (booster) nasosları, dövriyyə sistemləri və qəza generatorlarının kompleks baxışı.":
      "Complete servicing of central heating and hot water plants, booster pumps, circulation systems and standby generators.",

    /* 06 certificates, brands */
    "Sertifikatlar · Brendlər": "Certificates · Brands",
    "06 / Səlahiyyət": "06 / Authority",
    "Lisenziyalar · Akkreditasiyalar · Servis brendləri":
      "Licences · Accreditations · Brands we service",
    "Sertifikatlar və lisenziyalar": "Certificates and licences",
    "Beynəlxalq Standartlar və Rəsmi Lisenziyalarımız":
      "International standards and <em>our official licences</em>",
    "İqtisadiyyat Nazirliyinin rəsmi lisenziyaları":
      "Official licences from the Ministry of Economy",
    "Təhlükə potensiallı obyektlərdə (buxar və suqızdırıcı qazanlar, təzyiq altında işləyən qablar) montaj, sazlama və təmir işlərinin, həmçinin texniki qurğuların diaqnostikası və yoxlamalarının aparılması üçün rəsmi lisenziyalar.":
      "Official licences for installation, commissioning and repair at hazardous facilities (steam and hot water boilers, pressure vessels), and for diagnostics and inspection of technical installations.",
    "İstehsalçı avadanlıq sertifikatları": "Manufacturer equipment certificates",
    "Mühəndis heyətimizin aparıcı beynəlxalq odluq, qazan, vintli kompressor və generator istehsalçılarının xüsusi təlim mərkəzlərində keçdiyi ixtisaslaşma akkreditasiyaları. Tam siyahı və skan nüsxələr: heat.az/#sertifikatlar":
      "Specialisation accreditations earned by our engineers at the training centres of leading international burner, boiler, screw compressor and generator manufacturers. Full list and scans: <b style=\"color:var(--accent)\">heat.az/#sertifikatlar</b>",
    "Lisenziya EL-388/2026": "Licence EL-388/2026",
    "İqtisadiyyat Nazirliyi": "Ministry of Economy",
    "Lisenziya EL-380/2026": "Licence EL-380/2026",
    "RIELLO Odluq Təlimi": "RIELLO Burner Training",
    "Kompressor Servisi": "Compressor Service",
    "Servis etdiyimiz avadanlıq brendləri": "Equipment brands we service",

    /* 07 clients, contact */
    "Müştərilər · İşlər": "Clients · Work",
    "07 / Əməkdaşlıq": "07 / Cooperation",
    "Sahələrdə görülən işlər · heat.az/qalereya": "Work on site · heat.az/qalereya",
    "Bizə etibar edən şirkətlər": "Companies that trust us",
    "Sənaye, tikinti, otel və aqrar sektoru":
      "Industry, construction, hotels and the <em>agricultural sector</em>",
    "AGA İş Mərkəzi": "AGA Business Centre",
    "Bakı Sağlamlıq Mərkəzi": "Baku Health Centre",
    "Respublika Diaqnostika Mərkəzi": "Republican Diagnostic Centre",
    "Dünyagöz Klinika": "Dünyagöz Clinic",
    "Qəbələ Konserv Zavodu": "Gabala Cannery",
    "N1 Çörək Zavodu": "Bakery No. 1",
    "Bakıxanov Çörək Zavodu": "Bakikhanov Bakery",
    "Qazanxana · montaj və sazlama": "Boiler plant · installation and commissioning",
    "Odluq · Lamtec avtomatika": "Burner · Lamtec automation",
    "Odluq · əsaslı təmir": "Burner · overhaul",
    "Pano · elektrik montajı": "Panel · electrical installation",
    "Təcili çağırış və mühəndis baxışı": "Emergency call-out and engineer inspection",
    "Sistemlərinizdə Problem Var, Yoxsa Yanacaq Qənaəti Əldə Etmək İstəyirsiniz?":
      "Is something wrong with your systems, or do you want <em>fuel savings</em>?",
    "Mühəndisimizin müəssisənizə baxış keçirməsi, mövcud avadanlıqların auditi və sizə xüsusi texniki/kommersiya təklifinin hazırlanması üçün bizimlə əlaqə saxlayın.":
      "Contact us to have our engineer inspect your site, audit the existing equipment and prepare a technical and commercial proposal for you.",
    "Təcili çağırış": "Emergency line",
    "Mobil / WhatsApp": "Mobile / WhatsApp",
    "E-poçt": "E-mail",
    "Veb": "Web",
    "Ünvan": "Address",
    "Ə. Nəvai küç. 10C, Babək prospekti, Bakı": "10C A. Navai str., Babek ave., Baku",
    "İş saatları": "Working hours",
    "B.e–Ş 09:00–18:00 · Təcili çağırış 24/7": "Mon–Sat 09:00–18:00 · Emergency line 24/7",
    "© 2026 HeatTech MMC. Bütün hüquqlar qorunur.":
      "© 2026 HeatTech MMC. All rights reserved.",
    "Necə işləyirik": "How we work",
    "Zəng və ya WhatsApp sorğusu — avadanlığın tipi və problem barədə qısa məlumat.":
      "A call or WhatsApp message — a short note on the equipment type and the problem.",
    "Müəssisəyə mühəndis baxışı və mövcud avadanlıqların auditi.":
      "An engineer inspects the site and audits the existing equipment.",
    "Texniki-kommersiya təklifi: iş həcmi, ehtiyat hissələr, müddət.":
      "A technical and commercial proposal: scope of work, spare parts, timeline.",
    "İcra, sınaq və baca qazı analizi ilə yekun tənzimləmə.":
      "Execution, testing and final tuning against flue gas analysis.",
    "Zəmanət və istəyə görə dövri texniki xidmət müqaviləsi.":
      "Warranty and, if you wish, a periodic maintenance contract."
  };

  w.heatExtraDict = { ru: RU, en: EN };
})(window);
