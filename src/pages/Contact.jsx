import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { cafeDetails } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { showToast } = useTheme();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('✉️ Message Sent! We will respond within 1 hour.', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#d4af37] tracking-widest uppercase block">Get in Touch</span>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#f5ebe0]">
          Contact Aurora Brew Cafe
        </h1>
        <p className="text-xs sm:text-sm text-[#c9a687]">
          We would love to hear from you. Stop by our C-Scheme sanctuary or drop us a line below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Info & Hours */}
        <div className="space-y-8">
          <div className="p-8 rounded-3xl bg-[#170d09] border border-[#c9a687]/20 space-y-6 shadow-2xl">
            <h3 className="font-serif-luxury text-2xl font-bold text-[#f5ebe0]">Jaipur Store Info</h3>
            
            <ul className="space-y-4 text-xs text-[#f5ebe0]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#c9a687]">Address</span>
                  <span>{cafeDetails.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#c9a687]">Phone Reservations</span>
                  <span>{cafeDetails.phone} / {cafeDetails.alternatePhone}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#c9a687]">Email Inquiries</span>
                  <span>{cafeDetails.email}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#c9a687]">Opening Hours</span>
                  <p>Mon - Thu: 8:00 AM – 11:00 PM</p>
                  <p>Fri - Sun: 8:00 AM – 11:30 PM</p>
                </div>
              </li>
            </ul>

            <div className="pt-2 flex gap-4">
              <a
                href={cafeDetails.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-green-950 border border-green-500/40 text-green-400 font-bold text-xs uppercase tracking-wider text-center hover:bg-green-900 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="p-8 rounded-3xl bg-[#170d09] border border-[#c9a687]/20 shadow-2xl space-y-6">
          <h3 className="font-serif-luxury text-2xl font-bold text-[#f5ebe0]">Send Us a Message</h3>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-green-950/40 border border-green-500/40 text-center space-y-2">
              <CheckCircle className="w-10 h-10 text-green-400 mx-auto" />
              <h4 className="font-bold text-sm text-[#f5ebe0]">Thank You!</h4>
              <p className="text-xs text-[#c9a687]">Your message has been received. Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] focus:border-[#d4af37] focus:outline-none"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number (+91)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] focus:border-[#d4af37] focus:outline-none"
              />
              <textarea
                required
                rows={4}
                placeholder="How can we help you? (Table inquiry, catering, general question...)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] focus:border-[#d4af37] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#d4af37] text-[#0d0705] font-bold text-xs uppercase tracking-wider hover:bg-[#ffe082] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send Direct Message
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};

export default Contact;
