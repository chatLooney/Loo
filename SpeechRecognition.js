import { useEffect, useState } from 'react';
import Voice from '@react-native-voice/voice';

const useSpeechRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');

  // Initialize Voice listeners
  useEffect(() => {
    Voice.onSpeechStart = () => {
      setIsListening(true);
    };
    Voice.onSpeechResults = (e) => {
      // Capture speech results
      setTranscribedText(e.value[0]);
    };
    Voice.onSpeechError = (e) => {
      console.error('Speech error:', e.error);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      await Voice.start('en-US'); // You can change the language code as needed
    } catch (error) {
      console.error('Error starting voice recognition:', error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.error('Error stopping voice recognition:', error);
    }
  };

  return {
    isListening,
    transcribedText,
    startListening,
    stopListening,
  };
};

export default useSpeechRecognition;
