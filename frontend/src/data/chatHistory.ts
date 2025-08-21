/**
 * WildScan AI - Chat History Data
 * 
 * This file contains mock chat conversation history for the demo.
 * In production, this will be replaced with API calls to fetch user's chat history.
 * 
 * TODO: Replace with API integration
 * - Implement ChatService class
 * - Add real-time messaging
 * - Handle message persistence
 */

import type { ChatSession, ChatMessage } from '../types';

// Mock chat sessions for demo
export const MOCK_CHAT_SESSIONS: ChatSession[] = [
  {
    id: 'chat-001',
    title: 'Green tree frog identification',
    createdAt: new Date('2024-01-15T10:30:00Z'),
    updatedAt: new Date('2024-01-15T10:45:00Z'),
    messages: [
      {
        id: 'msg-001',
        type: 'user',
        content: 'I found this small green frog in my garden. Can you help identify it?',
        timestamp: new Date('2024-01-15T10:30:00Z'),
        imageUrl: 'https://images.pexels.com/photos/70069/frog-macro-amphibian-green-70069.jpeg'
      },
      {
        id: 'msg-002',
        type: 'ai',
        content: 'Based on the image, this appears to be a Green Tree Frog! These beautiful amphibians are known for their vibrant green coloration and are commonly found in gardens near water sources. They\'re excellent pest controllers, eating insects and small invertebrates.',
        timestamp: new Date('2024-01-15T10:31:00Z')
      },
      {
        id: 'msg-003',
        type: 'user',
        content: 'Are they safe to have around? I have pets.',
        timestamp: new Date('2024-01-15T10:32:00Z')
      },
      {
        id: 'msg-004',
        type: 'ai',
        content: 'Green tree frogs are generally safe around pets and humans. Unlike poison dart frogs, they don\'t secrete toxic substances. However, it\'s always best to observe them from a distance and ensure pets don\'t try to eat them, as this could cause mild stomach upset.',
        timestamp: new Date('2024-01-15T10:33:00Z')
      }
    ]
  },
  {
    id: 'chat-002',
    title: 'Jaguar Sighting Analysis',
    createdAt: new Date('2024-01-14T15:20:00Z'),
    updatedAt: new Date('2024-01-14T15:35:00Z'),
    messages: [
      {
        id: 'msg-005',
        type: 'user',
        content: 'I think I spotted a jaguar during my trip to Costa Rica. How can I be sure it wasn\'t a leopard?',
        timestamp: new Date('2024-01-14T15:20:00Z')
      },
      {
        id: 'msg-006',
        type: 'ai',
        content: 'Great question! Here are key differences between jaguars and leopards:\n\n🐆 **Jaguars:**\n- Stockier, more muscular build\n- Larger rosettes with spots inside\n- Found in Central/South America\n- Stronger bite force\n\n🐆 **Leopards:**\n- More slender build\n- Smaller rosettes, usually no central spots\n- Found in Africa and Asia\n- More agile climbers\n\nSince you were in Costa Rica, it was most likely a jaguar!',
        timestamp: new Date('2024-01-14T15:22:00Z')
      }
    ]
  },
  {
    id: 'chat-003',
    title: 'Toucan Species Guide',
    createdAt: new Date('2024-01-13T09:15:00Z'),
    updatedAt: new Date('2024-01-13T09:30:00Z'),
    messages: [
      {
        id: 'msg-007',
        type: 'user',
        content: 'What are the different types of toucans and where can I find them?',
        timestamp: new Date('2024-01-13T09:15:00Z')
      },
      {
        id: 'msg-008',
        type: 'ai',
        content: 'There are about 40 species of toucans! Here are some notable ones:\n\n🦜 **Toco Toucan** - Largest species, found in South America\n🦜 **Keel-billed Toucan** - Rainbow beak, Central America\n🦜 **Channel-billed Toucan** - Amazon rainforest\n🦜 **Emerald Toucanet** - Smaller species, cloud forests\n\nThey\'re primarily found in tropical forests from Mexico to Argentina. Their large beaks help them reach fruit and regulate body temperature!',
        timestamp: new Date('2024-01-13T09:17:00Z')
      }
    ]
  },
  {
    id: 'chat-004',
    title: 'Butterfly wing patterns',
    createdAt: new Date('2024-01-12T14:45:00Z'),
    updatedAt: new Date('2024-01-12T15:00:00Z'),
    messages: [
      {
        id: 'msg-009',
        type: 'user',
        content: 'Why do butterflies have such colorful wing patterns?',
        timestamp: new Date('2024-01-12T14:45:00Z')
      },
      {
        id: 'msg-010',
        type: 'ai',
        content: 'Butterfly wing patterns serve several important purposes:\n\n🦋 **Mate Recognition** - Patterns help butterflies identify their own species\n🦋 **Predator Deterrence** - Bright colors can warn of toxicity or startle predators\n🦋 **Camouflage** - Some patterns help them blend with surroundings\n🦋 **Thermoregulation** - Dark patterns absorb heat, light patterns reflect it\n\nThe patterns are created by microscopic scales that reflect light in different ways!',
        timestamp: new Date('2024-01-12T14:47:00Z')
      }
    ]
  },
  {
    id: 'chat-005',
    title: 'Rainforest canopy birds',
    createdAt: new Date('2024-01-11T11:20:00Z'),
    updatedAt: new Date('2024-01-11T11:40:00Z'),
    messages: [
      {
        id: 'msg-011',
        type: 'user',
        content: 'What birds live in the rainforest canopy and how do they adapt?',
        timestamp: new Date('2024-01-11T11:20:00Z')
      },
      {
        id: 'msg-012',
        type: 'ai',
        content: 'Rainforest canopy birds have amazing adaptations:\n\n🦅 **Harpy Eagles** - Powerful talons for catching monkeys and sloths\n🦜 **Parrots** - Strong beaks for cracking nuts and seeds\n🐦 **Hummingbirds** - Long beaks for nectar, incredible hovering ability\n🦆 **Hornbills** - Large beaks for reaching fruit\n\nThey\'ve adapted with strong gripping feet, excellent vision, and specialized beaks for their food sources!',
        timestamp: new Date('2024-01-11T11:22:00Z')
      }
    ]
  },
  {
    id: 'chat-006',
    title: 'Poison dart frog',
    createdAt: new Date('2024-01-09T16:10:00Z'),
    updatedAt: new Date('2024-01-09T16:25:00Z'),
    messages: [
      {
        id: 'msg-013',
        type: 'user',
        content: 'Are poison dart frogs really that dangerous?',
        timestamp: new Date('2024-01-09T16:10:00Z')
      },
      {
        id: 'msg-014',
        type: 'ai',
        content: 'Poison dart frogs are fascinating but their danger is often overstated:\n\n⚠️ **In the Wild:** Very toxic due to their diet of specific ants\n🏠 **In Captivity:** Not toxic - they lose toxicity without their natural diet\n🎯 **Indigenous Use:** Some species used on arrow tips by native peoples\n🌈 **Warning Colors:** Bright colors warn predators to stay away\n\nOnly about 3 species are extremely dangerous to humans. Most are mildly toxic and pose little threat if not handled.',
        timestamp: new Date('2024-01-09T16:12:00Z')
      }
    ]
  },
  {
    id: 'chat-007',
    title: 'Sloth Behaviors',
    createdAt: new Date('2024-01-07T13:30:00Z'),
    updatedAt: new Date('2024-01-07T13:50:00Z'),
    messages: [
      {
        id: 'msg-015',
        type: 'user',
        content: 'Why are sloths so slow? Is there an evolutionary advantage?',
        timestamp: new Date('2024-01-07T13:30:00Z')
      },
      {
        id: 'msg-016',
        type: 'ai',
        content: 'Sloths\' slowness is actually a brilliant survival strategy:\n\n🌿 **Energy Conservation** - Extremely slow metabolism requires less food\n👁️ **Predator Avoidance** - Slow movement makes them nearly invisible to predators\n🦠 **Symbiotic Relationships** - Algae grows on their fur, providing camouflage\n🌡️ **Temperature Regulation** - Can\'t regulate body temperature well, so they conserve energy\n\nThey only come down from trees once a week to defecate - a dangerous but necessary journey!',
        timestamp: new Date('2024-01-07T13:32:00Z')
      }
    ]
  }
];

