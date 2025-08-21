/**
 * WildScan AI - Upgrade Modal Component
 * 
 * Modal for displaying upgrade options and PRO features.
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown, Zap, Camera, MessageCircle, Star } from 'lucide-react';

interface UpgradeModalProps {
  onClose: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({ onClose }) => {
  const proFeatures = [
    {
      icon: Camera,
      title: 'Unlimited Scans',
      description: 'Scan as many animals as you want without limits'
    },
    {
      icon: MessageCircle,
      title: 'Advanced AI Chat',
      description: 'Get detailed insights and expert-level information'
    },
    {
      icon: Star,
      title: 'Priority Support',
      description: 'Get help faster with dedicated support'
    },
    {
      icon: Zap,
      title: 'Faster Processing',
      description: 'Lightning-fast AI analysis and results'
    }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 text-center border-b border-gray-200">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown className="text-yellow-500" size={28} />
              <h2 className="text-2xl font-bold">Upgrade to PRO</h2>
            </div>
            
            <p className="text-gray-600">
              Unlock the full potential of WildScan AI
            </p>
          </div>

          {/* Features */}
          <div className="p-6">
            <div className="space-y-4 mb-6">
              {proFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  $9.99<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600">Cancel anytime</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <motion.button
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial
              </motion.button>
              
              <button
                onClick={onClose}
                className="w-full text-gray-600 hover:text-gray-800 py-2"
              >
                Maybe later
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};