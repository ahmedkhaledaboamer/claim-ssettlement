'use client';
import { cloneElement } from 'react';
import {
  Users,
  Building2,
  Factory,
  Home,
  Lightbulb,
  ArrowRightLeft,
  Rocket,
  Briefcase } from
'lucide-react';
export function WhoWeServeSection() {
  const audiences = [
  {
    icon: <Briefcase />,
    title: 'رجال ورواد الأعمال',
    desc: 'أصحاب المشاريع الطموحة',
    image:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    icon: <Users />,
    title: 'الشركات الصغيرة والمتوسطة',
    desc: 'نمو مستدام وتمويل مرن',
    image:
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    icon: <Building2 />,
    title: 'الشركات الكبرى',
    desc: 'حلول تمويلية ضخمة',
    image:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    icon: <Factory />,
    title: 'المشاريع التجارية والصناعية',
    desc: 'تمويل القطاع الصناعي',
    image:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    icon: <Home />,
    title: 'المستثمرون العقاريون',
    desc: 'استثمار عقاري ذكي',
    image:
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    icon: <Lightbulb />,
    title: 'المشاريع التقنية والابتكارية',
    desc: 'دعم الابتكار والتقنية',
    image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    icon: <ArrowRightLeft />,
    title: 'الشركات الراغبة في توسع',
    desc: 'خطط توسع مدروسة',
    image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    icon: <Rocket />,
    title: 'المشاريع الاستثمارية الجديدة',
    desc: 'انطلاقة قوية ومؤمنة',
    image:
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=100&h=100'
  }];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80"
          alt="City Aerial View"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-navy/85 backdrop-blur-md"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gold mb-4">من نخدم؟</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal via-gold to-teal mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gold/70 max-w-2xl mx-auto">
            نقدّم حلولًا تمويلية مخصصة لكل قطاع واحتياج
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) =>
          <div
            key={index}
            className="bg-navy-light/80 backdrop-blur-md border border-gold/10 rounded-xl p-6 hover:border-teal/50 hover:bg-navy-light transition-all duration-300 group text-center flex flex-col items-center">

              {/* Photo Thumbnail with Hover Icon */}
              <div className="relative mb-4 w-20 h-20 rounded-full overflow-hidden border-2 border-gold/20 group-hover:border-teal/50 transition-colors">
                <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold group-hover:scale-110">
                  {cloneElement(
                    item.icon as React.ReactElement<{ className?: string }>,
                    {
                      className: 'w-8 h-8'
                    }
                  )}
                </div>
              </div>

              <h3 className="text-gold font-bold text-lg leading-tight mt-2 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-teal/80 font-medium">{item.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}