import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CompanyBusinessCardApp = () => {
  const dsbInfo = {
    name: 'DSB',
    industry: 'Transportation',
    address: '456 Railway Avenue, Metro City',
    phone: '+1 (987) 654-3210',
    email: 'info@dsb.com',
    website: 'www.dsbtransport.com',
  };

  const handleContact = () => {
    console.log('Contact DSB');
  };

  return (
    <View style={styles.container}>
      
      {/* <Image
        source={require('./assets/images/dsb_logo.png')}
        style={styles.logo}
      /> */}
      <Text style={styles.name}>{dsbInfo.name}</Text>
      <Text style={styles.industry}>{dsbInfo.industry}</Text>
      <Text style={styles.address}>{dsbInfo.address}</Text>
      <Text style={styles.phone}>{dsbInfo.phone}</Text>
      <Text style={styles.email}>{dsbInfo.email}</Text>
      <Text style={styles.website}>{dsbInfo.website}</Text>

      <TouchableOpacity onPress={handleContact} style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  industry: {
    fontSize: 18,
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
  },
  phone: {
    fontSize: 16,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  website: {
    fontSize: 16,
    marginBottom: 20,
  },
  contactButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CompanyBusinessCardApp;
