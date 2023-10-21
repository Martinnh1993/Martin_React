import { View, Image, StyleSheet, Text } from "react-native";

import Title from '../components/ui/Title';
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";

function GameOverScreen({wrongGuesses, onStartNewGame}) {
  let titleText = '';
  let stats = '';
  let endImage = null;

  if (wrongGuesses < 6) {
    endImage = (
      <Image
        style={styles.image}
        source={require('../assets/images/victory.jpg')}
      />
    );
    titleText = 'Victory!';
    stateText = `Congratulation you guessed the with with ${wrongGuesses} wrong guesses`;
  } else {
    endImage = (
      <Image
        style={styles.image}
        source={require('../assets/images/loss.jpg')}
      />
    );
    titleText = 'Defeat!';
    stateText = `Sorry you didn't manage to guess the word in 6 rounds`;
  }

  return <View style={styles.rootContainer}>
      <Title>{titleText}</Title>
      <View style={styles.imageContainer}>{endImage}</View>
          <Card>
            <Text style={styles.summaryText}>
                {stateText}
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
          </Card>
  </View>
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer:{
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center'
  },
  imageContainer: {
      width: 300,
      height: 300,
      borderRadius: 150,
      borderWidth: 3,
      borderColor: Colors.primary700,
      overflow: 'hidden',
      margin: 36
  },
  image: {
      width: '100%',
      height: '100%',

  },
  summaryText: {
      fontFamily: 'open-sans',
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 24,
      color: Colors.primary400
  },
  highlight: {
      fontFamily: 'open-sans-bold',
      color: Colors.primary500
  }
})