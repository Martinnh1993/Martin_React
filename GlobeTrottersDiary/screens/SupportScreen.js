import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SupportScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SupportScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SupportScreen;