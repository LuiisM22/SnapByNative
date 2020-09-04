import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import LoadEasyConect from './src/props/LoadEasyConect';
import LoadFriendStatus from './src/props/LoadFriendsStatus';
import LoadSubscriptions from './src/props/LoadSubscriptions';
import LoadForYou from './src/props/LoadForYou';
import Header from './src/components/Header';
import SplashScreen from 'react-native-splash-screen';
import OneSignal from 'react-native-onesignal';

export default class App extends Component {
  constructor(properties) {
    super(properties);
    //Remove this method to stop OneSignal Debugging
    OneSignal.setLogLevel(6, 0);

    OneSignal.init('ed5d0cfb-8129-4f37-bb57-ceb8fea1be90', {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2,
    });

    OneSignal.inFocusDisplaying(2);

    OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }
  componentDidMount() {
    SplashScreen.hide();
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log('Notification received: ', notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <>
        <Header />
        {SplashScreen.hide()}
        <ScrollView style={styles.box} showsVerticalScrollIndicator={false}>
          <LoadFriendStatus />
          <LoadEasyConect />
          <LoadSubscriptions />
          <LoadForYou />
        </ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: '#914FC4',
  },
});
function myiOSPromptCallback(permission) {
  // do something with permission value
}
