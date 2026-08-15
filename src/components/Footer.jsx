import React from 'react';
import Logo from './Logo';
import { contactDetails } from '../data/travelData';
import { Phone, Mail, MapPin, Send, ShieldCheck, Heart, Globe, MessageCircle, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050E21] text-slate-300 border-t border-slate-800 text-xs font-medium">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" variant="full" />
            <p className="text-slate-300 leading-relaxed max-w-sm pt-2">
              شركة شام تورز للسياحة والسفر والتأشيرات — وكالة سياحية تعمل بالكامل أونلاين 100% لتنظيم أجمل الرحلات حول العالم، استخراج التأشيرات وحجوزات الطيران أينما كنت.
            </p>
            
            {/* Social Icons & WhatsApp Group */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href={contactDetails.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center transition-colors text-white" 
                aria-label="Facebook"
                title="صفحة الفيس بوك الرسمية"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>

              <a 
                href={`https://wa.me/${contactDetails.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center transition-colors text-white" 
                aria-label="WhatsApp"
                title="محادثة الواتساب المباشرة"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <a 
                href={contactDetails.whatsappGroup} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold transition-all"
                title="انضم لمجتمع شام تورز على الواتساب"
              >
                <Users className="w-3.5 h-3.5" />
                <span>جروب الواتساب الرسمي</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 border-r-2 border-amber-400 pr-2.5">روابط سريعة</h4>
            <ul className="space-y-2.5">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">الرئيسية</a></li>
              <li><a href="#packages" className="hover:text-amber-400 transition-colors">البرامج السياحية</a></li>
              <li><a href="#visas" className="hover:text-amber-400 transition-colors">خدمات التأشيرات</a></li>
              <li><a href="#trip-planner" className="hover:text-amber-400 transition-colors">صمّم رحلتك بنفسك</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">لماذا شام تورز؟</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 border-r-2 border-amber-400 pr-2.5">خدماتنا أونلاين</h4>
            <ul className="space-y-2.5">
              <li><span className="hover:text-amber-400 transition-colors">تأشيرة الشنغن والأوروبية</span></li>
              <li><span className="hover:text-amber-400 transition-colors">تأشيرات الإمارات والسعودية</span></li>
              <li><span className="hover:text-amber-400 transition-colors">برامج تركيا وماليزيا</span></li>
              <li><span className="hover:text-amber-400 transition-colors">حجوزات طيران وتذاكر أونلاين</span></li>
              <li><span className="hover:text-amber-400 transition-colors">رحلات العمرة VIP</span></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 border-r-2 border-amber-400 pr-2.5">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${contactDetails.phone}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span dir="ltr">{contactDetails.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="truncate">{contactDetails.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>خدمات سياحية أونلاين 100% لكافة دول العالم</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} شام تورز (Sham Tours) — جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-1">
            <span>صُمم بإتقان وشغف لشركة</span>
            <span className="text-amber-400 font-bold">شام تورز أونلاين</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
