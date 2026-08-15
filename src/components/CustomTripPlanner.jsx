import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, Sparkles, Send, MapPin, Heart, Users, Hotel, Calendar, CheckCircle, ArrowLeft, MessageCircle } from 'lucide-react';

export default function CustomTripPlanner({ onOpenWhatsApp }) {
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState('تركيا (إسطنبول)');
  const [style, setStyle] = useState('شهر عسل فاخر 💍');
  const [hotelGrade, setHotelGrade] = useState('5 نجوم VIP 🌟');
  const [days, setDays] = useState(7);
  const [travelersCount, setTravelersCount] = useState(2);
  const [includeFlight, setIncludeFlight] = useState(true);
  const [includeDriver, setIncludeDriver] = useState(true);

  // Dynamic estimated calculation logic (in EGP)
  const calculateEstimatedPrice = () => {
    let basePerDay = 3500;
    if (hotelGrade.includes('5 نجوم')) basePerDay = 5500;
    if (hotelGrade.includes('4 نجوم')) basePerDay = 4000;
    if (style.includes('شهر عسل')) basePerDay += 1200;

    let total = basePerDay * days * travelersCount;
    if (includeFlight) total += 14000 * travelersCount;
    if (includeDriver) total += 1800 * days;

    return Math.round(total);
  };

  const handleSendCustomPlan = () => {
    const message = `السلام عليكم شام تورز 👋
لقد قمت بتصميم برنامجي السياحي الخاص عبر موقعكم:
📍 الوجهة: ${destination}
💍 نمط الرحلة: ${style}
🏨 مستوى الفندق: ${hotelGrade}
📅 المدة: ${days} أيام
👥 عدد المسافرين: ${travelersCount}
✈️ الطيران: ${includeFlight ? 'مطلوب' : 'غير مطلوب'}
🚗 سيارة مع سائق: ${includeDriver ? 'مطلوب' : 'غير مطلوب'}

أرجو تزويدي بعرض السعر والتفاصيل النهائية.`;
    onOpenWhatsApp(message);
  };

  return (
    <section id="trip-planner" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background Lighting Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5 shimmer-badge">
            <Sparkles className="w-3.5 h-3.5" />
            <span>أداة تفاعلية مبتكرة أونلاين</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            صمّم <span className="brand-gradient-text">برنامجك السياحي</span> بنفسك
          </h2>
          <p className="text-slate-400 text-sm">
            حدد رغباتك ووجهتك المفضلة، وسيقوم مستشار السفر بشركة شام تورز بتجهيز البرنامج المطلوب بدقة.
          </p>
        </motion.div>

        {/* Custom Wizard Container */}
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* Progress Steps Header */}
          <div className="grid grid-cols-4 gap-2 mb-8 border-b border-slate-800 pb-4 text-center">
            {[
              { num: 1, title: "الوجهة" },
              { num: 2, title: "نمط الرحلة" },
              { num: 3, title: "الفندق والخدمات" },
              { num: 4, title: "المدة والمسافرين" }
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => setStep(s.num)}
                className={`py-2.5 px-1 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  step === s.num
                    ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                    : step > s.num
                    ? 'bg-slate-800 text-amber-400'
                    : 'bg-slate-800/40 text-slate-400'
                }`}
              >
                <span>خطوة {s.num}: {s.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: DESTINATION */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-bold text-white text-center">اختر وجهتك السياحية المفضلة</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { name: "تركيا (إسطنبول وطرابزون)", icon: "🇹🇷", bg: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=400&q=80" },
                    { name: "الإمارات (دبي وأبوظبي)", icon: "🇦🇪", bg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80" },
                    { name: "السعودية (برنامج العمرة)", icon: "🕋", bg: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=400&q=80" },
                    { name: "ماليزيا وجزر لنكاوي", icon: "🇲🇾", bg: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=400&q=80" },
                    { name: "جورجيا والجبال", icon: "🇬🇪", bg: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=400&q=80" },
                    { name: "دول أوروبا والشنغن", icon: "🇪🇺", bg: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=400&q=80" }
                  ].map((item, idx) => (
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      key={idx}
                      onClick={() => setDestination(item.name)}
                      className={`relative h-28 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all group flex items-center justify-center p-3 text-center ${
                        destination === item.name ? 'border-amber-400 ring-4 ring-amber-500/20 shadow-lg shadow-amber-500/20' : 'border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <img src={item.bg} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-500" />
                      <div className="relative z-10">
                        <span className="text-xl block mb-1">{item.icon}</span>
                        <span className="text-xs font-bold text-white leading-tight block">{item.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-end pt-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setStep(2)}
                    className="gold-btn text-slate-950 font-bold px-6 py-3 rounded-xl flex items-center gap-2 text-sm shadow-lg cursor-pointer"
                  >
                    <span>التالي: نمط الرحلة</span>
                    <ArrowLeft className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: TRAVEL STYLE */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-bold text-white text-center">ما هو النمط الذي تفضله لهذه الرحلة؟</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "شهر عسل فاخر 💍", desc: "أجواء رومانسية، إقامة في منتجعات مميزة وتجهيزات خاصة للعرسان" },
                    { name: "عائلية وممتعة 👨‍👩‍👧‍👦", desc: "أنشطة تناسب كافة الأعمار، فنادق عائلية وتدابير مريحة للأطفال" },
                    { name: "استجمام وطبيعة 🌿", desc: "هدوء وراحة بين أحضان الطبيعة والجبال والشواطئ النظيفة" },
                    { name: "مغامرات واستكشاف 🏔️", desc: "رحلات سياحية نشطة وجولات يومية لمعالم المدن والأسواق" }
                  ].map((st, idx) => (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      key={idx}
                      onClick={() => setStyle(st.name)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                        style === st.name ? 'bg-slate-800 border-amber-400 shadow-md' : 'bg-slate-800/40 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <h4 className="font-bold text-amber-400 text-sm mb-1">{st.name}</h4>
                      <p className="text-xs text-slate-300">{st.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-between pt-4">
                  <button onClick={() => setStep(1)} className="text-slate-400 hover:text-white text-xs font-semibold px-4 py-2 cursor-pointer">سابق</button>
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setStep(3)} 
                    className="gold-btn text-slate-950 font-bold px-6 py-3 rounded-xl flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <span>التالي: الفندق والخدمات</span>
                    <ArrowLeft className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: HOTEL & SERVICES */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-bold text-white text-center">اختر درجة الإقامة والخدمات الإضافية</h3>
                
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 block">درجة الفندق والإقامة:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {["5 نجوم VIP 🌟", "4 نجوم فاخر ⭐️", "3 نجوم اقتصادي 🏨"].map((grade, idx) => (
                      <button
                        key={idx}
                        onClick={() => setHotelGrade(grade)}
                        className={`p-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          hotelGrade === grade ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md' : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        {grade}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800">
                  <label className="text-xs font-bold text-slate-400 block">تضمين الخدمات التالية:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={includeFlight} 
                        onChange={(e) => setIncludeFlight(e.target.checked)} 
                        className="w-4 h-4 accent-amber-500 rounded"
                      />
                      <span className="text-xs text-white font-medium">تذاكر الطيران الدولي المباشر</span>
                    </label>

                    <label className="flex items-center gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={includeDriver} 
                        onChange={(e) => setIncludeDriver(e.target.checked)} 
                        className="w-4 h-4 accent-amber-500 rounded"
                      />
                      <span className="text-xs text-white font-medium">سيارة خاصة مع سائق طوال الرحلة</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button onClick={() => setStep(2)} className="text-slate-400 hover:text-white text-xs font-semibold px-4 py-2 cursor-pointer">سابق</button>
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setStep(4)} 
                    className="gold-btn text-slate-950 font-bold px-6 py-3 rounded-xl flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <span>التالي: المدة والتكلفة</span>
                    <ArrowLeft className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: DURATION, TRAVELERS & ESTIMATED CALCULATION */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-bold text-white text-center">تفاصيل المدة والمسافرين والتكلفة</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-800/60 p-5 rounded-2xl border border-slate-700">
                  <div>
                    <label className="text-xs text-slate-300 font-bold block mb-2">عدد أيام الرحلة: ({days} أيام)</label>
                    <input 
                      type="range" 
                      min="3" 
                      max="20" 
                      value={days}
                      onChange={(e) => setDays(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>3 أيام</span>
                      <span>10 أيام</span>
                      <span>20 يوم</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-bold block mb-2">عدد المسافرين: ({travelersCount} مسافرين)</label>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={travelersCount}
                      onChange={(e) => setTravelersCount(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>1 شخص</span>
                      <span>5 أفراد</span>
                      <span>10 أشخاص</span>
                    </div>
                  </div>
                </div>

                {/* Custom Plan Inquiry Card */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-amber-500/50 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right shadow-xl">
                  <div>
                    <span className="text-xs text-amber-400 font-bold block">احصل على أفضل سعر لحزمتك المصممة:</span>
                    <div className="mt-1">
                      <span className="text-xl sm:text-2xl font-black text-white block">عرض سعر مخصص ومباشر مجاناً</span>
                      <span className="text-xs text-slate-300">سيتواصل معك مستشار شام تورز بالخصومات المتاحة</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSendCustomPlan}
                    className="w-full sm:w-auto gold-btn text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>إرسال الخطة لموظف شام تورز الآن</span>
                  </motion.button>
                </div>

                <div className="flex justify-start">
                  <button onClick={() => setStep(3)} className="text-slate-400 hover:text-white text-xs font-semibold px-4 py-2 cursor-pointer">سابق</button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
