/* import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView, Alert, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import { firebase } from '../firebase'

    const UploadMediaFile = ( {navigation}) => {
        const [image, setImage] = useState(null)
        const [uploading , setUploading] = useState(false)

        const pickImage = async() => {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4,3],
                quality: 1,
            })

            if (!result.canceled) {
                setImage(result.assets[0].uri)
            }
        }

        const uploadMedia = async () => {
            setUploading(true)

            try {
                const { uri } = await FileSystem.getInfoAsync(image)
                const blob = await new Promise((resolve, reject) => {
                    const xml = new XMLHttpRequest()
                    xml.onload = () => {
                        resolve(xml.response)
                    }
                    xml.onerror = (e) => {
                        reject(new TypeError('Netword request failed'))
                    }
                    xml.responseType = 'blob'
                    xml.open('GET', uri, true)
                    xml.send(null)
                })
                const fileName = image.substring(image.lastIndexOf('/' + 1))
                const ref = firebase.storage().ref().child(fileName)

                await ref.put(blob)
                setUploading(false)
                Alert.alert('Photo Uploaded!')
                setImage(null)
            } catch (error) {
                console.error(error)
                setUploading(false)
            }
        }

        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
                    <Text style={styles.buttonText}>Pick an Image</Text>
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    {image && <Image 
                        source={{ uri: image }}
                        style={{width: 300, height: 300}}
                    />}
                    <TouchableOpacity style={styles.uploadButton} onPress={uploadMedia}>
                    <Text style={styles.buttonText}>Upload Image</Text>
                    </TouchableOpacity>
                </View>
                <Button 
                title='Recipes' 
                onPress={() => navigation.navigate('Recipes')}
                />
            </SafeAreaView>
        )
    }

    export default UploadMediaFile
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',        
        backgroundColor: '#000'
    },
    selectButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18, 
        fontWeight: 'bold'
    },
    uploadButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    imageContainer: {
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center'

    }
}) */