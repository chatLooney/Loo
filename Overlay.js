import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Overlay = ({ children }) => {
  return (
    <View style={styles.overlay}>
      <Text style={styles.overlayText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 5,
    zIndex: 1000,
  },
  overlayText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default Overlay;
