import React from 'react'

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

import { COLORS } from '../styles/colors'

const CustomButton = ({ title, onPress }: any) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default CustomButton