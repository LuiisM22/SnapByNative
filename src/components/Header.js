import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Fontisto';
let bitmoji = require('../img/bitmoji.png');
import OneSignal from 'react-native-onesignal';

const bitmojiSignal = () => {
  OneSignal.addTrigger('bitmoji', 5);
};
const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.bitmoji} source={bitmoji} />
      <Icon1 style={styles.seacthIcon} name="search" size={20} />
      {/* <Text style={styles.headerText}> Descubre</Text> */}
      <TextInput
        style={styles.headerText}
        placeholder="Descubre"
        clearButtonMode="always"
      />
      <View style={styles.right}>
        <Icon
          onPress={bitmojiSignal}
          style={styles.addIcon}
          name="user-plus"
          size={24}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#914FC4',
  },
  bitmoji: {
    width: '5%',
    height: '5%',
    paddingVertical: '4%',
    marginLeft: '4%',
    alignSelf: 'center',
  },
  seacthIcon: {
    color: 'white',
    marginLeft: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addIcon: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: '30%',
  },
  headerText: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: 20,
    paddingLeft: '2%',
    height: '100%',
    width: '70%',
  },
});

export default Header;
