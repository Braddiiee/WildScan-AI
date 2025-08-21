/**
 * WildScan AI - Main Application Component
 * 
 * Root component that manages the overall app state, navigation, and renders
 * the appropriate screen based on the current tab selection.
 * 
 * Features:
 * - Tab-based navigation with persistent state
 * - Animal scanning simulation with demo notifications
 * - Favorites management with localStorage persistence
 * - Chat interface with conversation history
 * - User profile and settings management
 * - Responsive design optimized for mobile devices
 * - Dark mode support throughout the application
 */

import  { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppState } from './hooks/useAppState';
import { getAnimalById } from './data/animals';
import type { Animal } from './types';

// Component imports
import { BottomNavigation } from './components/Navigation/BottomNavigation';
import { ScanInterface } from './components/Scan/ScanInterface';
import { AnimalResult } from './components/Scan/AnimalResult';
import { ExploreScreen } from './components/Explore/ExploreScreen';
import { FavoritesScreen } from './components/Favorites/FavoritesScreen';
import { ChatScreen } from './components/Chat/ChatScreen';
import { ProfileScreen } from './components/Profile/ProfileScreen';
import { AnimalDetailScreen } from './components/AnimalDetail/AnimalDetailScreen';
import { HomeScreen } from './components/Home/HomeScreen';

function App() {
  // Global app state management
  const {
    currentTab,
    setCurrentTab,
    userStats,
    settings,
    favorites,
    isChatSidebarOpen,
    incrementScans,
    incrementChatSessions,
    addUniqueAnimal,
    toggleFavorite,
    isFavorited,
    updateSetting,
    toggleDarkMode,
    setIsChatSidebarOpen
  } = useAppState();

  // Local component state
  const [scannedAnimal, setScannedAnimal] = useState<Animal | null>(null);
  const [selectedAnimalId, setSelectedAnimalId] = useState<string | null>(null);

  /**
   * Handle successful animal scan completion
   * Updates statistics and shows result screen
   */
  const handleScanComplete = (animal: Animal) => {
    setScannedAnimal(animal);
    incrementScans();
    addUniqueAnimal(animal.id);
  };

  /**
   * Reset scan state and return to scan interface
   */
  const handleScanReset = () => {
    setScannedAnimal(null);
  };

  /**
   * Handle animal selection from explore or favorites
   * Shows detailed animal information
   */
  const handleAnimalSelect = (animalId: string) => {
    setSelectedAnimalId(animalId);
  };

  /**
   * Return to previous screen from animal detail
   */
  const handleBackFromDetail = () => {
    setSelectedAnimalId(null);
  };

  /**
   * Handle reporting incorrect animal identification
   * In production, this would send feedback to improve AI accuracy
   */
  const handleReportIncorrect = () => {
    // TODO: Implement feedback system for AI improvement
    alert('Thank you for your feedback! This helps us improve our AI accuracy.');
  };

  /**
   * Handle tab navigation with state cleanup
   */
  const handleTabChange = (tab: typeof currentTab) => {
    // Clean up any modal states when switching tabs
    if (tab !== currentTab) {
      setScannedAnimal(null);
      setSelectedAnimalId(null);
      setIsChatSidebarOpen(false);
    }
    setCurrentTab(tab);
  };

  /**
   * Navigate to explore screen from home
   */
  const handleNavigateToExplore = () => {
    setCurrentTab('home'); // Keep as home since explore is accessed via search
  };

  /**
   * Render the appropriate screen based on current state
   */
  const renderCurrentScreen = () => {
    // Show animal detail if an animal is selected
    if (selectedAnimalId) {
      const animal = getAnimalById(selectedAnimalId);
      if (animal) {
        return (
          <AnimalDetailScreen
            animal={animal}
            isFavorited={isFavorited(animal.id)}
            onToggleFavorite={() => toggleFavorite(animal.id)}
            onBack={handleBackFromDetail}
            onReportIncorrect={handleReportIncorrect}
          />
        );
      }
    }

    // Render screens based on current tab
    switch (currentTab) {
      case 'home':
        // Check if we should show Home (TikTok-style) or Explore (search-based)
        // For now, we'll show the TikTok-style home feed
        return (
          <HomeScreen
            onAnimalSelect={handleAnimalSelect}
            onToggleFavorite={toggleFavorite}
            isFavorited={isFavorited}
            onNavigateToExplore={handleNavigateToExplore}
          />
        );

      case 'favorites':
        return (
          <FavoritesScreen
            favorites={favorites}
            onAnimalSelect={handleAnimalSelect}
            onToggleFavorite={toggleFavorite}
          />
        );

      case 'scan':
        // Show scan result if animal was scanned, otherwise show scan interface
        if (scannedAnimal) {
          return (
            <AnimalResult
              animal={scannedAnimal}
              isFavorited={isFavorited(scannedAnimal.id)}
              onToggleFavorite={() => toggleFavorite(scannedAnimal.id)}
              onBack={handleScanReset}
            />
          );
        }
        return <ScanInterface onScanComplete={handleScanComplete} />;

      case 'chat':
        return (
          <ChatScreen
            isSidebarOpen={isChatSidebarOpen}
            onToggleSidebar={() => setIsChatSidebarOpen(!isChatSidebarOpen)}
            onIncrementChatSessions={incrementChatSessions}
          />
        );

      case 'profile':
        return (
          <ProfileScreen
            userStats={userStats}
            settings={settings}
            onUpdateSetting={updateSetting}
            onToggleDarkMode={toggleDarkMode}
          />
        );

      default:
        return (
          <HomeScreen
            onAnimalSelect={handleAnimalSelect}
            onToggleFavorite={toggleFavorite}
            isFavorited={isFavorited}
            onNavigateToExplore={handleNavigateToExplore}
          />
        );
    }
  };

  return (
    <div className={`min-h-screen ${settings.darkMode ? 'dark' : ''}`}>
      <div className="h-screen flex flex-col bg-white dark:bg-gray-900">
        {/* Main content area */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentTab}-${selectedAnimalId || 'main'}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {renderCurrentScreen()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation
          currentTab={currentTab}
          onTabChange={handleTabChange}
        />
      </div>
    </div>
  );
}

export default App;