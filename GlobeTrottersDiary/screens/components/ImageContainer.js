import React, { useState, useEffect } from 'react'
import { View, Text, Modal, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import ImageCard from './ImageCard'
import { db, collection, onSnapshot } from '../../Firebase'
import { GlobalStyles, colors } from '../../GlobalStyles'

const ImageContainer = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [cityImages, setCityImages] = useState({})
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        // Listen for real-time updates to cities
        onSnapshot(collection(db, "cities"), (citySnapshot) => {
            let cities = citySnapshot.docs.map(doc => doc.data().name)
    
            let cityImagesData = {}
            cities.forEach(city => {
                // Listen for real-time updates to each city's images
                onSnapshot(collection(db, `${city}_images`), (imageSnapshot) => {
                    cityImagesData[city] = imageSnapshot.docs.map(doc => doc.data())
                    setCityImages({ ...cityImagesData })
                })
            })
    
            setLoading(false);
        })
    }, [])
    
    if (loading) {
        return <Text>Loading...</Text>
    }

    if (error) {
        return <Text>Error: {error.message}</Text>
    }

    const handleImagePress = (image) => {
        setSelectedImage(image)  
    }

    return (
        <>
            <ScrollView>
                {Object.entries(cityImages).map(([cityName, images]) => (
                    <View key={cityName}>
                        <Text style={GlobalStyles.title}>{cityName}</Text>
                        <View style={styles.imageContainer}>
                            {images.map((img, index) => (
                                <ImageCard key={index} image={img} onPress={handleImagePress} />
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>

            {selectedImage && (
                <Modal
                visible={!!selectedImage}
                transparent={true}
                onRequestClose={() => setSelectedImage(null)}
            >
                <View style={styles.fullScreenContainer}>
                    <Image source={{ uri: selectedImage?.url }} style={styles.fullScreenImage} />
                    
                    {/* Close Button */}
                    <Pressable
                        style={[GlobalStyles.button, styles.closeButton]}
                        onPress={() => setSelectedImage(null)}
                    >
                        <Text>Close</Text>
                    </Pressable>
                </View>
            </Modal>
            )}
        </>
    )
}    

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '1',
    },
    fullScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    fullScreenImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain', 
    },
    closeButton: {
        position: 'absolute',
        bottom: 150,
    }
});

export default ImageContainer
