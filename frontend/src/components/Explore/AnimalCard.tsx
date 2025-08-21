/**
 * WildScan AI - Animal Card Component
 * 
 * Reusable card component for displaying animals in lists with images and info.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

interface AnimalCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  onSelect: () => void;
  featured?: boolean;
}

export const AnimalCard: React.FC<AnimalCardProps> = ({
  title,
  subtitle,
  imageUrl,
  onSelect,
  featured = false
}) => {
  return (
    <motion.div
      onClick={onSelect}
      className={`relative overflow-hidden rounded-lg cursor-pointer ${
        featured ? 'h-48' : 'h-32'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-xl mb-1">{title}</h3>
        <p className="text-gray-200 text-sm italic">{subtitle}</p>
      </div>
      
      {/* View icon */}
      <div className="absolute top-4 right-4">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
          <Eye className="text-white" size={20} />
        </div>
      </div>
    </motion.div>
  );
};