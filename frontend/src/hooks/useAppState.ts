/**
 * WildScan AI - Application State Hook
 * 
 * Central state management for the WildScan AI application.
 * Handles user preferences, statistics, favorites, and current tab state.
 * Uses localStorage for persistence until backend integration.
 */

import { useLocalStorage } from './useLocalStorage';
import type { TabType, UserStats, AppSettings } from '../types';

// Default user statistics
const DEFAULT_STATS: UserStats = {
  totalScans: 127,
  uniqueAnimalsFound: 23,
  chatSessions: 20,
  favoritesCount: 0
};

// Default app settings
const DEFAULT_SETTINGS: AppSettings = {
  language: 'English',
  textSize: 'medium',
  darkMode: false,
  notifications: true
};

export function useAppState() {
  // Current active tab (persisted across sessions)
  const [currentTab, setCurrentTab] = useLocalStorage<TabType>('wildscan-current-tab', 'home');
  
  // User statistics (incremented during demo usage)
  const [userStats, setUserStats] = useLocalStorage<UserStats>('wildscan-user-stats', DEFAULT_STATS);
  
  // App settings and preferences
  const [settings, setSettings] = useLocalStorage<AppSettings>('wildscan-settings', DEFAULT_SETTINGS);
  
  // User's favorite animals (array of animal IDs)
  const [favorites, setFavorites] = useLocalStorage<string[]>('wildscan-favorites', []);
  
  // Chat sidebar visibility
  const [isChatSidebarOpen, setIsChatSidebarOpen] = useLocalStorage<boolean>('wildscan-chat-sidebar', false);

  // Functions to update statistics
  const incrementScans = () => {
    setUserStats(prev => ({
      ...prev,
      totalScans: prev.totalScans + 1
    }));
  };

  const incrementChatSessions = () => {
    setUserStats(prev => ({
      ...prev,
      chatSessions: prev.chatSessions + 1
    }));
  };

  const addUniqueAnimal = (animalId: string) => {
    // This would check against a list of discovered animals in production
    setUserStats(prev => ({
      ...prev,
      uniqueAnimalsFound: prev.uniqueAnimalsFound + 1
    }));
  };

  // Favorites management
  const toggleFavorite = (animalId: string) => {
    setFavorites(prev => {
      const isFavorited = prev.includes(animalId);
      const newFavorites = isFavorited 
        ? prev.filter(id => id !== animalId)
        : [...prev, animalId];
      
      // Update favorites count in stats
      setUserStats(prevStats => ({
        ...prevStats,
        favoritesCount: newFavorites.length
      }));
      
      return newFavorites;
    });
  };

  const isFavorited = (animalId: string): boolean => {
    return favorites.includes(animalId);
  };

  // Settings management
  const updateSetting = <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const toggleDarkMode = () => {
    updateSetting('darkMode', !settings.darkMode);
  };

  return {
    // Current state
    currentTab,
    userStats,
    settings,
    favorites,
    isChatSidebarOpen,
    
    // Actions
    setCurrentTab,
    incrementScans,
    incrementChatSessions,
    addUniqueAnimal,
    toggleFavorite,
    isFavorited,
    updateSetting,
    toggleDarkMode,
    setIsChatSidebarOpen,
    
    // Computed values
    totalFavorites: favorites.length
  };
}