import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import { GlobalStyles } from '../GlobalStyles'; // Update with the correct path

const AboutScreen = () => {
    return (
        <ScrollView style={GlobalStyles.container}>
            <View style={GlobalStyles.row}>
            <Text style={styles.title}>Globe Trotter's Diary</Text>
            <Image
                source={require('../assets/Images/GlobeTrottersDiaryNoBG.png')} // Update with the correct path
                style={styles.image}
            />
            
            </View>
            <Text style={GlobalStyles.text}>
                GlobeTrotter's Diary is your personal travel companion app that helps you document and remember all your amazing adventures. With a focus on ease of use and elegant design, it lets you capture your travel memories, plan new journeys, and share your experiences with friends and family. Whether you're a casual traveler or a seasoned explorer, GlobeTrotter's Diary is designed to enhance your travel experience.
            
                {'\n'} 
                {'\n'} 

                Our app offers a unique blend of travel journaling and exploration tools. Discover new destinations with our curated lists, keep a detailed log of your travels with our intuitive diary feature, and never lose track of your memories with our seamless photo integration. GlobeTrotter's Diary is more than an app; it's a companion that grows with every journey you take.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        width: '54%',
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: 200, 
    },
  
});

export default AboutScreen;
