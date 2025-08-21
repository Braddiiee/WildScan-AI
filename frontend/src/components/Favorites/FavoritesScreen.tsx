/**
 * WildScan AI - Favorites Screen Component
 * 
 * Displays user's favorited animals with management options.
 * Uses mock data to show a rich interface even when no favorites exist.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit3, Trash2, Search, Eye } from 'lucide-react';
import { getAnimalById, ALL_ANIMALS } from '../../data/animals';

interface FavoritesScreenProps {
  favorites: string[];
  onAnimalSelect: (animalId: string) => void;
  onToggleFavorite: (animalId: string) => void;
}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = ({
  favorites,
  onAnimalSelect,
  onToggleFavorite
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Always show mock data for a rich interface
  const displayAnimals = favorites.length > 0 
    ? favorites.map(id => getAnimalById(id)).filter(Boolean)
    : ALL_ANIMALS; // Show all animals as mock favorites

  const filteredAnimals = displayAnimals
    .filter(animal => 
      !searchQuery || 
      animal!.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal!.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleRemoveFavorite = (animalId: string) => {
    onToggleFavorite(animalId);
  };

  return (
    <div className="h-full bg-gray-50 dark:bg-gray-900 overflow-y-auto pb-24">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Favorite Animals</h1>
          <motion.button
            onClick={() => setIsEditMode(!isEditMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
              isEditMode
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <Edit3 size={16} />
            {isEditMode ? 'Done' : 'Edit'}
          </motion.button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {favorites.length > 0 
            ? `${favorites.length} ${favorites.length === 1 ? 'animal' : 'animals'} saved`
            : 'Discover and save your favorite animals'
          }
        </p>
        
        {/* Search bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search your favorites..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {filteredAnimals.map((animal, index) => (
            <motion.div
              key={animal!.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => onAnimalSelect(animal!.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={animal!.imageUrl}
                alt={animal!.name}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg mb-1">{animal!.name}</h3>
                <p className="text-gray-200 text-sm italic truncate">{animal!.scientificName}</p>
              </div>
              
              {/* View icon */}
              <div className="absolute top-3 right-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <Eye className="text-white" size={16} />
                </div>
              </div>
              
              {/* Edit mode delete button */}
              {isEditMode && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFavorite(animal!.id);
                  }}
                  className="absolute top-3 left-3 bg-red-500 text-white rounded-full p-2"
                >
                  <Trash2 size={16} />
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};