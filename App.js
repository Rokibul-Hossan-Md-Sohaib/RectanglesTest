import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useContext } from 'react'

import InshortTabs from './Components/InshortTabs'
import Context, { NewsContext } from './others/Context'

function App() {
  const { darkTheme } = useContext(NewsContext)
  return (
    <View style={{
      ...styles.container,
      backgroundColor: darkTheme ? "#282C35" : "white",
    }}>
      <InshortTabs />
    </View>
  )
}

export default () => {
  return (<Context>
    <App />
  </Context>)
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
})