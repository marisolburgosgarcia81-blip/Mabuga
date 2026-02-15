
import React, { useEffect, useState } from 'react';

interface Props {
  donor: string;
  amount: number;
  event: string;
  onComplete: () => void;
}

export const DonationAlert: React.FC<Props> = ({ donor, amount, event, onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 p-8 rounded-2xl shadow-2xl border-4 border-white animate-bounce text-center">
        <h2 className="text-4xl font-black italic mb-2 font-bungee">DONAZIONE MASSICCIA!</h2>
        <p className="text-2xl font-bold uppercase tracking-widest text-white drop-shadow-lg">
          {donor} ha donato ${amount}!
        </p>
        <div className="mt-4 bg-black p-4 rounded-lg">
          <p className="text-xl text-green-400 font-mono">EVENTO ATTIVATO: {event}</p>
        </div>
      </div>
    </div>
  );
};
