import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import InshortTabs from './Components/InshortTabs';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InshortTabs/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
