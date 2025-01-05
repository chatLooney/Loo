import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Voice from 'react-native-voice';

const VoiceRecognition = ({ onSpeechResults }) => {
  const [isListening, setIsListening] = useState(false);
  const [speechText, setSpeechText] = useState('');

  useEffect(() => {
    // Start listening when component mounts
    Voice.onSpeechResults = onSpeechResultsHandler;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResultsHandler = (e) => {
    const text = e.value[0]; // First result from voice recognition
    setSpeechText(text);
    onSpeechResults(text); // Pass results back to parent component for translation
  };

  const startListening = () => {
    setIsListening(true);
    Voice.start('en-US'); // Start listening in English, adjust to any language you need
  };

  const stopListening = () => {
    setIsListening(false);
    Voice.stop();
  };

  return (
    <View>
      <Button
        title={isListening ? 'Stop Listening' : 'Start Listening'}
        onPress={isListening ? stopListening : startListening}
      />
      <Text>{speechText}</Text>
    </View>
  );
};

export default VoiceRecognition;
