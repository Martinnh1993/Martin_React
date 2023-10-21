import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, TextInput } from "react-native";


import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Colors from "../constants/colors";
import InstructionText from "../components/ui/InstructionText";
import ManFigure from "../components/ui/ManFigur";
import WordBox from "../components/ui/WordBox";
import KeyboardAvoidingContainer from "../components/KeyboardAvoidingContainer";



function GameScreen({ randomWord, onGameOver, wrongGuesses  }) {
  const [enteredValue, setEnteredValue] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const maxAttempts = 6;
  const [attempts, setAttempts] = useState(maxAttempts);

  useEffect(() => {
    setAttempts(maxAttempts- wrongLetters.length)
    if (attempts === 0) {
      onGameOver(maxAttempts - attempts);
    } 
    if (isWordGuessed(guessedLetters, randomWord)) {
        // Handle game over for a correct word guess
        onGameOver(maxAttempts - attempts);
      }  
  }, [guessedLetters, randomWord, onGameOver, maxAttempts, attempts]);
  
  


  function confirmInputHandler() {
    const enteredText = enteredValue.trim().toLowerCase();

    if (guessedLetters.includes(enteredText)) {
      setEnteredValue('');
      Alert.alert('Duplicate Guess', 'You already guessed this letter/word.', [{ text: 'Okay' }]);
      return;
    }
  
    if (enteredText === randomWord) {
      // Handle game over for a correct word guess
      setGuessedLetters(randomWord.split(''));
      onGameOver(maxAttempts - attempts);
      return; // Exit the function to prevent further processing
    }

  
    if (enteredText.length === 1) {
      setGuessedLetters((prevLetters) => [...prevLetters, enteredText]);
  
      if (!randomWord.includes(enteredText)) {
        setWrongLetters((prevWrongLetters) => [...prevWrongLetters, enteredText]);
      } else {
        // Correct letter guess; no need to increment numberOfRounds
      }
    } else {
      setGuessedLetters((prevLetters) => [...prevLetters, enteredText]);
      // Check if all letters have been correctly guessed
      if (isWordGuessed(guessedLetters, randomWord)) {
        // Handle game over for a correct word guess
        onGameOver(maxAttempts - attempts);
        return; // Exit the function to prevent further processing
      }
      setWrongLetters((prevWrongLetters) => [...prevWrongLetters, enteredText]);
    }
    setEnteredValue('');
  }
  
  function isWordGuessed(guessedLetters, randomWord) {
    // Initialize an array to track which letters have been guessed
    const lettersGuessed = new Array(randomWord.length).fill(false);
  
    // Loop through guessed letters and update the corresponding index in lettersGuessed
    for (const letter of guessedLetters) {
      const index = randomWord.indexOf(letter);
      if (index !== -1) {
        lettersGuessed[index] = true;
      }
    }
    // Check if all letters have been guessed
    return lettersGuessed.every((guessed) => guessed);
  }
  
  function resetInputHandler() {
      setEnteredValue('');
  }

  function textInputHandler(enteredText) {
      setEnteredValue(enteredText);
  }

  return (
      <KeyboardAvoidingContainer style={styles.screen}>
          <WordBox word={randomWord} guessedLetters={guessedLetters} />
          <View style={styles.hangmanContainer}>
              <ManFigure wrongWord={wrongLetters.length} style={styles.screen} />
          </View>
          <Card>
              <InstructionText style={styles.text}>Guess on a letter or a word</InstructionText>
              <InstructionText style={styles.smallText}>You have: {attempts} attempts left</InstructionText>
              <TextInput
                  style={styles.textInput}
                  maxLength={30}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={textInputHandler}
                  value={enteredValue}
                  onSubmitEditing={confirmInputHandler}
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
      </KeyboardAvoidingContainer>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
      padding: 24,
  },
  instructionText: {
      marginBottom: 12,
  },
  listContainer: {
      flex: 1,
      padding: 16,
  },
  textInput: {
      height: 50,
      width: 100,
      fontSize: 32,
      borderBottomColor: Colors.accent500,
      borderBottomWidth: 2,
      color: Colors.accent500,
      marginVertical: 8,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  text: {
      fontSize: 20,
  },
  smallText: {
      fontSize: 15,
  },
  buttonsContainer: {
      flexDirection: 'row',
  },
  buttonContainer: {
      flex: 1,
  },
  hangmanContainer: {
      justifyContent: 'center',
      alignItems: 'center',
  },
});