export interface FAQItem {
  id: number;
  questionAr: string;
  questionEn: string;
  questionFr: string;
  answerAr: string;
  answerEn: string;
  answerFr: string;
  category: string;
  categoryEn: string;
  categoryFr: string;
}

export const faqItems: FAQItem[] = [
{
  id: 1,
  questionAr: 'ما هي الخدمات التي يقدمها الجهاز الإداري لشركة KIB؟',
  answerAr:
  'يقدم الجهاز الإداري خدمات شاملة تشمل التحليل المالي، تقييم المخاطر، تجهيز الملفات التمويلية، التفاوض مع جهات التمويل، الإغلاق المالي، ودعم ما بعد التمويل. فريقنا المكون من ١٥ منصباً تنفيذياً يعمل بتنسيق كامل لضمان أفضل النتائج.',
  questionEn: 'What services does the KIB administrative department provide?',
  answerEn:
  'The administrative department provides comprehensive services including financial analysis, risk assessment, preparation of financing files, negotiation with funding institutions, financial closing, and post‑financing support. Our team of 15 executive positions works in full coordination to ensure the best results.',
  questionFr: 'Quels sont les services fournis par le département administratif de KIB ?',
  answerFr:
  'Le département administratif fournit des services complets incluant l’analyse financière, l’évaluation des risques, la préparation des dossiers de financement, la négociation avec les institutions financières, la clôture financière et l’accompagnement post‑financement. Notre équipe composée de 15 postes exécutifs travaille en parfaite coordination pour garantir les meilleurs résultats.',
  category: 'عام',
  categoryEn: 'General',
  categoryFr: 'Général'
},
{
  id: 2,
  questionAr: 'كم يستغرق الحصول على التمويل من البداية للنهاية؟',
  answerAr:
  'تختلف المدة حسب نوع التمويل وتعقيد الملف. بشكل عام، تتراوح المدة من ٣ إلى ٦ أسابيع للملفات القياسية، وقد تمتد إلى ٨-١٢ أسبوعاً للمشاريع الكبرى والمعقدة. نحرص على إبقائك على اطلاع بكل مرحلة.',
  questionEn: 'How long does it take to obtain financing from start to finish?',
  answerEn:
  'The duration varies depending on the type of financing and the complexity of the file. In general, it ranges from 3 to 6 weeks for standard files and may extend to 8–12 weeks for large and complex projects. We make sure to keep you informed at every stage.',
  questionFr: 'Combien de temps faut‑il pour obtenir un financement du début à la fin ?',
  answerFr:
  'La durée varie selon le type de financement et la complexité du dossier. En général, elle se situe entre 3 et 6 semaines pour les dossiers standards et peut s’étendre à 8–12 semaines pour les projets importants et complexes. Nous veillons à vous informer à chaque étape.',
  category: 'الجدول الزمني',
  categoryEn: 'Timeline',
  categoryFr: 'Calendrier'
},
{
  id: 3,
  questionAr: 'هل معلوماتي المالية محمية وسرية؟',
  answerAr:
  'نعم، السرية التامة هي أحد أهم ركائز عملنا. نلتزم بأعلى معايير حماية البيانات والخصوصية. جميع المعلومات المالية تُعامل بسرية مطلقة ولا تُشارك إلا مع جهات التمويل المعتمدة وبموافقتك المسبقة.',
  questionEn: 'Is my financial information protected and confidential?',
  answerEn:
  'Yes, complete confidentiality is one of the main pillars of our work. We adhere to the highest standards of data protection and privacy. All financial information is treated as strictly confidential and is shared only with approved funding institutions and with your prior consent.',
  questionFr: 'Mes informations financières sont‑elles protégées et confidentielles ?',
  answerFr:
  'Oui, la confidentialité totale est l’un des piliers essentiels de notre activité. Nous respectons les normes les plus élevées en matière de protection des données et de confidentialité. Toutes les informations financières sont traitées de manière strictement confidentielle et ne sont partagées qu’avec des institutions financières agréées, avec votre accord préalable.',
  category: 'السرية',
  categoryEn: 'Confidentiality',
  categoryFr: 'Confidentialité'
},
{
  id: 4,
  questionAr: 'ما هي نسبة نجاح ملفات التمويل لديكم؟',
  answerAr:
  'نحقق نسبة نجاح تتجاوز ٩٤٪ في الملفات التي نتولاها. يعود ذلك إلى منهجيتنا الدقيقة في التحليل والتقييم قبل تقديم أي ملف، مما يضمن تقديم ملفات قوية ومكتملة لجهات التمويل.',
  questionEn: 'What is your success rate for financing files?',
  answerEn:
  'We achieve a success rate exceeding 94% on the files we handle. This is due to our rigorous analysis and evaluation methodology before submitting any file, which ensures that strong and complete files are presented to funding institutions.',
  questionFr: 'Quel est votre taux de réussite pour les dossiers de financement ?',
  answerFr:
  'Nous atteignons un taux de réussite supérieur à 94 % pour les dossiers que nous gérons. Cela est dû à notre méthodologie rigoureuse d’analyse et d’évaluation avant la soumission de tout dossier, ce qui garantit la présentation de dossiers solides et complets aux institutions financières.',
  category: 'عام',
  categoryEn: 'General',
  categoryFr: 'Général'
},
{
  id: 5,
  questionAr: 'كيف تختارون جهة التمويل المناسبة لملفي؟',
  answerAr:
  'نعتمد على نظام مطابقة متقدم يأخذ بعين الاعتبار نوع النشاط، حجم التمويل المطلوب، الشروط المفضلة، والتاريخ الائتماني. شبكة علاقاتنا الواسعة مع البنوك والمؤسسات المالية تتيح لنا اختيار الأنسب لكل حالة.',
  questionEn: 'How do you choose the right funding institution for my file?',
  answerEn:
  'We rely on an advanced matching system that takes into account the type of activity, required financing amount, preferred terms and credit history. Our wide network of relationships with banks and financial institutions allows us to choose the most suitable option for each case.',
  questionFr: 'Comment choisissez‑vous l’institution financière adaptée à mon dossier ?',
  answerFr:
  'Nous nous appuyons sur un système de mise en correspondance avancé qui prend en compte la nature de l’activité, le montant de financement requis, les conditions souhaitées et l’historique de crédit. Notre vaste réseau de relations avec les banques et institutions financières nous permet de choisir l’option la plus appropriée pour chaque cas.',
  category: 'العملية',
  categoryEn: 'Process',
  categoryFr: 'Processus'
},
{
  id: 6,
  questionAr: 'ما الفرق بين مستويات الخدمة الخمسة؟',
  answerAr:
  'تتدرج مستويات الخدمة من الأساسي (تحليل وتقديم لجهة واحدة) إلى المستوى الخاص برجال الأعمال (فريق تنفيذي حصري وخدمة ٢٤/٧). كل مستوى يقدم درجة أعمق من التحليل والتفاوض والمتابعة.',
  questionEn: 'What is the difference between the five service levels?',
  answerEn:
  'The service levels range from the basic level (analysis and submission to one institution) to the business owners level (exclusive executive team and 24/7 service). Each level offers a deeper degree of analysis, negotiation and follow‑up.',
  questionFr: 'Quelle est la différence entre les cinq niveaux de service ?',
  answerFr:
  'Les niveaux de service vont du niveau de base (analyse et dépôt auprès d’une institution) au niveau dirigeants et entrepreneurs (équipe exécutive exclusive et service 24h/24 et 7j/7). Chaque niveau offre un degré plus poussé d’analyse, de négociation et de suivi.',
  category: 'الخدمات',
  categoryEn: 'Services',
  categoryFr: 'Services'
},
{
  id: 7,
  questionAr: 'هل يمكنني التواصل مباشرة مع الفريق المسؤول عن ملفي؟',
  answerAr:
  'بالتأكيد. نؤمن بالشفافية الكاملة. يتم تعيين مدير ملف مخصص لكل عميل يكون نقطة الاتصال الرئيسية. في المستويات العليا، يمكنك التواصل مباشرة مع المديرين التنفيذيين.',
  questionEn: 'Can I communicate directly with the team handling my file?',
  answerEn:
  'Absolutely. We believe in full transparency. A dedicated file manager is assigned to each client as the main point of contact. At higher service levels, you can communicate directly with executive managers.',
  questionFr: 'Puis‑je communiquer directement avec l’équipe en charge de mon dossier ?',
  answerFr:
  'Absolument. Nous croyons en une transparence totale. Un responsable de dossier dédié est affecté à chaque client comme point de contact principal. Aux niveaux de service supérieurs, vous pouvez communiquer directement avec les dirigeants.',
  category: 'التواصل',
  categoryEn: 'Communication',
  categoryFr: 'Communication'
},
{
  id: 8,
  questionAr: 'ماذا يحدث بعد الحصول على التمويل؟',
  answerAr:
  'لا تنتهي علاقتنا بإتمام التمويل. فريق دعم ما بعد التمويل يتابع معك لضمان الالتزام بالشروط، ويقدم استشارات مالية مستمرة، ويساعدك في إعادة التمويل أو الحصول على تمويل إضافي عند الحاجة.',
  questionEn: 'What happens after I obtain the financing?',
  answerEn:
  'Our relationship does not end once the financing is completed. The post‑financing support team follows up with you to ensure compliance with the terms, provides ongoing financial advice and helps you with refinancing or obtaining additional financing when needed.',
  questionFr: 'Que se passe‑t‑il après l’obtention du financement ?',
  answerFr:
  'Notre relation ne s’arrête pas une fois le financement obtenu. L’équipe d’accompagnement post‑financement reste à vos côtés pour veiller au respect des conditions, fournir des conseils financiers continus et vous aider à refinancer ou à obtenir un financement supplémentaire si nécessaire.',
  category: 'ما بعد التمويل',
  categoryEn: 'Post‑financing',
  categoryFr: 'Post‑financement'
},
{
  id: 9,
  questionAr: 'ما هي المستندات المطلوبة لبدء عملية التمويل؟',
  answerAr:
  'تختلف المستندات حسب نوع التمويل، لكن بشكل عام نحتاج: القوائم المالية لآخر ٣ سنوات، السجل التجاري، كشوف الحسابات البنكية، خطة العمل، وأي مستندات إضافية حسب طبيعة النشاط. فريقنا يرشدك لتجهيز كل ما هو مطلوب.',
  questionEn: 'What documents are required to start the financing process?',
  answerEn:
  'The required documents vary by type of financing, but in general we need: financial statements for the last 3 years, commercial registration, bank statements, business plan and any additional documents depending on the nature of the activity. Our team will guide you to prepare everything required.',
  questionFr: 'Quels documents sont nécessaires pour démarrer le processus de financement ?',
  answerFr:
  'Les documents requis varient selon le type de financement, mais en général nous avons besoin : des états financiers des 3 dernières années, de l’immatriculation commerciale, des relevés bancaires, du business plan et de tout document supplémentaire selon la nature de l’activité. Notre équipe vous guide pour préparer l’ensemble des pièces nécessaires.',
  category: 'العملية',
  categoryEn: 'Process',
  categoryFr: 'Processus'
},
{
  id: 10,
  questionAr: 'هل تتعاملون مع جميع أنواع التمويل؟',
  answerAr:
  'نعم، نغطي طيفاً واسعاً من أنواع التمويل: التمويل التجاري، العقاري، الاستثماري، تمويل الشركات والمشاريع، تمويل رأس المال العامل، وتمويل التوسع. فريقنا المتخصص في كل مجال يضمن خبرة عميقة في كل نوع.',
  questionEn: 'Do you handle all types of financing?',
  answerEn:
  'Yes, we cover a wide spectrum of financing types: commercial, real estate and investment financing, corporate and project finance, working capital and expansion financing. Our specialized teams in each field ensure deep expertise in every type.',
  questionFr: 'Intervenez‑vous sur tous les types de financement ?',
  answerFr:
  'Oui, nous couvrons un large éventail de types de financement : financement commercial, immobilier et d’investissement, financement des entreprises et des projets, financement du fonds de roulement et du développement. Nos équipes spécialisées dans chaque domaine garantissent une expertise approfondie pour chaque type.',
  category: 'الخدمات',
  categoryEn: 'Services',
  categoryFr: 'Services'
}];