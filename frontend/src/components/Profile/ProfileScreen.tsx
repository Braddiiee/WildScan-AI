/**
 * WildScan AI - Profile Screen Component
 * 
 * User profile with statistics, settings, and account management.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, ChevronRight } from 'lucide-react';
import type { UserStats, AppSettings } from '../../types';
import { ProfileStats } from './ProfileStats';
import { SettingsSection } from './SettingsSection';
import { UpgradeModal } from './UpgradeModal';

interface ProfileScreenProps {
  userStats: UserStats;
  settings: AppSettings;
  onUpdateSetting: <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => void;
  onToggleDarkMode: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  userStats,
  settings,
  onUpdateSetting,
  onToggleDarkMode
}) => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  return (
    <div className="h-full bg-gray-50 overflow-y-auto pb-20">
      {/* Profile Information Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white m-4 rounded-2xl border-2 border-green-200 p-6"
      >
        <div className="flex items-center gap-4 mb-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={32} className="text-gray-400" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
              FREE Plan
            </div>
          </div>
          
          {/* User Info */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Full name</p>
                <p className="font-semibold">Nature Explorer</p>
              </div>
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-semibold">explorer@wildscan.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Member since */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Calendar size={16} />
          <span>Member since January 2024</span>
        </div>
        
        {/* Edit Profile Button */}
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Edit Profile
        </motion.button>
      </motion.div>

      {/* Account Statistics Card */}
      <ProfileStats userStats={userStats} />

      {/* Settings Section */}
      <div className="mx-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
        
        <SettingsSection
          settings={settings}
          onUpdateSetting={onUpdateSetting}
          onToggleDarkMode={onToggleDarkMode}
          onShowUpgrade={() => setShowUpgradeModal(true)}
        />
      </div>

      {/* Footer Links */}
      <div className="mx-4 mb-8 space-y-2">
        <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg hover:bg-gray-50">
          <span className="text-gray-700">Privacy Policy</span>
          <ChevronRight size={20} className="text-gray-400" />
        </button>
        
        <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg hover:bg-gray-50">
          <span className="text-gray-700">Terms of Service</span>
          <ChevronRight size={20} className="text-gray-400" />
        </button>
      </div>

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <UpgradeModal onClose={() => setShowUpgradeModal(false)} />
      )}
    </div>
  );
};