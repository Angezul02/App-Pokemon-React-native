import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Navigator, RootStackParams} from './Navigator';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab2Screen} from './TabSearch';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Navigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Listado',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '400',
            marginBottom: 10,
          },

          tabBarIcon: ({color}) => (
            <Icon color={color} size={30} name="list-circle" />
          ),
        }}
      />

      <Tab.Screen
        name="SearchScreen"
        component={Tab2Screen}
        options={{
          headerShown: false,
          tabBarLabel: 'Búsqueda',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '400',
            marginBottom: 10,
            
          },

          tabBarIcon: ({color}) => (
            <Icon color={color} size={30} name="search-circle" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
