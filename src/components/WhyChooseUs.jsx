import React from 'react';
import { ShieldCheck, Award, Clock, Headphones, Plane, Sparkles, Building, Globe } from 'lucide-react';
import { companyStats } from '../data/travelData';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="w-7 h-7 text-amber-400" />,
      title: "خبرة وسيرة موثوقة",
      desc: "أكثر من 12 عاماً من العطاء المستمر في تنظيم الرحلات السياحية وحجوزات الطيران واستخراج الفيز."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-amber-400" />,
      title: "نسبة قبول تأشيرة عالية جداً",
      desc: "فريق متخصص في تدقيق الملفات والسفارات لضمان أعلى نسبة نجاح للشنغن، الإمارات، وجميع الدول."
    },
    {
      icon: <Plane className="w-7 h-7 text-amber-400" />,
      title: "أسعار طيران وفنادق حصرية",
      desc: "عقود مباشرة مع الخطوط الجوية الكبرى وأفخم السلاسل الفندقية 5 نجوم تضمن لك أفضل قيمة."
    },
    {
      icon: <Headphones className="w-7 h-7 text-amber-400" />,
      title: "مرافقة ودعم طوال 24/7",
      desc: "مستشار سفر خاص معك من لحظة التخطيط وحتى عودتك بالسلامة لتوفير أقصى درجات الطمأنينة."
    }
  ];

  return (
    <section id="why-us" className="py-24 brand-bg-gradient relative overflow-hidden border-t border-b border-amber-500/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>معايير الجودة والاحترافية</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            لماذا تختار <span className="brand-gradient-text">شركة شام تورز</span> لرحلتك القادمة؟
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            نجمع بين العراقة والمصداقية لتقديم تجربة سفر لا تُنسى تبدأ من أدق التفاصيل.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl space-y-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Counter Bar */}
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-800">
            {companyStats.map((st, i) => (
              <div key={i} className="pt-4 md:pt-0">
                <span className="text-3xl sm:text-4xl font-black text-amber-400 block tracking-tight">{st.value}</span>
                <span className="text-xs text-slate-300 font-semibold mt-1 block">{st.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
