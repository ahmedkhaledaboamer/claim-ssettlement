export interface TeamMember {
  id: number;
  titleAr: string;
  titleEn: string;
  titleFr: string;
  departmentId: string;
  departmentAr: string;
  departmentEn: string;
  departmentFr: string;
  tier: 'ceo' | 'director' | 'manager';
  responsibilitiesAr: string[];
  responsibilitiesEn: string[];
  responsibilitiesFr: string[];
  descriptionAr: string;
  descriptionEn: string;
  descriptionFr: string;
  imageKeyword: string;
  icon: string;
}

export const teamMembers: TeamMember[] = [
{
  id: 1,
  titleAr: 'الرئيس التنفيذي للتمويل',
  titleEn: 'Chief Executive Officer – Financing',
  titleFr: 'Directeur général du financement',
  departmentId: 'executive',
  departmentAr: 'القيادة التنفيذية',
  departmentEn: 'Executive leadership',
  departmentFr: 'Direction exécutive',
  tier: 'ceo',
  responsibilitiesAr: [
  'قيادة الرؤية الاستراتيجية للتمويل',
  'الإشراف على جميع العمليات التمويلية',
  'بناء العلاقات مع كبار المستثمرين',
  'اتخاذ القرارات التنفيذية النهائية',
  'تطوير استراتيجيات النمو المستدام',
  'ضمان الامتثال للمعايير التنظيمية'],
  responsibilitiesEn: [
  'Lead the strategic vision for financing',
  'Oversee all financing operations',
  'Build relationships with key investors',
  'Make final executive decisions',
  'Develop sustainable growth strategies',
  'Ensure compliance with regulatory standards'],
  responsibilitiesFr: [
  'Piloter la vision stratégique du financement',
  'Superviser l’ensemble des opérations de financement',
  'Développer les relations avec les grands investisseurs',
  'Prendre les décisions exécutives finales',
  'Élaborer des stratégies de croissance durable',
  'Garantir la conformité aux exigences réglementaires'],
  descriptionAr:
  'القائد الأعلى للجهاز الإداري، يوجه الرؤية الاستراتيجية ويشرف على كافة العمليات التمويلية لضمان تحقيق أعلى معايير الأداء والتميز.',
  descriptionEn:
  'The top leader of the administrative apparatus who sets the strategic vision and oversees all financing operations to ensure the highest standards of performance and excellence.',
  descriptionFr:
  'Le principal responsable de l’appareil administratif, qui définit la vision stratégique et supervise l’ensemble des opérations de financement afin de garantir les plus hauts standards de performance et d’excellence.',
  imageKeyword: 'executive CEO office',
  icon: 'Crown'
},
{
  id: 2,
  titleAr: 'مدير إدارة وساطة التمويل',
  titleEn: 'Director of Financing Brokerage',
  titleFr: 'Directeur de l’intermédiation en financement',
  departmentId: 'executive',
  departmentAr: 'القيادة التنفيذية',
  departmentEn: 'Executive leadership',
  departmentFr: 'Direction exécutive',
  tier: 'director',
  responsibilitiesAr: [
  'إدارة عمليات الوساطة التمويلية',
  'تنسيق العلاقات بين العملاء وجهات التمويل',
  'مراقبة جودة الخدمات المقدمة',
  'تطوير آليات العمل والإجراءات',
  'إعداد التقارير الدورية للإدارة العليا'],
  responsibilitiesEn: [
  'Manage financing brokerage operations',
  'Coordinate relationships between clients and funding institutions',
  'Monitor the quality of services delivered',
  'Develop workflows and operating procedures',
  'Prepare regular reports for senior management'],
  responsibilitiesFr: [
  'Gérer les opérations d’intermédiation en financement',
  'Coordonner les relations entre les clients et les institutions financières',
  'Surveiller la qualité des services fournis',
  'Développer les processus et procédures de travail',
  'Préparer des rapports périodiques pour la direction générale'],
  descriptionAr:
  'المسؤول عن إدارة وتنسيق جميع عمليات الوساطة التمويلية، وضمان سير العمل بكفاءة وفعالية عالية.',
  descriptionEn:
  'Responsible for managing and coordinating all financing brokerage operations and ensuring that work flows efficiently and effectively.',
  descriptionFr:
  'Responsable de la gestion et de la coordination de l’ensemble des opérations d’intermédiation en financement, en veillant à un déroulement du travail efficace et performant.',
  imageKeyword: 'business director office',
  icon: 'Briefcase'
},
{
  id: 3,
  titleAr: 'مدير التحليل المالي',
  titleEn: 'Director of Financial Analysis',
  titleFr: 'Directeur de l’analyse financière',
  departmentId: 'analysis',
  departmentAr: 'التحليل المالي',
  departmentEn: 'Financial analysis',
  departmentFr: 'Analyse financière',
  tier: 'director',
  responsibilitiesAr: [
  'تحليل البيانات المالية للعملاء',
  'إعداد النماذج المالية والتوقعات',
  'تقييم الجدوى الاقتصادية للمشاريع',
  'تقديم التوصيات المالية المبنية على البيانات',
  'مراجعة القوائم المالية والتقارير'],
  responsibilitiesEn: [
  'Analyse clients’ financial data',
  'Prepare financial models and forecasts',
  'Assess the economic feasibility of projects',
  'Provide data‑driven financial recommendations',
  'Review financial statements and reports'],
  responsibilitiesFr: [
  'Analyser les données financières des clients',
  'Préparer des modèles financiers et des prévisions',
  'Évaluer la viabilité économique des projets',
  'Formuler des recommandations financières basées sur les données',
  'Examiner les états financiers et les rapports'],
  descriptionAr:
  'خبير التحليل المالي الذي يحول البيانات إلى رؤى استراتيجية تدعم قرارات التمويل الصائبة.',
  descriptionEn:
  'The financial analysis expert who transforms data into strategic insights that support sound financing decisions.',
  descriptionFr:
  'L’expert en analyse financière qui transforme les données en informations stratégiques au service de décisions de financement éclairées.',
  imageKeyword: 'financial analyst data',
  icon: 'TrendingUp'
},
{
  id: 4,
  titleAr: 'مدير تقييم المخاطر',
  titleEn: 'Director of Risk Assessment',
  titleFr: 'Directeur de l’évaluation des risques',
  departmentId: 'risk',
  departmentAr: 'إدارة المخاطر',
  departmentEn: 'Risk management',
  departmentFr: 'Gestion des risques',
  tier: 'director',
  responsibilitiesAr: [
  'تقييم المخاطر المالية والتشغيلية',
  'تطوير استراتيجيات التخفيف من المخاطر',
  'مراقبة مؤشرات المخاطر الرئيسية',
  'إعداد تقارير المخاطر الدورية',
  'ضمان الامتثال لمعايير إدارة المخاطر'],
  responsibilitiesEn: [
  'Assess financial and operational risks',
  'Develop risk mitigation strategies',
  'Monitor key risk indicators',
  'Prepare periodic risk reports',
  'Ensure compliance with risk‑management standards'],
  responsibilitiesFr: [
  'Évaluer les risques financiers et opérationnels',
  'Développer des stratégies de mitigation des risques',
  'Suivre les indicateurs de risque clés',
  'Préparer des rapports périodiques sur les risques',
  'Garantir la conformité aux normes de gestion des risques'],
  descriptionAr:
  'حارس الاستقرار المالي، يحدد المخاطر المحتملة ويطور استراتيجيات فعالة للتخفيف منها.',
  descriptionEn:
  'The guardian of financial stability who identifies potential risks and develops effective strategies to mitigate them.',
  descriptionFr:
  'Le garant de la stabilité financière, qui identifie les risques potentiels et met en place des stratégies efficaces pour les réduire.',
  imageKeyword: 'risk assessment professional',
  icon: 'Shield'
},
{
  id: 5,
  titleAr: 'مدير العلاقات مع جهات التمويل',
  titleEn: 'Director of Lender Relations',
  titleFr: 'Directeur des relations avec les bailleurs de fonds',
  departmentId: 'relations',
  departmentAr: 'العلاقات مع جهات التمويل',
  departmentEn: 'Lender relations',
  departmentFr: 'Relations avec les bailleurs de fonds',
  tier: 'director',
  responsibilitiesAr: [
  'بناء وتعزيز العلاقات مع البنوك والمؤسسات المالية',
  'التفاوض على شروط التمويل المفضلة',
  'متابعة التطورات في سوق التمويل',
  'تنسيق تقديم الملفات لجهات التمويل',
  'إدارة شبكة الشركاء الماليين'],
  responsibilitiesEn: [
  'Build and strengthen relationships with banks and financial institutions',
  'Negotiate preferred financing terms',
  'Track developments in the funding market',
  'Coordinate file submissions to funding institutions',
  'Manage the network of financial partners'],
  responsibilitiesFr: [
  'Construire et renforcer les relations avec les banques et institutions financières',
  'Négocier des conditions de financement privilégiées',
  'Suivre l’évolution du marché du financement',
  'Coordonner la soumission des dossiers aux institutions financières',
  'Gérer le réseau de partenaires financiers'],
  descriptionAr:
  'الجسر الذي يربط بين العملاء وجهات التمويل، يبني علاقات استراتيجية تضمن أفضل الشروط.',
  descriptionEn:
  'The bridge between clients and funding institutions, building strategic relationships that secure the best possible terms.',
  descriptionFr:
  'Le pont entre les clients et les institutions financières, qui construit des relations stratégiques garantissant les meilleures conditions.',
  imageKeyword: 'business relations networking',
  icon: 'Handshake'
},
{
  id: 6,
  titleAr: 'مدير تطوير الأعمال التمويلية',
  titleEn: 'Director of Financing Business Development',
  titleFr: 'Directeur du développement des activités de financement',
  departmentId: 'business',
  departmentAr: 'تطوير الأعمال',
  departmentEn: 'Business development',
  departmentFr: 'Développement des affaires',
  tier: 'director',
  responsibilitiesAr: [
  'استكشاف فرص الأعمال الجديدة',
  'تطوير المنتجات والخدمات التمويلية',
  'بناء استراتيجيات النمو',
  'تحليل اتجاهات السوق والمنافسة',
  'إدارة مشاريع التطوير الاستراتيجي'],
  responsibilitiesEn: [
  'Explore new business opportunities',
  'Develop financing products and services',
  'Build growth strategies',
  'Analyse market and competitive trends',
  'Manage strategic development projects'],
  responsibilitiesFr: [
  'Explorer de nouvelles opportunités d’affaires',
  'Développer des produits et services de financement',
  'Construire des stratégies de croissance',
  'Analyser les tendances du marché et de la concurrence',
  'Gérer des projets de développement stratégique'],
  descriptionAr:
  'محرك النمو والابتكار، يستكشف الفرص الجديدة ويطور حلولاً تمويلية مبتكرة تلبي احتياجات السوق.',
  descriptionEn:
  'The driver of growth and innovation, identifying new opportunities and developing innovative financing solutions that meet market needs.',
  descriptionFr:
  'Le moteur de la croissance et de l’innovation, qui identifie de nouvelles opportunités et développe des solutions de financement innovantes adaptées au marché.',
  imageKeyword: 'business development presentation',
  icon: 'Rocket'
},
{
  id: 7,
  titleAr: 'مدير التفاوض والإغلاق',
  titleEn: 'Director of Negotiation and Closing',
  titleFr: 'Directeur de la négociation et de la clôture',
  departmentId: 'negotiation',
  departmentAr: 'التفاوض والإغلاق',
  departmentEn: 'Negotiation & closing',
  departmentFr: 'Négociation et clôture',
  tier: 'director',
  responsibilitiesAr: [
  'قيادة مفاوضات التمويل مع الجهات المختلفة',
  'ضمان الحصول على أفضل الشروط للعملاء',
  'إدارة عملية الإغلاق المالي',
  'مراجعة العقود والاتفاقيات',
  'حل النزاعات والخلافات التعاقدية'],
  responsibilitiesEn: [
  'Lead financing negotiations with various institutions',
  'Ensure clients obtain the best possible terms',
  'Manage the full financial closing process',
  'Review contracts and agreements',
  'Resolve contractual disputes and issues'],
  responsibilitiesFr: [
  'Mener les négociations de financement avec les différentes institutions',
  'Garantir aux clients les meilleures conditions possibles',
  'Gérer l’ensemble du processus de clôture financière',
  'Examiner les contrats et accords',
  'Résoudre les litiges et différends contractuels'],
  descriptionAr:
  'المفاوض الخبير الذي يضمن حصول العملاء على أفضل الشروط التمويلية الممكنة.',
  descriptionEn:
  'The seasoned negotiator who ensures clients secure the best possible financing terms.',
  descriptionFr:
  'Le négociateur expérimenté qui garantit aux clients l’obtention des meilleures conditions de financement.',
  imageKeyword: 'negotiation handshake deal',
  icon: 'Scale'
},
{
  id: 8,
  titleAr: 'مدير إدارة الملفات التمويلية',
  titleEn: 'Manager of Financing File Management',
  titleFr: 'Responsable de la gestion des dossiers de financement',
  departmentId: 'files',
  departmentAr: 'إدارة الملفات',
  departmentEn: 'File management',
  departmentFr: 'Gestion des dossiers',
  tier: 'manager',
  responsibilitiesAr: [
  'تنظيم وإدارة الملفات التمويلية',
  'ضمان اكتمال المستندات المطلوبة',
  'متابعة حالة الملفات مع جهات التمويل',
  'أرشفة وحفظ السجلات بشكل آمن',
  'تطوير أنظمة إدارة المستندات'],
  responsibilitiesEn: [
  'Organise and manage financing files',
  'Ensure all required documents are complete',
  'Track file status with funding institutions',
  'Archive and store records securely',
  'Develop document‑management systems'],
  responsibilitiesFr: [
  'Organiser et gérer les dossiers de financement',
  'S’assurer de l’exhaustivité des documents requis',
  'Suivre l’avancement des dossiers auprès des bailleurs de fonds',
  'Archiver et conserver les dossiers en toute sécurité',
  'Développer des systèmes de gestion documentaire'],
  descriptionAr:
  'المنظم الدقيق الذي يضمن اكتمال وسلامة كل ملف تمويلي من البداية حتى النهاية.',
  descriptionEn:
  'The meticulous organiser who ensures every financing file is complete and accurate from start to finish.',
  descriptionFr:
  'L’organisateur méticuleux qui garantit l’exhaustivité et la fiabilité de chaque dossier de financement, de bout en bout.',
  imageKeyword: 'document management organized',
  icon: 'FolderOpen'
},
{
  id: 9,
  titleAr: 'مدير العمليات التمويلية',
  titleEn: 'Manager of Financing Operations',
  titleFr: 'Responsable des opérations de financement',
  departmentId: 'operations',
  departmentAr: 'العمليات',
  departmentEn: 'Operations',
  departmentFr: 'Opérations',
  tier: 'manager',
  responsibilitiesAr: [
  'الإشراف على سير العمليات اليومية',
  'تحسين كفاءة العمليات التشغيلية',
  'إدارة الموارد والجداول الزمنية',
  'تطوير مؤشرات الأداء الرئيسية',
  'ضمان جودة المخرجات التشغيلية'],
  responsibilitiesEn: [
  'Supervise day‑to‑day operations',
  'Improve operational efficiency',
  'Manage resources and timelines',
  'Develop key performance indicators',
  'Ensure the quality of operational outputs'],
  responsibilitiesFr: [
  'Superviser le déroulement des opérations quotidiennes',
  'Améliorer l’efficacité opérationnelle',
  'Gérer les ressources et les plannings',
  'Développer des indicateurs clés de performance',
  'Garantir la qualité des résultats opérationnels'],
  descriptionAr:
  'قائد العمليات الذي يضمن سير العمل بسلاسة وكفاءة عبر جميع الأقسام.',
  descriptionEn:
  'The operations leader who ensures smooth and efficient workflows across all departments.',
  descriptionFr:
  'Le responsable des opérations qui veille à la fluidité et à l’efficacité du travail dans l’ensemble des départements.',
  imageKeyword: 'operations management screens',
  icon: 'Settings'
},
{
  id: 10,
  titleAr: 'مدير الامتثال والحوكمة',
  titleEn: 'Manager of Compliance and Governance',
  titleFr: 'Responsable conformité et gouvernance',
  departmentId: 'compliance',
  departmentAr: 'الامتثال والحوكمة',
  departmentEn: 'Compliance & governance',
  departmentFr: 'Conformité et gouvernance',
  tier: 'manager',
  responsibilitiesAr: [
  'ضمان الامتثال للأنظمة واللوائح المالية',
  'تطوير سياسات الحوكمة الداخلية',
  'إجراء المراجعات الدورية للامتثال',
  'التواصل مع الجهات التنظيمية',
  'تدريب الفريق على متطلبات الامتثال'],
  responsibilitiesEn: [
  'Ensure compliance with financial regulations',
  'Develop internal governance policies',
  'Perform regular compliance reviews',
  'Liaise with regulatory authorities',
  'Train the team on compliance requirements'],
  responsibilitiesFr: [
  'Garantir la conformité aux réglementations financières',
  'Développer les politiques de gouvernance interne',
  'Réaliser des revues périodiques de conformité',
  'Assurer la liaison avec les autorités de régulation',
  'Former l’équipe aux exigences de conformité'],
  descriptionAr:
  'حارس النزاهة والشفافية، يضمن التزام جميع العمليات بأعلى معايير الحوكمة والامتثال.',
  descriptionEn:
  'The guardian of integrity and transparency who ensures all operations adhere to the highest standards of governance and compliance.',
  descriptionFr:
  'Le gardien de l’intégrité et de la transparence, qui veille au respect des normes les plus élevées de gouvernance et de conformité dans toutes les opérations.',
  imageKeyword: 'compliance governance professional',
  icon: 'CheckCircle'
},
{
  id: 11,
  titleAr: 'مدير خدمة العملاء التمويلية',
  titleEn: 'Manager of Financing Customer Service',
  titleFr: 'Responsable service clients – financement',
  departmentId: 'client',
  departmentAr: 'خدمة العملاء',
  departmentEn: 'Client services',
  departmentFr: 'Service clients',
  tier: 'manager',
  responsibilitiesAr: [
  'إدارة تجربة العملاء من البداية للنهاية',
  'الاستجابة لاستفسارات وشكاوى العملاء',
  'تطوير برامج رضا العملاء',
  'بناء علاقات طويلة الأمد مع العملاء',
  'تحليل ملاحظات العملاء لتحسين الخدمة'],
  responsibilitiesEn: [
  'Manage the client experience from start to finish',
  'Respond to client inquiries and complaints',
  'Develop customer satisfaction programmes',
  'Build long‑term client relationships',
  'Analyse client feedback to improve service'],
  responsibilitiesFr: [
  'Gérer l’expérience client de bout en bout',
  'Répondre aux demandes et réclamations des clients',
  'Développer des programmes de satisfaction client',
  'Construire des relations durables avec les clients',
  'Analyser les retours clients pour améliorer le service'],
  descriptionAr:
  'صوت العميل داخل المؤسسة، يضمن تجربة استثنائية في كل مرحلة من مراحل التمويل.',
  descriptionEn:
  'The voice of the client inside the organisation, ensuring an exceptional experience at every stage of the financing journey.',
  descriptionFr:
  'La voix du client au sein de l’organisation, qui garantit une expérience exceptionnelle à chaque étape du parcours de financement.',
  imageKeyword: 'customer service professional',
  icon: 'Heart'
},
{
  id: 12,
  titleAr: 'مدير التمويل الاستثماري',
  titleEn: 'Manager of Investment Financing',
  titleFr: 'Responsable financement investissement',
  departmentId: 'investment',
  departmentAr: 'التمويل الاستثماري',
  departmentEn: 'Investment financing',
  departmentFr: 'Financement d’investissement',
  tier: 'manager',
  responsibilitiesAr: [
  'إدارة محفظة التمويل الاستثماري',
  'تقييم الفرص الاستثمارية',
  'هيكلة الصفقات الاستثمارية',
  'التنسيق مع المستثمرين والصناديق',
  'متابعة أداء الاستثمارات الممولة'],
  responsibilitiesEn: [
  'Manage the investment‑financing portfolio',
  'Evaluate investment opportunities',
  'Structure investment deals',
  'Coordinate with investors and funds',
  'Monitor the performance of financed investments'],
  responsibilitiesFr: [
  'Gérer le portefeuille de financements d’investissement',
  'Évaluer les opportunités d’investissement',
  'Structurer les opérations d’investissement',
  'Coordonner avec les investisseurs et les fonds',
  'Suivre la performance des investissements financés'],
  descriptionAr:
  'خبير التمويل الاستثماري الذي يحول الفرص إلى صفقات ناجحة تحقق عوائد مجزية.',
  descriptionEn:
  'The investment‑financing expert who turns opportunities into successful deals that generate attractive returns.',
  descriptionFr:
  'L’expert du financement d’investissement qui transforme les opportunités en opérations réussies à forte valeur ajoutée.',
  imageKeyword: 'investment finance meeting',
  icon: 'Gem'
},
{
  id: 13,
  titleAr: 'مدير التمويل التجاري والعقاري',
  titleEn: 'Manager of Commercial and Real Estate Financing',
  titleFr: 'Responsable financement commercial et immobilier',
  departmentId: 'commercial',
  departmentAr: 'التمويل التجاري والعقاري',
  departmentEn: 'Commercial & real estate financing',
  departmentFr: 'Financement commercial et immobilier',
  tier: 'manager',
  responsibilitiesAr: [
  'إدارة ملفات التمويل التجاري والعقاري',
  'تقييم المشاريع العقارية والتجارية',
  'التنسيق مع المطورين والمستثمرين العقاريين',
  'هيكلة حلول التمويل العقاري',
  'متابعة اتجاهات السوق العقاري'],
  responsibilitiesEn: [
  'Manage commercial and real‑estate financing files',
  'Assess commercial and real‑estate projects',
  'Coordinate with developers and real‑estate investors',
  'Structure real‑estate financing solutions',
  'Track trends in the real‑estate market'],
  responsibilitiesFr: [
  'Gérer les dossiers de financement commercial et immobilier',
  'Évaluer les projets immobiliers et commerciaux',
  'Coordonner avec les promoteurs et investisseurs immobiliers',
  'Structurer des solutions de financement immobilier',
  'Suivre les tendances du marché immobilier'],
  descriptionAr:
  'المتخصص في التمويل التجاري والعقاري، يقدم حلولاً مصممة خصيصاً لكل مشروع.',
  descriptionEn:
  'The specialist in commercial and real‑estate financing who provides tailored solutions for each project.',
  descriptionFr:
  'Le spécialiste du financement commercial et immobilier, qui propose des solutions sur mesure pour chaque projet.',
  imageKeyword: 'real estate commercial finance',
  icon: 'Building'
},
{
  id: 14,
  titleAr: 'مدير تمويل الشركات والمشاريع',
  titleEn: 'Manager of Corporate and Project Finance',
  titleFr: 'Responsable financement entreprises et projets',
  departmentId: 'corporate',
  departmentAr: 'تمويل الشركات والمشاريع',
  departmentEn: 'Corporate & project finance',
  departmentFr: 'Financement des entreprises et projets',
  tier: 'manager',
  responsibilitiesAr: [
  'إدارة تمويل الشركات الكبرى والمشاريع',
  'هيكلة الصفقات المعقدة',
  'التنسيق مع مجالس الإدارة والمساهمين',
  'تقييم الجدوى المالية للمشاريع الكبرى',
  'إدارة المخاطر المرتبطة بتمويل الشركات'],
  responsibilitiesEn: [
  'Manage financing for large corporations and projects',
  'Structure complex financing transactions',
  'Coordinate with boards and shareholders',
  'Assess the financial feasibility of major projects',
  'Manage risks associated with corporate financing'],
  responsibilitiesFr: [
  'Gérer le financement des grandes entreprises et projets',
  'Structurer des opérations de financement complexes',
  'Coordonner avec les conseils d’administration et actionnaires',
  'Évaluer la faisabilité financière des grands projets',
  'Gérer les risques liés au financement des entreprises'],
  descriptionAr:
  'قائد تمويل الشركات الذي يتعامل مع أكبر الصفقات وأكثرها تعقيداً بخبرة واحترافية.',
  descriptionEn:
  'The corporate‑finance leader who handles the largest and most complex deals with expertise and professionalism.',
  descriptionFr:
  'Le responsable du financement des entreprises qui gère les opérations les plus importantes et les plus complexes avec expertise et professionnalisme.',
  imageKeyword: 'corporate boardroom leadership',
  icon: 'Building2'
},
{
  id: 15,
  titleAr: 'مدير دعم ما بعد التمويل',
  titleEn: 'Manager of Post‑Financing Support',
  titleFr: 'Responsable accompagnement post‑financement',
  departmentId: 'post',
  departmentAr: 'دعم ما بعد التمويل',
  departmentEn: 'Post‑financing support',
  departmentFr: 'Support post‑financement',
  tier: 'manager',
  responsibilitiesAr: [
  'متابعة العملاء بعد إتمام التمويل',
  'ضمان رضا العملاء عن الخدمة المقدمة',
  'تقديم الدعم والاستشارات المستمرة',
  'إدارة عمليات إعادة التمويل',
  'بناء برامج الولاء والاحتفاظ بالعملاء'],
  responsibilitiesEn: [
  'Follow up with clients after financing is completed',
  'Ensure clients are satisfied with the service provided',
  'Offer ongoing support and advisory services',
  'Manage refinancing processes',
  'Build loyalty and retention programmes'],
  responsibilitiesFr: [
  'Assurer le suivi des clients après la mise en place du financement',
  'Garantir la satisfaction des clients quant au service fourni',
  'Fournir un support et des conseils continus',
  'Gérer les opérations de refinancement',
  'Mettre en place des programmes de fidélisation et de rétention'],
  descriptionAr:
  'الشريك الدائم الذي يرافق العميل بعد التمويل، يضمن استمرار النجاح والاستقرار المالي.',
  descriptionEn:
  'The long‑term partner who accompanies the client after financing, ensuring continued success and financial stability.',
  descriptionFr:
  'Le partenaire de long terme qui accompagne le client après le financement et veille à la pérennité de sa réussite et de sa stabilité financière.',
  imageKeyword: 'support advisor meeting',
  icon: 'LifeBuoy'
}];


export const tierOrder = {
  ceo: 0,
  director: 1,
  manager: 2
};