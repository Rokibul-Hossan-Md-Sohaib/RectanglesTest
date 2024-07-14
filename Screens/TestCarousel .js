// TestCarousel.js
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;
const SLIDE_WIDTH = Math.round(windowWidth * 0.75);

const testData = [
  {
    name: "Category 1",
    pic: "https://via.placeholder.com/150",
  },
  {
    name: "Category 2",
    pic: "https://via.placeholder.com/150",
  },
  {
    name: "Category 3",
    pic: "https://via.placeholder.com/150",
  },
];

const TestCarousel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Test Carousel</Text>
      <Carousel
        layout={"default"}
        data={testData}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Image source={{ uri: item.pic }} style={styles.categoryImage} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    color: "white",
  },
  categoryImage: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
    color: "white",
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: '#333',
    borderRadius: 10,
  },
});

export default TestCarousel;
