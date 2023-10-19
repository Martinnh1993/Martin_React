import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

function LetterCard ({children}) {
    return <View style={styles.card}>
        <Text>{children}</Text></View>
}

export default LetterCard;

const styles = StyleSheet.create({
    card: {
        height: 70,
        width: 40,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height:8}, 
        shadowRadius: 6,
        shadowOpacity: 0.5
    }
})