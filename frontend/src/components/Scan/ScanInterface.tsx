/**
 * WildScan AI - Scan Interface Component
 * 
 * Main scanning interface with camera simulation, loading states, and results display.
 * Includes guided photo capture hints and demo notifications.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Search, Upload, AlertCircle, Lightbulb } from 'lucide-react';
import  type { Animal, ScanState } from '../../types';
import { getAnimalById } from '../../data/animals';
// import { AnimalResult } from './AnimalResult';

interface ScanInterfaceProps {
  onScanComplete: (animal: Animal) => void;
}

export const ScanInterface: React.FC<ScanInterfaceProps> = ({ onScanComplete }) => {
  const [scanState, setScanState] = useState<ScanState>('idle');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [showHints, setShowHints] = useState(false);

  // Demo animal IDs for random results
  const demoAnimals = ['jaguar-001', 'capybara-001', 'poison-dart-frog-001', 'giant-river-otter-001'];

  const handleScanStart = () => {
    setScanState('capturing');
    setShowHints(true);
    
    // Simulate camera capture
    setTimeout(() => {
      setCapturedImage('https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg');
      setScanState('analyzing');
      setShowHints(false);
      
      // Simulate AI analysis
      setTimeout(() => {
        const randomAnimalId = demoAnimals[Math.floor(Math.random() * demoAnimals.length)];
        const animal = getAnimalById(randomAnimalId);
        
        if (animal) {
          setScanState('complete');
          onScanComplete(animal);
        }
      }, 3000);
    }, 2000);
  };

  const handleReset = () => {
    setScanState('idle');
    setCapturedImage(null);
    setShowHints(false);
  };

  const renderIdleState = () => (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      {/* Demo Notice */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-sm"
      >
        <div className="flex items-center gap-2 text-blue-800 mb-2">
          <AlertCircle size={20} />
          <span className="font-semibold">Demo Mode</span>
        </div>
        <p className="text-blue-700 text-sm">
          AI scanning feature coming soon! This demo shows random animal results.
        </p>
      </motion.div>

      {/* Main scan button */}
      <motion.button
        onClick={handleScanStart}
        className="w-32 h-32 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Camera size={48} className="text-white" />
      </motion.button>

      <h2 className="text-2xl font-bold text-white mb-2">Scan an Animal</h2>
      <p className="text-gray-300 mb-6">
        Point your camera at any animal to identify it instantly
      </p>

      {/* Alternative options */}
      <div className="flex gap-4">
        <motion.button
          onClick={handleScanStart}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Upload size={20} />
          Upload Photo
        </motion.button>
      </div>
    </div>
  );

  const renderCapturingState = () => (
    <div className="relative h-full">
      {/* Camera viewfinder simulation */}
      <div className="absolute inset-0 bg-black">
        <div className="relative h-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg"
            alt="Camera view"
            className="w-full h-full object-cover"
          />
          
          {/* Scanning overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30">
            {/* Viewfinder frame */}
            <div className="absolute inset-8 border-2 border-green-400 rounded-lg">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-green-400"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-green-400"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-green-400"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-green-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Guided hints */}
      <AnimatePresence>
        {showHints && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute bottom-32 left-4 right-4"
          >
            <div className="bg-black bg-opacity-80 rounded-lg p-4">
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <Lightbulb size={20} />
                <span className="font-semibold">Capture Tips</span>
              </div>
              <ul className="text-white text-sm space-y-1">
                <li>• Center the animal in the frame</li>
                <li>• Ensure good lighting</li>
                <li>• Keep the camera steady</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cancel button */}
      <button
        onClick={handleReset}
        className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg"
      >
        Cancel
      </button>
    </div>
  );

  const renderAnalyzingState = () => (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      {capturedImage && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-48 h-48 rounded-lg overflow-hidden mb-6"
        >
          <img
            src={capturedImage}
            alt="Captured"
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      {/* Animated scanning indicator */}
      <motion.div
        className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full mb-6"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      <h2 className="text-2xl font-bold text-white mb-2">Analyzing...</h2>
      <p className="text-gray-300 mb-4">
        Our AI is identifying the animal in your photo
      </p>

      {/* Progress indicator */}
      <div className="w-64 bg-gray-700 rounded-full h-2 mb-4">
        <motion.div
          className="bg-green-400 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </div>

      <p className="text-gray-400 text-sm">
        This usually takes a few seconds...
      </p>
    </div>
  );

  return (
    <div className="h-full bg-gradient-to-b from-gray-900 to-black relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Animal Scan</h1>
          <Search className="text-white" size={24} />
        </div>
      </div>

      {/* Main content */}
      <div className="pt-16 pb-20 h-full">
        <AnimatePresence mode="wait">
          {scanState === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              {renderIdleState()}
            </motion.div>
          )}
          
          {scanState === 'capturing' && (
            <motion.div
              key="capturing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              {renderCapturingState()}
            </motion.div>
          )}
          
          {scanState === 'analyzing' && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              {renderAnalyzingState()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};