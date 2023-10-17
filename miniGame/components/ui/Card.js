import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card ({children}) {
    return <View style={styles.card}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary700,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height:8}, 
        shadowRadius: 6,
        shadowOpacity: 0.5
    }
})