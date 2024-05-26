import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Rectangle from './src/components/Rectangle';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Rectangle />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
