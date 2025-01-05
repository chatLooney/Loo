// components/SubtitleOverlay.tsx

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Define the props for the SubtitleOverlay component
interface SubtitleOverlayProps {
  text: string; // The text to display (in this case, the translated text)
}

const SubtitleOverlay: React.FC<SubtitleOverlayProps> = ({ text }) => {
  return (
    <View style={styles.overlay}>
      <Text style={styles.text}>{text}</Text> {/* Display the translated text */}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 100, // Adjust the position as needed
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for readability
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white', // White text on dark background
    fontSize: 18,
  },
});

export default SubtitleOverlay;
