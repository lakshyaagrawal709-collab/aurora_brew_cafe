import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [toast, setToast] = useState(null);

  const audioCtxRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainRef = useRef(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => setToast(null), 3500);
  };

  const toggleAudio = () => {
    if (!isPlayingAudio) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
        
        // Generate soothing ambient coffee shop warm drone harmonics
        const osc1 = audioCtxRef.current.createOscillator();
        const osc2 = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(110, audioCtxRef.current.currentTime); // A2 warm pitch
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(164.81, audioCtxRef.current.currentTime); // E3 fifth

        gain.gain.setValueAtTime(0.02, audioCtxRef.current.currentTime); // Very quiet relaxing volume

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc1.start();
        osc2.start();

        oscillatorRef.current = { osc1, osc2 };
        gainRef.current = gain;
        setIsPlayingAudio(true);
        showToast('🎵 Ambient Café Soundscape Enabled', 'success');
      } catch (err) {
        showToast('Audio playback permitted on user interaction', 'warning');
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
      setIsPlayingAudio(false);
      showToast('🔇 Ambient Sound Muted', 'info');
    }
  };

  return (
    <ThemeContext.Provider value={{
      isPlayingAudio,
      toggleAudio,
      isReservationOpen,
      setIsReservationOpen,
      isSearchOpen,
      setIsSearchOpen,
      isAiChatOpen,
      setIsAiChatOpen,
      quickViewItem,
      setQuickViewItem,
      toast,
      showToast
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
