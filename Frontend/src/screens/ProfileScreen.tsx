import React, { useContext } from 'react'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

import CustomButton from '../components/CustomButton'

import { COLORS } from '../styles/colors'

import { AuthContext } from '../context/AuthContext'

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          JD
        </Text>
      </View>

      <Text style={styles.name}>
        John Doe
      </Text>

      <Text style={styles.email}>
        john.doe@email.com
      </Text>

      <CustomButton
        title='Logout'
        onPress={logout}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    paddingTop: 100,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#243B73',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.primary,
  },

  avatarText: {
    color: COLORS.text,
    fontSize: 40,
    fontWeight: 'bold',
  },

  name: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },

  email: {
    color: COLORS.gray,
    marginBottom: 40,
    marginTop: 10,
    fontSize: 16,
  },
})

export default ProfileScreen