import {
  HeadphonesIcon,
  BarChart3,
  Building2,
  FileText,
  Handshake,
  ClipboardCheck,
  HeartHandshake } from
'lucide-react';
export function ClientJourneySection() {
  const steps = [
  {
    title: 'جلسة فهم وتحليل احتياج',
    desc: 'نستمع لك، نقرأ مشروعك، ونحدد احتياجك المالي بدقة.',
    icon: <HeadphonesIcon className="w-5 h-5 text-gold" />
  },
  {
    title: 'تقييم الوضع المالي والتشغيلي',
    desc: 'نحلل التدفقات، الالتزامات، والقدرة على السداد.',
    icon: <BarChart3 className="w-5 h-5 text-gold" />
  },
  {
    title: 'اختيار الجهة التمويلية المناسبة',
    desc: 'نرشّح لك أفضل الخيارات حسب نشاطك وحجمك.',
    icon: <Building2 className="w-5 h-5 text-gold" />
  },
  {
    title: 'تجهيز ملف تمويلي احترافي',
    desc: 'نرتّب المستندات ونبني ملفًا قويًا يزيد فرص الموافقة.',
    icon: <FileText className="w-5 h-5 text-gold" />
  },
  {
    title: 'التفاوض على الشروط',
    desc: 'نضمن لك أفضل سعر، مدة، وضمانات.',
    icon: <Handshake className="w-5 h-5 text-gold" />
  },
  {
    title: 'المتابعة حتى الموافقة',
    desc: 'نرافقك حتى توقيع العقد واستلام التمويل.',
    icon: <ClipboardCheck className="w-5 h-5 text-gold" />
  },
  {
    title: 'دعم ما بعد التمويل',
    desc: 'نساعدك في إدارة الالتزامات وتحسين التدفقات.',
    icon: <HeartHandshake className="w-5 h-5 text-gold" />
  }];

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Background Photo & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80"
          alt="Dubai Skyline Night"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-navy/85 backdrop-blur-md"></div>
        {/* Subtle gold gradient glow at top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gold/10 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gold mb-6">
            رحلة العميل معنا
          </h2>
          <p className="text-xl text-gold font-medium mb-4">
            رحلتك التمويلية معنا ليست معاملة…
          </p>
          <p className="text-lg text-gold/70 max-w-2xl mx-auto">
            هي مسار مالي كامل نرافقك فيه خطوة بخطوة لضمان وصولك إلى هدفك بأمان
            ونجاح.
          </p>
        </div>

        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 start-1/2 w-0.5 bg-gradient-to-b from-gold/50 via-teal/50 to-transparent -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center group">

                  {/* Mobile Line */}
                  <div className="md:hidden absolute top-10 bottom-[-3rem] start-6 w-0.5 bg-gold/30"></div>

                  {/* Content Left (or full width on mobile) */}
                  <div
                    className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pe-12' : 'md:justify-start md:ps-12 md:order-3'} ps-20 md:ps-0 relative z-10`}>

                    <div className="bg-navy-light/90 backdrop-blur-lg border border-gold/10 rounded-2xl p-6 w-full hover:border-teal/50 hover:bg-gradient-to-br hover:from-teal-dark/40 hover:to-navy transition-all duration-300 shadow-xl">
                      <div className="flex items-center gap-3 mb-3">
                        {step.icon}
                        <h3 className="text-xl font-bold text-gold group-hover:text-gold-dark transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gold/60">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center Number */}
                  <div
                    className={`absolute start-0 md:start-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-gold border-4 border-navy flex items-center justify-center font-bold text-navy text-xl z-20 shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform ${isEven ? 'md:order-2' : 'md:order-2'}`}>

                    {index + 1}
                  </div>

                  {/* Empty Space for Desktop Alignment */}
                  <div
                    className={`hidden md:block w-1/2 ${isEven ? 'order-3' : 'order-1'}`}>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}