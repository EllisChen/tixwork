import React from 'react'
import { View } from '@tarojs/components'
import NumberInput from './ele-number-input'
import './styles.scss'

function EleMoney(props) {
  return (
    <View className='ele-money'>
      <View className='ele-money-icon'>￥</View>
      <NumberInput {...props} />
    </View>
  )
}

export default EleMoney
