import api from './apiService';
import { Bot } from '../models/api.model';

export const fetchBots = async (): Promise<Bot[]> => {
  try {
    const response = await api.get<Bot[]>('/bot/list');
    return response.data;
  } catch (error) {
    console.error('Error fetching bots:', error);
    throw error;
  }
};
