/**
 * WildScan AI - Profile Statistics Component
 * 
 * Displays user statistics with colorful visual indicators.
 */

import React from 'react';
import { motion } from 'framer-motion';
import type { UserStats } from '../../types';

interface ProfileStatsProps {
  userStats: UserStats;
}

export const ProfileStats: React.FC<ProfileStatsProps> = ({ userStats }) => {
  const stats = [
    {
      value: userStats.totalScans,
      label: 'Scans',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      value: userStats.uniqueAnimalsFound,
      label: 'Animals',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      value: userStats.chatSessions,
      label: 'Chat Sessions',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white m-4 rounded-2xl border-2 border-green-200 p-6"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-4">Account Statistics</h2>
      
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className={`text-center p-4 rounded-xl ${stat.bgColor}`}
          >
            <div className={`text-3xl font-bold ${stat.color} mb-1`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};