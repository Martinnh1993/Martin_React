import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { GlobalStyles, colors } from '../../GlobalStyles'
import DateTimePicker from '@react-native-community/datetimepicker'
import { MaterialIcons } from '@expo/vector-icons'

const AddJournalEntry = ({ onSave, onCancel }) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState(new Date())
    const [diary, setDiary] = useState('')
    const [showDatePicker, setShowDatePicker] = useState(false)

    const handleSave = () => {
        onSave(title, date, diary)
    }

    const formatDate = (date) => {
        return date.toDateString()
    }

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.titleContainer}>
                <Text style={GlobalStyles.title}>Add a new Journal entry</Text>   
            </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Put the day here" value={title} onChangeText={setTitle} style={GlobalStyles.textInput}/>
                        <TextInput placeholder="Enter your diary text here" value={diary} onChangeText={setDiary} multiline style={GlobalStyles.textInput}/>
                        
                        <View style={styles.dateContaiiner}>
                        <Pressable 
                            style={styles.dateButton} 
                            onPress={() => setShowDatePicker(true)}>
                            <Text style={styles.dateText}>{formatDate(date)}</Text>
                            <MaterialIcons name="edit" size={20} color="black" />
                        </Pressable>
                            {showDatePicker && (
                                <DateTimePicker
                                    value={date}
                                    mode="date"
                                    display="default"
                                    onChange={(event, selectedDate) => {
                                        setShowDatePicker(false);
                                        if (selectedDate) {
                                            setDate(selectedDate);
                                        }
                                }}
                            />
                            )}
                    </View>
                </View>
            </TouchableWithoutFeedback>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={handleSave} 
                    style={GlobalStyles.button}>
                    <Text style={GlobalStyles.buttonText}>Save</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={onCancel} 
                    style={[GlobalStyles.button, { backgroundColor: 'red' }]}>
                    <Text style={GlobalStyles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        paddingTop: 100,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    inputContainer: {
        flex: 2,
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    dateContaiiner: {
        flexDirection: 'row',
        paddingTop: 100,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
   },
   dateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.secondary, 
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    dateText: {
        marginRight: 10,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
})

export default AddJournalEntry