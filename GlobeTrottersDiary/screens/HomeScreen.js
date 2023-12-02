import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { GlobalStyles, colors } from '../GlobalStyles';

const HomeScreen = () => {
    return (
        <View style={[GlobalStyles.container, styles.container]}>
            <Text style={styles.text}>Welcome to Globe Trotter's Diary</Text>
            <Image 
            source={require('../assets/Images/GlobeTrottersDiaryNoBG.png')} 
            style={styles.logo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 500, 
        height: 500,
        resizeMode: 'contain',
    },
    text: {
        color: colors.text,
        fontSize: 25,
        fontWeight: '600'
    }
});

export default HomeScreen;