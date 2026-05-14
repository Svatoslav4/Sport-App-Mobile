import React, { useState } from 'react'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

import { COLORS } from '../styles/colors'

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <CustomInput
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />

        <CustomInput
          placeholder='Password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <CustomButton title='Login' />

        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Register')}
        >
          Go to Register
        </Text>
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

  link: {
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16,
  },
})

export default LoginScreen