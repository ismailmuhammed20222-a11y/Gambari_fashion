import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Scissors, Shirt, Ruler, CheckCircle, MapPin, Phone, MessageCircle, Menu, X, Star, Award, ThumbsUp, ChevronRight } from 'lucide-react';

const WHATSAPP_NUMBER = "2348060685437";
const WHATSAPP_MESSAGE = "Hello Gambari Fashion, I want to book an appointment";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen font-sans relative selection:bg-gold/30 text-gray-800">
      {/* Lively elegant background */}
      <div className="fixed inset-0 z-[-1] bg-[#fdfbf7] bg-[radial-gradient(circle_at_0%_0%,#fff3d6_0,transparent_40%),radial-gradient(circle_at_100%_100%,#f0e4cc_0,transparent_40%),radial-gradient(circle_at_100%_0%,#fdfbf7_0,transparent_40%)] opacity-90"></div>
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/85 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className="flex items-center gap-2 group">
              <Scissors className="text-gold transform group-hover:-rotate-12 transition-transform duration-300" size={28} />
              <div className="flex flex-col">
                <span className={`text-2xl font-bold font-heading tracking-tight leading-none ${isScrolled ? 'text-burgundy' : 'text-white'}`}>
                  Gambari
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gold font-semibold leading-none mt-1">
                  Fashion Design
                </span>
              </div>
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className={`text-sm font-medium hover:text-gold transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-200'}`}>
                  {link.name}
                </a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-burgundy text-white px-6 py-2 rounded-md text-sm font-bold border border-gold/70 hover:bg-[#600018] hover:border-gold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center gap-2 group">
                <MessageCircle size={16} className="group-hover:rotate-12 transition-transform" />
                Book an Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className={isScrolled ? 'text-black' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-black' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 font-medium w-full text-center py-2 hover:text-gold"
              >
                {link.name}
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-burgundy text-white px-8 py-3 rounded-md text-sm font-bold border border-gold/70 hover:bg-[#600018] hover:border-gold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center gap-2 group">
              <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
              Book an Appointment
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="https://i.ibb.co/nNdKswrt/IMG-3964.jpg" 
            alt="Man operating VOILA embroidery machine" 
            className="w-full h-full object-cover object-[65%_center] md:object-[70%_center] brightness-[0.8] contrast-[1.15] saturate-[0.9]"
            referrerPolicy="no-referrer"
          />
          {/* Film Grain Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          {/* Soft dark gradient overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/85"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-8 leading-[1.1] tracking-wide drop-shadow-2xl"
          >
            Gambari Fashion Design <br/>
            <span className="text-gold drop-shadow-lg text-base md:text-lg lg:text-xl block mt-10 font-sans font-medium uppercase tracking-[0.3em] opacity-90">
              & Cloth Customization
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-16 font-sans font-light tracking-[0.12em] leading-relaxed max-w-2xl mx-auto drop-shadow-md"
          >
            Custom-Made Clothing & Perfect Fit Tailoring
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-4 bg-[#fdfbf7] border border-gold/50 text-burgundy px-12 py-5 rounded-full text-sm font-bold uppercase tracking-[0.25em] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:bg-white group"
            >
              <MessageCircle size={20} className="text-burgundy group-hover:rotate-12 transition-transform duration-300" />
              BOOK AN APPOINTMENT
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <div className="p-2 md:p-4">
                <img 
                  src="https://i.ibb.co/fVZkr0vz/IMG-3968.jpg" 
                  alt="Gambari Fashion tailoring process" 
                  className="rounded-3xl shadow-md w-full h-auto object-cover object-center max-h-[600px] aspect-[4/5] border border-gray-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-3">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">Elegance Tailored to Your Identity</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light tracking-wide">
                At Gambari Fashion, we create stylish, custom-made clothes just for you. From casual outfits to one-of-a-kind designs, every piece is crafted with care.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed mb-8 font-heading font-medium italic">
                Your style, your story. Let’s bring your ideas to life!
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-burgundy border border-gold/70 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 hover:border-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] group">
                Contact us 
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <FadeIn>
              <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-3">What We Do</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">Our Premium Services</h3>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Scissors, title: "Custom Sewing", desc: "Bespoke tailoring designed specifically for your body type and style preferences." },
              { icon: Shirt, title: "Traditional Wear", desc: "Authentic and elegant native attires including Agbada, Senator wear, and more." },
              { icon: Star, title: "Modern Fashion", desc: "Contemporary designs that keep you ahead of the fashion curve." },
              { icon: Ruler, title: "Alterations", desc: "Expert adjustments to ensure your existing wardrobe fits perfectly." }
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.1} className="h-full">
                <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl p-8 hover:bg-burgundy hover:text-white transition-all duration-300 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-gold transition-colors">
                    <service.icon className="text-burgundy group-hover:text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-bold font-heading mb-3">{service.title}</h4>
                  <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <FadeIn>
              <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-3">Our Portfolio</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">Featured Creations</h3>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { src: "https://i.ibb.co/c9t5v40/IMG-3855.jpg", caption: "Agbada" },
              { src: "https://i.ibb.co/ynjzW4sM/7d0ad2ed-9869-485d-b111-a14a6d0f9f98.jpg", caption: "Senator Wear" },
              { src: "https://i.ibb.co/JwKQQFxf/0590f52c-bfab-46f2-95d7-1a694a1f05b2.jpg", caption: "Native Outfit" },
              { src: "https://i.ibb.co/60D8gZQJ/ad37181c-da00-41c5-9d39-f943893d98c2.jpg", caption: "Modern Traditional" },
              { src: "https://i.ibb.co/Vpwchw3V/27719511-66af-489b-89ed-5afdd5d78478.jpg", caption: "Bespoke Design" },
              { src: "https://i.ibb.co/rRy0ndd2/0b6150ba-502f-4c88-86c0-53e21a84fc75.jpg", caption: "Elegant Fit" }
            ].map((img, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 aspect-[3/4]">
                  <img 
                    src={img.src} 
                    alt={`Custom tailored ${img.caption} outfit by Gambari Fashion`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h4 className="text-white text-xl font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.caption}</h4>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <FadeIn>
              <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-gray-900">The Gambari Difference</h3>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            {[
              { icon: Award, title: "High-Quality Materials", desc: "We source only the finest fabrics to ensure durability and comfort." },
              { icon: CheckCircle, title: "Perfect Fitting", desc: "Precise measurements guarantee a flawless fit every time." },
              { icon: Scissors, title: "Attention to Detail", desc: "Meticulous stitching and finishing touches set our garments apart." },
              { icon: ThumbsUp, title: "Affordable Pricing", desc: "Premium quality tailoring that offers exceptional value." }
            ].map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex gap-4 text-left p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/40 hover:bg-white/60 transition-colors shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center">
                    <feature.icon className="text-burgundy" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-burgundy via-[#6a001a] to-[#4a0012] text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading mb-8">Ready for Your Custom Fit?</h3>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Visit our shop in Lokoja or send us a message on WhatsApp to book an appointment. We look forward to creating something special for you.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-10">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-300">Lokoja, Kogi State, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone / WhatsApp</h4>
                  <p className="text-gray-300">+234 806 068 5437</p>
                </div>
              </div>
            </div>

            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-gold/70 text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-burgundy hover:border-gold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] group"
            >
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
              Book an Appointment
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Scissors className="text-gold transform group-hover:-rotate-12 transition-transform duration-300" size={28} />
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold font-heading tracking-tight leading-none text-white">
                Gambari
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gold font-semibold leading-none mt-1">
                Fashion Design
              </span>
            </div>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left order-3 md:order-none max-w-md leading-relaxed">
            &copy; {new Date().getFullYear()} Gambari Fashion Design & Cloth Customization. <br className="hidden md:block lg:hidden" /> All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-6 order-2 md:order-none">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-black transition-all duration-300 hover:scale-110">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