/**
 * Get all chat sessions (sorted by most recent)
 * TODO: Replace with API call
 */
export const getChatSessions = (): ChatSession[] => {
  return MOCK_CHAT_SESSIONS.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
};

/**
 * Get chat session by ID
 * TODO: Replace with API call
 */
export const getChatSessionById = (id: string): ChatSession | undefined => {
  return MOCK_CHAT_SESSIONS.find(session => session.id === id);
};

/**
 * Create new chat session
 * TODO: Replace with API call
 */
export const createChatSession = (title: string): ChatSession => {
  const newSession: ChatSession = {
    id: `chat-${Date.now()}`,
    title,
    messages: [],
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  // In production, this would be an API call
  MOCK_CHAT_SESSIONS.unshift(newSession);
  return newSession;
};

/**
 * Add message to chat session
 * TODO: Replace with API call
 */
export const addMessageToSession = (sessionId: string, message: Omit<ChatMessage, 'id'>): ChatMessage => {
  const session = getChatSessionById(sessionId);
  if (!session) {
    throw new Error('Chat session not found');
  }
  
  const newMessage: ChatMessage = {
    ...message,
    id: `msg-${Date.now()}`
  };
  
  session.messages.push(newMessage);
  session.updatedAt = new Date();
  
  return newMessage;
};