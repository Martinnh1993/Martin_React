import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';
import Card from '../ui/Card';
import LetterCard from './LetterCard';

const WordBox = ({ word, guessedLetters }) => {
  const wordArray = word.split('');

  return (
    <View style={styles.container}>
      {wordArray.map((letter, index) => (
        <View key={index} style={styles.cardContainer}>
          <LetterCard
            letter={letter}
            guessed={guessedLetters.includes(letter)}
          />
        </View>
      ))}
    </View>
  );
};

export default WordBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 160,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.accent500,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    marginBottom: 10
  },
  cardContainer: {
    margin: 5, // Adjust the margin as needed
  },
});