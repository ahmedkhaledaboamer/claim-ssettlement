import { Award, MessageSquare, Scale } from 'lucide-react';
export function QualityPrinciplesSection() {
  const quality = [
  {
    text: 'دقة في تحليل الاحتياج',
    num: '١'
  },
  {
    text: 'سرعة في تجهيز الملفات',
    num: '٢'
  },
  {
    text: 'شفافية في كل خطوة',
    num: '٣'
  },
  {
    text: 'متابعة مستمرة',
    num: '٤'
  },
  {
    text: 'التزام بالنتيجة',
    num: '٥'
  },
  {
    text: 'سرية تامة في التعامل',
    num: '٦'
  }];

  const language = [
  'لغة تعتمد على الأرقام',
  'لغة تحترم وقت العميل',
  'لغة مبنية على المعلومة',
  'لغة بلا وعود مبالغ فيها',
  'لغة تعتمد على النتيجة فقط'];

  const principles = [
  {
    text: 'نلتزم قبل أن نعد',
    num: '١'
  },
  {
    text: 'نوضح قبل أن نطلب',
    num: '٢'
  },
  {
    text: 'نتابع قبل أن تُسأل',
    num: '٣'
  },
  {
    text: 'نعمل بصمت… ونُظهر النتائج فقط',
    num: '٤'
  },
  {
    text: 'نضع مصلحة العميل فوق كل شيء',
    num: '٥'
  }];

  return (
    <section className="bg-warmGray pb-24 relative">
      {/* Photo Strip Header */}
      <div className="relative h-48 w-full mb-16 overflow-hidden border-b-4 border-gold/50">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
          alt="Business Documents"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-warmGray via-navy/60 to-navy/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gold drop-shadow-lg text-shadow-gold">
            قيمنا ومبادئنا
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quality Standards */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warmGray-dark hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-teal/10 rounded-lg text-teal-dark">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy">معايير الجودة</h3>
            </div>
            <p className="text-gray-600 mb-6">
              نلتزم بمعايير تشغيل دقيقة تضمن لك أفضل تجربة:
            </p>
            <div className="space-y-3">
              {quality.map((item, i) =>
              <div
                key={i}
                className="flex items-center gap-3 bg-warmGray/50 p-3 rounded-lg">

                  <div className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {item.num}
                  </div>
                  <span className="font-medium text-navy">{item.text}</span>
                </div>
              )}
            </div>
          </div>

          {/* Corporate Language */}
          <div className="relative rounded-2xl p-8 shadow-lg text-white overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80"
                alt="Corporate Meeting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

              <div className="absolute inset-0 bg-navy/90 backdrop-blur-md"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/10 rounded-lg text-gold backdrop-blur-sm">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gold">لغة الكيان</h3>
              </div>
              <p className="text-gold/70 mb-6">
                نحن نتحدث لغة واضحة، مباشرة، بلا تعقيد:
              </p>
              <ul className="space-y-4">
                {language.map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1">✦</span>
                    <span className="text-gold/80">{item}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Principles */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warmGray-dark hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gold/10 rounded-lg text-gold">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy">مبادئ التعامل</h3>
            </div>
            <p className="text-gray-600 mb-6">مبادئنا ثابتة لا تتغير:</p>
            <div className="space-y-4">
              {principles.map((item, i) =>
              <div
                key={i}
                className="flex items-center gap-3 border-s-2 border-gold ps-4 py-1.5 bg-gradient-to-l from-transparent to-gold/5">

                  <span className="text-gold font-bold text-sm">
                    {item.num}.
                  </span>
                  <span className="font-bold text-navy">{item.text}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider"></div>
    </section>);

}