/**
 * WildScan AI - Home Screen Component
 * 
 * TikTok-style video feed showing animals with sound controls and interaction buttons.
 * Users can scroll through different animals, play/pause sounds, and interact.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Volume2, VolumeX, Bookmark, Search } from 'lucide-react';
import { ALL_ANIMALS } from '../../data/animals';
import type { Animal } from '../../types';

interface HomeScreenProps {
  onAnimalSelect: (animalId: string) => void;
  onToggleFavorite: (animalId: string) => void;
  isFavorited: (animalId: string) => boolean;
  onNavigateToExplore: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onAnimalSelect,
  onToggleFavorite,
  isFavorited,
  onNavigateToExplore
}) => {
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const handleVideoTap = (animalId: string) => {
    if (playingAudio === animalId) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(animalId);
    }
  };

  const handleShare = (animal: Animal) => {
    if (navigator.share) {
      navigator.share({
        title: `Check out this ${animal.name}!`,
        text: animal.description,
        url: window.location.href
      });
    }
  };

  return (
    <div className="h-full bg-black overflow-y-auto snap-y snap-mandatory">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">WildScan</h1>
          <button
            onClick={onNavigateToExplore}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
          >
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* Animal Videos */}
      <div className="pt-20">
        {ALL_ANIMALS.map((animal, index) => (
          <motion.div
            key={animal.id}
            className="relative h-screen w-full snap-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Background Video/Image */}
            <div 
              className="absolute inset-0 cursor-pointer"
              onClick={() => handleVideoTap(animal.id)}
            >
              <img
                src={animal.imageUrl}
                alt={animal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              
              {/* Audio indicator */}
              <div className="absolute top-4 right-4">
                {playingAudio === animal.id ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-2"
                  >
                    <Volume2 className="text-white" size={24} />
                  </motion.div>
                ) : (
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <VolumeX className="text-white" size={24} />
                  </div>
                )}
              </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pb-24">
              <div className="flex items-end justify-between">
                {/* Animal Info */}
                <div className="flex-1 mr-4">
                  <motion.h2 
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {animal.name}
                  </motion.h2>
                  <motion.p 
                    className="text-gray-200 italic mb-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {animal.scientificName}
                  </motion.p>
                  <motion.p 
                    className="text-gray-300 text-sm leading-relaxed mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {animal.description}
                  </motion.p>
                  
                  <motion.button
                    onClick={() => onAnimalSelect(animal.id)}
                    className="text-white underline text-sm"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Learn more...
                  </motion.button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                  <motion.button
                    onClick={() => onToggleFavorite(animal.id)}
                    className={`p-3 rounded-full backdrop-blur-sm ${
                      isFavorited(animal.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/20 text-white'
                    }`}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Heart size={24} fill={isFavorited(animal.id) ? 'currentColor' : 'none'} />
                  </motion.button>

                  <motion.button
                    onClick={() => handleShare(animal)}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Share2 size={24} />
                  </motion.button>

                  <motion.button
                    onClick={() => onToggleFavorite(animal.id)}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Bookmark size={24} fill={isFavorited(animal.id) ? 'currentColor' : 'none'} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};