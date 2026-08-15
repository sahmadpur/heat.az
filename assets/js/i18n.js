/* ==========================================================================
   heat.az — Russian and English on top of the Azerbaijani markup.

   There are no key names. A phrase is keyed by its own Azerbaijani text, so
   the page source stays the single copy deck: edit the Azerbaijani in the
   HTML and the same string here, nothing else. Values are HTML, because a
   phrase may carry <em>, <strong> or <sub> and each language puts them in a
   different place.

   The walker picks the outermost element whose children are all inline
   (em/strong/span/sub/a …) and swaps its innerHTML. The Azerbaijani original
   is cached on the node, so switching back to `az` restores the markup
   untouched. A phrase missing from a dictionary simply stays Azerbaijani.

   Loaded after main.js so the certificate tiles and photo albums it renders
   are already in the DOM and get translated with everything else.

   ponytail: translation happens in the browser, so crawlers only ever index
   the Azerbaijani page. If Russian or English have to rank on their own,
   pre-render /ru/ and /en/ copies from this dictionary at deploy time.
   ========================================================================== */
(function (w, d) {
  "use strict";

  var STORE = "heat-lang";
  var LANGS = ["az", "ru", "en"];

  /* ---------------------------------------------------------------- ru -- */

  var RU = {
    /* nav, hero */
    "Əsas məzmuna keç": "Перейти к содержанию",
    "Xidmətlər": "Услуги",
    "Baca qazı analizi": "Анализ дымовых газов",
    "Xidmət modelləri": "Модели обслуживания",
    "Sahələr": "Отрасли",
    "Foto qalereya": "Фотогалерея",
    "Sertifikatlar": "Сертификаты",
    "Əlaqə": "Контакты",
    "Bizə zəng edin": "Позвоните нам",
    "İxtisas sahələri": "Специализация",
    "Partnyorlar": "Партнёры",
    "Brendlər": "Бренды",
    "24/7 Fasiləsiz Sənaye, Aqro və Mülki Mühəndislik Servisi":
      "Круглосуточный инженерный сервис для промышленности, агросектора и гражданских объектов",
    "Qazanxana, Odluq və Sənaye Avadanlıqlarının Peşəkar Təmiri, Avtomatlaşdırılması və Modifikasiyası":
      "<em>Профессиональный ремонт</em>, автоматизация и модификация котельных, горелок и промышленного оборудования",
    "Binalar, istehsalat müəssisələri, fabriklər, aqrokomplekslər və asfalt zavodları üçün istənilən gücdə və mürəkkəblikdə olan qazanxanaların, sənaye/qeyri-sənaye odluqlarının (burner), CO2 avtomatika sistemlərinin, dövriyyə və təzyiq nasoslarının, generatorların və vintli hava kompressorlarının profesional texniki servisi, təmiri və retrofit olunması xidmətlərini təqdim edirik. Məqsədimiz — avadanlıqlarınızın fasiləsiz işini, maksimal enerji səmərəliliyini və tam təhlükəsizliyini təmin etməkdir.":
      "Для зданий, производственных предприятий, фабрик, агрокомплексов и асфальтобетонных заводов мы выполняем профессиональное техническое обслуживание, ремонт и ретрофит котельных любой мощности и сложности, промышленных и непромышленных горелок, систем автоматики CO<sub>2</sub>, циркуляционных и повысительных насосов, генераторов и винтовых воздушных компрессоров. Наша цель — бесперебойная работа вашего оборудования, максимальная энергоэффективность и полная безопасность.",
    "Mühəndis Baxışı Təyin Et": "Вызвать инженера на осмотр",
    "Xidmət Kataloqunu Yüklə (PDF)": "Скачать каталог услуг (PDF)",

    /* stats */
    "İldən Artıq Təcrübə": "Лет опыта",
    "2008-ci ildən etibarən servis sektorunda uğurlu fəaliyyətimiz, qazanxana və sənaye avadanlıqlarının təmirində zəngin mühəndislik təcrübəmiz.":
      "С 2008 года мы успешно работаем в сервисном секторе и накопили богатый инженерный опыт в ремонте котельного и промышленного оборудования.",
    "Zəmanətli İcra": "Гарантия на работы",
    "Bütün təmir, modifikasiya və ehtiyat hissəsi dəyişimi işlərinə zəmanət öhdəliyi.":
      "Гарантийные обязательства на все работы по ремонту, модификации и замене запасных частей.",
    "Qəza Müdaxiləsi": "Аварийный выезд",
    "İstehsalatın və ya müəssisənin dayanmaması üçün operativ mobil servis xidməti.":
      "Оперативная мобильная сервисная служба, чтобы производство или объект не останавливались.",
    "-dək": " макс.",
    "Yanacaq Qənaəti": "Экономия топлива",
    "Odluqların dəqiq kalibrlənməsi və elektron modulyasiyaya keçirilməsi (retrofit) nəticəsində əldə olunan maksimum səmərəlilik.":
      "Максимальная эффективность за счёт точной калибровки горелок и перевода их на электронную модуляцию (ретрофит).",
    "Məhdudiyyətsiz Güc Diapazonu": "Без ограничений по мощности",
    "Kiçik həcmli mərkəzi isitmə sistemlərindən başlayaraq, nəhəng sənaye buxar qazanlarına və asfalt plantı odluqlarına qədər tam texniki xidmət.":
      "Полное техническое обслуживание — от небольших систем центрального отопления до крупных промышленных паровых котлов и горелок асфальтобетонных заводов.",

    /* services */
    "Əsas xidmətlərimiz": "Основные услуги",
    "Genişləndirilmiş Mühəndislik Xidmətləri": "Расширенные <em>инженерные услуги</em>",
    "Yeddi əsas istiqamətdə diaqnostika, əsaslı təmir, modernizasiya və planlı texniki xidmət — bir mühəndis komandası ilə.":
      "Диагностика, капитальный ремонт, модернизация и плановое обслуживание по семи основным направлениям — силами одной инженерной команды.",

    "Qazanxana Sistemlərinin Kompleks Servisi, Təmiri və Mövsümi Hazırlığı":
      "Комплексное обслуживание, ремонт и сезонная подготовка котельных",
    "Binaların, sənaye müəssisələrinin və aqrokomplekslərin fasiləsiz istilik və buxar təchizatı tam olaraq qazanxana sistemlərinin etibarlılığından asılıdır. Biz istənilən gücdə və tipli (suqızdırıcı, buxar, qızgın yağ) qazanxanaların kompleks texniki xidmətini, diaqnostikasını və əsaslı təmirini icra edirik.":
      "Бесперебойное тепло- и пароснабжение зданий, промышленных предприятий и агрокомплексов целиком зависит от надёжности котельной. Мы выполняем комплексное обслуживание, диагностику и капитальный ремонт котельных любой мощности и типа (водогрейные, паровые, термомасляные).",
    "Xidmətlərimizə qazanların daxili və xarici səthlərinin ərp və çöküntülərdən kimyəvi/mexaniki təmizlənməsi, təhlükəsizlik klapanlarının və avtomatik idarəetmə lövhələrinin tənzimlənməsi və mövsümə tam hazır vəziyyətə gətirilməsi daxildir. Potensial qəzaları öncədən müəyyən edərək, gözlənilməz istehsalat dayanmalarının qarşısını alırıq.":
      "В работы входят химическая и механическая очистка внутренних и внешних поверхностей котлов от накипи и отложений, настройка предохранительных клапанов и щитов автоматики, полная подготовка к отопительному сезону. Выявляя потенциальные аварии заранее, мы предотвращаем незапланированные простои производства.",
    "Ətraflı": "Подробнее",
    "Yığışdır": "Свернуть",

    "Sənaye və Qeyri-Sənaye Odluqlarının (Burner) Təmiri, Modifikasiyası və Retrofiti":
      "Ремонт, модификация и ретрофит промышленных и непромышленных горелок",
    "Odluq (burner) qazanxana sisteminin “ürəyi” hesab olunur və onun yanlış çalışması böyük yanacaq itkisinə və yanğın təhlükəsinə yol açır. Biz qaz, dizel, mazut və kombinasiya olunmuş (çoxyanacaqlı) odluqların təmiri, sınağı və kalibrlənməsini peşəkar səviyyədə həyata keçiririk.":
      "Горелка — «сердце» котельной, и её неверная работа ведёт к большим потерям топлива и риску возгорания. Мы профессионально ремонтируем, испытываем и калибруем газовые, дизельные, мазутные и комбинированные (многотопливные) горелки.",
    "Mənəvi və ya fiziki olaraq köhnəlmiş, mexaniki idarəetməli odluqlarınızı modernizasiya edərək (Retrofit), mikroprosessorlu elektron idarəetmə və servo-mühərrikli hava-yanacaq nisbəti sistemlərinə keçiririk. Yanma prosesini rəqəmsal qaz analizatorları vasitəsilə tənzimləməklə, CO və CO2 emissiyalarını minimuma endirir və 15%-dən 30%-dək yanacaq qənaəti əldə edirik.":
      "Морально или физически устаревшие горелки с механическим управлением мы модернизируем (ретрофит), переводя их на микропроцессорное электронное управление и сервоприводное регулирование соотношения «воздух — топливо». Настраивая процесс горения цифровыми газоанализаторами, мы сводим выбросы CO и CO<sub>2</sub> к минимуму и получаем от 15% до 30% экономии топлива.",

    "Aqrokomplekslər üçün CO2 Qurğularının Sensor və Avtomatika Yenilənməsi":
      "Обновление датчиков и автоматики установок CO<sub>2</sub> для агрокомплексов",
    "Müasir istixana və aqrokomplekslərdə bitkilərin fotosintez prosesini sürətləndirmək və məhsuldarlığı maksimuma çatdırmaq üçün CO2 dozajlama sistemlərindən istifadə olunur. Lakin CO2 səviyyəsinin normadan artıq və ya az olması həm məhsula zərər verir, həm də heyət üçün təhlükə yaradır.":
      "В современных теплицах и агрокомплексах системы дозирования CO<sub>2</sub> используются, чтобы ускорить фотосинтез растений и вывести урожайность на максимум. Но отклонение уровня CO<sub>2</sub> от нормы — как вверх, так и вниз — вредит урожаю и создаёт опасность для персонала.",
    "Biz CO2 generatorlarının və dozajlama xətlərinin avtomatika sistemlərini sıfırdan qurur və ya mövcud sistemləri yeniləyirik. Həssas CO2 sensorlarının kalibrlənməsi, avtomatik qaz sızma təhlükəsizlik klapanlarının inteqrasiyası və mərkəzi idarəetmə pultuna (PLC) qoşulmasını təmin edərək, aqrokompleksinizdə tam nəzarətli və təhlükəsiz mühit yaradırıq.":
      "Мы строим автоматику генераторов CO<sub>2</sub> и линий дозирования с нуля или модернизируем существующие системы. Калибровка чувствительных датчиков CO<sub>2</sub>, интеграция автоматических отсечных клапанов на случай утечки газа и подключение к центральному пульту управления (ПЛК) создают в вашем агрокомплексе полностью контролируемую и безопасную среду.",

    "Dövriyyə və Təzyiq Nasoslarının Texniki Servisi":
      "Техническое обслуживание циркуляционных и повысительных насосов",
    "Mayenin bərabər və təzyiqlə paylanması üçün istifadə olunan dövriyyə, təzyiq artırma (booster), yanğın və drenaj nasoslarının təmiri və profilaktikası mühəndislik dəqiqliyi tələb edir.":
      "Ремонт и профилактика циркуляционных, повысительных (booster), пожарных и дренажных насосов, обеспечивающих равномерную подачу жидкости под давлением, требуют инженерной точности.",
    "Şaquli, üfüqi və mərkəzdənqaçma nasosların diaqnostikası, mexaniki salnik (kipləndirici) və diyircəkli yastıqların (bearing) dəyişdirilməsi, rotorların dinamik balanslaşdırılması, mühərrik sarğılarının nəzarəti və tezlik çeviricilərinin (Inverter/VFD) sazlanması xidmətlərini göstəririk. Bu sayədə nasosların kavitasiya riskini aradan qaldırır və elektrik enerjisi sərfiyyatını ciddi şəkildə azaldırıq.":
      "Мы выполняем диагностику вертикальных, горизонтальных и центробежных насосов, замену механических уплотнений (сальников) и подшипников, динамическую балансировку роторов, контроль обмоток электродвигателя и настройку частотных преобразователей (Inverter/VFD). Так мы снимаем риск кавитации и заметно снижаем расход электроэнергии.",

    "Vintli Hava Kompressorlarının Servisi və Əsaslı Təmiri":
      "Обслуживание и капитальный ремонт винтовых воздушных компрессоров",
    "Sənaye müəssisələrinin pnevmatik avadanlıqlarını sıxılmış hava ilə təmin edən vintli kompressorların dayanması bütün istehsalat xəttinin iflic olması deməkdir.":
      "Остановка винтового компрессора, питающего сжатым воздухом пневматическое оборудование предприятия, парализует всю производственную линию.",
    "Biz vintli kompressorların planlı texniki baxışını (yağ, hava və separator filtrlərinin dəyişdirilməsi), vint blokunun (air-end) əsaslı təmirini, klapanların bərpasını, soyutma radiatorlarının təmizlənməsini və təzyiq sensorlarının sazlanmasını icra edirik. Avadanlığın həddindən artıq qızmasının və təzyiq düşmələrinin qarşısını alaraq, onun istismar ömrünü uzadırıq.":
      "Мы проводим плановое обслуживание винтовых компрессоров (замена масляного, воздушного и сепараторного фильтров), капитальный ремонт винтового блока (air-end), восстановление клапанов, очистку радиаторов охлаждения и настройку датчиков давления. Предотвращая перегрев и падение давления, мы продлеваем срок службы оборудования.",

    "Sənaye Generatorlarının Servisi və İdarəetmə Panellərinin Təmiri":
      "Обслуживание промышленных генераторов и ремонт панелей управления",
    "Əsas elektrik şəbəkəsində kəsilmə baş verdikdə müəssisəni fasiləsiz enerji ilə təmin edən dizel və qaz generatorlarının operativ işə düşməsi həyati əhəmiyyət kəsb edir.":
      "При отключении основной электросети мгновенный запуск дизельных и газовых генераторов, питающих предприятие, имеет критическое значение.",
    "Biz generatorların mühərrik və alternatör hissəsinin diaqnostikasını, Avtomatik Transfer Şalterlərinin (ATS) tənzimlənməsini, idarəetmə kartlarının proqramlaşdırılmasını, yük altında sınaqlarını və dövrü yağ/filtr dəyişimini həyata keçiririk. Generatorunuzun hər an qəza rejimində problemsiz işə düşəcəyinə zəmanət veririk.":
      "Мы выполняем диагностику двигателя и генераторной части, настройку автоматических вводов резерва (АВР/ATS), программирование плат управления, испытания под нагрузкой и периодическую замену масла и фильтров. Мы гарантируем, что ваш генератор в любой момент запустится в аварийном режиме без сбоев.",

    "Sənaye Avtomatikası, Elektrik və İdarəetmə Panolarının (PLC/MCC) Yığılması, Proqramlaşdırılması və Bərpası":
      "Сборка, программирование и восстановление щитов промышленной автоматики и электрощитов (ПЛК/MCC)",
    "İstənilən güc və mürəkkəblikdə olan qazanxana, xətt və sənaye müəssisələri üçün elektrik paylayıcı, avtomatika və PLC/SCADA idarəetmə panolarının proqramlaşdırılması, sıfırdan yığılması, retrofiti (modernizasiyası) və operativ təmiri.":
      "Программирование, сборка с нуля, ретрофит (модернизация) и оперативный ремонт распределительных, автоматических и <strong>PLC/SCADA</strong> щитов управления для котельных, технологических линий и промышленных предприятий любой мощности и сложности.",
    "Müasir sənaye müəssisələrinin və mürəkkəb qazanxana sistemlərinin fasiləsiz, təhlükəsiz və insan faktoru olmadan işləməsi birbaşa avtomatika və elektrik panolarının düzgün qurulmasından asılıdır. Mühəndis heyətimiz beynəlxalq IEC/EN standartlarına uyğun olaraq elektrik və avtomatika sistemlərinin layihələndirilməsini və tətbiqini icra edir.":
      "Бесперебойная, безопасная и не зависящая от человеческого фактора работа современных предприятий и сложных котельных напрямую зависит от правильно собранных щитов автоматики и электрощитов. Наши инженеры проектируют и внедряют электрические системы и системы автоматики в соответствии с международными стандартами <strong>IEC/EN</strong>.",
    "Mənəvi və fiziki olaraq köhnəlmiş, tez-tez sıradan çıxan idarəetmə panellərini modernizasiya edərək (Retrofit) müasir PLC (Mikroprosessor), HMI (sensor ekran) və Tezlik Çeviriciləri (VFD/Invertor) ilə təchiz edirik.":
      "Морально и физически устаревшие, часто выходящие из строя панели управления мы модернизируем (ретрофит), оснащая их современными <strong>ПЛК (микропроцессор)</strong>, <strong>HMI (сенсорная панель)</strong> и <strong>частотными преобразователями (VFD/инвертор)</strong>.",
    "İcra etdiyimiz işlər:": "Что мы делаем:",
    "Avtomatika və İdarəetmə Panolarının (PLC/HMI/SCADA) Yığılması: Qazanxana, CO2 dozajlama, kompressor və istehsalat xətləri üçün mikroprosessorlu idarəetmə lövhələrinin sıfırdan hazırlanması və proqramlaşdırılması.":
      "<strong>Сборка щитов автоматики и управления (ПЛК/HMI/SCADA):</strong> изготовление с нуля и программирование микропроцессорных щитов управления для котельных, систем дозирования CO<sub>2</sub>, компрессоров и производственных линий.",
    "Güc və Paylayıcı Elektrik Panoları (MCC / MDB): Sənaye müəssisələrinin (və ya binalarının) elektrik paylama, mühərrik idarəetmə və qoruma sistemlərinin qurulması.":
      "<strong>Силовые и распределительные электрощиты (MCC / MDB):</strong> построение систем распределения электроэнергии, управления двигателями и защиты для промышленных предприятий и зданий.",
    "Generator Avtomatikasının (ATS / AMF) Sıfırdan Yığılması və Təmiri: Şəbəkə kəsildikdə avtomatik işə düşən transfer panellərinin (ATS) sıfırdan toplanması, generator idarəetmə kartlarının (Deep Sea, ComAp, Datakom və s.) proqramlaşdırılması, sinxronizasiya panellərinin qurulması və nasazlıqların aradan qaldırılması.":
      "<strong>Сборка с нуля и ремонт автоматики генераторов (ATS / AMF):</strong> изготовление панелей автоматического ввода резерва (АВР), программирование плат управления генераторами (Deep Sea, ComAp, Datakom и др.), построение панелей синхронизации и устранение неисправностей.",
    "Panoların Diaqnostikası və Operativ Bərpası: Yanmış, kabel səliqəsizliyi olan və ya tez-tez qəzaya düşən panel xətlərinin təftişi, kontaktor, rele, avtomat və sensorların yenilənməsi.":
      "<strong>Диагностика и оперативное восстановление щитов:</strong> ревизия сгоревших, неаккуратно смонтированных или часто отказывающих линий щита, замена контакторов, реле, автоматов и датчиков.",
    "Tezlik Çeviriciləri (VFD / Invertor / Soft Starter) İnteqrasiyası: Nasos və mühərriklərin yumşaq işə düşməsini təmin edərək 20-40% elektrik qənaəti və avadanlığın qorunması.":
      "<strong>Интеграция частотных преобразователей (VFD / инвертор / устройство плавного пуска):</strong> плавный пуск насосов и двигателей даёт 20–40% экономии электроэнергии и защищает оборудование.",
    "Sensor və Aktuator Kalibrlənməsi: Təzyiq, temperatur, səviyyə və qaz sensorlarının idarəetmə paneli ilə tam inteqrasiyası.":
      "<strong>Калибровка датчиков и исполнительных механизмов:</strong> полная интеграция датчиков давления, температуры, уровня и газа со щитом управления.",

    /* flue gas analysis */
    "Xüsusi mühəndislik xidməti": "Специальная инженерная услуга",
    "Rəqəmsal Baca Qazı Analizi ilə Maksimum Səmərəlilik və Minimum Emissiya":
      "Цифровой анализ дымовых газов — <em>максимальный КПД</em> и минимальные выбросы",
    "Yanacağın vizual yox, spektral cihazlarla təhlili: hər bir milliqram qaza nəzarət edərək maliyyənizi və ətraf mühiti qoruyuruq.":
      "Топливо анализируется не на глаз, а спектральными приборами: контролируя каждый миллиграмм газа, мы бережём ваши деньги и окружающую среду.",
    "Qazanxana sistemlərində yanacağın (təbii qaz, dizel, mazut) vizual olaraq — alovun rənginə görə tənzimlənməsi dövrü geridə qalmışdır. Alov gözə mükəmməl görünə bilsə də, kimyəvi tərkibində ciddi yanacaq itkiləri və zəhərli qaz tullantıları ola bilər.":
      "Эпоха настройки топлива (природный газ, дизель, мазут) на глаз — по цвету пламени — осталась позади. Пламя может выглядеть идеальным, но по химическому составу давать серьёзные потери топлива и токсичные выбросы.",
    "Biz xüsusi kalibrlənmiş rəqəmsal Baca Qazı Analizatorları vasitəsilə odluğun yanma kamerasından çıxan qazların tərkibindəki CO, CO2, NO, NOx və O2 göstəricilərini mikroskopik dəqiqliklə ölçür, alqoritmlərə əsasən hava/yanacaq nisbətini idarəetmə lövhəsindən (servo-mühərriklərdən) dəqiq tənzimləyirik.":
      "Специально откалиброванными цифровыми газоанализаторами мы с микроскопической точностью измеряем содержание CO, CO<sub>2</sub>, NO, NO<sub>x</sub> и O<sub>2</sub> в газах, выходящих из камеры сгорания горелки, и по алгоритмам точно выставляем соотношение «воздух — топливо» со щита управления (через сервоприводы).",
    "Ölçülən qazlar və onların tənzimlənməsinin texniki əhəmiyyəti":
      "Измеряемые газы и техническое значение их настройки",
    "Oksigen · hədəf aralıq": "Кислород · целевой диапазон",
    "Dəm qazı · minimuma": "Угарный газ · к минимуму",
    "Maks.↑": "Макс.<i>↑</i>",
    "Karbon dioksid · pik": "Углекислый газ · пик",
    "Azot oksidləri · norma": "Оксиды азота · норма",
    "Oksigen (O2) — Yanma Hava Nisbətinin Açarı":
      "Кислород (O<sub>2</sub>) — ключ к соотношению воздуха при горении",
    "Azad oksigenin normadan çox olması lazımsız havanın qızdırılaraq bacadan bayıra atılması (enerji itkisi), az olması isə yanacağın tam yanmaması deməkdir. Odluğun hava damperini mikron dəqiqliyi ilə tənzimləyərək O2 göstəricisini ideal həddə (təbii qaz üçün 3–4% aralığına) gətiririk.":
      "Избыток свободного кислорода означает, что лишний воздух нагревается и вылетает в дымовую трубу (потеря энергии), а недостаток — что топливо сгорает не полностью. Настраивая воздушную заслонку горелки с микронной точностью, мы выводим показатель O<sub>2</sub> на идеальный уровень (для природного газа — диапазон 3–4%).",
    "Dəm Qazı (CO) — Gizli Yanacaq İtkisi və Təhlükə":
      "Угарный газ (CO) — скрытая потеря топлива и опасность",
    "Yanacaq tam yanmadıqda karbon-monoksid (CO) əmələ gəlir. Bu, birbaşa havaya sovurulan vəsait və zəhərlənmə riskidir. CO göstəricisini ppm səviyyəsinə endirməklə yanacağın 100%-ə yaxın effektivliklə enerjiyə çevrilməsini təmin edirik.":
      "При неполном сгорании топлива образуется монооксид углерода (CO). Это деньги, выброшенные в воздух, и риск отравления. Снижая CO до уровня ppm, мы добиваемся преобразования топлива в энергию с эффективностью, близкой к 100%.",
    "Karbon Dioksid (CO2) — Yanma Keyfiyyətinin İndikatoru":
      "Углекислый газ (CO<sub>2</sub>) — индикатор качества горения",
    "Bacada CO2-nin pik səviyyəyə çatması yanacağın ideal yandığını göstərir. Maksimum CO2 verimini almaq üçün hava və yanacaq girişini tam balansa gətiririk.":
      "Пиковый уровень CO<sub>2</sub> в дымовой трубе говорит об идеальном сгорании топлива. Чтобы получить максимальный выход CO<sub>2</sub>, мы приводим подачу воздуха и топлива в полный баланс.",
    "Azot Oksidləri (NO və NOx) — Ətraf Mühit və Ekologiya":
      "Оксиды азота (NO и NO<sub>x</sub>) — окружающая среда и экология",
    "Yanma kamerasında temperatur həddindən artıq yüksək olduqda zərərli NOx qazları yaranır. Alovun formalı yanmasını və temperaturunu tənzimləyərək Low-NOx (aşağı emissiya) standartlarını təmin edirik.":
      "Когда температура в камере сгорания слишком высока, образуются вредные газы NO<sub>x</sub>. Настраивая форму факела и температуру горения, мы обеспечиваем соответствие стандартам Low-NOx (низкие выбросы).",
    "Bu tənzimləmələrin biznesinizə və ətraf mühitə faydası":
      "Что эти настройки дают вашему бизнесу и окружающей среде",
    "Yanacaq Sərfiyyatında Böyük Qənaət": "Большая экономия топлива",
    "Yanma dərəcəsi düzgün tənzimlənməmiş sənaye odluqları il ərzində tonlarla artıq yanacaq və ya minlərlə kubmetr artıq təbii qaz yandırır. Analizatorla edilən tənzimləmə bu itkini anında dayandırır.":
      "Промышленная горелка с неверно настроенным горением сжигает за год лишние тонны топлива или тысячи кубометров природного газа. Настройка по газоанализатору прекращает эту потерю сразу.",
    "Avadanlığın Ömrünün Uzanması": "Продление срока службы оборудования",
    "Tam yanmayan yanacaq qazanın borularında qurum yaradır. 1 mm-lik qurum təbəqəsi istilik ötürülməsini 10% zəiflədir. Analiz sayəsində qazan boruları təmiz qalır.":
      "Не сгоревшее полностью топливо оставляет сажу на трубах котла. Слой сажи в 1 мм снижает теплопередачу на 10%. Благодаря анализу трубы котла остаются чистыми.",
    "Ekoloji Standartlar və Cərimələrdən Mühafizə":
      "Экологические нормы и защита от штрафов",
    "Zəhərli CO və NOx qazlarının beynəlxalq ekoloji normalara uyğunlaşdırılması və Dövlət Ekologiya müfəttişliklərinin yoxlamalarında rəsmi Baca Analizi Hesabatı (Report) təqdim edilməsi.":
      "Приведение токсичных CO и NO<sub>x</sub> к международным экологическим нормам и предоставление официального отчёта об анализе дымовых газов (Report) при проверках государственной экологической инспекции.",

    /* service models */
    "Xidmət modelləri": "Модели обслуживания",
    "Sizə Uyğun Xidmət Modelini Seçin": "Выберите подходящую <em>модель обслуживания</em>",
    "Müəssisənizin ehtiyaclarına uyğun olaraq istər təcili birdəfəlik təmir, istərsə də uzunmüddətli dövri texniki xidmət müqaviləsi təklif edirik.":
      "В зависимости от потребностей вашего предприятия мы предлагаем как срочный разовый ремонт, так и долгосрочный договор на периодическое техническое обслуживание.",
    "Birdəfəlik Təmir və Servis": "Разовый ремонт и сервис",
    "Xidmət Məqsədi": "Цель обслуживания",
    "Mövcud nasazlığı və qəzanı aradan qaldırmaq": "Устранить имеющуюся неисправность или аварию",
    "Reaksiya Müddəti": "Время реакции",
    "Müraciət növbəsinə uyğun operativ müdaxilə": "Оперативный выезд в порядке очереди обращений",
    "Maliyyə Planlaması": "Финансовое планирование",
    "Qəza anında gözlənilməz xərclər": "Непредвиденные расходы в момент аварии",
    "Avadanlığın Ömrü": "Срок службы оборудования",
    "Qısamüddətli bərpa": "Кратковременное восстановление",
    "Yalnız təmir olunan detal çərçivəsində": "Только в пределах отремонтированного узла",
    "Birdəfəlik təmir üçün sorğu": "Заявка на разовый ремонт",
    "Maksimum Qənaət və Təhlükəsizlik": "Максимальная экономия и безопасность",
    "Dövri (Müqaviləli) Texniki Xidmət": "Периодическое обслуживание по договору",
    "Qəzaların baş verməsinin öncədən qarşısını almaq": "Предотвратить аварии заранее",
    "24/7 prioritetli və anında reaksiya": "Приоритетная реакция 24/7, немедленно",
    "Öncədən bəlli, sabit illik/aylıq büdcə": "Заранее известный фиксированный годовой/месячный бюджет",
    "Maksimum uzunömürlülük və yüksək effektivlik": "Максимальный ресурс и высокая эффективность",
    "Daimi kalibrləmə sayəsində maksimum qənaət": "Максимальная экономия за счёт постоянной калибровки",
    "Müqavilə şərtlərini öyrən": "Узнать условия договора",

    /* sectors */
    "Müəssisə tipləri": "Типы объектов",
    "İxtisaslaşdığımız Sahələr": "Наша <em>специализация</em>",
    "Asfalt Zavodları və İnert Material Təsərrüfatları (Asfalt Plantları)":
      "Асфальтобетонные заводы и хозяйства инертных материалов",
    "Yüksək güclü və ağır şəraitdə çalışan asfalt plantı odluqlarının (dizel, mazut, təbii qaz və ya kombinasiya olunmuş) təcili təmiri, yanma kamerasının kalibrlənməsi, alov sensorlarının təmizlənməsi və qaz/hava qarışığının optimal tənzimlənməsi.":
      "Срочный ремонт мощных горелок асфальтобетонных заводов, работающих в тяжёлых условиях (дизель, мазут, природный газ или комбинированные), калибровка камеры сгорания, очистка датчиков пламени и оптимальная настройка газовоздушной смеси.",
    "Aqrokomplekslər və İstixana Təsərrüfatları": "Агрокомплексы и тепличные хозяйства",
    "İstixanaların CO2 idarəetmə sistemləri, böyük həcmli isitmə qazanxanaları, suvarma və təzyiq nasos stansiyalarının fasiləsiz servisi.":
      "Бесперебойное обслуживание систем управления CO<sub>2</sub> в теплицах, крупных отопительных котельных, оросительных и повысительных насосных станций.",
    "Fabriklər və Sənaye Müəssisələri": "Фабрики и промышленные предприятия",
    "İstehsalat xətlərini təmin edən buxar və qızgın yağ qazanları, yüksək təzyiqli vintli hava kompressorları və sənaye odluqlarının təmiri və retrofiti.":
      "Ремонт и ретрофит паровых и термомасляных котлов, винтовых воздушных компрессоров высокого давления и промышленных горелок, питающих производственные линии.",
    "Yaşayış Binaları, Otellər və Biznes Mərkəzləri": "Жилые здания, отели и бизнес-центры",
    "Mərkəzi isitmə və isti su qazanxanaları, təzyiq artırma (booster) nasosları, dövriyyə sistemləri və qəza generatorlarının kompleks baxışı.":
      "Комплексное обслуживание котельных центрального отопления и ГВС, повысительных (booster) насосов, циркуляционных систем и аварийных генераторов.",

    /* partners, certificates, brands */
    "Əməkdaşlıq": "Сотрудничество",
    "Bizə Etibar Edən Şirkətlər və Tərəfdaşlarımız":
      "<em>Компании</em>, которые нам доверяют, и наши партнёры",
    "2008-ci ildən bəri ölkənin aparıcı sənaye müəssisələri, tikinti şirkətləri, otel şəbəkələri və aqrokompleksləri ilə uğurlu əməkdaşlıq edirik.":
      "С 2008 года мы успешно сотрудничаем с ведущими промышленными предприятиями, строительными компаниями, отельными сетями и агрокомплексами страны.",
    "Sertifikatlar və lisenziyalar": "Сертификаты и лицензии",
    "Beynəlxalq Standartlar və Rəsmi Lisenziyalarımız":
      "Международные стандарты и <em>наши официальные лицензии</em>",
    "Xidmətlərimiz yüksək mühəndislik standartlarına, təhlükəsizlik normativlərinə və rəsmi dövlət lisenziyalarına tam cavab verir.":
      "Наши услуги полностью соответствуют высоким инженерным стандартам, нормам безопасности и официальным государственным лицензиям.",
    "İqtisadiyyat Nazirliyinin Rəsmi Lisenziyaları":
      "Официальные лицензии Министерства экономики",
    "Təhlükə potensiallı obyektlərdə (buxar və suqızdırıcı qazanlar, təzyiq altında işləyən qablar) montaj, sazlama və təmir işlərinin, həmçinin texniki qurğuların diaqnostikası və yoxlamalarının aparılması üçün rəsmi lisenziyalar.":
      "Официальные лицензии на монтаж, наладку и ремонт на потенциально опасных объектах (паровые и водогрейные котлы, сосуды под давлением), а также на диагностику и освидетельствование технических устройств.",
    "İstehsalçı Avadanlıq Sertifikatları": "Сертификаты производителей оборудования",
    "Mühəndis heyətimizin aparıcı beynəlxalq odluq, qazan, vintli kompressor və generator istehsalçılarının xüsusi təlim mərkəzlərində keçdiyi ixtisaslaşma akkreditasiyaları.":
      "Аккредитации о специализации, полученные нашими инженерами в учебных центрах ведущих международных производителей горелок, котлов, винтовых компрессоров и генераторов.",
    "Dəstəklədiyimiz brendlər": "Поддерживаемые бренды",
    "Servis Etdiyimiz Avadanlıq Brendləri": "<em>Бренды оборудования</em>, которое мы обслуживаем",
    "Odluq, qazan, kompressor, nasos və generator istehsalçılarının geniş çeşidi üzrə orijinal ehtiyat hissə, istehsalçı protokolları və sertifikatlı mühəndis heyəti ilə xidmət göstəririk.":
      "Мы обслуживаем широкий круг производителей горелок, котлов, компрессоров, насосов и генераторов — с оригинальными запчастями, протоколами производителя и сертифицированными инженерами.",

    /* certificate tiles (rendered from CERTS in main.js) */
    "Lisenziya EL-388/2026": "Лицензия EL-388/2026",
    "Lisenziya EL-380/2026": "Лицензия EL-380/2026",
    "İqtisadiyyat Nazirliyi": "Министерство экономики",
    "Təhlükə potensiallı obyektlərin diaqnostikası": "Диагностика потенциально опасных объектов",
    "Qaldırıcı qurğular, qazanlar və tutumların quraşdırılması":
      "Монтаж подъёмных устройств, котлов и резервуаров",
    "CMS quraşdırma, proqramlaşdırma və nasazlıq analizi":
      "Монтаж CMS, программирование и анализ неисправностей",
    "O₂ ölçmə, CO/H₂ təyini və alov detektorları":
      "Измерение O₂, определение CO/H₂ и детекторы пламени",
    "RIELLO Odluq Təlimi": "Обучение по горелкам RIELLO",
    "Motorin və təbii qaz odluqları üzrə ixtisaslaşma":
      "Специализация по дизельным и газовым горелкам",
    "Kompressor Servisi": "Обслуживание компрессоров",
    "Hava kompressorlarının montaj, baxım və təmiri":
      "Монтаж, обслуживание и ремонт воздушных компрессоров",
    "Sənəd skanı əlavə olunacaq": "Скан документа будет добавлен",

    /* FAQ */
    "Tez-Tez Verilən Suallar": "Часто задаваемые <em>вопросы</em>",
    "Odluqların (burner) retrofit (modernizasiya) olunması nə üçün vacibdir?":
      "Почему важен ретрофит (модернизация) горелок?",
    "Mexaniki idarə olunan köhnə odluqlarda hava və yanacaq nisbəti dəqiq tənzimlənmir. Retrofit zamanı rəqəmsal idarəetmə və servo-mühərriklər quraşdırılır. Bu, yanacağın tam yanmasını təmin edərək 15–30% yanacaq qənaəti verir.":
      "В старых горелках с механическим управлением соотношение воздуха и топлива не выставляется точно. При ретрофите ставятся цифровое управление и сервоприводы. Это обеспечивает полное сгорание топлива и даёт 15–30% экономии.",
    "Baca qazı analizi nə qədər vaxtdan bir aparılmalıdır?":
      "Как часто нужно проводить анализ дымовых газов?",
    "Sənaye müəssisələrində və böyük qazanxanalarda baca qazı analizi ildə ən azı 4 dəfə (mövsüm keçidlərində) aparılmalıdır. Həmçinin yanacaq keyfiyyəti dəyişdikdə və ya təmir işindən sonra mütləqdir.":
      "На промышленных предприятиях и в крупных котельных анализ дымовых газов следует проводить не реже 4 раз в год (на сменах сезонов). Он также обязателен при изменении качества топлива и после ремонтных работ.",
    "Generatorlar üçün ATS (Avtomatik Transfer Şalteri) paneli nə üçün vacibdir və necə çalışır?":
      "Зачем генератору панель АВР (автоматический ввод резерва) и как она работает?",
    "ATS paneli əsas elektrik şəbəkəsində gərginlik düşdükdə və ya kəsildikdə generatoru saniyələr ərzində avtomatik işə salır və müəssisəni (və ya sahəni) enerji ilə təmin edir. Şəbəkə bərpa olunduqda isə yükü yenidən şəbəkəyə keçirib generatoru təhlükəsiz şəkildə söndürür. Bu panel insan müdaxiləsini sıfıra endirir və istehsalatın dayanmasının qarşısını alır.":
      "При падении напряжения или отключении основной сети панель АВР за секунды автоматически запускает генератор и питает предприятие (или объект). После восстановления сети она возвращает нагрузку на сеть и безопасно останавливает генератор. Панель сводит участие человека к нулю и не даёт производству остановиться.",
    "Birdən çox generatoru sinxron (paralel) rejimdə çalışdırmaq nə verir?":
      "Что даёт параллельная (синхронная) работа нескольких генераторов?",
    "Sinxronizasiya panelləri vasitəsilə 2 və ya daha çox generator birgə şəbəkəyə qoşulur. Bu, sistemin (və ya müəssisənin) yükünə uyğun olaraq generatorların pilləli işə düşməsini təmin edir: yük az olduqda yalnız bir generator çalışır, yük artdıqda digərləri avtomatik qoşulur. Bu sistem həm yanacağa ciddi qənaət edir, həm də generatorların istismar ömrünü uzadır.":
      "Через панели синхронизации два и более генератора подключаются к сети совместно. Это даёт ступенчатый запуск по нагрузке системы или предприятия: при малой нагрузке работает один генератор, при росте нагрузки автоматически подключаются остальные. Такая схема серьёзно экономит топливо и продлевает ресурс генераторов.",
    "Mənəvi və ya fiziki olaraq köhnəlmiş idarəetmə panellərini sıfırdan dəyişmək mütləqdirmi?":
      "Обязательно ли менять морально или физически устаревшую панель управления на новую?",
    "Xeyr, sıfırdan yeni panel almaq hər zaman məcburi deyil. Biz mövcud panelinizi Retrofit (modernizasiya) edərək gövdəni saxlayır, daxilindəki yanmış və ya köhnəlmiş kabel xətlərini, kontaktor, rele və avtomatları yeniləyirik. Həmçinin mərkəzi idarəetməyə müasir PLC və HMI sensor ekranlar inteqrasiya edərək paneli tam müasir standartlara gətiririk.":
      "Нет, покупать новую панель нужно далеко не всегда. Мы делаем <strong>ретрофит (модернизацию)</strong> вашей панели: сохраняем корпус и заменяем внутри сгоревшие или изношенные кабельные линии, контакторы, реле и автоматы. Интегрируя в управление современные ПЛК и сенсорные панели HMI, мы приводим щит к полностью современным стандартам.",
    "Tezlik çeviricilərinin (Invertor / VFD) avtomatika panelinə inteqrasiyası nə dərəcədə qənaətlidir?":
      "Насколько выгодна интеграция частотных преобразователей (инвертор / VFD) в щит автоматики?",
    "Mühərrik və nasoslar birbaşa şəbəkədən işə düşdükdə ilk anda pik cərəyan çəkir və maksimum sürətlə çalışır. Tezlik çeviriciləri mühərrikin dövrünü sistemin anlıq ehtiyacına uyğun olaraq tənzimləyir. Bu müdaxilə elektrik enerjisi sərfiyyatını 20%-dən 40%-dək azaldır və mühərriklərin mexaniki yorulmasını dayandırır.":
      "При прямом пуске от сети двигатели и насосы в первый момент берут пиковый ток и работают на максимальных оборотах. Частотный преобразователь подстраивает обороты двигателя под текущую потребность системы. Это <strong>снижает расход электроэнергии на 20–40%</strong> и прекращает механический износ двигателей.",
    "Avtomatika panolarının yığılması və proqramlaşdırılması hansı standartlara uyğun aparılır?":
      "По каким стандартам выполняются сборка и программирование щитов автоматики?",
    "Bütün elektrik və avtomatika panolarımız beynəlxalq IEC/EN standartlarına uyğun layihələndirilir. Yığım prosesində keyfiyyətli klema sistemləri, markalanmış kabel kanalları və müvafiq IP qoruma (IP55/IP65) dərəcəsinə malik yanmaz korpuslardan istifadə olunur.":
      "Все наши электрощиты и щиты автоматики проектируются по международным стандартам <strong>IEC/EN</strong>. При сборке используются качественные клеммные системы, маркированные кабель-каналы и негорючие корпуса с соответствующей степенью защиты IP (IP55/IP65).",
    "Dövriyyə və təzyiq nasoslarına nə vaxt texniki xidmət (profilaktika) olunmalıdır?":
      "Когда нужно обслуживать циркуляционные и повысительные насосы?",
    "Sənaye və mərkəzi isitmə sistemlərində çalışan nasoslara illik ən azı bir dəfə (mövsüm öncəsi) baxış keçirilməlidir. Diyircəkli yastıqların (bearing), mexaniki salniklərin (kipləndirici) və elektromühərrik sarğılarının vaxtında təftiş olunması nasosun kavitasiyaya düşməsinin və gözlənilməz istehsalat dayanmalarının qarşısını alır.":
      "Насосы в промышленных системах и системах центрального отопления следует осматривать <strong>не реже одного раза в год</strong> (перед сезоном). Своевременная ревизия подшипников, механических уплотнений (сальников) и обмоток электродвигателя предотвращает кавитацию и незапланированные простои производства.",
    "Nasos sistemlərində tezlik çeviricilərinin (Invertor / VFD) istifadəsi nə qazandırır?":
      "Что даёт применение частотных преобразователей (инвертор / VFD) в насосных системах?",
    "İnvertor nasos mühərrikinin dövrünü anlıq su sərfiyyatına uyğun tənzimləyir. Tələbat az olduqda nasos tam güclə yox, aşağı dövrdə çalışır. Bu, elektrik enerjisinə 30%-dək qənaət edir, boru xətlərində gidrozərbə (su zərbəsi) riskini sıfıra endirir və nasosun ömrünü 2 dəfəyədək artırır.":
      "Инвертор подстраивает обороты двигателя насоса под текущий расход воды. При низком спросе насос работает не на полной мощности, а на пониженных оборотах. Это даёт <strong>до 30% экономии</strong> электроэнергии, сводит к нулю риск гидроудара в трубопроводах и увеличивает срок службы насоса до двух раз.",
    "Nasoslarda kavitasiya nədir və avadanlığa necə zərər verir?":
      "Что такое кавитация в насосах и чем она вредит оборудованию?",
    "Kavitasiya — nasosun daxilində təzyiqin kəskin düşməsi nəticəsində su qabarcıqlarının yaranması və çırpılaraq pərləri (impeller) dağıtması prosesidir. Bu zaman nasosdan güclü küy və titrəyiş gəlir. Düzgün tənzimləmə, təzyiq sensorlarının kalibrlənməsi və giriş xəttinin hermetikliyi ilə kavitasiya riskini tam aradan qaldırmaq mümkündür.":
      "Кавитация — образование паровых пузырьков при резком падении давления внутри насоса и их схлопывание, разрушающее рабочее колесо (импеллер). Насос при этом сильно шумит и вибрирует. Правильной настройкой, калибровкой датчиков давления и герметичностью всасывающей линии риск кавитации снимается полностью.",
    "Sıradan çıxmış sənaye nasosunu bərpa etmək sərfəlidir, yoxsa yenisi ilə əvəzləmək?":
      "Что выгоднее — восстановить вышедший из строя промышленный насос или купить новый?",
    "Sənaye tip böyük nasosların yenisi kifayət qədər bahalıdır. Çox vaxt rotorun dinamik balanslaşdırılması, valın bərpası, salnik və diyircəkli yastıq dəyişimi ilə nasosu ilkin fabrik parametrlərinə 60–70% daha sərfəli xərclə qaytarmaq mümkündür. Mühəndislərimiz öncə diaqnostika apararaq ən optimal həlli təklif edirlər.":
      "Новый крупный промышленный насос стоит достаточно дорого. Чаще всего динамической балансировкой ротора, восстановлением вала, заменой уплотнения и подшипников насос можно вернуть <strong>к заводским параметрам на 60–70% дешевле</strong>. Наши инженеры сначала проводят диагностику и предлагают оптимальное решение.",
    "Nə üçün təmir əvəzinə dövri texniki xidmət müqaviləsi bağlamalıyam?":
      "Почему стоит заключить договор на периодическое обслуживание вместо разовых ремонтов?",
    "Dövri xidmət zamanı mühəndislərimiz kiçik nasazlıqları öncədən aşkar edir. Bu, istehsalatın anidən dayanmasının və sonradan yaranacaq çox daha bahalı təmir xərclərinin qarşısını alır.":
      "При периодическом обслуживании наши инженеры выявляют мелкие неисправности заранее. Это предотвращает внезапную остановку производства и куда более дорогой ремонт впоследствии.",

    /* contact */
    "Sistemlərinizdə Problem Var, Yoxsa Yanacaq Qənaəti Əldə Etmək İstəyirsiniz?":
      "У вас проблема в системе или вы хотите добиться <em>экономии топлива</em>?",
    "Mühəndisimizin müəssisənizə baxış keçirməsi, mövcud avadanlıqların auditi və sizə xüsusi texniki/kommersiya təklifinin hazırlanması üçün bizimlə əlaqə saxlayın.":
      "Свяжитесь с нами, чтобы наш инженер осмотрел ваш объект, провёл аудит оборудования и подготовил индивидуальное техническое и коммерческое предложение.",
    "Ünvan": "Адрес",
    "Ə. Nəvai küç. 10C, Babək prospekti, Bakı, Azərbaycan":
      "ул. А. Навои 10C, проспект Бабека, Баку, Азербайджан",
    "Ə. Nəvai küç. 10C, Babək prospekti, Bakı": "ул. А. Навои 10C, проспект Бабека, Баку",
    "Təcili çağırış": "Аварийный вызов",
    "Mobil": "Мобильный",
    "E-poçt": "Эл. почта",
    "İş saatları": "Часы работы",
    "B.e–Ş 09:00–18:00 · Təcili çağırış 24/7": "Пн–Сб 09:00–18:00 · Аварийный вызов 24/7",
    "Sorğu göndərin": "Отправить заявку",
    "Sorğunuz WhatsApp vasitəsilə birbaşa servis mühəndisimizə göndərilir.":
      "Ваша заявка уходит через WhatsApp напрямую нашему сервисному инженеру.",
    "Adınız / Soyadınız *": "Имя и фамилия <span aria-hidden='true'>*</span>",
    "Zəhmət olmasa adınızı yazın.": "Пожалуйста, укажите имя.",
    "Şirkət / Müəssisə Adı": "Компания / объект",
    "Əlaqə Nömrəniz *": "Контактный номер <span aria-hidden='true'>*</span>",
    "Ən azı 7 rəqəmli nömrə daxil edin.": "Введите номер минимум из 7 цифр.",
    "Xidmət Növü *": "Тип услуги <span aria-hidden='true'>*</span>",
    "Seçin…": "Выберите…",
    "Birdəfəlik təmir və servis": "Разовый ремонт и сервис",
    "Dövri (müqaviləli) texniki xidmət": "Периодическое обслуживание по договору",
    "Baca qazı analizi və eko-tənzimləmə": "Анализ дымовых газов и эконастройка",
    "Odluq retrofiti / modernizasiya": "Ретрофит / модернизация горелки",
    "Avtomatika və idarəetmə panoları (PLC/MCC)": "Щиты автоматики и управления (ПЛК/MCC)",
    "Digər": "Другое",
    "Xidmət növünü seçin.": "Выберите тип услуги.",
    "Qısa qeyd": "Короткое примечание",
    "Sorğunu Göndər": "Отправить заявку",
    "Və ya birbaşa +994 55 348 76 75 nömrəsinə zəng edin.":
      "Или просто позвоните по номеру <a href='tel:+994553487675'>+994 55 348 76 75</a>.",

    /* footer */
    "Qazanxana, odluq, CO2 avtomatika, nasos, kompressor və generator sistemlərinin peşəkar servisi. 2008-ci ildən Azərbaycanda.":
      "Профессиональный сервис котельных, горелок, автоматики CO<sub>2</sub>, насосов, компрессоров и генераторов. В Азербайджане с 2008 года.",
    "Menyu": "Меню",
    "+994 55 411 33 66 · Təcili çağırış": "+994 55 411 33 66 · Аварийный вызов",
    "© 2026 HeatTech MMC. Bütün hüquqlar qorunur.":
      "© 2026 HeatTech MMC. Все права защищены.",
    "Xidmət kataloqu (PDF)": "Каталог услуг (PDF)",
    "Təcili çağırış xətti": "Линия аварийного вызова",
    "24/7 açıqdır": "Работает 24/7",

    /* gallery page */
    "Sahələrdə görülən işlər": "Работы <em>на объектах</em>",
    "Qazanxana, odluq, CO2 avtomatika, nasos, kompressor və generator sahələrindən montaj, təmir və retrofit fotoları.":
      "Фотографии монтажа, ремонта и ретрофита котельных, горелок, автоматики CO<sub>2</sub>, насосов, компрессоров и генераторов.",
    "foto": "фото",

    /* album titles (rendered from ALBUMS in main.js) */
    "Paprec Azerbaijan məişət tullantılarının yandırılması zavodunda 20 MW gücündə sənaye odluğunun periodik servisi":
      "Периодическое обслуживание промышленной горелки мощностью 20 МВт на мусоросжигательном заводе Paprec Azerbaijan",
    "Gözəl Təbiət MMC 9 MW odluqlarının periodik servisi":
      "Периодическое обслуживание горелок 9 МВт, ООО «Gözəl Təbiət»",
    "Zirə Agro Zantingh odluqların periodik servisi":
      "Периодическое обслуживание горелок Zantingh, Zirə Agro",
    "Pozitron MMC Hamworthy odluğun servisi":
      "Обслуживание горелки Hamworthy, ООО «Pozitron»",
    "GreenTech MMC Autoflame idarə sisteminin yenisi ilə əvəz olunması və proqramlanması":
      "Замена и программирование системы управления Autoflame, ООО «GreenTech»",
    "Ecoprod istixana kompleksi üçün karbonmonoksid nəzarət panelinin yenidən qurulması":
      "Реконструкция панели контроля угарного газа для тепличного комплекса Ecoprod",
    "Red Globe Agro 8,6 MW gücə sahib sənaye odluqlarının əsaslı rekonstruksiya və modifikasiyası":
      "Капитальная реконструкция и модификация промышленных горелок 8,6 МВт, Red Globe Agro",
    "STN Plaza qazanxana odluqlarının servisi": "Обслуживание горелок котельной STN Plaza",
    "Era Agro MMC qazanxana servisi": "Обслуживание котельной, ООО «Era Agro»",
    "Lamtec BT320 idarə sistemli Baltur odluğun proqramlaşdırılması":
      "Программирование горелки Baltur с системой управления Lamtec BT320",
    "Azərtoxum MMC silo qurutma odluğunun avtomatika və qaz yolu modifikasiyası":
      "Модификация автоматики и газового тракта сушильной горелки силоса, ООО «Azərtoxum»",
    "Yello Bank güc panelinin hazırlanması": "Изготовление силового щита для Yello Bank",
    "Dəmirçi Tower qazanxana idarə panelinin yenidən qurulması":
      "Реконструкция щита управления котельной Dəmirçi Tower",
    "Dünyagöz klinikası Ecomak vintli hava kompressorunun periodik servisi":
      "Периодическое обслуживание винтового компрессора Ecomak, клиника Dünyagöz",
    "Patron çərəz istehsalı müəssisəsində vintli hava kompressorunun servisi":
      "Обслуживание винтового воздушного компрессора на производстве снеков Patron",
    "Sienmar MMC-yə məxsus vintli hava kompressorunun rekonstruksiya və modernizasiyası":
      "Реконструкция и модернизация винтового воздушного компрессора, ООО «Sienmar»",
    "Aksa AC400 markalı generatorun əsaslı təmiri və yenidənqurulması":
      "Капитальный ремонт и восстановление генератора Aksa AC400",
    "Masallı Rayon Mərkəzi Xəstəxanası generator servisi":
      "Обслуживание генератора Масаллинской центральной районной больницы",
    "Sənaye və dövriyyə nasoslarının sazlanması":
      "Наладка промышленных и циркуляционных насосов",

    /* attributes */
    "Əsas menyu": "Главное меню",
    "Alt menyu": "Нижнее меню",
    "Bağla": "Закрыть",
    "Zəng et": "Позвонить",
    "WhatsApp yaz": "Написать в WhatsApp",
    "Bütün əlaqə kanalları — QR kod": "Все каналы связи — QR-код",
    "HeatTech əlaqə kanallarının QR kodu": "QR-код каналов связи HeatTech",
    "Sənaye qazanxanası — quraşdırılmış avadanlıq":
      "Промышленная котельная — смонтированное оборудование",
    "Rəqəmlərlə biz": "Мы в цифрах",
    "Foto baxışı": "Просмотр фото",
    "Əvvəlki foto": "Предыдущее фото",
    "Növbəti foto": "Следующее фото",
    "Ölçülən qazlar": "Измеряемые газы",
    "Avadanlığın tipi, markası və problem barədə qısa məlumat":
      "Кратко: тип и марка оборудования, суть проблемы",

    /* document head */
    "HeatTech MMC — Qazanxana, odluq və sənaye avadanlıqlarının servisi | heat.az":
      "HeatTech MMC — сервис котельных, горелок и промышленного оборудования | heat.az",
    "Qazanxanaların, sənaye odluqlarının (burner), CO2 avtomatikasının, nasosların, vintli kompressorların və generatorların peşəkar təmiri, retrofiti və baca qazı analizi. 24/7 qəza müdaxiləsi. Bakı, Azərbaycan.":
      "Профессиональный ремонт, ретрофит и анализ дымовых газов котельных, промышленных горелок, автоматики CO2, насосов, винтовых компрессоров и генераторов. Аварийный выезд 24/7. Баку, Азербайджан.",
    "HeatTech MMC — Sənaye avadanlıqlarının peşəkar servisi":
      "HeatTech MMC — профессиональный сервис промышленного оборудования",
    "Qazanxana, odluq, CO2 avtomatika, nasos, kompressor və generator servisi. Rəqəmsal baca qazı analizi ilə 30%-dək yanacaq qənaəti.":
      "Сервис котельных, горелок, автоматики CO2, насосов, компрессоров и генераторов. До 30% экономии топлива за счёт цифрового анализа дымовых газов.",
    "Foto qalereya — görülən işlər | HeatTech MMC":
      "Фотогалерея — выполненные работы | HeatTech MMC",
    "HeatTech MMC-nin qazanxana, odluq, nasos, kompressor və generator sahələrində gördüyü işlərin foto qalereyası.":
      "Фотогалерея работ HeatTech MMC по котельным, горелкам, насосам, компрессорам и генераторам.",
    "Foto qalereya — görülən işlər": "Фотогалерея — выполненные работы",
    "HeatTech MMC-nin sahələrdə gördüyü işlərin fotoları.":
      "Фотографии работ HeatTech MMC на объектах."
  };

  /* ---------------------------------------------------------------- en -- */

  var EN = {
    /* nav, hero */
    "Əsas məzmuna keç": "Skip to main content",
    "Xidmətlər": "Services",
    "Baca qazı analizi": "Flue gas analysis",
    "Xidmət modelləri": "Service models",
    "Sahələr": "Industries",
    "Foto qalereya": "Photo gallery",
    "Sertifikatlar": "Certificates",
    "Əlaqə": "Contact",
    "Bizə zəng edin": "Call us",
    "İxtisas sahələri": "Areas of expertise",
    "Partnyorlar": "Partners",
    "Brendlər": "Brands",
    "24/7 Fasiləsiz Sənaye, Aqro və Mülki Mühəndislik Servisi":
      "24/7 engineering service for industry, agriculture and civil facilities",
    "Qazanxana, Odluq və Sənaye Avadanlıqlarının Peşəkar Təmiri, Avtomatlaşdırılması və Modifikasiyası":
      "<em>Professional repair</em>, automation and modification of boiler plants, burners and industrial equipment",
    "Binalar, istehsalat müəssisələri, fabriklər, aqrokomplekslər və asfalt zavodları üçün istənilən gücdə və mürəkkəblikdə olan qazanxanaların, sənaye/qeyri-sənaye odluqlarının (burner), CO2 avtomatika sistemlərinin, dövriyyə və təzyiq nasoslarının, generatorların və vintli hava kompressorlarının profesional texniki servisi, təmiri və retrofit olunması xidmətlərini təqdim edirik. Məqsədimiz — avadanlıqlarınızın fasiləsiz işini, maksimal enerji səmərəliliyini və tam təhlükəsizliyini təmin etməkdir.":
      "For buildings, production plants, factories, agro complexes and asphalt plants we provide professional maintenance, repair and retrofit of boiler plants of any capacity and complexity, industrial and non-industrial burners, CO<sub>2</sub> automation systems, circulation and pressure booster pumps, generators and screw air compressors. Our goal is uninterrupted operation of your equipment, maximum energy efficiency and complete safety.",
    "Mühəndis Baxışı Təyin Et": "Book an engineer visit",
    "Xidmət Kataloqunu Yüklə (PDF)": "Download the service catalogue (PDF)",

    /* stats */
    "İldən Artıq Təcrübə": "Years of experience",
    "2008-ci ildən etibarən servis sektorunda uğurlu fəaliyyətimiz, qazanxana və sənaye avadanlıqlarının təmirində zəngin mühəndislik təcrübəmiz.":
      "Working in the service sector since 2008, with deep engineering experience in repairing boiler plants and industrial equipment.",
    "Zəmanətli İcra": "Guaranteed workmanship",
    "Bütün təmir, modifikasiya və ehtiyat hissəsi dəyişimi işlərinə zəmanət öhdəliyi.":
      "A warranty commitment on every repair, modification and spare part replacement.",
    "Qəza Müdaxiləsi": "Emergency response",
    "İstehsalatın və ya müəssisənin dayanmaması üçün operativ mobil servis xidməti.":
      "A rapid mobile service crew so your production or facility never stops.",
    "-dək": " max.",
    "Yanacaq Qənaəti": "Fuel savings",
    "Odluqların dəqiq kalibrlənməsi və elektron modulyasiyaya keçirilməsi (retrofit) nəticəsində əldə olunan maksimum səmərəlilik.":
      "Maximum efficiency from precise burner calibration and conversion to electronic modulation (retrofit).",
    "Məhdudiyyətsiz Güc Diapazonu": "No limit on capacity",
    "Kiçik həcmli mərkəzi isitmə sistemlərindən başlayaraq, nəhəng sənaye buxar qazanlarına və asfalt plantı odluqlarına qədər tam texniki xidmət.":
      "Full technical service from small central heating systems to large industrial steam boilers and asphalt plant burners.",

    /* services */
    "Əsas xidmətlərimiz": "Our core services",
    "Genişləndirilmiş Mühəndislik Xidmətləri": "Extended <em>engineering services</em>",
    "Yeddi əsas istiqamətdə diaqnostika, əsaslı təmir, modernizasiya və planlı texniki xidmət — bir mühəndis komandası ilə.":
      "Diagnostics, overhaul, modernisation and scheduled maintenance across seven core areas — from one engineering team.",

    "Qazanxana Sistemlərinin Kompleks Servisi, Təmiri və Mövsümi Hazırlığı":
      "Complete boiler plant service, repair and seasonal preparation",
    "Binaların, sənaye müəssisələrinin və aqrokomplekslərin fasiləsiz istilik və buxar təchizatı tam olaraq qazanxana sistemlərinin etibarlılığından asılıdır. Biz istənilən gücdə və tipli (suqızdırıcı, buxar, qızgın yağ) qazanxanaların kompleks texniki xidmətini, diaqnostikasını və əsaslı təmirini icra edirik.":
      "Uninterrupted heat and steam for buildings, industrial plants and agro complexes depends entirely on the reliability of the boiler plant. We carry out complete maintenance, diagnostics and overhaul of boiler plants of any capacity and type — hot water, steam and thermal oil.",
    "Xidmətlərimizə qazanların daxili və xarici səthlərinin ərp və çöküntülərdən kimyəvi/mexaniki təmizlənməsi, təhlükəsizlik klapanlarının və avtomatik idarəetmə lövhələrinin tənzimlənməsi və mövsümə tam hazır vəziyyətə gətirilməsi daxildir. Potensial qəzaları öncədən müəyyən edərək, gözlənilməz istehsalat dayanmalarının qarşısını alırıq.":
      "The work includes chemical and mechanical cleaning of internal and external boiler surfaces from scale and deposits, adjustment of safety valves and automatic control panels, and full readiness for the season. By finding potential failures early, we prevent unplanned production stoppages.",
    "Ətraflı": "Read more",
    "Yığışdır": "Collapse",

    "Sənaye və Qeyri-Sənaye Odluqlarının (Burner) Təmiri, Modifikasiyası və Retrofiti":
      "Repair, modification and retrofit of industrial and non-industrial burners",
    "Odluq (burner) qazanxana sisteminin “ürəyi” hesab olunur və onun yanlış çalışması böyük yanacaq itkisinə və yanğın təhlükəsinə yol açır. Biz qaz, dizel, mazut və kombinasiya olunmuş (çoxyanacaqlı) odluqların təmiri, sınağı və kalibrlənməsini peşəkar səviyyədə həyata keçiririk.":
      "The burner is the heart of a boiler plant, and running it wrong means heavy fuel losses and a fire risk. We repair, test and calibrate gas, diesel, heavy oil and combined (multi-fuel) burners to a professional standard.",
    "Mənəvi və ya fiziki olaraq köhnəlmiş, mexaniki idarəetməli odluqlarınızı modernizasiya edərək (Retrofit), mikroprosessorlu elektron idarəetmə və servo-mühərrikli hava-yanacaq nisbəti sistemlərinə keçiririk. Yanma prosesini rəqəmsal qaz analizatorları vasitəsilə tənzimləməklə, CO və CO2 emissiyalarını minimuma endirir və 15%-dən 30%-dək yanacaq qənaəti əldə edirik.":
      "We modernise obsolete or worn mechanically controlled burners (retrofit), moving them to microprocessor electronic control and servo-driven air-to-fuel ratio systems. Tuning combustion with digital gas analysers, we cut CO and CO<sub>2</sub> emissions to a minimum and achieve 15% to 30% fuel savings.",

    "Aqrokomplekslər üçün CO2 Qurğularının Sensor və Avtomatika Yenilənməsi":
      "Sensor and automation upgrades for CO<sub>2</sub> systems in agro complexes",
    "Müasir istixana və aqrokomplekslərdə bitkilərin fotosintez prosesini sürətləndirmək və məhsuldarlığı maksimuma çatdırmaq üçün CO2 dozajlama sistemlərindən istifadə olunur. Lakin CO2 səviyyəsinin normadan artıq və ya az olması həm məhsula zərər verir, həm də heyət üçün təhlükə yaradır.":
      "Modern greenhouses and agro complexes use CO<sub>2</sub> dosing systems to accelerate photosynthesis and maximise yield. But a CO<sub>2</sub> level above or below the norm both damages the crop and endangers staff.",
    "Biz CO2 generatorlarının və dozajlama xətlərinin avtomatika sistemlərini sıfırdan qurur və ya mövcud sistemləri yeniləyirik. Həssas CO2 sensorlarının kalibrlənməsi, avtomatik qaz sızma təhlükəsizlik klapanlarının inteqrasiyası və mərkəzi idarəetmə pultuna (PLC) qoşulmasını təmin edərək, aqrokompleksinizdə tam nəzarətli və təhlükəsiz mühit yaradırıq.":
      "We build the automation for CO<sub>2</sub> generators and dosing lines from scratch, or upgrade existing systems. Calibrating sensitive CO<sub>2</sub> sensors, integrating automatic gas leak safety valves and connecting everything to the central control (PLC), we create a fully monitored and safe environment in your facility.",

    "Dövriyyə və Təzyiq Nasoslarının Texniki Servisi":
      "Maintenance of circulation and pressure booster pumps",
    "Mayenin bərabər və təzyiqlə paylanması üçün istifadə olunan dövriyyə, təzyiq artırma (booster), yanğın və drenaj nasoslarının təmiri və profilaktikası mühəndislik dəqiqliyi tələb edir.":
      "Repairing and servicing the circulation, booster, fire-fighting and drainage pumps that distribute fluid evenly and under pressure demands engineering precision.",
    "Şaquli, üfüqi və mərkəzdənqaçma nasosların diaqnostikası, mexaniki salnik (kipləndirici) və diyircəkli yastıqların (bearing) dəyişdirilməsi, rotorların dinamik balanslaşdırılması, mühərrik sarğılarının nəzarəti və tezlik çeviricilərinin (Inverter/VFD) sazlanması xidmətlərini göstəririk. Bu sayədə nasosların kavitasiya riskini aradan qaldırır və elektrik enerjisi sərfiyyatını ciddi şəkildə azaldırıq.":
      "We diagnose vertical, horizontal and centrifugal pumps, replace mechanical seals and bearings, dynamically balance rotors, check motor windings and tune variable frequency drives (Inverter/VFD). This removes the risk of cavitation and cuts electricity consumption significantly.",

    "Vintli Hava Kompressorlarının Servisi və Əsaslı Təmiri":
      "Service and overhaul of screw air compressors",
    "Sənaye müəssisələrinin pnevmatik avadanlıqlarını sıxılmış hava ilə təmin edən vintli kompressorların dayanması bütün istehsalat xəttinin iflic olması deməkdir.":
      "When the screw compressor feeding a plant's pneumatic equipment stops, the whole production line is paralysed.",
    "Biz vintli kompressorların planlı texniki baxışını (yağ, hava və separator filtrlərinin dəyişdirilməsi), vint blokunun (air-end) əsaslı təmirini, klapanların bərpasını, soyutma radiatorlarının təmizlənməsini və təzyiq sensorlarının sazlanmasını icra edirik. Avadanlığın həddindən artıq qızmasının və təzyiq düşmələrinin qarşısını alaraq, onun istismar ömrünü uzadırıq.":
      "We carry out scheduled compressor maintenance (oil, air and separator filter changes), overhaul of the air-end, valve restoration, cooling radiator cleaning and pressure sensor tuning. By preventing overheating and pressure drops, we extend the equipment's service life.",

    "Sənaye Generatorlarının Servisi və İdarəetmə Panellərinin Təmiri":
      "Industrial generator service and control panel repair",
    "Əsas elektrik şəbəkəsində kəsilmə baş verdikdə müəssisəni fasiləsiz enerji ilə təmin edən dizel və qaz generatorlarının operativ işə düşməsi həyati əhəmiyyət kəsb edir.":
      "When the mains fails, the instant start of the diesel and gas generators that keep the facility powered is critical.",
    "Biz generatorların mühərrik və alternatör hissəsinin diaqnostikasını, Avtomatik Transfer Şalterlərinin (ATS) tənzimlənməsini, idarəetmə kartlarının proqramlaşdırılmasını, yük altında sınaqlarını və dövrü yağ/filtr dəyişimini həyata keçiririk. Generatorunuzun hər an qəza rejimində problemsiz işə düşəcəyinə zəmanət veririk.":
      "We diagnose the engine and alternator, adjust automatic transfer switches (ATS), program control boards, run load tests and perform periodic oil and filter changes. We guarantee your generator will start cleanly in emergency mode at any moment.",

    "Sənaye Avtomatikası, Elektrik və İdarəetmə Panolarının (PLC/MCC) Yığılması, Proqramlaşdırılması və Bərpası":
      "Building, programming and restoring industrial automation and control panels (PLC/MCC)",
    "İstənilən güc və mürəkkəblikdə olan qazanxana, xətt və sənaye müəssisələri üçün elektrik paylayıcı, avtomatika və PLC/SCADA idarəetmə panolarının proqramlaşdırılması, sıfırdan yığılması, retrofiti (modernizasiyası) və operativ təmiri.":
      "Programming, building from scratch, retrofitting and rapid repair of power distribution, automation and <strong>PLC/SCADA</strong> control panels for boiler plants, process lines and industrial facilities of any capacity and complexity.",
    "Müasir sənaye müəssisələrinin və mürəkkəb qazanxana sistemlərinin fasiləsiz, təhlükəsiz və insan faktoru olmadan işləməsi birbaşa avtomatika və elektrik panolarının düzgün qurulmasından asılıdır. Mühəndis heyətimiz beynəlxalq IEC/EN standartlarına uyğun olaraq elektrik və avtomatika sistemlərinin layihələndirilməsini və tətbiqini icra edir.":
      "Uninterrupted, safe and operator-independent running of modern industrial facilities and complex boiler plants depends directly on correctly built automation and electrical panels. Our engineers design and implement electrical and automation systems to international <strong>IEC/EN</strong> standards.",
    "Mənəvi və fiziki olaraq köhnəlmiş, tez-tez sıradan çıxan idarəetmə panellərini modernizasiya edərək (Retrofit) müasir PLC (Mikroprosessor), HMI (sensor ekran) və Tezlik Çeviriciləri (VFD/Invertor) ilə təchiz edirik.":
      "We modernise obsolete, worn and frequently failing control panels (retrofit), equipping them with modern <strong>PLC (microprocessor)</strong>, <strong>HMI (touch screen)</strong> and <strong>variable frequency drives (VFD/inverter)</strong>.",
    "İcra etdiyimiz işlər:": "What we deliver:",
    "Avtomatika və İdarəetmə Panolarının (PLC/HMI/SCADA) Yığılması: Qazanxana, CO2 dozajlama, kompressor və istehsalat xətləri üçün mikroprosessorlu idarəetmə lövhələrinin sıfırdan hazırlanması və proqramlaşdırılması.":
      "<strong>Automation and control panels (PLC/HMI/SCADA):</strong> building and programming microprocessor control panels from scratch for boiler plants, CO<sub>2</sub> dosing, compressors and production lines.",
    "Güc və Paylayıcı Elektrik Panoları (MCC / MDB): Sənaye müəssisələrinin (və ya binalarının) elektrik paylama, mühərrik idarəetmə və qoruma sistemlərinin qurulması.":
      "<strong>Power and distribution boards (MCC / MDB):</strong> building power distribution, motor control and protection systems for industrial facilities and buildings.",
    "Generator Avtomatikasının (ATS / AMF) Sıfırdan Yığılması və Təmiri: Şəbəkə kəsildikdə avtomatik işə düşən transfer panellərinin (ATS) sıfırdan toplanması, generator idarəetmə kartlarının (Deep Sea, ComAp, Datakom və s.) proqramlaşdırılması, sinxronizasiya panellərinin qurulması və nasazlıqların aradan qaldırılması.":
      "<strong>Generator automation (ATS / AMF), built from scratch and repaired:</strong> assembling transfer panels that start automatically on mains failure, programming generator control boards (Deep Sea, ComAp, Datakom and others), building synchronisation panels and clearing faults.",
    "Panoların Diaqnostikası və Operativ Bərpası: Yanmış, kabel səliqəsizliyi olan və ya tez-tez qəzaya düşən panel xətlərinin təftişi, kontaktor, rele, avtomat və sensorların yenilənməsi.":
      "<strong>Panel diagnostics and rapid restoration:</strong> inspecting burnt, badly wired or frequently failing panel circuits and replacing contactors, relays, breakers and sensors.",
    "Tezlik Çeviriciləri (VFD / Invertor / Soft Starter) İnteqrasiyası: Nasos və mühərriklərin yumşaq işə düşməsini təmin edərək 20-40% elektrik qənaəti və avadanlığın qorunması.":
      "<strong>VFD / inverter / soft starter integration:</strong> soft starting for pumps and motors, giving 20–40% electricity savings and protecting the equipment.",
    "Sensor və Aktuator Kalibrlənməsi: Təzyiq, temperatur, səviyyə və qaz sensorlarının idarəetmə paneli ilə tam inteqrasiyası.":
      "<strong>Sensor and actuator calibration:</strong> full integration of pressure, temperature, level and gas sensors with the control panel.",

    /* flue gas analysis */
    "Xüsusi mühəndislik xidməti": "A specialist engineering service",
    "Rəqəmsal Baca Qazı Analizi ilə Maksimum Səmərəlilik və Minimum Emissiya":
      "Digital flue gas analysis for <em>maximum efficiency</em> and minimum emissions",
    "Yanacağın vizual yox, spektral cihazlarla təhlili: hər bir milliqram qaza nəzarət edərək maliyyənizi və ətraf mühiti qoruyuruq.":
      "Fuel analysed with spectral instruments, not by eye: by controlling every milligram of gas we protect your budget and the environment.",
    "Qazanxana sistemlərində yanacağın (təbii qaz, dizel, mazut) vizual olaraq — alovun rənginə görə tənzimlənməsi dövrü geridə qalmışdır. Alov gözə mükəmməl görünə bilsə də, kimyəvi tərkibində ciddi yanacaq itkiləri və zəhərli qaz tullantıları ola bilər.":
      "Tuning fuel — natural gas, diesel, heavy oil — by eye, from the colour of the flame, belongs to the past. A flame can look perfect and still hide serious fuel losses and toxic emissions in its chemistry.",
    "Biz xüsusi kalibrlənmiş rəqəmsal Baca Qazı Analizatorları vasitəsilə odluğun yanma kamerasından çıxan qazların tərkibindəki CO, CO2, NO, NOx və O2 göstəricilərini mikroskopik dəqiqliklə ölçür, alqoritmlərə əsasən hava/yanacaq nisbətini idarəetmə lövhəsindən (servo-mühərriklərdən) dəqiq tənzimləyirik.":
      "With specially calibrated digital flue gas analysers we measure CO, CO<sub>2</sub>, NO, NO<sub>x</sub> and O<sub>2</sub> in the gases leaving the burner's combustion chamber to microscopic accuracy, then set the air-to-fuel ratio precisely from the control panel via the servo motors.",
    "Ölçülən qazlar və onların tənzimlənməsinin texniki əhəmiyyəti":
      "The gases we measure and why tuning them matters",
    "Oksigen · hədəf aralıq": "Oxygen · target range",
    "Dəm qazı · minimuma": "Carbon monoxide · to a minimum",
    "Maks.↑": "Max.<i>↑</i>",
    "Karbon dioksid · pik": "Carbon dioxide · peak",
    "Azot oksidləri · norma": "Nitrogen oxides · within norms",
    "Oksigen (O2) — Yanma Hava Nisbətinin Açarı":
      "Oxygen (O<sub>2</sub>) — the key to the combustion air ratio",
    "Azad oksigenin normadan çox olması lazımsız havanın qızdırılaraq bacadan bayıra atılması (enerji itkisi), az olması isə yanacağın tam yanmaması deməkdir. Odluğun hava damperini mikron dəqiqliyi ilə tənzimləyərək O2 göstəricisini ideal həddə (təbii qaz üçün 3–4% aralığına) gətiririk.":
      "Too much free oxygen means excess air is heated and thrown out of the stack — lost energy; too little means the fuel does not burn completely. By adjusting the burner's air damper to micron accuracy we bring O<sub>2</sub> to its ideal level — the 3–4% range for natural gas.",
    "Dəm Qazı (CO) — Gizli Yanacaq İtkisi və Təhlükə":
      "Carbon monoxide (CO) — a hidden fuel loss and a hazard",
    "Yanacaq tam yanmadıqda karbon-monoksid (CO) əmələ gəlir. Bu, birbaşa havaya sovurulan vəsait və zəhərlənmə riskidir. CO göstəricisini ppm səviyyəsinə endirməklə yanacağın 100%-ə yaxın effektivliklə enerjiyə çevrilməsini təmin edirik.":
      "Incomplete combustion produces carbon monoxide (CO) — money blown straight into the air, plus a poisoning risk. Bringing CO down to ppm level, we convert fuel into energy at close to 100% efficiency.",
    "Karbon Dioksid (CO2) — Yanma Keyfiyyətinin İndikatoru":
      "Carbon dioxide (CO<sub>2</sub>) — the indicator of combustion quality",
    "Bacada CO2-nin pik səviyyəyə çatması yanacağın ideal yandığını göstərir. Maksimum CO2 verimini almaq üçün hava və yanacaq girişini tam balansa gətiririk.":
      "A peak CO<sub>2</sub> reading in the stack shows the fuel is burning ideally. To reach maximum CO<sub>2</sub> yield we bring air and fuel intake into full balance.",
    "Azot Oksidləri (NO və NOx) — Ətraf Mühit və Ekologiya":
      "Nitrogen oxides (NO and NO<sub>x</sub>) — environment and ecology",
    "Yanma kamerasında temperatur həddindən artıq yüksək olduqda zərərli NOx qazları yaranır. Alovun formalı yanmasını və temperaturunu tənzimləyərək Low-NOx (aşağı emissiya) standartlarını təmin edirik.":
      "When the combustion chamber runs too hot, harmful NO<sub>x</sub> forms. By shaping the flame and controlling its temperature we meet Low-NOx (low emission) standards.",
    "Bu tənzimləmələrin biznesinizə və ətraf mühitə faydası":
      "What this tuning gives your business and the environment",
    "Yanacaq Sərfiyyatında Böyük Qənaət": "Large fuel savings",
    "Yanma dərəcəsi düzgün tənzimlənməmiş sənaye odluqları il ərzində tonlarla artıq yanacaq və ya minlərlə kubmetr artıq təbii qaz yandırır. Analizatorla edilən tənzimləmə bu itkini anında dayandırır.":
      "A badly tuned industrial burner wastes tonnes of extra fuel or thousands of extra cubic metres of natural gas a year. Analyser-based tuning stops that loss immediately.",
    "Avadanlığın Ömrünün Uzanması": "Longer equipment life",
    "Tam yanmayan yanacaq qazanın borularında qurum yaradır. 1 mm-lik qurum təbəqəsi istilik ötürülməsini 10% zəiflədir. Analiz sayəsində qazan boruları təmiz qalır.":
      "Incompletely burnt fuel leaves soot on boiler tubes. A 1 mm soot layer cuts heat transfer by 10%. Analysis keeps the tubes clean.",
    "Ekoloji Standartlar və Cərimələrdən Mühafizə":
      "Environmental compliance and protection from fines",
    "Zəhərli CO və NOx qazlarının beynəlxalq ekoloji normalara uyğunlaşdırılması və Dövlət Ekologiya müfəttişliklərinin yoxlamalarında rəsmi Baca Analizi Hesabatı (Report) təqdim edilməsi.":
      "Bringing toxic CO and NO<sub>x</sub> in line with international environmental norms, and providing an official flue gas analysis report for state ecology inspections.",

    /* service models */
    "Xidmət modelləri": "Service models",
    "Sizə Uyğun Xidmət Modelini Seçin": "Choose the <em>service model</em> that fits you",
    "Müəssisənizin ehtiyaclarına uyğun olaraq istər təcili birdəfəlik təmir, istərsə də uzunmüddətli dövri texniki xidmət müqaviləsi təklif edirik.":
      "Depending on what your facility needs, we offer both urgent one-off repair and a long-term scheduled maintenance contract.",
    "Birdəfəlik Təmir və Servis": "One-off repair and service",
    "Xidmət Məqsədi": "Purpose",
    "Mövcud nasazlığı və qəzanı aradan qaldırmaq": "Clear the current fault or breakdown",
    "Reaksiya Müddəti": "Response time",
    "Müraciət növbəsinə uyğun operativ müdaxilə": "Prompt visit in order of request",
    "Maliyyə Planlaması": "Budget planning",
    "Qəza anında gözlənilməz xərclər": "Unforeseen costs at the moment of failure",
    "Avadanlığın Ömrü": "Equipment life",
    "Qısamüddətli bərpa": "Short-term restoration",
    "Yalnız təmir olunan detal çərçivəsində": "Limited to the repaired component",
    "Birdəfəlik təmir üçün sorğu": "Request a one-off repair",
    "Maksimum Qənaət və Təhlükəsizlik": "Maximum savings and safety",
    "Dövri (Müqaviləli) Texniki Xidmət": "Scheduled maintenance under contract",
    "Qəzaların baş verməsinin öncədən qarşısını almaq": "Prevent breakdowns before they happen",
    "24/7 prioritetli və anında reaksiya": "Priority 24/7 response, immediately",
    "Öncədən bəlli, sabit illik/aylıq büdcə": "A fixed, known annual or monthly budget",
    "Maksimum uzunömürlülük və yüksək effektivlik": "Maximum lifespan and high efficiency",
    "Daimi kalibrləmə sayəsində maksimum qənaət": "Maximum savings through continuous calibration",
    "Müqavilə şərtlərini öyrən": "See the contract terms",

    /* sectors */
    "Müəssisə tipləri": "Facility types",
    "İxtisaslaşdığımız Sahələr": "Our <em>areas of expertise</em>",
    "Asfalt Zavodları və İnert Material Təsərrüfatları (Asfalt Plantları)":
      "Asphalt plants and aggregate facilities",
    "Yüksək güclü və ağır şəraitdə çalışan asfalt plantı odluqlarının (dizel, mazut, təbii qaz və ya kombinasiya olunmuş) təcili təmiri, yanma kamerasının kalibrlənməsi, alov sensorlarının təmizlənməsi və qaz/hava qarışığının optimal tənzimlənməsi.":
      "Urgent repair of high-capacity asphalt plant burners working in harsh conditions (diesel, heavy oil, natural gas or combined), combustion chamber calibration, flame sensor cleaning and optimal gas/air mixture tuning.",
    "Aqrokomplekslər və İstixana Təsərrüfatları": "Agro complexes and greenhouses",
    "İstixanaların CO2 idarəetmə sistemləri, böyük həcmli isitmə qazanxanaları, suvarma və təzyiq nasos stansiyalarının fasiləsiz servisi.":
      "Continuous service of greenhouse CO<sub>2</sub> control systems, large heating plants, irrigation and pressure booster pump stations.",
    "Fabriklər və Sənaye Müəssisələri": "Factories and industrial plants",
    "İstehsalat xətlərini təmin edən buxar və qızgın yağ qazanları, yüksək təzyiqli vintli hava kompressorları və sənaye odluqlarının təmiri və retrofiti.":
      "Repair and retrofit of the steam and thermal oil boilers, high-pressure screw air compressors and industrial burners that keep production lines running.",
    "Yaşayış Binaları, Otellər və Biznes Mərkəzləri": "Residential buildings, hotels and business centres",
    "Mərkəzi isitmə və isti su qazanxanaları, təzyiq artırma (booster) nasosları, dövriyyə sistemləri və qəza generatorlarının kompleks baxışı.":
      "Complete servicing of central heating and hot water plants, booster pumps, circulation systems and standby generators.",

    /* partners, certificates, brands */
    "Əməkdaşlıq": "Cooperation",
    "Bizə Etibar Edən Şirkətlər və Tərəfdaşlarımız":
      "The <em>companies</em> that trust us, and our partners",
    "2008-ci ildən bəri ölkənin aparıcı sənaye müəssisələri, tikinti şirkətləri, otel şəbəkələri və aqrokompleksləri ilə uğurlu əməkdaşlıq edirik.":
      "Since 2008 we have worked with the country's leading industrial plants, construction companies, hotel chains and agro complexes.",
    "Sertifikatlar və lisenziyalar": "Certificates and licences",
    "Beynəlxalq Standartlar və Rəsmi Lisenziyalarımız":
      "International standards and <em>our official licences</em>",
    "Xidmətlərimiz yüksək mühəndislik standartlarına, təhlükəsizlik normativlərinə və rəsmi dövlət lisenziyalarına tam cavab verir.":
      "Our services fully meet high engineering standards, safety regulations and official state licensing requirements.",
    "İqtisadiyyat Nazirliyinin Rəsmi Lisenziyaları": "Official licences of the Ministry of Economy",
    "Təhlükə potensiallı obyektlərdə (buxar və suqızdırıcı qazanlar, təzyiq altında işləyən qablar) montaj, sazlama və təmir işlərinin, həmçinin texniki qurğuların diaqnostikası və yoxlamalarının aparılması üçün rəsmi lisenziyalar.":
      "Official licences for installation, commissioning and repair on potentially hazardous facilities (steam and hot water boilers, pressure vessels), and for diagnostics and inspection of technical equipment.",
    "İstehsalçı Avadanlıq Sertifikatları": "Manufacturer equipment certificates",
    "Mühəndis heyətimizin aparıcı beynəlxalq odluq, qazan, vintli kompressor və generator istehsalçılarının xüsusi təlim mərkəzlərində keçdiyi ixtisaslaşma akkreditasiyaları.":
      "Specialisation accreditations earned by our engineers at the training centres of leading international burner, boiler, screw compressor and generator manufacturers.",
    "Dəstəklədiyimiz brendlər": "Brands we support",
    "Servis Etdiyimiz Avadanlıq Brendləri": "The <em>equipment brands</em> we service",
    "Odluq, qazan, kompressor, nasos və generator istehsalçılarının geniş çeşidi üzrə orijinal ehtiyat hissə, istehsalçı protokolları və sertifikatlı mühəndis heyəti ilə xidmət göstəririk.":
      "We serve a wide range of burner, boiler, compressor, pump and generator manufacturers, with original spare parts, manufacturer protocols and certified engineers.",

    /* certificate tiles (rendered from CERTS in main.js) */
    "Lisenziya EL-388/2026": "Licence EL-388/2026",
    "Lisenziya EL-380/2026": "Licence EL-380/2026",
    "İqtisadiyyat Nazirliyi": "Ministry of Economy",
    "Təhlükə potensiallı obyektlərin diaqnostikası": "Diagnostics of potentially hazardous facilities",
    "Qaldırıcı qurğular, qazanlar və tutumların quraşdırılması":
      "Installation of lifting equipment, boilers and vessels",
    "CMS quraşdırma, proqramlaşdırma və nasazlıq analizi":
      "CMS installation, programming and fault analysis",
    "O₂ ölçmə, CO/H₂ təyini və alov detektorları":
      "O₂ measurement, CO/H₂ detection and flame detectors",
    "RIELLO Odluq Təlimi": "RIELLO burner training",
    "Motorin və təbii qaz odluqları üzrə ixtisaslaşma":
      "Specialisation in diesel and natural gas burners",
    "Kompressor Servisi": "Compressor service",
    "Hava kompressorlarının montaj, baxım və təmiri":
      "Installation, maintenance and repair of air compressors",
    "Sənəd skanı əlavə olunacaq": "Document scan to be added",

    /* FAQ */
    "Tez-Tez Verilən Suallar": "Frequently asked <em>questions</em>",
    "Odluqların (burner) retrofit (modernizasiya) olunması nə üçün vacibdir?":
      "Why does retrofitting (modernising) a burner matter?",
    "Mexaniki idarə olunan köhnə odluqlarda hava və yanacaq nisbəti dəqiq tənzimlənmir. Retrofit zamanı rəqəmsal idarəetmə və servo-mühərriklər quraşdırılır. Bu, yanacağın tam yanmasını təmin edərək 15–30% yanacaq qənaəti verir.":
      "On old mechanically controlled burners the air-to-fuel ratio cannot be set precisely. A retrofit adds digital control and servo motors, which gives complete combustion and 15–30% fuel savings.",
    "Baca qazı analizi nə qədər vaxtdan bir aparılmalıdır?":
      "How often should flue gas analysis be performed?",
    "Sənaye müəssisələrində və böyük qazanxanalarda baca qazı analizi ildə ən azı 4 dəfə (mövsüm keçidlərində) aparılmalıdır. Həmçinin yanacaq keyfiyyəti dəyişdikdə və ya təmir işindən sonra mütləqdir.":
      "At industrial plants and large boiler houses, flue gas analysis should be done at least four times a year, at season changes. It is also mandatory when fuel quality changes or after repair work.",
    "Generatorlar üçün ATS (Avtomatik Transfer Şalteri) paneli nə üçün vacibdir və necə çalışır?":
      "Why does a generator need an ATS (automatic transfer switch) panel, and how does it work?",
    "ATS paneli əsas elektrik şəbəkəsində gərginlik düşdükdə və ya kəsildikdə generatoru saniyələr ərzində avtomatik işə salır və müəssisəni (və ya sahəni) enerji ilə təmin edir. Şəbəkə bərpa olunduqda isə yükü yenidən şəbəkəyə keçirib generatoru təhlükəsiz şəkildə söndürür. Bu panel insan müdaxiləsini sıfıra endirir və istehsalatın dayanmasının qarşısını alır.":
      "When mains voltage drops or fails, the ATS panel starts the generator automatically within seconds and powers the facility. Once the mains returns, it transfers the load back and shuts the generator down safely. The panel removes human intervention entirely and keeps production from stopping.",
    "Birdən çox generatoru sinxron (paralel) rejimdə çalışdırmaq nə verir?":
      "What do you gain by running several generators in parallel (synchronised)?",
    "Sinxronizasiya panelləri vasitəsilə 2 və ya daha çox generator birgə şəbəkəyə qoşulur. Bu, sistemin (və ya müəssisənin) yükünə uyğun olaraq generatorların pilləli işə düşməsini təmin edir: yük az olduqda yalnız bir generator çalışır, yük artdıqda digərləri avtomatik qoşulur. Bu sistem həm yanacağa ciddi qənaət edir, həm də generatorların istismar ömrünü uzadır.":
      "Synchronisation panels connect two or more generators to the network together, so they start in stages according to the load: at low load only one runs, and as load grows the others come online automatically. This saves significant fuel and extends generator life.",
    "Mənəvi və ya fiziki olaraq köhnəlmiş idarəetmə panellərini sıfırdan dəyişmək mütləqdirmi?":
      "Does an obsolete or worn control panel always have to be replaced?",
    "Xeyr, sıfırdan yeni panel almaq hər zaman məcburi deyil. Biz mövcud panelinizi Retrofit (modernizasiya) edərək gövdəni saxlayır, daxilindəki yanmış və ya köhnəlmiş kabel xətlərini, kontaktor, rele və avtomatları yeniləyirik. Həmçinin mərkəzi idarəetməyə müasir PLC və HMI sensor ekranlar inteqrasiya edərək paneli tam müasir standartlara gətiririk.":
      "No, buying a whole new panel is rarely necessary. We <strong>retrofit</strong> your existing panel: the enclosure stays, while burnt or aged cabling, contactors, relays and breakers are replaced. Adding modern PLCs and HMI touch screens brings the panel fully up to current standards.",
    "Tezlik çeviricilərinin (Invertor / VFD) avtomatika panelinə inteqrasiyası nə dərəcədə qənaətlidir?":
      "How much does integrating a VFD (inverter) into the automation panel save?",
    "Mühərrik və nasoslar birbaşa şəbəkədən işə düşdükdə ilk anda pik cərəyan çəkir və maksimum sürətlə çalışır. Tezlik çeviriciləri mühərrikin dövrünü sistemin anlıq ehtiyacına uyğun olaraq tənzimləyir. Bu müdaxilə elektrik enerjisi sərfiyyatını 20%-dən 40%-dək azaldır və mühərriklərin mexaniki yorulmasını dayandırır.":
      "Started direct from the mains, motors and pumps draw peak current and run flat out. A variable frequency drive matches motor speed to what the system actually needs at that moment. This <strong>cuts electricity consumption by 20–40%</strong> and stops mechanical wear on the motors.",
    "Avtomatika panolarının yığılması və proqramlaşdırılması hansı standartlara uyğun aparılır?":
      "Which standards do you follow when building and programming automation panels?",
    "Bütün elektrik və avtomatika panolarımız beynəlxalq IEC/EN standartlarına uyğun layihələndirilir. Yığım prosesində keyfiyyətli klema sistemləri, markalanmış kabel kanalları və müvafiq IP qoruma (IP55/IP65) dərəcəsinə malik yanmaz korpuslardan istifadə olunur.":
      "All our electrical and automation panels are designed to international <strong>IEC/EN</strong> standards. We build them with quality terminal systems, labelled cable ducts and non-flammable enclosures with the appropriate IP rating (IP55/IP65).",
    "Dövriyyə və təzyiq nasoslarına nə vaxt texniki xidmət (profilaktika) olunmalıdır?":
      "When should circulation and pressure booster pumps be serviced?",
    "Sənaye və mərkəzi isitmə sistemlərində çalışan nasoslara illik ən azı bir dəfə (mövsüm öncəsi) baxış keçirilməlidir. Diyircəkli yastıqların (bearing), mexaniki salniklərin (kipləndirici) və elektromühərrik sarğılarının vaxtında təftiş olunması nasosun kavitasiyaya düşməsinin və gözlənilməz istehsalat dayanmalarının qarşısını alır.":
      "Pumps in industrial and central heating systems should be inspected <strong>at least once a year</strong>, before the season. Timely inspection of bearings, mechanical seals and motor windings prevents cavitation and unplanned production stoppages.",
    "Nasos sistemlərində tezlik çeviricilərinin (Invertor / VFD) istifadəsi nə qazandırır?":
      "What does using a VFD (inverter) in a pump system achieve?",
    "İnvertor nasos mühərrikinin dövrünü anlıq su sərfiyyatına uyğun tənzimləyir. Tələbat az olduqda nasos tam güclə yox, aşağı dövrdə çalışır. Bu, elektrik enerjisinə 30%-dək qənaət edir, boru xətlərində gidrozərbə (su zərbəsi) riskini sıfıra endirir və nasosun ömrünü 2 dəfəyədək artırır.":
      "The inverter matches pump motor speed to the current water demand. When demand is low the pump runs at reduced speed instead of full power. That means <strong>up to 30% electricity savings</strong>, no risk of water hammer in the pipework and up to twice the pump's service life.",
    "Nasoslarda kavitasiya nədir və avadanlığa necə zərər verir?":
      "What is cavitation in pumps and how does it damage equipment?",
    "Kavitasiya — nasosun daxilində təzyiqin kəskin düşməsi nəticəsində su qabarcıqlarının yaranması və çırpılaraq pərləri (impeller) dağıtması prosesidir. Bu zaman nasosdan güclü küy və titrəyiş gəlir. Düzgün tənzimləmə, təzyiq sensorlarının kalibrlənməsi və giriş xəttinin hermetikliyi ilə kavitasiya riskini tam aradan qaldırmaq mümkündür.":
      "Cavitation is the formation of vapour bubbles when pressure drops sharply inside a pump; as they collapse they erode the impeller. The pump becomes loud and vibrates heavily. Correct tuning, calibrated pressure sensors and a properly sealed suction line remove the risk entirely.",
    "Sıradan çıxmış sənaye nasosunu bərpa etmək sərfəlidir, yoxsa yenisi ilə əvəzləmək?":
      "Is it better to restore a failed industrial pump or replace it?",
    "Sənaye tip böyük nasosların yenisi kifayət qədər bahalıdır. Çox vaxt rotorun dinamik balanslaşdırılması, valın bərpası, salnik və diyircəkli yastıq dəyişimi ilə nasosu ilkin fabrik parametrlərinə 60–70% daha sərfəli xərclə qaytarmaq mümkündür. Mühəndislərimiz öncə diaqnostika apararaq ən optimal həlli təklif edirlər.":
      "A new large industrial pump is expensive. In most cases dynamic rotor balancing, shaft restoration and replacement of the seal and bearings return the pump <strong>to factory parameters at 60–70% lower cost</strong>. Our engineers diagnose first and then propose the best option.",
    "Nə üçün təmir əvəzinə dövri texniki xidmət müqaviləsi bağlamalıyam?":
      "Why sign a maintenance contract instead of paying for repairs?",
    "Dövri xidmət zamanı mühəndislərimiz kiçik nasazlıqları öncədən aşkar edir. Bu, istehsalatın anidən dayanmasının və sonradan yaranacaq çox daha bahalı təmir xərclərinin qarşısını alır.":
      "During scheduled maintenance our engineers catch small faults early. That prevents sudden production stoppages and the far more expensive repairs that follow them.",

    /* contact */
    "Sistemlərinizdə Problem Var, Yoxsa Yanacaq Qənaəti Əldə Etmək İstəyirsiniz?":
      "A problem in your systems, or after <em>fuel savings</em>?",
    "Mühəndisimizin müəssisənizə baxış keçirməsi, mövcud avadanlıqların auditi və sizə xüsusi texniki/kommersiya təklifinin hazırlanması üçün bizimlə əlaqə saxlayın.":
      "Get in touch and our engineer will inspect your site, audit the existing equipment and prepare a technical and commercial proposal for you.",
    "Ünvan": "Address",
    "Ə. Nəvai küç. 10C, Babək prospekti, Bakı, Azərbaycan":
      "10C A. Navai str., Babek avenue, Baku, Azerbaijan",
    "Ə. Nəvai küç. 10C, Babək prospekti, Bakı": "10C A. Navai str., Babek avenue, Baku",
    "Təcili çağırış": "Emergency call",
    "Mobil": "Mobile",
    "E-poçt": "Email",
    "İş saatları": "Working hours",
    "B.e–Ş 09:00–18:00 · Təcili çağırış 24/7": "Mon–Sat 09:00–18:00 · Emergency call 24/7",
    "Sorğu göndərin": "Send a request",
    "Sorğunuz WhatsApp vasitəsilə birbaşa servis mühəndisimizə göndərilir.":
      "Your request goes straight to our service engineer over WhatsApp.",
    "Adınız / Soyadınız *": "Your name <span aria-hidden='true'>*</span>",
    "Zəhmət olmasa adınızı yazın.": "Please enter your name.",
    "Şirkət / Müəssisə Adı": "Company / site",
    "Əlaqə Nömrəniz *": "Contact number <span aria-hidden='true'>*</span>",
    "Ən azı 7 rəqəmli nömrə daxil edin.": "Enter a number with at least 7 digits.",
    "Xidmət Növü *": "Service type <span aria-hidden='true'>*</span>",
    "Seçin…": "Select…",
    "Birdəfəlik təmir və servis": "One-off repair and service",
    "Dövri (müqaviləli) texniki xidmət": "Scheduled maintenance under contract",
    "Baca qazı analizi və eko-tənzimləmə": "Flue gas analysis and eco tuning",
    "Odluq retrofiti / modernizasiya": "Burner retrofit / modernisation",
    "Avtomatika və idarəetmə panoları (PLC/MCC)": "Automation and control panels (PLC/MCC)",
    "Digər": "Other",
    "Xidmət növünü seçin.": "Select a service type.",
    "Qısa qeyd": "Short note",
    "Sorğunu Göndər": "Send request",
    "Və ya birbaşa +994 55 348 76 75 nömrəsinə zəng edin.":
      "Or simply call <a href='tel:+994553487675'>+994 55 348 76 75</a>.",

    /* footer */
    "Qazanxana, odluq, CO2 avtomatika, nasos, kompressor və generator sistemlərinin peşəkar servisi. 2008-ci ildən Azərbaycanda.":
      "Professional service for boiler plants, burners, CO<sub>2</sub> automation, pumps, compressors and generators. In Azerbaijan since 2008.",
    "Menyu": "Menu",
    "+994 55 411 33 66 · Təcili çağırış": "+994 55 411 33 66 · Emergency call",
    "© 2026 HeatTech MMC. Bütün hüquqlar qorunur.": "© 2026 HeatTech MMC. All rights reserved.",
    "Xidmət kataloqu (PDF)": "Service catalogue (PDF)",
    "Təcili çağırış xətti": "Emergency line",
    "24/7 açıqdır": "Open 24/7",

    /* gallery page */
    "Sahələrdə görülən işlər": "Work <em>on site</em>",
    "Qazanxana, odluq, CO2 avtomatika, nasos, kompressor və generator sahələrindən montaj, təmir və retrofit fotoları.":
      "Photos of installation, repair and retrofit work on boiler plants, burners, CO<sub>2</sub> automation, pumps, compressors and generators.",
    "foto": "photos",

    /* album titles (rendered from ALBUMS in main.js) */
    "Paprec Azerbaijan məişət tullantılarının yandırılması zavodunda 20 MW gücündə sənaye odluğunun periodik servisi":
      "Scheduled service of a 20 MW industrial burner at the Paprec Azerbaijan waste incineration plant",
    "Gözəl Təbiət MMC 9 MW odluqlarının periodik servisi":
      "Scheduled service of 9 MW burners at Gözəl Təbiət LLC",
    "Zirə Agro Zantingh odluqların periodik servisi":
      "Scheduled service of Zantingh burners at Zirə Agro",
    "Pozitron MMC Hamworthy odluğun servisi": "Hamworthy burner service at Pozitron LLC",
    "GreenTech MMC Autoflame idarə sisteminin yenisi ilə əvəz olunması və proqramlanması":
      "Replacement and programming of the Autoflame control system at GreenTech LLC",
    "Ecoprod istixana kompleksi üçün karbonmonoksid nəzarət panelinin yenidən qurulması":
      "Rebuild of the carbon monoxide monitoring panel for the Ecoprod greenhouse complex",
    "Red Globe Agro 8,6 MW gücə sahib sənaye odluqlarının əsaslı rekonstruksiya və modifikasiyası":
      "Major reconstruction and modification of 8.6 MW industrial burners at Red Globe Agro",
    "STN Plaza qazanxana odluqlarının servisi": "Service of the boiler plant burners at STN Plaza",
    "Era Agro MMC qazanxana servisi": "Boiler plant service at Era Agro LLC",
    "Lamtec BT320 idarə sistemli Baltur odluğun proqramlaşdırılması":
      "Programming a Baltur burner with a Lamtec BT320 control system",
    "Azərtoxum MMC silo qurutma odluğunun avtomatika və qaz yolu modifikasiyası":
      "Automation and gas train modification of a silo drying burner at Azərtoxum LLC",
    "Yello Bank güc panelinin hazırlanması": "Building the power panel for Yello Bank",
    "Dəmirçi Tower qazanxana idarə panelinin yenidən qurulması":
      "Rebuild of the boiler plant control panel at Dəmirçi Tower",
    "Dünyagöz klinikası Ecomak vintli hava kompressorunun periodik servisi":
      "Scheduled service of an Ecomak screw air compressor at the Dünyagöz clinic",
    "Patron çərəz istehsalı müəssisəsində vintli hava kompressorunun servisi":
      "Screw air compressor service at the Patron snack production plant",
    "Sienmar MMC-yə məxsus vintli hava kompressorunun rekonstruksiya və modernizasiyası":
      "Reconstruction and modernisation of a screw air compressor at Sienmar LLC",
    "Aksa AC400 markalı generatorun əsaslı təmiri və yenidənqurulması":
      "Overhaul and rebuild of an Aksa AC400 generator",
    "Masallı Rayon Mərkəzi Xəstəxanası generator servisi":
      "Generator service at Masallı Central District Hospital",
    "Sənaye və dövriyyə nasoslarının sazlanması": "Commissioning of industrial and circulation pumps",

    /* attributes */
    "Əsas menyu": "Main menu",
    "Alt menyu": "Footer menu",
    "Bağla": "Close",
    "Zəng et": "Call",
    "WhatsApp yaz": "Message on WhatsApp",
    "Bütün əlaqə kanalları — QR kod": "All contact channels — QR code",
    "HeatTech əlaqə kanallarının QR kodu": "QR code for HeatTech contact channels",
    "Sənaye qazanxanası — quraşdırılmış avadanlıq": "Industrial boiler plant — installed equipment",
    "Rəqəmlərlə biz": "Us in numbers",
    "Foto baxışı": "Photo viewer",
    "Əvvəlki foto": "Previous photo",
    "Növbəti foto": "Next photo",
    "Ölçülən qazlar": "Measured gases",
    "Avadanlığın tipi, markası və problem barədə qısa məlumat":
      "Equipment type, make and a short description of the problem",

    /* document head */
    "HeatTech MMC — Qazanxana, odluq və sənaye avadanlıqlarının servisi | heat.az":
      "HeatTech MMC — boiler plant, burner and industrial equipment service | heat.az",
    "Qazanxanaların, sənaye odluqlarının (burner), CO2 avtomatikasının, nasosların, vintli kompressorların və generatorların peşəkar təmiri, retrofiti və baca qazı analizi. 24/7 qəza müdaxiləsi. Bakı, Azərbaycan.":
      "Professional repair, retrofit and flue gas analysis for boiler plants, industrial burners, CO2 automation, pumps, screw compressors and generators. 24/7 emergency response. Baku, Azerbaijan.",
    "HeatTech MMC — Sənaye avadanlıqlarının peşəkar servisi":
      "HeatTech MMC — professional industrial equipment service",
    "Qazanxana, odluq, CO2 avtomatika, nasos, kompressor və generator servisi. Rəqəmsal baca qazı analizi ilə 30%-dək yanacaq qənaəti.":
      "Service for boiler plants, burners, CO2 automation, pumps, compressors and generators. Up to 30% fuel savings through digital flue gas analysis.",
    "Foto qalereya — görülən işlər | HeatTech MMC": "Photo gallery — completed work | HeatTech MMC",
    "HeatTech MMC-nin qazanxana, odluq, nasos, kompressor və generator sahələrində gördüyü işlərin foto qalereyası.":
      "Photo gallery of HeatTech MMC work on boiler plants, burners, pumps, compressors and generators.",
    "Foto qalereya — görülən işlər": "Photo gallery — completed work",
    "HeatTech MMC-nin sahələrdə gördüyü işlərin fotoları.":
      "Photos of HeatTech MMC work on site."
  };

  var DICT = { ru: RU, en: EN };

  /* brochure.html loads its own deck into window.heatExtraDict before this
     file, so the catalogue strings never ship with the site pages */
  (function (extra) {
    if (!extra) return;
    LANGS.forEach(function (lang) {
      var add = extra[lang];
      if (!add || !DICT[lang]) return;
      for (var k in add) if (add.hasOwnProperty(k)) DICT[lang][k] = add[k];
    });
  })(w.heatExtraDict);

  /* ------------------------------------------------------------ engine -- */

  /* children that may sit inside a translatable phrase; anything else makes
     the element a container and the walker keeps descending */
  var INLINE = {
    EM: 1, STRONG: 1, B: 1, I: 1, SPAN: 1, SUB: 1, SUP: 1, BR: 1,
    SMALL: 1, U: 1, CODE: 1, MARK: 1, ABBR: 1, TIME: 1, S: 1, A: 1
  };
  var SKIP = { SCRIPT: 1, STYLE: 1, SVG: 1, NOSCRIPT: 1, TEMPLATE: 1 };
  var ATTRS = ["aria-label", "placeholder", "alt", "title"];
  var LETTERS = /[A-Za-zƏəÖöĞğİıŞşÇçÜüЀ-ӿ]/;

  function norm(s) { return String(s).replace(/\s+/g, " ").trim(); }

  function look(lang, key) {
    var t = DICT[lang] && DICT[lang][key];
    return typeof t === "string" ? t : null;
  }

  /* An element is a phrase when it holds text of its own and every child is
     inline. Anything carrying a counted number is left alone — initCounters()
     owns that node's text. */
  function isPhrase(el) {
    if (el.hasAttribute("data-count") || el.querySelector("[data-count]")) return false;
    if (!LETTERS.test(el.textContent || "")) return false;
    var direct = false;
    for (var n = el.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 3 && LETTERS.test(n.nodeValue)) { direct = true; break; }
    }
    if (!direct) return false;
    var kids = el.children;
    for (var i = 0; i < kids.length; i++) {
      if (!INLINE[kids[i].tagName.toUpperCase()]) return false;
    }
    return true;
  }

  function phrase(el, lang) {
    if (el.__az === undefined) {
      el.__az = el.innerHTML;
      el.__key = norm(el.textContent);
      /* Decorative markup opening a phrase — the badge dot, an inline icon —
         carries no text, so it never reaches the dictionary. Keep it and put
         it back in front of the translation. */
      var deco = "";
      for (var n = el.firstChild; n; n = n.nextSibling) {
        if (n.nodeType === 3) { if (LETTERS.test(n.nodeValue)) break; continue; }
        if (n.nodeType !== 1 || LETTERS.test(n.textContent || "")) break;
        deco += n.outerHTML;
      }
      el.__deco = deco;
    }
    var t = lang === "az" ? null : look(lang, el.__key);
    el.innerHTML = t === null ? el.__az : el.__deco + t;
  }

  function attrs(el, lang) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!el.hasAttribute(a)) continue;
      if (!el.__attr) el.__attr = {};
      if (el.__attr[a] === undefined) el.__attr[a] = el.getAttribute(a);
      var t = lang === "az" ? null : look(lang, norm(el.__attr[a]));
      el.setAttribute(a, t === null ? el.__attr[a] : t);
    }
  }

  function walk(root, lang) {
    var kids = root.children;
    for (var i = 0; i < kids.length; i++) {
      var el = kids[i];
      if (SKIP[el.tagName.toUpperCase()]) continue;
      attrs(el, lang);
      if (isPhrase(el)) phrase(el, lang); else walk(el, lang);
    }
  }

  /* <title> and the meta tags crawlers and share cards read */
  var head = [];
  function initHead() {
    head.push({ set: function (v) { d.title = v; }, az: d.title });
    ["meta[name='description']", "meta[property='og:title']", "meta[property='og:description']"]
      .forEach(function (sel) {
        var m = d.querySelector(sel);
        if (!m) return;
        head.push({
          set: function (v) { m.setAttribute("content", v); },
          az: m.getAttribute("content")
        });
      });
  }

  /* the catalogue is printed once per language — hand out the right file */
  function brochure(lang) {
    d.querySelectorAll("a[href*='heattech-brochure']").forEach(function (a) {
      a.href = "assets/docs/heattech-brochure" +
        (lang === "az" ? "" : "-" + lang) + ".pdf";
    });
  }

  function apply(lang) {
    head.forEach(function (h) {
      var t = lang === "az" ? null : look(lang, norm(h.az));
      h.set(t === null ? h.az : t);
    });
    walk(d.body, lang);
    brochure(lang);
    d.documentElement.lang = lang;
  }

  /* ------------------------------------------------------------ switch -- */

  var current = "az";

  function set(lang) {
    if (LANGS.indexOf(lang) < 0) lang = "az";
    current = lang;
    try { localStorage.setItem(STORE, lang); } catch (e) { /* private mode */ }
    apply(lang);
    d.querySelectorAll("[data-lang]").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", String(on));
    });
  }

  /* main.js asks for single strings it writes outside the DOM walk */
  w.heatT = function (s) {
    if (current === "az") return s;
    var t = look(current, norm(s));
    return t === null ? s : t;
  };
  w.heatLang = function () { return current; };

  var stored = null;
  try { stored = localStorage.getItem(STORE); } catch (e) { /* private mode */ }

  /* ?lang=ru wins over the stored choice — headless printing of brochure.html
     has no localStorage to read */
  var q = /[?&]lang=(az|ru|en)/.exec(w.location.search);

  initHead();
  d.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { set(b.getAttribute("data-lang")); });
  });
  set((q && q[1]) || stored || "az");
})(window, document);
