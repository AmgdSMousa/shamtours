import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle2, Globe, ShieldCheck, Zap, Star, Award } from 'lucide-react';
import { contactDetails } from '../data/travelData';

export default function ContactSection({ onOpenWhatsApp }) {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'رحلات سياحية', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 
        event: 'form_submission', 
        form_id: 'contact_form',
        service_requested: formData.service,
        client_name: formData.name
      });

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', { 'send_to': 'AW-18384004639/G3HNCPerp-IeEJ_Nk5E' });
        window.gtag('event', 'generate_lead', { event_category: 'Form', event_label: formData.service });
      }
    }

    setTimeout(() => {
      onOpenWhatsApp(`استفسار جديد عبر الموقع من: ${formData.name} - الخدمة المطلوبة: ${formData.service} - ملاحظات: ${formData.notes}`);
      setSubmitted(false);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 brand-bg-gradient relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5" />
            <span>خدمة أونلاين 100% عبر الإنترنت</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            نحن معك أينما كنت <span className="brand-gradient-text">خدمات سريعة ومباشرة أونلاين</span>
          </h2>
          <p className="text-slate-300 text-sm">
            شركة شام تورز تقدم لك كافة خدمات الطيران، التأشيرات، والبرامج السياحية أونلاين بكل أمان وسرعة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Online Agency Advantages */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900/90 border border-amber-500/30 p-6 sm:p-8 rounded-3xl space-y-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">{contactDetails.onlineCardTitle}</h3>
                  <span className="text-xs text-amber-400 font-semibold">{contactDetails.onlineCardSubtitle}</span>
                </div>
              </div>

              <div className="space-y-4">
                {contactDetails.onlineFeatures.map((ft, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-800 p-4 rounded-2xl space-y-1 hover:border-amber-500/30 transition-colors">
                    <h4 className="text-xs font-bold text-amber-400 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{ft.title}</span>
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed pr-6">{ft.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href={`tel:${contactDetails.phone}`}
                className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 p-4 rounded-2xl flex items-center gap-3 transition-colors text-right"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">اتصل بنا مباشرة</span>
                  <span className="text-xs font-bold text-white dir-ltr">{contactDetails.phone}</span>
                </div>
              </a>

              <a 
                href={`mailto:${contactDetails.email}`}
                className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 p-4 rounded-2xl flex items-center gap-3 transition-colors text-right"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">البريد الإلكتروني للحجوزات</span>
                  <span className="text-[11px] font-bold text-white truncate block">{contactDetails.email}</span>
                </div>
              </a>
            </div>

          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            
            <h3 className="text-xl font-bold text-white mb-1">أرسل طلبك أونلاين فوراً</h3>
            <p className="text-xs text-slate-400 mb-6">سيتواصل معك مستشار السفر في شام تورز على الواتساب خلال أقل من 15 دقيقة.</p>

            <form onSubmit={handleSubmitInquiry} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="text-xs font-medium text-slate-300 block mb-1">الاسم الكامل</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    required
                    placeholder="أدخل اسمك الكريم"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="text-xs font-medium text-slate-300 block mb-1">رقم الواتساب / الهاتف</label>
                  <input 
                    id="contact-phone"
                    type="tel" 
                    required
                    placeholder="+20 106 389 8530"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-service" className="text-xs font-medium text-slate-300 block mb-1">الخدمة المطلوبة</label>
                <select 
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-amber-400 focus:outline-none cursor-pointer"
                >
                  <option value="برنامج سياحي خاص">برنامج سياحي خاص</option>
                  <option value="استخرج فيزا / تأشيرة أونلاين">استخراج فيزا / تأشيرة أونلاين</option>
                  <option value="حجز تذاكر طيران">حجز تذاكر طيران</option>
                  <option value="برنامج عمرة VIP">برنامج عمرة VIP</option>
                  <option value="استفسار عام">استفسار عام</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">تفاصيل وملاحظات الرحلة</label>
                <textarea 
                  rows="3"
                  placeholder="اذكر الوجهة المفضلة، التواريخ التقديرية، أو أي استفسار آخر..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-amber-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full gold-btn text-slate-950 font-black text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xl cursor-pointer"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-slate-950" />
                    <span>جاري التوجيه للواتساب...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 fill-slate-950 stroke-none" />
                    <span>إرسال الطلب عبر الواتساب فوراً</span>
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
