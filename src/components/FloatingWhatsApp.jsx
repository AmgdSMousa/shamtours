import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send, ShieldCheck, Users } from 'lucide-react';
import { contactDetails } from '../data/travelData';

export default function FloatingWhatsApp({ onOpenWhatsApp }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      
      {/* Quick Drawer Popup */}
      {isOpen && (
        <div className="mb-4 bg-slate-900 border border-amber-500/40 p-4 rounded-2xl shadow-2xl w-80 animate-in slide-in-from-bottom duration-300 backdrop-blur-xl">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900 animate-ping"></span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">خدمة العملاء شام تورز</h4>
                <span className="text-[10px] text-emerald-400 font-medium">متصل الآن 🟢</span>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            مرحباً بك! كيف يمكننا مساعدتك في تخطيط رحلتك القادمة اليوم؟
          </p>

          <div className="space-y-2">
            {[
              "💬 تواصل مباشر مع مستشار السفر",
              "📑 استفسار عن متطلبات الشنغن والفيز",
              "🌴 حجز وتعديل برنامج سياحي",
              "✈️ استفسار عن تذاكر الطيران"
            ].map((opt, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsOpen(false);
                  onOpenWhatsApp(opt);
                }}
                className="w-full text-right text-xs font-medium text-slate-200 hover:text-slate-950 bg-slate-800 hover:bg-amber-400 p-2.5 rounded-xl border border-slate-700 hover:border-amber-400 transition-all flex items-center justify-between cursor-pointer"
              >
                <span>{opt}</span>
                <Send className="w-3.5 h-3.5 opacity-60" />
              </button>
            ))}

            {/* Official Group Join Link */}
            <a
              href={contactDetails.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-right text-xs font-bold text-emerald-300 hover:text-slate-950 bg-emerald-500/10 hover:bg-emerald-400 p-2.5 rounded-xl border border-emerald-500/30 transition-all flex items-center justify-between mt-1"
            >
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>انضم لجروب العروض على الواتساب</span>
              </span>
              <Send className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="gold-btn text-slate-950 p-4 rounded-full shadow-2xl flex items-center justify-center relative group cursor-pointer"
        aria-label="تواصل عبر الواتساب"
      >
        <MessageCircle className="w-7 h-7 fill-slate-950" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
      </button>

    </div>
  );
}
