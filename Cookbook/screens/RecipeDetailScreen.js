import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

    const RecipeDetailScreen = ({navigation}) => {
        return (
        <View style={styles.container}>
            <Text>Recipe Detail Screen</Text>
            <Button 
            title='Recipes' 
            onPress={() => navigation.navigate('Recipes')}
            />
            {/* for later use 
            <Button 
            title='Upload' 
            onPress={() => navigation.navigate('Upload')}
            /> */}
        </View>
        )
    }
    
    export default RecipeDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
        backgroundColor: 'white'
    }
})

