const React = require('react-native');
const {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React;

const Button = (props) => {
  return <TouchableOpacity {...props}>
    {props.children}
  </TouchableOpacity>;
};

const NavTabBar = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    activeTextColor: React.PropTypes.string,
    activeBackgroundColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
    inactiveBackgroundColor: React.PropTypes.string,
  },

  renderTabOption(name, page) {
    const isTabActive = this.props.activeTab === page;

    const activeTextColor = this.props.activeTextColor || '#333';
    const activeBackgroundColor = this.props.activeBackgroundColor || '#fff';
    const inactiveTextColor = this.props.inactiveTextColor || '#333';
    const inactiveBackgroundColor = this.props.inactiveBackgroundColor || '#eee';

    const textStyle = this.props.textStyle || {};

    const tabWidth = this.props.containerWidth / this.props.tabs.length;

    return <Button
      key={name}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => this.props.goToPage(page)}
    >
      <View style={[
          { backgroundColor: isTabActive ? activeBackgroundColor : inactiveBackgroundColor },
          { width: tabWidth },
          styles.tab,
        ]}>
        <Text style={[
            { color: isTabActive ? activeTextColor : inactiveTextColor, fontWeight: isTabActive ? 'bold' : 'normal' },
            styles.text,
            textStyle
          ]}>
          {name}
        </Text>
      </View>
    </Button>;
  },

  render() {
    return (
      <View style={[styles.tabs, this.props.style, ]}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    );
  },

});

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    textAlign: 'center',
    width: 100,
  },
});

module.exports = NavTabBar;
