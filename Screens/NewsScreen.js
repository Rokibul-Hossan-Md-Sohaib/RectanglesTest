// Screens/NewsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsScreen = () => {
    console.log("NewsScreen rendered");
    return (
        <View style={styles.container}>
            <Text>News Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'lightgreen',
    },
});

export default NewsScreen;
