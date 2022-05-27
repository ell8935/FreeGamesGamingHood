/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Button} from 'react-native';
import {Info} from '../screens';
import {COLORS} from '../styles';
import {StackNavigation} from './src/navigation';

const CustomButton = ({title, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={{fontSize: 32}}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    borderRadius: 15,
    paddingVertical: 15,
    backgroundColor: COLORS.PrimaryColor,
  },
  text: {fontSize: 32},
});
