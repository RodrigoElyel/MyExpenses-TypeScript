import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { useRoute, RouteProp } from '@react-navigation/native'

// import { propsStackRoute } from '../../routes/Stack/Models'
import { DetailsRouteProp } from '../../routes/Stack/Models'

const Details = () => {

  const route = useRoute<DetailsRouteProp>()

  const data = route.params

  console.log(data)

  return (
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{data?.name}</Text>
    </TouchableOpacity>
  )
}

export default Details