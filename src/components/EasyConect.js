import React from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import ListEasyConect from '../components/ListEasyConect.json';

const EasyConect = (props) => {
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <Text style={styles.title}>Añadido Fácil</Text>
        <Icon style={styles.grayIcon} name="chevron-right" size={20} />
        <Text style={styles.gray}>Ocultar</Text>
      </View>
      <FlatList
        data={props.LEC}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={props.LEC.id}
        renderItem={({item}) => (
          <View style={styles.cardEasyConect}>
            <Image style={styles.imageEasyConect} source={item.image} />
            <View style={styles.nameBox}>
              <Text style={styles.name}> {item.name} </Text>
              {/* <Icon name="rocket" size={30} color="black" /> */}
              <Text style={styles.userInf}> {item.userName} </Text>
              <Text style={styles.userInf}> {item.since} </Text>
            </View>
            <View style={styles.addUser}>
              <Icon style={styles.addUserIcon} name="plus" size={25} />
              <Text style={styles.addUser}> Añadir </Text>
            </View>
            <Icon style={styles.close} name="close" size={15} />
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
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: '1%',
  },
  grayIcon: {
    color: 'gray',
    paddingBottom: 3,
  },
  gray: {
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    color: 'gray',
    flex: 1,
    paddingRight: 18,
    textAlign: 'right',
  },
  cardEasyConect: {
    backgroundColor: 'white',
    alignSelf: 'center',
    elevation: 6,
    flexDirection: 'row',
    marginTop: 5,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    marginBottom: 4,
  },
  imageEasyConect: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
  nameBox: {
    justifyContent: 'center',
    textAlignVertical: 'center',
    marginHorizontal: 10,
  },
  name: {
    fontFamily: 'sans-serif-medium',
    fontSize: 15,
  },
  userInf: {
    fontFamily: 'sans-serif-medium',
    color: 'gray',
    fontSize: 11,
  },
  addUser: {
    fontFamily: 'sans-serif-medium',
    paddingVertical: 2,
    paddingRight: 10,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: '#914FC4',
    flexDirection: 'row',
    color: 'white',
  },
  addUserIcon: {
    marginLeft: 15,
    color: 'white',
  },
  close: {
    marginLeft: 20,
    color: 'gray',
    alignSelf: 'center',
  },
});
export default EasyConect;
