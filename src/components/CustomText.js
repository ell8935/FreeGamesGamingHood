import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CustomText = ({title}) => <Text>{title}</Text>;
export default CustomText;

const styles = StyleSheet.create({
  text: {fontSize: 40},
});
