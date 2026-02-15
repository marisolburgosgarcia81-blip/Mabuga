
import React, { useState, useEffect, useCallback } from 'react';
import { ChatBox } from './components/ChatBox';
import { DonationAlert } from './components/DonationAlert';
import { SHOP_ITEMS, MAP_DETAILS } from './constants';
import { ShopItem, Player, GameEvent } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<'game' | 'shop' | 'map'>('game');
  const [aura, setAura] = useState(1500);
  const [activeAlert, setActiveAlert] = useState<{ donor: string, amount: number, event: string } | null>(null);
  const [gravityFlipped, setGravityFlipped] = useState(false);
  const [players, setPlayers] = useState<Player[]>([
    { id: '1', name: 'SigmaMale_2024', aura: 9000, skin: '🗿', isSigma: true },
    { id: '2', name: 'SkibidiFan', aura: 50, skin: '💩', isSigma: false },
    { id: '3', name: 'RizzlerKing', aura: 4500, skin: '🤫', isSigma: true }
  ]);

  const triggerDonation = useCallback(() => {
    const events = ["GRAVITÀ INVERTITA", "PIOGGIA DI MOAI", "MAXI-BAN DI MASSA (SCHERZO)", "AURA DRAIN"];
    setActiveAlert({
      donor: "X_FanumTaxer_X",
      amount: 49.99,
      event: events[Math.floor(Math.random() * events.length)]
    });
    setGravityFlipped(true);
    setTimeout(() => setGravityFlipped(false), 8000);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col md:flex-row transition-all duration-700 ${gravityFlipped ? 'rotate-180 brightness-125' : ''}`}>
      
      {/* Sidebar Navigation */}
      <nav className="w-full md:w-20 bg-zinc-900 border-r border-white/10 flex flex-row md:flex-col items-center py-4 space-x-4 md:space-x-0 md:space-y-8 z-40 justify-center md:justify-start">
        <button onClick={() => setView('game')} className={`p-3 rounded-xl ${view === 'game' ? 'bg-purple-600' : 'hover:bg-white/10'}`}>🎮</button>
        <button onClick={() => setView('shop')} className={`p-3 rounded-xl ${view === 'shop' ? 'bg-purple-600' : 'hover:bg-white/10'}`}>🛍️</button>
        <button onClick={() => setView('map')} className={`p-3 rounded-xl ${view === 'map' ? 'bg-purple-600' : 'hover:bg-white/10'}`}>🗺️</button>
        <div className="flex-1 hidden md:block" />
        <div className="text-xs font-bold text-yellow-400 rotate-0 md:-rotate-90 whitespace-nowrap">SIGMA PASS</div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex flex-col">
        {/* Header HUD */}
        <header className="p-4 flex justify-between items-center bg-black/50 backdrop-blur-md z-30">
          <div>
            <h1 className="font-bungee text-2xl glitch-text">OHIO MAYHEM</h1>
            <p className="text-[10px] tracking-[0.2em] text-zinc-400">ABSOLUTE CINEMA • V0.69</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-end">
              <span className="text-xs text-zinc-500">IL TUO RANK</span>
              <span className="text-lg font-black text-purple-400">MASTER RIZZLER</span>
            </div>
            <div className="bg-zinc-800 px-4 py-2 rounded-full flex items-center space-x-2 border border-white/20">
              <span className="text-yellow-400 font-bold">✨ {aura.toLocaleString()} AURA</span>
            </div>
          </div>
        </header>

        {/* View Rendering */}
        <div className="flex-1 p-6 overflow-y-auto">
          {view === 'game' && (
            <div className="h-full flex flex-col">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.map(p => (
                  <div key={p.id} className="relative group bg-zinc-900/50 p-6 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all">
                    <div className="absolute top-4 right-4 text-4xl">{p.skin}</div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl flex items-center space-x-2">
                        <span>{p.name}</span>
                        {p.isSigma && <span className="bg-yellow-500 text-black text-[10px] px-1 rounded">SIGMA</span>}
                      </h3>
                      <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full" style={{ width: `${(p.aura / 10000) * 100}%` }} />
                      </div>
                      <span className="text-xs text-zinc-500">Aura: {p.aura}</span>
                    </div>
                    {/* Ragdoll Preview */}
                    <div className="mt-8 h-40 bg-black/40 rounded-2xl flex items-center justify-center border-2 border-dashed border-white/10 group-hover:border-purple-500/30">
                       <div className="animate-bounce text-6xl">🤸</div>
                    </div>
                  </div>
                ))}
                
                <div 
                  onClick={triggerDonation}
                  className="cursor-pointer bg-gradient-to-br from-yellow-500/20 to-orange-600/20 p-6 rounded-3xl border-2 border-yellow-500/50 flex flex-col items-center justify-center space-y-4 hover:scale-105 transition-transform"
                >
                  <div className="text-6xl">💸</div>
                  <h3 className="font-bungee text-center">FAI UNA DONAZIONE (DROP-A-MEME)</h3>
                  <p className="text-xs text-center text-zinc-400">Cambia la fisica del server istantaneamente!</p>
                </div>
              </div>

              {/* System Info */}
              <div className="mt-8 p-4 bg-red-900/20 border border-red-500/30 rounded-xl text-xs flex items-center space-x-4">
                <span className="bg-red-500 text-white px-2 py-0.5 rounded font-bold">WARNING</span>
                <p>ANOMALIA OHIO RILEVATA: La gravità potrebbe subire variazioni spontanee. Livello Rizz critico.</p>
              </div>
            </div>
          )}

          {view === 'shop' && (
            <div className="space-y-8 pb-10">
              <h2 className="text-4xl font-black font-bungee">SHOP: FLEXA L'AURA</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {SHOP_ITEMS.map(item => (
                  <div key={item.id} className="bg-zinc-900 p-6 rounded-2xl border border-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-purple-400">{item.category}</span>
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <p className="text-xs text-zinc-500 leading-tight">{item.description}</p>
                    </div>
                    <button 
                      className="mt-6 w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-bold text-sm"
                      onClick={() => setAura(prev => Math.max(0, prev - item.price))}
                    >
                      {item.price} AURA
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {view === 'map' && (
            <div className="max-w-4xl space-y-6">
              <div className="relative h-64 w-full rounded-3xl overflow-hidden group">
                 <img src="https://picsum.photos/seed/ohio/1200/600" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-700" alt="Map Preview" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                 <div className="absolute bottom-6 left-6">
                    <h2 className="text-5xl font-black font-bungee">{MAP_DETAILS.name}</h2>
                    <p className="text-zinc-300 max-w-lg mt-2">{MAP_DETAILS.description}</p>
                 </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MAP_DETAILS.landmarks.map(l => (
                  <div key={l.name} className="bg-zinc-900 p-5 rounded-xl border-l-4 border-purple-500">
                    <h5 className="font-bold text-purple-400">{l.name}</h5>
                    <p className="text-xs text-zinc-500 mt-1">{l.effect}</p>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-zinc-900 rounded-3xl">
                <h4 className="font-bungee mb-4">LOGICA DI GIOCO: DONAZIONE GRAVITÀ</h4>
                <div className="space-y-4 font-mono text-sm text-green-400">
                  <div className="p-2 border border-green-500/30 rounded">1. DONATION_EVENT -> API_CALL(STRIPE/ROBUX)</div>
                  {/* Fixed line below: Wrapping the text containing curly braces in a string to avoid evaluation as a JS object. */}
                  <div className="p-2 border border-green-500/30 rounded">{"2. SUCCESS -> BROADCAST(\"physics:flip\", { duration: 5000 })"}</div>
                  <div className="p-2 border border-green-500/30 rounded">3. CLIENT_RECEIVE -> world.gravity.y = 9.81 (Invertito)</div>
                  <div className="p-2 border border-green-500/30 rounded">4. TRIGGER_UI -> ShowDonationAlert(donor, amount)</div>
                  <div className="p-2 border border-green-500/30 rounded">5. COOLDOWN -> Resume normal gravity.</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Right Chat Sidebar */}
      <aside className="w-full md:w-80 border-l border-white/10 z-20">
        <ChatBox />
      </aside>

      {/* Overlays */}
      {activeAlert && (
        <DonationAlert 
          donor={activeAlert.donor} 
          amount={activeAlert.amount} 
          event={activeAlert.event} 
          onComplete={() => setActiveAlert(null)} 
        />
      )}
    </div>
  );
};

export default App;
