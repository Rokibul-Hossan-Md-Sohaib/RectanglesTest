import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
const TopNavigation = ({ index, setIndex }) => {
    return (
        <View style={styles.container}>
            {index === 0 ? (
                <TouchableOpacity style={styles.left}>
                    <MaterialCommunityIcons name="theme-light-dark" size={24} color="#007FFF" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.left} onPress={() => setIndex(index === 0 ? 1 : 0)}>
                   
                    <SimpleLineIcons name='arrow-left' size={15} color="#007FFF" />
                    <Text style={styles.text}> Discover</Text>
                </TouchableOpacity>
            )}

            <Text style={styles.center}>
                {index ? "All News" : "Discover"}
            </Text>

            {index ? (
                <TouchableOpacity style={styles.right} onPress={() => fetchNews("general")}>
                    <AntDesign name="reload1" size={24} color="#007FFF" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.left} onPress={() => setIndex(index === 0 ? 1 : 0)}>
                    <Text style={styles.text}> All News</Text>
                    <SimpleLineIcons name='arrow-right' size={15} color="#007FFF" />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: 'center',
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        backgroundColor: "#282C35"
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
        width: 80,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        color: "white"
    },
    right: {
        width: 80,
        alignItems: "flex-end"
    },
    center: {
        paddingBottom: 6,
        borderBottomColor: '#007FFF',
        borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "700",
        color: "white"
    }
});

export default TopNavigation;
