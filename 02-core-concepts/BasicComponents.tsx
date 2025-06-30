// @ts-nocheck

import React from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

/**
 * This component demonstrates the basic React Native components
 * and how they map to familiar web elements.
 */
export const BasicComponents = () => {
  const [inputText, setInputText] = React.useState('');

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {/* View - equivalent to <div> */}
      <View style={{ backgroundColor: '#f0f0f0', padding: 16, marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          This is a View (like a div)
        </Text>
      </View>

      {/* Text - equivalent to <p>, <span>, etc. */}
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        This is Text component - all text must be wrapped in Text tags
      </Text>

      {/* Image - equivalent to <img> */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 50, height: 50, marginBottom: 20 }}
      />

      {/* TextInput - equivalent to <input> */}
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 20,
          borderRadius: 5,
        }}
        placeholder="Type something here..."
        value={inputText}
        onChangeText={setInputText}
      />

      {/* Pressable - equivalent to <button> */}
      <Pressable
        style={{
          backgroundColor: '#007AFF',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
        }}
        onPress={() => alert(`You typed: ${inputText}`)}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Press Me!
        </Text>
      </Pressable>
    </ScrollView>
  );
};
