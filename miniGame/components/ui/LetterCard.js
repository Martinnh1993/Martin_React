import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/colors';
import FlipCard from 'react-native-flip-card';

const LetterCard = ({ letter, guessed }) => {
    const [isGuessed, setIsGuessed] = useState(false);
  
    useEffect(() => {
      // Update the isGuessed state when the guessed prop changes
      if (guessed) {
        setIsGuessed(true);
      } else {
        setIsGuessed(false);
      }
    }, [guessed]);
  
    return (
      <View style={styles.cardContainer}>
        <FlipCard
          style={styles.card}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={isGuessed}
          clickable={false}
        >
          <View style={styles.face}>
            <Text style={styles.frontText}>X</Text>
          </View>
          <View style={styles.back}>
            <Text style={styles.backText}>{letter}</Text>
          </View>
        </FlipCard>
      </View>
    );
  };
  
  export default LetterCard;
  
  const styles = StyleSheet.create({
    cardContainer: {
      height: 60,
      width: 40,
      borderRadius: 8,
      
    },
    card: {
      flex: 1,
    },
    face: {
      flex: 1,
      backgroundColor: Colors.accent500,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      // Add a shadow for the face side
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: 6,
      shadowOpacity: 0.5,
    },
    back: {
      flex: 1,
      backgroundColor: 'transparent', // Set the background to transparent
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      borderColor: Colors.accent500,
      borderWidth: 2,
      // Add a shadow for the back side
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: 6,
      shadowOpacity: 0.5,
    },
    backText: {
      color: Colors.accent500,
      fontSize: 40,
    },
    frontText: {
      color: Colors.primary700,
      fontSize: 40,
    }
  });
  