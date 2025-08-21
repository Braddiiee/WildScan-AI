/**
 * WildScan AI - Animal Database
 * 
 * This file contains mock animal data for the demo version.
 * In production, this will be replaced with API calls to fetch real animal data.
 * 
 * TODO: Replace with API integration
 * - Implement AnimalService class
 * - Add caching mechanism
 * - Handle API errors and fallbacks
 */

import type { Animal, FeaturedAnimal } from '../types/index';

// Mock animal database - will be replaced with API calls
export const ANIMALS: Animal[] = [
  {
    id: 'jaguar-001',
    name: 'Jaguar',
    scientificName: 'Panthera onca',
    category: 'mammals',
    description: 'A muscular solitary predator with a spotted coat, known for its strength, stealth, and powerful bite.',
    habitat: 'Tropical rainforests, wetlands, and grasslands of Central and South America',
    diet: 'Carnivorous - primarily caimans, fish, capybaras, deer, and other mammals',
    behavior: 'Solitary and territorial. Excellent swimmers and climbers. Most active during dawn and dusk.',
    conservationStatus: 'near-threatened',
    size: '1.1-1.9 meters (body length)',
    weight: '56-96 kg',
    lifespan: '12-15 years in wild, up to 23 years in captivity',
    imageUrl: 'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg',
    facts: [
      'Has the strongest bite force of any big cat',
      'Can crush turtle shells and caiman skulls',
      'Unlike other big cats, jaguars love water',
      'Each jaguar has a unique spot pattern like fingerprints'
    ],
    similarAnimals: ['leopard-001', 'ocelot-001'],
    iucnUrl: 'https://www.iucnredlist.org/species/15953/50658693'
  },
  {
    id: 'capybara-001',
    name: 'Capybara',
    scientificName: 'Hydrochoerus hydrochaeris',
    category: 'mammals',
    description: 'The world\'s largest rodent, known for its calm demeanor and semi-aquatic lifestyle.',
    habitat: 'Wetlands, marshes, and riverbanks throughout South America',
    diet: 'Herbivorous - grasses, aquatic plants, fruits, and tree bark',
    behavior: 'Highly social, living in groups of 10-20. Excellent swimmers and can stay underwater for up to 5 minutes.',
    conservationStatus: 'least-concern',
    size: '1.0-1.3 meters long',
    weight: '35-66 kg',
    lifespan: '8-10 years in wild, up to 12 years in captivity',
    imageUrl: 'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg',
    facts: [
      'Can weigh as much as a large dog',
      'Their teeth never stop growing',
      'Often seen with birds perched on their backs',
      'Can run as fast as a horse when threatened'
    ],
    similarAnimals: ['guinea-pig-001', 'beaver-001'],
    iucnUrl: 'https://www.iucnredlist.org/species/10300/22190005'
  },
  {
    id: 'poison-dart-frog-001',
    name: 'Poison Dart Frog',
    scientificName: 'Dendrobates tinctorius',
    category: 'amphibians',
    description: 'Small, brightly colored frogs known for their toxic skin secretions used by indigenous peoples on arrow tips.',
    habitat: 'Tropical rainforests of Central and South America',
    diet: 'Insectivorous - ants, beetles, flies, and other small insects',
    behavior: 'Diurnal and territorial. Males are devoted parents, carrying tadpoles on their backs.',
    conservationStatus: 'vulnerable',
    size: '1.5-6 cm',
    weight: '2-7 grams',
    lifespan: '4-6 years in wild, up to 10 years in captivity',
    imageUrl: 'https://images.pexels.com/photos/70069/frog-macro-amphibian-green-70069.jpeg',
    facts: [
      'Their bright colors warn predators of their toxicity',
      'Only toxic when eating certain ants in the wild',
      'Some species can kill 10 adult humans with their poison',
      'Males sing to attract mates and defend territory'
    ],
    similarAnimals: ['tree-frog-001', 'salamander-001'],
    iucnUrl: 'https://www.iucnredlist.org/species/55264/11274916'
  },
  {
    id: 'giant-river-otter-001',
    name: 'Giant River Otter',
    scientificName: 'Pteronura brasiliensis',
    category: 'mammals',
    description: 'The largest otter species, known for its playful nature and complex social behaviors.',
    habitat: 'Rivers, lakes, and wetlands of the Amazon Basin',
    diet: 'Piscivorous - primarily fish, also crustaceans and small caimans',
    behavior: 'Highly social, living in family groups. Excellent swimmers and communicators with complex vocalizations.',
    conservationStatus: 'endangered',
    size: '1.5-1.8 meters long',
    weight: '22-32 kg',
    lifespan: '8-10 years in wild',
    imageUrl: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg',
    facts: [
      'Can eat up to 4 kg of fish per day',
      'Have webbed feet and can close their nostrils underwater',
      'Live in family groups of up to 8 individuals',
      'Build dens in riverbanks with multiple entrances'
    ],
    similarAnimals: ['sea-otter-001', 'river-otter-001'],
    iucnUrl: 'https://www.iucnredlist.org/species/18711/21938411'
  },
  {
    id: 'andaconda-001',
    name: 'Green Anaconda',
    scientificName: 'Eunectes murinus',
    category: 'reptiles',
    description: 'One of the world\'s largest snakes, known for its incredible size and aquatic lifestyle.',
    habitat: 'Swamps, marshes, and slow-moving streams of South America',
    diet: 'Carnivorous - fish, birds, mammals, and reptiles',
    behavior: 'Semi-aquatic and mostly solitary. Ambush predators that constrict their prey.',
    conservationStatus: 'least-concern',
    size: '4-6 meters long (females larger)',
    weight: '30-70 kg',
    lifespan: '10-12 years in wild',
    imageUrl: 'https://images.pexels.com/photos/34426/snake-rainbow-boa-reptile-scale.jpg',
    facts: [
      'Females can be twice as large as males',
      'Can hold their breath underwater for up to 10 minutes',
      'Give birth to live young (not eggs)',
      'Can go months without eating after a large meal'
    ],
    similarAnimals: ['python-001', 'boa-001'],
    iucnUrl: 'https://www.iucnredlist.org/species/44580039/44580049'
  }
];

