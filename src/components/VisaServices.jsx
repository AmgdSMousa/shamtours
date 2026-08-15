import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { visaServices } from '../data/travelData';
import { FileCheck, ShieldCheck, Clock, CheckCircle2, ArrowLeft, MessageCircle, AlertCircle } from 'lucide-react';

export default function VisaServices({ onOpenWhatsApp }) {
  const [selectedVisa, setSelectedVisa] = useState(visaServices[0]);

  return (
    <section id="visas" className="py-24 brand-bg-gradient relative overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            Travel • Visas • التأشيرات أونلاين
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            مركز خدمات <span className="brand-gradient-text">الفيزا والتأشيرات</span> السريعة
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            نساعدك في إعداد وتجهيز كافة المستندات والتأشيرات الرسمية أونلاين بنسبة قبول مرتفعة جداً وإجراءات مبسطة.
          </p>
        </motion.div>

        {/* Interactive Visa Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Country Selection List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">اختر الدولة المطلوبة</h3>
            
            {visaServices.map((v) => {
              const isSelected = selectedVisa.id === v.id;
              return (
                <motion.div
                  whileHover={{ x: -4 }}
                  whileTap={{ scale: 0.98 }}
                  key={v.id}
                  onClick={() => setSelectedVisa(v)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-800/90 border-amber-500 shadow-lg shadow-amber-500/10 font-bold'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{v.flag}</span>
                    <div>
                      <h4 className={`font-bold text-sm ${isSelected ? 'text-amber-400' : 'text-white'}`}>
                        {v.country}
                      </h4>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {v.processingTime}
                      </span>
                    </div>
                  </div>

                  <div className="text-left">
                    <span className="text-sm font-black text-amber-400 block">{v.price}</span>
                    <span className="text-[10px] text-slate-400">رسوم الخدمة</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Selected Visa Requirement Card */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVisa.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{selectedVisa.flag}</span>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">{selectedVisa.country}</h3>
                      <p className="text-xs text-amber-400 font-semibold mt-0.5">صلاحية التأشيرة: {selectedVisa.validity}</p>
                    </div>
                  </div>

                  <div className="bg-slate-800/90 border border-slate-700 px-4 py-2 rounded-xl text-center">
                    <span className="text-[11px] text-slate-400 block">مدة الإنجاز المتوقعة</span>
                    <span className="text-sm font-bold text-emerald-400">{selectedVisa.processingTime}</span>
                  </div>
                </div>

                {/* Required Documents Checklist */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-amber-400" />
                    <span>المستندات والأوراق المطلوبة:</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedVisa.requirements.map((req, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={idx} 
                        className="bg-slate-800/50 border border-slate-800 p-3 rounded-xl flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-xs leading-relaxed">{req}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Popular Destinations / Notice */}
                {selectedVisa.popularCountries && (
                  <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-xs text-amber-300 font-medium">
                      تشمل الوجهات الشهيرة: {selectedVisa.popularCountries}
                    </span>
                  </div>
                )}

                {/* CTA Application */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 block">التكلفة الإجمالية التقديرية</span>
                    <span className="text-2xl font-black text-amber-400">{selectedVisa.price}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onOpenWhatsApp(`طلب التقديم على تأشيرة: ${selectedVisa.country} بسعر ${selectedVisa.price}`)}
                    className="w-full sm:w-auto gold-btn text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>قدّم على التأشيرة أونلاين الآن عبر الواتساب</span>
                    <ArrowLeft className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
