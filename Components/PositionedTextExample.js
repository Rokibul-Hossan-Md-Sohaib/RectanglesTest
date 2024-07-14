import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PositionedInteractionBar = () => {
  // Placeholder functions for like, comment, and share actions
  const handleLike = () => {
    console.log('Liked');
  };

  const handleComment = () => {
    console.log('Commented');
  };

  const handleShare = () => {
    console.log('Shared');
  };

  return (
    <View style={styles.container2}>
      {/* Fixed interaction bar positioned at the bottom */}
      <View style={styles.interactionContainer2}>
        <TouchableOpacity style={styles.iconContainer2} onPress={handleComment}>
          <Text style={styles.iconText2}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer2} onPress={handleLike}>
          <Text style={styles.iconText2}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer2} onPress={handleShare}>
          <Text style={styles.iconText2}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: 'flex-end', // Aligns the interaction bar at the bottom
    paddingBottom: 50, // Provides some padding from the bottom edge
  },
  interactionContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
    paddingVertical:20,
  },
  iconContainer2: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  iconText2: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PositionedInteractionBar;
