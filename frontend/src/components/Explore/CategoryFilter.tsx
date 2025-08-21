/**
 * WildScan AI - Category Filter Component
 * 
 * Visual category selection with Lucide icons for animal filtering.
 */

import React from 'react';
import { motion } from 'framer-motion';
import type { AnimalCategory } from '../../types';

interface CategoryFilterProps {
  categories: { id: AnimalCategory | 'all'; label: string; icon: React.ComponentType<{ size?: number }> }[];
  selectedCategory: AnimalCategory | 'all';
  onCategoryChange: (category: AnimalCategory | 'all') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selectedCategory === category.id;
        
        return (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              isSelected
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={16} />
            <span className="text-sm font-medium">{category.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};