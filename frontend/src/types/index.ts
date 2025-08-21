/**
 * WildScan AI - Type Definitions
 * 
 * This file contains all TypeScript interfaces and types used throughout the application.
 * These types define the structure of our data models and will be used when integrating
 * with the actual Animal API in the future.
 */

//Conservation status types with color coding
export type ConservationStatus = 'least-concern' | 'near-threatened' | 'vulnerable' | 'endangered' | 'critically-endangered' | 'extinct';

// Animal category types for filtering and organization
export type AnimalCategory = 'mammals' | 'birds' | 'reptiles' | 'amphibians' | 'fish' | 'insects'


// Main animal data structure - ready for API integration 
export interface Animal {
    id: string;
    name: string;
    scientificName: string;
    category: AnimalCategory;
    description: string;
    habitat: string;
    diet: string;
    behavior: string;
    conservationStatus: ConservationStatus;
    size: string;
    weight: string;
    lifespan: string;
    imageUrl: string;
    facts: string[];
    similarAnimals: string[]; // Array of animal IDs
    iucnUrl?: string;
}

// Chat message structure for AI conversations
export interface ChatMessage {
    id: string;
    type: 'user' | 'ai';
    content: string;
    timestamp: Date;
    imageUrl?: string; // For image uploads in chat 
}

// Chat session structure for conservation history
export interface ChatSession {
    id: string;
    title: string;
    messages: ChatMessage[];
    createdAt: Date;
    updatedAt: Date;
}

// User profile and statistics
export interface UserProfile {
    id: string;
    name: string;
    email: string;
    memberSince: Date;
    plan: 'free' | 'pro';
    avatar?: string;
}

export interface UserStats {
    totalScans: number;
    uniqueAnimalsFound: number;
    chatSessions: number;
    favoritesCount: number;
}

// App settings and preferences
export interface AppSettings {
    language: string;
    textSize: 'small' | 'medium' | 'large';
    darkMode: boolean;
    notifications: boolean;
}

// Navigation and UI state
export type TabType = 'home' | 'favorites' | 'scan' | 'chat' | 'profile';

// Scan process stats 
export type ScanState = 'idle' | 'capturing' | 'analyzing' | 'complete' | 'error';

// API response structure (for future integration)
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

//  Search and filtering
export interface SearchFilters {
    category?: AnimalCategory;
    conservationStatus?: ConservationStatus;
    query?: string;
}

// Featured content structure
export interface FeturedAnimal {
    animalId: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    featured: string;
}