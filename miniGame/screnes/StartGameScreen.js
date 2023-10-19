import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickNumber, onRandomWord }) {
  const [enteredValue, setEnteredValue] = useState('');
  const [randomWord, setRandomWord] = useState('');

  function textInputHandler(enteredText) {
    setEnteredValue(enteredText);
  }

  function resetInputHandler() {
    setEnteredValue('');
  }

  async function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);

    if (chosenNumber <= 2) {
      Alert.alert('That seems a bit too easy.');
      return;
    }

    try {
      const response = await fetchRandomWord(chosenNumber);

      if (response && response.word) {
        const word = response.word;
        onPickNumber(chosenNumber); // Pass the chosen number
        onRandomWord(word); // Pass the random word
        console.log('start game screen:', word);
      } else {
        Alert.alert(
          'No words found with that length. Response data:',
          JSON.stringify(response)
        );
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error fetching a random word.');
    }
  }

  async function fetchRandomWord(length) {
    const options = {
      method: 'GET',
      url: `https://random-word-api.p.rapidapi.com/L/${length}`,
      headers: {
        'X-RapidAPI-Key': 'e79b5cb0ffmsh6dc673e82c601afp13e8e1jsn312b8e9228f9',
        'X-RapidAPI-Host': 'random-word-api.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log('word from fetch:', response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my word</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.textInput}
          maxLength={10}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={textInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
