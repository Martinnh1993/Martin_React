import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'
import { AntDesign, MaterialIcons  } from '@expo/vector-icons';
import { db, doc, updateDoc, deleteDoc} from '../../firebase'

    const RecipeItem = (props) => {
        const [isChecked, setIsChecked] = useState(props.isChecked)
        
        const updateIsChecked = async () => {
            const shoppingRef = doc(db, "shopping", props.id)
            await updateDoc(shoppingRef, {
                isChecked: isChecked
            })
        }

        const deleteItem = async () => {
            await deleteDoc(doc(db, "shopping", props.id))
        }
    

        useEffect(() => {
            updateIsChecked()
        }, [isChecked])

        return (
            <View style={styles.container}>
                <Pressable onPress={() => {setIsChecked(!isChecked)}}>
                    {isChecked ? ( 
                        <AntDesign name="checkcircle" size={24} color="black" /> 
                    ) : ( 
                        <AntDesign name="checkcircleo" size={24} color="black" />     
                    )}
                </Pressable>
                <Text style={styles.title}>{props.title}</Text>
                <Pressable onPress={deleteItem}>
                  <MaterialIcons name="delete" size={24} color="black" />  
                </Pressable>
                
            </View>
        )
        
    }

    export default RecipeItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 10,


    },
    title: {
        flex: 1,
        marginLeft: 10,
        fontSize: 17,
        fontWeight: '500'


    }
})
