import React from 'react'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import {
  Video,
  ResizeMode,
} from 'expo-av'

const VideoScreen = ({ route }: any) => {
  const { video } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {video.title}
      </Text>

      <Video
        source={{
          uri: `http://192.168.31.148:5000/${video.videoPath}`,
        }}
        style={styles.video}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
      />

      <Text style={styles.description}>
        {video.description}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },

  video: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    backgroundColor: '#000',
  },

  description: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
})

export default VideoScreen