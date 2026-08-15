import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UmrahScheduleSection from './components/UmrahScheduleSection';
import FeaturedPackages from './components/FeaturedPackages';
import VisaServices from './components/VisaServices';
import CustomTripPlanner from './components/CustomTripPlanner';
import PackageModal from './components/PackageModal';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { contactDetails } from './data/travelData';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Direct WhatsApp opener utility with pre-filled message
  const handleOpenWhatsApp = (customMessage = "") => {
    const defaultText = customMessage || "مرحباً شام تورز، أود الاستفسار عن برامج السياحة والتأشيرات المتاحة لديكم.";
    const encodedText = encodeURIComponent(defaultText);
    const whatsappUrl = `https://wa.me/${contactDetails.whatsapp.replace('+', '')}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Sticky Navigation Header */}
      <Navbar onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Hero Section & Search Engine */}
      <Hero onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Official Umrah August & September Schedule Flyer Section */}
      <UmrahScheduleSection onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Featured Tour Packages */}
      <FeaturedPackages 
        onSelectPackage={(pkg) => setSelectedPackage(pkg)} 
        onOpenWhatsApp={handleOpenWhatsApp} 
      />

      {/* Visa & Travel Documents Hub */}
      <VisaServices onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Interactive Custom Trip Builder */}
      <CustomTripPlanner onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Why Choose Sham Tours */}
      <WhyChooseUs />

      {/* Verified Client Testimonials */}
      <Testimonials />

      {/* Contact & Online Agency Details */}
      <ContactSection onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Brand Footer */}
      <Footer />

      {/* Floating Action WhatsApp Drawer */}
      <FloatingWhatsApp onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Package Detail Modal */}
      {selectedPackage && (
        <PackageModal 
          packageData={selectedPackage} 
          onClose={() => setSelectedPackage(null)} 
          onOpenWhatsApp={handleOpenWhatsApp} 
        />
      )}

    </div>
  );
}
