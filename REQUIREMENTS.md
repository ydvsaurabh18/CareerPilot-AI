npm install# CareerPilot AI - Project Requirements

## System Requirements

### Node.js & Package Manager
- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher
- **bun:** (optional) v1.0.0+ (project uses bun.lockb)

### Operating System
- macOS, Linux, or Windows
- Minimum 4GB RAM
- 500MB free disk space

---

## Frontend Dependencies

### Core Framework & Build
- **react:** ^18.0.0
- **typescript:** ^5.0.0
- **vite:** ^5.0.0
- **react-dom:** ^18.0.0
- **react-router-dom:** ^6.0.0

### UI & Styling
- **tailwind-css:** ^3.0.0
- **postcss:** ^8.0.0
- **shadcn/ui:** @latest (Radix UI based components)
- **@radix-ui/*:** Various Radix UI primitives
- **class-variance-authority:** ^0.7.0
- **clsx:** ^2.0.0
- **tailwind-merge:** ^1.0.0

### State Management & Data Fetching
- **@tanstack/react-query:** ^5.0.0 (React Query)
- **axios:** ^1.8.4

### Forms & Validation
- **@hookform/resolvers:** ^3.9.0
- **react-hook-form:** ^7.0.0
- **zod:** (for schema validation)

### Authentication
- **firebase:** ^11.6.0

### Animations & UI Enhancements
- **framer-motion:** ^12.11.0
- **embla-carousel-react:** ^8.3.0
- **date-fns:** ^3.6.0

### Development Tools
- **@vitejs/plugin-react:** ^4.0.0
- **@types/react:** ^18.0.0
- **@types/react-dom:** ^18.0.0
- **@types/node:** ^20.0.0
- **typescript:** ^5.0.0
- **eslint:** ^8.0.0
- **eslint-plugin-react-hooks:** ^4.0.0

---

## Backend Dependencies

### Core Framework & Runtime
- **express:** ^5.1.0
- **typescript:** ^5.8.3
- **node:** v18.0.0 or higher
- **ts-node-dev:** ^2.0.0 (development)

### Database & Authentication
- **firebase-admin:** ^13.3.0
- **firebase:** ^11.6.0

### AI & ML
- **@google/generative-ai:** ^0.24.0

### File Handling
- **multer:** ^1.4.5-lts.2 (file uploads)
- **mammoth:** ^1.9.0 (DOCX parsing)
- **pdf-parse:** ^1.1.1 (PDF parsing)
- **pdf-lib:** ^1.17.1 (PDF manipulation)

### HTTP & CORS
- **cors:** ^2.8.5
- **axios:** ^1.8.4

### Environment Configuration
- **dotenv:** ^16.6.1

### Testing
- **jest:** ^29.7.0
- **@types/jest:** ^29.5.14
- **ts-jest:** ^29.3.2
- **supertest:** ^7.1.0
- **@types/supertest:** ^6.0.3

### Development Tools
- **eslint:** ^8.0.0
- **@types/express:** ^5.0.1
- **@types/cors:** ^2.8.17
- **@types/multer:** ^1.4.12
- **@types/node:** ^22.14.1

---

## External Services & APIs

### Firebase Setup
- **Firebase Project:** Required for:
  - Authentication (Firestore Rules)
  - Firestore Database
  - Firebase Admin SDK credentials (.json key file)

### Google Cloud
- **Google Generative AI API Key:** Required for:
  - Resume analysis
  - Resume generation
  - Job matching
  - Cover letter generation

### Deployment
- **Vercel:** Frontend deployment (configured in `vercel.json`)
- **Netlify:** Alternative frontend deployment option

---

## Environment Variables

### Frontend (.env or .env.local)
```
VITE_API_BASE_URL=http://localhost:3001
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Backend (.env)
```
PORT=3001
FRONTEND_URL=http://localhost:5173
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_service_account_email
```

---

## Installation & Setup

### Prerequisites Check
```bash
# Verify Node.js version
node --version  # Should be v18.0.0+

# Verify npm version
npm --version   # Should be v9.0.0+
```

### Frontend Installation
```bash
# Install dependencies
npm install
# or
bun install
```

### Backend Installation
```bash
cd backend
npm install
```

---

## Development Environment

### Recommended Tools
- **VS Code:** Latest version with TypeScript support
- **ES Lint Extension:** For code quality
- **Prettier:** Code formatter (optional)
- **REST Client:** Thunder Client or Postman for API testing
- **Firebase Emulator:** For local Firebase development (optional)

### Port Requirements
- **Frontend Dev Server:** Port 5173 (Vite default)
- **Backend Server:** Port 3001 (configurable via .env)
- **Firebase Emulator:** Ports 4000-5000 (if used)

---

## Build & Runtime Requirements

### Build Requirements
- **Disk Space:** 2GB minimum for node_modules
- **Memory:** 2GB RAM minimum
- **Internet:** Required for npm package downloads

### Production Requirements
- **Node.js:** v18.0.0 or higher
- **Memory:** 512MB RAM minimum
- **CPU:** 1 core minimum
- **SSL Certificate:** Required for HTTPS (production)

---

## Compliance & Security

### Required Checks
- **Environment Variables:** Must be set before running
- **Firebase Configuration:** Must have valid credentials
- **Google API Key:** Must have Generative AI API enabled
- **CORS Configuration:** Must match frontend URL

### Code Quality
- ESLint enabled for both frontend and backend
- TypeScript strict mode recommended
- Jest tests available for backend validation

---

## Browser Compatibility

### Supported Browsers (Frontend)
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Performance Considerations

### Frontend
- **Build Size:** ~500KB-1MB (optimized with Vite)
- **Load Time:** <3s on 4G
- **Bundle Analysis:** `npm run build` for production

### Backend
- **Response Time:** <200ms for typical requests
- **Concurrent Connections:** 100+ (default Node.js)
- **Database Queries:** Optimized with Firestore indexes

---

## Troubleshooting

### Common Issues
1. **Module not found:** Run `npm install` in both root and backend folders
2. **Port already in use:** Change PORT in .env or kill process using port
3. **Firebase errors:** Verify credentials and project ID in .env
4. **API key errors:** Check Google Generative AI API is enabled

### Support
- Check README.md for detailed setup instructions
- Review .env.example files (if present)
- Test with `npm run dev` for frontend and backend

---

**Last Updated:** 2026-06-21
**Project Version:** 0.0.0
