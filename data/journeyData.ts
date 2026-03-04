export interface JourneyStep {
  id: number;
  titleAr: string;
  titleEn: string;
  titleFr: string;
  descriptionAr: string;
  descriptionEn: string;
  descriptionFr: string;
  icon: string;
  color: string;
  duration: string;
  durationEn: string;
  durationFr: string;
}

export const journeySteps: JourneyStep[] = [
{
  id: 1,
  titleAr: 'جلسة فهم وتحليل',
  titleEn: 'Discovery and needs analysis session',
  titleFr: 'Séance de découverte et d’analyse des besoins',
  descriptionAr:
  'نبدأ بجلسة استماع عميقة لفهم احتياجاتك التمويلية بدقة. نحلل وضعك المالي الحالي ونحدد الأهداف المطلوبة لبناء خطة تمويل مخصصة.',
  descriptionEn:
  'We begin with an in‑depth discovery session to understand your financing needs precisely. We analyze your current financial position and define the objectives needed to build a tailored financing plan.',
  descriptionFr:
  'Nous commençons par une séance de découverte approfondie pour comprendre précisément vos besoins de financement. Nous analysons votre situation financière actuelle et définissons les objectifs nécessaires pour bâtir un plan de financement sur mesure.',
  icon: 'MessageCircle',
  color: '#C5A028',
  duration: '١-٢ يوم',
  durationEn: '1–2 days',
  durationFr: '1–2 jours'
},
{
  id: 2,
  titleAr: 'تقييم مالي وتشغيلي',
  titleEn: 'Financial and operational assessment',
  titleFr: 'Évaluation financière et opérationnelle',
  descriptionAr:
  'فريق التحليل المالي يقوم بتقييم شامل لبياناتك المالية والتشغيلية، مع دراسة القوائم المالية والتدفقات النقدية وتحليل الجدوى.',
  descriptionEn:
  'The financial analysis team conducts a comprehensive review of your financial and operational data, studying financial statements, cash flows and feasibility.',
  descriptionFr:
  'L’équipe d’analyse financière réalise une évaluation complète de vos données financières et opérationnelles, en étudiant les états financiers, les flux de trésorerie et la faisabilité.',
  icon: 'BarChart3',
  color: '#046307',
  duration: '٣-٥ أيام',
  durationEn: '3–5 days',
  durationFr: '3–5 jours'
},
{
  id: 3,
  titleAr: 'بناء خطة التمويل',
  titleEn: 'Building the financing plan',
  titleFr: 'Élaboration du plan de financement',
  descriptionAr:
  'نصمم خطة تمويل استراتيجية مخصصة تتناسب مع احتياجاتك، تشمل هيكل التمويل المقترح والشروط المستهدفة والجدول الزمني.',
  descriptionEn:
  'We design a tailored strategic financing plan that matches your needs, including the proposed structure, target terms and timeline.',
  descriptionFr:
  'Nous concevons un plan de financement stratégique sur mesure adapté à vos besoins, incluant la structure proposée, les conditions visées et le calendrier.',
  icon: 'FileText',
  color: '#0F52BA',
  duration: '٢-٣ أيام',
  durationEn: '2–3 days',
  durationFr: '2–3 jours'
},
{
  id: 4,
  titleAr: 'تجهيز الملف',
  titleEn: 'Preparing the financing file',
  titleFr: 'Préparation du dossier de financement',
  descriptionAr:
  'نقوم بتجهيز ملف تمويلي متكامل يتضمن جميع المستندات والتحليلات المطلوبة، مع مراجعة دقيقة لضمان الاكتمال والجودة.',
  descriptionEn:
  'We prepare a complete financing file that includes all required documents and analyses, with thorough review to ensure completeness and quality.',
  descriptionFr:
  'Nous préparons un dossier de financement complet incluant tous les documents et analyses requis, avec une révision minutieuse pour garantir exhaustivité et qualité.',
  icon: 'FolderOpen',
  color: '#9966CC',
  duration: '٣-٧ أيام',
  durationEn: '3–7 days',
  durationFr: '3–7 jours'
},
{
  id: 5,
  titleAr: 'تقديم الملف للجهة المناسبة',
  titleEn: 'Submitting the file to the right institution',
  titleFr: 'Soumission du dossier à l’institution adéquate',
  descriptionAr:
  'نختار جهة التمويل الأنسب لملفك ونقدمه بشكل احترافي، مع تقديم عرض مقنع يبرز نقاط القوة في طلبك.',
  descriptionEn:
  'We select the most suitable funding institution for your file and submit it professionally, presenting a compelling case that highlights your strengths.',
  descriptionFr:
  'Nous sélectionnons l’institution de financement la plus adaptée à votre dossier et le soumettons de manière professionnelle, en présentant un argumentaire solide mettant en avant vos points forts.',
  icon: 'Send',
  color: '#0047AB',
  duration: '١-٢ يوم',
  durationEn: '1–2 days',
  durationFr: '1–2 jours'
},
{
  id: 6,
  titleAr: 'التفاوض على الشروط',
  titleEn: 'Negotiating the terms',
  titleFr: 'Négociation des conditions',
  descriptionAr:
  'فريق التفاوض يعمل على الحصول على أفضل الشروط الممكنة، من معدلات الربح إلى فترات السداد وشروط الضمانات.',
  descriptionEn:
  'Our negotiation team works to secure the best possible terms, from pricing and tenor to covenants and guarantees.',
  descriptionFr:
  'Notre équipe de négociation s’emploie à obtenir les meilleures conditions possibles, qu’il s’agisse des taux, des échéances ou des garanties.',
  icon: 'Scale',
  color: '#D4AF37',
  duration: '٥-١٠ أيام',
  durationEn: '5–10 days',
  durationFr: '5–10 jours'
},
{
  id: 7,
  titleAr: 'المتابعة حتى الموافقة',
  titleEn: 'Follow‑up until approval',
  titleFr: 'Suivi jusqu’à l’acceptation',
  descriptionAr:
  'نتابع ملفك بشكل مستمر مع جهة التمويل، نجيب على استفساراتهم ونقدم أي مستندات إضافية مطلوبة حتى الحصول على الموافقة.',
  descriptionEn:
  'We follow up continuously with the funding institution, respond to their queries and provide any additional documents required until approval is obtained.',
  descriptionFr:
  'Nous assurons un suivi continu avec l’institution financière, répondons à ses demandes et fournissons tous les documents complémentaires nécessaires jusqu’à l’acceptation.',
  icon: 'Clock',
  color: '#FFBF00',
  duration: '٧-١٤ يوم',
  durationEn: '7–14 days',
  durationFr: '7–14 jours'
},
{
  id: 8,
  titleAr: 'الإغلاق المالي',
  titleEn: 'Financial closing',
  titleFr: 'Clôture financière',
  descriptionAr:
  'نشرف على عملية الإغلاق المالي بالكامل، من مراجعة العقود النهائية إلى التوقيع وصرف التمويل.',
  descriptionEn:
  'We oversee the full financial closing process, from reviewing final contracts to signing and disbursement of funds.',
  descriptionFr:
  'Nous supervisons l’ensemble du processus de clôture financière, de la révision des contrats finaux jusqu’à la signature et au décaissement des fonds.',
  icon: 'CheckCircle2',
  color: '#800020',
  duration: '٣-٥ أيام',
  durationEn: '3–5 days',
  durationFr: '3–5 jours'
},
{
  id: 9,
  titleAr: 'دعم ما بعد التمويل',
  titleEn: 'Post‑financing support',
  titleFr: 'Accompagnement post‑financement',
  descriptionAr:
  'لا تنتهي علاقتنا بالإغلاق. نقدم دعماً مستمراً يشمل متابعة الالتزامات، استشارات مالية، وخدمات إعادة التمويل عند الحاجة.',
  descriptionEn:
  'Our relationship does not end at closing. We provide ongoing support including monitoring obligations, financial advisory and refinancing services when needed.',
  descriptionFr:
  'Notre relation ne s’arrête pas à la clôture. Nous offrons un accompagnement continu incluant le suivi des engagements, le conseil financier et les services de refinancement lorsque nécessaire.',
  icon: 'LifeBuoy',
  color: '#40E0D0',
  duration: 'مستمر',
  durationEn: 'Ongoing',
  durationFr: 'Continu'
}];


