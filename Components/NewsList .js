import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Linking, Modal, TextInput, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NewsContext } from '../others/Context';
import NewsInteractions from './NewsInteractions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SingleNews = ({ item }) => {
    const { darkTheme } = useContext(NewsContext);

    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleComment = () => {
        setModalVisible(true);
    };

    const navigateToArticle = () => {
        Linking.openURL(item.link);
    };

    const addComment = () => {
        if (commentInput.trim()) {
            setComments([...comments, commentInput]);
            setCommentInput('');
        }
    };

    return (
        <TouchableOpacity onPress={navigateToArticle} style={styles.container}>
            <Image
                source={{ uri: item.image || 'https://images.prothomalo.com/prothomalo-bangla%2F2024-08%2F6d890139-2023-48d0-8225-ace32ef4e10d%2Fprotest%201.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=360&dpr=2.0' }}
                style={styles.image}
            />
            <View style={styles.contentContainer}>
                <View style={styles.description}>
                    <Text style={styles.title}>
                        {item.headline_bn || item.headline_en}
                    </Text>
                    <Text style={styles.content} numberOfLines={4} ellipsizeMode="tail">
    {item.summary_bn || item.summary_en}
</Text>

                    <Text>
                        Source:
                        <Text>{item.news_source?.name_en || "unknown"}</Text>
                    </Text>
                    <TouchableOpacity style={styles.readMoreButton} onPress={navigateToArticle}>
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: 'white' }}>Read More</Text>
                    </TouchableOpacity>
                </View>
                <NewsInteractions comments={comments} handleComment={handleComment} />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback onPress={() => { }}>
                            <KeyboardAvoidingView behavior="padding" style={styles.modalContent}>
                                <Text style={styles.modalTitle}>Comments</Text>
                                <FlatList
                                    data={comments}
                                    renderItem={({ item }) => (
                                        <View style={styles.comment}>
                                            <Text>{item}</Text>
                                        </View>
                                    )}
                                    keyExtractor={(item, index) => index.toString()}
                                    style={styles.commentsList}
                                />
                                <View style={styles.commentInputContainer}>
                                    <TextInput
                                        style={styles.commentInput}
                                        placeholder="Type your comment here..."
                                        value={commentInput}
                                        onChangeText={setCommentInput}
                                    />
                                    <TouchableOpacity style={styles.sendButton} onPress={addComment}>
                                        <Text style={styles.sendButtonText}>Send</Text>
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAvoidingView>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#FFFFFF', // Set the background color to white for the entire component
    },
    image: {
        height: "25%",
        resizeMode: "cover",
        width: windowWidth,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'white', // Ensure the content container background is white
    },
    description: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white', // Ensure the description section background is white
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
        color: 'black', // Set text color to black
    },
    content: {
        fontSize: 18,
        paddingBottom: 10,
        color: 'black', // Set text color to black
    },
    readMoreButton: {
        backgroundColor: "#d7be69",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        height: '60%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black', // Set text color to black
    },
    commentsList: {
        flex: 1,
    },
    comment: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    commentInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'gray',
        paddingTop: 10,
    },
    commentInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#d7be69',
        padding: 10,
        borderRadius: 20,
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SingleNews;
