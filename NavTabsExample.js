import React, {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import NavTabBar from './NavTabBar';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';

const NavTabsExample = React.createClass({
  render() {
    return <View style={styles.container}>
      <ScrollableTabView renderTabBar={() => <NavTabBar
          activeBackgroundColor='#a4edfe'
        />}
        locked={true}>
        <ScrollView tabLabel='As a Guest' style={styles.tabView}>
          <View style={styles.viewContainer}>
            <Text>As a Guest</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel='As a Member' style={styles.tabView}>
          <View style={styles.viewContainer}>
            <Text>As a Member</Text>
          </View>
        </ScrollView>
      </ScrollableTabView>
    </View>;
  },
});

export default NavTabsExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: '#a4edfe',
  },
});