export const operatingLayers = [
{
  id: 1,
  titleAr: 'طبقة التحليل المالي',
  titleEn: 'Financial analysis layer',
  titleFr: 'Couche d’analyse financière',
  descriptionAr:
  'الأساس الذي يُبنى عليه كل قرار تمويلي. تحليل عميق للبيانات المالية والتدفقات النقدية والقوائم المالية لبناء صورة واضحة عن الوضع المالي.',
  descriptionEn:
  'The foundation on which every financing decision is built. In‑depth analysis of financial data, cash flows and statements to form a clear picture of your position.',
  descriptionFr:
  'Le socle sur lequel repose chaque décision de financement. Analyse approfondie des données financières, des flux de trésorerie et des états financiers pour avoir une vision claire de votre situation.',
  color: '#046307',
  icon: 'Search'
},
{
  id: 2,
  titleAr: 'طبقة التقييم التشغيلي',
  titleEn: 'Operational assessment layer',
  titleFr: 'Couche d’évaluation opérationnelle',
  descriptionAr:
  'تقييم شامل للعمليات التشغيلية والقدرة الإنتاجية والكفاءة التشغيلية لضمان استدامة التمويل.',
  descriptionEn:
  'Comprehensive assessment of operations, production capacity and efficiency to ensure the sustainability of financing.',
  descriptionFr:
  'Évaluation complète des opérations, de la capacité de production et de l’efficacité afin d’assurer la pérennité du financement.',
  color: '#4682B4',
  icon: 'Settings'
},
{
  id: 3,
  titleAr: 'طبقة المطابقة التمويلية',
  titleEn: 'Financing matching layer',
  titleFr: 'Couche de mise en correspondance du financement',
  descriptionAr:
  'مطابقة دقيقة بين احتياجات العميل وعروض جهات التمويل المتاحة للوصول إلى أفضل توافق ممكن.',
  descriptionEn:
  'Precise matching between the client’s needs and available funding offers to reach the best possible fit.',
  descriptionFr:
  'Mise en correspondance précise entre les besoins du client et les offres de financement disponibles afin d’atteindre l’adéquation optimale.',
  color: '#0F52BA',
  icon: 'Puzzle'
},
{
  id: 4,
  titleAr: 'طبقة التفاوض',
  titleEn: 'Negotiation layer',
  titleFr: 'Couche de négociation',
  descriptionAr:
  'تفاوض احترافي للحصول على أفضل الشروط والأسعار، مع حماية مصالح العميل في كل بند.',
  descriptionEn:
  'Professional negotiation to secure the best terms and pricing while protecting the client’s interests in every clause.',
  descriptionFr:
  'Négociation professionnelle visant à obtenir les meilleures conditions et tarifs tout en protégeant les intérêts du client dans chaque clause.',
  color: '#D4AF37',
  icon: 'Scale'
},
{
  id: 5,
  titleAr: 'طبقة الإغلاق والمتابعة',
  titleEn: 'Closure and follow‑up layer',
  titleFr: 'Couche de clôture et de suivi',
  descriptionAr:
  'إتمام الصفقة بسلاسة ومتابعة مستمرة لضمان نجاح التمويل وتحقيق الأهداف المرجوة.',
  descriptionEn:
  'Smooth deal closure with continuous follow‑up to ensure the success of the financing and achievement of objectives.',
  descriptionFr:
  'Clôture fluide de l’opération avec un suivi continu pour garantir la réussite du financement et l’atteinte des objectifs visés.',
  color: '#800020',
  icon: 'Lock'
}];


