/**
 * WildScan AI - Settings Section Component
 * 
 * App settings with toggles and dropdowns for user preferences.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { AppSettings } from '../../types';

interface SettingsSectionProps {
  settings: AppSettings;
  onUpdateSetting: <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => void;
  onToggleDarkMode: () => void;
  onShowUpgrade: () => void;
}

export const SettingsSection: React.FC<SettingsSectionProps> = ({
  settings,
  onUpdateSetting,
  onToggleDarkMode,
  onShowUpgrade
}) => {
  return (
    <div className="space-y-6">
      {/* Accessibility Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Accessibility</h3>
        
        <div className="space-y-4">
          {/* Language Setting */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Language</span>
            <button 
              onClick={onShowUpgrade}
              className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <span className="text-gray-700 dark:text-gray-300">{settings.language}</span>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          </div>
          
          {/* Text Size Setting */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Text Size</span>
            <button 
              onClick={onShowUpgrade}
              className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <span className="text-gray-700 dark:text-gray-300 capitalize">{settings.textSize}</span>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Display Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Display</h3>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
          <motion.button
            onClick={onToggleDarkMode}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              settings.darkMode ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
              animate={{
                x: settings.darkMode ? 24 : 4
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Notifications</h3>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">Push Notifications</span>
          <motion.button
            onClick={() => onUpdateSetting('notifications', !settings.notifications)}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              settings.notifications ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
              animate={{
                x: settings.notifications ? 24 : 4
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};