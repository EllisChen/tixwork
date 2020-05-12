import React from 'react'
import ServerImage from '@/server-image/server-image'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { AtIcon } from 'taro-ui'
import EleBreakLine from './ele-break-line'
import './styles.scss'

function EleStoreLocationBig(props) {
  const { phoneNumber, imageUrl, logo, name, address } = props
  const handleMakeCall = () => {
    if (phoneNumber) {
      // noinspection JSIgnoredPromiseFromCall
      Taro.makePhoneCall({ phoneNumber })
    }
  }

  return (
    <View className='store-location-big'>
      <ServerImage className='store-location-big-face-image' src={imageUrl} />
      <View className='store-location-big-title'>
        <View className='store-location-big-title-logo'>
          <ServerImage customStyle={{ width: '100%', height: '100%' }} src={logo} />
        </View>
        <View>{name}</View>
      </View>
      <EleBreakLine />
      <View className='store-location-big-content' onClick={handleMakeCall}>
        <AtIcon value='map-pin' size={18} color='orangered' />
        <View className='store-location-big-content-address'>{address}</View>
        <View className='store-location-big-content-icon'>
          <AtIcon value='phone' size={18} />
        </View>
      </View>
    </View>
  )
}

EleStoreLocationBig.options = {
  addGlobalClass: true,
}

EleStoreLocationBig.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  logo: PropTypes.string,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
}

export default EleStoreLocationBig
