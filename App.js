import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import useSpeechRecognition from './SpeechRecognition'; // Import the custom hook
import { PermissionsAndroid, Platform as RNPlatform } from 'react-native';

// Custom hook (useSpeechRecognition.js) example
const useSpeechRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');

  const startListening = async () => {
    // Request microphone permission on Android
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Microphone permission denied');
        return;
      }
    }

    setIsListening(true);
    // Add logic for speech recognition here
    // Example: Start speech recognition and update transcribedText
    // This is just a placeholder for actual implementation
    setTimeout(() => {
      setTranscribedText('This is some transcribed text from speech');
    }, 3000);
  };

  const stopListening = () => {
    setIsListening(false);
    setTranscribedText(''); // Reset transcribed text when stopping
  };

  return { isListening, transcribedText, startListening, stopListening };
};

const App = () => {
  const { isListening, transcribedText, startListening, stopListening } = useSpeechRecognition();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice-to-Text</Text>
      <Text style={styles.transcribedText}>{transcribedText || 'Say something!'}</Text>
      <View style={styles.buttons}>
        {isListening ? (
          <Button title="Stop Listening" onPress={stopListening} />
        ) : (
          <Button title="Start Listening" onPress={startListening} />
        )}
      </View>
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
    marginBottom: 20,
  },
  transcribedText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default App;
