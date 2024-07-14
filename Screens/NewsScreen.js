import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions, FlatList, TouchableOpacity, Linking } from 'react-native';
import { NewsContext } from '../others/Context';
import SingleNews from '../Components/SingleNews';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NewsScreen = () => {
    const { news } = useContext(NewsContext);

    // Check if news exists and has articles, otherwise provide an empty array
    const articles = news && news.articles ? news.articles.slice(0, 10) : [];

    return (
        <View style={styles.container}>
            <FlatList
                data={articles}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => Linking.openURL(item.url)}
                        activeOpacity={0.9}
                    >
                        <SingleNews item={item} index={index} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                pagingEnabled={false} // Disable paging
                snapToAlignment={'start'} // Snap to start of each item
                snapToInterval={windowHeight} // Snap interval is the height of the screen
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});

export default NewsScreen;
