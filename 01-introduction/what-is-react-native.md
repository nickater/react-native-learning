# Introduction: What is React Native? (0-5 minutes)

## Learning Objectives
- Understand the key differences between React and React Native
- Learn about the JavaScript Bridge architecture
- Understand why we're using Expo for this course

## Key Concepts

### React Native vs. React
- **React (Web)**: Targets the DOM with elements like `<div>`, `<p>`, `<span>`
- **React Native**: Targets native UI components like `<View>`, `<Text>`, `<Image>`
- **Same Paradigm**: Components, state, props, and hooks work exactly the same way

### The JavaScript Bridge
- Your JavaScript code runs in a separate thread
- The "bridge" facilitates communication between JS and native iOS/Android APIs
- This allows you to access device features like camera, GPS, accelerometer, etc.

### Why Expo?
We're focusing on **Expo** instead of React Native CLI because:

- **Managed Workflow**: Simplifies setup and configuration
- **No Native Code**: Access to native APIs without writing Swift/Objective-C or Java/Kotlin
- **Easy Testing**: Use Expo Go app to test on real devices instantly
- **Simplified Building**: EAS (Expo Application Services) handles the complex build process

#### React Native CLI vs. Expo Comparison

| Feature | React Native CLI | Expo |
|---------|------------------|------|
| Setup Complexity | High (requires Xcode, Android Studio) | Low (just Node.js) |
| Native Module Access | Full control | Expo Modules and robust API |
| Build Process | Manual configuration | Automated via EAS |
| Testing on Device | Requires development builds | Instant via Expo Go |
| App Store Deployment | Manual signing process | Simplified with EAS Submit |

## Quick Demo
We'll start by showing a simple "Hello World" app running in Expo Go to demonstrate how quickly you can get started.
