// @ts-nocheck

import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';

export const PlatformAwareButton = () => {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();

  return (
    <Pressable style={[styles.buttonBase, styles.platformButton]}>
      <Text style={styles.buttonText}>
        I'm a Platform-Aware Button!
      </Text>
      <Text style={styles.buttonText}>
        Platform: {Platform.OS}
      </Text>
      <Text style={styles.buttonText}>
        Screen Width: {width.toFixed(0)}px
      </Text>
      <Text style={styles.buttonText}>
        Color Scheme: {colorScheme || 'unknown'}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  // Platform.select is a clean way to define platform-specific styles.
  platformButton: Platform.select({
    ios: {
      backgroundColor: '#007AFF', // iOS blue
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    android: {
      backgroundColor: '#25D366', // Android green
      elevation: 5,
    },
    default: { // For web or other platforms
      backgroundColor: 'grey',
    }
  }),
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
