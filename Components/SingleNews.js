import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import { NewsContext } from '../others/Context';
import Icon from 'react-native-vector-icons/FontAwesome'; // Example icon library

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SingleNews = ({ item, index }) => {
    const { darkTheme } = useContext(NewsContext);

    const handleLike = () => {
        console.log('Liked');
    };

    const handleComment = () => {
        console.log('Commented');
    };

    const handleShare = () => {
        console.log('Shared');
    };

    const navigateToArticle = () => {
        Linking.openURL(item.url); // Open the article URL
    };

    return (
        <TouchableOpacity onPress={navigateToArticle} style={styles.container}>
            <Image
                source={{ uri: item.urlToImage }}
                style={styles.image}
            />
            <View style={styles.contentContainer}>
                <View style={{
                    ...styles.description,
                    backgroundColor: darkTheme ? "#282C35" : "white"
                }}>
                    <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>{item.title}</Text>
                    <Text style={{ ...styles.content, color: darkTheme ? "white" : "black" }}>{item.description}</Text>
                    <Text style={{ color: darkTheme ? "white" : "black" }}>
                        Short by
                        <Text>{item.author ?? " unknown"}</Text>
                    </Text>
                    <TouchableOpacity
                        style={styles.readMoreButton}
                        onPress={navigateToArticle}
                    >
                        <Text style={{ fontSize: 15, color: 'white' }}>
                            '{item?.content?.slice(0, 45)}...'
                        </Text>
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: 'white' }}>
                            Read More
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.interactionContainer}>
                    <TouchableOpacity style={styles.iconContainer} onPress={handleComment}>
                        <Icon name="comment" size={20} color="white" style={styles.icon} />
                        <Text style={styles.iconText}>Comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer} onPress={handleLike}>
                        <Icon name="thumbs-up" size={20} color="white" style={styles.icon} />
                        <Text style={styles.iconText}>Like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer} onPress={handleShare}>
                        <Icon name="share-alt" size={20} color="white" style={styles.icon} />
                        <Text style={styles.iconText}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
    },
    image: {
        height: "25%",
        resizeMode: "cover",
        width: windowWidth,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    description: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    content: {
        fontSize: 18,
        paddingBottom: 10,
    },
    readMoreButton: {
        backgroundColor: "#d7be69",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    interactionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 120, // Adjust this value to move the interaction bar up or down
        width: windowWidth,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        paddingVertical: 20,
    },
    iconContainer: {
        alignItems: 'center',
    },
    icon: {
        marginRight: 5, // Adjust spacing between icon and text
    },
    iconText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SingleNews;
