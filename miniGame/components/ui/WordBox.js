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
        <LetterCard key={index}>
          {guessedLetters.includes(letter) ? (
            <Text style={styles.cardFront}>{letter}</Text>
          ) : (
            <View style={styles.cardBack} />
          )}
        </LetterCard>
      ))}
    </View>
  );
};

export default WordBox;

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 150,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.primary700,
  },
  cardBack: {
    justifyContent: 'center',
    backgroundColor: 'white'
    
  },
  cardFront: {
    fontSize: 40,
    backgroundColor: 'transparent',
    borderWidth:2,
    borderColor: 'white',
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
});