// Additional animals for favorites mock data
export const ADDITIONAL_ANIMALS: Animal[] = [
  {
    id: 'harpy-eagle-001',
    name: 'Harpy Eagle',
    scientificName: 'Harpia harpyja',
    category: 'birds',
    description: 'One of the most powerful raptors in the Americas, known for its distinctive feathered crown and incredible hunting abilities.',
    habitat: 'Tropical rainforests of Central and South America',
    diet: 'Carnivorous - primarily sloths, monkeys, and other arboreal mammals',
    behavior: 'Solitary hunters with exceptional eyesight and silent flight. Build large nests high in the canopy.',
    conservationStatus: 'near-threatened',
    size: '86-107 cm wingspan up to 2 meters',
    weight: '4-9 kg',
    lifespan: '25-35 years in wild',
    imageUrl: 'https://images.pexels.com/photos/133459/pexels-photo-133459.jpeg',
    facts: [
      'Has the largest talons of any living eagle',
      'Can fly silently through dense forest',
      'National bird of Panama',
      'Takes up to 5 years to reach adult plumage'
    ],
    similarAnimals: ['golden-eagle-001', 'philippine-eagle-001'],
    iucnUrl: 'https://www.iucnredlist.org/species/22695998/93526234'
  },
  {
    id: 'manatee-001',
    name: 'Manatee',
    scientificName: 'Trichechus inunguis',
    category: 'mammals',
    description: 'Gentle aquatic herbivores known as sea cows, these peaceful giants are beloved for their docile nature.',
    habitat: 'Warm coastal waters, rivers, and springs',
    diet: 'Herbivorous - seagrass, algae, and aquatic plants',
    behavior: 'Slow-moving and peaceful. Surface every 3-5 minutes to breathe. Highly social animals.',
    conservationStatus: 'vulnerable',
    size: '2.5-4 meters long',
    weight: '200-600 kg',
    lifespan: '50-65 years',
    imageUrl: 'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg',
    facts: [
      'Can hold their breath for up to 20 minutes',
      'Eat 10-15% of their body weight daily',
      'Have no natural predators as adults',
      'Related to elephants, not whales'
    ],
    similarAnimals: ['dugong-001', 'hippo-001'],
    iucnUrl: 'https://www.iucnredlist.org/species/22103/9356917'
  }
];

// Combine all animals
export const ALL_ANIMALS = [...ANIMALS, ...ADDITIONAL_ANIMALS];

// Featured animals for the explore page
export const FEATURED_ANIMALS: FeaturedAnimal[] = [
  {
    animalId: 'capybara-001',
    title: 'Capybara',
    subtitle: 'Hydrochoerus hydrochaeris',
    imageUrl: 'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg',
    featured: true
  },
  {
    animalId: 'andaconda-001',
    title: 'Anaconda',
    subtitle: 'Eunectes murinus',
    imageUrl: 'https://images.pexels.com/photos/34426/snake-rainbow-boa-reptile-scale.jpg',
    featured: true
  }
];

// Top 100 animals (subset for demo)
export const TOP_ANIMALS: FeaturedAnimal[] = [
  {
    animalId: 'poison-dart-frog-001',
    title: 'Poison Dart Frog',
    subtitle: 'Dendrobates tinctorius',
    imageUrl: 'https://images.pexels.com/photos/70069/frog-macro-amphibian-green-70069.jpeg',
    featured: false
  },
  {
    animalId: 'giant-river-otter-001',
    title: 'Giant River Otter',
    subtitle: 'Pteronura brasiliensis',
    imageUrl: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg',
    featured: false
  }
];

/**
 * Get animal by ID
 * TODO: Replace with API call
 */
export const getAnimalById = (id: string): Animal | undefined => {
  return ANIMALS.find(animal => animal.id === id);
};

/**
 * Search animals by query and filters
 * TODO: Replace with API call with proper search functionality
 */
export const searchAnimals = (query: string, category?: string): Animal[] => {
  let filtered = ANIMALS;
  
  if (category && category !== 'all') {
    filtered = filtered.filter(animal => animal.category === category);
  }
  
  if (query) {
    const searchTerm = query.toLowerCase();
    filtered = filtered.filter(animal => 
      animal.name.toLowerCase().includes(searchTerm) ||
      animal.scientificName.toLowerCase().includes(searchTerm) ||
      animal.description.toLowerCase().includes(searchTerm)
    );
  }
  
  return filtered;
};

/**
 * Get similar animals by IDs
 * TODO: Replace with API call that returns actual similar animals
 */
export const getSimilarAnimals = (animalIds: string[]): Animal[] => {
  return animalIds.map(id => getAnimalById(id)).filter(Boolean) as Animal[];
};