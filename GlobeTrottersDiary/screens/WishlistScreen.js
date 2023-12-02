import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { db, collection, getDocs, onSnapshot } from '../Firebase';
import { GlobalStyles } from '../GlobalStyles';
import VisitItem from './components/VisitItem';



const WishlistScreen = () => {
    const [markers, setMarkers] = useState([]);
    const [photos, setPhotos] = useState({});
    const isOdd = markers.length % 2 === 1;
    
    

    const fetchPhotos = async (searchText) => {
        const apiKey = 'qHF0zqokl05ryIuHSzyLTVEvM2ZaFpmAWXzqWRcuFMTqGD67mRYI2e5g'; // Your pexels API Key
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${encodeURIComponent(searchText)}&format=json&nojsoncallback=1&extras=url_s`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            // Flickr API provides a list of photos, extract the URL of the first photo
            const photoUrl = data.photos.photo[0]?.url_s; // 'url_s' is a small image URL

            setPhotos(prevPhotos => ({ ...prevPhotos, [searchText]: photoUrl }));
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    }; 

    useEffect(() => {
        onSnapshot(collection(db, "markers"), (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                const markerData = doc.data();
                items.push({
                    ...markerData,
                    id: doc.id,
                });
                fetchPhotos(markerData.name); // Fetch photos for each marker
            });
            setMarkers(items);
        });
    }, []);

  

    return (
        <View style={GlobalStyles.container}>
            <FlatList
                data={markers}
                renderItem={({ item }) => (
                    <VisitItem
                        headerText={item.name}
                        imageUrl={photos[item.name]?.[0]?.url} // First photo URL for this location
                    />
                )}
                numColumns={2}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flatListContent: {
        justifyContent: 'center', // Adjust this as needed
        alignItems: 'center',
    },
    oddListContent: {
        justifyContent: 'space-around', // or 'center' depending on your preference
    },
    evenListContent: {
        // Regular styling for an even number of items
    },
});

export default WishlistScreen;
