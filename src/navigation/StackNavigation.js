import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Discover,Payment} from '../screens';
import Routes from './routes';
import {COLORS} from '../styles';
import {StyleSheet} from 'react-native';
const Stack = createStackNavigator();

const RootStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerMode: 'float',
      headerTitleAlign: 'center',
      cardStyle: {
        backgroundColor: COLORS.SecondaryColor,
        paddingHorizontal: 15,
      },
      headerTintColor: COLORS.White,
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
    }}>
    <Stack.Screen
      name={Routes.HOME.name}
      component={Home}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={Routes.DISCOVER.name}
      component={Discover}
      options={{title: Routes.DISCOVER.title}}
    />    
      <Stack.Screen
        name={Routes.PAYMENT.name}
        component={Payment}
        options={{title: Routes.PAYMENT.title}}
      />
  </Stack.Navigator>
);

const StackNavigation = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);

export default StackNavigation;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLORS.SecondaryColor,
    borderColor: COLORS.White,
    borderBottomWidth: 2,
  },
  headerTitleStyle: {color: COLORS.White},
});
