import React from 'react'
import { View, Text, StyleSheet, Image, Pressable  } from 'react-native'

const ImageCard = ({ image, onPress }) => {
    return (
        <Pressable 
        onPress={() => onPress(image)}
        style={styles.cardContainer}
        >   
            <Image source={{ uri: image.url }} style={styles.image} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '33%', 
        aspectRatio: 1,
    },
    image: {
        width: '100%',
        height: '100%'
    },
})

export default ImageCard