// src/components/Rectangle.tsx
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Dimensions } from 'react-native';
import Grid from './Grid';

const { width: screenWidth } = Dimensions.get('window');
const numCols = 5;
const defaultGridHeight = 100;

const Rectangle: React.FC = () => {
  const [gridHeight, setGridHeight] = useState<number>(defaultGridHeight);
  const [color, setColor] = useState<string>('gray');
  const gridWidth = screenWidth / numCols;

  const grids = [];

  for (let row = 0; row < numCols; row++) {
    for (let col = 0; col < numCols; col++) {
      grids.push(<Grid key={`${row}-${col}`} width={gridWidth} height={gridHeight} color={color} />);
    }
  }

  return (
    <View>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="Grid Height"
          keyboardType="numeric"
          onChangeText={text => setGridHeight(Number(text))}
        />
        <TextInput
          style={styles.input}
          placeholder="Color"
          onChangeText={text => setColor(text)}
        />
      </View>
      <View style={styles.rectangle}>{grids}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 100,
    textAlign: 'center',
  },
});

export default Rectangle;
