import { TextInput, View, StyleSheet } from "react-native"; 
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScrene() {
    const [enteredValue, setEnteredValue] = useState('');

    function textInputHandler(enteredText) {
        setEnteredValue(enteredText);
    }

    function confirmInputHandler() {
        
    }
    return (
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        maxLength={10} 
        keyboardType="name"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={textInputHandler}
        value={enteredValue}
        />
        <View style={styles.buttonsContainer}>
            <View style={styles.bottonContainer}>
               <PrimaryButton>Reset</PrimaryButton> 
            </View>
            <View style={styles.bottonContainer}>
               <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton> 
            </View>
        </View>
    </View>
    );
}

export default StartGameScrene;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#22202b',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height:8}, 
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
    textInput: {
        height: 50,
        width: 200,
        fontSize: 32,
        borderBottomColor: '#b45341',
        borderBottomWidth: 2,
        color: '#b45341',
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