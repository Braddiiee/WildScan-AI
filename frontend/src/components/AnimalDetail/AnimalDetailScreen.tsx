/**
 * WildScan AI - Animal Detail Screen Component
 * 
 * Comprehensive animal information display with conservation status,
 * facts, similar animals, and action buttons.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Share2, ExternalLink, AlertTriangle } from 'lucide-react';
import type { Animal } from '../../types';
import { getConservationBadge } from '../../utils/conservationColors';
import { getSimilarAnimals } from '../../data/animals';

interface AnimalDetailScreenProps {
  animal: Animal;
  isFavorited: boolean;
  onToggleFavorite: () => void;
  onBack: () => void;
  onReportIncorrect: () => void;
}

export const AnimalDetailScreen: React.FC<AnimalDetailScreenProps> = ({
  animal,
  isFavorited,
  onToggleFavorite,
  onBack,
  onReportIncorrect
}) => {
  const conservationBadge = getConservationBadge(animal.conservationStatus);
  const similarAnimals = getSimilarAnimals(animal.similarAnimals);

  return (
    <div className="h-full bg-white overflow-y-auto pb-20">
      {/* Hero Image Section */}
      <div className="relative h-80">
        <img
          src={animal.imageUrl}
          alt={animal.name}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Header controls */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <motion.button
            onClick={onBack}
            className="p-2 bg-black/30 backdrop-blur-sm rounded-full text-white"
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft size={24} />
          </motion.button>
          
          <div className="flex items-center gap-2">
            <motion.button
              onClick={onToggleFavorite}
              className={`p-2 rounded-full backdrop-blur-sm ${
                isFavorited 
                  ? 'bg-red-500 text-white' 
                  : 'bg-black/30 text-white'
              }`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <Heart size={24} fill={isFavorited ? 'currentColor' : 'none'} />
            </motion.button>
            
            <motion.button
              className="p-2 bg-black/30 backdrop-blur-sm rounded-full text-white"
              whileTap={{ scale: 0.9 }}
            >
              <Share2 size={24} />
            </motion.button>
          </div>
        </div>
        
        {/* Animal name overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-3xl font-bold text-white mb-1">{animal.name}</h1>
          <p className="text-gray-200 italic">{animal.scientificName}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Conservation Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div
            className="inline-flex items-center px-4 py-2 rounded-full font-semibold"
            style={{
              backgroundColor: conservationBadge.backgroundColor,
              color: conservationBadge.color
            }}
          >
            {conservationBadge.label}
          </div>
          
          {animal.iucnUrl && (
            <motion.a
              href={animal.iucnUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink size={16} />
              <span className="text-sm">IUCN Red List</span>
            </motion.a>
          )}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-gray-700 leading-relaxed">{animal.description}</p>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Size</h3>
            <p className="text-gray-600 text-sm">{animal.size}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Weight</h3>
            <p className="text-gray-600 text-sm">{animal.weight}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Lifespan</h3>
            <p className="text-gray-600 text-sm">{animal.lifespan}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-1">Category</h3>
            <p className="text-gray-600 text-sm capitalize">{animal.category}</p>
          </div>
        </motion.div>

        {/* Detailed Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Habitat</h3>
            <p className="text-gray-700">{animal.habitat}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Diet</h3>
            <p className="text-gray-700">{animal.diet}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Behavior</h3>
            <p className="text-gray-700">{animal.behavior}</p>
          </div>
        </motion.div>

        {/* Fun Facts */}
        {animal.facts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-semibold text-gray-900 mb-3">Fun Facts</h3>
            <div className="space-y-2">
              {animal.facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">{fact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Similar Animals */}
        {similarAnimals.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-semibold text-gray-900 mb-3">Similar Animals</h3>
            <div className="space-y-3">
              {similarAnimals.map((similar, index) => (
                <motion.div
                  key={similar.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={similar.imageUrl}
                      alt={similar.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{similar.name}</p>
                    <p className="text-sm text-gray-600 italic">{similar.scientificName}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Report Incorrect Identification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="pt-4 border-t border-gray-200"
        >
          <button
            onClick={onReportIncorrect}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-800 text-sm"
          >
            <AlertTriangle size={16} />
            <span>Report Incorrect Identification</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};