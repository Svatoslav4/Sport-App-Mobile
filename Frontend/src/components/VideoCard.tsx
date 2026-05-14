import React from 'react'

import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native'

import { COLORS } from '../styles/colors'

const VideoCard = ({ item, onPress }: any) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.preview} />

      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.description}>
        {item.description}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: 15,
    borderRadius: 25,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  preview: {
    height: 120,
    borderRadius: 20,
    backgroundColor: '#243B73',
    marginBottom: 15,
  },

  title: {
    color: COLORS.text,
    fontSize: 22,
    fontWeight: 'bold',
  },

  description: {
    color: COLORS.gray,
    marginTop: 8,
    fontSize: 15,
  },
})

export default VideoCard