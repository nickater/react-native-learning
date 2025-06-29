// app.config.js - The heart of your Expo app configuration

export default ({ config }) => ({
  ...config, // Inherits properties from app.json if it exists
  
  // --- General App Info ---
  name: "My Awesome App", // Display name of your app
  slug: "my-awesome-app", // URL-friendly name for your project
  version: "1.0.0", // Version of your app
  orientation: "portrait", // Can be "portrait", "landscape", or "default"
  
  // --- App Icons and Splash Screen ---
  icon: "./assets/icon.png", // Path to your app icon (1024x1024 recommended)
  splash: {
    image: "./assets/splash.png", // Path to your splash screen image
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  
  // --- Updates ---
  updates: {
    fallbackToCacheTimeout: 0 // How long to wait for a new update before using a cached one
  },
  assetBundlePatterns: ["**/*"], // Glob pattern for assets to include in the bundle

  // --- Platform-Specific Configuration ---
  
  // iOS Configuration
  ios: {
    supportsTablet: true,
    // This is CRITICAL. It's your app's unique ID in the Apple ecosystem.
    // Format: reverse domain notation (com.yourcompany.yourapp)
    bundleIdentifier: "com.mycompany.myawesomeapp",
    
    // Additional iOS-specific settings
    buildNumber: "1", // Build number for App Store Connect
    infoPlist: {
      // iOS permissions and capabilities
      NSCameraUsageDescription: "This app uses the camera to take photos",
      NSLocationWhenInUseUsageDescription: "This app uses location to show nearby places"
    }
  },
  
  // Android Configuration
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF"
    },
    // This is CRITICAL. It's your app's unique ID in the Google ecosystem.
    // Format: reverse domain notation (com.yourcompany.yourapp)
    package: "com.mycompany.myawesomeapp",
    
    // Additional Android-specific settings
    versionCode: 1, // Numeric version for Google Play
    permissions: [
      // Android permissions
      "CAMERA",
      "ACCESS_FINE_LOCATION"
    ]
  },
  
  // --- Web Configuration (if using Expo for web) ---
  web: {
    favicon: "./assets/favicon.png",
    bundler: "metro" // or "webpack"
  },
  
  // --- Plugins ---
  // Add Expo SDK modules and third-party plugins here
  plugins: [
    // Example: Add the camera plugin
    "expo-camera",
    // Example: Configure notifications
    [
      "expo-notifications",
      {
        icon: "./assets/notification-icon.png",
        color: "#ffffff"
      }
    ]
  ],

  // --- Extra Configuration ---
  extra: {
    // Custom configuration that you can access in your app
    // via Constants.expoConfig.extra
    apiUrl: process.env.API_URL || "https://api.myapp.com",
    environment: process.env.NODE_ENV || "development"
  }
});
