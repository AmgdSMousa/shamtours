import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Compass, FileCheck, Search, Calendar, Users, MapPin, Sparkles, CheckCircle2, ArrowLeft } from 'lucide-react';
import { visaServices } from '../data/travelData';

export default function Hero({ onSearch, onOpenWhatsApp }) {
  const [activeTab, setActiveTab] = useState('flights');
  
  // Search Form State
  const [origin, setOrigin] = useState('دبي');
  const [destination, setDestination] = useState('إسطنبول');
  const [travelDate, setTravelDate] = useState('2026-09-01');
  const [passengers, setPassengers] = useState('2 مسافرين');
  const [cabinClass, setCabinClass] = useState('اقتصادية');
  const [visaCountry, setVisaCountry] = useState('شنغن (أوروبا)');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    let queryDetails = "";
    if (activeTab === 'flights') {
      queryDetails = `حجز طيران من ${origin} إلى ${destination} - بتاريخ ${travelDate} - عدد ${passengers} (${cabinClass})`;
    } else if (activeTab === 'packages') {
      queryDetails = `برنامج سياحي إلى ${destination} - عدد ${passengers}`;
    } else if (activeTab === 'visas') {
      queryDetails = `طلب تأشيرة لدولة ${visaCountry}`;
    } else {
      queryDetails = `استفسار عن برنامج عمرة وتأشيرة السعودية`;
    }
    onOpenWhatsApp(queryDetails);
  };

  return (
    <section id="hero" className="relative min-h-[94vh] pt-32 pb-20 flex items-center justify-center overflow-hidden brand-bg-gradient">
      
      {/* Dynamic Visual Background Layer */}
      <div className="absolute inset-0 z-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B1B3D]/80 via-[#0B1B3D]/95 to-[#0B1B3D]"></div>

      {/* Floating Glowing Decorative Circles */}
      <motion.div 
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
      ></motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Headline & Hero Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md shimmer-badge">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-amber-300">
              وجهتك تبدأ معنا — وكالة سياحة وتأشيرات أونلاين 100%
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            سافر بثقة واكتشف أجمل <br className="hidden sm:inline" />
            <span className="brand-gradient-text">وجهات العالم أونلاين</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            نقدّم لك أرقى البرامج السياحية، أفضل أسعار تذاكر الطيران، وخدمات استخراج التأشيرات مباشرة وبسهولة أونلاين 100%.
          </p>
        </motion.div>

        {/* Interactive Luxury Search & Booking Console */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto bg-slate-900/90 border border-amber-500/30 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl glow-on-hover"
        >
          
          {/* Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 border-b border-slate-800 pb-4 relative">
            {[
              { id: 'flights', label: 'تذاكر طيران', icon: <Plane className="w-4 h-4" /> },
              { id: 'packages', label: 'برامج سياحية', icon: <Compass className="w-4 h-4" /> },
              { id: 'visas', label: 'خدمات الفيزا', icon: <FileCheck className="w-4 h-4" /> },
              { id: 'umrah', label: 'رحلات العمرة', icon: <span className="text-base">🕋</span> }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive ? 'text-slate-950 font-black' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 gold-bg-gradient rounded-xl shadow-lg shadow-amber-500/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.icon}
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Form Inputs based on active tab */}
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {activeTab === 'flights' && (
                <motion.div 
                  key="flights"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                >
                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 hover:border-amber-400 transition-colors">
                    <label htmlFor="hero-origin" className="text-[11px] text-slate-400 block mb-1 font-medium">مغادرة من</label>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <select 
                        id="hero-origin"
                        value={origin} 
                        onChange={(e) => setOrigin(e.target.value)}
                        className="bg-transparent text-white text-sm font-semibold focus:outline-none w-full cursor-pointer"
                      >
                        <option value="القاهرة" className="bg-slate-900 text-white">القاهرة (CAI)</option>
                        <option value="دبي" className="bg-slate-900 text-white">دبي (DXB)</option>
                        <option value="إسطنبول" className="bg-slate-900 text-white">إسطنبول (IST)</option>
                        <option value="دمشق" className="bg-slate-900 text-white">دمشق (DAM)</option>
                        <option value="بيروت" className="bg-slate-900 text-white">بيروت (BEY)</option>
                        <option value="عمان" className="bg-slate-900 text-white">عمان (AMM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 hover:border-amber-400 transition-colors">
                    <label htmlFor="hero-dest" className="text-[11px] text-slate-400 block mb-1 font-medium">الوجهة إلى</label>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <select 
                        id="hero-dest"
                        value={destination} 
                        onChange={(e) => setDestination(e.target.value)}
                        className="bg-transparent text-white text-sm font-semibold focus:outline-none w-full cursor-pointer"
                      >
                        <option value="إسطنبول" className="bg-slate-900 text-white">إسطنبول (تركيا)</option>
                        <option value="جدة/المدينة" className="bg-slate-900 text-white">السعودية (رحلات العمرة 🕋)</option>
                        <option value="دبي" className="bg-slate-900 text-white">دبي (الإمارات)</option>
                        <option value="كوالالمبور" className="bg-slate-900 text-white">كوالالمبور (ماليزيا)</option>
                        <option value="تبليسي" className="bg-slate-900 text-white">تبليسي (جورجيا)</option>
                        <option value="باريس" className="bg-slate-900 text-white">باريس (فرنسا)</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 hover:border-amber-400 transition-colors">
                    <label htmlFor="hero-date" className="text-[11px] text-slate-400 block mb-1 font-medium">تاريخ السفر</label>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <input 
                        id="hero-date"
                        type="date" 
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="bg-transparent text-white text-sm font-semibold focus:outline-none w-full cursor-pointer" 
                      />
                    </div>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 hover:border-amber-400 transition-colors">
                    <label htmlFor="hero-passengers" className="text-[11px] text-slate-400 block mb-1 font-medium">المسافرين والدرجة</label>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <select 
                        id="hero-passengers"
                        value={passengers} 
                        onChange={(e) => setPassengers(e.target.value)}
                        className="bg-transparent text-white text-sm font-semibold focus:outline-none w-full cursor-pointer"
                      >
                        <option value="1 مسافر" className="bg-slate-900 text-white">1 مسافر (اقتصادية)</option>
                        <option value="2 مسافرين" className="bg-slate-900 text-white">2 مسافرين (زوجين)</option>
                        <option value="عائلة (3-5)" className="bg-slate-900 text-white">عائلة (3 - 5 أفراد)</option>
                        <option value="رجال الأعمال VIP" className="bg-slate-900 text-white">درجة رجال الأعمال VIP</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'packages' && (
                <motion.div 
                  key="packages"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                >
                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 hover:border-amber-400 transition-colors">
                    <label className="text-[11px] text-slate-400 block mb-1 font-medium">اختر الدولة أو المنطقة</label>
                    <select 
                      value={destination} 
                      onChange={(e) => setDestination(e.target.value)}
                      className="bg-transparent text-white text-sm font-semibold focus:outline-none w-full cursor-pointer"
                    >
                      <option value="تركيا" className="bg-slate-900">تركيا (إسطنبول وطرابزون)</option>
                      <option value="الإمارات" className="bg-slate-900">الإمارات (دبي وأبوظبي)</option>
                      <option value="ماليزيا" className="bg-slate-900">ماليزيا وجزر لنكاوي</option>
                      <option value="جورجيا" className="bg-slate-900">جورجيا والجبال الخضراء</option>
                      <option value="أوروبا" className="bg-slate-900">دول الشنغن وأوروبا</option>
                    </select>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 hover:border-amber-400 transition-colors">
                    <label className="text-[11px] text-slate-400 block mb-1 font-medium">مدة البرنامج المقترحة</label>
                    <select className="bg-transparent text-white text-sm font-semibold focus:outline-none w-full cursor-pointer">
                      <option className="bg-slate-900">5 أيام / 4 ليالي</option>
                      <option className="bg-slate-900">8 أيام / 7 ليالي</option>
                      <option className="bg-slate-900">10 أيام (برنامج مكثف)</option>
                      <option className="bg-slate-900">14 يوم (جولة شمولية)</option>
                    </select>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 hover:border-amber-400 transition-colors">
                    <label className="text-[11px] text-slate-400 block mb-1 font-medium">نوع الرحلة</label>
                    <select className="bg-transparent text-white text-sm font-semibold focus:outline-none w-full cursor-pointer">
                      <option className="bg-slate-900">شهر عسل عالي الفخامة</option>
                      <option className="bg-slate-900">عائلية مع أطفال</option>
                      <option className="bg-slate-900">رحلة شبابية / استكشاف</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {activeTab === 'visas' && (
                <motion.div 
                  key="visas"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 hover:border-amber-400 transition-colors">
                    <label className="text-[11px] text-slate-400 block mb-1 font-medium">اختر الدولة المطلوبة</label>
                    <select 
                      value={visaCountry} 
                      onChange={(e) => setVisaCountry(e.target.value)}
                      className="bg-transparent text-white text-sm font-semibold focus:outline-none w-full cursor-pointer"
                    >
                      {visaServices.map((v, i) => (
                        <option key={i} value={v.country} className="bg-slate-900">{v.flag} {v.country}</option>
                      ))}
                    </select>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 hover:border-amber-400 transition-colors">
                    <label className="text-[11px] text-slate-400 block mb-1 font-medium">نوع الفيزا المطلوب</label>
                    <select className="bg-transparent text-white text-sm font-semibold focus:outline-none w-full cursor-pointer">
                      <option className="bg-slate-900">سياحة وفندقة أونلاين</option>
                      <option className="bg-slate-900">زيارة عمل وتجارة</option>
                      <option className="bg-slate-900">تأشيرة علاجيّة</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {activeTab === 'umrah' && (
                <motion.div 
                  key="umrah"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 hover:border-amber-400 transition-colors">
                    <label className="text-[11px] text-slate-400 block mb-1 font-medium">اختر موعد الرحلة (جدول أغسطس/سبتمبر)</label>
                    <select className="bg-transparent text-white text-sm font-semibold focus:outline-none w-full cursor-pointer">
                      <option className="bg-slate-900">رحلة 2 سبتمبر (الماسة جراند 600m مشي للحرم)</option>
                      <option className="bg-slate-900">رحلة 30 أغسطس (15 يوم اقتصادي)</option>
                      <option className="bg-slate-900">رحلة 16 سبتمبر (15 يوم طيران أديل)</option>
                      <option className="bg-slate-900">رحلة 18 سبتمبر (8 أيام السريعة)</option>
                      <option className="bg-slate-900">رحلة 25 سبتمبر (8 أيام السريعة)</option>
                    </select>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 hover:border-amber-400 transition-colors">
                    <label className="text-[11px] text-slate-400 block mb-1 font-medium">مقر الإقامة في مكة</label>
                    <select className="bg-transparent text-white text-sm font-semibold focus:outline-none w-full cursor-pointer">
                      <option className="bg-slate-900">فندق الماسة جراند (600 متر مشي للحرم)</option>
                      <option className="bg-slate-900">فندق كدي تاور (باصات للحرم)</option>
                      <option className="bg-slate-900">فندق منازل العين (باصات للحرم)</option>
                    </select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit CTA Button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full gold-btn text-slate-950 font-black text-base py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 shadow-xl cursor-pointer"
              >
                <Search className="w-5 h-5 stroke-[2.5]" />
                <span>ابحث واحصل على أفضل عرض سعر أونلاين فوراً</span>
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
            </div>
          </form>

          {/* Quick Badges below search */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-slate-400 text-xs gap-3">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ضمان أفضل سعر وأمان أونلاين 100%</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>تأشيرات إلكترونية سريعة الإجراءات</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>دعم متواصل ومساعدة طوال 24 ساعة</span>
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
