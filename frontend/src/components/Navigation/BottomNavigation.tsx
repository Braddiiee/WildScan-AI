/**
 * WildScan AI - Bottom Navigation Component
 * 
 * Main navigation component with 5 tabs: Home, Favorites, Scan, Chat, Profile
 * Includes active state indicators and smooth transitions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Bookmark, Camera, MessageCircle, User } from 'lucide-react';
import type { TabType  } from '../../types';

interface BottomNavigationProps {
    currentTab: TabType;
    onTabChange: (tab: TabType) => void;
}

const tabs = [
    { id: 'home' as TabType, icon: Home, label: 'Home' },
    { id: 'favorites' as TabType, icon: Bookmark, label: 'Favorites' },
    { id: 'scan' as TabType, icon: Camera, label: 'Scan' },
    { id: 'chat' as TabType, icon: MessageCircle, label: 'Chat' },
    { id: 'profile' as TabType, icon: User, label: 'Profile' }
];

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
    currentTab,
    onTabChange
}) => {
    return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 px-4 py-2 z-50 pb-safe">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center p-2 rounded-lg transition-colors"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.1 : 1,
                  color: isActive ? '#4ade80' : '#9ca3af'
                }}
                transition={{ duration: 0.2 }}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </motion.div>
              
              {/* Active indicator dot */}
              {isActive && (
                <motion.div
                  className="w-1 h-1 bg-green-400 rounded-full mt-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
    )
}