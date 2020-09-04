import React from 'react';
import ForYou from '../components/ForYou';
import {View} from 'react-native';
import ListForYou from '../data/ListForYou';

const LoadSubscriptions = () => {
  return (
    <View>
      <ForYou LFY={ListForYou} />
    </View>
  );
};

export default LoadSubscriptions;
