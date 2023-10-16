import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScrene from './screnes/StartGameScrene';
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
  return <LinearGradient colors={['#242e3c', '#253343', '#242e3c', '#db6446', '#392e3a', '#22202b']} style={styles.rootScrene}>
      <ImageBackground 
      source={(require('./assets/images/background.jpg'))} 
      resizeMode='cover'
      style={styles.rootScrene}
      imageStyle={styles.backgroundImage}
      >
        <StartGameScrene/>
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
