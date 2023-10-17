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
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    <AppLoading/>;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNr(pickedNumber);
    setGameIsOver(false);
  }
  
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler () {
    setUserNr(null);
    guessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen 
    userNumber={userNumber} 
    roundsNumber={guessRounds} 
    onStartNewGame={startNewGameHandler}
    />
  }


  return <LinearGradient colors={[Colors.primary700, Colors.primary600, Colors.primary500, Colors.accent500]} style={styles.rootScrene}>
      <ImageBackground 
      source={(require('./assets/images/background.jpg'))} 
      resizeMode='cover'
      style={styles.rootScrene}
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScrene}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>;
}

const styles = StyleSheet.create({
  rootScrene: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.7
  }
});
