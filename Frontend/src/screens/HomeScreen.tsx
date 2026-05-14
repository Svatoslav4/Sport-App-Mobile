import React from 'react'

import {
  View,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native'

import VideoCard from '../components/VideoCard'

import { COLORS } from '../styles/colors'

const videos = [
  {
    id: 1,
    title: 'Introduction to React Native',
    description: 'Learn mobile app development',
  },
  {
    id: 2,
    title: 'TypeScript Basics',
    description: 'Strong typing in React Native',
  },
]

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>

      <FlatList
        data={videos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <VideoCard
            item={item}
            onPress={() =>
              navigation.navigate('Video', {
                video: item,
              })
            }
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  header: {
    color: COLORS.primary,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})

export default HomeScreen