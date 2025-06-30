// @ts-nocheck

import { Pressable, StyleSheet, Text, View } from 'react-native';

type StyledCardProps = {
  title: string;
  message: string;
  onPress: () => void;
};

export const StyledCard = ({ title, message, onPress }: StyledCardProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardMessage}>{message}</Text>
      </View>
    </Pressable>
  );
};

// StyleSheet.create validates your styles and sends them over the bridge
// only once for performance optimization.
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    // Elevation for Android
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardMessage: {
    fontSize: 14,
    color: '#333333',
  },
});
