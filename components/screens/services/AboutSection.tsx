import {
  LineChart,
  ClipboardCheck,
  Building2,
  FileText,
  Handshake,
  CheckCircle2 } from
'lucide-react';
export function AboutSection() {
  const points = [
  {
    icon: <LineChart className="w-6 h-6" />,
    text: 'تحليل احتياجاتك المالية',
    num: '١'
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    text: 'تقييم وضعك التشغيلي',
    num: '٢'
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    text: 'اختيار الجهة التمويلية الأنسب',
    num: '٣'
  },
  {
    icon: <FileText className="w-6 h-6" />,
    text: 'تجهيز ملف تمويلي قوي',
    num: '٤'
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    text: 'التفاوض على أفضل الشروط',
    num: '٥'
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    text: 'متابعة الطلب حتى الموافقة النهائية',
    num: '٦'
  }];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            {/* Decorative Line */}
            <div className="flex items-center justify-start mb-6">
              <div className="h-px w-8 bg-gold"></div>
              <div className="w-2 h-2 rotate-45 bg-gold mx-1"></div>
              <div className="h-px w-8 bg-gold"></div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-gold font-bold tracking-wider text-lg">
                من نحن؟
              </h2>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              ذراعك المالية التنفيذية للنمو والتوسع
            </h3>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نحن شركة متخصصة في وساطة التمويل وتوفير حلول مالية متقدمة للشركات،
              رواد الأعمال، والمشاريع الاستثمارية. نعمل كذراع مالية تنفيذية،
              نحلل، نرتّب، نفاوض، ونغلق لك التمويل الذي يناسب حجمك وطموحك،
              لنمنحك قدرة أعلى على التوسع، وسيولة أقوى للتشغيل، واستقرارًا
              ماليًا يدعم قراراتك.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-navy mb-6">
                نساعدك على الوصول إلى التمويل المناسب عبر:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {points.map((point, index) =>
                <div
                  key={index}
                  className="relative flex items-start gap-3 p-4 rounded-lg bg-warmGray border border-warmGray-dark hover:border-gold/50 hover:shadow-md transition-all duration-300 group">

                    {/* Step Number */}
                    <div className="absolute top-2 start-2 w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold group-hover:bg-gold group-hover:text-navy transition-colors">
                      {point.num}
                    </div>

                    <div className="text-gold mt-1 shrink-0 group-hover:scale-110 transition-transform">
                      {point.icon}
                    </div>
                    <span className="font-medium text-navy mt-1">
                      {point.text}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-navy p-6 rounded-xl border-s-4 border-gold relative overflow-hidden shadow-lg">
              <div className="absolute top-0 end-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <p className="text-xl font-cairo text-white leading-relaxed relative z-10">
                &quot;نحن لا نبحث عن <span className="text-gold">تمويل فقط</span>…
                نبحث عن تمويل صحيح يخدم هدفك ويعزز نموك ويقلل مخاطرك.&quot;
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gold translate-x-4 translate-y-4 rounded-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80"
                alt="Business meeting"
                className="w-full h-[600px] object-cover" />

              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply"></div>
            </div>

            {/* Floating Badge - Fixed position */}
            <div className="absolute bottom-4 start-4 bg-white/95 backdrop-blur p-6 rounded-xl shadow-xl border border-warmGray-dark max-w-xs hidden md:block z-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">خبرة</div>
                  <div className="text-sm text-gray-500">في السوق المالي</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}