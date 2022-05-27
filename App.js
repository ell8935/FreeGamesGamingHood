import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {StackNavigation} from './src/navigation';
import {COLORS} from './src/styles';

const App = () => {
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(COLORS.SecondaryColor);
  }
  StatusBar.setBarStyle('light-content');

  return <StackNavigation />;
};

export default App;
