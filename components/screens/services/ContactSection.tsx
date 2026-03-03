'use client';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  FileText,
  Shield,
  Lock,
  CheckCircle } from
'lucide-react';
export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-warmGray-dark flex flex-col lg:flex-row">
          {/* Info Side with Photo Background */}
          <div className="lg:w-2/5 relative overflow-hidden text-white p-10">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80"
                alt="Dubai Marina Night"
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-navy/80 mix-blend-multiply backdrop-blur-md"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy/70"></div>
            </div>

            <div className="absolute top-0 end-0 w-64 h-64 bg-teal/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl z-0"></div>

            <div className="relative z-10 h-full flex flex-col">
              <h2 className="text-3xl font-bold mb-6 text-gold">وعدنا لك</h2>
              <p className="text-lg text-gold/80 mb-12 leading-relaxed">
                نلتزم بأن نكون الشريك الذي يفتح لك أبواب التمويل، ويعزّز قوتك
                المالية، ويمنحك حلولًا تدعم نموك وتوسعك بثبات.
              </p>

              <div className="space-y-8 mt-auto">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 backdrop-blur rounded-lg text-gold group-hover:bg-gold group-hover:text-navy transition-colors shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gold/50 mb-1">اتصل بنا</h4>
                    <p className="font-bold text-lg text-gold" dir="ltr">
                      +971 50 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 backdrop-blur rounded-lg text-gold group-hover:bg-gold group-hover:text-navy transition-colors shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gold/50 mb-1">
                      البريد الإلكتروني
                    </h4>
                    <p className="font-bold text-lg text-gold">
                      info@kepfinance.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 backdrop-blur rounded-lg text-gold group-hover:bg-gold group-hover:text-navy transition-colors shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gold/50 mb-1">العنوان</h4>
                    <p className="font-bold text-lg text-gold">
                      دبي، الإمارات العربية المتحدة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Divider */}
          <div className="h-1 lg:h-auto lg:w-1 bg-gradient-to-r lg:bg-gradient-to-b from-gold via-teal to-navy"></div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-8 lg:p-16 relative bg-warmGray/30">
            {/* Subtle pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                'radial-gradient(circle at 2px 2px, #0A1628 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}>
            </div>

            <div className="relative z-10">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-navy mb-4">
                  تواصل معنا
                </h2>
                <p className="text-gray-600 text-lg">
                  ابدأ الآن رحلتك نحو التمويل المناسب. نحن هنا لنوصلك بالجهة
                  الصحيحة… في الوقت الصحيح.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">
                      الاسم الكامل
                    </label>
                    <div className="relative">
                      <User className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        className="w-full bg-white border border-warmGray-dark rounded-lg ps-12 pe-4 py-3 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors shadow-sm"
                        placeholder="أدخل اسمك الكامل" />

                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">
                      رقم الهاتف
                    </label>
                    <div className="relative">
                      <Phone className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        className="w-full bg-white border border-warmGray-dark rounded-lg ps-12 pe-4 py-3 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors text-start shadow-sm"
                        placeholder="رقم الهاتف مع الرمز الدولي"
                        dir="ltr" />

                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">
                      البريد الإلكتروني
                    </label>
                    <div className="relative">
                      <Mail className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        className="w-full bg-white border border-warmGray-dark rounded-lg ps-12 pe-4 py-3 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors text-start shadow-sm"
                        placeholder="example@domain.com"
                        dir="ltr" />

                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">
                      نوع التمويل المطلوب
                    </label>
                    <div className="relative">
                      <FileText className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                      <select className="w-full bg-white border border-warmGray-dark rounded-lg ps-12 pe-4 py-3 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors appearance-none shadow-sm relative z-0">
                        <option value="">اختر نوع التمويل</option>
                        <option value="commercial">تمويل تجاري</option>
                        <option value="corporate">تمويل شركات</option>
                        <option value="realestate">تمويل عقاري</option>
                        <option value="sme">تمويل مشاريع صغيرة ومتوسطة</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-2">
                    الرسالة أو تفاصيل المشروع
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border border-warmGray-dark rounded-lg px-4 py-3 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors resize-none shadow-sm"
                    placeholder="اكتب تفاصيل احتياجك المالي هنا...">
                  </textarea>
                </div>

                <div className="flex flex-col items-center sm:items-start gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-gold to-amber hover:from-gold-dark hover:to-gold text-navy font-bold py-4 md:py-4 px-8 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5">

                    <span>إرسال الطلب</span>
                    <Send className="w-5 h-5 rotate-180" />
                  </button>

                  {/* Trust Badge */}
                  <div className="flex items-center gap-3 text-gray-500 text-sm mt-2">
                    <div className="flex gap-1">
                      <Shield className="w-4 h-4 text-teal" />
                      <Lock className="w-4 h-4 text-teal" />
                      <CheckCircle className="w-4 h-4 text-teal" />
                    </div>
                    <span>بياناتك آمنة ومحمية بالكامل</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>);

}