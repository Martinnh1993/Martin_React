import React, { useState, useEffect } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import { StyleSheet, View, Alert, Text, Pressable } from 'react-native'
import { db, collection, addDoc, getDocs, deleteDoc, doc } from '../Firebase'

const initialRegion = {
    latitude: 55.67594,
    longitude: 12.56553,
    latitudeDelta: 2,
    longitudeDelta: 2,
}

const MapScreen = () => {
    const [markers, setMarkers] = useState([])
    const [selectedMarker, setSelectedMarker] = useState(null)

    useEffect(() => {
        const fetchMarkers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'markers'))
                const fetchedMarkers = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setMarkers(fetchedMarkers)
            } catch (e) {
                console.error("Error fetching markers: ", e)
            }
        };

        fetchMarkers();
    }, [])

    const addMarkerToFirebase = async (marker) => {
        try {
            const docRef = await addDoc(collection(db, 'markers'), {
                name: marker.name,
                latitude: marker.latitude,
                longitude: marker.longitude,
            });
            console.log("Marker added with ID:", docRef.id)
        } catch (e) {
            console.error("Error adding marker: ", e)
        }
    };
    
    const handleLongPress = (event) => {
        const { latitude, longitude } = event.nativeEvent.coordinate
    
        Alert.prompt(
            "Name Your Marker",
            "Enter a name for this location:",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: (name) => {
                        if (name) {
                            const newMarker = {
                                name, // The name provided by the user
                                latitude,
                                longitude,
                            };
                            addMarkerToFirebase(newMarker); // Pass the entire marker object
                            setMarkers([...markers, newMarker]);
                        }
                    }
                }
            ],
            "plain-text"
        )
    }
    
    const handleMarkerPress = (marker) => {
        setSelectedMarker(marker)
    }

    const deleteMarker = async (markerId) => {
        try {
            console.log(`Attempting to delete marker with ID: ${markerId}`)
            await deleteDoc(doc(db, 'markers', markerId))
            console.log(`Marker with ID: ${markerId} deleted`)
            setMarkers(markers.filter(marker => marker.id !== markerId))
            setSelectedMarker(null)
        } catch (e) {
            console.error("Error removing marker: ", e)
        }
    }

    const confirmAndDeleteMarker = (markerId) => {
        Alert.alert(
            "Delete Marker",
            "Are you sure you want to delete this marker?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { 
                    text: "OK", onPress: () => deleteMarker(markerId) 
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <MapView 
            style={styles.map} 
            provider={PROVIDER_GOOGLE}
            mapType='hybrid'
            initialRegion={initialRegion}
            showsUserLocation
            showsMyLocationButton
            onLongPress={handleLongPress}
            >
            {markers.map((marker) => (
                <Marker
                key={marker.id}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                onPress={() => handleMarkerPress(marker)}
            >
                <Callout onPress={() => confirmAndDeleteMarker(marker.id)}>
                    <View style={{ alignItems: 'center' }}>
                        <Text>{marker.name}</Text>
                        {/* You can add more details here if needed */}
                    </View>
                </Callout>
            </Marker>
            ))}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
    markerText: {
        flexDirection: 'row'
    }
  });

export default MapScreen