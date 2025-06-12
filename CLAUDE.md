# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native Expo application called "Cockaigne" - a deals/offers app built with:
- Expo SDK 53
- React Native 0.79.2
- React 19.0.0
- TypeScript with strict mode
- File-based routing via expo-router
- Dark theme implementation

## Common Development Commands

```bash
# Start development server
npx expo start

# Run on specific platforms
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Web browser

# Linting
npm run lint

# Install dependencies
npm install
```

## Architecture

### Routing Structure
- `/app/_layout.tsx` - Root layout with Stack navigator
- `/app/index.tsx` - Main screen displaying deals list
- File-based routing through expo-router with typed routes enabled

### Key Components
- `components/DealListItem.tsx` - Deal card with title bar and modal trigger
- `components/DealDetailsModal.tsx` - Modal for deal details with slide animation
- `components/icons/` - Custom SVG icons using react-native-svg

### Styling Approach
- Dark theme defined in `themes.ts`
- Inline styles using React Native StyleSheet
- Custom colors: black background (#000), dark card (#1a1a1a), borders (#2e2e2e)

### Path Aliases
- `@/*` maps to project root (configured in tsconfig.json)

## Important Patterns

### Modal Implementation
Modals use React Native's Modal component with slide animation and transparent backdrop.

### SVG Icons
Custom icons are implemented as React components using react-native-svg with typed props from `svg-props.ts`.

### Internationalization
react-i18next is installed for future i18n support.

## Current Development State
- Basic list view with DealListItem components
- Modal infrastructure in place
- Dark theme implementation started
- Custom icon system established