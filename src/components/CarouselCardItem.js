/* eslint-disable no-dupe-keys */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {IMAGES} from '../assests';
import {COLORS} from '../styles';
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({item, index}) => {
  const handlePress = () => {
    Linking.openURL(item.Link);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.container}
        key={index}>
        <Image source={{uri: item.img}} style={styles.image} />
        <Text style={styles.header}>{item.Name}</Text>
        <Text style={styles.body}>{item.Link}</Text>
      </TouchableOpacity>
      <Image source={IMAGES.Logo} style={styles.tinyLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PrimaryColor,
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tinyLogo: {width: 50, height: 50, alignSelf: 'center', marginTop: 20},
});

export default CarouselCardItem;
