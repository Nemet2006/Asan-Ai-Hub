export type NavItem = {
  label: string;
  href: string;
};

export type Step = {
  title: string;
  description: string;
  detail: string;
};

export type Feature = {
  title: string;
  description: string;
  badge: string;
};

export type EcosystemNode = {
  name: string;
  sector: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type AnalysisScenario = {
  title: string;
  institution: string;
  category: string;
  location: string;
  evidenceType: string;
  priority: string;
  description: string;
  signals: string[];
};

export type ApiModule = {
  title: string;
  endpoint: string;
  category: string;
  auth: string;
  latency: string;
  output: string;
  tags: string[];
};

export type RolloutPhase = {
  name: string;
  timeline: string;
  audience: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

export type Guide = {
  title: string;
  category: string;
  readTime: string;
  summary: string;
};

export type DashboardCard = {
  title: string;
  metric: string;
  description: string;
  trend?: string;
};

export type ContactChannel = {
  label: string;
  value: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const navItems: NavItem[] = [
  { label: "Ana səhifə", href: "/" },
  { label: "Çağırış", href: "/about" },
  { label: "Vətəndaş axını", href: "/students" },
  { label: "Qurum paneli", href: "/companies" },
  { label: "Nəzarət mərkəzi", href: "/providers" },
  { label: "Analiz ssenariləri", href: "/internships" },
  { label: "API modulları", href: "/courses" },
  { label: "Pilot planı", href: "/pricing" },
  { label: "Sənədlər", href: "/blog" },
  { label: "Əlaqə", href: "/contact" }
];

export const heroMetrics = [
  { value: "92%", label: "demo kateqoriya dəqiqliyi hədəfi" },
  { value: "<90 san", label: "vizual analiz və ilkin mətn draftı" },
  { value: "3x", label: "manual baxış yükünün azalma potensialı" }
];

export const howItWorks: Step[] = [
  {
    title: "Vizual sübutu qəbul et",
    description: "Foto və ya video müraciəti, GPS siqnalını və vətəndaş qeydlərini vahid paket kimi qəbul et.",
    detail: "Məkan, obyekt tipi, görünən problem və kontekstual işarələr eyni anda çıxarılır."
  },
  {
    title: "Müraciəti avtomatik təsnif et",
    description: "AI model görüntüdən mətn təsviri, kateqoriya, aidiyyət və prioritet təklifini yaradır.",
    detail: "Natamam və ya qeyri-dəqiq mətnlər belə vizual siqnallar hesabına tamamlanır."
  },
  {
    title: "İcra nəticəsini yoxla",
    description: "Qurumun yüklədiyi yeni media ilkin müraciətlə müqayisə edilir və həllin real olub-olmadığı qiymətləndirilir.",
    detail: "Eyni məkan, eyni obyekt və problemin aradan qalxması üzrə xəbərdarlıqlar avtomatik formalaşır."
  }
];

export const platformFeatures: Feature[] = [
  {
    badge: "Vision AI",
    title: "Şəkil və video analizi",
    description: "Küçə işıqlandırması, yol qüsuru, tullantı, su sızması və oxşar hallar üçün obyekt və anomaliya aşkarlanması."
  },
  {
    badge: "NLP",
    title: "Avtomatik mətn draftı",
    description: "Vizual məzmun əsasında müraciətin qısa, strukturlaşdırılmış və göndərilməyə hazır təsviri yaradılır."
  },
  {
    badge: "Routing",
    title: "Kateqoriya və aidiyyət",
    description: "Kommunal, yol, infrastruktur və digər istiqamətlər üzrə düzgün quruma yönləndirmə təklifi verilir."
  },
  {
    badge: "Risk",
    title: "Prioritetləşdirmə",
    description: "Təhlükə səviyyəsi, ətraf mühitə təsir, əhatə dairəsi və sosial təsirə görə təcili, orta və aşağı prioritet hesablanır."
  },
  {
    badge: "Verification",
    title: "Əvvəl-sonra uyğunluğu",
    description: "Qurum cavabındakı media ilə ilkin müraciət arasındakı məkan və nəticə uyğunluğu skorlama ilə yoxlanılır."
  },
  {
    badge: "Audit",
    title: "Xəbərdarlıq və izah edilə bilənlik",
    description: "Yanlış uyğunluq, zəif inam və uyğunsuz kateqoriya hallarında əməkdaşa əsaslandırılmış xəbərdarlıq göstərilir."
  }
];

export const integrationEcosystem: EcosystemNode[] = [
  { name: "ASAN xidmət", sector: "Orkestrasiya və vətəndaş interfeysi" },
  { name: "Kommunal qurumlar", sector: "İcra və cavab yükləmə" },
  { name: "Yol xidmətləri", sector: "Sahə əməliyyatı və təmir" },
  { name: "Bələdiyyələr", sector: "Lokal həll və koordinasiya" },
  { name: "Monitorinq mərkəzi", sector: "Nəzarət və keyfiyyət auditi" },
  { name: "Analitika komandası", sector: "KPI, model ölçülməsi və hesabat" }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Vizual analiz sayəsində operator ilkin baxışa deyil, artıq qərarın keyfiyyətinə fokuslana bilir.",
    name: "Nigar Məmmədova",
    role: "Əməliyyat rəhbəri, rəqəmsal müraciətlər mərkəzi"
  },
  {
    quote: "Natamam mətnli müraciətlərin düzgün kateqoriyaya düşməsi vətəndaş cavab müddətini nəzərəçarpacaq dərəcədə qısaldır.",
    name: "Elvin Qasımov",
    role: "Qurum operatoru, şəhər infrastruktur xidməti"
  },
  {
    quote: "Əvvəl-sonra doğrulama modulu icra keyfiyyətinə nəzarəti subyektivlikdən çıxarıb ölçülə bilən prosesə çevirir.",
    name: "Aysel Həsənli",
    role: "Monitorinq və audit eksperti"
  }
];

export const analysisScenarios: AnalysisScenario[] = [
  {
    title: "Küçə işıqlandırmasının işləməməsi",
    institution: "Kommunal xidmət",
    category: "İşıqlandırma",
    location: "Bakı, Nərimanov rayonu",
    evidenceType: "Foto + GPS",
    priority: "Orta",
    description: "Gecə vaxtı hərəkət təhlükəsizliyinə təsir edən sönük və ya tam sıradan çıxmış küçə işıqları aşkarlanır.",
    signals: ["Dirək görünüşü", "Qaranlıq sahə", "Yol kənarı nişanları"]
  },
  {
    title: "Yolda iri çuxur və asfalt qopması",
    institution: "Yol xidməti",
    category: "Yol infrastrukturu",
    location: "Sumqayıt, 17-ci mikrorayon",
    evidenceType: "Video + GPS",
    priority: "Təcili",
    description: "Nəqliyyat axını və qəza riski yaradan yol səthi qüsurları ölçü və dərinlik göstəricilərinə görə qiymətləndirilir.",
    signals: ["Asfalt çatları", "Nəqliyyat zolağı", "Ölçü referansı"]
  },
  {
    title: "Məişət tullantılarının yığılması",
    institution: "Təmizlik və kommunal müəssisə",
    category: "Sanitariya",
    location: "Gəncə, yeni yaşayış massivi",
    evidenceType: "Foto",
    priority: "Orta",
    description: "Ətraf mühitə və ictimai sağlamlığa təsir edən tullantı toplanmaları obyekt həcmi və məkan sıxlığına görə işarələnir.",
    signals: ["Konteyner doluluğu", "Səpələnmiş tullantı", "Piyada zonası"]
  },
  {
    title: "Su sızması və yolun islanması",
    institution: "Su təsərrüfatı xidməti",
    category: "Su və kanalizasiya",
    location: "Şəki, mərkəzi küçə",
    evidenceType: "Video",
    priority: "Təcili",
    description: "Davamlı su axını, səthdə yığılma və infrastruktur zədəsi ehtimalı olan hallar ayrıca risk indeksi ilə qiymətləndirilir.",
    signals: ["Axın istiqaməti", "Yol səthində gölməçə", "Borunun görünən hissəsi"]
  },
  {
    title: "Park avadanlığının zədələnməsi",
    institution: "Bələdiyyə",
    category: "İctimai məkan",
    location: "Mingəçevir şəhər parkı",
    evidenceType: "Foto",
    priority: "Aşağı",
    description: "Uşaq meydançası və park avadanlığının istifadəyə yararlılığı ilə bağlı hallar zədə növünə görə qruplaşdırılır.",
    signals: ["Sınıq konstruksiya", "İctimai obyekt", "İnsan təhlükəsi sahəsi"]
  },
  {
    title: "Qanunsuz reklam lövhəsi",
    institution: "Şəhərsalma və reklam nəzarəti",
    category: "Şəhər görünüşü",
    location: "Bakı, Yasamal",
    evidenceType: "Foto + mətn qeydi",
    priority: "Aşağı",
    description: "Vizual çirklənmə yaradan və icazəsiz quraşdırıldığı ehtimal edilən reklam konstruksiyaları müqayisəli siyahı ilə işarələnir.",
    signals: ["Fasad üzərində panel", "Vitrin kənarı konstruksiya", "Ünvan lövhəsi"]
  }
];

export const apiModules: ApiModule[] = [
  {
    title: "Müraciət yaradılması",
    endpoint: "POST /api/appeals",
    category: "Qəbul",
    auth: "Citizen SSO və ya xidmət tokeni",
    latency: "<500 ms + async analiz",
    output: "Müraciət ID-si, qəbul statusu və analiz növbəsi",
    tags: ["multipart", "media upload", "gps"]
  },
  {
    title: "Vizual analiz önizləməsi",
    endpoint: "POST /api/analysis/preview",
    category: "AI təhlil",
    auth: "Service-to-service JWT",
    latency: "5-15 san",
    output: "Kateqoriya, prioritet, draft mətn və confidence",
    tags: ["vision model", "triage", "draft text"]
  },
  {
    title: "Yönləndirmə qərarı",
    endpoint: "POST /api/analysis/route",
    category: "Aidiyyət",
    auth: "Operator tokeni",
    latency: "<300 ms",
    output: "Qurum, bölmə və SLA tövsiyəsi",
    tags: ["routing", "business rules", "sla"]
  },
  {
    title: "Nəticə materialı qəbul modu",
    endpoint: "POST /api/verification/upload-result",
    category: "İcra",
    auth: "Institution operator JWT",
    latency: "<500 ms + async compare",
    output: "Cavab faylı statusu və doğrulama işi",
    tags: ["result media", "audit trail", "attachments"]
  },
  {
    title: "Vizual uyğunluq yoxlaması",
    endpoint: "POST /api/verification/compare",
    category: "Doğrulama",
    auth: "Supervisor və ya sistem tokeni",
    latency: "3-10 san",
    output: "sameLocation, issueResolved, similarityScore, warning",
    tags: ["before-after", "change detection", "alerting"]
  },
  {
    title: "Analitika paneli",
    endpoint: "GET /api/insights/overview",
    category: "Hesabat",
    auth: "Supervisor JWT",
    latency: "<200 ms",
    output: "KPI-lar, uyğunsuzluq faizi və model keyfiyyət metrikləri",
    tags: ["dashboard", "kpi", "monitoring"]
  }
];

export const rolloutPhases: RolloutPhase[] = [
  {
    name: "Pilot",
    timeline: "6-8 həftə",
    audience: "Seçilmiş kateqoriyalar və 2-3 qurum",
    summary: "Yol, kommunal və sanitariya müraciətləri üçün modelin ilkin öyrədilməsi və operator iş masasına inteqrasiyası.",
    features: [
      "Vizual analiz və draft mətn",
      "Kateqoriya + prioritet təklifi",
      "Manual override və feedback toplama"
    ]
  },
  {
    name: "Genişləndirmə",
    timeline: "2-3 ay",
    audience: "Əlavə regionlar və daha çox qurum",
    summary: "Daha geniş siniflər, performans ölçülməsi və nəticə yoxlama modulunun istehsal sınağı.",
    features: [
      "Əvvəl-sonra vizual müqayisə",
      "Uyğunsuzluq xəbərdarlıqları",
      "Dashboard KPI-ları və audit logları"
    ],
    featured: true
  },
  {
    name: "Əməliyyat tətbiqi",
    timeline: "3-6 ay",
    audience: "Platforma üzrə standart xidmət qatları",
    summary: "API-lərin sabitləşdirilməsi, model governansı, təhlükəsizlik nəzarətləri və proaktiv analitika ilə tam tətbiq.",
    features: [
      "Modul əsaslı API inteqrasiyası",
      "Model versiyalaşdırma və MLOps",
      "Məxfilik, audit və hesabatlılıq standartları"
    ]
  }
];

export const guides: Guide[] = [
  {
    title: "Həll konsepti və dəyər təklifi",
    category: "Strategiya sənədi",
    readTime: "7 dəq",
    summary: "Problemin həlli üçün məhsul məntiqi, istifadəçi axınları və gözlənilən əməliyyat təsiri."
  },
  {
    title: "API və modul memarlığı",
    category: "Texniki sənəd",
    readTime: "6 dəq",
    summary: "Qəbul, analiz, yönləndirmə, doğrulama və analitika modulları üçün inteqrasiya xəritəsi."
  },
  {
    title: "Məlumat təhlükəsizliyi və məxfilik çərçivəsi",
    category: "Risk nəzarəti",
    readTime: "5 dəq",
    summary: "Media saxlanması, audit trail, giriş nəzarəti və insan nəzarəti ilə bağlı əsas prinsiplər."
  },
  {
    title: "Pilot KPI və ölçmə planı",
    category: "Qiymətləndirmə",
    readTime: "4 dəq",
    summary: "Kateqoriyalaşdırma dəqiqliyi, orta cavab vaxtı və uyğunsuzluq aşkarlama sabitliyi üçün ölçü modeli."
  }
];

export const citizenDashboardCards: DashboardCard[] = [
  {
    title: "Draft hazır olma vaxtı",
    metric: "54 san",
    description: "Yüklənmiş media əsasında vətəndaşa ilkin mətn təklifi yaradılır.",
    trend: "-68% manual yazı yükü"
  },
  {
    title: "Kateqoriya inamı",
    metric: "0.92",
    description: "Sistem müraciəti yol infrastrukturu kateqoriyasına yüksək inamla aid edir."
  },
  {
    title: "Prioritet səviyyəsi",
    metric: "Təcili",
    description: "Vizual risk və hərəkət təhlükəsi səbəbilə sürətli yönləndirmə tövsiyə olunur."
  },
  {
    title: "Məkan dəqiqliyi",
    metric: "87%",
    description: "GPS və vizual işarələr birlikdə istifadə edilərək ünvan dəqiqləşdirilir."
  }
];

export const institutionDashboardCards: DashboardCard[] = [
  {
    title: "Yeni müraciətlər",
    metric: "128",
    description: "Son 24 saatda analiz olunmuş və növbəyə düşmüş müraciətlər."
  },
  {
    title: "Düzgün yönləndirmə nisbəti",
    metric: "91%",
    description: "AI təklifinin operator tərəfindən təsdiqləndiyi halların payı.",
    trend: "+11% son pilot həftəsi"
  },
  {
    title: "Yüksək risk işləri",
    metric: "17",
    description: "Təcili və yüksək təsirli müraciətlər ayrıca görünür."
  },
  {
    title: "Cavab SLA uyğunluğu",
    metric: "94%",
    description: "Qurum daxilində cavab prosesinin SLA üzrə icra göstəricisi."
  }
];

export const supervisorDashboardCards: DashboardCard[] = [
  {
    title: "Uyğunsuz cavab siqnalları",
    metric: "8",
    description: "Əvvəl-sonra doğrulaması zəif olan müraciətlər audit üçün ayrılıb."
  },
  {
    title: "Model coverage",
    metric: "12 sinif",
    description: "Hazırda vizual modelin dəstəklədiyi əsas problem sinifləri."
  },
  {
    title: "İnsan override faizi",
    metric: "14%",
    description: "Operatorların AI qərarını dəyişdiyi müraciətlərin payı."
  },
  {
    title: "Orta doğrulama skoru",
    metric: "0.88",
    description: "Qurum nəticələrinin ilkin vizualla uyğunluq indeksi."
  }
];

export const citizenBenefits = [
  "Foto və ya video yüklədikdən sonra avtomatik mətn təklifi almaq",
  "Natamam təsvir hallarında belə düzgün kateqoriyaya yaxınlaşmaq",
  "Müraciətin prioritet statusunu daha obyektiv görmək",
  "İcra nəticəsinin həqiqətən uyğun olub-olmadığını şəffaf izləmək"
];

export const institutionBenefits = [
  "Müraciətləri mətn keyfiyyətindən asılı olmayaraq daha dəqiq yönləndirmək",
  "Operatorların ilkin baxış və triage yükünü azaltmaq",
  "Riskli işləri avtomatik prioritetləşdirmək",
  "Nəticə materiallarında uyğunluq yoxlamasını sistemləşdirmək"
];

export const supervisorBenefits = [
  "Uyğunsuz cavabları və zəif confidence hallarını tez görmək",
  "Qurumlar üzrə performans fərqlərini müqayisə etmək",
  "Model keyfiyyətini feedback ilə yaxşılaşdırmaq",
  "Şəffaflıq, hesabatlılıq və audit mexanizmini gücləndirmək"
];

export const contactChannels: ContactChannel[] = [
  { label: "Email", value: "pilot@asanvision.az" },
  { label: "Pilot xətti", value: "+994 12 000 00 00" },
  { label: "Texniki əlaqə", value: "api@asanvision.az" }
];

export const faqItems: FaqItem[] = [
  {
    question: "Sistem vətəndaş mətnini tam əvəz edirmi?",
    answer: "Xeyr. Sistem draft təklif edir, vətəndaş və ya operator onu təsdiqləyə və redaktə edə bilir."
  },
  {
    question: "Vizual uyğunluq yoxlaması son qərarı avtomatik bağlayırmı?",
    answer: "Xeyr. Uyğunluq nəticəsi qərar dəstəyi və xəbərdarlıq mexanizmidir; son qərar səlahiyyətli əməkdaşda qalır."
  },
  {
    question: "Məxfilik necə qorunur?",
    answer: "Media faylları audit izi, rol əsaslı giriş və saxlanma siyasəti ilə idarə olunur; model təlimi üçün anonimləşdirmə tətbiq oluna bilər."
  }
];
