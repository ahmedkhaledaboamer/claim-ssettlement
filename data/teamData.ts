export interface TeamMember {
  id: number;
  titleAr: string;
  departmentId: string;
  departmentAr: string;
  tier: 'ceo' | 'director' | 'manager';
  responsibilities: string[];
  description: string;
  imageKeyword: string;
  icon: string;
}

export const teamMembers: TeamMember[] = [
{
  id: 1,
  titleAr: 'الرئيس التنفيذي للتمويل',
  departmentId: 'executive',
  departmentAr: 'القيادة التنفيذية',
  tier: 'ceo',
  responsibilities: [
  'قيادة الرؤية الاستراتيجية للتمويل',
  'الإشراف على جميع العمليات التمويلية',
  'بناء العلاقات مع كبار المستثمرين',
  'اتخاذ القرارات التنفيذية النهائية',
  'تطوير استراتيجيات النمو المستدام',
  'ضمان الامتثال للمعايير التنظيمية'],

  description:
  'القائد الأعلى للجهاز الإداري، يوجه الرؤية الاستراتيجية ويشرف على كافة العمليات التمويلية لضمان تحقيق أعلى معايير الأداء والتميز.',
  imageKeyword: 'executive CEO office',
  icon: 'Crown'
},
{
  id: 2,
  titleAr: 'مدير إدارة وساطة التمويل',
  departmentId: 'executive',
  departmentAr: 'القيادة التنفيذية',
  tier: 'director',
  responsibilities: [
  'إدارة عمليات الوساطة التمويلية',
  'تنسيق العلاقات بين العملاء وجهات التمويل',
  'مراقبة جودة الخدمات المقدمة',
  'تطوير آليات العمل والإجراءات',
  'إعداد التقارير الدورية للإدارة العليا'],

  description:
  'المسؤول عن إدارة وتنسيق جميع عمليات الوساطة التمويلية، وضمان سير العمل بكفاءة وفعالية عالية.',
  imageKeyword: 'business director office',
  icon: 'Briefcase'
},
{
  id: 3,
  titleAr: 'مدير التحليل المالي',
  departmentId: 'analysis',
  departmentAr: 'التحليل المالي',
  tier: 'director',
  responsibilities: [
  'تحليل البيانات المالية للعملاء',
  'إعداد النماذج المالية والتوقعات',
  'تقييم الجدوى الاقتصادية للمشاريع',
  'تقديم التوصيات المالية المبنية على البيانات',
  'مراجعة القوائم المالية والتقارير'],

  description:
  'خبير التحليل المالي الذي يحول البيانات إلى رؤى استراتيجية تدعم قرارات التمويل الصائبة.',
  imageKeyword: 'financial analyst data',
  icon: 'TrendingUp'
},
{
  id: 4,
  titleAr: 'مدير تقييم المخاطر',
  departmentId: 'risk',
  departmentAr: 'إدارة المخاطر',
  tier: 'director',
  responsibilities: [
  'تقييم المخاطر المالية والتشغيلية',
  'تطوير استراتيجيات التخفيف من المخاطر',
  'مراقبة مؤشرات المخاطر الرئيسية',
  'إعداد تقارير المخاطر الدورية',
  'ضمان الامتثال لمعايير إدارة المخاطر'],

  description:
  'حارس الاستقرار المالي، يحدد المخاطر المحتملة ويطور استراتيجيات فعالة للتخفيف منها.',
  imageKeyword: 'risk assessment professional',
  icon: 'Shield'
},
{
  id: 5,
  titleAr: 'مدير العلاقات مع جهات التمويل',
  departmentId: 'relations',
  departmentAr: 'العلاقات مع جهات التمويل',
  tier: 'director',
  responsibilities: [
  'بناء وتعزيز العلاقات مع البنوك والمؤسسات المالية',
  'التفاوض على شروط التمويل المفضلة',
  'متابعة التطورات في سوق التمويل',
  'تنسيق تقديم الملفات لجهات التمويل',
  'إدارة شبكة الشركاء الماليين'],

  description:
  'الجسر الذي يربط بين العملاء وجهات التمويل، يبني علاقات استراتيجية تضمن أفضل الشروط.',
  imageKeyword: 'business relations networking',
  icon: 'Handshake'
},
{
  id: 6,
  titleAr: 'مدير تطوير الأعمال التمويلية',
  departmentId: 'business',
  departmentAr: 'تطوير الأعمال',
  tier: 'director',
  responsibilities: [
  'استكشاف فرص الأعمال الجديدة',
  'تطوير المنتجات والخدمات التمويلية',
  'بناء استراتيجيات النمو',
  'تحليل اتجاهات السوق والمنافسة',
  'إدارة مشاريع التطوير الاستراتيجي'],

  description:
  'محرك النمو والابتكار، يستكشف الفرص الجديدة ويطور حلولاً تمويلية مبتكرة تلبي احتياجات السوق.',
  imageKeyword: 'business development presentation',
  icon: 'Rocket'
},
{
  id: 7,
  titleAr: 'مدير التفاوض والإغلاق',
  departmentId: 'negotiation',
  departmentAr: 'التفاوض والإغلاق',
  tier: 'director',
  responsibilities: [
  'قيادة مفاوضات التمويل مع الجهات المختلفة',
  'ضمان الحصول على أفضل الشروط للعملاء',
  'إدارة عملية الإغلاق المالي',
  'مراجعة العقود والاتفاقيات',
  'حل النزاعات والخلافات التعاقدية'],

  description:
  'المفاوض الخبير الذي يضمن حصول العملاء على أفضل الشروط التمويلية الممكنة.',
  imageKeyword: 'negotiation handshake deal',
  icon: 'Scale'
},
{
  id: 8,
  titleAr: 'مدير إدارة الملفات التمويلية',
  departmentId: 'files',
  departmentAr: 'إدارة الملفات',
  tier: 'manager',
  responsibilities: [
  'تنظيم وإدارة الملفات التمويلية',
  'ضمان اكتمال المستندات المطلوبة',
  'متابعة حالة الملفات مع جهات التمويل',
  'أرشفة وحفظ السجلات بشكل آمن',
  'تطوير أنظمة إدارة المستندات'],

  description:
  'المنظم الدقيق الذي يضمن اكتمال وسلامة كل ملف تمويلي من البداية حتى النهاية.',
  imageKeyword: 'document management organized',
  icon: 'FolderOpen'
},
{
  id: 9,
  titleAr: 'مدير العمليات التمويلية',
  departmentId: 'operations',
  departmentAr: 'العمليات',
  tier: 'manager',
  responsibilities: [
  'الإشراف على سير العمليات اليومية',
  'تحسين كفاءة العمليات التشغيلية',
  'إدارة الموارد والجداول الزمنية',
  'تطوير مؤشرات الأداء الرئيسية',
  'ضمان جودة المخرجات التشغيلية'],

  description:
  'قائد العمليات الذي يضمن سير العمل بسلاسة وكفاءة عبر جميع الأقسام.',
  imageKeyword: 'operations management screens',
  icon: 'Settings'
},
{
  id: 10,
  titleAr: 'مدير الامتثال والحوكمة',
  departmentId: 'compliance',
  departmentAr: 'الامتثال والحوكمة',
  tier: 'manager',
  responsibilities: [
  'ضمان الامتثال للأنظمة واللوائح المالية',
  'تطوير سياسات الحوكمة الداخلية',
  'إجراء المراجعات الدورية للامتثال',
  'التواصل مع الجهات التنظيمية',
  'تدريب الفريق على متطلبات الامتثال'],

  description:
  'حارس النزاهة والشفافية، يضمن التزام جميع العمليات بأعلى معايير الحوكمة والامتثال.',
  imageKeyword: 'compliance governance professional',
  icon: 'CheckCircle'
},
{
  id: 11,
  titleAr: 'مدير خدمة العملاء التمويلية',
  departmentId: 'client',
  departmentAr: 'خدمة العملاء',
  tier: 'manager',
  responsibilities: [
  'إدارة تجربة العملاء من البداية للنهاية',
  'الاستجابة لاستفسارات وشكاوى العملاء',
  'تطوير برامج رضا العملاء',
  'بناء علاقات طويلة الأمد مع العملاء',
  'تحليل ملاحظات العملاء لتحسين الخدمة'],

  description:
  'صوت العميل داخل المؤسسة، يضمن تجربة استثنائية في كل مرحلة من مراحل التمويل.',
  imageKeyword: 'customer service professional',
  icon: 'Heart'
},
{
  id: 12,
  titleAr: 'مدير التمويل الاستثماري',
  departmentId: 'investment',
  departmentAr: 'التمويل الاستثماري',
  tier: 'manager',
  responsibilities: [
  'إدارة محفظة التمويل الاستثماري',
  'تقييم الفرص الاستثمارية',
  'هيكلة الصفقات الاستثمارية',
  'التنسيق مع المستثمرين والصناديق',
  'متابعة أداء الاستثمارات الممولة'],

  description:
  'خبير التمويل الاستثماري الذي يحول الفرص إلى صفقات ناجحة تحقق عوائد مجزية.',
  imageKeyword: 'investment finance meeting',
  icon: 'Gem'
},
{
  id: 13,
  titleAr: 'مدير التمويل التجاري والعقاري',
  departmentId: 'commercial',
  departmentAr: 'التمويل التجاري والعقاري',
  tier: 'manager',
  responsibilities: [
  'إدارة ملفات التمويل التجاري والعقاري',
  'تقييم المشاريع العقارية والتجارية',
  'التنسيق مع المطورين والمستثمرين العقاريين',
  'هيكلة حلول التمويل العقاري',
  'متابعة اتجاهات السوق العقاري'],

  description:
  'المتخصص في التمويل التجاري والعقاري، يقدم حلولاً مصممة خصيصاً لكل مشروع.',
  imageKeyword: 'real estate commercial finance',
  icon: 'Building'
},
{
  id: 14,
  titleAr: 'مدير تمويل الشركات والمشاريع',
  departmentId: 'corporate',
  departmentAr: 'تمويل الشركات والمشاريع',
  tier: 'manager',
  responsibilities: [
  'إدارة تمويل الشركات الكبرى والمشاريع',
  'هيكلة الصفقات المعقدة',
  'التنسيق مع مجالس الإدارة والمساهمين',
  'تقييم الجدوى المالية للمشاريع الكبرى',
  'إدارة المخاطر المرتبطة بتمويل الشركات'],

  description:
  'قائد تمويل الشركات الذي يتعامل مع أكبر الصفقات وأكثرها تعقيداً بخبرة واحترافية.',
  imageKeyword: 'corporate boardroom leadership',
  icon: 'Building2'
},
{
  id: 15,
  titleAr: 'مدير دعم ما بعد التمويل',
  departmentId: 'post',
  departmentAr: 'دعم ما بعد التمويل',
  tier: 'manager',
  responsibilities: [
  'متابعة العملاء بعد إتمام التمويل',
  'ضمان رضا العملاء عن الخدمة المقدمة',
  'تقديم الدعم والاستشارات المستمرة',
  'إدارة عمليات إعادة التمويل',
  'بناء برامج الولاء والاحتفاظ بالعملاء'],

  description:
  'الشريك الدائم الذي يرافق العميل بعد التمويل، يضمن استمرار النجاح والاستقرار المالي.',
  imageKeyword: 'support advisor meeting',
  icon: 'LifeBuoy'
}];


export const tierOrder = {
  ceo: 0,
  director: 1,
  manager: 2
};