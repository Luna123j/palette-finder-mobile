import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View, SafeAreaView, PixelRatio } from 'react-native';
import ImageColors from 'react-native-image-colors'
import ColorBox from "./ColorBox";

export default function GetPalette(props) {
  const initialState = {
    colorOne: { value: '', name: '' },
    colorTwo: { value: '', name: '' },
    colorThree: { value: '', name: '' },
    colorFour: { value: '', name: '' },
    rawResult: '',
  }

  const [colorD, setColorD] = useState(initialState);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchColor = async () => {
      const result = await ImageColors.getColors(`data:image/jpeg;base64,${props.imgData.base64}`, {
        fallback: '#000000',
        quality: 'low',
        headers: {
          authorization: 'Basic 123',
        },
      }).catch(error => console.log(error))

      switch (result.platform) {
        case 'android':
        case 'web':
          setColorD({
            colorOne: { value: result.lightVibrant, name: 'lightVibrant' },
            colorTwo: { value: result.dominant, name: 'dominant' },
            colorThree: { value: result.vibrant, name: 'vibrant' },
            colorFour: { value: result.darkVibrant, name: 'darkVibrant' },
            rawResult: JSON.stringify(result),
          })
          break
        case 'ios':
          setColorD({
            colorOne: { value: result.background, name: 'background' },
            colorTwo: { value: result.detail, name: 'detail' },
            colorThree: { value: result.primary, name: 'primary' },
            colorFour: { value: result.secondary, name: 'secondary' },
            rawResult: JSON.stringify(result),
          })
          break
        default:
          throw new Error('Unexpected platform key')
      }

      setLoading(false)
    }
    fetchColor()
  }, [])

  if (loading) {
    return (
      <View style={[styles.image, { width: '80%', height: '50%', resizeMode: 'contain' }]}>
        <Image source={{ uri: props.imgData.uri }} />
      </View>
    )
  }

  return (
    <>
      <View style={[styles.image, { width: '80%', height: '50%', resizeMode: 'contain' }]}>
        <Image source={{ uri: props.imgData.uri }} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
      </View>
      <View style={styles.colunm}>
        <ColorBox name={colorD.colorOne.value} value={colorD.colorOne.value} />
        <ColorBox name={colorD.colorTwo.value} value={colorD.colorTwo.value} />
        <ColorBox name={colorD.colorThree.value} value={colorD.colorThree.value} />
        <ColorBox name={colorD.colorFour.value} value={colorD.colorFour.value} />
      </View>
    </>


  )
}


const styles = StyleSheet.create({
  colunm: {
    display: 'flex',
    flexDirection: 'colunm',
    width: '80%',
    borderColor: '#3A86FF',
    borderStyle: 'dashed',
    borderLeftWidth: '4px',
    borderTopWidth: '4px',
    borderBottomWidth: '4px',
    borderRightWidth: '4px',
    borderRadius: 2,
    backgroundColor: '#E5E5E5',
  },

  image: {
    borderColor: '#3A86FF',
    borderStyle: 'dashed',
    borderLeftWidth: '4px',
    borderTopWidth: '4px',
    borderBottomWidth: '4px',
    borderRightWidth: '4px',
    borderRadius: 2,
    backgroundColor: '#E5E5E5',
  }
})