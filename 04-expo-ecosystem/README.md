# The Expo Ecosystem (30-45 minutes)

## Learning Objectives
- Understand the Expo development workflow
- Learn how to configure your app with `app.config.js`
- Explore the Expo SDK for native functionality

## What is Expo?

Expo is a platform that makes React Native development faster and easier by providing:

1. **Expo Go**: A mobile app that lets you preview your app instantly
2. **Expo SDK**: Pre-built native modules for common functionality
3. **EAS (Expo Application Services)**: Cloud services for building and deploying

## Expo Go: Instant Testing

### The Power of Expo Go
- Install Expo Go from App Store or Google Play
- Scan QR code from `expo start`
- No need for Xcode, Android Studio, or simulators
- Real device testing with hot reloading

### Development Workflow
```bash
# Start development server
expo start

# Scan QR code with Expo Go
# Make changes to code
# See updates instantly on device
```

## App Configuration with `app.config.js`

The `app.config.js` file is the heart of your app's configuration. Using `.js` instead of `.json` allows for dynamic configuration based on environment variables.

### Key Configuration Sections

1. **Basic App Info**: Name, version, orientation
2. **Visual Assets**: Icon, splash screen, adaptive icons
3. **Platform-Specific**: Bundle identifiers, platform features
4. **Plugins**: Expo SDK modules and third-party integrations

## Expo SDK: Native Modules Made Easy

Instead of writing native code or configuring complex build tools, Expo provides pre-built modules:

| Need | Expo Module | What it provides |
|------|-------------|------------------|
| Camera | `expo-camera` | Photo/video capture, barcode scanning |
| Location | `expo-location` | GPS, geocoding, geofencing |
| Notifications | `expo-notifications` | Push notifications, local notifications |
| Authentication | `expo-auth-session` | OAuth flows (Google, Facebook, etc.) |
| File System | `expo-file-system` | File operations, downloads |
| Sensors | `expo-sensors` | Accelerometer, gyroscope, magnetometer |

### Installation Example
```bash
# Install a module
expo install expo-camera

# Use it in your app
import { Camera } from 'expo-camera';
```

## Configuration Files

- `app.config.js` - Main app configuration (see example file)
- `package.json` - Dependencies and scripts
- `eas.json` - Build and submit configuration (created later)

## Live Demo

We'll show:
1. Starting the development server
2. Opening in Expo Go
3. Making a live change and seeing it update
4. Exploring the app.config.js file
