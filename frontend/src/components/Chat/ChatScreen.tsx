/**
 * WildScan AI - Chat Screen Component
 * 
 * Main chat interface with AI conversations, image uploads, and sidebar navigation.
 * Starts with a clean welcome message and suggested prompts.
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Edit, Send, Paperclip, X } from 'lucide-react';
import type { ChatMessage, ChatSession } from '../../types';
import { getChatSessions, createChatSession, addMessageToSession } from '../../data/chatHistory';
import { ChatSidebar } from './ChatSidebar';
import { MessageBubble } from './MessageBubble';
import { SuggestedPrompts } from './SuggestedPrompts';

interface ChatScreenProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  onIncrementChatSessions: () => void;
}

export const ChatScreen: React.FC<ChatScreenProps> = ({
  isSidebarOpen,
  onToggleSidebar,
  onIncrementChatSessions
}) => {
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize with fresh welcome session
  useEffect(() => {
    const welcomeSession = createChatSession('New conversation');
    // Add welcome message from AI
    const welcomeMessage: Omit<ChatMessage, 'id'> = {
      type: 'ai',
      content: "Welcome to WildScan AI!\n\nI'm here to help you identify and learn about wildlife species. Upload a photo of any animal, and I'll help you discover what species it is, along with fascinating details about its habitat, behavior, and conservation status. What wildlife would you like to explore today?",
      timestamp: new Date()
    };
    addMessageToSession(welcomeSession.id, welcomeMessage);
    setCurrentSession(welcomeSession);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentSession?.messages]);

  const handleSendMessage = async () => {
    if (!message.trim() && !uploadedImage) return;
    if (!currentSession) return;

    // Add user message
    const userMessage: Omit<ChatMessage, 'id'> = {
      type: 'user',
      content: message,
      timestamp: new Date(),
      imageUrl: uploadedImage || undefined
    };

    addMessageToSession(currentSession.id, userMessage);
    setMessage('');
    setUploadedImage(null);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Omit<ChatMessage, 'id'> = {
        type: 'ai',
        content: generateAIResponse(message, ),
        timestamp: new Date()
      };
      
      addMessageToSession(currentSession.id, aiResponse);
      setIsTyping(false);
      
      // Update session reference
      const updatedSessions = getChatSessions();
      const updatedSession = updatedSessions.find(s => s.id === currentSession.id);
      if (updatedSession) {
        setCurrentSession(updatedSession);
      }
    }, 1500);
  };

  const generateAIResponse = (userMessage: string, hasImage?: string): string => {
    // Simple AI response simulation
    if (hasImage) {
      return "I can see you've uploaded an image! In the full version of WildScan AI, I would analyze this image and provide detailed information about the animal species. For now, this is a demo showing the chat interface. Try asking me questions about animals!";
    }

    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('jaguar')) {
      return "Jaguars are fascinating big cats! They're the largest cats in the Americas and have the strongest bite force of any big cat. Unlike other big cats, jaguars are excellent swimmers and often hunt in water. They're found primarily in the Amazon rainforest and are considered near threatened due to habitat loss.";
    }
    
    if (lowerMessage.includes('frog') || lowerMessage.includes('amphibian')) {
      return "Frogs are incredible amphibians! There are over 7,000 species worldwide. They play crucial roles in ecosystems as both predators and prey. Many frogs are indicators of environmental health - their permeable skin makes them sensitive to pollution and climate changes.";
    }
    
    if (lowerMessage.includes('bird')) {
      return "Birds are amazing creatures with over 10,000 species worldwide! They've adapted to virtually every habitat on Earth. From tiny hummingbirds that can hover in place to massive eagles that soar for hours, birds showcase incredible diversity in size, behavior, and ecological roles.";
    }
    
    return "That's a great question about wildlife! I'd love to help you learn more about animals. In the full version of WildScan AI, I can provide detailed information about thousands of species, their habitats, behaviors, and conservation status. What specific animal would you like to know about?";
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNewChat = () => {
    const newSession = createChatSession(`New conversation ${Date.now()}`);
    // Add welcome message to new session
    const welcomeMessage: Omit<ChatMessage, 'id'> = {
      type: 'ai',
      content: "Welcome to WildScan AI!\n\nI'm here to help you identify and learn about wildlife species. Upload a photo of any animal, and I'll help you discover what species it is, along with fascinating details about its habitat, behavior, and conservation status. What wildlife would you like to explore today?",
      timestamp: new Date()
    };
    addMessageToSession(newSession.id, welcomeMessage);
    setCurrentSession(newSession);
    onIncrementChatSessions();
  };

  const handleSelectSession = (sessionId: string) => {
    const sessions = getChatSessions();
    const session = sessions.find(s => s.id === sessionId);
    if (session) {
      setCurrentSession(session);
    }
  };

  const handleSuggestedPrompt = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <div className="h-full bg-white dark:bg-gray-900 relative flex">
      {/* Chat Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <ChatSidebar
            sessions={getChatSessions()}
            currentSessionId={currentSession?.id}
            onSelectSession={handleSelectSession}
            onNewChat={handleNewChat}
            onClose={() => onToggleSidebar()}
          />
        )}
      </AnimatePresence>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <Menu size={20} className="text-gray-700 dark:text-gray-300" />
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">WildScan</h1>
          </div>
          <button
            onClick={handleNewChat}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <Edit size={20} className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-16 bg-white dark:bg-gray-900">
          {currentSession?.messages.map((msg, index) => (
            <MessageBubble
              key={msg.id}
              message={msg}
              isFirst={index === 0 || currentSession.messages[index - 1].type !== msg.type}
            />
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-gray-500"
            >
              <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <div className="flex gap-1">
                  <motion.div
                    className="w-1 h-1 bg-gray-400 rounded-full"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-1 h-1 bg-gray-400 rounded-full"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-1 h-1 bg-gray-400 rounded-full"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
              <span className="text-sm">WildScan AI is typing...</span>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested prompts (show when only welcome message exists) */}
        {currentSession && currentSession.messages.length <= 1 && (
          <div className="px-4 pb-4 bg-white dark:bg-gray-900">
            <SuggestedPrompts onSelectPrompt={handleSuggestedPrompt} />
          </div>
        )}

        {/* Input area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 pb-16">
          {/* Image preview */}
          {uploadedImage && (
            <div className="mb-3 relative inline-block">
              <img
                src={uploadedImage}
                alt="Upload preview"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <button
                onClick={() => setUploadedImage(null)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center"
              >
                <X size={12} />
              </button>
            </div>
          )}
          
          <div className="flex items-end gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Find the animal..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <Paperclip size={20} />
              </button>
            </div>
            
            <motion.button
              onClick={handleSendMessage}
              disabled={!message.trim() && !uploadedImage}
              className={`p-3 rounded-full ${
                message.trim() || uploadedImage
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-400'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={20} />
            </motion.button>
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-2">
            WildScan AI can make mistakes. Verify species identification with experts.
          </p>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
};