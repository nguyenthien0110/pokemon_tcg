import axios from 'axios';
import { CardData, PokemonOption } from '../hooks/usePokemonSearch';

const API_BASE_URL = 'https://api.pokemontcg.io/v2';

interface CardResponse {
  data: {
    id: string;
    name: string;
  }[];
}

interface CardDetailResponse {
  data: CardData;
}

export const getPokemonCardList = async (): Promise<PokemonOption[]> => {
  const response = await axios.get<CardResponse>(`${API_BASE_URL}/cards?select=id,name`);
  return response.data.data.map((card) => ({
    id: card.id,
    name: card.name,
  }));
};

export const getPokemonCardById = async (id: string): Promise<CardData> => {
  const response = await axios.get<CardDetailResponse>(`${API_BASE_URL}/cards/${id}`);
  return response.data.data;
};
