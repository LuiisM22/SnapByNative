import React from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Subscriptions = (props) => {
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <Text style={styles.title}>Suscripciones</Text>
        <Icon style={styles.grayIcon} name="chevron-right" size={20} />
      </View>
      <FlatList
        data={props.LS}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={props.LS.id}
        renderItem={({item}) => (
          <View style={styles.cardSubscriptions}>
            <Image style={styles.imageSubscriptions} source={item.image} />
            <View style={styles.nameBoxSubscriptions}>
              <Text style={styles.nameSubscriptions}> {item.name} </Text>
              <Text style={styles.userInfSubscriptions}> {item.sinceH} </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    padding: 3,
    //marginVertical: 2,
    borderColor: 'white',
    //borderWidth: 2,
    //borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: '1%',
  },
  grayIcon: {
    color: 'gray',
    paddingBottom: 4,
  },
  cardSubscriptions: {
    backgroundColor: 'white',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
    elevation: 4,
    borderRadius: 5,
  },
  imageSubscriptions: {
    width: 100,
    height: 200,
    borderRadius: 5,
  },
  nameBoxSubscriptions: {
    display: 'flex',
    paddingBottom: 5,
    position: 'absolute',
    alignSelf: 'flex-end',
    marginLeft: 4,
    width: 100,
  },
  nameSubscriptions: {
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    color: 'white',
    textShadowColor: 'gray',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  userInfSubscriptions: {
    color: 'lightgray',
    fontSize: 11,
    textShadowColor: 'gray',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
});

export default Subscriptions;
