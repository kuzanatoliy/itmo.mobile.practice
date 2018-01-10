import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import AboutMeScreen from '../screens/AboutMeScreen';
import MyStudingScreen from '../screens/MyStudingScreen';
import MyStudingProjectScreen from '../screens/MyStudingProjectScreen';
import MyPlansScreen from '../screens/MyPlansScreen';
import ContactsScreen from '../screens/ContactsScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    AboutMe: {
      screen: AboutMeScreen
    },
    MyStuding: {
      screen: MyStudingScreen
    },
    MyStudingProject: {
      screen: MyStudingProjectScreen
    },
    MyPlans: {
      screen: MyPlansScreen
    },
    Contacts: {
      screen: ContactsScreen
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'AboutMe':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'MyStuding':
            iconName =
              Platform.OS === 'ios'
                ? `ios-albums${focused ? '' : '-outline'}`
                : 'md-albums';
            break;
          case 'MyStudingProject':
            iconName =
              Platform.OS === 'ios'
                ? `ios-paper${focused ? '' : '-outline'}`
                : 'md-paper';
            break;
          case 'MyPlans':
            iconName =
              Platform.OS === 'ios'
                ? `ios-map${focused ? '' : '-outline'}`
                : 'md-map';
            break;
          case 'Contacts':
            iconName =
              Platform.OS === 'ios'
                ? `ios-mail${focused ? '' : '-outline'}`
                : 'md-mail';
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
