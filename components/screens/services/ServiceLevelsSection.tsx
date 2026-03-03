import {
  Star,
  Shield,
  Crown,
  Briefcase,
  Check,
  CheckCircle2 } from
'lucide-react';
export function ServiceLevelsSection() {
  const levelsRow1 = [
  {
    title: 'المستوى الأساسي',
    icon: <Check className="w-6 h-6" />,
    desc: 'تجهيز ملف + تقديمه للجهة التمويلية.',
    highlight: false,
    bullets: ['تجهيز الملف', 'تقديم للجهة التمويلية']
  },
  {
    title: 'المستوى المتقدم',
    icon: <Star className="w-6 h-6" />,
    desc: 'تحليل + تجهيز ملف + متابعة + تفاوض.',
    highlight: false,
    bullets: ['تحليل مالي', 'تجهيز ملف', 'متابعة', 'تفاوض']
  },
  {
    title: 'المستوى التنفيذي',
    icon: <Shield className="w-6 h-6" />,
    desc: 'إدارة العملية بالكامل حتى الموافقة.',
    highlight: true,
    bullets: [
    'تحليل شامل',
    'تجهيز ملف احترافي',
    'تفاوض متقدم',
    'متابعة كاملة',
    'إدارة العملية']

  }];

  const levelsRow2 = [
  {
    title: 'المستوى الاستراتيجي',
    icon: <Crown className="w-6 h-6" />,
    desc: 'بناء خطة تمويل + اختيار جهات + إدارة مفاوضات متعددة.',
    highlight: false,
    bullets: [
    'خطة تمويل متكاملة',
    'اختيار جهات متعددة',
    'إدارة مفاوضات',
    'تقارير دورية']

  },
  {
    title: 'المستوى الخاص برجال الأعمال',
    icon: <Briefcase className="w-6 h-6" />,
    desc: 'خدمة شخصية بسرية كاملة وإدارة ملفات حساسة.',
    highlight: false,
    bullets: [
    'خدمة شخصية',
    'سرية كاملة',
    'إدارة ملفات حساسة',
    'مدير حساب مخصص']

  }];

  const renderCard = (level: any, index: number) =>
  <div
    key={index}
    className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${level.highlight ? 'bg-gradient-to-b from-navy to-teal-900 text-white shadow-2xl lg:-translate-y-4 border-t-4 border-gold z-10' : 'bg-white/90 backdrop-blur border border-warmGray-dark hover:border-gold/50 hover:shadow-lg text-navy'}`}>

      {level.highlight &&
    <div className="absolute -top-4 start-1/2 -translate-x-1/2 bg-gradient-to-r from-gold to-amber text-navy text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
          <Crown className="w-3 h-3" />
          الأكثر طلباً
        </div>
    }

      <div
      className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${level.highlight ? 'bg-white/10 text-gold shadow-inner' : 'bg-warmGray text-navy shadow-sm'}`}>

        {level.icon}
      </div>

      <h3
      className={`text-2xl font-bold mb-3 ${level.highlight ? 'text-gold' : 'text-navy'}`}>

        {level.title}
      </h3>

      <p
      className={`text-sm leading-relaxed mb-6 ${level.highlight ? 'text-gold/70' : 'text-gray-600'}`}>

        {level.desc}
      </p>

      {/* Feature Bullets */}
      <ul className="space-y-3 mb-8 flex-grow">
        {level.bullets.map((bullet: string, i: number) =>
      <li key={i} className="flex items-start gap-2">
            <CheckCircle2
          className={`w-4 h-4 mt-0.5 shrink-0 ${level.highlight ? 'text-gold' : 'text-teal'}`} />

            <span
          className={`text-sm font-medium ${level.highlight ? 'text-gold/80' : 'text-navy/80'}`}>

              {bullet}
            </span>
          </li>
      )}
      </ul>

      <div
      className={`mt-auto pt-6 border-t ${level.highlight ? 'border-white/10' : 'border-warmGray-dark'}`}>

        <a
        href="#contact"
        className={`w-full text-center block py-3 rounded-lg text-sm font-bold transition-colors ${level.highlight ? 'bg-gold text-navy hover:bg-gold-dark' : 'bg-warmGray text-navy hover:bg-teal hover:text-white'}`}>

          اطلب هذا المستوى
        </a>
      </div>
    </div>;

  return (
    <section className="py-24 relative bg-white overflow-hidden">
      {/* Faint Background Photo */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
          alt="Financial Data"
          className="w-full h-full object-cover" />

      </div>

      {/* Gold shimmer line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-navy mb-6">مستويات الخدمة</h2>
          <p className="text-lg text-gray-600">
            نقدّم خدماتنا عبر مستويات تشغيل مختلفة تناسب كل عميل وحجم احتياجاته.
          </p>
        </div>

        <div className="space-y-8">
          {/* Row 1: Top 3 Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {levelsRow1.map((level, index) => renderCard(level, index))}
          </div>

          {/* Row 2: Bottom 2 Tiers Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 md:w-2/3 mx-auto">
            {levelsRow2.map((level, index) => renderCard(level, index + 3))}
          </div>
        </div>
      </div>
    </section>);

}