/**
 * WildScan AI - Explore Screen Component
 * 
 * Main exploration interface with search, categories, featured animals, and top 100 list.
 * Includes visual category cards and dynamic content sections.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Cat, Bird, Zap, Waves, Fish } from 'lucide-react';
import type { AnimalCategory } from '../../types';
import { FEATURED_ANIMALS, TOP_ANIMALS, searchAnimals } from '../../data/animals';
import { CategoryFilter } from './CategoryFilter';
import { AnimalCard } from './AnimalCard';

interface ExploreScreenProps {
  onAnimalSelect: (animalId: string) => void;
}

const categories: { id: AnimalCategory | 'all'; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { id: 'all', label: 'All', icon: Globe },
  { id: 'mammals', label: 'Mammals', icon: Cat },
  { id: 'birds', label: 'Birds', icon: Bird },
  { id: 'reptiles', label: 'Reptiles', icon: Zap },
  { id: 'amphibians', label: 'Amphibians', icon: Waves },
  { id: 'fish', label: 'Fish', icon: Fish }
];

export const ExploreScreen: React.FC<ExploreScreenProps> = ({ onAnimalSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<AnimalCategory | 'all'>('all');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // In production, this would trigger an API call
    const results = searchAnimals(query, selectedCategory === 'all' ? undefined : selectedCategory);
    console.log('Search results:', results);
  };

  return (
    <div className="h-full bg-white overflow-y-auto pb-20">
      {/* Header */}
      <div className="p-6 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Explore</h1>
        
        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for animals..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Category filters */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* Content sections */}
      <div className="px-6 space-y-8">
        {/* Featured section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured</h2>
          <div className="space-y-4">
            {FEATURED_ANIMALS.map((featured, index) => (
              <motion.div
                key={featured.animalId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimalCard
                  title={featured.title}
                  subtitle={featured.subtitle}
                  imageUrl={featured.imageUrl}
                  onSelect={() => onAnimalSelect(featured.animalId)}
                  featured={true}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Top 100 section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Top 100</h2>
          <div className="space-y-4">
            {TOP_ANIMALS.map((animal, index) => (
              <motion.div
                key={animal.animalId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimalCard
                  title={animal.title}
                  subtitle={animal.subtitle}
                  imageUrl={animal.imageUrl}
                  onSelect={() => onAnimalSelect(animal.animalId)}
                  featured={false}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recently Added section (placeholder for future) */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recently Added</h2>
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="text-gray-400 mb-2">🔄</div>
            <p className="text-gray-600">New animals coming soon!</p>
            <p className="text-sm text-gray-500 mt-1">
              We're constantly adding new species to our database
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};