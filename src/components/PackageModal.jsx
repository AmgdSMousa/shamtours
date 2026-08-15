import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Check, Star, MessageCircle, ChevronDown, ChevronUp, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export default function PackageModal({ packageData, onClose, onOpenWhatsApp }) {
  const [activeDay, setActiveDay] = useState(0);

  if (!packageData) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        
        {/* Backdrop overlay click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Animated Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative bg-slate-900 border border-amber-500/40 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl my-8 z-10"
        >
          
          {/* Header Image Banner */}
          <div className="relative h-64 sm:h-72">
            <img src={packageData.image} alt={packageData.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            
            <button
              onClick={onClose}
              className="absolute top-4 left-4 bg-slate-950/80 hover:bg-amber-500 hover:text-slate-950 text-white p-2.5 rounded-full transition-colors backdrop-blur-md cursor-pointer"
              aria-label="إغلاق النافذة"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 right-6 left-6 flex flex-wrap items-end justify-between gap-2">
              <div>
                <span className="bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full inline-block mb-2 shadow-md">
                  {packageData.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">{packageData.title}</h2>
                <div className="flex items-center gap-4 text-xs text-slate-300 mt-1">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-amber-400" /> {packageData.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-amber-400" /> {packageData.duration}</span>
                </div>
              </div>

              <div className="bg-slate-950/90 border border-amber-500/40 px-4 py-2 rounded-2xl text-center">
                <span className="text-[10px] text-slate-400 block">السعر للشخص</span>
                <span className="text-lg sm:text-xl font-black text-amber-400">
                  {packageData.price ? `${packageData.price.toLocaleString()} ${packageData.currency}` : "تواصل لمعرفة السعر"}
                </span>
              </div>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            
            {/* Overview */}
            <div>
              <h3 className="text-xs font-black text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>عن البرنامج السياحي:</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{packageData.description}</p>
            </div>

            {/* Features Included */}
            <div>
              <h3 className="text-xs font-black text-amber-400 uppercase tracking-wider mb-3">يشمل البرنامج الحصري:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {packageData.includes.map((inc, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={i} 
                    className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-800 text-xs text-slate-200"
                  >
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{inc}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive Day-by-Day Accordion Itinerary */}
            <div>
              <h3 className="text-xs font-black text-amber-400 uppercase tracking-wider mb-3">البرنامج اليومي التفاعلي التفصيلي:</h3>
              <div className="space-y-3">
                {packageData.itinerary?.map((it, idx) => {
                  const isExpanded = activeDay === idx;
                  return (
                    <div 
                      key={idx} 
                      className="bg-slate-800/40 border border-slate-800 rounded-2xl overflow-hidden transition-colors hover:border-amber-500/30"
                    >
                      <button
                        onClick={() => setActiveDay(isExpanded ? -1 : idx)}
                        className="w-full p-3.5 flex items-center justify-between text-right cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="bg-amber-500/20 text-amber-300 text-xs font-black px-2.5 py-1 rounded-lg flex-shrink-0">
                            {it.day}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-white">{it.title}</h4>
                        </div>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="px-4 pb-4 border-t border-slate-800/60 pt-2"
                          >
                            <p className="text-slate-300 text-xs leading-relaxed pr-2 border-r-2 border-amber-400">
                              {it.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block">هل لديك أي استفسار آخر؟</span>
              <span className="text-sm font-bold text-slate-200">تواصل أونلاين مباشر مع المستشار</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                onClose();
                onOpenWhatsApp(packageData.price ? `حجز رحلة: ${packageData.title} بسعر ${packageData.price} ${packageData.currency}` : `استفسار وحجز رحلة: ${packageData.title}`);
              }}
              className="gold-btn text-slate-950 font-black text-sm px-6 py-3 rounded-xl flex items-center gap-2 shadow-xl cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>تأكيد الحجز عبر الواتساب</span>
            </motion.button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
