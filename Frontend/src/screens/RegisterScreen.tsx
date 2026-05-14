import React from 'react'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

import { COLORS } from '../styles/colors'

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Register</Text>

        <CustomInput placeholder='Name' />
        <CustomInput placeholder='Email' />
        <CustomInput placeholder='Password' secureTextEntry />

        <CustomButton title='Register' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '85%',
    backgroundColor: COLORS.card,
    padding: 25,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  title: {
    color: COLORS.primary,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
})

export default RegisterScreen