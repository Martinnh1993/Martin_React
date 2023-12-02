import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, SafeAreaView, Button, View, Pressable, TextInput, FlatList, ActivityIndicator } from 'react-native'
import { MaterialIcons  } from '@expo/vector-icons';
import ShoppingItem from './components/ShoppingItem'
import {app, db, getFirestore, collection, getDocs, addDoc, onSnapshot, deleteDoc, doc } from '../firebase'


    const ShoppingListScreen = ({navigation}) => {
        const [title, setTitle] = useState('')
        const [shoppingList, setShoppingList] = useState([])

        const addShoppingItem = async () => {
            try {
                const docRef = await addDoc(collection(db, 'shopping'), {
                    title: title,
                    isChecked: false
                })
                console.log("Document written with id:", docRef.id);
            } catch (e) {
                console.log("Error adding document: ", e);
            }
        }

        const deleteShoppingList = async () => {
            const querySnapshot = await getDocs(collection(db, 'shopping'))

            querySnapshot.docs.map((item) => deleteDoc(doc(db, "shopping", item.id)))
        }

        const getShoppingList = () => {
            onSnapshot(collection(db, "shopping"), (querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({
                        ...doc.data(),
                        id: doc.id,
                    });
                });
                setShoppingList(items);
            });
        }
        

        useEffect(() => {
            getShoppingList()
        }, [])
        
        return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Shopping List</Text>
                <Text style={styles.noOfItems}>{shoppingList.length}</Text>
                <Pressable onPress={deleteShoppingList}>
                  <MaterialIcons name="delete" size={30} color="black" />    
                </Pressable>
            </View>
            
            {shoppingList.length > 0 ? (
            <FlatList 
                data={shoppingList}
                renderItem={({item}) => (
                    <ShoppingItem 
                        title={item.title} 
                        isChecked={item.isChecked} 
                        id={item.id}
                    />
                )}
                keyExtractor={item => item.id}
            />
            ) : (
            <ActivityIndicator/>
            )}
        
        
            <TextInput 
            placeholder='Enter shopping item' 
            style={styles.input} 
            value={title} 
            onChangeText={(titleText) => setTitle(titleText)}
            onSubmitEditing={addShoppingItem}
            
            />
            <Button 
            title='Recipes' 
            onPress={() => navigation.navigate('Recipes')}
            />
            {/* for later use 
            <Button 
            title='Upload' 
            onPress={() => navigation.navigate('Upload')}
            /> */}
        </SafeAreaView>
        )
    }
    
    export default ShoppingListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,      
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        justifyContent: 'space-bwtween',
        alignItems: 'center',
        marginBottom: 10
    },
    heading: {
        fontSize: 30,
        fontWeight: '500',
        flex: 1,

    },
    noOfItems: {
        fontSize: 30,
        fontWeight: '500',
        marginRight: 20

    },
    input: {
        backgroundColor: 'lightgrey',
        padding: 10,
        fontSize: 17,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 'auto'
    }
})

