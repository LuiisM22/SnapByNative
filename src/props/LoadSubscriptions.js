import React from 'react';
import Subscriptions from '../components/Subscriptions';
import {View} from 'react-native';
import ListSubscriptions from '../data/ListSubscriptions';

const LoadSubscriptions = () => {
  return (
    <View>
      <Subscriptions LS={ListSubscriptions} />
    </View>
  );
};

export default LoadSubscriptions;
