import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import GalleryScreen from './screens/GalleryScreen';
import MapScreen from './screens/MapScreen';
import MyJournalsScreen from './screens/MyJournalsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';
import TripPlanerScreen from './screens/TripPlanerScreen';
import WishlistScreen from './screens/WishlistScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator()

export default function App() {
  return (
      <NavigationContainer >
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen}/>
          <Drawer.Screen name="My Journal" component={MyJournalsScreen}/>
          <Drawer.Screen name="Map View" component={MapScreen}/>
          <Drawer.Screen name="Places to visit" component={WishlistScreen}/>
          <Drawer.Screen name="Trip planer" component={TripPlanerScreen}/>
          <Drawer.Screen name="Photo Gallery" component={GalleryScreen}/>
          <Drawer.Screen name="Settings" component={SettingsScreen}/>
          <Drawer.Screen name="Support" component={SupportScreen}/>  
          <Drawer.Screen name="About" component={AboutScreen}/>
          
          {/* for later adding a login screen and a logout button here <MaterialCommunityIcons name="logout" size={24} color="black" /> */}
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