export const serviceLevels = [
{
  id: 1,
  titleAr: 'المستوى الأساسي',
  titleEn: 'Basic level',
  titleFr: 'Niveau de base',
  descriptionAr:
  'خدمة تمويلية أساسية تشمل التحليل المالي الأولي وتقديم الملف لجهة تمويل واحدة مع متابعة أساسية.',
  descriptionEn:
  'An essential financing service including initial financial analysis and submission of the file to one funding institution with basic follow‑up.',
  descriptionFr:
  'Un service de financement essentiel comprenant une analyse financière initiale et le dépôt du dossier auprès d’une institution financière avec un suivi de base.',
  features: [
  'تحليل مالي أولي',
  'تجهيز ملف أساسي',
  'تقديم لجهة واحدة',
  'متابعة أساسية'],
  featuresEn: [
  'Initial financial analysis',
  'Basic file preparation',
  'Submission to one institution',
  'Basic follow‑up'],
  featuresFr: [
  'Analyse financière initiale',
  'Préparation de dossier de base',
  'Dépôt auprès d’une institution',
  'Suivi de base'],

  color: '#C0C0C0',
  icon: 'Star'
},
{
  id: 2,
  titleAr: 'المستوى المتقدم',
  titleEn: 'Advanced level',
  titleFr: 'Niveau avancé',
  descriptionAr:
  'خدمة متقدمة تشمل تحليلاً مالياً شاملاً وتقديم الملف لعدة جهات تمويل مع تفاوض على الشروط.',
  descriptionEn:
  'An advanced service including comprehensive financial analysis and submission to several funding institutions with terms negotiation.',
  descriptionFr:
  'Un service avancé comprenant une analyse financière complète et la soumission du dossier à plusieurs institutions financières avec négociation des conditions.',
  features: [
  'تحليل مالي شامل',
  'تجهيز ملف متكامل',
  'تقديم لـ ٣ جهات',
  'تفاوض على الشروط',
  'متابعة مستمرة'],
  featuresEn: [
  'Comprehensive financial analysis',
  'Complete file preparation',
  'Submission to 3 institutions',
  'Terms negotiation',
  'Continuous follow‑up'],
  featuresFr: [
  'Analyse financière complète',
  'Préparation de dossier complet',
  'Soumission à 3 institutions',
  'Négociation des conditions',
  'Suivi continu'],

  color: '#4682B4',
  icon: 'Star'
},
{
  id: 3,
  titleAr: 'المستوى التنفيذي',
  titleEn: 'Executive level',
  titleFr: 'Niveau exécutif',
  descriptionAr:
  'خدمة تنفيذية متميزة مع فريق مخصص وتحليل معمق وتفاوض احترافي مع أفضل جهات التمويل.',
  descriptionEn:
  'A distinguished executive service with a dedicated team, in‑depth analysis and professional negotiation with top funding institutions.',
  descriptionFr:
  'Un service exécutif d’exception avec une équipe dédiée, une analyse approfondie et une négociation professionnelle avec les meilleures institutions financières.',
  features: [
  'فريق مخصص',
  'تحليل معمق',
  'تقديم لـ ٥ جهات',
  'تفاوض احترافي',
  'دعم ما بعد التمويل',
  'تقارير دورية'],
  featuresEn: [
  'Dedicated team',
  'In‑depth analysis',
  'Submission to 5 institutions',
  'Professional negotiation',
  'Post‑financing support',
  'Periodic reports'],
  featuresFr: [
  'Équipe dédiée',
  'Analyse approfondie',
  'Soumission à 5 institutions',
  'Négociation professionnelle',
  'Accompagnement post‑financement',
  'Rapports périodiques'],

  color: '#D4AF37',
  icon: 'Crown'
},
{
  id: 4,
  titleAr: 'المستوى الاستراتيجي',
  titleEn: 'Strategic level',
  titleFr: 'Niveau stratégique',
  descriptionAr:
  'خدمة استراتيجية شاملة للمشاريع الكبرى، تشمل هيكلة مالية متقدمة وتنسيق مع عدة جهات تمويل.',
  descriptionEn:
  'A comprehensive strategic service for major projects, including advanced financial structuring and coordination with multiple funding institutions.',
  descriptionFr:
  'Un service stratégique complet pour les grands projets, incluant une structuration financière avancée et la coordination avec plusieurs institutions financières.',
  features: [
  'هيكلة مالية متقدمة',
  'تنسيق متعدد الجهات',
  'إدارة مخاطر شاملة',
  'تفاوض استراتيجي',
  'دعم قانوني',
  'متابعة VIP'],
  featuresEn: [
  'Advanced financial structuring',
  'Multi‑institution coordination',
  'Comprehensive risk management',
  'Strategic negotiation',
  'Legal support',
  'VIP follow‑up'],
  featuresFr: [
  'Structuration financière avancée',
  'Coordination multi‑institutions',
  'Gestion globale des risques',
  'Négociation stratégique',
  'Support juridique',
  'Suivi VIP'],

  color: '#800020',
  icon: 'Zap'
},
{
  id: 5,
  titleAr: 'المستوى الخاص برجال الأعمال',
  titleEn: 'Business owners level',
  titleFr: 'Niveau dirigeants et entrepreneurs',
  descriptionAr:
  'أعلى مستوى من الخدمة الحصرية لرجال الأعمال والمستثمرين الكبار، مع فريق تنفيذي مخصص وخدمة ٢٤/٧.',
  descriptionEn:
  'The highest level of exclusive service for business owners and major investors, with a dedicated executive team and 24/7 availability.',
  descriptionFr:
  'Le niveau le plus élevé de service exclusif pour les dirigeants et grands investisseurs, avec une équipe exécutive dédiée et une disponibilité 24h/24 et 7j/7.',
  features: [
  'فريق تنفيذي حصري',
  'خدمة ٢٤/٧',
  'وصول مباشر للرئيس التنفيذي',
  'هيكلة مخصصة بالكامل',
  'تفاوض على أعلى مستوى',
  'دعم شامل مدى الحياة',
  'أولوية في المعالجة'],
  featuresEn: [
  'Exclusive executive team',
  '24/7 service',
  'Direct access to the CEO',
  'Fully customized structuring',
  'Top‑level negotiation',
  'Lifetime comprehensive support',
  'Priority processing'],
  featuresFr: [
  'Équipe exécutive exclusive',
  'Service 24h/24 et 7j/7',
  'Accès direct au PDG',
  'Structuration entièrement personnalisée',
  'Négociation au plus haut niveau',
  'Support complet à vie',
  'Traitement prioritaire'],

  color: '#C5A028',
  icon: 'Diamond'
}];


