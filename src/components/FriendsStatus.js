import React from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';

const FriendsStatus = (props) => {
  return (
    <View style={styles.box}>
      <View style={styles.easyConect}>
        <Text style={styles.title}> Amigos</Text>
      </View>
      <FlatList
        data={props.LFS}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={props.LFS.id}
        renderItem={({item}) => (
          <View style={styles.cardStatus}>
            <View style={styles.borderImage}>
              <Image style={styles.imageContact} source={item.image} />
            </View>
            <View style={styles.nameBoxStatus}>
              <Text style={styles.nameStatus}> {item.name} </Text>
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
    paddingVertical: 2,
    //marginVertical: 2,
    borderColor: 'white',
    borderWidth: 2,
    //borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
  cardStatus: {
    marginTop: 2,
    marginHorizontal: 1,
    padding: 1,
    borderRadius: 4,
    alignItems: 'center',
  },
  borderImage: {
    width: 94,
    height: 94,
    margin: 4,
    borderRadius: 100,
    borderColor: '#914FC4',
    borderWidth: 2,
  },
  imageContact: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  nameBoxStatus: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 90,
  },
  nameStatus: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 13,
  },
});
export default FriendsStatus;
