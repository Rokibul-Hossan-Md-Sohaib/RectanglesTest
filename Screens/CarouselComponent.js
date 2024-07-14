import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');
const sliderWidth = screenWidth;
const itemWidth = screenWidth * 0.8;

const CarouselComponent = () => {
    const [entries, setEntries] = useState([
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' }
    ]);
    const carouselRef = useRef(null);

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    };

    return (
        <Carousel
            ref={carouselRef}
            data={entries}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
        />
    );
};

const styles = StyleSheet.create({
    slide: {
        backgroundColor: 'white',
        borderRadius: 8,
        height: screenWidth * 0.6,
        padding: 20,
        marginLeft: 25,
        marginRight: 25,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default CarouselComponent;


