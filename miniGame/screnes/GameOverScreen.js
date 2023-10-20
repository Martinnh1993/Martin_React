import { View, Image, StyleSheet, Text } from "react-native";

import Title from '../components/ui/Title';
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";

function GameOverScreen({numberOfRounds, onStartNewGame}) {
  let titleText = '';
  let stats = '';
  let endImage = null;

  if (numberOfRounds === 0) {
    endImage = (
      <Image
        style={styles.image}
        source={require('../assets/images/victory.jpg')}
      />
    );
    titleText = 'Won';
    stats = 'win';
  } else {
    endImage = (
      <Image
        style={styles.image}
        source={require('../assets/images/loss.jpg')}
      />
    );
    titleText = 'Lost';
    stats = 'lose';
  }

  return <View style={styles.rootContainer}>
      <Title>You {titleText} the game</Title>
      <View style={styles.imageContainer}>{endImage}</View>
          <Card>
            <Text style={styles.summaryText}>
                it took you {numberOfRounds} rounds to guess the word and {titleText} the game.
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