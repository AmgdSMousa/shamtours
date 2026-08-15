import React from 'react';
import { testimonials } from '../data/travelData';
import { Star, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            تجارب واقعية
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            ماذا يقول <span className="brand-gradient-text">عملاؤنا وسفراؤنا</span> عن شام تورز؟
          </h2>
          <p className="text-slate-400 text-sm">
            نفخر بامتلاك آلاف التقييمات الإيجابية والذكريات السعيدة التي صنعناها مع مسافرينا الكرام.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div 
              key={t.id}
              className="bg-slate-800/60 border border-slate-700/80 p-6 rounded-3xl relative flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl"
            >
              <Quote className="w-10 h-10 text-amber-500/20 absolute top-6 left-6" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-slate-700/60 mt-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-amber-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">{t.name}</h3>
                  <span className="text-[11px] text-amber-400 font-medium block">{t.trip}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
