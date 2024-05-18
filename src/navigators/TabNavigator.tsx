import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import CardScreen from '../screens/CardScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import CustomIcon from '../components/CustomIcon'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{   tabBarHideOnKeyboard: true, headerShown: false,
      tabBarShowLabel: false,
    }}>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Cart" component={CardScreen}/>
      <Tab.Screen name="Favorites" component={FavoritesScreen}/>
      <Tab.Screen name="OrderHistory" component={OrderHistoryScreen}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})

export default TabNavigator


