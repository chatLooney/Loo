import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { SpeechToText } from 'react-native-voice';

const SubtitlesOverlay = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');
  const [audioPermissionGranted, setAudioPermissionGranted] = useState(false);

  useEffect(() => {
    // Request microphone permission on component mount
    const requestPermissions = async () => {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.granted) {
        setAudioPermissionGranted(true);
      }
    };
    requestPermissions();

    // Initialize voice recognition service
    SpeechToText.addListener('onSpeechResults', (e) => {
      setTranscribedText(e.value.join(' ')); // Combine transcribed words
    });

    return () => {
      // Cleanup when component is unmounted
      SpeechToText.removeAllListeners();
    };
  }, []);

  const startListening = () => {
    if (audioPermissionGranted) {
      SpeechToText.start();
      setIsListening(true);
    } else {
      alert('Microphone permission is required.');
    }
  };

  const stopListening = () => {
    SpeechToText.stop();
    setIsListening(false);
  };

  return (
    <View style={styles.overlay}>
      <Text style={styles.transcriptionText}>{transcribedText}</Text>
      {!isListening ? (
        <Text style={styles.button} onPress={startListening}>
          Start Listening
        </Text>
      ) : (
        <Text style={styles.button} onPress={stopListening}>
          Stop Listening
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 50,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
    zIndex: 9999,
  },
  transcriptionText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default SubtitlesOverlay;
