import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {StackNavigation} from './src/navigation';
import {COLORS} from './src/styles';
import mobileAds from 'react-native-google-mobile-ads';

mobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
  });

const App = () => {
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(COLORS.SecondaryColor);
  }
  StatusBar.setBarStyle('light-content');

  return <StackNavigation />;
};

export default App;
