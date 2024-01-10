import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { GlobalStyles, colors } from '../GlobalStyles'
import ImageContainer from './components/ImageContainer'
import AddImage from './components/AddImage'

const GalleryScreen = () => {
    const [addModalVisible, setAddModalVisible] = useState(false)

    // Function to handle adding new images - triggered when the modal saves
    const handleAddImage = (imageData) => {
        setAddModalVisible(false)
    }

    return (
        <View style={GlobalStyles.container}>
            <Pressable style={styles.addButton} onPress={() => setAddModalVisible(true)}>
                <MaterialIcons name="add-circle" size={24} color="black" />
                <Text> Add New Image</Text>
            </Pressable>
            <Modal
                visible={addModalVisible}
                onRequestClose={() => setAddModalVisible(false)}>
                <AddImage 
                    onSave={handleAddImage} 
                    onCancel={() => setAddModalVisible(false)} 
                />
            </Modal>
            
            <ImageContainer/>
        </View>
    )
}

const styles = StyleSheet.create({
      addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 10
    },
    addButtonText: {
        marginLeft: 10,
        fontSize: 18,
    },
});

export default GalleryScreen