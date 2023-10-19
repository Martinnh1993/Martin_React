import { TextInput, View, StyleSheet, Alert } from "react-native"; 
import { useState } from "react";
import axios from 'axios';

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
// for some reason when you use auto complete sometimes it fucks it up and don't capatalize. then when you fix it it says there is a problem

function StartGameScreenBackup({onPickNumber}) {
    const [enteredValue, setEnteredValue] = useState('');

    function textInputHandler(enteredText) {
        setEnteredValue(enteredText);
    }

    function resetInputHandler() {
        setEnteredValue('');
    }



    async function pickWordLength(length) {
    const options = {
        method: 'GET',
        url: `https://random-word-api.p.rapidapi.com/L/${length}`,
        headers: {
        'X-RapidAPI-Key': 'e79b5cb0ffmsh6dc673e82c601afp13e8e1jsn312b8e9228f9',
        'X-RapidAPI-Host': 'random-word-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredValue);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!',
            'Number has to be a number between 1 and 99.',
            [{ text: 'Okay', style:'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(chosenNumber);
        onPickNumber(pickWordLength);
        
    }
    return (
    <View style={styles.rootContainer}>
        <Title>Guess my number</Title>
            <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput 
            style={styles.textInput} 
            maxLength={10} 
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={textInputHandler}
            value={enteredValue}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.bottonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton> 
                </View>
                <View style={styles.bottonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton> 
                </View>
            </View>
        </Card>
    </View>
    );
}

export default StartGameScreenBackup;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    bottonContainer: {
        flex: 1
    }
});