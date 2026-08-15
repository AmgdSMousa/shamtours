import React, { useState } from 'react';
import { umrahAugustSeptSchedule } from '../data/travelData';
import { Calendar, Plane, Hotel, Check, Sparkles, MessageCircle, ArrowLeft, Tag, ShieldCheck, AlertCircle } from 'lucide-react';

export default function UmrahScheduleSection({ onOpenWhatsApp }) {
  const [selectedTrip, setSelectedTrip] = useState(null);

  return (
    <section id="umrah-schedule" className="py-24 bg-slate-950 relative overflow-hidden border-t border-b border-amber-500/30">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-amber-300">
              طيران مؤكد بمواعيد ثابتة ✈️
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            جدول رحلات العمرة <span className="brand-gradient-text">أغسطس & سبتمبر</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            احجز رحلتك الإيمانية مع شام تورز بأفضل الأسعار وأرقى الفنادق القريبة من الحرم الشريف.
          </p>

          <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-2xl max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-amber-300 font-medium">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>⚠️ تضاف تكلفة الإعاشة في حالة تطبيقها على الرحلات</span>
          </div>
        </div>

        {/* Umrah Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {umrahAugustSeptSchedule.map((trip) => (
            <div 
              key={trip.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between space-y-6 group backdrop-blur-xl relative overflow-hidden"
            >
              {/* Badge */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <span className="text-xs font-black bg-amber-500 text-slate-950 px-3 py-1 rounded-full shadow-md">
                  {trip.badge}
                </span>

                <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                  {trip.duration}
                </span>
              </div>

              {/* Title & Dates */}
              <div className="space-y-2">
                <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                  {trip.title}
                </h3>
                
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{trip.dateRange}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <Plane className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{trip.airline} ({trip.route})</span>
                </div>
              </div>

              {/* Hotel Accommodations Box */}
              <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                  <Hotel className="w-4 h-4" />
                  <span>الإقامة والفنادق:</span>
                </h4>
                
                <div className="space-y-1.5 text-xs text-slate-200">
                  <p className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{trip.medinaHotel}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-white">{trip.makkahHotel}</span>
                  </p>
                </div>
              </div>

              {/* Price & Booking Button */}
              <div className="border-t border-slate-800 pt-4 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-slate-400 block">السعر يبدأ من</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-amber-400">{trip.price.toLocaleString()}</span>
                    <span className="text-xs font-bold text-slate-300">{trip.currency}</span>
                  </div>
                  {trip.originalPrice > trip.price && (
                    <span className="text-xs text-slate-400 font-semibold line-through block opacity-85">
                      {trip.originalPrice.toLocaleString()} جنيه
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onOpenWhatsApp(`حجز ${trip.title} - ${trip.dateRange} بسعر ${trip.price} جنيه`)}
                  className="gold-btn text-slate-950 font-black text-xs px-4 py-3 rounded-xl flex items-center gap-1.5 shadow-xl cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>احجز الآن</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
