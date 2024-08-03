import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { NewsContext } from '../others/Context';
import { categories } from '../others/api';

const windowWidth = Dimensions.get('window').width;
const SLIDE_WIDTH = Math.round(windowWidth * 0.25);

const DiscoverScreen = () => {
  const { setCategory, darkTheme } = useContext(NewsContext);

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.subtitle, color: "black" }}>Where stories unfold , Your getway to the world </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={styles.category}
            onPress={() => setCategory(item.name)}
          >
            <Image source={{ uri: item.pic }} style={styles.categoryImage} />
            <Text style={{ ...styles.name, color: darkTheme ? "black" : "white" }}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 40,
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
    height: 100,
    width: SLIDE_WIDTH,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: '#C0C0C0',
    borderRadius: 10,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
});

export default DiscoverScreen;
