# Recap & Next Steps (55-60 minutes)

## Key Takeaways

### What We've Learned

1. **React Native Fundamentals**
   - Same React concepts, different target (native UI instead of DOM)
   - Core components: `<View>`, `<Text>`, `<Image>`, `<ScrollView>`, `<Pressable>`
   - Styling with JavaScript objects and Flexbox

2. **Platform Differences**
   - Use `Platform.select()` for platform-specific code
   - Mobile-specific hooks: `useWindowDimensions()`, `useColorScheme()`
   - Respect platform design conventions

3. **Expo Ecosystem**
   - Expo Go for instant device testing
   - `app.config.js` for app configuration
   - Expo SDK for pre-built native modules

4. **Modern Build & Deploy**
   - EAS CLI automates the complex parts
   - `eas credentials` handles signing automatically
   - Cloud builds mean no local setup required

### The Big Picture

**You write React → It runs on mobile → Expo makes it easy**

## Immediate Next Steps

### 1. Set Up Your Development Environment (10 minutes)
```bash
# Install Expo CLI
npm install -g @expo/cli

# Create a new project
npx create-expo-app MyFirstApp

# Start development
cd MyFirstApp
npm start
```

### 2. Install Expo Go
- Download from App Store (iOS) or Google Play (Android)
- Scan QR code from `npm start`
- Experience instant updates

### 3. Try the Examples
- Copy the code examples from this lesson
- Modify them and see changes in real-time
- Experiment with different styles and layouts

## Continuing Your Learning Journey

### Essential Resources

1. **Official Documentation**
   - [React Native Docs](https://reactnative.dev/)
   - [Expo Documentation](https://docs.expo.dev/)
   - [React Native Directory](https://reactnative.directory/) - Third-party packages

2. **Learning Paths**
   - Build a simple todo app
   - Create a weather app using APIs
   - Explore navigation with React Navigation
   - Add authentication with Expo Auth Session

3. **Advanced Topics to Explore**
   - React Navigation for multi-screen apps
   - State management (Redux, Zustand, or React Context)
   - Animations (React Native Reanimated)
   - Performance optimization
   - Custom native modules (when Expo isn't enough)

### Practice Project Ideas

**Beginner:**
- Calculator app
- Personal journal
- Simple photo gallery

**Intermediate:**
- Weather app with location
- Expense tracker with charts
- Social media feed

**Advanced:**
- Real-time chat app
- E-commerce app
- Offline-first app with sync

## Common Gotchas & Solutions

### 1. Metro Bundler Issues
```bash
# Clear cache and restart
npx expo start --clear
```

### 2. Platform-Specific Bugs
- Always test on both iOS and Android
- Use remote debugging for complex issues
- Check React Native version compatibility

### 3. Performance on Lower-End Devices
- Use `FlatList` for long lists (not `ScrollView`)
- Optimize images and bundle size
- Profile with Flipper or React DevTools

### 4. App Store Rejections
- Follow platform guidelines carefully
- Test thoroughly before submission
- Provide clear app descriptions and screenshots

## Building Your First Real App

### Recommended Stack
- **Navigation**: React Navigation
- **State Management**: React Context (start simple) → Redux Toolkit (for complex apps)
- **UI Components**: NativeBase, UI Kitten, or build your own
- **Networking**: Axios or React Query
- **Storage**: AsyncStorage or Expo SecureStore

### Development Workflow
1. Start with Expo managed workflow
2. Use TypeScript from day one
3. Set up ESLint and Prettier
4. Test on real devices early and often
5. Deploy preview builds for stakeholder feedback

## Questions & Discussion

Common questions we'll address:
- When to eject from Expo?
- How to handle app updates?
- Integrating with existing native apps
- Performance considerations
- Team development workflows

---

## Resources Summary

| Resource | URL | Purpose |
|----------|-----|---------|
| React Native Docs | https://reactnative.dev/ | Official documentation |
| Expo Docs | https://docs.expo.dev/ | Expo platform guides |
| React Navigation | https://reactnavigation.org/ | Navigation library |
| NativeBase | https://nativebase.io/ | UI component library |
| React Native Directory | https://reactnative.directory/ | Package discovery |
| Expo Snack | https://snack.expo.dev/ | Online playground |

**Remember**: You're not starting from scratch - you already know React! React Native is just a different rendering target with some mobile-specific considerations.
