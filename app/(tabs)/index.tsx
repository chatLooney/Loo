// app/(tabs)/index.tsx

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SubtitleOverlay from '../components/SubtitleOverlay'; // Ensure you have the SubtitleOverlay component
import { translateText } from '../services/translation'; // Import the translateText function

const IndexScreen = () => {
  const [translatedText, setTranslatedText] = useState(''); // State to hold the translated text
  const [isListening, setIsListening] = useState(false); // State to control listening status

  useEffect(() => {
    if (isListening) {
      const fetchTranslation = async () => {
        try {
          // Placeholder for actual speech-to-text logic
          const rawText = 'Hello, how are you?'; // Replace with real-time speech-to-text input
          const translation = await translateText(rawText); // Get the translated text
          setTranslatedText(translation); // Update state with translated text
        } catch (error) {
          console.error('Error translating text:', error);
          setTranslatedText('Translation failed'); // Handle any errors during translation
        }
      };

      fetchTranslation(); // Call the fetchTranslation function
    }
  }, [isListening]); // Only trigger when 'isListening' changes

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HelloTalk Live Translator</Text>
      <SubtitleOverlay text={translatedText} /> {/* Display the translated text */}
      <Text style={styles.status}>
        {isListening ? 'Listening...' : 'Tap to Start Listening'}
      </Text>
      <Text onPress={() => setIsListening(!isListening)} style={styles.button}>
        Start/Stop Listening
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 18,
    color: 'gray',
    marginTop: 20,
  },
  button: {
    fontSize: 20,
    color: 'blue',
    marginTop: 30,
  },
});

export default IndexScreen;
