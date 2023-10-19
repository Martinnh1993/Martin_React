import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList, TextInput} from "react-native";

import Title from "../components/ui/Title"; 
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Colors from "../constants/colors";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";
import ManFigure from "../components/ui/ManFigur";
import WordBox from "../components/ui/WordBox";



function GameScreen({ userNumber, randomWord, onGameOver }) {
    const [enteredValue, setEnteredValue] = useState('');
    const [word, setWord] = useState(userNumber);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const maxAttempts = 6;
    const [attempts, setAttempts] = useState(maxAttempts);
 

    function confirmInputHandler() {
        const enteredText = enteredValue.trim().toLowerCase(); // Convert the input to lowercase and remove leading/trailing whitespace
        if (guessedLetters.includes(enteredText)) {
          // Clear the input when the same letter/word is guessed again
          setEnteredValue('');
          // Alert when the same letter/word is guessed again
          Alert.alert('Duplicate Guess', 'You already guessed this letter/word.', [{ text: 'Okay' }]);
          return;
        }
      
        if (enteredText.length === 1) {
          // Handle single letter guess
          // Place your logic for processing single letter guesses here
          setGuessedLetters((prevLetters) => [...prevLetters, enteredText]);
      
          if (!randomWord.includes(enteredText)) {
            // Update attempts and wrong letters for incorrect letter guess
            setAttempts((prevAttempts) => prevAttempts - 1);
            setWrongLetters((prevWrongLetters) => [...prevWrongLetters, enteredText]);
          }
        } else if (enteredText.length === randomWord.length) {
          // Handle word guess
          setGuessedLetters((prevLetters) => [...prevLetters, enteredText]);
      
          if (enteredText === randomWord) {
            // Handle a correct word guess
          } else {
            // Update attempts and wrong letters for incorrect word guess
            setAttempts((prevAttempts) => prevAttempts - 1);
            setWrongLetters((prevWrongLetters) => [...prevWrongLetters, enteredText]);
          }
        } else {
          // Alert when input doesn't match the letter or the word
          Alert.alert('Invalid Guess', 'Please enter a single letter or a word of the correct length.', [{ text: 'Okay' }]);
        }
      
        // Clear the input after processing
        setEnteredValue('');
      }
      
      
      
    
      function resetInputHandler() {
        setEnteredValue('');
      }

    function textInputHandler(enteredText) {
        setEnteredValue(enteredText);
      }

    return (
        <View style={styles.screen}>
           <Title>Hangman</Title>
           <WordBox word={randomWord} guessedLetters={guessedLetters} />
           <ManFigure wrongWord={wrongLetters.length} />
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
            onSubmitEditing={confirmInputHandler} // This line sets the function to be called on submit
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

           
           {/* <WordBox word={randomWord} guessedLetters={guessedLetters} /> */}
           {/* <View style={styles.listContainer}>
                <FlatList 
                data={guessRounds} 
                renderItem={(itemData) => (
                <GuessLogItem 
                    roundNumber={guessRoundsListLength - itemData.index} 
                    guess={itemData.item}
                />
                )}
                keyExtractor={(item) => item}
                />
            </View> */}
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    bottonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16
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
        fontSize: 20 
      },
      smallText: {
        fontSize: 15
      },    
      buttonsContainer: {
        flexDirection: 'row',
      },
      buttonContainer: {
        flex: 1,
      },
      
});
