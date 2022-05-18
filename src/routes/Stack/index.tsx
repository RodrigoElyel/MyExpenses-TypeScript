import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { propsNavigationStack } from './Models';


const Stack = createStackNavigator<propsNavigationStack>();

import Home from '../../screens/Home'
import Details from '../../screens/Details'

export default function () {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}
