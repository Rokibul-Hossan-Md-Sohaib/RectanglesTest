// Screens/DiscoverScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DiscoverScreen = () => {
    console.log("DiscoverScreen rendered");
    return (
        <View style={styles.container}>
            <Text>Discover Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
});

export default DiscoverScreen;
