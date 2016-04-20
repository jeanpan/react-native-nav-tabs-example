## React Native NavTabBar Example

Based on [react-native-scrollable-tab-view](https://github.com/brentvatne/react-native-scrollable-tab-view) implemented a nav tab bar on iOS.

### Demo

<a href="https://raw.githubusercontent.com/jeanpan/react-native-nav-tabs-example/master/demo/navtabbar_demo.gif"><img src="https://raw.githubusercontent.com/jeanpan/react-native-nav-tabs-example/master/demo/navtabbar_demo.gif" width="350"></a>

### Basic Usage

#### Run Example
```
$ git clone https://github.com/jeanpan/react-native-nav-tabs-example.git
$ cd react-native-nav-tabs-example
$ npm install
$ react-native run-ios
```

#### Use NavTabBar
* Download `NavTabBar.js` into your project
* `import NavTabBar from './NavTabBar';`
* Specify NavTabBar as renderTabBar `<ScrollableTabView renderTabBar={() => <NavTabBar/>} </ScrollableTabView>`
