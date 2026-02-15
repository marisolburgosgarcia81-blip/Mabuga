
import React from 'react';
import { ShopItem } from './types';

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'gigachad',
    name: 'Maschera GigaChad',
    price: 500,
    category: 'Skin',
    description: 'Mascella squadrata +1000 Aura. Zoom drammatico incluso.',
    icon: '🗿'
  },
  {
    id: 'npc-skin',
    name: 'Costume NPC',
    price: 300,
    category: 'Skin',
    description: 'Muoviti a scatti e trolla i pro.',
    icon: '🚶'
  },
  {
    id: 'sigma-aura',
    name: 'Aura Sigma Grindset',
    price: 1000,
    category: 'Aura',
    description: 'Lo schermo diventa B/N e parte musica Phonk.',
    icon: '🔥'
  },
  {
    id: 'glitch-aura',
    name: 'Aura Errore di Sistema',
    price: 750,
    category: 'Aura',
    description: 'Sfarfalla visivamente come se il server stesse esplodendo.',
    icon: '👾'
  },
  {
    id: 'mewing-walk',
    name: 'Camminata Mewing',
    price: 400,
    category: 'Emote',
    description: 'Cammina indicando la tua mascella leggendaria.',
    icon: '🤫'
  }
];

export const MAP_DETAILS = {
  name: "The Ohio Mall: Sigma Square",
  description: "Una mappa caotica situata in un centro commerciale distopico. Scale mobili che portano nel vuoto, fontane piene di succo di Skibidi e cartelloni pubblicitari che proiettano meme in loop.",
  landmarks: [
    { name: "La Fontana Skibidi", effect: "Dona Aura rigenerativa se ci balli dentro." },
    { name: "Il Corridoio dei Backrooms", effect: "Teletrasporto casuale se entri nel muro sbagliato." },
    { name: "L'Angolo del Mewing", effect: "Zona di silenzio assoluto; chi parla perde Aura." }
  ]
};
