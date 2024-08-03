// NewsInteractions.js

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Example icon library

const NewsInteractions = ({ comments, handleComment }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleLike = () => {
        console.log('Liked');
    };

    const handleShare = () => {
        console.log('shared');
    };

    const handleFav = () => {
        setIsFavorite(!isFavorite); // Toggle favorite state
    };

    return (
        <View style={styles.interactionContainer}>
            <TouchableOpacity style={styles.iconContainer} onPress={handleComment}>
                <Icon name="comment" size={20} color="gray" style={styles.icon} />
                <Text style={styles.iconText}>Comment ({comments.length})</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={handleLike}>
                <Icon name="thumbs-up" size={20} color="gray" style={styles.icon} />
                <Text style={styles.iconText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={handleShare}>
                <Icon name="share-alt" size={20} color="gray" style={styles.icon} />
                <Text style={styles.iconText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={handleFav}>
                <Icon name={isFavorite ? "star" : "star-o"} size={20} color="gray" style={styles.icon} />
                <Text style={styles.iconText}>Fav</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    interactionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 120, 
        width: '100%',
       // backgroundColor: 'gray',
        paddingVertical: 20,
    },
    iconContainer: {
        alignItems: 'center',
    },
    icon: {
        marginRight: 5, // Adjust spacing between icon and text
    },
    iconText: {
        color: 'gray',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default NewsInteractions;
