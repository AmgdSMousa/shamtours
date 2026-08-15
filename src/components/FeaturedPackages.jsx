import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tourPackages } from '../data/travelData';
import { Star, MapPin, Calendar, Check, MessageCircle, Eye, ArrowLeft, Tag } from 'lucide-react';

export default function FeaturedPackages({ onSelectPackage, onOpenWhatsApp }) {
  const [activeCategory, setActiveCategory] = useState('الكل');

  const categories = ["الكل", "العمرة", "تركيا", "الإمارات", "آسيا", "جورجيا", "أوروبا"];

  const filteredPackages = activeCategory === 'الكل'
    ? tourPackages
    : tourPackages.filter(p => p.category === activeCategory || p.country === activeCategory);

  return (
    <section id="packages" className="py-24 bg-slate-900 relative">
      
      {/* Decorative Grid Light */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#DA9616_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block">
            برامج سياحية مميزة أونلاين 2026
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            رحلات <span className="brand-gradient-text">حصرية وفاخرة</span> مصممة خصيصاً لك
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            اختر وجهتك المفضلة واستمتع ببرامج تشمل الطيران، الفنادق 5 نجوم، والمواصلات الخاصة.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'text-slate-950 font-black'
                    : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 gold-bg-gradient rounded-xl shadow-lg shadow-amber-500/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Packages Cards Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPackages.map((pkg, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={pkg.id}
                whileHover={{ y: -8 }}
                className="bg-slate-800/80 border border-slate-700 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col group glow-on-hover"
              >
                
                {/* Card Image Banner */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Badge Overlay */}
                  <span className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {pkg.badge}
                  </span>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-slate-200 text-xs font-medium bg-slate-900/90 px-2.5 py-1 rounded-lg backdrop-blur-md border border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{pkg.duration}</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1 bg-amber-500 text-slate-950 text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                    <Star className="w-3.5 h-3.5 fill-slate-950 stroke-none" />
                    <span>{pkg.rating}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div>
                    <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{pkg.location}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {pkg.title}
                    </h3>
                    
                    <p className="text-slate-300 text-xs line-clamp-2 mt-2 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Key Includes Checklist */}
                  <div className="space-y-1.5 border-t border-slate-700/80 pt-3">
                    {pkg.includes.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300 text-xs">
                        <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & CTA */}
                  <div className="border-t border-slate-700/80 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">يبدأ السعر من</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-amber-400">{pkg.price.toLocaleString()}</span>
                        <span className="text-xs font-bold text-slate-300">{pkg.currency}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onSelectPackage(pkg)}
                        className="p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors cursor-pointer"
                        title="عرض البرنامج كاملاً"
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => onOpenWhatsApp(`حجز رحلة: ${pkg.title} بسعر ${pkg.price} ${pkg.currency}`)}
                        className="gold-btn text-slate-950 font-bold text-xs px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                        <span>احجز الآن</span>
                      </motion.button>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