export const qualityStandards = [
{
  id: 1,
  titleAr: 'دقة تشغيلية',
  titleEn: 'Operational accuracy',
  titleFr: 'Précision opérationnelle',
  value: 98,
  icon: 'Target',
  color: '#046307'
},
{
  id: 2,
  titleAr: 'سرعة تنفيذ',
  titleEn: 'Speed of execution',
  titleFr: 'Rapidité d’exécution',
  value: 95,
  icon: 'Zap',
  color: '#D4AF37'
},
{
  id: 3,
  titleAr: 'شفافية كاملة',
  titleEn: 'Full transparency',
  titleFr: 'Transparence totale',
  value: 100,
  icon: 'Eye',
  color: '#0F52BA'
},
{
  id: 4,
  titleAr: 'متابعة مستمرة',
  titleEn: 'Continuous follow‑up',
  titleFr: 'Suivi continu',
  value: 97,
  icon: 'RefreshCw',
  color: '#40E0D0'
},
{
  id: 5,
  titleAr: 'سرية تامة',
  titleEn: 'Total confidentiality',
  titleFr: 'Confidentialité totale',
  value: 100,
  icon: 'Lock',
  color: '#800020'
},
{
  id: 6,
  titleAr: 'التزام بالنتيجة',
  titleEn: 'Commitment to results',
  titleFr: 'Engagement sur le résultat',
  value: 94,
  icon: 'Award',
  color: '#C5A028'
}];


