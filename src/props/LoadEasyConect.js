import React from 'react';
import {View} from 'react-native';
import EasyConect from '../components/EasyConect';
import ListEasyConect from '../data/ListEasyConect';

const LoadEasyConect = () => {
  return (
    <View>
      <EasyConect LEC={ListEasyConect} />
    </View>
  );
};

export default LoadEasyConect;
