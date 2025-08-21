/**
 * WildScan AI - Suggested Prompts Component
 * 
 * Displays suggested conversation starters for new users.
 */

import React from 'react';
import { motion } from 'framer-motion';

interface SuggestedPromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

const SUGGESTED_PROMPTS = [
  "What does a Jaguar eat?",
  "Where do sloths live?",
  "Tell me about poison dart frogs",
  "How do birds migrate?",
  "What makes capybaras special?"
];

export const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({ onSelectPrompt }) => {
  return (
    <div className="px-4 pb-4">
      <div className="flex flex-wrap gap-2">
        {SUGGESTED_PROMPTS.map((prompt, index) => (
          <motion.button
            key={prompt}
            onClick={() => onSelectPrompt(prompt)}
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {prompt}
          </motion.button>
        ))}
      </div>
    </div>
  );
};