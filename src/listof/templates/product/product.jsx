import { Text, View } from '@tarojs/components'
import { AtTag } from 'taro-ui'

import ServerImage from '@/server-image/server-image'
import { isNotEmpty } from '@/nice-router/nice-router-util'
import { isH5 } from '@/utils/index'
import classNames from 'classnames'
import { getImageUrl } from '../../listof-helper'
import './styles.scss'

function Product(props) {
  const { item = {} } = props
  const { preTag = '', tags = [], brand = '', name, price } = item
  const src = getImageUrl(item)

  const rootClass = classNames('product', { 'product-h5': isH5() })
  return (
    <View className={rootClass}>
      <View className='product-cover'>
        <ServerImage my-class='product-cover-image' src={src} mode='heightFix' />
      </View>

      <View className='product-info'>
        <View className='product-info-title'>
          {isNotEmpty(preTag) && (
            <AtTag className='red-tag' size='small' active>
              {preTag}
            </AtTag>
          )}
          <Text className='product-info-title-txt'>{`${brand} ${name}`}</Text>
        </View>

        <View className='product-info-brief'>
          <Text numberOfLines={1}>{`￥${price}`}</Text>
          {tags.map(
            (it) =>
              isNotEmpty(it) && (
                <AtTag className='tag-tiny' key={it} size='small' active>
                  {it}
                </AtTag>
              )
          )}
        </View>
      </View>
    </View>
  )
}

export default Product
