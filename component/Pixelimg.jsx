import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview'
import Canvas from 'react-native-canvas';
import { canvasHtml } from "./canvas-html";
import ImageColors from 'react-native-image-colors'


export default function Pixelimg (props) {
  const options = {
    imageWidth: props.imgData.width,
    imageHeight: props.imgData.height, imageType: 'png'
  };

  // const [colorD, setColorD] = useState({payload: undefined});

  // const pickerCallback = message => {
  //   if (message && message.nativeEvent && message.nativeEvent.data) {
  //     console.log(message.nativeEvent.data); // response from ImageColorPicker
  //     setColorD(message.nativeEvent.data)

  //   }
  // };

  const result = 
    ImageColors.getColors({uri:props.imgData.uri}, {
    fallback: '#228B22',
    cache: true,
    })

  console.log(result)

  // switch (result.platform) {
  //   case 'android':
  //     // android result properties
  //     const vibrantColor = result.vibrant
  //     break
  //   case 'web':
  //     // web result properties
  //     const lightVibrantColor = result.lightVibrant
  //     break
  //   case 'ios':
  //     // iOS result properties
  //     const primaryColor = result.primary
  //     break
  //   default:
  //     throw new Error('Unexpected platform key')
  // }

  return (
    <View>
      <Image source={canvasHtml(props.imgData.base64,options)} style = {{ width: 200, height: 200 }}/>
      {/* <Canvas id={'canvas'}></Canvas> */}
    </View>
    // <>
    //   <WebView
    //     source={{ html: canvasHtml(props.imgData.base64, options) }}
    //     javaScriptEnabled={true}
    //     onMessage={event => { pickerCallback(event) }}

    //   />
      // {/* <View >
      //   { colorD.payload != undefined ?
      //     <>
      //       <Text style={{
      //         color: `${colorD.payload[0]['0']},${colorD.payload[0]['1']},${colorD.payload[0]['2']}`,
      //         fontWeight: 'bold',
      //         fontSize: 30
      //       }}>First Color</Text>
      //       <Text style={styles.s}>Second Color</Text>
      //       <Text style={styles.t}>Third Color</Text>
      //     </>
      //    : "" }
      // </View> */}
    // </>




  )
}


