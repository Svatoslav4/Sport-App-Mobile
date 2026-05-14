import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import VideoScreen from '../screens/VideoScreen'

import BottomTabs from './BottomTabs'

import { AuthContext } from '../context/AuthContext'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  const { token } = useContext(AuthContext)

  return (
    <NavigationContainer>
      {!token ? (
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
          />

          <Stack.Screen
            name='Register'
            component={RegisterScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name='Main'
            component={BottomTabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='Video'
            component={VideoScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}

export default AppNavigator