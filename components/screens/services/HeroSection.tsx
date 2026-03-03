import React from 'react';
import {
  ArrowLeft,
  Users,
  Briefcase,
  Building,
  CheckCircle } from
'lucide-react';
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Business skyscrapers"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-l from-navy/95 via-navy/90 to-navy/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-navy/60 backdrop-blur-md"></div>
      </div>

      {/* Decorative Gold Diagonal Line */}
      <div className="absolute top-0 end-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -end-[10%] w-[150%] h-32 bg-gradient-to-r from-transparent via-gold/10 to-transparent -rotate-45 transform origin-top-right"></div>
        <div className="absolute top-[40%] -end-[20%] w-[150%] h-16 bg-gradient-to-r from-transparent via-gold/5 to-transparent -rotate-45 transform origin-top-right"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-sm font-medium">شريكك المالي الموثوق</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold leading-tight mb-6 text-balance drop-shadow-lg">
            نربطك بالتمويل المناسب… <br className="hidden md:block" />
            <span className="text-gold">
              ونصنع لك طريقًا ماليًا آمنًا للنمو
            </span>
          </h1>

          <p className="text-base md:text-xl text-gold/70 mb-10 leading-relaxed max-w-2xl font-ibm">
            في بيئة مالية تتغير فيها الشروط بسرعة، وتزداد فيها متطلبات التوسع،
            تحتاج الشركات ورجال الأعمال إلى جهة تفهم احتياجاتهم المالية بعمق،
            وتعرف كيف تختار لهم الجهة التمويلية المناسبة، وتضمن لهم أفضل الشروط
            وأسرع الموافقات… بدون تعقيد، وبدون تأخير، وبدون مخاطرة غير محسوبة.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(212,175,55,0.4)]">

              ابدأ رحلتك التمويلية
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-gold/30 hover:border-gold text-gold/90 hover:text-gold font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">

              تعرّف علينا
            </a>
          </div>

          {/* Mobile Stats (Hidden on md and up) */}
          <div className="grid grid-cols-2 gap-4 mt-8 md:hidden">
            <div className="bg-navy-light/60 backdrop-blur-md border border-gold/10 rounded-xl p-4 flex flex-col items-center text-center">
              <Users className="w-6 h-6 text-gold mb-2" />
              <div className="text-xl font-bold text-gold">+500</div>
              <div className="text-xs text-gold/60">عميل راضٍ</div>
            </div>
            <div className="bg-navy-light/60 backdrop-blur-md border border-gold/10 rounded-xl p-4 flex flex-col items-center text-center">
              <Briefcase className="w-6 h-6 text-gold mb-2" />
              <div className="text-xl font-bold text-gold">+2 مليار</div>
              <div className="text-xs text-gold/60">درهم تمويلات</div>
            </div>
            <div className="bg-navy-light/60 backdrop-blur-md border border-gold/10 rounded-xl p-4 flex flex-col items-center text-center">
              <Building className="w-6 h-6 text-gold mb-2" />
              <div className="text-xl font-bold text-gold">+50</div>
              <div className="text-xs text-gold/60">جهة تمويلية</div>
            </div>
            <div className="bg-navy-light/60 backdrop-blur-md border border-gold/10 rounded-xl p-4 flex flex-col items-center text-center">
              <CheckCircle className="w-6 h-6 text-gold mb-2" />
              <div className="text-xl font-bold text-gold">98%</div>
              <div className="text-xs text-gold/60">نسبة الموافقة</div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy-light/90 backdrop-blur-md border-t border-gold/10 z-20 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 divide-x divide-x-reverse divide-gold/10 py-6">
            <div className="flex items-center gap-4 px-6 group">
              <div className="p-3 rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gold">+500</div>
                <div className="text-sm text-gold/60">عميل راضٍ</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 group">
              <div className="p-3 rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gold">+2 مليار</div>
                <div className="text-sm text-gold/60">درهم تمويلات</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 group">
              <div className="p-3 rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gold">+50</div>
                <div className="text-sm text-gold/60">جهة تمويلية</div>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 group">
              <div className="p-3 rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gold">98%</div>
                <div className="text-sm text-gold/60">نسبة الموافقة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}