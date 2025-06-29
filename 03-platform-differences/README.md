# Platform Differences & Hooks (20-30 minutes)

## Learning Objectives
- Handle iOS vs Android differences gracefully
- Use platform-specific styling and logic
- Explore mobile-specific React hooks

## Platform-Specific Development

### The Challenge
iOS and Android have different:
- Design languages (Human Interface Guidelines vs Material Design)
- Navigation patterns
- Status bar behaviors
- Permission systems
- Performance characteristics

### Solution: Platform API

React Native provides a `Platform` API to handle these differences:

```typescript
import { Platform } from 'react-native';

// Method 1: Check the platform
if (Platform.OS === 'ios') {
  // iOS-specific code
} else if (Platform.OS === 'android') {
  // Android-specific code
}

// Method 2: Platform.select() - cleaner approach
const platformSpecificValue = Platform.select({
  ios: 'iOS Value',
  android: 'Android Value',
  default: 'Other Platform Value', // web, windows, etc.
});
```

## Mobile-Specific Hooks

### useWindowDimensions()
Get real-time screen dimensions (useful for responsive design):

```typescript
import { useWindowDimensions } from 'react-native';

const { width, height } = useWindowDimensions();
```

### useColorScheme()
Detect if the user has dark mode enabled:

```typescript
import { useColorScheme } from 'react-native';

const colorScheme = useColorScheme(); // 'light' | 'dark' | null
```

## Best Practices

1. **Test on Both Platforms**: Always test your app on both iOS and Android
2. **Use Platform.select()**: Cleaner than conditional statements
3. **Respect Platform Conventions**: Don't force Material Design on iOS or vice versa
4. **Performance Considerations**: Android and iOS have different performance characteristics

## Demo Components

See `PlatformAwareButton.tsx` for a practical example of platform-specific styling and hooks.
