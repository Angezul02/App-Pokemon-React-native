import { createStackNavigator } from '@react-navigation/stack';
import PokemonScreen from '../screen/PokemonScreen';
import SearchScreen from '../screen/SearchScreen';
import { RootStackParams } from './Navigator';
import React from 'react'



const TabSearch = createStackNavigator<RootStackParams>();

export const Tab2Screen =()=> {
  return (
    <TabSearch.Navigator
        screenOptions={{
            headerShown:false, 
            cardStyle: {
                backgroundColor: "white"
            }
        }}
    >
      <TabSearch.Screen name="HomeScreen" component={SearchScreen} />
      <TabSearch.Screen name="PokemonScreen" component={PokemonScreen} />
      
    </TabSearch.Navigator>
  );
}