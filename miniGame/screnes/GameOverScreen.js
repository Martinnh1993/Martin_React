import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameOverScreen = ({ numberOfRounds, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>Number of Rounds: {numberOfRounds}</Text>
      {/* Add a button or UI element to start a new game */}
      {/* For example: <Button title="New Game" onPress={onNewGame} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
