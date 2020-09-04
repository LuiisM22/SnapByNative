import React from 'react';
import FriendsStatus from '../components/FriendsStatus';
import {View} from 'react-native';
import ListFriendsStatus from '../data/ListFriendsStatus';

const LoadFriendsStatus = () => {
  return (
    <View>
      <FriendsStatus LFS={ListFriendsStatus} />
    </View>
  );
};

export default LoadFriendsStatus;
