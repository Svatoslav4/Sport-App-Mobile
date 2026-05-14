import React from 'react'

import {
  TextInput,
  StyleSheet,
} from 'react-native'

import { COLORS } from '../styles/colors'

const CustomInput = (props: any) => {
  return (
    <TextInput
      placeholderTextColor={COLORS.gray}
      {...props}
      style={styles.input}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#2A3446',
    color: COLORS.text,
    padding: 18,
    borderRadius: 20,
    marginBottom: 18,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
})

export default CustomInput