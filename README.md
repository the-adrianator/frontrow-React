# Frontrow - Movie Discovery App

A modern, responsive movie discovery web application that helps users explore, search, and manage their favorite movies with an intuitive interface and voice-controlled navigation.

## Features

### 🎬 Movie Discovery
- Browse movies by popular, top-rated, and upcoming categories
- Filter movies by genre with visual genre icons
- Advanced search functionality with real-time results
- Detailed movie information including cast, crew, ratings, and trailers
- Movie recommendations based on user preferences

### 🎤 Voice Control
- Voice-activated navigation powered by Alan AI
- Voice commands for genre selection, search, and theme switching
- Hands-free movie browsing experience

### 👤 User Experience
- User authentication with TMDB accounts
- Personalized watchlists and favorite movies
- Dark and light theme modes
- Responsive design optimized for all devices
- Smooth animations and loading states

### 🎨 Modern UI/UX
- Clean, intuitive interface built with Material-UI
- Consistent design system with custom styling
- Interactive movie cards with hover effects
- Modal trailers and detailed movie information pages

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- TMDB API key

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd frontrow-React
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory and add your TMDB API key:
```
REACT_APP_TMDB_KEY=your_tmdb_api_key_here
```

4. Start the development server
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Actors/         # Actor information components
│   ├── FeaturedMovie/  # Hero movie display
│   ├── Movie/          # Individual movie cards
│   ├── MovieInformation/ # Detailed movie view
│   ├── MovieList/      # Movie grid layouts
│   ├── NavBar/         # Navigation header
│   ├── Profile/        # User profile page
│   ├── RatedCards/     # User's rated movies
│   ├── Search/         # Search functionality
│   └── SideBar/        # Genre/category navigation
├── features/           # Redux feature slices
├── services/           # API service layer
├── utils/              # Utility functions and helpers
└── assets/             # Images and static resources
```

## Key Technologies

- **React 17** - Modern React with hooks and functional components
- **Redux Toolkit** - Efficient state management with RTK Query
- **Material-UI v5** - Comprehensive component library
- **React Router** - Client-side routing
- **Alan AI** - Voice control integration
- **Axios** - HTTP client for API requests

## API Integration

The app integrates with The Movie Database (TMDB) API to provide:
- Movie data and metadata
- Cast and crew information
- Movie trailers and videos
- User authentication and personal lists
- Search and discovery endpoints

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Features in Detail

### Movie Browsing
- Browse movies by different categories (Popular, Top Rated, Upcoming)
- Filter by movie genres with visual genre icons
- Pagination for efficient loading of large movie lists
- Featured movie spotlight on the main page

### Search & Discovery
- Real-time search with instant results
- Voice-activated search commands
- Advanced filtering options
- Movie recommendations based on viewing history

### User Management
- Secure authentication with TMDB accounts
- Personal watchlists and favorite movies
- User profile management
- Session persistence across browser sessions

### Responsive Design
- Mobile-first responsive design
- Adaptive layouts for different screen sizes
- Touch-friendly interface elements
- Optimized performance across devices

## Development Notes

The application follows modern React development practices:
- Functional components with hooks
- Custom hooks for reusable logic
- Context API for theme management
- Error boundaries and loading states
- Optimized API calls with caching
- Clean component architecture

## Future Enhancements

- Movie rating and review system
- Social features and movie sharing
- Advanced recommendation algorithms
- Offline movie browsing capabilities
- Enhanced accessibility features