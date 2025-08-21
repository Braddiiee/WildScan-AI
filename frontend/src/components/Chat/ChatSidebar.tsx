/**
 * WildScan AI - Chat Sidebar Component
 * 
 * Sidebar navigation for chat history with upgrade prompt and session management.
 * Includes three-dot menu for each chat with pin, archive, delete options.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Edit, Image, Crown, MoreHorizontal, Pin, Archive, Trash2 } from 'lucide-react';
import type { ChatSession } from '../../types';

interface ChatSidebarProps {
  sessions: ChatSession[];
  currentSessionId?: string;
  onSelectSession: (sessionId: string) => void;
  onNewChat: () => void;
  onClose: () => void;
}

interface ChatMenuProps {
  sessionId: string;
  onPin: (id: string) => void;
  onArchive: (id: string) => void;
  onDelete: (id: string) => void;
  onClose: () => void;
}

const ChatMenu: React.FC<ChatMenuProps> = ({ sessionId, onPin, onArchive, onDelete, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute right-0 top-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg py-2 z-50 min-w-[150px]"
    >
      <button
        onClick={() => { onPin(sessionId); onClose(); }}
        className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
      >
        <Pin size={16} />
        <span>Pin</span>
      </button>
      <button
        onClick={() => { onArchive(sessionId); onClose(); }}
        className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
      >
        <Archive size={16} />
        <span>Archive</span>
      </button>
      <button
        onClick={() => { onDelete(sessionId); onClose(); }}
        className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 text-red-600 dark:text-red-400"
      >
        <Trash2 size={16} />
        <span>Delete</span>
      </button>
    </motion.div>
  );
};

export const ChatSidebar: React.FC<ChatSidebarProps> = ({
  sessions,
  currentSessionId,
  onSelectSession,
  onNewChat,
  onClose
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [, setShowUpgradeModal] = useState(false);

  const groupSessionsByDate = (sessions: ChatSession[]) => {
    const groups: { [key: string]: ChatSession[] } = {};
    
    sessions.forEach(session => {
      const date = session.updatedAt;
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 7);
      
      let groupKey: string;
      
      if (date.toDateString() === today.toDateString()) {
        groupKey = 'Today';
      } else if (date.toDateString() === yesterday.toDateString()) {
        groupKey = 'Yesterday';
      } else if (date > weekAgo) {
        groupKey = '2d ago';
      } else {
        groupKey = '1w ago';
      }
      
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(session);
    });
    
    return groups;
  };

  const sessionGroups = groupSessionsByDate(sessions);

  const handlePin = (sessionId: string) => {
    console.log('Pin session:', sessionId);
  };

  const handleArchive = (sessionId: string) => {
    console.log('Archive session:', sessionId);
  };

  const handleDelete = (sessionId: string) => {
    console.log('Delete session:', sessionId);
  };

  return (
    <>
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col h-full pb-16"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">WildScan AI</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <X size={20} className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Action buttons */}
        <div className="p-4 space-y-2">
          <button
            onClick={onNewChat}
            className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300"
          >
            <Edit size={20} />
            <span>New chat</span>
          </button>
          
          <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300">
            <Image size={20} />
            <span>Images</span>
          </button>
        </div>

        {/* Chat history */}
        <div className="flex-1 overflow-y-auto pb-24">
          <div className="px-4 pb-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Chats</h3>
            
            {Object.entries(sessionGroups).map(([groupName, groupSessions]) => (
              <div key={groupName} className="mb-4">
                <h4 className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-wide">
                  {groupName}
                </h4>
                
                <div className="space-y-1">
                  {groupSessions.map((session) => (
                    <div key={session.id} className="relative">
                      <motion.button
                        onClick={() => onSelectSession(session.id)}
                        className={`w-full text-left p-2 rounded-lg text-sm transition-colors group ${
                          currentSessionId === session.id
                            ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                        whileHover={{ x: 2 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="truncate font-medium flex-1 pr-2">
                            {session.title}
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveMenu(activeMenu === session.id ? null : session.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                          >
                            <MoreHorizontal size={14} />
                          </button>
                        </div>
                      </motion.button>
                      
                      {/* Chat menu */}
                      <AnimatePresence>
                        {activeMenu === session.id && (
                          <ChatMenu
                            sessionId={session.id}
                            onPin={handlePin}
                            onArchive={handleArchive}
                            onDelete={handleDelete}
                            onClose={() => setActiveMenu(null)}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upgrade prompt */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 mb-8">
          <motion.button
            onClick={() => setShowUpgradeModal(true)}
            className="w-full bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Crown className="text-green-600 dark:text-green-400" size={20} />
              <span className="font-semibold text-gray-900 dark:text-white">Upgrade Plan</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                PRO
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-left">
              Get unlimited scans and advanced AI features
            </p>
          </motion.button>
        </div>
      </motion.div>

      {/* Click outside to close menu */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveMenu(null)}
        />
      )}
    </>
  );
};