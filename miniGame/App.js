import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import GameScreen from './screnes/GameScreen';
import StartGameScreen from './screnes/StartGameScreen';
import GameOverScreen from './screnes/GameOverScreen';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNr] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [randomWord, setRandomWord] = useState('');
  const [guessRounds, setGuessRounds] = useState(0);
  
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNr(pickedNumber);
    setGameIsOver(false);
  }

  function randomWordHandler(word) {
    setRandomWord(word);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNr(null);
    setGuessRounds(0);
    setRandomWord('');
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} onRandomWord={randomWordHandler} />;

  if (userNumber) {
    if (randomWord) {
      screen = (
        <GameScreen
          userNumber={userNumber}
          onGameOver={gameOverHandler}
          randomWord={randomWord}
        />
      );
    } else {
      // Handle loading or show a placeholder until randomWord is available.
    }
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
        randomWord={randomWord}
      />
    );
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.primary600, Colors.primary500, Colors.primary400]} style={styles.rootScrene}>
      <ImageBackground
        source={require('./assets/images/test.jpg')}
        style={styles.rootScrene}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScrene}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScrene: {
    flex: 1
  },
  backgroundImage: {
    resizeMode: 'cover',
    opacity: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
});
