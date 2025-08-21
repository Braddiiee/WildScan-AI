/**
 * WildScan AI - Animal Result Component
 * 
 * Displays detailed animal information after successful scan.
 * Includes conservation status, facts, and action buttons.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Volume2, ExternalLink, Lightbulb, ArrowLeft } from 'lucide-react';
import type { Animal } from '../../types';
import { getConservationBadge } from '../../utils/conservationColors';

interface AnimalResultProps {
  animal: Animal;
  isFavorited: boolean;
  onToggleFavorite: () => void;
  onBack: () => void;
}

export const AnimalResult: React.FC<AnimalResultProps> = ({
  animal,
  isFavorited,
  onToggleFavorite,
  onBack
}) => {
  const conservationBadge = getConservationBadge(animal.conservationStatus);

  return (
    <div className="h-full bg-black relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={animal.imageUrl}
          alt={animal.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with back button and search */}
        <div className="flex items-center justify-between p-4">
          <button
            onClick={onBack}
            className="text-white p-2 rounded-full bg-black/30 backdrop-blur-sm"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="text-white p-2 rounded-full bg-black/30 backdrop-blur-sm">
            <ExternalLink size={24} />
          </div>
        </div>

        {/* Animal info */}
        <div className="flex-1 flex flex-col justify-end p-6">
          {/* Animal name and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold text-white underline">
                {animal.name}
              </h1>
              <Lightbulb className="text-yellow-400" size={24} />
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              {animal.description}
            </p>
          </motion.div>

          {/* Conservation status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: conservationBadge.backgroundColor,
                color: conservationBadge.color
              }}
            >
              {conservationBadge.label}
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              {/* Audio button */}
              <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                <Volume2 size={24} />
              </button>

              {/* Favorite button */}
              <motion.button
                onClick={onToggleFavorite}
                className={`p-3 rounded-full transition-colors ${
                  isFavorited 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                }`}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                <Heart size={24} fill={isFavorited ? 'currentColor' : 'none'} />
              </motion.button>

              {/* Share button */}
              <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                <Share2 size={24} />
              </button>
            </div>

            {/* More info button */}
            <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};