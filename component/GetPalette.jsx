import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View, SafeAreaView,PixelRatio } from 'react-native';
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
      }).catch(error=>console.log(error))     

      console.log(result)
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
      <View style={styles.container}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    )
  }

  return (
    <View>
      <Image source={{ uri: props.imgData.uri }} style={{ width: 200, height: 200 }} />
      <View style={styles.colunm}>
        <ColorBox name={colorD.colorOne.value} value={colorD.colorOne.value} />
        <ColorBox name={colorD.colorTwo.value} value={colorD.colorTwo.value} />
        <ColorBox name={colorD.colorThree.value} value={colorD.colorThree.value} />
        <ColorBox name={colorD.colorFour.value} value={colorD.colorFour.value} />
      </View>
    </View>

  
  )
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  colunm: {
    flex: 1,
    flexDirection: 'colunm',
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  result: {
    textAlign: 'center',
    color: '#333333',
  },
})