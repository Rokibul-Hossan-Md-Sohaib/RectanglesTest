import React, { useState, useContext } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../Screens/DiscoverScreen';
import NewsScreen from '../Screens/NewsScreen';
import TopNavigation from './TopNavigation';
import { NewsContext } from '../others/Context';

// import TopNavigation from './Components/TopNavigation';
// import { NewsContext } from './Context';

const InshortTabs = () => {
  const layout = useWindowDimensions();
  // const [index, setIndex] = useState(1);
  const { index, setIndex } = useContext(NewsContext);

  const [routes] = useState([
    { key: 'discover', title: 'Discover' },
    { key: 'news', title: 'News' },
  ]);

  const renderScene = SceneMap({
    discover: DiscoverScreen,
    news: NewsScreen,
  });

  return (
    <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={() => <TopNavigation
            index={index}
            setIndex={setIndex}
        />
        }
    />
)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
  },
});

export default InshortTabs;
