import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {IMAGES} from '../assests';
import {CustomButton} from '../components';
import {Routes} from '../navigation';
import {COLORS} from '../styles';
import {
  GAMBannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.GAM_BANNER : '/xxx/yyyy';

const Home = ({navigation}) => {
  const {navigate} = navigation;
  const handleNavigate = route => navigate(route);
  return (
    <View style={styles.container}>
      <GAMBannerAd
        unitId={'ca-app-pub-9241365319577247/4617802283'} // my banner ca-app-pub-9241365319577247/4617802283   (ca-app-pub-3940256099942544/6300978111  this is test banner)
        sizes={[BannerAdSize.FULL_BANNER]}
        requestOptions={{
          requestNonPersonalizedAdsOnly: false,
        }}
      />
      <Image source={IMAGES.Logo} style={styles.logo} />
      <Text></Text>
      <View>
        <CustomButton title="Premmium" />
        <CustomButton title="Test" />
        <CustomButton
          title="Discover"
          onPress={() => navigate(Routes.DISCOVER.name)}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-around'},
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 15,
  },
  greenButton: {
    alignItems: 'center',
    backgroundColor: COLORS.PrimaryColor,
    borderRadius: 10,
    padding: 10,
  },
});
