import React from 'react'
import { Text, StyleSheet, SafeAreaView, Button, View, Pressable } from 'react-native'
import { FontAwesome  } from '@expo/vector-icons';

    const RecipesScreen = ({navigation}) => {
        return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable>
                    <FontAwesome name="bars" size={24} color="black" />    
                </Pressable> 
                <Text style={styles.heading}>Shopping List</Text>
                <Pressable>
                    <FontAwesome name="search" size={24} color="black" /> 
                </Pressable> 
               
            </View>
            <Text>Recipe Screen</Text>
            <Button 
            title='Details' 
            onPress={() => navigation.navigate('RecipeDetails')}
            />
            <Button 
            title='ShoppingList' 
            onPress={() => navigation.navigate('ShoppingList')}
            />
        </SafeAreaView>
        )
    }
    
    export default RecipesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
        backgroundColor: 'lightgrey'
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignSelf: 'center',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    heading: {
        fontSize: 30,
        fontWeight: '500',
        flex: 1,
    }
})
