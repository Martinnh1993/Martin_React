import React, { useState, useEffect } from 'react'
import { View, Pressable, TextInput, Image, Text, StyleSheet, ActivityIndicator } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator'
import { GlobalStyles, colors } from '../../GlobalStyles'
import { db, collection, addDoc, getDocs, query, where } from '../../Firebase'

const AddImage = ({ onSave, onCancel }) => {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [title, setTitle] = useState('')

    useEffect(() => {
        // Requesting permission for camera roll access
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!')
                }
            }
        })()
    }, [])

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
    
        console.log("Image selected: ", result)
    
        if (!result.canceled && result.assets && result.assets.length > 0) {
            const imageUri = result.assets[0].uri
            console.log("Image URI set: ", imageUri)
            setImage(imageUri)
        }
    };
    

    const handleImageSelection = async () => {
        if (!image) {
            alert('Please select an image first!')
            return
        }

        // Transform the title to lowercase for the folder name
        const folderPath = title.toLowerCase()
    
        setLoading(true)
        let formData = new FormData()
        formData.append('file', {
            uri: image,
            type: 'image/jpeg',
            name: 'upload.jpg',
        });
        formData.append('upload_preset', 'rwfjszyr')

        // Include the folder path in the request
        formData.append('folder', folderPath)
    
        try {
            let response = await fetch(`https://api.cloudinary.com/v1_1/dmwakkiu5/image/upload`, {
                method: 'POST',
                body: formData,
                headers: {
                    'content-type': 'multipart/form-data',
                },
            });
            let data = await response.json()
    
            console.log("Cloudinary response: ", data)
    
            if (data.secure_url) {
                setImage(data.secure_url)
                onSave(data.secure_url)

            // Firebase: Store the image URL in the corresponding collection
            const collectionName = `${folderPath}_images`
            await addDoc(collection(db, collectionName), {
                url: data.secure_url,
                
            })
            console.log("Image uploaded to Cloudinary and URL stored in Firebase")
            const cityQuery = query(collection(db, "cities"), where("name", "==", folderPath))
            const cityQuerySnapshot = await getDocs(cityQuery)

            if (cityQuerySnapshot.empty) {
                // Add city to 'cities' collection if it doesn't exist
                await addDoc(collection(db, "cities"), { name: folderPath })
            }

            console.log("City and Image URL added to Firebase")

            } else {
                console.log("Failed to upload image, response: ", data)
                setError("Failed to upload image!")
            }
        } catch (error) {
            console.error("Upload error: ", error)
            setError("An error occurred while uploading the image.")
        } finally {
            setLoading(false)
        }
    };
    
    const captureImage = async () => {
        // Request camera permissions
        const cameraPermission = await ImagePicker.requestCameraPermissionsAsync()
        const cameraRollPermission = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (cameraPermission.status !== 'granted' || cameraRollPermission.status !== 'granted') {
            alert('Camera and camera roll permissions are required to take a picture')
            return
        }

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            const resizedImage = await ImageManipulator.manipulateAsync(
                result.assets[0].uri,
                [{ resize: { width: 2500} }],
                { compress: 0.8 } 
            )
            setImage(resizedImage.uri)
        }
        console.log(image)
    
        if (!result.canceled) {
            const imageUri = result.assets[0].uri;
            setImage(imageUri)
        }        
    }
    
    return (
        <View style={[GlobalStyles.container, styles.container]}>
            {image && <Image source={{ uri: image }} style={styles.preview} />}

            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="Enter a title for the image"
                style={[GlobalStyles.textInput, styles.input]}
            />
            <View style={GlobalStyles.row}>
                <Pressable style={[GlobalStyles.button, styles.button]} onPress={selectImage}>
                    <Text style={GlobalStyles.buttonText}>Select Image</Text>
                </Pressable>
                <Pressable style={[GlobalStyles.button, styles.button]} onPress={captureImage}>
                    <Text style={GlobalStyles.buttonText}>Take Picture</Text>
                </Pressable>
            </View>
            <View style={GlobalStyles.row}>
                <Pressable style={[GlobalStyles.button, styles.button]} onPress={handleImageSelection}>
                    <Text style={GlobalStyles.buttonText}>Upload</Text>
                </Pressable>
                <Pressable style={[GlobalStyles.button, styles.button, styles.close]} onPress={onCancel}>
                    <Text style={GlobalStyles.buttonText}>Cancel</Text>
                </Pressable>
            </View>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {error && <Text style={styles.errorText}>Error: {error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    preview: {
        width: 300,
        height: 300,
        marginBottom: 20,
        // Add other styling as needed
    },
    input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 20,
        width: '100%',
        padding: 10,
    },
    button: {
        marginBottom: 20,
    },
    close: {
        backgroundColor: 'red'
    }
})

export default AddImage
