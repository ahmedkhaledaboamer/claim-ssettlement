import {
  Layers,
  Activity,
  Target,
  Handshake,
  CheckSquare,
  TrendingUp } from
'lucide-react';
export function OperatingSystemSection() {
  const layers = [
  {
    title: 'طبقة التحليل المالي',
    desc: 'نقرأ الأرقام، المؤشرات، والقدرة التمويلية.',
    icon: <Activity className="w-6 h-6" />,
    num: '١'
  },
  {
    title: 'طبقة التقييم التشغيلي',
    desc: 'نقيّم قوة المشروع واستدامته.',
    icon: <Layers className="w-6 h-6" />,
    num: '٢'
  },
  {
    title: 'طبقة المطابقة التمويلية',
    desc: 'نطابق احتياجك مع الجهة المناسبة.',
    icon: <Target className="w-6 h-6" />,
    num: '٣'
  },
  {
    title: 'طبقة التفاوض',
    desc: 'نضمن لك أفضل الشروط الممكنة.',
    icon: <Handshake className="w-6 h-6" />,
    num: '٤'
  },
  {
    title: 'طبقة الإغلاق والمتابعة',
    desc: 'نغلق الصفقة ونتابع التنفيذ حتى النهاية.',
    icon: <CheckSquare className="w-6 h-6" />,
    num: '٥'
  }];

  return (
    <section className="py-24 bg-warmGray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Decorative Line */}
            <div className="flex items-center justify-start mb-6">
              <div className="h-px w-8 bg-gold"></div>
              <div className="w-2 h-2 rotate-45 bg-gold mx-1"></div>
              <div className="h-px w-8 bg-gold"></div>
            </div>

            <h2 className="text-4xl font-bold text-navy mb-6">
              نظام التشغيل المالي
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              نظامنا مبني على طبقات تشغيلية دقيقة تعمل معًا لتقديم أفضل نتيجة.
              كل طبقة تسلم للأخرى بانسجام تام لضمان نجاح الملف التمويلي.
            </p>

            <div className="space-y-4 relative">
              {/* Connecting vertical line */}
              <div className="absolute top-6 bottom-6 start-6 w-0.5 bg-gradient-to-b from-gold/50 via-teal/50 to-gold/50 z-0"></div>

              {layers.map((layer, index) =>
              <div
                key={index}
                className="relative flex items-start gap-4 p-5 rounded-xl bg-white border border-warmGray-dark shadow-sm hover:shadow-md hover:bg-teal/5 hover:border-teal/30 transition-all duration-300 group z-10 ms-4">

                  {/* Number Indicator */}
                  <div className="absolute top-1/2 -translate-y-1/2 -start-8 w-8 h-8 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-sm shadow-[0_0_10px_rgba(212,175,55,0.4)] z-20">
                    {layer.num}
                  </div>

                  <div className="w-12 h-12 rounded-lg bg-navy/5 group-hover:bg-teal/10 flex items-center justify-center text-navy group-hover:text-teal shrink-0 transition-colors">
                    {layer.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-teal-dark transition-colors">
                      {layer.title}
                    </h3>
                    <p className="text-gray-600">{layer.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Real Photo Side - Desktop */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gold translate-x-4 translate-y-4 rounded-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Modern Office Interior"
                className="w-full h-[600px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute bottom-8 start-8 bg-white/95 backdrop-blur p-6 rounded-xl shadow-xl border border-gold/30 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">
                    طبقات متكاملة
                  </div>
                  <div className="text-sm text-gray-500">
                    لضمان نجاح التمويل
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Photo */}
          <div className="lg:hidden mt-8 relative">
            <div className="absolute inset-0 bg-gold translate-x-2 translate-y-2 rounded-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white h-64">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Modern Office Interior"
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
              <div className="absolute bottom-4 start-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal/20 backdrop-blur-sm flex items-center justify-center text-teal">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-white font-bold">طبقات متكاملة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}