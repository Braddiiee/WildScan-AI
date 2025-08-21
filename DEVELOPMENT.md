# WildScan AI - Development Documentation

This document provides detailed information for developers working on the WildScan AI project.

## 🏗️ Architecture Overview

### Component Architecture
The application follows a modular component architecture with clear separation of concerns:

```
App (Root)
├── Navigation (Bottom tabs)
├── Screens (Tab content)
│   ├── ExploreScreen
│   ├── FavoritesScreen
│   ├── ScanInterface
│   ├── ChatScreen
│   └── ProfileScreen
└── Shared Components
    ├── AnimalDetailScreen
    ├── Modals
    └── UI Elements
```

### State Management
- **Global State**: Managed through `useAppState` hook
- **Local State**: Component-specific state using React hooks
- **Persistence**: localStorage for user preferences and data
- **Future**: Ready for Redux/Zustand integration

### Data Flow
1. **Mock Data**: Currently using static data for demo
2. **Service Layer**: Prepared for API integration
3. **Type Safety**: Full TypeScript coverage
4. **Error Handling**: Comprehensive error boundaries planned

## 🔧 Development Setup

### Prerequisites
```bash
Node.js >= 16.0.0
npm >= 8.0.0
```

### Installation
```bash
# Clone repository
git clone <repo-url>
cd wildscan-ai

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📁 File Structure

### Core Directories

#### `/src/components/`
Organized by feature/screen:
- `Navigation/` - App navigation components
- `Scan/` - Animal scanning interface
- `Explore/` - Animal exploration and discovery
- `Favorites/` - Favorites management
- `Chat/` - AI chat interface
- `Profile/` - User profile and settings
- `AnimalDetail/` - Detailed animal information

#### `/src/hooks/`
Custom React hooks:
- `useAppState.ts` - Global app state management
- `useLocalStorage.ts` - localStorage persistence utility

#### `/src/data/`
Data management:
- `animals.ts` - Animal database and search functions
- `chatHistory.ts` - Chat conversation management

#### `/src/types/`
TypeScript definitions:
- `index.ts` - All application types and interfaces

#### `/src/utils/`
Utility functions:
- `conservationColors.ts` - Conservation status styling

## 🎨 Styling Guidelines

### Tailwind CSS Classes
The project uses Tailwind CSS with custom configurations:

```css
/* Primary Colors */
.text-primary: #22c55e (green-500)
.bg-primary: #22c55e (green-500)

/* Conservation Status Colors */
.text-endangered: #ef4444 (red-500)
.text-vulnerable: #f97316 (orange-500)
.text-safe: #22c55e (green-500)

/* UI Grays */
.text-gray-900: Primary text
.text-gray-600: Secondary text
.text-gray-400: Tertiary text
```

### Component Styling Patterns
```tsx
// Card component pattern
<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
  {/* Content */}
</div>

// Button patterns
<button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
  Primary Action
</button>

<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
  Secondary Action
</button>
```

## 🎭 Animation Guidelines

### Framer Motion Patterns

#### Page Transitions
```tsx
<motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -20 }}
  transition={{ duration: 0.2 }}
>
  {/* Page content */}
</motion.div>
```

#### Button Interactions
```tsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="..."
>
  Button Text
</motion.button>
```

#### List Animations
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    {/* Item content */}
  </motion.div>
))}
```

## 🔌 API Integration Preparation

### Service Layer Structure
```typescript
// /src/services/AnimalService.ts
export class AnimalService {
  static async searchAnimals(query: string): Promise<Animal[]> {
    // API implementation
  }
  
  static async getAnimalById(id: string): Promise<Animal> {
    // API implementation
  }
  
  static async identifyAnimal(image: File): Promise<Animal> {
    // AI identification API
  }
}
```

### API Response Types
```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasMore: boolean;
  };
}
```

### Error Handling
```typescript
// Error boundary component
export class ErrorBoundary extends React.Component {
  // Implementation for catching and displaying errors
}

// API error handling
const handleApiError = (error: ApiError) => {
  switch (error.code) {
    case 'NETWORK_ERROR':
      // Show network error message
      break;
    case 'UNAUTHORIZED':
      // Redirect to login
      break;
    default:
      // Show generic error
  }
};
```

## 📱 Mobile Optimization

### Responsive Design Breakpoints
```css
/* Tailwind breakpoints used */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Laptops */
2xl: 1536px /* Large screens */
```

### Touch Interactions
- Minimum touch target size: 44px
- Proper hover states for touch devices
- Swipe gestures for navigation
- Pull-to-refresh functionality (planned)

### Performance Considerations
- Image lazy loading
- Component code splitting
- Bundle size optimization
- Memory leak prevention

## 🧪 Testing Strategy

### Unit Testing (Planned)
```bash
# Test files structure
src/
├── components/
│   └── __tests__/
├── hooks/
│   └── __tests__/
└── utils/
    └── __tests__/
```

### Testing Libraries
- Jest for unit testing
- React Testing Library for component testing
- Cypress for e2e testing (planned)

### Test Patterns
```typescript
// Component testing example
describe('AnimalCard', () => {
  it('displays animal information correctly', () => {
    // Test implementation
  });
  
  it('handles favorite toggle', () => {
    // Test implementation
  });
});
```

## 🚀 Deployment

### Build Configuration
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
        },
      },
    },
  },
});
```

### Environment Variables
```bash
# .env.example
VITE_API_BASE_URL=https://api.wildscan.ai
VITE_AI_SERVICE_URL=https://ai.wildscan.ai
VITE_ANALYTICS_ID=your-analytics-id
```

### Deployment Checklist
- [ ] Build optimization
- [ ] Environment variables configured
- [ ] Error tracking setup
- [ ] Analytics integration
- [ ] Performance monitoring
- [ ] SEO optimization

## 🔍 Code Quality

### ESLint Configuration
```json
{
  "extends": [
    "@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

### Code Formatting
- Prettier for consistent formatting
- 2-space indentation
- Single quotes for strings
- Trailing commas where valid

### Git Hooks (Planned)
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm run type-check"
    }
  }
}
```

## 📊 Performance Monitoring

### Metrics to Track
- Bundle size
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Time to Interactive (TTI)

### Optimization Techniques
- Code splitting by route
- Image optimization
- Lazy loading
- Memoization for expensive calculations
- Virtual scrolling for large lists

## 🔐 Security Considerations

### Data Protection
- No sensitive data in localStorage
- Proper input validation
- XSS prevention
- CSRF protection (for API calls)

### Privacy
- No tracking without consent
- Data minimization
- Clear privacy policy
- User data export/deletion

## 🤝 Contributing Guidelines

### Code Style
- Follow existing patterns
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation

### Pull Request Process
1. Create feature branch
2. Implement changes
3. Add tests (when testing is set up)
4. Update documentation
5. Submit PR with description

### Issue Reporting
- Use issue templates
- Provide reproduction steps
- Include environment details
- Add relevant labels

---

This documentation will be updated as the project evolves. For questions, please refer to the main README or open an issue.