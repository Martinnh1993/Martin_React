import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { GlobalStyles, colors } from '../../GlobalStyles';

const VisitItem = ({ headerText, imageUrl }) => {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{headerText}</Text>
                <FontAwesome5 name="map-pin" size={24} color="red" />
            </View>
            {imageUrl ? (
                <Image style={styles.image} source={{ uri: imageUrl }} />
            ) : (
                <View style={styles.placeholderImage}>
                    <Text style={styles.placeholderText}>No Image</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        borderRadius: 10,
        padding: 10,
        margin: 5,
        width: '45%', // Adjust width to fit two items side by side
        aspectRatio: 1, // Makes the box square
    },
    headerContainer: {
        flexDirection: 'row', // Align items in a row
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    header: {
        marginLeft: 8, // Add some space between the icon and the text
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 5,
    },
    placeholderImage: {
        width: '100%',
        height: '85%',
        backgroundColor: 'black', // Placeholder background color
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    placeholderText: {
        color: 'white',
        fontSize: 14,
    },
});

export default VisitItem;
