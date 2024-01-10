import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Pressable, Modal } from 'react-native'
import { db, collection, getDocs, onSnapshot, addDoc } from '../Firebase'
import JournalItem from './components/JournalItem'
import { GlobalStyles, colors } from '../GlobalStyles'
import { MaterialIcons } from '@expo/vector-icons'
import AddJournalEntry from './components/AddJournalEntry'

const MyJournalsScreen = () => {
    const [journalList, setJournalList] = useState([])
    const [addModalVisible, setAddModalVisible] = useState(false)

    const getJournalList = () => {
        onSnapshot(collection(db, "journals"), (querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push({
                    ...doc.data(),
                    id: doc.id,
                })
            })
            // Sort items by date (oldest first)
            items.sort((a, b) => (a.date.toDate() > b.date.toDate()) ? 1 : -1)
            setJournalList(items)
        })
    }

    const handleSaveEntry = (title, date, diary) => {
        // Check if any field is empty
        if (!title.trim() || !date || !diary.trim()) {
            alert("Please fill in all fields before saving.")
            return
        }
    
        const addJournalItem = async () => {
            try {
                const docRef = await addDoc(collection(db, 'journals'), {
                    title: title,
                    date: date,
                    diary: diary
                });
                console.log("Document written with id:", docRef.id)
            } catch (e) {
                console.error("Error adding document: ", e)
            }
        }
    
        addJournalItem();
        setAddModalVisible(false)
    }
     
    useEffect(() => {
        getJournalList()
    }, [])

    return (
        <View style={GlobalStyles.container}>
                <Pressable 
                    style={styles.addButton} 
                    onPress={() => setAddModalVisible(true)}>
                    <MaterialIcons name="add-circle" size={24} color="black" />
                    <Text style={GlobalStyles.text}> Add New Journal</Text>
                </Pressable>
                <Modal
                    visible={addModalVisible}
                    onRequestClose={() => setAddModalVisible(false)}>
                    <AddJournalEntry 
                        onSave={handleSaveEntry} 
                        onCancel={() => setAddModalVisible(false)} 
                    />
                </Modal>
                {/* Your FlatList and other content */}
      
            <FlatList
                data={journalList}
                renderItem={({ item }) => <JournalItem {...item} />}
                keyExtractor={item => item.id}
            />
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

export default MyJournalsScreen