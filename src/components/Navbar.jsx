import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Phone, MessageCircle, Globe, Menu, X, Compass, Calendar, ShieldCheck, Tag, MapPin, Sparkles } from 'lucide-react';
import { contactDetails } from '../data/travelData';

export default function Navbar({ onOpenWhatsApp }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "جدول رحلات العمرة", href: "#umrah-schedule", badge: "جديد 🕋" },
    { name: "البرامج السياحية", href: "#packages" },
    { name: "خدمات التأشيرات", href: "#visas" },
    { name: "صمّم رحلتك", href: "#trip-planner" },
    { name: "لماذا شام تورز؟", href: "#why-us" },
    { name: "اتصل بنا", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-[#071329] text-slate-300 text-xs py-2 px-4 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{contactDetails.slogan}</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <a href={`tel:${contactDetails.phone}`} className="hidden md:flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span dir="ltr">{contactDetails.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>خدمة إلكترونية أونلاين 24/7</span>
            </div>
            
            <a 
              href={contactDetails.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 px-2.5 py-1 rounded text-amber-300 text-xs transition-all border border-amber-500/30 flex items-center gap-1 font-bold"
            >
              <span>جروب الواتساب 💬</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav py-3 shadow-2xl shadow-black/30 border-b border-amber-500/20' 
          : 'bg-[#0B1B3D]/95 backdrop-blur-md py-4 border-b border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center group">
            <Logo size="md" variant="full" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="relative text-slate-200 hover:text-amber-400 text-sm font-medium transition-colors py-1 group flex items-center gap-1.5"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold px-1.5 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenWhatsApp("استفسار عن رحلات العمرة لشهر أغسطس وسبتمبر")}
              className="gold-btn text-slate-950 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>تواصل واتساب</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-200 hover:text-amber-400 p-2 rounded-lg bg-slate-800/60 focus:outline-none"
              aria-label="تغيير القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071329] border-b border-amber-500/20 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-300">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-slate-200 hover:text-amber-400 py-2.5 border-b border-slate-800 text-base font-medium"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-xs bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp("استفسار عن جدول رحلات العمرة");
                }}
                className="w-full gold-btn text-slate-950 font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>احجز العمرة الآن عبر الواتساب</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
