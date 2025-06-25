import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RoundedRect } from '@shopify/react-native-skia'

 export const  CardWidth =300
 export const  CardHeight =200
const Blur_card = () => {
  return (
    <RoundedRect
        x={0}
        y={0}
        width={CardWidth}
        height={CardHeight}
        r={10}
        color="rgba(255,255,255,0.2)"
      />
  )
}

export default Blur_card

const styles = StyleSheet.create({})