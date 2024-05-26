import React from 'react';
import { View, StyleSheet } from 'react-native';

interface GridProps {
  width: number;
  height: number;
  color: string;
}

const Grid: React.FC<GridProps> = ({ width, height, color }) => {
  return <View style={[styles.grid, { width, height, backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  grid: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default Grid;
