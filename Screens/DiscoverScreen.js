// Screens/DiscoverScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NewsContext } from '../others/Context';
import { categories, sources } from '../others/api'
// import Carousel from 'react-native-snap-carousel';

const DiscoverScreen = () => {
    const {} = useContext(NewsContext)
    console.log("DiscoverScreen rendered");
    return (
        <View style={styles.container}>
            <Text style={{ ...styles.subtitle, color:  "white" }}>Categories</Text>

            {/* <Carousel
                layout={"default"}
                data={categories}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.category}
                        onPress={() => setCategory(item.name)}
                    >
                        <Image source={{ uri: item.pic }} style={styles.categoryImage} />
                        <Text style={{ ...styles.name, color: darkTheme ? "white" : "black" }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                sliderWidth={windowWidth}
                itemWidth={SLIDE_WIDTH}
                activeSlideAlignment={"start"}
                inactiveSlideScale={1}


            /> */}
        </View>
    );
};

const styles = StyleSheet.create({

    discover: {
        padding: 10,
        alignItems: "center"
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 8,
        borderBottomColor: '#007FFF',
        borderBottomWidth: 5,
        borderRadius: 10,
        alignSelf: "flex-start"
    },
    categoryImage: {
        height: "60%",
        width: "100%",
        resizeMode: "contain"
    },
    name: {
        fontSize: 14,
        textTransform: "capitalize"
    },
    category: {
        height: 130,
        margin: 10,
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    sourceImage: {
        height: "100%",
        borderRadius: 10,
        resizeMode: "cover"
    },

    sources: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingVertical: 15
    },
    sourceContainer: {
        height: 150,
        width: '40%',
        borderRadius: 10,
        margin: 15,
        backgroundColor: "#cc313d"
    }
})

export default DiscoverScreen;
