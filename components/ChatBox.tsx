
import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { generateBrainrotChat } from '../services/geminiService';

export const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const brainrot = await generateBrainrotChat("Chaos in Ohio Mall");
      const newMsgs = brainrot.map((text, i) => ({
        id: Math.random().toString(),
        user: `User_${Math.floor(Math.random() * 999)}`,
        text,
        isDonation: Math.random() > 0.9
      }));
      setMessages(prev => [...prev.slice(-20), ...newMsgs]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-black/80 border-l border-white/20 h-full flex flex-col w-full md:w-80">
      <div className="p-4 bg-purple-900/40 border-b border-white/20 font-bungee text-xs flex justify-between">
        <span>LIVE CHAT (OHIO SERVER)</span>
        <span className="text-red-500 animate-pulse">● REC</span>
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-2 text-sm">
        {messages.map((m) => (
          <div key={m.id} className={`${m.isDonation ? 'bg-yellow-500/20 p-2 rounded border border-yellow-500' : ''}`}>
            <span className="font-black text-blue-400 mr-2">{m.user}:</span>
            <span className={`${m.isDonation ? 'text-yellow-400 font-bold' : 'text-white'}`}>{m.text}</span>
          </div>
        ))}
      </div>
      <div className="p-2 border-t border-white/20">
        <input 
          type="text" 
          placeholder="Spamma brainrot qui..." 
          className="w-full bg-white/10 p-2 rounded text-xs focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );
};
