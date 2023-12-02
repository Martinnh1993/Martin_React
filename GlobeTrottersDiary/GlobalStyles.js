// styles/globalStyles.js
import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#4A90E2', // A blue shade, similar to the logo's primary color
    secondary: '#5dbfb7', // A complementary orange shade
    background: '#dbc9a5', // White background
    text: '#0c3e51', // Standard text color, dark grey
    subtitle: '#666666', // Lighter grey for subtitles or secondary text
};

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20 
    },
    title: {
        fontSize: 24,
        color: colors.text,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: colors.subtitle,
        marginBottom: 5,
    },
    text: {
        fontSize: 20,
        color: colors.text,
    },
    button: {
        backgroundColor: colors.secondary,
        padding: 15,
        borderRadius: 10,
        height: 45,
        width: 150,
        marginHorizontal: 10,
        alignItems: 'center', // Centers content vertically in the button
        justifyContent: 'center', // Centers content horizontally in the button
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center', // Align items vertically
        justifyContent: 'flex-start', // Align items horizontally
        marginBottom: 20,
    },
    textContainer: {
        flex: 1, // Take up remaining space
        paddingLeft: 20, // Add some padding between the text and the image
    },
    textInput: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.secondary,
        paddingVertical: 5,
        marginVertical: 10
    }

  
});