import React from 'react';
import { Text, StyleSheet, View, Pressable, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { db, doc, deleteDoc } from '../../Firebase';
import { GlobalStyles, colors } from '../../GlobalStyles';

const JournalItem = (props) => {
    
    const deleteItem = async () => {
        await deleteDoc(doc(db, "journals", props.id));
    };

    const handleLongPress = () => {
        Alert.alert(
            "Delete Journal Entry",
            "If you want to delete this entry click on the delete button",
            [
                { 
                    text: "Delete", onPress: () => deleteItem() 
                },
                {
                    text: "Cancel",
                    style: "cancel"
                }
            ],
            { cancelable: false }
        );
    };

    // Format the date correctly
    let formattedDate = '';

    // Check if 'date' is a Firestore Timestamp and convert it
    if (props.date && props.date.toDate) {
        formattedDate = props.date.toDate().toDateString();
    } else if (props.date) {
        // If it's already a Date object or a date string
        formattedDate = new Date(props.date).toDateString();
    }

    return (
        <Pressable onLongPress={handleLongPress} style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={GlobalStyles.title}>{props.title}</Text>
                    <Text style={GlobalStyles.subtitle}>{formattedDate}</Text>
                </View>
                <Text style={GlobalStyles.text}>{props.diary}</Text>
                
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        padding: 10,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
});

export default JournalItem;
