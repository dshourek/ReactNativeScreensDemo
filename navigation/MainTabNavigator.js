import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SummaryScreen from '../screens/SummaryScreen';
import HelloWorldScreen from '../screens/HelloWorldScreen';
import HobbiesScreen from '../screens/HobbiesScreen';

const HelloWorldStack = createStackNavigator({
  HelloWorld: HelloWorldScreen,
});

HelloWorldStack.navigationOptions = {
  tabBarLabel: 'Hello React',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-globe' : 'md-globe'}
    />
  ),
};

const SummaryStack = createStackNavigator({
  Summary: SummaryScreen,
});

SummaryStack.navigationOptions = {
  tabBarLabel: 'Summary',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-contact` : 'md-contact'}
    />
  ),
};

const HobbiesStack = createStackNavigator({
  Hobbies: HobbiesScreen,
});

HobbiesStack.navigationOptions = {
  tabBarLabel: 'Hobbies',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-ribbon' : 'md-ribbon'}
    />
  ),
};

export default createBottomTabNavigator({
  HelloWorldStack,
  SummaryStack,
  HobbiesStack,
});
