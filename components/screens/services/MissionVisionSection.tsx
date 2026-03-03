'use client';
import { useState } from 'react';
import { Target, Eye, Check, ArrowLeft } from 'lucide-react';
import { InfoModal } from './InfoModal';
export function MissionVisionSection() {
  const [isMissionModalOpen, setIsMissionModalOpen] = useState(false);
  const [isVisionModalOpen, setIsVisionModalOpen] = useState(false);
  const visionPoints = [
  'الوساطة الاحترافية',
  'الملفات القوية',
  'النتائج الثابتة',
  'الشروط التنافسية',
  'التنفيذ السريع',
  'السرية الكاملة'];

  return (
    <section className="py-24 relative overflow-hidden border-t border-gold/30">
      {/* Background Photo & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80"
          alt="Corporate building"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-warmGray/80 backdrop-blur-md"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">رسالتنا ورؤيتنا</h2>
          <div className="flex items-center justify-center">
            <div className="h-px w-12 bg-gold"></div>
            <div className="w-2 h-2 rotate-45 bg-gold mx-2"></div>
            <div className="h-px w-12 bg-gold"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Subtle gold gradient line between cards (desktop only) */}
          <div className="hidden md:block absolute top-10 bottom-10 left-1/2 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent -translate-x-1/2 z-20"></div>

          {/* Mission Card */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-10 shadow-xl border-t-4 border-gold relative overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="absolute top-0 end-0 w-40 h-40 bg-warmGray rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500"></div>

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <Target className="w-8 h-8" />
                </div>
                {/* Team Photo Inset */}
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=200&h=200"
                    alt="Team"
                    className="w-full h-full object-cover" />

                </div>
              </div>

              <h2 className="text-3xl font-bold text-navy mb-6">رسالتنا</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                أن نكون الجهة التي تمنح العميل وضوحًا ماليًا، وتقوده نحو التمويل
                المناسب عبر إدارة احترافية، تضمن له شروطًا أفضل، وقتًا أقل،
                ومخاطر أقل.
              </p>

              <div className="bg-warmGray p-6 rounded-xl border-s-4 border-navy relative mb-8">
                <span className="absolute -top-4 -start-2 text-4xl text-gold/40 font-serif">
                  «
                </span>
                <p className="font-bold text-navy mb-2 relative z-10">
                  رسالتنا ليست مجرد كلمات…
                </p>
                <p className="text-gray-600 relative z-10">
                  بل التزام تشغيلي نطبّقه في كل ملف، وفي كل خطوة، ومع كل عميل.
                </p>
                <span className="absolute -bottom-6 -end-2 text-4xl text-gold/40 font-serif">
                  »
                </span>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => setIsMissionModalOpen(true)}
                  className="inline-flex items-center gap-2 text-gold font-bold hover:text-gold-dark transition-colors group/btn">

                  اقرأ المزيد
                  <ArrowLeft className="w-4 h-4 transform group-hover/btn:-translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-navy/95 backdrop-blur-lg rounded-2xl p-10 shadow-xl border-t-4 border-teal relative overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="absolute top-0 end-0 w-40 h-40 bg-navy-light rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500"></div>

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="w-16 h-16 rounded-xl bg-teal/20 flex items-center justify-center text-teal mb-8">
                <Eye className="w-8 h-8" />
              </div>

              <h2 className="text-3xl font-bold text-gold mb-6">رؤيتنا</h2>

              <p className="text-lg text-gold/70 leading-relaxed mb-8">
                أن نصبح الكيان المالي الذي يُشار إليه عند الحديث عن:
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {visionPoints.map((point, index) =>
                <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-teal shrink-0" />
                    <span className="text-gold/80 font-medium">{point}</span>
                  </div>
                )}
              </div>

              <div className="bg-navy-light p-6 rounded-xl border-s-4 border-teal mb-8">
                <p className="text-teal font-bold mb-1">
                  نحن لا نطمح أن نكون &quot;الأكبر&quot;…
                </p>
                <p className="text-gold/80">
                  بل نطمح أن نكون الأدق، الأقوى، والأكثر ثقة.
                </p>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => setIsVisionModalOpen(true)}
                  className="inline-flex items-center gap-2 text-teal font-bold hover:text-teal-dark transition-colors group/btn">

                  اقرأ المزيد
                  <ArrowLeft className="w-4 h-4 transform group-hover/btn:-translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfoModal
        isOpen={isMissionModalOpen}
        onClose={() => setIsMissionModalOpen(false)}
        title="تفاصيل رسالتنا">

        <div className="space-y-4">
          <p>
            في كيه إي بي لوساطة التمويل، نؤمن بأن التمويل ليس مجرد أرقام وعقود،
            بل هو شريان الحياة الذي يغذي طموحات الشركات ورواد الأعمال. رسالتنا
            تتجاوز دور الوسيط التقليدي لنصبح الشريك الاستراتيجي الذي يقف بجانبك
            في كل خطوة من رحلتك المالية.
          </p>
          <p>
            نحن نعمل على تبسيط التعقيدات المالية، وتقديم استشارات مبنية على
            تحليل دقيق للسوق والفرص المتاحة. هدفنا هو ضمان حصولك على التمويل
            الذي يتناسب تماماً مع احتياجاتك وقدراتك، بشروط تضمن استدامة نموك
            وتقلل من المخاطر المحتملة.
          </p>
          <p>
            التزامنا تجاه عملائنا يتمثل في الشفافية المطلقة، السرعة في الإنجاز،
            والاحترافية في التعامل مع كافة الجهات التمويلية لضمان تحقيق أفضل
            النتائج الممكنة.
          </p>
        </div>
      </InfoModal>

      <InfoModal
        isOpen={isVisionModalOpen}
        onClose={() => setIsVisionModalOpen(false)}
        title="تفاصيل رؤيتنا">

        <div className="space-y-4">
          <p>
            رؤيتنا في كيه إي بي لوساطة التمويل هي إعادة صياغة مفهوم الوساطة
            المالية في المنطقة، لنصبح المعيار الذهبي الذي تقاس به جودة الخدمات
            المالية. نحن نسعى لبناء إرث من الثقة والمصداقية يجعلنا الخيار الأول
            والأكثر موثوقية لكل من يبحث عن حلول تمويلية ذكية ومستدامة.
          </p>
          <p>
            نطمح لأن نكون المحفز الرئيسي لنمو قطاع الأعمال، من خلال توفير جسور
            مالية متينة تربط بين طموحات عملائنا والموارد المالية اللازمة
            لتحقيقها. رؤيتنا ترتكز على الابتكار المستمر في تقديم الخدمات، وتطوير
            شبكة علاقاتنا مع المؤسسات المالية لتقديم خيارات تمويلية غير مسبوقة.
          </p>
          <p>
            نحن نرى مستقبلاً يكون فيه الحصول على التمويل المناسب عملية سلسة،
            شفافة، وداعمة للابتكار والنمو الاقتصادي الشامل.
          </p>
        </div>
      </InfoModal>
    </section>);

}