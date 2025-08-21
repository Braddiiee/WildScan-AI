/**
 * WildScan AI - Conservation Status Colors
 * 
 * Utility functions for getting conservation status colors and labels.
 * Provides consistent color coding across the application.
 */

import type { ConservationStatus } from '../types';

// Conservation status color mapping
export const CONSERVATION_COLORS: Record<ConservationStatus, string> = {
  'least-concern': '#22c55e', // Green
  'near-threatened': '#f97316', // Orange
  'vulnerable': '#f97316', // Orange
  'endangered': '#ef4444', // Red
  'critically-endangered': '#dc2626', // Dark Red
  'extinct': '#6b7280' // Gray
};

// Conservation status background colors (lighter versions)
export const CONSERVATION_BG_COLORS: Record<ConservationStatus, string> = {
  'least-concern': '#dcfce7', // Light Green
  'near-threatened': '#fed7aa', // Light Orange
  'vulnerable': '#fed7aa', // Light Orange
  'endangered': '#fecaca', // Light Red
  'critically-endangered': '#fca5a5', // Light Red
  'extinct': '#f3f4f6' // Light Gray
};

// Human-readable labels
export const CONSERVATION_LABELS: Record<ConservationStatus, string> = {
  'least-concern': 'Least Concern',
  'near-threatened': 'Near Threatened',
  'vulnerable': 'Vulnerable',
  'endangered': 'Endangered',
  'critically-endangered': 'Critically Endangered',
  'extinct': 'Extinct'
};

/**
 * Get the color for a conservation status
 */
export const getConservationColor = (status: ConservationStatus): string => {
  return CONSERVATION_COLORS[status] || CONSERVATION_COLORS['least-concern'];
};

/**
 * Get the background color for a conservation status
 */
export const getConservationBgColor = (status: ConservationStatus): string => {
  return CONSERVATION_BG_COLORS[status] || CONSERVATION_BG_COLORS['least-concern'];
};

/**
 * Get the human-readable label for a conservation status
 */
export const getConservationLabel = (status: ConservationStatus): string => {
  return CONSERVATION_LABELS[status] || 'Unknown';
};

/**
 * Get conservation status badge props (color, background, label)
 */
export const getConservationBadge = (status: ConservationStatus) => {
  return {
    color: getConservationColor(status),
    backgroundColor: getConservationBgColor(status),
    label: getConservationLabel(status)
  };
};