export const clientTypes = [
{
  id: 1,
  titleAr: 'الشركات الكبرى',
  titleEn: 'Large corporations',
  titleFr: 'Grandes entreprises',
  descriptionAr:
  'حلول تمويلية متكاملة للشركات الكبرى والمؤسسات ذات الاحتياجات المعقدة.',
  descriptionEn:
  'Integrated financing solutions for large corporations and institutions with complex needs.',
  descriptionFr:
  'Solutions de financement intégrées pour les grandes entreprises et les institutions aux besoins complexes.',
  icon: 'Building2',
  color: '#13294B'
},
{
  id: 2,
  titleAr: 'أصحاب المصانع',
  titleEn: 'Factory owners',
  titleFr: 'Propriétaires d’usines',
  descriptionAr: 'تمويل صناعي متخصص لتوسيع الطاقة الإنتاجية وتحديث المعدات.',
  descriptionEn:
  'Specialized industrial financing to expand production capacity and upgrade equipment.',
  descriptionFr:
  'Financement industriel spécialisé pour accroître la capacité de production et moderniser les équipements.',
  icon: 'Factory',
  color: '#4682B4'
},
{
  id: 3,
  titleAr: 'تجار التجزئة',
  titleEn: 'Retail traders',
  titleFr: 'Commerçants de détail',
  descriptionAr:
  'حلول تمويلية مرنة لتجار التجزئة لتوسيع أعمالهم وزيادة مخزونهم.',
  descriptionEn:
  'Flexible financing solutions for retailers to expand their business and increase inventory.',
  descriptionFr:
  'Solutions de financement flexibles pour aider les commerçants de détail à développer leur activité et à augmenter leurs stocks.',
  icon: 'Store',
  color: '#FF6B6B'
},
{
  id: 4,
  titleAr: 'المطورون العقاريون',
  titleEn: 'Real estate developers',
  titleFr: 'Promoteurs immobiliers',
  descriptionAr:
  'تمويل مشاريع عقارية من التخطيط إلى التسليم مع هيكلة مالية متقدمة.',
  descriptionEn:
  'Financing for real estate projects from planning to delivery, with advanced financial structuring.',
  descriptionFr:
  'Financement de projets immobiliers de la planification à la livraison, avec une structuration financière avancée.',
  icon: 'Building',
  color: '#B87333'
},
{
  id: 5,
  titleAr: 'رواد التقنية',
  titleEn: 'Technology pioneers',
  titleFr: 'Pionniers de la technologie',
  descriptionAr:
  'تمويل مبتكر للشركات التقنية والناشئة مع فهم عميق لنماذج الأعمال الرقمية.',
  descriptionEn:
  'Innovative financing for technology and start‑up companies with a deep understanding of digital business models.',
  descriptionFr:
  'Financement innovant pour les entreprises technologiques et les start‑ups, avec une compréhension approfondie des modèles économiques numériques.',
  icon: 'Cpu',
  color: '#9966CC'
},
{
  id: 6,
  titleAr: 'المشاريع الناشئة',
  titleEn: 'Start‑up projects',
  titleFr: 'Projets en phase de démarrage',
  descriptionAr: 'دعم تمويلي للمشاريع الناشئة مع إرشاد مالي واستراتيجي شامل.',
  descriptionEn:
  'Financing support for start‑up projects with comprehensive financial and strategic guidance.',
  descriptionFr:
  'Soutien financier pour les projets en phase de démarrage avec un accompagnement financier et stratégique complet.',
  icon: 'Rocket',
  color: '#00A36C'
},
{
  id: 7,
  titleAr: 'المستثمرون',
  titleEn: 'Investors',
  titleFr: 'Investisseurs',
  descriptionAr:
  'حلول تمويلية استثمارية متنوعة لتعظيم العوائد وتنويع المحافظ.',
  descriptionEn:
  'A wide range of investment financing solutions to maximize returns and diversify portfolios.',
  descriptionFr:
  'Une large gamme de solutions de financement d’investissement pour maximiser les rendements et diversifier les portefeuilles.',
  icon: 'TrendingUp',
  color: '#D4AF37'
},
{
  id: 8,
  titleAr: 'رواد الأعمال الجدد',
  titleEn: 'New entrepreneurs',
  titleFr: 'Nouveaux entrepreneurs',
  descriptionAr:
  'برامج تمويلية خاصة لرواد الأعمال الجدد مع دعم ومتابعة مستمرة.',
  descriptionEn:
  'Special financing programs for new entrepreneurs with continuous support and follow‑up.',
  descriptionFr:
  'Programmes de financement dédiés aux nouveaux entrepreneurs avec un accompagnement et un suivi continus.',
  icon: 'Sparkles',
  color: '#DC143C'
}];