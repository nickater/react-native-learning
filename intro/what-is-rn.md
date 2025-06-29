# React Native Crash Course (1 Hour)

**Audience:** Software Developers with React & TypeScript experience  
**Goal:** Understand the fundamentals of React Native, how it differs from React for the web, and how to configure, build, and prepare an app for deployment using Expo.

## Lesson Plan Overview

| Time (mins) | Topic | Materials |
| :--- | :--- | :--- |
| **0-5** | **Introduction: What is React Native?** | [📖 Lesson Notes](../01-introduction/what-is-react-native.md) |
| **5-20** | **Core Concepts & Components** | [📖 Lesson Notes](../02-core-concepts/core-concepts.md)<br>[💻 BasicComponents.tsx](../02-core-concepts/BasicComponents.tsx)<br>[💻 StyledCard.tsx](../02-core-concepts/StyledCard.tsx) |
| **20-30**| **Platform Differences & Hooks** | [📖 Lesson Notes](../03-platform-differences/platform-differences.md)<br>[💻 PlatformAwareButton.tsx](../03-platform-differences/PlatformAwareButton.tsx) |
| **30-45**| **The Expo Ecosystem** | [📖 Lesson Notes](../04-expo-ecosystem/expo-ecosystem.md)<br>[⚙️ app.config.js](../04-expo-ecosystem/app.config.js) |
| **45-55**| **Building & Signing for Stores** | [📖 Lesson Notes](../05-building-signing/building-and-signing.md)<br>[📋 EAS Commands](../05-building-signing/eas-commands.md) |
| **55-60**| **Recap & Next Steps** | [📖 Lesson Notes](../06-recap/recap-and-next-steps.md) |

## Quick Start

To get started immediately:

1. **Install Expo CLI**
   ```bash
   npm install -g @expo/cli
   ```

2. **Create a new project**
   ```bash
   npx create-expo-app MyFirstApp
   cd MyFirstApp
   npm start
   ```

3. **Install Expo Go** on your phone and scan the QR code

## Course Materials

Each section contains:
- 📖 **Lesson Notes**: Theoretical concepts and explanations
- 💻 **Code Examples**: TypeScript/React Native components to demonstrate concepts
- ⚙️ **Configuration Files**: Example configurations
- 📋 **Reference Guides**: Step-by-step command references

## Key Learning Outcomes

By the end of this course, you'll understand:
- How React Native differs from React for web
- Core React Native components and styling
- Platform-specific development patterns
- The Expo ecosystem and workflow
- Modern app building and deployment with EAS

Start with [Introduction: What is React Native?](../01-introduction/what-is-react-native.md)
