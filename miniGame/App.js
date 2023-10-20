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
  const [gameIsOver, setGameIsOver] = useState(true);
  const [randomWord, setRandomWord] = useState('');
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function randomWordHandler(word) {
    setRandomWord(word);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setNumberOfRounds(numberOfRounds);
  }
  

  function startNewGameHandler() {
    setNumberOfRounds(0);
    setRandomWord('');
  }

  let screen = null;

  if (gameIsOver && randomWord) {
    screen = (
      <GameOverScreen
      numberOfRounds={numberOfRounds}
      onStartNewGame={startNewGameHandler}
    />
    
    );
  } else if (randomWord) {
    screen = (
      <GameScreen
        onGameOver={gameOverHandler}
        randomWord={randomWord}
      />
    );
  } else {
    screen = (
      <StartGameScreen onRandomWord={randomWordHandler} />
    )
    }
  
  

  

  return (
    <LinearGradient colors={[Colors.primary700, Colors.primary600, Colors.primary500, Colors.primary400]} style={styles.rootScrene}>
      <ImageBackground
        source={require('./assets/images/backgroundWood.jpg')}
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
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
});
