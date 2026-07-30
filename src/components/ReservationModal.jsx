import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Sparkles, MapPin, CheckCircle2, QrCode, Share2, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';

const ReservationModal = () => {
  const { isReservationOpen, setIsReservationOpen, showToast } = useTheme();
  
  const [step, setStep] = useState(1);
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-07-31');
  const [time, setTime] = useState('19:30');
  const [zone, setZone] = useState('Glasshouse Garden');
  const [occasion, setOccasion] = useState('Casual Dining');
  const [notes, setNotes] = useState('');
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });
  const [bookingConfirmed, setBookingConfirmed] = useState(null);

  if (!isReservationOpen) return null;

  const seatingZones = [
    { name: 'Glasshouse Garden', desc: 'Air-conditioned conservatory with indoor tropical plants & natural skylights.' },
    { name: 'Outdoor Courtyard', desc: 'Pet-friendly open-air lounge surrounded by amber fountain lights.' },
    { name: 'Private VIP Lounge', desc: 'Plush velvet couches & secluded acoustic isolation for intimate dining.' },
    { name: 'Barista Counter', desc: 'Front-row view of champion baristas roasting & crafting coffee art.' }
  ];

  const timeSlots = ['12:00 PM', '01:30 PM', '04:00 PM', '06:30 PM', '07:30 PM', '08:45 PM', '10:00 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBookingId = 'ABC-RES-' + Math.floor(1000 + Math.random() * 9000);
    const result = {
      bookingId: newBookingId,
      guests,
      date,
      time,
      zone,
      occasion,
      name: contact.name || 'Valued Guest',
      phone: contact.phone || '+91 98290 12345'
    };

    setBookingConfirmed(result);
    setStep(3);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });

    showToast('✨ Table Successfully Reserved!', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={() => {
          setIsReservationOpen(false);
          setBookingConfirmed(null);
          setStep(1);
        }}
        className="fixed inset-0 bg-[#0d0705]/85 backdrop-blur-md animate-fade-in"
      />

      <div className="relative w-full max-w-xl bg-[#170d09] border border-[#c9a687]/30 rounded-3xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="p-6 border-b border-[#c9a687]/15 bg-gradient-to-r from-[#261610] to-[#170d09] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#f5ebe0]">Reserve Your Table</h3>
              <p className="text-xs text-[#c9a687]">C-Scheme, Jaipur • Instant VIP Pass</p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsReservationOpen(false);
              setBookingConfirmed(null);
              setStep(1);
            }}
            className="p-2 rounded-full hover:bg-[#261610] text-[#c9a687] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">

          {bookingConfirmed ? (
            /* Digital VIP Ticket Pass */
            <div className="space-y-6 animate-fade-in text-center">
              <div className="w-16 h-16 bg-[#d4af37]/20 border border-[#d4af37] rounded-full flex items-center justify-center mx-auto text-[#d4af37]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="font-serif-luxury text-2xl font-bold text-[#f5ebe0]">Reservation Confirmed</h4>
                <p className="text-xs text-[#c9a687] mt-1">Present this digital ticket upon arrival at C-Scheme</p>
              </div>

              {/* Digital Pass Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#261610] to-[#0d0705] border border-[#d4af37]/40 relative text-left shadow-2xl space-y-4">
                <div className="flex justify-between items-start border-b border-[#c9a687]/20 pb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold">VIP Dining Ticket</span>
                    <h5 className="font-serif-luxury text-lg font-bold text-[#f5ebe0]">{bookingConfirmed.name}</h5>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#d4af37] bg-[#d4af37]/10 px-2 py-1 rounded border border-[#d4af37]/30">
                    {bookingConfirmed.bookingId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#c9a687] block">Date & Time</span>
                    <span className="font-semibold text-[#f5ebe0]">{bookingConfirmed.date} at {bookingConfirmed.time}</span>
                  </div>
                  <div>
                    <span className="text-[#c9a687] block">Guests</span>
                    <span className="font-semibold text-[#f5ebe0]">{bookingConfirmed.guests} Person(s)</span>
                  </div>
                  <div>
                    <span className="text-[#c9a687] block">Seating Zone</span>
                    <span className="font-semibold text-[#d4af37]">{bookingConfirmed.zone}</span>
                  </div>
                  <div>
                    <span className="text-[#c9a687] block">Occasion</span>
                    <span className="font-semibold text-[#f5ebe0]">{bookingConfirmed.occasion}</span>
                  </div>
                </div>

                {/* QR Code Graphic Simulation */}
                <div className="pt-3 border-t border-[#c9a687]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-[#c9a687]">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Janpath, C-Scheme, Jaipur</span>
                  </div>
                  <div className="p-1.5 bg-white rounded-lg">
                    <QrCode className="w-10 h-10 text-black" />
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsReservationOpen(false);
                  setBookingConfirmed(null);
                  setStep(1);
                }}
                className="w-full py-3 rounded-xl bg-[#d4af37] text-[#0d0705] font-bold text-xs uppercase tracking-wider hover:bg-[#ffe082] transition-colors"
              >
                Close Ticket
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Guests Count Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#c9a687] mb-2 uppercase tracking-wider">
                  Number of Guests
                </label>
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`w-10 h-10 rounded-xl font-bold text-xs shrink-0 transition-all ${
                        guests === num
                          ? 'bg-[#d4af37] text-[#0d0705] shadow-lg shadow-[#d4af37]/20 scale-105'
                          : 'bg-[#0d0705] border border-[#c9a687]/20 text-[#f5ebe0] hover:border-[#c9a687]/50'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#c9a687] mb-1.5 uppercase tracking-wider">
                    Select Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#c9a687] mb-1.5 uppercase tracking-wider">
                    Preferred Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] focus:outline-none focus:border-[#d4af37]"
                  >
                    {timeSlots.map(t => (
                      <option key={t} value={t} className="bg-[#0d0705] text-[#f5ebe0]">{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Zone Radio Cards */}
              <div>
                <label className="block text-xs font-semibold text-[#c9a687] mb-2 uppercase tracking-wider">
                  Select Atmosphere & Zone
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {seatingZones.map((z) => (
                    <div
                      key={z.name}
                      onClick={() => setZone(z.name)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        zone === z.name
                          ? 'bg-[#261610] border-[#d4af37] text-[#f5ebe0]'
                          : 'bg-[#0d0705] border-[#c9a687]/20 text-[#c9a687]/80 hover:border-[#c9a687]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-[#f5ebe0]">{z.name}</span>
                        {zone === z.name && <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />}
                      </div>
                      <p className="text-[10px] text-[#c9a687]/70 mt-1 leading-tight">{z.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info Inputs */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] placeholder-[#c9a687]/40 focus:outline-none focus:border-[#d4af37]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (+91)"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0d0705] border border-[#c9a687]/20 text-xs text-[#f5ebe0] placeholder-[#c9a687]/40 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c9a687] via-[#d4af37] to-[#ffe082] text-[#0d0705] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#d4af37]/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                Confirm Instant VIP Reservation
              </button>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
