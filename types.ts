
export enum GameEvent {
  GRAVITY_FLIP = 'GRAVITY_FLIP',
  MEME_DROP = 'MEME_DROP',
  AURA_BOOST = 'AURA_BOOST',
  SPEED_RUN = 'SPEED_RUN'
}

export interface Player {
  id: string;
  name: string;
  aura: number;
  skin: string;
  isSigma: boolean;
}

export interface ShopItem {
  id: string;
  name: string;
  price: number;
  category: 'Skin' | 'Aura' | 'Emote';
  description: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  user: string;
  text: string;
  isDonation: boolean;
  amount?: number;
}
