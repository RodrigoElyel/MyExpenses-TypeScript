import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { propsStack } from '../../routes/Stack/Models'

const Home = ({ }) => {

  const navigation = useNavigation<propsStack>()



  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {
        name: "Rodrigo Elyel",
        language: "typescript",
      })}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </TouchableOpacity>
  )
}

export default Home