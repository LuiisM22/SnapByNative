import React from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';

const Subscriptions = (props) => {
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <Text style={styles.title}>Para ti</Text>
      </View>
      <FlatList
        data={props.LFY}
        showsVerticalScrollIndicator={false}
        numColumns="2"
        keyExtractor={props.LFY.id}
        renderItem={({item}) => (
          <View style={styles.cardSubscriptions}>
            <Image style={styles.imageSubscriptions} source={item.image} />
            <View style={styles.nameBoxSubscriptions}>
              <Text style={styles.nameSubscriptions}> {item.name} </Text>
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
    borderColor: 'white',
    paddingBottom: '2%',
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
    width: '47%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 7,
    elevation: 6,
    borderRadius: 5,
  },
  imageSubscriptions: {
    width: '100%',
    height: 250,
    borderRadius: 5,
  },
  nameBoxSubscriptions: {
    display: 'flex',
    paddingBottom: 5,
    position: 'absolute',
    alignSelf: 'flex-end',
    marginLeft: 5,
    width: 175,
  },
  nameSubscriptions: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
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
